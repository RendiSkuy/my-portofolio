import React, { useEffect, useState } from 'react';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Efek transisi masuk
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden'; // Mencegah scrolling halaman saat modal terbuka
            setTimeout(() => setIsVisible(true), 10);
        }
        return () => {
            document.body.style.overflow = 'auto'; // Mengembalikan scroll saat modal ditutup
        };
    }, [project]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Tunggu animasi selesai baru copot komponen
    };

    if (!project) return null;

    return (
        <div
            className={`fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            {/* Background Overlay */}
            <div
                className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
                onClick={handleClose}
            ></div>

            {/* Konten Modal */}
            <div
                className={`relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 transform ${isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
                    }`}
                onClick={(e) => e.stopPropagation()} // Supaya klik di dalam kotak tidak menutup modal
            >
                {/* Tombol Tutup (Mobile & Desktop) */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-red-600 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                >
                    <FaTimes />
                </button>

                {/* Bagian Gambar (Kiri di Desktop, Atas di Mobile) */}
                <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-200 dark:bg-gray-800 relative flex items-center justify-center">
                    <img
                        src={project.imagePlaceholder}
                        alt={project.title}
                        className="w-full h-full object-contain p-4 md:p-8"
                    />
                    {/* Ornamen Teks Tumpuk (Opsional, biar keren) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent flex items-end p-6 pointer-events-none">
                        <h3 className="text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                    </div>
                </div>

                {/* Bagian Detail (Kanan di Desktop, Bawah di Mobile) */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto max-h-[60vh] md:max-h-[90vh] scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">

                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">Tentang Proyek</h4>

                        <p className="text-gray-900 dark:text-gray-100 font-semibold leading-relaxed mb-4 text-lg whitespace-pre-line">
                            {project.description}
                        </p>

                        {/* Render longDescription dengan memecah newline agar menjadi paragraf yang rapi */}
                        {project.longDescription && project.longDescription.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-md whitespace-pre-line">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="mb-8">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-3">Teknologi yang Digunakan</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold rounded-lg uppercase shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-1 items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-md"
                            >
                                <FaGithub className="text-lg" /> GitHub Repo
                            </a>
                        )}

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-1 items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md"
                            >
                                <FaExternalLinkAlt className="text-sm" />
                            </a>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
