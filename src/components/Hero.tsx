import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Cpu, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const handleScrollToSegment = (id: string) => {
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0a0a0c]"
    >
      {/* Background Ambient Lights / Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-10000"></div>
      <div className="absolute bottom-1/4 -right-32 w-[450px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse duration-8000"></div>
      
      {/* Structural grid container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Left Side: Typography & Core Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 select-none shadow-inner shadow-white/5 hover:border-white/20 transition-all cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="font-mono text-[11px] font-bold tracking-wider text-gray-300 uppercase flex items-center gap-1">
              <Cpu size={12} className="text-blue-400" />
              AI STRATEGY & INNOVATION
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
          >
            AI를 도구가 아닌<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-[#A855F7]">
              시스템으로 설계하세요
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl font-medium tracking-tight"
          >
            김경태 박사는 심리학과 데이터 분석의 융합을 통해, 기업의 체질을 개선하는 최상위 AI 컨설팅과 교육을 제안합니다. 단순 활용을 넘어 조직의 핵심 전략으로의 AI를 경험하십시오.
          </motion.p>

          {/* Call to Actions (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollToSegment("contact")}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-bold text-sm tracking-wide text-center transition-all cursor-pointer shadow-lg shadow-indigo-500/20 active:scale-98"
            >
              Consulting Inquiry
            </button>
            <button
              onClick={onOpenResume}
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white font-bold text-sm tracking-wide text-center transition-all cursor-pointer shadow-inner shadow-white/5 flex items-center justify-center gap-1.5 active:scale-98"
            >
              <span>Learn More</span>
              <Sparkles size={14} className="text-purple-400" />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Portrait Card Graphic */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[400px] aspect-[4/5]"
          >
            {/* Underlying gradient light effect */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl opacity-20 blur-xl"></div>
            
            <div className="relative h-full w-full bg-white/[0.03] border border-white/10 rounded-3xl p-3 overflow-hidden shadow-2xl flex flex-col">
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  alt="김경태 박사"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03] rounded-2xl image-rendering-high"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6UCbKwzKwUF3Tfl9JN9Vvtebudg_GhAaHL7xsnwJLmn1l-ezS9N9JytC183nDYFZMF5mqR1XSgoSvP0yr-EonU77xB8nYdQkAA5JhZuQhkBS1OVjth-jgO_O-BOjjChzexw5_BXwKNfZTftX7VgW3_8NEVKR1bx0FYnkxdbBayktXY-QEbX3yb5RVlLA1M68GIoyoronimfnz8GpEed_Rd6MSvLUdaXriFD7M5UuejjEmf6roZ_1lT9cdf9y4hMM1F_IfgDoOeMw"
                  referrerPolicy="no-referrer"
                />

                {/* Information Overlay Tag */}
                <div className="absolute bottom-5 left-5 right-5 p-5 bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl">
                  <h3 className="text-xl font-extrabold text-white tracking-tight">김경태 박사</h3>
                  <p className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mt-1">
                    PHD. STRATEGIC AI CONSULTANT
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
