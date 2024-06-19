import React, { useState } from "react";
import Swal from "sweetalert2";

const Testimoni = () => {
  const [newTestimony, setNewTestimony] = useState({
    image: "",
    rating: "",
    description: "",
    nama: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "file") {
      setNewTestimony({
        ...newTestimony,
        image: e.target.files[0], // Menggunakan e.target.files[0] untuk file input
      });
    } else {
      setNewTestimony({
        ...newTestimony,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", newTestimony.image); // Menggunakan image dari state

    // Menambahkan data lain ke FormData
    formData.append("rating", newTestimony.rating);
    formData.append("description", newTestimony.description);
    formData.append("nama", newTestimony.nama);

    // Kirim data ke server
    fetch("http://localhost:8081/tambahTestimoni", {
      method: "POST",
      body: formData, // Mengirimkan FormData
    })
      .then((response) => response.json())
      .then((data) => {
        // Swal.fire({
        //   icon: "success",
        //   title: "Testimoni berhasil ditambah!",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        // Reset form
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding testimony:", error);
        // Tampilkan pesan error
        // Swal.fire({
        //   icon: "error",
        //   title: "Gagal menambah testimoni!",
        //   text: "Terjadi kesalahan saat menambah testimoni. Silakan coba lagi.",
        // });
      });
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-2 sm:px-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Testimoni</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="file"
          name="file"
          onChange={handleChange}
          className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mb-4 px-4 py-2"
        />
        <input
          type="text"
          name="nama"
          placeholder="Masukan Nama Anda"
          onChange={handleChange}
          className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mb-4 px-4 py-2"
        />
        <select
          name="rating"
          value={newTestimony.rating}
          onChange={handleChange}
          className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mb-4 px-4 py-2"
        >
          <option value="">Pilih Rating</option>
          <option value="Sangat Baik">Sangat Bagus</option>
          <option value="Baik">Bagus</option>
          <option value="Cukup">Cukup</option>
          <option value="Kurang">Kurang</option>
          <option value="Sangat Kurang">Sangat Kurang</option>
        </select>
        <textarea
          name="description"
          value={newTestimony.description}
          onChange={handleChange}
          placeholder="Berikan Keterangan "
          className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mb-4 px-4 py-2"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Tambah Testimoni
        </button>
      </form>
    </div>
  );
};

export default Testimoni;
