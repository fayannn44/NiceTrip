import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/50 shadow-sm z-50 border-b border-white/20">
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

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden flex flex-col space-y-1 focus:outline-none"
    >
      <span className="block w-6 h-[3px] bg-gray-800 rounded"></span>
      <span className="block w-6 h-[3px] bg-gray-800 rounded"></span>
      <span className="block w-6 h-[3px] bg-gray-800 rounded"></span>
    </button>
  </div>

  {menuOpen && (
    <div className="md:hidden backdrop-blur-md bg-white/60 shadow-lg border-t border-white/20">
      <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
        <a href="#category" className="hover:text-blue-600">Category</a>
        <a href="#destination" className="hover:text-blue-600">Destination</a>
        <a href="#event" className="hover:text-blue-600">Event</a>
        <a href="#review" className="hover:text-blue-600">Review</a>
      </nav>
    </div>
  )}
</header>

  );
}

export default Header;