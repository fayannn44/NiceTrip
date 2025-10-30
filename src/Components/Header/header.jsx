import React, { useState, useEffect } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-colors duration-500 ${
        scrolled ? "bg-white/70 text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div
          className="text-2xl font-bold select-none font-[Poppins]"
          style={{ letterSpacing: "0.5px" }}
        >
          Nice Trip
        </div>

        <nav className="hidden md:flex items-center space-x-8 font-[Lora]">
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

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-6 focus:outline-none"
        >
          <span
            className={`block h-[3px] w-6 rounded transition-transform duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-[3px] w-6 rounded transition-opacity duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-[3px] w-6 rounded transition-transform duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
