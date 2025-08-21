<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\HeroRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: HeroRepository::class)]
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

    #[ORM\ManyToOne(inversedBy: 'id')]
    private ?Role $role = null;

    /**
     * @var Collection<int, Team>
     */
    #[ORM\ManyToMany(targetEntity: Team::class, mappedBy: 'hero_id')]
    private Collection $teams;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $family = null;

    #[ORM\ManyToOne(inversedBy: 'hero_id')]
    private ?Family $family_id = null;

    #[ORM\Column]
    private ?int $chance_crit = null;

    #[ORM\Column]
    private ?int $chance_esq = null;

    public function __construct()
    {
        $this->teams = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPdv(): ?int
    {
        return $this->pdv;
    }

    public function setPdv(int $pdv): static
    {
        $this->pdv = $pdv;

        return $this;
    }

    public function getAtk(): ?int
    {
        return $this->atk;
    }

    public function setAtk(int $atk): static
    {
        $this->atk = $atk;

        return $this;
    }

    public function getMana(): ?int
    {
        return $this->mana;
    }

    public function setMana(int $mana): static
    {
        $this->mana = $mana;

        return $this;
    }

    public function getShield(): ?int
    {
        return $this->shield;
    }

    public function setShield(int $shield): static
    {
        $this->shield = $shield;

        return $this;
    }

    public function getChanceAtk(): ?int
    {
        return $this->chance_atk;
    }

    public function setChanceAtk(int $chance_atk): static
    {
        $this->chance_atk = $chance_atk;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): static
    {
        $this->picture = $picture;

        return $this;
    }

    public function getRole(): ?Role
    {
        return $this->role;
    }

    public function setRole(?Role $role): static
    {
        $this->role = $role;

        return $this;
    }

    /**
     * @return Collection<int, Team>
     */
    public function getTeams(): Collection
    {
        return $this->teams;
    }

    public function addTeam(Team $team): static
    {
        if (!$this->teams->contains($team)) {
            $this->teams->add($team);
            $team->addHeroId($this);
        }

        return $this;
    }

    public function removeTeam(Team $team): static
    {
        if ($this->teams->removeElement($team)) {
            $team->removeHeroId($this);
        }

        return $this;
    }

    public function getFamily(): ?string
    {
        return $this->family;
    }

    public function setFamily(?string $family): static
    {
        $this->family = $family;

        return $this;
    }

    public function getFamilyId(): ?Family
    {
        return $this->family_id;
    }

    public function setFamilyId(?Family $family_id): static
    {
        $this->family_id = $family_id;

        return $this;
    }

    public function getChanceCrit(): ?int
    {
        return $this->chance_crit;
    }

    public function setChanceCrit(int $chance_crit): static
    {
        $this->chance_crit = $chance_crit;

        return $this;
    }

    public function getChanceEsq(): ?int
    {
        return $this->chance_esq;
    }

    public function setChanceEsq(int $chance_esq): static
    {
        $this->chance_esq = $chance_esq;

        return $this;
    }
}
