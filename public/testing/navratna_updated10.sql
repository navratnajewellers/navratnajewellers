-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2024 at 02:17 PM
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
  `state` varchar(255) NOT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `landmark` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `user_id`, `address_line_1`, `address_line_2`, `country`, `city`, `state`, `postal_code`, `landmark`, `phone_number`, `created_at`) VALUES
(1, 4, 'Ranchi', 'Jharkhand', 'India', 'Ranchi', 'Jharkhand', '834001', NULL, '1234567890', '2024-12-04 11:06:16'),
(2, 6, 'Delhi, India', NULL, 'India', 'Delhi', 'Delhi', '664566', NULL, '9988776655', '2024-12-05 09:55:36'),
(3, 3, 'Ranchi, Jharkhand', '', 'India', 'Ranchi', 'Jharkhand', '834001', '', '9204780758', '2024-12-05 10:48:30'),
(4, 8, 'Ranchi, Jharkhand', '', 'India', 'Ranchi', 'Jharkhand', '834001', '', '9204780758', '2024-12-05 11:05:40'),
(5, 22, '1451656dhj ksbxakus', '', 'India', 'Ranchi', 'Jharkhand', '834001', '', '1618828772', '2024-12-05 11:39:03');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `product_id`, `quantity`, `price`, `created_at`, `updated_at`) VALUES
(3, 3, 1, 7, 61117, '2024-11-27 08:09:00', '2024-11-27 13:43:10'),
(16, 22, 1, 1, 8786, '2024-12-05 11:38:02', '2024-12-05 17:08:02'),
(35, 4, 2, 1, 8786, '2024-12-06 11:08:56', '2024-12-06 16:38:56'),
(36, 4, 3, 3, 26358, '2024-12-06 11:08:56', '2024-12-06 16:39:46');

-- --------------------------------------------------------

--
-- Table structure for table `gold_price`
--

CREATE TABLE `gold_price` (
  `id` int(11) DEFAULT NULL,
  `price_1_gram_24K` int(11) NOT NULL,
  `price_1_gram_22K` int(11) DEFAULT NULL,
  `price_1_gram_18K` int(11) NOT NULL,
  `price_1_gram_24K_s` int(11) NOT NULL DEFAULT 99,
  `making_charge_gold` decimal(10,2) NOT NULL DEFAULT 0.08,
  `making_charge_silver` int(11) NOT NULL DEFAULT 20,
  `gst_gold` decimal(10,2) NOT NULL DEFAULT 0.03
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gold_price`
--

INSERT INTO `gold_price` (`id`, `price_1_gram_24K`, `price_1_gram_22K`, `price_1_gram_18K`, `price_1_gram_24K_s`, `making_charge_gold`, `making_charge_silver`, `gst_gold`) VALUES
(1, 7898, 7195, 5887, 99, 0.08, 20, 0.03);

-- --------------------------------------------------------

--
-- Table structure for table `offline_cart`
--

CREATE TABLE `offline_cart` (
  `id` int(11) NOT NULL,
  `local_user_id` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `offline_cart`
--

INSERT INTO `offline_cart` (`id`, `local_user_id`, `product_id`, `quantity`, `price`, `created_at`, `updated_at`) VALUES
(10, '27ed3229d6e5b59d21ab6ea14b726368b7ebd281a9b0e3c37e11eb85e61bca16', 2, 2, 34926, '2024-11-28 07:07:53', '2024-11-28 12:37:53'),
(15, 'f3ab981a393c4da72d279e674cd09c2dc61b8289026dc5915e7bc5245e1011a5', 1, 1, 8786, '2024-12-02 08:17:03', '2024-12-02 13:47:03');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `order_date` datetime DEFAULT current_timestamp(),
  `order_updateAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(50) DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `total_amount`, `order_date`, `order_updateAt`, `status`) VALUES
('order_PT10ahqcpmVqTa', 4, 50000.00, '2024-12-04 12:53:01', '2024-12-04 12:53:01', 'created'),
('order_PT14QvJARSQC2m', 4, 50000.00, '2024-12-04 12:56:39', '2024-12-04 12:56:39', 'created'),
('order_PT1BWXobSgzz1P', 4, 105429.00, '2024-12-04 13:03:22', '2024-12-04 13:03:22', 'created'),
('order_PT1EW5TFPf0IRA', 4, 123000.00, '2024-12-04 13:06:12', '2024-12-04 13:06:36', 'paid'),
('order_PT2efWo2gDsWs4', 3, 61500.00, '2024-12-04 14:29:40', '2024-12-04 14:30:23', 'paid'),
('order_PT41BgNw7AcZpP', 4, 79072.00, '2024-12-04 15:49:40', '2024-12-04 15:50:10', 'paid'),
('order_PTTjR8xBit9sZP', 4, 8786.00, '2024-12-05 16:58:54', '2024-12-05 16:59:36', 'paid'),
('order_PTTpWh7MbShKVP', 4, 35143.00, '2024-12-05 17:04:40', '2024-12-05 17:05:04', 'paid'),
('order_PTU2YcTUbLGJEv', 4, 35142.00, '2024-12-05 17:17:00', '2024-12-05 17:17:37', 'paid'),
('order_PTU7I5zvXqeeS7', 4, 8786.00, '2024-12-05 17:21:29', '2024-12-05 17:21:57', 'paid');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id_oi` varchar(255) DEFAULT NULL,
  `product_id_oi` int(11) NOT NULL,
  `quantity_oi` int(11) NOT NULL,
  `price_oi` decimal(10,2) NOT NULL,
  `created_at_oi` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at_oi` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id_oi`, `product_id_oi`, `quantity_oi`, `price_oi`, `created_at_oi`, `updated_at_oi`) VALUES
(5, 'order_PT41BgNw7AcZpP', 2, 4, 31592.00, '2024-12-04 10:20:10', '2024-12-04 15:50:10'),
(6, 'order_PT41BgNw7AcZpP', 1, 1, 7898.00, '2024-12-04 10:20:10', '2024-12-04 15:50:10'),
(7, 'order_PTTjR8xBit9sZP', 1, 1, 7898.00, '2024-12-05 11:29:36', '2024-12-05 16:59:36'),
(8, 'order_PTTpWh7MbShKVP', 3, 1, 7898.00, '2024-12-05 11:35:04', '2024-12-05 17:05:04'),
(9, 'order_PTU2YcTUbLGJEv', 1, 2, 15796.00, '2024-12-05 11:47:37', '2024-12-05 17:17:37'),
(10, 'order_PTU2YcTUbLGJEv', 2, 1, 7898.00, '2024-12-05 11:47:37', '2024-12-05 17:17:37'),
(11, 'order_PTU7I5zvXqeeS7', 1, 1, 7898.00, '2024-12-05 11:51:57', '2024-12-05 17:21:57');

-- --------------------------------------------------------

--
-- Table structure for table `payment_details`
--

CREATE TABLE `payment_details` (
  `pd_id` int(11) NOT NULL,
  `pd_order_id` varchar(255) NOT NULL,
  `pd_payment_id` varchar(255) NOT NULL,
  `pd_verify_signature` varchar(255) NOT NULL,
  `pd_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `pd_updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment_details`
--

INSERT INTO `payment_details` (`pd_id`, `pd_order_id`, `pd_payment_id`, `pd_verify_signature`, `pd_created_at`, `pd_updated_at`) VALUES
(1, 'order_PT1EW5TFPf0IRA', 'pay_PT1EflYgSATe15', 'c51b939d856a90149d4ace505d95b6dec7b9f5ac25cf5a489c80021934b5d51f', '2024-12-04 07:36:36', '2024-12-04 13:06:36'),
(2, 'order_PT2efWo2gDsWs4', 'pay_PT2fAH5JJyolcl', '56e334024cc4de42811944bb3465e700fb54f0c89558e76cddfd040826436467', '2024-12-04 09:00:23', '2024-12-04 14:30:23'),
(3, 'order_PT41BgNw7AcZpP', 'pay_PT41SOqqk2sRaj', 'e992fd8c211fb396416d7c46f0d58ba612e12b647e3fd7a7c1e1a607f821fb21', '2024-12-04 10:20:10', '2024-12-04 15:50:10'),
(4, 'order_PTTjR8xBit9sZP', 'pay_PTTjsxgfBQPYD3', '9c2c8edcb6c808589d1c8ca7c0687cd25837bdecacf824c8241901899e4fcb76', '2024-12-05 11:29:36', '2024-12-05 16:59:36'),
(5, 'order_PTTpWh7MbShKVP', 'pay_PTTpgSOrhQ2dQ0', 'f039f0aa226889756167caee69a7f14b473a217a3e1599ccc4a667f3fe241ea0', '2024-12-05 11:35:04', '2024-12-05 17:05:04'),
(6, 'order_PTU2YcTUbLGJEv', 'pay_PTU2w02sUn88eS', 'c7b4a1674cdccf275b00d2fb5584c733cfab4ed713b0e22c430d8f4b415aacaa', '2024-12-05 11:47:37', '2024-12-05 17:17:37'),
(7, 'order_PTU7I5zvXqeeS7', 'pay_PTU7VyrMM67YOl', '391388b45975398ee235b9bc4e738799c5a5171c61f25bce0179283cb5f17865', '2024-12-05 11:51:57', '2024-12-05 17:21:57');

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
  `product_img3` varchar(255) DEFAULT NULL,
  `product_category` varchar(255) NOT NULL,
  `p_stock` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `name`, `metal_type`, `karat`, `weight`, `weight_type`, `color`, `description`, `product_img1`, `product_img2`, `product_img3`, `product_category`, `p_stock`) VALUES
(1, '1 gram 24 Karat Gold Coin with Lakshmi Ganesha Motif', 'Gold', '24K', 1, 'GRAM', 'Yellow', 'This 24 Karat Navratna gold coin is the perfect investment for you. The tail also features the gold purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.', '/24K_1_gram_gold_coin.jpeg', '/24K_1_gram_gold_coin.jpeg', '/24K_1_gram_gold_coin.jpeg', 'gold-coin', 1),
(2, '2 gram 24 Karat Gold Coin with Lakshmi Ganesha Motif', 'Gold', '24K', 2, 'GRAM', 'Yellow', 'This 24 Karat yellow gold coin features the auspicious Lakshmi Ganesha motif and weighs 2 gram. The tail also features the gold purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high polished finish adds a lustrous appeal to the coin.', '/24K_1_gram_gold_coin.jpeg', '/24K_1_gram_gold_coin.jpeg', '/24K_1_gram_gold_coin.jpeg', 'gold-coin', 1),
(3, 'Ashtalakshmi 22 Karat Gold Coin', 'Gold', '22K', 4, 'GRAM', 'Yellow', 'Lakshmi is the Goddess of wealth and prosperity. This 22 Karat yellow gold coin features eight avatars of Goddess Lakshmi and weighs 4 grams.', '/4-gram-gold-coin.jpeg', '/4-gram-gold-coin.jpeg', '/4-gram-gold-coin.jpeg', 'gold-coin', 1);

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
(3, 'new admin', '$2y$10$HcPH9aMC.Zf1mNvaBO9iCu0gKYQUmD6PpNkJntiPWY1Bjcdvn.niS', 'adm@gmail.com', 'b24e60087680e35ed3955085dd1dac855e024289c7de9b36538df91673b0bd53', '2024-11-25 08:12:33', '2024-12-07 17:33:51'),
(4, 'demo', '$2y$10$LTXh5vdbmzk7x6R1jTsON.s3bWQcMlAGU1gu8F/yiVP1Knswggd7G', 'demo@gmail.com', 'c73975bcfbda62fec64209df12636117c0cc998d48952076f3c00c2ea7d6391b', '2024-11-25 08:12:33', '2024-12-07 18:17:10'),
(5, 'navratna', '$2y$10$aeg.2TclN.P6raFTDN49/uaavt6LCoYlNljux4QexRfs/kddq1LLG', 'navratna@gmail.com', NULL, '2024-11-25 08:12:33', '2024-11-25 13:42:33'),
(6, 'demo new', '$2y$10$l4RWsvtOmKwJvKhIlR8ot.SGurttmL.C5n3pFofr8UM.VuNuH1Zsa', 'demonew@gmail.com', NULL, '2024-11-25 08:12:33', '2024-11-25 13:42:33'),
(8, 'demo', '$2y$10$sh2GKimjHUhd5dcYVOi9Aud2LBNsElq4wrNDryjf4WyuLIAxq0JPC', 'demo1@gmail.com', 'bfb0af304bcfdcd1de5dfd6ab885ae520e6ad6b7cfaa8a44c234c8c10827ef87', '2024-11-25 09:08:55', '2024-12-05 16:34:35'),
(10, 'try', '$2y$10$SVdV2Nllo9W/PcwIRIKXQ.3DJYJfBv21qorjCTrVyw5dMAEe1oPgC', 'try@gmail.com', NULL, '2024-11-25 09:12:24', '2024-11-25 14:42:24'),
(11, 'new user', '$2y$10$ehWPPM3v3GxbGTyFKu3i5.utmfwdC6.iDvD8NSIcHMBB.SSFdnANO', 'user@gmail.com', NULL, '2024-11-25 09:13:44', '2024-11-25 14:43:44'),
(12, 'try1', '$2y$10$XNP4cPE5yBKcVrcj9vlw0uM2ROd46LDjdWIOh7K1GWsSlCqbqoW2m', 'try1@gmail.com', NULL, '2024-11-25 09:40:27', '2024-11-25 15:10:27'),
(13, 'hey', '$2y$10$ecwk0egs7StEk8C/7Yqhq..kgYzTN4W.tvS2tRXzk8CUNK.e2OzgG', 'hey@gmail.com', NULL, '2024-11-25 09:46:13', '2024-11-25 15:16:13'),
(14, 'try2', '$2y$10$W50BqAm0oL3kFn7L16tqn.vT8Ell3aaaLmbaJtu6cMFvAZEVF.q0e', 'try2@gmail.com', '7ea47f5a7574e257dd6f2a466b99a16096724299dddd33d9a595e026815df37c', '2024-11-25 09:50:40', '2024-11-27 14:41:26'),
(22, 'demo3', '$2y$10$2sj0eLn5zs99LwzUYY3.v.F2akLiTVKvAfdLrFZsBCmYuCG9gCiv6', 'demo3@gmail.com', 'c19bc6a30836cd7629c3a9e1be99964e09959433d00e3de9f676a0ab2df041d6', '2024-12-05 11:37:39', '2024-12-05 17:07:55');

-- --------------------------------------------------------

--
-- Table structure for table `website_update`
--

CREATE TABLE `website_update` (
  `id` int(11) NOT NULL,
  `update_status` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `website_update`
--

INSERT INTO `website_update` (`id`, `update_status`) VALUES
(1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id_2` (`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `gold_price`
--
ALTER TABLE `gold_price`
  ADD PRIMARY KEY (`price_1_gram_24K`);

--
-- Indexes for table `offline_cart`
--
ALTER TABLE `offline_cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `local_user_id` (`local_user_id`) USING BTREE;

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id_oi` (`order_id_oi`),
  ADD KEY `product_id_oi` (`product_id_oi`);

--
-- Indexes for table `payment_details`
--
ALTER TABLE `payment_details`
  ADD PRIMARY KEY (`pd_id`),
  ADD KEY `pd_order_id` (`pd_order_id`);

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
-- Indexes for table `website_update`
--
ALTER TABLE `website_update`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `offline_cart`
--
ALTER TABLE `offline_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `payment_details`
--
ALTER TABLE `payment_details`
  MODIFY `pd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `website_update`
--
ALTER TABLE `website_update`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `offline_cart`
--
ALTER TABLE `offline_cart`
  ADD CONSTRAINT `offline_cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id_oi`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id_oi`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `payment_details`
--
ALTER TABLE `payment_details`
  ADD CONSTRAINT `payment_details_ibfk_1` FOREIGN KEY (`pd_order_id`) REFERENCES `orders` (`order_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
