import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initHomeAnimations = (homeRef, photoRef) => {
  const ctx = gsap.context(() => {
    
    // --- 1. Animasi Hero (Awal Load - Tetap) ---
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

    // --- 2. Animasi Reveal Teaser About (SELALU MUNCUL) ---
    gsap.from(".teaser-about-img", {
      scrollTrigger: {
        trigger: ".teaser-about-section",
        start: "top 85%",
        end: "bottom 20%",
        // "play none none none" diganti jadi:
        toggleActions: "play reverse play reverse", 
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".teaser-about-text", {
      scrollTrigger: {
        trigger: ".teaser-about-section",
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // --- 3. Animasi Reveal Teaser Projects (SELALU MUNCUL) ---
    gsap.from(".teaser-projects-img", {
      scrollTrigger: {
        trigger: ".teaser-projects-section",
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      x: 100,
      opacity: 0,      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".teaser-projects-text", {
      scrollTrigger: {
        trigger: ".teaser-projects-section",
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // --- 4. Animasi Reveal Contact (SELALU MUNCUL) ---
    gsap.from(".teaser-contact-simple", {
      scrollTrigger: {
        trigger: ".teaser-contact-section",
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

  }, homeRef);

  return ctx;
};

// Fungsi Mouse Move (Tetap sama)
export const handleHeroTilt = (e) => { /* ... kode tilt kamu ... */ };
export const resetHeroTilt = () => { /* ... kode reset kamu ... */ };