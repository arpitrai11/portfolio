import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, FileCode2 } from 'lucide-react';
import { TIMELINE_EXPERIENCE } from '../../data/portfolioData';

interface ExperienceDetail {
  highlights: string[];
  skills: string[];
}

const EXPERIENCE_DETAILS: Record<string, ExperienceDetail> = {
  'Logimetrix Tech Solutions': {
    highlights: [
      'Contributing to client-facing web portals and production full-stack features using React and Node.js.',
      'Integrating RESTful services with database persistence and JWT-based session security.',
      'Collaborating in agile sprints with code reviews and Git version control.',
    ],
    skills: ['React', 'Node.js', 'Express.js', 'REST APIs', 'Git', 'TypeScript'],
  },
  'Holiday Dost': {
    highlights: [
      'Developed and refined responsive UI components for cross-device mobile and desktop experiences.',
      'Resolved cross-browser rendering inconsistencies and improved initial bundle performance.',
      'Collaborated with design specifications to deliver polished interactive user flows.',
    ],
    skills: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Responsive Design'],
  },
  'South East Central Railway': {
    highlights: [
      'Assisted IT infrastructure operations supporting operational railway network communication.',
      'Monitored local system diagnostics, server uptimes, and scheduled maintenance checklists.',
      'Gained direct exposure to mission-critical public infrastructure IT environments.',
    ],
    skills: ['Network Diagnostics', 'System Maintenance', 'IT Infrastructure'],
  },
};

export const ExperienceTab: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-8 py-2">
      {/* Tab Subheader */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FileCode2 size={16} className="text-[var(--accent)]" />
            <h2 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
              experience.yml
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Engineering roles structured as continuous integration pipeline stages.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--accent)] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            Pipeline: Healthy
          </span>
        </div>
      </div>

      {/* CI/CD Pipeline Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[var(--border-subtle)]">
        {TIMELINE_EXPERIENCE.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;
          const isCurrent = exp.period.includes('PRESENT');
          const details = EXPERIENCE_DETAILS[exp.company];

          return (
            <div key={exp.company} className="relative group">
              {/* Timeline Stage Node */}
              <div
                className={`absolute -left-6 sm:-left-8 top-1 w-5 sm:w-6 h-5 sm:h-6 rounded-full border-2 flex items-center justify-center transition-colors bg-[var(--bg-app)] ${
                  isCurrent
                    ? 'border-[var(--accent)] text-[var(--accent)]'
                    : 'border-[var(--border-medium)] text-[var(--text-muted)] group-hover:border-[var(--text-secondary)]'
                }`}
              >
                {isCurrent ? (
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                ) : (
                  <CheckCircle2 size={12} />
                )}
              </div>

              {/* Stage Card */}
              <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-medium)] transition-all overflow-hidden shadow-sm">
                {/* Header Row */}
                <div
                  className="p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none"
                  onClick={() => toggleExpand(idx)}
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-[var(--accent)] font-semibold">
                        STAGE 0{idx + 1}
                      </span>
                      <span className="text-[var(--text-muted)] text-xs">•</span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--text-secondary)]">
                        {exp.period}
                      </span>
                      {isCurrent && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--accent)] font-medium">
                          CURRENT
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline">
                      {isExpanded ? 'Collapse' : 'Expand details'}
                    </span>
                    <button
                      type="button"
                      aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                      className="p-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>
                  </div>
                </div>

                {/* Summary Description */}
                <div className="px-5 pb-5 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {exp.description}
                </div>

                {/* Expandable Details Area */}
                {isExpanded && details && (
                  <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-header)]/60 p-5 space-y-4 animate-in fade-in duration-150">
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                        Key Accomplishments
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                        {details.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-[var(--accent)] font-mono text-sm leading-none mt-0.5">
                              ▹
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech & Tools */}
                    <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                      <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                        Tooling & Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {details.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded text-[11px] font-mono border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--text-primary)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
