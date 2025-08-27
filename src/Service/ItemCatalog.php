<?php
namespace App\Service;

final class ItemCatalog
{
    /** Return absolute path to items folder under public. */
    private static function itemsDir(): string
    {
        // __DIR__ => src/Service ; go up to project root
        return dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR . 'items';
    }

    /** List available items by scanning public/images/items. */
    public static function list(): array
    {
        $dir = self::itemsDir(); if (!is_dir($dir)) return [];
        $files = glob($dir . DIRECTORY_SEPARATOR . '*.{png,jpg,jpeg,gif,webp}', GLOB_BRACE) ?: [];
        $items = [];
        foreach ($files as $f) {
            $base = basename($f);
            $id = pathinfo($base, PATHINFO_FILENAME); // e.g., fc1007
            $items[] = self::buildItem($id, 'images/items/' . $base);
        }
        return $items;
    }

    /** Deterministically build item stats from its id string. */
    public static function buildItem(string $id, string $imgPath): array
    {
        // simple hash
        $num = abs(crc32($id));
        $tier = ($num % 3) + 1; // 1..3
        $kind = $num % 6;

        $name = 'Relique #' . substr($id, -4);
        $passive = [];
        switch ($kind) {
            case 0: $name = 'Lame écarlate'; $passive = ['atk_add' => 4 + 2*$tier]; break;
            case 1: $name = 'Amulette de vitalité'; $passive = ['hp_mul' => 1.05 + 0.05*$tier]; break;
            case 2: $name = 'Bouclier runique'; $passive = ['armor_add' => 2 + $tier, 'shield_add'=> 5*$tier]; break;
            case 3: $name = 'Gemme critique'; $passive = ['crit_add' => 0.03 + 0.02*$tier, 'acc_add'=>0.02*$tier]; break;
            case 4: $name = 'Cape de brume'; $passive = ['dodge_add' => 0.03 + 0.02*$tier]; break;
            default:$name = 'Sceptre de flux'; $passive = ['mana_add' => 10*$tier]; break;
        }
        $onHit = [];
        if (($num % 10) === 0) { $onHit['true_dmg'] = 5*$tier; $name .= ' du perce-cœur'; }
        if (($num % 15) === 0) { $onHit['armor_down'] = 1*$tier; $name .= ' de brisure'; }

        return [
            'id' => (string)$id,
            'name' => $name,
            'img' => $imgPath,
            'passive' => $passive,
            'on_hit' => $onHit,
        ];
    }

    /** Get by id (scans dir and caches in static). */
    public static function get(string $id): ?array
    {
        static $cache = null; if ($cache === null) {
            $cache = [];
            foreach (self::list() as $it) { $cache[$it['id']] = $it; }
        }
        return $cache[$id] ?? null;
    }
}
