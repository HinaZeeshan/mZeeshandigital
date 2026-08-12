import React from 'react';
import { motion } from 'framer-motion';

const coreTools = [
  { name: "CorelDRAW", level: "98%", category: "Vector & Prepress Layouts" },
  { name: "Adobe Photoshop", level: "95%", category: "Raster Editing & Color Grading" },
  { name: "InPage Urdu", level: "92%", category: "Urdu Calligraphy & Publishing" }
];

const expertiseAreas = [
  "Brand Identity Systems",
  "Vector Prepress Artwork",
  "Packaging Dieline Design",
  "Large-Format Billboards",
  "Corporate Stationery",
  "Catalog & Brochure Layouts",
  "Typography & Calligraphy",
  "Color Separation & Print Prepress"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-transparent bg-noise overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold tracking-widest text-[#E2E4E9] uppercase block mb-3"
          >
            Technical Proficiency
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F1EC] tracking-tight"
          >
            Software &amp; Capabilities
          </motion.h2>
          <div className="w-16 h-1 bg-[#383230] mx-auto mt-4 rounded-full shadow-glow-gray" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Progress Bars */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-heading font-bold text-2xl text-[#F5F1EC] mb-6">
              Primary Software Mastery
            </h3>

            {coreTools.map((tool, idx) => (
              <motion.div 
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
                className="bg-[#14100F] p-6 rounded-2xl border border-[rgba(245,241,236,0.08)] shadow-soft hover:border-[rgba(226,228,233,0.3)] transition-colors duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-heading font-bold text-lg text-[#F5F1EC]">{tool.name}</span>
                  <span className="font-mono font-bold text-sm text-[#E2E4E9]">{tool.level}</span>
                </div>
                <p className="text-xs text-[#9A9490] font-mono mb-4">{tool.category}</p>

                {/* Animated Progress Bar Container */}
                <div className="w-full h-3 rounded-full bg-[#1A1514] overflow-hidden border border-[rgba(245,241,236,0.05)] relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: tool.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-to-r from-[#9A9490] via-[#E2E4E9] to-white rounded-full shadow-glow-teal"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Expertise Tags */}
          <div className="lg:col-span-5">
            <div className="bg-[#14100F] p-8 rounded-[28px] border border-[rgba(245,241,236,0.08)] shadow-soft">
              <h3 className="font-heading font-bold text-2xl text-[#F5F1EC] mb-6">
                Design Expertise Areas
              </h3>

              <div className="flex flex-wrap gap-3">
                {expertiseAreas.map((area, idx) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="px-4 py-2.5 rounded-xl bg-[#1A1514] text-xs font-semibold text-[#F5F1EC] border border-[rgba(245,241,236,0.08)] hover:border-[#E2E4E9] hover:text-[#E2E4E9] transition-colors duration-300 shadow-soft cursor-default"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
