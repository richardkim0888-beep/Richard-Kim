import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#060608] select-none text-xs text-gray-500 font-medium">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand alignment */}
        <div className="flex items-center gap-2.5">
          <img
            alt="Logo"
            className="w-7 h-7 opacity-40 grayscale hover:opacity-75 transition-opacity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqrn_zFCrs9JhzLRGEBY3M_5GVQAlfnZ5vxGGh9T7jBu-hOzCZAVVRsoK_mngfhrc5UJCPMtReC61-e7FpWtoogGbCJfCpOrexAttbB7pCYvvjJ0LXZ8YxUINu-YpX2WFhnRDRuNrLMa2jeFaW1e6CVrp09JXQPwxU1Y0dnSnTn5BfJ5lEIWrNNI5fXTMjnF6GSPC2xY7-GteJj-n8h9eS9j8I4dsTO4QG-MIGsUQ5prkOEz88CUHo_-OV_46NXef4tWzaZg_I-yM"
            referrerPolicy="no-referrer"
          />
          <span className="font-bold tracking-tight text-gray-400">
            한국AI콘텐츠연구소
          </span>
        </div>

        {/* Legal copy */}
        <p className="text-center font-mono">
          © {new Date().getFullYear() <= 2024 ? "2024" : "2024"} Dr. Kim Kyung-tae. All rights reserved.
        </p>

        {/* Side guidelines directions */}
        <div className="flex gap-6">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:text-gray-300 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:text-gray-300 transition-colors"
          >
            Terms of Service
          </a>
        </div>

      </div>
    </footer>
  );
}
