import React, { useState, useEffect, useRef } from 'react';
import { Artwork } from '../types/portfolio';

interface ArtworkVisualPlateProps {
  artwork: Artwork;
  compact?: boolean;
  interactive?: boolean;
}

export const ArtworkVisualPlate: React.FC<ArtworkVisualPlateProps> = ({
  artwork,
  compact = false,
  interactive = true
}) => {
  const [pulse, setPulse] = useState(0);
  const [activePedal, setActivePedal] = useState<number | null>(null);
  const [twoManTriggered, setTwoManTriggered] = useState(false);
  const [sensorSaturation, setSensorSaturation] = useState(85);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animation frame loop for dynamic generative visual plates
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => (p + 1) % 360);
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Custom canvas rendering for The Klingon Topology (Riemannian manifold)
  useEffect(() => {
    if (artwork.id !== 'klingon-topology' || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let running = true;

    const render = () => {
      if (!running) return;
      frame += 0.02;
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = '#05070d';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle coordinate grid
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 0.5;
      const step = 28;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw undulating Riemannian manifold surface lines
      const cx = width / 2;
      const cy = height / 2 + 10;
      const lines = 14;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(96, 165, 250, 0.45)' : 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = 1;

        const yOffset = (i - lines / 2) * 12;

        for (let x = -width / 2; x < width / 2; x += 10) {
          const dist = Math.sqrt(x * x + yOffset * yOffset);
          const z = Math.sin(dist * 0.04 - frame) * 22 * Math.cos(x * 0.02 + frame * 0.5);
          const screenX = cx + x;
          const screenY = cy + yOffset + z;

          if (x === -width / 2) {
            ctx.moveTo(screenX, screenY);
          } else {
            ctx.lineTo(screenX, screenY);
          }
        }
        ctx.stroke();
      }

      // Draw high-dimensional token cluster nodes
      const nodeCount = 9;
      for (let n = 0; n < nodeCount; n++) {
        const angle = (n / nodeCount) * Math.PI * 2 + frame * 0.3;
        const radius = 70 + Math.sin(frame * 2 + n) * 35;
        const nx = cx + Math.cos(angle) * radius;
        const ny = cy + Math.sin(angle) * (radius * 0.55);

        // Core node
        ctx.fillStyle = n === 0 ? '#ffffff' : '#60a5fa';
        ctx.beginPath();
        ctx.arc(nx, ny, n === 0 ? 3.5 : 2, 0, Math.PI * 2);
        ctx.fill();

        // Node vector connection to center
        ctx.strokeStyle = 'rgba(96, 165, 250, 0.15)';
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.stroke();
      }

      // Central obsidian projection plinth silhouette
      ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      const pw = 120;
      const ph = 40;
      ctx.fillRect(cx - pw / 2, height - ph - 16, pw, ph);
      ctx.strokeRect(cx - pw / 2, height - ph - 16, pw, ph);

      requestAnimationFrame(render);
    };

    render();

    return () => {
      running = false;
    };
  }, [artwork.id]);

  // Render specific plate based on artwork
  return (
    <div
      className={`relative w-full overflow-hidden rounded-md border border-neutral-800/90 bg-[#08080a] ${
        compact ? 'h-48 sm:h-56' : 'h-72 sm:h-96'
      }`}
    >
      {/* 1. The Klingon Topology: Live Riemannian Vector Projection */}
      {artwork.id === 'klingon-topology' && (
        <div className="relative w-full h-full">
          <canvas
            ref={canvasRef}
            width={640}
            height={380}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2 text-[10px] font-mono-code text-blue-300 bg-neutral-950/80 px-2.5 py-1 border border-blue-900/40 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping inline-block" />
            <span>4096-DIM RIEMANNIAN MANIFOLD</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400">LATENT PROJECTION 60 FPS</span>
          </div>
          <div className="absolute bottom-3 right-3 text-[10px] font-mono-code text-neutral-400 bg-neutral-950/80 px-2 py-0.5 border border-neutral-800 rounded">
            HOMOMORPHIC ZERO-KNOWLEDGE PROOF: VALID
          </div>
        </div>
      )}

      {/* 2. Deconstructing Capital: Directional Lumens Subverting Observer Bias */}
      {artwork.id === 'deconstructing-capital' && (
        <div className="relative w-full h-full bg-[#050505] flex flex-col justify-between p-4 overflow-hidden">
          {/* Directional beam cones saturating the camera sensor */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -top-10 left-1/4 w-32 h-[140%] bg-gradient-to-b from-white via-white/40 to-transparent transform -rotate-12 blur-sm transition-opacity duration-300"
              style={{ opacity: sensorSaturation / 100 }}
            />
            <div
              className="absolute -top-10 right-1/4 w-40 h-[140%] bg-gradient-to-b from-amber-50 via-white/50 to-transparent transform rotate-12 blur-sm transition-opacity duration-300"
              style={{ opacity: sensorSaturation / 100 }}
            />
            {/* Scrim wireframe grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
          </div>

          <div className="relative z-10 flex justify-between items-start">
            <div className="text-[10px] font-mono-code text-neutral-300 bg-neutral-900/90 px-2.5 py-1 border border-neutral-700 rounded">
              <span>OPTICAL INTERCEPT</span>
              <span className="text-neutral-600 mx-1.5">|</span>
              <span className="text-amber-400">45,000 LUX FRESNEL AT BREWSTER ANGLE</span>
            </div>
            {interactive && (
              <div className="flex items-center gap-2 bg-neutral-950/80 border border-neutral-800 px-2 py-1 rounded text-[11px] font-mono-code text-neutral-300">
                <span>Illumination:</span>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={sensorSaturation}
                  onChange={e => setSensorSaturation(Number(e.target.value))}
                  className="w-16 accent-neutral-300 cursor-pointer"
                />
                <span className="text-neutral-400 w-8">{sensorSaturation}%</span>
              </div>
            )}
          </div>

          {/* Real-time Automated Capture Sensor Histogram Simulation */}
          <div className="relative z-10 grid grid-cols-2 gap-3 mt-auto">
            <div className="bg-neutral-950/90 border border-neutral-800 p-2.5 rounded text-[10px] font-mono-code">
              <div className="text-neutral-400 uppercase tracking-wider mb-1 flex justify-between">
                <span>Capture Array Feed</span>
                <span className="text-red-400">CLIPPED: 99.8%</span>
              </div>
              <div className="h-10 w-full bg-white flex items-center justify-center text-neutral-900 font-semibold text-xs tracking-wider border border-white">
                WHITE-OUT SANCTUARY
              </div>
              <p className="text-[9px] text-neutral-500 mt-1">Observer bias blinded: capture zero-state</p>
            </div>

            <div className="bg-neutral-950/90 border border-neutral-800 p-2.5 rounded text-[10px] font-mono-code">
              <div className="text-neutral-400 uppercase tracking-wider mb-1 flex justify-between">
                <span>Human Eyeball Sanctuary</span>
                <span className="text-emerald-400">OPTIMAL</span>
              </div>
              <div className="h-10 w-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 text-xs px-2">
                Warm Chiaroscuro Human Silhouette
              </div>
              <p className="text-[9px] text-neutral-500 mt-1">Physical eye adapts; automated panopticon fails</p>
            </div>
          </div>
        </div>
      )}

      {/* 3. The Ultimate Selfie: Architectural Pavilion & Shutter Optocoupler */}
      {artwork.id === 'ultimate-selfie-ids' && (
        <div className="relative w-full h-full bg-[#0a0a0c] p-4 flex flex-col justify-between overflow-hidden">
          {/* Architectural timber pavilion lines */}
          <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="20%" y1="0" x2="35%" y2="100%" stroke="#d97706" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="80%" y1="0" x2="65%" y2="100%" stroke="#d97706" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#451a03" strokeWidth="1" />
            <rect x="35%" y="30%" width="30%" height="45%" fill="none" stroke="#78350f" strokeWidth="1" />
          </svg>

          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono-code text-amber-200">
            <span className="bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 rounded">
              MTCC / TO DO INTERACTIVE PAVILION RIG
            </span>
            <span className="text-neutral-400">18,400+ PARTICIPANTS LOGGED</span>
          </div>

          {/* Central feedback loop simulation */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-full border border-amber-500/50 flex items-center justify-center relative">
              <div
                className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center transition-transform duration-300"
                style={{ transform: `scale(${1 + Math.sin(pulse * 0.1) * 0.08})` }}
              >
                <span className="text-amber-300 text-xs font-mono-code">5D MK III</span>
              </div>
              <span className="absolute -top-3 text-[9px] font-mono-code text-amber-400 bg-neutral-950 px-1">
                TWO-WAY MIRROR
              </span>
            </div>
            <p className="text-xs text-neutral-300 mt-2 font-mono-code">
              Capacitive Body Contact <span className="text-amber-400">→</span> Optocoupler <span className="text-amber-400">→</span> Inverted Civic Wall
            </p>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono-code text-neutral-400 border-t border-neutral-800 pt-2">
            <span>Latency: 18ms bodily circuit</span>
            <span className="text-amber-400">TripleHead 15,000 Lumens Output</span>
          </div>
        </div>
      )}

      {/* Interactive Media Pavilions: Tactile Actuator & Peer Mesh Node */}
      {artwork.id === 'interactive-media-pavilions' && (
        <div className="relative w-full h-full bg-[#070913] p-4 flex flex-col justify-between overflow-hidden">
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono-code text-indigo-400">
            <span className="bg-indigo-950/80 border border-indigo-800/60 px-2 py-0.5 rounded">
              ATMEL AVR + AD-HOC MESH NODE (802.11n)
            </span>
            <span className="text-indigo-300">SUB-5ms TACTILE INTERRUPT</span>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center space-y-3">
            <div className="flex items-center gap-6">
              {/* Tactile button graphic */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => {
                    setTwoManTriggered(true);
                    setTimeout(() => setTwoManTriggered(false), 300);
                  }}
                  className={`w-16 h-16 rounded-full border-4 flex items-center justify-center cursor-pointer transition-all shadow-lg ${
                    twoManTriggered
                      ? 'bg-indigo-500 border-white shadow-indigo-500/50 scale-95'
                      : 'bg-indigo-950 border-indigo-400 hover:border-indigo-300 hover:scale-105'
                  }`}
                >
                  <span className="text-[10px] font-mono-code font-bold text-white">PRESS</span>
                </button>
                <span className="text-[9px] font-mono-code text-neutral-400 mt-1">Tactile Switch</span>
              </div>

              {/* Arrow */}
              <div className="text-indigo-400 font-mono-code text-xs animate-pulse">
                ──►
              </div>

              {/* Local Mesh Daemon Terminal */}
              <div className="p-3 bg-neutral-950 border border-indigo-900 rounded font-mono-code text-[9px] text-left text-neutral-300 w-44">
                <div className="text-indigo-400 border-b border-indigo-950 pb-1 mb-1 font-bold">
                  LOCAL MESH ROUTER
                </div>
                <div>Status: <span className="text-emerald-400">ISOLATED / ZERO-CLOUD</span></div>
                <div>Latency: <span className="text-indigo-300">{twoManTriggered ? '3.8ms TRIGGER' : 'IDLE 0.0ms'}</span></div>
                <div>Peers: <span className="text-neutral-400">14 Active Festival Nodes</span></div>
              </div>
            </div>

            <p className="text-xs text-neutral-300 font-mono-code">
              Audience Tactile Actuation <span className="text-indigo-400">→</span> Zero-Cloud Ad-Hoc Broadcast
            </p>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono-code text-neutral-400 border-t border-neutral-800 pt-2">
            <span>Decentralized Peer Network</span>
            <span className="text-indigo-400">Zero Corporate Cloud Reliance</span>
          </div>
        </div>
      )}

      {/* 4. Broadcast People: 16-Channel CRT Matrix */}
      {artwork.id === 'broadcast-people' && (
        <div className="relative w-full h-full bg-[#030603] p-3 flex flex-col justify-between overflow-hidden">
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono-code text-emerald-400">
            <span className="bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
              SONY TRINITRON 16×16 MATRIX SWITCHER
            </span>
            <span className="text-emerald-500">15.734 kHz FLYBACK FREQ</span>
          </div>

          {/* 16 CRT monitors grid */}
          <div className="grid grid-cols-4 gap-1.5 my-2 max-w-sm mx-auto w-full">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className={`h-11 sm:h-12 border rounded-sm flex flex-col justify-between p-1 relative overflow-hidden transition-all ${
                  activePedal === idx
                    ? 'border-emerald-300 bg-emerald-900/60 shadow-[0_0_12px_rgba(34,197,94,0.4)]'
                    : 'border-emerald-900/60 bg-neutral-950'
                }`}
              >
                {/* Simulated phosphor scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.6)_50%)] [background-size:100%_4px] pointer-events-none" />
                <div className="text-[8px] font-mono-code text-emerald-600 flex justify-between">
                  <span>CH {idx + 1}</span>
                  <span>{activePedal === idx ? 'REC' : 'LIVE'}</span>
                </div>
                <div className="text-[8px] font-mono-code text-emerald-400 truncate">
                  {idx % 2 === 0 ? 'DELAY 3.2s' : 'NTSC CROWD'}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Stomp Pedals */}
          {interactive && (
            <div className="relative z-10 flex items-center justify-between border-t border-emerald-950 pt-2 text-[10px] font-mono-code text-emerald-400">
              <span className="text-neutral-400">Step on floor pedal:</span>
              <div className="flex gap-2">
                {[0, 1, 2, 3].map(p => (
                  <button
                    key={p}
                    onClick={() => setActivePedal(activePedal === p ? null : p)}
                    className={`px-2 py-0.5 border rounded cursor-pointer transition-colors ${
                      activePedal === p
                        ? 'bg-emerald-500 text-black border-emerald-400 font-bold'
                        : 'border-emerald-800 text-emerald-300 hover:bg-emerald-950'
                    }`}
                  >
                    Pedal {p + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 5. Two-Man Rule: Geodesic Tape Dome & Dual-Presence Interlock */}
      {artwork.id === 'two-man-rule' && (
        <div className="relative w-full h-full bg-[#06080d] p-3 flex flex-col justify-between overflow-hidden">
          {/* Strobe flash flash overlay */}
          {twoManTriggered && (
            <div className="absolute inset-0 bg-white/90 z-30 pointer-events-none animate-pulse" />
          )}

          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono-code text-sky-300">
            <span className="bg-sky-950/60 border border-sky-800/40 px-2 py-0.5 rounded">
              GEODESIC TAPE MONOCOQUE · DUAL INTERLOCK
            </span>
            <span className="text-neutral-400">TEDxTORONTO SONY CENTRE</span>
          </div>

          {/* Dome & dual contact terminals visual */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center">
            {/* Geodesic tape dome wireframe */}
            <svg className="w-48 h-24 mb-1" viewBox="0 0 200 100" fill="none" stroke="#38bdf8" strokeWidth="0.8">
              <path d="M 10 90 Q 100 10 190 90 Z" fill="rgba(56, 189, 248, 0.05)" />
              <line x1="10" y1="90" x2="70" y2="40" />
              <line x1="70" y1="40" x2="130" y2="40" />
              <line x1="130" y1="40" x2="190" y2="90" />
              <line x1="70" y1="40" x2="100" y2="15" />
              <line x1="130" y1="40" x2="100" y2="15" />
              <line x1="100" y1="15" x2="100" y2="90" strokeDasharray="2 2" />
            </svg>

            <div className="flex items-center gap-6 text-[10px] font-mono-code">
              <span className="text-sky-400 border border-sky-800 px-2 py-0.5 rounded bg-sky-950/40">
                Terminal A (Visitor 1)
              </span>
              <span className="text-neutral-400 font-bold">4.0 METERS APART</span>
              <span className="text-sky-400 border border-sky-800 px-2 py-0.5 rounded bg-sky-950/40">
                Terminal B (Visitor 2)
              </span>
            </div>
          </div>

          {/* Interactive dual-trigger simulator */}
          {interactive && (
            <div className="relative z-10 flex items-center justify-between border-t border-neutral-800 pt-2 text-[10px] font-mono-code">
              <span className="text-neutral-400">AND-gate require 2 concurrent operators:</span>
              <button
                onClick={() => {
                  setTwoManTriggered(true);
                  setTimeout(() => setTwoManTriggered(false), 250);
                }}
                className="px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded font-medium cursor-pointer transition-colors"
              >
                Actuate Dual Contacts (640Ws Strobe)
              </button>
            </div>
          )}
        </div>
      )}

      {/* 6. A Perfect World: Kensington Market Medium Format Plate */}
      {artwork.id === 'a-perfect-world' && (
        <div className="relative w-full h-full bg-[#0a0a0a] p-4 flex flex-col justify-between overflow-hidden">
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono-code text-neutral-300">
            <span className="bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
              MAMIYA RZ67 PRO II · 6×7cm GELATIN SILVER
            </span>
            <span className="text-neutral-500">KENSINGTON MARKET URBAN COMMONS</span>
          </div>

          {/* Bellows frame & audio waveform graphic */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center">
            <div className="border border-neutral-700 bg-neutral-900/60 p-4 rounded max-w-xs w-full text-center">
              <div className="text-[11px] font-serif-display text-neutral-200 italic mb-1">
                "What defines survival? What constitutes a sanctuary?"
              </div>
              <p className="text-[9px] font-mono-code text-neutral-400 mb-2">
                120mm Tri-X 400 · D-76 Chemistry · Binaural Oral Archive
              </p>
              {/* Audio waveform bars */}
              <div className="h-6 flex items-center justify-center gap-1">
                {[8, 14, 20, 12, 18, 22, 16, 24, 10, 16, 20, 14, 8, 12].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-neutral-500 rounded-full"
                    style={{ height: `${h + Math.sin(pulse * 0.2 + i) * 4}px` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono-code text-neutral-400 border-t border-neutral-800 pt-2">
            <span>Reciprocal sidewalk consent</span>
            <span className="text-neutral-300">80+ Portraits Repatriated to Merchants</span>
          </div>
        </div>
      )}

      {/* 7. Noise Singapore Festival: White Geisha / Silver Aurelia */}
      {artwork.id === 'white-geisha-silver-aurelia' && (
        <div className="relative w-full h-full bg-[#08090e] p-4 flex flex-col justify-between overflow-hidden">
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono-code text-slate-300">
            <span className="bg-slate-900/90 border border-slate-700/80 px-2 py-0.5 rounded">
              NATIONAL ARTS COUNCIL (NAC) · NOISE SINGAPORE
            </span>
            <span className="text-slate-400">HIGH-KEY PORCELAIN & AURELIA</span>
          </div>

          <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-3">
            <div className="border border-slate-700 bg-slate-950/70 p-4 rounded-lg max-w-sm w-full text-center space-y-2">
              <div className="text-xs font-serif-display text-slate-100 italic">
                "White Geisha & Silver Aurelia (2011–2012)"
              </div>
              <p className="text-[10px] font-mono-code text-slate-400">
                Persona Boundary vs. Subjecthood under the Public Gaze
              </p>
              
              <div className="flex items-center justify-center gap-4 pt-1">
                <div className="px-3 py-1 bg-slate-900 border border-slate-700 rounded text-[9px] font-mono-code text-slate-200">
                  Contrast: 98.4% Key Ratio
                </div>
                <div className="px-3 py-1 bg-slate-900 border border-slate-700 rounded text-[9px] font-mono-code text-slate-200">
                  Specular Bounce: Metallic Silver
                </div>
              </div>
            </div>

            <p className="text-[10px] font-mono-code text-slate-400 text-center">
              Early Singaporean institutional inquiry into the politics of public spectatorship.
            </p>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono-code text-neutral-400 border-t border-neutral-800 pt-2">
            <span>Curated Group Exhibition (Singapore)</span>
            <span className="text-slate-300">120 × 90 cm Archival Pigment Prints</span>
          </div>
        </div>
      )}

      {/* Museum Accession Watermark */}
      <div className="absolute bottom-2 left-2 text-[9px] font-mono-code text-neutral-600 pointer-events-none">
        {artwork.accessionId}
      </div>
    </div>
  );
};
