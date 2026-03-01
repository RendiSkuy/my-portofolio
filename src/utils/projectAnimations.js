import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================================
// PROJECT ANIMATIONS
// File: src/utils/projectAnimations.js
//
// Berisi semua animasi untuk halaman Projects.
// Dipanggil dari: src/sections/Projects.jsx
//
// Struktur animasi:
//   1. Project Header - judul & deskripsi  (.project-header)
//   2. Project Cards - kartu proyek        (.project-card-item)
// ============================================================

// ----------------------------------------------------------
// FUNGSI UTAMA: initProjectAnimations
// Dipanggil sekali saat komponen Projects dimount.
// Parameter:
//   projectsRef - ref ke container utama <section ref={projectsRef}>
// ----------------------------------------------------------
export const initProjectAnimations = (projectsRef) => {
  const ctx = gsap.context(() => {

    // ----------------------------------------------------------
    // 1. Animasi Header Section Projects (Fade Up)
    // Target class: .project-header
    // Efek: judul dan deskripsi muncul dari bawah ke atas
    // Ubah `duration` untuk kecepatan animasi (lebih besar = lebih lambat)
    // ----------------------------------------------------------
    gsap.from(".project-header", {
      scrollTrigger: {
        trigger: ".project-header",
        start: "top 90%",       // Terpicu saat header 90% masuk viewport
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // ----------------------------------------------------------
    // 2. Animasi Kartu Proyek (Slide Up + Stagger)
    // Target class: .project-card-item
    // Efek: kartu proyek muncul dari bawah secara berurutan (stagger)
    // Ubah `stagger: 0.4` untuk jarak waktu antar kartu
    //   (semakin besar = semakin lambat/berurutan)
    // Ubah `y: 100` untuk jarak geser dari bawah
    // ----------------------------------------------------------
    gsap.from(".project-card-item", {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 80%",       // Terpicu saat section 80% masuk viewport
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.4,
      ease: "power3.out",
    });

  }, projectsRef);

  return ctx;
};