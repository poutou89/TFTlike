<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250825094110 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE game_match ADD replay JSON DEFAULT NULL, ADD winner VARCHAR(10) DEFAULT NULL, CHANGE status status VARCHAR(32) DEFAULT \'pending\' NOT NULL, CHANGE region region VARCHAR(64) DEFAULT NULL, CHANGE game_version game_version VARCHAR(64) DEFAULT NULL, CHANGE created_at created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', CHANGE started_at started_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', CHANGE finished_at finished_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', CHANGE mode mode VARCHAR(16) DEFAULT \'1v1\' NOT NULL, CHANGE seed seed INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE game_match DROP replay, DROP winner, CHANGE status status VARCHAR(255) NOT NULL, CHANGE region region VARCHAR(255) DEFAULT NULL, CHANGE mode mode VARCHAR(16) NOT NULL, CHANGE game_version game_version VARCHAR(255) DEFAULT NULL, CHANGE seed seed VARCHAR(64) DEFAULT NULL, CHANGE created_at created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, CHANGE started_at started_at DATETIME DEFAULT NULL, CHANGE finished_at finished_at DATETIME DEFAULT NULL');
    }
}
