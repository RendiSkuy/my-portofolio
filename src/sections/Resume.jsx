import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import {
  FaDownload,
  FaExpand,
  FaCompress,
  FaFilePdf,
  FaEye,
  FaShieldAlt,
} from "react-icons/fa";
import { initResumeAnimations } from "../utils/resumeAnimations";

// Pastikan file PDF ada di folder public/CV-Rendi-Ripaldi.pdf
const CV_PATH = "/CV-Rendi-Ripaldi.pdf";

const Resume = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const resumeRef = useRef(null);

  useGSAP(
    () => {
      const ctx = initResumeAnimations(resumeRef);
      return () => ctx.revert();
    },
    { scope: resumeRef },
  );

  return (
    <div
      ref={resumeRef}
      className="w-full min-h-screen bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 overflow-x-hidden"
    >
      {/* Background Ornamen Estetik */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 dark:bg-blue-950 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-purple-50 dark:bg-purple-950 rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* ===== HEADER ===== */}
        <div className="resume-header text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            Professional Profile
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tighter uppercase">
            Curriculum <span className="text-blue-600">Vitae</span>
          </h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic">
            "Berdedikasi untuk membangun solusi digital yang efisien melalui
            kode yang bersih dan infrastruktur yang stabil."
          </p>
        </div>

        {/* ===== TOMBOL AKSI UTAMA ===== */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a
            href={CV_PATH}
            download="CV-Rendi-Ripaldi.pdf"
            className="resume-btn group w-full sm:w-auto flex items-center justify-center gap-3 bg-gray-900 hover:bg-blue-600 text-white font-bold px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <FaDownload className="group-hover:animate-bounce" />
            Download CV (PDF)
          </a>
        </div>

        {/* ===== PDF VIEWER CONTAINER ===== */}
        <div
          className={`resume-viewer w-full bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-8 border-white dark:border-gray-700 overflow-hidden transition-all duration-500 ease-in-out ${isFullscreen
            ? "fixed inset-4 md:inset-8 z-[60] rounded-3xl"
            : "relative z-10"
            }`}
        >
          {/* Custom Header Top Bar */}
          <div className="flex items-center justify-between px-8 py-5 bg-gray-900">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="h-4 w-[1px] bg-gray-700 mx-2 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <FaFilePdf className="text-red-500 text-xl" />
                <span className="text-sm font-bold text-gray-300 tracking-tight hidden sm:block">
                  Rendi_Ripaldi_CV_2026.pdf
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-black bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl transition-all transform active:scale-95 shadow-lg shadow-blue-500/30"
              >
                <FaEye className="text-sm" /> <span>FULL VIEW</span>
              </a>
              {isFullscreen && (
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="p-2.5 bg-gray-800 hover:bg-red-500 text-white rounded-xl transition-all duration-300"
                >
                  <FaCompress />
                </button>
              )}
            </div>
          </div>

          {/* Iframe Viewport */}
          <div className="bg-[#525659] relative">
            <iframe
              src={`${CV_PATH}#view=FitH&toolbar=0&navpanes=0&scrollbar=1`}
              title="CV Rendi Ripaldi"
              className={`w-full transition-all duration-300 ${isFullscreen ? "h-[calc(100vh-6rem)]" : "h-[450px] sm:h-[600px] md:h-[850px]"
                }`}
              style={{ border: "none" }}
            />
          </div>
        </div>

        {/* Overlay Blur untuk Fullscreen */}
        {isFullscreen && (
          <div
            className="fixed inset-0 bg-gray-900/90 z-[55] backdrop-blur-xl transition-opacity duration-500"
            onClick={() => setIsFullscreen(false)}
          />
        )}

        {/* ===== FOOTER NOTE & SECURITY BADGE ===== */}
        <div className="resume-note mt-16 text-center space-y-6">
          <div className="flex items-center justify-center gap-3 text-gray-400 group">
            <div className="w-12 h-[2px] bg-gray-200 group-hover:w-20 group-hover:bg-blue-200 transition-all duration-500"></div>
            <FaShieldAlt className="text-gray-300" />
            <div className="w-12 h-[2px] bg-gray-200 group-hover:w-20 group-hover:bg-blue-200 transition-all duration-500"></div>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xl mx-auto italic">
            Dokumen ini dienkripsi secara aman. Jika pratinjau tidak muncul di
            browser Anda, silakan{" "}
            <a
              href={CV_PATH}
              download
              className="text-blue-600 dark:text-blue-400 font-extrabold hover:text-blue-700 dark:hover:text-blue-300 transition underline decoration-2 underline-offset-4"
            >
              Unduh CV Resmi
            </a>{" "}
            untuk melihat informasi lengkap.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
