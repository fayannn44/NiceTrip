import React, { useState } from "react";

function Event() {
  const events = [
    {
      id: 1,
      title: "Festival Musik",
      date: "15 Nov 2025",
      desc: "Konser musik besar dengan artis terkenal dan suasana meriah di alam terbuka.",
      img: "https://picsum.photos/seed/music/800/450",
    },
    {
      id: 2,
      title: "Pameran Seni",
      date: "22 Nov 2025",
      desc: "Karya seniman lokal dan internasional dalam ruang pamer bergaya futuristik.",
      img: "https://picsum.photos/seed/art/800/450",
    },
    {
      id: 3,
      title: "Workshop Coding",
      date: "5 Des 2025",
      desc: "Belajar bikin website modern pakai React dan Tailwind secara santai.",
      img: "https://picsum.photos/seed/code/800/450",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => index > 0 && setIndex(index - 1);
  const next = () => index < events.length - 1 && setIndex(index + 1);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-900 via-gray-900 to-black p-8">
      <div className="w-full max-w-[1100px] rounded-3xl p-8 relative bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/20">
        <h2 className="text-3xl font-bold mb-8 text-center text-white tracking-wide drop-shadow-lg">
          Event Terbaru
        </h2>

        {/* tombol kiri */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl hover:bg-white/40 transition disabled:opacity-30"
        >
          ⬅
        </button>

        {/* tombol kanan */}
        <button
          onClick={next}
          disabled={index === events.length - 1}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl hover:bg-white/40 transition disabled:opacity-30"
        >
          ➡
        </button>

        {/* Card utama */}
        <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(255,255,255,0.15)]">
          <img
            src={events[index].img}
            alt={events[index].title}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-8 bg-white/10 backdrop-blur-md border-t border-white/20 text-white">
            <p className="text-sm opacity-80">{events[index].date}</p>
            <h3 className="text-2xl font-semibold mt-2 drop-shadow-md">
              {events[index].title}
            </h3>
            <p className="mt-3 text-gray-200 leading-relaxed">
              {events[index].desc}
            </p>
          </div>
        </div>

        {/* indikator */}
        <div className="flex justify-center mt-6 gap-3">
          {events.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                  : "bg-white/40"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
