import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#67C090] to-[#4FA374] text-white py-20 px-6 sm:px-10 md:px-20 overflow-hidden">

      {/* Background Big Text Responsive */}
      <h1 className="absolute top-10 md:top-1/2 md:-translate-y-1/2 left-0 right-0 text-center text-[50px] sm:text-[80px] md:text-[160px] font-extrabold text-white/5 md:text-white/10 tracking-widest select-none pointer-events-none">
        NICE TRIP
      </h1>

      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#67C090]/30 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">

        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">NiceTrip</h2>
          <p className="text-white/90 leading-relaxed text-sm sm:text-base">
            Travel tanpa ribet bersama NiceTrip. Jelajahi dunia nyaman, aman,
            dan penuh pengalaman baru. ✈️🌍
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-[#67C090]/80 inline-block pb-1">
            Explore
          </h3>
          <ul className="space-y-2 text-white/80 text-sm sm:text-base">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Destinations</a></li>
            <li><a href="#" className="hover:text-white transition">Packages</a></li>
            <li><a href="#" className="hover:text-white transition">Gallery</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-[#67C090]/80 inline-block pb-1">
            Support
          </h3>
          <ul className="text-white/80 space-y-2 text-sm sm:text-base">
            <li>📍 Jakarta, Indonesia</li>
            <li>📞 +62 821-1234-5678</li>
            <li>✉️ support@nicetrip.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-[#67C090]/80 inline-block pb-1">
            Newsletter
          </h3>
          <p className="text-sm text-white/80 mb-3">
            Dapetin update promo terbaik!
          </p>
          <form className="flex bg-white/10 backdrop-blur-lg rounded-full overflow-hidden border border-white/20">
            <input
              type="email"
              placeholder="Masukkan email kamu"
              className="w-full px-3 sm:px-4 py-2 text-sm bg-transparent text-white placeholder-white/60 outline-none"
            />
            <button className="bg-[#67C090] hover:bg-[#57B080] px-4 sm:px-6 text-sm font-bold">
              Kirim
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-14 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-white/70 text-xs sm:text-sm">
        <p>© 2025 NiceTrip. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-5 sm:w-6 opacity-75 hover:opacity-100 transition" />
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-5 sm:w-6 opacity-75 hover:opacity-100 transition" />
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" className="w-5 sm:w-6 opacity-75 hover:opacity-100 transition" />
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" className="w-5 sm:w-6 opacity-75 hover:opacity-100 transition" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
