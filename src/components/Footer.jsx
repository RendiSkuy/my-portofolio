import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm px-6">
      <p>&copy; {new Date().getFullYear()} Rendi Ripaldi. Semua hak cipta dilindungi.</p>
      <p className="mt-2">Dibuat menggunakan React, Tailwind CSS, dan GSAP.</p>
    </footer>
  );
};

export default Footer;