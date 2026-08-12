import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../data/certificationsData';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 relative bg-[#0A0908] bg-noise overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold tracking-widest text-[#00E5FF] uppercase block mb-3"
          >
            Verified Qualifications
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F1EC] tracking-tight"
          >
            Certifications & Industry Credentials
          </motion.h2>
          <div className="w-16 h-1 bg-[#383230] mx-auto mt-4 rounded-full shadow-glow-gray" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`${cert.gridSpan} group relative rounded-[28px] p-8 ${
                cert.featured 
                  ? 'bg-gradient-to-br from-[#14100F] to-[#1A1514] text-[#F5F1EC] shadow-soft-lg border border-[rgba(245,241,236,0.15)]' 
                  : 'bg-[#14100F] text-[#F5F1EC] shadow-soft border border-[rgba(245,241,236,0.08)] hover:border-[#383230]'
              } transition-all duration-300 flex flex-col justify-between overflow-hidden`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-[#00E5FF]" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9A9490]">
                      {cert.issuer}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-[#383230] text-[#00E5FF] border border-[rgba(245,241,236,0.1)]">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-xl sm:text-2xl mb-2 text-[#F5F1EC] group-hover:text-[#00E5FF] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm mb-6 text-[#9A9490]">
                  {cert.subtitle}
                </p>
              </div>

              <div className="pt-6 border-t border-[rgba(245,241,236,0.08)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A9490]/60">
                    Credential ID
                  </span>
                  <span className="text-xs font-mono font-bold text-[#00E5FF]">
                    {cert.credentialId}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                    <span className="text-[#9A9490]">Verified ({cert.year})</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-[#383230]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#383230]/40 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
