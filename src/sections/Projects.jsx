import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '../components/ProjectCard'; // Import cetakan kartu

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useGSAP(() => {
    // Animasi agar proyek muncul meluncur dari bawah secara bergantian
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
    });
  }, { scope: projectsRef });

  // Data proyekmu
  const projectData = [
    {
      title: "MyDailyKos",
      description: "Aplikasi manajemen keuangan pribadi yang dirancang khusus untuk mahasiswa. Memiliki fitur unggulan berupa pemindaian struk belanja otomatis menggunakan OCR dari Gemini AI yang terintegrasi di backend melalui workflow n8n.",
      tags: ["Flutter", "Firebase", "n8n", "Gemini AI"],
      github: "https://github.com/RendiSkuy", 
      imagePlaceholder: "[ Tempat Foto MyDailyKos Nanti ]"
    },
    {
      title: "Trading Dashboard",
      description: "Platform dashboard interaktif untuk memantau data trading. Dibangun menggunakan arsitektur modern dengan frontend reaktif dan backend yang melayani data terstruktur.",
      tags: ["React", "Node.js", "GraphQL", "PostgreSQL"],
      github: "https://github.com/RendiSkuy",
      imagePlaceholder: "[ Tempat Foto Trading Dashboard Nanti ]"
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Judul Bagian */}
        <div className="text-center mb-16 project-card">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyek & Portofolio</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beberapa sistem dan aplikasi yang telah saya kembangkan dari proses mendesain antarmuka hingga membangun infrastruktur peladennya.
          </p>
        </div>

        {/* Daftar Proyek */}
        <div className="space-y-12">
          {projectData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              github={project.github}
              isReversed={index % 2 !== 0} // Membuat posisi gambar selang-seling (Kiri-Kanan)
              imagePlaceholder={project.imagePlaceholder}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;