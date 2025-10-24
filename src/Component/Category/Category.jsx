import React from "react";
import { Plane, Mountain, Camera, Map, Coffee, Heart } from "lucide-react";

function Category() {
  const categories = [
    {
      icon: <Plane size={60} />,
      title: "Flight & Trip",
      desc: "Nikmati perjalanan nyaman dan cepat ke destinasi impianmu dengan berbagai pilihan maskapai dan rute yang fleksibel.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Mountain size={60} />,
      title: "Adventure",
      desc: "Eksplorasi alam liar dan petualangan ekstrem yang menantang, mulai dari hiking, camping, hingga olahraga outdoor seru.",
      color: "from-green-500 to-lime-400",
    },
    {
      icon: <Camera size={60} />,
      title: "Photography",
      desc: "Abadikan setiap momen indah di seluruh penjuru nusantara dengan tips dan spot terbaik untuk fotografi.",
      color: "from-pink-500 to-red-400",
    },
    {
      icon: <Map size={60} />,
      title: "Tour Guide",
      desc: "Panduan wisata terbaik untuk pengalaman yang tak terlupakan, termasuk itineraries, rekomendasi tempat, dan tips lokal.",
      color: "from-indigo-500 to-purple-400",
    },
    {
      icon: <Coffee size={60} />,
      title: "Culinary",
      desc: "Rasakan cita rasa khas Indonesia dari Sabang sampai Merauke, termasuk kuliner tradisional dan modern.",
      color: "from-orange-500 to-yellow-400",
    },
    {
      icon: <Heart size={60} />,
      title: "Wellness",
      desc: "Temukan pengalaman relaksasi dan wellness, mulai dari spa, yoga, hingga retreat untuk ketenangan jiwa.",
      color: "from-teal-500 to-emerald-400",
    },
  ];
  

  return (
    <section className="w-full py-32 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center overflow-hidden">
      {/* Judul Section */}
      <h1 className="text-6xl sm:text-7xl font-extrabold mb-16 text-gray-900 animate-slideUp opacity-0 text-center">
        Explore by Category
      </h1>

      {/* Grid Kategori */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 max-w-7xl w-full px-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center transform transition duration-500 hover:-translate-y-4 hover:shadow-3xl border border-transparent hover:border-gray-200 max-w-md mx-auto"
          >
            <div
              className={`flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${cat.color} text-white mb-6 transition-transform duration-500 group-hover:scale-110`}
            >
              {cat.icon}
            </div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
              {cat.title}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">{cat.desc}</p>

            {/* efek glow di hover */}
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-10 blur-xl transition duration-500`}
            ></div>
          </div>
        ))}
      </div>

      {/* Animasi Custom */}
      <style>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}

export default Category;
