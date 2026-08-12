import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';
import { Eye, ExternalLink, Globe } from 'lucide-react';

const categories = ["All", "Outdoor Advertising", "Print Design", "Corporate Identity", "Packaging Design", "Stationery Design", "Typography & Layouts"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-transparent bg-noise overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold tracking-widest text-[#E2E4E9] uppercase block mb-3"
          >
            Real Portfolio Showcase
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F1EC] tracking-tight"
          >
            Featured Project Work
          </motion.h2>
          <p className="mt-4 text-base sm:text-lg text-[#9A9490]">
            Explore authentic commercial works across billboard graphics, catalog layouts, business cards, cash memos, and retail packaging.
          </p>
          <div className="w-16 h-1 bg-[#383230] mx-auto mt-4 rounded-full shadow-glow-gray" />
        </div>

        {/* Category Filters with Smooth Spring Indicator */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#E2E4E9] text-[#0A0908] shadow-glow-teal font-bold'
                  : 'bg-[#14100F] text-[#9A9490] hover:text-[#F5F1EC] border border-[rgba(245,241,236,0.08)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Bento Grid Layout */}
        <motion.div layout className="grid grid-cols-12 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className={`${project.gridSpan} group relative rounded-[28px] overflow-hidden bg-[#14100F] text-[#F5F1EC] cursor-pointer shadow-soft hover:shadow-2xl border border-[rgba(245,241,236,0.08)] hover:border-[#E2E4E9]/40 transition-all duration-500 flex flex-col justify-end min-h-[380px] sm:min-h-[440px]`}
              >
                {/* Real Project Cover Image */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0908]">
                  <motion.img
                    src={project.coverImage}
                    alt={project.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/60 to-transparent z-10" />
                </div>

                {/* Top Badges */}
                <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center">
                  <span className="text-xs font-mono font-semibold text-[#E2E4E9] bg-[#14100F]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[rgba(245,241,236,0.08)]">
                    {project.category}
                  </span>

                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    className="w-10 h-10 rounded-full bg-[#14100F]/80 backdrop-blur-md border border-[rgba(245,241,236,0.08)] flex items-center justify-center text-[#F5F1EC] group-hover:bg-[#E2E4E9] group-hover:text-[#0A0908] transition-all duration-300 shadow-glow-gray"
                  >
                    <Eye className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Bottom Card Content */}
                <div className="relative z-20 p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tools.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-[#E2E4E9] bg-[#383230] backdrop-blur-sm px-2.5 py-1 rounded-md border border-[rgba(245,241,236,0.1)]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#F5F1EC] mb-2 group-hover:text-[#E2E4E9] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9A9490] line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#E2E4E9] group-hover:text-white transition-colors duration-300">
                    <span>View Project Gallery ({project.gallery?.length || 1} Assets)</span>
                    <motion.span 
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-base font-bold"
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Behance Link Button */}
        <div className="mt-16 text-center">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.behance.net/mzeeshandigital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#14100F] hover:bg-[#E2E4E9] text-[#F5F1EC] hover:text-[#0A0908] font-bold text-sm px-8 py-4 rounded-full border border-[rgba(245,241,236,0.1)] hover:border-transparent shadow-glow-teal transition-all duration-300 group"
          >
            <Globe className="w-5 h-5 text-[#E2E4E9] group-hover:text-[#0A0908] transition-colors" />
            <span>Explore Full Portfolio on Behance</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
