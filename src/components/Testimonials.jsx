import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../data/testimonialsData';
import { Star, Quote, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const total = testimonialsData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoplay]);

  const currentItem = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative bg-transparent bg-noise overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-glow blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold tracking-widest text-[#E2E4E9] uppercase block mb-3"
          >
            Verified Client Carousel
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F1EC] tracking-tight"
          >
            What Commercial Clients Say
          </motion.h2>
          <p className="mt-4 text-base sm:text-lg text-[#9A9490]">
            Browse feedback from 10+ real projects across packaging, billboards, books, and prepress printing.
          </p>
          <div className="w-16 h-1 bg-[#383230] mx-auto mt-4 rounded-full shadow-glow-gray" />
        </div>

        {/* Testimonials Interactive Carousel Viewport */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-[#14100F] rounded-[32px] p-8 sm:p-12 border border-[rgba(245,241,236,0.08)] shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[340px]"
            >
              <div>
                {/* Header Info */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-1 text-[#E2E4E9]">
                    {[...Array(currentItem.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#E2E4E9] text-[#E2E4E9]" />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#E2E4E9] bg-[#383230] border border-[rgba(245,241,236,0.1)] px-3.5 py-1 rounded-full uppercase tracking-wider">
                      {currentItem.category}
                    </span>
                    <Quote className="w-8 h-8 text-[#E2E4E9]/20" />
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-lg sm:text-xl text-[#F5F1EC] leading-relaxed italic mb-8 font-normal">
                  "{currentItem.review}"
                </p>
              </div>

              {/* Author & Footer Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[rgba(245,241,236,0.08)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#383230] text-[#E2E4E9] flex items-center justify-center font-heading font-bold text-base shadow-glow-gray border border-[rgba(245,241,236,0.1)]">
                    {currentItem.avatar}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#F5F1EC]">
                      {currentItem.name}
                    </h4>
                    <p className="text-xs text-[#9A9490] font-medium">
                      {currentItem.role} — <span className="text-[#E2E4E9] font-semibold">{currentItem.company}</span>
                    </p>
                  </div>
                </div>

                {/* Carousel Counter */}
                <div className="text-xs font-mono text-[#9A9490]">
                  Review <span className="text-[#E2E4E9] font-bold">{currentIndex + 1}</span> of {total}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons & Autoplay Toggle */}
          <div className="flex items-center justify-between mt-8">
            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#E2E4E9] shadow-glow-teal' : 'w-2.5 bg-[#383230] hover:bg-[#9A9490]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className="w-10 h-10 rounded-full bg-[#14100F] hover:bg-[#383230] text-[#9A9490] hover:text-[#E2E4E9] border border-[rgba(245,241,236,0.08)] flex items-center justify-center transition-all focus:outline-none"
                aria-label={isAutoplay ? "Pause Autoplay" : "Play Autoplay"}
              >
                {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-[#14100F] hover:bg-[#E2E4E9] text-[#F5F1EC] hover:text-[#0A0908] border border-[rgba(245,241,236,0.08)] flex items-center justify-center transition-all shadow-soft focus:outline-none"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-[#14100F] hover:bg-[#E2E4E9] text-[#F5F1EC] hover:text-[#0A0908] border border-[rgba(245,241,236,0.08)] flex items-center justify-center transition-all shadow-soft focus:outline-none"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
