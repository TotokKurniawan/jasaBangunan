-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 13, 2024 at 12:46 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `handyman`
--

-- --------------------------------------------------------

--
-- Table structure for table `layanan`
--

CREATE TABLE `layanan` (
  `id_layanan` int NOT NULL,
  `gambar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `kategori_layanan` enum('pembangunan','perbaikan') NOT NULL,
  `jenis_layanan` enum('harian','kontrak') NOT NULL,
  `garansi` enum('waktu','uang kembali') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `layanan`
--

INSERT INTO `layanan` (`id_layanan`, `gambar`, `kategori_layanan`, `jenis_layanan`, `garansi`) VALUES
(13, '1718270663895_images.png', 'pembangunan', 'kontrak', 'uang kembali'),
(14, '1718270679656_images.png', 'pembangunan', 'kontrak', 'waktu'),
(15, '1718270698012_images.png', 'pembangunan', 'harian', 'waktu'),
(16, '1718270717125_images.png', 'pembangunan', 'harian', 'uang kembali'),
(17, '1718270732332_images.png', 'perbaikan', 'kontrak', 'waktu'),
(18, '1718270767261_images.png', 'perbaikan', 'kontrak', 'uang kembali'),
(19, '1718270789967_images.png', 'perbaikan', 'harian', 'waktu'),
(20, '1718270816814_images.png', 'perbaikan', 'harian', 'uang kembali');

-- --------------------------------------------------------

--
-- Table structure for table `pekerja`
--

CREATE TABLE `pekerja` (
  `id_pekerja` int NOT NULL,
  `nama_pekerja` varchar(100) NOT NULL,
  `kontak` char(13) NOT NULL,
  `alamat` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pemesanan`
--

CREATE TABLE `pemesanan` (
  `id_pemesanan` bigint NOT NULL,
  `nama` varchar(100) NOT NULL,
  `kontak` char(13) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `spesifikasi` varchar(100) NOT NULL,
  `estimasi_harga` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `status` enum('pending','selesai','proses','ditolak') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `waktu_pengajuan` date NOT NULL,
  `estimasi` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `id_layanan` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pemesanan`
--

INSERT INTO `pemesanan` (`id_pemesanan`, `nama`, `kontak`, `alamat`, `spesifikasi`, `estimasi_harga`, `status`, `waktu_pengajuan`, `estimasi`, `id_layanan`) VALUES
(8, 'irfan', '08654523', 'jln jln', 'testing', 'Rp. 2.000.000', 'pending', '2024-06-13', '2 bulan', 13),
(9, 'irfan', '982887', 'jln jln', 'testing irfan 2 cm', 'Rp 2000.000', 'selesai', '2024-06-13', '1 bulan', 19),
(10, 'Allrom', '0987654321', 'jln jember', 'Apa aja', 'Rp. 200.000.000', 'proses', '2024-06-13', '6 bulan', 14);

-- --------------------------------------------------------

--
-- Table structure for table `testimoni`
--

CREATE TABLE `testimoni` (
  `nama` varchar(100) NOT NULL,
  `keterangan` text NOT NULL,
  `rating` enum('Sangat Baik','Baik','Cukup','Kurang','Sangat Kurang') NOT NULL,
  `gambar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `testimoni`
--

INSERT INTO `testimoni` (`nama`, `keterangan`, `rating`, `gambar`) VALUES
('tes', 'tes', 'Sangat Baik', '1718279329576_images.png'),
('tes', 'tes', 'Sangat Baik', '1718279357116_images.png'),
('tes', 'tes', 'Sangat Baik', '1718282170381_WhatsApp_Image_2024-03-02_at_17.42.38_e231b2dc-removebg-preview.png'),
('irfan', 'bagus', 'Sangat Baik', '1718282344535_WhatsApp_Image_2024-03-02_at_17.42.38_e231b2dc-removebg-preview.png');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` bigint NOT NULL,
  `nama_awal` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nama_akhir` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `alamat` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `no_hp` char(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `hint` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `jawab_hint` varchar(100) NOT NULL,
  `role` enum('customer','admin') NOT NULL,
  `gambar` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `nama_awal`, `nama_akhir`, `email`, `alamat`, `no_hp`, `password`, `hint`, `jawab_hint`, `role`, `gambar`) VALUES
(5, 'admin', 'admin', 'admin@gmail.com', 'admin', 'admin', 'admin', 'Apa Makanan Favoritmu?', 'bakso', 'admin', '1718270504612_images.png'),
(6, 'alizar', 'muharram', 'tes@gmail.com', 'jln jln', '89732', 'tes', 'Apa makanan favoritmu?', 'bakso', 'customer', '1718271749139_images.png'),
(7, NULL, NULL, 'AllromGaming@gmail.com', NULL, NULL, '12345', 'Apa film favoritmu?', 'Naruto', 'customer', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `layanan`
--
ALTER TABLE `layanan`
  ADD PRIMARY KEY (`id_layanan`);

--
-- Indexes for table `pekerja`
--
ALTER TABLE `pekerja`
  ADD PRIMARY KEY (`id_pekerja`);

--
-- Indexes for table `pemesanan`
--
ALTER TABLE `pemesanan`
  ADD PRIMARY KEY (`id_pemesanan`),
  ADD KEY `id_layanan` (`id_layanan`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `layanan`
--
ALTER TABLE `layanan`
  MODIFY `id_layanan` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `pekerja`
--
ALTER TABLE `pekerja`
  MODIFY `id_pekerja` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `pemesanan`
--
ALTER TABLE `pemesanan`
  MODIFY `id_pemesanan` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pemesanan`
--
ALTER TABLE `pemesanan`
  ADD CONSTRAINT `pemesanan_ibfk_1` FOREIGN KEY (`id_layanan`) REFERENCES `layanan` (`id_layanan`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
