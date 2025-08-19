<?php

namespace App\Entity;

use App\Repository\TeamRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TeamRepository::class)]
class Team
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?user $user_id = null;

    /**
     * @var Collection<int, hero>
     */
    #[ORM\ManyToMany(targetEntity: hero::class, inversedBy: 'teams')]
    private Collection $hero_id;

    #[ORM\ManyToOne(inversedBy: 'teams')]
    private ?GameMatch $gameMatch = null;

    public function __construct()
    {
        $this->hero_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserId(): ?user
    {
        return $this->user_id;
    }

    public function setUserId(?user $user_id): static
    {
        $this->user_id = $user_id;

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
        }

        return $this;
    }

    public function removeHeroId(hero $heroId): static
    {
        $this->hero_id->removeElement($heroId);

        return $this;
    }

    public function getGameMatch(): ?GameMatch
    {
        return $this->gameMatch;
    }

    public function setGameMatch(?GameMatch $gameMatch): static
    {
        $this->gameMatch = $gameMatch;

        return $this;
    }
}
