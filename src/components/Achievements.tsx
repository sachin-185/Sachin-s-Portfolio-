import React from "react";
import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/constants";
import { Trophy, Code2, Award, Users } from "lucide-react";

export default function Achievements() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "Code":
        return <Code2 size={24} className="text-[#c6ff00]" />;
      case "Growth":
        return <Users size={24} className="text-[#c6ff00]" />;
      case "Academics":
        return <Award size={24} className="text-[#c6ff00]" />;
      default:
        return <Trophy size={24} className="text-[#c6ff00]" />;
    }
  };

  return (
    <section id="achievements" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[#c6ff00]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 mb-12 sm:mb-20 text-center items-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">Milestones</p>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-2"
            style={{ fontFamily: "Anton, sans-serif" }}>Achievements<span className="text-[#c6ff00]">.</span>
          </h2>
          <div className="h-1 w-16 bg-[#c6ff00] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {ACHIEVEMENTS.map((item, i) => {
            const isColSpan2 = i === 0 || i === 3;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onMouseMove={handleMouseMove}
                className={`group relative p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#c6ff00]/30 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[200px] sm:min-h-[220px] ${isColSpan2 ? "md:col-span-2" : "md:col-span-1"}`} >
                <div className="bento-card-glow" />
                <div className="relative z-10 flex justify-between items-start gap-4">
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                    {getIcon(item.category)}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 bg-white/5 border border-white/5 px-3 py-1 rounded-full group-hover:text-[#c6ff00] group-hover:border-[#c6ff00]/20 transition-all duration-300">
                    {item.category}
                  </span>
                </div>
                <div className="relative z-10 mt-5 sm:mt-6 flex flex-col gap-1.5 sm:gap-2">
                  <h3 className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-neutral-500 font-mono">
                    {item.title}
                  </h3>
                  <p className="text-white font-extrabold text-2xl sm:text-3xl font-poppins leading-none tracking-tight">
                    {item.metric}
                  </p>
                  <p className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed mt-1">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}