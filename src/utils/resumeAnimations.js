import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================================
// RESUME ANIMATIONS
// File: src/utils/resumeAnimations.js
//
// Berisi semua animasi untuk halaman Resume / CV.
// Dipanggil dari: src/sections/Resume.jsx
//
// Struktur animasi:
//   1. Header - judul CV              (.resume-header)
//   2. Tombol - download & aksi       (.resume-btn)
//   3. PDF Viewer - container iframe  (.resume-viewer)
//   4. Footer Note - catatan bawah    (.resume-note)
// ============================================================

// ----------------------------------------------------------
// FUNGSI UTAMA: initResumeAnimations
// Dipanggil sekali saat komponen Resume dimount.
// Parameter:
//   resumeRef - ref ke container utama <div ref={resumeRef}>
// ----------------------------------------------------------
export const initResumeAnimations = (resumeRef) => {
  const ctx = gsap.context(() => {

    // ----------------------------------------------------------
    // 1. Animasi Header CV (Fade Down)
    // Target class: .resume-header
    // Efek: judul dan deskripsi turun dari atas ke posisi asal
    // `y: -30` = elemen dimulai 30px di atas posisi normalnya
    // Ubah `duration: 1.5` untuk kecepatan animasi header
    // ----------------------------------------------------------
    gsap.from(".resume-header", {
      scrollTrigger: {
        trigger: ".resume-header",
        start: "top 95%",       // Terpicu segera saat header masuk viewport
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
      y: -30,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    // ----------------------------------------------------------
    // 2. Animasi Tombol Aksi (Fade Up + Stagger)
    // Target class: .resume-btn
    // Efek: tombol muncul dari bawah secara berurutan
    // Ubah `stagger: 0.2` untuk jeda antar tombol
    // ----------------------------------------------------------
    gsap.from(".resume-btn", {
      scrollTrigger: {
        trigger: ".resume-btn",
        start: "top 95%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
      y: 20,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    });

    // ----------------------------------------------------------
    // 3. Animasi PDF Viewer (Scale + Fade Up)
    // Target class: .resume-viewer
    // Efek: container PDF muncul membesar dari sedikit kecil
    // `scale: 0.95` = dimulai 95% ukuran normalnya
    // Ubah `duration: 1.8` untuk kecepatan reveal viewer
    // ----------------------------------------------------------
    gsap.from(".resume-viewer", {
      scrollTrigger: {
        trigger: ".resume-viewer",
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none none",
      },
      y: 60,
      opacity: 0,
      scale: 0.95,
      duration: 1.8,
      ease: "power4.out",
    });

    // ----------------------------------------------------------
    // 4. Animasi Footer Note (Slow Fade)
    // Target class: .resume-note
    // Efek: catatan footer muncul perlahan dengan sedikit gerak ke atas
    // `delay: 0.5` = mulai setelah 0.5 detik dari trigger
    // ----------------------------------------------------------
    gsap.from(".resume-note", {
      scrollTrigger: {
        trigger: ".resume-note",
        start: "top 100%",      // Terpicu begitu elemen tersentuh viewport
        end: "bottom 0%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 10,
      duration: 1.5,
      delay: 0.5,
      ease: "power2.out",
    });

  }, resumeRef);

  return ctx;
};