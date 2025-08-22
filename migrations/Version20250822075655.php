<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250822075655 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE game_match (id INT AUTO_INCREMENT NOT NULL, status VARCHAR(255) NOT NULL, region VARCHAR(255) DEFAULT NULL, game_version VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', started_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', finished_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE team (id INT AUTO_INCREMENT NOT NULL, user_id_id INT DEFAULT NULL, game_match_id INT DEFAULT NULL, status VARCHAR(16) DEFAULT \'queued\' NOT NULL, lineup JSON DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_C4E0A61F9D86650F (user_id_id), INDEX IDX_C4E0A61F81FA53F0 (game_match_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE team_hero (team_id INT NOT NULL, hero_id INT NOT NULL, INDEX IDX_802F9AFD296CD8AE (team_id), INDEX IDX_802F9AFD45B0BCD (hero_id), PRIMARY KEY(team_id, hero_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE team ADD CONSTRAINT FK_C4E0A61F9D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE team ADD CONSTRAINT FK_C4E0A61F81FA53F0 FOREIGN KEY (game_match_id) REFERENCES game_match (id)');
        $this->addSql('ALTER TABLE team_hero ADD CONSTRAINT FK_802F9AFD296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE team_hero ADD CONSTRAINT FK_802F9AFD45B0BCD FOREIGN KEY (hero_id) REFERENCES hero (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE hero ADD family VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE historique historique VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE team DROP FOREIGN KEY FK_C4E0A61F9D86650F');
        $this->addSql('ALTER TABLE team DROP FOREIGN KEY FK_C4E0A61F81FA53F0');
        $this->addSql('ALTER TABLE team_hero DROP FOREIGN KEY FK_802F9AFD296CD8AE');
        $this->addSql('ALTER TABLE team_hero DROP FOREIGN KEY FK_802F9AFD45B0BCD');
        $this->addSql('DROP TABLE game_match');
        $this->addSql('DROP TABLE team');
        $this->addSql('DROP TABLE team_hero');
        $this->addSql('DROP TABLE messenger_messages');
        $this->addSql('ALTER TABLE hero DROP family');
        $this->addSql('ALTER TABLE user CHANGE historique historique VARCHAR(255) DEFAULT NULL');
    }
}
