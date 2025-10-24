import React, { useState } from "react";

function About() {
  const [expand, setExpand] = useState(false);

  return (
    <section className="w-full flex justify-center items-center bg-white py-20">
      <div
        className={`relative overflow-hidden bg-gray-800 cursor-pointer transition-all duration-700 ${
          expand ? "w-full max-w-none h-[650px]" : "w-[400px] h-[250px] rounded-xl shadow-lg"
        }`}
        onClick={() => setExpand(true)}
      >

        {/* GAMBAR */}
        <div
          className={`absolute top-0 transition-all duration-700 ${
            expand
              ? "left-0 w-1/2 h-full"
              : "left-1/2 -translate-x-1/2 w-full h-full"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4"
            alt="About Nice Trip"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEKS */}
        <div
          className={`absolute flex flex-col justify-center text-white transition-all duration-700 ${
            expand
              ? "right-0 top-0 w-1/2 h-full opacity-100 px-16"
              : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4">Tentang Nice Trip</h2>
          <p className="text-lg leading-relaxed">
            Nice Trip hadir sebagai teman perjalanan kamu untuk menjelajahi
            keindahan Indonesia. Kami percaya bahwa setiap perjalanan punya
            cerita, dan setiap sudut negeri ini selalu layak untuk dikenal.
          </p>
        </div>

        {/* TITLE AWAL */}
        {!expand && (
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-2xl font-bold tracking-wide">
              Tentang Kami
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;