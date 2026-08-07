import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, CheckCircle, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono border border-[#00C8FF]/20">
          <Briefcase className="w-3.5 h-3.5" />
          <span>EXPERIENCE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white light:text-slate-900">
          INTERNSHIP & <span className="text-[#00C8FF]">EXPERIENCE</span>
        </h2>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-zinc-800 light:border-slate-300 space-y-12">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Timeline Node Icon */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-8 h-8 rounded-full bg-[#121214] light:bg-white border-2 border-[#00C8FF] flex items-center justify-center text-[#00C8FF] shadow-[0_0_15px_rgba(0,200,255,0.4)] group-hover:scale-110 transition-transform">
              <Award className="w-4 h-4" />
            </div>

            {/* Experience Card */}
            <div className="bg-[#121214] light:bg-white border border-[#27272A] light:border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 group-hover:border-[#00C8FF]/50 group-hover:shadow-[0_0_25px_rgba(0,200,255,0.15)]">
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-zinc-800/80 light:border-slate-200">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#00C8FF]/10 text-[#00C8FF] text-[11px] font-mono font-semibold mb-2">
                    {exp.type}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900">
                    {exp.role}
                  </h3>
                  <p className="text-base font-medium text-zinc-300 light:text-slate-700 mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1 text-xs font-mono text-zinc-400 light:text-slate-500">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 light:bg-slate-100 border border-zinc-800 light:border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-[#00C8FF]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400 light:text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#00C8FF]" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3 mb-6">
                {exp.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-sm text-zinc-300 light:text-slate-600 flex items-start gap-3 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-xl bg-zinc-900 light:bg-slate-100 border border-zinc-800 light:border-slate-200 text-xs font-mono text-zinc-300 light:text-slate-700 hover:border-[#00C8FF]/40 transition-colors"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
