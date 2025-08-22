<?php
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'game_match')]
class GameMatch
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column] private ?int $id = null;

    #[ORM\Column(length: 255)] private string $status = 'pending';
    #[ORM\Column(length: 255, nullable: true)] private ?string $region = null;
    #[ORM\Column(length: 16)] private string $mode = '1v1';
    #[ORM\Column(name: 'game_version', length: 255, nullable: true)] private ?string $gameVersion = null;
    #[ORM\Column(length: 64, nullable: true)] private ?string $seed = null;

    #[ORM\Column(type: 'datetime', options: ['default' => 'CURRENT_TIMESTAMP'])]
    private \DateTime $created_at;

    #[ORM\Column(type: 'datetime', nullable: true)] private ?\DateTime $started_at = null;
    #[ORM\Column(type: 'datetime', nullable: true)] private ?\DateTime $finished_at = null;

    public function __construct() { $this->created_at = new \DateTime(); }
    public function getId(): ?int { return $this->id; }
}