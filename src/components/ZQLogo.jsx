import React from 'react';

export default function ZQLogo({ className = "w-10 h-10", showText = true }) {
  return (
    <div className="flex items-center gap-3 group">
      {/* Vector Emblem Frame */}
      <div className={`${className} rounded-xl bg-[#14100F] p-2 border border-[#E2E4E9]/40 shadow-glow-teal flex items-center justify-center overflow-hidden group-hover:border-[#FFFFFF] transition-all duration-300`}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="silverGradComp" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E2E4E9" />
            </linearGradient>
            <linearGradient id="cyanGradComp" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2E4E9" />
              <stop offset="100%" stopColor="#9A9490" />
            </linearGradient>
          </defs>

          {/* Interlocking ZQ Monogram Path */}
          <g transform="translate(100, 100) scale(0.75)">
            <path 
              d="M -45 -30 L 45 -30 L -30 40 L 45 40 C 65 40 75 20 75 0 C 75 -40 45 -70 0 -70 C -45 -70 -75 -40 -75 0 C -75 40 -45 70 0 70 C 35 70 60 50 70 20" 
              fill="none" 
              stroke="#E2E4E9" 
              strokeWidth="12" 
              strokeLinecap="round"
              className="opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <path 
              d="M -50 -35 L 35 -35 L -35 35 L 50 35" 
              fill="none" 
              stroke="url(#silverGradComp)" 
              strokeWidth="14" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <path 
              d="M 20 20 L 55 55" 
              fill="none" 
              stroke="url(#cyanGradComp)" 
              strokeWidth="14" 
              strokeLinecap="round" 
            />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-heading font-black text-sm sm:text-base tracking-wider text-[#F5F1EC] leading-tight">
            MUHAMMAD <span className="text-[#E2E4E9]">ZEESHAN</span>
          </span>
          <span className="text-[9px] font-mono text-[#9A9490] tracking-widest uppercase">
            GRAPHIC DESIGNER • PREPRESS EXPERT
          </span>
        </div>
      )}
    </div>
  );
}
