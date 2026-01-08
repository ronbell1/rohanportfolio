import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory: React.FC<{ title: string; skills: string[]; delay: number }> = ({ title, skills, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    className="space-y-4 p-8 border-2 border-black/10 rounded-2xl hover:border-electric-blue transition-colors group bg-white/30 hover:bg-white hover:shadow-xl"
  >
    <h3 className="font-serif text-2xl group-hover:electric-blue transition-colors">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <motion.span 
          key={skill} 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: delay + (i * 0.05) }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="bg-white px-3 py-1 rounded-md border border-black/5 text-sm font-bold uppercase tracking-tight puzzle-shadow cursor-default hover:bg-black hover:text-white transition-colors"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="space-y-16">
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-electric-blue pb-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-serif text-6xl md:text-7xl electric-blue"
        >
          <span className="marker-underline">technical</span> arsenal.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xs text-xs font-bold opacity-50 uppercase tracking-tighter"
        >
       High-performance tools for modern engineering challenges.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCategory 
          title="Languages" 
          skills={["Java", "Python", "C/C++", "SQL", "JavaScript"]} 
          delay={0}
        />
        <SkillCategory 
          title="Frameworks" 
          skills={["React", "Next.js", "Node.js", "Elysia.js", "Express", "Flask", "FastAPI"]} 
          delay={0.1}
        />
        <SkillCategory 
          title="Cloud / DevOps" 
          skills={["Docker", "Terraform", "Azure", "Prometheus"]} 
          delay={0.2}
        />
        <SkillCategory 
          title="Databases" 
          skills={["PostgreSQL", "MongoDB", "Redis", "Weaviate"]} 
          delay={0.3}
        />
        <SkillCategory 
          title="Infrastructure" 
          skills={["Vercel", "AWS", "GitHub Actions"]} 
          delay={0.4}
        />
        <SkillCategory 
          title="Core Strengths" 
          skills={["Data Structures"]} 
          delay={0.5}
        />
      </div>
    </section>
  );
};
