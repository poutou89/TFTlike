<?php

namespace App\Entity;

use App\Repository\HeroRepository;
use App\Entity\Role;
use App\Entity\Family;
use App\Entity\Team;
use App\Entity\TeamHero;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: HeroRepository::class)]
#[ORM\Table(name: 'hero')]
class Hero
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column]
    #[Assert\Range(min: 0, max: 100)]
    private ?int $pdv = null;

    #[ORM\Column]
    #[Assert\Range(min: 0, max: 100)]
    private ?int $atk = null;

    #[ORM\Column]
    #[Assert\Range(min: 0, max: 100)]
    private ?int $mana = null;

    #[ORM\Column]
    #[Assert\Range(min: 0, max: 100)]
    private ?int $shield = null;

    #[ORM\Column]
    #[Assert\Range(min: 0, max: 100)]
    private ?int $chance_atk = null;

    #[ORM\Column(length: 255)]
    private ?string $picture = null;

    #[ORM\ManyToOne(targetEntity: Role::class)]
    #[ORM\JoinColumn(name: 'role_id', referencedColumnName: 'id', nullable: true)]
    private ?Role $role = null;

    /**
     * Lien Team ↔ Hero via table de jonction `team_hero`
     * (on évite ManyToMany direct pour mieux contrôler).
     *
     * @var Collection<int, TeamHero>
     */
    #[ORM\OneToMany(mappedBy: 'hero', targetEntity: TeamHero::class)]
    private Collection $teamLinks;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $family = null;

    // IMPORTANT : la colonne réelle en base est `family_id_id`
    #[ORM\ManyToOne(targetEntity: Family::class, inversedBy: 'hero_id')]
    #[ORM\JoinColumn(name: 'family_id_id', referencedColumnName: 'id', nullable: true)]
    private ?Family $family_id = null;

    #[ORM\Column]
    private ?int $chance_crit = null;

    #[ORM\Column]
    private ?int $chance_esq = null;

    public function __construct()
    {
        $this->teamLinks = new ArrayCollection();
    }

    public function getId(): ?int { return $this->id; }

    public function getNom(): ?string { return $this->nom; }
    public function setNom(string $nom): self { $this->nom = $nom; return $this; }

    public function getPdv(): ?int { return $this->pdv; }
    public function setPdv(int $pdv): self { $this->pdv = $pdv; return $this; }

    public function getAtk(): ?int { return $this->atk; }
    public function setAtk(int $atk): self { $this->atk = $atk; return $this; }

    public function getMana(): ?int { return $this->mana; }
    public function setMana(int $mana): self { $this->mana = $mana; return $this; }

    public function getShield(): ?int { return $this->shield; }
    public function setShield(int $shield): self { $this->shield = $shield; return $this; }

    public function getChanceAtk(): ?int { return $this->chance_atk; }
    public function setChanceAtk(int $chance_atk): self { $this->chance_atk = $chance_atk; return $this; }

    public function getPicture(): ?string { return $this->picture; }
    public function setPicture(string $picture): self { $this->picture = $picture; return $this; }

    public function getRole(): ?Role { return $this->role; }
    public function setRole(?Role $role): self { $this->role = $role; return $this; }

    /** @return Collection<int, TeamHero> */
    public function getTeamLinks(): Collection { return $this->teamLinks; }

    /** @return Collection<int, Team> (dérivé, lecture seule) */
    public function getTeams(): Collection
    {
        return new ArrayCollection(
            array_map(fn(TeamHero $th) => $th->getTeam(), $this->teamLinks->toArray())
        );
    }

    public function addTeam(Team $team): self
    {
        $team->addHero($this); // délégation au helper côté Team
        return $this;
    }

    public function removeTeam(Team $team): self
    {
        $team->removeHero($this);
        return $this;
    }

    public function getFamily(): ?string { return $this->family; }
    public function setFamily(?string $family): self { $this->family = $family; return $this; }

    public function getFamilyId(): ?Family { return $this->family_id; }
    public function setFamilyId(?Family $family_id): self { $this->family_id = $family_id; return $this; }

    public function getChanceCrit(): ?int { return $this->chance_crit; }
    public function setChanceCrit(int $chance_crit): self { $this->chance_crit = $chance_crit; return $this; }

    public function getChanceEsq(): ?int { return $this->chance_esq; }
    public function setChanceEsq(int $chance_esq): self { $this->chance_esq = $chance_esq; return $this; }
}
