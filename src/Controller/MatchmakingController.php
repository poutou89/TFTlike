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

#[Route('/matchmaking')]
class MatchmakingController extends AbstractController
{
    #[Route('/start', name: 'matchmaking_start', methods: ['POST'])]
    public function start(
        Request $request,
        EntityManagerInterface $em,
        TeamRepository $teamRepo,
        HeroRepository $heroRepo,
        UserRepository $userRepo,
        UserPasswordHasherInterface $hasher
    ): JsonResponse {
        $user = $this->getUser();
        if (!$user) return $this->json(['error' => 'auth'], 401);

        $payload = json_decode($request->getContent(), true) ?? [];
        $lineup  = $payload['lineup'] ?? [];

        // Ticket du joueur
        $team = (new Team())
            ->setUser($user)
            ->setLineup($lineup)
            ->setStatus('queued');

        foreach ($lineup as $slot) {
            $heroId = $slot['id'] ?? $slot['hero_id'] ?? null;
            if (!$heroId) continue;
            if ($hero = $em->getRepository(Hero::class)->find((int)$heroId)) {
                $team->addHero($hero);
            }
        }
        $em->persist($team);
        $em->flush();

        // Cherche un adversaire
        $em->beginTransaction();
        try {
            $qb = $teamRepo->createQueryBuilder('t')
                ->andWhere('t.status = :q')->setParameter('q', 'queued')
                ->andWhere('t != :me')->setParameter('me', $team)
                ->andWhere('t.user != :u')->setParameter('u', $user)
                ->orderBy('t.created_at', 'ASC')
                ->setMaxResults(1);

            $opponent = $qb->getQuery()
                ->setLockMode(LockMode::PESSIMISTIC_WRITE)
                ->getOneOrNullResult();

            if ($opponent) {
                $match = new GameMatch();
                $em->persist($match);
                $team->setGameMatch($match)->setStatus('matched');
                $opponent->setGameMatch($match)->setStatus('matched');
                $em->flush();
                $em->commit();

                return $this->json(['status' => 'matched', 'matchId' => $match->getId()]);
            }

            // BOT immédiat si aucun adversaire
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

            $botTeam = (new Team())
                ->setUser($bot)
                ->setStatus('queued');

            $allHeroes = $heroRepo->findAll();
            shuffle($allHeroes);
            $picks = array_slice($allHeroes, 0, 4);
            $slots = [[6,0],[6,1],[6,2],[6,3]];
            $botLineup = [];
            foreach ($picks as $i => $h) {
                [$x,$y] = $slots[$i] ?? [6, $i%4];
                $botTeam->addHero($h);
                $botLineup[] = ['id'=>$h->getId(),'x'=>$x,'y'=>$y];
            }
            $botTeam->setLineup($botLineup);
            $em->persist($botTeam);

            $match = new GameMatch();
            $em->persist($match);
            $team->setGameMatch($match)->setStatus('matched');
            $botTeam->setGameMatch($match)->setStatus('matched');

            $em->flush();
            $em->commit();

            return $this->json(['status' => 'matched', 'matchId' => $match->getId()]);
        } catch (\Throwable $e) {
            $em->rollback();
            throw $e;
        }
    }

    #[Route('/status/{ticketId}', name: 'matchmaking_status', methods: ['GET'])]
    public function status(int $ticketId, TeamRepository $teamRepo): JsonResponse
    {
        $team = $teamRepo->find($ticketId);
        if (!$team) return $this->json(['error' => 'not_found'], 404);

        if ($team->getStatus() === 'matched' && $team->getGameMatch()) {
            return $this->json(['status' => 'matched', 'matchId' => $team->getGameMatch()->getId()]);
        }
        return $this->json(['status' => $team->getStatus()]);
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
}
