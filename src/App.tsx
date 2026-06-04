import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Channel from "./components/Channel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#070709] text-white selection:bg-blue-500/30 selection:text-blue-200 antialiased overflow-x-hidden font-sans">
      
      {/* Decorative ambient backdrop noise / scanline effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
      
      {/* Navigation Header */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />
      
      {/* Sequential Sections matching Google Stitch layout exactly */}
      <main className="relative z-10 flex flex-col">
        
        {/* HERO SECTION */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        
        {/* ABOUT SECTION (Professional Journey) */}
        <About />
        
        {/* COURSES SECTION (Educational Courses) */}
        <Courses />
        
        {/* CHANNELS SECTION (Connect & Subscribe) */}
        <Channel />
        
        {/* CONTACT FORM SECTION */}
        <Contact />

      </main>
      
      {/* FOOTER */}
      <Footer />

      {/* DR. KIM DIGITAL PROFILES PREVIEW MODAL */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

    </div>
  );
}
