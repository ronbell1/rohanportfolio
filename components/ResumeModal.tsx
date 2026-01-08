
import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { SketchedPuzzleIcon } from './SketchedPuzzleIcon';

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  // Use a placeholder PDF if the actual file isn't available.
  const resumeUrl = "resume.pdf";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#F5F2EA]/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl h-[90vh] bg-white border-4 border-electric-blue rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 md:px-10 border-b-2 border-electric-blue/10 flex items-center justify-between bg-white relative z-10">
          <div className="flex items-center gap-4">
            <SketchedPuzzleIcon size={32} />
            <div>
              <h3 className="font-serif text-2xl electric-blue">Resume</h3>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Rohan Singh Aswal • 2025</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-electric-blue/5 electric-blue hover:bg-electric-blue hover:text-white transition-all border border-electric-blue/20"
              title="Open in new tab"
            >
              <ExternalLink size={20} />
            </a>
            <button 
              onClick={onClose}
              className="p-3 rounded-xl bg-electric-blue/5 electric-blue hover:bg-electric-blue hover:text-white transition-all border border-electric-blue/20"
              title="Close viewer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="flex-1 bg-gray-100 relative group">
          <iframe 
            src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full border-none"
            title="Resume PDF Viewer"
          />
          
          {/* Decorative Corner Overlay - Only visible if the PDF has margins */}
          <div className="absolute bottom-6 right-6 pointer-events-none opacity-20">
            <SketchedPuzzleIcon size={80} />
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-4 bg-[#F5F2EA] border-t-2 border-electric-blue/10 flex justify-center items-center">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">
                Rohan Singh Aswal • Full-Stack & AI Engineer
            </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
