-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2024 at 02:25 PM
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
(1, 4, 'Ranchi', 'Jharkhand', 'India', 'Ranchi', 'Jharkhand', '834001', '', '1234567890', '2024-12-04 11:06:16'),
(2, 6, 'Delhi, India', NULL, 'India', 'Delhi', 'Delhi', '664566', NULL, '9988776655', '2024-12-05 09:55:36'),
(3, 3, 'Ranchi, Jharkhand', '', 'India', 'Ranchi', 'Jharkhand', '834001', '', '9204780758', '2024-12-05 10:48:30'),
(4, 8, 'Ranchi, Jharkhand', '', 'India', 'Ranchi', 'Jharkhand', '834001', '', '9204780758', '2024-12-05 11:05:40'),
(5, 22, '1451656dhj ksbxakus', '', 'India', 'Ranchi', 'Jharkhand', '834001', '', '1618828772', '2024-12-05 11:39:03'),
(6, 6759445, 'Ranchi, Jharkhand', '', 'India', 'Ranchi', 'Jharkhand', '833998', '', '9204780758', '2024-12-11 07:52:22'),
(7, 14, 'Ranchi, Jharkhand', '', 'India', 'Ranchi', 'Jharkhand', '834001', '', '9204780758', '2024-12-12 10:53:29'),
(11, 5, 'Ranchi, Jharkhand', '', 'India', 'Ranchi', 'Jharkhand', '834001', '', '9204780758', '2024-12-18 11:18:45');

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
(16, 22, 1, 1, 8786, '2024-12-05 11:38:02', '2024-12-05 17:08:02');

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
('6763', 'admin2', 'admin2@gmail.com', '$2y$10$uz9OKXbR3UeIsCoG3pH3g.O2YnVtF8yll.6LvVMltbw2i1GlKJdfq', '2024-12-19 09:46:56', '2024-12-19 15:16:56'),
('6763f229d6966', 'admin3', 'admin3@gmail.com', '$2y$10$0qzmxCRJ9LsvC9eDjm0qMuJXSIcT4BWm0ZU95XhlrpnH5kz65qTSS', '2024-12-19 10:15:06', '2024-12-19 15:45:06');

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
(10, '27ed3229d6e5b59d21ab6ea14b726368b7ebd281a9b0e3c37e11eb85e61bca16', 2, 2, 34926, '2024-11-28 07:07:53', '2024-11-28 12:37:53');

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
('order_PVlt1h5bIuTAmk', 4, 123000.00, '2024-12-11 12:02:28', '2024-12-11 12:03:02', 'paid'),
('order_PVlzO70dJdRb7d', 4, 96643.00, '2024-12-11 12:08:29', '2024-12-11 12:08:53', 'paid'),
('order_PVmSqqQvoN9F4q', 3, 61500.00, '2024-12-11 12:36:23', '2024-12-11 12:36:46', 'paid'),
('order_PVnFVc4PHtABq9', 6759445, 79072.00, '2024-12-11 13:22:26', '2024-12-11 13:22:57', 'paid'),
('order_PWErzxEl8tIkJe', 14, 30481.00, '2024-12-12 16:23:37', '2024-12-12 16:24:01', 'paid'),
('order_PWGbQOq3UMXnW3', 4, 19448.00, '2024-12-12 18:05:18', '2024-12-12 18:06:00', 'paid'),
('order_PX2BZHgk9HbS2b', 4, 35143.00, '2024-12-14 16:38:07', '2024-12-14 16:38:07', 'created'),
('order_PX2Exk9OacT6hU', 4, 35143.00, '2024-12-14 16:41:20', '2024-12-14 16:41:20', 'created'),
('order_PX2FfiIpH1CxDK', 4, 35143.00, '2024-12-14 16:42:00', '2024-12-14 16:42:00', 'created'),
('order_PX2Gfl3xSkuYGa', 4, 35143.00, '2024-12-14 16:42:57', '2024-12-14 16:42:57', 'created'),
('order_PX2Ho5xASnyLYz', 4, 1040.00, '2024-12-14 16:44:02', '2024-12-14 16:44:02', 'created'),
('order_PX2hxgPBepxgDD', 4, 1040.00, '2024-12-14 17:08:47', '2024-12-14 17:09:20', 'paid'),
('order_PX2PNOQWeq5Jor', 4, 1040.00, '2024-12-14 16:51:11', '2024-12-14 16:51:11', 'created'),
('order_PX2TxMhEFDKsd4', 4, 70286.00, '2024-12-14 16:55:32', '2024-12-14 16:55:32', 'created'),
('order_PX2vQo6jhTpaJQ', 4, 43929.00, '2024-12-14 17:21:32', '2024-12-14 17:21:32', 'created'),
('order_PX2xCbXy6jCclQ', 4, 43929.00, '2024-12-14 17:23:13', '2024-12-14 17:23:13', 'created'),
('order_PX46EMkdLHJnNS', 4, 836.00, '2024-12-14 18:30:27', '2024-12-14 18:30:27', 'created'),
('order_PX4L76Mi7NQdVQ', 4, 836.00, '2024-12-14 18:44:32', '2024-12-14 18:44:59', 'paid');

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
(14, 'order_PVlzO70dJdRb7d', 1, 1, 8786.00, 'order-cancel', '2024-12-11 06:38:53', '2024-12-11 12:22:41'),
(15, 'order_PVlzO70dJdRb7d', 2, 1, 17572.00, 'order-cancel', '2024-12-11 06:38:53', '2024-12-11 12:22:41'),
(16, 'order_PVlzO70dJdRb7d', 3, 2, 70288.00, 'order-cancel', '2024-12-11 06:38:53', '2024-12-11 12:22:41'),
(17, 'order_PVmSqqQvoN9F4q', 1, 7, 61502.00, 'order-cancel', '2024-12-11 07:06:46', '2024-12-11 12:36:57'),
(18, 'order_PVnFVc4PHtABq9', 1, 1, 8786.00, 'order-cancel', '2024-12-11 07:52:57', '2024-12-11 13:25:25'),
(19, 'order_PVnFVc4PHtABq9', 2, 4, 70288.00, 'order-cancel', '2024-12-11 07:52:57', '2024-12-11 13:25:25'),
(20, 'order_PWErzxEl8tIkJe', 5, 2, 428.00, 'processing', '2024-12-12 10:54:01', '2024-12-12 16:24:01'),
(21, 'order_PWErzxEl8tIkJe', 2, 1, 17571.00, 'processing', '2024-12-12 10:54:01', '2024-12-12 16:24:01'),
(22, 'order_PWErzxEl8tIkJe', 4, 2, 225.00, 'processing', '2024-12-12 10:54:01', '2024-12-12 16:24:01'),
(23, 'order_PWErzxEl8tIkJe', 11, 4, 12257.00, 'processing', '2024-12-12 10:54:01', '2024-12-12 16:24:01'),
(24, 'order_PWGbQOq3UMXnW3', 1, 2, 17571.00, 'order-cancel', '2024-12-12 12:36:00', '2024-12-12 18:16:19'),
(25, 'order_PWGbQOq3UMXnW3', 5, 1, 225.00, 'order-cancel', '2024-12-12 12:36:00', '2024-12-12 18:16:19'),
(26, 'order_PWGbQOq3UMXnW3', 8, 2, 1652.00, 'order-cancel', '2024-12-12 12:36:00', '2024-12-12 18:16:19'),
(27, 'order_PX2Gfl3xSkuYGa', 3, 1, 35143.00, 'processing', '2024-12-14 11:12:57', '2024-12-14 16:42:57'),
(28, 'order_PX2PNOQWeq5Jor', 9, 1, 1040.00, 'processing', '2024-12-14 11:21:12', '2024-12-14 16:51:12'),
(29, 'order_PX2TxMhEFDKsd4', 15, 1, 70286.00, 'processing', '2024-12-14 11:25:32', '2024-12-14 16:55:32'),
(30, 'order_PX2hxgPBepxgDD', 9, 1, 1040.00, 'processing', '2024-12-14 11:39:20', '2024-12-14 17:09:20'),
(31, 'order_PX2xCbXy6jCclQ', 14, 1, 43929.00, 'processing', '2024-12-14 11:53:13', '2024-12-14 17:23:13'),
(32, 'order_PX4L76Mi7NQdVQ', 8, 1, 836.00, 'processing', '2024-12-14 13:14:59', '2024-12-14 18:44:59');

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
(9, 'order_PVlzO70dJdRb7d', 'pay_PVlzXwXVfOv7R0', 'a3532f4bbe21f203985f152a29ddc17f21b6dc8f424b1696657f01b5030ee634', '2024-12-11 06:38:53', '2024-12-11 12:08:53'),
(10, 'order_PVmSqqQvoN9F4q', 'pay_PVmT00SxPyF1m4', 'dab99745dcfde40497792fca6972195653ecb958fd8685cc2dca04f201bf26d2', '2024-12-11 07:06:46', '2024-12-11 12:36:46'),
(11, 'order_PVnFVc4PHtABq9', 'pay_PVnFmDEU4S2kIo', 'f439e0eba4d9c264a86be697cac7703593b443084bab8ee8a6338760134bde69', '2024-12-11 07:52:57', '2024-12-11 13:22:57'),
(12, 'order_PWErzxEl8tIkJe', 'pay_PWEsBBCtIElywd', 'b1172a447f91cabbf6fc5609841daf41a43e68fa3f7954aa433b62279776dca5', '2024-12-12 10:54:01', '2024-12-12 16:24:01'),
(13, 'order_PWGbQOq3UMXnW3', 'pay_PWGbtW4iUD7JJT', 'd33003be68d10ca5b4f1c089a2469287f7797741bd7dd2dcb709febc24adaf01', '2024-12-12 12:36:00', '2024-12-12 18:06:00'),
(14, 'order_PX2hxgPBepxgDD', 'pay_PX2iHHSynsCeHZ', '697d21513d5a19cbc5d77e1ae3fd5da001f147cad8ee5d0c9cc7d589ff910a7e', '2024-12-14 11:39:20', '2024-12-14 17:09:20'),
(15, 'order_PX4L76Mi7NQdVQ', 'pay_PX4LKDzJasYE2p', '917fc8d14c9bc1e94587017c7199a96cf191d72e0145213c5637af2718f9f992', '2024-12-14 13:14:59', '2024-12-14 18:44:59');

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
(3, 'new admin', '$2y$10$HcPH9aMC.Zf1mNvaBO9iCu0gKYQUmD6PpNkJntiPWY1Bjcdvn.niS', 'adm@gmail.com', '5ef2529231099fa39cabcb46f8b6769381794bf8ff25a5641a7f86f94e9d5d74', '2024-11-25 08:12:33', '2024-12-11 12:36:07'),
(4, 'demo', '$2y$10$gHHYyCt79wf0tPWQFM3Y7u6oGREjjPJ9OS2hk3PwAI6aWWXo1Symq', 'demo@gmail.com', 'e8ef811e03b382cd92c10e5a13936e585c74563d6e71703819d7830cf5810884', '2024-11-25 08:12:33', '2024-12-18 17:14:17'),
(5, 'navratna', '$2y$10$aeg.2TclN.P6raFTDN49/uaavt6LCoYlNljux4QexRfs/kddq1LLG', 'navratna@gmail.com', 'f47fad7f6b3160ec8161fade7a450a59d75142d35110aafe082098403dd7782f', '2024-11-25 08:12:33', '2024-12-18 16:48:01'),
(6, 'demo new', '$2y$10$l4RWsvtOmKwJvKhIlR8ot.SGurttmL.C5n3pFofr8UM.VuNuH1Zsa', 'demonew@gmail.com', NULL, '2024-11-25 08:12:33', '2024-11-25 13:42:33'),
(8, 'demo', '$2y$10$sh2GKimjHUhd5dcYVOi9Aud2LBNsElq4wrNDryjf4WyuLIAxq0JPC', 'demo1@gmail.com', 'bfb0af304bcfdcd1de5dfd6ab885ae520e6ad6b7cfaa8a44c234c8c10827ef87', '2024-11-25 09:08:55', '2024-12-05 16:34:35'),
(10, 'try', '$2y$10$SVdV2Nllo9W/PcwIRIKXQ.3DJYJfBv21qorjCTrVyw5dMAEe1oPgC', 'try@gmail.com', NULL, '2024-11-25 09:12:24', '2024-11-25 14:42:24'),
(11, 'new user', '$2y$10$ehWPPM3v3GxbGTyFKu3i5.utmfwdC6.iDvD8NSIcHMBB.SSFdnANO', 'user@gmail.com', NULL, '2024-11-25 09:13:44', '2024-11-25 14:43:44'),
(12, 'try1', '$2y$10$XNP4cPE5yBKcVrcj9vlw0uM2ROd46LDjdWIOh7K1GWsSlCqbqoW2m', 'try1@gmail.com', NULL, '2024-11-25 09:40:27', '2024-11-25 15:10:27'),
(13, 'hey', '$2y$10$ecwk0egs7StEk8C/7Yqhq..kgYzTN4W.tvS2tRXzk8CUNK.e2OzgG', 'hey@gmail.com', NULL, '2024-11-25 09:46:13', '2024-11-25 15:16:13'),
(14, 'try2', '$2y$10$W50BqAm0oL3kFn7L16tqn.vT8Ell3aaaLmbaJtu6cMFvAZEVF.q0e', 'try2@gmail.com', 'e2a30525fcffa68f5ff6bd4f2422313a26afe1fdc1229db6bd2d1f5e62ad457b', '2024-11-25 09:50:40', '2024-12-12 16:22:55'),
(22, 'demo3', '$2y$10$2sj0eLn5zs99LwzUYY3.v.F2akLiTVKvAfdLrFZsBCmYuCG9gCiv6', 'demo3@gmail.com', 'ae5eaeeb55478086421cbde75eee04fde1d8c7e691849e13f078a28114592e68', '2024-12-05 11:37:39', '2024-12-18 16:41:20'),
(23, 'try3', '$2y$10$cwgnnftnGftxRfglH5xKMuQ/fayJw2ND05nI5IyhIzY/1aBjeyDgm', 'try3@gmail.com', 'ecd437bafb98d30e1a4239f9857f47d4dd342bf828fbddd5b7b3919d626d1313', '2024-12-11 07:44:12', '2024-12-11 13:14:29'),
(675, 'hehe', '$2y$10$KW/6mZoguVoBR7KrTWUhTOexl3/ZXfuLIEAmMaJEbPqFYbehTfrRi', 'hehe@gmail.com', 'a90888eff44f9cc9178d87cbaadb384b456caf9f33786dca3839de84dc550239', '2024-12-13 07:46:08', '2024-12-13 13:16:32'),
(6759445, 'Raj Singh', '$2y$10$wQ7q2jno/P2QXbBAxKNGhOknznwVoIQ8tltm4BCa/gyzUVQ7nEzuK', 'raj@gmail.com', '15a9b080b1e470c9529eaf8730f554e7a8f3273e53f969ac0264052b0fc40191', '2024-12-11 07:50:53', '2024-12-11 13:21:30');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `offline_cart`
--
ALTER TABLE `offline_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `payment_details`
--
ALTER TABLE `payment_details`
  MODIFY `pd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6759446;

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
