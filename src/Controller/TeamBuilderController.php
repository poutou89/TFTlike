<?php

namespace App\Controller;

use App\Entity\Hero;
use App\Repository\HeroRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use App\Service\ItemCatalog;

class TeamBuilderController extends AbstractController
{
    #[Route('/team', name: 'app_team_builder', methods: ['GET'])]
public function index(Request $request, HeroRepository $heroRepo): Response
{
    $user = $this->getUser();
    if (!$user) {
        return $this->redirectToRoute('app_login');
    }
    $all = $heroRepo->findAll();
    // --- héroïnes possédées / déjà dans l’équipe ---
    $owned = $heroRepo->findOwnedByUserViaTeams($user);
    $ownedIds = array_map(fn(Hero $h) => $h->getId(), $owned);

    // --- pool pour les suggestions : tous les héros (on veut que tous les users voient tout) ---
    $pool = $all;

    // --- tirage déterministe avec seed (utile pour bouton "Re-tirer") ---
    $seed = $request->query->getInt('s', 0);
    if ($seed === 0) {
        $seed = random_int(1, PHP_INT_MAX);
        // on redirige pour porter le seed dans l’URL (refresh propre)
        return $this->redirectToRoute('app_team_builder', ['s' => $seed]);
    }

    // Mélange déterministe du pool selon le seed
    $hash = fn(Hero $h) => (int) sprintf('%u', crc32($h->getId().'|'.$seed));
    usort($pool, fn(Hero $a, Hero $b) => $hash($a) <=> $hash($b));
    $picks = array_slice($pool, 0, 8); // 8 suggestions

        // rerolls persistant en session
        $session = $request->getSession();
        $left = $session->get('rerolls_left', 3);
        if (!is_int($left) || $left < 0) { $left = 3; $session->set('rerolls_left', $left); }

        return $this->render('team/builder.html.twig', [
            'owned_girls'     => array_map([$this, 'normalizeHeroForClient'], $owned),
            'suggested_girls' => array_map([$this, 'normalizeHeroForClient'], $picks),
            'seed'            => $seed,
            'rerolls_left'    => $left,
            'items'           => ItemCatalog::list(),
        ]);
    }

    #[Route('/team/reroll', name: 'app_team_reroll_dec', methods: ['POST'])]
    public function decrementReroll(Request $request): JsonResponse
    {
        $session = $request->getSession();
        $left = (int) $session->get('rerolls_left', 3);
        if ($left > 0) { $left--; $session->set('rerolls_left', $left); }
        return $this->json(['left' => $left]);
    }

    private function normalizeHeroForClient(Hero $h): array
    {
        $img = $this->resolveImagePath($h->getPicture());

        return [
            'id'          => $h->getId(),
            'name'        => $h->getNom(),
            'class'       => $this->mapRoleToUnitClass($h),
            'family'      => $h->getFamily() ?? ($h->getFamilyId()?->getNom() ?? ''),
            'chance_crit' => ($h->getChanceCrit() ?? 0) / 100,
            'chance_esq'  => ($h->getChanceEsq() ?? 0) / 100,
            'pdv'         => $h->getPdv() ?? 0,
            'atk'         => $h->getAtk() ?? 0,
            'mana'        => $h->getMana() ?? 0,
            'shield'      => $h->getShield() ?? 0,
            'chance_atk'  => ($h->getChanceAtk() ?? 0) / 100,
            'img'         => $img,
        ];
    }

    private function mapRoleToUnitClass(Hero $h): string
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
        if ($img[0] === '/') return $img;
        if (str_starts_with($img, 'images/')) return '/'.$img;
        return '/images/mg/'.$img;
    }
}
