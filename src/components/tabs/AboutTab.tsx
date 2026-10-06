import React from 'react';
import { GitBranch, CheckCircle2, FileCode, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutTab: React.FC = () => {
  return (
    <div className="space-y-8 py-2">
      {/* Editor Frame */}
      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden shadow-[var(--shadow-md)] flex flex-col font-mono text-xs sm:text-sm">
        {/* Editor Tab Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--bg-header)] px-4 py-2 select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[var(--bg-tab-active)] border border-[var(--border-subtle)] text-[var(--accent)] font-medium">
              <FileCode size={13} />
              <span>about.ts</span>
            </div>
          </div>
          <span className="text-[11px] text-[var(--text-muted)] hidden sm:inline">TypeScript Buffer</span>
        </div>

        {/* Code Content with Line Numbers & Minimap */}
        <div className="flex overflow-x-auto relative">
          {/* Main Code Buffer */}
          <div className="flex-1 p-6 flex leading-relaxed">
            {/* Line Numbers */}
            <div className="select-none text-[var(--text-muted)] text-right pr-6 font-mono text-xs leading-relaxed space-y-1 shrink-0">
              {Array.from({ length: 22 }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            {/* TypeScript Code Buffer (Discrete lines with syntax highlights, no literal \n) */}
            <div className="space-y-1 font-mono text-xs sm:text-[13px] leading-relaxed select-text text-[var(--text-primary)] flex-1 min-w-0">
              <div className="text-[var(--text-muted)]">/**</div>
              <div className="text-[var(--text-muted)]"> * @file about.ts</div>
              <div className="text-[var(--text-muted)]"> * @author Arpit Rai &lt;arpitrai414@gmail.com&gt;</div>
              <div className="text-[var(--text-muted)]"> */</div>
              <div>
                <span className="text-[var(--accent-purple)] font-semibold">export interface</span>{' '}
                <span className="text-[var(--accent-blue)]">EngineerBio</span> {'{'}
              </div>
              <div className="pl-4">
                name: <span className="text-[var(--accent-blue)]">string</span>;
              </div>
              <div className="pl-4">
                role: <span className="text-[var(--accent-blue)]">string</span>;
              </div>
              <div className="pl-4">
                location: <span className="text-[var(--accent-blue)]">string</span>;
              </div>
              <div className="pl-4">
                education: <span className="text-[var(--accent-blue)]">string</span>;
              </div>
              <div className="pl-4">
                overview: <span className="text-[var(--accent-blue)]">string</span>;
              </div>
              <div>{'}'}</div>
              <div className="pt-2">
                <span className="text-[var(--accent-purple)] font-semibold">export const</span>{' '}
                <span className="text-[var(--accent-blue)]">arpitRai</span>
                <span className="text-[var(--text-secondary)]">:</span>{' '}
                <span className="text-[var(--accent-blue)]">EngineerBio</span>{' '}
                <span className="text-[var(--text-secondary)]">=</span> {'{'}
              </div>
              <div className="pl-4">
                name: <span className="text-[var(--accent)]">"{PERSONAL_INFO.name}"</span>,
              </div>
              <div className="pl-4">
                role: <span className="text-[var(--accent)]">"{PERSONAL_INFO.role}"</span>,
              </div>
              <div className="pl-4">
                location: <span className="text-[var(--accent)]">"{PERSONAL_INFO.location}"</span>,
              </div>
              <div className="pl-4">
                education: <span className="text-[var(--accent)]">"{PERSONAL_INFO.educationSummary}"</span>,
              </div>
              <div className="pl-4">
                overview: <span className="text-[var(--accent-amber)] leading-normal">`{PERSONAL_INFO.bio}`</span>
              </div>
              <div>{'};'}</div>
            </div>
          </div>

          {/* VS Code Minimap Strip on Right */}
          <div
            aria-hidden="true"
            className="hidden lg:flex w-24 shrink-0 border-l border-[var(--border-subtle)] bg-[var(--bg-input)]/40 p-2 flex-col justify-start select-none relative"
          >
            {/* Viewport Frame Box */}
            <div className="absolute top-2 left-1 right-1 h-28 rounded border border-[var(--border-medium)] bg-[var(--text-primary)]/5 pointer-events-none" />

            {/* Micro Lines Simulation */}
            <div className="space-y-1.5 opacity-60">
              <div className="h-1 w-10 bg-[var(--text-muted)] rounded-xs" />
              <div className="h-1 w-14 bg-[var(--text-muted)] rounded-xs" />
              <div className="h-1 w-12 bg-[var(--text-muted)] rounded-xs" />
              <div className="h-1 w-16 bg-[var(--accent-purple)] rounded-xs" />
              <div className="h-1 w-8 pl-2 bg-[var(--accent-blue)] rounded-xs" />
              <div className="h-1 w-10 pl-2 bg-[var(--accent-blue)] rounded-xs" />
              <div className="h-1 w-12 pl-2 bg-[var(--accent-blue)] rounded-xs" />
              <div className="h-1 w-14 pl-2 bg-[var(--accent-blue)] rounded-xs" />
              <div className="h-1 w-4 bg-[var(--text-muted)] rounded-xs" />
              <div className="h-1 w-16 bg-[var(--accent-purple)] rounded-xs" />
              <div className="h-1 w-12 pl-2 bg-[var(--accent)] rounded-xs" />
              <div className="h-1 w-14 pl-2 bg-[var(--accent)] rounded-xs" />
              <div className="h-1 w-16 pl-2 bg-[var(--accent)] rounded-xs" />
              <div className="h-1 w-10 pl-2 bg-[var(--accent)] rounded-xs" />
              <div className="h-1 w-18 pl-2 bg-[var(--accent-amber)] rounded-xs" />
              <div className="h-1 w-4 bg-[var(--text-muted)] rounded-xs" />
            </div>
          </div>
        </div>

        {/* Editor Bottom Status Bar */}
        <div className="px-4 py-1.5 border-t border-[var(--border-subtle)] bg-[var(--status-bar-bg)] text-[var(--status-bar-text)] flex items-center justify-between text-[11px] select-none">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-[var(--accent)]">
              <GitBranch size={11} />
              <span>main*</span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={11} className="text-[var(--accent-text)]" />
              <span>0 errors, 0 warnings</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[var(--text-muted)]">
            <span>TypeScript</span>
            <span>UTF-8</span>
            <span>Ln 18, Col 3</span>
          </div>
        </div>
      </div>

      {/* Human Editorial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-sm">
        <div className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] space-y-2 shadow-xs">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] font-semibold">
            <MapPin size={13} />
            <span>LOCATION &amp; WORKING STYLE</span>
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Based in India. Available for full-time engineering roles, high-impact remote teams, and collaborative product engineering.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] space-y-2 shadow-xs">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] font-semibold">
            <GraduationCap size={13} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            B.Tech in Computer Science &amp; Engineering at Bhilai Institute of Technology, Durg (2026). Strong grasp of data structures, algorithms, and distributed systems.
          </p>
        </div>
      </div>
    </div>
  );
};
