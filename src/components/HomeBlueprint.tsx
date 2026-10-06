import React, { useState } from 'react';

interface HomeBlueprintProps {
  onSelectTab: (tabId: string) => void;
  onOpenResume: () => void;
}

export const HomeBlueprint: React.FC<HomeBlueprintProps> = ({
  onSelectTab,
  onOpenResume,
}) => {
  const [activeTier, setActiveTier] = useState<number | null>(null);

  return (
    <div className="relative w-full min-h-[calc(100dvh-116px)] bg-[#0A2239] select-none font-sans flex flex-col justify-center border-b border-cyan-400/30 overflow-hidden">
      {/* Subtle CAD Engineering Grid Background (Spanning Full Available Canvas) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Blueprint Major Grid Lines (every 120px) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(186, 230, 253, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(186, 230, 253, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />

      {/* Blueprint Double Frame with Corner Coordinates (At most 16px inset) */}
      <div className="relative m-2 sm:m-3 md:m-4 flex-1 flex flex-col justify-center border border-cyan-300/40 z-10 overflow-hidden">
        {/* Corner Precision Alignment Markers */}
        <span className="absolute top-1.5 left-2 font-mono text-[9px] text-cyan-400/60 select-none pointer-events-none">
          + 00,00
        </span>
        <span className="absolute top-1.5 right-2 font-mono text-[9px] text-cyan-400/60 select-none pointer-events-none">
          + 01,00
        </span>
        <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-cyan-400/60 select-none pointer-events-none">
          + 00,01
        </span>
        <span className="absolute bottom-1.5 right-2 font-mono text-[9px] text-cyan-400/60 select-none pointer-events-none">
          + 01,01
        </span>

        {/* Hero Content: Two-Column Responsive Grid with Fluid Padding */}
        <div
          className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] items-center gap-8 xl:gap-12 my-auto"
          style={{
            paddingLeft: 'clamp(24px, 4vw, 72px)',
            paddingRight: 'clamp(24px, 4vw, 72px)',
            paddingTop: 'clamp(24px, 3.5vh, 48px)',
            paddingBottom: 'clamp(24px, 3.5vh, 48px)',
          }}
        >
          {/* =================================================================== */}
          {/* LEFT COLUMN: Specification & Fluid Typography                       */}
          {/* =================================================================== */}
          <div className="flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-7 z-10 min-w-0">
            {/* Revision Cloud: Open to opportunities */}
            <div className="inline-block relative self-start max-w-full">
              <div className="relative px-5 py-2.5 flex items-center gap-2.5">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 240 50"
                >
                  <path
                    d="
                      M 12 10
                      A 6 6 0 0 1 34 8
                      A 7 7 0 0 1 58 7
                      A 6 6 0 0 1 82 8
                      A 7 7 0 0 1 106 7
                      A 6 6 0 0 1 130 8
                      A 7 7 0 0 1 154 7
                      A 6 6 0 0 1 178 8
                      A 7 7 0 0 1 202 7
                      A 6 6 0 0 1 226 12
                      A 7 7 0 0 1 234 26
                      A 6 6 0 0 1 226 40
                      A 7 7 0 0 1 204 43
                      A 6 6 0 0 1 180 42
                      A 7 7 0 0 1 156 43
                      A 6 6 0 0 1 132 42
                      A 7 7 0 0 1 108 43
                      A 6 6 0 0 1 84 42
                      A 7 7 0 0 1 60 43
                      A 6 6 0 0 1 36 42
                      A 7 7 0 0 1 14 38
                      A 6 6 0 0 1 6 25
                      A 7 7 0 0 1 12 10
                      Z
                    "
                    fill="rgba(249, 115, 22, 0.05)"
                    stroke="#f97316"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316] animate-pulse relative z-10 shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-cyan-50 font-medium tracking-wide relative z-10 whitespace-nowrap">
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Fluid Headline: ARPIT RAI (Single line) */}
            <div className="leading-none">
              <h1
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 88px)',
                  lineHeight: 1.05,
                }}
                className="font-black tracking-tight text-white font-display uppercase drop-shadow-sm select-none whitespace-nowrap"
              >
                ARPIT RAI
              </h1>
            </div>

            {/* Horizontal Dimension Line: Full stack software engineer */}
            <div className="relative pt-1 pb-1 w-full max-w-full overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 text-cyan-200 min-w-0">
                {/* Left Dimension End Tick & Arrow */}
                <div className="flex items-center flex-1 min-w-[12px]">
                  <div className="w-[1.5px] h-3.5 sm:h-4 bg-cyan-300 shrink-0" />
                  <div className="w-0 h-0 border-y-[3.5px] sm:border-y-[4px] border-y-transparent border-r-[6px] sm:border-r-[7px] border-r-cyan-300 shrink-0" />
                  <div className="h-[1.5px] bg-cyan-300/80 flex-1 min-w-0" />
                </div>

                {/* Centered Monospace Specification Label with Fluid Size */}
                <span
                  style={{
                    fontSize: 'clamp(15px, 1.8vw, 28px)',
                  }}
                  className="px-1.5 sm:px-2 text-white font-mono font-medium tracking-tight sm:tracking-wider whitespace-nowrap shrink-0"
                >
                  Full stack software engineer
                </span>

                {/* Right Dimension End Tick & Arrow */}
                <div className="flex items-center flex-1 min-w-[12px]">
                  <div className="h-[1.5px] bg-cyan-300/80 flex-1 min-w-0" />
                  <div className="w-0 h-0 border-y-[3.5px] sm:border-y-[4px] border-y-transparent border-l-[6px] sm:border-l-[7px] border-l-cyan-300 shrink-0" />
                  <div className="w-[1.5px] h-3.5 sm:h-4 bg-cyan-300 shrink-0" />
                </div>
              </div>
            </div>

            {/* Description Paragraph with max-length ~52 characters and fluid sizing */}
            <p
              style={{
                fontSize: 'clamp(15px, 1.3vw, 20px)',
                maxWidth: '52ch',
              }}
              className="font-mono text-cyan-100/90 leading-relaxed font-light"
            >
              Design, build, and ship scalable web applications, turning complex problems into
              reliable, production-ready software that real users depend on.
            </p>

            {/* Action Buttons: Blueprint Rectangular Style */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={() => onSelectTab('contact')}
                className="px-6 py-2.5 bg-white text-[#0A2239] font-mono font-bold text-xs sm:text-sm tracking-wide rounded-none hover:bg-cyan-100 active:scale-95 transition-all shadow-md cursor-pointer border border-white"
              >
                Get in touch
              </button>

              <button
                type="button"
                onClick={onOpenResume}
                className="px-6 py-2.5 bg-transparent border border-white/80 text-white font-mono font-medium text-xs sm:text-sm tracking-wide rounded-none hover:bg-white/10 hover:border-white active:scale-95 transition-all cursor-pointer"
              >
                Download resume
              </button>
            </div>
          </div>

          {/* =================================================================== */}
          {/* RIGHT COLUMN: 3-Tier Isometric Architecture Schematic (Fluid SVG)   */}
          {/* =================================================================== */}
          <div className="w-full max-w-[520px] lg:max-w-none mx-auto flex items-center justify-center relative">
            <svg
              viewBox="0 0 550 590"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-auto max-h-[calc(100dvh-180px)] overflow-visible"
              style={{
                filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.35))',
                width: '100%',
                height: 'auto',
                maxHeight: '100%',
              }}
            >
              <defs>
                {/* Subtle Glow Filter for Active Hover States */}
                <filter id="tier-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 1. Technical Vertical Centerline */}
              <line
                x1="250"
                y1="30"
                x2="250"
                y2="560"
                stroke="rgba(186, 230, 253, 0.45)"
                strokeWidth="1.2"
                strokeDasharray="22 5 4 5"
              />

              {/* 2. Vertical Dimension Line ("scalable, production-ready") - Hidden below 640px */}
              <g className="hidden sm:inline opacity-90">
                {/* Top Dotted Extension Line */}
                <line
                  x1="120"
                  y1="95"
                  x2="250"
                  y2="95"
                  stroke="rgba(186, 230, 253, 0.4)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                {/* Bottom Dotted Extension Line */}
                <line
                  x1="120"
                  y1="510"
                  x2="250"
                  y2="510"
                  stroke="rgba(186, 230, 253, 0.4)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                {/* Vertical Dimension Line */}
                <line x1="120" y1="102" x2="120" y2="502" stroke="#BAE6FD" strokeWidth="1.2" />
                {/* Top Arrow */}
                <polygon points="120,95 116,106 124,106" fill="#BAE6FD" />
                {/* Bottom Arrow */}
                <polygon points="120,510 116,499 124,499" fill="#BAE6FD" />
                {/* Rotated Vertical Dimension Text */}
                <text
                  x="120"
                  y="300"
                  textAnchor="middle"
                  transform="rotate(-90 120 300)"
                  dy="-9"
                  fill="#BAE6FD"
                  fontSize="11.5"
                  fontFamily="monospace"
                  letterSpacing="0.06em"
                  className="select-none font-medium"
                >
                  scalable, production-ready
                </text>
              </g>

              {/* ============================================================== */}
              {/* TIER 1: INTERFACE (React, TypeScript)                          */}
              {/* ============================================================== */}
              <g
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setActiveTier(1)}
                onMouseLeave={() => setActiveTier(null)}
                filter={activeTier === 1 ? 'url(#tier-glow)' : undefined}
              >
                {/* Slab Bottom Depth */}
                <polygon
                  points="160,150 250,195 250,210 160,165"
                  fill="rgba(6, 182, 212, 0.16)"
                  stroke={activeTier === 1 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.2"
                />
                <polygon
                  points="250,195 340,150 340,165 250,210"
                  fill="rgba(6, 182, 212, 0.24)"
                  stroke={activeTier === 1 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.2"
                />

                {/* Slab Top Diamond */}
                <polygon
                  points="250,105 340,150 250,195 160,150"
                  fill={activeTier === 1 ? 'rgba(6, 182, 212, 0.22)' : 'rgba(10, 37, 64, 0.9)'}
                  stroke={activeTier === 1 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.5"
                />

                {/* Top Surface Isometric Grid Lines */}
                <line x1="182.5" y1="138.75" x2="272.5" y2="183.75" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />
                <line x1="205" y1="127.5" x2="295" y2="172.5" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />
                <line x1="227.5" y1="116.25" x2="317.5" y2="161.25" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />

                <line x1="182.5" y1="161.25" x2="272.5" y2="116.25" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />
                <line x1="205" y1="172.5" x2="295" y2="127.5" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />
                <line x1="227.5" y1="183.75" x2="317.5" y2="138.75" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />

                {/* 3D UI Block 1: Header / Navbar Ribbon */}
                <polygon
                  points="195,138 248,112 268,122 215,148"
                  fill="rgba(255, 255, 255, 0.12)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <polygon
                  points="195,138 215,148 215,157 195,147"
                  fill="rgba(255, 255, 255, 0.08)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <polygon
                  points="215,148 268,122 268,131 215,157"
                  fill="rgba(255, 255, 255, 0.15)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />

                {/* 3D UI Block 2: Front Component Card */}
                <polygon
                  points="224,162 250,149 268,158 242,171"
                  fill="rgba(255, 255, 255, 0.12)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <polygon
                  points="224,162 242,171 242,182 224,173"
                  fill="rgba(255, 255, 255, 0.08)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <polygon
                  points="242,171 268,158 268,169 242,182"
                  fill="rgba(255, 255, 255, 0.15)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />

                {/* 3D UI Block 3: Secondary Widget Card */}
                <polygon
                  points="272,138 296,126 314,135 290,147"
                  fill="rgba(255, 255, 255, 0.12)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <polygon
                  points="272,138 290,147 290,158 272,149"
                  fill="rgba(255, 255, 255, 0.08)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <polygon
                  points="290,147 314,135 314,146 290,158"
                  fill="rgba(255, 255, 255, 0.15)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />

                {/* Leader Line to Tier 1 Callout */}
                <line
                  x1="340"
                  y1="150"
                  x2="390"
                  y2="150"
                  stroke={activeTier === 1 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.2"
                />

                {/* Number 1 Badge (Scales responsively with SVG) */}
                <circle
                  cx="405"
                  cy="150"
                  r="11"
                  fill="#0A2239"
                  stroke={activeTier === 1 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.4"
                />
                <text
                  x="405"
                  y="154"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="11.5"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  1
                </text>

                {/* Callout Text */}
                <text
                  x="426"
                  y="145"
                  fill="#FFFFFF"
                  fontSize="15"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  className="select-none"
                >
                  Interface
                </text>
                <text
                  x="426"
                  y="163"
                  fill="#7DD3FC"
                  fontSize="11.5"
                  fontFamily="monospace"
                  className="select-none"
                >
                  React, TypeScript
                </text>
              </g>

              {/* Data Flow Arrows: Tier 1 <-> Tier 2 */}
              <g className="text-cyan-200">
                {/* Downward Request Arrow */}
                <line x1="238" y1="218" x2="238" y2="248" stroke="#BAE6FD" strokeWidth="1.3" />
                <polygon points="238,252 234,244 242,244" fill="#BAE6FD" />

                {/* Upward Response Arrow */}
                <line x1="262" y1="252" x2="262" y2="222" stroke="#BAE6FD" strokeWidth="1.3" />
                <polygon points="262,218 258,226 266,226" fill="#BAE6FD" />
              </g>

              {/* ============================================================== */}
              {/* TIER 2: SERVICES (Node.js, Python)                             */}
              {/* ============================================================== */}
              <g
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setActiveTier(2)}
                onMouseLeave={() => setActiveTier(null)}
                filter={activeTier === 2 ? 'url(#tier-glow)' : undefined}
              >
                {/* Slab Bottom Depth */}
                <polygon
                  points="160,305 250,350 250,365 160,320"
                  fill="rgba(6, 182, 212, 0.16)"
                  stroke={activeTier === 2 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.2"
                />
                <polygon
                  points="250,350 340,305 340,320 250,365"
                  fill="rgba(6, 182, 212, 0.24)"
                  stroke={activeTier === 2 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.2"
                />

                {/* Slab Top Diamond */}
                <polygon
                  points="250,260 340,305 250,350 160,305"
                  fill={activeTier === 2 ? 'rgba(6, 182, 212, 0.22)' : 'rgba(10, 37, 64, 0.9)'}
                  stroke={activeTier === 2 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.5"
                />

                {/* Top Surface Isometric Grid Lines */}
                <line x1="182.5" y1="293.75" x2="272.5" y2="338.75" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />
                <line x1="205" y1="282.5" x2="295" y2="327.5" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />
                <line x1="227.5" y1="271.25" x2="317.5" y2="316.25" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />

                <line x1="182.5" y1="316.25" x2="272.5" y2="271.25" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />
                <line x1="205" y1="327.5" x2="295" y2="282.5" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />
                <line x1="227.5" y1="338.75" x2="317.5" y2="293.75" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />

                {/* 3D Microservice Block 1: Left Medium Tower */}
                <polygon
                  points="200,280 224,268 240,276 216,288"
                  fill="rgba(255, 255, 255, 0.12)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <polygon
                  points="200,280 216,288 216,322 200,314"
                  fill="rgba(255, 255, 255, 0.08)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <polygon
                  points="216,288 240,276 240,310 216,322"
                  fill="rgba(255, 255, 255, 0.15)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />

                {/* 3D Microservice Block 2: Center Tall Primary API Server */}
                <polygon
                  points="244,250 268,238 286,247 262,259"
                  fill="rgba(255, 255, 255, 0.14)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <polygon
                  points="244,250 262,259 262,324 244,315"
                  fill="rgba(255, 255, 255, 0.09)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <polygon
                  points="262,259 286,247 286,312 262,324"
                  fill="rgba(255, 255, 255, 0.18)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />

                {/* 3D Microservice Block 3: Right Cube Service */}
                <polygon
                  points="276,292 298,281 316,290 294,301"
                  fill="rgba(255, 255, 255, 0.12)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <polygon
                  points="276,292 294,301 294,324 276,315"
                  fill="rgba(255, 255, 255, 0.08)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <polygon
                  points="294,301 316,290 316,313 294,324"
                  fill="rgba(255, 255, 255, 0.15)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />

                {/* Leader Line to Tier 2 Callout */}
                <line
                  x1="340"
                  y1="305"
                  x2="390"
                  y2="305"
                  stroke={activeTier === 2 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.2"
                />

                {/* Number 2 Badge (Scales responsively with SVG) */}
                <circle
                  cx="405"
                  cy="305"
                  r="11"
                  fill="#0A2239"
                  stroke={activeTier === 2 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.4"
                />
                <text
                  x="405"
                  y="309"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="11.5"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  2
                </text>

                {/* Callout Text */}
                <text
                  x="426"
                  y="300"
                  fill="#FFFFFF"
                  fontSize="15"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  className="select-none"
                >
                  Services
                </text>
                <text
                  x="426"
                  y="318"
                  fill="#7DD3FC"
                  fontSize="11.5"
                  fontFamily="monospace"
                  className="select-none"
                >
                  Node.js, Python
                </text>
              </g>

              {/* Data Flow Arrows: Tier 2 <-> Tier 3 */}
              <g className="text-cyan-200">
                {/* Downward Query Arrow */}
                <line x1="238" y1="373" x2="238" y2="403" stroke="#BAE6FD" strokeWidth="1.3" />
                <polygon points="238,407 234,399 242,399" fill="#BAE6FD" />

                {/* Upward Data Return Arrow */}
                <line x1="262" y1="407" x2="262" y2="377" stroke="#BAE6FD" strokeWidth="1.3" />
                <polygon points="262,373 258,381 266,381" fill="#BAE6FD" />
              </g>

              {/* ============================================================== */}
              {/* TIER 3: DATA (PostgreSQL, Docker)                              */}
              {/* ============================================================== */}
              <g
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setActiveTier(3)}
                onMouseLeave={() => setActiveTier(null)}
                filter={activeTier === 3 ? 'url(#tier-glow)' : undefined}
              >
                {/* Slab Bottom Depth */}
                <polygon
                  points="160,460 250,505 250,520 160,475"
                  fill="rgba(6, 182, 212, 0.16)"
                  stroke={activeTier === 3 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.2"
                />
                <polygon
                  points="250,505 340,460 340,475 250,520"
                  fill="rgba(6, 182, 212, 0.24)"
                  stroke={activeTier === 3 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.2"
                />

                {/* Slab Top Diamond */}
                <polygon
                  points="250,415 340,460 250,505 160,460"
                  fill={activeTier === 3 ? 'rgba(6, 182, 212, 0.22)' : 'rgba(10, 37, 64, 0.9)'}
                  stroke={activeTier === 3 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.5"
                />

                {/* Top Surface Isometric Grid Lines */}
                <line x1="182.5" y1="448.75" x2="272.5" y2="493.75" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />
                <line x1="205" y1="437.5" x2="295" y2="482.5" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />
                <line x1="227.5" y1="426.25" x2="317.5" y2="471.25" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />

                <line x1="182.5" y1="471.25" x2="272.5" y2="426.25" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />
                <line x1="205" y1="482.5" x2="295" y2="437.5" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />
                <line x1="227.5" y1="493.75" x2="317.5" y2="448.75" stroke="rgba(186, 230, 253, 0.3)" strokeWidth="0.8" />

                {/* Database Cylinder 1: Left Drum */}
                <ellipse
                  cx="220"
                  cy="442"
                  rx="22"
                  ry="11"
                  fill="rgba(255, 255, 255, 0.14)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <line x1="198" y1="442" x2="198" y2="476" stroke="#FFFFFF" strokeWidth="1.2" />
                <line x1="242" y1="442" x2="242" y2="476" stroke="#FFFFFF" strokeWidth="1.2" />
                <path
                  d="M 198,476 C 198,490.6 242,490.6 242,476"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                {/* Internal Platter Separator Line */}
                <path
                  d="M 198,459 C 198,473.6 242,473.6 242,459"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />

                {/* Database Cylinder 2: Right Drum */}
                <ellipse
                  cx="280"
                  cy="458"
                  rx="22"
                  ry="11"
                  fill="rgba(255, 255, 255, 0.14)"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                <line x1="258" y1="458" x2="258" y2="492" stroke="#FFFFFF" strokeWidth="1.2" />
                <line x1="302" y1="458" x2="302" y2="492" stroke="#FFFFFF" strokeWidth="1.2" />
                <path
                  d="M 258,492 C 258,506.6 302,506.6 302,492"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
                {/* Internal Platter Separator Line */}
                <path
                  d="M 258,475 C 258,489.6 302,489.6 302,475"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />

                {/* Leader Line to Tier 3 Callout */}
                <line
                  x1="340"
                  y1="460"
                  x2="390"
                  y2="460"
                  stroke={activeTier === 3 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.2"
                />

                {/* Number 3 Badge (Scales responsively with SVG) */}
                <circle
                  cx="405"
                  cy="460"
                  r="11"
                  fill="#0A2239"
                  stroke={activeTier === 3 ? '#38bdf8' : '#BAE6FD'}
                  strokeWidth="1.4"
                />
                <text
                  x="405"
                  y="464"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="11.5"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  3
                </text>

                {/* Callout Text */}
                <text
                  x="426"
                  y="455"
                  fill="#FFFFFF"
                  fontSize="15"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  className="select-none"
                >
                  Data
                </text>
                <text
                  x="426"
                  y="473"
                  fill="#7DD3FC"
                  fontSize="11.5"
                  fontFamily="monospace"
                  className="select-none"
                >
                  PostgreSQL, Docker
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
