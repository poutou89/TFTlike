-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 22 août 2025 à 13:46
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `tft`
--

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20250819093907', '2025-08-19 10:32:48', 76),
('DoctrineMigrations\\Version20250819095627', '2025-08-19 10:32:48', 70),
('DoctrineMigrations\\Version20250819100206', '2025-08-19 10:32:48', 11),
('DoctrineMigrations\\Version20250819101019', '2025-08-19 10:32:48', 13),
('DoctrineMigrations\\Version20250819103317', '2025-08-19 10:33:22', 32),
('DoctrineMigrations\\Version20250819121315', '2025-08-19 12:13:24', 941),
('DoctrineMigrations\\Version20250819132018', '2025-08-19 13:20:26', 38),
('DoctrineMigrations\\Version20250820085533', '2025-08-20 08:55:46', 302),
('DoctrineMigrations\\Version20250820090339', '2025-08-20 09:03:46', 17),
('DoctrineMigrations\\Version20250820091510', '2025-08-20 09:15:14', 25),
('DoctrineMigrations\\Version20250822075655', '2025-08-22 07:57:04', 339),
('DoctrineMigrations\\Version20250822081128', '2025-08-22 08:11:32', 756),
('DoctrineMigrations\\Version20250822084949', '2025-08-22 08:49:56', 107);

-- --------------------------------------------------------

--
-- Structure de la table `family`
--

DROP TABLE IF EXISTS `family`;
CREATE TABLE IF NOT EXISTS `family` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `game_match`
--

DROP TABLE IF EXISTS `game_match`;
CREATE TABLE IF NOT EXISTS `game_match` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `region` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `game_version` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `started_at` datetime DEFAULT NULL,
  `finished_at` datetime DEFAULT NULL,
  `mode` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seed` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `game_match`
--

INSERT INTO `game_match` (`id`, `status`, `region`, `game_version`, `created_at`, `started_at`, `finished_at`, `mode`, `seed`) VALUES
(1, 'cancelled', NULL, NULL, '2025-08-22 10:41:06', NULL, NULL, '1v1', NULL),
(2, 'cancelled', NULL, NULL, '2025-08-22 10:42:10', NULL, NULL, '1v1', NULL),
(3, 'cancelled', NULL, NULL, '2025-08-22 10:47:11', NULL, NULL, '1v1', NULL),
(4, 'cancelled', NULL, NULL, '2025-08-22 11:06:40', NULL, NULL, '1v1', NULL),
(5, 'cancelled', NULL, NULL, '2025-08-22 11:12:43', NULL, NULL, '1v1', NULL),
(6, 'cancelled', NULL, NULL, '2025-08-22 11:27:33', NULL, NULL, '1v1', NULL),
(7, 'cancelled', NULL, NULL, '2025-08-22 11:30:57', NULL, NULL, '1v1', NULL),
(8, 'cancelled', NULL, NULL, '2025-08-22 11:30:58', NULL, NULL, '1v1', NULL),
(9, 'pending', NULL, NULL, '2025-08-22 11:41:52', NULL, NULL, '1v1', NULL),
(11, 'pending', NULL, NULL, '2025-08-22 11:57:15', NULL, NULL, '1v1', NULL),
(12, 'pending', NULL, NULL, '2025-08-22 11:57:16', NULL, NULL, '1v1', NULL),
(13, 'pending', NULL, NULL, '2025-08-22 12:00:40', NULL, NULL, '1v1', NULL),
(14, 'pending', 'EU', 'dev', '2025-08-22 14:03:54', NULL, NULL, '1v1', '13647a5b-7f50-11f0-b189-e89c25c32be6'),
(15, 'pending', NULL, NULL, '2025-08-22 12:08:28', NULL, NULL, '1v1', NULL),
(16, 'pending', NULL, NULL, '2025-08-22 12:17:03', NULL, NULL, '1v1', NULL),
(17, 'pending', NULL, NULL, '2025-08-22 12:30:34', NULL, NULL, '1v1', NULL),
(18, 'pending', NULL, NULL, '2025-08-22 12:45:03', NULL, NULL, '1v1', NULL),
(19, 'pending', NULL, NULL, '2025-08-22 12:49:06', NULL, NULL, '1v1', NULL),
(20, 'pending', NULL, NULL, '2025-08-22 12:49:17', NULL, NULL, '1v1', NULL),
(21, 'pending', NULL, NULL, '2025-08-22 13:02:31', NULL, NULL, '1v1', NULL),
(22, 'pending', NULL, NULL, '2025-08-22 13:04:14', NULL, NULL, '1v1', NULL),
(23, 'pending', NULL, NULL, '2025-08-22 13:05:09', NULL, NULL, '1v1', NULL),
(24, 'pending', NULL, NULL, '2025-08-22 13:05:36', NULL, NULL, '1v1', NULL),
(25, 'pending', NULL, NULL, '2025-08-22 13:21:31', NULL, NULL, '1v1', NULL),
(26, 'pending', NULL, NULL, '2025-08-22 13:26:58', NULL, NULL, '1v1', NULL),
(27, 'pending', NULL, NULL, '2025-08-22 13:32:47', NULL, NULL, '1v1', NULL),
(28, 'pending', NULL, NULL, '2025-08-22 13:45:34', NULL, NULL, '1v1', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `hero`
--

DROP TABLE IF EXISTS `hero`;
CREATE TABLE IF NOT EXISTS `hero` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pdv` int NOT NULL,
  `atk` int NOT NULL,
  `mana` int NOT NULL,
  `shield` int NOT NULL,
  `chance_atk` int NOT NULL,
  `picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` int DEFAULT NULL,
  `family_id_id` int DEFAULT NULL,
  `chance_crit` int NOT NULL,
  `chance_esq` int NOT NULL,
  `family` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_51CE6E86D60322AC` (`role_id`),
  KEY `IDX_51CE6E8643330D24` (`family_id_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `hero`
--

INSERT INTO `hero` (`id`, `nom`, `pdv`, `atk`, `mana`, `shield`, `chance_atk`, `picture`, `role_id`, `family_id_id`, `chance_crit`, `chance_esq`, `family`) VALUES
(1, 'nova', 100, 10, 0, 100, 85, 'nova-1755682295.png', 1, NULL, 10, 15, NULL),
(2, 'rhea', 100, 20, 100, 0, 85, 'rhea-1755682382.png', 3, NULL, 20, 15, NULL),
(3, 'vesper', 100, 30, 0, 0, 90, 'vesper-1755682783.png', 2, NULL, 20, 10, NULL),
(4, 'astra', 100, 20, 0, 30, 85, 'astra-1755682846.png', 2, NULL, 20, 15, NULL),
(5, 'Solaria', 100, 20, 100, 10, 85, 'solaria-1755682935.png', 3, NULL, 20, 10, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `match_queue`
--

DROP TABLE IF EXISTS `match_queue`;
CREATE TABLE IF NOT EXISTS `match_queue` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `team_id` int NOT NULL,
  `mode` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `region` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mmr_snapshot` int NOT NULL,
  `enqueued_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_mq_user_mode` (`user_id`,`mode`),
  KEY `IDX_C19700C2A76ED395` (`user_id`),
  KEY `IDX_C19700C2296CD8AE` (`team_id`),
  KEY `idx_mq_mode_region_enqueued` (`mode`,`region`,`enqueued_at`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `match_team`
--

DROP TABLE IF EXISTS `match_team`;
CREATE TABLE IF NOT EXISTS `match_team` (
  `id` int NOT NULL AUTO_INCREMENT,
  `game_match_id` int NOT NULL,
  `user_id` int NOT NULL,
  `team_id` int DEFAULT NULL,
  `side` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mmr_before` int NOT NULL,
  `mmr_after` int DEFAULT NULL,
  `result` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `accepted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_mt_side` (`game_match_id`,`side`),
  KEY `IDX_A58F176D81FA53F0` (`game_match_id`),
  KEY `IDX_A58F176DA76ED395` (`user_id`),
  KEY `IDX_A58F176D296CD8AE` (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `match_team`
--

INSERT INTO `match_team` (`id`, `game_match_id`, `user_id`, `team_id`, `side`, `mmr_before`, `mmr_after`, `result`, `accepted_at`) VALUES
(3, 14, 10, 27, 'L', 1200, NULL, NULL, NULL),
(4, 14, 11, 28, 'R', 1210, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

DROP TABLE IF EXISTS `messenger_messages`;
CREATE TABLE IF NOT EXISTS `messenger_messages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `available_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `delivered_at` datetime DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`id`),
  KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  KEY `IDX_75EA56E016BA31DB` (`delivered_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `nom`) VALUES
(1, 'Tank'),
(2, 'DPS'),
(3, 'Healer');

-- --------------------------------------------------------

--
-- Structure de la table `team`
--

DROP TABLE IF EXISTS `team`;
CREATE TABLE IF NOT EXISTS `team` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'idle',
  `lineup` json DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '(DC2Type:datetime_immutable)',
  `user_id` int NOT NULL,
  `mmr` int NOT NULL,
  `game_match_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_C4E0A61FA76ED395` (`user_id`),
  KEY `IDX_C4E0A61F81FA53F0` (`game_match_id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `team`
--

INSERT INTO `team` (`id`, `status`, `lineup`, `created_at`, `user_id`, `mmr`, `game_match_id`) VALUES
(1, 'matched', '[{\"x\": 2, \"y\": 2, \"id\": 5}, {\"x\": 2, \"y\": 1, \"id\": 1}, {\"x\": 3, \"y\": 1, \"id\": 3}, {\"x\": 3, \"y\": 2, \"id\": 4}]', '2025-08-22 10:41:05', 6, 1000, 1),
(2, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 5}, {\"x\": 6, \"y\": 1, \"id\": 3}, {\"x\": 6, \"y\": 2, \"id\": 2}, {\"x\": 6, \"y\": 3, \"id\": 1}]', '2025-08-22 10:41:06', 9, 1000, 1),
(3, 'matched', '[{\"x\": 1, \"y\": 1, \"id\": 4}, {\"x\": 2, \"y\": 1, \"id\": 3}, {\"x\": 3, \"y\": 1, \"id\": 5}, {\"x\": 4, \"y\": 1, \"id\": 1}]', '2025-08-22 10:42:10', 6, 1000, 2),
(4, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 4}, {\"x\": 6, \"y\": 1, \"id\": 2}, {\"x\": 6, \"y\": 2, \"id\": 3}, {\"x\": 6, \"y\": 3, \"id\": 1}]', '2025-08-22 10:42:10', 9, 1000, 2),
(5, 'matched', '[{\"x\": 2, \"y\": 1, \"id\": 3}, {\"x\": 3, \"y\": 1, \"id\": 4}, {\"x\": 4, \"y\": 1, \"id\": 1}, {\"x\": 3, \"y\": 2, \"id\": 5}]', '2025-08-22 10:47:11', 6, 1000, 3),
(6, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 5}, {\"x\": 6, \"y\": 1, \"id\": 1}, {\"x\": 6, \"y\": 2, \"id\": 3}, {\"x\": 6, \"y\": 3, \"id\": 4}]', '2025-08-22 10:47:11', 9, 1000, 3),
(7, 'matched', '[{\"x\": 1, \"y\": 1, \"id\": 4}, {\"x\": 2, \"y\": 1, \"id\": 1}, {\"x\": 3, \"y\": 1, \"id\": 3}, {\"x\": 4, \"y\": 1, \"id\": 5}]', '2025-08-22 11:06:40', 6, 1000, 4),
(8, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 4}, {\"x\": 6, \"y\": 1, \"id\": 2}, {\"x\": 6, \"y\": 2, \"id\": 1}, {\"x\": 6, \"y\": 3, \"id\": 5}]', '2025-08-22 11:06:40', 9, 1000, 4),
(9, 'matched', '[{\"x\": 1, \"y\": 1, \"id\": 4}, {\"x\": 2, \"y\": 1, \"id\": 1}, {\"x\": 3, \"y\": 1, \"id\": 5}, {\"x\": 4, \"y\": 1, \"id\": 3}]', '2025-08-22 11:12:43', 6, 1000, 5),
(10, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 1}, {\"x\": 6, \"y\": 1, \"id\": 5}, {\"x\": 6, \"y\": 2, \"id\": 2}, {\"x\": 6, \"y\": 3, \"id\": 3}]', '2025-08-22 11:12:43', 9, 1000, 5),
(11, 'matched', '[{\"x\": 1, \"y\": 1, \"id\": 1}, {\"x\": 1, \"y\": 2, \"id\": 4}, {\"x\": 0, \"y\": 1, \"id\": 5}, {\"x\": 0, \"y\": 2, \"id\": 3}]', '2025-08-22 11:27:33', 6, 1000, 6),
(12, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 5}, {\"x\": 6, \"y\": 1, \"id\": 2}, {\"x\": 6, \"y\": 2, \"id\": 4}, {\"x\": 6, \"y\": 3, \"id\": 3}]', '2025-08-22 11:27:33', 9, 1000, 6),
(13, 'matched', '[{\"x\": 1, \"y\": 2, \"id\": 3}, {\"x\": 1, \"y\": 1, \"id\": 1}, {\"x\": 0, \"y\": 2, \"id\": 4}, {\"x\": 0, \"y\": 1, \"id\": 5}]', '2025-08-22 11:30:57', 6, 1000, 7),
(14, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 2}, {\"x\": 6, \"y\": 1, \"id\": 1}, {\"x\": 6, \"y\": 2, \"id\": 5}, {\"x\": 6, \"y\": 3, \"id\": 4}]', '2025-08-22 11:30:57', 9, 1000, 7),
(15, 'matched', '[{\"x\": 0, \"y\": 1, \"id\": 2}, {\"x\": 1, \"y\": 1, \"id\": 4}, {\"x\": 0, \"y\": 2, \"id\": 5}, {\"x\": 1, \"y\": 2, \"id\": 3}]', '2025-08-22 11:30:58', 1, 1000, 8),
(16, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 5}, {\"x\": 6, \"y\": 1, \"id\": 3}, {\"x\": 6, \"y\": 2, \"id\": 1}, {\"x\": 6, \"y\": 3, \"id\": 4}]', '2025-08-22 11:30:58', 9, 1000, 8),
(17, 'matched', '[{\"x\": 2, \"y\": 1, \"id\": 3}, {\"x\": 2, \"y\": 2, \"id\": 5}, {\"x\": 1, \"y\": 1, \"id\": 1}, {\"x\": 1, \"y\": 2, \"id\": 4}]', '2025-08-22 11:41:52', 6, 1000, 9),
(18, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 2}, {\"x\": 6, \"y\": 1, \"id\": 1}, {\"x\": 6, \"y\": 2, \"id\": 3}, {\"x\": 6, \"y\": 3, \"id\": 4}]', '2025-08-22 11:41:52', 9, 1000, 9),
(23, 'matched', '[{\"x\": 2, \"y\": 1, \"id\": 3}, {\"x\": 2, \"y\": 2, \"id\": 4}, {\"x\": 2, \"y\": 3, \"id\": 5}, {\"x\": 2, \"y\": 0, \"id\": 1}]', '2025-08-22 11:57:15', 6, 1000, 11),
(24, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 3}, {\"x\": 6, \"y\": 1, \"id\": 1}, {\"x\": 6, \"y\": 2, \"id\": 2}, {\"x\": 6, \"y\": 3, \"id\": 4}]', '2025-08-22 11:57:15', 9, 1000, 11),
(25, 'matched', '[{\"x\": 4, \"y\": 1, \"id\": 3}, {\"x\": 4, \"y\": 2, \"id\": 2}, {\"x\": 4, \"y\": 3, \"id\": 5}, {\"x\": 4, \"y\": 0, \"id\": 4}]', '2025-08-22 11:57:16', 1, 1000, 12),
(26, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 3}, {\"x\": 6, \"y\": 1, \"id\": 2}, {\"x\": 6, \"y\": 2, \"id\": 5}, {\"x\": 6, \"y\": 3, \"id\": 1}]', '2025-08-22 11:57:16', 9, 1000, 12),
(27, 'READY', '[]', '2025-08-22 13:58:57', 10, 1200, NULL),
(28, 'READY', '[]', '2025-08-22 13:58:57', 11, 1210, NULL),
(29, 'matched', '[{\"x\": 0, \"y\": 3, \"id\": 3}, {\"x\": 0, \"y\": 2, \"id\": 4}, {\"x\": 0, \"y\": 1, \"id\": 2}, {\"x\": 0, \"y\": 0, \"id\": 5}]', '2025-08-22 12:00:37', 1, 1000, 13),
(30, 'matched', '[{\"x\": 2, \"y\": 1, \"id\": 5}, {\"x\": 2, \"y\": 2, \"id\": 3}, {\"x\": 2, \"y\": 3, \"id\": 1}, {\"x\": 2, \"y\": 0, \"id\": 4}]', '2025-08-22 12:00:40', 6, 1000, 13),
(31, 'matched', '[{\"x\": 1, \"y\": 1, \"id\": 5}, {\"x\": 1, \"y\": 2, \"id\": 4}, {\"x\": 1, \"y\": 3, \"id\": 3}, {\"x\": 1, \"y\": 0, \"id\": 1}]', '2025-08-22 12:08:17', 6, 1000, 15),
(32, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 3}, {\"x\": 6, \"y\": 1, \"id\": 2}, {\"x\": 6, \"y\": 2, \"id\": 5}, {\"x\": 6, \"y\": 3, \"id\": 4}]', '2025-08-22 12:08:28', 9, 1000, 15),
(33, 'matched', '[{\"x\": 2, \"y\": 1, \"id\": 5}, {\"x\": 2, \"y\": 2, \"id\": 4}, {\"x\": 2, \"y\": 3, \"id\": 3}, {\"x\": 2, \"y\": 0, \"id\": 1}]', '2025-08-22 12:16:52', 6, 1000, 16),
(34, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 2}, {\"x\": 6, \"y\": 1, \"id\": 4}, {\"x\": 6, \"y\": 2, \"id\": 1}, {\"x\": 6, \"y\": 3, \"id\": 3}]', '2025-08-22 12:17:03', 9, 1000, 16),
(35, 'matched', '[{\"x\": 2, \"y\": 1, \"id\": 3}, {\"x\": 2, \"y\": 2, \"id\": 1}, {\"x\": 2, \"y\": 3, \"id\": 5}, {\"x\": 2, \"y\": 0, \"id\": 4}]', '2025-08-22 12:30:24', 6, 1000, 17),
(36, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 1}, {\"x\": 6, \"y\": 1, \"id\": 3}, {\"x\": 6, \"y\": 2, \"id\": 4}, {\"x\": 6, \"y\": 3, \"id\": 2}]', '2025-08-22 12:30:34', 9, 1000, 17),
(37, 'matched', '[{\"x\": 2, \"y\": 1, \"id\": 3}, {\"x\": 1, \"y\": 1, \"id\": 5}, {\"x\": 0, \"y\": 1, \"id\": 4}, {\"x\": 0, \"y\": 0, \"id\": 1}]', '2025-08-22 12:45:02', 6, 1000, 18),
(38, 'matched', '[{\"x\": 0, \"y\": 1, \"id\": 2}, {\"x\": 0, \"y\": 2, \"id\": 5}, {\"x\": 0, \"y\": 3, \"id\": 4}, {\"x\": 0, \"y\": 0, \"id\": 3}]', '2025-08-22 12:45:03', 1, 1000, 18),
(39, 'matched', '[{\"x\": 0, \"y\": 0, \"id\": 3}, {\"x\": 1, \"y\": 0, \"id\": 2}, {\"x\": 2, \"y\": 0, \"id\": 1}, {\"x\": 3, \"y\": 0, \"id\": 4}]', '2025-08-22 12:48:56', 8, 1000, 19),
(40, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 3}, {\"x\": 6, \"y\": 1, \"id\": 1}, {\"x\": 6, \"y\": 2, \"id\": 2}, {\"x\": 6, \"y\": 3, \"id\": 5}]', '2025-08-22 12:49:06', 9, 1000, 19),
(41, 'matched', '[{\"x\": 0, \"y\": 3, \"id\": 5}, {\"x\": 2, \"y\": 3, \"id\": 3}, {\"x\": 3, \"y\": 3, \"id\": 1}, {\"x\": 1, \"y\": 3, \"id\": 4}]', '2025-08-22 12:49:07', 6, 1000, 20),
(42, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 5}, {\"x\": 6, \"y\": 1, \"id\": 4}, {\"x\": 6, \"y\": 2, \"id\": 3}, {\"x\": 6, \"y\": 3, \"id\": 1}]', '2025-08-22 12:49:17', 9, 1000, 20),
(43, 'matched', '[{\"x\": 0, \"y\": 0, \"id\": 4}, {\"x\": 1, \"y\": 0, \"id\": 5}, {\"x\": 2, \"y\": 0, \"id\": 3}, {\"x\": 4, \"y\": 0, \"id\": 1}]', '2025-08-22 13:02:21', 8, 1000, 21),
(44, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 1}, {\"x\": 6, \"y\": 1, \"id\": 4}, {\"x\": 6, \"y\": 2, \"id\": 2}, {\"x\": 6, \"y\": 3, \"id\": 5}]', '2025-08-22 13:02:31', 9, 1000, 21),
(45, 'matched', '[{\"x\": 0, \"y\": 0, \"id\": 1}, {\"x\": 1, \"y\": 0, \"id\": 4}, {\"x\": 2, \"y\": 0, \"id\": 5}, {\"x\": 3, \"y\": 0, \"id\": 2}]', '2025-08-22 13:04:03', 8, 1000, 22),
(46, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 3}, {\"x\": 6, \"y\": 1, \"id\": 4}, {\"x\": 6, \"y\": 2, \"id\": 2}, {\"x\": 6, \"y\": 3, \"id\": 5}]', '2025-08-22 13:04:14', 9, 1000, 22),
(47, 'matched', '[{\"x\": 0, \"y\": 1, \"id\": 5}, {\"x\": 0, \"y\": 2, \"id\": 4}, {\"x\": 0, \"y\": 3, \"id\": 3}, {\"x\": 0, \"y\": 0, \"id\": 1}]', '2025-08-22 13:04:59', 6, 1000, 23),
(48, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 1}, {\"x\": 6, \"y\": 1, \"id\": 4}, {\"x\": 6, \"y\": 2, \"id\": 2}, {\"x\": 6, \"y\": 3, \"id\": 3}]', '2025-08-22 13:05:09', 9, 1000, 23),
(49, 'matched', '[{\"x\": 0, \"y\": 0, \"id\": 3}, {\"x\": 1, \"y\": 0, \"id\": 1}, {\"x\": 2, \"y\": 0, \"id\": 4}, {\"x\": 3, \"y\": 0, \"id\": 5}]', '2025-08-22 13:05:26', 8, 1000, 24),
(50, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 5}, {\"x\": 6, \"y\": 1, \"id\": 3}, {\"x\": 6, \"y\": 2, \"id\": 1}, {\"x\": 6, \"y\": 3, \"id\": 2}]', '2025-08-22 13:05:36', 9, 1000, 24),
(51, 'matched', '[{\"x\": 0, \"y\": 0, \"id\": 3}, {\"x\": 1, \"y\": 1, \"id\": 5}, {\"x\": 1, \"y\": 2, \"id\": 4}, {\"x\": 0, \"y\": 3, \"id\": 1}]', '2025-08-22 13:21:21', 6, 1000, 25),
(52, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 2}, {\"x\": 6, \"y\": 1, \"id\": 3}, {\"x\": 6, \"y\": 2, \"id\": 5}, {\"x\": 6, \"y\": 3, \"id\": 1}]', '2025-08-22 13:21:31', 9, 1000, 25),
(53, 'matched', '[{\"x\": 2, \"y\": 2, \"id\": 4}, {\"x\": 1, \"y\": 2, \"id\": 3}, {\"x\": 1, \"y\": 1, \"id\": 1}, {\"x\": 2, \"y\": 1, \"id\": 5}]', '2025-08-22 13:26:48', 6, 1000, 26),
(54, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 2}, {\"x\": 6, \"y\": 1, \"id\": 3}, {\"x\": 6, \"y\": 2, \"id\": 5}, {\"x\": 6, \"y\": 3, \"id\": 1}]', '2025-08-22 13:26:58', 9, 1000, 26),
(55, 'matched', '[{\"x\": 1, \"y\": 1, \"id\": 3}, {\"x\": 1, \"y\": 2, \"id\": 5}, {\"x\": 1, \"y\": 3, \"id\": 4}, {\"x\": 1, \"y\": 0, \"id\": 1}]', '2025-08-22 13:32:37', 6, 1000, 27),
(56, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 2}, {\"x\": 6, \"y\": 1, \"id\": 1}, {\"x\": 6, \"y\": 2, \"id\": 3}, {\"x\": 6, \"y\": 3, \"id\": 4}]', '2025-08-22 13:32:47', 9, 1000, 27),
(57, 'matched', '[{\"x\": 2, \"y\": 1, \"id\": 1}, {\"x\": 1, \"y\": 2, \"id\": 5}, {\"x\": 1, \"y\": 1, \"id\": 4}, {\"x\": 1, \"y\": 0, \"id\": 3}]', '2025-08-22 13:45:23', 6, 1000, 28),
(58, 'matched', '[{\"x\": 6, \"y\": 0, \"id\": 5}, {\"x\": 6, \"y\": 1, \"id\": 1}, {\"x\": 6, \"y\": 2, \"id\": 4}, {\"x\": 6, \"y\": 3, \"id\": 3}]', '2025-08-22 13:45:34', 9, 1000, 28);

-- --------------------------------------------------------

--
-- Structure de la table `team_hero`
--

DROP TABLE IF EXISTS `team_hero`;
CREATE TABLE IF NOT EXISTS `team_hero` (
  `team_id` int NOT NULL,
  `hero_id` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_team_hero` (`team_id`,`hero_id`),
  KEY `IDX_802F9AFD296CD8AE` (`team_id`),
  KEY `IDX_802F9AFD45B0BCD` (`hero_id`)
) ENGINE=InnoDB AUTO_INCREMENT=209 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `team_hero`
--

INSERT INTO `team_hero` (`team_id`, `hero_id`, `id`) VALUES
(1, 1, 2),
(1, 3, 3),
(1, 4, 4),
(1, 5, 1),
(2, 1, 8),
(2, 2, 7),
(2, 3, 6),
(2, 5, 5),
(3, 1, 12),
(3, 3, 10),
(3, 4, 9),
(3, 5, 11),
(4, 1, 16),
(4, 2, 14),
(4, 3, 15),
(4, 4, 13),
(5, 1, 19),
(5, 3, 17),
(5, 4, 18),
(5, 5, 20),
(6, 1, 22),
(6, 3, 23),
(6, 4, 24),
(6, 5, 21),
(7, 1, 26),
(7, 3, 27),
(7, 4, 25),
(7, 5, 28),
(8, 1, 31),
(8, 2, 30),
(8, 4, 29),
(8, 5, 32),
(9, 1, 34),
(9, 3, 36),
(9, 4, 33),
(9, 5, 35),
(10, 1, 37),
(10, 2, 39),
(10, 3, 40),
(10, 5, 38),
(11, 1, 41),
(11, 3, 44),
(11, 4, 42),
(11, 5, 43),
(12, 2, 46),
(12, 3, 48),
(12, 4, 47),
(12, 5, 45),
(13, 1, 50),
(13, 3, 49),
(13, 4, 51),
(13, 5, 52),
(14, 1, 54),
(14, 2, 53),
(14, 4, 56),
(14, 5, 55),
(15, 2, 57),
(15, 3, 60),
(15, 4, 58),
(15, 5, 59),
(16, 1, 63),
(16, 3, 62),
(16, 4, 64),
(16, 5, 61),
(17, 1, 67),
(17, 3, 65),
(17, 4, 68),
(17, 5, 66),
(18, 1, 70),
(18, 2, 69),
(18, 3, 71),
(18, 4, 72),
(23, 1, 76),
(23, 3, 73),
(23, 4, 74),
(23, 5, 75),
(24, 1, 78),
(24, 2, 79),
(24, 3, 77),
(24, 4, 80),
(25, 2, 82),
(25, 3, 81),
(25, 4, 84),
(25, 5, 83),
(26, 1, 88),
(26, 2, 86),
(26, 3, 85),
(26, 5, 87),
(29, 2, 91),
(29, 3, 89),
(29, 4, 90),
(29, 5, 92),
(30, 1, 95),
(30, 3, 94),
(30, 4, 96),
(30, 5, 93),
(31, 1, 100),
(31, 3, 99),
(31, 4, 98),
(31, 5, 97),
(32, 2, 102),
(32, 3, 101),
(32, 4, 104),
(32, 5, 103),
(33, 1, 108),
(33, 3, 107),
(33, 4, 106),
(33, 5, 105),
(34, 1, 111),
(34, 2, 109),
(34, 3, 112),
(34, 4, 110),
(35, 1, 114),
(35, 3, 113),
(35, 4, 116),
(35, 5, 115),
(36, 1, 117),
(36, 2, 120),
(36, 3, 118),
(36, 4, 119),
(37, 1, 124),
(37, 3, 121),
(37, 4, 123),
(37, 5, 122),
(38, 2, 125),
(38, 3, 128),
(38, 4, 127),
(38, 5, 126),
(39, 1, 131),
(39, 2, 130),
(39, 3, 129),
(39, 4, 132),
(40, 1, 134),
(40, 2, 135),
(40, 3, 133),
(40, 5, 136),
(41, 1, 139),
(41, 3, 138),
(41, 4, 140),
(41, 5, 137),
(42, 1, 144),
(42, 3, 143),
(42, 4, 142),
(42, 5, 141),
(43, 1, 148),
(43, 3, 147),
(43, 4, 145),
(43, 5, 146),
(44, 1, 149),
(44, 2, 151),
(44, 4, 150),
(44, 5, 152),
(45, 1, 153),
(45, 2, 156),
(45, 4, 154),
(45, 5, 155),
(46, 2, 159),
(46, 3, 157),
(46, 4, 158),
(46, 5, 160),
(47, 1, 164),
(47, 3, 163),
(47, 4, 162),
(47, 5, 161),
(48, 1, 165),
(48, 2, 167),
(48, 3, 168),
(48, 4, 166),
(49, 1, 170),
(49, 3, 169),
(49, 4, 171),
(49, 5, 172),
(50, 1, 175),
(50, 2, 176),
(50, 3, 174),
(50, 5, 173),
(51, 1, 180),
(51, 3, 177),
(51, 4, 179),
(51, 5, 178),
(52, 1, 184),
(52, 2, 181),
(52, 3, 182),
(52, 5, 183),
(53, 1, 187),
(53, 3, 186),
(53, 4, 185),
(53, 5, 188),
(54, 1, 192),
(54, 2, 189),
(54, 3, 190),
(54, 5, 191),
(55, 1, 196),
(55, 3, 193),
(55, 4, 195),
(55, 5, 194),
(56, 1, 198),
(56, 2, 197),
(56, 3, 199),
(56, 4, 200),
(57, 1, 201),
(57, 3, 204),
(57, 4, 203),
(57, 5, 202),
(58, 1, 206),
(58, 3, 208),
(58, 4, 207),
(58, 5, 205);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(180) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `historique` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_IDENTIFIER_USERNAME` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `roles`, `password`, `historique`) VALUES
(1, 'Wesker', '[\"ROLE_ADMIN\"]', '$2y$13$X1Xv7aE/1H5YdiuEC/0/Q.URNDlUs8y03o3Z48LDP6FRxHYEmQKMa', ''),
(3, 'Test', '[\"ROLE_USER\"]', '$2y$13$pQ4mumkfwsVMfEQuhlUOV.yc09fxPISWIMSKcRaWowyFHxJx8HaMu', ''),
(5, 'poutou89', '[\"ROLE_USER\"]', '$2y$13$Tz7f5ha/f4BLtH9vF9.4/eZJCvl5MZOxrUnON/xj8wb7lp1zOB66K', ''),
(6, 'Tiplouf', '[\"ROLE_USER\"]', '$2y$13$01VgXAeYLBJ8lUHJ5tT7OOc1edlebp5SOdUzLIf26kye3cScFnqq6', ''),
(7, 'poutou89450', '[\"ROLE_USER\"]', '$2y$13$LYpbP.xjHOxy72Cjm.7FPeWUTouWycJBR43TVilbVX99SryTda3gG', ''),
(8, 'poutou894501', '[\"ROLE_USER\"]', '$2y$13$OQY9I42zJOVE4ZHAH335J.UUXLfu3TEME2G7U7R1DgTeZ2737JA2y', ''),
(9, 'BOT', '[\"ROLE_BOT\"]', '$2y$13$OovuLaCtF8LHiImnUpH0VOmPeDN4SGwcxaIcXqDVqo5dB6yaJOKra', 'Compte IA'),
(10, 'alice', '[]', 'x', ''),
(11, 'bob', '[]', 'x', '');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `hero`
--
ALTER TABLE `hero`
  ADD CONSTRAINT `FK_51CE6E8643330D24` FOREIGN KEY (`family_id_id`) REFERENCES `family` (`id`),
  ADD CONSTRAINT `FK_51CE6E86D60322AC` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);

--
-- Contraintes pour la table `match_queue`
--
ALTER TABLE `match_queue`
  ADD CONSTRAINT `FK_C19700C2296CD8AE` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_C19700C2A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `match_team`
--
ALTER TABLE `match_team`
  ADD CONSTRAINT `FK_A58F176D296CD8AE` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `FK_A58F176D81FA53F0` FOREIGN KEY (`game_match_id`) REFERENCES `game_match` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_A58F176DA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `team`
--
ALTER TABLE `team`
  ADD CONSTRAINT `FK_C4E0A61F81FA53F0` FOREIGN KEY (`game_match_id`) REFERENCES `game_match` (`id`),
  ADD CONSTRAINT `FK_C4E0A61FA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `team_hero`
--
ALTER TABLE `team_hero`
  ADD CONSTRAINT `FK_802F9AFD296CD8AE` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_802F9AFD45B0BCD` FOREIGN KEY (`hero_id`) REFERENCES `hero` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
