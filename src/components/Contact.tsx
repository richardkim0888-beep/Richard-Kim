import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { ContactFormInput } from "../types";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: "",
    email: "",
    inquiryType: "기업 컨설팅",
    message: "",
  });

  const [submissions, setSubmissions] = useState<ContactFormInput[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Load any mock historical inquiries cached inside standard localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("dr_kim_inquiries");
      if (stored) {
        setSubmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Could not retrieve inquiries from localStorage", e);
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMsg("성함을 명확하게 입력해 주십시오.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("올바른 이메일 주소를 기재해 주십시오.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg("상세한 문의 내용을 남겨 주십시오.");
      return;
    }

    setIsSubmitting(true);

    // Send via EmailJS with requested credentials
    emailjs.send(
      "service_xor3j6h",
      "template_szpuax5",
      {
        name: formData.name,
        email: formData.email,
        inquiryType: formData.inquiryType,
        message: formData.message,
        to_email: "microniki3@gmail.com"
      },
      "YPQJtZVMosQszsdcx"
    )
    .then(() => {
      const updatedSubmissions = [formData, ...submissions];
      setSubmissions(updatedSubmissions);
      try {
        localStorage.setItem("dr_kim_inquiries", JSON.stringify(updatedSubmissions));
      } catch (err) {
        console.warn(err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        inquiryType: "기업 컨설팅",
        message: "",
      });

      // Reset success window automatically after 4.5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 4500);
    })
    .catch((err) => {
      console.error("EmailJS Error details:", err);
      setErrorMsg("이메일 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주십시오.");
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0e0e11] relative overflow-hidden">
      {/* Decorative dividers */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left Side: General Brand Meta & Contact Info cards */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center">
            <span className="font-mono text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 block select-none">
              START A CONVERSATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-10 text-left">
              당신의 비즈니스를<br />
              AI 시스템으로 혁신하세요.
            </h2>

            {/* Quick Contact Block Stack */}
            <div className="space-y-8 w-full">
              
              {/* Mail Inquiry */}
              <div className="flex gap-5 items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                  <Mail className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight mb-1">
                    Email Inquiry
                  </h4>
                  <a
                    href="mailto:micronki3@gmail.com"
                    className="text-gray-400 hover:text-blue-400 text-sm sm:text-base font-medium font-mono transition-colors"
                  >
                    micronki3@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Office */}
              <div className="flex gap-5 items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                  <MapPin className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight mb-1">
                    Office
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed">
                    서울특별시 강남구 테헤란로 한국AI콘텐츠연구소
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Interactive glass form container */}
          <div className="lg:col-span-7 w-full">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-3xl opacity-15 blur-lg pointer-events-none"></div>
              
              <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
                
                {/* Custom feedback messages */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-4 rounded-xl flex items-center gap-3 mb-6"
                    >
                      <CheckCircle2 size={18} className="shrink-0" />
                      <div className="text-left text-xs sm:text-sm">
                        <span className="font-bold">성공적으로 전송되었습니다!</span> 김경태 박사님이 직접 내용을 확인한 수일 내로 회신을 드리겠습니다.
                      </div>
                    </motion.div>
                  )}

                  {errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-4 rounded-xl flex items-center gap-3 mb-6"
                    >
                      <AlertCircle size={18} className="shrink-0" />
                      <span className="text-xs sm:text-sm font-medium">{errorMsg}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-bold tracking-wider text-gray-400 uppercase font-mono">
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="성함을 입력하세요"
                        className="w-full bg-[#15151a] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm font-medium"
                      />
                    </div>
                    
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-bold tracking-wider text-gray-400 uppercase font-mono">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@email.com"
                        className="w-full bg-[#15151a] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm font-medium font-mono"
                      />
                    </div>
                  </div>

                  {/* Inquiry Category field */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold tracking-wider text-gray-400 uppercase font-mono">
                      Inquiry Type
                    </label>
                    <div className="relative">
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full bg-[#15151a] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none appearance-none transition-all text-sm font-medium cursor-pointer"
                      >
                        <option value="기업 컨설팅">기업 컨설팅</option>
                        <option value="강연 및 교육">강연 및 교육</option>
                        <option value="협업 제안">협업 제안</option>
                        <option value="기타 문의">기타 문의</option>
                      </select>
                    </div>
                  </div>

                  {/* Message body query text outline */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold tracking-wider text-gray-400 uppercase font-mono">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="문의 내용을 상세히 적어주세요"
                      className="w-full bg-[#15151a] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm font-normal resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Trigger */}
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:opacity-95 transition-all text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/10 cursor-pointer disabled:opacity-55 active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">데이터를 전송 중입니다...</span>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>

                </form>

              </div>
            </div>

            {/* Display list of simulated inquiries (Submissions history tracker) */}
            {submissions.length > 0 && (
              <div className="mt-8 text-left max-h-[220px] overflow-y-auto bg-white/[0.01] border border-white/5 rounded-2xl p-4 sm:p-6">
                <span className="text-[10px] sm:text-xs font-semibold uppercase font-mono tracking-wider text-gray-500 block mb-3 flex items-center gap-1.5">
                  <MessageSquare size={13} />
                  내가 접수한 문의 내역 ({submissions.length})
                </span>
                <div className="space-y-3">
                  {submissions.map((sub, idx) => (
                    <div
                      key={idx}
                      className="text-xs border-b border-white/5 pb-2 last:border-b-0 last:pb-0"
                    >
                      <div className="flex justify-between text-gray-400 font-medium mb-1">
                        <span className="font-bold text-gray-300">{sub.name}</span>
                        <span className="font-mono text-[10px] text-indigo-400 px-1.5 py-0.5 rounded bg-indigo-500/10">
                          {sub.inquiryType}
                        </span>
                      </div>
                      <p className="text-gray-500 line-clamp-1 truncate font-normal">
                        {sub.message}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
