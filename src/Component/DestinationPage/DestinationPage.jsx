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
    { name: "Tanjung Puting", category: "Petualangan", img: "https://picsum.photos/id/1027/400/300" },
    { name: "Derawan", category: "Petualangan", img: "https://picsum.photos/id/1028/400/300" },
    { name: "Pulau Weh", category: "Tempat Hening", img: "https://picsum.photos/id/1029/400/300" },
    { name: "Malang", category: "Keluarga", img: "https://picsum.photos/id/1030/400/300" },
    { name: "Yogyakarta", category: "Tempat Hening", img: "https://picsum.photos/id/1031/400/300" },
    { name: "Aceh", category: "Petualangan", img: "https://picsum.photos/id/1032/400/300" },
    { name: "Manado", category: "Tempat Hening", img: "https://picsum.photos/id/1033/400/300" },
    { name: "Belitung", category: "Keluarga", img: "https://picsum.photos/id/1034/400/300" },
    { name: "Sumatera Barat", category: "Tempat Hening", img: "https://picsum.photos/id/1035/400/300" },
    { name: "Toraja", category: "Tempat Hening", img: "https://picsum.photos/id/1036/400/300" },
    { name: "Semarang", category: "Keluarga", img: "https://picsum.photos/id/1037/400/300" },
    { name: "Jakarta", category: "Keluarga", img: "https://picsum.photos/id/1038/400/300" },
    { name: "Bandung", category: "Tempat Hening", img: "https://picsum.photos/id/1039/400/300" },
    { name: "Medan", category: "Petualangan", img: "https://picsum.photos/id/1040/400/300" },
    { name: "Padang", category: "Tempat Hening", img: "https://picsum.photos/id/1041/400/300" },
    { name: "Palembang", category: "Keluarga", img: "https://picsum.photos/id/1042/400/300" },
    { name: "Pontianak", category: "Petualangan", img: "https://picsum.photos/id/1043/400/300" },
    { name: "Banda Aceh", category: "Tempat Hening", img: "https://picsum.photos/id/1044/400/300" },
    { name: "Makassar", category: "Keluarga", img: "https://picsum.photos/id/1045/400/300" },
    { name: "Kupang", category: "Petualangan", img: "https://picsum.photos/id/1046/400/300" },
    { name: "Samarinda", category: "Tempat Hening", img: "https://picsum.photos/id/1047/400/300" },
    { name: "Balikpapan", category: "Keluarga", img: "https://picsum.photos/id/1048/400/300" },
    { name: "Jayapura", category: "Petualangan", img: "https://picsum.photos/id/1049/400/300" },
    { name: "Maluku", category: "Tempat Hening", img: "https://picsum.photos/id/1050/400/300" },
    { name: "Bengkulu", category: "Keluarga", img: "https://picsum.photos/id/1051/400/300" },
    { name: "Jambi", category: "Petualangan", img: "https://picsum.photos/id/1052/400/300" },
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
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 px-6 py-12">
      {/* Button Kembali ke Home */}
      <div className="flex justify-start mb-6">
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition text-lg font-semibold shadow-md"
        >
          Kembali ke Home
        </button>
      </div>

      <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
        Halaman Destinasi
      </h1>

      {/* Search & All */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Cari destinasi..."
          value={search}
          onChange={handleSearch}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-64"
        />
        <button
          onClick={showAll}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition"
        >
          All
        </button>
      </div>

      {/* Category */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-2 rounded-lg text-white font-semibold transition ${
              activeCategory === cat
                ? "bg-green-700"
                : "bg-green-600 hover:bg-green-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Foto destinasi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {displayed.map((d) => (
          <div
            key={d.name}
            className="relative rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={d.img}
              alt={d.name}
              className="w-full h-56 md:h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-2 text-center font-semibold opacity-100">
              {d.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationPage;
