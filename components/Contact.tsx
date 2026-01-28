import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 flex flex-col items-center text-center space-y-8 sm:space-y-12"
    >
      <div className="space-y-3 sm:space-y-4">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl electric-blue">
          let's talk.
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto opacity-70 px-4">
          Interested in working together or just want to say hi? My inbox is
          always open.
        </p>
      </div>

      <div className="w-full max-w-3xl bg-white border-4 border-electric-blue rounded-[3rem] p-6 sm:p-8 md:p-12 puzzle-shadow-hover transition-all mx-auto">
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
          Rohan Singh Aswal
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <a
            href="mailto:rohan.aswal.1005@gmail.com"
            className="flex items-start sm:items-center gap-3 sm:gap-4 group p-3 sm:p-0 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="p-3 sm:p-4 rounded-2xl bg-electric-blue/5 border border-electric-blue group-hover:bg-black group-hover:text-white transition-all flex-shrink-0">
              <Mail
                size={24}
                className="electric-blue group-hover:text-white w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase opacity-50 tracking-widest">
                Email
              </p>
              <p className="font-medium text-sm break-all">
                rohan.aswal.1005@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+918918413123"
            className="flex items-start sm:items-center gap-3 sm:gap-4 group p-3 sm:p-0 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="p-3 sm:p-4 rounded-2xl bg-electric-blue/5 border border-electric-blue group-hover:bg-black group-hover:text-white transition-all flex-shrink-0">
              <Phone
                size={24}
                className="electric-blue group-hover:text-white w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase opacity-50 tracking-widest">
                Phone
              </p>
              <p className="font-medium text-sm">+91 89184 13123</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/rohan-singh-aswal-2aba712ab/"
            target="_blank"
            className="flex items-start sm:items-center gap-3 sm:gap-4 group p-3 sm:p-0 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="p-3 sm:p-4 rounded-2xl bg-electric-blue/5 border border-electric-blue group-hover:bg-black group-hover:text-white transition-all flex-shrink-0">
              <Linkedin
                size={24}
                className="electric-blue group-hover:text-white w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase opacity-50 tracking-widest">
                LinkedIn
              </p>
              <p className="font-medium text-sm truncate hover:text-clip">
                linkedin.com/in/rohan-singh-aswal...
              </p>
            </div>
          </a>

          <a
            href="https://github.com/ronbell1"
            target="_blank"
            className="flex items-start sm:items-center gap-3 sm:gap-4 group p-3 sm:p-0 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="p-3 sm:p-4 rounded-2xl bg-electric-blue/5 border border-electric-blue group-hover:bg-black group-hover:text-white transition-all flex-shrink-0">
              <Github
                size={24}
                className="electric-blue group-hover:text-white w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase opacity-50 tracking-widest">
                GitHub
              </p>
              <p className="font-medium text-sm">github.com/ronbell1</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
