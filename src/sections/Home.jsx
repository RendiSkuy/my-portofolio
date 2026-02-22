import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

// Import Fungsi Animasi
import { initHomeAnimations, handleHeroTilt, resetHeroTilt } from "../utils/homeAnimations";

// Import foto profil
import profileImg from "../assets/rendi.jpg";

const Home = () => {
  const homeRef = useRef(null);
  const photoRef = useRef(null);

  useGSAP(() => {
    const ctx = initHomeAnimations(homeRef, photoRef);
    return () => ctx.revert(); 
  }, { scope: homeRef });

  return (
    <div ref={homeRef} className="w-full overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <section
        className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-gray-50 px-6 py-10"
        onMouseMove={handleHeroTilt}
        onMouseLeave={resetHeroTilt}
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          <div className="w-full md:w-1/2 text-center md:text-left z-10">
            <p className="home-text text-blue-600 font-semibold mb-4 tracking-wide text-lg uppercase">
              Halo, perkenalkan saya
            </p>
            <h1 className="home-text text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Rendi Ripaldi
            </h1>
            <p className="home-text text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Mahasiswa tingkat akhir D3 Teknik Informatika. Berfokus merancang
              aplikasi mobile dan membangun arsitektur sistem yang efisien.
            </p>
            <div className="home-text flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link to="/projects" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg">
                Lihat Portofolio
              </Link>
              <a href="https://github.com/RendiSkuy" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition">
                Kunjungi GitHub
              </a>
            </div>
          </div>

          <div ref={photoRef} className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
            <div className="relative w-64 h-80 md:w-72 md:h-96">
              <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="floating-photo w-full h-full relative rounded-3xl border-4 border-white shadow-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
                <img src={profileImg} alt="Foto Rendi" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT TEASER */}
      <section className="teaser-about-section py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-4/12 mx-auto md:mx-0 teaser-about-img">
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-gray-100 border border-gray-100">
              <img src={profileImg} alt="Sekilas Rendi" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="teaser-about-text w-full md:w-8/12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sekilas Tentang Saya</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto md:mx-0 rounded-full mb-8"></div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Saya memiliki minat mendalam dalam membangun produk perangkat lunak. Tidak hanya sekadar menulis kode, saya senang merancang aplikasi mobile hingga mengatur otomasi backend.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition">
              Learn More Tentang Saya &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS TEASER */}
      <section className="teaser-projects-section py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-5/12 mx-auto md:mx-0 teaser-projects-img">
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-video bg-gray-200 border border-gray-100 flex items-center justify-center">
              <img src={profileImg} alt="Proyek Rendi" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
          <div className="teaser-projects-text w-full md:w-7/12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyek & Portofolio</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto md:mx-0 rounded-full mb-8"></div>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Lihat bagaimana saya mengembangkan **MyDailyKos**, aplikasi keuangan dengan AI Scanner, dan berbagai proyek sistem informasi lainnya.
            </p>
            <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition">
              Jelajahi Proyek Saya &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT TEASER */}
      <section className="teaser-contact-section py-16 bg-white px-6">
        <div className="teaser-contact-simple max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Mari Berkolaborasi</h2>
            <p className="text-gray-500 mt-2 text-lg">Tertarik bekerja sama? Kirim pesan sekarang.</p>
          </div>
          <Link to="/contact" className="px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-blue-600 transition shadow-md">
            Hubungi Saya &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;