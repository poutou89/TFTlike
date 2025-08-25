<?php
namespace App\Service;

use App\Entity\Team;
use App\Entity\Hero;
use App\Repository\HeroRepository;

final class BattleSimulator
{
    public function __construct(private HeroRepository $heroes) {}

    /**
     * Deterministic battle, returns a replay script.
     */
    public function simulate(Team $allyTeam, Team $enemyTeam, ?int $seed = null): array
    {
        $rng = new DeterministicRng($seed);

        // Build and sanitize units
        $A = $this->packFromLineup($allyTeam,  'ally',  100000);
        $E = $this->packFromLineup($enemyTeam, 'enemy', 200000);

        $units = $this->sanitizeUnits(array_merge($A, $E));
        $actions = [];

        $tickMax = 999; // hard stop

        $rangeFor  = fn(string $cls) => ($cls === 'dps_ranged' || $cls === 'healer') ? 2 : 1;
        $dist      = fn(array $a, array $b) => abs($a['x'] - $b['x']) + abs($a['y'] - $b['y']);
        $inBounds  = fn(int $x, int $y) => ($x >= 0 && $x < 7 && $y >= 0 && $y < 4);

        // returns index of nearest enemy (not a copy)
        $nearestEnemyIdx = function(array $me, array $units) use ($dist): ?int {
            $bestI = null; $bestD = 999;
            foreach ($units as $i => $u) {
                if (!is_array($u)) continue;
                if (($u['team'] ?? null) === ($me['team'] ?? null)) continue;
                if (($u['hp'] ?? 0) <= 0) continue;
                if (!isset($u['x'],$u['y'])) continue;
                $d = $dist($me, $u);
                if ($d < $bestD) { $bestD = $d; $bestI = $i; }
            }
            return $bestI;
        };

        for ($tick=0; $tick < $tickMax; $tick++) {
            if (!$this->hasAlive($units,'ally') || !$this->hasAlive($units,'enemy')) break;

            // Deterministic order: allies then enemies, then by insertion
            // (array is already in that order due to pack/merge)
            foreach ($units as $i => &$me) {
                if (!is_array($me)) continue;
                if (($me['hp'] ?? 0) <= 0) continue;

                // passive mana
                $me['mana'] = min(100, (int)($me['mana'] ?? 0) + (($me['class'] ?? '') === 'healer' ? 10 : 3));

                // Healer: try heal first
                if (($me['class'] ?? '') === 'healer') {
                    $targetI = null; $worst = 2.0;
                    foreach ($units as $j => $u) {
                        if (!is_array($u)) continue;
                        if (($u['team'] ?? null) !== ($me['team'] ?? null)) continue;
                        if (($u['hp'] ?? 0) <= 0) continue;
                        if (($u['hp'] ?? 0) >= ($u['maxHp'] ?? 0)) continue;
                        if (!isset($u['x'],$u['y'])) continue;
                        if ($dist($me, $u) > 2) continue;
                        $ratio = ($u['maxHp'] ?? 1) > 0 ? ($u['hp'] / $u['maxHp']) : 1;
                        if ($ratio < $worst) { $worst = $ratio; $targetI = $j; }
                    }
                    if ($targetI !== null && (int)$me['mana'] >= 20) {
                        $amount = max(10, (int)round(0.6 * (int)($me['atk'] ?? 0)));
                        $me['mana'] -= 20;
                        $units[$targetI]['hp'] = min((int)$units[$targetI]['maxHp'], (int)$units[$targetI]['hp'] + $amount);
                        $actions[] = [
                            't'=>'heal','src'=>$me['id'],'dst'=>$units[$targetI]['id'],
                            'amount'=>$amount,'mana'=>$me['mana'],
                            'log'=> sprintf('%s soigne %s (+%d)', $me['name'],$units[$targetI]['name'],$amount),
                        ];
                        continue;
                    }
                }

                // Find target
                $foeI = $nearestEnemyIdx($me, $units);
                if ($foeI === null) continue;
                $foe  = $units[$foeI];

                $R = $rangeFor($me['class']);
                $d = $dist($me, $foe);

                if ($d <= $R) {
                    // Attack
                    if (!$rng->chance($me['acc'])) {
                        $actions[] = ['t'=>'log','msg'=>sprintf('%s rate %s', $me['name'],$foe['name'])];
                        continue;
                    }
                    if ($rng->chance($foe['dodge'])) {
                        $actions[] = ['t'=>'log','msg'=>sprintf('%s esquive l’attaque de %s', $foe['name'],$me['name'])];
                        continue;
                    }

                    $dmg  = (int)($me['atk'] ?? 0);
                    $crit = $rng->chance($me['crit']);
                    if ($crit) $dmg = (int)round($dmg * 1.5);
                    if (($foe['class'] ?? '') === 'tank') $dmg = (int)round($dmg * 0.8);

                    // shield first
                    $left = $dmg;
                    if ((int)$units[$foeI]['shield'] > 0) {
                        $abs = min((int)$units[$foeI]['shield'], $left);
                        $units[$foeI]['shield'] -= $abs;
                        $left -= $abs;
                    }
                    if ($left > 0) {
                        $units[$foeI]['hp'] = max(0, (int)$units[$foeI]['hp'] - $left);
                    }

                    $me['mana'] = min(100, (int)$me['mana'] + 5);

                    $actions[] = [
                        't'=>'attack','att'=>$me['id'],'def'=>$foe['id'],
                        'crit'=>$crit,'dmg'=>$dmg,
                        'hp'=>$units[$foeI]['hp'],'shield'=>$units[$foeI]['shield'],
                        'mana'=>$me['mana'],
                        'log'=> sprintf('%s frappe %s (%d%s)', $me['name'],$foe['name'],$dmg,$crit?' crit':''),
                    ];
                } else {
                    // Move (horizontal preference)
                    $dx = $me['x'] <=> $foe['x']; $dx = -$dx;
                    $dy = $me['y'] <=> $foe['y']; $dy = -$dy;
                    $cands = [
                        ['x'=>$me['x'] + $dx, 'y'=>$me['y']],
                        ['x'=>$me['x'], 'y'=>$me['y'] + $dy],
                    ];
                    foreach ($cands as $p) {
                        if (!$inBounds($p['x'],$p['y'])) continue;
                        $occupied = false;
                        foreach ($units as $u2) {
                            if (!is_array($u2)) continue;
                            if (($u2['hp'] ?? 0) > 0 && $u2['x'] === $p['x'] && $u2['y'] === $p['y']) { $occupied = true; break; }
                        }
                        if (!$occupied) {
                            $me['x'] = $p['x']; $me['y'] = $p['y'];
                            $actions[] = ['t'=>'move','id'=>$me['id'],'to'=>[$me['x'],$me['y']]];
                            break;
                        }
                    }
                }
            }
            unset($me);

            if (!$this->hasAlive($units,'ally') || !$this->hasAlive($units,'enemy')) break;
        }

        $winner = 'draw';
        if ($this->hasAlive($units,'ally') && !$this->hasAlive($units,'enemy')) $winner='ally';
        if ($this->hasAlive($units,'enemy') && !$this->hasAlive($units,'ally')) $winner='enemy';

        // Build initial snapshot for the client
        $initial = [];
        foreach ($units as $u) {
            if (!is_array($u)) continue;
            $initial[] = [
                'id'=>$u['id'],'team'=>$u['team'],'name'=>$u['name'],'img'=>$u['img'],
                'class'=>$u['class'],'family'=>$u['family'],
                'hp'=>$u['hp'],'atk'=>$u['atk'],'shield'=>$u['shield'],'mana'=>$u['mana'],
                'acc'=>$u['acc'],'crit'=>$u['crit'],'dodge'=>$u['dodge'],
                'x'=>$u['x'],'y'=>$u['y'],'maxHp'=>$u['maxHp'],
            ];
        }
        $teamsLegacy = [
    'ally'  => array_values(array_filter($initial, fn($u) => ($u['team'] ?? '') === 'ally')),
    'enemy' => array_values(array_filter($initial, fn($u) => ($u['team'] ?? '') === 'enemy')),
    ];
        return [
            'seed'    => $rng->getSeed(),
            'teams'   => $teamsLegacy,
            'initial' => $initial,
            'actions' => $actions,
            'winner'  => $winner,
        ];
    }

    // ---------- helpers ----------

    /**
     * Build units from a lineup, clamp stats, convert chances to 0..1 probabilities.
     * @return array<int,array<string,mixed>>
     */
    private function packFromLineup(Team $team, string $side, int $uidBase): array
    {
        $lineup = $team->getLineup() ?? [];

        // keep only valid slots (array with numeric id and x/y present)
    $slots = array_values(array_filter($lineup, static fn($s) =>
        is_array($s) && isset($s['id'],$s['x'],$s['y']) && is_numeric($s['id'])
    ));
        // 🔁 Fallback : si pas de slots, on fabrique à partir des héros liés
        if (!$slots) {
            $heroes = method_exists($team, 'getHeroes')
                ? $team->getHeroes()
                : array_values(array_filter(array_map(
                    fn($link) => method_exists($link,'getHero') ? $link->getHero() : null,
                    method_exists($team,'getMembers') ? $team->getMembers()->toArray() : []
                )));
            $xCol = ($side === 'ally') ? 1 : 5;
            foreach ($heroes as $i => $h) {
                if (!$h) continue;
                $slots[] = ['id' => $h->getId(), 'x' => $xCol, 'y' => $i % 4];
            }
        }

        if (!$slots) return [];

        $ids    = array_values(array_unique(array_map(fn($s)=>(int)$s['id'], $slots)));
        $heroes = $this->heroes->findBy(['id'=>$ids]);
        $byId = []; foreach ($heroes as $h) $byId[$h->getId()] = $h;

        foreach ($heroes as $h) $byId[$h->getId()] = $h;
        $out = []; $i = 0;
        foreach ($slots as $slot) {
        $hid = (int)$slot['id'];
        if (!isset($byId[$hid])) continue;

        /** @var Hero $h */
        $h   = $byId[$hid];
        $img = $this->resolveImagePath($h->getPicture());

        // % -> proba 0..1 avec minimum
        $accRaw   = (int)($h->getChanceAtk()  ?? 85);
        $critRaw  = (int)($h->getChanceCrit() ?? 10);
        $dodgeRaw = (int)($h->getChanceEsq()  ?? 5);
        $acc   = max(0.70, min(1.00, $accRaw   / 100)); // 👈 at least 70% hit rate
        $crit  = max(0.00, min(0.30, $critRaw  / 100)); // up to 30%
        $dodge = max(0.00, min(0.15, $dodgeRaw / 100)); // cap dodge at 15%

        $uid = $uidBase + ($i++); // 👈 id d’unité UNIQUE (int)

            $out[] = [
            'id'     => $uid,       // <-- utilisé dans actions
            'hid'    => $h->getId(),// (optionnel: id de héros)
            'team'   => $side,
            'name'   => $h->getNom(),
            'img'    => $img,
            'class'  => $this->mapRoleToClass($h),
            'family' => $h->getFamily() ?? ($h->getFamilyId()?->getNom() ?? ''),
            'maxHp'  => (int)($h->getPdv() ?? 0),
            'hp'     => (int)($h->getPdv() ?? 0),
            'atk'    => (int)($h->getAtk() ?? 0),
            'shield' => (int)($h->getShield() ?? 0),
            'mana'   => (int)($h->getMana() ?? 0),
            'acc'    => $acc, 'crit'=>$crit, 'dodge'=>$dodge,
            'x'      => (int)$slot['x'],
            'y'      => (int)$slot['y'],
        ];
    }
    return $out;
}

    /** Remove invalid/null entries and enforce required keys. */
    private function sanitizeUnits(array $units): array
    {
        $out = [];
        foreach ($units as $u) {
            if (!is_array($u)) continue;
            if (!isset($u['team'],$u['hp'],$u['maxHp'],$u['x'],$u['y'])) continue;
            // normalize numeric fields
            $u['hp']     = (int)$u['hp'];
            $u['maxHp']  = (int)$u['maxHp'];
            $u['atk']    = (int)($u['atk']    ?? 0);
            $u['shield'] = (int)($u['shield'] ?? 0);
            $u['mana']   = (int)($u['mana']   ?? 0);
            $u['acc']    = (float)($u['acc']  ?? 0.0); // already 0..1
            $u['crit']   = (float)($u['crit'] ?? 0.0);
            $u['dodge']  = (float)($u['dodge']?? 0.0);
            $out[] = $u;
        }
        return array_values($out);
    }

    private function hasAlive(array $units, string $team): bool
    {
        foreach ($units as $u) {
            if (!is_array($u)) continue;
            if (($u['team'] ?? null) === $team && ($u['hp'] ?? 0) > 0) return true;
        }
        return false;
    }

    private function mapRoleToClass(Hero $h): string
    {
        $label = mb_strtolower(trim($h->getRole()?->getNom() ?? ''));
        return match (true) {
            str_contains($label,'corps') || str_contains($label,'cac') || $label==='dps_melee'      => 'dps_melee',
            str_contains($label,'distance') || str_contains($label,'ranged') || $label==='dps_ranged' => 'dps_ranged',
            str_contains($label,'tank') => 'tank',
            str_contains($label,'heal') || str_contains($label,'soin') => 'healer',
            default => 'dps_ranged',
        };
    }

    private function resolveImagePath(?string $pic): string
    {
        $img = trim((string)$pic);
        if ($img==='') return '/images/placeholders/hero.png';
        if ($img[0]==='/') return $img;
        if (str_starts_with($img,'images/')) return '/'.$img;
        return '/images/mg/'.$img;
    }
}
