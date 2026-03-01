import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================================
// ABOUT ANIMATIONS
// File: src/utils/aboutAnimations.js
//
// Berisi semua animasi untuk halaman About.
// Dipanggil dari: src/sections/About.jsx
//
// Struktur animasi:
//   1. About Me - items umum       (.about-item)
//   2. Experience - journey cards  (.journey-card)
//   3. Certificate - cards         (.certificate-card)
//   4. Skills - per group          (.skills-group > .skill-card)
// ============================================================

// ----------------------------------------------------------
// FUNGSI UTAMA: initAboutAnimations
// Dipanggil sekali saat komponen About dimount.
// Parameter:
//   aboutRef - ref ke container utama <div ref={aboutRef}>
// ----------------------------------------------------------
export const initAboutAnimations = (aboutRef) => {
  const ctx = gsap.context(() => {

    // ----------------------------------------------------------
    // 1. Animasi Elemen Umum About Me (Fade Up)
    // Target class: .about-item
    // Efek: setiap elemen muncul dari bawah satu per satu saat di-scroll
    // Ubah `start: "top 85%"` untuk mengubah kapan animasi terpicu
    //   (semakin besar % = terpicu lebih awal)
    // ----------------------------------------------------------
    gsap.utils.toArray(".about-item").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    // ----------------------------------------------------------
    // 2. Animasi Experience Cards (Slide Kiri/Kanan Bergantian)
    // Target class: .journey-card
    // Efek: Card genap masuk dari kiri, card ganjil dari kanan
    // Ubah nilai `x` untuk mengatur jarak geser (negatif = kiri, positif = kanan)
    // ----------------------------------------------------------
    gsap.utils.toArray(".journey-card").forEach((el, index) => {
      const isEven = index % 2 === 0;
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play none none none",
        },
        x: isEven ? -100 : 100, // Card genap dari kiri, ganjil dari kanan
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    // ----------------------------------------------------------
    // 3. Animasi Certificate Cards (Fade Up)
    // Target class: .certificate-card
    // Efek: card sertifikat muncul dari bawah, satu per satu
    // ----------------------------------------------------------
    gsap.utils.toArray(".certificate-card").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    // ----------------------------------------------------------
    // 4. Animasi Skill Cards (Stagger per Grup)
    // Target class: .skills-group > .skill-card
    // Efek: setiap grup skill muncul dengan stagger (berurutan cepat)
    // Ubah `stagger: 0.05` untuk mengatur jarak waktu antar skill icon
    //   (semakin besar = semakin lambat/berurutan)
    // ----------------------------------------------------------
    gsap.utils.toArray(".skills-group").forEach((group) => {
      const cards = group.querySelectorAll(".skill-card");
      gsap.from(cards, {
        scrollTrigger: {
          trigger: group,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        clearProps: "all",
      });
    });

  }, aboutRef);

  return ctx;
};