<?php

namespace App\Repository;

use App\Entity\Team;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class TeamRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Team::class);
    }

    /** Team éphémère en attente (sans GameMatch) */
    public function findPendingByUser(User $user): ?Team
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.user_id = :u')
            ->andWhere('t.gameMatch IS NULL')
            ->setParameter('u', $user)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
