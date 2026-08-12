import React from 'react';
import { motion } from 'framer-motion';

const techItems = [
  "Adobe Photoshop",
  "CorelDRAW",
  "InPage Urdu",
  "Brand Identity Design",
  "Large-Format Billboards",
  "Vector Prepress",
  "Packaging & Labels",
  "Typography Systems",
  "Brochures & Catalogs"
];

export default function TechBanner() {
  return (
    <div className="w-full bg-[#0A0908] text-[#F5F1EC] py-6 overflow-hidden border-y border-[rgba(245,241,236,0.08)] relative">
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0A0908] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0A0908] to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex items-center gap-12 text-sm sm:text-base font-heading font-semibold tracking-wider uppercase text-[#F5F1EC]/80"
        >
          {[...techItems, ...techItems].map((item, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="hover:text-[#00E5FF] transition-colors duration-300 cursor-default">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#383230] border border-[rgba(245,241,236,0.2)] shadow-glow-gray" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
