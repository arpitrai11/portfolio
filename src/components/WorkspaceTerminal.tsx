import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, Maximize2, Trash2 } from 'lucide-react';
import { PERSONAL_INFO, DETAILED_PROJECTS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface TerminalOutput {
  id: string;
  type: 'command' | 'output' | 'error' | 'success';
  content: string | React.ReactNode;
}

interface WorkspaceTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tabId: string) => void;
  onOpenResume: () => void;
}

export const WorkspaceTerminal: React.FC<WorkspaceTerminalProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onOpenResume,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [isExpanded, setIsExpanded] = useState(false);

  const [outputs, setOutputs] = useState<TerminalOutput[]>([
    {
      id: 'init-1',
      type: 'output',
      content: 'Antigravity Workspace CLI v2026.1 [x86_64-pc-linux-gnu]',
    },
    {
      id: 'init-2',
      type: 'success',
      content: 'Type "help" to view available developer commands.',
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, outputs]);

  if (!isOpen) return null;

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    // Add to history
    setHistory((prev) => [trimmed, ...prev]);
    setHistoryIdx(-1);

    const newOutputs: TerminalOutput[] = [
      ...outputs,
      {
        id: `cmd-${Date.now()}`,
        type: 'command',
        content: `arpit@workstation:~$ ${trimmed}`,
      },
    ];

    const lower = trimmed.toLowerCase();

    if (lower === 'help') {
      newOutputs.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: (
          <div className="space-y-1 font-mono text-xs">
            <p className="text-[var(--accent)] font-semibold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-2 text-[var(--text-secondary)]">
              <div>
                <span className="text-[var(--accent-blue)] font-bold">projects</span> — Open &amp; inspect production systems
              </div>
              <div>
                <span className="text-[var(--accent-blue)] font-bold">skills</span> — Jump to skills catalog
              </div>
              <div>
                <span className="text-[var(--accent-blue)] font-bold">resume</span> — Open &amp; print Curriculum Vitae
              </div>
              <div>
                <span className="text-[var(--accent-blue)] font-bold">contact</span> — Open direct channels &amp; email
              </div>
              <div>
                <span className="text-[var(--accent-blue)] font-bold">theme</span> — Toggle dark / light workstation mode
              </div>
              <div>
                <span className="text-[var(--accent-blue)] font-bold">whoami</span> — Display engineer identity summary
              </div>
              <div>
                <span className="text-[var(--accent-blue)] font-bold">clear</span> — Wipe terminal output history
              </div>
            </div>
          </div>
        ),
      });
    } else if (lower === 'projects') {
      onSelectTab('projects');
      newOutputs.push({
        id: `out-${Date.now()}`,
        type: 'success',
        content: (
          <div className="space-y-1">
            <p className="text-[var(--accent)]">Switched to projects/. Deployed systems:</p>
            <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-0.5">
              {DETAILED_PROJECTS.map((p) => (
                <li key={p.id}>
                  <strong className="text-[var(--text-primary)]">{p.name}</strong>: {p.subtitle}
                </li>
              ))}
            </ul>
          </div>
        ),
      });
    } else if (lower === 'skills') {
      onSelectTab('skills');
      newOutputs.push({
        id: `out-${Date.now()}`,
        type: 'success',
        content: 'Switched buffer to skills.json (Frontend, Backend, Databases, Cloud, AI).',
      });
    } else if (lower === 'resume') {
      onOpenResume();
      newOutputs.push({
        id: `out-${Date.now()}`,
        type: 'success',
        content: 'Opened verified resume dialog (Curriculum Vitae).',
      });
    } else if (lower === 'contact') {
      onSelectTab('contact');
      newOutputs.push({
        id: `out-${Date.now()}`,
        type: 'success',
        content: `Direct contact channels: ${PERSONAL_INFO.email} · ${PERSONAL_INFO.phone}`,
      });
    } else if (lower === 'theme') {
      toggleTheme();
      newOutputs.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: `Workstation theme toggled to: ${theme === 'dark' ? 'light' : 'dark'}.`,
      });
    } else if (lower === 'whoami') {
      newOutputs.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.role} (${PERSONAL_INFO.location}). Focus: ${PERSONAL_INFO.focus}. Currently: ${PERSONAL_INFO.currently}.`,
      });
    } else if (lower === 'clear') {
      setOutputs([]);
      setInputVal('');
      return;
    } else {
      newOutputs.push({
        id: `out-${Date.now()}`,
        type: 'error',
        content: `bash: command not found: "${trimmed}". Type "help" to see available commands.`,
      });
    }

    setOutputs(newOutputs);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIdx + 1 < history.length) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const prevIdx = historyIdx - 1;
        setHistoryIdx(prevIdx);
        setInputVal(history[prevIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div
      role="region"
      aria-label="Integrated Terminal"
      className={`border-t border-[var(--border-subtle)] bg-[#0B0D14] text-[#F8FAFC] font-mono flex flex-col shrink-0 transition-all duration-200 z-30 shadow-2xl ${
        isExpanded ? 'h-72' : 'h-48'
      }`}
    >
      {/* Terminal Top Control Bar */}
      <div className="h-8 border-b border-[#1C2333] bg-[#0E121B] px-4 flex items-center justify-between text-xs select-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[var(--accent)] font-bold">
            <Terminal size={13} />
            <span>TERMINAL</span>
          </div>
          <span className="text-zinc-400 text-[11px]">bash · node v24.0 (interactive)</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOutputs([])}
            title="Clear Terminal"
            aria-label="Clear Terminal"
            className="p-1 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <Trash2 size={13} />
          </button>

          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            title={isExpanded ? 'Restore Size' : 'Maximize Size'}
            aria-label={isExpanded ? 'Restore Size' : 'Maximize Size'}
            className="p-1 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>

          <button
            type="button"
            onClick={onClose}
            title="Close Terminal Panel"
            aria-label="Close Terminal Panel"
            className="p-1 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Terminal Output Stream */}
      <div
        className="flex-1 p-3 overflow-y-auto space-y-1.5 text-xs select-text cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {outputs.map((out) => {
          let color = 'text-[#E2E8F0]';
          if (out.type === 'command') color = 'text-[var(--accent)] font-semibold';
          else if (out.type === 'error') color = 'text-red-400';
          else if (out.type === 'success') color = 'text-[var(--accent)] font-medium';

          return (
            <div key={out.id} className={`${color} leading-relaxed`}>
              {out.content}
            </div>
          );
        })}

        {/* User Input Line (Explicit High-Contrast White Text + Accent Caret) */}
        <div className="flex items-center gap-2 pt-1.5">
          <span className="text-[var(--accent)] font-bold shrink-0 select-none">
            arpit@workstation:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' (e.g. projects, skills, resume, contact)..."
            className="flex-1 bg-transparent text-[#F8FAFC] font-bold caret-[var(--accent)] outline-none focus:outline-none font-mono text-xs placeholder:text-zinc-500 selection:bg-[var(--accent)] selection:text-black"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
