import React, { useState, useEffect } from "react";

// *** PENTING: OPTIMASI KODE TAPI MASALAH UTAMA TETAP FILE GAMBAR! ***

// Asumsi: File gambar ini sudah dikompres.
import Bali from "../../assets/images/Bali.jpg";
import Borobudur from "../../assets/images/Borobudur.jpg";
import RajaAmpat from "../../assets/images/RajaAmpat.jpg";
import Komodo from "../../assets/images/Komodo.jpg";

const backgroundSlides = [
    { src: RajaAmpat, alt: "Panorama Kepulauan Raja Ampat", title: "RAJA AMPAT", desc: "Surga bawah laut terbaik di dunia dengan ribuan biota laut." },
    { src: Bali, alt: "Pemandangan Sawah Terasering Bali", title: "BALI", desc: "Pulau tropis dengan budaya yang kaya dan pantai yang mendunia." },
    { src: Borobudur, alt: "Kemegahan Candi Borobudur", title: "CANDI BOROBUDUR", desc: "Warisan dunia UNESCO dan mahakarya arsitektur Buddha." },
    { src: Komodo, alt: "Pulau Komodo NTT", title: "PULAU KOMODO", desc: "Habitat hewan purba asli Indonesia, Komodo." },
];

// **********************************************
// * PERUBAHAN BARU UNTUK KERINGANAN (LAZY LOAD) *
// **********************************************
const DestinationCard = ({ slide }) => (
    <div className="relative flex-shrink-0 w-72 sm:w-80 md:w-full rounded-xl overflow-hidden shadow-2xl group cursor-pointer transition">
        <img
            src={slide.src}
            alt={slide.alt}
            // Tambahkan loading="lazy" di sini.
            // KERINGANAN: Browser tidak akan memuat gambar ini sampai hampir terlihat oleh pengguna.
            // Ini mengurangi beban awal saat komponen Hero pertama kali dimuat.
            loading="lazy" 
            className="w-full h-72 md:h-80 object-cover transition duration-500 group-hover:scale-105 group-hover:blur-[2px]"
        />
        {/* ... Konten Card lainnya tetap sama ... */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 transition duration-500">
            <p className="text-white text-center font-light text-lg font-serif tracking-wide">
                {slide.desc}
            </p>
        </div>
        <p className="text-white text-center mt-3 text-xl font-serif tracking-wide">
            {slide.title}
        </p>
    </div>
);
// **********************************************

function Hero() {
    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg(prev => (prev + 1) % backgroundSlides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-w-[100vw] h-[900px] overflow-hidden m-0 p-0">
            {/* Background slideshow */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                {backgroundSlides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.src}
                        alt={slide.alt}
                        // **********************************************
                        // KERINGANAN: Tambahkan will-change dan transform
                        // Ini memaksa browser menggunakan GPU (Hardware Acceleration)
                        // untuk animasi opacity dan filter, mengurangi beban CPU.
                        // **********************************************
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 will-change-opacity transform"
                        style={{
                            opacity: index === currentBg ? 1 : 0,
                            filter: "brightness(0.6)",
                        }}
                    />
                ))}
            </div>

            {/* Konten Teks */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white pb-[380px] px-4 overflow-hidden">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-10 leading-none">
                    DISCOVER YOUR <br /> ADVENTURE
                </h1>

                <button className="bg-white text-gray-900 px-8 py-4 rounded-full flex items-center shadow-2xl hover:bg-gray-100 transition duration-200 text-lg font-bold transform hover:scale-[1.05] active:scale-[0.98]">
                    Create Your Ideal Trip &rarr;
                </button>

                {/* Destinasi */}
                <div className="absolute bottom-10 left-0 w-full z-20">
                    <div className="flex flex-nowrap overflow-x-auto md:grid md:grid-cols-4 gap-4 max-w-[100vw] scroll-smooth scrollbar-hide px-4 md:px-10 lg:px-20">
                        {backgroundSlides.map((slide, index) => (
                            <DestinationCard key={index} slide={slide} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;