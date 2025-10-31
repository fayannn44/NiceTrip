import React, { useState, useRef } from "react";
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
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();
  const touchStart = useRef(null);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 300);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 300);
  };

  // Gesture: swipe untuk mobile
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const end = e.changedTouches[0].clientX;
    const diff = touchStart.current - end;
    if (diff > 50) nextSlide(); // geser kiri → next
    else if (diff < -50) prevSlide(); // geser kanan → prev
    touchStart.current = null;
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 py-20">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-20 md:gap-28">
        {/* Kiri: Teks */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center gap-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-lg">
            Jelajahi Destinasi Favoritmu
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl md:text-2xl max-w-md leading-relaxed">
            Gunakan panah atau geser layar untuk melihat destinasi lainnya.
          </p>
        </div>

        {/* Kanan: Gambar + panah samping */}
        <div
          className="md:w-1/2 relative flex items-center justify-center w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Panah kiri */}
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-4 md:-left-12 z-20 bg-white/60 hover:bg-white/80 p-2 sm:p-3 rounded-full shadow-md transition active:scale-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 sm:h-6 w-5 sm:w-6 text-gray-800"
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
              className={`w-full h-60 sm:h-72 md:h-80 object-cover rounded-2xl shadow-2xl transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center rounded-2xl">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg text-center px-2">
                {slides[current].name}
              </span>
            </div>

            {/* Tombol Destination */}
            <button
              onClick={() => navigate("/destination")}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition text-sm sm:text-base font-semibold"
            >
              Destination
            </button>
          </div>

          {/* Panah kanan */}
          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-4 md:-right-12 z-20 bg-white/60 hover:bg-white/80 p-2 sm:p-3 rounded-full shadow-md transition active:scale-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 sm:h-6 w-5 sm:w-6 text-gray-800"
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