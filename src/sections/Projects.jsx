import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { initProjectAnimations } from "../utils/projectAnimations";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import GitHubContributions from "../components/GitHubContributions";

import bankSampahImg from "../assets/Web-bank-sampah.jpeg";
import gudangProImg from "../assets/aplikasi-mobile-gudang-pro.jpg";
import myDailyKosImg from "../assets/Mydailykos.png";
import amandaImg from "../assets/amanda.png";
import turuImg from "../assets/semua-project.jpg";

const projectsData = [
    {
        title: "Bank Sampah Web Berbasis Poin",
        description:
            "Sistem manajemen bank sampah berbasis web untuk pencatatan anggota, transaksi, dan laporan.",
        longDescription:
            "Proyek akademik kelompok di sisi backend untuk mendigitalkan operasional bank sampah. Membangun modul CRUD anggota, transaksi, dan laporan dengan PHP, Laravel, dan Filament; mengintegrasikan dashboard admin real-time; mengelola database MySQL hingga deployment server lokal.",
        tags: ["PHP", "Laravel", "Filament", "MySQL"],
        github: "https://github.com/RendiSkuy/Sistem-Bank-Sampah-Berbasis-Poin",
        demo: null,
        imagePlaceholder: bankSampahImg,
    },
    {
        title: "Gudang Pro — Warehouse Management System",
        description:
            "REST API backend untuk sinkronisasi stok gudang real-time antara aplikasi web dan mobile.",
        longDescription:
            "Proyek akademik kelompok. Membangun REST API Node.js untuk menyinkronkan data stok antara aplikasi web dan mobile, termasuk pelacakan inventaris, laporan barang masuk/keluar, dan notifikasi real-time.",
        tags: ["Node.js", "REST API", "Flutter", "MySQL"],
        github: "https://github.com/RendiSkuy/gudangpro-api-js",
        demo: null,
        imagePlaceholder: gudangProImg,
    },
    {
        title: "My Daily Kos — Boarding House Finance App",
        description:
            "Aplikasi Flutter individu untuk keuangan harian anak kos dengan OCR kwitansi otomatis.",
        longDescription:
            "Membangun aplikasi mobile keuangan individu dengan Flutter dan Firebase (Firestore, Auth, Storage). Mengotomatiskan pemindaian dan pencatatan kwitansi lewat OCR + n8n, serta merancang ringkasan dan grafik pengeluaran bulanan.",
        tags: ["Flutter", "Firebase", "OCR", "n8n"],
        github: "https://github.com/RendiSkuy/fe_flutter_MydailyKos",
        demo: null,
        imagePlaceholder: myDailyKosImg,
    },
    {
        title: "T.U.R.U App — Sleep Risk Screening",
        description:
            "Aplikasi mobile individu untuk skrining risiko kesehatan akibat pola tidur dan edukasi interaktif.",
        longDescription:
            "Membangun aplikasi Flutter yang mencatat aktivitas tidur harian dan menampilkan dashboard risiko interaktif. Mengembangkan REST API Node.js, TypeScript, dan Express dengan PostgreSQL dan Prisma; mengintegrasikan mikroservis Python K-Nearest Neighbor dan chatbot Google Gemini; serta menyediakan unduhan laporan PDF.",
        tags: ["Flutter", "Node.js", "TypeScript", "PostgreSQL", "Python", "Gemini API"],
        github: "https://github.com/RendiSkuy/Turu_app-fe",
        demo: null,
        imagePlaceholder: turuImg,
    },
    {
        title: "Amanda Mart B2B Portal",
        description:
            "Backend portal B2B klien yang dikerjakan saat magang di Stara Digital Partner.",
        longDescription:
            "Berkontribusi pada pengembangan backend portal B2B Amanda Mart dengan Laravel dan PostgreSQL. Mengimplementasikan Two-Factor Authentication serta merancang dan mengoptimalkan skema database agar data klien aman, konsisten, dan mudah diaudit, dengan pendampingan mentor.",
        tags: ["Laravel", "PostgreSQL", "Two-Factor Authentication"],
        github: "https://github.com/RendiSkuy/AmandaSmart",
        demo: null,
        imagePlaceholder: amandaImg,
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
                        Kumpulan proyek akademik dan magang di bidang backend, mobile, dan aplikasi berbasis data.
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
