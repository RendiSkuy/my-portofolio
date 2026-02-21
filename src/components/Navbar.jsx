import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State untuk mengontrol apakah menu mobile sedang terbuka atau tidak
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
          RendiSkuy.
        </Link>
        
        {/* Tombol Hamburger (Hanya muncul di Mobile/Layar Kecil) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                // Ikon 'X' saat menu terbuka
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                // Ikon 'Garis Tiga' saat menu tertutup
                <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Navigasi Desktop (Tampil di Layar Besar) */}
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Beranda</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/resume" className="hover:text-blue-600 transition">Resume</Link>
          <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
      </div>

      {/* Menu Navigasi Mobile (Muncul Saat isOpen = true) */}
      <div 
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 transition-all duration-300 ease-in-out`}
      >
        <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col text-gray-600 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">Beranda</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">About</Link>
          <Link to="/resume" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">Resume</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition font-bold text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;