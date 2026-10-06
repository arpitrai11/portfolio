import { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { TerminalBoot } from './components/TerminalBoot';
import { WorkspaceShell } from './components/WorkspaceShell';
import { MobileLayout } from './components/MobileLayout';
import { CommandPalette } from './components/CommandPalette';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

import { HomeTab } from './components/tabs/HomeTab';
import { AboutTab } from './components/tabs/AboutTab';
import { SkillsTab } from './components/tabs/SkillsTab';
import { ProjectsTab } from './components/tabs/ProjectsTab';
import { ExperienceTab } from './components/tabs/ExperienceTab';
import { EducationTab } from './components/tabs/EducationTab';
import { ContactTab } from './components/tabs/ContactTab';

import type { DetailedProject } from './data/portfolioData';

const VALID_TABS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

function AppContent() {
  // 1. Terminal Boot state: check sessionStorage
  const [bootComplete, setBootComplete] = useState<boolean>(() => {
    return sessionStorage.getItem('arpit_boot_played') === 'true';
  });

  // 2. Active Tab / Section state with URL hash synchronization
  const [activeTab, setActiveTab] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return VALID_TABS.includes(hash) ? hash : 'home';
  });

  // 3. Modals & Overlays
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync hash to state on browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (VALID_TABS.includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when tab changes
  const handleSelectTab = useCallback((tabId: string) => {
    if (VALID_TABS.includes(tabId)) {
      setActiveTab(tabId);
      window.history.replaceState(null, '', `#${tabId}`);
    }
  }, []);

  // Boot sequence completion
  const handleBootComplete = useCallback(() => {
    sessionStorage.setItem('arpit_boot_played', 'true');
    setBootComplete(true);
  }, []);

  // Global Keyboard shortcuts: Ctrl/Cmd + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter projects by skill click
  const [projectFilterIds, setProjectFilterIds] = useState<string[] | null>(null);

  const handleFilterProjects = useCallback(
    (projectIds: string[]) => {
      setProjectFilterIds(projectIds);
      handleSelectTab('projects');
    },
    [handleSelectTab]
  );

  // Show Toast
  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
  }, []);

  // Render current tab content on desktop
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeTab
            onSelectTab={handleSelectTab}
            onOpenResume={() => setIsResumeOpen(true)}
            onSelectProject={(p) => setSelectedProject(p)}
          />
        );
      case 'about':
        return <AboutTab />;
      case 'skills':
        return (
          <SkillsTab
            onSelectTab={handleSelectTab}
            onFilterProjects={handleFilterProjects}
            onNotify={showToast}
          />
        );
      case 'projects':
        return (
          <ProjectsTab
            onSelectProject={(p) => setSelectedProject(p)}
            filterProjectIds={projectFilterIds}
            onClearFilter={() => setProjectFilterIds(null)}
          />
        );
      case 'experience':
        return <ExperienceTab />;
      case 'education':
        return <EducationTab />;
      case 'contact':
        return <ContactTab onNotify={showToast} />;
      default:
        return (
          <HomeTab
            onSelectTab={handleSelectTab}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        );
    }
  };

  return (
    <>
      {/* 1. Terminal Boot Intro: plays once per session, skippable */}
      {!bootComplete && <TerminalBoot onComplete={handleBootComplete} />}

      {/* 2. Desktop Developer Workspace Shell (>= 768px) */}
      <WorkspaceShell
        activeTabId={activeTab}
        onSelectTab={handleSelectTab}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      >
        {renderActiveTabContent()}
      </WorkspaceShell>

      {/* 3. Mobile Single-Column Scroll Layout (< 768px) */}
      <MobileLayout
        activeSectionId={activeTab}
        onSelectSection={handleSelectTab}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      >
        {{
          home: (
            <HomeTab
              onSelectTab={handleSelectTab}
              onOpenResume={() => setIsResumeOpen(true)}
              onSelectProject={(p) => setSelectedProject(p)}
            />
          ),
          about: <AboutTab />,
          skills: (
            <SkillsTab
              onSelectTab={handleSelectTab}
              onFilterProjects={handleFilterProjects}
              onNotify={showToast}
            />
          ),
          projects: (
            <ProjectsTab
              onSelectProject={(p) => setSelectedProject(p)}
              filterProjectIds={projectFilterIds}
              onClearFilter={() => setProjectFilterIds(null)}
            />
          ),
          experience: <ExperienceTab />,
          education: <EducationTab />,
          contact: <ContactTab onNotify={showToast} />,
        }}
      </MobileLayout>

      {/* 4. Global Modals & Overlays */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectTab={(tabId) => {
          handleSelectTab(tabId);
          setIsCommandPaletteOpen(false);
        }}
        onOpenResume={() => {
          setIsCommandPaletteOpen(false);
          setIsResumeOpen(true);
        }}
        onShowToast={showToast}
      />

      <Toast message={toastMessage} onClear={() => setToastMessage(null)} />
    </>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
