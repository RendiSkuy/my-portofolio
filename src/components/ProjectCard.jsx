import React from 'react';

const ProjectCard = ({ title, description, tags, github, isReversed, imagePlaceholder }) => {
  return (
    // Jika isReversed true, posisi gambar di kanan. Jika false, di kiri.
    <div className={`project-card flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}>
      
      {/* Kotak untuk Gambar/Screenshot Aplikasi */}
      <div className="w-full md:w-1/2 aspect-video bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200">
         <span className="text-gray-400 font-medium px-4 text-center">{imagePlaceholder}</span>
         {/* Nanti ganti <span> di atas dengan tag <img src="..." /> jika fotonya sudah siap */}
      </div>

      {/* Konten Teks & Tombol */}
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        
        {/* Label Teknologi yang Dipakai */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Tombol ke GitHub */}
        <div className="flex gap-4 pt-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;