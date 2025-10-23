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
    { src: Komodo, alt: "Pemandangan indah Pulau Komodo di Nusa Tenggara Timur, Indonesia"}
  ];

  const cardImages = [
    { src: Bali, alt: "Pulau Bali", description: "Nikmati pantai dan budaya yang kaya di Bali." },
    { src: Borobudur, alt: "Candi Borobudur", description: "Jelajahi keajaiban arsitektur kuno di Borobudur." },
    { src: RajaAmpat, alt: "Raja Ampat", description: "Selami keindahan bawah laut yang menakjubkan di Raja Ampat." },
    { src: Komodo, alt: "Pulau Komodo", description: "Temukan habitat asli Komodo, kadal terbesar di dunia." },
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundSlides.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [backgroundSlides.length]);

  return (
    // Tinggi Hero disesuaikan menjadi h-[900px] untuk mengakomodasi kartu yang lebih besar
    <section className="relative w-full h-[900px] overflow-hidden">
      <div className="absolute inset-0">
        {backgroundSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out`}
            style={{ 
              backgroundImage: `url(${slide.src})`, 
              opacity: index === currentBg ? 1 : 0, 
              filter: 'brightness(0.6)', 
            }}
            aria-hidden={index !== currentBg}
          />
        ))}
        <div className="absolute inset-0 z-0"></div> 
      </div>

      {/* Konten Teks & Tombol */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white pb-[380px] px-4"> 
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-10 leading-none" style={{ color: '#ffffff' }}>
          DISCOVER YOUR
          <br className="hidden sm:block" /> 
          ADVENTURE
        </h1>

        <button className="bg-white text-gray-900 px-8 py-4 rounded-full flex items-center shadow-2xl hover:bg-gray-100 transition-colors duration-200 text-lg font-bold transform hover:scale-[1.05] active:scale-[0.98]">
          Create Your Ideal Trip 
          <span className="ml-2 text-xl">
            →
          </span>
        </button>

        {/* Grid Kartu Gambar di Bagian Bawah */}
        <div className="absolute bottom-0 w-full px-4 md:px-10 lg:px-20 z-20">
          
          {/* PERUBAHAN UTAMA: 'overflow-x-scroll' diganti dengan 'overflow-x-auto' */}
          <div className="flex flex-nowrap overflow-x-auto md:grid md:grid-cols-4 gap-4 max-w-7xl mx-auto pb-4 scroll-smooth scrollbar-hide">
            
            {cardImages.map((image, index) => (
              <div 
                key={index} 
                className="relative flex-shrink-0 w-72 sm:w-80 md:w-full rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.05] transition-transform duration-300 group cursor-pointer border-4 border-transparent hover:border-white"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 md:h-80 object-cover transition-opacity duration-300 group-hover:opacity-80" 
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-center font-bold text-lg md:text-xl">
                        {image.description}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;