import React from 'react';
import { GraduationCap, Calendar, FileCode2 } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const EducationTab: React.FC = () => {
  return (
    <div className="space-y-8 py-2">
      {/* Tab Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FileCode2 size={16} className="text-[var(--accent)]" />
            <h2 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
              education.yml
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Academic qualifications and foundational computer science background.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--text-primary)] font-semibold">
            <GraduationCap size={13} className="text-[var(--accent)]" />
            Computer Science & Engineering
          </span>
        </div>
      </div>

      {/* Grid of Qualifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION_DATA.map((edu, idx) => {
          const isCollege = edu.year === '2026';

          return (
            <div
              key={edu.degree}
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 flex flex-col justify-between space-y-6 hover:border-[var(--border-medium)] transition-all shadow-sm"
            >
              <div className="space-y-4">
                {/* Badge Row */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--accent)] font-semibold">
                    CREDENTIAL 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
                    <Calendar size={13} />
                    <span>{edu.year}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] font-medium">
                    {edu.institution}
                  </p>
                </div>

                {/* Academic Highlights */}
                {isCollege ? (
                  <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                      Foundational Coursework
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        'Data Structures & Algorithms',
                        'Database Management Systems',
                        'Operating Systems',
                        'Computer Networks',
                        'Software Engineering',
                      ].map((course) => (
                        <span
                          key={course}
                          className="px-2 py-0.5 rounded text-[11px] font-mono border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--text-secondary)]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                      Major Disciplines
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Physics', 'Chemistry', 'Mathematics', 'Computer Science'].map((sub) => (
                        <span
                          key={sub}
                          className="px-2 py-0.5 rounded text-[11px] font-mono border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--text-secondary)]"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Result Box */}
              <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)] bg-[var(--bg-input)]/50 -mx-6 -mb-6 px-6 py-3 rounded-b-xl">
                <span className="text-xs font-mono text-[var(--text-muted)]">Verified Score</span>
                <span className="text-sm font-mono font-bold text-[var(--accent)]">
                  {edu.score}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
