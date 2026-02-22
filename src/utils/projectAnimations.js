import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initProjectAnimations = (projectsRef) => {
  const ctx = gsap.context(() => {
    // 1. Animasi Judul & Deskripsi Awal
    gsap.from(".project-header", {
      scrollTrigger: {
        trigger: ".project-header",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // 2. Animasi Kartu Proyek (Muncul meluncur satu per satu)
    gsap.from(".project-card-item", {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 80%",
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