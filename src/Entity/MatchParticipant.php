<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'match_participant')]
class MatchParticipant
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'participants')]
    #[ORM\JoinColumn(nullable: false)]
    private ?GameMatch $match = null;

    #[ORM\ManyToOne] private ?User $user = null; // null si vrai bot
    #[ORM\ManyToOne] private ?Team $team = null;

    #[ORM\Column(length: 1)]
    private string $slot = 'A'; // 'A' | 'B'

    #[ORM\Column(length: 10, options: ['default' => 'draw'])]
    private string $result = 'draw'; // 'win' | 'loss' | 'draw'

    #[ORM\Column(type: 'integer', nullable: true)] private ?int $mmrBefore = null;
    #[ORM\Column(type: 'integer', nullable: true)] private ?int $mmrAfter  = null;
    #[ORM\Column(type: 'integer', nullable: true)] private ?int $mmrDelta  = null;

    #[ORM\Column(type: 'boolean', options: ['default' => false])]
    private bool $isBot = false;

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $createdAt;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    // --- getters/setters ---
    public function getId(): ?int { return $this->id; }
    public function getMatch(): ?GameMatch { return $this->match; }
    public function setMatch(?GameMatch $m): self { $this->match = $m; return $this; }

    public function getUser(): ?User { return $this->user; }
    public function setUser(?User $u): self { $this->user = $u; return $this; }

    public function getTeam(): ?Team { return $this->team; }
    public function setTeam(?Team $t): self { $this->team = $t; return $this; }

    public function getSlot(): string { return $this->slot; }
    public function setSlot(string $s): self { $this->slot = $s; return $this; }

    public function getResult(): string { return $this->result; }
    public function setResult(string $r): self { $this->result = $r; return $this; }

    public function isBot(): bool { return $this->isBot; }
    public function setIsBot(bool $b): self { $this->isBot = $b; return $this; }

    public function getMmrBefore(): ?int { return $this->mmrBefore; }
    public function setMmrBefore(?int $v): self { $this->mmrBefore = $v; return $this; }

    public function getMmrAfter(): ?int { return $this->mmrAfter; }
    public function setMmrAfter(?int $v): self { $this->mmrAfter = $v; return $this; }

    public function getMmrDelta(): ?int { return $this->mmrDelta; }
    public function setMmrDelta(?int $v): self { $this->mmrDelta = $v; return $this; }

    public function getCreatedAt(): \DateTimeImmutable { return $this->createdAt; }
}
