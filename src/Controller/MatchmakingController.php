<?php
namespace App\Controller;

use App\Entity\Hero;
use App\Entity\Team;
use App\Entity\GameMatch;
use App\Repository\TeamRepository;
use App\Repository\UserRepository;
use App\Repository\HeroRepository;
use Doctrine\DBAL\LockMode;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use App\Service\BattleSimulator;

#[Route('/matchmaking')]
class MatchmakingController extends AbstractController
{
    public function __construct(private BattleSimulator $sim) {}

    /**
     * Crée un ticket "queued" + tente PVP immédiat (pas de bot ici).
     */
    #[Route('/start', name: 'matchmaking_start', methods: ['POST'])]
    public function start(
        Request $request,
        EntityManagerInterface $em,
        TeamRepository $teamRepo
    ): JsonResponse {
        $user = $this->getUser();
        if (!$user) return $this->json(['error' => 'auth'], 401);

        $payload = json_decode($request->getContent(), true) ?? [];
        $lineup  = $payload['lineup'] ?? [];

        // 1) Ticket du joueur
        $team = (new Team())
            ->setUser($user)
            ->setLineup($lineup)
            ->setStatus('queued');

        // (facultatif) lier les héros pour trace/debug
        foreach ($lineup as $slot) {
            $heroId = $slot['id'] ?? $slot['hero_id'] ?? null;
            if (!$heroId) continue;
            if ($hero = $em->getRepository(Hero::class)->find((int)$heroId)) {
                $team->addHero($hero);
            }
        }
        $em->persist($team);
        $em->flush();

        // 2) Tenter un PVP tout de suite
        $em->beginTransaction();
        try {
            $opponent = $teamRepo->createQueryBuilder('t')
                ->andWhere('t.status = :q')->setParameter('q', 'queued')
                ->andWhere('t != :me')->setParameter('me', $team)
                ->andWhere('t.user != :u')->setParameter('u', $user)
                ->orderBy('t.created_at', 'ASC')
                ->setMaxResults(1)
                ->getQuery()
                ->setLockMode(LockMode::PESSIMISTIC_WRITE)
                ->getOneOrNullResult();

            if ($opponent) {
                $match = new GameMatch();
                $em->persist($match);

                $team->setGameMatch($match)->setStatus('matched');
                $opponent->setGameMatch($match)->setStatus('matched');

                // flush pour obtenir l'ID du match (utile pour la seed)
                $em->flush();
                $em->commit();

                // 3) Calculer et mémoriser un REPLAY déterministe (même des 2 côtés)
                $seed   = self::seedFor($match->getId(), $team->getId(), $opponent->getId());
                $replay = $this->sim->simulate($team, $opponent, $seed);
                $request->getSession()->set('replay_'.$match->getId(), $replay);

                return $this->json(['status' => 'matched', 'matchId' => $match->getId()]);
            }

            // pas d’adversaire : retourne queued, le front va poller /status
            $em->commit();
            return $this->json(['status' => 'queued', 'ticketId' => $team->getId()]);
        } catch (\Throwable $e) {
            $em->rollback();
            throw $e;
        }
    }

    /**
     * Polling d’état. Après 8s d’attente on crée un BOT et on match.
     */
    #[Route('/status/{ticketId}', name: 'matchmaking_status', methods: ['GET'])]
    public function status(
        int $ticketId,
        Request $request,
        TeamRepository $teamRepo,
        EntityManagerInterface $em,
        UserRepository $userRepo,
        HeroRepository $heroRepo,
        UserPasswordHasherInterface $hasher
    ): JsonResponse {
        $team = $teamRepo->find($ticketId);
        if (!$team) return $this->json(['error' => 'not_found'], 404);

        // déjà matché ?
        if ($team->getStatus() === 'matched' && $team->getGameMatch()) {
            return $this->json(['status' => 'matched', 'matchId' => $team->getGameMatch()->getId()]);
        }

        // autre statut
        if ($team->getStatus() !== 'queued') {
            return $this->json(['status' => $team->getStatus()]);
        }

        // Toujours queued -> attendre un peu avant fallback bot
        $WAIT_SECONDS = 8;
        $age = (new \DateTimeImmutable())->getTimestamp() - $team->getCreatedAt()->getTimestamp();
        if ($age < $WAIT_SECONDS) {
            return $this->json(['status' => 'queued']);
        }

        // 1) Trouver/créer l'utilisateur BOT
        $bot = $userRepo->findOneBy(['username' => 'BOT']);
        if (!$bot) {
            $bot = new \App\Entity\User();
            $bot->setUsername('BOT');
            $bot->setRoles(['ROLE_BOT']);
            $bot->setPassword($hasher->hashPassword($bot, bin2hex(random_bytes(8))));
            if (method_exists($bot, 'setHistorique')) {
                $bot->setHistorique('Compte IA');
            }
            $em->persist($bot);
            $em->flush();
        }

        // 2) Créer la team BOT (4 héros aléatoires posés à droite)
        $botTeam = (new Team())
            ->setUser($bot)
            ->setStatus('queued');

        $allHeroes = $heroRepo->findAll();
        shuffle($allHeroes);
        $picks = array_slice($allHeroes, 0, 4);
        $slots = [[6,0],[6,1],[6,2],[6,3]];
        $line  = [];
        foreach ($picks as $i => $h) {
            $botTeam->addHero($h);
            [$x,$y] = $slots[$i] ?? [6, $i % 4];
            $line[] = ['id'=>$h->getId(), 'x'=>$x, 'y'=>$y];
        }
        $botTeam->setLineup($line);
        $em->persist($botTeam);

        // 3) Match + replay déterministe
        $match = new GameMatch();
        $em->persist($match);

        $team->setGameMatch($match)->setStatus('matched');
        $botTeam->setGameMatch($match)->setStatus('matched');

        $em->flush();

        $seed   = self::seedFor($match->getId(), $team->getId(), $botTeam->getId());
        $replay = $this->sim->simulate($team, $botTeam, $seed);
        $request->getSession()->set('replay_'.$match->getId(), $replay);

        return $this->json(['status' => 'matched', 'matchId' => $match->getId()]);
    }

    #[Route('/cancel/{ticketId}', name: 'matchmaking_cancel', methods: ['POST'])]
    public function cancel(
        int $ticketId,
        EntityManagerInterface $em,
        TeamRepository $teamRepo
    ): JsonResponse {
        $team = $teamRepo->find($ticketId);
        if ($team && $team->getUser() === $this->getUser() && $team->getStatus() === 'queued') {
            $em->remove($team);
            $em->flush();
        }
        return $this->json(['ok' => true]);
    }

    /**
     * Seed stable (même résultat chez les 2 joueurs) à partir des IDs.
     */
    private static function seedFor(int $matchId, int $teamAId, int $teamBId): int
    {
        return (int) sprintf('%u', crc32($matchId . '|' . min($teamAId,$teamBId) . '|' . max($teamAId,$teamBId)));
    }
}
