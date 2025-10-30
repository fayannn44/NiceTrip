import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DestinationPage() {
  const navigate = useNavigate();

  const categories = ["Tempat Hening", "Keluarga", "Petualangan"];

  const allDestinations = [
    { name: "Bali", category: "Keluarga", img: "https://source.unsplash.com/400x300/?bali&sig=1" },
    { name: "Raja Ampat", category: "Petualangan", img: "https://source.unsplash.com/400x300/?raja-ampat&sig=2" },
    { name: "Pulau Komodo", category: "Petualangan", img: "https://source.unsplash.com/400x300/?komodo&sig=3" },
    { name: "Candi Borobudur", category: "Tempat Hening", img: "https://source.unsplash.com/400x300/?borobudur&sig=4" },
    { name: "Lombok", category: "Keluarga", img: "https://source.unsplash.com/400x300/?lombok&sig=5" },
    { name: "Bunaken", category: "Tempat Hening", img: "https://source.unsplash.com/400x300/?bunaken&sig=6" },
    { name: "Labuan Bajo", category: "Petualangan", img: "https://source.unsplash.com/400x300/?labuan-bajo&sig=7" },
    { name: "Bromo", category: "Petualangan", img: "https://source.unsplash.com/400x300/?bromo&sig=8" },
    { name: "Gili Trawangan", category: "Keluarga", img: "https://source.unsplash.com/400x300/?gili-trawangan&sig=9" },
    { name: "Ubud", category: "Tempat Hening", img: "https://source.unsplash.com/400x300/?ubud&sig=10" },
    { name: "Danau Toba", category: "Tempat Hening", img: "https://source.unsplash.com/400x300/?danau-toba&sig=11" },
    { name: "Derawan", category: "Petualangan", img: "https://source.unsplash.com/400x300/?derawan&sig=12" },
    { name: "Wakatobi", category: "Petualangan", img: "https://source.unsplash.com/400x300/?wakatobi&sig=13" },
    { name: "Tana Toraja", category: "Tempat Hening", img: "https://source.unsplash.com/400x300/?tana-toraja&sig=14" },
    { name: "Belitung", category: "Keluarga", img: "https://source.unsplash.com/400x300/?belitung&sig=15" },
    { name: "Bangka", category: "Keluarga", img: "https://source.unsplash.com/400x300/?bangka&sig=16" },
    { name: "Karimun Jawa", category: "Keluarga", img: "https://source.unsplash.com/400x300/?karimun-jawa&sig=17" },
    { name: "Tidung", category: "Keluarga", img: "https://source.unsplash.com/400x300/?tidung&sig=18" },
    { name: "Pangandaran", category: "Keluarga", img: "https://source.unsplash.com/400x300/?pangandaran&sig=19" },
    { name: "Bintan", category: "Keluarga", img: "https://source.unsplash.com/400x300/?bintan&sig=20" },
    { name: "Pulau Weh", category: "Petualangan", img: "https://source.unsplash.com/400x300/?pulau-weh&sig=21" },
    { name: "Nusa Penida", category: "Petualangan", img: "https://source.unsplash.com/400x300/?nusa-penida&sig=22" },
    { name: "Sempu", category: "Petualangan", img: "https://source.unsplash.com/400x300/?sempu&sig=23" },
    { name: "Gili Air", category: "Petualangan", img: "https://source.unsplash.com/400x300/?gili-air&sig=24" },
    { name: "Gili Meno", category: "Petualangan", img: "https://source.unsplash.com/400x300/?gili-meno&sig=25" },
    { name: "Tanjung Lesung", category: "Keluarga", img: "https://source.unsplash.com/400x300/?tanjung-lesung&sig=26" },
    { name: "Kuta", category: "Keluarga", img: "https://source.unsplash.com/400x300/?kuta&sig=27" },
    { name: "Sanur", category: "Keluarga", img: "https://source.unsplash.com/400x300/?sanur&sig=28" },
    { name: "Lovina", category: "Tempat Hening", img: "https://source.unsplash.com/400x300/?lovina&sig=29" },
    { name: "Menjangan", category: "Tempat Hening", img: "https://source.unsplash.com/400x300/?menjangan&sig=30" },
    { name: "Ciletuh", category: "Tempat Hening", img: "https://source.unsplash.com/400x300/?ciletuh&sig=31" },
    { name: "Karimunjawa", category: "Petualangan", img: "https://source.unsplash.com/400x300/?karimunjawa&sig=32" },
    { name: "Pulau Seribu", category: "Petualangan", img: "https://source.unsplash.com/400x300/?pulau-seribu&sig=33" },
    { name: "Belitong", category: "Keluarga", img: "https://source.unsplash.com/400x300/?belitong&sig=34" },
    { name: "Situbondo", category: "Tempat Hening", img: "https://source.unsplash.com/400x300/?situbondo&sig=35" },
    { name: "Batu", category: "Keluarga", img: "https://source.unsplash.com/400x300/?batu&sig=36" },
    { name: "Malang", category: "Keluarga", img: "https://source.unsplash.com/400x300/?malang&sig=37" },
    { name: "Bandung", category: "Keluarga", img: "https://source.unsplash.com/400x300/?bandung&sig=38" },
    { name: "Jogja", category: "Tempat Hening", img: "https://source.unsplash.com/400x300/?jogja&sig=39" },
    { name: "Solo", category: "Tempat Hening", img: "https://source.unsplash.com/400x300/?solo&sig=40" },
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
    <div className="min-h-screen bg-gradient-to-b from-[#c9f3e3] to-[#67C090]/40 px-6 py-16">
      <div className="flex justify-start mb-6">
        <button
          onClick={() => navigate("/")}
          className="bg-[#67C090] text-white px-6 py-2 rounded-lg hover:bg-[#56a67b] transition text-lg font-semibold shadow-md"
        >
          ← Kembali ke Home
        </button>
      </div>

      <h1 className="text-5xl font-extrabold text-gray-800 mb-10 text-center drop-shadow-sm">
        Jelajahi Destinasi
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Cari destinasi..."
          value={search}
          onChange={handleSearch}
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#67C090] w-full sm:w-72 shadow-sm"
        />
        <button
          onClick={showAll}
          className="bg-[#67C090] text-white px-6 py-3 rounded-xl hover:bg-[#56a67b] transition font-semibold shadow-md"
        >
          Tampilkan Semua
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-5 py-2.5 rounded-full font-semibold transition shadow-md ${
              activeCategory === cat
                ? "bg-[#56a67b] text-white"
                : "bg-white text-[#67C090] border border-[#67C090] hover:bg-[#67C090] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {displayed.map((d) => (
          <div
            key={d.name}
            className="relative rounded-2xl overflow-hidden shadow-lg group transform transition duration-500 hover:scale-105"
          >
            <img
              src={d.img}
              alt={d.name}
              className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-bold tracking-wide drop-shadow-md">
                {d.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationPage;
