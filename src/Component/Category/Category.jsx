import React from "react";

function Category() {
  return (
    <section className="w-full py-32 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center overflow-hidden">
      {/* Judul Section */}
      <h1 className="text-6xl sm:text-7xl font-extrabold mb-16 text-gray-900 animate-slideUp text-center">
        Explore by Category
      </h1>

      {/* Grid Kategori */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 max-w-7xl w-full px-6">

        {/* Flight & Trip */}
        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center hover:-translate-y-4 transition duration-500">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-6xl mb-6">
            ✈️
          </div>
          <h2 className="text-3xl font-semibold mb-4">Flight & Trip</h2>
          <p className="text-gray-500">
            Nikmati perjalanan nyaman dan cepat ke destinasi impianmu dengan berbagai pilihan maskapai dan rute fleksibel.
          </p>
        </div>

        {/* Adventure */}
        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center hover:-translate-y-4 transition duration-500">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-green-500 to-lime-400 text-white text-6xl mb-6">
            🏔️
          </div>
          <h2 className="text-3xl font-semibold mb-4">Adventure</h2>
          <p className="text-gray-500">
            Eksplor alam liar dan petualangan ekstrem mulai dari hiking sampai camping.
          </p>
        </div>

        {/* Photography */}
        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center hover:-translate-y-4 transition duration-500">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-red-400 text-white text-6xl mb-6">
            📷
          </div>
          <h2 className="text-3xl font-semibold mb-4">Photography</h2>
          <p className="text-gray-500">
            Abadikan setiap momen dengan hasil terbaik sepanjang perjalananmu.
          </p>
        </div>

        {/* Tour Guide */}
        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center hover:-translate-y-4 transition duration-500">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-400 text-white text-6xl mb-6">
            🗺️
          </div>
          <h2 className="text-3xl font-semibold mb-4">Tour Guide</h2>
          <p className="text-gray-500">
            Panduan wisata terpercaya untuk pengalaman yang lebih maksimal.
          </p>
        </div>

        {/* Culinary */}
        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center hover:-translate-y-4 transition duration-500">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-6xl mb-6">
            ☕
          </div>
          <h2 className="text-3xl font-semibold mb-4">Culinary</h2>
          <p className="text-gray-500">
            Jelajahi kenikmatan kuliner Nusantara dari Sabang sampai Merauke.
          </p>
        </div>

        {/* Wellness */}
        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center hover:-translate-y-4 transition duration-500">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 text-white text-6xl mb-6">
            💖
          </div>
          <h2 className="text-3xl font-semibold mb-4">Wellness</h2>
          <p className="text-gray-500">
            Healing time dengan spa, yoga, dan relaksasi terbaik.
          </p>
        </div>
      </div>

      {/* Animasi */}
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
