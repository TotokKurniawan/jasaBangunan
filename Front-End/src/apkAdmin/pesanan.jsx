import React, { useEffect, useState } from "react";

const Pesanan = () => {
  const [pesananMasuk, setPesananMasuk] = useState([]);

  useEffect(() => {
    const fetchPesananMasuk = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/tampilPesananAdmin"
        );
        const data = await response.json();
        setPesananMasuk(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPesananMasuk();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md min-h-[300vh]">
      <h2 className="text-2xl font-bold mb-4">Riwayat Pesanan</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama Client
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kategori Layanan
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal Pesan
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pesananMasuk.map((pesanan, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{pesanan.nama}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {pesanan.kategori_layanan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {pesanan.waktu_pengajuan}
                </td>

                <td className="px-6 py-4 whitespace-nowrap ">
                  {pesanan.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pesanan;
