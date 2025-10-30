import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-gray-800 py-16 px-6 md:px-20 border-t border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl font-extrabold mb-3">NiceTrip</h2>
          <p className="text-gray-600 text-sm">
            Travel tanpa ribet bersama NiceTrip. Jelajahi dunia nyaman dan penuh pengalaman baru.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Home</li><li>Destinations</li><li>Packages</li><li>Gallery</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>📍 Jakarta, Indonesia</li>
            <li>📞 +62 821-1234-5678</li>
            <li>✉️ support@nicetrip.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <form className="flex bg-white border border-gray-300 rounded-full overflow-hidden">
            <input type="email" placeholder="Masukkan email kamu"
              className="w-full px-4 py-2 text-sm text-gray-700 outline-none" />
            <button className="bg-gray-800 text-white px-6 text-sm font-semibold hover:bg-gray-700 transition">
              Kirim
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
        © 2025 NiceTrip. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
