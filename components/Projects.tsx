
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectBlockProps {
  index: number;
  title: string;
  desc: string;
  tags: string[];
  details: string[];
  image: string;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ index, title, desc, tags, details, image }) => (
  <motion.div 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, type: "spring", bounce: 0.1, delay: index * 0.1 }}
    className="grid md:grid-cols-2 gap-12 items-center py-20 border-b border-black/5 last:border-none group perspective-1000"
  >
    <div className="space-y-8 order-2 md:order-1">
      <div className="space-y-4">
        <motion.h3 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + (index * 0.1), duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl group-hover:electric-blue transition-colors leading-tight"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + (index * 0.1) }}
          className="text-2xl font-serif italic opacity-60"
        >
          {desc}
        </motion.p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <motion.span 
            key={tag} 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + (i * 0.05) + (index * 0.1) }}
            className="text-[10px] font-black border-2 border-electric-blue/10 px-4 py-1.5 rounded-full uppercase tracking-widest bg-white/50 hover:bg-electric-blue hover:text-white transition-colors"
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <ul className="space-y-3 opacity-80">
        {details.map((detail, idx) => (
          <motion.li 
            key={idx} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + (idx * 0.1) + (index * 0.1) }}
            className="flex gap-4 text-sm font-medium"
          >
            <span className="electric-blue">✦</span> {detail}
          </motion.li>
        ))}
      </ul>

      <div className="flex gap-4 pt-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-electric-blue text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest puzzle-shadow hover:brightness-110"
        >
          View Project <ExternalLink size={16} />
        </motion.button>
      </div>
    </div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring" }}
      whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
      style={{ perspective: 1000 }}
      className="relative aspect-video overflow-hidden rounded-[2.5rem] border-2 border-electric-blue puzzle-shadow bg-white order-1 md:order-2 transform-gpu"
    >
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute inset-0 bg-electric-blue/5 pointer-events-none group-hover:bg-transparent transition-all" />
      
      {/* Dynamic Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundSize: '200% 200%' }} />
    </motion.div>
  </motion.div>
);

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-electric-blue pb-8">
        <h2 className="font-serif text-7xl md:text-8xl electric-blue">projects.</h2>
        <p className="max-w-xs text-[10px] font-black uppercase tracking-[0.2em] opacity-40 italic text-right">
          Curated collection of high-performance architectural solutions.
        </p>
      </div>

      <div className="space-y-4">
        <ProjectBlock 
          index={0}
          title="PRAKSAT Model"
          desc="Environmental Monitoring Platform"
          tags={["Next.js", "ElysiaJS", "Redis", "PostgreSQL", "Terraform", "Azure"]}
          details={[
            "Real-time telemetry visualization platform for specialized tracking.",
            "Architected with Redis + BetterAuth for sub-millisecond data fetching.",
            "Full IaC implementation using Terraform for production Azure deployments."
          ]}
          image="/proj1.jpg"
        />
        <ProjectBlock 
          index={1}
          title="Nyay Samiti"
          desc="Legal Document Analyzer"
          tags={["Next.js", "Weaviate", "PostgreSQL", "Legal-BERT", "spaCy"]}
          details={[
            "Automated legal clause extraction and multi-document summarization.",
            "Scalable vector search implementation using Weaviate for fast retrieval.",
            "Custom Legal-AI fine-tuning for high-accuracy document classification."
          ]}
          image="/proj2.png"
        />
        <ProjectBlock 
          index={2}
          title="Savchham AI"
          desc="Waste Detection Platform"
          tags={["Next.js", "RBAC", "Docker", "Azure"]}
          details={[
            "Enterprise-grade RBAC APIs for secure multi-tenant operations.",
            "Dedicated AI microservices containerized for consistent deployment.",
            "Optimized verification workflows, reducing manual audit time by 60%."
          ]}
          
          image="/proj3.png"
        />
      </div>
    </section>
  );
};
