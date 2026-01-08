
import React from 'react';
import { motion } from 'framer-motion';
import { SketchedPuzzleIcon } from './SketchedPuzzleIcon';

interface ExpCardProps {
  index: number;
  title: string;
  company: string;
  period: string;
  points: string[];
  skills?: string[];
}

const ExpCard: React.FC<ExpCardProps> = ({ index, title, company, period, points, skills }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8, rotate: index % 2 === 0 ? 0.5 : -0.5 }}
    className="group relative p-8 md:p-10 border-2 border-electric-blue rounded-[2.5rem] bg-white/60 transition-all hover:bg-white puzzle-shadow flex flex-col gap-6"
  >
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-[10px] font-black electric-blue uppercase tracking-[0.2em] bg-electric-blue/5 px-4 py-1.5 rounded-full border border-electric-blue/10">
          {period}
        </span>
        <SketchedPuzzleIcon size={24} opacity={0.2} />
      </div>
      <h3 className="font-serif text-3xl md:text-4xl leading-tight group-hover:electric-blue transition-colors">
        {title}
      </h3>
      <p className="text-xs font-black opacity-40 uppercase tracking-[0.3em]">
        {company}
      </p>
    </div>

    <div className="flex-1 space-y-4">
      <ul className="space-y-3">
        {points.map((point, idx) => (
          <li key={idx} className="flex gap-4 text-sm leading-relaxed font-medium opacity-80">
            <span className="electric-blue text-xs pt-1">✦</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>

    {skills && (
      <div className="pt-6 border-t border-electric-blue/10 flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="text-[9px] font-black uppercase tracking-widest bg-white border border-electric-blue/20 text-electric-blue px-3 py-1 rounded-lg">
            {skill}
          </span>
        ))}
      </div>
    )}
    
    {/* Decorative corner bit */}
    <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
       <SketchedPuzzleIcon size={40} opacity={0.1} />
    </div>
  </motion.div>
);

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="space-y-16 py-12">
      <div className="flex flex-col md:flex-row items-baseline justify-between gap-6 border-b-2 border-electric-blue pb-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-serif text-6xl md:text-7xl electric-blue"
        >
          career path.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-xs text-[10px] font-black uppercase tracking-[0.3em] opacity-40 italic text-right"
        >
          Mapping the trajectory of technical impact and architectural growth.
        </motion.p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <ExpCard 
          index={0}
          title="AI Trainer"
          company="Outlier AI"
          period="Feb '25 – Present"
          points={[
            "Optimizing LLM reasoning logic and code generation benchmarks for frontier models.",
            "Designing complex stress-tests to minimize hallucinations in technical reasoning.",
            "Architecting logic synthesis pipelines for high-precision technical outputs."
          ]}
          skills={["LLMs", "Logic Synthesis", "Python"]}
        />
        <ExpCard 
          index={1}
          title="Web Developer"
          company="Garhwal Goats"
          period="Oct '24 – Jan '25"
          points={[
            "Engineered high-performance Next.js interfaces for regional e-commerce trade.",
            "Boosted engagement by 40% through aggressive Core Web Vital optimizations.",
            "Implemented secure Auth patterns and real-time inventory sync hooks."
          ]}
          skills={["Next.js", "TypeScript", "Auth.js"]}
        />
        <ExpCard 
          index={2}
          title="Tech Lead"
          company="IIE SRM RMP"
          period="Sep '24 – Aug '25"
          points={[
            "Directing technical strategy and infrastructure for campus-wide digital systems.",
            "Managing development lifecycles for student-centric platforms (5000+ users).",
            "Consolidated fragmented data silos into a unified, high-availability GraphQL API."
          ]}
          skills={["System Design", "Leadership", "GraphQL"]}
        />
      </div>
    </section>
  );
};
