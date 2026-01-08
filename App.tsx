
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { PuzzlePieceDivider } from './components/PuzzlePieceDivider';
import { SketchedPuzzleIcon } from './components/SketchedPuzzleIcon';

const App: React.FC = () => {
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#1E2BFF] selection:text-white relative">
      <Navbar />
      
      {/* Background Floating Pieces Removed */}

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <Hero />
        
        
          <PuzzlePieceDivider />
        <div className="space-y-24 md:space-y-32">
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            variants={sectionVariant}
            id="about"
          >
            <About />
          </motion.section>

                <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            variants={sectionVariant}
            id="skills"
          >
            <Skills />
          </motion.section>
          
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            variants={sectionVariant}
            id="achievements"
          >
            <Achievements />
          </motion.section>

          
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            variants={sectionVariant}
            id="projects"
          >
            <Projects />
          </motion.section>
 

             <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            variants={sectionVariant}
            id="experience"
          >
            <Experience />
          </motion.section>

          <PuzzlePieceDivider reversed />
          
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            variants={sectionVariant}
            id="contact"
          >
            <Contact />
          </motion.section>
        </div>
      </main>

      <footer className="py-24 px-6 text-center border-t-2 border-electric-blue/10 mt-20">
        <div className="flex justify-center mb-6">
          <SketchedPuzzleIcon size={40} opacity={0.15} />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">
          Built with Passion • Rohan Singh Aswal • 2025
        </p>
      </footer>
    </div>
  );
};

export default App;
