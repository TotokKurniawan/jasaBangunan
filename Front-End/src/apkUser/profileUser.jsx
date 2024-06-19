import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProfileUser = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/profileUser?email=${userEmail}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userEmail) {
      fetchUserData();
    }
  }, [userEmail]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex p-4">
        <button
          onClick={() => navigate("/dashboardUser")}
          className="text-gray-500 hover:text-gray-900"
        >
          <FaArrowLeft className="text-2xl" />
        </button>
      </div>
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-10 p-6 h-96">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold mx-auto text-indigo-600">
            Profil Pengguna
          </h2>
        </div>
        <div className="md:flex">
          <div className="md:flex-shrink-0 ">
            <img
              className="h-56 mx-auto object-cover md:h-full md:w-56 rounded-full border-4 border-indigo-500"
              src={userData.gambar}
              alt="Profile"
            />
          </div>
          <div className="mt-4 md:mt-14 md:ml-16">
            <h1 className="text-2xl font-bold text-gray-900">{`${userData.nama_awal} ${userData.nama_akhir}`}</h1>
            <p className="mt-2 text-lg text-gray-600">{userData.alamat}</p>
            <p className="mt-2 text-lg text-gray-600">{userData.no_hp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
