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
            "Web-based waste bank management system for member, transaction, and report tracking.",
        longDescription:
            "Collaborative academic backend project for digitizing waste bank operations. Built CRUD modules for member, transaction, and report management with PHP, Laravel, and Filament; integrated an admin dashboard; and managed MySQL data with local deployment.",
        tags: ["PHP", "Laravel", "Filament", "MySQL"],
        github: "https://github.com/RendiSkuy/Sistem-Bank-Sampah-Berbasis-Poin",
        demo: null,
        imagePlaceholder: bankSampahImg,
    },
    {
        title: "Gudang Pro — Warehouse Management System",
        description:
            "Backend REST API for real-time warehouse stock synchronization across web and mobile clients.",
        longDescription:
            "Collaborative academic project. Built a Node.js REST API for synchronizing stock data across web and mobile applications, with inventory tracking, incoming/outgoing stock reports, and real-time notifications.",
        tags: ["Node.js", "REST API", "Flutter", "MySQL"],
        github: "https://github.com/RendiSkuy/gudangpro-api-js",
        demo: null,
        imagePlaceholder: gudangProImg,
    },
    {
        title: "My Daily Kos — Boarding House Finance App",
        description:
            "Individual Flutter app for daily boarding-house finances with automated receipt OCR.",
        longDescription:
            "Built an individual mobile finance app using Flutter with Firebase Firestore, Auth, and Storage. Automated receipt scanning and expense recording with OCR and n8n, and designed monthly expense summaries and charts.",
        tags: ["Flutter", "Firebase", "OCR", "n8n"],
        github: "https://github.com/RendiSkuy/fe_flutter_MydailyKos",
        demo: null,
        imagePlaceholder: myDailyKosImg,
    },
    {
        title: "T.U.R.U App — Sleep Risk Screening",
        description:
            "Individual mobile application for sleep-pattern risk screening and interactive health education.",
        longDescription:
            "Built a Flutter app that records daily sleep activity and shows interactive risk dashboards. Developed a Node.js, TypeScript, and Express REST API with PostgreSQL and Prisma; integrated a Python K-Nearest Neighbors microservice and Google Gemini chatbot; added downloadable PDF reports.",
        tags: ["Flutter", "Node.js", "TypeScript", "PostgreSQL", "Python", "Gemini API"],
        github: "https://github.com/RendiSkuy/Turu_app-fe",
        demo: null,
        imagePlaceholder: turuImg,
    },
    {
        title: "Amanda Mart B2B Portal",
        description:
            "Client B2B portal backend developed during an internship at Stara Digital Partner.",
        longDescription:
            "Contributed to backend development for the Amanda Mart B2B portal using Laravel and PostgreSQL. Implemented Two-Factor Authentication and designed and optimized database schemas for secure, consistent, and traceable client data under mentor guidance.",
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
                        Selected academic and internship projects across backend, mobile, and data-driven application development.
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
