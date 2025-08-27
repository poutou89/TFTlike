<?php
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'team_hero')]
#[ORM\UniqueConstraint(name: 'uniq_team_hero', columns: ['team_id','hero_id'])]
class TeamHero
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column] private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Team::class, inversedBy: 'members')]
    #[ORM\JoinColumn(name: 'team_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private ?Team $team = null;

    #[ORM\ManyToOne(targetEntity: Hero::class, inversedBy: 'teamLinks')]
    #[ORM\JoinColumn(name: 'hero_id', referencedColumnName: 'id', nullable: false)]
    private ?Hero $hero = null;

    public function getId(): ?int { return $this->id; }
    public function getTeam(): ?Team { return $this->team; }
    public function setTeam(Team $t): self { $this->team = $t; return $this; }
    public function getHero(): ?Hero { return $this->hero; }
    public function setHero(Hero $h): self { $this->hero = $h; return $this; }
}