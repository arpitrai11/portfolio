import React, { useState } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, RotateCcw, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const IntroTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'whoami',
      output: (
        <span className="text-[var(--text-primary)] font-medium">
          {PERSONAL_INFO.name} — {PERSONAL_INFO.role} [ID: arpitrai11]
        </span>
      ),
    },
    {
      command: 'arpit --status',
      output: (
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2 text-[var(--accent-text)] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>SESSION: ACTIVE // Available for opportunities</span>
          </div>
          <p className="text-[var(--text-secondary)]">
            Specialization: Scalable Web Apps · Microservices · AI-Driven Automation
          </p>
        </div>
      ),
    },
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let res: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        res = (
          <div className="text-[var(--text-secondary)] space-y-1">
            <p>Available commands:</p>
            <p className="text-[var(--text-primary)]">
              <span className="text-[var(--accent-blue)]">whoami</span> - Identity & primary role
            </p>
            <p className="text-[var(--text-primary)]">
              <span className="text-[var(--accent-blue)]">skills</span> - View core engineering stack
            </p>
            <p className="text-[var(--text-primary)]">
              <span className="text-[var(--accent-blue)]">projects</span> - List flagship deployed systems
            </p>
            <p className="text-[var(--text-primary)]">
              <span className="text-[var(--accent-blue)]">contact</span> - Direct channels & communication
            </p>
            <p className="text-[var(--text-primary)]">
              <span className="text-[var(--accent-blue)]">clear</span> - Reset terminal output
            </p>
          </div>
        );
        break;
      case 'whoami':
        res = (
          <span className="text-[var(--text-primary)]">
            {PERSONAL_INFO.name} ({PERSONAL_INFO.role}) — {PERSONAL_INFO.location}
          </span>
        );
        break;
      case 'skills':
        res = (
          <div className="text-[var(--text-secondary)]">
            <span className="text-[var(--accent-blue)] font-medium">Stack:</span> React, TypeScript, Node.js, Express, MongoDB, Docker, n8n, Gemini AI
          </div>
        );
        break;
      case 'projects':
        res = (
          <div className="text-[var(--text-secondary)] space-y-1">
            <p>1. Jal-Drishti (Flood Intelligence)</p>
            <p>2. AI Social Media Automation (n8n + Gemini)</p>
            <p>3. Chhattisgarh Taxi Service (Live SaaS)</p>
          </div>
        );
        break;
      case 'contact':
        res = (
          <div className="text-[var(--text-secondary)] space-y-1">
            <p>Email: {PERSONAL_INFO.email}</p>
            <p>GitHub: {PERSONAL_INFO.githubUrl}</p>
            <p>Phone: {PERSONAL_INFO.phone}</p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        res = (
          <span className="text-rose-500">
            command not found: {cmd}. Type <span className="text-[var(--accent-blue)]">help</span> for valid commands.
          </span>
        );
    }

    setHistory((prev) => [...prev, { command: inputVal, output: res }]);
    setInputVal('');
  };

  const resetTerminal = () => {
    setHistory([
      {
        command: 'whoami',
        output: (
          <span className="text-[var(--text-primary)] font-medium">
            {PERSONAL_INFO.name} — {PERSONAL_INFO.role} [ID: arpitrai11]
          </span>
        ),
      },
      {
        command: 'arpit --status',
        output: (
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2 text-[var(--accent-text)] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>SESSION: ACTIVE // Available for opportunities</span>
            </div>
            <p className="text-[var(--text-secondary)]">
              Specialization: Scalable Web Apps · Microservices · AI-Driven Automation
            </p>
          </div>
        ),
      },
    ]);
  };

  return (
    <section id="intro" className="pt-24 pb-8" aria-label="Terminal Session Intro">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-3">
        {/* Concept Label */}
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <TerminalIcon size={14} className="text-[var(--accent-blue)]" />
            <span className="text-[var(--text-primary)] font-medium">SECTION 01 // TERMINAL BOOTSTRAP</span>
            <span className="text-[var(--text-muted)]">· Bash Console</span>
          </div>
          <span className="hidden sm:inline text-[11px] text-[var(--text-muted)]">TTY1 · UTF-8 · 256color</span>
        </div>

        {/* Terminal Window Box */}
        <div className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xl overflow-hidden font-mono text-xs">
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] select-none">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E] shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F] shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#62C554] shadow-xs" />
              </div>
              <span className="text-[var(--text-secondary)] text-[11px] select-none pl-2">
                arpit@workstation:~ (interactive-shell)
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-[var(--text-secondary)]">
              <span className="hidden sm:flex items-center gap-1 text-[var(--accent-text)]">
                <ShieldCheck size={12} />
                <span>Verified SSH</span>
              </span>
              <button
                type="button"
                onClick={resetTerminal}
                title="Reset Terminal"
                className="hover:text-[var(--text-primary)] transition-colors p-1"
                aria-label="Reset Terminal"
              >
                <RotateCcw size={12} />
              </button>
            </div>
          </div>

          {/* Terminal Logs & Output */}
          <div className="p-5 space-y-3 leading-relaxed max-h-72 overflow-y-auto">
            <div className="text-[var(--text-muted)] text-[11px]">
              Last login: Mon Oct 5 12:54:04 on console — Type <span className="text-[var(--accent-blue)]">help</span> for options
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <span className="text-[var(--accent-text)] font-medium">arpit@workstation</span>
                  <span className="text-[var(--text-muted)]">:</span>
                  <span className="text-[var(--accent-blue)]">~</span>
                  <span className="text-[var(--text-muted)]">$</span>
                  <span className="text-[var(--text-primary)] font-medium">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-[var(--border-subtle)] py-0.5">{item.output}</div>
              </div>
            ))}

            {/* Input Form */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
              <span className="text-[var(--accent-text)] font-medium">arpit@workstation</span>
              <span className="text-[var(--text-muted)]">:</span>
              <span className="text-[var(--accent-blue)]">~</span>
              <span className="text-[var(--text-muted)]">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'skills', 'projects'..."
                className="flex-1 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono text-xs"
                aria-label="Terminal command input"
              />
              <button
                type="submit"
                aria-label="Submit command"
                className="text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors"
              >
                <CornerDownLeft size={13} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
