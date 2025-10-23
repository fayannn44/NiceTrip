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
            
            {/* Placeholder Gambar (Background) - DIGANTI DENGAN WARNA SOLID UNTUK MENGHINDARI EROR GRADIENT */}
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center"> 
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
        </div>

      </div>
    </section>
  );
}

// === KOMPONEN PEMBANTU (Diperbarui untuk Animasi Hover) ===


export default About;