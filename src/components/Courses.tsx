import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, BarChart3, Workflow, LineChart, ShieldCheck, Mail, CheckCircle2 } from "lucide-react";

export default function Courses() {
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("AI Leadership & Governance");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setShowInquiryModal(false);
      setEmail("");
    }, 1800);
  };

  return (
    <section id="courses" className="py-24 sm:py-32 bg-[#060608] relative overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-[#3B82F6] uppercase mb-4 block select-none">
            EDUCATIONAL COURSES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-normal">
            조직의 경쟁력을 결정짓는 AI 마스터 클래스
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Card A: Large Double Class on Left */}
          <div className="md:col-span-2 md:row-span-2 min-h-[380px] sm:min-h-[420px] bg-white/[0.02] border border-white/10 hover:border-white/15 hover:bg-white/[0.03] transition-all rounded-3xl p-8 sm:p-10 flex flex-col justify-between group relative overflow-hidden shadow-xl shadow-black/20">
            {/* Background Accent Graphics */}
            <div className="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
              <BarChart3 size={110} strokeWidth={1} />
            </div>

            <div className="absolute -top-16 -right-16 w-56 h-56 bg-blue-500/5 rounded-full blur-[70px] pointer-events-none"></div>

            <div className="relative">
              <span className="inline-flex px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/20 text-blue-400 font-bold text-[10px] tracking-wider uppercase mb-5">
                Flagship Program
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight max-w-lg mb-4">
                AI Leadership & Governance
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
                경영진과 리더를 위한 실질적인 AI 의사결정 프레임워크와 윤리 가이드를 학습합니다.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={() => {
                  setSelectedCourse("AI Leadership & Governance");
                  setShowInquiryModal(true);
                }}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm tracking-tight transition-all cursor-pointer group-hover:gap-3.5 py-1"
              >
                <span>자세히 보기</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Bento Card B: Organizational Diagnosis */}
          <div className="bg-white/[0.02] border border-white/10 hover:border-white/15 hover:bg-white/[0.03] transition-all rounded-3xl p-8 flex flex-col justify-between min-h-[200px] shadow-xl group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/15 text-purple-400 flex items-center justify-center shrink-0">
              <Workflow size={22} className="group-hover:rotate-12 transition-transform" />
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-white tracking-tight leading-snug mb-1.5 group-hover:text-purple-400 transition-colors">
                Organizational Diagnosis
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                데이터 기반의 조직 역량 진단 및 최적화 전략
              </p>
            </div>
          </div>

          {/* Bento Card C: HR Analytics */}
          <div className="bg-white/[0.02] border border-white/10 hover:border-white/15 hover:bg-white/[0.03] transition-all rounded-3xl p-8 flex flex-col justify-between min-h-[200px] shadow-xl group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/15 text-orange-400 flex items-center justify-center shrink-0">
              <LineChart size={22} className="group-hover:translate-y-[-2px] transition-transform" />
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-white tracking-tight leading-snug mb-1.5 group-hover:text-orange-400 transition-colors">
                HR Analytics
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                인재 관리와 성과 예측을 위한 정밀 분석 기법
              </p>
            </div>
          </div>

          {/* Bento Card D: Change Management Wide Banner */}
          <div className="md:col-span-3 bg-white/[0.02] border border-white/10 hover:border-white/15 hover:bg-white/[0.03] transition-all rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl group">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight mb-2 flex items-center gap-2 group-hover:text-indigo-400 transition-colors">
                Change Management
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI 전환 과정에서의 저항 최소화와 적응 촉진 프로그램
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedCourse("Change Management / Curriculum Inquiry");
                setShowInquiryModal(true);
              }}
              className="px-8 py-3.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 font-bold text-sm tracking-wide text-white transition-all cursor-pointer shadow-inner shadow-white/5 active:scale-97 shrink-0 text-center w-full md:w-auto"
            >
              커리큘럼 문의
            </button>
          </div>

        </div>
      </div>

      {/* Course Inquiry Overlay Modal */}
      <AnimatePresence>
        {showInquiryModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg bg-[#111115] border border-white/10 rounded-2xl p-6 sm:p-8 text-left text-white shadow-2xl"
            >
              <button
                onClick={() => setShowInquiryModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white p-1 rounded-lg bg-white/5 cursor-pointer"
              >
                닫기
              </button>

              <h3 className="text-xl font-bold tracking-tight mb-2">커리큘럼 문의하기</h3>
              <p className="text-xs text-indigo-400 font-mono tracking-tight mb-6">Course: {selectedCourse}</p>

              {inquirySuccess ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center mb-4">
                    <CheckCircle2 size={30} />
                  </div>
                  <h4 className="text-lg font-bold">인콰이어리가 전송되었습니다</h4>
                  <p className="text-xs text-gray-400 mt-2">입력하신 이메일로 곧 안내 자료를 보내드리겠습니다.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                      이메일 주소
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="example@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-bold transition-all text-sm tracking-wide cursor-pointer text-center text-white shadow-lg active:scale-98"
                  >
                    안내 책자 받기
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
