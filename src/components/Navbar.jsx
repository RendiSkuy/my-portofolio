import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  // Tutup drawer saat pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Tutup drawer saat klik di luar
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* ===== NAVBAR BAR ===== */}
      <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

          {/* KIRI: Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            RendiSkuy.
          </Link>

          {/* KANAN: Toggle Dark Mode + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Toggle Dark/Light Mode */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="relative w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 flex-shrink-0"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, #1e3a5f, #3b82f6)'
                  : 'linear-gradient(135deg, #fbbf24, #f97316)',
              }}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow-md flex items-center justify-center text-xs transition-transform duration-300 ${isDark ? 'translate-x-7 bg-gray-900' : 'translate-x-0 bg-white'
                  }`}
              >
                {isDark ? '🌙' : '☀️'}
              </span>
            </button>

            {/* Tombol Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Buka menu"
              className="w-10 h-10 flex flex-col justify-center items-center gap-[6px] group rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <span className="block w-6 h-[2.5px] bg-gray-800 dark:bg-gray-200 rounded-full group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors duration-200" />
              <span className="block w-4 h-[2.5px] bg-gray-800 dark:bg-gray-200 rounded-full group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors duration-200 self-end mr-[4px]" />
              <span className="block w-6 h-[2.5px] bg-gray-800 dark:bg-gray-200 rounded-full group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors duration-200" />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== OVERLAY GELAP ===== */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* ===== DRAWER MENU ===== */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-[70] bg-white dark:bg-gray-900 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Header Drawer */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-700">
          <span className="text-xl font-bold text-blue-600">RendiSkuy.</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Tutup menu"
            className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-500 dark:text-gray-400"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-4 py-6 gap-1 flex-grow">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-base transition-all duration-200 ${isActive
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
              >
                {link.label}
                {isActive && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer Drawer */}
        <div className="px-6 py-5 border-t border-gray-100 dark:border-gray-700">
          <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
            © 2026 RendiSkuy. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;