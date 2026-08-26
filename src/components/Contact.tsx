import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <section id="contact" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c6ff00]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">Reach Out</p>
              <h2
                className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-2"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Let&apos;s talk<span className="text-[#c6ff00]">.</span>
              </h2>
              <p className="text-lg text-neutral-400 max-w-md font-light leading-relaxed">
                Have a question or want to work together? I&apos;m always open to new opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-[#c6ff00] shadow-md shadow-black">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wide">Email</h4>
                  <p className="text-neutral-400 text-sm">svsachinsd@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-[#c6ff00] shadow-md shadow-black">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm font-mono uppercase tracking-wide">Location</h4>
                  <p className="text-neutral-400 text-sm">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}  className="p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-white/5 shadow-xl relative overflow-hidden group" >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c6ff00]/5 rounded-full blur-2xl" />
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 ml-1">Name</label>
                  <input type="text" required
                    placeholder="Your Name"
                    className="p-4 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-neutral-600 focus:border-[#c6ff00] focus:ring-1 focus:ring-[#c6ff00] outline-none transition-all duration-300"
                    suppressHydrationWarning
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 ml-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="p-4 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-neutral-600 focus:border-[#c6ff00] focus:ring-1 focus:ring-[#c6ff00] outline-none transition-all duration-300"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 ml-1">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="p-4 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-neutral-600 focus:border-[#c6ff00] focus:ring-1 focus:ring-[#c6ff00] outline-none transition-all duration-300 resize-none"
                  suppressHydrationWarning
                />
              </div>

              <button
                disabled={status !== "idle"}
                className="mt-4 p-4 rounded-xl bg-[#c6ff00] text-black font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-[#c6ff00]/95 transition-all duration-300 disabled:opacity-50 shadow-lg shadow-[#c6ff00]/5 cursor-pointer uppercase tracking-wider font-mono"
                suppressHydrationWarning
              >
                {status === "idle" && (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
                {status === "submitting" && (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                )}
                {status === "success" && (
                  <> Message Sent! <CheckCircle size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

