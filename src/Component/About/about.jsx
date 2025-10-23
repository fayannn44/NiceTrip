import React from 'react';
// Tidak ada import gambar yang sebenarnya (semua path dikosongkan)

function About() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === JUDUL UTAMA & INTRO (Dengan Animasi) === */}
        <div className="text-center mb-20 animate-fade-in-up">
          <p className="text-sm font-bold text-red-600 uppercase tracking-widest">
            Discover Our Identity
          </p>
          {/* Judul diubah agar lebih formal dan kuat */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mt-3">
            Apa Kek: The Place of Great Contrast
          </h2>
          <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-600">
            Kami adalah persimpangan unik di mana ketenangan Lake Tahoe bertemu dengan energi urban **"The Biggest Little City in the World"**, Reno. Kami menawarkan pengalaman yang tak tertandingi di West Coast.
          </p>
        </div>
        
        {/* === BAGIAN 1: The Great Contrast (Tampilan Slide Penuh Lebar - Lebih Berani) === */}
        <div className="mb-24">
          
          {/* Gambar Penuh Lebar dengan Teks di Dalam */}
          <div className="relative w-full h-[550px] rounded-2xl shadow-2xl overflow-hidden group">
            
            {/* Placeholder Gambar (Background) - Diganti dengan gradient agar lebih dinamis */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <span className="text-white text-3xl font-bold opacity-75">
                    [Placeholder Gambar Kontras Tahoe/Reno]
                </span>
            </div>
            <img 
              className="hidden" 
              src="" // Isi dengan path gambar yang sesuai
              alt="Pemandangan kontras Reno Tahoe"
            />
            
            {/* Overlay Dinamis (Menggelap saat hover untuk fokus pada teks) */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-500"></div>
            
            {/* Konten Teks di Atas Gambar */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <p className="text-xl md:text-3xl text-white font-light mb-4 uppercase tracking-[0.3em] opacity-90">
                    Live Life In
                </p>
                <h3 className="text-7xl md:text-9xl font-extrabold text-white leading-none tracking-tighter transition-all duration-500 transform group-hover:scale-[1.03]">
                    <span className="text-red-400">GREAT</span> CONTRAST
                </h3>
            </div>
          </div>
          
          {/* Konten Aksi & Deskripsi (Di Bawah Gambar) */}
          <div className="mt-16 grid md:grid-cols-3 gap-12 items-start">
            
            <div className="md:col-span-2 animate-fade-in-up delay-200">
                <h4 className="text-4xl font-bold text-gray-900 mb-6">
                    Petualangan Empat Musim Ada di Jari Anda 🌲
                </h4>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Kontras bawaan ini mendorong energi dan ambisi. Kami adalah tempat Anda dapat berinvestasi pada diri sendiri, mencoba hal baru, dan membuat kenangan yang bertahan seumur hidup.
                </p>
                <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                        <span className="flex-shrink-0 text-red-600 text-2xl mr-3">✨</span>
                        <div className='flex flex-col'>
                            <span className="font-semibold text-lg">Alam & Hiburan</span>
                            <span className='text-base'>Petualangan luar ruangan kelas dunia hanya beberapa menit dari pusat *gaming* dan kuliner.</span>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="flex-shrink-0 text-red-600 text-2xl mr-3">🎨</span>
                        <div className='flex flex-col'>
                            <span className="font-semibold text-lg">Seni Urban & Budaya</span>
                            <span className='text-base'>Jelajahi seni instalasi Burning Man, mural, galeri, dan museum.</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="md:col-span-1 flex justify-center md:justify-end animate-fade-in-up delay-400">
                <button className="bg-red-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95 w-full md:w-auto">
                    Mulai Petualangan Anda →
                </button>
            </div>
          </div>
        </div>
        
        {/* === BAGIAN 2: Misi & Nilai Inti (RSCVA - Dengan Animasi Card) === */}
        <div className="text-center pt-16 border-t border-gray-200">
          <h3 className="text-4xl font-bold text-gray-900 mb-10 animate-fade-in-up">
            Misi & Nilai Inti Kami
          </h3>
          <p className="max-w-4xl mx-auto text-xl text-gray-600 mb-12 animate-fade-in-up delay-100">
            Misi kami adalah menarik pengunjung luar kota sambil mendukung pertumbuhan berkelanjutan komunitas kami.
          </p>
          
          <div className="grid md:grid-cols-5 gap-6 text-left">
            <MissionCard 
              title="Ambisi" 
              description="Bekerja keras untuk meningkatkan kualitas hidup bagi pengunjung dan penduduk Nevada Utara." 
              icon="🚀"
              delay="200"
            />
            <MissionCard 
              title="Kolaborasi" 
              description="Mencari perspektif internal dan eksternal dengan pendekatan yang inklusif." 
              icon="🤝"
              delay="300"
            />
            <MissionCard 
              title="Integritas" 
              description="Selalu menepati janji dan melakukan hal yang benar." 
              icon="🎯"
              delay="400"
            />
            <MissionCard 
              title="Transparansi" 
              description="Berbagi informasi untuk menciptakan komunikasi yang terbuka dan jujur." 
              icon="🔍"
              delay="500"
            />
            <MissionCard 
              title="People" 
              description="Berinvestasi pada keragaman pengalaman dan keahlian individu." 
              icon="🧑‍🤝‍🧑"
              delay="600"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

// === KOMPONEN PEMBANTU (Diperbarui untuk Animasi Hover) ===
const MissionCard = ({ title, description, icon, delay }) => (
  // Menambahkan class placeholder animasi scroll dan efek hover yang lebih jelas
  <div 
    className={`bg-white p-7 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-red-400 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer animate-fade-in-up delay-${delay}`}
  >
    <div className="text-5xl mb-4">{icon}</div>
    <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);

export default About;