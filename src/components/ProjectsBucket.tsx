import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Folder,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  Search,
  Check,
  Image as ImageIcon,
  X,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { type DetailedProject, DETAILED_PROJECTS } from '../data/portfolioData';

export interface BucketProjectItem {
  id: string;
  key: string;
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  imageFallback?: string;
  type: string;
  status: string;
  originalProject?: DetailedProject;
}

export const S3_PROJECT_OBJECTS: BucketProjectItem[] = [
  {
    id: 'jal-drishti',
    key: 'jal-drishti/',
    title: 'JAL-DRISHTI',
    subtitle: 'AI-driven flood prediction and early warning',
    category: 'AI Flood Prediction',
    problem:
      'Building a basin-scale flood intelligence and early-warning platform for Assam, India, combining historical flood events, ERA5-Land rainfall reanalysis, upstream rainfall, hydrological connectivity, and terrain data. Developed an explainable decision-support engine and REST API with a React dashboard featuring historical event replay (56 events, 2000–2018) and an interactive district-level intelligence map.',
    tags: ['Python', 'REST APIs', 'React', 'TypeScript', 'ERA5-Land'],
    liveUrl: 'https://github.com/arpitrai11',
    githubUrl: 'https://github.com/arpitrai11',
    image: '/images/jaldrishti.jpg',
    imageFallback: '/screenshots/jal-drishti.svg',
    type: 'folder',
    status: 'Live',
    originalProject: DETAILED_PROJECTS.find((p) => p.id === 'jal-drishti'),
  },
  {
    id: 'ai-automation',
    key: 'ai-social-media-automation/',
    title: 'AI-Generated Social Media Posting',
    subtitle: 'autonomous content generation and publishing',
    category: 'AI Automation',
    problem:
      'Built an n8n automation workflow that uses AI to generate social media captions, hashtags, and images tailored to a company\'s business profile. Created a Telegram bot interface that collects company name, profile, and platform, then sends post previews with Approve / Edit / Decline controls for human review.',
    tags: ['n8n', 'Gemini API', 'Kie.ai', 'Telegram Bot', 'Docker'],
    liveUrl: 'https://github.com/arpitrai11',
    githubUrl: 'https://github.com/arpitrai11',
    image: '/images/social-ai.jpg',
    imageFallback: '/screenshots/ai-automation.svg',
    type: 'folder',
    status: 'Live',
    originalProject: DETAILED_PROJECTS.find((p) => p.id === 'ai-automation'),
  },
  {
    id: 'chhattisgarh-taxi',
    key: 'chhattisgarh-taxi-service/',
    title: 'Chhattisgarh Taxi Service',
    subtitle: 'full-stack production ride booking platform',
    category: 'Full stack SaaS',
    problem:
      'Built a full-stack taxi booking platform with a React frontend and Node.js/Express.js backend. Developed REST APIs and a MongoDB schema to handle booking, driver, and trip data. Implemented user authentication and created responsive booking interfaces for mobile and desktop.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://chhattisgarhtaxiservice.com',
    githubUrl: 'https://github.com/arpitrai11',
    image: '/images/chhattisgarh-taxi.jpg',
    imageFallback: '/screenshots/chhattisgarh-taxi.png',
    type: 'folder',
    status: 'Live',
    originalProject: DETAILED_PROJECTS.find((p) => p.id === 'chhattisgarh-taxi'),
  },
  {
    id: 'responsify',
    key: 'responsify/',
    title: 'Responsify',
    subtitle: 'multi-device responsive inspector extension',
    category: 'Chrome Extension',
    problem:
      'Production-grade Chrome Extension for responsive design testing and multi-device viewport inspection. Features an infinite canvas workspace with synchronized scrolling across mobile/tablet/desktop frames, zero X-Frame-Options blocking via declarativeNetRequest, and an embedded DevTools inspector drawer.',
    tags: ['Manifest V3', 'React', 'TypeScript', 'Vite', 'DevTools'],
    liveUrl: 'https://github.com/arpitrai11/Responsify.git',
    githubUrl: 'https://github.com/arpitrai11/Responsify.git',
    image: '/images/responsify.png',
    imageFallback: '/screenshots/responsify.png',
    type: 'folder',
    status: 'Live',
    originalProject: DETAILED_PROJECTS.find((p) => p.id === 'responsify'),
  },
  {
    id: 'meetmind',
    key: 'meetmind-ai/',
    title: 'MeetMind AI',
    subtitle: 'local-first meeting intelligence & task extraction',
    category: 'AI Extension',
    problem:
      'Local-first, privacy-focused Chrome Extension that captures browser meetings (Google Meet, Teams, Zoom) using chrome.tabCapture and microphone mixing with zero-loss audio loopback. Features local storage in IndexedDB, offscreen recording, free automated transcription with Whisper via Groq, and developer task extraction with Gemini 2.0 Flash.',
    tags: ['Manifest V3', 'React 18', 'IndexedDB', 'Gemini 2.0', 'Groq Whisper'],
    liveUrl: 'https://github.com/arpitrai11/MeetMind',
    githubUrl: 'https://github.com/arpitrai11/MeetMind',
    image: '/images/meetmind.jpg',
    imageFallback: '/screenshots/meetmind.jpg',
    type: 'folder',
    status: 'Live',
    originalProject: DETAILED_PROJECTS.find((p) => p.id === 'meetmind'),
  },
];

// Authentic AWS S3 Bucket SVG Icon matching AWS Console
const S3BucketIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 11 17.8 20.2A2 2 0 0 1 15.8 22H8.2a2 2 0 0 1-2-1.8L5 11" />
    <ellipse cx="12" cy="7" rx="7" ry="3.5" />
    <path d="M7 14h10" />
  </svg>
);

interface ProjectsBucketProps {
  filterProjectIds?: string[] | null;
  onClearFilter?: () => void;
  onSelectProject?: (project: DetailedProject) => void;
}

export const ProjectsBucket: React.FC<ProjectsBucketProps> = ({
  filterProjectIds,
  onClearFilter,
  onSelectProject,
}) => {
  // First project open by default
  const [selectedKey, setSelectedKey] = useState<string>('jal-drishti/');
  const [searchPrefix, setSearchPrefix] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Filter projects by prefix and external filterProjectIds
  const filteredProjects = useMemo(() => {
    return S3_PROJECT_OBJECTS.filter((proj) => {
      // External ID filter (e.g. from skills.json tab click)
      if (filterProjectIds && filterProjectIds.length > 0) {
        if (!filterProjectIds.includes(proj.id)) return false;
      }

      // Search prefix filter (case-insensitive across key, title, tags, and category)
      if (searchPrefix.trim()) {
        const query = searchPrefix.trim().toLowerCase();
        const matchesKey = proj.key.toLowerCase().includes(query);
        const matchesTitle = proj.title.toLowerCase().includes(query);
        const matchesCategory = proj.category.toLowerCase().includes(query);
        const matchesTags = proj.tags.some((t) => t.toLowerCase().includes(query));
        return matchesKey || matchesTitle || matchesCategory || matchesTags;
      }

      return true;
    });
  }, [filterProjectIds, searchPrefix]);

  // Currently active/selected project object for toolbar actions
  const activeSelectedProject = useMemo(() => {
    const found = filteredProjects.find((p) => p.key === selectedKey);
    return found || filteredProjects[0] || null;
  }, [filteredProjects, selectedKey]);

  // Toggle row accordion
  const handleToggleRow = (key: string) => {
    setSelectedKey((prev) => (prev === key ? '' : key));
  };

  // Keyboard accessibility for rows
  const handleRowKeyDown = (e: React.KeyboardEvent, key: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggleRow(key);
    }
  };

  // Toolbar Action: Open live project in new tab
  const handleOpenSelected = useCallback(() => {
    if (!activeSelectedProject) return;
    if (activeSelectedProject.liveUrl) {
      window.open(activeSelectedProject.liveUrl, '_blank', 'noopener,noreferrer');
    } else if (activeSelectedProject.originalProject && onSelectProject) {
      onSelectProject(activeSelectedProject.originalProject);
    }
  }, [activeSelectedProject, onSelectProject]);

  // Toolbar Action: Copy object URI
  const handleCopyUrl = useCallback(() => {
    if (!activeSelectedProject) return;
    const uriToCopy = `s3://arpit-portfolio/projects/${activeSelectedProject.key}`;
    navigator.clipboard
      .writeText(uriToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(() => {
        setIsCopied(false);
      });
  }, [activeSelectedProject]);

  // Toolbar Action: Download project JSON spec
  const handleDownload = useCallback(() => {
    if (!activeSelectedProject) return;
    const projectData = {
      bucket: 'arpit-portfolio',
      key: `projects/${activeSelectedProject.key}`,
      title: activeSelectedProject.title,
      subtitle: activeSelectedProject.subtitle,
      category: activeSelectedProject.category,
      problem: activeSelectedProject.problem,
      metadata: activeSelectedProject.tags,
      urls: {
        live: activeSelectedProject.liveUrl,
        source: activeSelectedProject.githubUrl,
      },
      storageClass: 'Production',
      region: 'ap-south-1',
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(projectData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${activeSelectedProject.id}-spec.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [activeSelectedProject]);

  return (
    <div className="w-full">
      {/* External Filter Active Banner */}
      {filterProjectIds && filterProjectIds.length > 0 && onClearFilter && (
        <div className="mb-4 p-3 rounded-lg border border-[var(--accent)]/40 bg-[var(--accent-muted)] flex items-center justify-between font-mono text-xs text-[var(--accent-text)]">
          <div className="flex items-center gap-2">
            <span className="font-bold">FILTER ACTIVE:</span>
            <span>Filtered by related technologies</span>
          </div>
          <button
            type="button"
            onClick={onClearFilter}
            className="px-2.5 py-1 rounded bg-[var(--accent)] text-[var(--accent-fg)] font-semibold hover:bg-[var(--accent-hover)] transition-colors cursor-pointer"
          >
            Show All Objects
          </button>
        </div>
      )}

      {/* Main S3 Bucket Card (All inside one bordered card with 12px radius) */}
      <div className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden shadow-xs">
        {/* Header Row: 40px cyan rounded square + title + S3 URI + badges */}
        <div className="p-5 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {/* 40px Cyan rounded square with S3 bucket icon */}
            <div className="w-10 h-10 rounded-lg bg-[var(--accent)] text-[var(--accent-fg)] flex items-center justify-center shrink-0 shadow-xs">
              <S3BucketIcon className="w-5 h-5" />
            </div>

            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] tracking-tight">
                Production work and systems
              </h1>
              <p className="font-mono text-xs text-[var(--text-muted)] mt-0.5">
                s3://arpit-portfolio/projects/
              </p>
            </div>
          </div>

          {/* Right Badges */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--text-secondary)] font-medium">
              {filteredProjects.length} objects
            </span>
            <span className="px-3 py-1 rounded-md border border-[var(--accent)]/30 bg-[var(--accent-muted)] text-[var(--accent)] font-semibold">
              Public read
            </span>
          </div>
        </div>

        {/* 3. Toolbar Row: Open, Copy object URL, Download, and Search Input */}
        <div className="px-5 pb-5 sm:px-6 flex flex-wrap items-center gap-2.5">
          {/* Primary Cyan Open Button */}
          <button
            type="button"
            onClick={handleOpenSelected}
            disabled={!activeSelectedProject}
            className="px-3.5 py-1.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-fg)] font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-xs"
            title="Open selected project live"
          >
            <ExternalLink size={13} />
            <span>Open</span>
          </button>

          {/* Outlined Copy object URL Button */}
          <button
            type="button"
            onClick={handleCopyUrl}
            disabled={!activeSelectedProject}
            className="px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            title="Copy S3 object URL"
          >
            {isCopied ? (
              <Check size={13} className="text-[var(--accent)]" />
            ) : (
              <Copy size={13} />
            )}
            <span>{isCopied ? 'Copied' : 'Copy object URL'}</span>
          </button>

          {/* Outlined Download Button */}
          <button
            type="button"
            onClick={handleDownload}
            disabled={!activeSelectedProject}
            className="px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-input)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            title="Download project specification JSON"
          >
            <Download size={13} />
            <span>Download</span>
          </button>

          {/* Search Input: Find objects by prefix */}
          <div className="flex-1 min-w-[220px] flex items-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)]/60 px-3 py-1.5 focus-within:border-[var(--accent)] transition-all">
            <Search size={13} className="text-[var(--text-muted)] mr-2 shrink-0 pointer-events-none" />
            <input
              type="text"
              value={searchPrefix}
              onChange={(e) => setSearchPrefix(e.target.value)}
              placeholder="Find objects by prefix"
              className="w-full bg-transparent font-mono text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
              aria-label="Find objects by prefix"
            />
            {searchPrefix && (
              <button
                type="button"
                onClick={() => setSearchPrefix('')}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-0.5 cursor-pointer"
                aria-label="Clear search"
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        {/* 4. Object List Table Header */}
        <div className="border-t border-b border-[var(--border-subtle)] bg-[var(--bg-input)]/50 px-5 py-2.5 grid grid-cols-[32px_1fr] md:grid-cols-[32px_2.5fr_1fr_1.5fr_1fr_28px] items-center gap-3 font-mono text-xs text-[var(--text-muted)] font-medium select-none">
          <div className="flex justify-center">{/* Master checkbox indicator */}</div>
          <div>Name</div>
          <div className="hidden md:block">Type</div>
          <div className="hidden md:block">Category</div>
          <div className="hidden md:block">Status</div>
          <div className="hidden md:block">{/* Chevron column */}</div>
        </div>

        {/* 5. Object List Rows + Accordions */}
        <div className="divide-y divide-[var(--border-subtle)]">
          {filteredProjects.length === 0 ? (
            /* Empty State */
            <div className="py-12 px-6 text-center font-mono text-xs text-[var(--text-muted)] space-y-2">
              <p>No objects match this prefix.</p>
              {searchPrefix && (
                <button
                  type="button"
                  onClick={() => setSearchPrefix('')}
                  className="text-[var(--accent)] hover:underline cursor-pointer"
                >
                  Clear filter prefix
                </button>
              )}
            </div>
          ) : (
            filteredProjects.map((project) => {
              const isExpanded = selectedKey === project.key;

              return (
                <div key={project.key} className="w-full">
                  {/* Clickable Row */}
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onClick={() => handleToggleRow(project.key)}
                    onKeyDown={(e) => handleRowKeyDown(e, project.key)}
                    className={`w-full px-5 py-3 grid grid-cols-[32px_1fr_28px] md:grid-cols-[32px_2.5fr_1fr_1.5fr_1fr_28px] items-center gap-3 cursor-pointer select-none transition-colors outline-hidden focus-visible:ring-1 focus-visible:ring-[var(--accent)] ${
                      isExpanded
                        ? 'bg-[var(--accent-muted)]/70 hover:bg-[var(--accent-muted)]/80 text-[var(--text-primary)]'
                        : 'hover:bg-[var(--bg-input)]/40 text-[var(--text-primary)]'
                    }`}
                  >
                    {/* Checkbox column */}
                    <div className="flex justify-center">
                      <div
                        className={`w-4 h-4 rounded transition-all flex items-center justify-center ${
                          isExpanded
                            ? 'bg-[var(--accent)] text-[var(--accent-fg)] shadow-xs'
                            : 'border border-[var(--border-medium)] bg-[var(--bg-card)]'
                        }`}
                      >
                        {isExpanded && <Check size={11} strokeWidth={3} />}
                      </div>
                    </div>

                    {/* Name column: folder icon + monospace key */}
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <Folder
                        size={16}
                        className={`shrink-0 ${
                          isExpanded ? 'text-[var(--accent)]' : 'text-[var(--accent-blue)]'
                        }`}
                      />
                      <span className="font-mono text-xs font-semibold text-[var(--text-primary)] truncate">
                        {project.key}
                      </span>
                    </div>

                    {/* Type column: "folder" (hidden on mobile) */}
                    <div className="hidden md:block font-mono text-xs text-[var(--text-muted)]">
                      {project.type}
                    </div>

                    {/* Category column: "AI and ML", "Automation", "Full stack" (hidden on mobile) */}
                    <div className="hidden md:block text-xs font-bold text-[var(--text-primary)] truncate">
                      {project.category}
                    </div>

                    {/* Status column: cyan dot + "Live" (hidden on mobile) */}
                    <div className="hidden md:flex items-center gap-1.5 text-xs text-[var(--text-primary)]">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                      <span className="font-medium">{project.status}</span>
                    </div>

                    {/* Chevron column */}
                    <div className="flex justify-end text-[var(--text-muted)]">
                      <ChevronRight
                        size={16}
                        className={`transition-transform duration-200 ${
                          isExpanded ? 'rotate-90 text-[var(--accent)]' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Accordion Details Panel (Smooth Expand/Collapse) */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key={`details-${project.key}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-card)]"
                      >
                        <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                          {/* Left Column: 16:10 Screenshot Frame with preview.png caption */}
                          <div className="w-full">
                            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-dashed border-[var(--border-medium)] bg-[var(--bg-input)]/50 flex flex-col items-center justify-center shadow-xs">
                              {project.image ? (
                                <>
                                  <img
                                    src={project.image}
                                    alt={`${project.title} screenshot`}
                                    className="w-full h-full object-cover rounded-xl"
                                    loading="lazy"
                                    onError={(e) => {
                                      if (
                                        project.imageFallback &&
                                        e.currentTarget.src !== project.imageFallback
                                      ) {
                                        e.currentTarget.src = project.imageFallback;
                                      }
                                    }}
                                  />
                                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs font-mono text-[11px] text-white/95 flex items-center gap-1.5 border border-white/10 shadow-sm">
                                    <ImageIcon size={12} className="text-[var(--accent)]" />
                                    <span>preview.png</span>
                                  </div>
                                </>
                              ) : (
                                <div className="flex flex-col items-center justify-center text-[var(--text-muted)] gap-1.5">
                                  <ImageIcon size={28} strokeWidth={1.5} />
                                  <span className="font-mono text-xs">preview.png</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Right Column: Title, Subtitle, key/value list, Action Buttons */}
                          <div className="space-y-4">
                            <div>
                              <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                                {project.title}
                              </h2>
                              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5 font-sans">
                                {project.subtitle}
                              </p>
                            </div>

                            {/* Key/Value List */}
                            <div className="space-y-3 pt-1 border-t border-[var(--border-subtle)] text-xs">
                              {/* Key */}
                              <div className="grid grid-cols-[68px_1fr] sm:grid-cols-[76px_1fr] gap-2 items-baseline">
                                <span className="font-mono text-[var(--text-muted)]">key</span>
                                <span className="font-mono text-[var(--text-primary)] font-medium break-all">
                                  projects/{project.key}
                                </span>
                              </div>

                              {/* Problem statement */}
                              <div className="grid grid-cols-[68px_1fr] sm:grid-cols-[76px_1fr] gap-2 items-baseline">
                                <span className="font-mono text-[var(--text-muted)]">problem</span>
                                <p className="text-[var(--text-primary)] leading-relaxed font-sans">
                                  {project.problem}
                                </p>
                              </div>

                              {/* Metadata tags */}
                              <div className="grid grid-cols-[68px_1fr] sm:grid-cols-[76px_1fr] gap-2 items-center">
                                <span className="font-mono text-[var(--text-muted)]">metadata</span>
                                <div className="flex flex-wrap gap-1.5">
                                  {project.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2 py-0.5 rounded font-mono text-[11px] bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/30"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons: View project & Source */}
                            <div className="pt-2 flex items-center gap-3">
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-fg)] font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                              >
                                <ArrowUpRight size={14} />
                                <span>View project</span>
                              </a>

                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-input)] text-[var(--text-primary)] font-mono text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                              >
                                <GithubIcon size={14} className="fill-current" />
                                <span>Source</span>
                              </a>

                              {project.originalProject && onSelectProject && (
                                <button
                                  type="button"
                                  onClick={() => onSelectProject(project.originalProject!)}
                                  className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors underline underline-offset-4 cursor-pointer ml-auto hidden sm:inline-block"
                                >
                                  Inspect Architecture →
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* 6. Footer Status Bar: Region & Storage class */}
        <div className="px-5 py-2.5 border-t border-[var(--border-subtle)] bg-[var(--bg-input)]/40 flex items-center justify-between font-mono text-xs text-[var(--text-muted)] select-none">
          <span>Region: ap-south-1</span>
          <span>Storage class: Production</span>
        </div>
      </div>
    </div>
  );
};
