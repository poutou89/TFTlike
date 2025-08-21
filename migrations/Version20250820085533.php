<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250820085533 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE family (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE hero ADD family_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE hero ADD CONSTRAINT FK_51CE6E8643330D24 FOREIGN KEY (family_id_id) REFERENCES family (id)');
        $this->addSql('CREATE INDEX IDX_51CE6E8643330D24 ON hero (family_id_id)');
        $this->addSql('ALTER TABLE user CHANGE historique historique VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE hero DROP FOREIGN KEY FK_51CE6E8643330D24');
        $this->addSql('DROP TABLE family');
        $this->addSql('ALTER TABLE user CHANGE historique historique VARCHAR(255) DEFAULT NULL');
        $this->addSql('DROP INDEX IDX_51CE6E8643330D24 ON hero');
        $this->addSql('ALTER TABLE hero DROP family_id_id');
    }
}
