import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

// Import foto profil kamu dari folder assets
import profileImg from "../assets/rendi.jpg";

// Daftarkan plugin ScrollTrigger untuk animasi saat di-scroll
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeRef = useRef(null);
  const photoRef = useRef(null);

  useGSAP(
    () => {
      // 1. Animasi Hero (Teks & Foto Muncul Awal)
      gsap.from(".home-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(photoRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5,
      });

      // Efek Melayang Halus pada Foto Hero
      gsap.to(".floating-photo", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. Animasi Scroll untuk Bagian Teaser About
      gsap.from(".teaser-about-img", {
        scrollTrigger: {
          trigger: ".teaser-about-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".teaser-about-text", {
        scrollTrigger: {
          trigger: ".teaser-about-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // 3. Animasi Scroll untuk Bagian Teaser Projects
      gsap.from(".teaser-projects-img", {
        scrollTrigger: {
          trigger: ".teaser-projects-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".teaser-projects-text", {
        scrollTrigger: {
          trigger: ".teaser-projects-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: homeRef },
  );

  // Fungsi Efek 3D Tilt mengikuti gerakan Mouse
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 15;
    const yPos = (clientY / window.innerHeight - 0.5) * -15;

    gsap.to(".floating-photo", {
      rotationY: xPos,
      rotationX: yPos,
      transformPerspective: 1000,
      ease: "power1.out",
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".floating-photo", {
      rotationY: 0,
      rotationX: 0,
      ease: "power3.out",
      duration: 1,
    });
  };

  return (
    <div ref={homeRef} className="w-full">
      {/* =========================================
          BAGIAN 1: HERO SECTION (Perkenalan)
          ========================================= */}
      <section
        className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-gray-50 px-6 overflow-hidden py-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          {/* Sisi Kiri: Teks */}
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
              <Link
                to="/projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
              >
                Lihat Portofolio
              </Link>
              <a
                href="https://github.com/RendiSkuy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition shadow-sm"
              >
                Kunjungi GitHub
              </a>
            </div>
          </div>

          {/* Sisi Kanan: Foto (Bentuk Kotak Melengkung & Diperkecil) */}
          <div
            ref={photoRef}
            className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96">
              <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="floating-photo w-full h-full relative rounded-3xl border-4 border-white shadow-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Foto Rendi"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BAGIAN 2: TEASER ABOUT ME (Foto Kiri)
          ========================================= */}
      <section className="teaser-about-section py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-4/12 mx-auto md:mx-0 teaser-about-img">
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-gray-100 border border-gray-100">
              <img
                src={profileImg}
                alt="Sekilas Rendi"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="w-full md:w-8/12 text-center md:text-left">
            <h2 className="teaser-about-text text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sekilas Tentang Saya
            </h2>
            <div className="teaser-about-text w-16 h-1 bg-blue-600 mx-auto md:mx-0 rounded-full mb-8"></div>
            <p className="teaser-about-text text-gray-600 text-lg mb-6 leading-relaxed">
              Saya memiliki minat mendalam dalam membangun produk perangkat
              lunak. Tidak hanya sekadar menulis kode, saya senang merancang
              aplikasi mobile hingga mengatur otomasi backend.
            </p>
            <div className="teaser-about-text pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition"
              >
                Learn More Tentang Saya <span className="text-xl">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BAGIAN 3: TEASER PROJECTS (Foto Kanan)
          ========================================= */}
      <section className="teaser-projects-section py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-5/12 mx-auto md:mx-0 teaser-projects-img">
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-video bg-gray-200 border border-gray-100 flex items-center justify-center">
              {/* Placeholder gambar proyek, nanti bisa kamu ganti dengan screenshot MyDailyKos */}
              <img
                src={profileImg}
                alt="Proyek Rendi"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          <div className="w-full md:w-7/12 text-center md:text-left">
            <h2 className="teaser-projects-text text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proyek & Portofolio
            </h2>
            <div className="teaser-projects-text w-16 h-1 bg-blue-600 mx-auto md:mx-0 rounded-full mb-8"></div>
            <p className="teaser-projects-text text-gray-600 text-lg mb-10 leading-relaxed">
              Lihat bagaimana saya mengembangkan **MyDailyKos**, aplikasi
              keuangan dengan AI Scanner, dan berbagai proyek sistem informasi
              lainnya.
            </p>
            <div className="teaser-projects-text">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition"
              >
                Jelajahi Proyek Saya <span className="text-xl">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BAGIAN 4: TEASER CONTACT
          ========================================= */}
      {/* =========================================
    BAGIAN 4: TEASER CONTACT (Final Call to Action)
    ========================================= */}
      {/* SECTION 4: CONTACT TEASER (Sederhana & Minimalis) */}
      <section className="teaser-contact-section py-16 bg-white px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 teaser-contact-simple">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Mari Berkolaborasi</h2>
            <p className="text-gray-500 mt-2 text-lg">Tertarik bekerja sama? Kirim pesan sekarang.</p>
          </div>
          <Link to="/contact" className="px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-md">
            Hubungi Saya &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
