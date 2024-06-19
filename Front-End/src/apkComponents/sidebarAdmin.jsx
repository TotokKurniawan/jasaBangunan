import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaBoxes, FaCog, FaFileInvoice, FaHardHat, FaArrowLeft, FaArrowRight, } from 'react-icons/fa';
import Logo from '../assets/img/HandYmanLogo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  return (
    <div className={`flex h-auto min-h-[100vh] ${isOpen ? 'w-64' : 'w-14'} bg-blue-800 text-white transition-all duration-300 float-left`}>
      <div className="flex flex-col justify-between h-auto w-full">
        <div className="flex flex-col">
          <div className="flex items-center justify-between p-4">
            <span className="text-2xl">
              <img src={Logo} alt="mx-auto" className='w-40' />{isOpen && ''}
            </span>
            <button onClick={toggleSidebar} className="focus:outline-none">
              {isOpen ? <FaArrowLeft size={20} /> : <FaArrowRight size={20} />}
            </button>
          </div>
          <nav className="mt-4">
            <button className="flex items-center w-full p-4 hover:bg-blue-600 transition-colors focus:outline-none lg:pl-[18px]" onClick={() => navigate("/dashboardAdmin")}>
              <FaTachometerAlt size={20} />
              {isOpen && <span className="ml-4">Dashboard</span>}
            </button>
            <button className="flex items-center w-full p-4 hover:bg-blue-600 transition-colors focus:outline-none lg:pl-[18px]" onClick={() => navigate("/layananAdmin")}>
              <FaBoxes size={20} />
              {isOpen && <span className="ml-4">Layanan</span>}
            </button>
            <button className="flex items-center w-full p-4 hover:bg-blue-600 transition-colors focus:outline-none lg:pl-[18px]" onClick={() => navigate("/pesananAdmin")}>
              <FaFileInvoice size={20} />
              {isOpen && <span className="ml-4">Pesanan</span>}
            </button>
            <button className="flex items-center w-full p-4 hover:bg-blue-600 transition-colors focus:outline-none lg:pl-[18px]" onClick={() => navigate("/pekerja")}>
              <FaHardHat size={20} />
              {isOpen && <span className="ml-4">Pekerja</span>}
            </button>
            <button className="flex items-center w-full p-4 hover:bg-blue-600 transition-colors focus:outline-none lg:pl-[18px]" onClick={() => navigate("/pengaturanAdmin")}>
              <FaCog size={20} />
              {isOpen && <span className="ml-4">Pengaturan</span>}
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
