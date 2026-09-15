import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, Code2 } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants";

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c6ff00]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-3 sm:gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">Reach Out</p>
              <h2
                className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-1 sm:mt-2"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Let&apos;s talk<span className="text-[#c6ff00]">.</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-md font-light leading-relaxed">
                Have a question, an opportunity, or just want to connect? Let&apos;s get in touch and create something amazing together.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 mt-2">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-[#c6ff00] shadow-md shadow-black shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm font-mono uppercase tracking-wide">Email</h4>
                  <a href={SOCIAL_LINKS.email} className="text-neutral-400 text-xs sm:text-sm hover:text-[#c6ff00] transition-colors break-all">
                    svsachinsd@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-[#c6ff00] shadow-md shadow-black shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm font-mono uppercase tracking-wide">Location</h4>
                  <p className="text-neutral-400 text-xs sm:text-sm">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="grid grid-cols-2 gap-3 sm:gap-4">
            
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 sm:gap-4 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#c6ff00]/50 hover:shadow-[0_0_30px_rgba(198,255,0,0.15)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:text-[#c6ff00] transition-colors group-hover:bg-[#c6ff00]/10">
                <Linkedin size={22} className="sm:w-7 sm:h-7" />
              </div>
              <span className="font-mono font-bold text-sm sm:text-lg text-white">LinkedIn</span>
            </a>

            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 sm:gap-4 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#c6ff00]/50 hover:shadow-[0_0_30px_rgba(198,255,0,0.15)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:text-[#c6ff00] transition-colors group-hover:bg-[#c6ff00]/10">
                <Github size={22} className="sm:w-7 sm:h-7" />
              </div>
              <span className="font-mono font-bold text-sm sm:text-lg text-white">GitHub</span>
            </a>

            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 sm:gap-4 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#c6ff00]/50 hover:shadow-[0_0_30px_rgba(198,255,0,0.15)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:text-[#c6ff00] transition-colors group-hover:bg-[#c6ff00]/10">
                <Twitter size={22} className="sm:w-7 sm:h-7" />
              </div>
              <span className="font-mono font-bold text-sm sm:text-lg text-white">Twitter</span>
            </a>

            <a href={SOCIAL_LINKS.hackerrank} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 sm:gap-4 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#c6ff00] hover:bg-[#c6ff00]/90 border border-transparent hover:shadow-[0_0_30px_rgba(198,255,0,0.2)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/10 flex items-center justify-center text-black">
                <Code2 size={22} className="sm:w-7 sm:h-7" />
              </div>
              <span className="font-mono font-extrabold text-xs sm:text-base text-black uppercase tracking-wider text-center">HackerRank</span>
            </a>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}

