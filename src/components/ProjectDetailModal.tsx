import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import type { DetailedProject } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface ProjectDetailModalProps {
  project: DetailedProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-xl shadow-2xl flex flex-col overflow-hidden text-[var(--text-primary)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-header)]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--accent)] font-semibold">
              PROJECT {project.number}
            </span>
            <h2 id="project-detail-title" className="text-base sm:text-lg font-bold tracking-tight text-[var(--text-primary)]">
              {project.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Screenshot Preview */}
          <div className="rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-app)]">
            <img
              src={project.screenshot || project.screenshotFallback}
              alt={`${project.name} system preview`}
              className="w-full h-auto object-cover max-h-72"
              loading="lazy"
              onError={(e) => {
                if (project.screenshotFallback && e.currentTarget.src !== project.screenshotFallback) {
                  e.currentTarget.src = project.screenshotFallback;
                }
              }}
            />
          </div>

          {/* Subtitle */}
          <div>
            <p className="text-sm font-semibold text-[var(--accent)] font-mono">
              {project.subtitle}
            </p>
          </div>

          {/* The Problem */}
          <div className="space-y-1.5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">
              The Problem
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* What I Built */}
          <div className="space-y-1.5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">
              What I Built
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {project.whatIBuilt}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">
              Architecture &amp; Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2.5 py-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--text-primary)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Real Links */}
          <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-3">
            {project.primaryLink && (
              <a
                href={project.primaryLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--accent-fg)] font-semibold text-xs font-mono transition-opacity hover:opacity-90"
              >
                <span>{project.primaryLink.label}</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}

            <a
              href={project.secondaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)] text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
            >
              <GithubIcon size={14} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
              <span>{project.secondaryLink.label}</span>
              <ArrowUpRight size={14} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
