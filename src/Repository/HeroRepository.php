<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\Hero;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Hero>
 */

class HeroRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry) { parent::__construct($registry, Hero::class); }

    /** Tous les héros liés à AU MOINS une Team du user (sans doublons) */
    public function findOwnedByUserViaTeams(User $user): array
    {
        return $this->createQueryBuilder('h')
            ->innerJoin('h.teamLinks', 'th')   // ✅ plus 'h.teams'
            ->innerJoin('th.team', 't')       // lien via TeamHero → Team
            ->andWhere('t.user = :u')
            ->setParameter('u', $user)
            ->addSelect('th', 't')
            ->getQuery()->getResult();
    }

    /** Héros par liste d’IDs */
    public function findByIds(array $ids): array
    {
        if (!$ids) return [];
        return $this->createQueryBuilder('h')
            ->andWhere('h.id IN (:ids)')
            ->setParameter('ids', $ids)
            ->getQuery()
            ->getResult();
    }
}