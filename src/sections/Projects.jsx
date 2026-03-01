import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { initProjectAnimations } from "../utils/projectAnimations";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import GitHubContributions from "../components/GitHubContributions";

import bankSampahImg from "../assets/Web-bank-sampah.jpeg";
import gudangProImg from "../assets/aplikasi-mobile-gudang-pro.jpg";
import myDailyKosImg from "../assets/Mydailykos.png";
import botTradingImg from "../assets/Dasboard-bot-trading.png";

const projectsData = [
    {
        title: "Bank Sampah Web",
        description:
            "Sistem manajemen bank sampah berbasis web dengan fitur poin dan transaksi digital untuk warga.",
        longDescription:
            "Membangun sistem manajemen bank sampah terpadu yang mempermudah sirkulasi data transaksional warga.\n\nFitur utama meliputi manajemen poin nasabah, pencatatan transaksi sampah, laporan keuangan otomatis, dan dashboard admin menggunakan Filament PHP.",
        tags: ["PHP", "Laravel", "Filament", "MySQL"],
        github: "https://github.com/RendiSkuy/Sistem-Bank-Sampah-Berbasis-Poin.git",
        demo: null,
        imagePlaceholder: bankSampahImg,
    },
    {
        title: "Gudang Pro - Manajemen Stok",
        description:
            "Aplikasi inventaris gudang cross-platform (Web & Mobile) untuk mengontrol stok secara real-time.",
        longDescription:
            "Mengembangkan aplikasi inventaris gudang cross-platform (Web & Mobile) untuk mengontrol stok real-time.\n\nDibangun dengan React + Vite untuk frontend web, Flutter untuk mobile, dan Express.js sebagai backend API. Mendukung multi-user dengan role management dan laporan stok harian.",
        tags: ["React", "Vite", "Express.js", "Flutter", "MySQL"],
        github: "https://github.com/RendiSkuy/gudang_pro.git",
        demo: null,
        imagePlaceholder: gudangProImg,
    },
    {
        title: "My Daily Kos",
        description:
            "Aplikasi mobile keuangan harian dengan fitur deteksi kwitansi otomatis via OCR.",
        longDescription:
            "Merancang aplikasi mobile keuangan harian dengan fitur unggul deteksi pintar kwitansi via OCR otomatis.\n\nMenggunakan Flutter untuk UI, Firebase sebagai database realtime, n8n untuk workflow automation, dan OCR untuk scanning kwitansi secara otomatis.",
        tags: ["Flutter", "Firebase", "n8n", "OCR", "Dart"],
        github: "https://github.com/RendiSkuy/fe_flutter_MydailyKos.git",
        demo: null,
        imagePlaceholder: myDailyKosImg,
    },
    {
        title: "Trading Dashboard",
        description:
            "Dashboard backend trading dengan GraphQL untuk menangani data kompleks bervolume tinggi.",
        longDescription:
            "Mengarsiteki logika Backend dengan GraphQL yang mumpuni dalam menangani data kompleks bervolume tinggi.\n\nDibangun menggunakan Node.js,Javascript, GraphQL, dan Prisma ORM. Mendukung real-time data subscription dan query efisien untuk dashboard analitik trading.",
        tags: ["Node.js", "Javascript", "GraphQL", "Prisma", "PostgreSQL"],
        github: "https://github.com/jefriwahyu/trading-dashboard.git",
        demo: null,
        imagePlaceholder: botTradingImg,
    },
];

const Projects = () => {
    const projectsRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    useGSAP(
        () => {
            const ctx = initProjectAnimations(projectsRef);
            return () => ctx.revert();
        },
        { scope: projectsRef },
    );

    return (
        <section
            ref={projectsRef}
            className="w-full bg-gray-50 dark:bg-gray-950 pt-24 pb-20 px-6 overflow-x-hidden"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="project-header text-center mb-20">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight uppercase">
                        Projects
                    </h1>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
                        Kumpulan proyek yang telah saya kerjakan, mulai dari aplikasi mobile,
                        sistem web, hingga infrastruktur backend.
                    </p>
                    <GitHubContributions />
                </div>

                {/* Project List */}
                <div className="space-y-24 md:space-y-32">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card-item">
                            <ProjectCard
                                {...project}
                                isReversed={index % 2 !== 0}
                                onClick={() => setSelectedProject(project)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;
