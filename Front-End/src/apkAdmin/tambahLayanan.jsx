import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahLayanan = () => {
  const [gambar, setGambar] = useState(null);
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [jenisLayanan, setJenisLayanan] = useState("");
  const [estimasi, setEstimasi] = useState("");
  const [garansi, setGaransi] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setGambar(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", gambar);
    formData.append("kategori_layanan", kategori);
    formData.append("jenis_layanan", jenisLayanan);
    formData.append("garansi", garansi);

    try {
      const response = await axios.post(
        "http://localhost:8081/tambahLayananAdmin",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate("/layananAdmin");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Tambah Layanan</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gambar"
          >
            Gambar
          </label>
          <input
            type="file"
            id="gambar"
            name="gambar"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="kategori"
          >
            Kategori Layanan
          </label>
          <select
            id="kategori"
            name="kategori_layanan"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>
              -- Pilih kategori layanan --
            </option>
            <option value="pembangunan">Layanan pembangunan</option>
            <option value="perbaikan">Layanan perbaikan</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="jenisLayanan"
          >
            Jenis Layanan
          </label>
          <select
            id="jenisLayanan"
            name="jenis_layanan"
            value={jenisLayanan}
            onChange={(e) => setJenisLayanan(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>
              -- Pilih jenis layanan --
            </option>
            <option value="kontrak">Layanan kontrak</option>
            <option value="harian">Layanan harian</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="garansi"
          >
            Garansi
          </label>
          <select
            id="garansi"
            name="garansi"
            value={garansi}
            onChange={(e) => setGaransi(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>
              -- Pilih garansi --
            </option>
            <option value="waktu">Garansi waktu</option>
            <option value="uang kembali">Garansi uang kembali</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Tambah Layanan
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahLayanan;
