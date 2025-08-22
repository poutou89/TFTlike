<?php

namespace App\Controller;

use App\Entity\GameMatch;
use App\Entity\Hero;
use App\Entity\Team;
use App\Repository\HeroRepository;
use App\Repository\TeamRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Service\BattleSimulator;
use Symfony\Component\HttpFoundation\Request;

#[Route('/match')]
class MatchController extends AbstractController
{
    public function __construct(private BattleSimulator $sim) {}
    #[Route('/{id}', name: 'app_match_show', methods: ['GET'])]
public function show(
    int $id,
    Request $request,
    EntityManagerInterface $em,
    TeamRepository $teamRepo,
    HeroRepository $heroRepo
): Response {
    $match = $em->getRepository(GameMatch::class)->find($id);
    if (!$match) {
        $this->addFlash('error', 'Match introuvable');
        return $this->redirectToRoute('app_team_builder');
    }

    $teams = $teamRepo->findBy(['gameMatch' => $match], ['id' => 'ASC']);

    $user = $this->getUser();
    $allyTeam = null; $enemyTeam = null;
    foreach ($teams as $t) {
        if ($user && $t->getUser() === $user) $allyTeam = $t;
        else                                  $enemyTeam = $t;
    }
    if (!$allyTeam && $teams) $allyTeam = $teams[0];

    $allies  = $allyTeam  ? $this->packFromLineup($allyTeam,  $heroRepo) : [];
    $enemies = $enemyTeam ? $this->packFromLineup($enemyTeam, $heroRepo) : [];

    // ✅ session via Request (PAS via $this->container)
    $session = $request->getSession();
    $sessionReplay = $session?->get('replay_'.$match->getId());

    if ($sessionReplay) {
        $replay = $sessionReplay;
    } else {
        if (count($teams) >= 2) {
            $seed = (int) sprintf(
                '%u',
                crc32($match->getId().'|'.min($teams[0]->getId(), $teams[1]->getId()).'|'.max($teams[0]->getId(), $teams[1]->getId()))
            );
            $replay = $this->sim->simulate($teams[0], $teams[1], $seed);
        } else {
            $replay = ['seed'=>0,'initial'=>[],'actions'=>[],'winner'=>'draw'];
        }
    }

    return $this->render('match/show.html.twig', [
        'match_id' => $id,
        'allies'   => $allies,
        'enemies'  => $enemies,
        // 'replay' => $replay, // si tu veux l’exposer au front
    ]);
}

    /**
     * Construit [{id,name,img,class,family,hp,atk,shield,mana,acc,crit,dodge,x,y}, ...]
     * depuis Team::lineup (tableau de slots {id,x,y}).
     * @return array<int,array<string,mixed>>
     */
private function packFromLineup(Team $team, HeroRepository $heroRepo): array
{
    $lineup = $team->getLineup() ?? [];

    // Fallback éventuel (comme tu l'as déjà)
    if (!$lineup) {
        $heroes = method_exists($team, 'getHeroes')
            ? $team->getHeroes()
            : array_values(array_filter(array_map(
                fn($link) => method_exists($link, 'getHero') ? $link->getHero() : null,
                method_exists($team, 'getMembers') ? $team->getMembers()->toArray() : []
            )));

        if ($heroes) {
            $isAlly = $team->getUser() === $this->getUser();
            $xCol   = $isAlly ? 1 : 5;
            foreach ($heroes as $i => $h) {
                if ($h) {
                    $lineup[] = ['id' => $h->getId(), 'x' => $xCol, 'y' => $i % 4];
                }
            }
        }
    }

    // ✅ ne garder que les slots valides (tableaux avec au moins un id numérique)
    $slots = array_values(array_filter($lineup, fn($s) => is_array($s) && array_key_exists('id',$s) && is_numeric($s['id'])));


    if (!$slots) return [];

    // Charger les héros nécessaires en une requête
    $ids    = array_values(array_unique(array_map(fn($s) => (int)$s['id'], $slots)));
    $heroes = $heroRepo->findBy(['id' => $ids]);
    $byId   = [];
    foreach ($heroes as $h) $byId[$h->getId()] = $h;

    $out = [];
    foreach ($slots as $s) {
        $hid = (int)($s['id'] ?? 0);
        if (!$hid || !isset($byId[$hid])) continue;

        /** @var \App\Entity\Hero $h */
        $h   = $byId[$hid];
        $x   = (int)($s['x'] ?? 0);
        $y   = (int)($s['y'] ?? 0);
        $img = $this->resolveImagePath($h->getPicture());

        $acc   = max(0, min(100, (int)($h->getChanceAtk()  ?? 0)));
        $crit  = max(0, min(100, (int)($h->getChanceCrit() ?? 0)));
        $dodge = max(0, min(100, (int)($h->getChanceEsq()  ?? 0)));

        $out[] = [
            'id'     => $h->getId(),
            'name'   => $h->getNom(),
            'img'    => $img,
            'class'  => $this->mapRoleToClass($h),
            'family' => $h->getFamily() ?? ($h->getFamilyId()?->getNom() ?? ''),
            'hp'     => (int)($h->getPdv()    ?? 0),
            'atk'    => (int)($h->getAtk()    ?? 0),
            'shield' => (int)($h->getShield() ?? 0),
            'mana'   => (int)($h->getMana()   ?? 0),
            'acc'    => $acc,
            'crit'   => $crit,
            'dodge'  => $dodge,
            'x'      => $x,
            'y'      => $y,
        ];
    }
    return $out;
}


    private function mapRoleToClass(Hero $h): string
    {
        $label = mb_strtolower(trim($h->getRole()?->getNom() ?? ''));
        return match (true) {
            str_contains($label, 'corps') || str_contains($label, 'cac') || $label === 'dps_melee'   => 'dps_melee',
            str_contains($label, 'distance') || str_contains($label, 'ranged') || $label === 'dps_ranged' => 'dps_ranged',
            str_contains($label, 'tank') => 'tank',
            str_contains($label, 'heal') || str_contains($label, 'soin') => 'healer',
            default => 'dps_ranged',
        };
    }

    private function resolveImagePath(?string $pic): string
    {
        $img = trim((string)$pic);
        if ($img === '') return '/images/placeholders/hero.png';
        if ($img[0] === '/') return $img;               // déjà absolu
        if (str_starts_with($img, 'images/')) return '/'.$img;
        return '/images/mg/'.$img;                      // nom de fichier simple
    }
}
