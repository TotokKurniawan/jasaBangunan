import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Pemesanan = () => {
  const [serviceCategories, setServiceCategories] = useState([]);
  const [perkiraanHarga, setPerkiraanHarga] = useState("");
  const [estimasiPengerjaan, setEstimasiPengerjaan] = useState("");
  const [selectedServiceCategory, setSelectedServiceCategory] = useState("");
  const [nama, setNama] = useState("");
  const [kontak, setKontak] = useState("");
  const [alamat, setAlamat] = useState("");
  const [spesifikasi, setSpesifikasi] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/kategoriLayanan")
      .then((response) => {
        setServiceCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleServiceCategoryChange = (event) => {
    setSelectedServiceCategory(event.target.value);
  };

  const formatHarga = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    if (cleanedValue < 0) return "";
    const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return formattedValue;
  };

  const handlePerkiraanHargaChange = (event) => {
    const value = event.target.value;
    const formattedValue = formatHarga(value);
    setPerkiraanHarga(formattedValue ? `Rp. ${formattedValue}` : "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      nama,
      kontak,
      alamat,
      kategori: selectedServiceCategory,
      harga: perkiraanHarga,
      spesifikasi,
      waktu: estimasiPengerjaan,
    };

    axios
      .post("http://localhost:8081/tambahPesanan", data)
      .then((response) => {
        alert("Pemesanan berhasil ditambahkan!");
        navigate("/layanan");
        // Clear form fields if necessary
        setNama("");
        setKontak("");
        setAlamat("");
        setSelectedServiceCategory("");
        setPerkiraanHarga("");
        setSpesifikasi("");
        setEstimasiPengerjaan("");
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("Terjadi kesalahan saat menambahkan pemesanan.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-5 sm:py-8 md:py-12 lg:py-14">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full border-black border-2">
        <h2 className="text-2xl font-bold mb-6 text-center">Form Pemesanan</h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-2 text-gray-700">Nama</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Nomor Kontak</label>
            <input
              type="text"
              value={kontak}
              onChange={(e) => setKontak(e.target.value)}
              placeholder="08xxxxxxxx"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Alamat</label>
            <input
              type="text"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              placeholder="Alamat"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Kategori Layanan</label>
            <select
              value={selectedServiceCategory}
              onChange={handleServiceCategoryChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="" disabled>
                Pilih Kategori Layanan
              </option>
              {serviceCategories.map((category) => (
                <option key={category.id_layanan} value={category.id_layanan}>
                  {category.id_layanan} - {category.kategori_layanan} -{" "}
                  {category.jenis_layanan} - {category.garansi}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Perkiraan Harga</label>
            <input
              type="text"
              value={perkiraanHarga}
              onChange={handlePerkiraanHargaChange}
              placeholder="Masukkan perkiraan harga"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">
              Estimasi Pengerjaan (Bulan)
            </label>
            <input
              type="text"
              value={estimasiPengerjaan}
              onChange={(e) => setEstimasiPengerjaan(e.target.value)}
              placeholder="Masukkan estimasi pengerjaan"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Spesifikasi</label>
            <input
              type="text"
              value={spesifikasi}
              onChange={(e) => setSpesifikasi(e.target.value)}
              placeholder="Deskripsi..."
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-300"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Konfirmasi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pemesanan;
