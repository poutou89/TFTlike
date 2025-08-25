<?php
namespace App\Service;

final class DeterministicRng
{
    private int $state;

    public function __construct(?int $seed = null)
    {
        // non-zero default to avoid “stuck” PRNGs
        $s = (int)($seed ?? 0);
        if ($s === 0) { $s = 2463534242; }
        $this->state = $s & 0xFFFFFFFF;
    }

    private function xorshift32(): int
    {
        $x = $this->state;
        $x ^= ($x << 13) & 0xFFFFFFFF;
        $x ^= ($x >> 17);
        $x ^= ($x << 5)  & 0xFFFFFFFF;
        $this->state = $x & 0xFFFFFFFF;
        return $this->state;
    }

    public function float01(): float
    {
        // 0..1 inclusive
        return ($this->xorshift32() & 0xFFFFFFFF) / 4294967295.0;
    }

    public function chance(float $p): bool
    {
        if ($p <= 0.0) return false;
        if ($p >= 1.0) return true;
        return $this->float01() < $p;
    }

    public function getSeed(): int
    {
        return $this->state;
    }
}
