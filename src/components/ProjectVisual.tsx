import React from 'react';
import { Cpu, MapPin, Navigation, ShieldCheck, Terminal } from 'lucide-react';

interface ProjectVisualProps {
  projectNumber: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ projectNumber }) => {
  if (projectNumber === '01') {
    // JAL-DRISHTI: Hydrological Early Warning & Basin Intelligence Schematic
    return (
      <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#0E1217] rounded-lg border border-[#20252D] p-5 flex flex-col justify-between overflow-hidden select-none">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#161D26_1px,transparent_1px),linear-gradient(to_bottom,#161D26_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

        {/* Top telemetry bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#20252D]/80 pb-3 text-[11px] font-mono text-[#8B93A1]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-[#F5F7FA]">BASIN TELEMETRY // SECTOR-04</span>
          </div>
          <div className="flex items-center gap-3 text-[#5F6775]">
            <span>LAT: 21.2514° N</span>
            <span className="hidden sm:inline">LON: 81.6296° E</span>
          </div>
        </div>

        {/* Center schematic: River basin elevation & hydrology network */}
        <div className="relative z-10 my-4 flex flex-col items-center justify-center">
          <svg
            viewBox="0 0 460 140"
            className="w-full max-w-md h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Terrain Elevation Contours */}
            <path
              d="M 20 120 Q 120 70 230 95 T 440 60"
              stroke="#202A36"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 20 90 Q 140 40 250 65 T 440 30"
              stroke="#263342"
              strokeWidth="1.5"
            />
            {/* Primary River Hydrological Channel */}
            <path
              d="M 30 110 C 130 115 160 55 260 70 C 340 82 390 40 430 35"
              stroke="#3B82F6"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Tributaries */}
            <path
              d="M 120 20 Q 150 50 185 68"
              stroke="#60A5FA"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M 310 125 Q 325 95 350 72"
              stroke="#60A5FA"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />

            {/* Sensor Station Nodes */}
            <circle cx="185" cy="68" r="4" fill="#3B82F6" />
            <circle cx="185" cy="68" r="8" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />
            <circle cx="350" cy="72" r="4" fill="#3B82F6" />
            <circle cx="350" cy="72" r="8" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />
            <circle cx="430" cy="35" r="5" fill="var(--accent)" />

            {/* Station Labels */}
            <text x="140" y="95" fill="#8B93A1" fontSize="10" fontFamily="JetBrains Mono">
              STATION-01 [GAUGE: 4.8m]
            </text>
            <text x="310" y="105" fill="#8B93A1" fontSize="10" fontFamily="JetBrains Mono">
              STATION-02 [NORMAL]
            </text>
            <text x="360" y="25" fill="var(--accent-text)" fontSize="10" fontFamily="JetBrains Mono">
              ESTUARY GATE
            </text>
          </svg>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="relative z-10 pt-3 border-t border-[#20252D]/80 grid grid-cols-3 gap-2 font-mono text-[10px] sm:text-xs">
          <div>
            <span className="text-[#5F6775] block">MODEL</span>
            <span className="text-[#F5F7FA]">Hydro-LSTM v2</span>
          </div>
          <div>
            <span className="text-[#5F6775] block">PRECIPITATION</span>
            <span className="text-[#3B82F6]">124 mm/24h</span>
          </div>
          <div className="text-right">
            <span className="text-[#5F6775] block">RISK LEVEL</span>
            <span className="text-amber-400">MODERATE (MONITORED)</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectNumber === '02') {
    // AI Social Media Automation: n8n + Gemini Pipeline Workflow
    return (
      <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#0E1217] rounded-lg border border-[#20252D] p-5 flex flex-col justify-between overflow-hidden select-none">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#161D26_1px,transparent_1px),linear-gradient(to_bottom,#161D26_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

        {/* Top workflow bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#20252D]/80 pb-3 text-[11px] font-mono text-[#8B93A1]">
          <div className="flex items-center gap-2">
            <Cpu size={13} className="text-[#3B82F6]" />
            <span className="text-[#F5F7FA]">WORKFLOW PIPELINE // n8n + GEMINI</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent-text)] border border-[var(--accent-border)] text-[10px]">
            ACTIVE CONTAINER
          </span>
        </div>

        {/* Center Node Workflow Diagram */}
        <div className="relative z-10 my-4 flex flex-col gap-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Step 1: Ingestion & Trigger */}
            <div className="p-3 rounded-md bg-[#131820] border border-[#20252D] space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#8B93A1]">
                <span>01. TRIGGER</span>
                <Terminal size={11} className="text-[#3B82F6]" />
              </div>
              <p className="text-xs font-mono text-[#F5F7FA] font-medium">Topic / Schedule</p>
              <p className="text-[10px] text-[#5F6775] font-mono">Webhook payload parsed</p>
            </div>

            {/* Step 2: Gemini Generation */}
            <div className="p-3 rounded-md bg-[#131820] border border-[#3B82F6]/40 space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#3B82F6]">
                <span>02. GEMINI AI</span>
                <Cpu size={11} className="text-[#3B82F6]" />
              </div>
              <p className="text-xs font-mono text-[#F5F7FA] font-medium">Content & Visual</p>
              <p className="text-[10px] text-[#8B93A1] font-mono">Captions + Kie.ai images</p>
            </div>

            {/* Step 3: Human Gate & Publish */}
            <div className="p-3 rounded-md bg-[#131820] border border-[#20252D] space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#8B93A1]">
                <span>03. APPROVAL</span>
                <ShieldCheck size={11} className="text-[var(--accent-text)]" />
              </div>
              <p className="text-xs font-mono text-[#F5F7FA] font-medium">Telegram Bot</p>
              <p className="text-[10px] text-[#5F6775] font-mono">1-click approve & publish</p>
            </div>
          </div>

          {/* Workflow execution log line */}
          <div className="p-2.5 rounded bg-[#101419] border border-[#1E252E] flex items-center justify-between font-mono text-[11px]">
            <span className="text-[#8B93A1] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span>telegram_bot.poll: human_confirmation = OK</span>
            </span>
            <span className="text-[#3B82F6] text-[10px]">200 OK</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 pt-3 border-t border-[#20252D]/80 flex items-center justify-between font-mono text-[10px] sm:text-xs text-[#8B93A1]">
          <span>ORCHESTRATION: Docker Engine</span>
          <span className="text-[#F5F7FA]">Human-in-the-Loop Architecture</span>
        </div>
      </div>
    );
  }

  // 03 — Chhattisgarh Taxi Service: Responsive Booking & Trip Dispatch
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#0E1217] rounded-lg border border-[#20252D] p-5 flex flex-col justify-between overflow-hidden select-none">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161D26_1px,transparent_1px),linear-gradient(to_bottom,#161D26_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

      {/* Top telemetry bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#20252D]/80 pb-3 text-[11px] font-mono text-[#8B93A1]">
        <div className="flex items-center gap-2">
          <Navigation size={13} className="text-[#3B82F6]" />
          <span className="text-[#F5F7FA]">DISPATCH CONSOLE // PROD APP</span>
        </div>
        <div className="flex items-center gap-1.5 text-[var(--accent-text)] text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span>LIVE DEPLOYMENT</span>
        </div>
      </div>

      {/* Center preview card */}
      <div className="relative z-10 my-4 space-y-3">
        <div className="p-3.5 rounded-md bg-[#131820] border border-[#20252D] space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-medium text-[#F5F7FA]">
              <MapPin size={13} className="text-[#3B82F6]" />
              <span>Raipur Junction ➔ Durg BIT Campus</span>
            </div>
            <span className="font-mono text-xs text-[#3B82F6] font-semibold">
              CONFIRMED
            </span>
          </div>

          {/* Route path line */}
          <div className="w-full bg-[#1A212A] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#3B82F6] h-full w-3/4 rounded-full" />
          </div>

          <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-[#8B93A1] pt-1">
            <div>
              <span className="text-[#5F6775] block">VEHICLE</span>
              <span className="text-[#F5F7FA]">Sedan Premium</span>
            </div>
            <div>
              <span className="text-[#5F6775] block">DRIVER AUTH</span>
              <span className="text-[var(--accent-text)]">JWT Verified</span>
            </div>
            <div className="text-right">
              <span className="text-[#5F6775] block">SYNC STATUS</span>
              <span className="text-[#F5F7FA]">MongoDB Atlas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 pt-3 border-t border-[#20252D]/80 flex items-center justify-between font-mono text-[10px] sm:text-xs text-[#8B93A1]">
        <span>chhattisgarhtaxiservice.com</span>
        <span className="text-[#3B82F6] flex items-center gap-1">
          Production Traffic
        </span>
      </div>
    </div>
  );
};
