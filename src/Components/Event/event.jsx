import React, { useState } from "react";

function Event() {
  const events = [
    {
      id: 1,
      title: "Indonesia ASEAN Stationery & Gifts Expo",
      date: "20–22 November 2025",
      desc: "Pameran alat tulis dan merchandise terbesar di Asia Tenggara. Hadirkan inovasi produk kreatif dari berbagai negara ASEAN.",
      img: "https://jadwalevent.web.id/wp-content/uploads/2025/06/Discover-Innovation-and-Creativity-at-the-2025-Indonesia-ASEAN-Stationery-Gifts-Expo-in-Jakar.jpg",
    },
    {
      id: 2,
      title: "Jakarta Tech Summit 2025",
      date: "4–5 November 2025",
      desc: "Konferensi teknologi dan startup terbesar di Indonesia. Bertemu inovator, investor, dan profesional industri digital.",
      img: "https://awsimages.detik.net.id/visual/2025/02/21/tech-telco-summit-2025-1740108771906_169.png?w=1200",
    },
    {
      id: 3,
      title: "MPL Indonesia Season 16",
      date: "22 Agustus – 19 Oktober 2025",
      desc: "Turnamen Mobile Legends profesional terbesar di Indonesia. Saksikan tim-tim terbaik bersaing menuju juara MPL ID Season 16!",
      img: "https://yt3.googleusercontent.com/0dW_Xm4SBK6gl52vdZn9h6u91kBNuLYLwX9lF1KVL7-Xyp_pZ2uQUpERFXYuE5prwgMRvKZSIGY=s900-c-k-c0x00ffffff-no-rj",
    },
  ];

  const [index, setIndex] = useState(0);
  const prev = () => index > 0 && setIndex(index - 1);
  const next = () => index < events.length - 1 && setIndex(index + 1);

  return (
    <div className="w-full flex justify-center px-6 py-20 bg-white">
      <div className="w-full max-w-[1200px] relative bg-gray-100 border border-gray-200 rounded-2xl p-8 shadow-md">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center font-[Poppins]">
          Event Terbaru
        </h2>

        {/* Tombol navigasi */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 w-12 h-12 rounded-full hover:bg-gray-300 transition disabled:opacity-30"
        >
          ⬅
        </button>
        <button
          onClick={next}
          disabled={index === events.length - 1}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 w-12 h-12 rounded-full hover:bg-gray-300 transition disabled:opacity-30"
        >
          ➡
        </button>

        {/* Kartu event */}
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="w-full h-[350px] overflow-hidden">
            <img
              src={events[index].img}
              alt={events[index].title}
              className="w-full h-full object-contain bg-white"
            />
          </div>
          <div className="p-6 bg-white text-gray-800">
            <p className="text-sm text-gray-500">{events[index].date}</p>
            <h3 className="text-2xl font-bold mt-1 font-[Poppins]">
              {events[index].title}
            </h3>
            <p className="text-gray-600 mt-2 font-[Lora] leading-relaxed">
              {events[index].desc}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {events.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-gray-800 scale-110" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
