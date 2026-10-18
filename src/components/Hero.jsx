import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles, Layers, CheckCircle2, ShieldCheck, Printer, FileCheck } from 'lucide-react';

const metrics = [
  { value: "300+", label: "Projects Delivered" },
  { value: "25+", label: "Brands Styled" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" }
];

function HeroTypewriter({ speed = 65, deleteSpeed = 35, delay = 2500 }) {
  const fullText = "Designing Visual Stories That Connect & Inspire.";
  const gradientStartIndex = fullText.indexOf("Connect & Inspire.");
  
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (!isDeleting && displayText.length < fullText.length) {
      timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, speed);
    } else if (!isDeleting && displayText.length === fullText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && displayText.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, fullText, speed, deleteSpeed, delay]);

  const normalPart = displayText.slice(0, Math.min(displayText.length, gradientStartIndex));
  const gradientPart = displayText.length > gradientStartIndex ? displayText.slice(gradientStartIndex) : '';

  return (
    <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#F5F1EC] leading-[1.15] mb-6 min-h-[6.5rem] sm:min-h-[8rem] lg:min-h-[9.5rem]">
      <span>{normalPart}</span>
      {gradientPart && (
        <span className="text-gradient-silver">{gradientPart}</span>
      )}
      <span className="inline-block w-1.5 h-7 sm:h-10 lg:h-12 bg-[#E2E4E9] ml-2 animate-pulse align-middle" />
    </h1>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-transparent bg-noise">
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gray-glow blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#383230]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] w-full mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1514] border border-[rgba(245,241,236,0.1)] text-[#E2E4E9] text-xs sm:text-sm font-semibold mb-6 shadow-soft"
            >
              <Sparkles className="w-4 h-4 text-[#E2E4E9] animate-pulse" />
              <span>Graphic Designer &amp; Prepress Expert | CorelDRAW &amp; Photoshop Specialist</span>
            </motion.div>

            {/* Typewriter Heading */}
            <HeroTypewriter />

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#9A9490] font-normal leading-relaxed mb-8 max-w-2xl">
              I craft brand identities, print media, packaging, and visual systems that turn ideas into memorable, high-impact design experiences using Adobe Photoshop, CorelDRAW, and InPage.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 bg-[#E2E4E9] hover:bg-white text-[#0A0908] font-bold text-base px-7 py-3.5 rounded-full shadow-glow-teal transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5 text-[#0A0908] group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#14100F] hover:bg-[#1A1514] text-[#F5F1EC] font-semibold text-base px-7 py-3.5 rounded-full border border-[rgba(245,241,236,0.08)] shadow-soft transition-all duration-300"
              >
                <Calendar className="w-5 h-5 text-[#E2E4E9]" />
                <span>Schedule a Call</span>
              </a>
            </div>

            {/* Animated Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[rgba(245,241,236,0.08)] w-full">
              {metrics.map((metric, idx) => (
                <motion.div 
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                  className="flex flex-col"
                >
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#E2E4E9] tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[#9A9490] font-medium mt-1">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Floating Brand Spec Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-gray-glow blur-2xl -z-10" />

            <div className="relative bg-[#14100F] rounded-[24px] p-6 sm:p-8 text-[#F5F1EC] shadow-2xl border border-[rgba(245,241,236,0.08)] overflow-hidden">
              <div className="flex items-center justify-between border-b border-[rgba(245,241,236,0.08)] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#383230]" />
                  <span className="w-3 h-3 rounded-full bg-[#E2E4E9]/40" />
                  <span className="w-3 h-3 rounded-full bg-[#F5F1EC]/40" />
                </div>
                <span className="text-xs font-mono text-[#9A9490] tracking-wider">PREPRESS_OUTPUT_SPEC.PSD</span>
              </div>

              <div className="space-y-6">
                {/* Visual Identity Highlight */}
                <div className="bg-[#0A0908] rounded-2xl p-5 border border-[rgba(245,241,236,0.08)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#383230]/40 rounded-full blur-xl" />
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-semibold text-[#E2E4E9] uppercase tracking-widest block mb-1">Visual Identity</span>
                      <h3 className="font-heading font-bold text-xl text-[#F5F1EC]">Elegance & Precision</h3>
                    </div>
                    <Layers className="w-6 h-6 text-[#E2E4E9]" />
                  </div>
                  <p className="text-xs text-[#9A9490] leading-relaxed">
                    Custom typography grid & vector assets engineered in Photoshop & CorelDRAW.
                  </p>
                </div>

                {/* Core Deliverables & Prepress Output Quality Block */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#9A9490] block uppercase tracking-wider">CORE DELIVERABLES</span>
                  
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-[#1A1514] p-3 rounded-xl border border-[rgba(245,241,236,0.08)] flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#E2E4E9] shrink-0" />
                      <span className="text-xs font-semibold text-[#F5F1EC]">Brand Systems</span>
                    </div>

                    <div className="bg-[#1A1514] p-3 rounded-xl border border-[rgba(245,241,236,0.08)] flex items-center gap-2.5">
                      <Printer className="w-4 h-4 text-[#E2E4E9] shrink-0" />
                      <span className="text-xs font-semibold text-[#F5F1EC]">Print Prepress</span>
                    </div>

                    <div className="bg-[#1A1514] p-3 rounded-xl border border-[rgba(245,241,236,0.08)] flex items-center gap-2.5">
                      <FileCheck className="w-4 h-4 text-[#E2E4E9] shrink-0" />
                      <span className="text-xs font-semibold text-[#F5F1EC]">Packaging Labels</span>
                    </div>

                    <div className="bg-[#1A1514] p-3 rounded-xl border border-[rgba(245,241,236,0.08)] flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-[#E2E4E9] shrink-0" />
                      <span className="text-xs font-semibold text-[#F5F1EC]">Billboard Media</span>
                    </div>
                  </div>
                </div>

                {/* Print Ready Spec Badge */}
                <div className="bg-[#1A1514] rounded-xl p-3.5 border border-[rgba(245,241,236,0.08)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#383230] text-[#E2E4E9] flex items-center justify-center font-mono font-bold text-xs">
                      CMYK
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#F5F1EC] block">100% Vector Print Ready</span>
                      <span className="text-[10px] text-[#9A9490]">High-Res CMYK File Exports (AI, CDR, PSD, PDF)</span>
                    </div>
                  </div>
                </div>

                {/* Software Badges */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xs text-[#9A9490] font-mono mr-1">TOOLS:</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#383230] text-[#E2E4E9] text-xs font-medium border border-[rgba(245,241,236,0.1)]">Photoshop</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#383230] text-[#E2E4E9] text-xs font-medium border border-[rgba(245,241,236,0.1)]">CorelDRAW</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#383230] text-[#E2E4E9] text-xs font-medium border border-[rgba(245,241,236,0.1)]">InPage</span>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 bg-[#E2E4E9] text-[#0A0908] rounded-xl px-4 py-2.5 shadow-2xl border border-black/10 flex items-center gap-2 text-xs font-bold"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0A0908]" />
                <span>100% Vector Ready</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
