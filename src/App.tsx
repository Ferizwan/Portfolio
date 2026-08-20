import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Project } from './types';

// Lazy loaded components for optimal loading performance per requirements
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const ProjectModal = lazy(() => import('./components/ProjectModal').then(m => ({ default: m.ProjectModal })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Publications = lazy(() => import('./components/Publications').then(m => ({ default: m.Publications })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const ResumeModal = lazy(() => import('./components/ResumeModal').then(m => ({ default: m.ResumeModal })));

// Loading Skeleton Fallback
const ComponentSkeleton: React.FC = () => (
  <div className="w-full max-w-7xl mx-auto py-16 px-4">
    <div className="w-full h-64 bg-[#121214]/60 light:bg-slate-100/80 rounded-3xl border border-[#27272A] light:border-slate-200 animate-pulse flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#00C8FF] border-t-transparent animate-spin" />
    </div>
  </div>
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Bottom of page -> contact section
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // Top of page -> home section
      if (scrollPosition < 120) {
        setActiveSection('home');
        return;
      }

      const navbarOffset = 180;
      let currentSection = 'home';

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navbarOffset && rect.bottom > navbarOffset) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Re-check as lazy components mount
    const timer1 = setTimeout(handleScroll, 300);
    const timer2 = setTimeout(handleScroll, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0A0A0B] light:bg-[#F8FAFC] text-white light:text-slate-900 transition-colors duration-300 relative selection:bg-[#00C8FF]/30 selection:text-[#00C8FF]">
        {/* Floating Navbar */}
        <Navbar
          activeSection={activeSection}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* Main Content Sections with Framer Motion Page Transition Wrapper */}
        <main className="relative">
          <Hero onOpenResume={() => setResumeModalOpen(true)} />

          <Suspense fallback={<ComponentSkeleton />}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <About />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <Experience />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <Projects onSelectProject={(p) => setSelectedProject(p)} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <Skills /> 
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <Publications />
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <Contact />
            </motion.div>
          </Suspense>
        </main>

        {/* Footer */}
        <Suspense fallback={null}>
          <Footer onOpenResume={() => setResumeModalOpen(true)} />
        </Suspense>

        {/* Interactive Modals */}
        <Suspense fallback={null}>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}

          {resumeModalOpen && (
            <ResumeModal
              isOpen={resumeModalOpen}
              onClose={() => setResumeModalOpen(false)}
            />
          )}
        </Suspense>
      </div>
    </ThemeProvider>
  );
}
