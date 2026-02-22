import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutAnimations = (aboutRef) => {
  const ctx = gsap.context(() => {

    // 1. About Me items - fade up
    gsap.utils.toArray(".about-item").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    // 2. Journey cards - slide kiri/kanan bergantian
    gsap.utils.toArray(".journey-card").forEach((el, index) => {
      const isEven = index % 2 === 0;
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
        x: isEven ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    // 3. Skill cards - stagger per group
    gsap.utils.toArray(".skills-group").forEach((group) => {
      const cards = group.querySelectorAll(".skill-card");
      gsap.from(cards, {
        scrollTrigger: {
          trigger: group,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
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