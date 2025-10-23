import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <div className="text-2xl font-bold text-gray-800 select-none">
          Nice Trip
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <a href="#category" className="hover:text-blue-600">Category</a>
          <a href="#destination" className="hover:text-blue-600">Destination</a>
          <a href="#event" className="hover:text-blue-600">Event</a>
          <a href="#review" className="hover:text-blue-600">Review</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-300 transition">🌧</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full  text-white hover:bg-yellow-400 transition">☀️</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;