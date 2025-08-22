<?php
namespace App\Entity;

use App\Entity\User;
use App\Entity\Hero;
use App\Entity\TeamHero;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\GameMatch;

#[ORM\Entity]
#[ORM\Table(name: 'team')]
class Team
{
    #[ORM\ManyToOne(inversedBy: 'teams')]
    private ?GameMatch $gameMatch = null;

    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private ?User $user = null;

    #[ORM\Column(type: 'integer')]
    private int $mmr = 1000;

    #[ORM\Column(length: 16, options: ['default' => 'idle'])]
    private string $status = 'idle';

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $lineup = null;

    #[ORM\Column(type: 'datetime_immutable', options: ['default' => 'CURRENT_TIMESTAMP'])]
    private \DateTimeImmutable $created_at;

    /** @var Collection<int, TeamHero> */
    #[ORM\OneToMany(mappedBy: 'team', targetEntity: TeamHero::class, cascade: ['persist','remove'], orphanRemoval: true)]
    private Collection $members;

    public function __construct()
    {
        $this->members    = new ArrayCollection();
        $this->created_at = new \DateTimeImmutable();
    }

    public function getId(): ?int { return $this->id; }

    public function getUser(): ?User { return $this->user; }
    public function setUser(User $user): self { $this->user = $user; return $this; }

    public function getMmr(): int { return $this->mmr; }
    public function setMmr(int $mmr): self { $this->mmr = $mmr; return $this; }

    public function getStatus(): string { return $this->status; }
    public function setStatus(string $status): self { $this->status = $status; return $this; }

    public function getLineup(): ?array { return $this->lineup; }
    public function setLineup(?array $lineup): self { $this->lineup = $lineup; return $this; }

    public function getCreatedAt(): \DateTimeImmutable { return $this->created_at; }

    /** @return Collection<int, TeamHero> */
    public function getMembers(): Collection { return $this->members; }

    /** @return Hero[] */
    public function getHeroes(): array
    {
        return array_map(fn(TeamHero $th) => $th->getHero(), $this->members->toArray());
    }

    public function hasHero(Hero $hero): bool
    {
        foreach ($this->members as $link) {
            if ($link->getHero() === $hero) {
                return true;
            }
        }
        return false;
    }

    public function addHero(Hero $hero): self
    {
        if ($this->hasHero($hero)) {
            return $this;
        }
        $link = (new TeamHero())->setTeam($this)->setHero($hero);
        $this->members->add($link);
        return $this;
    }

    public function removeHero(Hero $hero): self
    {
        foreach ($this->members as $link) {
            if ($link->getHero() === $hero) {
                $this->members->removeElement($link); // orphanRemoval=true => supprimé en DB
                break;
            }
        }
        return $this;
    }
    public function getGameMatch(): ?GameMatch
    {
        return $this->gameMatch;
    }

    public function setGameMatch(?GameMatch $gameMatch): self
    {
        $this->gameMatch = $gameMatch;
        return $this;
    }
}