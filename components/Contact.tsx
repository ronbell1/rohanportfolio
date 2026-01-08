
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 flex flex-col items-center text-center space-y-12">
      <div className="space-y-4">
        <h2 className="font-serif text-6xl md:text-8xl electric-blue">let's talk.</h2>
        <p className="text-xl max-w-xl mx-auto opacity-70">
          Interested in working together or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="w-full max-w-3xl bg-white border-4 border-electric-blue rounded-[3rem] p-12 puzzle-shadow-hover transition-all">
        <h3 className="font-serif text-4xl mb-8">Rohan Singh Aswal</h3>
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <a href="mailto:rohan.aswal.1005@gmail.com" className="flex items-center gap-4 group">
            <div className="p-4 rounded-2xl bg-electric-blue/5 border border-electric-blue group-hover:bg-black group-hover:text-beige transition-all">
              <Mail size={24} className="electric-blue group-hover:text-white" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase opacity-50 tracking-widest">Email</p>
              <p className="font-medium">rohan.aswal.1005@gmail.com</p>
            </div>
          </a>

          <a href="tel:+918918413123" className="flex items-center gap-4 group">
            <div className="p-4 rounded-2xl bg-electric-blue/5 border border-electric-blue group-hover:bg-black group-hover:text-beige transition-all">
              <Phone size={24} className="electric-blue group-hover:text-white" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase opacity-50 tracking-widest">Phone</p>
              <p className="font-medium">+91 89184 13123</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/rohan-singh-aswal-2aba712ab/" target="_blank" className="flex items-center gap-4 group">
            <div className="p-4 rounded-2xl bg-electric-blue/5 border border-electric-blue group-hover:bg-black group-hover:text-beige transition-all">
              <Linkedin size={24} className="electric-blue group-hover:text-white" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase opacity-50 tracking-widest">LinkedIn</p>
              <p className="font-medium">https://www.linkedin.com/in/rohan-singh-aswal-2aba712ab/</p>
            </div>
          </a>

          <a href="https://github.com/ronbell1" target="_blank" className="flex items-center gap-4 group">
            <div className="p-4 rounded-2xl bg-electric-blue/5 border border-electric-blue group-hover:bg-black group-hover:text-beige transition-all">
              <Github size={24} className="electric-blue group-hover:text-white" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase opacity-50 tracking-widest">GitHub</p>
              <p className="font-medium">github.com/ronbell1</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
