
import React from 'react';
import { motion } from 'framer-motion';
import { SketchedPuzzleIcon } from './SketchedPuzzleIcon';

export const About: React.FC = () => {
  return (
    <section className="space-y-20">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-6xl electric-blue leading-none">
            about me
          </h2>
          <div className="space-y-6 text-lg leading-relaxed opacity-90">
            <motion.p 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }}
            >
              I'm currently pursuing my B.Tech in Computer Science at SRM Institute of Science and Technology (CGPA 9.18). Over the last few years, I’ve been genuinely curious about how software systems are built from simple front-end projects to <span className="marker-underline">full-stack applications</span>.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.4 }}
              className="font-medium italic border-l-4 border-electric-blue pl-6"
            >
              I’m still learning and figuring things out, but I enjoy understanding how different pieces of a system fit together, and how <span className="marker-underline">clean, practical solutions</span> can make a huge difference.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.6 }}
            >
              Most of my work revolves around full-stack development, experimenting with backend systems, integrating APIs, and building things that actually run in the <span className="marker-underline">real world</span>. I’m also actively learning about AI tools and cloud technologies and using them in projects.
            </motion.p>
          </div>
        </motion.div>
        
        <div className="relative pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30, rotate: 2 }} 
            whileInView={{ opacity: 1, y: 0, rotate: 0 }} 
            viewport={{ once: true }} 
            transition={{ type: "spring", duration: 1 }}
            className="bg-white/40 p-8 border-2 border-electric-blue rounded-3xl puzzle-shadow relative z-10 space-y-8"
          >
            <h3 className="font-serif text-3xl electric-blue">academic foundation.</h3>
            <div className="space-y-8">
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-electric-blue/20" />
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-electric-blue" />
                <h4 className="font-bold text-xl">B.Tech CSE @ SRM IST</h4>
                <p className="opacity-70 text-sm">2023 – 2027</p>
                <p className="text-sm font-semibold mt-1">Current CGPA: 9.185</p>
              </div>
              
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-electric-blue/20" />
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-electric-blue" />
                <h4 className="font-bold text-xl">Tashi Namgyal Academy</h4>
                <p className="opacity-70 text-sm">High School (PCM)</p>
                <p className="text-sm font-semibold mt-1">Score: 89.75%</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative sketches */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.2, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -top-10 -right-6 text-electric-blue transform rotate-12"
          >
            <SketchedPuzzleIcon size={120} />
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
        {[
          { label: "Systems Built", val: "12+" },
          { label: "Coffee Consumed", val: "∞" },
          { label: "Tech Stack", val: "20+" },
          { label: "Hackathons", val: "05+" }
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="text-center p-6 border border-electric-blue/10 bg-white/30 backdrop-blur-sm rounded-2xl sketched-border group hover:border-electric-blue/30 transition-all duration-300 cursor-default"
          >
            <p className="text-4xl font-serif electric-blue font-black mb-1">{stat.val}</p>
            <p className="text-[10px] uppercase font-bold tracking-widest opacity-50 group-hover:opacity-80 transition-opacity">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
