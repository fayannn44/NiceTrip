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

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-900 via-gray-900 to-black p-8">
      <div className="w-full max-w-[1100px] rounded-3xl p-8 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/20 relative flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center text-white tracking-wide drop-shadow-lg">
          Event Terbaru
        </h2>

        <div className="relative w-full flex items-center">
          <button
            onClick={prev}
            className="absolute left-[-50px] bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/40 hover:scale-110 transition-all"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="overflow-hidden rounded-2xl shadow-lg w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {events.map((event) => (
                <div key={event.id} className="min-w-full">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                  <div className="p-8 bg-white/10 backdrop-blur-md border-t border-white/20 text-white">
                    <p className="text-sm opacity-80">{event.date}</p>
                    <h3 className="text-2xl font-semibold mt-2 drop-shadow-md">
                      {event.title}
                    </h3>
                    <p className="mt-3 text-gray-200 leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-[-50px] bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/40 hover:scale-110 transition-all"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

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
