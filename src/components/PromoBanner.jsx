import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, ArrowRight, MessageSquare, Layers, Crop, Box } from 'lucide-react';

export default function PromoBanner() {
  const whatsappUrl = "https://wa.me/923162080993?text=Hello%20Zeeshan,%20I'm%20interested%20in%20discussing%20a%20graphic%20design%20project.";

  return (
    <section className="py-16 px-6 sm:px-8 relative bg-[#0A0908] bg-noise overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative w-full bg-[#14100F] rounded-[32px] border border-[rgba(245,241,236,0.08)] shadow-soft-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 items-center">
          
          {/* Background Ambient Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-r from-[#383230]/40 to-transparent blur-[80px] pointer-events-none -z-10" />
          <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-[#E2E4E9]/5 rounded-full blur-[60px] pointer-events-none -z-10" />

          {/* Left Column: Animating Vector Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[300px] bg-[#0A0908] rounded-2xl border border-[rgba(245,241,236,0.05)] p-6 overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,241,236,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,241,236,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Animating Bezier Pen Work & Anchors */}
            <svg className="w-full h-full min-h-[260px] relative z-10" viewBox="0 0 400 300">
              {/* Construction Grid Guides */}
              <line x1="50" y1="150" x2="350" y2="150" stroke="rgba(245,241,236,0.05)" strokeDasharray="4 4" />
              <line x1="200" y1="50" x2="200" y2="250" stroke="rgba(245,241,236,0.05)" strokeDasharray="4 4" />
              
              {/* Drawing Bezier Path */}
              <motion.path
                d="M 50 200 C 150 50, 250 250, 350 100"
                fill="none"
                stroke="#E2E4E9"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
              />

              {/* Tangent lines from active handle */}
              <motion.line
                x1="200" y1="150"
                x2="150" y2="50"
                stroke="rgba(226,228,233,0.3)"
                strokeWidth="1"
                animate={{ x2: [150, 120, 150], y2: [50, 80, 50] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
              />
              <motion.line
                x1="200" y1="150"
                x2="250" y2="250"
                stroke="rgba(226,228,233,0.3)"
                strokeWidth="1"
                animate={{ x2: [250, 280, 250], y2: [250, 220, 250] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
              />

              {/* Anchor Point 1 */}
              <circle cx="50" cy="200" r="5" fill="#0A0908" stroke="#E2E4E9" strokeWidth="2" />
              <rect x="46" y="196" width="8" height="8" fill="#14100F" stroke="#E2E4E9" strokeWidth="2" />

              {/* Anchor Point 2 (Center Active Control) */}
              <circle cx="200" cy="150" r="6" fill="#E2E4E9" />
              {/* Tangent Handles */}
              <motion.circle 
                cx="150" cy="50" r="4" 
                fill="#383230" stroke="#E2E4E9" strokeWidth="1.5"
                animate={{ cx: [150, 120, 150], cy: [50, 80, 50] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
              />
              <motion.circle 
                cx="250" cy="250" r="4" 
                fill="#383230" stroke="#E2E4E9" strokeWidth="1.5"
                animate={{ cx: [250, 280, 250], cy: [250, 220, 250] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
              />

              {/* Anchor Point 3 */}
              <rect x="346" y="96" width="8" height="8" fill="#14100F" stroke="#E2E4E9" strokeWidth="2" />

              {/* Animating Pen Cursor Icon */}
              <motion.g
                animate={{ x: [50, 200, 350, 50], y: [200, 150, 100, 200] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M0 0 L15 15 L8 18 Z" fill="#E2E4E9" stroke="#0A0908" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="2" fill="#25D366" />
              </motion.g>
            </svg>

            {/* Tiny Floating Layer Badge */}
            <div className="absolute bottom-4 left-4 bg-[#14100F] border border-[rgba(245,241,236,0.1)] px-3 py-1.5 rounded-lg flex items-center gap-2 text-[10px] font-mono text-[#9A9490]">
              <Layers className="w-3.5 h-3.5 text-[#E2E4E9]" />
              <span>vector_art_board.cdr</span>
            </div>
            
            {/* Custom Prepress Crop Marks in corners */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[rgba(245,241,236,0.2)]" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[rgba(245,241,236,0.2)]" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[rgba(245,241,236,0.2)]" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[rgba(245,241,236,0.2)]" />
          </div>

          {/* Right Column: Custom Message & Tags */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start relative">
            
            {/* Header / CTA Badge in Top Right of section */}
            <div className="w-full flex justify-between items-center mb-6">
              <span className="text-[11px] font-mono font-bold text-[#E2E4E9] uppercase tracking-widest bg-[#383230] px-3.5 py-1 rounded-md border border-[rgba(245,241,236,0.1)]">
                vector system
              </span>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 bg-[#800F2F]/20 hover:bg-[#800F2F] text-[#F5F1EC] font-semibold text-xs px-4 py-2 rounded-full border border-[#800F2F]/40 shadow-glow-gray transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>DM ME "DESIGN"</span>
                <span className="text-[#9A9490] group-hover:text-white text-[9px] block">To Start</span>
              </a>
            </div>

            {/* Typography Content */}
            <div className="space-y-4 mb-8">
              <span className="text-lg sm:text-xl md:text-2xl font-heading font-medium italic text-[#9A9490]">
                I design custom commercial
              </span>
              
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-none">
                  Brand Systems
                </h2>
                
                <span className="px-3 py-1.5 rounded-full bg-[#E2E4E9] text-[#0A0908] text-xs sm:text-sm font-bold shadow-glow-silver">
                  Photoshop & CorelDRAW
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#9A9490] leading-relaxed max-w-2xl">
                That automate prepress scaling, align packaging grids, and deliver 100% print-ready vector artwork to replace manual resizing.
              </p>
            </div>

            {/* Tags Bottom Row */}
            <div className="flex flex-wrap gap-2 w-full pt-6 border-t border-[rgba(245,241,236,0.08)]">
              {[
                { name: "Brand Identity", icon: Layers },
                { name: "Vector Illustration", icon: PenTool },
                { name: "Prepress Layouts", icon: Crop },
                { name: "Packaging Design", icon: Box }
              ].map((tag) => {
                const Icon = tag.icon;
                return (
                  <div
                    key={tag.name}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#1A1514] border border-[rgba(245,241,236,0.05)] text-xs text-[#F5F1EC] hover:border-[#383230] transition-colors cursor-default"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#E2E4E9]" />
                    <span>{tag.name}</span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
