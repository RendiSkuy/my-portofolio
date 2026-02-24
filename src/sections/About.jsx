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
  SiNginx,

  SiPrisma,
  SiNextdotjs,
  SiExpress,
  SiGitlab,
  SiSqlite,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import {
  FaCode,
  FaMobile,
  FaServer,
  FaRobot,
  FaDatabase,
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
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },

    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "GitHub", icon: <SiGithub className="text-[#181717]" /> },
    { name: "GitLab", icon: <SiGitlab className="text-[#FC6D26]" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },

    { name: "Nginx", icon: <SiNginx className="text-[#009639]" /> },
    { name: "Linux", icon: <SiLinux className="text-[#FCC624]" /> },
    { name: "Proxmox", icon: <SiProxmox className="text-[#E57000]" /> },
    {
      name: "Android Studio",
      icon: <SiAndroidstudio className="text-[#3DDC84]" />,
    },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
    { name: "n8n", icon: <SiN8N className="text-[#FF6D5B]" /> },

    { name: "Vercel", icon: <SiVercel className="text-[#000000]" /> },
    { name: "Cloudflare", icon: <SiCloudflare className="text-[#F38020]" /> },
  ];

  const experiences = [
    {
      icon: <FaCode className="text-white text-lg" />,
      color: "bg-blue-600",
      role: "Fullstack Developer",
      project: "Website Bank Sampah",
      image: profileImg, // Ganti dengan bankSampahImg nanti
      stack: ["PHP", "Laravel", "Filament", "MySQL"],
      description:
        "Membangun sistem manajemen bank sampah secara end-to-end, mencakup dashboard admin dan modul transaksi.",
    },
    {
      icon: <FaDatabase className="text-white text-lg" />,
      color: "bg-purple-600",
      role: "Fullstack Developer",
      project: "Gudang Pro",
      image: profileImg, // Ganti dengan gudangProImg nanti
      stack: ["React", "Vite", "Node.js", "Flutter"],
      description:
        "Mengembangkan aplikasi manajemen gudang berbasis web dan mobile dengan sinkronisasi REST API.",
    },
    {
      icon: <FaRobot className="text-white text-lg" />,
      color: "bg-green-600",
      role: "Backend Developer",
      project: "Website Bot Trading",
      image: profileImg, // Ganti dengan botTradingImg nanti
      stack: ["TypeScript", "JavaScript", "Node.js", "WebSocket"],
      description:
        "Membangun REST API dan koneksi WebSocket untuk data harga real-time exchange API.",
    },
    {
      icon: <FaMobile className="text-white text-lg" />,
      color: "bg-orange-500",
      role: "Fullstack Developer",
      project: "My Daily Kos",
      image: profileImg, // Ganti dengan myDailyKosImg nanti
      stack: ["Flutter", "Firebase", "n8n"],
      description:
        "Aplikasi manajemen keuangan mahasiswa dengan fitur scan struk otomatis via OCR.",
    },
    {
      icon: <FaServer className="text-white text-lg" />,
      color: "bg-gray-700",
      role: "DevOps / Infrastructure",
      project: "Self-Hosted Home Lab",
      image: profileImg, // Ganti dengan homeLabImg nanti
      stack: ["Proxmox", "Docker", "Nginx", "WireGuard"],
      description:
        "Mengelola infrastruktur server pribadi menggunakan Proxmox VE dan Docker containers.",
    },
  ];

  return (
    <div ref={aboutRef} className="w-full bg-white dark:bg-gray-900 overflow-x-hidden">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        {/* ===== ABOUT ME ===== */}
        <div className="text-center mb-16 about-item">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight uppercase">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-32">
          {/* Foto Profil */}
          <div className="w-full md:w-5/12 flex justify-center about-item">
            {/* Container utama diperbesar: md:w-[28rem] md:h-[32rem] */}
            <div className="relative w-72 h-96 md:w-[28rem] md:h-[28rem] group">
              {/* Efek Blur background - dibuat lebih menyebar */}
              <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-[80px] opacity-20 animate-pulse"></div>

              {/* Photo Wrapper - Menambahkan class floating-photo agar sinkron dengan Home */}
              <div className="floating-photo relative z-10 w-full h-full rounded-3xl shadow-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Rendi Ripaldi"
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 scale-[1.05] group-hover:scale-110"
                />
              </div>

              {/* Ornamen Tambahan (Opsional) - Agar terlihat lebih pro */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-600/10 rounded-full blur-2xl z-0"></div>
            </div>
          </div>

          {/* Bio Profesional */}
          <div className="w-full md:w-8/12 space-y-5 about-item">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Halo! Perkenalkan, saya{" "}
              <strong className="text-gray-900 dark:text-white">Rendi Ripaldi</strong> seorang
              Junior Web Developer dan Junior Backend Developer yang saat ini
              menempuh pendidikan D3 Teknik Informatika di{" "}
              <strong className="text-blue-600">
                Universitas Logistik dan Bisnis Internasional
              </strong>
              .
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              Saya memiliki ketertarikan mendalam dalam membangun produk digital
              yang tidak hanya berfungsi dengan baik, tetapi juga memberikan
              dampak nyata bagi penggunanya. Mulai dari merancang antarmuka
              aplikasi mobile yang intuitif, membangun backend API yang
              terstruktur, hingga mengelola infrastruktur server saya menikmati
              setiap lapisan dalam proses pengembangan perangkat lunak.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              Terbiasa bekerja secara mandiri maupun berkolaborasi dalam tim,
              saya selalu berupaya menulis kode yang bersih, terstruktur, dan
              mudah dipelihara. Saat ini saya terbuka untuk peluang kolaborasi
              maupun kontribusi di dunia industri teknologi.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm text-center">
                <p className="text-2xl font-extrabold text-blue-600">5+</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Projects</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm text-center">
                <p className="text-2xl font-extrabold text-blue-600">10+</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Tech Stack</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 shadow-sm text-center">
                <p className="text-sm font-bold text-blue-900">D3</p>
                <p className="text-xs text-blue-600 mt-1">Teknik Informatika</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 shadow-sm text-center">
                <p className="text-sm font-bold text-blue-900">2026</p>
                <p className="text-xs text-blue-600 mt-1">Expected Graduate</p>
              </div>
            </div>
          </div>
        </div>

        {/* EXPERIENCE SECTION WITH IMAGES */}
        <div className="journey-container mb-32">
          <div className="text-center mb-16 about-item">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 uppercase">
              Experience
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="journey-card bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Header card */}
                <div
                  className={`${item.color} px-6 py-4 flex items-center gap-3`}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/70 text-xs font-medium uppercase tracking-wider">
                      {item.role}
                    </p>
                    <p className="text-white font-bold text-lg">
                      {item.project}
                    </p>
                  </div>
                </div>

                {/* PROJECT IMAGE - BAGIAN BARU */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.project}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Body card */}
                <div className="p-6 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full uppercase italic"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed italic border-l-4 border-blue-500 pl-4">
                    "{item.description}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PROFESSIONAL SKILLSET ===== */}
        <div className="skills-container pt-20">
          <div className="text-center mb-16 about-item">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">
              Professional Skillset
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16">
            <div className="skills-group">
              <h3 className="text-center text-sm font-bold text-gray-400 dark:text-gray-500 mb-8 uppercase tracking-widest">
                Languages & Databases
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-5">
                {languages.map((item, index) => (
                  <SkillPill key={index} item={item} />
                ))}
              </div>
            </div>

            <div className="skills-group">
              <h3 className="text-center text-sm font-bold text-gray-400 dark:text-gray-500 mb-8 uppercase tracking-widest">
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
  <div className="skill-card group flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 md:px-5 md:py-3 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300">
    <div className="text-xl md:text-2xl group-hover:scale-110 transition-transform">
      {item.icon}
    </div>
    <span className="text-gray-700 dark:text-gray-200 font-bold text-xs md:text-sm">
      {item.name}
    </span>
  </div>
);

export default About;
