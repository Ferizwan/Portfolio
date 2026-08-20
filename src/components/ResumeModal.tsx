import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Mail, Phone, MapPin, GraduationCap, Briefcase, Code, Award, FileText } from 'lucide-react';
import { profileData, educationData, experienceData, projectsData, skillCategories, publicationData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#121214] light:bg-white border border-[#27272A] light:border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header Bar */}
          <div className="p-5 border-b border-zinc-800 light:border-slate-200 bg-zinc-950/80 light:bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#00C8FF]" />
              <h3 className="text-base font-bold text-white light:text-slate-900 font-mono">
                Curriculum Vitae — {profileData.name}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/CV Ferizwan Malik Wichaksana.pdf"
                download="CV_Ferizwan Malik Wichaksana.pdf"
                className="px-3.5 py-1.5 rounded-xl bg-[#00C8FF] text-black font-bold text-xs flex items-center gap-1.5 hover:bg-[#00B0E0] transition-colors cursor-pointer no-underline"
              >
                  <Download className="w-3.5 h-3.5" />
                <span>Print / Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-zinc-800 light:bg-slate-200 text-zinc-300 light:text-slate-700 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Content Container (Printable Area) */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0A0A0B] light:bg-white text-white light:text-slate-900 font-sans">
            {/* Header / Contact Info */}
            <div className="border-b border-zinc-800 light:border-slate-200 pb-6 space-y-2">
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-white light:text-slate-900">
                {profileData.name}
              </h1>
              <p className="text-sm font-mono text-[#00C8FF]">{profileData.title}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 light:text-slate-600 pt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00C8FF]" />
                  {profileData.location}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#00C8FF]" />
                  {profileData.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#00C8FF]" />
                  {profileData.email}
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-[#00C8FF] border-b border-zinc-800 light:border-slate-200 pb-1">
                PROFILE SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 light:text-slate-700 leading-relaxed">
                {profileData.bio}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-[#00C8FF] border-b border-zinc-800 light:border-slate-200 pb-1">
                EDUCATION
              </h2>
              {educationData.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between font-bold text-sm">
                    <span>{edu.institution} — {edu.degree}</span>
                    <span className="text-xs font-mono text-zinc-400 light:text-slate-500">{edu.period}</span>
                  </div>
                  {edu.gpa && <p className="text-xs font-mono text-[#00C8FF]">Cumulative GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-[#00C8FF] border-b border-zinc-800 light:border-slate-200 pb-1">
                EXPERIENCE & PROGRAMS
              </h2>
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between font-bold text-sm">
                    <span>{exp.company} — <span className="text-[#00C8FF]">{exp.role}</span></span>
                    <span className="text-xs font-mono text-zinc-400 light:text-slate-500">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-zinc-300 light:text-slate-700 space-y-1">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Selected Key Projects */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-[#00C8FF] border-b border-zinc-800 light:border-slate-200 pb-1">
                KEY PROJECTS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectsData.map((p) => (
                  <div key={p.id} className="p-3 rounded-xl bg-zinc-900/60 light:bg-slate-50 border border-zinc-800 light:border-slate-200 space-y-1">
                    <div className="font-bold text-xs text-white light:text-slate-900">{p.title}</div>
                    <div className="text-[11px] text-[#00C8FF] font-mono">{p.role} ({p.date})</div>
                    <div className="text-[11px] text-zinc-400 light:text-slate-600 line-clamp-2">{p.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-[#00C8FF] border-b border-zinc-800 light:border-slate-200 pb-1">
                TECHNICAL SKILLS & LANGUAGES
              </h2>
              <div className="text-xs text-zinc-300 light:text-slate-700 space-y-1">
                <p><strong>Programming:</strong> JavaScript, PHP, Python, R, SQL</p>
                <p><strong>Frameworks:</strong> React.js, Next.js, Laravel, Tailwind CSS, Bootstrap, Flutter</p>
                <p><strong>Tools & Analytics:</strong> Git, GitHub, VS Code, Android Studio, Figma, Power BI, TensorFlow, OpenCV, MediaPipe</p>
                <p><strong>Languages:</strong> Indonesian (Native), English (Professional Working)</p>
              </div>
            </div>

            {/* Publication */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-[#00C8FF] border-b border-zinc-800 light:border-slate-200 pb-1">
                PUBLICATIONS
              </h2>
              {publicationData.map((pub) => (
                <div key={pub.id} className="text-xs text-zinc-300 light:text-slate-700">
                  "{pub.title}" — <em>{pub.journal}</em>, {pub.vol} ({pub.date}).
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
