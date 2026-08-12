import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, CheckCircle, ArrowLeft, Wrench } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Notify window that project modal is open
    window.dispatchEvent(new CustomEvent('projectModalToggle', { detail: true }));
    document.body.style.overflow = 'hidden';

    return () => {
      // Notify window that project modal is closed
      window.dispatchEvent(new CustomEvent('projectModalToggle', { detail: false }));
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0908]/95 backdrop-blur-2xl z-0"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-[#14100F] rounded-[32px] border border-[rgba(245,241,236,0.08)] shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col"
        >
          {/* Top Bar with Back Button */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-[rgba(245,241,236,0.08)] bg-[#0A0908]/90 backdrop-blur-md sticky top-0 z-30">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1514] hover:bg-[#E2E4E9] text-[#F5F1EC] hover:text-[#0A0908] border border-[rgba(245,241,236,0.1)] text-xs sm:text-sm font-bold transition-all duration-300 shadow-soft"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>

            <div className="text-center hidden sm:block">
              <span className="text-[10px] font-mono text-[#E2E4E9] font-semibold uppercase tracking-wider block">
                {project.category}
              </span>
              <h3 className="font-heading font-extrabold text-base text-[#F5F1EC]">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[#1A1514] hover:bg-[#383230] text-[#9A9490] hover:text-[#F5F1EC] border border-[rgba(245,241,236,0.08)] flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            
            {/* Main Interactive Gallery Viewer */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0A0908] border border-[rgba(245,241,236,0.08)] group aspect-[16/9] sm:aspect-[21/9] flex items-center justify-center">
              <img
                src={project.gallery[activeImageIndex]}
                alt={`${project.title} slide ${activeImageIndex + 1}`}
                className="w-full h-full object-contain max-h-[520px]"
              />

              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#14100F]/80 text-[#F5F1EC] hover:bg-[#E2E4E9] hover:text-[#0A0908] border border-[rgba(245,241,236,0.08)] flex items-center justify-center transition-all focus:outline-none shadow-lg opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#14100F]/80 text-[#F5F1EC] hover:bg-[#E2E4E9] hover:text-[#0A0908] border border-[rgba(245,241,236,0.08)] flex items-center justify-center transition-all focus:outline-none shadow-lg opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 right-4 bg-[#14100F]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#E2E4E9] border border-[rgba(245,241,236,0.08)]">
                {activeImageIndex + 1} / {project.gallery.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {project.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImageIndex === idx
                        ? 'border-[#E2E4E9] opacity-100 scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-[rgba(245,241,236,0.08)]">
              <div className="md:col-span-8 space-y-4">
                <h4 className="font-heading font-bold text-lg text-[#F5F1EC]">
                  Project Overview
                </h4>
                <p className="text-sm text-[#9A9490] leading-relaxed">
                  {project.longDescription || project.description}
                </p>

                {project.highlights && (
                  <div className="pt-2">
                    <span className="text-xs font-mono text-[#F5F1EC] uppercase block mb-3 font-semibold">Key Highlights</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#9A9490]">
                          <CheckCircle className="w-4 h-4 text-[#E2E4E9]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="md:col-span-4 space-y-6 bg-[#0A0908] p-6 rounded-2xl border border-[rgba(245,241,236,0.08)] h-fit">
                <div>
                  <span className="text-xs font-mono text-[#9A9490] uppercase block mb-2 font-semibold">Software &amp; Tools</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-md bg-[#1A1514] text-xs font-mono text-[#E2E4E9] border border-[rgba(245,241,236,0.08)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#9A9490] uppercase block mb-1 font-semibold">Client / Market</span>
                  <span className="text-sm font-semibold text-[#F5F1EC]">{project.client || "Commercial Client"}</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
