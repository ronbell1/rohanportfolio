
import React from 'react';

interface PuzzleCardProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export const PuzzleCard: React.FC<PuzzleCardProps> = ({ icon, label, href }) => {
  return (
    <a 
      href={href}
      className="relative flex items-center justify-center gap-3 px-8 py-5 border-2 border-electric-blue bg-white rounded-2xl hover:bg-electric-blue hover:text-white transition-all group puzzle-shadow"
    >
      <div className="electric-blue group-hover:text-white transition-colors">
        {icon}
      </div>
      <span className="font-bold uppercase tracking-widest text-sm">{label}</span>
      
      {/* Hand-drawn puzzle bits styling using pseudo-elements */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 border-2 border-electric-blue border-b-0 rounded-t-full bg-[#F5F2EA] group-hover:bg-white transition-colors" />
    </a>
  );
};
