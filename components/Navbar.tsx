import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { SketchedPuzzleIcon } from "./SketchedPuzzleIcon";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Milestones", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto">
      <div className="bg-[#F5F2EA]/80 backdrop-blur-md border-2 border-electric-blue rounded-full px-4 sm:px-5 py-2 flex items-center justify-between gap-8 sm:gap-12 puzzle-shadow">
        <a href="#" className="flex items-center gap-2">
          <SketchedPuzzleIcon size={28} className="sm:w-8 sm:h-8" />
        </a>

        <div className="hidden md:flex items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest hover:electric-blue transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden electric-blue p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full mt-4 left-1/2 -translate-x-1/2 right-auto w-screen max-w-xs bg-[#F5F2EA] border-2 border-electric-blue rounded-3xl p-4 sm:p-6 puzzle-shadow animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base sm:text-lg font-serif italic hover:electric-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
