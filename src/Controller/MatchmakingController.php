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
use App\Service\RatingService;

#[Route('/matchmaking')]
class MatchmakingController extends AbstractController
{
    public function __construct(private BattleSimulator $sim ,private RatingService $rating) {}

    #[Route('/start', name: 'matchmaking_start', methods: ['POST'])]
    public function start(Request $request, EntityManagerInterface $em, TeamRepository $teamRepo): JsonResponse
    {
        $user = $this->getUser();
        if (!$user) return $this->json(['error' => 'auth'], 401);

        $payload = json_decode($request->getContent(), true) ?? [];
        $lineup  = $payload['lineup'] ?? [];

        $team = (new Team())
            ->setUser($user)
            ->setLineup($lineup)
            ->setStatus('queued');

    foreach ($lineup as $slot) {
            $heroId = $slot['id'] ?? $slot['hero_id'] ?? null;
            if ($heroId && ($hero = $em->getRepository(Hero::class)->find((int)$heroId))) {
                $team->addHero($hero);
            }
        }
    $em->persist($team);
        $em->flush();

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
                $em->flush();

                // After a successful match creation, reset rerolls so user can reroll again next time
                $request->getSession()->set('rerolls_left', 3);
                $em->commit();

                // REPLAY déterministe et stockage
                $seed   = self::seedFor($match->getId(), $team->getId(), $opponent->getId());
                $replay = $this->sim->simulate($team, $opponent, $seed);

                // si tu as ajouté ces setters sur GameMatch :
                if (method_exists($match, 'setSeed'))   $match->setSeed($seed);
                if (method_exists($match, 'setReplay')) $match->setReplay($replay);
                if (method_exists($match, 'setWinner')) $match->setWinner($replay['winner'] ?? null);
                if (method_exists($match, 'setFinishedAt')) $match->setFinishedAt(new \DateTimeImmutable());
                $em->flush();

                // pour l’affichage immédiat du viewer courant (facultatif)
                $request->getSession()->set('replay_'.$match->getId(), $replay);

                    // ----- MMR (après génération du replay) -----
                $teamA = $team;                // ta team
                $teamB = $opponent;            // l'adversaire

                $userA = $teamA->getUser();
                $userB = $teamB->getUser();

                $ra = $userA?->getMmr() ?? 1000;
                $rb = $userB?->getMmr() ?? 1000;

                // scoreA dépend du winner du REPLAY (ici 'ally' = ta team $team)
                $scoreA = match ($replay['winner'] ?? 'draw') {
                    'ally'  => 1.0,
                    'enemy' => 0.0,
                    default => 0.5,
                };

                $kA = $userA ? $this->rating->kFactor($userA, $userB?->getUsername()==='BOT') : 0;
                $kB = $userB ? $this->rating->kFactor($userB, $userA?->getUsername()==='BOT') : 0;

                ['a' => $dA, 'b' => $dB] = $this->rating->delta($ra, $rb, $scoreA, $kA, $kB);

                if ($userA && $userA->getUsername() !== 'BOT') {
                    $userA->setMmr($this->rating->clampMmr($ra + $dA));
                    $userA->setGamesPlayed($userA->getGamesPlayed() + 1);
                }
                if ($userB && $userB->getUsername() !== 'BOT') {
                    $userB->setMmr($this->rating->clampMmr($rb + $dB));
                    $userB->setGamesPlayed($userB->getGamesPlayed() + 1);
                }
                // --------------------------------------------

                // (optionnel) stocke seed/replay sur l'entité GameMatch
                $match
                    ->setSeed($seed)
                    ->setReplay($replay)
                    ->setWinner($replay['winner'] ?? null)
                    ->setFinishedAt(new \DateTimeImmutable());

                // si tu veux aussi le garder en session pour la vue
                $request->getSession()->set('replay_'.$match->getId(), $replay);

                $em->flush();

                // After matching vs real opponent, next time builder opens, use a fresh seed
                $request->getSession()->set('tb_require_new_seed', true);
                return $this->json(['status' => 'matched', 'matchId' => $match->getId()]);
            }

            $em->commit();
            return $this->json(['status' => 'queued', 'ticketId' => $team->getId()]);
        } catch (\Throwable $e) {
            $em->rollback();
            throw $e;
        }
    }

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

        if ($team->getStatus() === 'matched' && $team->getGameMatch()) {
            return $this->json(['status' => 'matched', 'matchId' => $team->getGameMatch()->getId()]);
        }
        if ($team->getStatus() !== 'queued') {
            return $this->json(['status' => $team->getStatus()]);
        }

        $WAIT_SECONDS = 8;
        $age = (new \DateTimeImmutable())->getTimestamp() - $team->getCreatedAt()->getTimestamp();
        if ($age < $WAIT_SECONDS) {
            return $this->json(['status' => 'queued']);
        }

        // crée le BOT si besoin
        $bot = $userRepo->findOneBy(['username' => 'BOT']);
        if (!$bot) {
            $bot = new \App\Entity\User();
            $bot->setUsername('BOT');
            $bot->setRoles(['ROLE_BOT']);
            $bot->setPassword($hasher->hashPassword($bot, bin2hex(random_bytes(8))));
            if (method_exists($bot, 'setHistorique')) $bot->setHistorique('Compte IA');
            $em->persist($bot);
            $em->flush();
        }

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
            $line[] = ['id'=>$h->getId(),'x'=>$x,'y'=>$y];
        }
        $botTeam->setLineup($line);
        $em->persist($botTeam);

        $match = new GameMatch();
        $em->persist($match);

        $team->setGameMatch($match)->setStatus('matched');
        $botTeam->setGameMatch($match)->setStatus('matched');
    $em->flush();

    // Matched vs BOT: also reset rerolls for next builder visit
    $request->getSession()->set('rerolls_left', 3);

    $seed   = self::seedFor($match->getId(), $team->getId(), $botTeam->getId());
    $replay = $this->sim->simulate($team, $botTeam, $seed);

        if (method_exists($match, 'setSeed'))   $match->setSeed($seed);
        if (method_exists($match, 'setReplay')) $match->setReplay($replay);
        if (method_exists($match, 'setWinner')) $match->setWinner($replay['winner'] ?? null);
        if (method_exists($match, 'setFinishedAt')) $match->setFinishedAt(new \DateTimeImmutable());
    $em->flush();

        $request->getSession()->set('replay_'.$match->getId(), $replay);

        // ----- MMR vs BOT (après génération du replay) -----
        $teamA = $team;                // user team (ally in replay)
        $teamB = $botTeam;             // bot team (enemy)

        $userA = $teamA->getUser();
        $userB = $teamB->getUser();    // BOT

        $ra = $userA?->getMmr() ?? 1000;
        $rb = $userB?->getMmr() ?? 1000;

        $scoreA = match ($replay['winner'] ?? 'draw') {
            'ally'  => 1.0,
            'enemy' => 0.0,
            default => 0.5,
        };

        $kA = $userA ? $this->rating->kFactor($userA, true) : 0; // vsBot = true
        $kB = $userB ? $this->rating->kFactor($userB, false) : 0; // BOT value unused

        ['a' => $dA] = $this->rating->delta($ra, $rb, $scoreA, $kA, $kB);

        if ($userA && $userA->getUsername() !== 'BOT') {
            $userA->setMmr($this->rating->clampMmr($ra + $dA));
            $userA->setGamesPlayed($userA->getGamesPlayed() + 1);
        }
        // ne pas modifier le MMR du BOT
        $em->flush();
    // --------------------------------------------

    // After BOT match, also enforce a fresh seed on next builder visit
    $request->getSession()->set('tb_require_new_seed', true);

    return $this->json(['status' => 'matched', 'matchId' => $match->getId()]);
    }

    #[Route('/cancel/{ticketId}', name: 'matchmaking_cancel', methods: ['POST'])]
    public function cancel(int $ticketId, EntityManagerInterface $em, TeamRepository $teamRepo): JsonResponse
    {
        $team = $teamRepo->find($ticketId);
        if ($team && $team->getUser() === $this->getUser() && $team->getStatus() === 'queued') {
            $em->remove($team);
            $em->flush();
        }
        return $this->json(['ok' => true]);
    }

    private static function seedFor(int $matchId, int $teamAId, int $teamBId): int
    {
        return (int) sprintf('%u', crc32($matchId.'|'.min($teamAId,$teamBId).'|'.max($teamAId,$teamBId)));
    }
}
