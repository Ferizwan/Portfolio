import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, ArrowUpRight, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(2);

  const categories = ['All', 'Web Platforms', 'Mobile Applications', 'AI & ML', 'Data Science & Analytics'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.includes(activeCategory));

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(2); // Reset to initial 2 projects when changing category
  };

  const handleToggleLoadMore = () => {
    if (hasMore) {
      setVisibleCount(filteredProjects.length);
    } else {
      setVisibleCount(2);
    }
  };

  return (
    <section id="projects" className="pt-0 pb-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono border border-[#00C8FF]/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white light:text-slate-900">
            FEATURED <span className="text-[#00C8FF]">PROJECTS</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#121214] light:bg-white border border-[#27272A] light:border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#00C8FF] text-black font-bold shadow-md'
                  : 'text-zinc-400 light:text-slate-600 hover:text-white light:hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Interactive Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {displayedProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => onSelectProject(project)}
              className="group bg-[#121214] light:bg-white border border-[#27272A] light:border-slate-200 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:border-[#00C8FF] hover:shadow-[0_0_30px_rgba(0,200,255,0.2)] cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Project Image & Badge Overlay */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] light:from-white via-[#121214]/40 to-transparent opacity-80" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#00C8FF] text-[11px] font-mono border border-[#00C8FF]/30">
                    <Sparkles className="w-3 h-3" />
                    <span>{project.category}</span>
                  </div>

                  {/* Top Right Action Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white group-hover:bg-[#00C8FF] group-hover:text-black flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="text-xs font-mono text-zinc-400 light:text-slate-500">
                    {project.date}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 group-hover:text-[#00C8FF] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 light:text-slate-600 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Tech Stack Pills Footer */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 flex flex-wrap items-center gap-2 border-t border-zinc-800/60 light:border-slate-100">
                {project.technologies.slice(0, 4).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-zinc-900/90 light:bg-slate-100 border border-zinc-800 light:border-slate-200 text-[11px] font-mono text-zinc-300 light:text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[11px] font-mono text-[#00C8FF]">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More / Show Less Button */}
      {filteredProjects.length > 2 && (
        <div className="mt-12 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggleLoadMore}
            className="px-8 py-3.5 rounded-full bg-[#121214] light:bg-white border border-[#27272A] light:border-slate-300 text-white light:text-slate-900 font-bold text-xs sm:text-sm font-mono tracking-wider hover:border-[#00C8FF] hover:text-[#00C8FF] hover:shadow-[0_0_25px_rgba(0,200,255,0.25)] transition-all flex items-center gap-2.5 cursor-pointer shadow-lg"
          >
            <span>{hasMore ? `LOAD MORE PROJECTS (${filteredProjects.length - visibleCount} REMAINING)` : 'SHOW LESS PROJECTS'}</span>
            {hasMore ? <ChevronDown className="w-4 h-4 text-[#00C8FF]" /> : <ChevronUp className="w-4 h-4 text-[#00C8FF]" />}
          </motion.button>
        </div>
      )}
    </section>
  );
};
