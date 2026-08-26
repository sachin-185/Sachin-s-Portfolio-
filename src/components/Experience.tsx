import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="experience" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-20 text-center items-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">Work History</p>
          <h2 
            className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-2"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Professional Experience<span className="text-[#c6ff00]">.</span>
          </h2>
          <div className="h-1 w-16 bg-[#c6ff00] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onMouseMove={handleMouseMove}
              className="group relative p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#c6ff00]/30 transition-all duration-500 overflow-hidden flex flex-col gap-6"
            >
              
              <div className="bento-card-glow" />

              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#c6ff00]/10 border border-[#c6ff00]/25 flex items-center justify-center text-[#c6ff00] shrink-0 mt-1">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#c6ff00] transition-colors duration-300 font-poppins">
                      {exp.role}
                    </h3>
                    <p className="text-neutral-300 font-semibold text-lg mt-0.5 font-poppins">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-1.5 text-xs text-neutral-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-neutral-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-neutral-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              
              <ul className="relative z-10 flex flex-col gap-4 text-neutral-400 font-light text-base leading-relaxed pl-2 md:pl-4">
                {exp.points.map((point, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle2 size={16} className="text-[#c6ff00] shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              
              <div className="relative z-10 flex flex-wrap gap-2 mt-4 pt-6 border-t border-white/5">
                {exp.tech.map((t) => (
                  <span 
                    key={t} 
                    className="text-[10px] uppercase font-mono tracking-wider px-3 py-1 bg-white/5 rounded-md text-neutral-300 border border-white/5 group-hover:border-[#c6ff00]/20 transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
