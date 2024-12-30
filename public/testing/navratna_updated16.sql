-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2024 at 12:44 PM
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
  `user_id` varchar(255) NOT NULL,
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
(1, '4', 'Ranchi', 'Jharkhand', 'India', 'Ranchi', 'Jharkhand', '834001', '', '1234567890', '2024-12-04 11:06:16'),
(4, '8', 'Ranchi, Jharkhand', '', 'India', 'Ranchi', 'Jharkhand', '834001', '', '9204780758', '2024-12-05 11:05:40'),
(12, '676559113fe83', 'Ranchi, Jharkhand', '', 'India', 'Ranchi', 'Jharkhand', '834001', '', '1234567890', '2024-12-20 11:47:35'),
(13, '676e8f899908c', 'Ranchi, Jharkhand', 'Jharkhand', 'India', 'Ranchi', 'Jharkhand', '834001', '', '1234567890', '2024-12-27 11:30:41');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
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
(75, '4', 6, 1, 428, '2024-12-20 11:45:41', '2024-12-20 17:15:41'),
(79, '4', 2, 1, 8786, '2024-12-21 11:22:28', '2024-12-21 16:52:28');

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
(1, 7892, 7195, 5887, 99, 0.08, 20, 0.03);

-- --------------------------------------------------------

--
-- Table structure for table `nav_admin`
--

CREATE TABLE `nav_admin` (
  `ad_id` varchar(255) NOT NULL,
  `ad_name` varchar(255) NOT NULL,
  `ad_email` varchar(255) NOT NULL,
  `ad_password` varchar(255) NOT NULL,
  `ad_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `ad_updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nav_admin`
--

INSERT INTO `nav_admin` (`ad_id`, `ad_name`, `ad_email`, `ad_password`, `ad_created_at`, `ad_updated_at`) VALUES
('132556', 'admin', 'admin@gmail.com', '$2y$10$gHHYyCt79wf0tPWQFM3Y7u6oGREjjPJ9OS2hk3PwAI6aWWXo1Symq', '2024-12-19 07:48:23', '2024-12-19 13:41:49'),
('6763', 'admin2', 'admin2@gmail.com', '$2y$10$HIt/Az8KrZ/7jOXrhUUO1Or6jVq7GzeE6ljnVajz1XuG1n9KzKEPi', '2024-12-19 09:46:56', '2024-12-23 14:32:07'),
('6763f229d6966', 'admin3', 'admin3@gmail.com', '$2y$10$0qzmxCRJ9LsvC9eDjm0qMuJXSIcT4BWm0ZU95XhlrpnH5kz65qTSS', '2024-12-19 10:15:06', '2024-12-19 15:45:06');

-- --------------------------------------------------------

--
-- Table structure for table `nav_version`
--

CREATE TABLE `nav_version` (
  `id` int(11) NOT NULL,
  `version` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nav_version`
--

INSERT INTO `nav_version` (`id`, `version`, `created_at`, `updated_at`) VALUES
(5465347, 1.05, '2024-12-30 09:15:35', '2024-12-30 17:13:33');

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
(68, '07f04bf435221e69a5d04cf95b1507407ee37bd811fd3425d93cdbf9bc78b5e8', 16, 1, 87791, '2024-12-30 08:16:10', '2024-12-30 13:46:10');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `order_date` datetime DEFAULT current_timestamp(),
  `order_updateAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(50) DEFAULT 'pending',
  `payment_method` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `total_amount`, `order_date`, `order_updateAt`, `status`, `payment_method`) VALUES
('order_PabajVE97rdsEO', '676559113fe83', 225.00, '2024-12-23 17:13:12', '2024-12-23 17:13:38', 'paid', 'online'),
('order_PabZ3IZHRvjacx', '676559113fe83', 123.00, '2024-12-23 17:11:37', '2024-12-23 17:11:37', 'created', 'cod'),
('order_PcBcSxdyaJVpUx', '676e8f899908c', 8902.00, '2024-12-27 17:06:50', '2024-12-27 17:07:25', 'paid', 'online'),
('order_PVlt1h5bIuTAmk', '4', 123000.00, '2024-12-11 12:02:28', '2024-12-23 16:54:04', 'paid', 'online'),
('order_PX4L76Mi7NQdVQ', '4', 836.00, '2024-12-14 18:44:32', '2024-12-23 16:54:23', 'paid', 'online'),
('order_PZQuNae5nxB6Up', '676559113fe83', 44765.00, '2024-12-20 18:07:10', '2024-12-23 16:54:35', 'paid', 'online'),
('order_PZQx2pVmerk1ao', '676559113fe83', 5119.00, '2024-12-20 18:09:42', '2024-12-23 16:54:50', 'created', 'cod');

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
  `delivery_status` varchar(255) NOT NULL DEFAULT 'processing',
  `created_at_oi` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at_oi` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id_oi`, `product_id_oi`, `quantity_oi`, `price_oi`, `delivery_status`, `created_at_oi`, `updated_at_oi`) VALUES
(12, 'order_PVlt1h5bIuTAmk', 2, 1, 17572.00, 'order-cancel', '2024-12-11 06:33:02', '2024-12-11 12:19:08'),
(13, 'order_PVlt1h5bIuTAmk', 3, 3, 105432.00, 'order-cancel', '2024-12-11 06:33:02', '2024-12-11 12:19:08'),
(32, 'order_PX4L76Mi7NQdVQ', 8, 1, 836.00, 'processing', '2024-12-14 13:14:59', '2024-12-14 18:44:59'),
(33, 'order_PZQuNae5nxB6Up', 14, 1, 43929.00, 'order-cancel', '2024-12-20 12:38:19', '2024-12-20 18:08:41'),
(34, 'order_PZQuNae5nxB6Up', 8, 1, 836.00, 'order-cancel', '2024-12-20 12:38:19', '2024-12-20 18:08:41'),
(35, 'order_PZQx2pVmerk1ao', 12, 1, 5119.00, 'processing', '2024-12-20 12:39:42', '2024-12-20 18:09:42'),
(36, 'order_PabZ3IZHRvjacx', 4, 1, 123.00, 'processing', '2024-12-23 11:41:37', '2024-12-23 17:11:37'),
(37, 'order_PabajVE97rdsEO', 5, 1, 225.00, 'processing', '2024-12-23 11:43:38', '2024-12-23 17:13:38'),
(38, 'order_PcBcSxdyaJVpUx', 4, 1, 123.00, 'processing', '2024-12-27 11:37:25', '2024-12-27 17:07:25'),
(39, 'order_PcBcSxdyaJVpUx', 1, 1, 8779.00, 'processing', '2024-12-27 11:37:25', '2024-12-27 17:07:25');

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
(8, 'order_PVlt1h5bIuTAmk', 'pay_PVltM9cBDhhdKz', '8a676f5dcb634c7c57a0a908388e2eb80d3d635aaec9aeba1f77624e9eb8fa89', '2024-12-11 06:33:02', '2024-12-11 12:03:02'),
(16, 'order_PZQuNae5nxB6Up', 'pay_PZQvJXTAjHPLdz', 'eb742c9b1d7fa974b7ae55482f99eac9514adb43575c534f2bf9c2bc432b5c45', '2024-12-20 12:38:19', '2024-12-20 18:08:19'),
(17, 'order_PabajVE97rdsEO', 'pay_PabavYsxiHjeMI', '21ad9687c264c1b9dfbabc830915072920b184fe8da65d52075e89fff4fab75c', '2024-12-23 11:43:38', '2024-12-23 17:13:38'),
(18, 'order_PcBcSxdyaJVpUx', 'pay_PcBcpNcpCBvunG', '478babebde555439e9021d1550470f1e42f14369fbd06bf1f209f54bfd50f434', '2024-12-27 11:37:25', '2024-12-27 17:07:25');

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
(3, 'Ashtalakshmi 22 Karat Gold Coin', 'Gold', '24K', 4, 'GRAM', 'Yellow', 'Lakshmi is the Goddess of wealth and prosperity. This 22 Karat yellow gold coin features eight avatars of Goddess Lakshmi and weighs 4 grams.', '/4-gram-gold-coin.jpeg', '/4-gram-gold-coin.jpeg', '/4-gram-gold-coin.jpeg', 'gold-coin', 1),
(4, '1 gram 24 Karat Silver Coin with Lakshmi Ganesha Motif', 'Silver', '24K', 1, 'GRAM', 'Metallic Grey', 'This 24 Karat Navratna silver coin is the perfect investment for you. The tail also features the silver purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.\r\n', '/silver_coin.jpeg', '/silver_coin.jpeg', '/silver_coin.jpeg', 'silver-coin', 1),
(5, '2 gram 24 Karat Silver Coin with Lakshmi Ganesha Motif', 'Silver', '24K', 2, 'GRAM', 'Metallic Grey', 'This 24 Karat Navratna silver coin is the perfect investment for you. The tail also features the silver purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.', '/silver_coin.jpeg', '/silver_coin.jpeg', '/silver_coin.jpeg', 'silver-coin', 1),
(6, '4 gram 24 Karat Silver Coin with Lakshmi Ganesha Motif', 'Silver', '24K', 4, 'GRAM', 'Metallic Grey', 'This 24 Karat Navratna silver coin is the perfect investment for you. The tail also features the silver purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.\r\n', '/silver_coin.jpeg', '/silver_coin.jpeg', '/silver_coin.jpeg', 'silver-coin', 1),
(7, '5 gram 24 Karat Silver Coin with Lakshmi Ganesha Motif', 'Silver', '24K', 5, 'GRAM', 'Metallic Grey', 'This 24 Karat Navratna silver coin is the perfect investment for you. The tail also features the silver purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.\r\n', '/silver_coin.jpeg', '/silver_coin.jpeg', '/silver_coin.jpeg', 'silver-coin', 1),
(8, '8 gram 24 Karat Silver Coin with Lakshmi Ganesha Motif', 'Silver', '24K', 8, 'GRAM', 'Metallic Grey', 'This 24 Karat Navratna silver coin is the perfect investment for you. The tail also features the silver purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.', '/silver_coin.jpeg', '/silver_coin.jpeg', '/silver_coin.jpeg', 'silver-coin', 1),
(9, '10 gram 24 Karat Silver Coin with Lakshmi Ganesha Motif', 'Silver', '24K', 10, 'GRAM', 'Metallic Grey', 'This 24 Karat Navratna silver coin is the perfect investment for you. The tail also features the silver purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.', '/silver_coin.jpeg', '/silver_coin.jpeg', '/silver_coin.jpeg', 'silver-coin', 1),
(10, '25 gram 24 Karat Silver Coin with Lakshmi Ganesha Motif', 'Silver', '24K', 25, 'GRAM', 'Metallic Grey', 'This 24 Karat Navratna silver coin is the perfect investment for you. The tail also features the silver purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.', '/silver_coin.jpeg', '/silver_coin.jpeg', '/silver_coin.jpeg', 'silver-coin', 1),
(11, '30 gram 24 Karat Silver Coin with Lakshmi Ganesha Motif', 'Silver', '24K', 30, 'GRAM', 'Metallic Grey', 'This 24 Karat Navratna silver coin is the perfect investment for you. The tail also features the silver purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.', '/silver_coin.jpeg', '/silver_coin.jpeg', '/silver_coin.jpeg', 'silver-coin', 1),
(12, '50 gram 24 Karat Silver Coin with Lakshmi Ganesha Motif', 'Silver', '24K', 50, 'GRAM', 'Metallic Grey', 'This 24 Karat Navratna silver coin is the perfect investment for you. The tail also features the silver purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.', '/silver_coin.jpeg', '/silver_coin.jpeg', '/silver_coin.jpeg', 'silver-coin', 1),
(13, '100 gram 24 Karat Silver Coin with Lakshmi Ganesha Motif', 'Silver', '24K', 100, 'GRAM', 'Metallic Grey', 'This 24 Karat Navratna silver coin is the perfect investment for you. The tail also features the silver purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.', '/silver_coin.jpeg', '/silver_coin.jpeg', '/silver_coin.jpeg', 'silver-coin', 1),
(14, '5 gram 24 Karat Gold Coin with Ganesha-Lakshmi Motif', 'Gold', '24K', 5, 'GRAM', 'Yellow', 'This 24 Karat yellow gold coin features Lakshmi Ganesha motif and weighs 5 grams. The head of the coin showcases the portrait. The tail also features the gold purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high polished finish adds a lustrous appeal to the coin. ', '/5gram_gold_coin.jpeg', '/5gram_gold_coin.jpeg', '/5gram_gold_coin.jpeg', 'gold-coin', 1),
(15, '8 gram 24 Karat Gold Coin with Lakshmi Motif', 'Gold', '24K', 8, 'GRAM', 'Yellow', 'This 24 Karat yellow gold coin features Lakshmi motif and weighs 8 grams. The head of the coin showcases the portrait. The tail also features the gold purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.', '/8gram_gold_coin.jpeg', '/8gram_gold_coin.jpeg', '/8gram_gold_coin.jpeg', 'gold-coin', 1),
(16, '10 gram 24 Karat Gold Coin with Ganesha-Lakshmi Motif', 'Gold', '24K', 10, 'GRAM', 'Yellow', 'This 24 Karat yellow gold coin features Lakshmi-Ganesha motif and weighs 10 grams. The head of the coin showcases the portrait. The tail also features the gold purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.', '/10gram_gold_coin.jpeg', '/10gram_gold_coin.jpeg', '/10gram_gold_coin.jpeg', 'gold-coin', 1),
(17, '25 gram 24 Karat Gold Biscuit', 'Gold', '24K', 25, 'GRAM', 'Yellow', 'This 24 Karat gold biscuit from Navratna Jewellers is the perfect investment for you.', '/gold_biscuit.jpeg', '/gold_biscuit.jpeg', '/gold_biscuit.jpeg', 'gold-coin', 1),
(18, '30 gram 24 Karat Gold Coin', 'Gold', '24K', 30, 'GRAM', 'Yellow', 'This 24 Karat Navratna gold coin is the perfect investment for you. The tail also features the gold purity and the weight of the coin. With a plain rim, the coin highlights a serrated pattern along its edge. The high-polished finish adds a lustrous appeal to the coin.', '/8gram_gold_coin.jpeg', '/8gram_gold_coin.jpeg', '/8gram_gold_coin.jpeg', 'gold-coin', 1),
(19, '50 gram 24 Karat Gold Biscuit', 'Gold', '24K', 50, 'GRAM', 'Yellow', 'This 24 Karat gold biscuit from Navratna Jewellers is the perfect investment for you.', '/gold_biscuit.jpeg', '/gold_biscuit.jpeg', '/gold_biscuit.jpeg', 'gold-coin', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
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
('1', 'san', '$2y$10$tMiYyJ.MB1.60vrE.NMx8.cux5iMtkzWwvkBrxbF7lGuugW.qhgHG', 'NOT NULL', NULL, '2024-11-25 08:12:33', '2024-11-25 13:42:33'),
('2', 'admin', 'admin', 'admin@gmail.com', NULL, '2024-11-25 08:12:33', '2024-11-25 13:42:33'),
('3', 'new admin', '$2y$10$HcPH9aMC.Zf1mNvaBO9iCu0gKYQUmD6PpNkJntiPWY1Bjcdvn.niS', 'adm@gmail.com', '5ef2529231099fa39cabcb46f8b6769381794bf8ff25a5641a7f86f94e9d5d74', '2024-11-25 08:12:33', '2024-12-11 12:36:07'),
('4', 'demo', '$2y$10$gHHYyCt79wf0tPWQFM3Y7u6oGREjjPJ9OS2hk3PwAI6aWWXo1Symq', 'demo@gmail.com', 'c45bd3ba7923ed2d23ceceec6d64e8226a5b21280971847f9626ba959ed49827', '2024-11-25 08:12:33', '2024-12-25 13:14:46'),
('6759445', 'Raj Singh', '$2y$10$wQ7q2jno/P2QXbBAxKNGhOknznwVoIQ8tltm4BCa/gyzUVQ7nEzuK', 'raj@gmail.com', '15a9b080b1e470c9529eaf8730f554e7a8f3273e53f969ac0264052b0fc40191', '2024-12-11 07:50:53', '2024-12-11 13:21:30'),
('676559113fe83', 'demo 4', '$2y$10$UYHRP2CahIYrU5A6TH2UkuH12pe7KTZJza5OVWYD0a1dTL3xkOIOq', 'demo4@gmail.com', '96bc1a2b7ad3496e95938fbd1afa063ae72880f71e9bf82d34ae52f0272fe49f', '2024-12-20 11:46:25', '2024-12-23 16:50:32'),
('676e8f899908c', 'navratna', '$2y$10$TwMVQsRM0d7P0HfY8khWB.Pxv3apFpa3HA.PBezi646YQVSCML3Ge', 'navratnajewellers0@gmail.com', '9f81c5b02341b6840a8715d42ca39c8aa51d88caaed8411fe9b05d9980786bd0', '2024-12-27 11:29:13', '2024-12-28 14:54:15'),
('8', 'demo', '$2y$10$sh2GKimjHUhd5dcYVOi9Aud2LBNsElq4wrNDryjf4WyuLIAxq0JPC', 'demo1@gmail.com', 'bfb0af304bcfdcd1de5dfd6ab885ae520e6ad6b7cfaa8a44c234c8c10827ef87', '2024-11-25 09:08:55', '2024-12-05 16:34:35');

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
-- Indexes for table `nav_admin`
--
ALTER TABLE `nav_admin`
  ADD PRIMARY KEY (`ad_id`),
  ADD UNIQUE KEY `ad_email` (`ad_email`);

--
-- Indexes for table `nav_version`
--
ALTER TABLE `nav_version`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `offline_cart`
--
ALTER TABLE `offline_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `payment_details`
--
ALTER TABLE `payment_details`
  MODIFY `pd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

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
