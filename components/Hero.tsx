import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, FileText } from 'lucide-react';
import { SketchedPuzzleIcon } from './SketchedPuzzleIcon';
import { ResumeModal } from './ResumeModal';

export const Hero: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="hero" className="min-h-[95vh] flex flex-col justify-center pt-8 pb-16">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10 relative z-10"
        >
          <div className="space-y-2">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-serif italic text-2xl md:text-3xl electric-blue mb-2"
            >
              Hello, I'm
            </motion.p>
            <h1 className="font-serif text-6xl md:text-7xl font-black leading-none electric-blue tracking-tight">
              Rohan Singh<br />
              <span className="italic">Aswal.</span>
            </h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl leading-relaxed max-w-xl font-medium opacity-80 border-l-4 border-electric-blue pl-6 py-2"
          >
           I’m a <span className="marker-underline font-bold text-electric-blue">Full-Stack Engineer</span> from SRM, passionate about learning new technologies and building systems that are fast, scalable, and clean.  
          </motion.p>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
               <motion.a 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 href="#projects" 
                 className="bg-electric-blue text-white px-8 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest puzzle-shadow flex items-center gap-2"
               >
                 Explore Works <ArrowRight size={16} />
               </motion.a>
               
               <motion.button 
                 onClick={() => setIsResumeOpen(true)}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-white border-2 border-electric-blue electric-blue px-8 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest puzzle-shadow flex items-center gap-2 transition-all hover:bg-electric-blue/5"
               >
                 Resume <FileText size={16} />
               </motion.button>
            </div>

            {/* Important Quick Links */}
            <div className="flex items-center gap-6 pt-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Connect</span>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/ronbell1", label: "Github" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/rohan-singh-aswal-2aba712ab/", label: "LinkedIn" },
                  { icon: <Mail size={20} />, href: "mailto:rohan.aswal.1005@gmail.com", label: "Email" }
                ].map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: "#1E2BFF" }}
                    className="p-3 bg-white/50 border-2 border-electric-blue/20 rounded-xl hover:border-electric-blue transition-all sketched-border"
                    title={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group"
        >
          <div className="aspect-[3/4] w-full max-w-sm mx-auto bg-white border-[3px] border-electric-blue sketched-border overflow-hidden puzzle-shadow relative z-10 transition-transform duration-500 group-hover:rotate-1">
            <img 
              src="/potrait.jpg" 
              alt="Rohan Singh Aswal" 
              className="w-full h-full object-cover scale-150 translate-y-10 -translate-x-5"
            />
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <SketchedPuzzleIcon size={32} />
            </div>
          </div>
          
          <div className="absolute -bottom-10 -left-10 w-40 h-40 text-electric-blue opacity-10 z-0">
             <SketchedPuzzleIcon size={160} />
          </div>
          <div className="absolute -top-10 -right-10 w-32 h-32 text-electric-blue opacity-5 z-0">
             <SketchedPuzzleIcon size={120} />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};
