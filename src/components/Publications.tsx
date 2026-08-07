import React from 'react';
import { motion } from 'motion/react';
import { FileCheck2, Globe, BookOpen, ExternalLink, Quote } from 'lucide-react';
import { publicationData } from '../data/portfolioData';

export const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Publications Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 bg-[#121214] light:bg-white border border-[#27272A] light:border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-[#00C8FF]/10 text-[#00C8FF] border border-[#00C8FF]/20">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#00C8FF]">Scientific Paper</span>
                <h3 className="text-xl font-bold text-white light:text-slate-900">Academic Publications</h3>
              </div>
            </div>

            {publicationData.map((pub) => (
              <div
                key={pub.id}
                className="p-5 rounded-2xl bg-zinc-900/60 light:bg-slate-50 border border-zinc-800 light:border-slate-200 space-y-3"
              >
                <div className="flex items-start gap-2">
                  <Quote className="w-5 h-5 text-[#00C8FF] shrink-0 mt-1" />
                  <h4 className="text-base sm:text-lg font-bold text-white light:text-slate-900 leading-snug">
                    "{pub.title}"
                  </h4>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#00C8FF]">
                  <span>{pub.journal}</span>
                  <span>•</span>
                  <span>{pub.vol}</span>
                  <span>•</span>
                  <span>{pub.date}</span>
                </div>

                {pub.abstract && (
                  <p className="text-xs sm:text-sm text-zinc-400 light:text-slate-600 leading-relaxed pt-2 border-t border-zinc-800/80 light:border-slate-200">
                    {pub.abstract}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Languages Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4 bg-[#121214] light:bg-white border border-[#27272A] light:border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-[#00C8FF]/10 text-[#00C8FF] border border-[#00C8FF]/20">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#00C8FF]">Global Communication</span>
                <h3 className="text-xl font-bold text-white light:text-slate-900">Languages</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-zinc-900/80 light:bg-slate-50 border border-zinc-800 light:border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white light:text-slate-900">Indonesian</div>
                  <div className="text-xs text-zinc-400 light:text-slate-500 font-mono">Native / Full Professional</div>
                </div>
                <div className="px-2.5 py-1 rounded bg-[#00C8FF]/20 text-[#00C8FF] text-xs font-mono font-bold">
                  Native
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 light:bg-slate-50 border border-zinc-800 light:border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white light:text-slate-900">English</div>
                  <div className="text-xs text-zinc-400 light:text-slate-500 font-mono">Professional Working Proficiency</div>
                </div>
                <div className="px-2.5 py-1 rounded bg-[#00C8FF]/20 text-[#00C8FF] text-xs font-mono font-bold">
                  Working
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
