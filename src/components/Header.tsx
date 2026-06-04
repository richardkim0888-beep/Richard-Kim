import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection based on section offset
      const sections = ["hero", "about", "courses", "channel", "contact"];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "courses", label: "Courses" },
    { id: "channel", label: "Channel" },
  ];

  const handleScrollToSegment = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
        {/* LOGO & BRAND */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group"
        >
          <img
            alt="Logo"
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqrn_zFCrs9JhzLRGEBY3M_5GVQAlfnZ5vxGGh9T7jBu-hOzCZAVVRsoK_mngfhrc5UJCPMtReC61-e7FpWtoogGbCJfCpOrexAttbB7pCYvvjJ0LXZ8YxUINu-YpX2WFhnRDRuNrLMa2jeFaW1e6CVrp09JXQPwxU1Y0dnSnTn5BfJ5lEIWrNNI5fXTMjnF6GSPC2xY7-GteJj-n8h9eS9j8I4dsTO4QG-MIGsUQ5prkOEz88CUHo_-OV_46NXef4tWzaZg_I-yM"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-base tracking-tight sm:text-lg">
              한국AI콘텐츠연구소
            </span>
            <span className="text-[9px] text-gray-500 font-mono tracking-wider">
              KOREA AI CONTENTS LAB
            </span>
          </div>
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollToSegment(link.id)}
              className={`text-sm font-medium transition-colors cursor-pointer relative py-1 hover:text-white ${
                activeSection === link.id ? "text-white font-semibold" : "text-gray-400"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500" />
              )}
            </button>
          ))}
          
          {/* Resume Quick Trigger */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <FileText size={15} className="text-gray-500 hover:text-white" />
            <span>디지털 프로필 (CV)</span>
          </button>

          {/* Consultation Button */}
          <button
            onClick={() => handleScrollToSegment("contact")}
            className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-sm font-medium text-white transition-all cursor-pointer shadow-inner shadow-white/5 active:scale-95"
          >
            문의하기
          </button>
        </nav>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white"
            title="View Resume"
          >
            <FileText size={18} />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-white focus:outline-none cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-30 bg-black/95 backdrop-blur-lg border-t border-white/10 md:hidden flex flex-col p-6 animate-fade-in">
          <div className="flex flex-col gap-6 my-auto text-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollToSegment(link.id)}
                className={`text-xl font-bold py-2 ${
                  activeSection === link.id ? "text-blue-400" : "text-gray-300"
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="text-xl font-bold py-2 text-gray-300 flex items-center justify-center gap-2"
            >
              <FileText size={20} className="text-gray-500" />
              디지털 프로필 (CV)
            </button>

            <button
              onClick={() => handleScrollToSegment("contact")}
              className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold tracking-wide active:scale-95 transition-all shadow-lg"
            >
              문의하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
