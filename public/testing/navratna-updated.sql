-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2024 at 11:32 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `navratna`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `address_line_1` varchar(255) DEFAULT NULL,
  `address_line_2` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `landmark` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gold_price`
--

CREATE TABLE `gold_price` (
  `id` int(11) DEFAULT NULL,
  `price_1_gram_24K` int(11) NOT NULL,
  `price_1_gram_22K` int(11) DEFAULT NULL,
  `price_1_gram_18K` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gold_price`
--

INSERT INTO `gold_price` (`id`, `price_1_gram_24K`, `price_1_gram_22K`, `price_1_gram_18K`) VALUES
(1, 7849, 7195, 5887);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `metal_type` varchar(255) NOT NULL,
  `karat` varchar(255) NOT NULL,
  `weight` int(11) NOT NULL,
  `weight_type` varchar(255) NOT NULL DEFAULT 'GRAM',
  `color` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `product_img1` varchar(255) DEFAULT NULL,
  `product_img2` varchar(255) DEFAULT NULL,
  `product_img3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `name`, `metal_type`, `karat`, `weight`, `weight_type`, `color`, `description`, `product_img1`, `product_img2`, `product_img3`) VALUES
(1, '1 gram 24 Karat Gold Coin with Lakshmi Ganesha Motif', 'Gold', '24K', 1, 'GRAM', 'Yellow', 'This 24 Karat Navratna gold coin is the perfect investment for you. The tail also features the gold purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.', '/24K_1_gram_gold_coin.jpeg', '/24K_1_gram_gold_coin.jpeg', '/24K_1_gram_gold_coin.jpeg'),
(2, '2 gram 24 Karat Gold Coin with Lakshmi Ganesha Motif', 'Gold', '24K', 2, 'GRAM', 'Yellow', 'This 24 Karat yellow gold coin features the auspicious Lakshmi Ganesha motif and weighs 2 gram. The tail also features the gold purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high polished finish adds a lustrous appeal to the coin.', '/24K_1_gram_gold_coin.jpeg', '/24K_1_gram_gold_coin.jpeg', '/24K_1_gram_gold_coin.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL DEFAULT 'NOT NULL',
  `password` varchar(255) NOT NULL DEFAULT 'NOT NULL',
  `email` varchar(255) NOT NULL DEFAULT 'NOT NULL',
  `session_id` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `session_id`, `created_at`, `updated_at`) VALUES
(1, 'san', '$2y$10$tMiYyJ.MB1.60vrE.NMx8.cux5iMtkzWwvkBrxbF7lGuugW.qhgHG', 'NOT NULL', NULL, '2024-11-25 08:12:33', '2024-11-25 13:42:33'),
(2, 'admin', 'admin', 'admin@gmail.com', NULL, '2024-11-25 08:12:33', '2024-11-25 13:42:33'),
(3, 'new admin', '$2y$10$HcPH9aMC.Zf1mNvaBO9iCu0gKYQUmD6PpNkJntiPWY1Bjcdvn.niS', 'adm@gmail.com', '0e9d97953f77db9ae71caeb9f76280c29a5a27649368054ecc18f0377801a8e6', '2024-11-25 08:12:33', '2024-11-25 15:58:58'),
(4, 'demo', '$2y$10$LTXh5vdbmzk7x6R1jTsON.s3bWQcMlAGU1gu8F/yiVP1Knswggd7G', 'demo@gmail.com', NULL, '2024-11-25 08:12:33', '2024-11-25 13:42:33'),
(5, 'navratna', '$2y$10$aeg.2TclN.P6raFTDN49/uaavt6LCoYlNljux4QexRfs/kddq1LLG', 'navratna@gmail.com', NULL, '2024-11-25 08:12:33', '2024-11-25 13:42:33'),
(6, 'demo new', '$2y$10$l4RWsvtOmKwJvKhIlR8ot.SGurttmL.C5n3pFofr8UM.VuNuH1Zsa', 'demonew@gmail.com', NULL, '2024-11-25 08:12:33', '2024-11-25 13:42:33'),
(8, 'demo', '$2y$10$sh2GKimjHUhd5dcYVOi9Aud2LBNsElq4wrNDryjf4WyuLIAxq0JPC', 'demo1@gmail.com', 'dddefd097c98caf028e950ce27c39cb217e28eff0e775a5333dabcaf415cc04c', '2024-11-25 09:08:55', '2024-11-25 14:39:25'),
(10, 'try', '$2y$10$SVdV2Nllo9W/PcwIRIKXQ.3DJYJfBv21qorjCTrVyw5dMAEe1oPgC', 'try@gmail.com', NULL, '2024-11-25 09:12:24', '2024-11-25 14:42:24'),
(11, 'new user', '$2y$10$ehWPPM3v3GxbGTyFKu3i5.utmfwdC6.iDvD8NSIcHMBB.SSFdnANO', 'user@gmail.com', NULL, '2024-11-25 09:13:44', '2024-11-25 14:43:44'),
(12, 'try1', '$2y$10$XNP4cPE5yBKcVrcj9vlw0uM2ROd46LDjdWIOh7K1GWsSlCqbqoW2m', 'try1@gmail.com', NULL, '2024-11-25 09:40:27', '2024-11-25 15:10:27'),
(13, 'hey', '$2y$10$ecwk0egs7StEk8C/7Yqhq..kgYzTN4W.tvS2tRXzk8CUNK.e2OzgG', 'hey@gmail.com', NULL, '2024-11-25 09:46:13', '2024-11-25 15:16:13'),
(14, 'try2', '$2y$10$W50BqAm0oL3kFn7L16tqn.vT8Ell3aaaLmbaJtu6cMFvAZEVF.q0e', 'try2@gmail.com', NULL, '2024-11-25 09:50:40', '2024-11-25 15:20:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `gold_price`
--
ALTER TABLE `gold_price`
  ADD PRIMARY KEY (`price_1_gram_24K`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
