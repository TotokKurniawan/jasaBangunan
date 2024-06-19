import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LayananAdmin = () => {
  const [dataLayanan, setDataLayanan] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/tampillayananadmin"
        );
        const layananData = await response.json();
        if (Array.isArray(layananData)) {
          setDataLayanan(layananData);
        } else {
          console.error("Unexpected response data:", layananData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setSelectedService((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (selectedService) {
      try {
        const response = await fetch(
          `http://localhost:8081/editlayananadmin/${selectedService.id_layanan}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(selectedService),
          }
        );
        const data = await response.json();
        window.location.reload();
        console.log(data.message); // Pesan sukses/edit
        closeModal();
      } catch (error) {
        console.error("Error saving data:", error);
      }
    } else {
      console.error("No service selected to edit");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8081/hapuslayananadmin/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data.message);
      // Refresh the data after deletion
      setDataLayanan(
        dataLayanan.filter((service) => service.id_layanan !== id)
      );
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/tambahLayanan")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Tambah
        </button>
      </div>
      <div className="mt-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Gambar</th>
              <th className="py-2 px-4 border-b">Kategori Layanan</th>
              <th className="py-2 px-4 border-b">Jenis Layanan</th>
              <th className="py-2 px-4 border-b">Garansi</th>
              <th className="py-2 px-4 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(dataLayanan) && dataLayanan.length > 0 ? (
              dataLayanan.map((service) => (
                <tr key={service.id_layanan}>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={service.gambar}
                      alt="Gambar"
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    {service.kategori_layanan}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {service.jenis_layanan}
                  </td>
                  <td className="py-2 px-4 border-b">{service.garansi}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition mr-2"
                      onClick={() => openModal(service)}
                    >
                      Ubah
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                      onClick={() => handleDelete(service.id_layanan)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-2 px-4 text-center">
                  Tidak ada data layanan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-1/3">
            <h2 className="text-xl mb-4">Edit Layanan</h2>
            <label className="block mb-2">Kategori Layanan</label>
            <input
              type="text"
              name="kategori_layanan"
              value={selectedService.kategori_layanan}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <label className="block mb-2">Jenis Layanan</label>
            <input
              type="text"
              name="jenis_layanan"
              value={selectedService.jenis_layanan}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <label className="block mb-2">Garansi</label>
            <input
              type="text"
              name="garansi"
              value={selectedService.garansi}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600 transition"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayananAdmin;
