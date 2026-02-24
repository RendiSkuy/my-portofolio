import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm px-6">
      <p>&copy; {new Date().getFullYear()} Rendi Ripaldi. Semua hak cipta dilindungi.</p>
      <p className="mt-2">Dibuat menggunakan React, Tailwind CSS, dan GSAP.</p>
    </footer>
  );
};

export default Footer;