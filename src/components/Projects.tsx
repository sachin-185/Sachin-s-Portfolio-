import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/constants";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const CATEGORIES = ["All", "AI", "Web", "Data"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => filter === "All" || p.category === filter
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">My Creations</p>
            <h2 
              className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-2"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              Featured Projects<span className="text-[#c6ff00]">.</span>
            </h2>
            <div className="h-1 w-16 bg-[#c6ff00] rounded-full" />
          </div>

          
          <div className="flex p-1 bg-[#0a0a0a] rounded-xl border border-white/5 self-start md:self-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-lg text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#c6ff00] text-black font-bold shadow-md shadow-[#c6ff00]/10"
                    : "text-neutral-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title} layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onMouseMove={handleMouseMove}
                className="group relative flex flex-col rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden shadow-md hover:shadow-xl hover:border-[#c6ff00]/30 transition-all duration-500 min-h-[460px]" >
                <div className="bento-card-glow" /> 
                <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {                  
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<div class="absolute inset-0 flex items-center justify-center text-neutral-600"><svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></div>');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#c6ff00] text-black font-bold text-sm rounded-xl flex items-center justify-center gap-1.5 hover:bg-[#c6ff00]/90 transition-colors shadow-lg">
                       Explore Project <ExternalLink size={14} />
                     </a>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 relative z-10 justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-[9px] uppercase font-mono tracking-wider px-2 py-1 bg-white/5 rounded text-neutral-400 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#c6ff00] transition-colors duration-300 font-poppins leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-[#c6ff00] font-mono tracking-wider">
                      <FolderGit2 size={14} />
                      <span>{project.category}</span>
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-white transition-colors duration-300"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

