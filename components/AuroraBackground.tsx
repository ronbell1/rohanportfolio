import React from 'react';
import { motion } from 'framer-motion';

export const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white">
      {/* Soft gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8f9ff] to-[#f0f2ff] opacity-80" />

      {/* Animated Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#1E2BFF] blur-[120px] opacity-30"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#00C2FF] blur-[130px] opacity-20"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-[#7B61FF] blur-[140px] opacity-20"
      />
      
      {/* Subtle Noise Overlay for Texture (optional, kept very light) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
};
