import React from 'react';
import { Cpu, CheckCircle2, Terminal } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const EducationSystemSpecs: React.FC = () => {
  return (
    <section id="education" className="py-12" aria-label="Education System Specs">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-3">
        {/* Concept Label */}
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <Cpu size={14} className="text-[var(--accent-blue)]" />
            <span className="text-[var(--text-primary)] font-medium">SECTION 07 // SYSTEM HARDWARE SPECS</span>
            <span className="text-[var(--text-muted)]">· Neofetch / Sysinfo</span>
          </div>
          <span className="hidden sm:inline text-[11px] text-[var(--text-muted)]">Academic Architecture: x86_64</span>
        </div>

        {/* System Specs Window Frame */}
        <div className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden font-mono text-xs">
          {/* Window Titlebar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E] shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F] shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#62C554] shadow-xs" />
              <span className="text-[var(--text-secondary)] text-[11px] pl-3">
                fastfetch --academic-profile (sysinfo)
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[var(--accent-text)] text-[11px] font-medium">
              <CheckCircle2 size={12} />
              <span>Verified Institution Record</span>
            </div>
          </div>

          {/* Sysinfo Body Layout */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Hardware / Architecture Schematic */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-header)]/40 space-y-4">
              <div className="relative p-6 rounded-2xl border-2 border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--accent-blue)] flex flex-col items-center justify-center shadow-md">
                <Cpu size={48} className="text-[var(--accent-blue)] mb-2" />
                <span className="font-bold text-xs tracking-wider text-[var(--text-primary)]">BIT DURG</span>
                <span className="text-[10px] text-[var(--text-secondary)]">CSE KERNEL</span>
                <span className="mt-2 text-[9px] px-2 py-0.5 rounded bg-[var(--accent-bg)] border border-[var(--accent-blue)]/30 text-[var(--accent-blue)] font-bold">
                  v2026.0
                </span>
              </div>
              <div className="text-center space-y-1">
                <p className="text-[11px] text-[var(--text-secondary)] font-medium">ARCH: Computer Science & Eng</p>
                <p className="text-[10px] text-[var(--text-muted)]">Chipset: Full Stack Software Eng</p>
              </div>
            </div>

            {/* Right: Key-Value System Specs */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-[var(--accent-text)] text-xs border-b border-[var(--border-subtle)] pb-3 font-semibold">
                <Terminal size={13} />
                <span>arpit@workstation:~$ fastfetch --format=json</span>
              </div>

              <div className="space-y-3 font-mono text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[var(--border-subtle)]/70 pb-2">
                  <span className="text-[var(--text-muted)] text-xs">PRIMARY_DEGREE:</span>
                  <span className="text-[var(--text-primary)] font-bold">
                    {EDUCATION[0].degree}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[var(--border-subtle)]/70 pb-2">
                  <span className="text-[var(--text-muted)] text-xs">INSTITUTION_HOST:</span>
                  <span className="text-[var(--text-primary)]">
                    {EDUCATION[0].institution}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[var(--border-subtle)]/70 pb-2">
                  <span className="text-[var(--text-muted)] text-xs">PASSING_EPOCH:</span>
                  <span className="text-[var(--accent-blue)] font-semibold">
                    {EDUCATION[0].year}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[var(--border-subtle)]/70 pb-2">
                  <span className="text-[var(--text-muted)] text-xs">BENCHMARK_SCORE:</span>
                  <span className="text-[var(--accent-text)] font-bold">
                    {EDUCATION[0].score}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[var(--border-subtle)]/70 pb-2">
                  <span className="text-[var(--text-muted)] text-xs">SECONDARY_BUILD:</span>
                  <span className="text-[var(--text-primary)]">
                    {EDUCATION[1].degree}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="text-[var(--text-muted)] text-xs">SECONDARY_SCORE / YEAR:</span>
                  <span className="text-[var(--text-primary)] font-medium">
                    {EDUCATION[1].score} · {EDUCATION[1].year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
