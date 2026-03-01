import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";

// Import fungsi animasi (semua animasi ada di file ini)
import { initContactAnimations } from "../utils/contactAnimations";

// Import foto profil/setup
import setupImg from "../assets/rendi.jpeg";

const Contact = () => {
  const contactRef = useRef(null);

  // Inisialisasi animasi dari file utils/contactAnimations.js
  useGSAP(
    () => {
      const ctx = initContactAnimations(contactRef);
      return () => ctx.revert();
    },
    { scope: contactRef },
  );

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-24 pt-24 bg-white dark:bg-gray-900 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* SISI KIRI: Teks & Sosial Media */}
        <div className="w-full md:w-1/2 space-y-8 order-2 md:order-1">
          <div className="contact-text">
            <h2 className="text-5xl md:text-8xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tighter">
              Find <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-2 bg-blue-600 rounded-full"></div>
          </div>

          <p className="contact-text text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-md leading-relaxed">
            Punya pertanyaan, ingin berkolaborasi, atau sekadar menyapa? <br />
          </p>

          <div className="contact-text">
            <a
              href={`https://mail.google.com/mail/?view=cm&to=rendiripaldi225@gmail.com&su=${encodeURIComponent("Halo Rendi — Saya Ingin Terhubung dengan Anda")}&body=${encodeURIComponent("Halo Rendi,\n\nSaya menemukan portfolio Anda dan sangat terkesan dengan karya-karya yang telah Anda buat.\n\nSaya ingin terhubung dengan Anda untuk [tulis tujuan Anda di sini — kolaborasi / peluang kerja / pertanyaan / dll].\n\nMohon balas email ini jika Anda tertarik, saya sangat menantikan respons dari Anda.\n\nTerima kasih,\n[Nama Anda]")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 border-b-4 border-blue-100 dark:border-blue-900 hover:border-blue-600 pb-1 break-all"
            >
              rendiripaldi225@gmail.com
            </a>
          </div>

          {/* Ikon Sosial Media */}
          <div className="contact-text flex gap-4 mt-6">
            {[
              {
                href: "https://github.com/RendiSkuy",
                icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                type: "svg-fill",
              },
              {
                href: "https://www.linkedin.com/in/rendi-ripaldi-a6a9b3325/",
                icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                type: "svg-fill",
              },
            ].map((social, idx) => {
              const isMail = social.href.startsWith("mailto:");
              return (
                <a
                  key={idx}
                  href={social.href}
                  {...(!isMail && { target: "_blank", rel: "noopener noreferrer" })}
                  className="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center text-white hover:bg-blue-600 hover:-translate-y-2 transition-all duration-300 shadow-xl"
                >
                  <svg
                    className="w-6 h-6"
                    fill={social.type === "svg-fill" ? "currentColor" : "none"}
                    stroke={
                      social.type === "svg-stroke" ? "currentColor" : "none"
                    }
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={social.icon}
                    ></path>
                  </svg>
                </a>
              );
            })}
          </div>
        </div>

        {/* SISI KANAN: Gambar dengan Efek Konsisten */}
        <div className="w-full md:w-1/2 contact-image-container flex justify-center order-1 md:order-2">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] group">
            {/* Efek Blur background - Sama dengan section lain */}
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-10 animate-pulse"></div>

            {/* Photo Wrapper dengan Floating Animation */}
            <div className="floating-photo relative z-10 w-full h-full rounded-full shadow-2xl overflow-hidden flex items-center justify-center">
              <img
                src={setupImg}
                alt="My Setup"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Badge Status (Opsional) */}
            <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4 z-20 bg-white dark:bg-gray-800 px-4 py-1.5 md:px-6 md:py-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-ping"></span>
                <span className="text-xs md:text-sm font-bold text-gray-800 dark:text-gray-200">
                  Available for Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
