<?php

namespace App\Entity;

use App\Repository\FamilyRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FamilyRepository::class)]
class Family
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    /**
     * @var Collection<int, hero>
     */
    #[ORM\OneToMany(targetEntity: hero::class, mappedBy: 'family_id')]
    private Collection $hero_id;

    public function __construct()
    {
        $this->hero_id = new ArrayCollection();
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

    /**
     * @return Collection<int, hero>
     */
    public function getHeroId(): Collection
    {
        return $this->hero_id;
    }

    public function addHeroId(hero $heroId): static
    {
        if (!$this->hero_id->contains($heroId)) {
            $this->hero_id->add($heroId);
            $heroId->setFamilyId($this);
        }

        return $this;
    }

    public function removeHeroId(hero $heroId): static
    {
        if ($this->hero_id->removeElement($heroId)) {
            // set the owning side to null (unless already changed)
            if ($heroId->getFamilyId() === $this) {
                $heroId->setFamilyId(null);
            }
        }

        return $this;
    }
}
