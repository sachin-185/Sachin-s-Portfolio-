import React from "react";
import { motion } from "framer-motion";
import { EDUCATION } from "@/constants";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="education" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 sm:mb-20 text-center items-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">My Journey</p>
          <h2
            className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-2"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Education<span className="text-[#c6ff00]">.</span>
          </h2>
          <div className="h-1 w-16 bg-[#c6ff00] rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto relative border-l-2 border-white/10 ml-3 sm:ml-6 md:mx-auto">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onMouseMove={handleMouseMove}
              className="group relative pl-6 sm:pl-8 md:pl-12 pb-8 sm:pb-12 last:pb-0"
            >
              <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-[#c6ff00] z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(198,255,0,0.5)]" />
              <div className="relative p-5 sm:p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#c6ff00]/30 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[200px] sm:min-h-[220px]">
                <div className="bento-card-glow" />
                <div className="relative z-10 flex flex-col gap-5 sm:gap-6">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-white shrink-0 flex items-center justify-center p-2 border border-white/10">
                      <img
                        src={edu.image}
                        alt={edu.institution}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<svg class="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>');
                        }}
                      />
                    </div>

                    <span className="text-xs font-mono font-bold tracking-wider text-[#c6ff00] px-3 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 self-start">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-1 sm:mt-2">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug group-hover:text-[#c6ff00] transition-colors duration-300 font-poppins">
                      {edu.institution}
                    </h3>
                    <p className="text-neutral-400 font-light text-sm sm:text-base leading-normal">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center gap-2 mt-5 sm:mt-6 text-neutral-500 text-xs font-mono border-t border-white/5 pt-3 sm:pt-4">
                  <GraduationCap size={16} className="text-neutral-600 group-hover:text-[#c6ff00] transition-colors" />
                  <span>Verified Academic Record</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

