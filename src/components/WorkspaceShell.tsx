import React, { useState, useEffect } from 'react';
import {
  Terminal,
  FileCode,
  FileJson,
  FolderGit2,
  GitBranch,
  GraduationCap,
  Mail,
  Sun,
  Moon,
  FileText,
  Search,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { WorkspaceTerminal } from './WorkspaceTerminal';

export interface TabConfig {
  id: string;
  hash: string;
  name: string;
  filename: string;
  filetype: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const WORKSPACE_TABS: TabConfig[] = [
  {
    id: 'home',
    hash: '#home',
    name: 'Home',
    filename: 'home.tsx',
    filetype: 'TypeScript React',
    icon: Terminal,
  },
  {
    id: 'about',
    hash: '#about',
    name: 'About',
    filename: 'about.ts',
    filetype: 'TypeScript',
    icon: FileCode,
  },
  {
    id: 'skills',
    hash: '#skills',
    name: 'Skills',
    filename: 'skills.json',
    filetype: 'JSON Data',
    icon: FileJson,
  },
  {
    id: 'projects',
    hash: '#projects',
    name: 'Projects',
    filename: 'projects/',
    filetype: 'Directory',
    icon: FolderGit2,
  },
  {
    id: 'experience',
    hash: '#experience',
    name: 'Experience',
    filename: 'experience.yml',
    filetype: 'YAML Config',
    icon: GitBranch,
  },
  {
    id: 'education',
    hash: '#education',
    name: 'Education',
    filename: 'education.yml',
    filetype: 'YAML Spec',
    icon: GraduationCap,
  },
  {
    id: 'contact',
    hash: '#contact',
    name: 'Contact',
    filename: 'contact.sh',
    filetype: 'Shell Script',
    icon: Mail,
  },
];

interface WorkspaceShellProps {
  activeTabId: string;
  onSelectTab: (tabId: string) => void;
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
  children: React.ReactNode;
}

export const WorkspaceShell: React.FC<WorkspaceShellProps> = ({
  activeTabId,
  onSelectTab,
  onOpenResume,
  onOpenCommandPalette,
  children,
}) => {
  const { theme, toggleTheme } = useTheme();
  const currentTab = WORKSPACE_TABS.find((t) => t.id === activeTabId) || WORKSPACE_TABS[0];

  // Workstation Terminal State
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Live IST Clock (Asia/Kolkata)
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setIstTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:flex flex-col h-screen w-screen overflow-hidden bg-[var(--bg-app)] text-[var(--text-primary)] select-none">
      {/* 1. Global Workspace Top Bar */}
      <header className="h-12 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] flex items-center justify-between px-4 shrink-0 z-20 shadow-xs">
        {/* Brand / Logo + Workstation Title */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Go to Home"
          >
            <div className="w-7 h-7 rounded-lg bg-[var(--accent)] text-[var(--accent-fg)] flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover:scale-105 transition-transform">
              {PERSONAL_INFO.initials}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-bold tracking-tight text-[var(--text-primary)] font-display">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)] hidden lg:inline">
                / workspace
              </span>
            </div>
          </button>

          {/* Status Badge: Available for opportunities */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-xs font-mono text-[var(--text-secondary)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>{PERSONAL_INFO.status}</span>
          </div>
        </div>

        {/* Global Center: Command Palette Trigger Button */}
        <div className="flex-1 max-w-md mx-4">
          <button
            type="button"
            onClick={onOpenCommandPalette}
            aria-label="Open command palette"
            className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)] text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-medium)] transition-colors shadow-xs"
          >
            <div className="flex items-center gap-2">
              <Search size={13} className="text-[var(--text-muted)]" />
              <span>Search files, commands, systems...</span>
            </div>
            <kbd className="px-1.5 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[10px] text-[var(--text-muted)]">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Top Right Controls: Resume, Theme Toggle, External Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Visible Prominent Resume Button */}
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent)] text-[var(--accent-fg)] font-semibold text-xs font-mono transition-all hover:bg-[var(--accent-hover)] active:scale-[0.98] shadow-xs cursor-pointer"
          >
            <FileText size={13} />
            <span>Resume</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-medium)] transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* GitHub / LinkedIn Icons */}
          <div className="flex items-center gap-1 pl-1 border-l border-[var(--border-subtle)]">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. Workspace Body: Left Activity Bar + Collapsible File Explorer + Main Canvas */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar (VS Code style) */}
        <aside
          aria-label="Activity Bar"
          className="w-13 border-r border-[var(--border-subtle)] bg-[var(--bg-header)] flex flex-col items-center justify-between py-3 shrink-0 z-10"
        >
          {/* Top Activity Icons */}
          <div className="flex flex-col items-center gap-1.5 w-full">
            {WORKSPACE_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTabId === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectTab(tab.id)}
                  title={`${tab.name} (${tab.filename})`}
                  aria-label={tab.name}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-[var(--bg-tab-active)] text-[var(--accent-text)] shadow-xs'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tab-hover)]'
                  }`}
                >
                  <Icon size={18} />
                  {isActive && (
                    <span className="absolute -left-2 w-1 h-5 rounded-r bg-[var(--accent)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Bottom Activity Icons */}
          <div className="flex flex-col items-center gap-1.5 w-full pt-3 border-t border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={() => setIsTerminalOpen((prev) => !prev)}
              title="Toggle Terminal Panel"
              aria-label="Toggle Terminal Panel"
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                isTerminalOpen
                  ? 'text-[var(--accent)] bg-[var(--bg-tab-active)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tab-hover)]'
              }`}
            >
              <Terminal size={16} />
            </button>
            <button
              type="button"
              onClick={onOpenCommandPalette}
              title="Command Palette (⌘K)"
              aria-label="Command Palette"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tab-hover)] transition-all"
            >
              <Search size={16} />
            </button>
          </div>
        </aside>

        {/* Main Editor Canvas + Collapsible Terminal */}
        <main className="flex-1 flex flex-col overflow-hidden bg-[var(--bg-app)]">
          {/* Horizontal File Tabs Bar */}
          <div
            role="tablist"
            aria-label="Workspace tabs"
            className="h-10 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] flex items-stretch overflow-x-auto no-scrollbar shrink-0 select-none px-2 shadow-xs"
          >
            {WORKSPACE_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTabId === tab.id;

              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  type="button"
                  onClick={() => onSelectTab(tab.id)}
                  className={`group relative flex items-center gap-2 px-3.5 border-r border-[var(--border-subtle)] text-xs font-mono transition-colors shrink-0 ${
                    isActive
                      ? 'bg-[var(--bg-tab-active)] text-[var(--text-primary)] font-semibold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tab-hover)]'
                  }`}
                >
                  <Icon
                    size={13}
                    className={isActive ? 'text-[var(--accent-text)]' : 'text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]'}
                  />
                  <span>{tab.filename}</span>

                  {/* Top Active Bar */}
                  {isActive && (
                    <span className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--accent)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Breadcrumb Path Bar */}
          <div className="h-7 border-b border-[var(--border-subtle)] bg-[var(--bg-card)]/40 px-4 flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] shrink-0 select-none">
            <div className="flex items-center gap-1.5">
              <span>arpit-workspace</span>
              <span>&gt;</span>
              <span>src</span>
              <span>&gt;</span>
              <span className="text-[var(--text-primary)] font-medium">{currentTab.filename}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">{currentTab.filetype}</span>
              <span className="flex items-center gap-1.5 text-[var(--accent-text)] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>In Sync</span>
              </span>
            </div>
          </div>

          {/* Active Tab Canvas (Scrollable Buffer) */}
          <div
            id={`panel-${currentTab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentTab.id}`}
            tabIndex={0}
            className={`flex-1 overflow-y-auto outline-hidden select-text ${
              activeTabId === 'home'
                ? 'p-0'
                : activeTabId === 'projects'
                ? 'p-3 sm:p-4 lg:p-5'
                : 'p-4 sm:p-6 lg:p-8'
            }`}
          >
            <div
              className={`${
                activeTabId === 'home' || activeTabId === 'projects'
                  ? 'w-full'
                  : 'max-w-6xl mx-auto'
              } animate-in fade-in duration-150`}
            >
              {children}
            </div>
          </div>

          {/* Collapsible Bottom Terminal Panel */}
          <WorkspaceTerminal
            isOpen={isTerminalOpen}
            onClose={() => setIsTerminalOpen(false)}
            onSelectTab={onSelectTab}
            onOpenResume={onOpenResume}
          />

          {/* Bottom Workstation Status Bar: Git branch, errors, live IST clock, Online status */}
          <footer className="h-6 border-t border-[var(--border-subtle)] bg-[var(--bg-header)] px-4 flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] shrink-0 select-none z-10 shadow-xs">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                <GitBranch size={12} className="text-[var(--accent)]" />
                <span>main*</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[var(--text-muted)]">
                <CheckCircle2 size={11} className="text-[var(--accent)]" />
                <span>0 errors</span>
              </div>
              {/* Terminal Quick Toggle Button */}
              <button
                type="button"
                onClick={() => setIsTerminalOpen((prev) => !prev)}
                className={`flex items-center gap-1 px-1.5 py-0.5 rounded transition-colors ${
                  isTerminalOpen
                    ? 'text-[var(--accent)] bg-[var(--bg-input)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Terminal size={11} />
                <span>Terminal $</span>
              </button>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              {/* Live IST Clock */}
              <div className="flex items-center gap-1.5 text-[var(--text-secondary)] font-medium">
                <Clock size={11} className="text-[var(--accent)]" />
                <span>{istTime || 'IST'}</span>
              </div>

              <span className="hidden lg:inline">Ln 1, Col 1</span>
              <span className="hidden sm:inline">UTF-8</span>

              {/* Online Indicator */}
              <div className="flex items-center gap-1.5 text-[var(--accent)] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                <span>Online</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};
