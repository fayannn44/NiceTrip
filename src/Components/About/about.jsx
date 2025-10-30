import React, { useState } from "react";

function About() {
  const [expand, setExpand] = useState(false);

  return (
    <section className="w-full flex justify-center items-center py-20 my-10 bg-white">
      <div
        className={`relative overflow-hidden cursor-pointer transition-all duration-700 flex flex-col md:flex-row ${
          expand
            ? "w-full h-auto md:h-[650px] rounded-none"
            : "w-[90%] sm:w-[400px] h-[250px] rounded-xl shadow-lg"
        } bg-gray-100`}
        onClick={() => setExpand(true)}
      >
        <div
          className={`transition-all duration-700 ${
            expand ? "w-full md:w-1/2 h-[200px] md:h-full" : "w-full h-full"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4"
            alt="About Nice Trip"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className={`flex flex-col justify-center text-gray-800 transition-all duration-700 ${
            expand
              ? "opacity-100 w-full md:w-1/2 px-6 sm:px-10 md:px-16 py-8 text-center md:text-left"
              : "hidden"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Nice Trip</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            Nice Trip hadir sebagai teman perjalanan kamu untuk menjelajahi keindahan Indonesia.
          </p>
        </div>

        {!expand && (
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-gray-800 text-2xl font-bold tracking-wide">Tentang Kami</h1>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
