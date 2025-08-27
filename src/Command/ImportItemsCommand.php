<?php
namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(name: 'app:items:import', description: 'Import all item images from a directory into public/images/items')]
final class ImportItemsCommand extends Command
{
    protected function configure(): void
    {
        $this
            ->addArgument('source', InputArgument::REQUIRED, 'Path to a folder containing images (png/jpg/jpeg/gif/webp)');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $src = (string) $input->getArgument('source');
        $src = rtrim($src);
        if (!is_dir($src)) {
            $output->writeln("<error>Source directory not found: {$src}</error>");
            return Command::FAILURE;
        }

        $projectRoot = \dirname(__DIR__, 2);
        $dest = $projectRoot . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR . 'items';
        if (!is_dir($dest)) {
            if (!@mkdir($dest, 0775, true) && !is_dir($dest)) {
                $output->writeln("<error>Failed to create destination directory: {$dest}</error>");
                return Command::FAILURE;
            }
        }

        $allowed = ['png','jpg','jpeg','gif','webp'];
        $rii = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($src, \FilesystemIterator::SKIP_DOTS));
        $count = 0; $skipped = 0;
        foreach ($rii as $file) {
            if (!$file->isFile()) continue;
            $ext = strtolower($file->getExtension());
            if (!in_array($ext, $allowed, true)) { $skipped++; continue; }

            $base = $file->getBasename();
            $target = $dest . DIRECTORY_SEPARATOR . $base;
            // Avoid overwriting identical files unnecessarily
            if (is_file($target)) {
                // compare sizes; if same, skip
                if (filesize($target) === $file->getSize()) { $skipped++; continue; }
            }
            if (!@copy($file->getPathname(), $target)) {
                $output->writeln("<comment>Failed to copy {$base}</comment>");
                $skipped++; continue;
            }
            $count++;
        }

        $output->writeln("<info>Imported {$count} image(s). Skipped {$skipped}.</info>");
        $output->writeln("Items are auto-generated from these images by App\\Service\\ItemCatalog.");
        return Command::SUCCESS;
    }
}
