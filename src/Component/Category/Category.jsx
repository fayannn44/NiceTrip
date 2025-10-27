import React from "react";

function Category() {
  return (
    <section className="w-full py-32 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center overflow-hidden">
      <h1 className="text-6xl sm:text-7xl font-extrabold mb-16 text-gray-900 animate-slideUp opacity-0 text-center">
        Explore by Category
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 max-w-7xl w-full px-6">
        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center transform transition duration-500 hover:-translate-y-4 hover:shadow-3xl border border-transparent hover:border-gray-200 max-w-md mx-auto">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white mb-6 text-5xl transition-transform duration-500 group-hover:scale-110">
            ✈️
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
            Flight & Trip
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Nikmati perjalanan nyaman dan cepat ke destinasi impianmu dengan berbagai pilihan maskapai dan rute yang fleksibel.
          </p>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>
        </div>

        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center transform transition duration-500 hover:-translate-y-4 hover:shadow-3xl border border-transparent hover:border-gray-200 max-w-md mx-auto">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-green-500 to-lime-400 text-white mb-6 text-5xl transition-transform duration-500 group-hover:scale-110">
            🏔️
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
            Adventure
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Eksplorasi alam liar dan petualangan ekstrem yang menantang, mulai dari hiking, camping, hingga olahraga outdoor seru.
          </p>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500 to-lime-400 opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>
        </div>

        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center transform transition duration-500 hover:-translate-y-4 hover:shadow-3xl border border-transparent hover:border-gray-200 max-w-md mx-auto">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-red-400 text-white mb-6 text-5xl transition-transform duration-500 group-hover:scale-110">
            📷
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
            Photography
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Abadikan setiap momen indah di seluruh penjuru nusantara dengan tips dan spot terbaik untuk fotografi.
          </p>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 to-red-400 opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>
        </div>

        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center transform transition duration-500 hover:-translate-y-4 hover:shadow-3xl border border-transparent hover:border-gray-200 max-w-md mx-auto">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-400 text-white mb-6 text-5xl transition-transform duration-500 group-hover:scale-110">
            🗺️
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
            Tour Guide
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Panduan wisata terbaik untuk pengalaman yang tak terlupakan, termasuk itineraries, rekomendasi tempat, dan tips lokal.
          </p>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-400 opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>
        </div>

        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center transform transition duration-500 hover:-translate-y-4 hover:shadow-3xl border border-transparent hover:border-gray-200 max-w-md mx-auto">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white mb-6 text-5xl transition-transform duration-500 group-hover:scale-110">
            ☕
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
            Culinary
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Rasakan cita rasa khas Indonesia dari Sabang sampai Merauke, termasuk kuliner tradisional dan modern.
          </p>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>
        </div>

        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center transform transition duration-500 hover:-translate-y-4 hover:shadow-3xl border border-transparent hover:border-gray-200 max-w-md mx-auto">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 text-white mb-6 text-5xl transition-transform duration-500 group-hover:scale-110">
            💖
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
            Wellness
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Temukan pengalaman relaksasi dan wellness, mulai dari spa, yoga, hingga retreat untuk ketenangan jiwa.
          </p>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500 to-emerald-400 opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
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
