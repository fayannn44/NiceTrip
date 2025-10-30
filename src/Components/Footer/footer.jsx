import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white py-10 px-6 mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold tracking-wide mb-3">EventWave</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Platform modern untuk menjelajahi berbagai event seru, konser, dan workshop keren di seluruh Indonesia.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="/" className="hover:text-indigo-400 transition">Event</a></li>
            <li><a href="/" className="hover:text-indigo-400 transition">Gallery</a></li>
            <li><a href="/" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Ikuti Kami</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.eventwave.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-indigo-500 transition text-lg">🌐</a>
            <a href="https://instagram.com/eventwave" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-indigo-500 transition text-lg">📸</a>
            <a href="https://twitter.com/eventwave" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-indigo-500 transition text-lg">🐦</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} EventWave. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
