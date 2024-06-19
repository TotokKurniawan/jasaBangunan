import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Handyman from "../assets/img/home/Bexleyheath.jpg";
import HouseImage from "../assets/img/home/Housejpg.jpg";
import MiniPark from "../assets/img/home/MiniPark.jpg";
import InHomeService from "../assets/img/home/InHomeService.jpg";
import MiniHouse from "../assets/img/home/MinimalistHouse.jpg";
import Warehouse from "../assets/img/home/Warehousejpg.jpg";
import BoardingHouse from "../assets/img/home/Boardinghouse.jpg";
import Statue from "../assets/img/home/Statue.jpg";
import FishPond from "../assets/img/home/Fishpond.jpg";
import SwimmingPool from "../assets/img/home/Swimmingpool.jpg";
import Furniture from "../assets/img/home/Furniture.jpg";
import Pointing from "../assets/img/home/Pointing.jpg";
import InHome from "../assets/img/home/HomeImpro.png";

const Body = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div className="mt-10 h-auto w-full bg-white" id="BgHome">
      {/* Home Page Start */}
      <div
        className="mainBg bg-cover h-[100dvh] w-auto bg-opacity-10 z-0"
        style={{ backgroundImage: `url(${Handyman})` }}
      >
        <div className="z-1 bg-blue-500 bg-opacity-20 h-full md:pt-10 pt-8 lg:pt-8 xl:pt-2">
          <div className="flex items-end justify-center h-52 z-50">
            <h1 className="text-3xl sm:text-4xl md:text-5xl" id="mainKet">
              Bangun Rumah Impian Anda Dengan Kami
            </h1>
          </div>
          <div className="pt-12">
            <p className="mb-7 font-bold px-10" id="pHome">
              Kami telah beroperasi selama tiga tahun dan telah membangun lebih
              dari 30 bangunan dan layanan lainnya.
            </p>
            <button onClick={() => navigate("/login")} className="bg-blue-600 py-2 px-4 rounded-md">
              <b>Bergabung Dengan Kami</b>
            </button>
          </div>
        </div>
      </div>
      {/* Home Page End */}

      {/* First Page Start */}
      <div className="md:mt-16 lg:mt-2">
        <div
          className="justify-evenly items-end w-auto mt-32 sm:mt-50 md:mt-1 md:flex lg:mt-0"
          id="mainCard"
        >
          <div className="order-2" data-aos="fade-up">
            <img
              src={HouseImage}
              alt="House"
              className="MainImg mx-auto mb-10 mt-28 h-56 w-80 lg:h-64 lg:w-96 md:h-60 md:w-96"
            />
          </div>
          <div
            id="secondKet"
            className="text-center mb-14 md:text-start md:mb-14 lg:mb-16 order-1"
            data-aos="fade-up"
          >
            <h1 className="font-bold1">Layanan Pembangunan</h1>
            <br />
            <ul>
              <li>Rumah Minimalis</li>
              <li>Gudang</li>
              <li>Aneka Macam Toko</li>
              <li>Mansion</li>
              <li>Kos-kosan</li>
            </ul>
          </div>
        </div>
        <div
          className="justify-evenly items-end w-auto mt-40 sm:mt-50 md:mt-1 md:flex lg:mt-0"
          id="mainCard"
        >
          <div data-aos="fade-up">
            <img
              src={MiniPark}
              alt="House"
              className="MainImg mx-auto mb-10 mt-28 md:mr-12 h-56 w-80 lg:h-64 lg:w-96 md:h-60 md:w-96"
            />
          </div>
          <div
            id="secondKet"
            className="text-center mb-14 md:text-end md:mb-14 lg:mb-20"
            data-aos="fade-up"
          >
            <h1 className="font-bold1">Konstruksi Lainnya</h1>
            <br />
            <ul>
              <li>Kolam Renang</li>
              <li>Kolam Ikan</li>
              <li>Taman Mini</li>
              <li>Patung</li>
            </ul>
          </div>
        </div>
        <div
          className="justify-evenly items-end w-auto mt-32 sm:mt-50 md:mt-1 md:flex lg:mt-0"
          id="mainCard"
        >
          <div className="order-2" data-aos="fade-up">
            <img
              src={InHomeService}
              alt="House"
              className="MainImg mx-auto mb-10 mt-28 h-56 w-80 lg:h-64 lg:w-96 md:h-60 md:w-96"
            />
          </div>
          <div
            id="secondKet"
            className="text-center mb-14 md:text-start md:mb-20 lg:mb-24 order-1"
            data-aos="fade-up"
          >
            <h1 className="font-bold1">Pelayanan</h1>
            <br />
            <ul>
              <li>Renovasi Rumah</li>
              <li>Perbaikan Dalam Rumah</li>
              <li>Cat dan Dekorasi</li>
            </ul>
          </div>
        </div>
      </div>
      {/* First Page End */}

      {/* Experience Start */}
      <div className="bg-blue-400 h-auto w-auto mt-28 lg:pt-3 lg:flex lg:justify-evenly lg:h-72 lg:mt-20 md:mt-20">
        <div className="flex justify-around py-8 lg:w-1/2 lg:pl-16 lg:py-20">
          <div className="lg:mr-7">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:mb-7">
              97%
            </h1>
            <p className="sm:text-lg md:text-xl">Pembangunan Berhasil</p>
          </div>
          <div className="mr-5 lg:mr-7">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:mb-7 lg:text-4xl">
              3
            </h1>
            <p className="sm:text-lg md:text-xl">Tahun Beroperasi</p>
          </div>
        </div>
        <div className="flex justify-around pb-8 lg:w-1/2 lg:pr-16 lg:py-20">
          <div className="ml-1 sm:ml-2 lg:mr-8">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:mb-7 lg:text-4xl">
              10+
            </h1>
            <p className="sm:text-lg md:text-xl">Tim Profesional</p>
          </div>
          <div>
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:mb-7 lg:text-4xl">
              90+
            </h1>
            <p className="sm:text-lg md:text-xl">Pelanggan Puas</p>
          </div>
        </div>
      </div>
      {/* Experience End */}

      {/* Gallery Start */}
      <div className="h-auto lg:px-20 pb-16">
        <div className="pt-14 text-lg md:pt-20 md:text-2xl lg:text-3xl lg:pt-24">
          <h1 className="text-slate-800 font-bold">Gallery Kami</h1>
        </div>
        <div className="h-auto w-auto grid grid-cols-2 md:grid-cols-3 gap-10 pt-14 px-8">
          <div data-aos="zoom-in">
            <img
              src={MiniHouse}
              className="w-48 h-32 mx-auto sm:w-56 sm:h-40 lg:w-64 lg:h-48 ImgGallery"
            />
            <br />
            <h1 className="lg:text-xl">Rumah Minimalis</h1>
          </div>
          <div data-aos="zoom-in">
            <img
              src={Warehouse}
              className="w-48 h-32 mx-auto sm:w-56 sm:h-40 lg:w-64 lg:h-48 ImgGallery"
            />
            <br />
            <h1 className="lg:text-xl">Gudang</h1>
          </div>
          <div data-aos="zoom-in">
            <img
              src={BoardingHouse}
              className="w-48 h-32 mx-auto sm:w-56 sm:h-40 lg:w-64 lg:h-48 ImgGallery"
            />
            <br />
            <h1 className="lg:text-xl">Kos-kosan</h1>
          </div>
          <div data-aos="zoom-in">
            <img
              src={Statue}
              className="w-48 h-32 mx-auto sm:w-56 sm:h-40 lg:w-64 lg:h-48 ImgGallery"
            />
            <br />
            <h1 className="lg:text-xl">Patung</h1>
          </div>
          <div data-aos="zoom-in">
            <img
              src={FishPond}
              className="w-48 h-32 mx-auto sm:w-56 sm:h-40 lg:w-64 lg:h-48 ImgGallery"
            />
            <br />
            <h1 className="lg:text-xl">Kolam Ikan</h1>
          </div>
          <div data-aos="zoom-in">
            <img
              src={SwimmingPool}
              className="w-48 h-32 mx-auto sm:w-56 sm:h-40 lg:w-64 lg:h-48 ImgGallery"
            />
            <br />
            <h1 className="lg:text-xl">Kolam Renang</h1>
          </div>
          <div data-aos="zoom-in">
            <img
              src={Furniture}
              className="w-48 h-32 mx-auto sm:w-56 sm:h-40 lg:w-64 lg:h-48 ImgGallery"
            />
            <br />
            <h1 className="lg:text-xl">Perabotan</h1>
          </div>
          <div data-aos="zoom-in">
            <img
              src={Pointing}
              className="w-48 h-32 mx-auto sm:w-56 sm:h-40 lg:w-64 lg:h-48 ImgGallery"
            />
            <br />
            <h1 className="lg:text-xl">Wallpaper dan Cat</h1>
          </div>
          <div
            data-aos="zoom-in"
            className="col-span-2 md:col-span-1 md:col-start-3 lg:col-span-1 lg:col-start-auto justify-self-center"
          >
            <img
              src={InHome}
              className="w-48 h-32 mx-auto sm:w-56 sm:h-40 lg:w-64 lg:h-48 ImgGallery"
            />
            <br />
            <h1 className="lg:text-xl">Pelayanan Dalam Rumah</h1>
          </div>
        </div>
      </div>

      {/* Gallery End */}
    </div>
  );
};

export default Body;
