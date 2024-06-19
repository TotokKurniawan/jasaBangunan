import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Layanan = () => {
  const navigate = useNavigate();
  const [layanan, setLayanan] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/tampillayananadmin")
      .then((response) => response.json())
      .then((data) => setLayanan(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="px-7">
      <h2 className="text-2xl font-bold mb-4">Layanan yang Tersedia</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {layanan.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            <img src={item.gambar} alt={item.judul} className="w-full" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.kategori_layanan}</h3>
              <p>{item.jenis_layanan}</p>
              <p>{item.garansi}</p>
              <button
                onClick={() => navigate("/pemesanan")}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Pesan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layanan;
