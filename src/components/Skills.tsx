import React from 'react';
import { motion } from 'motion/react';
import {
  Cpu,
  Code,
  Server,
  Database,
  Wrench,
  Palette,
  Terminal,
  Layers,
  Globe,
  Box,
  Layout,
  HardDrive,
  GitBranch,
  Smartphone,
  Figma as FigmaIcon,
  Activity,
  Send,
  MapPin,
  Video,
  Film,
  PenTool,
  PieChart,
  BarChart2,
  Code2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

type SkillItem = {
  name: string;
  icon?: string;
};

const skillImageModules = import.meta.glob('../data/images/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const skillImageByFileName = Object.fromEntries(
  Object.entries(skillImageModules).map(([path, url]) => [
    path.split('/').pop() ?? path,
    url,
  ])
);

// Helper icon mapper for skill logos
const getSkillIcon = (skill: SkillItem) => {
  if (skill.icon) {
    const customImage =
      skillImageByFileName[skill.icon] ||
      skillImageByFileName[skill.icon.replace(/^.*\//, '')];

    if (customImage) {
      return (
        <img
          src={customImage}
          alt={skill.name}
          className="w-5 h-5 object-contain"
        />
      );
    }
  }

  const iconMap: Record<string, React.ReactNode> = {
    'JavaScript': <Code2 className="w-5 h-5 text-amber-400" />,
    'PHP': <Server className="w-5 h-5 text-indigo-400" />,
    'Python': <Terminal className="w-5 h-5 text-emerald-400" />,
    'R': <BarChart2 className="w-5 h-5 text-sky-400" />,
    'SQL': <Database className="w-5 h-5 text-[#00C8FF]" />,
    'React.js': <Layers className="w-5 h-5 text-sky-400" />,
    'Next.js': <Globe className="w-5 h-5 text-zinc-100 light:text-slate-900" />,
    'Laravel': <Box className="w-5 h-5 text-red-400" />,
    'Tailwind CSS': <Palette className="w-5 h-5 text-teal-400" />,
    'Bootstrap': <Layout className="w-5 h-5 text-purple-400" />,
    'MySQL': <Database className="w-5 h-5 text-blue-400" />,
    'MongoDB': <HardDrive className="w-5 h-5 text-emerald-500" />,
    'Git & GitHub': <GitBranch className="w-5 h-5 text-orange-400" />,
    'VS Code': <Code className="w-5 h-5 text-blue-500" />,
    'Android Studio': <Smartphone className="w-5 h-5 text-green-400" />,
    'Figma': <FigmaIcon className="w-5 h-5 text-pink-400" />,
    'Google Colab': <Cpu className="w-5 h-5 text-amber-500" />,
    'RStudio': <Activity className="w-5 h-5 text-blue-400" />,
    'Postman': <Send className="w-5 h-5 text-orange-500" />,
    'QGIS': <MapPin className="w-5 h-5 text-emerald-400" />,
    'Adobe Premiere Pro': <Video className="w-5 h-5 text-purple-500" />,
    'Adobe After Effects': <Film className="w-5 h-5 text-indigo-500" />,
    'Adobe Illustrator': <PenTool className="w-5 h-5 text-amber-600" />,
    'Power BI': <PieChart className="w-5 h-5 text-yellow-400" />,
  };

  return iconMap[skill.name] || <Code className="w-5 h-5 text-[#00C8FF]" />;
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="pt-24 pb-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono border border-[#00C8FF]/20">
          <Cpu className="w-3.5 h-3.5" />
          <span>TECHNICAL TOOLKIT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white light:text-slate-900">
          SKILLS & <span className="text-[#00C8FF]">TECHNOLOGIES</span>
        </h2>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="bg-[#121214] light:bg-white border border-[#27272A] light:border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-[#00C8FF]/40 transition-all duration-300 group"
          >
            <div>
              {/* Category Title Header */}
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-zinc-800 light:border-slate-200">
                <div className="w-9 h-9 rounded-2xl bg-[#00C8FF]/10 border border-[#00C8FF]/30 flex items-center justify-center text-[#00C8FF] group-hover:scale-110 transition-transform">
                  {catIdx === 0 && <Terminal className="w-4 h-4" />}
                  {catIdx === 1 && <Code className="w-4 h-4" />}
                  {catIdx === 2 && <Database className="w-4 h-4" />}
                  {catIdx === 3 && <Wrench className="w-4 h-4" />}
                  {catIdx === 4 && <Palette className="w-4 h-4" />}
                </div>
                <h3 className="text-lg font-bold text-white light:text-slate-900">
                  {category.name}
                </h3>
              </div>

              {/* Skills Interactive Logo Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-900/80 light:bg-slate-50 border border-zinc-800/80 light:border-slate-200/90 hover:border-[#00C8FF]/70 light:hover:border-sky-400 hover:bg-[#00C8FF]/10 light:hover:bg-sky-50 hover:shadow-[0_0_18px_rgba(0,200,255,0.2)] transition-all cursor-pointer group/card"
                  >
                    <div className="w-9 h-9 rounded-xl bg-black/40 light:bg-white border border-zinc-800 light:border-slate-200 flex items-center justify-center shrink-0 group-hover/card:scale-110 transition-transform shadow-inner">
                      {getSkillIcon(skill)}
                    </div>
                    <span className="text-xs font-semibold text-zinc-200 light:text-slate-800 group-hover/card:text-white light:group-hover/card:text-slate-900 truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
