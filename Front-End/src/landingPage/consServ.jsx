import {useEffect} from 'react'
import Handyman2 from '../assets/img/consServ/Handyman2.png'
import HomeCons from '../assets/img/consServ/HomeCons.jpeg'
import MinHouse from '../assets/img/consServ/MinimalistHouse.jpg'
import WareHouse from '../assets/img/consServ/Warehousejpg.jpg'
import Shop from '../assets/img/consServ/Shop.jpg'
import Mansion from '../assets/img/consServ/Mansion.jpg'
import BoardHouse from '../assets/img/consServ/Boardinghouse.jpg'
import Statue from '../assets/img/consServ/Statue.jpg'
import SwimPool from '../assets/img/consServ/Swimmingpool.jpg'
import FishPond from '../assets/img/consServ/Fishpond.jpg'
import MiniPark2 from '../assets/img/consServ/MiniPark2.jpg'

const consServ = () => {
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init();
        }
    }, []);

    return (
        <div className='bg-blue-100'>

            {/* Background Start */}

            <div className='mt-16'>
                <div className='consServBg bg-cover w-full flex justify-center items-center' style={{ backgroundImage : `url(${HomeCons})` }}>
                    <div className='bg-blue-900 bg-opacity-30 w-full h-full flex items-center'>
                        <h1 className='consServ text-5xl md:text-6xl xl:text-7xl mx-auto h-auto' id='mainKet'>Layanan Pembangunan</h1>
                    </div>
                </div>
            </div>

            {/* Background End */}

            {/* First Ket Start */}

            <div className='px-6 h-auto pt-24'>
                <div className='consKet  bg-blue-200 rounded-2xl w-full h-96 mx-auto flex'>
                    <div className='h-auto w-1/2 flex items-end' data-aos="fade-up" data-aos-duration="2000">
                        <img className='mx-auto h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96' src={Handyman2} alt="" />
                    </div>
                    <div className='h-auto w-1/2 p-5 flex'>
                        <div className='w-full h-auto bg-blue-500 rounded-2xl p-3 flex items-center' data-aos="zoom-in">
                            <h1 className='text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
                                Dalam layanan konstruksi ini kami sangat mengutamakan permintaan dan kepuasan pelanggan. Untuk kualitas konstruksinya sendiri, kami mengutamakan keawetan dan kenyamanan. Sehingga siapapun yang berada di dalamnya merasa nyaman untuk tinggal atau beraktivitas
                            </h1>
                        </div>  
                    </div>
                </div>
            </div>

            {/* First Ket End */}

            {/* Gallery ConsServ Start */}

            <div className='h-auto pt-5 mt-5 relative'>
    <div className='w-full h-20 relative top-10'>
        <h1 className='w-52 ourCons relative mx-auto mb-10 top-4 bg-blue-300 p-3 text-lg font-bold md:text-xl lg:text-2xl md:w-72'>
            Pembangunan Kami
        </h1>
    </div>
    <div className='gConsServ bg-blue-300 h-auto pt-24 grid grid-cols-2 md:grid-cols-3 px-16 gap-12 pb-14'>
        <div className="cardServ h-[385px] w-[120px] sm:h-auto sm:w-auto bg-gray-200 mx-auto p-2" data-aos="zoom-in" data-aos-duration="1500">
            <img src={MinHouse} alt="" className='' />
            <h1>
                <b className='md:text-lg'>Rumah Minimalis</b>
            </h1>
            <p className='text-xs md:text-sm lg:text-base'>
                Kami membangun rumah minimalis yang modern dan fungsional, dengan desain elegan yang memaksimalkan setiap ruang. Temukan kenyamanan dan gaya hidup hemat dengan jasa pembangunan rumah minimalis kami.
            </p>
        </div>
        <div className="cardServ h-[385px] w-[120px] sm:h-auto sm:w-auto bg-gray-200 mx-auto p-2" data-aos="zoom-in" data-aos-duration="1500">
            <img src={WareHouse} alt="" />
            <h1>
                <b  className='md:text-lg'>Gudang</b>
            </h1>
            <p className='text-xs md:text-sm lg:text-base'>
                Kami menyediakan layanan konstruksi gudang yang kokoh dan efisien, dirancang untuk memenuhi kebutuhan penyimpanan dan logistik Anda. Dengan struktur yang kuat dan tata letak yang optimal
            </p>
        </div>
        <div className="cardServ h-[385px] w-[120px] sm:h-auto sm:w-auto bg-gray-200 mx-auto p-2" data-aos="zoom-in" data-aos-duration="1500">
            <img src={Shop} alt="" />
            <h1>
                <b  className='md:text-lg'>Toko</b>
            </h1>
            <p className='text-xs md:text-sm lg:text-base'>
                Percayakan pembangunan berbagai jenis toko Anda kepada kami. Kami menawarkan desain dan konstruksi yang menarik dan praktis, memastikan toko Anda menonjol dan berfungsi untuk menarik pelanggan.
            </p>
        </div>
        <div className="cardServ h-[385px] w-[120px] sm:h-auto sm:w-auto bg-gray-200 mx-auto p-2" data-aos="zoom-in" data-aos-duration="1500">
            <img src={Mansion} alt="" />
            <h1>
                <b  className='md:text-lg'>Rumah Besar</b>
            </h1>
            <p className='text-xs md:text-sm lg:text-base'>
                Kami berspesialisasi dalam membangun rumah mewah yang menggabungkan kemewahan dan kenyamanan. Dengan memperhatikan detail dan penggunaan bahan berkualitas tinggi.
            </p>
        </div>
        <div className="cardServ h-[385px] w-[120px] sm:h-auto sm:w-auto bg-gray-200 mx-auto p-2" data-aos="zoom-in" data-aos-duration="1500">
            <img src={BoardHouse} alt="" />
            <h1>
                <b  className='md:text-lg'>Kos-kosan</b>
            </h1>
            <p className='text-xs md:text-sm lg:text-base'>
                Kami membangun kos-kosan yang nyaman dan strategis, cocok untuk kebutuhan hunian sementara. Desain kami menjamin kenyamanan maksimal bagi penghuni dengan fasilitas lengkap dan lingkungan yang aman.
            </p>
        </div>
        <div className="cardServ h-[385px] w-[120px] sm:h-auto sm:w-auto bg-gray-200 mx-auto p-2" data-aos="zoom-in" data-aos-duration="1500">
            <img src={Statue} alt="" />
            <h1>
                <b  className='md:text-lg'>Patung</b>
            </h1>
            <p className='text-xs md:text-sm lg:text-base'>
                Kami menawarkan jasa pembuatan patung yang artistik dan berkelas, dengan detail yang menakjubkan. Baik untuk proyek publik atau swasta, patung kami dibuat dengan keterampilan dan dedikasi terbaik.
            </p>
        </div>
        <div className="cardServ h-[385px] w-[120px] sm:h-auto sm:w-auto bg-gray-200 mx-auto p-2" data-aos="zoom-in" data-aos-duration="1500">
            <img src={SwimPool} alt="" />
            <h1>
                <b className='md:text-lg'>Kolam Renang</b>
            </h1>
            <p className='text-xs md:text-sm lg:text-base'>
                Kami menawarkan jasa pembangunan kolam renang yang dirancang khusus untuk memenuhi kebutuhan Anda. Dengan desainnya yang elegan dan sistem penyaringan yang modern.
            </p>
        </div>
        <div className="cardServ h-[385px] w-[120px] sm:h-auto sm:w-auto bg-gray-200 mx-auto p-2" data-aos="zoom-in" data-aos-duration="1500">
            <img src={FishPond} alt="" />
            <h1>
                <b className='md:text-lg'>Kolam Ikan</b>
            </h1>
            <p className='text-xs md:text-sm lg:text-base'>
                Ciptakan suasana alami di taman Anda dengan kolam ikan buatan kami. Kami menyediakan jasa pembuatan kolam ikan yang estetis dan fungsional, lengkap dengan sistem aerasi dan filtrasi yang menjamin kesehatan ikan dan kejernihan air
            </p>
        </div>
        <div className="cardServ h-[385px] w-[120px] sm:h-auto sm:w-auto bg-gray-200 mx-auto p-2 col-span-2 md:col-span-1 justify-center" data-aos="zoom-in" data-aos-duration="1500">
            <img src={MiniPark2} alt="" />
            <h1>
                <b className='md:text-lg'>Taman Mini</b>
            </h1>
            <p className='text-xs md:text-sm lg:text-base'>
                Kami membangun taman mini yang indah dan fungsional, ideal untuk ruang hijau di rumah atau area publik. Dengan desain lanskap yang kreatif dan pilihan tanaman yang tepat, kami menciptakan ruangan yang sejuk dan menenangkan untuk dinikmati setiap hari.
            </p>
        </div>
    </div>
</div>
            {/* Gallery ConsServ End */}
        </div>
    )
}

export default consServ