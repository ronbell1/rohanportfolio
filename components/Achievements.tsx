import React, { useState, useEffect } from 'react';
import { Rocket, Trophy, ExternalLink, MapPin, Calendar, Globe, Target, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Milestone: React.FC<{ title: string; subtitle: string; desc: string; date: string; icon: React.ReactNode }> = ({ title, subtitle, desc, date, icon }) => (
  <div className="group p-8 border-2 border-electric-blue rounded-3xl bg-white/40 hover:bg-white puzzle-shadow transition-all">
    <div className="flex justify-between items-start mb-6">
      <div className="p-4 rounded-2xl bg-electric-blue text-white">
        {icon}
      </div>
      <span className="text-[10px] font-black electric-blue uppercase bg-electric-blue/10 px-3 py-1 rounded-full border border-electric-blue/10">{date}</span>
    </div>
    <h3 className="font-serif text-2xl mb-1">{title}</h3>
    <p className="text-electric-blue font-bold text-[10px] uppercase tracking-widest mb-4">{subtitle}</p>
    <p className="opacity-70 text-sm leading-relaxed">{desc}</p>
  </div>
);

export const Achievements: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const SLIDES = [
    
     "sih4.jpg",
    "sih2.jpg",
    "sih3.jpg",
     "sih1.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="achievements" className="space-y-16 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-electric-blue pb-8">
        <h2 className="font-serif text-6xl md:text-7xl electric-blue">milestones.</h2>
        <p className="max-w-xs text-xs font-bold opacity-50 uppercase tracking-tighter">
          National recognition, industry summits, and specialized certifications.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative group overflow-hidden border-2 border-electric-blue rounded-3xl bg-white puzzle-shadow-hover transition-all"
      >
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          <div className="p-8 lg:p-12 space-y-6 flex flex-col justify-center">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="bg-electric-blue text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em]">National Finalist</span>
                <span className="text-electric-blue font-black text-[10px] uppercase tracking-widest flex items-center gap-1"><MapPin size={12} /> ISRO Track</span>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl electric-blue leading-tight">Smart India Hackathon 2025.</h3>
            </div>
            
            <p className="text-base font-medium opacity-80 leading-relaxed border-l-4 border-electric-blue/20 pl-5">
              Hand-picked as a national finalist to build "PRAKSAT"—a real-time environmental monitoring platform specifically architected for ISRO's satellite tracking infrastructure. 
            </p>

            <div className="grid grid-cols-2 gap-6 pt-2">
              <div>
                <p className="text-[10px] font-black uppercase opacity-40 mb-1">Impact</p>
                <p className="font-bold text-xs">Real-time Data Vis for Satellite Telemetry</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase opacity-40 mb-1">Tech Stack</p>
                <p className="font-bold text-xs">Next.js, Azure, ElysiaJS, Redis</p>
              </div>
            </div>

            <div className="pt-2">
              <button className="flex items-center gap-2 bg-electric-blue text-white px-6 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:brightness-110 transition-all shadow-lg">
                View Project Details <ExternalLink size={14} />
              </button>
            </div>
          </div>

          <div className="relative min-h-[300px] lg:min-h-full bg-electric-blue/5 border-l-2 border-electric-blue overflow-hidden">
             <AnimatePresence mode="popLayout">
               <motion.img 
                 key={currentSlide}
                 initial={{ opacity: 0, scale: 1.1 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 1 }}
                 src={SLIDES[currentSlide]} 
                 alt="ISRO Satellite Tracking"
                 className="absolute inset-0 w-full h-full object-cover"
               />
             </AnimatePresence>
             
             <div className="absolute inset-0 bg-electric-blue/20 mix-blend-multiply" />
             <div className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur rounded-xl border-2 border-electric-blue puzzle-shadow z-10">
               <Rocket size={32} className="electric-blue" />
             </div>
             
             {/* Slide Indicators */}
             <div className="absolute bottom-4 left-4 flex gap-2 z-10">
               {SLIDES.map((_, idx) => (
                 <div 
                   key={idx} 
                   className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`} 
                 />
               ))}
             </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Milestone 
          title="DevFest Attendee"
          subtitle="Google Dev Group"
          date="2024"
          icon={<Globe size={32} />}
          desc="Participated in DevFest, engaging with the latest in Web, AI, and Cloud from industry leads at Google Developer Groups."
        />
        <Milestone 
          title="HackerRank Cert"
          subtitle="React Engineering"
          date="2024"
          icon={<Target size={32} />}
          desc="Certified frontend proficiency in React.js, focusing on component optimization, state management, and performance hooks."
        />
        <Milestone 
          title="NPTEL Blockchain"
          subtitle="IIT Certification"
          date="2024"
          icon={<Award size={32} />}
          desc="Advanced certification in Blockchain architecture and Decentralized Applications (DApps)."
        />
      </div>
    </section>
  );
};
