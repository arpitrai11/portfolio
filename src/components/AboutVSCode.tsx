import React, { useState } from 'react';
import {
  Files,
  Search,
  GitBranch,
  Bug,
  Boxes,
  FileCode,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutVSCode: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ts' | 'md'>('ts');

  return (
    <section id="about" className="py-12" aria-label="About Me in VS Code">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-3">
        {/* Concept Label */}
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <FileCode size={14} className="text-[var(--accent-blue)]" />
            <span className="text-[var(--text-primary)] font-medium">SECTION 03 // VS CODE WORKSPACE</span>
            <span className="text-[var(--text-muted)]">· Code Editor</span>
          </div>
          <span className="hidden sm:inline text-[11px] text-[var(--text-muted)]">Visual Studio Code IDE</span>
        </div>

        {/* VS Code Window Container */}
        <div className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden flex flex-col font-mono text-xs">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E] shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F] shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#62C554] shadow-xs" />
              <span className="text-[var(--text-secondary)] text-[11px] pl-3 hidden sm:inline">
                {activeTab === 'ts' ? 'about.ts' : 'bio.md'} — Arpit Rai Portfolio — Visual Studio Code
              </span>
            </div>
            <div className="text-[11px] text-[var(--text-muted)]">Workspace: arpit-portfolio-v2</div>
          </div>

          {/* Main IDE Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
            {/* Left Activity Bar & Explorer */}
            <div className="hidden md:flex md:col-span-3 border-r border-[var(--border-subtle)] bg-[var(--bg-header)]/60">
              {/* Vertical Icon Rail */}
              <div className="w-11 border-r border-[var(--border-subtle)] py-3 flex flex-col items-center gap-4 text-[var(--text-muted)]">
                <Files size={16} className="text-[var(--accent-blue)]" />
                <Search size={16} className="hover:text-[var(--text-primary)] cursor-pointer" />
                <GitBranch size={16} className="hover:text-[var(--text-primary)] cursor-pointer" />
                <Bug size={16} className="hover:text-[var(--text-primary)] cursor-pointer" />
                <Boxes size={16} className="hover:text-[var(--text-primary)] cursor-pointer" />
              </div>

              {/* File Tree Explorer */}
              <div className="flex-1 py-3 px-3 space-y-3">
                <div className="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">
                  EXPLORER
                </div>
                <div className="space-y-1">
                  <div className="text-[var(--text-secondary)] flex items-center gap-1.5 cursor-pointer">
                    <span>▼</span>
                    <span className="font-semibold text-[var(--text-primary)]">src/background</span>
                  </div>
                  <div className="pl-3 space-y-0.5">
                    <button
                      type="button"
                      onClick={() => setActiveTab('ts')}
                      className={`w-full text-left flex items-center gap-2 px-2 py-1.5 rounded transition-colors ${
                        activeTab === 'ts'
                          ? 'bg-[var(--accent-bg)] text-[var(--accent-blue)] font-medium'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <FileCode size={13} className="text-[var(--accent-blue)]" />
                      <span>about.ts</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('md')}
                      className={`w-full text-left flex items-center gap-2 px-2 py-1.5 rounded transition-colors ${
                        activeTab === 'md'
                          ? 'bg-[var(--accent-bg)] text-[var(--accent-blue)] font-medium'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <FileText size={13} className="text-sky-500" />
                      <span>bio.md</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Editor Area */}
            <div className="md:col-span-9 flex flex-col bg-[var(--bg-surface)]">
              {/* Tab Header */}
              <div className="flex items-center border-b border-[var(--border-subtle)] bg-[var(--bg-header)]">
                <button
                  type="button"
                  onClick={() => setActiveTab('ts')}
                  className={`flex items-center gap-2 px-4 py-2 border-r border-[var(--border-subtle)] text-xs transition-colors ${
                    activeTab === 'ts'
                      ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-t-2 border-t-[var(--accent-blue)] font-medium'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <FileCode size={13} className="text-[var(--accent-blue)]" />
                  <span>about.ts</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('md')}
                  className={`flex items-center gap-2 px-4 py-2 border-r border-[var(--border-subtle)] text-xs transition-colors ${
                    activeTab === 'md'
                      ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-t-2 border-t-[var(--accent-blue)] font-medium'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <FileText size={13} className="text-sky-500" />
                  <span>bio.md</span>
                </button>
              </div>

              {/* Editor Code Buffer */}
              <div className="p-5 sm:p-6 flex-1 overflow-x-auto leading-relaxed">
                {activeTab === 'ts' ? (
                  <div className="flex">
                    {/* Line numbers */}
                    <div className="select-none text-[var(--text-muted)] text-right pr-4 font-mono text-xs leading-relaxed space-y-0.5">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>

                    {/* TypeScript Code */}
                    <div className="space-y-0.5 font-mono text-xs sm:text-sm">
                      <div className="text-[var(--text-muted)]">/**</div>
                      <div className="text-[var(--text-muted)]"> * @entity EngineerProfile</div>
                      <div className="text-[var(--text-muted)]"> * @author Arpit Rai</div>
                      <div className="text-[var(--text-muted)]"> */</div>
                      <div>
                        <span className="text-[var(--accent-blue)] font-medium">export const</span>{' '}
                        <span className="text-sky-600 dark:text-[#93C5FD]">arpitRai</span>{' '}
                        <span className="text-[var(--text-secondary)]">=</span>{' '}
                        <span className="text-[var(--text-primary)]">{'{'}</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-[var(--text-secondary)]">location:</span>{' '}
                        <span className="text-[var(--accent-text)]">"{PERSONAL_INFO.location}"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[var(--text-secondary)]">focus:</span>{' '}
                        <span className="text-[var(--accent-text)]">"{PERSONAL_INFO.focus}"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[var(--text-secondary)]">currently:</span>{' '}
                        <span className="text-[var(--accent-text)]">"{PERSONAL_INFO.currently}"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[var(--text-secondary)]">education:</span>{' '}
                        <span className="text-[var(--accent-text)]">"{PERSONAL_INFO.educationDegree}"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[var(--text-secondary)]">summary:</span>{' '}
                        <span className="text-blue-600 dark:text-[#60A5FA]">
                          `{PERSONAL_INFO.aboutLong}`
                        </span>
                      </div>
                      <div>
                        <span className="text-[var(--text-primary)]">{'};'}</span>
                      </div>
                      <div className="pt-2 text-[var(--text-muted)]">
                        // Ready for production microservices & AI automation
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Markdown Preview Tab */
                  <div className="space-y-4 max-w-2xl font-sans text-sm">
                    <h2 className="text-xl font-bold text-[var(--text-primary)]"># About Arpit Rai</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {PERSONAL_INFO.aboutLong}
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[var(--border-subtle)] font-mono text-xs">
                      <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-header)]/40">
                        <span className="text-[var(--text-muted)] block text-[10px]">LOCATION</span>
                        <span className="text-[var(--text-primary)] font-semibold">{PERSONAL_INFO.location}</span>
                      </div>
                      <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-header)]/40">
                        <span className="text-[var(--text-muted)] block text-[10px]">FOCUS</span>
                        <span className="text-[var(--text-primary)] font-semibold">{PERSONAL_INFO.focus}</span>
                      </div>
                      <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-header)]/40">
                        <span className="text-[var(--text-muted)] block text-[10px]">CURRENTLY</span>
                        <span className="text-[var(--text-primary)] font-semibold">{PERSONAL_INFO.currently}</span>
                      </div>
                      <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-header)]/40">
                        <span className="text-[var(--text-muted)] block text-[10px]">DEGREE</span>
                        <span className="text-[var(--text-primary)] font-semibold">{PERSONAL_INFO.educationDegree}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom VS Code Status Bar */}
              <div className="px-3 py-1.5 border-t border-[var(--border-subtle)] bg-[var(--bg-header)] flex items-center justify-between text-[11px] text-[var(--text-secondary)] select-none">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[var(--accent-blue)] font-medium">
                    <GitBranch size={11} />
                    <span>main*</span>
                  </span>
                  <span className="flex items-center gap-1 text-[var(--accent-text)]">
                    <CheckCircle2 size={11} />
                    <span>0 errors, 0 warnings</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[var(--text-muted)]">
                  <span>TypeScript 5.8</span>
                  <span>UTF-8</span>
                  <span>Ln 12, Col 24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
