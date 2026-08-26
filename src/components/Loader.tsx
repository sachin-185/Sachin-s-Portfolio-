import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const SYSTEM_LOGS = [
  "SYSTEM INIT: BOOTING PORTFOLIO CORE...",
  "PARSING ENVIRONMENT VARIABLES [SECURE]...",
  "LOADING NEURAL NET LAYERS (PYTORCH, TENSORFLOW)...",
  "ESTABLISHING VECTOR STORAGE (CHROMADB)...",
  "COMPILING RAG PROMPT CONFIGURATION...",
  "CONNECTING TELEMETRY & DATABASE CLUSTERS...",
  "RENDERING RECONSTRUCTED FE COMPONENTS...",
  "ASSEMBLING CERTIFICATES & ASSETS...",
  "SYSTEM STATUS: ONLINE. PORTFOLIO DEPLOYED."
];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [activeLogIdx, setActiveLogIdx] = useState(0);
  useEffect(() => {
    const duration = 2000; 
    const intervalTime = 30; 
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.floor((currentStep / totalSteps) * 100), 100);
      setProgress(nextProgress);
      const logIdx = Math.min(
        Math.floor((nextProgress / 100) * SYSTEM_LOGS.length),
        SYSTEM_LOGS.length - 1
      );
      setActiveLogIdx(logIdx);
      if (nextProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#050505] z-50 flex flex-col items-center justify-center overflow-hidden font-mono text-neutral-300 select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none z-10" />
      <div className="relative mb-12 flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-44 h-44 rounded-full border border-dashed border-[#c6ff00]/20"
        />
        <motion.div animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 rounded-full border border-double border-[#c6ff00]/10"
        />
        <div className="absolute inset-0 flex justify-between items-center -mx-4">
          <span className="text-[#c6ff00]/40 font-extrabold text-2xl">[</span>
          <span className="text-[#c6ff00]/40 font-extrabold text-2xl">]</span>
        </div>

        <div className="text-center relative z-10 flex flex-col items-center">
          <span className="text-xs tracking-[0.2em] text-[#c6ff00]/60 font-semibold mb-1">BOOTING</span>
          <div className="text-5xl md:text-6xl font-bold tracking-tighter text-white flex items-baseline">
            <span>{progress}</span>
            <span className="text-lg md:text-xl text-[#c6ff00] ml-1">%</span>
          </div>
          <span className="text-[10px] text-neutral-500 tracking-widest mt-1">SYS.REV_1.8</span>
        </div>
      </div>
      <div className="w-64 md:w-80 h-2 border border-white/5 bg-[#0a0a0a] rounded-full overflow-hidden mb-10 relative">
        <motion.div className="h-full bg-[#c6ff00] shadow-[0_0_12px_#c6ff00]"
          style={{ width: `${progress}%` }} transition={{ ease: "easeOut" }}
        />
      </div>

      <div className="w-full max-w-lg px-6 h-36 flex flex-col justify-end text-[11px] leading-relaxed text-neutral-400">
        <div className="border border-white/5 bg-[#0a0a0a]/50 p-4 rounded-xl backdrop-blur-md shadow-inner flex flex-col gap-1 overflow-hidden h-full select-text">
          {SYSTEM_LOGS.slice(0, activeLogIdx).map((log, i) => (
            <div key={i} className="text-neutral-500 opacity-60 flex gap-2">
              <span className="text-[#c6ff00]/30 select-none">&gt;&gt;</span>
              <span>{log}</span>
            </div>
          ))}
          <div className="text-white font-bold flex gap-2 animate-pulse">
            <span className="text-[#c6ff00] select-none">&gt;&gt;</span>
            <span>{SYSTEM_LOGS[activeLogIdx]}</span>
            <span className="inline-block w-1.5 h-3.5 bg-[#c6ff00] ml-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
