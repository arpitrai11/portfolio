import React, { useState } from 'react';
import { Lock, ArrowUpRight, Code2 } from 'lucide-react';
import { DETAILED_PROJECTS, type DetailedProject } from '../data/portfolioData';

interface HeroBrowserDeckProps {
  onSelectProject?: (project: DetailedProject) => void;
  onSelectTab: (tabId: string) => void;
}

export const HeroBrowserDeck: React.FC<HeroBrowserDeckProps> = ({
  onSelectProject,
  onSelectTab,
}) => {
  const [activeDeckIndex, setActiveDeckIndex] = useState(0);

  // Deck items mapped directly to real projects
  const deckProjects = [
    {
      project: DETAILED_PROJECTS[2], // Chhattisgarh Taxi Service (Production Live)
      url: 'chhattisgarhtaxiservice.com',
      badge: 'PRODUCTION LIVE',
      badgeColor: 'var(--accent)',
    },
    {
      project: DETAILED_PROJECTS[0], // JAL-DRISHTI
      url: 'jal-drishti.basin-telemetry.in',
      badge: 'ASSAM FLOOD GIS',
      badgeColor: 'var(--accent-blue)',
    },
    {
      project: DETAILED_PROJECTS[1], // AI Automation
      url: 'n8n.workflows/gemini-orchestrator',
      badge: 'AI PIPELINE',
      badgeColor: 'var(--accent-purple)',
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none pt-4 pb-8 select-none">
      {/* 3 Overlapping Browser-Frame Cards Container */}
      <div className="relative h-[320px] sm:h-[350px] w-full">
        {deckProjects.map((item, idx) => {
          const isFront = activeDeckIndex === idx;
          const proj = item.project;

          // Card offsets for layered deck aesthetic
          let transformClasses = '';
          let zIndex = 10;

          if (idx === 0) {
            // Center / Foreground
            transformClasses = isFront
              ? 'translate-x-0 translate-y-0 rotate-0 scale-100 z-30 opacity-100'
              : '-translate-x-3 translate-y-4 -rotate-1 scale-95 z-20 opacity-90';
            zIndex = isFront ? 30 : 20;
          } else if (idx === 1) {
            // Upper Left offset
            transformClasses = isFront
              ? 'translate-x-0 translate-y-0 rotate-0 scale-100 z-30 opacity-100'
              : '-translate-x-6 -translate-y-3 -rotate-3 scale-90 z-10 opacity-75';
            zIndex = isFront ? 30 : 10;
          } else {
            // Lower Right offset
            transformClasses = isFront
              ? 'translate-x-0 translate-y-0 rotate-0 scale-100 z-30 opacity-100'
              : 'translate-x-6 translate-y-6 rotate-2 scale-90 z-10 opacity-80';
            zIndex = isFront ? 30 : 15;
          }

          return (
            <div
              key={proj.id}
              onClick={() => {
                setActiveDeckIndex(idx);
                if (onSelectProject) onSelectProject(proj);
              }}
              onMouseEnter={() => setActiveDeckIndex(idx)}
              className={`absolute inset-x-0 top-0 cursor-pointer rounded-xl border border-[var(--border-medium)] bg-[var(--bg-card)] shadow-[var(--shadow-float)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl overflow-hidden ${transformClasses}`}
              style={{ zIndex }}
            >
              {/* Browser Window Chrome */}
              <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)]/90 backdrop-blur-xs">
                {/* 3 Traffic Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#62C554]" />
                </div>

                {/* Browser URL bar */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[11px] font-mono text-[var(--text-muted)] max-w-[200px] truncate">
                  <Lock size={10} className="text-[var(--accent)] shrink-0" />
                  <span className="truncate">{item.url}</span>
                </div>

                {/* Status Tag */}
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded font-semibold border"
                  style={{
                    color: item.badgeColor,
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: 'var(--bg-input)',
                  }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Screenshot Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-app)]">
                <img
                  src={proj.screenshot || proj.screenshotFallback}
                  alt={`${proj.name} screenshot preview`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    if (proj.screenshotFallback && e.currentTarget.src !== proj.screenshotFallback) {
                      e.currentTarget.src = proj.screenshotFallback;
                    }
                  }}
                />

                {/* Subtitle bottom banner */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-6 flex items-center justify-between text-white">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold tracking-tight">
                      {proj.name}
                    </h4>
                    <p className="text-[11px] font-mono text-zinc-300 line-clamp-1">
                      {proj.subtitle}
                    </p>
                  </div>

                  <span className="text-[11px] font-mono flex items-center gap-1 text-[var(--accent)] font-semibold">
                    Inspect <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Minor Overlay: Fixed profile.ts Card (No literal \n, no scroll, pristine syntax) */}
      <div className="relative -mt-10 sm:-mt-12 z-35 max-w-sm sm:max-w-md ml-auto rounded-xl border border-[var(--border-medium)] bg-[var(--bg-card)]/95 backdrop-blur-md p-4 shadow-[var(--shadow-lg)] transition-transform hover:-translate-y-1">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">profile.ts</span>
          </div>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent-text)] border border-[var(--accent-border)] font-semibold">
            SYNTAX VERIFIED
          </span>
        </div>

        {/* Clean Multi-line TypeScript Buffer (No internal scroll, high-contrast tokens) */}
        <div className="font-mono text-xs leading-relaxed space-y-1 text-[var(--text-primary)] select-text">
          <div>
            <span className="text-[var(--accent-purple)] font-semibold">const</span>{' '}
            <span className="text-[var(--accent-blue)] font-medium">engineer</span>{' '}
            <span className="text-[var(--text-muted)]">=</span> {'{'}
          </div>
          <div className="pl-4">
            <span className="text-[var(--text-secondary)]">name:</span>{' '}
            <span className="text-[var(--accent-text)] font-medium">"Arpit Rai"</span>,
          </div>
          <div className="pl-4">
            <span className="text-[var(--text-secondary)]">role:</span>{' '}
            <span className="text-[var(--accent-text)] font-medium">"Full Stack Software Engineer"</span>,
          </div>
          <div className="pl-4">
            <span className="text-[var(--text-secondary)]">location:</span>{' '}
            <span className="text-[var(--accent-text)] font-medium">"India (IST)"</span>,
          </div>
          <div className="pl-4">
            <span className="text-[var(--text-secondary)]">status:</span>{' '}
            <span className="text-[var(--accent-amber)] font-medium">"Available for opportunities"</span>
          </div>
          <div>{'};'}</div>
        </div>

        <div className="mt-2.5 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <Code2 size={12} className="text-[var(--accent-text)]" />
            <span>TypeScript 5.8</span>
          </span>
          <button
            type="button"
            onClick={() => onSelectTab('about')}
            className="text-[var(--accent-text)] hover:underline flex items-center gap-1 font-medium"
          >
            <span>Read Bio Buffer</span>
            <ArrowUpRight size={11} />
          </button>
        </div>
      </div>
    </div>
  );
};
