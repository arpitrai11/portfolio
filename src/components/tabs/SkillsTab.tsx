import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  Layers,
  Code2,
  Server,
  Database,
  Cloud,
  Bot,
  Wrench,
  FileJson,
  ChevronDown,
  Filter,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import {
  DETAILED_SKILL_GROUPS,
  CURRENTLY_LEARNING,
  PROJECT_NAME_MAP,
  type DetailedSkillItem,
} from '../../data/portfolioData';
import { TechLogo } from '../TechLogos';

interface SkillsTabProps {
  onSelectTab?: (tabId: string) => void;
  onFilterProjects?: (projectIds: string[]) => void;
  onNotify?: (msg: string) => void;
}

const STORAGE_VIEW_KEY = 'workspace_skills_view_mode';

// Helper to highlight matching search substring
const HighlightMatch: React.FC<{ text: string; query: string }> = ({ text, query }) => {
  if (!query.trim()) return <>{text}</>;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark
            key={i}
            className="bg-[var(--accent-muted)] text-[var(--accent)] font-semibold rounded-xs px-0.5"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};

// Syntax Highlighting for JSON Editor Buffer
const JsonSyntaxLine: React.FC<{ line: string }> = ({ line }) => {
  // Regex to match JSON tokens: keys, strings, numbers, booleans, and structural symbols
  const tokenRegex =
    /("(?:\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|\btrue\b|\bfalse\b|\bnull\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|[{}[\],:])/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(line)) !== null) {
    // Push preceding whitespace or unmatched text
    if (match.index > lastIndex) {
      parts.push(line.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (token.endsWith(':')) {
      // JSON Object Key
      const keyName = token.slice(0, -1);
      parts.push(
        <span key={match.index} className="text-[var(--accent-blue)] font-medium">
          {keyName}
        </span>
      );
      parts.push(
        <span key={`${match.index}-colon`} className="text-[var(--text-muted)]">
          :
        </span>
      );
    } else if (token.startsWith('"')) {
      // String Value
      parts.push(
        <span
          key={match.index}
          className="text-[var(--accent-text)] opacity-95"
        >
          {token}
        </span>
      );
    } else if (token === 'true' || token === 'false' || token === 'null') {
      // Boolean or Null
      parts.push(
        <span key={match.index} className="text-[var(--accent-purple)] font-semibold">
          {token}
        </span>
      );
    } else if (/^-?\d/.test(token)) {
      // Number
      parts.push(
        <span key={match.index} className="text-[var(--accent-amber)] font-medium">
          {token}
        </span>
      );
    } else {
      // Brackets, braces, commas
      parts.push(
        <span key={match.index} className="text-[var(--text-muted)]">
          {token}
        </span>
      );
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < line.length) {
    parts.push(line.substring(lastIndex));
  }

  return <span>{parts.length > 0 ? parts : line || ' '}</span>;
};

export const SkillsTab: React.FC<SkillsTabProps> = ({
  onSelectTab,
  onFilterProjects,
  onNotify,
}) => {
  // 1. View Mode with try/catch localStorage persistence
  const [viewMode, setViewMode] = useState<'grid' | 'json'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_VIEW_KEY);
      return saved === 'json' ? 'json' : 'grid';
    } catch {
      return 'grid';
    }
  });

  const handleToggleViewMode = (mode: 'grid' | 'json') => {
    setViewMode(mode);
    try {
      localStorage.setItem(STORAGE_VIEW_KEY, mode);
    } catch {
      // Fallback in private browsing or constrained environments
    }
  };

  // 2. Filter & Search State
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);

  // Close filter dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(e.target as Node)
      ) {
        setIsFilterDropdownOpen(false);
      }
    };
    if (isFilterDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isFilterDropdownOpen]);

  // Category Icon & Color Mapping
  const getCategoryMeta = (catId: string) => {
    switch (catId) {
      case 'frontend':
        return {
          icon: Code2,
          colorClass: 'text-[var(--accent-blue)]',
          bgClass: 'bg-[var(--accent-blue-muted)]',
        };
      case 'backend':
        return {
          icon: Server,
          colorClass: 'text-[var(--accent-amber)]',
          bgClass: 'bg-[var(--accent-amber-muted)]',
        };
      case 'databases':
        return {
          icon: Database,
          colorClass: 'text-[var(--accent-cyan)]',
          bgClass: 'bg-[var(--accent-cyan)]/10',
        };
      case 'cloud-devops':
        return {
          icon: Cloud,
          colorClass: 'text-[var(--accent-purple)]',
          bgClass: 'bg-[var(--accent-purple-muted)]',
        };
      case 'ai-automation':
        return {
          icon: Bot,
          colorClass: 'text-[var(--accent-amber)]',
          bgClass: 'bg-[var(--accent-amber-muted)]',
        };
      case 'tools-workflow':
        return {
          icon: Wrench,
          colorClass: 'text-[var(--accent-blue)]',
          bgClass: 'bg-[var(--accent-blue-muted)]',
        };
      default:
        return {
          icon: Layers,
          colorClass: 'text-[var(--accent)]',
          bgClass: 'bg-[var(--accent-muted)]',
        };
    }
  };

  // Compute skill counts
  const totalSkillsCount = useMemo(() => {
    return DETAILED_SKILL_GROUPS.reduce((acc, g) => acc + g.skills.length, 0);
  }, []);

  const categoryTree = useMemo(() => {
    return [
      {
        id: 'all',
        label: 'All Skills',
        shortLabel: 'All',
        count: totalSkillsCount,
      },
      ...DETAILED_SKILL_GROUPS.map((g) => ({
        id: g.id,
        label: g.category,
        shortLabel: g.category.replace(' & Workflow', ''),
        count: g.skills.length,
      })),
    ];
  }, [totalSkillsCount]);

  const selectedCategoryObj = useMemo(() => {
    return categoryTree.find((c) => c.id === selectedCategoryId) || categoryTree[0];
  }, [categoryTree, selectedCategoryId]);

  // Filter skills based on Category + Search
  const filteredSkills = useMemo(() => {
    const query = search.trim().toLowerCase();

    // 1. Gather all candidate skills according to category
    let pool: Array<DetailedSkillItem & { categoryName: string; categoryId: string }> = [];

    DETAILED_SKILL_GROUPS.forEach((group) => {
      if (selectedCategoryId === 'all' || group.id === selectedCategoryId) {
        group.skills.forEach((skill) => {
          pool.push({
            ...skill,
            categoryName: group.category,
            categoryId: group.id,
          });
        });
      }
    });

    // 2. Apply search query
    if (query) {
      pool = pool.filter((skill) => {
        const matchName = skill.name.toLowerCase().includes(query);
        const matchDesc = skill.description?.toLowerCase().includes(query);
        const matchLevel = skill.level.toLowerCase().includes(query);
        const matchProjects = skill.usedIn?.some((pId) => {
          const pName = PROJECT_NAME_MAP[pId]?.name || pId;
          return pName.toLowerCase().includes(query);
        });
        return matchName || matchDesc || matchLevel || matchProjects;
      });
    }

    return pool;
  }, [selectedCategoryId, search]);

  // JSON representation of skills data
  const jsonExportData = useMemo(() => {
    return {
      schema: 'developer.skills/v2',
      engineer: 'Arpit Rai',
      role: 'Full Stack Software Engineer',
      lastUpdated: '2026-10-05',
      summary: {
        totalCategories: DETAILED_SKILL_GROUPS.length,
        totalSkills: totalSkillsCount,
        currentlyLearning: CURRENTLY_LEARNING.length,
      },
      categories: DETAILED_SKILL_GROUPS.map((group) => ({
        id: group.id,
        category: group.category,
        skillsCount: group.skills.length,
        skills: group.skills.map((skill) => ({
          id: skill.id,
          name: skill.name,
          level: skill.level,
          usedIn: skill.usedIn?.map((pId) => PROJECT_NAME_MAP[pId]?.name || pId) || [],
          description: skill.description || '',
        })),
      })),
      currentlyLearning: CURRENTLY_LEARNING,
    };
  }, [totalSkillsCount]);

  const jsonString = useMemo(() => {
    return JSON.stringify(jsonExportData, null, 2);
  }, [jsonExportData]);

  const jsonLines = useMemo(() => {
    return jsonString.split('\n');
  }, [jsonString]);

  // Copy JSON handler
  const handleCopyJson = useCallback(() => {
    navigator.clipboard
      .writeText(jsonString)
      .then(() => {
        setIsCopied(true);
        onNotify?.('skills.json copied to clipboard');
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(() => {
        onNotify?.('Failed to copy to clipboard');
      });
  }, [jsonString, onNotify]);

  // Navigate to filtered projects
  const handleSkillTileClick = (skill: DetailedSkillItem) => {
    if (skill.usedIn && skill.usedIn.length > 0) {
      if (onFilterProjects) {
        onFilterProjects(skill.usedIn);
      } else if (onSelectTab) {
        onSelectTab('projects');
      }
    } else if (onSelectTab) {
      onSelectTab('projects');
    }
  };

  const handleProjectPillClick = (
    e: React.MouseEvent,
    projectId: string
  ) => {
    e.stopPropagation();
    const projMeta = PROJECT_NAME_MAP[projectId];
    const targetTab = projMeta?.tabId || 'projects';

    if (targetTab === 'projects') {
      if (onFilterProjects) {
        onFilterProjects([projectId]);
      } else if (onSelectTab) {
        onSelectTab('projects');
      }
    } else if (onSelectTab) {
      onSelectTab(targetTab);
    }
  };

  return (
    <div className="space-y-6 py-2">
      {/* 1. Slim Toolbar with Integrated Filter Search */}
      <div className="relative z-20 p-2.5 sm:p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Integrated Search Bar with Category Filter Option */}
          <div className="flex items-center gap-2.5 flex-1 min-w-[280px]">
            <div className="relative flex-1 max-w-2xl flex items-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)] focus-within:border-[var(--accent)] transition-all">
              {/* Search Icon */}
              <Search
                size={14}
                className="ml-3 text-[var(--text-muted)] pointer-events-none shrink-0"
              />

              {/* Search Input */}
              <input
                ref={searchInputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search skills (e.g. React, Docker, Python)..."
                className="flex-1 min-w-0 px-2.5 py-1.5 bg-transparent text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
                aria-label="Search skills"
              />

              {/* Clear Search Button */}
              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch('');
                    searchInputRef.current?.focus();
                  }}
                  className="p-1 mr-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer shrink-0"
                  aria-label="Clear search"
                >
                  <X size={13} />
                </button>
              )}

              {/* Category Filter Dropdown inside Search Bar */}
              <div className="relative border-l border-[var(--border-subtle)] shrink-0" ref={filterDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsFilterDropdownOpen((prev) => !prev)}
                  aria-haspopup="listbox"
                  aria-expanded={isFilterDropdownOpen}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-r-lg text-xs font-mono transition-colors cursor-pointer ${
                    selectedCategoryId !== 'all'
                      ? 'bg-[var(--accent-muted)] text-[var(--accent)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]/60'
                  }`}
                  title="Filter by category"
                >
                  <Filter
                    size={13}
                    className={`shrink-0 ${
                      selectedCategoryId !== 'all' ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'
                    }`}
                  />
                  <span className="max-w-[100px] sm:max-w-[140px] truncate">
                    {selectedCategoryObj?.label || 'All Skills'}
                  </span>
                  {selectedCategoryId !== 'all' ? (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] font-bold">
                      {selectedCategoryObj?.count}
                    </span>
                  ) : (
                    <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.2 rounded-full bg-[var(--bg-card)] text-[var(--text-muted)]">
                      {totalSkillsCount}
                    </span>
                  )}
                  {selectedCategoryId !== 'all' && (
                    <span
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategoryId('all');
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.stopPropagation();
                          setSelectedCategoryId('all');
                        }
                      }}
                      className="p-0.5 -mr-1 rounded hover:bg-[var(--accent)]/20 text-[var(--accent)] cursor-pointer"
                      title="Clear category filter"
                    >
                      <X size={11} />
                    </span>
                  )}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-150 text-[var(--text-muted)] shrink-0 ${
                      isFilterDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Category Dropdown Popover */}
                <AnimatePresence>
                  {isFilterDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-[var(--border-medium)] bg-[var(--bg-dropdown)] p-1.5 shadow-2xl z-50 font-mono text-xs space-y-0.5"
                      style={{ backgroundColor: 'var(--bg-dropdown)' }}
                      role="listbox"
                    >
                      <div className="flex items-center justify-between px-2.5 py-1 text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider border-b border-[var(--border-subtle)] mb-1">
                        <span>Filter by Category</span>
                        {selectedCategoryId !== 'all' && (
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedCategoryId('all');
                              setIsFilterDropdownOpen(false);
                            }}
                            className="text-[var(--accent)] hover:underline capitalize font-normal cursor-pointer"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                      {categoryTree.map((cat) => {
                        const isSelected = selectedCategoryId === cat.id;
                        const meta = getCategoryMeta(cat.id);
                        const Icon = meta.icon;

                        return (
                          <button
                            key={cat.id}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setSelectedCategoryId(cat.id);
                              setIsFilterDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-colors text-left cursor-pointer ${
                              isSelected
                                ? 'bg-[var(--accent-muted)] text-[var(--accent)] font-semibold'
                                : 'text-[var(--text-secondary)] hover:bg-[var(--bg-input)] hover:text-[var(--text-primary)]'
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <div
                                className={`p-1 rounded ${
                                  isSelected
                                    ? 'bg-[var(--accent)] text-[var(--accent-fg)]'
                                    : `${meta.bgClass} ${meta.colorClass}`
                                }`}
                              >
                                <Icon size={12} />
                              </div>
                              <span className="truncate">{cat.label}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--bg-input)] text-[var(--text-muted)]">
                                {cat.count}
                              </span>
                              {isSelected && (
                                <Check size={13} className="text-[var(--accent)] shrink-0" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Results count pill */}
            <div className="hidden md:flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)] bg-[var(--bg-input)] px-2.5 py-1.5 rounded-md border border-[var(--border-subtle)] shrink-0">
              <span className="font-semibold text-[var(--text-primary)]">
                {filteredSkills.length}
              </span>
              <span>of {totalSkillsCount} skills</span>
            </div>
          </div>

          {/* View Mode Toggle: Grid View vs skills.json */}
          <div
            role="group"
            aria-label="View Mode"
            className="flex items-center p-0.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)] text-xs font-mono shrink-0"
          >
            <button
              type="button"
              onClick={() => handleToggleViewMode('grid')}
              aria-pressed={viewMode === 'grid'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[var(--accent)] text-[var(--accent-fg)] font-semibold shadow-xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Layers size={13} />
              <span>Grid View</span>
            </button>
            <button
              type="button"
              onClick={() => handleToggleViewMode('json')}
              aria-pressed={viewMode === 'json'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'json'
                  ? 'bg-[var(--accent)] text-[var(--accent-fg)] font-semibold shadow-xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <FileJson size={13} />
              <span>skills.json</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Content: Full-Width Responsive Grid */}
      {viewMode === 'grid' ? (
        <div className="space-y-6">
          {/* Responsive Grid of Skill Tiles (Full Width) */}
          <main className="w-full space-y-6">
            {filteredSkills.length === 0 ? (
              /* Empty State */
              <div className="p-12 text-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] space-y-4">
                <div className="w-10 h-10 mx-auto rounded-full bg-[var(--bg-input)] flex items-center justify-center text-[var(--text-muted)] border border-[var(--border-subtle)]">
                  <Search size={18} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-mono text-sm font-bold text-[var(--text-primary)]">
                    No matching skills found
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] max-w-sm mx-auto">
                    No technologies matched "{search}" in the selected category. Try
                    refining your keyword or resetting filters.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSearch('');
                    setSelectedCategoryId('all');
                    searchInputRef.current?.focus();
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)] hover:border-[var(--accent)] text-xs font-mono text-[var(--text-primary)] transition-colors cursor-pointer"
                >
                  <RotateCcw size={12} />
                  <span>Reset search filters</span>
                </button>
              </div>
            ) : (
              /* Animated Responsive Grid - 4 columns on large screens */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5">
                <AnimatePresence mode="popLayout">
                  {filteredSkills.map((skill) => {
                    // Level Badge styling
                      const isProduction = skill.level === 'Production';
                      const isProjects = skill.level === 'Projects';
                      const badgeClasses = isProduction
                        ? 'border-[var(--accent)]/30 bg-[var(--accent-muted)] text-[var(--accent)]'
                        : isProjects
                        ? 'border-[var(--accent-blue)]/30 bg-[var(--accent-blue-muted)] text-[var(--accent-blue)]'
                        : 'border-[var(--accent-purple)]/30 bg-[var(--accent-purple-muted)] text-[var(--accent-purple)]';

                      return (
                        <motion.div
                          key={`${skill.categoryId}-${skill.id}`}
                          layout
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          onClick={() => handleSkillTileClick(skill)}
                          tabIndex={0}
                          role="button"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleSkillTileClick(skill);
                            }
                          }}
                          className="group relative flex flex-col justify-between p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                          aria-label={`${skill.name} - ${skill.level} skill, click to filter projects`}
                        >
                          {/* Top Row: Tech Logo + Name + Context Badge */}
                          <div className="space-y-2.5">
                            <div className="flex items-start justify-between gap-2.5">
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="w-8 h-8 rounded-lg bg-[var(--bg-input)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)]/50 transition-colors">
                                  <TechLogo name={skill.id} size={20} />
                                </div>
                                <div className="min-w-0">
                                  <h3 className="font-bold text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                                    <HighlightMatch text={skill.name} query={search} />
                                  </h3>
                                  <span className="font-mono text-[10px] text-[var(--text-muted)] block truncate">
                                    {skill.categoryName}
                                  </span>
                                </div>
                              </div>

                              <span
                                className={`shrink-0 px-2 py-0.5 rounded-full border text-[10px] font-mono font-bold uppercase tracking-wider ${badgeClasses}`}
                              >
                                {skill.level}
                              </span>
                            </div>

                            {/* Skill Description */}
                            {skill.description && (
                              <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                                <HighlightMatch text={skill.description} query={search} />
                              </p>
                            )}
                          </div>

                          {/* Bottom Row: Used In Projects */}
                          <div className="mt-3.5 pt-3 border-t border-[var(--border-subtle)]/70 flex flex-col gap-1.5">
                            <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                              <span>Used in:</span>
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent)] text-[10px] flex items-center gap-0.5">
                                View projects <ArrowUpRight size={11} />
                              </span>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                              {skill.usedIn && skill.usedIn.length > 0 ? (
                                skill.usedIn.map((projId) => {
                                  const proj = PROJECT_NAME_MAP[projId];
                                  const label = proj ? proj.name : projId;

                                  return (
                                    <button
                                      key={projId}
                                      type="button"
                                      onClick={(e) => handleProjectPillClick(e, projId)}
                                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-input)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[11px] font-mono text-[var(--text-secondary)] transition-colors"
                                      title={`Filter projects for ${label}`}
                                    >
                                      <span className="truncate max-w-[130px]">{label}</span>
                                    </button>
                                  );
                                })
                              ) : (
                                <span className="text-[11px] font-mono text-[var(--text-muted)] italic">
                                  Engineering Foundations
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              )}

              {/* 3. Currently Learning Strip at Bottom */}
              <div className="mt-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 sm:p-5 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded bg-[var(--accent-purple-muted)] text-[var(--accent-purple)]">
                      <Sparkles size={14} />
                    </div>
                    <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-[var(--text-primary)]">
                      Currently Learning & Deepening
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--accent-purple)] bg-[var(--accent-purple-muted)] px-2 py-0.5 rounded-full border border-[var(--accent-purple)]/20">
                    Active Focus
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {CURRENTLY_LEARNING.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start gap-3 p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)]"
                    >
                      <div className="w-8 h-8 rounded-md bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                        <TechLogo name={item.logo} size={18} />
                      </div>
                      <div className="min-w-0 space-y-0.5">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-xs text-[var(--text-primary)]">
                            {item.name}
                          </h4>
                          <span className="font-mono text-[10px] text-[var(--text-muted)]">
                            · {item.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                          {item.focus}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </main>
        </div>
      ) : (
        /* 4. JSON View Mode: Syntax-Highlighted Editor Buffer with Line Numbers */
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-sm overflow-hidden">
          {/* Editor Buffer Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] font-mono text-xs">
            <div className="flex items-center gap-2">
              <FileJson size={14} className="text-[var(--accent-blue)]" />
              <span className="text-[var(--text-primary)] font-semibold">
                skills.json
              </span>
              <span className="text-[11px] text-[var(--text-muted)] hidden sm:inline">
                (Read-Only Buffer)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyJson}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-input)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-xs text-[var(--text-primary)] transition-all active:scale-95"
                aria-label="Copy JSON to clipboard"
              >
                {isCopied ? (
                  <>
                    <Check size={12} className="text-[var(--accent)]" />
                    <span className="text-[var(--accent)] font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy JSON</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Syntax Highlighted Code Window with Line Numbers */}
          <div className="overflow-x-auto p-4 bg-[var(--bg-app)]">
            <pre className="font-mono text-xs sm:text-[13px] leading-relaxed select-text m-0">
              <code>
                {jsonLines.map((line, idx) => (
                  <div key={idx} className="flex hover:bg-[var(--bg-card)]/60 px-1 -mx-1 rounded-xs">
                    {/* Line Number Gutter */}
                    <span className="select-none text-[var(--text-muted)] opacity-50 text-right pr-4 min-w-[2.75rem] border-r border-[var(--border-subtle)] mr-4 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {/* Syntax Highlighted Line */}
                    <div className="flex-1 whitespace-pre">
                      <JsonSyntaxLine line={line} />
                    </div>
                  </div>
                ))}
              </code>
            </pre>
          </div>

          {/* Minimal Editor Status Bar */}
          <div className="flex items-center justify-between px-4 py-1.5 border-t border-[var(--border-subtle)] bg-[var(--bg-header)] font-mono text-[11px] text-[var(--text-muted)]">
            <div className="flex items-center gap-4">
              <span>Ln {jsonLines.length}, Col 1</span>
              <span className="hidden sm:inline">Spaces: 2</span>
              <span>UTF-8</span>
              <span className="text-[var(--accent-blue)] font-semibold">JSON</span>
            </div>
            <div className="flex items-center gap-3">
              <span>{new Blob([jsonString]).size} bytes</span>
              <span className="flex items-center gap-1.5 text-[var(--accent-text)] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>In Sync</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
