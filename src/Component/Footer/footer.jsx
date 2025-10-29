import React, { useState } from "react";

function Event() {
  const events = [
    {
      id: 1,
      title: "Festival Musik",
      date: "15 Nov 2025",
      desc: "Konser musik besar dengan artis populer dan suasana outdoor seru.",
      img: "https://picsum.photos/seed/music/900/500",
    },
    {
      id: 2,
      title: "Pameran Seni",
      date: "22 Nov 2025",
      desc: "Pameran seni kreatif dari seniman lokal dan internasional.",
      img: "https://picsum.photos/seed/art/900/500",
    },
    {
      id: 3,
      title: "Workshop Coding",
      date: "5 Des 2025",
      desc: "Belajar bikin website modern pakai React JS.",
      img: "https://picsum.photos/seed/code/900/500",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => index > 0 && setIndex(index - 1);
  const next = () => index < events.length - 1 && setIndex(index + 1);

  return (
    <div className="w-full flex justify-center px-6 py-20 bg-[#0f172a]">
      <div className="w-full max-w-[1200px] relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">

        <h2 className="text-3xl font-bold text-white mb-6 text-center tracking-wide">
          Event Terbaru
        </h2>

        {/* Tombol kiri */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/15 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl hover:bg-white/30 transition disabled:opacity-30"
        >
          ⬅
        </button>

        {/* Tombol kanan */}
        <button
          onClick={next}
          disabled={index === events.length - 1}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/15 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl hover:bg-white/30 transition disabled:opacity-30"
        >
          ➡
        </button>

        {/* Card Event */}
        <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
          <img src={events[index].img} alt={events[index].title} className="w-full h-[350px] object-cover" />
          <div className="p-6 bg-white/10 backdrop-blur-md text-white">
            <p className="text-sm text-gray-300">{events[index].date}</p>
            <h3 className="text-2xl font-bold mt-1">{events[index].title}</h3>
            <p className="text-gray-300 mt-2">{events[index].desc}</p>
          </div>
        </div>

        {/* Indikator */}
        <div className="flex justify-center mt-6 gap-3">
          {events.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition ${i === index ? "bg-white scale-125 shadow-lg" : "bg-white/30"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
