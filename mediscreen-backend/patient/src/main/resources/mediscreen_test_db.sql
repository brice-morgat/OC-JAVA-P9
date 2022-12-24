CREATE DATABASE IF NOT EXISTS `mediscreen_test_db`;

DROP TABLE IF EXISTS `patient`;
CREATE TABLE IF NOT EXISTS `patient` (
                                         `id` bigint NOT NULL,
                                         `address` varchar(255) DEFAULT NULL,
    `dob` date DEFAULT NULL,
    `family` varchar(255) DEFAULT NULL,
    `given` varchar(255) DEFAULT NULL,
    `phone` varchar(255) DEFAULT NULL,
    `sex` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `patient_id_seq`;
CREATE TABLE IF NOT EXISTS `patient_id_seq` (
    `next_val` bigint DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `patient_id_seq` (`next_val`) VALUES
    (1);