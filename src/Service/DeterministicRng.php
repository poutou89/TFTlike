<?php
namespace App\Service;

/**
 * Very small deterministic PRNG (xorshift32).
 * Per-instance seed makes results fully reproducible.
 */
final class DeterministicRng
{
    private int $state;

    public function __construct(?int $seed = null)
    {
        // Must be non-zero 32-bit
        $this->state = $seed !== null ? ($seed & 0xFFFFFFFF) : random_int(1, 0x7FFFFFFF);
        if ($this->state === 0) $this->state = 1;
    }

    /** 0 <= float < 1 */
    public function nextFloat(): float
    {
        $x = $this->state;
        $x ^= ($x << 13) & 0xFFFFFFFF;
        $x ^= ($x >> 17);
        $x ^= ($x << 5) & 0xFFFFFFFF;
        $this->state = $x & 0xFFFFFFFF;

        // 24 bits precision is enough for gameplay
        return (($this->state & 0xFFFFFF) / 16777216.0);
    }

    /** true with given percent (0..100) */
    public function chance(int $percent): bool
    {
        $p = max(0, min(100, $percent)) / 100.0;
        return $this->nextFloat() < $p;
    }

    public function getSeed(): int { return $this->state; }
}
