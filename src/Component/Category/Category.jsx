import React from "react";

function Category() {
  return (
    <section className="w-full py-32 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center overflow-hidden">
      <h1 className="text-6xl sm:text-7xl font-extrabold mb-16 text-gray-900 animate-slideUp text-center">
        apa yang kamu cari?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 max-w-7xl w-full px-6">

        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center hover:-translate-y-4 transition duration-500">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-6xl mb-6">
            ✈️
          </div>
          <h2 className="text-3xl font-semibold mb-4">Penerbangan dan Perjalanan</h2>
          <p className="text-gray-500">
            Nikmati perjalanan nyaman dan cepat ke destinasi impianmu dengan berbagai pilihan maskapai dan rute fleksibel.
          </p>
        </div>

        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center hover:-translate-y-4 transition duration-500">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-green-500 to-lime-400 text-white text-6xl mb-6">
            🏔️
          </div>
          <h2 className="text-3xl font-semibold mb-4">Petualangan</h2>
          <p className="text-gray-500">
            Eksplor alam liar dan petualangan ekstrem mulai dari hiking sampai camping.
          </p>
        </div>

        <div className="relative group bg-white shadow-2xl rounded-3xl p-10 text-center hover:-translate-y-4 transition duration-500">
          <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-red-400 text-white text-6xl mb-6">
            📷
          </div>
          <h2 className="text-3xl font-semibold mb-4">Fotografi</h2>
          <p className="text-gray-500">
            Abadikan setiap momen dengan hasil terbaik sepanjang perjalananmu.
          </p>
        </div>

        
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
