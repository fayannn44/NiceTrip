import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wave {
          from { background-position-x: 0; }
          to { background-position-x: 1000px; }
        }
        .animate-fadeUp { animation: fadeUp 1s ease-out forwards; }
        .animate-fadeUp.delay-300 { animation-delay: 0.3s; }
        .animate-wave { animation: wave 20s linear infinite; }
      `}</style>

      <footer className="bg-[#111827] text-white pt-16 pb-8 px-6 md:px-20 mt-20 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-full opacity-10 animate-wave bg-[url('https://www.transparenttextures.com/patterns/wavecut.png')]"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto animate-fadeUp">
  
          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-wide">✈️ TravelEase</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              Jelajahi dunia dengan cara terbaik. Kami menyediakan pengalaman wisata yang
              tak terlupakan, nyaman, dan menyenangkan untuk setiap perjalanan Anda.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-gray-500 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300 transition">Home</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Destinations</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Packages</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-gray-500 inline-block pb-1">
              Contact
            </h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>📍 Jakarta, Indonesia</li>
              <li>📞 +62 812-3456-7890</li>
              <li>✉️ support@travelease.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-gray-500 inline-block pb-1">
              Newsletter
            </h3>
            <p className="text-sm mb-3 text-gray-300">Dapatkan promo menarik & info destinasi terbaru!</p>
            <form className="flex bg-white/10 rounded-full overflow-hidden border border-white/20 focus-within:ring-2 focus-within:ring-gray-500 transition">
              <input type="email" placeholder="Masukkan email kamu" className="w-full px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none" required />
              <button type="submit" className="bg-gray-300 text-black px-5 font-bold hover:bg-white transition">Kirim</button>
            </form>
          </div>
        </div>

        <div className="relative z-10 mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm animate-fadeUp delay-300">
          <p className="text-gray-400">© 2025 TravelEase. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:scale-110 transition"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#" className="hover:scale-110 transition"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 h-6" /></a>
            <a href="#" className="hover:scale-110 transition"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-6 h-6" /></a>
            <a href="#" className="hover:scale-110 transition"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
