import React from 'react';
import {
  Terminal,
  FileCode,
  FileJson,
  FolderGit2,
  GitBranch,
  Mail,
  Search,
  FileText,
  Sun,
  Moon,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface MobileLayoutProps {
  activeSectionId: string;
  onSelectSection: (sectionId: string) => void;
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
  children: {
    home: React.ReactNode;
    about: React.ReactNode;
    skills: React.ReactNode;
    projects: React.ReactNode;
    experience: React.ReactNode;
    education: React.ReactNode;
    contact: React.ReactNode;
  };
}

const MOBILE_NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Terminal },
  { id: 'about', label: 'About', icon: FileCode },
  { id: 'skills', label: 'Skills', icon: FileJson },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'experience', label: 'Timeline', icon: GitBranch },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const MobileLayout: React.FC<MobileLayoutProps> = ({
  activeSectionId,
  onSelectSection,
  onOpenResume,
  onOpenCommandPalette,
  children,
}) => {
  const { theme, toggleTheme } = useTheme();

  // Scroll to section smoothly on mobile
  const handleNavClick = (sectionId: string) => {
    onSelectSection(sectionId);
    const el = document.getElementById(`section-${sectionId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] md:hidden">
      {/* 1. Mobile Top Header */}
      <header className="sticky top-0 z-40 h-14 border-b border-[var(--border-subtle)] bg-[var(--bg-header)]/95 backdrop-blur-md px-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[var(--accent)] text-[var(--accent-fg)] flex items-center justify-center font-mono font-bold text-xs shadow-xs">
            {PERSONAL_INFO.initials}
          </div>
          <span className="text-sm font-bold tracking-tight text-[var(--text-primary)]">
            {PERSONAL_INFO.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Command Palette Trigger */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            aria-label="Search"
            className="p-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Search size={16} />
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Resume CTA */}
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-fg)] font-semibold text-xs font-mono shadow-xs active:scale-95 transition-all"
          >
            <FileText size={13} />
            <span>CV</span>
          </button>
        </div>
      </header>

      {/* 2. Single Column Scrollable Content */}
      <main className="flex-1 px-4 py-6 pb-24 space-y-12 max-w-lg mx-auto w-full">
        {/* Section: Home */}
        <section id="section-home" className="scroll-mt-18">
          {children.home}
        </section>

        {/* Section: About */}
        <section id="section-about" className="scroll-mt-18 pt-6 border-t border-[var(--border-subtle)]">
          {children.about}
        </section>

        {/* Section: Skills */}
        <section id="section-skills" className="scroll-mt-18 pt-6 border-t border-[var(--border-subtle)]">
          {children.skills}
        </section>

        {/* Section: Projects */}
        <section id="section-projects" className="scroll-mt-18 pt-6 border-t border-[var(--border-subtle)]">
          {children.projects}
        </section>

        {/* Section: Experience */}
        <section id="section-experience" className="scroll-mt-18 pt-6 border-t border-[var(--border-subtle)]">
          {children.experience}
        </section>

        {/* Section: Education */}
        <section id="section-education" className="scroll-mt-18 pt-6 border-t border-[var(--border-subtle)]">
          {children.education}
        </section>

        {/* Section: Contact */}
        <section id="section-contact" className="scroll-mt-18 pt-6 border-t border-[var(--border-subtle)]">
          {children.contact}
        </section>

        {/* Mobile Footer */}
        <footer className="pt-8 border-t border-[var(--border-subtle)] text-center text-xs font-mono text-[var(--text-muted)] space-y-2">
          <p>© 2026 Arpit Rai · Full Stack Software Engineer</p>
          <p className="text-[11px] text-[var(--text-muted)]">
            Built with React &amp; TypeScript · Fast, clean &amp; accessible
          </p>
        </footer>
      </main>

      {/* 3. Sticky Bottom Mobile Nav */}
      <nav
        aria-label="Mobile navigation"
        className="fixed bottom-0 left-0 right-0 z-40 h-16 border-t border-[var(--border-subtle)] bg-[var(--bg-header)]/95 backdrop-blur-md px-2 flex items-center justify-around"
      >
        {MOBILE_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSectionId === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center justify-center gap-1 py-1 px-2.5 rounded-lg text-xs font-mono transition-colors ${
                isActive
                  ? 'text-[var(--accent)] font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Icon size={16} />
              <span className="text-[10px]">{item.label}</span>
              {isActive && <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
