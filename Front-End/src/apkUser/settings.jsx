import React, { useState } from "react";
import axios from "axios";

const Settings = () => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
  const [isInformationOpen, setIsInformationOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const [isGaransiOpen, setIsGaransiOpen] = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nama_awal", firstName);
    formData.append("nama_akhir", lastName);
    formData.append("alamat", address);
    formData.append("no_hp", contactNumber);
    formData.append("email", email);
    if (profileImage) {
      formData.append("file", profileImage);
    }

    try {
      const response = await axios.put(
        "http://localhost:8081/profileUser",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        alert("Profile updated successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setAddress("");
        setContactNumber("");
        setProfileImage(null);
        setIsEditProfileOpen(false); // Close the form
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  };

  const handleCancelEdit = () => {
    setIsEditProfileOpen(false);
  };

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSaveSecurity = () => {
    axios
      .put("http://localhost:8081/keamananUser", { oldPassword, newPassword })
      .then((response) => {
        setSuccessMessage(response.data.message);
        setError("");
        setOldPassword("");
        setNewPassword("");
        setIsSecurityOpen(false);
      })
      .catch((error) => {
        setError(error.response ? error.response.data.message : "Server error");
        setSuccessMessage("");
      });
  };

  const handleCancelSecurity = () => {
    setOldPassword("");
    setNewPassword("");
    setIsSecurityOpen(false);
  };

  return (
    <div className="pt-16 px-3 sm:px-5 md:px-7 lg:px-10 h-auto bg-white text-black">
      <div className="mb-10">
        <button
          onClick={() => setIsEditProfileOpen(!isEditProfileOpen)}
          className="mb-7 flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Edit Profile
          <svg
            className={`${
              isEditProfileOpen ? "transform rotate-180" : ""
            } w-5 h-5`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isEditProfileOpen && (
          <div className="z-10 w-full mt-2 bg-white rounded-lg shadow-lg">
            <form className="px-4 py-6 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="profileImage"
                >
                  Foto Profil
                </label>
                <input
                  id="profileImage"
                  type="file"
                  onChange={handleImageChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="firstName"
                >
                  Nama Awal
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="lastName"
                >
                  Nama Akhir
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Login Anda"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="address"
                >
                  Alamat Lengkap
                </label>
                <input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="contactNumber"
                >
                  No Hp
                </label>
                <input
                  id="contactNumber"
                  type="text"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="col-span-1 xl:col-span-3 flex justify-end">
                <button
                  onClick={handleSaveProfile}
                  type="button"
                  className="px-4 py-2 mr-2 text-sm font-medium text-white bg-blue-500 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="mb-10">
        <button
          onClick={() => setIsSecurityOpen(!isSecurityOpen)}
          className="mb-7 flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Security
          <svg
            className={`${
              isSecurityOpen ? "transform rotate-180" : ""
            } w-5 h-5`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isSecurityOpen && (
          <div className="z-10 w-full mt-2 bg-white rounded-lg shadow-lg">
            <form className="px-4 py-6">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="oldPassword"
                >
                  Password Lama
                </label>
                <input
                  id="oldPassword"
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="newPassword"
                >
                  Password Baru
                </label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="col-span-1 flex justify-end">
                <button
                  onClick={handleSaveSecurity}
                  type="button"
                  className="px-4 py-2 mr-2 text-sm font-medium text-white bg-blue-500 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelSecurity}
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      {successMessage && <p className="text-green-600">{successMessage}</p>}
      {error && <p className="text-red-600">{error}</p>}
      <div className="mb-10">
        <button
          onClick={() => setIsInformationOpen(!isInformationOpen)}
          className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Informasi
          <svg
            className={`${
              isInformationOpen ? "transform rotate-180" : ""
            } w-5 h-5`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isInformationOpen && (
          <div className="z-10 w-full mt-2 bg-white rounded-lg shadow-lg">
            <div className="px-4 py-6 grid grid-cols-1 gap-4">
              <div>
                <button
                  onClick={() => setIsYearOpen(!isYearOpen)}
                  className="w-full text-left flex justify-between items-center px-3 py-2 border rounded-md focus:outline-none"
                >
                  Tahun Berdiri Perusahaan
                  <svg
                    className={`${
                      isYearOpen ? "transform rotate-180" : ""
                    } w-5 h-5`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isYearOpen && (
                  <p className="w-full px-3 py-2 border rounded-md mt-2">
                    Perusahaan HandYman berdiri pada tahun 2021, sampai sekarang
                    kurang lebih 3 tahun perusahaan ini sudah berdiri
                  </p>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                  className="w-full text-left flex justify-between items-center px-3 py-2 border rounded-md focus:outline-none"
                >
                  Jumlah Proyek yang Diselesaikan
                  <svg
                    className={`${
                      isProjectsOpen ? "transform rotate-180" : ""
                    } w-5 h-5`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isProjectsOpen && (
                  <p className="w-full px-3 py-2 border rounded-md mt-2">
                    Dengan 3 tahun masa berdiri, perusahaan HandYman sudah
                    menyelesaikan kurang lebih 150+ layanan mulai dari
                    pembangunan hingga perbaikan
                  </p>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsAreaOpen(!isAreaOpen)}
                  className="w-full text-left flex justify-between items-center px-3 py-2 border rounded-md focus:outline-none"
                >
                  Garansi
                  <svg
                    className={`${
                      isAreaOpen ? "transform rotate-180" : ""
                    } w-5 h-5`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isAreaOpen && (
                  <p className="w-full px-3 py-2 border rounded-md mt-2">
                    {" "}
                    <b>Garansi Waktu :</b> Jika kurang dari 6 bulan terdapat
                    kerusakan pada bangunan, maka mendapat layanan gratis.{" "}
                    <b>Garansi uang kembali : </b>Jika kurang dari 1 bulan
                    pembangunan atau 1 minggu untuk perbaikan kembali rusak,
                    uang kembali sebesar 10% untuk pembangunan dan 40% untuk
                    perbaikan.
                  </p>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsGaransiOpen(!isGaransiOpen)}
                  className="w-full text-left flex justify-between items-center px-3 py-2 border rounded-md focus:outline-none"
                >
                  Seberapa luas cakupan kerusakan yang ditanggung
                  <svg
                    className={`${
                      isGaransiOpen ? "transform rotate-180" : ""
                    } w-5 h-5`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isGaransiOpen && (
                  <p className="w-full px-3 py-2 border rounded-md mt-2">
                    Garansi akan berlaku jika kerusakan terjadi secara alami,
                    bukan dari akibat customer sendiri.
                  </p>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsLayananOpen(!isLayananOpen)}
                  className="w-full text-left flex justify-between items-center px-3 py-2 border rounded-md focus:outline-none"
                >
                  Layanan kontrak dan harian
                  <svg
                    className={`${
                      isLayananOpen ? "transform rotate-180" : ""
                    } w-5 h-5`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isLayananOpen && (
                  <p className="w-full px-3 py-2 border rounded-md mt-2">
                    <b>Layanan kontrak : </b> Customer langsung memberi dana
                    diawal, mencakup dana bahan dan gaji tukang. dengan batasan
                    estimasi yang tentunya dengan persetujuan kedua belah pihak.
                    <b> Layanan harian : </b> merupakan jasa tukang bangunan
                    yang sistem pembayarannya dilakukan secara harian, dan dana
                    bahan juga masih ditanggung customer.
                  </p>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="w-full text-left flex justify-between items-center px-3 py-2 border rounded-md focus:outline-none"
                >
                  Kontak perusahaan
                  <svg
                    className={`${
                      isContactOpen ? "transform rotate-180" : ""
                    } w-5 h-5`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isContactOpen && (
                  <p className="w-full px-3 py-2 border rounded-md mt-2">
                    <b>Telp : </b> +62 852 2550 0251, +62 872 2800 0875,{" "}
                    <b>IG : </b> HandYman.id <b>X :</b> HandYman.serv
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
