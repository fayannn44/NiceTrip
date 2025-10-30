import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div
          className="text-2xl font-bold select-none text-white font-[Poppins]"
          style={{ letterSpacing: "0.5px" }}
        >
          Nice Trip
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-white font-[Lora]">
          <a href="#category" className="hover:text-[#67C090] transition">
            Category
          </a>
          <a href="#destination" className="hover:text-[#67C090] transition">
            Destination
          </a>
          <a href="#event" className="hover:text-[#67C090] transition">
            Event
          </a>
          <a href="#review" className="hover:text-[#67C090] transition">
            Review
          </a>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-6 focus:outline-none"
        >
          <span
            className={`block h-[3px] w-6 bg-white rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-6 bg-white rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[3px] w-6 bg-white rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-2xl shadow-lg border-t border-white/10">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-white font-[Lora]">
            <a href="#category" className="hover:text-[#67C090] transition">
              Category
            </a>
            <a href="#destination" className="hover:text-[#67C090] transition">
              Destination
            </a>
            <a href="#event" className="hover:text-[#67C090] transition">
              Event
            </a>
            <a href="#review" className="hover:text-[#67C090] transition">
              Review
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
