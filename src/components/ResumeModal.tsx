import React, { useEffect } from 'react';
import { X, Printer, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import {
  PERSONAL_INFO,
  TIMELINE_EXPERIENCE,
  EDUCATION_DATA,
  DETAILED_PROJECTS,
  FILTERED_SKILLS,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-xl shadow-2xl flex flex-col overflow-hidden text-[var(--text-primary)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-header)]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--accent)] font-semibold">
              RESUME.PDF
            </span>
            <h2 id="resume-title" className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
              {PERSONAL_INFO.name} — Curriculum Vitae
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans print:p-0 print:bg-white print:text-black">
          {/* Top Info */}
          <div className="border-b border-[var(--border-subtle)] pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-[var(--accent)] mb-3 font-mono">
              {PERSONAL_INFO.role}
            </p>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4 max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[var(--accent)]" />
                {PERSONAL_INFO.location}
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
              >
                <Mail size={13} className="text-[var(--accent)]" />
                {PERSONAL_INFO.email}
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phoneTel}`}
                className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
              >
                <Phone size={13} className="text-[var(--accent)]" />
                {PERSONAL_INFO.phone}
              </a>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
              >
                <ExternalLink size={13} className="text-[var(--accent)]" />
                github.com/arpitrai11
              </a>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-bold">
              Work Experience
            </h3>
            <div className="space-y-4">
              {TIMELINE_EXPERIENCE.map((exp, i) => (
                <div key={i} className="border-l-2 border-[var(--border-subtle)] pl-4 space-y-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                      {exp.role} <span className="font-normal text-[var(--text-secondary)]">at {exp.company}</span>
                    </h4>
                    <span className="font-mono text-xs text-[var(--text-muted)]">{exp.period}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-bold">
              Production Projects & Systems
            </h3>
            <div className="space-y-4">
              {DETAILED_PROJECTS.map((proj) => (
                <div key={proj.id} className="border-l-2 border-[var(--border-subtle)] pl-4 space-y-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                      {proj.name}{' '}
                      <span className="font-normal text-xs text-[var(--text-secondary)]">
                        — {proj.subtitle}
                      </span>
                    </h4>
                    <span className="font-mono text-xs text-[var(--accent)] font-medium">
                      {proj.tech.join(' · ')}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {proj.problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-bold">
              Education
            </h3>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex flex-wrap items-baseline justify-between text-xs">
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">{edu.degree}</span>
                    {edu.institution && (
                      <span className="text-[var(--text-secondary)]"> · {edu.institution}</span>
                    )}
                  </div>
                  <div className="font-mono text-[var(--text-secondary)]">
                    <span>{edu.score}</span>
                    <span className="mx-2">·</span>
                    <span>{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-bold">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {FILTERED_SKILLS.map((group) => (
                <div key={group.category} className="space-y-1">
                  <span className="font-mono text-[11px] text-[var(--text-muted)] font-semibold">
                    {group.category}
                  </span>
                  <p className="text-[var(--text-primary)] font-mono text-[11px]">
                    {group.skills.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-[var(--border-subtle)] bg-[var(--bg-header)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
          <span>Verified profile data</span>
          <span>© 2026 Arpit Rai</span>
        </div>
      </div>
    </div>
  );
};
