import React from 'react';
import {
  ArrowRight,
  FileText,
  Mail,
  ExternalLink,
  Wifi,
  BatteryCharging,
  Sliders,
  FolderKanban,
  Code,
  Activity,
  AppWindow,
  GitBranch,
  Cpu,
  Radio,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CodeWindow } from './CodeWindow';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroDesktopOSProps {
  onOpenResume: () => void;
}

export const HeroDesktopOS: React.FC<HeroDesktopOSProps> = ({ onOpenResume }) => {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dockApps = [
    { label: 'Intro (Terminal)', icon: Code, targetId: 'intro' },
    { label: 'Hero (Desktop OS)', icon: AppWindow, targetId: 'hero' },
    { label: 'About (VS Code)', icon: FolderKanban, targetId: 'about' },
    { label: 'Skills (Monitor)', icon: Activity, targetId: 'stack' },
    { label: 'Projects (Launcher)', icon: Sliders, targetId: 'projects' },
    { label: 'Experience (CI/CD)', icon: GitBranch, targetId: 'experience' },
    { label: 'Education (Specs)', icon: Cpu, targetId: 'education' },
    { label: 'Contact (Console)', icon: Radio, targetId: 'contact' },
  ];

  return (
    <section id="hero" className="py-10" aria-label="Desktop OS Hero">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-3">
        {/* Concept Label */}
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <AppWindow size={14} className="text-[var(--accent-blue)]" />
            <span className="text-[var(--text-primary)] font-medium">SECTION 02 // DESKTOP OS WORKSPACE</span>
            <span className="text-[var(--text-muted)]">· Main Environment</span>
          </div>
          <span className="hidden sm:inline text-[11px] text-[var(--text-muted)]">Desktop Resolution: 1440x900</span>
        </div>

        {/* Desktop OS Main Frame */}
        <div className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden flex flex-col">
          {/* OS Top Menu Bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] text-xs font-mono select-none">
            {/* Left Menus */}
            <div className="flex items-center gap-4 sm:gap-6 text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5 font-bold text-[var(--text-primary)]">
                <span className="w-2 h-2 rounded-xs bg-[var(--accent-blue)]" />
                <span>AR OS</span>
              </span>
              <div className="hidden sm:flex items-center gap-4 text-[11px]">
                <button type="button" onClick={() => handleScrollToSection('about')} className="hover:text-[var(--text-primary)] transition-colors">File</button>
                <button type="button" onClick={() => handleScrollToSection('projects')} className="hover:text-[var(--text-primary)] transition-colors">Applications</button>
                <button type="button" onClick={() => handleScrollToSection('stack')} className="hover:text-[var(--text-primary)] transition-colors">Systems</button>
                <button type="button" onClick={() => handleScrollToSection('contact')} className="hover:text-[var(--text-primary)] transition-colors">Network</button>
              </div>
            </div>

            {/* Right Status Indicators */}
            <div className="flex items-center gap-3 sm:gap-4 text-[11px] text-[var(--text-secondary)]">
              <span className="hidden md:flex items-center gap-1.5 text-[var(--accent-text)] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                <span>Available for opportunities</span>
              </span>
              <span className="flex items-center gap-1">
                <Wifi size={13} className="text-[var(--accent-blue)]" />
                <span className="hidden sm:inline text-[var(--text-muted)]">Connected</span>
              </span>
              <span className="flex items-center gap-1">
                <BatteryCharging size={13} className="text-[var(--accent-text)]" />
                <span className="hidden sm:inline text-[var(--text-muted)]">100%</span>
              </span>
              <span className="text-[var(--text-primary)] font-medium">India (IST)</span>
            </div>
          </div>

          {/* Desktop Canvas / Workspace Body */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Hero Content */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-[var(--text-secondary)] border-b border-[var(--border-subtle)] pb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
                    {PERSONAL_INFO.role.toUpperCase()}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[var(--text-primary)] leading-[1.08]">
                  {PERSONAL_INFO.headline.line1}
                  <br />
                  {PERSONAL_INFO.headline.line2}
                  <br />
                  <span className="text-[var(--accent-blue)]">{PERSONAL_INFO.headline.line3}</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed font-normal">
                  {PERSONAL_INFO.bio}
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleScrollToSection('projects')}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-canvas)] font-medium text-sm transition-all duration-150 hover:opacity-90 active:scale-[0.98] shadow-md"
                  >
                    <span>View Selected Work</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-150 group-hover:translate-x-0.5"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-medium text-sm transition-all duration-150 hover:border-[var(--border-hover)] hover:bg-[var(--bg-header)] active:scale-[0.98] shadow-xs"
                  >
                    <FileText size={15} className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]" />
                    <span>Download Resume</span>
                    <ArrowRight
                      size={14}
                      className="text-[var(--text-secondary)] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[var(--text-primary)]"
                    />
                  </button>
                </div>

                {/* Social & Contact Links */}
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3">
                    Active System Channels
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
                    <a
                      href={PERSONAL_INFO.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all shadow-xs"
                    >
                      <GithubIcon size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]" />
                      <span>GitHub</span>
                      <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-muted)]" />
                    </a>

                    <a
                      href={PERSONAL_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all shadow-xs"
                    >
                      <LinkedinIcon size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]" />
                      <span>LinkedIn</span>
                      <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-muted)]" />
                    </a>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all shadow-xs"
                    >
                      <Mail size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]" />
                      <span>Email</span>
                      <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-muted)]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Embedded Developer Profile Editor Window */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <CodeWindow />
              </div>
            </div>
          </div>

          {/* Desktop OS Bottom Dock */}
          <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-header)] px-4 py-2.5 flex items-center justify-between">
            <span className="text-[11px] font-mono text-[var(--text-muted)]">WORKSPACE DOCK // APPS</span>
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-0.5">
              {dockApps.map((app) => {
                const Icon = app.icon;
                return (
                  <button
                    key={app.label}
                    type="button"
                    onClick={() => handleScrollToSection(app.targetId)}
                    title={app.label}
                    className="p-1.5 sm:p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:border-[var(--accent-blue)]/50 transition-all duration-150 flex items-center gap-1.5 text-[11px] font-mono whitespace-nowrap shadow-xs"
                  >
                    <Icon size={13} />
                    <span className="hidden lg:inline">{app.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
