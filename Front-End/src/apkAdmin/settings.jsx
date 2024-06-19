import React, { useState } from "react";
import axios from "axios";

const Settings = () => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSaveProfile = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("nama_awal", firstName);
    formData.append("nama_akhir", lastName);
    formData.append("alamat", address);
    formData.append("no_hp", contactNumber);
    if (profileImage) {
      formData.append("file", profileImage);
    }

    try {
      const response = await axios.put(
        "http://localhost:8081/editprofileAdmin",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        alert("Profile updated successfully");
        // Reset form
        setEmail("");
        setFirstName("");
        setLastName("");
        setAddress("");
        setContactNumber("");
        setProfileImage(null);
        setIsEditProfileOpen(false);
      }
    } catch (error) {
      console.error("There was an error updating the profile!", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditProfileOpen(false);
  };

  const handleSaveSecurity = () => {
    axios
      .put("http://localhost:8081/userAdmin", { oldPassword, newPassword })
      .then((response) => {
        setSuccessMessage(response.data.message);
        setError("");
        setOldPassword("");
        setNewPassword("");
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
              <div className="col-span-1 xl:col-span-3 flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveProfile}
                  className="px-4 py-2 mr-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
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
          className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Keamanan
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
            <form className="px-4 py-6 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="oldPassword"
                >
                  Old Password
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
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="col-span-1 xl:col-span-3 flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveSecurity}
                  className="px-4 py-2 mr-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancelSecurity}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {error && <div className="text-red-500">{error}</div>}
      {successMessage && <div className="text-green-500">{successMessage}</div>}
    </div>
  );
};

export default Settings;
