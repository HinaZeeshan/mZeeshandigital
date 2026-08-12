import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppBubble from '../components/WhatsAppBubble';

export default function MainLayout({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0908] text-[#F5F1EC] relative selection:bg-[#E2E4E9]/20 selection:text-[#E2E4E9]">
      {/* Fixed Graph Paper Grid Background Layer */}
      <div className="fixed inset-0 bg-graph-pattern pointer-events-none z-0 opacity-80" />

      {/* Subtle Dynamic Ambient Cursor Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(226, 228, 233, 0.04), transparent 80%)`
        }}
      />

      <Navbar />
      
      <main className="relative z-10">
        {children}
      </main>

      <Footer />

      {/* Floating WhatsApp Bubble */}
      <WhatsAppBubble />
    </div>
  );
}
