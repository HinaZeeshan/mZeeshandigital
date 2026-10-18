import React from 'react';
import { ArrowUp } from 'lucide-react';
import ZQLogo from './ZQLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0908] text-[#F5F1EC] pt-16 pb-12 border-t border-[rgba(245,241,236,0.08)] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[rgba(245,241,236,0.08)]">
          
          {/* Native ZQ Digital Vector Logo */}
          <ZQLogo className="w-10 h-10" showText={true} />

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-[#9A9490]">
            <a href="#home" className="hover:text-[#E2E4E9] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#E2E4E9] transition-colors">About</a>
            <a href="#services" className="hover:text-[#E2E4E9] transition-colors">Services</a>
            <a href="#skills" className="hover:text-[#E2E4E9] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#E2E4E9] transition-colors">Projects</a>
            <a href="#testimonials" className="hover:text-[#E2E4E9] transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-[#E2E4E9] transition-colors">Contact</a>
          </nav>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#14100F] hover:bg-[#383230] text-[#F5F1EC] border border-[rgba(245,241,236,0.08)] flex items-center justify-center transition-colors focus:outline-none hover:text-[#E2E4E9]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9A9490]/60 gap-4">
          <p>© {new Date().getFullYear()} Muhammad Zeeshan. All rights reserved.</p>
          <p>Direct Contact: <a href="mailto:mzeeshanq446@gmail.com" className="text-[#E2E4E9] hover:underline">mzeeshanq446@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
}
