import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsSlider from "@/components/SkillsSlider";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import Loader from "@/components/Loader";
import { SOCIAL_LINKS } from "@/constants";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div key="main" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} >
            <main className="min-h-screen bg-[#050505] text-neutral-100 font-poppins">
              <Navbar />
              <Hero />
              <About />
              <Education />
              <Experience />
              <SkillsSlider />
              <Projects />
              <Achievements />
              <Certificates />
              <Recommendations />
              <Contact />
              <Chatbot />

              <footer className="py-8 sm:py-12 px-6 border-t border-white/5 bg-[#050505]">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-xl font-bold tracking-tighter">SACHIN<span className="text-[#c6ff00]">.</span></h3>
                    <p className="text-xs sm:text-sm text-neutral-500">© 2026 Sachin. All rights reserved.</p>
                  </div>

                  <div className="flex items-center gap-5 sm:gap-6">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-[#c6ff00] transition-colors p-1" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-[#c6ff00] transition-colors p-1" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-[#c6ff00] transition-colors p-1" aria-label="Twitter">
                      <Twitter size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.email} className="text-neutral-400 hover:text-[#c6ff00] transition-colors p-1" aria-label="Email">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </footer>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}