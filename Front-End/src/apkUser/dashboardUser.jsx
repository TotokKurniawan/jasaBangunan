import React, { useState, useEffect } from "react";
import { FaUserTie, FaBoxOpen, FaUsers, FaClock } from "react-icons/fa";

const DashboardUser = () => {
  const [totalPekerja, setTotalPekerja] = useState(0);
  const [totalPesanan, setTotalPesanan] = useState(0);
  const [totalLayanan, setTotalLayanan] = useState(0);
  const [pesananMasuk, setPesananMasuk] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pekerjaResponse = await fetch(
          "http://localhost:8081/totalPekerja"
        );
        const pekerjaData = await pekerjaResponse.json();
        setTotalPekerja(pekerjaData.totalPekerja);

        const pesananResponse = await fetch(
          "http://localhost:8081/totalPesanan"
        );
        const pesananData = await pesananResponse.json();
        setTotalPesanan(pesananData.totalPemesanan);

        const layananResponse = await fetch(
          "http://localhost:8081/totalLayanan"
        );
        const layananData = await layananResponse.json();
        setTotalLayanan(layananData.totalLayanan);

        const pesananMasukResponse = await fetch(
          "http://localhost:8081/riwayatPesananUser"
        );
        const pesananMasukData = await pesananMasukResponse.json();
        setPesananMasuk(pesananMasukData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-blue-100 p-4 h-auto min-h-[300vh]">
      <div className="container mx-auto">
        {/* Welcome Section */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center">
            <div className="bg-blue-500 text-white p-3 rounded-full">
              <FaUsers className="w-6 h-6" />
            </div>
            <h1 className="ml-2 text-2xl font-bold">Selamat Datang, User!</h1>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-300 p-4 rounded-lg flex flex-col items-center">
            <FaUserTie className="w-12 h-12 mb-2 text-blue-500" />
            <p className="font-semibold">Total Pekerja</p>
            <p className="text-2xl font-bold">{totalPekerja} Pekerja</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg flex flex-col items-center">
            <FaBoxOpen className="w-12 h-12 mb-2 text-yellow-500" />
            <p className="font-semibold">Total Layanan</p>
            <p className="text-2xl font-bold">{totalLayanan} Layanan</p>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg flex flex-col items-center">
            <FaUsers className="w-12 h-12 mb-2 text-purple-600" />
            <p className="font-semibold">Total Pemesanan</p>
            <p className="text-2xl font-bold">{totalPesanan} Pemesanan</p>
          </div>
        </div>

        {/* Order History Section */}
        <div>
          <h2 className="text-xl font-bold mb-2 flex items-center">
            <FaClock className="w-6 h-6 mr-2" />
            Riwayat Pesanan
          </h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-200">
                    Nama Pekerja
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200">
                    Kategori Layanan
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200">
                    Waktu Pengajuan
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-200">Dana</th>
                  <th className="py-2 px-4 border-b-2 border-gray-200">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {pesananMasuk.map((pesanan) => (
                  <tr key={pesanan.id}>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {pesanan.nama}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {pesanan.kategori_layanan}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {pesanan.waktu_pengajuan}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {pesanan.estimasi_harga}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {pesanan.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
