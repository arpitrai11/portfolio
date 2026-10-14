import React, { useState } from 'react';
import {
  Search,
  ArrowUpRight,
  Sliders,
  Navigation,
  ShieldCheck,
  Terminal,
  Activity,
  MapPin,
  Workflow,
  Sparkles,
  Monitor,
  Smartphone,
  Tablet,
  Radio,
  Mic,
  Eye,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const ProjectsLauncher: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'AI' | 'SAAS' | 'EXTENSIONS'>('ALL');
  const [search, setSearch] = useState('');

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesFilter =
      filter === 'ALL' ||
      (filter === 'AI' && (proj.number === '01' || proj.number === '02' || proj.number === '05')) ||
      (filter === 'SAAS' && proj.number === '03') ||
      (filter === 'EXTENSIONS' && (proj.number === '04' || proj.number === '05'));

    const matchesSearch =
      proj.name.toLowerCase().includes(search.toLowerCase()) ||
      proj.description.toLowerCase().includes(search.toLowerCase()) ||
      proj.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-12" aria-label="Projects Application Launcher">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Concept Label */}
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <Sliders size={14} className="text-[var(--accent-blue)]" />
            <span className="text-[var(--text-primary)] font-medium">SECTION 05 // APPLICATION LAUNCHER</span>
            <span className="text-[var(--text-muted)]">· Raycast / Spotlight UI</span>
          </div>
          <span className="hidden sm:inline text-[11px] text-[var(--text-muted)]">5 Installed Applications</span>
        </div>

        {/* Launcher Search Bar Frame (Raycast / Spotlight style) */}
        <div className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 shadow-xl font-mono text-xs space-y-3">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[var(--bg-input)] border border-[var(--border-subtle)]">
            <Search size={15} className="text-[var(--accent-blue)] shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search applications, technologies, or architecture concepts... [ ⌘K ]"
              className="flex-1 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs focus:outline-none"
              aria-label="Search applications in launcher"
            />
            <span className="px-2 py-0.5 rounded bg-[var(--bg-header)] border border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)]">
              ESC
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-[11px]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[var(--text-muted)]">FILTER:</span>
              <button
                type="button"
                onClick={() => setFilter('ALL')}
                className={`px-2.5 py-1 rounded transition-colors shadow-xs ${
                  filter === 'ALL'
                    ? 'bg-[var(--accent-blue)] text-white font-medium'
                    : 'bg-[var(--bg-header)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                All Applications (5)
              </button>
              <button
                type="button"
                onClick={() => setFilter('AI')}
                className={`px-2.5 py-1 rounded transition-colors shadow-xs ${
                  filter === 'AI'
                    ? 'bg-[var(--accent-blue)] text-white font-medium'
                    : 'bg-[var(--bg-header)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                AI & Automation (3)
              </button>
              <button
                type="button"
                onClick={() => setFilter('SAAS')}
                className={`px-2.5 py-1 rounded transition-colors shadow-xs ${
                  filter === 'SAAS'
                    ? 'bg-[var(--accent-blue)] text-white font-medium'
                    : 'bg-[var(--bg-header)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Full Stack SaaS (1)
              </button>
              <button
                type="button"
                onClick={() => setFilter('EXTENSIONS')}
                className={`px-2.5 py-1 rounded transition-colors shadow-xs ${
                  filter === 'EXTENSIONS'
                    ? 'bg-[var(--accent-blue)] text-white font-medium'
                    : 'bg-[var(--bg-header)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Chrome Extensions (2)
              </button>
            </div>
            <span className="text-[var(--text-muted)] hidden sm:inline">
              Selected: {filteredProjects.length} application(s)
            </span>
          </div>
        </div>

        {/* Project 1: JAL-DRISHTI -> Data/AI Dashboard UI */}
        {(filter === 'ALL' || filter === 'AI') && (
          <div className="rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)]">
            {/* Window Titlebar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E] shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F] shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#62C554] shadow-xs" />
                <span className="text-[var(--text-secondary)] text-[11px] pl-3">
                  JalDrishti.app — [Data/AI Hydrological Dashboard]
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-[var(--accent-blue)] border border-blue-500/20 text-[10px] font-semibold">
                DATA/AI DASHBOARD
              </span>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 lg:p-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Project Details */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-header)] text-[var(--accent-blue)] font-semibold">
                      01 — JAL-DRISHTI
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] pt-1">
                      AI-Driven Flood Prediction & Early Warning Platform
                    </h3>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Basin-scale flood intelligence and early-warning platform combining historical flood events, rainfall data, hydrological connectivity and terrain data.
                  </p>

                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'React', 'TypeScript', 'REST APIs'].map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-header)] text-[var(--text-primary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://github.com/arpitrai11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] transition-all shadow-xs"
                    >
                      <GithubIcon size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)]" />
                      <span>GitHub Profile →</span>
                    </a>
                  </div>
                </div>

                {/* Right: Data / AI Telemetry Canvas */}
                <div className="lg:col-span-7 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-header)]/40 p-5 space-y-5 font-mono">
                  {/* Metric Gauges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xs">
                      <span className="text-[10px] text-[var(--text-muted)] block">RIVER STAGE</span>
                      <span className="text-sm font-bold text-[var(--accent-blue)]">4.82 m</span>
                      <span className="text-[10px] text-[var(--accent-text)] block pt-0.5">Normal Buffer</span>
                    </div>
                    <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xs">
                      <span className="text-[10px] text-[var(--text-muted)] block">PRECIPITATION</span>
                      <span className="text-sm font-bold text-amber-500">124 mm</span>
                      <span className="text-[10px] text-[var(--text-muted)] block pt-0.5">Past 24 Hours</span>
                    </div>
                    <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xs">
                      <span className="text-[10px] text-[var(--text-muted)] block">FLOW RATE</span>
                      <span className="text-sm font-bold text-[var(--text-primary)]">3,420 m³/s</span>
                      <span className="text-[10px] text-[var(--text-muted)] block pt-0.5">Hydrological Flow</span>
                    </div>
                    <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xs">
                      <span className="text-[10px] text-[var(--text-muted)] block">ALERT LEVEL</span>
                      <span className="text-sm font-bold text-amber-500">ADVISORY</span>
                      <span className="text-[10px] text-amber-500 block pt-0.5">Threshold 2</span>
                    </div>
                  </div>

                  {/* River Basin Contour Vector & Live Sensor Stream */}
                  <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-3 shadow-xs">
                    <div className="flex items-center justify-between text-[11px] text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1.5 text-[var(--text-primary)] font-medium">
                        <Activity size={12} className="text-[var(--accent-blue)]" />
                        <span>Basin Watershed Spatial Elevation & River Gauge Mesh</span>
                      </span>
                      <span className="text-[var(--accent-text)] text-[10px] font-semibold">Telemetry Live</span>
                    </div>

                    <svg viewBox="0 0 500 120" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 10 100 Q 140 60 260 85 T 490 50" stroke="currentColor" className="text-slate-300 dark:text-[#1D2633]" strokeWidth="1.5" strokeDasharray="3 3" />
                      <path d="M 10 80 Q 150 30 280 55 T 490 20" stroke="currentColor" className="text-slate-400 dark:text-[#263445]" strokeWidth="1.5" />
                      <path d="M 20 95 C 130 100 170 45 280 60 C 370 72 410 30 480 25" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="200" cy="58" r="4" fill="#3B82F6" />
                      <circle cx="200" cy="58" r="9" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />
                      <circle cx="360" cy="62" r="4" fill="#3B82F6" />
                      <circle cx="360" cy="62" r="9" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />
                      <circle cx="480" cy="25" r="5" fill="var(--accent)" />
                      <text x="160" y="85" fill="currentColor" className="text-[var(--text-secondary)]" fontSize="9" fontFamily="JetBrains Mono">GAUGE-A (4.8m)</text>
                      <text x="320" y="90" fill="currentColor" className="text-[var(--text-secondary)]" fontSize="9" fontFamily="JetBrains Mono">GAUGE-B (3.2m)</text>
                    </svg>

                    <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                      <span>Inference: Hydro-LSTM Time-Series</span>
                      <span className="text-[var(--accent-blue)] font-medium">Confidence: 94.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project 2: AI Social Media Automation -> n8n Workflow UI */}
        {(filter === 'ALL' || filter === 'AI') && (
          <div className="rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)]">
            {/* Window Titlebar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E] shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F] shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#62C554] shadow-xs" />
                <span className="text-[var(--text-secondary)] text-[11px] pl-3">
                  n8n-workflow-editor — [Autonomous Publishing Pipeline Canvas]
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent-text)] border border-[var(--accent-border)] text-[10px] font-semibold">
                N8N WORKFLOW
              </span>
            </div>

            {/* Workflow Canvas Content */}
            <div className="p-6 lg:p-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Project Details */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-header)] text-[var(--accent-blue)] font-semibold">
                      02 — AI SOCIAL MEDIA AUTOMATION
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] pt-1">
                      AI-Powered Content Generation and Publishing Workflow
                    </h3>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Automated social media workflow for generating captions, hashtags and images with human approval before publishing.
                  </p>

                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['n8n', 'Gemini', 'Kie.ai', 'Telegram', 'Docker'].map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-header)] text-[var(--text-primary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://github.com/arpitrai11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] transition-all shadow-xs"
                    >
                      <GithubIcon size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)]" />
                      <span>GitHub Profile →</span>
                    </a>
                  </div>
                </div>

                {/* Right: n8n Node Workflow Graph */}
                <div className="lg:col-span-7 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-header)]/40 p-5 space-y-4 font-mono">
                  <div className="flex items-center justify-between text-[11px] text-[var(--text-secondary)] border-b border-[var(--border-subtle)] pb-3">
                    <div className="flex items-center gap-2">
                      <Workflow size={13} className="text-[var(--accent-blue)]" />
                      <span className="text-[var(--text-primary)] font-medium">WORKFLOW EXECUTION // n8n_pipeline_v3</span>
                    </div>
                    <span className="text-[var(--accent-text)] text-[10px] font-semibold">CONTAINER: DOCKER UP</span>
                  </div>

                  {/* Visual Node Graph */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {/* Node 1 */}
                    <div className="p-3.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-1.5 shadow-xs">
                      <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                        <span>TRIGGER</span>
                        <Terminal size={11} className="text-[var(--accent-blue)]" />
                      </div>
                      <p className="text-xs font-semibold text-[var(--text-primary)]">Schedule / RSS</p>
                      <p className="text-[10px] text-[var(--text-secondary)]">Cron trigger hourly</p>
                      <span className="inline-block mt-1 text-[9px] px-1.5 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent-text)] border border-[var(--accent-border)] font-semibold">
                        SUCCESS 200
                      </span>
                    </div>

                    {/* Node 2 */}
                    <div className="p-3.5 rounded-lg border border-[var(--accent-blue)]/50 bg-[var(--bg-surface)] space-y-1.5 shadow-xs">
                      <div className="flex items-center justify-between text-[10px] text-[var(--accent-blue)] font-medium">
                        <span>AI SYNTHESIS</span>
                        <Sparkles size={11} className="text-[var(--accent-blue)]" />
                      </div>
                      <p className="text-xs font-semibold text-[var(--text-primary)]">Gemini + Kie.ai</p>
                      <p className="text-[10px] text-[var(--text-secondary)]">Captions & Image gen</p>
                      <span className="inline-block mt-1 text-[9px] px-1.5 py-0.5 rounded bg-blue-500/10 text-[var(--accent-blue)] border border-blue-500/20 font-semibold">
                        INFERRED
                      </span>
                    </div>

                    {/* Node 3 */}
                    <div className="p-3.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-1.5 shadow-xs">
                      <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                        <span>APPROVAL GATE</span>
                        <ShieldCheck size={11} className="text-[var(--accent-text)]" />
                      </div>
                      <p className="text-xs font-semibold text-[var(--text-primary)]">Telegram Bot</p>
                      <p className="text-[10px] text-[var(--text-secondary)]">Human approve/reject</p>
                      <span className="inline-block mt-1 text-[9px] px-1.5 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent-text)] border border-[var(--accent-border)] font-semibold">
                        APPROVED
                      </span>
                    </div>
                  </div>

                  {/* Flow Trace Log line */}
                  <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[11px] flex items-center justify-between text-[var(--text-secondary)] shadow-xs">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-ping" />
                      <span>telegram.poll: message_id=8941 action=approve -&gt; dispatch_live</span>
                    </span>
                    <span className="text-[var(--accent-blue)] text-[10px] font-bold">200 OK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project 3: Taxi Service -> SaaS Dashboard UI */}
        {(filter === 'ALL' || filter === 'SAAS') && (
          <div className="rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)]">
            {/* Window Titlebar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E] shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F] shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#62C554] shadow-xs" />
                <span className="text-[var(--text-secondary)] text-[11px] pl-3">
                  TaxiDispatch SaaS Console — [chhattisgarhtaxiservice.com]
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent-text)] border border-[var(--accent-border)] text-[10px] font-semibold">
                SAAS DASHBOARD
              </span>
            </div>

            {/* SaaS Dashboard Content */}
            <div className="p-6 lg:p-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Project Details */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-header)] text-[var(--accent-blue)] font-semibold">
                      03 — CHHATTISGARH TAXI SERVICE
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] pt-1">
                      Full-Stack Taxi Booking Platform
                    </h3>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Responsive taxi booking platform with authentication, booking workflows, driver and trip management.
                  </p>

                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Express.js', 'MongoDB'].map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-header)] text-[var(--text-primary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Real Link Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="https://chhattisgarhtaxiservice.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-blue)] text-white text-xs font-mono font-medium hover:opacity-90 transition-opacity shadow-md"
                    >
                      <span>Visit Live Website →</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href="https://github.com/arpitrai11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] transition-all shadow-xs"
                    >
                      <GithubIcon size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)]" />
                      <span>GitHub Profile →</span>
                    </a>
                  </div>
                </div>

                {/* Right: SaaS Dispatch & Ride Management Console */}
                <div className="lg:col-span-7 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-header)]/40 p-5 space-y-4 font-mono">
                  <div className="flex items-center justify-between text-[11px] text-[var(--text-secondary)] border-b border-[var(--border-subtle)] pb-3">
                    <div className="flex items-center gap-2">
                      <Navigation size={13} className="text-[var(--accent-blue)]" />
                      <span className="text-[var(--text-primary)] font-medium">TRIP DISPATCH & FLEET CONSOLE</span>
                    </div>
                    <span className="text-[var(--accent-text)] text-[10px] font-semibold">LIVE PRODUCTION</span>
                  </div>

                  {/* Active Booking Ticket Card */}
                  <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-3 shadow-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
                        <MapPin size={13} className="text-[var(--accent-blue)]" />
                        <span>Raipur Junction ➔ Durg BIT Campus</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-blue-500/10 text-[var(--accent-blue)] text-[10px] font-bold">
                        CONFIRMED
                      </span>
                    </div>

                    <div className="w-full bg-[var(--border-subtle)] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[var(--accent-blue)] h-full w-4/5 rounded-full" />
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] text-[var(--text-secondary)]">
                      <div>
                        <span className="text-[var(--text-muted)] block text-[10px]">FLEET MODEL</span>
                        <span className="text-[var(--text-primary)] font-medium">Sedan Premium</span>
                      </div>
                      <div>
                        <span className="text-[var(--text-muted)] block text-[10px]">AUTH SESSION</span>
                        <span className="text-[var(--accent-text)] font-medium">JWT Verified</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[var(--text-muted)] block text-[10px]">DB CLUSTER</span>
                        <span className="text-[var(--text-primary)] font-medium">MongoDB Atlas</span>
                      </div>
                    </div>
                  </div>

                  {/* Production Endpoint Health */}
                  <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between text-[11px] text-[var(--text-muted)] shadow-xs">
                    <span>Host: chhattisgarhtaxiservice.com</span>
                    <span className="text-[var(--accent-text)] font-medium">REST API 200 OK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project 4: Responsify -> Chrome Extension / DevTools UI */}
        {(filter === 'ALL' || filter === 'EXTENSIONS') && (
          <div className="rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)]">
            {/* Window Titlebar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E] shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F] shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#62C554] shadow-xs" />
                <span className="text-[var(--text-secondary)] text-[11px] pl-3">
                  Responsify.crx — [Multi-Viewport Chrome Extension Workspace]
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent-text)] border border-[var(--accent-border)] text-[10px] font-semibold">
                CHROME EXTENSION (MV3)
              </span>
            </div>

            {/* Extension Workspace Content */}
            <div className="p-6 lg:p-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Project Details */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-header)] text-[var(--accent-blue)] font-semibold">
                      04 — RESPONSIFY
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] pt-1">
                      Developer Tool & Multi-Viewport Chrome Extension
                    </h3>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Production-grade Chrome Extension for responsive design testing with infinite canvas, synchronized scrolling across mobile/tablet/desktop frames, zero X-Frame-Options blocking, and embedded DevTools inspector.
                  </p>

                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['Manifest V3', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'declarativeNetRequest'].map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-header)] text-[var(--text-primary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Real Link Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="https://github.com/arpitrai11/Responsify.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-blue)] text-white text-xs font-mono font-medium hover:opacity-90 transition-opacity shadow-md"
                    >
                      <GithubIcon size={14} className="fill-current" />
                      <span>View Repository →</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Right: Extension Canvas Console */}
                <div className="lg:col-span-7 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-header)]/40 p-5 space-y-4 font-mono">
                  <div className="flex items-center justify-between text-[11px] text-[var(--text-secondary)] border-b border-[var(--border-subtle)] pb-3">
                    <div className="flex items-center gap-2">
                      <Eye size={13} className="text-[var(--accent-blue)]" />
                      <span className="text-[var(--text-primary)] font-medium">VIEWPORT WORKSPACE // SYNC_SCROLL_ENGINE</span>
                    </div>
                    <span className="text-[var(--accent-text)] text-[10px] font-semibold">BYPASS_X_FRAME: TRUE</span>
                  </div>

                  {/* 3 Viewport Frames */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-center space-y-2">
                      <Smartphone size={16} className="mx-auto text-[var(--accent-blue)]" />
                      <p className="text-xs font-bold text-[var(--text-primary)]">Mobile</p>
                      <span className="text-[10px] text-[var(--text-muted)] block">375 × 812</span>
                      <span className="inline-block px-1.5 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent-text)] text-[9px] font-semibold">
                        SYNCED
                      </span>
                    </div>

                    <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-center space-y-2">
                      <Tablet size={16} className="mx-auto text-[var(--accent-blue)]" />
                      <p className="text-xs font-bold text-[var(--text-primary)]">Tablet</p>
                      <span className="text-[10px] text-[var(--text-muted)] block">768 × 1024</span>
                      <span className="inline-block px-1.5 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent-text)] text-[9px] font-semibold">
                        SYNCED
                      </span>
                    </div>

                    <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-center space-y-2">
                      <Monitor size={16} className="mx-auto text-[var(--accent-blue)]" />
                      <p className="text-xs font-bold text-[var(--text-primary)]">Desktop</p>
                      <span className="text-[10px] text-[var(--text-muted)] block">1440 × 900</span>
                      <span className="inline-block px-1.5 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent-text)] text-[9px] font-semibold">
                        SYNCED
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between text-[11px] text-[var(--text-muted)] shadow-xs">
                    <span>Embedded DevTools: Element Picker · Live CSS · Box Model</span>
                    <span className="text-[var(--accent-text)] font-medium">declarativeNetRequest Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project 5: MeetMind AI -> Meeting Intelligence & Extraction UI */}
        {(filter === 'ALL' || filter === 'AI' || filter === 'EXTENSIONS') && (
          <div className="rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)]">
            {/* Window Titlebar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E] shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F] shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#62C554] shadow-xs" />
                <span className="text-[var(--text-secondary)] text-[11px] pl-3">
                  MeetMind.ai — [Audio Tab Capture & Task Extraction Engine]
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent-text)] border border-[var(--accent-border)] text-[10px] font-semibold">
                LOCAL-FIRST AI EXTENSION
              </span>
            </div>

            {/* MeetMind Workspace Content */}
            <div className="p-6 lg:p-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Project Details */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-header)] text-[var(--accent-blue)] font-semibold">
                      05 — MEETMIND AI
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] pt-1">
                      Local-First Meeting Intelligence & Task Extraction
                    </h3>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Privacy-focused Chrome Extension capturing browser meetings (Google Meet, Teams, Zoom) using chrome.tabCapture and microphone mixing with zero-loss audio loopback. Free automated transcription with Whisper via Groq, and developer-specific task extraction powered by Gemini 2.0 Flash.
                  </p>

                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['Manifest V3', 'React 18', 'TypeScript', 'Vite', 'IndexedDB', 'Gemini 2.0 Flash', 'Groq Whisper'].map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-header)] text-[var(--text-primary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Real Link Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="https://github.com/arpitrai11/MeetMind"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-blue)] text-white text-xs font-mono font-medium hover:opacity-90 transition-opacity shadow-md"
                    >
                      <GithubIcon size={14} className="fill-current" />
                      <span>View Repository →</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Right: Audio Loopback & Gemini Extraction Monitor */}
                <div className="lg:col-span-7 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-header)]/40 p-5 space-y-4 font-mono">
                  <div className="flex items-center justify-between text-[11px] text-[var(--text-secondary)] border-b border-[var(--border-subtle)] pb-3">
                    <div className="flex items-center gap-2">
                      <Radio size={13} className="text-[var(--accent-blue)]" />
                      <span className="text-[var(--text-primary)] font-medium">AUDIO STREAM // GROQ_WHISPER &lt;300MS</span>
                    </div>
                    <span className="text-[var(--accent-text)] text-[10px] font-semibold">STORAGE: INDEXEDDB</span>
                  </div>

                  {/* Equalizer stream visualization */}
                  <div className="p-3.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                      <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
                        <Mic size={12} className="text-[var(--accent-blue)]" />
                        <span>Mixed Audio Loopback (Tab + Mic)</span>
                      </span>
                      <span className="text-[var(--accent-text)] font-semibold">Zero Audio Loss</span>
                    </div>
                    <div className="flex items-end justify-between h-7 px-1 gap-1">
                      {[30, 70, 45, 90, 60, 100, 80, 40, 75, 95, 50, 85, 40, 65, 90, 70].map((val, idx) => (
                        <div
                          key={idx}
                          className="w-full bg-[var(--accent-blue)] rounded-xs"
                          style={{ height: `${val}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Developer task extraction cards */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                      <span className="text-[10px] text-[var(--text-muted)] block">APIS & ENDPOINTS</span>
                      <span className="text-[11px] font-semibold text-[var(--text-primary)] mt-0.5 block truncate">
                        POST /api/v1/auth/verify
                      </span>
                    </div>
                    <div className="p-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                      <span className="text-[10px] text-[var(--text-muted)] block">DATABASE ACTION</span>
                      <span className="text-[11px] font-semibold text-[var(--accent-text)] mt-0.5 block truncate">
                        Add TTL index on sessions
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between text-[11px] text-[var(--text-muted)] shadow-xs">
                    <span>Task Pipeline: Linear / Jira Summary Auto-Generated</span>
                    <span className="text-[var(--accent-text)] font-medium">Gemini 2.0 Flash</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
