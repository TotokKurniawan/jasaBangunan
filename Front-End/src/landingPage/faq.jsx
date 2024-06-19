import React, { useState, useEffect } from 'react';
import FaQ from '../assets/img/FaQImage.jpg';
import { FaSearch } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faq = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const questions = [
        {
            question: "Apa itu HandYman?",
            answer: "HandYman adalah platform yang menghubungkan Anda dengan tukang bangunan profesional untuk berbagai kebutuhan konstruksi dan renovasi."
        },
        {
            question: "Metode layanan yang disediakan",
            answer: "Kami menyediakan 2 metode layanan, yaitu layanan harian dan layanan kontrak. Layanan harian adalah jasa tukang bangunan yang disewa berdasarkan jumlah hari kerja yang dihabiskan. Layanan kontrak adalah jasa tukang bangunan yang disewa untuk menyelesaikan proyek tertentu dengan kesepakatan yang jelas mengenai durasi dan biaya."
        },
        {
            question: "Bagaimana cara memesan jasa tukang bangunan melalui HandYman?",
            answer: "Dengan klik 'Bergabung dengan kami' kemudian lakukan register dan login. Anda dapat memesan jasa melalui aplikasi dengan memilih jenis pekerjaan yang dibutuhkan, mengisi detail pekerjaan, dan memilih tukang bangunan yang tersedia."
        },
        {
            question: "Apakah tukang bangunan di HandYman terpercaya dan berpengalaman?",
            answer: "Semua tukang bangunan di platform kami telah melalui proses seleksi ketat dan memiliki sertifikasi serta pengalaman di bidangnya."
        },
        {
            question: "Berapa lama waktu yang dibutuhkan untuk mendapatkan tukang bangunan setelah melakukan pemesanan?",
            answer: "Waktu penugasan bervariasi tergantung ketersediaan tukang dan kompleksitas pekerjaan, tetapi kami berusaha memberikan layanan secepat mungkin."
        },
        {
            question: "Bagaimana cara pembayaran untuk jasa tukang bangunan?",
            answer: "Pembayaran bisa dilakukan secara offline melalui tukang yang datang ke alamat atau lokasi anda. Baik layanan harian maupun kontrak"
        },
        {
            question: "Apakah saya bisa membatalkan atau mengubah pesanan setelah dikonfirmasi?",
            answer: "Ya, Anda dapat membatalkan atau mengubah pesanan dengan syarat dan ketentuan yang berlaku. Silakan cek kebijakan pembatalan di aplikasi."
        },
        {
            question: "Apakah ada jaminan atau garansi untuk pekerjaan yang dilakukan oleh tukang bangunan?",
            answer: "Kami memberikan garansi untuk kualitas pekerjaan tertentu. Yaitu garansi waktu dan garansi uang kembali"
        },
        {
            question: "Bagaimana cara menghubungi tukang jika ada masalah atau pertanyaan lebih lanjut?",
            answer: "Anda bisa menghubungi tukang pada nomor atau sosial media yang tertera pada footer atau bagian bawah landing page ini"
        },
        {
            question: "Apakah HandYman tersedia di seluruh wilayah Indonesia?",
            answer: "Saat ini, HandYman beroperasi di beberapa kota besar dan terus memperluas jangkauan layanan kami ke daerah lain."
        },
        {
            question: "Bisakah saya memberikan ulasan atau feedback tentang tukang bangunan?",
            answer: "Ya, setelah pekerjaan selesai, Anda dapat memberikan ulasan dan rating untuk membantu kami menjaga kualitas layanan."
        },
        {
            question: "Apakah HandYman menyediakan bahan bangunan juga?",
            answer: "Saat ini kami hanya menyediakan jasa tenaga kerja. Untuk bahan bangunan, Anda perlu menyediakannya sendiri atau bisa berkonsultasi dengan tukang bangunan yang dipilih."
        },
        {
            question: "Bagaimana saya bisa menjadi tukang bangunan yang terdaftar di HandYman?",
            answer: "Jika Anda ingin bergabung sebagai penyedia jasa, silakan daftarkan diri anda dengan mengirim CV pada email HandYman@HandYman.com dan ikuti proses verifikasi serta seleksi yang telah kami tetapkan."
        },
        {
            question: "Bagaimana cara mendapatkan estimasi biaya untuk proyek saya?",
            answer: "Anda bisa mendapatkan estimasi biaya dengan mengisi detail proyek di aplikasi dan tukang bangunan yang terdaftar akan memberikan penawaran harga."
        },
        {
            question: "Apakah saya perlu menyediakan alat kerja untuk tukang bangunan?",
            answer: "Tukang bangunan biasanya membawa alat kerja mereka sendiri, tetapi untuk proyek tertentu, Anda mungkin perlu menyediakan alat tambahan. Diskusikan ini dengan tukang yang bersangkutan."
        },
        {
            question: "Apakah ada biaya tambahan untuk pekerjaan yang dilakukan di luar jam kerja?",
            answer: "Ya, pekerjaan di luar jam kerja normal mungkin dikenakan biaya tambahan. Anda dapat melihat detail biaya tambahan di aplikasi atau berdiskusi langsung dengan tukang bangunan."
        },
        {
            question: "Bagaimana saya bisa memastikan kualitas bahan bangunan yang digunakan?",
            answer: "Anda bisa berdiskusi dengan tukang bangunan mengenai kualitas bahan yang akan digunakan dan meminta rekomendasi mereka. Anda juga dapat menyediakan bahan sendiri untuk memastikan kualitasnya."
        },
        {
            question: "Apakah HandYman menyediakan layanan darurat?",
            answer: "Ya, kami menyediakan layanan darurat untuk pekerjaan mendesak. Anda bisa memilih opsi layanan darurat di aplikasi saat melakukan pemesanan."
        },
    ];

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredQuestions(questions);
        } else {
            setFilteredQuestions(
                questions.filter(q =>
                    q.question.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm]);

    const toggleQuestion = index => {
        if (openQuestionIndex === index) {
            setOpenQuestionIndex(null);
        } else {
            setOpenQuestionIndex(index);
        }
    };

    return (
        <div>
            <div className='mt-16 flex justify-center items-center'>
                <img src={FaQ} alt="FAQ" className='bg-repeat h-[500px] w-[900px]' />
            </div>
            <div className='mt-8 flex justify-center items-center py-16 px-10'>
                <div className='relative w-[700px] border-solid border-2 border-blue-700 rounded-md'>
                    <input
                        type="text"
                        placeholder="Cari pertanyaan..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='border rounded py-2 px-4 w-full'
                    />
                    <FaSearch className='absolute right-3 top-3 text-gray-400' />
                </div>
            </div>
            <div className='mt-4 px-2 sm:px-8 md:px-16 lg:px-20 pb-28'>
                {filteredQuestions.map((item, index) => (
                    <div 
                        key={index} 
                        className='py-2 border-b border-gray-200 cursor-pointer'
                        onClick={() => toggleQuestion(index)}
                    >
                        <div className='flex justify-between items-center'>
                            <h3 className='text-lg font-semibold'>
                                {item.question}
                            </h3>
                            {openQuestionIndex === index ? 
                                <FaChevronUp className='text-gray-500' /> :
                                <FaChevronDown className='text-gray-500' />
                            }
                        </div>
                        {openQuestionIndex === index && (
                            <div className='mt-2'>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default faq;