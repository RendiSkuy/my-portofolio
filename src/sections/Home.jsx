import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

// Import Fungsi Animasi
import {
  initHomeAnimations,
  handleHeroTilt,
  resetHeroTilt,
} from "../utils/homeAnimations";

// Import foto profil
import profileImg from "../assets/rendi.jpg";
import Typewriter from "typewriter-effect";

const Home = () => {
  const homeRef = useRef(null);
  const photoRef = useRef(null);

  useGSAP(
    () => {
      const ctx = initHomeAnimations(homeRef, photoRef);
      return () => ctx.revert();
    },
    { scope: homeRef },
  );

  return (
    <div ref={homeRef} className="w-full overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <section
        className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-6 py-10"
        onMouseMove={handleHeroTilt}
        onMouseLeave={resetHeroTilt}
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          <div className="w-full md:w-1/2 text-center md:text-left z-10">
            <p className="home-text text-blue-600 dark:text-blue-400 font-semibold mb-4 tracking-wide text-lg uppercase">
              Halo, perkenalkan saya
            </p>
            <h1 className="home-text text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-2 leading-tight">
              Rendi Ripaldi
            </h1>

            {/* ANIMASI TEKS BERGANTI */}
            <div className="home-text text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6 h-[40px] md:h-[60px]">
              <Typewriter
                options={{
                  strings: [
                    "Junior Web Developer",
                    "Junior Backend Developer",
                    "Junior Mobile Developer",
                    "Junior Fullstack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </div>

            <p className="home-text text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              Mahasiswa D3 Teknik Informatika tingkat akhir yang fokus di
              pengembangan web dan mobile. Saya bekerja di sisi frontend maupun backend,
              dan selalu terbuka untuk hal-hal baru.
            </p>

            {/* TOMBOL AKSI */}
            <div className="home-text flex flex-wrap items-center justify-center md:justify-start gap-4">


              <Link
                to="/resume"
                className="bg-white dark:bg-gray-800 dark:border-gray-600 text-blue-600 dark:text-blue-400 border border-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition shadow-sm hover:-translate-y-1"
              >
                Lihat Resume
              </Link>

              <a
                href="https://github.com/RendiSkuy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition shadow-sm flex items-center gap-2 hover:-translate-y-1"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* BAGIAN FOTO */}
          <div
            ref={photoRef}
            className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
          >
            {/* Ukuran diperbesar di sini */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-[28rem] md:h-[32rem]">
              {/* Blur background juga ikut membesar */}
              <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>

              <div className="floating-photo w-full h-full relative rounded-3xl shadow-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Foto Rendi"
                  className="w-full h-full object-cover opacity-90 transition-all duration-700 grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT TEASER */}
      <section className="teaser-about-section py-24 bg-white dark:bg-gray-900 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* BAGIAN FOTO DENGAN ANIMASI YANG SAMA */}
          <div className="w-full md:w-5/12 teaser-about-img flex justify-center">
            {/* Container relatif untuk efek blur dan ukuran */}
            <div className="relative w-72 h-[18rem] md:w-[28rem] md:h-[28rem]">
              {/* Blur background - Efek pulse yang sama dengan Section 1 */}
              <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>

              {/* Photo Wrapper dengan class floating-photo */}
              <div className="floating-photo w-full h-full relative rounded-3xl shadow-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Sekilas Rendi"
                  className="w-full h-full object-cover opacity-90 transition-all duration-700 grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>

          {/* KONTEN TEKS */}
          <div className="teaser-about-text w-full md:w-7/12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sekilas Tentang Saya
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto md:mx-0 rounded-full mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              Perkenalan singkat tentang saya dalam perjalanan saya di dunia
              teknologi dan tech stack apa yang saya kuasai sekarang.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
            >
              Learn More Tentang Saya &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS TEASER */}
      <section className="teaser-projects-section py-24 bg-gray-50 dark:bg-gray-950 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-5/12 mx-auto md:mx-0 teaser-projects-img">
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-video bg-gray-200 border border-gray-100 flex items-center justify-center">
              <img
                src={profileImg}
                alt="Proyek Rendi"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
          <div className="teaser-projects-text w-full md:w-7/12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proyek & Portofolio
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto md:mx-0 rounded-full mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 leading-relaxed">
              Lihat Project apa saja yang sudah saya buat, mulai dari aplikasi
              mobile, sistem informasi, hingga infrastruktur backend.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
            >
              Jelajahi Proyek Saya &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT TEASER */}
      <section className="teaser-contact-section py-16 bg-white dark:bg-gray-900 px-6">
        <div className="teaser-contact-simple max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Mari Berkolaborasi
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
              Tertarik bekerja sama? Kirim pesan sekarang.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-blue-600 transition shadow-md"
          >
            Hubungi Saya &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
