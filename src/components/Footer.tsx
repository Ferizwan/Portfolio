import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, FileText } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#27272A] light:border-slate-200 bg-[#0A0A0B] light:bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 text-zinc-400 light:text-slate-600 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Side Copyright */}
        <div className="flex items-center gap-2 text-xs font-mono">
          {/* <div className="w-6 h-6 rounded-full bg-[#00C8FF] text-black font-bold flex items-center justify-center text-[10px]">
            FM
          </div> */}
          <span>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</span>
        </div>

        {/* Right Side Social & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full bg-zinc-900 light:bg-white border border-zinc-800 light:border-slate-200 text-zinc-300 light:text-slate-700 hover:text-[#00C8FF] hover:border-[#00C8FF] transition-all"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full bg-zinc-900 light:bg-white border border-zinc-800 light:border-slate-200 text-zinc-300 light:text-slate-700 hover:text-[#00C8FF] hover:border-[#00C8FF] transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${profileData.email}`}
            aria-label="Email"
            className="p-2.5 rounded-full bg-zinc-900 light:bg-white border border-zinc-800 light:border-slate-200 text-zinc-300 light:text-slate-700 hover:text-[#00C8FF] hover:border-[#00C8FF] transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            aria-label="Resume"
            className="p-2.5 rounded-full bg-zinc-900 light:bg-white border border-zinc-800 light:border-slate-200 text-zinc-300 light:text-slate-700 hover:text-[#00C8FF] hover:border-[#00C8FF] transition-all cursor-pointer"
            title="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-full bg-[#00C8FF] text-black hover:bg-[#00B0E0] transition-colors cursor-pointer ml-2"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
