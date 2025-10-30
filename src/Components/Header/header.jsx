import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-gray-800 select-none">
          Nice Trip
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/category" className="hover:text-blue-600">Category</a>
          <a href="/destination" className="hover:text-blue-600">Destination</a>
          <a href="/event" className="hover:text-blue-600">Event</a>
          <a href="/review" className="hover:text-blue-600">Review</a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-6 focus:outline-none"
        >
          <span
            className={`block h-[3px] w-6 bg-gray-800 rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-6 bg-gray-800 rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[3px] w-6 bg-gray-800 rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/" className="hover:text-blue-600">Category</a>
            <a href="/" className="hover:text-blue-600">Destination</a>
            <a href="/" className="hover:text-blue-600">Event</a>
            <a href="/" className="hover:text-blue-600">Review</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
