import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================================
// CONTACT ANIMATIONS
// File: src/utils/contactAnimations.js
//
// Berisi semua animasi untuk halaman Contact.
// Dipanggil dari: src/sections/Contact.jsx
// ============================================================

export const initContactAnimations = (contactRef) => {
    const ctx = gsap.context(() => {

        // ----------------------------------------------------------
        // 1. Animasi Teks Kontak (Fade Up + Stagger)
        // Target class: .contact-text
        // Efek: Elemen teks muncul dari bawah ke atas secara bergantian
        // Ubah `y` untuk mengatur jarak gerak (semakin besar = semakin jauh)
        // Ubah `stagger` untuk mengatur jeda antar elemen
        // ----------------------------------------------------------
        gsap.from(".contact-text", {
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top 95%",
                toggleActions: "play none none none",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        });

        gsap.from(".contact-image-container", {
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top 95%",
                toggleActions: "play none none none",
            },
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
        });

    }, contactRef);

    return ctx;
};
