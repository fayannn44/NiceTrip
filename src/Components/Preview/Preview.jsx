import React, { useState, useEffect } from "react";

const ElegantReviewCard = ({ traveler, role, quote }) => (
  <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-gray-100 hover:border-gray-200 transition duration-500 ease-in-out w-full flex-1">
    <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-6 relative break-words">
      <svg
        className="w-6 h-6 absolute -top-4 -left-6 text-gray-200"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13 14h-2V9h2v5zm0 2h-2v2h2v-2zM5 19h14V5H5v14zm1-13h12v12H6V6z" />
      </svg>
      {quote}
    </blockquote>

    <div className="flex items-center pt-4 border-t border-gray-100 mt-6">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 shadow-inner">
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>

      <div>
        <h4 className="text-md font-semibold text-gray-900">{traveler}</h4>
        <div className="flex items-center space-x-2 mt-0.5">
          <span className="text-sm text-yellow-500">{"★".repeat(5)}</span>
          <p className="text-sm text-gray-500">• {role}</p>
        </div>
      </div>
    </div>
  </div>
);

const reviews = [
  {
    traveler: "Sarah Connor",
    role: "Founder",
    quote:
      "Desain minimalis dan fungsionalitas luar biasa. Sangat premium.",
  },
  {
    traveler: "Michael Scott",
    role: "Lead Designer",
    quote: "Pengalaman pengguna yang mulus dan clean. Standar baru.",
  },
  {
    traveler: "Lina Puspita",
    role: "Product Manager",
    quote: "Sederhana, tapi kuat. Semua fitur yang kami butuhkan ada.",
  },
  {
    traveler: "David Chen",
    role: "Investor",
    quote: "Antarmuka jernih dan berkelas. Kualitas adalah yang utama.",
  },
  {
    traveler: "Anya Taylor",
    role: "Creative Director",
    quote: "Mereka berhasil membuat yang kompleks menjadi sederhana.",
  },
  {
    traveler: "John Doe",
    role: "UX Designer",
    quote: "Smooth dan cepat. Saya sangat merekomendasikan.",
  },
  {
    traveler: "Jane Smith",
    role: "CTO",
    quote:
      "Setiap detail diperhatikan, tampilannya elegan dan profesional. Semua elemen terlihat jelas tanpa terpotong. Sangat puas dengan hasilnya.",
  },
];

const RefinedElegantTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCardsPerView(3);
      else if (width >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const prevSlide = () => {
    const maxIndex = Math.max(0, reviews.length - cardsPerView);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, reviews.length - cardsPerView);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-base font-semibold uppercase tracking-widest text-gray-500">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 tracking-tight">
            Apa Kata Klien Kami.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Kualitas dibuktikan oleh mereka yang telah bekerja sama dengan kami.
            Desain yang enak dilihat dan profesional.
          </p>
        </div>

        <div
          className="relative group -mx-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex overflow-x-hidden w-full relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3 min-w-0"
                >
                  <ElegantReviewCard
                    traveler={review.traveler}
                    role={review.role}
                    quote={review.quote}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white border-2 border-gray-200 w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-opacity duration-300 ease-in-out opacity-0 ${
              isHovered ? "opacity-100" : ""
            }`}
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

          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white border-2 border-gray-200 w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-opacity duration-300 ease-in-out opacity-0 ${
              isHovered ? "opacity-100" : ""
            }`}
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
      </div>
    </section>
  );
};

export default RefinedElegantTestimonial;
