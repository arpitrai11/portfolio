import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Home,
  FileCode,
  Layers,
  FolderGit2,
  GitBranch,
  GraduationCap,
  Mail,
  Copy,
  ExternalLink,
  Sun,
  Moon,
  FileText,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tabId: string) => void;
  onOpenResume: () => void;
  onShowToast: (message: string) => void;
}

interface PaletteAction {
  id: string;
  category: 'NAVIGATION' | 'PROJECTS' | 'ACTIONS';
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  handler: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onOpenResume,
  onShowToast,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();

  const actions: PaletteAction[] = [
    // Navigation
    {
      id: 'nav-home',
      category: 'NAVIGATION',
      title: 'Jump to Home',
      subtitle: 'Hero overview, work focus and profile card',
      icon: Home,
      handler: () => {
        onSelectTab('home');
        onClose();
      },
    },
    {
      id: 'nav-about',
      category: 'NAVIGATION',
      title: 'Open about.ts',
      subtitle: 'Code editor, bio, and background summary',
      icon: FileCode,
      handler: () => {
        onSelectTab('about');
        onClose();
      },
    },
    {
      id: 'nav-skills',
      category: 'NAVIGATION',
      title: 'Open skills.json',
      subtitle: 'Categorized technical skill chips and filter',
      icon: Layers,
      handler: () => {
        onSelectTab('skills');
        onClose();
      },
    },
    {
      id: 'nav-projects',
      category: 'NAVIGATION',
      title: 'Open projects/',
      subtitle: 'Flagship systems, architecture and detail view',
      icon: FolderGit2,
      handler: () => {
        onSelectTab('projects');
        onClose();
      },
    },
    {
      id: 'nav-experience',
      category: 'NAVIGATION',
      title: 'Open experience.yml',
      subtitle: 'CI/CD pipeline timeline of roles & engineering milestones',
      icon: GitBranch,
      handler: () => {
        onSelectTab('experience');
        onClose();
      },
    },
    {
      id: 'nav-education',
      category: 'NAVIGATION',
      title: 'Open education.yml',
      subtitle: 'Academic records at BIT Durg and CBSE XII',
      icon: GraduationCap,
      handler: () => {
        onSelectTab('education');
        onClose();
      },
    },
    {
      id: 'nav-contact',
      category: 'NAVIGATION',
      title: 'Open contact.sh',
      subtitle: 'Command-style communication channels and direct reach',
      icon: Mail,
      handler: () => {
        onSelectTab('contact');
        onClose();
      },
    },

    // Projects
    {
      id: 'proj-jaldrishti',
      category: 'PROJECTS',
      title: 'Project: JAL-DRISHTI',
      subtitle: 'Assam basin flood intelligence & early-warning platform',
      icon: FolderGit2,
      handler: () => {
        onSelectTab('projects');
        onClose();
      },
    },
    {
      id: 'proj-ai-auto',
      category: 'PROJECTS',
      title: 'Project: AI Social Media Automation',
      subtitle: 'n8n + Gemini 1.5 autonomous publishing pipeline',
      icon: FolderGit2,
      handler: () => {
        onSelectTab('projects');
        onClose();
      },
    },
    {
      id: 'proj-taxi',
      category: 'PROJECTS',
      title: 'Project: Chhattisgarh Taxi Service',
      subtitle: 'Live ride reservation platform (chhattisgarhtaxiservice.com)',
      icon: FolderGit2,
      handler: () => {
        onSelectTab('projects');
        onClose();
      },
    },

    // Actions
    {
      id: 'action-resume',
      category: 'ACTIONS',
      title: 'View & Download Resume',
      subtitle: 'Open printable curriculum vitae modal',
      icon: FileText,
      handler: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'action-copy-email',
      category: 'ACTIONS',
      title: 'Copy Email Address',
      subtitle: PERSONAL_INFO.email,
      icon: Copy,
      handler: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        onShowToast('Copied email to clipboard!');
        onClose();
      },
    },
    {
      id: 'action-copy-phone',
      category: 'ACTIONS',
      title: 'Copy Phone Number',
      subtitle: PERSONAL_INFO.phone,
      icon: Phone,
      handler: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.phone);
        onShowToast('Copied phone number to clipboard!');
        onClose();
      },
    },
    {
      id: 'action-theme',
      category: 'ACTIONS',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      subtitle: 'Toggle global color palette',
      icon: theme === 'dark' ? Sun : Moon,
      handler: () => {
        toggleTheme();
        onClose();
      },
    },
    {
      id: 'action-github',
      category: 'ACTIONS',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/arpitrai11 (external)',
      icon: ExternalLink,
      handler: () => {
        window.open(PERSONAL_INFO.githubUrl, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'action-linkedin',
      category: 'ACTIONS',
      title: 'Open LinkedIn Profile',
      subtitle: 'linkedin.com/in/arpitrai (external)',
      icon: ExternalLink,
      handler: () => {
        window.open(PERSONAL_INFO.linkedinUrl, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter((action) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      action.title.toLowerCase().includes(q) ||
      (action.subtitle && action.subtitle.toLowerCase().includes(q)) ||
      action.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation inside palette
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].handler();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-xl border border-[var(--border-medium)] bg-[var(--bg-dropdown)] shadow-2xl overflow-hidden font-sans text-sm flex flex-col text-[var(--text-primary)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)]">
          <Search size={16} className="text-[var(--text-muted)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section... (e.g. 'projects', 'resume')"
            className="flex-1 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none font-medium"
            aria-label="Filter command actions"
          />
          <kbd className="px-2 py-0.5 rounded bg-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-muted)]">
            ESC
          </kbd>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-[var(--text-muted)]">
              No matching commands found.
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const Icon = action.icon;
              const isSelected = idx === selectedIndex;

              return (
                <button
                  key={action.id}
                  type="button"
                  onClick={action.handler}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-colors ${
                    isSelected
                      ? 'bg-[var(--accent-muted)] text-[var(--text-primary)] border border-[var(--accent-border)]'
                      : 'hover:bg-[var(--bg-input)] text-[var(--text-secondary)] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-1.5 rounded-md ${
                        isSelected
                          ? 'bg-[var(--accent)] text-[var(--accent-fg)]'
                          : 'bg-[var(--border-subtle)] text-[var(--text-muted)]'
                      }`}
                    >
                      <Icon size={14} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-xs truncate text-[var(--text-primary)]">
                        {action.title}
                      </div>
                      {action.subtitle && (
                        <div className="text-[11px] text-[var(--text-muted)] truncate">
                          {action.subtitle}
                        </div>
                      )}
                    </div>
                  </div>

                  <ArrowRight
                    size={13}
                    className={`shrink-0 ml-2 transition-transform ${
                      isSelected ? 'text-[var(--accent)] translate-x-0.5' : 'text-transparent'
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-[var(--border-subtle)] bg-[var(--bg-header)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] select-none">
          <span>Navigate with ↑ ↓ · Press Enter to execute</span>
          <span>Esc to exit</span>
        </div>
      </div>
    </div>
  );
};
