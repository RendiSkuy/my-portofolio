import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen'; // <-- Import ini

import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Resume from './sections/Resume';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Efek agar setiap pindah halaman, scroll otomatis ke atas
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans selection:bg-blue-200 flex flex-col overflow-x-hidden">
      {/* Tampilkan Splash Screen hanya jika isLoading true */}
      {isLoading && <SplashScreen finishLoading={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <>
          <Navbar />
          <main className="flex-grow pt-20 md:pt-24"> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;