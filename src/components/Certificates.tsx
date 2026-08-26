import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATES } from "@/constants";
import { ExternalLink, Award, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = ["All", "AI/ML", "Backend & Tools", "Databases", "Others"];

export default function Certificates() {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const filtered = CERTIFICATES.filter(
    (cert) => activeTab === "All" || cert.category === activeTab
  );
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
    <section id="certificates" className="py-32 px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c6ff00]/3 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 mb-16 items-center text-center">
          <div className="flex items-center gap-2 text-[#c6ff00] font-bold uppercase tracking-widest text-xs font-mono">
            <ShieldCheck size={16} />
            Verified Credentials
          </div>
          <div className="flex items-center gap-4 mt-2">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white" style={{ fontFamily: "Anton, sans-serif" }}>
              Certifications
            </h2>
            <span className="text-neutral-500 font-mono text-lg md:text-xl font-bold mt-2">({CERTIFICATES.length})</span>
          </div>
          <div className="h-1 w-16 bg-[#c6ff00] rounded-full mt-4" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveTab(cat)} className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 border cursor-pointer select-none ${activeTab === cat ? "bg-[#c6ff00] text-black border-[#c6ff00] shadow-[0_0_15px_rgba(198,255,0,0.2)]" : "bg-[#0a0a0a] text-neutral-400 border-white/5 hover:border-neutral-700 hover:text-white"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {displayedCertificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseMove={handleMouseMove}
                className="group relative flex flex-col rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#c6ff00]/30 transition-all duration-500 overflow-hidden min-h-[380px]"
              >
                
                <div className="bento-card-glow" />

                
                <div className="relative w-full aspect-[4/3] bg-white border-b border-white/5 p-4 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement?.insertAdjacentHTML(
                        "afterbegin",
                        '<div class="absolute inset-0 flex items-center justify-center text-neutral-400 bg-neutral-900"><svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/></svg></div>'
                      );
                    }}
                  />
                  <div className="absolute top-3 right-3 p-2 bg-[#c6ff00] text-black rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-[#c6ff00]/20">
                    <Award size={16} />
                  </div>
                </div>

                
                <div className="flex flex-col flex-1 relative z-10 p-6 sm:p-8 items-center text-center justify-center gap-4">
                  <h3 className="text-lg md:text-xl font-bold leading-tight text-white group-hover:text-[#c6ff00] transition-colors duration-300 font-poppins">
                    {cert.title}
                  </h3>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-neutral-300 hover:text-[#c6ff00] transition-colors duration-300 font-mono mt-auto"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        
        {filtered.length === 0 && (
          <div className="text-center py-12 text-neutral-500 font-mono text-sm">
            No certificates found in this category.
          </div>
        )}

        
        {filtered.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border border-white/10 text-white font-mono text-sm hover:border-[#c6ff00] hover:text-[#c6ff00] transition-all duration-300 flex items-center gap-2"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
