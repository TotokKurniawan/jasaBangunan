import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/HandYmanLogo.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  return (
    <div>
      <nav className="w-full h-16 flex items-center pl-4 pr-10 justify-between bg-blue-700 fixed top-0 left-0 right-0 shadow-md z-10" id="navLp">
        <img
          onClick={() => navigate("/")}
          src={Logo}
          alt="HandYman Logo"
          className="h-full cursor-pointer"
        />
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul className={`hidden lg:flex items-center`}>
          <li className="p-5">
            <button
              onClick={() => navigate("/")}
              className="hover-underline text-blue-100"
            >
              Home
            </button>
          </li>
          <li className="p-5">
            <button
              onClick={() => navigate("/about")}
              className="hover-underline text-blue-100"
            >
              About
            </button>
          </li>
          <li className="p-5 relative">
            <button
              onClick={toggleDropdown}
              className="hover-underline focus:outline-none text-blue-100"
            >
              Service
            </button>
            {isDropdownOpen && (
              <ul className={`absolute top-16 -left-12 bg-white shadow-lg rounded-lg py-2 w-48 transition-all duration-500 ${isDropdownOpen ? 'opacity-100' : 'opacity-0'}`}>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <button
                    onClick={() => navigate("/consServ")}
                    className="block"
                  >
                    Layanan Pembangunan
                  </button>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <button
                    onClick={() => navigate("/devServ")}
                    className="block mx-auto"
                  >
                    Layanan Perbaikan
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li className="p-5">
            <a href="/testimonials" className="hover-underline text-blue-100">
              Testimonials
            </a>
          </li>
          <li className="p-5">
            <a href="/careers" className="hover-underline text-blue-100">
              Careers
            </a>
          </li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className={`lg:hidden fixed top-16 left-0 right-0 bg-blue-200 shadow-md z-10 transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
          <ul className="rounded-lg p-5">
            <li className="py-2">
              <button
                onClick={() => {
                  navigate("/");
                  setIsMenuOpen(false);
                }}
                className="w-full text-left"
              >
                Home
              </button>
            </li>
            <li className="py-2">
              <button
                onClick={() => {
                  navigate("/about");
                  setIsMenuOpen(false);
                }}
                className="w-full text-left"
              >
                About
              </button>
            </li>
            <li className="py-2">
              <button
                onClick={toggleDropdown}
                className="w-full text-left"
              >
                Service
              </button>
              {isDropdownOpen && (
                <ul className="bg-white shadow-lg rounded-lg py-2 w-full mt-2">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <button
                      onClick={() => {
                        navigate("/consServ");
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left"
                    >
                      Layanan Pembangunan
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <button
                      onClick={() => {
                        navigate("/devServ");
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left"
                    >
                      Layanan Perbaikan
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li className="py-2">
              <a href="#Testimonials" className="block w-full text-left" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </a>
            </li>
            <li className="py-2">
              <a href="#Careers" className="block w-full text-left" onClick={() => setIsMenuOpen(false)}>
                Careers
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
