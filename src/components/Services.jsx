import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layers, Box, Tv, BookOpen, PenTool, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Comprehensive visual systems, logo design, color palettes, and corporate brand guidelines engineered for commercial recognition."
  },
  {
    icon: Layers,
    title: "Print & Prepress Artwork",
    description: "100% print-ready vector layouts, brochures, flyers, letterheads, and multi-page commercial publishing."
  },
  {
    icon: Box,
    title: "Packaging & Label Design",
    description: "Custom die-line box packaging, product labels, and retail display assets crafted for shelf impact."
  },
  {
    icon: Tv,
    title: "Outdoor & Billboard Media",
    description: "Large-format outdoor advertising, billboards, flex banners, and high-resolution citywide media layouts."
  },
  {
    icon: BookOpen,
    title: "InPage Urdu & Publication",
    description: "Specialized InPage Urdu typography, book covers, literary journals, and traditional calligraphy layouts."
  },
  {
    icon: PenTool,
    title: "Vector Art & Asset Conversion",
    description: "High-precision vector tracing, logo conversions in CorelDRAW & Photoshop, and resolution resolution restoration."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 relative bg-transparent bg-noise overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold tracking-widest text-[#E2E4E9] uppercase block mb-3"
          >
            Specialized Design Offerings
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F1EC] tracking-tight"
          >
            Design Services
          </motion.h2>
          <div className="w-16 h-1 bg-[#383230] mx-auto mt-4 rounded-full shadow-glow-gray" />
        </div>

        {/* 6 Grid Cards with Staggered Entrance & Smooth Hover */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-[#14100F] rounded-[24px] p-8 border border-[rgba(245,241,236,0.08)] shadow-soft hover:border-[#E2E4E9]/40 hover:shadow-2xl transition-colors duration-300 flex flex-col justify-between group"
              >
                <div>
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-14 h-14 rounded-2xl bg-[#383230] text-[#E2E4E9] flex items-center justify-center mb-6 group-hover:bg-[#E2E4E9] group-hover:text-[#0A0908] transition-colors duration-300 shadow-glow-gray border border-[rgba(245,241,236,0.1)]"
                  >
                    <IconComp className="w-7 h-7" />
                  </motion.div>

                  <h3 className="font-heading font-bold text-xl text-[#F5F1EC] mb-3 group-hover:text-[#E2E4E9] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#9A9490] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(245,241,236,0.08)] flex items-center gap-2 text-xs font-semibold text-[#E2E4E9]">
                  <CheckCircle2 className="w-4 h-4 text-[#E2E4E9]" />
                  <span>Commercial Grade Deliverables</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
