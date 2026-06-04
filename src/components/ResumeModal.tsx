import React from "react";
import { X, Printer, Mail, Globe, MapPin, Download, Award, Briefcase, GraduationCap, BookOpen } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Container for modal */}
      <div className="relative w-full max-w-4xl bg-[#f7fafc] rounded-2xl shadow-2xl overflow-hidden text-gray-800 flex flex-col md:h-[90vh]">
        {/* Modal Controls (No-print) */}
        <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white border-b border-gray-800 shrink-0 select-none print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium text-gray-400 ml-2 font-mono">dr_kim_cv_profile.pdf</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-xs font-semibold text-white cursor-pointer"
            >
              <Printer size={13} />
              프린트 / PDF 저장
            </button>
            <button
              onClick={onClose}
              className="p-1 px-1.5 rounded bg-gray-800 hover:bg-gray-700 transition-colors text-gray-400 hover:text-white cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable A4 Content */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12 bg-white print:p-0 print:overflow-visible">
          {/* Printable A4 representation */}
          <div className="w-full max-w-[210mm] mx-auto min-h-[297mm] flex flex-col justify-between">
            {/* Header section */}
            <div className="grid grid-cols-12 gap-8 border-b-2 border-[#1a365d] pb-8 mb-8">
              {/* Photo */}
              <div className="col-span-12 sm:col-span-4 flex justify-center sm:justify-start">
                <div className="w-40 h-40 sm:w-full sm:h-auto aspect-square bg-gray-100 overflow-hidden border border-gray-200 rounded-lg">
                  <img
                    alt="김경태 박사"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuPOIh4vdismYlcpSnWp-7Wc6_05hbYf4zVxPJJz9Edk7yj84-Vh5FBrukY0mIcdH8Gh8FkOT6wk2kHXtHfx-TjUWwqMADWipf3y8oyQfWbayaoWPNGZbuaFFCXrUkzR7yih1hvK21HRrdCN8b7I0i8spoTcJYQSyNhZCES2XrkIeg7uIl1Bj6yjso6Oqigi_6b4Yqv5Mq1OYHWRPJo527C-I0kWgVP4QJXq57bUyExsCNi8SuW1vUxGRR8CN-VSKUWLmOCMMzgRVA"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              {/* Profile Main Title */}
              <div className="col-span-12 sm:col-span-8 flex flex-col justify-end text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a365d] mb-1">
                  김경태 <span className="text-xl sm:text-2xl font-normal text-gray-500 ml-2">박사 / Ph.D.</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 font-medium mb-4">전략 컨설팅 & 조직 심리학 전문가</p>
                <div className="space-y-1 text-sm text-gray-500 flex flex-col items-center sm:items-start font-mono">
                  <span className="flex items-center gap-1.5">
                    <Mail size={13} className="text-[#1a365d]" /> drkim.kt@example.com
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe size={13} className="text-[#1a365d]" /> www.drkimkt-portfolio.com
                  </span>
                  <span className="flex items-center gap-1.5 text-center sm:text-left">
                    <MapPin size={13} className="text-[#1a365d]" /> 서울특별시 강남구 테헤란로 (생략)
                  </span>
                </div>
              </div>
            </div>

            {/* Content Columns */}
            <div className="grid grid-cols-12 gap-8 flex-grow">
              {/* Left Column (Main Experience) */}
              <div className="col-span-12 lg:col-span-7 space-y-8">
                {/* Profile Summary */}
                <section>
                  <h2 className="text-base uppercase font-bold tracking-wider text-[#1a365d] border-b border-gray-200 pb-1.5 mb-3 flex items-center gap-2">
                    <Award size={16} /> PROFILE SUMMARY
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                    조직 심리학과 경영 전략의 융합을 통해 지속 가능한 성장을 이끄는 15년 경력의 전문가입니다. 다수의 대기업 및 글로벌 IT 기업을 대상으로 리더십 진단, 조직 문화 재설계 및 변화 관리 프로젝트를 성공적으로 수행해 왔습니다. 인간 중심의 데이터 분석을 통해 비즈니스 성과를 극대화하는 실행 가능한 솔루션을 제공하는 데 주력하고 있습니다.
                  </p>
                </section>

                {/* Professional Experience */}
                <section>
                  <h2 className="text-base uppercase font-bold tracking-wider text-[#1a365d] border-b border-gray-200 pb-1.5 mb-4 flex items-center gap-2">
                    <Briefcase size={16} /> PROFESSIONAL EXPERIENCE
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between items-baseline mb-0.5">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">글로벌 전략 컨설팅 그룹</h3>
                        <span className="text-xs text-gray-500 font-mono">2018.03 - 현재</span>
                      </div>
                      <p className="text-xs text-[#1a365d] font-semibold mb-2">시니어 디렉터 / 조직 문화 혁신팀</p>
                      <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                        <li>국내 대기업 대상 디지털 전환에 따른 조직 체계 개편 컨설팅 수행</li>
                        <li>핵심 인재 유지 및 리더십 역량 강화를 위한 진단 시스템 구축</li>
                        <li>데이터 기반의 구성원 몰입도 분석 및 개선 로드맵 설계</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-0.5">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">한국 인적자원 연구소</h3>
                        <span className="text-xs text-gray-500 font-mono">2012.01 - 2018.02</span>
                      </div>
                      <p className="text-xs text-[#1a365d] font-semibold mb-2">책임 연구원</p>
                      <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                        <li>한국 기업형 리더십 진단 도구(K-LDT) 개발 및 보급</li>
                        <li>정부 부처 산하 기관 성과 평가 시스템 리디자인 프로젝트 총괄</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Education */}
                <section>
                  <h2 className="text-base uppercase font-bold tracking-wider text-[#1a365d] border-b border-gray-200 pb-1.5 mb-3 flex items-center gap-2">
                    <GraduationCap size={16} /> EDUCATION
                  </h2>
                  <div className="space-y-2.5 text-xs text-gray-700">
                    <div className="flex justify-between font-medium">
                      <span className="font-bold text-gray-900">서울대학교 대학원</span>
                      <span>조직심리학 박사 (Ph.D.)</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="font-bold text-gray-900">연세대학교</span>
                      <span>심리학 학사 (B.A.)</span>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column (Skills & Selected works) */}
              <div className="col-span-12 lg:col-span-5 space-y-8">
                {/* Core Expertise */}
                <section>
                  <h2 className="text-base uppercase font-bold tracking-wider text-[#1a365d] border-b border-gray-200 pb-1.5 mb-3">
                    CORE EXPERTISE
                  </h2>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "조직 진단 및 설계",
                      "리더십 파이프라인",
                      "변화 관리 (Change Mgmt)",
                      "통계 분석 및 HR Analytics",
                      "임원 코칭"
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-50 text-[10px] font-bold text-[#1a365d] rounded border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Selected Work */}
                <section>
                  <h2 className="text-base uppercase font-bold tracking-wider text-[#1a365d] border-b border-gray-200 pb-1.5 mb-3 flex items-center gap-2">
                    <BookOpen size={16} /> SELECTED WORK
                  </h2>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                      <p className="text-xs font-bold text-[#1a365d] mb-1">[저서] 언택트 시대의 조직 심리학</p>
                      <p className="text-[10px] text-gray-500 leading-relaxed">
                        비즈니스 변화에 대응하는 인간 심리의 이해 (2021, 경영출판)
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                      <p className="text-xs font-bold text-[#1a365d] mb-1">[논문] 조직 공정성이 직무 몰입에 미치는 영향</p>
                      <p className="text-[10px] text-gray-500 leading-relaxed">
                        Journal of Organizational Psychology (2019)
                      </p>
                    </div>
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <h2 className="text-base uppercase font-bold tracking-wider text-[#1a365d] border-b border-gray-200 pb-1.5 mb-3">
                    CERTIFICATIONS
                  </h2>
                  <ul className="text-xs text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1a365d] rounded-full shrink-0"></span>
                      <span>공인 임원 코칭 전문가 (PCC)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1a365d] rounded-full shrink-0"></span>
                      <span>미국 산업조직심리학회(SIOP) 정회원</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1a365d] rounded-full shrink-0"></span>
                      <span>데이터 분석 전문가 (ADP)</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>

            {/* Footer QR Section */}
            <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-[10px] text-gray-400 text-center sm:text-left select-none">
                <p>© 2024 Dr. Kim Kyung-tae. All rights reserved.</p>
                <p>This profile is verified for professional credentials.</p>
              </div>
              
              {/* QR Code */}
              <div className="flex flex-col items-center">
                <img
                  alt="QR Code"
                  className="w-16 h-16 border border-gray-200 p-1 mb-1 bg-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuRvdhj8Y21dQABXneRqeGFslHjT_LKVrBAFbiTJHGZceAFL-vhptwKStchrpV3aN8z6veBD8FG8v_SppfeIDtAQ08ATOQeWOCGAl4SMxuKGwAZfln_R_m225TgQeebtjpBy9iPMul7QuGHsgU4btPz2zOvvTlHbWFmw8p4kR43WvkPQ0BouF6Gz74QrfL5NrPyP2YaycCRJLiqEt_Y7x-xUIRj0I07BnezFOGjdwjxQjW4VgMQwbYzNMgl1kLukPrIsISu1sVJuQ"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[9px] text-gray-400 font-medium tracking-tight">Scan for Digital Ver.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
