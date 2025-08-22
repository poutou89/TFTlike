<?php
namespace App\Entity;

use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'match_queue')]
#[ORM\UniqueConstraint(name: 'uniq_mq_user_mode', columns: ['user_id','mode'])]
#[ORM\Index(columns: ['mode','region','enqueued_at'], name: 'idx_mq_mode_region_enqueued')]
class MatchQueue
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column] private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private ?User $user = null;

    #[ORM\ManyToOne(targetEntity: Team::class)]
    #[ORM\JoinColumn(name: 'team_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private ?Team $team = null;

    #[ORM\Column(length: 16)] private string $mode = '1v1';
    #[ORM\Column(length: 32, nullable: true)] private ?string $region = null;
    #[ORM\Column(type: 'integer')] private int $mmr_snapshot = 0;
    #[ORM\Column(type: 'datetime')] private \DateTime $enqueued_at;

    public function __construct() { $this->enqueued_at = new \DateTime(); }
}