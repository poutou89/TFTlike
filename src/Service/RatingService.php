<?php

namespace App\Service;

use App\Entity\User;

final class RatingService
{
    // Bounds and tuning
    private const MIN_MMR = 0;
    private const MAX_MMR = 3000;
    private const MAX_DELTA = 60;           // absolute bound on a single game's change
    private const MIN_ABS_DELTA_WIN = 1;    // ensure at least ±1 on decisive results

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

        // base Elo delta
        $dA = (int) round($kA * ($scoreA - $ea));
        $dB = (int) round($kB * ($scoreB - $eb));

        // Scale by rating gap (underdog bonus / favorite dampen), capped at ±25%
        $gapA = max(-0.25, min(0.25, ($rb - $ra) / 800.0));
        $gapB = max(-0.25, min(0.25, ($ra - $rb) / 800.0));
        $dA = (int) round($dA * (1.0 + $gapA));
        $dB = (int) round($dB * (1.0 + $gapB));

        // Ensure a minimum absolute step on decisive results
        if ($scoreA === 1.0 && $dA <= 0) $dA = self::MIN_ABS_DELTA_WIN;
        if ($scoreA === 0.0 && $dA >= 0) $dA = -self::MIN_ABS_DELTA_WIN;
        if ($scoreA === 1.0 && $dB >= 0) $dB = -self::MIN_ABS_DELTA_WIN;
        if ($scoreA === 0.0 && $dB <= 0) $dB = self::MIN_ABS_DELTA_WIN;

        // Clamp deltas
        $dA = max(-self::MAX_DELTA, min(self::MAX_DELTA, $dA));
        $dB = max(-self::MAX_DELTA, min(self::MAX_DELTA, $dB));

        return ['a' => $dA, 'b' => $dB];
    }

    public function clampMmr(int $mmr): int
    {
        return max(self::MIN_MMR, min(self::MAX_MMR, $mmr));
    }
}
