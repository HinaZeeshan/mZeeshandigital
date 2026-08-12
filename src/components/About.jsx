import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Cpu, Compass } from 'lucide-react';

const aboutCards = [
  {
    icon: Briefcase,
    title: "15+ Years Leadership",
    description: "Founder & CEO leading commercial print production, prepress, and visual brand strategy."
  },
  {
    icon: Cpu,
    title: "Mastery Tools",
    description: "Proficient in Adobe Photoshop, CorelDRAW, and InPage Urdu typography."
  },
  {
    icon: Compass,
    title: "Diverse Industries",
    description: "Served retail packaging, corporate identity, publications, and outdoor media."
  },
  {
    icon: Award,
    title: "300+ Delivered",
    description: "Delivered over 300+ high-profile branding and print projects across multiple markets."
  }
];

function TypewriterHeading({ text, speed = 70, deleteSpeed = 35, delay = 2200 }) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (!isDeleting && displayText.length < text.length) {
      // Type forward
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
    } else if (!isDeleting && displayText.length === text.length) {
      // Pause at full text
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && displayText.length > 0) {
      // Backspace
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Pause before typing again
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text, speed, deleteSpeed, delay]);

  return (
    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F5F1EC] mb-6 leading-snug min-h-[3.5rem] sm:min-h-[4.5rem]">
      <span className="text-[#F5F1EC]">{displayText}</span>
      <span className="inline-block w-1 h-6 sm:h-7 bg-[#E2E4E9] ml-1.5 animate-pulse align-middle" />
    </h3>
  );
}

export default function About() {
  const headingText = "Muhammad Zeeshan — CEO & Creative Lead at ZQ-digital";

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-transparent bg-noise overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold tracking-widest text-[#E2E4E9] uppercase block mb-3"
          >
            Founder &amp; Creative Leadership
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F1EC] tracking-tight"
          >
            About The CEO
          </motion.h2>
          <div className="w-16 h-1 bg-[#383230] mx-auto mt-4 rounded-full shadow-glow-gray" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[24px] overflow-hidden bg-[#14100F] shadow-soft p-4 border border-[rgba(245,241,236,0.08)]">
              <div className="relative rounded-[20px] overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#1A1514] to-[#0A0908] flex items-center justify-center p-6 text-center">
                <img 
                  src="/projects/profile.png" 
                  alt="Muhammad Zeeshan - CEO of ZQ-digital" 
                  className="w-full h-full object-cover object-center rounded-xl shadow-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                <div className="hidden absolute inset-0 flex-col items-center justify-center p-6 bg-[#14100F] text-[#F5F1EC]">
                  <div className="w-24 h-24 rounded-full bg-[#383230] text-[#E2E4E9] flex items-center justify-center text-3xl font-heading font-bold mb-4 shadow-glow-gray border border-[rgba(245,241,236,0.1)]">
                    MZ
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-1 text-[#F5F1EC]">Muhammad Zeeshan</h3>
                  <p className="text-xs text-[#E2E4E9]">CEO &amp; Founder of ZQ-digital</p>
                </div>

                {/* CEO Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#14100F]/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg flex items-center justify-between border border-[rgba(245,241,236,0.1)]">
                  <div className="text-left">
                    <span className="font-heading font-bold text-sm text-[#F5F1EC] block leading-tight">Muhammad Zeeshan</span>
                    <span className="text-xs font-semibold text-[#E2E4E9]">CEO &amp; Founder of ZQ-digital</span>
                  </div>
                  <div className="px-3 py-1 rounded-md bg-[#383230] text-[#E2E4E9] text-[10px] font-mono font-bold uppercase tracking-wider border border-[rgba(245,241,236,0.1)]">
                    15+ Yrs Exp
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Typewriter Headline */}
            <TypewriterHeading text={headingText} />

            <p className="text-base sm:text-lg text-[#9A9490] font-normal leading-relaxed mb-8">
              As the CEO and Founder of <strong className="text-[#F5F1EC]">ZQ-digital</strong>, I, <strong className="text-[#E2E4E9]">Muhammad Zeeshan</strong>, bring over 15 years of hands-on industry leadership in brand identity, commercial print production, packaging, and outdoor advertising. My studio specializes in turning complex client ideas into crisp, high-converting visual systems using Adobe Photoshop, CorelDRAW, and InPage.
            </p>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-5 rounded-2xl bg-[#14100F] border border-[rgba(245,241,236,0.08)] shadow-soft hover:border-[#E2E4E9]/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#383230] text-[#E2E4E9] flex items-center justify-center mb-3 group-hover:bg-[#E2E4E9] group-hover:text-[#0A0908] transition-colors duration-300 border border-[rgba(245,241,236,0.1)]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-[#F5F1EC] mb-1">
                      {card.title}
                    </h4>
                    <p className="text-xs text-[#9A9490] leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
