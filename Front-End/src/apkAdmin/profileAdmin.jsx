import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const ProfileAdmin = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/profileAdmin");
        setAdmin(response.data[0]); // Assuming you only expect one admin in the response
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };
    fetchAdminData();
  }, []);

  return (
    <div>
      <div className="flex p-4">
        <button
          onClick={() => navigate("/dashboardAdmin")}
          className="text-gray-500 hover:text-gray-900"
        >
          <FaArrowLeft className="text-2xl" />
        </button>
      </div>
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-10 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold mx-auto text-indigo-600">
            Profil Admin
          </h2>
        </div>
        {admin && (
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-56 mx-auto object-cover md:h-full md:w-56 rounded-full border-4 border-indigo-500"
                src={admin.gambar}
                alt="Profile"
              />
            </div>
            <div className="mt-4 md:mt-14 md:ml-16">
              <h1 className="text-2xl font-bold text-gray-900">
                {admin.nama_awal} {admin.nama_akhir}
              </h1>
              <p className="mt-2 text-lg text-gray-600">{admin.alamat}</p>
              <p className="mt-2 text-lg text-gray-600">{admin.no_hp}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileAdmin;
