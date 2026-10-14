import React, { useState, useEffect } from 'react';
import { ArrowRight, CornerDownLeft } from 'lucide-react';

interface TerminalBootProps {
  onComplete: () => void;
}

export const TerminalBoot: React.FC<TerminalBootProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const bootSequence = [
    'booting workstation kernel v2026.04...',
    'loading environment: React 19 · TypeScript 6.0 · Node 24 · Linux...',
    'mounting subsystems: [Jal-Drishti GIS] [Taxi Booking Prod] [Responsify MV3] [MeetMind AI]...',
    'handshake verified: Arpit Rai (Full Stack Software Engineer) — READY.',
  ];

  useEffect(() => {
    // Check if prefers-reduced-motion is enabled
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    if (currentStep < bootSequence.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, bootSequence[currentStep]]);
        setCurrentStep((prev) => prev + 1);
      }, 420);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(exitTimer);
    }
  }, [currentStep, onComplete]);

  // Esc key skips immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  return (
    <div
      role="region"
      aria-label="Workstation boot terminal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#080A0E] text-[#F8FAFC] p-4 font-mono select-none"
    >
      <div className="w-full max-w-2xl rounded-xl border border-[#1F2633] bg-[#0E1117] shadow-2xl overflow-hidden text-xs sm:text-sm">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1F2633] bg-[#0A0D12]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#62C554]" />
            <span className="text-[#64748B] text-xs pl-2">boot.sh — 80x24</span>
          </div>

          <button
            type="button"
            onClick={onComplete}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#171F2C] hover:bg-[#202B3D] text-[#94A3B8] hover:text-[#F8FAFC] text-xs transition-colors border border-[#232F42]"
          >
            <span>Skip</span>
            <span className="text-[10px] text-[#64748B]">[ESC]</span>
            <ArrowRight size={12} />
          </button>
        </div>

        {/* Boot Sequence Terminal Output */}
        <div className="p-6 space-y-3 min-h-[190px] leading-relaxed">
          <div className="text-[#64748B] text-xs mb-2">
            ARPIT_RAI_WORKSTATION // BIOS INITIALIZATION
          </div>

          {lines.map((line, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-[var(--accent)] font-bold shrink-0">$</span>
              <span className={idx === lines.length - 1 ? 'text-[#F8FAFC] font-semibold' : 'text-[#94A3B8]'}>
                {line}
              </span>
            </div>
          ))}

          {currentStep < bootSequence.length && (
            <div className="flex items-center gap-2 text-[var(--accent)] pt-1">
              <span className="w-2 h-4 bg-[var(--accent)] animate-pulse inline-block" />
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="px-4 py-2 border-t border-[#1F2633] bg-[#0A0D12] flex items-center justify-between text-[11px] text-[#64748B]">
          <span>Session Init: OK</span>
          <span className="flex items-center gap-1">
            <span>Press ESC to skip</span>
            <CornerDownLeft size={11} />
          </span>
        </div>
      </div>
    </div>
  );
};
