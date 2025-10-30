// src/pages/DestinationPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DestinationPage() {
  const navigate = useNavigate();

  const categories = ["Tempat Hening", "Keluarga", "Petualangan"];

  // 30 destinasi (img menggunakan HTTPS via source.unsplash.com — mudah diganti ke URL lain)
  const allDestinations = [
    { name: "Bali", category: "Keluarga", img: "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QkFMSXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" },
    { name: "Raja Ampat", category: "Petualangan", img: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFqYSUyMGFtcGF0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
    { name: "Pulau Komodo", category: "Petualangan", img: "https://plus.unsplash.com/premium_photo-1661913064849-ece1ab4ddbe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFB1bGF1JTIwS29tb2RvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
    { name: "Candi Borobudur", category: "Tempat Hening", img: "https://plus.unsplash.com/premium_photo-1700955004555-900a9733ee14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FuZGklMjBCb3JvYnVkdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" },
    { name: "Lombok", category: "Keluarga", img: "https://images.unsplash.com/photo-1605752660759-2db7b7de8fa9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TG9tYm9rfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
    { name: "Bunaken", category: "Tempat Hening", img: "https://i.pinimg.com/736x/0d/d8/6c/0dd86c061a89f13a104a31f127e4007a.jpg" },
    { name: "Labuan Bajo", category: "Petualangan", img: "https://i.pinimg.com/1200x/e8/7d/9c/e87d9c8cf1082be1d828f6bbadf87447.jpg" },
    { name: "Bromo", category: "Petualangan", img: "https://i.pinimg.com/736x/d0/57/42/d057426235f0b63655bc6fc90f48837a.jpg" },
    { name: "Gili Trawangan", category: "Keluarga", img: "https://i.pinimg.com/1200x/bc/7a/01/bc7a01f74763f4b75789d05928a7590d.jpg" },
    { name: "Ubud", category: "Tempat Hening", img: "https://i.pinimg.com/1200x/6f/62/ec/6f62ecba95d1005b296fbb0590f31a89.jpg" },
    { name: "Danau Toba", category: "Tempat Hening", img: "https://i.pinimg.com/736x/a8/20/2a/a8202a949dcc64347f629a1eac16bf3c.jpg" },
    { name: "Derawan", category: "Petualangan", img: "https://i.pinimg.com/736x/07/82/b9/0782b995561fcf1ca6c50e60763e55a1.jpg" },
    { name: "Wakatobi", category: "Petualangan", img: "https://i.pinimg.com/736x/09/c7/83/09c78343062c8d3359075c8b76150ed9.jpg" },
    { name: "Tana Toraja", category: "Tempat Hening", img: "https://i.pinimg.com/736x/b9/1a/28/b91a28e894b319e95892b180601b44d0.jpg" },
    { name: "Belitung", category: "Keluarga", img: "https://i.pinimg.com/1200x/1e/1a/55/1e1a55c0b0c955bc95f62b78afa8ae42.jpg" },
    { name: "Karimunjawa", category: "Petualangan", img: "https://i.pinimg.com/736x/0a/18/13/0a18135f4e09c14c30a66e6d1d7016a4.jpg" },
    { name: "Pulau Weh", category: "Petualangan", img: "https://i.pinimg.com/1200x/45/06/84/4506846d59121439cc8472cd682b9eb5.jpg" },
    { name: "Nusa Penida", category: "Petualangan", img: "https://i.pinimg.com/736x/4b/35/a8/4b35a865a116fc815f2995f5429ed8b5.jpg" },
    { name: "Kuta", category: "Keluarga", img: "https://i.pinimg.com/736x/f9/37/1a/f9371acd49326c829ef7851234445a0b.jpg" },
    { name: "Sanur", category: "Keluarga", img: "https://i.pinimg.com/736x/97/f5/f5/97f5f59926558734452e3bf793dcc7cb.jpg" },
    { name: "Tanjung Puting", category: "Petualangan", img: "https://i.pinimg.com/1200x/fc/9c/8f/fc9c8f66d27a8abf879e63a7a5dbb9bf.jpg" },
    { name: "Belitong", category: "Keluarga", img: "https://i.pinimg.com/736x/46/d1/ec/46d1ecd9f6b0c437403c6475aea0984e.jpg" },
    { name: "Lovina", category: "Tempat Hening", img: "https://i.pinimg.com/736x/0a/6d/64/0a6d642bc20de6b12c5e7b282310dd0c.jpg" },
    { name: "Menjangan", category: "Tempat Hening", img: "https://i.pinimg.com/736x/75/cc/35/75cc35b35b9847001e242ed000c1558f.jpg" },
    { name: "Ciletuh", category: "Tempat Hening", img: "https://i.pinimg.com/736x/68/29/1d/68291d5292f5877b2ddee3a6b0b4f335.jpg" },
    { name: "Pulau Seribu", category: "Petualangan", img: "https://i.pinimg.com/736x/69/6f/01/696f016d8c21cae9fad5bc0cfa5c9d7f.jpg" },
    { name: "Tanjung Lesung", category: "Keluarga", img: "https://i.pinimg.com/736x/63/25/14/63251432267306ea23ae2348d42fb299.jpg" },
    { name: "Malang", category: "Keluarga", img: "https://i.pinimg.com/736x/c9/00/54/c90054ce3bcb7bddbcef6fb525426ee7.jpg" },
    { name: "Bandung", category: "Keluarga", img: "https://i.pinimg.com/736x/d7/2e/aa/d72eaaa5a4ed0fb4dafa53ff59d4310f.jpg" },
    { name: "Jogja", category: "Tempat Hening", img: "https://i.pinimg.com/736x/98/0d/3d/980d3dfeeda404c6458796481bb8bf69.jpg" },
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
