<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\Team;

#[ORM\Entity]
#[ORM\Table(name: 'game_match')]
class GameMatch
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 32, options: ['default' => 'pending'])]
    private string $status = 'pending';

    #[ORM\Column(length: 64, nullable: true)]
    private ?string $region = null;

    #[ORM\Column(length: 16, options: ['default' => '1v1'])]
    private string $mode = '1v1';

    #[ORM\Column(name: 'game_version', length: 64, nullable: true)]
    private ?string $gameVersion = null;

    #[ORM\Column(type: 'integer', nullable: true)]
    private ?int $seed = null;

    #[ORM\Column(type: 'string', length: 1, nullable: true)]
    private ?string $winnerSlot = null; // 'A' | 'B' | 'D'

    /** @var Collection<int, MatchParticipant> */
    #[ORM\OneToMany(mappedBy: 'match', targetEntity: MatchParticipant::class, cascade: ['persist','remove'], orphanRemoval: true)]
    private Collection $participants;

    #[ORM\Column(type: 'datetime_immutable', options: ['default' => 'CURRENT_TIMESTAMP'])]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $startedAt = null;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $finishedAt = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $replay = null;

    // 'ally' | 'enemy' | 'draw'
    #[ORM\Column(type: 'string', length: 10, nullable: true)]
    private ?string $winner = null;

    #[ORM\OneToMany(mappedBy: 'gameMatch', targetEntity: Team::class, cascade: ['persist'], orphanRemoval: false)]
    private Collection $teams;
    public function __construct()
    {
        $this->createdAt    = new \DateTimeImmutable();
        $this->participants = new ArrayCollection();
        $this->teams        = new ArrayCollection();
    }
    /** @return Collection<int, Team> */
    public function getTeams(): Collection
    {
        return $this->teams;
    }

    public function addTeam(Team $team): self
    {
        if (!$this->teams->contains($team)) {
            $this->teams->add($team);
            $team->setGameMatch($this);
        }
        return $this;
    }

    public function removeTeam(Team $team): self
    {
        if ($this->teams->removeElement($team)) {
            if ($team->getGameMatch() === $this) {
                $team->setGameMatch(null);
            }
        }
        return $this;
    }
    // --- getters/setters essentiels ---
    public function getId(): ?int { return $this->id; }

    public function getStatus(): string { return $this->status; }
    public function setStatus(string $s): self { $this->status = $s; return $this; }

    public function getRegion(): ?string { return $this->region; }
    public function setRegion(?string $r): self { $this->region = $r; return $this; }

    public function getMode(): string { return $this->mode; }
    public function setMode(string $m): self { $this->mode = $m; return $this; }

    public function getGameVersion(): ?string { return $this->gameVersion; }
    public function setGameVersion(?string $v): self { $this->gameVersion = $v; return $this; }

    public function getSeed(): ?int { return $this->seed; }
    public function setSeed(?int $seed): self { $this->seed = $seed; return $this; }

    public function getWinnerSlot(): ?string { return $this->winnerSlot; }
    public function setWinnerSlot(?string $w): self { $this->winnerSlot = $w; return $this; }

    /** @return Collection<int, MatchParticipant> */
    public function getParticipants(): Collection { return $this->participants; }

    public function addParticipant(MatchParticipant $p): self
    {
        if (!$this->participants->contains($p)) {
            $this->participants->add($p);
            $p->setMatch($this);
        }
        return $this;
    }

    public function removeParticipant(MatchParticipant $p): self
    {
        if ($this->participants->removeElement($p) && $p->getMatch() === $this) {
            $p->setMatch(null);
        }
        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\DateTimeImmutable $d): self { $this->createdAt = $d; return $this; }

    public function getStartedAt(): ?\DateTimeImmutable { return $this->startedAt; }
    public function setStartedAt(?\DateTimeImmutable $d): self { $this->startedAt = $d; return $this; }

    public function getFinishedAt(): ?\DateTimeImmutable { return $this->finishedAt; }
    public function setFinishedAt(?\DateTimeImmutable $d): self { $this->finishedAt = $d; return $this; }

    public function getReplay(): ?array { return $this->replay; }
    public function setReplay(?array $replay): self { $this->replay = $replay; return $this; }

    public function getWinner(): ?string { return $this->winner; }
    public function setWinner(?string $winner): self { $this->winner = $winner; return $this; }
}
