<?php

namespace App\Controller;

use App\Entity\GameMatch;
use App\Entity\Hero;
use App\Entity\Team;
use App\Repository\HeroRepository;
use App\Repository\TeamRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Service\BattleSimulator;

#[Route('/match')]
final class MatchController extends AbstractController
{
    public function __construct(private BattleSimulator $sim) {}

    #[Route('/{id}', name: 'app_match_show', methods: ['GET'])]
    public function show(
        int $id,
        Request $request,
        EntityManagerInterface $em,
        TeamRepository $teamRepo,
        HeroRepository $heroRepo
    ): Response {
        /** @var GameMatch|null $match */
        $match = $em->getRepository(GameMatch::class)->find($id);
        if (!$match) {
            $this->addFlash('error', 'Match introuvable');
            return $this->redirectToRoute('app_team_builder');
        }

        // --- Récupère les 2 équipes liées au match ---
        $teams = $teamRepo->findBy(['gameMatch' => $match], ['id' => 'ASC']);

        // Détermine ally/enemy par rapport à l'utilisateur courant
        $user     = $this->getUser();
        $allyTeam = null;
        $enemyTeam = null;

        foreach ($teams as $t) {
            if ($user && $t->getUser() === $user) {
                $allyTeam = $t;
            } else {
                $enemyTeam = $t;
            }
        }
        // Si on ne sait pas, prend l’ordre naturel
        if (!$allyTeam && isset($teams[0])) $allyTeam = $teams[0] ?? null;
        if (!$enemyTeam && isset($teams[1])) $enemyTeam = $teams[1] ?? null;

        // Données "HUD" pour le template
        $allies  = $allyTeam  ? $this->packFromLineup($allyTeam,  $heroRepo) : [];
        $enemies = $enemyTeam ? $this->packFromLineup($enemyTeam, $heroRepo) : [];

        // --- Récupération/sécurisation du REPLAY ---
        $session = $request->getSession();
        $replay  = $session?->get('replay_'.$match->getId());

        $isInvalid = static function ($r): bool {
            if (!is_array($r)) return true;
            if (!isset($r['initial']) || !is_array($r['initial'])) return true;
            return false;
        };

        // Si la session est vide/invalide → tente la BDD
        if ($isInvalid($replay)) {
            $dbReplay = $match->getReplay();
            if (!$isInvalid($dbReplay)) {
                $replay = $dbReplay;
            }
        }

        // Si toujours rien et qu’on a bien 2 équipes → (re)simule
        if ($isInvalid($replay) && $allyTeam && $enemyTeam) {
            $ids  = [$allyTeam->getId(), $enemyTeam->getId()];
            sort($ids);
            $seed   = (int) sprintf('%u', crc32('m:'.$match->getId().';t:'.$ids[0].','.$ids[1]));
            $replay = $this->sim->simulate($allyTeam, $enemyTeam, $seed);

            // (optionnel) persiste côté BDD pour rechargements futurs
            // $match->setSeed($seed)->setReplay($replay);
            // $em->flush();

            // met en session
            $session?->set('replay_'.$match->getId(), $replay);
        }

        // Fallback minimal pour éviter tout warning
        if ($isInvalid($replay)) {
            $replay = [
                'seed'    => 0,
                'initial' => [],
                'actions' => [],
                'winner'  => 'draw',
            ];
        }

        // --- Normalisation : assure 'teams' quoi qu’il arrive (utile si ton front l’attend ailleurs) ---
        if (!isset($replay['teams'])) {
            $init = $replay['initial'] ?? [];
            $replay['teams'] = [
                'ally'  => array_values(array_filter($init, fn($u) => ($u['team'] ?? '') === 'ally')),
                'enemy' => array_values(array_filter($init, fn($u) => ($u['team'] ?? '') === 'enemy')),
            ];
        } else {
            if (!is_array($replay['teams']['ally'] ?? null))  { $replay['teams']['ally']  = []; }
            if (!is_array($replay['teams']['enemy'] ?? null)) { $replay['teams']['enemy'] = []; }
        }
        // --- Fallback serveur: si pas d'initial dans le replay, on construit depuis allies/enemies ---
        if (!isset($replay['initial']) || !is_array($replay['initial']) || count($replay['initial']) === 0) {
            $mk = function(array $units, string $team): array {
                return array_map(
                    fn($u) => [
                        'id'     => (int)($u['id'] ?? 0),
                        'team'   => $team,
                        'name'   => (string)($u['name'] ?? ''),
                        'img'    => (string)($u['img'] ?? '/images/placeholders/hero.png'),
                        'class'  => (string)($u['class'] ?? 'dps_ranged'),
                        'family' => (string)($u['family'] ?? ''),
                        'hp'     => (int)($u['hp'] ?? 0),
                        'atk'    => (int)($u['atk'] ?? 0),
                        'shield' => (int)($u['shield'] ?? 0),
                        'mana'   => (int)($u['mana'] ?? 0),
                        'acc'    => (float)($u['acc'] ?? 0),
                        'crit'   => (float)($u['crit'] ?? 0),
                        'dodge'  => (float)($u['dodge'] ?? 0),
                        'x'      => (int)($u['x'] ?? 0),
                        'y'      => (int)($u['y'] ?? 0),
                        'maxHp'  => (int)($u['hp'] ?? 0),
                    ],
                    $units
                );
            };

            $replay['initial'] = array_merge($mk($allies, 'ally'), $mk($enemies, 'enemy'));
            if (!isset($replay['actions']) || !is_array($replay['actions'])) $replay['actions'] = [];
            if (!isset($replay['winner'])) $replay['winner'] = 'draw';
            if (!isset($replay['seed'])) $replay['seed'] = 0;

            // Assure aussi 'teams'
            $replay['teams'] = [
                'ally'  => $mk($allies, 'ally'),
                'enemy' => $mk($enemies, 'enemy'),
            ];
        }

        return $this->render('match/show.html.twig', [
            'match_id' => $id,
            'allies'   => $allies,
            'enemies'  => $enemies,
            'replay'   => $replay,
        ]);
    }

    // ---------- helpers ----------

    /**
     * Construit [{id,name,img,class,family,hp,atk,shield,mana,acc,crit,dodge,x,y}, ...]
     * depuis Team::lineup (slots {id,x,y}). Fallback si lineup vide.
     * @return array<int,array<string,mixed>>
     */
    private function packFromLineup(Team $team, HeroRepository $heroRepo): array
    {
        $lineup = $team->getLineup() ?? [];

        // Fallback : si lineup vide, reconstitue avec les héros liés
        if (!$lineup) {
            $heroes = method_exists($team, 'getHeroes')
                ? $team->getHeroes()
                : array_values(array_filter(array_map(
                    fn($link) => method_exists($link, 'getHero') ? $link->getHero() : null,
                    method_exists($team, 'getMembers') ? $team->getMembers()->toArray() : []
                )));

            if ($heroes) {
                $isAlly = $team->getUser() === $this->getUser();
                $xCol   = $isAlly ? 1 : 5;
                foreach ($heroes as $i => $h) {
                    if ($h) {
                        $lineup[] = ['id' => $h->getId(), 'x' => $xCol, 'y' => $i % 4];
                    }
                }
            }
        }

        // Garde seulement les slots valides
        $slots = array_values(array_filter(
            $lineup,
            fn($s) => is_array($s) && array_key_exists('id', $s) && is_numeric($s['id'])
        ));
        if (!$slots) return [];

        // Charge les héros nécessaires
        $ids    = array_values(array_unique(array_map(fn($s) => (int)$s['id'], $slots)));
        $heroes = $heroRepo->findBy(['id' => $ids]);
        $byId   = [];
        foreach ($heroes as $h) $byId[$h->getId()] = $h;

        $out = [];
        foreach ($slots as $s) {
            $hid = (int)($s['id'] ?? 0);
            if (!$hid || !isset($byId[$hid])) continue;

            /** @var Hero $h */
            $h   = $byId[$hid];
            $x   = (int)($s['x'] ?? 0);
            $y   = (int)($s['y'] ?? 0);
            $img = $this->resolveImagePath($h->getPicture());

            $acc   = max(0, min(100, (int)($h->getChanceAtk()  ?? 0)));
            $crit  = max(0, min(100, (int)($h->getChanceCrit() ?? 0)));
            $dodge = max(0, min(100, (int)($h->getChanceEsq()  ?? 0)));

            $out[] = [
                'id'     => $h->getId(),
                'name'   => $h->getNom(),
                'img'    => $img,
                'class'  => $this->mapRoleToClass($h),
                'family' => $h->getFamily() ?? ($h->getFamilyId()?->getNom() ?? ''),
                'hp'     => (int)($h->getPdv()    ?? 0),
                'atk'    => (int)($h->getAtk()    ?? 0),
                'shield' => (int)($h->getShield() ?? 0),
                'mana'   => (int)($h->getMana()   ?? 0),
                'acc'    => $acc,
                'crit'   => $crit,
                'dodge'  => $dodge,
                'x'      => $x,
                'y'      => $y,
            ];
        }
        return $out;
    }

    private function mapRoleToClass(Hero $h): string
    {
        $label = mb_strtolower(trim($h->getRole()?->getNom() ?? ''));
        return match (true) {
            str_contains($label, 'corps') || str_contains($label, 'cac') || $label === 'dps_melee'      => 'dps_melee',
            str_contains($label, 'distance') || str_contains($label, 'ranged') || $label === 'dps_ranged' => 'dps_ranged',
            str_contains($label, 'tank') => 'tank',
            str_contains($label, 'heal') || str_contains($label, 'soin') => 'healer',
            default => 'dps_ranged',
        };
    }

    private function resolveImagePath(?string $pic): string
    {
        $img = trim((string)$pic);
        if ($img === '') return '/images/placeholders/hero.png';
        if ($img[0] === '/') return $img;
        if (str_starts_with($img, 'images/')) return '/'.$img;
        return '/images/mg/'.$img;
    }
}
