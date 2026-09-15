import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          scrolled || isOpen
            ? "bg-[#050505]/90 backdrop-blur-md border-white/5 py-4"
            : "bg-transparent border-transparent py-5 sm:py-6"
        )}
      >
        <div className="container mx-auto px-5 sm:px-6 h-full flex items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter font-poppins relative z-50"
            onClick={() => setIsOpen(false)}
          >
            SACHIN<span className="text-[#c6ff00]">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-xs lg:text-sm font-medium hover:text-[#c6ff00] transition-colors duration-200"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4 relative z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} className="text-[#c6ff00]" /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-3 my-auto">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c6ff00] mb-2">
                Navigation
              </span>
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.3 }}
                  className="flex items-center justify-between text-2xl font-bold font-poppins py-2.5 text-neutral-300 hover:text-[#c6ff00] border-b border-white/5 transition-colors group"
                >
                  <span>{link.name}</span>
                  <ArrowRight size={18} className="text-neutral-600 group-hover:text-[#c6ff00] group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                Connect Directly
              </span>
              <div className="flex items-center gap-4">
                <a 
                  href={SOCIAL_LINKS.email}
                  className="text-xs font-mono text-[#c6ff00] hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  svsachinsd@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


