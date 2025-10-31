import React from "react";

function Category() {
  const categories = [
    {
      icon: "🚌",
      title: "Mudah Diakses",
      desc: "Temukan destinasi wisata yang mudah dijangkau dengan transportasi umum atau kendaraan pribadi.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: "🎭",
      title: "Pengalaman",
      desc: "Nikmati pengalaman autentik dan budaya lokal di setiap perjalananmu.",
      color: "from-purple-500 to-indigo-400",
    },
    {
      icon: "🌿",
      title: "Pengenalan Alam",
      desc: "Rasakan keindahan alam Indonesia yang menenangkan dan penuh petualangan.",
      color: "from-green-500 to-emerald-400",
    }
  ];

  return (
    <section className="w-full py-32 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center overflow-hidden">
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-16 text-gray-900 animate-slideUp text-center leading-tight">
        Apa yang Kita punya ?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl w-full px-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center hover:-translate-y-4 transition duration-500 hover:shadow-3xl"
          >
            <div
              className={`flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${cat.color} text-white text-6xl mb-6`}
            >
              {cat.icon}
            </div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">{cat.title}</h2>
            <p className="text-gray-500 text-lg leading-relaxed">{cat.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Category;