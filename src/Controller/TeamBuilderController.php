<?php

namespace App\Controller;

use App\Entity\Hero;
use App\Repository\HeroRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class TeamBuilderController extends AbstractController
{
    #[Route('/team', name: 'app_team_builder', methods: ['GET'])]
    public function index(HeroRepository $heroRepo): Response
    {
        $user = $this->getUser();
        if (!$user) {
            return $this->redirectToRoute('app_login');
        }

        $heroes = $heroRepo->findOwnedByUserViaTeams($user);
        if (count($heroes) < 4) {
            $heroes = $heroRepo->findAll();
        }

        $ownedGirls = array_map([$this, 'normalizeHeroForClient'], $heroes);

        return $this->render('team/builder.html.twig', [
            'owned_girls' => $ownedGirls,
        ]);
    }

    // 👇 pas de route /matchmaking ici

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
        $role  = $h->getRole();
        $label = mb_strtolower(trim($role?->getNom() ?? ''));

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
        $img = trim((string) $pic);

        if ($img === '') {
            return '/images/placeholders/hero.png';
        }
        if ($img[0] === '/') {
            return $img; // déjà un chemin absolu web
        }
        if (str_starts_with($img, 'images/')) {
            return '/'.$img; // chemin relatif "images/…"
        }
        // sinon, probablement juste un nom de fichier
        return '/images/mg/'.$img;
    }
}
