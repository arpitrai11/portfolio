import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import {
  Menu,
  X,
  Terminal,
  AppWindow,
  FileCode,
  Activity,
  Sliders,
  GitBranch,
  Cpu,
  Radio,
  Sun,
  Moon,
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Terminal', href: '#intro', icon: Terminal },
    { label: 'Desktop OS', href: '#hero', icon: AppWindow },
    { label: 'VS Code', href: '#about', icon: FileCode },
    { label: 'Monitor', href: '#stack', icon: Activity },
    { label: 'Launcher', href: '#projects', icon: Sliders },
    { label: 'CI/CD', href: '#experience', icon: GitBranch },
    { label: 'Specs', href: '#education', icon: Cpu },
    { label: 'Console', href: '#contact', icon: Radio },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[var(--bg-canvas)]/95 backdrop-blur-md border-[var(--border-subtle)] shadow-sm'
          : 'bg-[var(--bg-canvas)]/85 backdrop-blur-sm border-[var(--border-subtle)]/70'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2.5 text-sm font-medium tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-colors shrink-0"
          aria-label="Arpit Rai Portfolio Home"
        >
          <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] group-hover:border-[var(--accent-blue)]/50 group-hover:text-[var(--text-primary)] transition-colors shadow-xs">
            {PERSONAL_INFO.initials}
          </span>
          <span className="font-bold tracking-tight text-xs sm:text-sm">
            {PERSONAL_INFO.name.toUpperCase()}
          </span>
        </a>

        {/* Center: Navigation Links for Large Screens */}
        <nav
          className="hidden 2xl:flex items-center gap-3 text-xs font-mono"
          aria-label="Main Navigation Full"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-2 py-1 rounded flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? 'text-[var(--accent-blue)] bg-[var(--bg-highlight)]/40 font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
                }`}
              >
                <Icon size={12} className={isActive ? 'text-[var(--accent-blue)]' : 'text-[var(--text-muted)]'} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Compact Navigation for Standard Laptops (1024px to 1440px) */}
        <nav
          className="hidden md:flex 2xl:hidden items-center gap-1 sm:gap-2 text-xs font-mono"
          aria-label="Main Navigation Compact"
        >
          {navItems.slice(0, 6).map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-2 py-1 rounded transition-colors ${
                  isActive
                    ? 'text-[var(--accent-blue)] bg-[var(--bg-highlight)]/50 font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Controls & Availability */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all shadow-xs"
          >
            {theme === 'dark' ? (
              <Sun size={15} className="text-amber-400" />
            ) : (
              <Moon size={15} className="text-blue-600" />
            )}
          </button>

          {/* Status Indicator */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--text-secondary)] shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent-text)] font-medium">Available</span>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)]/98 backdrop-blur-xl px-6 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center gap-2.5 py-2 px-2 rounded-md text-xs font-mono transition-colors ${
                  isActive
                    ? 'text-[var(--accent-blue)] bg-[var(--bg-highlight)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-[var(--accent-blue)]' : 'text-[var(--text-muted)]'} />
                <span>{item.label}</span>
              </a>
            );
          })}
          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
            <span>Theme: {theme.toUpperCase()}</span>
            <span className="text-[var(--accent-text)] flex items-center gap-1.5 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"></span>
              Available for opportunities
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
