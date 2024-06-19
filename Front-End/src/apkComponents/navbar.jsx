import React, { useState } from "react";
import { FaUserCircle, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="bg-blue-700 text-white p-4 flex justify-end items-center relative">
      <div className="relative">
        <button
          onClick={toggleProfile}
          className="focus:outline-none flex items-center"
        >
          <FaUserCircle size={30} />
        </button>
        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2">
            <button
              onClick={() => navigate("/profileUser")}
              className="px-4 py-2 hover:bg-gray-200 flex items-center"
            >
              <FaUser size={20} className="mr-2" />
              Profile
            </button>
            <button
              className="px-4 py-2 hover:bg-gray-200 flex items-center"
            >
              <FaSignOutAlt size={20} className="mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;