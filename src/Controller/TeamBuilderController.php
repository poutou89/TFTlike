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

        // Héroïnes "possédées" via Teams
        $heroes = $heroRepo->findOwnedByUserViaTeams($user);

        // 🔁 Fallback : si l’utilisateur en a < 4, on propose tout le catalogue
        if (count($heroes) < 4) {
            $heroes = $heroRepo->findAll();
        }

        // Normalisation (format attendu par ton JS)
        $ownedGirls = array_map([$this, 'normalizeHeroForClient'], $heroes);

        return $this->render('team/builder.html.twig', [
            'owned_girls' => $ownedGirls,
        ]);
    }

    #[Route('/matchmaking/start', name: 'matchmaking_start', methods: ['POST'])]
    public function start(): Response
    {
        return $this->json(['ok' => true]);
    }

    private function normalizeHeroForClient(Hero $h): array
    {
        // Image : garantir une URL web (sous /public)
        $img = (string) $h->getPicture();
        if ($img === '') {
            $img = '/images/placeholders/hero.png'; // crée ce fichier si besoin
        } elseif ($img[0] !== '/') {
            $img = '/'.$img; // ex: "images/mg/rhea.png" -> "/images/mg/rhea.png"
        }

        return [
            'id'          => $h->getId(),
            'name'        => $h->getNom(),
            'class'       => $this->mapRoleToUnitClass($h),   // dps_melee | dps_ranged | tank | healer
            'family'      => $h->getFamily() ?? ($h->getFamilyId()?->getNom() ?? ''),

            // int 0..100 -> décimal 0..1 pour le front
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
        $role = $h->getRole();
        // supporte getNom() ou getName() selon ton entité Role
        $label = $role?->getNom() ?? $role?->getNom() ?? '';
        $label = mb_strtolower(trim($label));

        return match (true) {
            str_contains($label, 'corps') || str_contains($label, 'cac') || $label === 'dps_melee'   => 'dps_melee',
            str_contains($label, 'distance') || str_contains($label, 'ranged') || $label === 'dps_ranged' => 'dps_ranged',
            str_contains($label, 'tank') => 'tank',
            str_contains($label, 'heal') || str_contains($label, 'soin') => 'healer',
            default => 'dps_ranged',
        };
    }
}
