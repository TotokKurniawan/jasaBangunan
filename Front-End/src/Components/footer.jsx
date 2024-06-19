import React from 'react'
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div className='bg-blue-700 h-auto w-auto lg:flex lg:justify-evenly lg:h-72 text-white'>
                    <div className='flex justify-around py-8 lg:w-1/2 lg:pl-16 lg:py-20'>
                        <div className='lg:mr-7'>
                            <h1 className='font-bold text-xl sm:text-2xl lg:mb-7'>Contact</h1>
                            <p className='footer sm:text-sm md:text-base'>Telp1 : +62 852 2550 0251</p>
                            <p className='footer sm:text-sm md:text-base'>Telp2 : +62 872 2800 0875</p>
                            <p className='footer sm:text-sm md:text-base'><a href="">IG : HandYman.id</a></p>
                            <p className='footer sm:text-sm md:text-base'><a href="">X : HandYman.serv</a></p>
                        </div>
                        <div className='mr-5 lg:mr-7'>
                            <h1 className='font-bold text-xl sm:text-2xl lg:mb-7'>Service</h1>
                            <p className='footer sm:text-lg md:text-base'><a href="">Renovasi Rumah</a></p>
                            <p className='footer sm:text-lg md:text-base'><a href="">Layanan Dalam Rumah</a></p>
                        </div>
                    </div>
                    <div className='flex justify-around pb-8 lg:w-1/2 lg:pr-16 lg:py-20'>
                        <div className='ml-1 sm:ml-2 lg:mr-8'>
                            <h1 className='font-bold text-xl sm:text-2xl lg:mb-7'>Resources</h1>
                            <p className='footer sm:text-lg md:text-base'><a href="">Cerita Sukses</a></p>
                            <p className='sm:text-lg md:text-base'><button className='footer' onClick={() => navigate("/about")}>Tentang HandYman</button></p>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl sm:text-2xl lg:mb-7'>Informasi</h1>
                            <p className='sm:text-lg md:text-base '><button className='footer' onClick={() => navigate("/careers")}>Careers</button></p>
                            <p className='sm:text-lg md:text-base '><button className='footer' onClick={() => navigate("/faq")}>FaQ</button></p>
                            <p className='footer sm:text-lg md:text-base '><a href="">Sitemap</a></p>
                        </div>
                    </div>  
                </div>
                    <div className='bg-blue-900 text-white h-14 flex justify-center items-center'>
                        <h1>© 2024 HandYman Group, Inc. All Rights Reserved.</h1>
                    </div>
            </div>
        </div>
    )
}

export default Footer;