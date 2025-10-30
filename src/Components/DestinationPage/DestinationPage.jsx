import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DestinationPage() {
  const navigate = useNavigate();

  const categories = ["Tempat Hening", "Keluarga", "Petualangan"];

  const allDestinations = [
    { name: "Bali", category: "Keluarga", img: "https://picsum.photos/id/1018/400/300" },
    { name: "Raja Ampat", category: "Petualangan", img: "https://picsum.photos/id/1015/400/300" },
    { name: "Pulau Komodo", category: "Petualangan", img: "https://picsum.photos/id/1019/400/300" },
    { name: "Candi Borobudur", category: "Tempat Hening", img: "https://picsum.photos/id/1020/400/300" },
    { name: "Lombok", category: "Keluarga", img: "https://picsum.photos/id/1021/400/300" },
    { name: "Bunaken", category: "Tempat Hening", img: "https://picsum.photos/id/1022/400/300" },
    { name: "Labuan Bajo", category: "Petualangan", img: "https://picsum.photos/id/1023/400/300" },
    { name: "Bromo", category: "Petualangan", img: "https://picsum.photos/id/1024/400/300" },
    { name: "Gili Trawangan", category: "Keluarga", img: "https://picsum.photos/id/1025/400/300" },
    { name: "Ubud", category: "Tempat Hening", img: "https://picsum.photos/id/1026/400/300" },
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
      {/* Tombol Kembali */}
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

      {/* Search & All */}
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

      {/* Category Buttons */}
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

      {/* Grid Destinasi */}
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
