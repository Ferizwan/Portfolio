import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Globe2, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { profileData, educationData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="pt-0 pb-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono border border-[#00C8FF]/20">
          <BookOpen className="w-3.5 h-3.5" />
          <span>ACADEMIC PROFILE & BACKGROUND</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white light:text-slate-900">
          ABOUT <span className="text-[#00C8FF]">ME</span>
        </h2>
      </div>

      {/* Asymmetric 2-Column Split Container */}

        {/* Left Column: Academic Profile & Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="bg-[#121214] light:bg-white border border-[#27272A] light:border-slate-200 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl transition-all duration-300 hover:border-[#00C8FF]/50 hover:shadow-[0_0_25px_rgba(0,200,255,0.15)]">
            {/* Ambient Corner Accent */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#00C8FF]/10 rounded-full blur-xl pointer-events-none " />

            <div className="flex items-center gap-3 mb-2">
              <div>
                <h3 className="text-lg font-bold text-white light:text-slate-900">Hello, I'm Ferizwan Malik Wichaksana</h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 light:text-slate-700 leading-relaxed mb-6 text-justify">
              {profileData.bio}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white light:text-slate-900">Education</h3>
              </div>
            </div>

            {/* Education Timeline Cards */}
            <div className="space-y-4">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-2xl bg-zinc-900/80 light:bg-slate-50 border border-zinc-800 light:border-slate-200 hover:border-[#00C8FF]/40 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base font-bold text-white light:text-slate-900">{edu.institution}</h4>
                      <p className="text-xs text-zinc-400 light:text-slate-600 font-mono mt-0.5">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-zinc-800 light:bg-slate-200 text-zinc-300 light:text-slate-700 text-xs font-mono">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {edu.details && (
                    <ul className="mt-3 space-y-1.5 border-t border-zinc-800/60 light:border-slate-200 pt-3">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-zinc-400 light:text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8FF] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Key Passions & Technical Strengths */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
        </motion.div>
    </section>
  );
};
