import React from 'react';
import { SiGithub } from 'react-icons/si';

const ProjectCard = ({ title, description, tags, github, isReversed, imagePlaceholder }) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>

      {/* Gambar Proyek */}
      <div className="w-full md:w-1/2 group">
        <div className="relative overflow-hidden rounded-3xl shadow-lg bg-gray-200 aspect-video">
          <img
            src={imagePlaceholder}
            alt={title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
      </div>

      {/* Detail Proyek */}
      <div className={`w-full md:w-1/2 text-center ${isReversed ? 'md:text-right' : 'md:text-left'} space-y-4`}>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{description}</p>

        {/* Tags */}
        <div className={`flex flex-wrap gap-2 justify-center ${isReversed ? 'md:justify-end' : 'md:justify-start'}`}>
          {tags.map((tag, i) => (
            <span key={i} className="px-4 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-full uppercase tracking-widest shadow-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className={`pt-4 flex justify-center ${isReversed ? 'md:justify-end' : 'md:justify-start'}`}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-xl dark:border dark:border-gray-600"
          >
            <SiGithub className="text-xl" /> View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;