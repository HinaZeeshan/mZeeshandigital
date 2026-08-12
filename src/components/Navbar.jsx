import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ZQLogo from './ZQLogo';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleModalToggle = (e) => {
      setIsModalOpen(e.detail);
    };
    window.addEventListener('projectModalToggle', handleModalToggle);
    return () => window.removeEventListener('projectModalToggle', handleModalToggle);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Completely hide Navbar when project modal is open
  if (isModalOpen) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 pb-2 transition-all duration-300">
      <div 
        className={`max-w-[1280px] mx-auto rounded-full transition-all duration-500 px-6 py-2.5 flex items-center justify-between ${
          isScrolled 
            ? 'bg-[#14100F]/90 backdrop-blur-xl border border-[rgba(245,241,236,0.08)] shadow-2xl' 
            : 'bg-[#14100F]/60 backdrop-blur-md border border-[rgba(245,241,236,0.05)]'
        }`}
      >
        {/* Native ZQ Digital Vector Logo */}
        <a href="#home">
          <ZQLogo className="w-10 h-10" showText={true} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                activeSection === link.href.substring(1)
                  ? 'text-[#E2E4E9]'
                  : 'text-[#9A9490] hover:text-[#F5F1EC]'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span 
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E2E4E9] rounded-full shadow-glow-teal"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-[#E2E4E9] hover:bg-white text-[#0A0908] font-bold text-sm px-5 py-2.5 rounded-full shadow-glow-teal transition-all duration-300"
          >
            <span>Let's Create Something Great</span>
            <ArrowUpRight className="w-4 h-4 text-[#0A0908] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#F5F1EC] hover:text-[#E2E4E9] transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-4 top-20 bg-[#14100F]/95 backdrop-blur-2xl border border-[rgba(245,241,236,0.08)] rounded-3xl p-6 shadow-2xl z-50 flex flex-col gap-4"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2.5 px-4 rounded-xl transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-[#383230] text-[#E2E4E9] border border-[rgba(226,228,233,0.1)]'
                      : 'text-[#9A9490] hover:bg-[#1A1514] hover:text-[#F5F1EC]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-[rgba(245,241,236,0.08)]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#E2E4E9] text-[#0A0908] font-bold text-sm py-3 rounded-xl shadow-glow-teal"
              >
                <span>Let's Create Something Great</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
