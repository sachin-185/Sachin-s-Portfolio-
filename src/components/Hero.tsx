import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants";
import { Github, Linkedin, Twitter, Mail, ChevronDown, Download, Award, Briefcase } from "lucide-react";

const ROLES = [
  "B.Tech - AI&DS @RIT", "AI Full stack developer", "Ex-intern @Plugzmart"
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] pt-28 pb-16 sm:pb-24 lg:py-0 px-5 sm:px-6">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#c6ff00]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none leading-none opacity-5 overflow-hidden">
        <h1 className="text-[20vw] sm:text-[22vw] uppercase text-white text-center tracking-tighter"
          style={{ fontFamily: "Anton, sans-serif" }}>{PERSONAL_INFO.name}
        </h1>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10 w-full py-6 sm:py-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-5 sm:gap-6 lg:col-span-5 items-start text-left">
          <div className="flex flex-col gap-2">
            <span className="text-[#c6ff00] text-xs font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 self-start">
              Hi, My name is
            </span>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase text-white leading-none mt-2 drop-shadow-2xl"
              style={{ fontFamily: "Anton, sans-serif", letterSpacing: "1px", textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
              SACHIN<span className="text-[#c6ff00]">.</span>
            </h1>
          </div>
          <div className="h-10 flex items-center overflow-hidden w-full relative">
            {mounted && (
              <AnimatePresence mode="wait">
                <motion.div key={roleIndex} initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-lg sm:text-xl md:text-2xl font-bold text-[#c6ff00] truncate sm:whitespace-nowrap" >
                  {ROLES[roleIndex]}
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-xl leading-relaxed font-light">
            {PERSONAL_INFO.about}
          </p>
          <div className="grid grid-cols-2 gap-4 sm:gap-10 mt-2 sm:mt-4 border-y border-white/5 py-4 sm:py-6 w-full max-w-lg">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white leading-none">10+</div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-neutral-500 mt-1 font-semibold">Projects</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white leading-none">AI & DS</div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-neutral-500 mt-1 font-semibold">Specialization</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-2 sm:mt-4 w-full">
            <a href="#contact" className="px-6 py-3 bg-[#c6ff00] hover:bg-[#c6ff00]/90 text-black font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-[#c6ff00]/10 hover:shadow-[#c6ff00]/25 text-center">
              Let's Connect
            </a>

            <div className="flex items-center justify-start gap-3 sm:gap-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-full text-neutral-400 hover:text-[#c6ff00] hover:border-[#c6ff00]/30 hover:bg-white/10 transition-all duration-300" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-full text-neutral-400 hover:text-[#c6ff00] hover:border-[#c6ff00]/30 hover:bg-white/10 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={SOCIAL_LINKS.twitter}
                target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-neutral-400 hover:text-[#c6ff00] hover:border-[#c6ff00]/30 hover:bg-white/10 transition-all duration-300"
                aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href={SOCIAL_LINKS.email}
                className="p-3 bg-white/5 border border-white/10 rounded-full text-neutral-400 hover:text-[#c6ff00] hover:border-[#c6ff00]/30 hover:bg-white/10 transition-all duration-300"
                aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-7 w-full flex justify-center lg:justify-end items-center relative">
          <div className="relative w-full aspect-[4/5] max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md p-3 sm:p-4 group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c6ff00]/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/5">
              <img src="/images/Sachin.jpg" alt="Sachin" className="w-full h-full object-cover object-[50%_72%] group-hover:scale-105 transition-all duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80";
                }}
              />
            </div>
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#c6ff00]/30 rounded-tl-md group-hover:border-[#c6ff00] transition-colors" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#c6ff00]/30 rounded-tr-md group-hover:border-[#c6ff00] transition-colors" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#c6ff00]/30 rounded-bl-md group-hover:border-[#c6ff00] transition-colors" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#c6ff00]/30 rounded-br-md group-hover:border-[#c6ff00] transition-colors" />
          </div>
        </motion.div>
      </div>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="hidden md:flex absolute bottom-6 z-10">
        <a href="#about" className="flex flex-col items-center gap-2 text-xs font-mono text-neutral-500 hover:text-[#c6ff00] transition-colors">
          <span>Scroll Down</span>
          <ChevronDown size={16} />
        </a>
      </motion.div>
    </section>
  );
}
