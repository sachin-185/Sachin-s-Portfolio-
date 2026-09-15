import React from "react";
import { motion } from "framer-motion";
import { RECOMMENDATIONS, SOCIAL_LINKS } from "@/constants";
import { Quote, Linkedin, CheckCircle2, ArrowUpRight, HeartHandshake } from "lucide-react";

export default function Recommendations() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="recommendations" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#c6ff00]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 mb-12 sm:mb-16 items-center text-center">
          <div className="flex items-center gap-2 text-[#c6ff00] font-bold uppercase tracking-widest text-xs font-mono">
            <HeartHandshake size={16} />
            Peer & Mentee Endorsements
          </div>
          <div className="flex items-center gap-3 sm:gap-4 mt-1 sm:mt-2">
            <h2
              className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              Recommendations<span className="text-[#c6ff00]">.</span>
            </h2>
            <span className="text-neutral-500 font-mono text-base sm:text-xl font-bold mt-1 sm:mt-2">
              ({RECOMMENDATIONS.length})
            </span>
          </div>
          <div className="h-1 w-16 bg-[#c6ff00] rounded-full mt-3 sm:mt-4" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {RECOMMENDATIONS.map((rec, index) => (
            <motion.div
              key={rec.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              onMouseMove={handleMouseMove}
              className="group relative flex flex-col justify-between p-6 sm:p-9 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#c6ff00]/40 hover:shadow-[0_10px_35px_-10px_rgba(198,255,0,0.15)] transition-all duration-300 overflow-hidden"
            >
              <div className="bento-card-glow" />

              <div className="absolute -bottom-2 right-4 text-white/[0.025] group-hover:text-[#c6ff00]/10 transition-colors pointer-events-none">
                <Quote size={90} className="rotate-12" />
              </div>

              <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
                <div className="flex items-start justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-white/5">
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#c6ff00]/20 to-neutral-800 border border-[#c6ff00]/30 flex items-center justify-center font-bold font-poppins text-sm sm:text-base text-[#c6ff00] shrink-0 shadow-inner">
                      {rec.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-[#c6ff00] transition-colors font-poppins leading-snug truncate">
                          {rec.name}
                        </h3>
                        <span className="text-[10px] font-mono text-[#c6ff00] bg-[#c6ff00]/10 border border-[#c6ff00]/20 px-1.5 py-0.5 rounded shrink-0">
                          1st
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 font-light mt-0.5 leading-snug line-clamp-2">
                        {rec.role}
                      </p>
                    </div>
                  </div>

                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#c6ff00]/40 text-[#0077b5] hover:text-[#c6ff00] transition-colors shrink-0"
                    title="View on LinkedIn"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>

                {(rec.badge || rec.relationship) && (
                  <div className="flex flex-wrap items-center gap-2">
                    {rec.badge && (
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#c6ff00] bg-[#c6ff00]/10 border border-[#c6ff00]/20 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md">
                        {rec.badge}
                      </span>
                    )}
                    {rec.relationship && (
                      <span className="text-[11px] text-neutral-500 font-mono">
                        • {rec.relationship}
                      </span>
                    )}
                  </div>
                )}

                <p className="text-xs sm:text-base text-neutral-300 font-light leading-relaxed tracking-wide italic">
                  &ldquo;{rec.text}&rdquo;
                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 mt-6 pt-4 sm:pt-5 border-t border-white/5 text-xs font-mono text-neutral-500">
                <span className="text-[11px] text-neutral-500">{rec.date}</span>
                <div className="flex items-center gap-1.5 text-neutral-400 group-hover:text-[#c6ff00] transition-colors text-[11px]">
                  <CheckCircle2 size={13} className="text-[#c6ff00] shrink-0" />
                  <span>Verified LinkedIn Recommendation</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10 sm:mt-14">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-[#0a0a0a] border border-white/10 text-white font-mono text-xs sm:text-sm hover:border-[#c6ff00] hover:text-[#c6ff00] transition-all duration-300 group shadow-lg"
          >
            <span>Read all endorsements on LinkedIn</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#c6ff00]" />
          </a>
        </div>
      </div>
    </section>
  );
}
