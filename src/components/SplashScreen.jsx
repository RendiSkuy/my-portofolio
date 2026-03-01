import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SplashScreen = ({ finishLoading }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => finishLoading(), // Beritahu App.jsx kalau loading selesai
    });

    tl.fromTo(
      textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
      .to(textRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.in',
        delay: 1, // Tahan teks sebentar sebelum hilang
      })
      .to(containerRef.current, {
        yPercent: -100, // Geser layar splash ke atas
        duration: 1,
        ease: 'expo.inOut',
      });
  }, [finishLoading]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-gray-900 text-white overflow-hidden"
    >
      <div className="text-center">
        <h1
          ref={textRef}
          className="flex flex-col gap-2 font-bold tracking-tighter"
        >
          <span className="text-2xl md:text-3xl text-gray-400 font-medium tracking-wide">Welcome to My Portfolio</span>
          <span className="text-4xl md:text-6xl text-white">Rendi <span className="text-blue-500">Ripaldi.</span></span>
        </h1>
        <div className="mt-4 flex justify-center">
          <div className="w-12 h-1 bg-blue-600 rounded-full overflow-hidden">
            <div className="w-full h-full bg-white animate-loading-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;