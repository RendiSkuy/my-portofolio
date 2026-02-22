import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { initProjectAnimations } from '../utils/projectAnimations';
import ProjectCard from '../components/ProjectCard';

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
      imagePlaceholder: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000" // Contoh Image
    },
    {
      title: "Trading Dashboard",
      description: "Platform dashboard interaktif untuk memantau data trading menggunakan arsitektur Node.js dan GraphQL.",
      tags: ["React", "Node.js", "GraphQL", "PostgreSQL"],
      github: "https://github.com/RendiSkuy",
      imagePlaceholder: "https://images.unsplash.com/photo-1611974714024-462775bb30ee?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "E-Commerce System",
      description: "Sistem informasi penjualan modern dengan backend Go (Golang) dan infrastruktur server mandiri.",
      tags: ["Golang", "Docker", "PostgreSQL", "React"],
      github: "https://github.com/RendiSkuy",
      imagePlaceholder: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-24 bg-gray-50 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Judul Bagian */}
        <div className="text-center mb-24 project-header">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase tracking-tighter">Proyek & Portofolio</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
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