import {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import AboutLogo from '../assets/img/about/HandymanAbout.png'
import Img1 from '../assets/img/about/HandymanGroup.jpg'
import Img2 from '../assets/img/about/Img.jpg'

const About = () => {
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init();
        }
    }, []);

    const navigate = useNavigate();

    return (
        <div className='bg-white'>

            {/* About Start */}

            <div className='About bg-blue-400 flex items-center md:pt-12 text-white'>
                <div className='h-full md:flex md:px-7 md:pr-20 xl:pr-24 items-center justify-center'>
                    <div className='py-7 md:ml-10 md:w-1/2 md:pt-7'>
                        <img src={AboutLogo} alt="" className='aboutLogo mx-auto w-56 h-72 lg:h-80 lg:w-64 xl:h-96 xl:w-72' />
                    </div>
                    <div className='px-16 md:w-1/2 md:text-lg lg:text-xl xl:text-2xl xl:pr-20'>
                        <h1 className='aboutKet'>
                            HandYman merupakan perusahaan penyedia jasa yang menyediakan jasa konstruksi. HandYman didirikan pada tahun 2021, dengan anggota dan persediaan yang minim. Dengan kerja keras dan ketekunan sesama anggota, HandYman mampu berkembang pesat hingga seperti sekarang ini.
                        </h1>
                    </div>
                </div>
            </div>

            {/* About End */}

            {/* Detail Start */}

            <div className='lg:mt-16 text-blue-600'>
                <div className='lg:flex'>
                    <div className='pt-20 lg:w-1/2 order-2 lg:pt-10 lg:pb-10 xl:pr-28' data-aos="fade-up">
                        <img src={Img1} alt="" className='ImgAbout w-80 h-44 mx-auto lg:w-96 lg:h-56 rounded-2xl' />
                    </div>
                    <div className='pt-6 px-20 lg:w-1/2 lg:pt-12 order-1 xl:pl-32 xl:pt-16' data-aos="zoom-in">
                        <h1 className='sm:text-lg md:px-10 lg:text-xl'>
                            Terdapat kurang lebih 10 tim dalam perusahaan kami. Dan terdapat 5 sampai 8 anggota setiap timnya. Biasanya, kami menggunakan lebih dari 1 tim jika sedang mengerjakan proyek yang besar seperti mansion dan kos-kosan.
                        </h1>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='pt-14 mb-6 lg:w-1/2 lg:pt-10 lg:pb-10 xl:pl-12' data-aos="fade-up">
                        <img src={Img2} alt="" className='ImgAbout w-80 h-44 mx-auto lg:w-96 lg:h-56 rounded-2xl'/>
                    </div>
                    <div className='pt-6 px-20 lg:w-1/2 lg:pt-20 xl:pr-44 xl:pt-24' data-aos="zoom-in">
                        <h1 className='mb-3 sm:text-lg md:px-10 lg:text-xl'>
                            Untuk pembangunan, kami menyediakan 2 metode layanan untuk pelanggan. Yaitu harian dan kontrak.
                        </h1>
                        <button className='text-blue-900 lg:text-lg' onClick={() => navigate("/FaQ")} id='moreInfo'>
                            Klik untuk info lebih lanjut
                        </button>
                    </div>
                </div>
            </div>

            {/* Detail End */}

            {/* Vision and Mission Start */}

            <div className='mt-20 px-9 pb-20 lg:px-20 xl:px-32'>
                <div>
                    <h1 className='text font-bold text-xl mb-10 md:text-2xl xl:text-3xl text-blue-700'>Visi dan Misi Kami</h1>
                </div>
                <div className='rounded-3xl h-auto w-full bg-blue-300 p-6 px-3 md:px-10 lg:px-16' id='VisiMisi'>
                    <h1 className='mb-3 font-bold md:text-2xl text-blue-900' id='Vision'>Visi : </h1>
                    <p className='md:text-xl text-blue-700'>Menjadi penyedia jasa bangunan terkemuka yang terkenal dengan kualitas, kehandalan dan inovasi dalam setiap proyek yang kami tangani.</p>
                    <br />
                    <h1 className='mb-3 font-bold md:text-2xl text-blue-900' id='Vision'>Misi : </h1>
                    <p className='mb-2 md:text-xl md:mb-5 text-blue-700'> <b>Memberikan Layanan Berkualitas Tinggi:</b> Kami berkomitmen untuk selalu memberikan pekerjaan yang memenuhi standar kualitas tertinggi dan memenuhi kebutuhan klien kami.</p> 
                    <p className='mb-2 md:text-xl md:mb-5 text-blue-700'> <b>Mengutamakan Kepuasan Pelanggan:</b> Menjaga komunikasi yang baik dengan pelanggan untuk memahami kebutuhan dan preferensi mereka. Menawarkan solusi yang tepat dan efektif sesuai dengan kebutuhan spesifik pelanggan. Memberikan layanan purna jual yang responsif dan dapat diandalkan untuk memastikan kepuasan jangka panjang.</p> 
                    <p className='mb-2 md:text-xl md:mb-5 text-blue-700'> <b>Menerapkan Teknologi Terbaru:</b> Mengembangkan dan menggunakan aplikasi mobile dan platform online yang user-friendly untuk memudahkan pelanggan dalam memesan layanan. Memanfaatkan teknologi untuk meningkatkan efisiensi operasional dan kualitas layanan.</p> 
                </div>
            </div>

            {/* Vision and Mission End */}
        </div>
    )
}

export default About