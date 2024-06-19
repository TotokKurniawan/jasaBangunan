import React, { useEffect, useState } from "react";
import { FaUsers, FaClipboardList, FaUserFriends } from "react-icons/fa";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DashboardAdmin = () => {
  const [totalPekerja, setTotalPekerja] = useState(0);
  const [totalPesanan, setTotalPesanan] = useState(0);
  const [totalLayanan, setTotalLayanan] = useState(0);
  const [pesananMasuk, setPesananMasuk] = useState([]);
  const [selectedPesanan, setSelectedPesanan] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
          "http://localhost:8081/riwayatPesananAdmin"
        );
        const pesananMasukData = await pesananMasukResponse.json();
        setPesananMasuk(pesananMasukData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchPesananDetail = async (idPemesanan) => {
    try {
      const response = await fetch(
        `http://localhost:8081/riwayatPesananAdmin2/${idPemesanan}`
      );
      if (response.ok) {
        const data = await response.json();
        setSelectedPesanan(data.length > 0 ? data[0] : null);
        setModalIsOpen(true);
      } else {
        console.error("Gagal mengambil detail pesanan");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const terimaPesanan = async (idPemesanan) => {
    try {
      const response = await fetch(
        `http://localhost:8081/updateStatusProses/${idPemesanan}`,
        {
          method: "PUT",
        }
      );
      if (response.ok) {
        window.location.reload();
        console.log("Status pesanan berhasil diubah menjadi 'proses'");
      } else {
        console.error("Gagal mengubah status pesanan");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };
  const PesananDitolak = async (idPemesanan) => {
    try {
      const response = await fetch(
        `http://localhost:8081/updateStatusDitolak/${idPemesanan}`,
        {
          method: "PUT",
        }
      );
      if (response.ok) {
        window.location.reload();

        console.log("Status pesanan berhasil diubah menjadi 'dtolak'");
      } else {
        console.error("Gagal mengubah status pesanan");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };
  const PesananSelesai = async (idPemesanan) => {
    try {
      const response = await fetch(
        `http://localhost:8081/updateStatusSelesai/${idPemesanan}`,
        {
          method: "PUT",
        }
      );
      if (response.ok) {
        // Refresh data pesanan setelah berhasil update status
        fetchData();
        console.log("Status pesanan berhasil diubah menjadi 'selesai'");
      } else {
        console.error("Gagal mengubah status pesanan");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPesanan(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-[200vh]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Selamat Datang, Admin!</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-100 text-center p-6 rounded-lg shadow-md flex items-center justify-center flex-col">
            <FaUsers className="text-blue-600 mb-4" size={40} />
            <h2 className="text-lg font-semibold">Total Pekerja</h2>
            <p className="text-2xl font-bold">{totalPekerja} Pekerja</p>
          </div>
          <div className="bg-yellow-100 text-center p-6 rounded-lg shadow-md flex items-center justify-center flex-col">
            <FaClipboardList className="text-yellow-600 mb-4" size={40} />
            <h2 className="text-lg font-semibold">Total Layanan</h2>
            <p className="text-2xl font-bold">{totalLayanan} Layanan</p>
          </div>
          <div className="bg-purple-100 text-center p-6 rounded-lg shadow-md flex items-center justify-center flex-col">
            <FaUserFriends className="text-purple-600 mb-4" size={40} />
            <h2 className="text-lg font-semibold">Total Pesanan</h2>
            <p className="text-2xl font-bold">{totalPesanan} Pesanan</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Pesanan Masuk</h2>
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
                    Dana
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estimasi Bulan
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pesananMasuk.map((pesanan) => (
                  <tr key={pesanan.id_pemesanan}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {pesanan.nama}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {pesanan.kategori_layanan}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {pesanan.estimasi_harga}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {pesanan.estimasi}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {pesanan.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => fetchPesananDetail(pesanan.id_pemesanan)}
                        className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        Info
                      </button>
                      {pesanan.status === "pending" && (
                        <button
                          onClick={() => {
                            terimaPesanan(pesanan.id_pemesanan);
                            window.location.reload();
                          }}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        >
                          Terima
                        </button>
                      )}
                      {pesanan.status === "proses" && (
                        <button
                          onClick={() => {
                            PesananSelesai(pesanan.id_pemesanan);
                            window.location.reload();
                          }}
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                        >
                          Selesai
                        </button>
                      )}
                      <button
                        onClick={() => PesananDitolak(pesanan.id_pemesanan)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
                      >
                        Tolak
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedPesanan && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Detail Pesanan"
        >
          <h2>Detail Pesanan</h2>
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 m-2 text-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="space-y-2">
            <dl>
              <dt>Nama:</dt>
              <dd>{selectedPesanan.nama}</dd>
            </dl>
            <dl>
              <dt>Alamat:</dt>
              <dd>{selectedPesanan.alamat}</dd>
            </dl>
            <dl>
              <dt>Kontak:</dt>
              <dd>{selectedPesanan.kontak}</dd>
            </dl>
            <dl>
              <dt>Kategori Layanan:</dt>
              <dd>{selectedPesanan.kategori_layanan}</dd>
            </dl>
            <dl>
              <dt>Estimasi Harga:</dt>
              <dd>{selectedPesanan.estimasi_harga}</dd>
            </dl>
            <dl>
              <dt>Status:</dt>
              <dd>{selectedPesanan.status}</dd>
            </dl>
            <dl>
              <dt>Spesifikasi:</dt>
              <dd>{selectedPesanan.spesifikasi}</dd>
            </dl>
            <dl>
              <dt>Waktu Pengajuan:</dt>
              <dd>
                {new Date(selectedPesanan.waktu_pengajuan).toLocaleString()}
              </dd>
            </dl>
            <button className="bg-red-500" onClick={closeModal}>
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DashboardAdmin;
