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

        return $this->render('profile/matches.html.twig', [
            'rows' => $rows, // chaque ligne contient t(ta team), m(le match), opp(l’adversaire si présent)
        ]);
    }
}
