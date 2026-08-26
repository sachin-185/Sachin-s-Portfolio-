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
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import Loader from "@/components/Loader";
import { SOCIAL_LINKS } from "@/constants";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}
      disableTransitionOnChange>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div key="main" initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} >
            <main className="min-h-screen bg-[#050505] text-neutral-100 font-poppins">
              <Navbar />
              <Hero />
              <About />
              <SkillsSlider />
              <Experience />
              <Education />
              <Achievements />
              <Certificates />
              <Projects />
              <Contact />
              <Chatbot />
            
              <footer className="py-12 px-6 border-t border-white/5 bg-[#050505]">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold tracking-tighter">SACHIN<span className="text-[#c6ff00]">.</span></h3>
                    <p className="text-sm text-neutral-500">© 2026 Sachin. All rights reserved.</p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <a href={SOCIAL_LINKS.github} className="text-neutral-500 hover:text-[#c6ff00] transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} className="text-neutral-500 hover:text-[#c6ff00] transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.twitter} className="text-neutral-500 hover:text-[#c6ff00] transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.email} className="text-neutral-500 hover:text-[#c6ff00] transition-colors">
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