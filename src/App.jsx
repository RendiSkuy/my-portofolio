import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans selection:bg-blue-200 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;