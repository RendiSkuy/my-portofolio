import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { initAboutAnimations } from "../utils/aboutAnimations";

import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiGo,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiProxmox,
  SiLinux,
  SiTailwindcss,
  SiReact,
  SiVite,
  SiN8N,
  SiPostman,
  SiGit,
  SiGithub,
  SiAndroidstudio,
  SiFigma,
  SiVercel,
  SiCloudflare,
  SiWireguard,
  SiRedis,
  SiNginx,
  SiSupabase,
  SiPrisma,
  SiNextdotjs,
  SiExpress,
  SiKubernetes,
  SiGitlab,
  SiJira,
  SiNotion,
  SiRabbitmq,
  SiSocketdotio,
  SiJsonwebtokens,
  SiSqlite,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import {
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaMobile,
  FaServer,
} from "react-icons/fa";
import profileImg from "../assets/rendi.jpg";

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      const ctx = initAboutAnimations(aboutRef);
      return () => ctx.revert();
    },
    { scope: aboutRef },
  );

  const languages = [
    { name: "Dart", icon: <SiDart className="text-[#0175C2]" /> },
    { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
    { name: "Go", icon: <SiGo className="text-[#00ADD8]" /> },
    { name: "Java", icon: <DiJava className="text-[#007396]" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
    { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
    { name: "SQLite", icon: <SiSqlite className="text-[#003B57]" /> },
  ];

  const tools = [
    { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-[#000000]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
    { name: "Express", icon: <SiExpress className="text-[#000000]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Prisma", icon: <SiPrisma className="text-[#2D3748]" /> },
    { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-[#010101]" /> },
    { name: "RabbitMQ", icon: <SiRabbitmq className="text-[#FF6600]" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-[#000000]" /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "GitHub", icon: <SiGithub className="text-[#181717]" /> },
    { name: "GitLab", icon: <SiGitlab className="text-[#FC6D26]" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
    { name: "Nginx", icon: <SiNginx className="text-[#009639]" /> },
    { name: "Linux", icon: <SiLinux className="text-[#FCC624]" /> },
    { name: "Proxmox", icon: <SiProxmox className="text-[#E57000]" /> },
    {
      name: "Android Studio",
      icon: <SiAndroidstudio className="text-[#3DDC84]" />,
    },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
    { name: "n8n", icon: <SiN8N className="text-[#FF6D5B]" /> },
    { name: "Notion", icon: <SiNotion className="text-[#000000]" /> },
    { name: "Jira", icon: <SiJira className="text-[#0052CC]" /> },
    { name: "Vercel", icon: <SiVercel className="text-[#000000]" /> },
    { name: "Cloudflare", icon: <SiCloudflare className="text-[#F38020]" /> },
    { name: "WireGuard", icon: <SiWireguard className="text-[#88171A]" /> },
  ];

  const journey = [
    {
      year: "2021",
      title: "Mulai Kuliah D3",
      description: "Belajar dasar pemrograman & logika.",
      icon: <FaGraduationCap />,
      color: "bg-blue-500",
    },
    {
      year: "2022",
      title: "Mobile Dev",
      description: "Eksplorasi Flutter & Dart.",
      icon: <FaMobile />,
      color: "bg-purple-500",
    },
    {
      year: "2023",
      title: "Backend & DevOps",
      description: "Go, Node.js, & Docker.",
      icon: <FaServer />,
      color: "bg-green-500",
    },
    {
      year: "2024",
      title: "Full-Stack",
      description: "Proyek kompleks & otomasi n8n.",
      icon: <FaCode />,
      color: "bg-orange-500",
    },
    {
      year: "2025",
      title: "Ready for Industry",
      description: "Membangun portofolio profesional.",
      icon: <FaRocket />,
      color: "bg-red-500",
    },
  ];

  return (
    <div ref={aboutRef} className="w-full bg-white overflow-x-hidden">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        {/* ===== ABOUT ME ===== */}
        <div className="text-center mb-16 about-item">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight uppercase">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-32">
          {/* --- BAGIAN FOTO PROFIL DENGAN EFEK HOVER COLOR --- */}
          <div className="w-full md:w-4/12 flex justify-center about-item">
            <div className="relative w-64 h-80 md:w-full md:max-w-sm group">
              {" "}
              {/* Tambah class 'group' di sini */}
              {/* Efek Cahaya di Belakang Foto */}
              <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-2xl opacity-10 animate-pulse"></div>
              <img
                src={profileImg}
                alt="Rendi"
                className="relative z-10 w-full h-full object-cover rounded-3xl border-4 border-white shadow-2xl transition-all duration-700 ease-in-out grayscale hover:grayscale-0 scale-[1.02] hover:scale-100"
              />
            </div>
          </div>
          <div className="w-full md:w-8/12 space-y-6 text-gray-600 leading-relaxed text-lg about-item">
            <p>
              Sebagai mahasiswa tingkat akhir{" "}
              <strong>D3 Teknik Informatika</strong>, saya fokus membangun
              produk digital yang efisien.
            </p>
            <p>
              Dari antarmuka mobile hingga infrastruktur server, saya senang
              mengeksplorasi seluruh spektrum pengembangan perangkat lunak.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900">Pendidikan</h3>
                <p className="text-sm">D3 Teknik Informatika</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
                <h3 className="font-bold text-blue-900">Fokus</h3>
                <p className="text-sm text-blue-700">Mobile & Automation</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== MY JOURNEY ===== */}
        <div className="journey-container mb-32">
          <div className="text-center mb-16 about-item">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">
              My Journey
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            <div className="space-y-12">
              {journey.map((item, index) => (
                // ✅ CLASS journey-card — sesuai dengan animasi
                <div
                  key={index}
                  className={`journey-card flex flex-col md:flex-row gap-8 items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-5/12 ml-10 md:ml-0">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-extrabold text-gray-900 mt-3 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:relative md:left-auto flex-shrink-0 flex items-center justify-center z-10">
                    <div
                      className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div className="w-full md:w-5/12 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== PROFESSIONAL SKILLSET ===== */}
        <div className="skills-container pt-20">
          <div className="text-center mb-16 about-item">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tighter">
              Professional Skillset
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16">
            {/* ✅ CLASS skills-group — sesuai dengan animasi */}
            <div className="skills-group">
              <h3 className="text-center text-sm font-bold text-gray-400 mb-8 uppercase tracking-widest">
                Languages & Databases
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-5">
                {languages.map((item, index) => (
                  <SkillPill key={index} item={item} />
                ))}
              </div>
            </div>

            {/* ✅ CLASS skills-group — sesuai dengan animasi */}
            <div className="skills-group">
              <h3 className="text-center text-sm font-bold text-gray-400 mb-8 uppercase tracking-widest">
                Frameworks & Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-5">
                {tools.map((item, index) => (
                  <SkillPill key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SkillPill = ({ item }) => (
  <div className="skill-card group flex items-center gap-2 bg-white px-4 py-2 md:px-5 md:py-3 rounded-xl border border-gray-100 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300">
    <div className="text-xl md:text-2xl group-hover:scale-110 transition-transform">
      {item.icon}
    </div>
    <span className="text-gray-700 font-bold text-xs md:text-sm">
      {item.name}
    </span>
  </div>
);

export default About;
