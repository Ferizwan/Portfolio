import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FileText, Calendar, Sparkles, MapPin, Mail, Github, Linkedin, Phone } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Cyan Glowing Radial Backdrop Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] lg:w-[750px] h-[350px] sm:h-[550px] lg:h-[750px] bg-[#00C8FF]/15 light:bg-sky-500/10 rounded-full blur-[100px] pointer-events-none z-0" />
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] light:opacity-[0.05] pointer-events-none z-0" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Top Status & Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12"
        >
        </motion.div>

        {/* Central Display Title & Portrait Stacking Container */}
        <div className="relative my-4 flex items-center justify-center min-h-[320px] sm:min-h-[440px] lg:min-h-[520px]">
          {/* Giant Background Typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.12, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden"
          >
            <h1 className="font-display font-black text-[12vw] leading-none uppercase tracking-tighter text-center whitespace-nowrap text-white light:text-slate-900 drop-shadow-2xl">
              FERIZWAN MALIK W
            </h1>
          </motion.div>

          {/* Central Portrait Image Frame */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-64 sm:w-80 lg:w-96 aspect-[3/4] flex items-center justify-center"
          >
            {/* Glowing Backdrop Aura Behind Image
            <div className="absolute inset-2 bg-gradient-to-b from-[#00C8FF]/30 to-transparent rounded-3xl blur-2xl" />
             */}
            {/* Image Card Frame */}
            {/* <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[#27272A] light:border-slate-300 bg-gradient-to-b from-zinc-900 to-[#0A0A0B] light:from-slate-100 light:to-white shadow-2xl group transition-all duration-500 hover:border-[#00C8FF]/60 hover:shadow-[0_0_30px_rgba(0,200,255,0.25)]"> */}
              {/* USER PHOTO: Ganti URL src di bawah ini dengan URL foto Anda atau file foto lokal Anda */}
              <img
                src="/images/FotoAlmamater.png"
                alt="Ferizwan Malik"
              />
              {/* Overlay Badge */}
            {/* </div> */}
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="relative z-10 flex justify-center mt-8"
      >
        <a
          href="#about"
          className="p-2 rounded-full border border-zinc-800 light:border-slate-300 bg-zinc-900/60 light:bg-white/80 text-zinc-400 hover:text-[#00C8FF] transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};
