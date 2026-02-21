import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    // 1. Animasi untuk teks About Me
    gsap.from('.about-item', {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
    });

    // 2. Animasi untuk My Journey
    gsap.from('.journey-item', {
      scrollTrigger: {
        trigger: '.journey-container', 
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power3.out',
    });

    // 3. Animasi untuk Skills (Baru dipindahkan)
    gsap.from('.skill-card', {
      scrollTrigger: {
        trigger: '.skills-container',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.7)',
    });
  }, { scope: aboutRef });

  // Data Perjalanan
  const journeys = [
    {
      year: "Februari 2026",
      role: "Presentasi Sidang Tugas Akhir",
      company: "Proyek: MyDailyKos",
      description: "Berhasil mempresentasikan dan mempertahankan aplikasi manajemen keuangan mahasiswa yang terintegrasi dengan OCR Gemini AI dan arsitektur n8n di hadapan para penguji."
    },
    {
      year: "2025 - 2026",
      role: "Eksplorasi Infrastruktur & Backend",
      company: "Self-Directed Learning",
      description: "Membangun dan mengelola server Linux (Debian/Rocky) menggunakan Proxmox, mengatur jaringan dengan WireGuard, serta mengembangkan backend menggunakan Golang, gRPC, dan Node.js."
    },
    {
      year: "2023 - Sekarang",
      role: "Mahasiswa D3 Teknik Informatika",
      company: "Fokus Komprehensif",
      description: "Mempelajari fundamental rekayasa perangkat lunak, algoritma, hingga pengembangan aplikasi mobile (Flutter) dan web modern."
    }
  ];

  // Data Skills
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: "📱",
      skills: ["Flutter", "Dart", "Firebase Auth", "Firestore"]
    },
    {
      title: "Backend & API",
      icon: "⚙️",
      skills: ["Golang", "gRPC", "Node.js", "GraphQL", "PostgreSQL"]
    },
    {
      title: "Infrastructure & DevOps",
      icon: "🖥️",
      skills: ["Linux (Debian/Rocky)", "Docker", "Proxmox", "WireGuard"]
    },
    {
      title: "Web & Automation",
      icon: "🌐",
      skills: ["React & Vite", "Tailwind CSS", "n8n (Workflow Automation)", "Gemini AI (OCR)"]
    }
  ];

  return (
    <section ref={aboutRef} className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* --- BAGIAN 1: ABOUT ME --- */}
        <div className="text-center mb-12 about-item">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang Saya</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center mb-32">
          <div className="md:w-2/3 space-y-6 text-gray-600 leading-relaxed text-lg about-item">
            <p>
              Sebagai mahasiswa tingkat akhir D3 Teknik Informatika, saya memiliki minat mendalam dalam merancang dan membangun sebuah produk perangkat lunak dari hulu ke hilir. 
            </p>
            <p>
              Fokus utama saya adalah menciptakan aplikasi mobile yang intuitif dan menghubungkannya dengan arsitektur backend yang kokoh. Saya tidak hanya terbiasa menulis kode, tetapi juga senang bereksperimen dengan pengelolaan server, otomasi workflow, hingga mengintegrasikan teknologi AI/ML ke dalam aplikasi nyata.
            </p>
            <p>
              Saat ini, saya sedang mencari peluang magang untuk menerapkan dan mengembangkan keterampilan teknis saya di lingkungan industri yang sesungguhnya.
            </p>
          </div>

          <div className="md:w-1/3 w-full space-y-4 about-item">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 mb-2">Pendidikan</h3>
              <p className="text-gray-600 text-sm">D3 Teknik Informatika</p>
              <p className="text-gray-500 text-sm">Semester Akhir</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-blue-900 mb-2">Fokus Utama</h3>
              <p className="text-blue-700 text-sm">Mobile App Development</p>
              <p className="text-blue-700 text-sm">Backend & Automation</p>
            </div>
          </div>
        </div>

        {/* --- BAGIAN 2: MY JOURNEY --- */}
        <div className="journey-container mb-32">
          <div className="text-center mb-16 journey-item">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {journeys.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active journey-item">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col mb-2">
                    <span className="text-sm font-semibold text-blue-600">{exp.year}</span>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <span className="text-sm font-medium text-gray-500">{exp.company}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- BAGIAN 3: SKILLS (BARU DITAMBAHKAN) --- */}
        <div className="skills-container">
          <div className="text-center mb-16 skill-card">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tech Stack & Keahlian</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Berpengalaman dalam membangun aplikasi secara end-to-end, mulai dari antarmuka pengguna hingga arsitektur server dan otomasi proses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;