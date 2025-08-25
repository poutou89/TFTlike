<?php

namespace App\Service;

use App\Entity\User;

final class RatingService
{
    public function expected(int $ra, int $rb): float
    {   return 1.0 / (1.0 + 10.0 ** (($rb - $ra) / 400.0)); }

    public function kFactor(User $u, bool $vsBot = false): int
    {
        // K plus petit contre un bot; plus grand si peu de parties
        if ($vsBot) return 8;
        if ($u->getGamesPlayed() < 20) return 40;
        if ($u->getGamesPlayed() < 50) return 32;
        return 24;
    }

    /** @return array{a:int,b:int} deltas pour A et B */
    public function delta(int $ra, int $rb, float $scoreA, int $kA, int $kB): array
    {
        $ea = $this->expected($ra, $rb);
        $eb = 1.0 - $ea;
        $scoreB = 1.0 - $scoreA;

        $dA = (int) round($kA * ($scoreA - $ea));
        $dB = (int) round($kB * ($scoreB - $eb));
        // par construction dB = -dA si kA==kB; sinon léger déséquilibre → ok
        return ['a' => $dA, 'b' => $dB];
    }
}
