<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250822081128 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE match_queue (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, team_id INT NOT NULL, mode VARCHAR(16) NOT NULL, region VARCHAR(32) DEFAULT NULL, mmr_snapshot INT NOT NULL, enqueued_at DATETIME NOT NULL, INDEX IDX_C19700C2A76ED395 (user_id), INDEX IDX_C19700C2296CD8AE (team_id), INDEX idx_mq_mode_region_enqueued (mode, region, enqueued_at), UNIQUE INDEX uniq_mq_user_mode (user_id, mode), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE match_team (id INT AUTO_INCREMENT NOT NULL, game_match_id INT NOT NULL, user_id INT NOT NULL, team_id INT DEFAULT NULL, side VARCHAR(1) NOT NULL, mmr_before INT NOT NULL, mmr_after INT DEFAULT NULL, result VARCHAR(8) DEFAULT NULL, accepted_at DATETIME DEFAULT NULL, INDEX IDX_A58F176D81FA53F0 (game_match_id), INDEX IDX_A58F176DA76ED395 (user_id), INDEX IDX_A58F176D296CD8AE (team_id), UNIQUE INDEX uniq_mt_side (game_match_id, side), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE match_queue ADD CONSTRAINT FK_C19700C2A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE match_queue ADD CONSTRAINT FK_C19700C2296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE match_team ADD CONSTRAINT FK_A58F176D81FA53F0 FOREIGN KEY (game_match_id) REFERENCES game_match (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE match_team ADD CONSTRAINT FK_A58F176DA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE match_team ADD CONSTRAINT FK_A58F176D296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE game_match ADD mode VARCHAR(16) NOT NULL, ADD seed VARCHAR(64) DEFAULT NULL, CHANGE created_at created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, CHANGE started_at started_at DATETIME DEFAULT NULL, CHANGE finished_at finished_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE team DROP FOREIGN KEY FK_C4E0A61F81FA53F0');
        $this->addSql('ALTER TABLE team DROP FOREIGN KEY FK_C4E0A61F9D86650F');
        $this->addSql('DROP INDEX UNIQ_C4E0A61F9D86650F ON team');
        $this->addSql('DROP INDEX IDX_C4E0A61F81FA53F0 ON team');
        $this->addSql('ALTER TABLE team ADD user_id INT NOT NULL, ADD mmr INT NOT NULL, DROP user_id_id, DROP game_match_id, CHANGE status status VARCHAR(16) DEFAULT \'idle\' NOT NULL, CHANGE created_at created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE team ADD CONSTRAINT FK_C4E0A61FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_C4E0A61FA76ED395 ON team (user_id)');
        $this->addSql('ALTER TABLE team_hero DROP FOREIGN KEY FK_802F9AFD45B0BCD');
        $this->addSql('ALTER TABLE team_hero ADD id INT AUTO_INCREMENT NOT NULL, DROP PRIMARY KEY, ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE team_hero ADD CONSTRAINT FK_802F9AFD45B0BCD FOREIGN KEY (hero_id) REFERENCES hero (id)');
        $this->addSql('CREATE UNIQUE INDEX uniq_team_hero ON team_hero (team_id, hero_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE match_queue DROP FOREIGN KEY FK_C19700C2A76ED395');
        $this->addSql('ALTER TABLE match_queue DROP FOREIGN KEY FK_C19700C2296CD8AE');
        $this->addSql('ALTER TABLE match_team DROP FOREIGN KEY FK_A58F176D81FA53F0');
        $this->addSql('ALTER TABLE match_team DROP FOREIGN KEY FK_A58F176DA76ED395');
        $this->addSql('ALTER TABLE match_team DROP FOREIGN KEY FK_A58F176D296CD8AE');
        $this->addSql('DROP TABLE match_queue');
        $this->addSql('DROP TABLE match_team');
        $this->addSql('ALTER TABLE team DROP FOREIGN KEY FK_C4E0A61FA76ED395');
        $this->addSql('DROP INDEX IDX_C4E0A61FA76ED395 ON team');
        $this->addSql('ALTER TABLE team ADD user_id_id INT DEFAULT NULL, ADD game_match_id INT DEFAULT NULL, DROP user_id, DROP mmr, CHANGE status status VARCHAR(16) DEFAULT \'queued\' NOT NULL, CHANGE created_at created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE team ADD CONSTRAINT FK_C4E0A61F81FA53F0 FOREIGN KEY (game_match_id) REFERENCES game_match (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE team ADD CONSTRAINT FK_C4E0A61F9D86650F FOREIGN KEY (user_id_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C4E0A61F9D86650F ON team (user_id_id)');
        $this->addSql('CREATE INDEX IDX_C4E0A61F81FA53F0 ON team (game_match_id)');
        $this->addSql('ALTER TABLE game_match DROP mode, DROP seed, CHANGE created_at created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', CHANGE started_at started_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', CHANGE finished_at finished_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE team_hero MODIFY id INT NOT NULL');
        $this->addSql('ALTER TABLE team_hero DROP FOREIGN KEY FK_802F9AFD45B0BCD');
        $this->addSql('DROP INDEX uniq_team_hero ON team_hero');
        $this->addSql('DROP INDEX `PRIMARY` ON team_hero');
        $this->addSql('ALTER TABLE team_hero DROP id');
        $this->addSql('ALTER TABLE team_hero ADD CONSTRAINT FK_802F9AFD45B0BCD FOREIGN KEY (hero_id) REFERENCES hero (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE team_hero ADD PRIMARY KEY (team_id, hero_id)');
    }
}
