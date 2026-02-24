import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initResumeAnimations = (resumeRef) => {
  const ctx = gsap.context(() => {

    // 1. Header (Fade down & Scale)
    gsap.from(".resume-header", {
      scrollTrigger: {
        trigger: ".resume-header",
        start: "top 95%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      y: -30,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    // 2. Buttons (Staggered fade up)
    gsap.from(".resume-btn", {
      scrollTrigger: {
        trigger: ".resume-btn",
        start: "top 95%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      y: 20,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    });

    // 3. Viewer (Reveal effect)
    gsap.from(".resume-viewer", {
      scrollTrigger: {
        trigger: ".resume-viewer",
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
      y: 60,
      opacity: 0,
      scale: 0.95,
      duration: 1.8,
      ease: "power4.out",
    });

    // 4. Note (Slow fade)
    gsap.from(".resume-note", {
      scrollTrigger: {
        trigger: ".resume-note",
        start: "top 100%",
        end: "bottom 0%",
        toggleActions: "play reverse play reverse",
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