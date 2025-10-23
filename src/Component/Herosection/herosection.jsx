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
    <section className="relative w-full h-[600px] overflow-hidden">
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

      <div className="relative z-10 flex flex-col items-center justify-start h-full pt-20 text-center text-white">
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8" style={{ color: '#ffffff' }}>
          DISCOVER YOUR
          <br />
          ADVENTURE
        </h1>

        <button className="bg-white text-gray-900 px-6 py-3 rounded-full flex items-center shadow-lg hover:bg-gray-100 transition-colors duration-200">
          Create Your Ideal Trip 
          <span className="ml-2 text-xl">
            →
          </span>
        </button>

        <div className="absolute bottom-[-50px] w-full px-4 md:px-10 lg:px-20 z-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cardImages.map((image, index) => (
              <div 
                key={index} 
                className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300 group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover" 
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center font-semibold text-lg">
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