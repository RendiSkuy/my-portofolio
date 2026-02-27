import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { initProjectAnimations } from '../utils/projectAnimations';
import ProjectCard from '../components/ProjectCard';
import myDailyKosImg from '../assets/Mydailykos.png';
import bankSampahImg from '../assets/Web-bank-sampah.jpeg';
import gudangProImg from '../assets/aplikasi-mobile-gudang-pro.jpg';

const Projects = () => {
  const projectsRef = useRef(null);

  useGSAP(() => {
    const ctx = initProjectAnimations(projectsRef);
    return () => ctx.revert();
  }, { scope: projectsRef });

  const projectData = [
    {
      title: "MyDailyKos",
      description: "Aplikasi manajemen keuangan mahasiswa dengan fitur OCR struk belanja menggunakan Gemini AI dan n8n automation.",
      tags: ["Flutter", "Firebase", "n8n", "Gemini AI"],
      github: "https://github.com/RendiSkuy",
      imagePlaceholder: myDailyKosImg
    },
    {
      title: "Aplikasi Mobile Gudang Pro",
      description: "Aplikasi mobile manajemen inventaris gudang yang efisien untuk memantau stok barang.",
      tags: ["Mobile App", "React Native", "Node.js", "PostgreSQL"],
      github: "https://github.com/RendiSkuy",
      imagePlaceholder: gudangProImg
    },
    {
      title: "Web Bank Sampah",
      description: "Sistem informasi pengelolaan bank sampah berbasis web untuk mempermudah pencatatan.",
      tags: ["Web", "React", "Node.js", "MySQL"],
      github: "https://github.com/RendiSkuy",
      imagePlaceholder: bankSampahImg
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-24 bg-gray-50 dark:bg-gray-950 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Judul Bagian */}
        <div className="text-center mb-24 project-header">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">Proyek & Portofolio</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Kumpulan karya terbaik saya dalam membangun aplikasi mobile, sistem informasi, hingga infrastruktur backend.
          </p>
        </div>

        {/* Daftar Proyek */}
        <div className="flex flex-col gap-24">
          {projectData.map((project, index) => (
            <div key={index} className="project-card-item">
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                github={project.github}
                isReversed={index % 2 !== 0}
                imagePlaceholder={project.imagePlaceholder}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;