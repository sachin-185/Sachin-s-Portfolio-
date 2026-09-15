import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATES } from "@/constants";
import { ExternalLink, Award, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = ["All", "AI/ML", "Backend & Tools", "Databases", "Others"];

export default function Certificates() {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const filtered = CERTIFICATES.filter((cert) => {
    if (activeTab === "All") return true;
    if (Array.isArray(cert.category)) {
      return cert.category.includes(activeTab);
    }
    return cert.category === activeTab;
  });
  const displayedCertificates = showAll ? filtered : filtered.slice(0, 3);

  useEffect(() => {
    setShowAll(false);
  }, [activeTab]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="certificates" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c6ff00]/3 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 mb-12 sm:mb-16 items-center text-center">
          <div className="flex items-center gap-2 text-[#c6ff00] font-bold uppercase tracking-widest text-xs font-mono">
            <ShieldCheck size={16} />
            Verified Credentials
          </div>
          <div className="flex items-center gap-3 sm:gap-4 mt-1 sm:mt-2">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white" style={{ fontFamily: "Anton, sans-serif" }}>
              Certifications
            </h2>
            <span className="text-neutral-500 font-mono text-base sm:text-xl font-bold mt-1 sm:mt-2">({CERTIFICATES.length})</span>
          </div>
          <div className="h-1 w-16 bg-[#c6ff00] rounded-full mt-3 sm:mt-4" />
        </div>

        <div className="flex overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap justify-start sm:justify-center gap-2 md:gap-3 mb-8 sm:mb-12 scrollbar-none touch-pan-x w-full">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button key={cat} onClick={() => setActiveTab(cat)} className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-200 border cursor-pointer select-none shrink-0 ${isActive ? "bg-[#c6ff00] text-black border-[#c6ff00] shadow-[0_0_15px_rgba(198,255,0,0.25)]" : "bg-[#0a0a0a] text-neutral-400 border-white/5 hover:border-neutral-700 hover:text-white"}`}>
                {cat}
              </button>
            );
          })}
        </div>

        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div key={`${activeTab}-${showAll}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.22, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" >

              {displayedCertificates.map((cert, index) => (
                <motion.div key={cert.title + index} initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25, delay: index * 0.04 }}
                  whileHover={{ y: -6 }} onMouseMove={handleMouseMove}
                  className="group relative flex flex-col rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#c6ff00]/40 hover:shadow-[0_10px_35px_-10px_rgba(198,255,0,0.18)] transition-all duration-300 overflow-hidden min-h-[340px] sm:min-h-[380px]">
                  <div className="bento-card-glow" />

                  <div className="relative w-full aspect-[4/3] bg-white border-b border-white/5 p-4 flex items-center justify-center overflow-hidden shrink-0">
                    <img src={cert.image} alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-all duration-500 ease-out"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement?.insertAdjacentHTML(
                          "afterbegin", '<div class="absolute inset-0 flex items-center justify-center text-neutral-400 bg-neutral-900"><svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/></svg></div>'
                        );
                      }} />
                    <div className="absolute top-3 right-3 p-2 bg-[#c6ff00] text-black rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-[#c6ff00]/20">
                      <Award size={16} />
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 relative z-10 p-5 sm:p-7 items-center text-center justify-between gap-4">
                    <div className="flex flex-col items-center gap-1.5 w-full">
                      {cert.issuer && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                          {cert.issuer}
                        </span>
                      )}
                      <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight text-white group-hover:text-[#c6ff00] transition-colors duration-300 font-poppins">
                        {cert.title}
                      </h3>
                    </div>

                    <a href={cert.link} target="_blank"
                      rel="noreferrer" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-300 hover:text-[#c6ff00] transition-colors duration-300 font-mono mt-auto">
                      View Certificate <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-neutral-500 font-mono text-sm">
            No certificates found in this category.
          </div>
        )}

        {filtered.length > 3 && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <button onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border border-white/10 text-white font-mono text-sm hover:border-[#c6ff00] hover:text-[#c6ff00] transition-all duration-300 flex items-center gap-2 cursor-pointer">
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
