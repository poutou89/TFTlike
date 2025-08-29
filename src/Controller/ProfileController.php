<?php

namespace App\Controller;

use App\Entity\Team;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/me')]
final class ProfileController extends AbstractController
{
    #[Route('/matches', name: 'me_matches', methods: ['GET'])]
    public function myMatches(EntityManagerInterface $em): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
    $me = $this->getUser();

        // Teams du joueur avec un match associé
        $rows = $em->createQueryBuilder()
            ->select('t', 'm', 'opp')
            ->from(Team::class, 't')
            ->leftJoin('t.gameMatch', 'm')
            // l’autre équipe du même match (s’il y en a une)
            ->leftJoin(Team::class, 'opp', 'WITH', 'opp.gameMatch = m AND opp != t')
            ->andWhere('t.user = :u')->setParameter('u', $this->getUser())
            ->andWhere('m IS NOT NULL')
            ->orderBy('t.id', 'DESC') // évite createdAt si tu ne l’as pas
            ->setMaxResults(50)
            ->getQuery()->getResult();

        // Deduplicate by match id (some queries can return multiple rows for the same match)
        $seen = [];
        $uniqueRows = [];
    foreach ($rows as $r) {
            // $r can be either:
            //  - an array: [0 => Team t, 'm' => Match, 'opp' => Team]
            //  - a Team entity directly (depending on hydration)
            if (is_array($r)) {
                $t = $r[0] ?? ($r['t'] ?? null);
                // Doctrine can hydrate joined entities at numeric index as well
                $m = $r['m'] ?? ($r[1] ?? null);
            } else {
                $t = $r;
                $m = ($t && method_exists($t, 'getGameMatch')) ? $t->getGameMatch() : null;
            }
            if (!$m) { continue; }
            $mid = method_exists($m, 'getId') ? $m->getId() : null;
            if ($mid === null) { continue; }
            if (isset($seen[$mid])) { continue; }
            $seen[$mid] = true;
            $uniqueRows[] = $r;
        }

        // Normalize to a consistent array shape: ['t' => Team, 'm' => GameMatch, 'opp' => ?Team]
        $normalized = [];
        foreach ($uniqueRows ?: $rows as $r) {
            if (is_array($r)) {
                $t = $r[0] ?? ($r['t'] ?? null);
                $m = $r['m'] ?? ($r[1] ?? ($t && method_exists($t, 'getGameMatch') ? $t->getGameMatch() : null));
                $opp = $r['opp'] ?? null;
            } else {
                $t = $r;
                $m = ($t && method_exists($t, 'getGameMatch')) ? $t->getGameMatch() : null;
                $opp = null;
            }
            // compute opponent if missing and we have the match
            if (!$opp && $m && method_exists($m, 'getTeams') && $t && method_exists($t, 'getId')) {
                foreach ($m->getTeams() as $team) {
                    if ($team->getId() !== $t->getId()) { $opp = $team; break; }
                }
            }
            // derive opponent name preferring participants (reliable when no Team created for bot)
            $oppName = null;
            if ($m && method_exists($m, 'getParticipants')) {
                foreach ($m->getParticipants() as $p) {
                    $u = method_exists($p, 'getUser') ? $p->getUser() : null;
                    if ($u && $me && method_exists($u, 'getId') && $u->getId() === $me->getId()) {
                        continue; // skip self
                    }
                    if ($u && method_exists($u, 'getUsername')) { $oppName = $u->getUsername(); break; }
                    if (method_exists($p, 'isBot') && $p->isBot()) { $oppName = 'BOT'; break; }
                }
            }
            if (!$oppName && $opp && method_exists($opp, 'getUser')) {
                $ou = $opp->getUser();
                if ($ou && method_exists($ou, 'getUsername')) { $oppName = $ou->getUsername(); }
            }
            if ($t && $m) {
                $normalized[] = ['t' => $t, 'm' => $m, 'opp' => $opp, 'oppName' => $oppName];
            }
        }

        return $this->render('profile/matches.html.twig', [
            'rows' => $normalized, // t(ta team), m(le match), opp(l’adversaire si présent) normalisés & sans doublon
        ]);
    }
}
