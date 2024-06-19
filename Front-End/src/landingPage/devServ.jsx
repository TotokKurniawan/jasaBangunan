import React, { useEffect } from 'react';
import InHome from '../assets/img/devServ/Inhome.jpg'
import Handyman3 from '../assets/img/devServ/Handyman3.png'
import Pointing from '../assets/img/devServ/Pointing.jpg'
import InHomeServ from '../assets/img/devServ/InHomeService.jpg'
import Furniture from '../assets/img/devServ/Furniture.jpg'
import HomeImpro from '../assets/img/devServ/HomeImprovement.png'



const devServ = () => {

    useEffect(() => {
        if (window.AOS) {
            window.AOS.init();
        }
    }, []);

    return (
        <div className='bg-blue-200 pb-10'>

            {/* Background Start */}

            <div className='mt-16'>
                <div className='consServBg bg-cover w-full flex justify-center items-center' style={{ backgroundImage : `url(${InHome})` }}>
                    <div className='bg-blue-900 bg-opacity-30 w-full h-full flex items-center'>
                        <h1 className='consServ text-5xl md:text-6xl xl:text-7xl mx-auto h-auto' id='mainKet'>Layanan Perbaikan</h1>
                    </div>
                </div>
            </div>

            {/* Background End */}

            {/* First Ket Start */}

            <div className='px-[30px] lg:px-32 xl:px-44 h-auto pt-16'>
                <div className='consKet  bg-blue-400 rounded-2xl w-full h-96 mx-auto flex md:mt-0 sm:pl-10'>
                    <div className='h-auto w-1/2 p-5 flex items-center py-16'>
                        <div className='w-auto h-auto bg-blue-500 rounded-2xl p-3 flex items-center px-5 md:px-7 lg:px-14'>
                            <h1 className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
                                Dalam jasa perbaikan dan renovasi ini, kami sangat mengutamakan kepuasan pelanggan terhadap pelayanan kami, dengan komitmen tinggi baik dalam melakukan perbaikan pada rumah, maupun dalam melakukan renovasi.
                            </h1>
                        </div>  
                    </div>
                    <div className='h-auto w-1/2 flex items-end'>
                        <img className='mx-auto h-72 w-72 md:h-80 md:w-80 lg:h-80 lg:w-80' src={Handyman3} alt="" />
                    </div>
                </div>
            </div>

            {/* First Ket End */}

            {/* Gallery DevServ Start */}

            <div className='lg:mt-2 h-full pb-24'>
                <div className='justify-evenly items-end w-auto md:flex px-10' id='mainCard'>
                    <div data-aos="zoom-in" className='order-2 md:mr-8'>
                        <img src={HomeImpro} alt="House" className='MainImg mx-auto md:mb-12 mb-10 mt-28 h-56 w-80  lg:h-64 lg:w-96 md:h-48 md:w-72'/>
                    </div>
                    <div id='secondKet' className='order-1 text-center mb-9 md:text-start lg:mb-12 px-10 md:w-72 md:mr-32 lg:w-80 lg:mt-10' data-aos="zoom-in">
                        <h1 className='font-bold1'>Renovasi Rumah</h1>
                        <br />
                        <h1 className='text-sm lg:text-base'>
                            Ubah rumah Anda dengan layanan perbaikan rumah kami. Kami menawarkan renovasi dapur, renovasi kamar mandi, penambahan ruangan, dan banyak lagi untuk meningkatkan kenyamanan dan nilai properti Anda.
                        </h1>
                    </div>
                </div>
                <div className='justify-evenly items-end w-auto md:flex' id='mainCard'>
                    <div data-aos="zoom-in" className='order-1 md:ml-12 lg:mr-'>
                        <img src={InHomeServ} alt="House" className='MainImg mx-auto mb-10 h-56 w-80 lg:h-64 lg:w-96 md:h-48 md:mb-12 md:w-72 mt-16'/>
                    </div>
                    <div id='secondKet' className='order-1 text-center mb-9 md:text-end lg:mb-12 px-10 md:w-72 md:ml-24 lg:w-80' data-aos="zoom-in">
                        <h1 className='font-bold1'>Layanan Dalam Rumah</h1>
                        <br />
                        <h1 className='text-sm lg:text-base'>
                            Tingkatkan kualitas hidup Anda dengan layanan dalam rumah kami. Kami menyediakan berbagai solusi praktis dan efisien, termasuk pembersihan menyeluruh, perawatan taman, untuk memastikan kenyamanan hunian Anda setiap hari.
                        </h1>
                    </div>
                </div>
                <div className='justify-evenly items-end w-auto md:flex px-10' id='mainCard'>
                    <div data-aos="zoom-in" className='order-2 md:mr-8'>
                        <img src={Pointing} alt="House" className='MainImg mx-auto md:mb-12 mb-10 mt-28 h-56 w-80  lg:h-64 lg:w-96 md:h-48 md:w-72'/>
                    </div>
                    <div id='secondKet' className='order-1 text-center mb-9 md:text-start lg:mb-12 px-10 md:w-72 md:mr-32 lg:w-80' data-aos="zoom-in">
                        <h1 className='font-bold1'>Wallpaper dan Cat</h1>
                        <br />
                        <h1 className='text-sm lg:text-base'>
                            Hiasi dinding umah Anda dengan layanan wallpaper dan cat kami. Kami menyediakan berbagai pilihan motif wallpaper dan warna cat yang elegan untuk memberikan sentuhan estetika dan suasana baru di setiap ruangan.
                        </h1>
                    </div>
                </div>
            </div>
            {/* Gallery DevServ End */}
        </div>
    )
}

export default devServ