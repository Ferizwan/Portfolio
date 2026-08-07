import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScrollY / totalHeight) * 100)));
      }

      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-[#00C8FF] via-sky-400 to-blue-600 shadow-[0_0_10px_#00C8FF]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center items-center pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 28,
            mass: 0.8,
          }}
          className={`pointer-events-auto w-full max-w-5xl sm:max-w-[1216px] rounded-full py-3.5 px-5 sm:px-7 transition-all duration-300 flex items-center justify-between border ${
            scrolled
              ? 'bg-[#0A0A0B]/90 light:bg-white/90 backdrop-blur-xl border-[#00C8FF]/40 light:border-sky-400/50 shadow-[0_10px_30px_rgba(0,200,255,0.18)]'
              : 'bg-[#121214]/60 light:bg-white/75 backdrop-blur-md border-[#27272A]/70 light:border-slate-200/80 shadow-md shadow-black/10'
          }`}
        >
          {/* Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white light:text-slate-900 leading-none">
                FERIZWAN <span className="font-light italic text-[#00C8FF]">MALIK W</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? 'text-[#00C8FF] light:text-sky-600 font-semibold'
                      : 'text-zinc-400 light:text-slate-600 hover:text-white light:hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-indicator"
                      className="absolute inset-0 bg-[#00C8FF]/15 light:bg-sky-100/90 rounded-full border border-[#00C8FF]/40 light:border-sky-300"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Actions: Animated Theme Toggle, CV & Contact CTA */}
          <div className="flex items-center gap-2">
            {/* Animated Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full bg-zinc-800/90 light:bg-slate-100 text-zinc-200 light:text-slate-800 hover:text-[#00C8FF] hover:bg-zinc-700/90 light:hover:bg-slate-200 transition-all border border-zinc-700/60 light:border-slate-300 shadow-sm cursor-pointer relative overflow-hidden"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-indigo-600" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* View Resume Pill */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenResume}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-zinc-700/80 light:border-slate-300 bg-zinc-900/90 light:bg-white text-zinc-200 light:text-slate-800 hover:border-[#00C8FF] hover:text-[#00C8FF] transition-all cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#00C8FF]" />
              <span>CV</span>
            </motion.button>

            {/* Get in Touch CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-full bg-[#00C8FF] text-black hover:bg-[#00B0E0] hover:shadow-[0_0_20px_rgba(0,200,255,0.5)] transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact</span>
            </motion.a>

            {/* Mobile Menu Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden p-2 rounded-full bg-zinc-800/90 light:bg-slate-100 text-zinc-200 light:text-slate-800 border border-zinc-700 light:border-slate-300 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </motion.nav>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto absolute top-20 inset-x-4 bg-[#121214] light:bg-white border border-[#27272A] light:border-slate-200 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 md:hidden z-50 backdrop-blur-2xl"
            >
              <div className="flex justify-between items-center pb-3 border-b border-zinc-800 light:border-slate-200">
                <span className="text-xs font-mono text-[#00C8FF] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Navigation
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-400 hover:text-white light:hover:text-slate-900 p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1.5 py-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-3 text-sm font-medium rounded-2xl transition-colors ${
                        isActive
                          ? 'bg-[#00C8FF]/15 text-[#00C8FF] light:bg-sky-100 light:text-sky-700 font-bold'
                          : 'text-zinc-200 light:text-slate-700 hover:bg-zinc-800/80 light:hover:bg-slate-100'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>

              <div className="flex flex-col gap-2.5 pt-3 border-t border-zinc-800 light:border-slate-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold rounded-2xl border border-zinc-700 light:border-slate-300 text-zinc-200 light:text-slate-800 bg-zinc-900 light:bg-slate-50 hover:border-[#00C8FF]"
                >
                  <FileText className="w-4 h-4 text-[#00C8FF]" />
                  <span>View Full Curriculum Vitae</span>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold rounded-2xl bg-[#00C8FF] text-black"
                >
                  <Send className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
