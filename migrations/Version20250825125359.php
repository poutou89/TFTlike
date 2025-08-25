<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250825125359 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE match_participant (id INT AUTO_INCREMENT NOT NULL, match_id INT NOT NULL, user_id INT DEFAULT NULL, team_id INT DEFAULT NULL, slot VARCHAR(1) NOT NULL, result VARCHAR(10) DEFAULT \'draw\' NOT NULL, mmr_before INT DEFAULT NULL, mmr_after INT DEFAULT NULL, mmr_delta INT DEFAULT NULL, is_bot TINYINT(1) DEFAULT 0 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_E5061A392ABEACD6 (match_id), INDEX IDX_E5061A39A76ED395 (user_id), INDEX IDX_E5061A39296CD8AE (team_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE match_participant ADD CONSTRAINT FK_E5061A392ABEACD6 FOREIGN KEY (match_id) REFERENCES game_match (id)');
        $this->addSql('ALTER TABLE match_participant ADD CONSTRAINT FK_E5061A39A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE match_participant ADD CONSTRAINT FK_E5061A39296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE game_match ADD winner_slot VARCHAR(1) DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD mmr INT DEFAULT 1000 NOT NULL, ADD games_played INT DEFAULT 0 NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE match_participant DROP FOREIGN KEY FK_E5061A392ABEACD6');
        $this->addSql('ALTER TABLE match_participant DROP FOREIGN KEY FK_E5061A39A76ED395');
        $this->addSql('ALTER TABLE match_participant DROP FOREIGN KEY FK_E5061A39296CD8AE');
        $this->addSql('DROP TABLE match_participant');
        $this->addSql('ALTER TABLE game_match DROP winner_slot');
        $this->addSql('ALTER TABLE user DROP mmr, DROP games_played');
    }
}
