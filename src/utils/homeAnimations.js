import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================================
// HOME ANIMATIONS
// File: src/utils/homeAnimations.js
//
// Berisi semua animasi untuk halaman Home.
// Dipanggil dari: src/sections/Home.jsx
//
// Gaya animasi: Simple fade up per elemen (sama seperti About)
// ============================================================

export function initHomeAnimations(homeRef, photoRef) {
    const ctx = gsap.context(() => {

        // 1. Animasi elemen Hero (fade up, stagger ringan)
        gsap.utils.toArray(".home-text").forEach((el) => {
            gsap.from(el, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        });

        // 2. Animasi foto profil hero (fade up)
        if (photoRef?.current) {
            gsap.from(photoRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
            });
        }

        // 3. Floating ringan pada foto (sama seperti About)
        gsap.to(".floating-photo", {
            y: -10,
            duration: 2.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
        });

        // 4. Animasi section About Teaser (fade up per elemen)
        gsap.utils.toArray(".teaser-about-item").forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        });

        // 5. Animasi section Projects Teaser (fade up per elemen)
        gsap.utils.toArray(".teaser-projects-item").forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        });

        // 6. Animasi section Contact Teaser (fade up)
        gsap.utils.toArray(".teaser-contact-item").forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        });

    }, homeRef);

    return ctx;
}

// Efek tilt 3D saat mouse bergerak di hero (opsional, ringan)
export function handleHeroTilt(e) {
    const section = e.currentTarget;
    const rect = section.getBoundingClientRect();
    const rotateX = (((e.clientY - rect.top) / rect.height) - 0.5) * -6;
    const rotateY = (((e.clientX - rect.left) / rect.width) - 0.5) * 6;

    gsap.to(section, {
        rotateX,
        rotateY,
        transformPerspective: 800,
        duration: 0.5,
        ease: "power2.out",
    });
}

// Reset tilt saat mouse keluar
export function resetHeroTilt(e) {
    gsap.to(e.currentTarget, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power2.out",
    });
}
