import React, { useState } from 'react';
import { GitBranch, CheckCircle2, Terminal, ChevronDown, ChevronRight, ShieldCheck } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperiencePipeline: React.FC = () => {
  const [expandedStage, setExpandedStage] = useState<number | null>(0);

  const stages = [
    {
      stageName: 'STAGE 01 // INFRASTRUCTURE',
      company: EXPERIENCES[2].company,
      role: EXPERIENCES[2].role,
      period: EXPERIENCES[2].period,
      status: 'PASSED',
      duration: '4mo build',
      description: EXPERIENCES[2].description,
      logs: [
        'initializing network telemetry diagnostics...',
        'inspecting large-scale server nodes & connected routing layers',
        'security & availability benchmark: OK',
        'build artifact: railway-infra-v1.0.0 [PASSED]',
      ],
    },
    {
      stageName: 'STAGE 02 // FRONTEND_INTEGRATION',
      company: EXPERIENCES[1].company,
      role: EXPERIENCES[1].role,
      period: EXPERIENCES[1].period,
      status: 'PASSED',
      duration: '6mo build',
      description: EXPERIENCES[1].description,
      logs: [
        'fetching responsive UI component library...',
        'compiling responsive client interfaces & accessibility check',
        'running Git-based workflow & cross-browser benchmarks',
        'build artifact: holiday-dost-fe-dist [PASSED]',
      ],
    },
    {
      stageName: 'STAGE 03 // FULLSTACK_PRODUCTION',
      company: EXPERIENCES[0].company,
      role: EXPERIENCES[0].role,
      period: EXPERIENCES[0].period,
      status: 'DEPLOYED',
      duration: 'Ongoing',
      description: EXPERIENCES[0].description,
      logs: [
        'building full-stack solutions across frontend and backend layers',
        'provisioning REST APIs, database schemas & company web portals',
        'continuous integration & maintenance: HEALTHY',
        'production release: ACTIVE_TRAINEE_ENGINEER [LIVE]',
      ],
    },
  ];

  return (
    <section id="experience" className="py-12" aria-label="Experience CI/CD Pipeline">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-3">
        {/* Concept Label */}
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <GitBranch size={14} className="text-[var(--accent-blue)]" />
            <span className="text-[var(--text-primary)] font-medium">SECTION 06 // CI/CD PIPELINE RUNNER</span>
            <span className="text-[var(--text-muted)]">· Workflow Automation</span>
          </div>
          <span className="hidden sm:inline text-[11px] text-[var(--text-muted)]">Pipeline #2026.04 — Branch: main</span>
        </div>

        {/* Pipeline Window Frame */}
        <div className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden font-mono text-xs">
          {/* Window Titlebar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E] shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F] shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#62C554] shadow-xs" />
              <span className="text-[var(--text-secondary)] text-[11px] pl-3">
                pipeline-runner — [career-progression.yml]
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5 text-[var(--accent-text)] font-medium">
                <ShieldCheck size={12} />
                <span>3 / 3 Stages Verified</span>
              </span>
            </div>
          </div>

          {/* Pipeline Summary Bar */}
          <div className="p-4 sm:p-5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)]/40 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)] text-[var(--accent-text)] shadow-xs">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[var(--text-primary)]">Deployment Successful</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--accent-blue)] font-semibold">
                    commit: c4a89f2
                  </span>
                </div>
                <span className="text-[11px] text-[var(--text-muted)]">Triggered by engineering milestone progression</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-[11px] text-[var(--text-secondary)]">
              <div>
                <span className="text-[var(--text-muted)] block text-[10px]">DURATION</span>
                <span className="text-[var(--text-primary)] font-medium">2025 — Present</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] block text-[10px]">RUNNER</span>
                <span className="text-[var(--text-primary)] font-medium">production-cloud</span>
              </div>
            </div>
          </div>

          {/* Sequential Stage Cards */}
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stages.map((stage, idx) => {
                const isExpanded = expandedStage === idx;
                const isCurrent = stage.status === 'DEPLOYED';

                return (
                  <div
                    key={stage.stageName}
                    className={`rounded-xl border transition-all duration-200 p-4 space-y-3 shadow-xs ${
                      isCurrent
                        ? 'border-[var(--accent-blue)]/50 bg-[var(--accent-bg)]'
                        : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)]'
                    }`}
                  >
                    {/* Stage Header */}
                    <div className="flex items-center justify-between border-b border-[var(--border-subtle)]/70 pb-2">
                      <span className="text-[10px] text-[var(--text-muted)]">{stage.stageName}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                          isCurrent
                            ? 'bg-[var(--accent-muted)] text-[var(--accent-text)] border border-[var(--accent-border)]'
                            : 'bg-blue-500/10 text-[var(--accent-blue)] border border-blue-500/20'
                        }`}
                      >
                        {stage.status}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <div>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">{stage.company}</h4>
                      <p className="text-xs text-[var(--accent-blue)] font-medium pt-0.5">{stage.role}</p>
                      <p className="text-[11px] text-[var(--text-muted)] pt-0.5">{stage.period}</p>
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Toggle Job Log Dropdown */}
                    <div className="pt-2 border-t border-[var(--border-subtle)]/70">
                      <button
                        type="button"
                        onClick={() => setExpandedStage(isExpanded ? null : idx)}
                        className="w-full flex items-center justify-between text-[10px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                      >
                        <span className="flex items-center gap-1">
                          <Terminal size={11} className="text-[var(--accent-blue)]" />
                          <span>{isExpanded ? 'Hide Pipeline Logs' : 'View Job Output Logs'}</span>
                        </span>
                        {isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                      </button>

                      {isExpanded && (
                        <div className="mt-2.5 p-2.5 rounded bg-[var(--bg-header)] border border-[var(--border-subtle)] text-[10px] space-y-1">
                          {stage.logs.map((log, lIdx) => (
                            <div key={lIdx} className="leading-tight">
                              <span className="text-[var(--accent-text)] font-bold">$ </span>
                              <span className="text-[var(--text-secondary)]">{log}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
