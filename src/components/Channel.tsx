import React from "react";
import { motion } from "motion/react";
import { Play, FileText, Users2, MessageCircle, Antenna } from "lucide-react";

export default function Channel() {
  const channels = [
    {
      name: "YouTube",
      category: "Strategy Lectures",
      desc: "비즈니스 전략과 핵심 인지 모델 무료 강연 영상",
      icon: Play,
      iconColor: "text-red-500",
      bgGradient: "group-hover:bg-red-500/10",
      glowBg: "bg-red-500/5",
      link: "https://www.youtube.com/@namiri-ai",
    },
    {
      name: "Naver Blog",
      category: "Daily Insights",
      desc: "매일 업데이트되는 학술적 고찰 및 경영 심리학 트렌드 칼럼",
      icon: FileText,
      iconColor: "text-emerald-500",
      bgGradient: "group-hover:bg-emerald-500/10",
      glowBg: "bg-emerald-500/5",
      link: "https://blog.naver.com/microniki",
    },
    {
      name: "Open KakaoTalk",
      category: "Kakao Chat",
      desc: "빠른 견적 및 1:1 맞춤형 오픈카카오톡 비즈니스 실시간 상담",
      icon: MessageCircle,
      iconColor: "text-amber-400",
      bgGradient: "group-hover:bg-amber-400/10",
      glowBg: "bg-amber-400/5",
      link: "https://open.kakao.com/o/sa7iM7ji",
    },
    {
      name: "LinkedIn",
      category: "Network",
      desc: "글로벌 비즈니스 연계 파트너십 및 인재 교환 네트워크",
      icon: Users2,
      iconColor: "text-blue-500",
      bgGradient: "group-hover:bg-blue-500/10",
      glowBg: "bg-blue-500/5",
      link: "https://linkedin.com",
    },
  ];

  return (
    <section id="channel" className="py-24 sm:py-32 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 -left-48 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Spacing alignment decorator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header Block split */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="text-left">
            <span className="font-mono text-xs font-bold tracking-widest text-[#3B82F6] uppercase mb-4 block select-none">
              <Antenna size={14} className="inline mr-1.5" />
              CONNECT & SUBSCRIBE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
              더 깊은 인사이트를 만나보세요
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm text-left font-medium">
            박사님의 최신 연구 결과와 AI 트렌드 리포트를 매주 다양한 채널에서 업데이트하고 있습니다.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel, index) => {
            const IconComp = channel.icon;
            return (
              <motion.a
                key={index}
                href={channel.link}
                target={channel.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center text-center p-8 bg-white/[0.02] border border-white/10 hover:border-white/15 rounded-2xl group transition-all cursor-pointer shadow-xl relative overflow-hidden"
              >
                {/* Background glow spot */}
                <div className={`absolute top-0 left-1/3 right-1/3 h-12 ${channel.glowBg} blur-2xl pointer-events-none rounded-full`}></div>

                {/* Circular Icon Container */}
                <div className={`w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 shadow-inner transition-all duration-300 ${channel.bgGradient} group-hover:scale-105`}>
                  <IconComp size={24} className={`${channel.iconColor} transition-transform group-hover:scale-110`} />
                </div>

                {/* Titles */}
                <h4 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
                  {channel.name}
                </h4>
                <p className="text-xs font-mono font-bold tracking-wider text-gray-500 uppercase">
                  {channel.category}
                </p>

                {/* Inner mini details */}
                <p className="text-gray-400 text-xs leading-relaxed mt-4 line-clamp-2 max-w-[200px]">
                  {channel.desc}
                </p>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
