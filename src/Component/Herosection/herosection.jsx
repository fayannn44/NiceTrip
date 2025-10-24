import React, { useState, useEffect } from "react";
import Bali from "../../assets/images/Bali.jpg";
import Borobudur from "../../assets/images/Borobudur.jpg";
import RajaAmpat from "../../assets/images/RajaAmpat.jpg";
import Komodo from "../../assets/images/Komodo.jpg";

function Hero() {
  const backgroundSlides = [
    { src: RajaAmpat, alt: "Panorama Kepulauan Raja Ampat" },
    { src: Bali, alt: "Pemandangan Sawah Terasering Bali" },
    { src: Borobudur, alt: "Kemegahan Candi Borobudur" },
    { src: Komodo, alt: "Pulau Komodo NTT" }
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[900px] overflow-hidden">
      <div className="absolute inset-0">
        {backgroundSlides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${slide.src})`,
              opacity: index === currentBg ? 1 : 0,
              filter: "brightness(0.6)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white pb-[380px] px-4">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-10 leading-none">
          DISCOVER YOUR <br /> ADVENTURE
        </h1>

        <button className="bg-white text-gray-900 px-8 py-4 rounded-full flex items-center shadow-2xl hover:bg-gray-100 transition duration-200 text-lg font-bold transform hover:scale-[1.05] active:scale-[0.98]">
          Create Your Ideal Trip →
        </button>

        <div className="absolute bottom-15 w-full px-4 md:px-10 lg:px-20 z-20">
  <div className="flex flex-nowrap overflow-x-auto md:grid md:grid-cols-4 gap-4 max-w-7xl mx-auto scroll-smooth scrollbar-hide">

    <div className="relative flex-shrink-0 w-72 sm:w-80 md:w-full rounded-xl overflow-hidden shadow-2xl group cursor-pointer transition">
      <img src={Bali} alt="Pulau Bali" className="w-full h-72 md:h-80 object-cover transition duration-500 group-hover:scale-105 group-hover:blur-[2px]" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 transition duration-500">
        <p className="text-white text-center font-light text-lg font-serif tracking-wide">
          Pulau tropis dengan budaya yang kaya dan pantai yang mendunia.
        </p>
      </div>
      <p className="text-white text-center mt-3 text-xl font-serif tracking-wide">BALI</p>
    </div>

    <div className="relative flex-shrink-0 w-72 sm:w-80 md:w-full rounded-xl overflow-hidden shadow-2xl group cursor-pointer transition">
      <img src={Borobudur} alt="Candi Borobudur" className="w-full h-72 md:h-80 object-cover transition duration-500 group-hover:scale-105 group-hover:blur-[2px]" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 transition duration-500">
        <p className="text-white text-center font-light text-lg font-serif tracking-wide">
          Warisan dunia UNESCO dan mahakarya arsitektur Buddha.
        </p>
      </div>
      <p className="text-white text-center mt-3 text-xl font-serif tracking-wide">CANDI BOROBUDUR</p>
    </div>

    <div className="relative flex-shrink-0 w-72 sm:w-80 md:w-full rounded-xl overflow-hidden shadow-2xl group cursor-pointer transition">
      <img src={RajaAmpat} alt="Raja Ampat" className="w-full h-72 md:h-80 object-cover transition duration-500 group-hover:scale-105 group-hover:blur-[2px]" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 transition duration-500">
        <p className="text-white text-center font-light text-lg font-serif tracking-wide">
          Surga bawah laut terbaik di dunia dengan ribuan biota laut.
        </p>
      </div>
      <p className="text-white text-center mt-3 text-xl font-serif tracking-wide">RAJA AMPAT</p>
    </div>

    <div className="relative flex-shrink-0 w-72 sm:w-80 md:w-full rounded-xl overflow-hidden shadow-2xl group cursor-pointer transition">
      <img src={Komodo} alt="Pulau Komodo" className="w-full h-72 md:h-80 object-cover transition duration-500 group-hover:scale-105 group-hover:blur-[2px]" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 transition duration-500">
        <p className="text-white text-center font-light text-lg font-serif tracking-wide">
          Habitat hewan purba asli Indonesia, Komodo.
        </p>
      </div>
      <p className="text-white text-center mt-3 text-xl font-serif tracking-wide">PULAU KOMODO</p>
    </div>

    

  </div>
</div>


      </div>
    </section>
  );
}

export default Hero;
