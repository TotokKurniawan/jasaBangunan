import React, { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/Testimoni") // Ubah endpoint sesuai dengan endpoint server Anda
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);

  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollCarousel = () => {
      if (carouselRef.current) {
        const maxScrollLeft =
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        if (carouselRef.current.scrollLeft >= maxScrollLeft) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: 1, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(scrollCarousel, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 bg-gradient-to-r from-blue-100 to-blue-200 py-16 px-2">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 font-montserrat mb-4">
          Testimoni Pelanggan
        </h1>
        <p className="text-xl text-green-600 font-open-sans">
          Apa kata pelanggan kami tentang layanan kami
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-6xl mx-auto">
          <div
            ref={carouselRef}
            className="carousel flex gap-8 overflow-x-auto"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-80 bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center"
              >
                <img
                  className="mx-auto rounded-full w-32 h-32 object-cover mb-4 border-4 border-blue-700"
                  src={testimonial.gambar}
                  alt={testimonial.nama}
                />

                <h2 className="text-xl font-bold text-blue-700 font-montserrat mb-2 ">
                  {testimonial.nama.toUpperCase()}
                </h2>
                <p className="text-md font-bold text-blue-700 font-open-sans mb-4">
                  {testimonial.rating}
                </p>
                <p className="text-md text-blue-700 font-open-sans mb-4">
                  {testimonial.keterangan}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
