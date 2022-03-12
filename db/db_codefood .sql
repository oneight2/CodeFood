-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2022 at 02:14 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_codefood`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `image` text NOT NULL,
  `nServing` int(11) NOT NULL,
  `ingredientsPerServing` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `steps` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `recipeCategoryId` int(11) NOT NULL,
  `nReactionLike` int(11) NOT NULL,
  `nReactionNeutral` int(11) NOT NULL,
  `nReactionDislike` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `name`, `image`, `nServing`, `ingredientsPerServing`, `steps`, `recipeCategoryId`, `nReactionLike`, `nReactionNeutral`, `nReactionDislike`, `createdAt`, `updatedAt`) VALUES
(1, 'Sae Sapi', 'https://picsum.photos/264/182?i=2', 1, '[{\"item\":\"Daging Ayam cincang ukuran Sedang\",\"unit\":\"Gram\",\"value\":85},{\"item\":\"Bawang Goreng\",\"unit\":\"Gram\",\"value\":5}]', '[ { \"stepOrder\": 1, \"description\": \"Cuci bersih ayam dan kucuri dengan perasan air jeruk nipis, diamkan selama 10 menit dan bilas hingga bersih.\", \"done\": true }, { \"stepOrder\": 2, \"description\": \"Siapkan panci, lalu tuang air dan masukkan ayam, masak hingga empuk.\", \"done\": false }, { \"stepOrder\": 3, \"description\": \"Panaskan minyak, lalu tumis bawang putih hingga harum, lalu tambahkan Serai, Daun Salam, Daun Jeruk, Jahe, Lada Bubuk. Tumis hingga layu kemudian angkat dan sisihkan.\", \"done\": false }, { \"stepOrder\": 4, \"description\": \"Setelah ayam mendidih, mauskkan Wortel, Kentang, Kayu manis dan bumbu yang sudah di tumis, biarkan mendidih.\", \"done\": false }, { \"stepOrder\": 5, \"description\": \"Tambahkan Kaldu Ayam, Garam, Gula. Masak hingga bumbu meresap.\", \"done\": false }, { \"stepOrder\": 6, \"description\": \"Setelah itu taburi dengan Daun Bawang + Seledri + Bawang Goreng. Jika sudah matang matikan kompor.\", \"done\": false }, { \"stepOrder\": 7, \"description\": \"Sop Ayam siap disajikan, Makan selagi hangat akan lebih nikmat.\", \"done\": false } ]', 6, 0, 0, 0, '2022-03-10 14:28:31', '2022-03-10 14:28:31'),
(2, 'Sambal Suir Ayam', 'https://picsum.photos/264/182?i=2', 1, '[{\"item\":\"Daging Ayam cincang ukuran Sedang\",\"unit\":\"Gram\",\"value\":85},{\"item\":\"Bawang Goreng\",\"unit\":\"Gram\",\"value\":5}]', '[ { \"stepOrder\": 1, \"description\": \"Cuci bersih ayam dan kucuri dengan perasan air jeruk nipis, diamkan selama 10 menit dan bilas hingga bersih.\", \"done\": true }, { \"stepOrder\": 2, \"description\": \"Siapkan panci, lalu tuang air dan masukkan ayam, masak hingga empuk.\", \"done\": false }, { \"stepOrder\": 3, \"description\": \"Panaskan minyak, lalu tumis bawang putih hingga harum, lalu tambahkan Serai, Daun Salam, Daun Jeruk, Jahe, Lada Bubuk. Tumis hingga layu kemudian angkat dan sisihkan.\", \"done\": false }, { \"stepOrder\": 4, \"description\": \"Setelah ayam mendidih, mauskkan Wortel, Kentang, Kayu manis dan bumbu yang sudah di tumis, biarkan mendidih.\", \"done\": false }, { \"stepOrder\": 5, \"description\": \"Tambahkan Kaldu Ayam, Garam, Gula. Masak hingga bumbu meresap.\", \"done\": false }, { \"stepOrder\": 6, \"description\": \"Setelah itu taburi dengan Daun Bawang + Seledri + Bawang Goreng. Jika sudah matang matikan kompor.\", \"done\": false }, { \"stepOrder\": 7, \"description\": \"Sop Ayam siap disajikan, Makan selagi hangat akan lebih nikmat.\", \"done\": false } ]', 2, 0, 0, 0, '2022-03-10 14:32:10', '2022-03-11 11:07:56'),
(3, 'Ayam Crispy', 'https://picsum.photos/264/182?i=2', 1, '[{\"item\":\"Daging Ayam cincang ukuran Sedang\",\"unit\":\"Gram\",\"value\":85},{\"item\":\"Bawang Goreng\",\"unit\":\"Gram\",\"value\":5}]', '[ { \"stepOrder\": 1, \"description\": \"Cuci bersih ayam dan kucuri dengan perasan air jeruk nipis, diamkan selama 10 menit dan bilas hingga bersih.\", \"done\": true }, { \"stepOrder\": 2, \"description\": \"Siapkan panci, lalu tuang air dan masukkan ayam, masak hingga empuk.\", \"done\": false }, { \"stepOrder\": 3, \"description\": \"Panaskan minyak, lalu tumis bawang putih hingga harum, lalu tambahkan Serai, Daun Salam, Daun Jeruk, Jahe, Lada Bubuk. Tumis hingga layu kemudian angkat dan sisihkan.\", \"done\": false }, { \"stepOrder\": 4, \"description\": \"Setelah ayam mendidih, mauskkan Wortel, Kentang, Kayu manis dan bumbu yang sudah di tumis, biarkan mendidih.\", \"done\": false }, { \"stepOrder\": 5, \"description\": \"Tambahkan Kaldu Ayam, Garam, Gula. Masak hingga bumbu meresap.\", \"done\": false }, { \"stepOrder\": 6, \"description\": \"Setelah itu taburi dengan Daun Bawang + Seledri + Bawang Goreng. Jika sudah matang matikan kompor.\", \"done\": false }, { \"stepOrder\": 7, \"description\": \"Sop Ayam siap disajikan, Makan selagi hangat akan lebih nikmat.\", \"done\": false } ]', 6, 0, 0, 0, '2022-03-10 14:35:28', '2022-03-10 14:35:28');

-- --------------------------------------------------------

--
-- Table structure for table `recipe_categories`
--

CREATE TABLE `recipe_categories` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe_categories`
--

INSERT INTO `recipe_categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(2, 'sambal', '2022-03-10 03:14:20', '2022-03-10 03:14:20'),
(3, 'Minuman', '2022-03-10 03:22:28', '2022-03-10 03:22:28'),
(4, 'Kueh', '2022-03-10 10:27:20', '2022-03-10 11:38:03'),
(6, 'Makanan Berat', '2022-03-10 11:34:32', '2022-03-10 11:34:32');

-- --------------------------------------------------------

--
-- Table structure for table `serve_history`
--

CREATE TABLE `serve_history` (
  `id` varchar(10) NOT NULL,
  `userId` int(11) NOT NULL,
  `recipeId` int(11) NOT NULL,
  `nServing` int(11) NOT NULL,
  `recipeCategoryId` int(11) NOT NULL,
  `recipeName` text NOT NULL,
  `recipeCategoryName` text NOT NULL,
  `recipeImage` text NOT NULL,
  `steps` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`steps`)),
  `nStep` int(11) NOT NULL,
  `nStepDone` int(11) NOT NULL,
  `reaction` varchar(30) DEFAULT NULL,
  `status` varchar(30) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `serve_history`
--

INSERT INTO `serve_history` (`id`, `userId`, `recipeId`, `nServing`, `recipeCategoryId`, `recipeName`, `recipeCategoryName`, `recipeImage`, `steps`, `nStep`, `nStepDone`, `reaction`, `status`, `createdAt`, `updatedAt`) VALUES
('73O8', 21, 3, 1, 6, 'Ayam Crispy', 'Kueh', 'https://picsum.photos/264/182?i=2', '[{\"stepOrder\":1,\"description\":\"Cuci bersih ayam dan kucuri dengan perasan air jeruk nipis, diamkan selama 10 menit dan bilas hingga bersih.\",\"done\":false},{\"stepOrder\":2,\"description\":\"Siapkan panci, lalu tuang air dan masukkan ayam, masak hingga empuk.\",\"done\":false},{\"stepOrder\":3,\"description\":\"Panaskan minyak, lalu tumis bawang putih hingga harum, lalu tambahkan Serai, Daun Salam, Daun Jeruk, Jahe, Lada Bubuk. Tumis hingga layu kemudian angkat dan sisihkan.\",\"done\":false},{\"stepOrder\":4,\"description\":\"Setelah ayam mendidih, mauskkan Wortel, Kentang, Kayu manis dan bumbu yang sudah di tumis, biarkan mendidih.\",\"done\":false},{\"stepOrder\":5,\"description\":\"Tambahkan Kaldu Ayam, Garam, Gula. Masak hingga bumbu meresap.\",\"done\":false},{\"stepOrder\":6,\"description\":\"Setelah itu taburi dengan Daun Bawang + Seledri + Bawang Goreng. Jika sudah matang matikan kompor.\",\"done\":false},{\"stepOrder\":7,\"description\":\"Sop Ayam siap disajikan, Makan selagi hangat akan lebih nikmat.\",\"done\":false}]', 7, 0, NULL, 'progress', '2022-03-12 16:27:37', '2022-03-12 16:27:37'),
('7XT6', 21, 1, 2, 6, 'Sae Sapi', 'sambal', 'https://picsum.photos/264/182?i=2', '[{\"stepOrder\":1,\"description\":\"Cuci bersih ayam dan kucuri dengan perasan air jeruk nipis, diamkan selama 10 menit dan bilas hingga bersih.\",\"done\":true},{\"stepOrder\":2,\"description\":\"Siapkan panci, lalu tuang air dan masukkan ayam, masak hingga empuk.\",\"done\":true},{\"stepOrder\":3,\"description\":\"Panaskan minyak, lalu tumis bawang putih hingga harum, lalu tambahkan Serai, Daun Salam, Daun Jeruk, Jahe, Lada Bubuk. Tumis hingga layu kemudian angkat dan sisihkan.\",\"done\":true},{\"stepOrder\":4,\"description\":\"Setelah ayam mendidih, mauskkan Wortel, Kentang, Kayu manis dan bumbu yang sudah di tumis, biarkan mendidih.\",\"done\":true},{\"stepOrder\":5,\"description\":\"Tambahkan Kaldu Ayam, Garam, Gula. Masak hingga bumbu meresap.\",\"done\":true},{\"stepOrder\":6,\"description\":\"Setelah itu taburi dengan Daun Bawang + Seledri + Bawang Goreng. Jika sudah matang matikan kompor.\",\"done\":false},{\"stepOrder\":7,\"description\":\"Sop Ayam siap disajikan, Makan selagi hangat akan lebih nikmat.\",\"done\":false}]', 7, 5, 'like', 'progress', '2022-03-11 23:10:34', '2022-03-11 23:10:34');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(21, 'developer@skyshi.com', '$2b$10$fbGQ/TCrxQ/aL/J/Kp7VEeKvfyPIEdnMObFP/jYrGfoKp.wyFAZyO');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`recipeCategoryId`);

--
-- Indexes for table `recipe_categories`
--
ALTER TABLE `recipe_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `serve_history`
--
ALTER TABLE `serve_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `recipe_categories`
--
ALTER TABLE `recipe_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `recipes`
--
ALTER TABLE `recipes`
  ADD CONSTRAINT `category` FOREIGN KEY (`recipeCategoryId`) REFERENCES `recipe_categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
