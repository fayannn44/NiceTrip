// src/pages/DestinationPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DestinationPage() {
  const navigate = useNavigate();

  const categories = ["Tempat Hening", "Keluarga", "Petualangan"];

  // 30 destinasi (img menggunakan HTTPS via source.unsplash.com — mudah diganti ke URL lain)
  const allDestinations = [
    { name: "Bali", category: "Keluarga", img: "https://source.unsplash.com/800x600/?bali&sig=1" },
    { name: "Raja Ampat", category: "Petualangan", img: "https://source.unsplash.com/800x600/?raja-ampat&sig=2" },
    { name: "Pulau Komodo", category: "Petualangan", img: "https://source.unsplash.com/800x600/?komodo-island&sig=3" },
    { name: "Candi Borobudur", category: "Tempat Hening", img: "https://source.unsplash.com/800x600/?borobudur&sig=4" },
    { name: "Lombok", category: "Keluarga", img: "https://source.unsplash.com/800x600/?lombok&sig=5" },
    { name: "Bunaken", category: "Tempat Hening", img: "https://source.unsplash.com/800x600/?bunaken&sig=6" },
    { name: "Labuan Bajo", category: "Petualangan", img: "https://source.unsplash.com/800x600/?labuan-bajo&sig=7" },
    { name: "Bromo", category: "Petualangan", img: "https://source.unsplash.com/800x600/?bromo&sig=8" },
    { name: "Gili Trawangan", category: "Keluarga", img: "https://source.unsplash.com/800x600/?gili-trawangan&sig=9" },
    { name: "Ubud", category: "Tempat Hening", img: "https://source.unsplash.com/800x600/?ubud&sig=10" },
    { name: "Danau Toba", category: "Tempat Hening", img: "https://source.unsplash.com/800x600/?danau-toba&sig=11" },
    { name: "Derawan", category: "Petualangan", img: "https://source.unsplash.com/800x600/?derawan&sig=12" },
    { name: "Wakatobi", category: "Petualangan", img: "https://source.unsplash.com/800x600/?wakatobi&sig=13" },
    { name: "Tana Toraja", category: "Tempat Hening", img: "https://source.unsplash.com/800x600/?toraja&sig=14" },
    { name: "Belitung", category: "Keluarga", img: "https://source.unsplash.com/800x600/?belitung&sig=15" },
    { name: "Karimunjawa", category: "Petualangan", img: "https://source.unsplash.com/800x600/?karimunjawa&sig=16" },
    { name: "Pulau Weh", category: "Petualangan", img: "https://source.unsplash.com/800x600/?pulau-weh&sig=17" },
    { name: "Nusa Penida", category: "Petualangan", img: "https://source.unsplash.com/800x600/?nusa-penida&sig=18" },
    { name: "Kuta", category: "Keluarga", img: "https://source.unsplash.com/800x600/?kuta-beach&sig=19" },
    { name: "Sanur", category: "Keluarga", img: "https://source.unsplash.com/800x600/?sanur&sig=20" },
    { name: "Tanjung Puting", category: "Petualangan", img: "https://source.unsplash.com/800x600/?tanjung-puting&sig=21" },
    { name: "Belitong", category: "Keluarga", img: "https://source.unsplash.com/800x600/?belitung-island&sig=22" },
    { name: "Lovina", category: "Tempat Hening", img: "https://source.unsplash.com/800x600/?lovina&sig=23" },
    { name: "Menjangan", category: "Tempat Hening", img: "https://source.unsplash.com/800x600/?menjangan&sig=24" },
    { name: "Ciletuh", category: "Tempat Hening", img: "https://source.unsplash.com/800x600/?ciletuh&sig=25" },
    { name: "Pulau Seribu", category: "Petualangan", img: "https://source.unsplash.com/800x600/?pulau-seribu&sig=26" },
    { name: "Tanjung Lesung", category: "Keluarga", img: "https://source.unsplash.com/800x600/?tanjung-lesung&sig=27" },
    { name: "Malang", category: "Keluarga", img: "https://source.unsplash.com/800x600/?malang&sig=28" },
    { name: "Bandung", category: "Keluarga", img: "https://source.unsplash.com/800x600/?bandung&sig=29" },
    { name: "Jogja", category: "Tempat Hening", img: "https://source.unsplash.com/800x600/?yogyakarta&sig=30" },
  ];

  const [displayed, setDisplayed] = useState(allDestinations);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setActiveCategory("");
    if (!value) setDisplayed(allDestinations);
    else {
      const filtered = allDestinations.filter((d) =>
        d.name.toLowerCase().includes(value.toLowerCase())
      );
      setDisplayed(filtered);
    }
  };

  const handleCategory = (category) => {
    setActiveCategory(category);
    setSearch("");
    const filtered = allDestinations.filter((d) => d.category === category);
    setDisplayed(filtered);
  };

  const showAll = () => {
    setDisplayed(allDestinations);
    setSearch("");
    setActiveCategory("");
  };

  return (
    <div className="min-h-screen bg-white px-6 py-16 text-gray-900">
      {/* Tombol Kembali */}
      <div className="flex justify-start mb-6">
        <button
          onClick={() => navigate("/")}
          className="bg-white border border-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:shadow-sm transition text-lg font-semibold"
        >
          ← Kembali ke Home
        </button>
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center" style={{ fontFamily: "Poppins, system-ui, -apple-system" }}>
        Jelajahi Destinasi Indonesia
      </h1>

      {/* Search & All */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Cari destinasi..."
          value={search}
          onChange={handleSearch}
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-72 shadow-sm"
          style={{ fontFamily: "Lora, serif" }}
        />
        <button
          onClick={showAll}
          className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition font-semibold shadow-sm"
        >
          Tampilkan Semua
        </button>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition shadow-sm ${
              activeCategory === cat
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
            }`}
            style={{ fontFamily: "Lora, serif" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Destinasi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {displayed.map((d) => (
          <article
            key={d.name}
            className="relative rounded-2xl overflow-hidden shadow-sm group bg-white border border-gray-100"
          >
            {/* prevent too-zoomed look: use object-contain with fixed height + subtle bg */}
            <div className="w-full h-44 bg-gray-50 flex items-center justify-center overflow-hidden">
              <img
                src={d.img}
                alt={d.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ maxHeight: "100%", width: "100%" }}
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "Poppins, system-ui" }}>{d.name}</h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: "Lora, serif" }}>{d.category}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
