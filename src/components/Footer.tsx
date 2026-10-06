import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[var(--border-subtle)] py-12 bg-[var(--bg-canvas)]" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: Branding & Role */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] shadow-xs">
              {PERSONAL_INFO.initials}
            </span>
            <span className="text-sm font-bold tracking-tight text-[var(--text-primary)]">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
          </div>
          <p className="font-mono text-xs text-[var(--text-secondary)]">
            {PERSONAL_INFO.role}
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="font-mono text-xs text-[var(--text-muted)]">
          © 2026 {PERSONAL_INFO.name} · All rights reserved
        </div>

        {/* Right: Clickable Footer Channels */}
        <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-secondary)]">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-blue)] transition-colors"
          >
            GitHub
          </a>
          <span className="text-[var(--border-subtle)]">·</span>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-blue)] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-[var(--border-subtle)]">·</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[var(--accent-blue)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
