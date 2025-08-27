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
// BattleSimulator.php
    private function countFamilies(array $units): array
{
    $c = ['ally'=>[], 'enemy'=>[]];
    foreach ($units as $u) {
        if (!is_array($u)) continue;
        $t = $u['team'] ?? null;
        $f = strtolower((string)($u['family'] ?? ''));
        if (!$t || $f==='') continue;
        $c[$t][$f] = ($c[$t][$f] ?? 0) + 1;
    }
    return $c;
}

/** Applique les bonus d'équipe selon les paliers */
private function applyFamilySynergies(array &$units, array &$actions): void
{
    // Définition des synergies (paliers 2/3/4)
    $S = [
        'soleil' => [2=>['atk_mul'=>1.05], 3=>['acc_add'=>0.05], 4=>['crit_add'=>0.05]],
        'lune'   => [2=>['dodge_add'=>0.03], 3=>['dodge_add'=>0.02,'mana_add'=>10], 4=>['shield_add'=>10]],
        'nature' => [2=>['hp_mul'=>1.05], 3=>['shield_add'=>15], 4=>['hp_mul'=>1.05]],
        'idole'  => [2=>['crit_add'=>0.05], 3=>['atk_mul'=>1.05], 4=>['mana_add'=>10]],
        'ombre'  => [2=>['dodge_add'=>0.05], 3=>['acc_add'=>0.05], 4=>['shield_add'=>15]],
        'arcane' => [2=>['acc_add'=>0.05], 3=>['mana_add'=>15], 4=>['crit_add'=>0.05]],
        'etoile' => [2=>['acc_add'=>0.03], 3=>['crit_add'=>0.05], 4=>['atk_mul'=>1.05]],
        'ocean'  => [2=>['dodge_add'=>0.03], 3=>['mana_add'=>10], 4=>['acc_add'=>0.05]],
    ];

    $counts = $this->countFamilies($units);

    foreach (['ally','enemy'] as $team) {
        foreach (($counts[$team] ?? []) as $fam => $n) {
            if (!isset($S[$fam])) continue;

            // plus haut palier atteint
            $tier = $n >= 4 ? 4 : ($n >= 3 ? 3 : ($n >= 2 ? 2 : 0));
            if ($tier === 0) continue;

            $cfg = $S[$fam][$tier];
            $this->applyBuffToFamily($units, $team, $fam, $cfg);

            // petit log d'ouverture
            $actions[] = ['t'=>'log', 'msg'=>sprintf('Synergie %s x%d appliquée à l’équipe %s', $fam, $n, $team)];
        }
    }
}

/** Applique un set de buffs aux unités d'une famille d'une équipe */
private function applyBuffToFamily(array &$units, string $team, string $fam, array $cfg): void
{
    foreach ($units as &$u) {
        if (!is_array($u)) continue;
        if (($u['team'] ?? '') !== $team) continue;
        if (strtolower((string)($u['family'] ?? '')) !== $fam) continue;

        if (isset($cfg['hp_mul'])) {
            $u['maxHp'] = (int)round($u['maxHp'] * $cfg['hp_mul']);
            $u['hp']    = min($u['maxHp'], max(1, (int)$u['hp']));
        }
        if (isset($cfg['atk_mul']))   $u['atk']    = (int)round($u['atk'] * $cfg['atk_mul']);
        if (isset($cfg['shield_add']))$u['shield'] = (int)$u['shield'] + (int)$cfg['shield_add'];
        if (isset($cfg['mana_add']))  $u['mana']   = min(100, (int)$u['mana'] + (int)$cfg['mana_add']);

        if (isset($cfg['acc_add']))   $u['acc']    = min(1.00, (float)$u['acc']   + (float)$cfg['acc_add']);
        if (isset($cfg['crit_add']))  $u['crit']   = min(0.50, (float)$u['crit']  + (float)$cfg['crit_add']);
        if (isset($cfg['dodge_add'])) $u['dodge']  = min(0.25, (float)$u['dodge'] + (float)$cfg['dodge_add']);
    }
    unset($u);
}
public function simulate(Team $allyTeam, Team $enemyTeam, ?int $seed = null): array
{
    $rng = new DeterministicRng($seed);

    $A = $this->packFromLineup($allyTeam,  'ally',  100000);
    $E = $this->packFromLineup($enemyTeam, 'enemy', 200000);

    $units   = $this->sanitizeUnits(array_merge($A, $E));
    $actions = [];
    $this->applyFamilySynergies($units, $actions);
    $initial = $this->snapshot($units);
    // ✅ true initial state (used by the UI)
    $initial = $this->snapshot($units);

    $tickMax   = 999;
    $rangeFor  = fn(string $cls) => ($cls === 'dps_ranged' || $cls === 'healer') ? 2 : 1;
    $dist      = fn(array $a, array $b) => abs($a['x'] - $b['x']) + abs($a['y'] - $b['y']);
    $inBounds  = fn(int $x, int $y) => ($x >= 0 && $x < 7 && $y >= 0 && $y < 4);

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

    for ($tick = 0; $tick < $tickMax; $tick++) {
        if (!$this->hasAlive($units, 'ally') || !$this->hasAlive($units, 'enemy')) break;

        foreach ($units as $i => &$me) {
            if (!is_array($me) || ($me['hp'] ?? 0) <= 0) continue;

            $extraRegen = 0;
            $fam = strtolower((string)($me['family'] ?? ''));
            if ($fam === 'lune'   && ($counts['ally']['lune']   ?? 0) >= 3 && $me['team']==='ally')  $extraRegen += 1;
            if ($fam === 'ocean'  && ($counts['ally']['ocean']  ?? 0) >= 3 && $me['team']==='ally') $extraRegen += 1;
            // idem pour enemy avec les bons counts
            $me['mana'] = min(100, (int)$me['mana'] + (($me['class'] ?? '') === 'healer' ? 10 : 3) + $extraRegen);


            // --- Healer behaviour ---
            if (($me['class'] ?? '') === 'healer') {
                // lowest % HP ally within 2 cells
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

                // Heal if possible
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

                // Not enough mana → meditate
                if ((int)$me['mana'] < 20) {
                    $me['mana'] = min(100, (int)$me['mana'] + 25);
                    $actions[] = ['t'=>'log','msg'=>sprintf('%s se concentre (+25 mana)', $me['name'])];
                    continue;
                }
                // else: fall-through → light attack below
            }

            // --- Combat / move ---
            $foeI = $nearestEnemyIdx($me, $units);
            if ($foeI === null) continue;
            $foe  = $units[$foeI];

            $R = $rangeFor($me['class'] ?? '');
            $d = $dist($me, $foe);

            if ($d <= $R) {
                // Attack
                if (!$rng->chance($me['acc'])) { $actions[] = ['t'=>'log','msg'=>sprintf('%s rate %s', $me['name'],$foe['name'])]; continue; }
                if ($rng->chance($foe['dodge'])) { $actions[] = ['t'=>'log','msg'=>sprintf('%s esquive l’attaque de %s', $foe['name'],$me['name'])]; continue; }

                $dmg  = (int)($me['atk'] ?? 0);
                if (($me['class'] ?? '') === 'healer') $dmg = (int)max(1, round($dmg * 0.5)); // light hit
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
                if ($left > 0) $units[$foeI]['hp'] = max(0, (int)$units[$foeI]['hp'] - $left);

                $me['mana'] = min(100, (int)$me['mana'] + 5);

                $actions[] = [
                    't'=>'attack','att'=>$me['id'],'def'=>$foe['id'],
                    'crit'=>$crit,'dmg'=>$dmg,
                    'hp'=>$units[$foeI]['hp'],'shield'=>$units[$foeI]['shield'],
                    'mana'=>$me['mana'],
                    'log'=> sprintf('%s frappe %s (%d%s)', $me['name'],$foe['name'],$dmg,$crit?' crit':''),
                ];
            } else {
                // Move towards foe (horizontal first)
                $dx = ($me['x'] < $foe['x']) ? 1 : (($me['x'] > $foe['x']) ? -1 : 0);
                $dy = ($me['y'] < $foe['y']) ? 1 : (($me['y'] > $foe['y']) ? -1 : 0);
                $cands = [
                    ['x'=>$me['x'] + $dx, 'y'=>$me['y']],
                    ['x'=>$me['x'],       'y'=>$me['y'] + $dy],
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
    if ($this->hasAlive($units,'ally')  && !$this->hasAlive($units,'enemy')) $winner = 'ally';
    if ($this->hasAlive($units,'enemy') && !$this->hasAlive($units,'ally'))  $winner = 'enemy';

    // ✅ keep the true initial snapshot and compute teams from it
    
    $teamsLegacy = [
        'ally'  => array_values(array_filter($initial, fn($u) => ($u['team'] ?? '') === 'ally')),
        'enemy' => array_values(array_filter($initial, fn($u) => ($u['team'] ?? '') === 'enemy')),
    ];

    return [
        'seed'    => $rng->getSeed(),
        'teams'   => $teamsLegacy,
        'initial' => $initial,    // <-- no longer overwritten
        'actions' => $actions,
        'winner'  => $winner,
    ];
}

private function snapshot(array $units): array
{
    $initial = [];
    foreach ($units as $u) {
        if (!is_array($u)) continue;
        $initial[] = [
            'id'     => (int)$u['id'],
            'team'   => (string)$u['team'],
            'name'   => (string)$u['name'],
            'img'    => (string)$u['img'],
            'class'  => (string)$u['class'],
            'family' => (string)($u['family'] ?? ''),
            'hp'     => (int)$u['hp'],
            'atk'    => (int)($u['atk'] ?? 0),
            'shield' => (int)($u['shield'] ?? 0),
            'mana'   => (int)($u['mana'] ?? 0),
            'acc'    => (float)($u['acc'] ?? 0),
            'crit'   => (float)($u['crit'] ?? 0),
            'dodge'  => (float)($u['dodge'] ?? 0),
            'x'      => (int)$u['x'],
            'y'      => (int)$u['y'],
            'maxHp'  => (int)$u['maxHp'],
        ];
    }
    return $initial;
}
/**
 * Build units from team lineup (clamped to half-board) with de-duplication.
 * @return array<int,array<string,mixed>>
 */
private function packFromLineup(Team $team, string $side, int $uidBase): array
{
    $lineup = $team->getLineup() ?? [];

    // valid slots only
    $slots = array_values(array_filter($lineup, static fn($s) =>
        is_array($s) && isset($s['id'],$s['x'],$s['y']) && is_numeric($s['id'])
    ));

    // 🔁 fallback from relations if lineup empty
    if (!$slots) {
        $heroes = method_exists($team, 'getHeroes')
            ? $team->getHeroes()
            : array_values(array_filter(array_map(
                fn($link) => method_exists($link,'getHero') ? $link->getHero() : null,
                method_exists($team,'getMembers') ? $team->getMembers()->toArray() : []
            )));
        $xCol = ($side === 'ally') ? 1 : 5;
        foreach ($heroes as $i => $h) {
            if ($h) $slots[] = ['id'=>$h->getId(),'x'=>$xCol,'y'=>$i % 4];
        }
    }
    if (!$slots) return [];

    // load heroes once
    $ids    = array_values(array_unique(array_map(fn($s)=>(int)$s['id'], $slots)));
    $heroes = $this->heroes->findBy(['id'=>$ids]);
    $byId   = []; foreach ($heroes as $h) $byId[$h->getId()] = $h;

    $out = []; $i = 0; $occ = [];
    foreach ($slots as $slot) {
        $hid = (int)$slot['id']; if (!isset($byId[$hid])) continue;
        /** @var Hero $h */
        $h = $byId[$hid];

        $x = (int)$slot['x']; $y = (int)$slot['y'];
        $y = max(0, min(3, $y));
        if ($side === 'ally')  $x = max(0, min(2, $x));  // left half
        else                   $x = max(4, min(6, $x));  // right half

        // de-dup inside the team by rotating rows
        $tries = 0;
        while (isset($occ[$x.'-'.$y]) && $tries < 4) { $y = ($y + 1) % 4; $tries++; }
        $occ[$x.'-'.$y] = true;

        $acc   = max(0.70, min(1.00, ((int)($h->getChanceAtk()  ?? 85)) / 100));
        $crit  = max(0.00, min(0.30, ((int)($h->getChanceCrit() ?? 10)) / 100));
        $dodge = max(0.00, min(0.15, ((int)($h->getChanceEsq()  ??  5)) / 100));

        $uid = $uidBase + ($i++);

        $out[] = [
            'id'=>$uid,'hid'=>$h->getId(),'team'=>$side,'name'=>$h->getNom(),
            'img'=>$this->resolveImagePath($h->getPicture()),
            'class'=>$this->mapRoleToClass($h),
            'family'=>$h->getFamily() ?? ($h->getFamilyId()?->getNom() ?? ''),
            'maxHp'=>(int)($h->getPdv() ?? 1),
            'hp'   =>(int)($h->getPdv() ?? 1),
            'atk'  =>(int)($h->getAtk() ?? 1),
            'shield'=>(int)($h->getShield() ?? 0),
            'mana'  =>(int)($h->getMana() ?? 0),
            'acc'=>$acc,'crit'=>$crit,'dodge'=>$dodge,
            'x'=>$x,'y'=>$y,
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
            $u['maxHp']  = max(1, (int)($u['maxHp'] ?? ($u['hp'] ?? 1)));
            $u['hp']     = max(1, min($u['maxHp'], (int)($u['hp'] ?? $u['maxHp'])));
            $u['atk']    = max(1, (int)($u['atk']    ?? 1));
            $u['shield'] = max(0, (int)($u['shield'] ?? 0));
            $u['mana']   = max(0, min(100, (int)($u['mana']   ?? 0)));
            $u['acc']    = max(0.50, min(1.00, (float)($u['acc']  ?? 0.85))); // 50..100%
            $u['crit']   = max(0.00, min(0.30, (float)($u['crit'] ?? 0.10)));
            $u['dodge']  = max(0.00, min(0.15, (float)($u['dodge']?? 0.05)));
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
