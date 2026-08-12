import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppBubble() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappNumber = "923162080993"; // International format for 03162080993
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Zeeshan, I'm interested in discussing a graphic design project.")}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Small Tooltip Badge */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-[#14100F] text-[#F5F1EC] text-xs font-semibold px-3.5 py-2 rounded-2xl shadow-2xl border border-[rgba(245,241,236,0.1)] flex items-center gap-2"
          >
            <span>WhatsApp Quick Chat: <strong className="text-[#25D366]">03162080993</strong></span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#9A9490] hover:text-white transition-colors"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {/* Arrow indicator */}
            <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-[#14100F] rotate-45 border-r border-b border-[rgba(245,241,236,0.1)]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Bubble Icon */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.4)] border border-white/20 hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] transition-all duration-300 group"
        aria-label="Chat on WhatsApp 03162080993"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Pulse ring indicator */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
      </motion.a>
    </div>
  );
}
