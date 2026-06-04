import React from "react";
import { motion } from "motion/react";
import { Brain, BarChart3, Network, Milestone } from "lucide-react";

export default function About() {
  const journeys = [
    {
      title: "Cognitive Strategy",
      description: "단순 기술 도입이 아닌, 임직원의 인지 변화와 적응을 고려한 최적의 전환 전략을 수립합니다.",
      icon: Brain,
      color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    },
    {
      title: "Data Precision",
      description: "조직 내 산재된 방대한 데이터를 유의미한 비즈니스 통찰력으로 전환하는 고급 분석 엔진을 설계합니다.",
      icon: BarChart3,
      color: "text-orange-400 border-orange-500/20 bg-orange-500/5",
    },
    {
      title: "System Design",
      description: "지속 가능한 성장을 위해, AI가 조직의 워크플로우 내에서 자연스럽게 작동하는 아키텍처를 구현합니다.",
      icon: Network,
      color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0e0e11] relative overflow-hidden">
      {/* Background decoration lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Context Copy & Numeric Stats */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Badge */}
            <span className="font-mono text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 flex items-center gap-1.5 select-none">
              <Milestone size={14} />
              PROFESSIONAL JOURNEY
            </span>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-8">
              심리학과 데이터의 조화,<br />
              기업 AI 전환의 해답을 제시하다.
            </h2>

            {/* Paragraph body */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-xl font-medium">
              15년 이상의 실무 및 연구 경력을 바탕으로 200여 개 이상의 기업 프로젝트를 성공적으로 이끌었습니다. 인간의 인지 구조에 대한 깊은 이해(심리학)와 정교한 데이터 분석 기술을 결합하여, 실질적으로 작동하는 기업 맞춤형 AI 모델을 설계합니다.
            </p>

            {/* Stat Counters */}
            <div className="grid grid-cols-2 gap-8 w-full border-t border-white/5 pt-8">
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-blue-500 tracking-tight font-mono">
                  15+
                </span>
                <span className="block text-xs sm:text-sm font-semibold tracking-wider text-gray-400 uppercase mt-2 font-sans">
                  Years Experience
                </span>
              </div>
              
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-purple-500 tracking-tight font-mono">
                  200+
                </span>
                <span className="block text-xs sm:text-sm font-semibold tracking-wider text-gray-400 uppercase mt-2 font-sans">
                  Projects Led
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Vertical Glassmorphism Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 w-full">
            {journeys.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.015, x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col sm:flex-row gap-5 p-6 bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/15 rounded-2xl transition-all shadow-xl shadow-black/10 group cursor-default"
                >
                  {/* Icon Circle */}
                  <div className={`w-12 h-12 rounded-xl border shrink-0 flex items-center justify-center ${item.color} shadow-inner transition-transform group-hover:scale-105`}>
                    <IconComp size={22} />
                  </div>

                  {/* Text Container */}
                  <div className="flex flex-col text-left">
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug mb-1.5 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
