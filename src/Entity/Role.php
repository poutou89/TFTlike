<?php

namespace App\Entity;

use App\Repository\RoleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RoleRepository::class)]
class Role
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    public function __construct()
    {
        $this->id = new ArrayCollection();
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

    public function addId(hero $id): static
    {
        if (!$this->id->contains($id)) {
            $this->id->add($id);
            $id->setRole($this);
        }

        return $this;
    }

    public function removeId(hero $id): static
    {
        if ($this->id->removeElement($id)) {
            // set the owning side to null (unless already changed)
            if ($id->getRole() === $this) {
                $id->setRole(null);
            }
        }

        return $this;
    }
}
