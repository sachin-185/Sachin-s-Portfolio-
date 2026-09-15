import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/constants";

export default function About() {
  const paragraphs = PERSONAL_INFO.aboutDetailed.split("\n\n");

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-5 sm:px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-[30%] left-[5%] w-72 h-72 bg-[#c6ff00]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col gap-4 mb-12 sm:mb-16 items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">Get to know me</p>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-2" style={{ fontFamily: "Anton, sans-serif" }}>
            About Me<span className="text-[#c6ff00]">.</span>
          </h2>
          <div className="h-1 w-16 bg-[#c6ff00] rounded-full" />
        </div>

        <div className="p-6 sm:p-10 md:p-14 rounded-3xl md:rounded-[32px] bg-[#0a0a0a] border border-white/5 flex flex-col gap-6 sm:gap-8 shadow-xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col gap-5 sm:gap-6 text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-light tracking-wide">
            {paragraphs.map((para, paraIdx) => (
              <motion.p
                key={paraIdx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: paraIdx * 0.12, ease: "easeOut" }}
                className="text-neutral-300 leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div className="flex items-center gap-2 text-neutral-500 mt-4 sm:mt-6 pt-5 sm:pt-6 border-t border-white/5">
            <MapPin size={16} className="shrink-0 text-[#c6ff00]" />
            <span className="text-xs uppercase tracking-wider font-mono">{PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}



