import React, { useState } from 'react';
import { Activity, Cpu, HardDrive, Search, CheckCircle2 } from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';

interface FlatProcess {
  pid: number;
  name: string;
  category: string;
  runtime: string;
  status: 'ACTIVE' | 'RUNNING';
}

export const SkillsSystemMonitor: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getRuntimeForCategory = (cat: string): string => {
    switch (cat) {
      case 'FRONTEND':
        return 'V8 / React Fiber';
      case 'BACKEND':
        return 'Node.js EventLoop / HTTP';
      case 'DATABASES':
        return 'ACID / Storage Engine';
      case 'CLOUD & DEVOPS':
        return 'OCI Container / Cloud';
      case 'AI & AUTOMATION':
        return 'LLM Orchestration / API';
      default:
        return 'System Daemon';
    }
  };

  const allProcesses: FlatProcess[] = TECH_STACK.flatMap((group, groupIdx) =>
    group.skills.map((skill, skillIdx) => ({
      pid: 2000 + groupIdx * 20 + skillIdx + 1,
      name: skill,
      category: group.category,
      runtime: getRuntimeForCategory(group.category),
      status: 'ACTIVE',
    }))
  );

  const filteredProcesses = allProcesses.filter((proc) => {
    const matchesCategory =
      activeCategory === 'ALL' || proc.category === activeCategory;
    const matchesSearch =
      proc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proc.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['ALL', ...TECH_STACK.map((g) => g.category)];

  return (
    <section id="stack" className="py-12" aria-label="Skills System Monitor">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-3">
        {/* Concept Label */}
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-[var(--accent-blue)]" />
            <span className="text-[var(--text-primary)] font-medium">SECTION 04 // SYSTEM ACTIVITY MONITOR</span>
            <span className="text-[var(--text-muted)]">· Process Manager</span>
          </div>
          <span className="hidden sm:inline text-[11px] text-[var(--text-muted)]">27 Active Daemons</span>
        </div>

        {/* System Monitor Window Container */}
        <div className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden font-mono text-xs">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E] shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F] shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#62C554] shadow-xs" />
              <span className="text-[var(--text-secondary)] text-[11px] pl-3">
                System Activity Monitor — [Host: arpit-workstation]
              </span>
            </div>
            <div className="text-[11px] text-[var(--accent-text)] flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>Full Stack Operational</span>
            </div>
          </div>

          {/* System Diagnostic Headroom / Header summary */}
          <div className="p-4 sm:p-5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)]/40 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--accent-blue)] shadow-xs">
                <Cpu size={15} />
              </div>
              <div>
                <span className="text-[10px] text-[var(--text-muted)] block uppercase">CORE ARCHITECTURE</span>
                <span className="text-xs text-[var(--text-primary)] font-semibold">Web & AI Automation</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--accent-text)] shadow-xs">
                <Activity size={15} />
              </div>
              <div>
                <span className="text-[10px] text-[var(--text-muted)] block uppercase">DAEMON SERVICES</span>
                <span className="text-xs text-[var(--accent-text)] font-semibold">27 Running (0 Dormant)</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sky-500 shadow-xs">
                <HardDrive size={15} />
              </div>
              <div>
                <span className="text-[10px] text-[var(--text-muted)] block uppercase">ENVIRONMENTS</span>
                <span className="text-xs text-[var(--text-primary)] font-semibold">Frontend · Backend · Cloud</span>
              </div>
            </div>
          </div>

          {/* Controls: Search and Category Pills */}
          <div className="p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 text-[11px]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap shadow-xs ${
                    activeCategory === cat
                      ? 'bg-[var(--accent-blue)] text-white font-medium'
                      : 'bg-[var(--bg-header)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Filter Search Input */}
            <div className="relative">
              <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter process by name..."
                className="w-full sm:w-56 pl-8 pr-3 py-1 bg-[var(--bg-input)] border border-[var(--border-subtle)] rounded text-[11px] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]"
                aria-label="Filter process by name"
              />
            </div>
          </div>

          {/* Process Table View */}
          <div className="overflow-x-auto max-h-[380px]">
            <table className="w-full text-left border-collapse" role="table">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] bg-[var(--bg-header)] text-[10px] uppercase text-[var(--text-muted)] tracking-wider">
                  <th className="py-2.5 px-4 font-normal">PID</th>
                  <th className="py-2.5 px-4 font-normal">PROCESS / TECHNOLOGY</th>
                  <th className="py-2.5 px-4 font-normal">SUBSYSTEM</th>
                  <th className="py-2.5 px-4 font-normal">RUNTIME / PROTOCOL</th>
                  <th className="py-2.5 px-4 font-normal text-right">STATE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]/70 text-xs">
                {filteredProcesses.map((proc) => (
                  <tr
                    key={proc.pid}
                    className="hover:bg-[var(--bg-header)]/60 transition-colors"
                  >
                    <td className="py-2 px-4 text-[var(--text-muted)]">{proc.pid}</td>
                    <td className="py-2 px-4 font-medium text-[var(--text-primary)] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
                      <span>{proc.name}</span>
                    </td>
                    <td className="py-2 px-4 text-[var(--text-secondary)] text-[11px]">
                      {proc.category}
                    </td>
                    <td className="py-2 px-4 text-[var(--text-muted)] text-[11px]">
                      {proc.runtime}
                    </td>
                    <td className="py-2 px-4 text-right">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent-text)] border border-[var(--accent-border)] text-[10px] font-semibold">
                        <CheckCircle2 size={10} />
                        {proc.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Table Status */}
          <div className="px-4 py-2 border-t border-[var(--border-subtle)] bg-[var(--bg-header)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
            <span>Displaying {filteredProcesses.length} of {allProcesses.length} processes</span>
            <span>Memory: 100% Healthy · Load Average: 0.12, 0.08, 0.05</span>
          </div>
        </div>
      </div>
    </section>
  );
};
