import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  User,
  Sparkles,
  CheckCircle,
  Code2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  /*
   * Support both:
   * project.images = multiple images
   * project.image  = legacy single image
   */
  const images = useMemo(() => {
    if (!project) return [];

    if (project.images && project.images.length > 0) {
      return project.images;
    }

    return [project.image];
  }, [project]);

  const totalImages = images.length;

  /*
   * Reset carousel whenever another project is opened.
   */
  useEffect(() => {
    setCurrentImage(0);
  }, [project]);

  /*
   * Prevent background scrolling while modal is open.
   */
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [project]);

  /*
   * Navigate to previous image.
   */
  const handlePrevious = () => {
    setCurrentImage((prev) =>
      prev === 0 ? totalImages - 1 : prev - 1,
    );
  };

  /*
   * Navigate to next image.
   */
  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === totalImages - 1 ? 0 : prev + 1,
    );
  };

  /*
   * Keyboard navigation.
   */
  useEffect(() => {
    if (!project || totalImages <= 1) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      }

      if (event.key === "ArrowRight") {
        handleNext();
      }

      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, totalImages]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-[#27272A] light:border-slate-200 bg-[#121214] light:bg-white shadow-2xl"
        >
          <div className="relative flex min-h-[260px] w-full items-center justify-center overflow-hidden bg-zinc-950 sm:min-h-[360px]">
            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentImage]}
                src={images[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="
                  block
                  max-h-[55vh]
                  w-full
                  object-contain
                  object-center
                "
              />
            </AnimatePresence>

            {/* Subtle bottom gradient */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-32
                bg-gradient-to-t
                from-[#121214]
                via-[#121214]/40
                to-transparent
              "
            />

            {/* Previous Button */}
            {totalImages > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous project image"
                className="
                  absolute
                  left-3
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/60
                  text-white
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:scale-110
                  hover:bg-[#00C8FF]
                  hover:text-black
                  sm:left-5
                "
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            {/* Next Button */}
            {totalImages > 1 && (
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project image"
                className="
                  absolute
                  right-3
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/60
                  text-white
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:scale-110
                  hover:bg-[#00C8FF]
                  hover:text-black
                  sm:right-5
                "
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}

            {/* Image Counter */}
            {totalImages > 1 && (
              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  border
                  border-white/10
                  bg-black/70
                  px-3
                  py-1.5
                  font-mono
                  text-[11px]
                  font-medium
                  text-white
                  backdrop-blur-md
                "
              >
                {currentImage + 1} / {totalImages}
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 light:bg-white/80 text-white light:text-slate-900 hover:bg-[#00C8FF] hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Pill */}
            <div className="absolute bottom-4 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C8FF] text-black font-bold font-mono text-xs shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white light:text-slate-900">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-[#00C8FF] mt-1">{project.subtitle}</p>
            </div>

            {/* Role & Date Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 light:text-slate-600 border-y border-zinc-800 light:border-slate-200 py-3">
              {/* <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#00C8FF]" />
                <span>Role: {project.role}</span>
              </div> */}
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#00C8FF]" />
                <span>Date: {project.date}</span>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-zinc-300 light:text-slate-700">
                Project Overview
              </h4>
              {project.description.map((desc, idx) => (
                <p key={idx} className="text-sm text-zinc-300 light:text-slate-600 leading-relaxed">
                  {desc}
                </p>
              ))}
            </div>

            {/* Highlights */}
            {project.highlights && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-zinc-300 light:text-slate-700">
                  Key Deliverables & Innovations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-zinc-900/80 light:bg-slate-50 border border-zinc-800 light:border-slate-200 text-xs text-zinc-300 light:text-slate-700 flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-[#00C8FF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-zinc-300 light:text-slate-700 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#00C8FF]" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-zinc-900 light:bg-slate-100 border border-zinc-800 light:border-slate-200 text-xs font-mono text-zinc-200 light:text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-zinc-800 light:border-slate-200 bg-zinc-950/60 light:bg-slate-50 flex flex-wrap items-center justify-center">
            {/* <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-zinc-700 light:border-slate-300 text-xs font-semibold text-zinc-300 light:text-slate-700 hover:text-white cursor-pointer"
            >
              Close Window
            </button> */}

            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-zinc-800 light:bg-slate-200 text-xs font-semibold text-white light:text-slate-800 flex items-center gap-2 hover:bg-zinc-700 transition-colors"
              >
                {/* <Github className="w-4 h-4" /> */}
                <span>View Source</span>
              </a>

              <a
                href="#contact"
                onClick={() => {
                  onClose();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl bg-[#00C8FF] text-black font-bold text-xs flex items-center gap-2 hover:bg-[#00B0E0] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Inquire Project</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
