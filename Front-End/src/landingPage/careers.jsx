import React from 'react'
import BgRecruitment from '../assets/img/careers/Recruitment.jpg'
import ConsWorker from '../assets/img/careers/Construction.jpeg'
import Foreman from '../assets/img/careers/Foreman.jpg'
import Architect from '../assets/img/careers/Architect.jpeg'

const Careers = () => {
    return (
        <div className='bg-white'>
            {/* Bakcground Start */}

            <div className='mt-16'>
                <div className='consServBg bg-cover w-full flex justify-center items-center' style={{ backgroundImage : `url(${BgRecruitment})` }}>
                    <div className='bg-blue-900 bg-opacity-50 w-full h-full flex items-center'>
                        <h1 className='consServ text-white text-5xl md:text-6xl xl:text-7xl mx-auto h-auto' id='mainKet'>Jadi Anggota Kami</h1>
                    </div>
                </div>
            </div>

            {/* Background End */}

            {/* Content Start */}

            <div className="flex flex-col items-center p-6 space-y-6 py-20">
                <h1 className="text-2xl font-bold italic text-blue-700">Sedikit Tentang Perusahaan Kami</h1>
                <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="bg-blue-400 p-4 rounded-lg shadow-lg max-w-md">
                        <p className='text-white'>
                            Perusahaan kami didirikan pada tahun 2021 dan diberi nama HandYman. Perusahaan kami awalnya hanya bergerak di bidang pembangunan rumah. Hingga akhirnya seiring berjalannya waktu, perusahaan kami berkembang dan mulai membangun gedung-gedung lain seperti gudang, mansion, kolam renang dan lain-lain.
                        </p>
                    </div>
                    <div className="bg-blue-400 p-4 rounded-lg shadow-lg max-w-md">
                        <p className='text-white'>
                            Hingga saat ini kami masih berusaha merekrut anggota baru, baik sebagai mandor, arsitek, dan kuli bangunan. Kami akan mengembangkan keterampilan anggota baru agar dapat bekerja dengan baik. Kami juga telah melampirkan kualifikasi anggota yang akan kami rekrut untuk setiap posisi.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content End */}

            {/* Job Qualification Start */}

            <div className="flex flex-col text-white items-center p-6 space-y-6 bg-blue-400 rounded-3xl border-2 border-blue-900">
                <h1 className="text-2xl font-bold italic">Pekerjaan dan Kualifikasi</h1>
                <p className="text-center max-w-3xl">
                    Kami selalu mencari individu yang berdedikasi dan bersemangat untuk bergabung dengan tim kami.
                    Berikut adalah beberapa posisi yang sedang kami rekrut:
                </p>
                    <div className="bg-blue-600 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 max-w-3xl lg:max-w-4xl">
                        <img src={ConsWorker} alt="Construction Worker" className="w-full md:w-1/3 h-auto rounded-lg" />
                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold">Pekerja Bangunan</h3>
                            <p className="mt-2"><strong>Deskripsi Pekerjaan :</strong> Melaksanakan tugas konstruksi sesuai dengan rencana dan spesifikasi.</p>
                            <p className="mt-2"><strong>Kualifikasi :</strong> Pengalaman minimal 1 tahun di    bidang konstruksi, kemampuan membaca gambar teknik, kemampuan komunikasi yang baik.</p>
                        </div>
                    </div>
                    <div className="bg-blue-600 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 max-w-3xl lg:max-w-4xl">
                        <img src={Foreman} alt="Foreman" className="w-full md:w-1/3 h-auto rounded-lg" />
                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold">Mandor</h3>
                            <p className="mt-2"><strong>Deskripsi Pekerjaan :</strong> Mengawasi dan mengoordinasikan pekerjaan tim di lokasi.</p>
                            <p className="mt-2"><strong>Kualifikasi :</strong> Pengalaman minimal 2 tahun sebagai mandor, keterampilan kepemimpinan, pengetahuan luas tentang proses konstruksi.</p>
                        </div>
                    </div>
                    <div className="bg-blue-600 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 max-w-3xl lg:max-w-4xl">
                        <img src={Architect} alt="Architect" className="w-full md:w-1/3 h-auto rounded-lg" />
                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold">Arsitek</h3>
                            <p className="mt-2"><strong>Deskripsi Pekerjaan :</strong> Merancang dan mengembangkan rencana bangunan sesuai dengan kebutuhan klien.</p>
                            <p className="mt-2"><strong>Kualifikasi :</strong> Gelar Arsitektur, pengalaman minimal 3 tahun, mahir dalam perangkat lunak desain, kreativitas tinggi.</p>
                        </div>
                    </div>
                <p className="text-center max-w-3xl">
                    <strong>Bagaimana cara melamar :</strong> Kirim CV anda dengan sampul ke HandYman@handyman.com dengan subjek "Melamar sebagai [Posisi yang dilamar]".
                </p>
            </div>

            {/* Job Qualification End */}

            {/* Reason Start */}

            <div className="container mx-auto p-8">
                <section className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-blue-700">Kenapa Memilih Kami?</h2>
                    <div className="border-2 border-blue-900 p-4 bg-blue-500 text-white rounded-xl">
                        <p>
                            Kami percaya bahwa kesuksesan perusahaan bergantung pada karyawan yang berdedikasi dan termotivasi. Berikut beberapa alasan mengapa Anda harus bergabung dengan kami:
                        </p>
                        <ul className="list-disc list-inside mt-4">
                            <li>
                                <strong>Reputasi Terpercaya:</strong> Kami memiliki rekam jejak yang solid dalam memberikan layanan berkualitas.
                            </li>
                            <li>
                                <strong>Peluang Pertumbuhan:</strong> Kami menawarkan berbagai peluang pengembangan karir dan pelatihan.
                            </li>
                            <li>
                                <strong>Inovasi Berkelanjutan:</strong> Kami selalu mengadopsi teknologi dan metode terbaru dalam proyek kami.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="text-center mb-12 text-blue-700">
                    <h2 className="text-3xl font-bold mb-4">Lingkungan Kerja</h2>
                    <p>
                        Di perusahaan kami, Anda akan bekerja dalam lingkungan yang kolaboratif dan mendukung. Kami menghargai kontribusi setiap karyawan dan mendorong inovasi serta kreativitas. Dengan budaya kerja yang solid dan inklusif, kami menciptakan suasana kerja yang positif dan dinamis.
                    </p>
                </section>

                <section className="text-center mb-12 text-blue-700">
                    <h2 className="text-3xl font-bold mb-4">Manfaat Karyawan</h2>
                    <p>
                        Kami menawarkan berbagai manfaat bagi karyawan kami, termasuk:
                    </p>
                    <ul className="list-disc list-inside mt-4">
                        <li>Gaji Kompetitif</li>
                        <li>Asuransi Kesehatan</li>
                        <li>Cuti Berbayar</li>
                        <li>Program Pengembangan Profesional</li>
                        <li>Program Bantuan Karyawan</li>
                    </ul>
                </section>
            </div>

            {/* Reason End */}
        </div>
    )
}

export default Careers