import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bali from "../../assets/images/Bali.jpg";
import RajaAmpat from "../../assets/images/RajaAmpat.jpg";
import Komodo from "../../assets/images/Komodo.jpg";
import Borobudur from "../../assets/images/Borobudur.jpg";

function Destination() {
  const slides = [
    { img: Bali, name: "Bali" },
    { img: RajaAmpat, name: "Raja Ampat" },
    { img: Komodo, name: "Pulau Komodo" },
    { img: Borobudur, name: "Candi Borobudur" },
  ];

  const [current, setCurrent] = useState(0);
  const navigate = useNavigate(); // ✅ taruh di dalam komponen

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 py-20">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-20 md:gap-28">
        {/* Kiri: Teks */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center gap-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-lg">
            Jelajahi Destinasi Favoritmu
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl md:text-2xl max-w-md leading-relaxed">
            Gunakan panah di samping gambar untuk melihat destinasi lainnya.
          </p>
        </div>

        {/* Kanan: Gambar + panah samping */}
        <div className="md:w-1/2 relative flex items-center justify-center w-full">
          {/* Panah kiri */}
          <button
            onClick={prevSlide}
            className="absolute -left-16 sm:-left-20 z-20 bg-white/40 hover:bg-white/70 p-4 sm:p-5 rounded-full shadow-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 sm:h-7 w-6 sm:w-7 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Gambar utama */}
          <div className="relative w-full max-w-md mx-auto">
            <img
              src={slides[current].img}
              alt={slides[current].name}
              className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-2xl shadow-2xl transition-opacity duration-500"
              key={current}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center rounded-2xl">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg text-center px-2">
                {slides[current].name}
              </span>
            </div>

            {/* Tombol Destination */}
            <button
              onClick={() => navigate("/destination")} // ✅ ini pakai React Router
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition text-base sm:text-lg md:text-xl"
            >
              Destination
            </button>
          </div>

          {/* Panah kanan */}
          <button
            onClick={nextSlide}
            className="absolute -right-16 sm:-right-20 z-20 bg-white/40 hover:bg-white/70 p-4 sm:p-5 rounded-full shadow-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 sm:h-7 w-6 sm:w-7 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Destination;
