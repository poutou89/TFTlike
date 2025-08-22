<?php
namespace App\Entity;

use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'match_team')]
#[ORM\UniqueConstraint(name: 'uniq_mt_side', columns: ['game_match_id','side'])]
class MatchTeam
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column] private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: GameMatch::class)]
    #[ORM\JoinColumn(name: 'game_match_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private ?GameMatch $gameMatch = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private ?User $user = null;

    #[ORM\ManyToOne(targetEntity: Team::class)]
    #[ORM\JoinColumn(name: 'team_id', referencedColumnName: 'id', nullable: true, onDelete: 'SET NULL')]
    private ?Team $team = null;

    #[ORM\Column(length: 1)] private string $side = 'A'; // 'A' ou 'B'
    #[ORM\Column(type: 'integer')] private int $mmr_before = 0;
    #[ORM\Column(type: 'integer', nullable: true)] private ?int $mmr_after = null;

    #[ORM\Column(length: 8, nullable: true)] private ?string $result = null; // win|lose|draw
    #[ORM\Column(type: 'datetime', nullable: true)] private ?\DateTime $accepted_at = null;
}