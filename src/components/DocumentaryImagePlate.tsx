import React, { useState } from 'react';
import { ArtworkImage } from '../types/portfolio';

interface DocumentaryImagePlateProps {
  image: ArtworkImage;
  artworkId: string;
  index: number;
  totalImages: number;
  compact?: boolean;
  onOpenLightbox?: (index: number) => void;
  allowReplace?: boolean;
  preferPlateGraphic?: boolean;
}

export const DocumentaryImagePlate: React.FC<DocumentaryImagePlateProps> = ({
  image,
  index,
  compact = false,
  onOpenLightbox,
  preferPlateGraphic = false
}) => {
  const [, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative group bg-[#070709] border border-neutral-800 rounded-lg overflow-hidden transition-all ${
        compact ? 'hover:border-neutral-700' : 'border-neutral-800'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Archival Frame Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#09090c] border-b border-neutral-850 text-[10px] font-mono-code text-neutral-400 select-none">
        <div className="flex items-center gap-2">
          <span className="text-neutral-300 font-semibold">
            PLATE 0{index + 1}
          </span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-400 uppercase tracking-wider">
            {image.viewType}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          {preferPlateGraphic ? (
            <span className="text-cyan-400/90 text-[9px] uppercase tracking-wider flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Structural Plate
            </span>
          ) : (
            <span className="text-blue-400/90 text-[9px] uppercase tracking-wider flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Curatorial Archive
            </span>
          )}
        </div>
      </div>

      {/* Main Image or Documentary Placeholder Visual Canvas */}
      <div
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#050507] cursor-pointer overflow-hidden flex items-center justify-center select-none"
        onClick={() => onOpenLightbox && onOpenLightbox(index)}
      >
        {!preferPlateGraphic && image.url && !imgError ? (
          /* Real Image Display with Archival Mount (Prevents low-res stretching) */
          <div className="relative w-full h-full flex items-center justify-center bg-[#060608] p-1 sm:p-2 overflow-hidden">
            {/* Soft blurred background to frame non-16:9 images gracefully without harsh black bars */}
            <img
              src={image.url}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-15 scale-110 pointer-events-none"
            />
            {/* The crisp, un-stretched original photograph */}
            <img
              src={image.url}
              alt={image.title}
              onError={() => setImgError(true)}
              className="relative max-h-full max-w-full object-contain z-10 rounded shadow-md group-hover:scale-[1.01] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none z-20" />
          </div>
        ) : (
          /* Museum-Grade Documentary Technical Graphic Placeholder (Provides Portfolio Structure) */
          <PlaceholderGraphic plateType={image.placeholderType} />
        )}

        {/* Viewfinder Overlay Markings (Corner Crop & Center Crosshair) */}
        <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between opacity-40 group-hover:opacity-75 transition-opacity">
          <div className="flex justify-between items-start">
            <div className="w-3.5 h-3.5 border-t border-l border-neutral-400" />
            <div className="text-[9px] font-mono-code text-neutral-500 tracking-widest uppercase">
              16:9 35mm
            </div>
            <div className="w-3.5 h-3.5 border-t border-r border-neutral-400" />
          </div>

          {/* Subtle center crosshairs */}
          <div className="self-center flex items-center justify-center">
            <div className="w-4 h-[1px] bg-neutral-600/70" />
            <div className="w-[1px] h-4 bg-neutral-600/70 -ml-2" />
          </div>

          <div className="flex justify-between items-end">
            <div className="w-3.5 h-3.5 border-b border-l border-neutral-400" />
            <div className="text-[9px] font-mono-code text-neutral-500">
              FRAME REF: 0{index + 1}
            </div>
            <div className="w-3.5 h-3.5 border-b border-r border-neutral-400" />
          </div>
        </div>

        {/* Click to Enlarge / Lightbox Trigger hint */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900/90 text-neutral-200 text-[10px] font-mono-code px-2.5 py-1 rounded border border-neutral-700/80 backdrop-blur-sm pointer-events-none">
          Click to Expand Plate ↗
        </div>
      </div>

      {/* Plate Caption & Photographic EXIF Metadata Bar */}
      {!compact && (
        <div className="p-3.5 sm:p-4 bg-[#09090b] border-t border-neutral-850 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h4 className="text-xs sm:text-sm font-serif-display font-medium text-neutral-100">
              {image.title}
            </h4>
            {image.credit && (
              <span className="text-[10px] font-mono-code text-neutral-500">
                {image.credit}
              </span>
            )}
          </div>

          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            {image.caption}
          </p>

          {image.captureMetadata && (
            <div className="pt-2 border-t border-neutral-850/80 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-mono-code text-neutral-400">
              {image.captureMetadata.camera && (
                <span>Camera: <strong className="text-neutral-300 font-normal">{image.captureMetadata.camera}</strong></span>
              )}
              {image.captureMetadata.exposure && (
                <span>Exposure: <strong className="text-neutral-300 font-normal">{image.captureMetadata.exposure}</strong></span>
              )}
              {image.captureMetadata.lightingCondition && (
                <span>Light: <strong className="text-neutral-300 font-normal">{image.captureMetadata.lightingCondition}</strong></span>
              )}
              {image.captureMetadata.scale && (
                <span>Scale: <strong className="text-neutral-300 font-normal">{image.captureMetadata.scale}</strong></span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* SVG Documentary Artwork Visuals representing each specific installation setting */
export const PlaceholderGraphic: React.FC<{ plateType: ArtworkImage['placeholderType'] }> = ({ plateType }) => {
  switch (plateType) {
    /* 1. Riemann Manifold & Quantum Chaos */
    case 'riemann-overview':
    case 'klingon-overview':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#04060b" />
          {/* Subtle floor grid perspective */}
          <line x1="0" y1="280" x2="640" y2="280" stroke="#172033" strokeWidth="0.8" />
          <line x1="0" y1="320" x2="640" y2="320" stroke="#172033" strokeWidth="0.8" />
          <line x1="0" y1="360" x2="640" y2="360" stroke="#172033" strokeWidth="0.8" />
          <line x1="320" y1="180" x2="60" y2="360" stroke="#172033" strokeWidth="0.8" strokeDasharray="3,3" />
          <line x1="320" y1="180" x2="580" y2="360" stroke="#172033" strokeWidth="0.8" strokeDasharray="3,3" />

          {/* Overhead laser projector cone */}
          <polygon points="320,0 200,220 440,220" fill="url(#laserConeGrad)" opacity="0.45" />

          {/* Obsidian Plinth */}
          <polygon points="210,220 430,220 470,250 170,250" fill="#0a0f1a" stroke="#2563eb" strokeWidth="1" />
          <polygon points="170,250 470,250 470,300 170,300" fill="#060911" stroke="#1d4ed8" strokeWidth="0.8" />

          {/* Undulating Riemannian manifold projection on top surface */}
          <ellipse cx="320" cy="235" rx="100" ry="20" fill="#1e3a8a" opacity="0.6" filter="blur(8px)" />
          <path
            d="M 220 235 Q 270 215 320 235 T 420 235"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1.5"
          />
          <path
            d="M 230 240 Q 280 225 330 240 T 410 240"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="1"
            opacity="0.8"
          />

          {/* Suspended optic fiber filaments */}
          <line x1="280" y1="0" x2="280" y2="210" stroke="#38bdf8" strokeWidth="0.6" opacity="0.7" strokeDasharray="2,4" />
          <line x1="320" y1="0" x2="320" y2="215" stroke="#38bdf8" strokeWidth="0.8" opacity="0.9" />
          <line x1="360" y1="0" x2="360" y2="210" stroke="#38bdf8" strokeWidth="0.6" opacity="0.7" strokeDasharray="2,4" />

          <defs>
            <linearGradient id="laserConeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'riemann-apparatus':
    case 'klingon-apparatus':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#070a12" />
          {/* Basalt stone texture grid */}
          <rect x="80" y="50" width="480" height="260" fill="#0f172a" stroke="#334155" strokeWidth="1" rx="4" />
          
          {/* Surface transducer circular housing */}
          <circle cx="240" cy="180" r="65" fill="#020617" stroke="#60a5fa" strokeWidth="2" />
          <circle cx="240" cy="180" r="45" fill="#0f172a" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4,2" />
          <circle cx="240" cy="180" r="15" fill="#3b82f6" />
          <text x="240" y="270" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="monospace">
            PIEZOELECTRIC TRANSDUCER (45Hz)
          </text>

          {/* Compute node rack enclosure detail */}
          <rect x="370" y="110" width="160" height="140" fill="#020617" stroke="#475569" strokeWidth="1" />
          <line x1="390" y1="135" x2="510" y2="135" stroke="#38bdf8" strokeWidth="2" />
          <line x1="390" y1="160" x2="510" y2="160" stroke="#38bdf8" strokeWidth="2" />
          <line x1="390" y1="185" x2="510" y2="185" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="495" cy="225" r="4" fill="#22c55e" />
          <circle cx="475" cy="225" r="4" fill="#3b82f6" />
          <text x="450" y="270" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="monospace">
            RTX 6000 INFERENCE NODE (evecount/riemann_hypothesis)
          </text>
        </svg>
      );

    case 'riemann-action':
    case 'klingon-action':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#030408" />
          {/* Dark gallery background with ambient blue glow */}
          <circle cx="320" cy="190" r="160" fill="#1e3a8a" opacity="0.2" filter="blur(30px)" />
          
          {/* Central obsidian plinth glow */}
          <rect x="220" y="180" width="200" height="90" fill="#090d16" stroke="#3b82f6" strokeWidth="1" />
          <ellipse cx="320" cy="180" rx="90" ry="18" fill="#60a5fa" opacity="0.6" filter="blur(4px)" />

          {/* Spectator silhouette on left */}
          <ellipse cx="140" cy="140" rx="14" ry="18" fill="#0f172a" />
          <path d="M 120 180 C 120 160, 160 160, 160 180 L 165 310 L 115 310 Z" fill="#0f172a" />
          
          {/* Gaze vector to plinth */}
          <line x1="150" y1="140" x2="280" y2="180" stroke="#93c5fd" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.4" />

          {/* Ambient spectator on right */}
          <ellipse cx="500" cy="150" rx="13" ry="16" fill="#0b111e" />
          <path d="M 482 185 C 482 168, 518 168, 518 185 L 522 310 L 478 310 Z" fill="#0b111e" />
        </svg>
      );

    /* 2. Deconstructing Capital */
    case 'deconstruct-overview':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#0a0a0c" />
          {/* Concrete industrial warehouse structural columns */}
          <rect x="60" y="0" width="40" height="360" fill="#17171a" stroke="#26262b" strokeWidth="1" />
          <rect x="540" y="0" width="40" height="360" fill="#17171a" stroke="#26262b" strokeWidth="1" />
          <line x1="0" y1="80" x2="640" y2="80" stroke="#2a2a30" strokeWidth="2" />

          {/* Directional 2kW Fresnel high-lux beam flood */}
          <polygon points="500,85 100,360 400,360" fill="url(#tungstenBeam)" opacity="0.6" />

          {/* Optical scrim panel */}
          <line x1="280" y1="80" x2="280" y2="340" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="2,2" />
          <rect x="275" y="100" width="10" height="220" fill="#cbd5e1" opacity="0.3" />

          {/* CCTV Dome Camera on ceiling */}
          <circle cx="160" cy="85" r="14" fill="#262626" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="160" y1="95" x2="260" y2="240" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.5" />

          <defs>
            <linearGradient id="tungstenBeam" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'deconstruct-apparatus':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#0d0d10" />
          {/* Retroreflective scrim weave pattern */}
          <pattern id="scrimPattern" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="2" fill="#94a3b8" opacity="0.7" />
          </pattern>
          <rect x="100" y="40" width="440" height="280" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
          <rect x="100" y="40" width="440" height="280" fill="url(#scrimPattern)" />

          {/* Blinding beam center hot-spot */}
          <circle cx="320" cy="180" r="70" fill="#ffffff" opacity="0.8" filter="blur(16px)" />
          <circle cx="320" cy="180" r="30" fill="#fef08a" />
          <text x="320" y="290" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontFamily="monospace">
            BREWSTER ANGLE SENSOR SATURATION (45,000 LUX)
          </text>
        </svg>
      );

    case 'deconstruct-action':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#09090b" />
          {/* High chiaroscuro performer silhouette */}
          <polygon points="480,0 200,360 380,360" fill="#fef9c3" opacity="0.4" />
          
          {/* Performer silhouette standing half in light, half in camera shadow */}
          <ellipse cx="270" cy="130" rx="16" ry="20" fill="#18181b" stroke="#fef08a" strokeWidth="0.8" />
          <path d="M 245 170 C 245 150, 295 150, 295 170 L 305 320 L 235 320 Z" fill="#18181b" stroke="#fef08a" strokeWidth="0.5" />

          {/* Diagnostic monitor showing OpenCV whiteout */}
          <rect x="440" y="160" width="150" height="110" fill="#000000" stroke="#71717a" strokeWidth="1.5" />
          <rect x="446" y="166" width="138" height="98" fill="#ffffff" />
          <text x="515" y="215" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold" fontFamily="monospace">
            OVEREXPOSED
          </text>
          <text x="515" y="235" textAnchor="middle" fill="#7f1d1d" fontSize="9" fontFamily="monospace">
            CLIP: 99.8%
          </text>
        </svg>
      );

    /* 3. Ultimate Selfie (MTCC) */
    case 'selfie-overview':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#0b0a08" />
          {/* Convention hall roof trusses */}
          <line x1="0" y1="40" x2="640" y2="40" stroke="#292524" strokeWidth="2" />
          <line x1="100" y1="0" x2="160" y2="40" stroke="#292524" strokeWidth="1" />
          <line x1="300" y1="0" x2="360" y2="40" stroke="#292524" strokeWidth="1" />
          <line x1="500" y1="0" x2="560" y2="40" stroke="#292524" strokeWidth="1" />

          {/* Timber Pavilion Structure */}
          <polygon points="180,100 460,100 500,280 140,280" fill="#1c1917" stroke="#78350f" strokeWidth="1.5" />
          
          {/* Giant Inverted Face Projection on facade */}
          <rect x="220" y="120" width="200" height="140" fill="#292524" stroke="#f59e0b" strokeWidth="1" />
          <circle cx="320" cy="180" r="35" fill="#44403c" />
          <ellipse cx="308" cy="175" rx="4" ry="3" fill="#fef08a" />
          <ellipse cx="332" cy="175" rx="4" ry="3" fill="#fef08a" />
          <path d="M 310 198 Q 320 205 330 198" stroke="#fef08a" strokeWidth="1.5" fill="none" />
          <text x="320" y="140" textAnchor="middle" fill="#d97706" fontSize="9" fontFamily="monospace">
            INVERTED PARTICIPANT PROJECTION
          </text>
        </svg>
      );

    case 'selfie-apparatus':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#0c0b08" />
          {/* Arduino PCB & Optocoupler Array */}
          <rect x="100" y="60" width="220" height="240" fill="#1e293b" stroke="#059669" strokeWidth="2" rx="4" />
          <text x="210" y="90" textAnchor="middle" fill="#34d399" fontSize="11" fontFamily="monospace">
            ARDUINO OPTOCOUPLER BANK
          </text>
          
          {/* Sharp PC817 Opto IC chips */}
          <rect x="130" y="120" width="60" height="35" fill="#020617" stroke="#94a3b8" strokeWidth="1" />
          <rect x="130" y="170" width="60" height="35" fill="#020617" stroke="#94a3b8" strokeWidth="1" />
          <rect x="130" y="220" width="60" height="35" fill="#020617" stroke="#94a3b8" strokeWidth="1" />

          {/* DSLR Shutter Body */}
          <rect x="370" y="90" width="180" height="150" fill="#1c1917" stroke="#78716c" strokeWidth="1.5" rx="6" />
          <circle cx="460" cy="165" r="45" fill="#0c0a09" stroke="#ea580c" strokeWidth="2" />
          <circle cx="460" cy="165" r="22" fill="#292524" />
          <text x="460" y="270" textAnchor="middle" fill="#a8a29e" fontSize="10" fontFamily="monospace">
            CANON 5D MK III SHUTTER RELAY
          </text>
        </svg>
      );

    case 'selfie-action':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#080706" />
          {/* Central capacitive touch pedestal */}
          <rect x="280" y="210" width="80" height="120" fill="#1c1917" stroke="#d97706" strokeWidth="1.5" />
          <ellipse cx="320" cy="210" rx="40" ry="12" fill="#b45309" stroke="#fbbf24" strokeWidth="1" />

          {/* Participant arm reaching down */}
          <path d="M 230 110 Q 280 160 315 205" stroke="#fed7aa" strokeWidth="12" strokeLinecap="round" fill="none" />
          
          {/* Flash burst explosion at trigger contact */}
          <circle cx="320" cy="205" r="25" fill="#fef08a" opacity="0.9" />
          <line x1="320" y1="165" x2="320" y2="135" stroke="#f59e0b" strokeWidth="2" />
          <line x1="355" y1="185" x2="385" y2="165" stroke="#f59e0b" strokeWidth="2" />
          <line x1="285" y1="185" x2="255" y2="165" stroke="#f59e0b" strokeWidth="2" />
          <text x="320" y="350" textAnchor="middle" fill="#fde047" fontSize="11" fontFamily="monospace">
            BODILY IMPEDANCE CIRCUIT CLOSED (18ms)
          </text>
        </svg>
      );

    /* 4. Interactive Media Pavilions */
    case 'pavilions-overview':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#0c0d12" />
          {/* Spatial festival hall grid */}
          <line x1="0" y1="300" x2="640" y2="300" stroke="#1f2438" strokeWidth="1" />
          <line x1="0" y1="340" x2="640" y2="340" stroke="#1f2438" strokeWidth="1" />
          
          {/* Mobile architectural pavilion framework */}
          <rect x="190" y="70" width="260" height="230" fill="#141724" stroke="#6366f1" strokeWidth="1.5" rx="4" />
          <line x1="190" y1="120" x2="450" y2="120" stroke="#4338ca" strokeWidth="1" />
          
          {/* Tactile portal opening */}
          <rect x="250" y="130" width="140" height="150" fill="#080a10" stroke="#818cf8" strokeWidth="1.2" />
          
          {/* Audience actuated interactive screen & optical port */}
          <circle cx="320" cy="180" r="28" fill="#1e1b4b" stroke="#a5b4fc" strokeWidth="1.5" />
          <circle cx="320" cy="180" r="12" fill="#c7d2fe" />
          
          {/* Subtle distribution beacons */}
          <line x1="190" y1="70" x2="150" y2="30" stroke="#6366f1" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="150" cy="30" r="4" fill="#a5b4fc" />
          <line x1="450" y1="70" x2="490" y2="30" stroke="#6366f1" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="490" cy="30" r="4" fill="#a5b4fc" />

          <text x="320" y="330" textAnchor="middle" fill="#818cf8" fontSize="10" fontFamily="monospace">
            TORONTO DESIGN OFFSITE · MOBILE INTERACTIVE PAVILION RIG
          </text>
        </svg>
      );

    case 'pavilions-apparatus':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#0a0b10" />
          {/* Embedded tactile trigger & controller bay */}
          <rect x="90" y="50" width="460" height="260" fill="#131522" stroke="#4f46e5" strokeWidth="1.5" rx="6" />
          
          {/* Industrial tactile trigger buttons */}
          <circle cx="180" cy="170" r="45" fill="#1e1b4b" stroke="#a5b4fc" strokeWidth="2" />
          <circle cx="180" cy="170" r="28" fill="#4f46e5" />
          <text x="180" y="240" textAnchor="middle" fill="#c7d2fe" fontSize="10" fontFamily="monospace">
            TACTILE SHUTTER ACTUATOR
          </text>

          {/* Decentralized image distribution buffer */}
          <rect x="290" y="110" width="220" height="130" fill="#08090f" stroke="#6366f1" strokeWidth="1" rx="4" />
          <text x="400" y="140" textAnchor="middle" fill="#a5b4fc" fontSize="10" fontFamily="monospace">
            DECENTRALIZED BUFFER
          </text>
          <line x1="310" y1="165" x2="490" y2="165" stroke="#312e81" strokeWidth="4" />
          <line x1="310" y1="165" x2="430" y2="165" stroke="#818cf8" strokeWidth="4" />
          <text x="400" y="195" textAnchor="middle" fill="#e0e7ff" fontSize="11" fontFamily="monospace">
            LOCAL MESH PEER-TO-PEER
          </text>
        </svg>
      );

    case 'pavilions-action':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#07080d" />
          {/* Glow cone from booth facade */}
          <polygon points="320,80 120,360 520,360" fill="url(#pavilionGlow)" opacity="0.5" />
          
          {/* Visitor engaging trigger */}
          <ellipse cx="280" cy="180" rx="14" ry="18" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
          <path d="M 260 210 Q 280 250 280 340" stroke="#1e1b4b" strokeWidth="16" fill="none" />
          <line x1="280" y1="220" x2="330" y2="240" stroke="#818cf8" strokeWidth="6" strokeLinecap="round" />
          
          {/* Flash moment at touch */}
          <circle cx="330" cy="240" r="16" fill="#e0e7ff" opacity="0.9" />

          <text x="320" y="340" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontFamily="monospace">
            LIVE PARTICIPATORY SHUTTER & AD HOC DISTRIBUTION
          </text>

          <defs>
            <linearGradient id="pavilionGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4338ca" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      );

    /* 5. Broadcast People */
    case 'broadcast-overview':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#040905" />
          {/* 4x4 CRT Television Grid */}
          <g transform="translate(180, 40)">
            {[0, 1, 2, 3].map(row =>
              [0, 1, 2, 3].map(col => (
                <g key={`${row}-${col}`}>
                  <rect
                    x={col * 70}
                    y={row * 65}
                    width="62"
                    height="56"
                    fill="#052e16"
                    stroke="#15803d"
                    strokeWidth="1.5"
                    rx="4"
                  />
                  {/* CRT Screen curve and phosphor scanline */}
                  <rect
                    x={col * 70 + 4}
                    y={row * 65 + 4}
                    width="54"
                    height="48"
                    fill={((row + col) % 3 === 0) ? '#16a34a' : '#14532d'}
                    opacity="0.8"
                    rx="6"
                  />
                  <line
                    x1={col * 70 + 8}
                    y1={row * 65 + 28}
                    x2={col * 70 + 54}
                    y2={row * 65 + 28}
                    stroke="#86efac"
                    strokeWidth="0.8"
                    opacity="0.6"
                  />
                </g>
              ))
            )}
          </g>
          <text x="320" y="335" textAnchor="middle" fill="#4ade80" fontSize="10" fontFamily="monospace">
            16-CHANNEL SONY TRINITRON CRT MONOLITH
          </text>
        </svg>
      );

    case 'broadcast-apparatus':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#050a06" />
          {/* Aluminum Industrial Stomp Switch */}
          <rect x="220" y="130" width="200" height="150" fill="#1e293b" stroke="#64748b" strokeWidth="2" rx="6" />
          {/* Circular heavy foot button */}
          <circle cx="320" cy="190" r="40" fill="#0f172a" stroke="#22c55e" strokeWidth="3" />
          <circle cx="320" cy="190" r="25" fill="#15803d" />
          {/* Braided steel conduit */}
          <path d="M 320 280 L 320 360" stroke="#94a3b8" strokeWidth="8" strokeDasharray="4,2" />
          <text x="320" y="100" textAnchor="middle" fill="#86efac" fontSize="11" fontFamily="monospace">
            HEAVY-DUTY FOOT PEDAL (DRY CONTACT)
          </text>
        </svg>
      );

    case 'broadcast-action':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#030804" />
          {/* CRT monitors in background glowing */}
          <rect x="200" y="50" width="240" height="140" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
          {/* Analog howling visual feedback loop */}
          <ellipse cx="320" cy="120" rx="90" ry="50" fill="none" stroke="#6ee7b7" strokeWidth="1.5" />
          <ellipse cx="320" cy="120" rx="60" ry="30" fill="none" stroke="#a7f3d0" strokeWidth="1.5" />
          <ellipse cx="320" cy="120" rx="30" ry="15" fill="#ecfdf5" opacity="0.8" />

          {/* Visitor foot descending onto stomp switch */}
          <rect x="270" y="270" width="100" height="50" fill="#1f2937" stroke="#10b981" strokeWidth="2" />
          <circle cx="320" cy="285" r="14" fill="#059669" />
          <text x="320" y="345" textAnchor="middle" fill="#34d399" fontSize="11" fontFamily="monospace">
            CROSSTALK SIGNAL JAM INDUCED (1200ms DELAY)
          </text>
        </svg>
      );

    /* 5. Two-Man Rule */
    case 'twoman-overview':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#03080d" />
          {/* Geodesic Dome Tessellation */}
          <circle cx="320" cy="220" r="130" fill="#0284c7" opacity="0.2" filter="blur(20px)" />
          
          <g stroke="#38bdf8" strokeWidth="1.2" fill="#0c4a6e" fillOpacity="0.15">
            {/* Geodesic faceted nodes */}
            <polygon points="320,100 240,150 320,170" />
            <polygon points="320,100 400,150 320,170" />
            <polygon points="240,150 180,220 250,230 320,170" />
            <polygon points="400,150 460,220 390,230 320,170" />
            <polygon points="180,220 220,300 250,230" />
            <polygon points="460,220 420,300 390,230" />
            <polygon points="250,230 320,310 390,230" />
          </g>

          <text x="320" y="340" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontFamily="monospace">
            MONOCOQUE TENSILE TAPE DOME (5.2M DIAMETER)
          </text>
        </svg>
      );

    case 'twoman-apparatus':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#040b12" />
          {/* Terminal Podiums */}
          <rect x="140" y="120" width="80" height="180" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
          <rect x="160" y="80" width="40" height="40" fill="#f59e0b" stroke="#d97706" strokeWidth="2" rx="4" />
          <text x="180" y="70" textAnchor="middle" fill="#fbbf24" fontSize="10" fontFamily="monospace">
            TERMINAL A
          </text>

          <rect x="420" y="120" width="80" height="180" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
          <rect x="440" y="80" width="40" height="40" fill="#f59e0b" stroke="#d97706" strokeWidth="2" rx="4" />
          <text x="460" y="70" textAnchor="middle" fill="#fbbf24" fontSize="10" fontFamily="monospace">
            TERMINAL B
          </text>

          {/* Central 74HC08 AND Gate */}
          <rect x="280" y="170" width="80" height="50" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
          <text x="320" y="200" textAnchor="middle" fill="#38bdf8" fontSize="12" fontFamily="monospace">
            A ∧ B
          </text>
          <line x1="200" y1="195" x2="280" y2="195" stroke="#38bdf8" strokeWidth="1" />
          <line x1="420" y1="195" x2="360" y2="195" stroke="#38bdf8" strokeWidth="1" />
          <text x="320" y="250" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
            4.0M PHYSICAL SEPARATION
          </text>
        </svg>
      );

    case 'twoman-action':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#020810" />
          {/* Strobe flash burst covering ceiling */}
          <polygon points="320,0 60,360 580,360" fill="url(#strobeCone)" opacity="0.75" />

          {/* Two participants touching terminals simultaneously */}
          <ellipse cx="180" cy="180" rx="14" ry="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="0.8" />
          <path d="M 160 210 Q 180 250 180 320" stroke="#0f172a" strokeWidth="16" fill="none" />
          <line x1="180" y1="210" x2="140" y2="240" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />

          <ellipse cx="460" cy="180" rx="14" ry="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="0.8" />
          <path d="M 480 210 Q 460 250 460 320" stroke="#0f172a" strokeWidth="16" fill="none" />
          <line x1="460" y1="210" x2="500" y2="240" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />

          <text x="320" y="340" textAnchor="middle" fill="#bae6fd" fontSize="11" fontFamily="monospace">
            SYNCHRONOUS COOPERATIVE EXPOSURE (640Ws FLASH)
          </text>

          <defs>
            <linearGradient id="strobeCone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
            </linearGradient>
          </defs>
        </svg>
      );

    /* 6. A Perfect World */
    case 'perfectworld-overview':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#080808" />
          {/* Kensington Market Brick Wall & Sidewalk Backdrop */}
          <rect x="40" y="20" width="560" height="260" fill="#1c1917" stroke="#44403c" strokeWidth="1" />
          {/* Hand-painted canvas muslin backdrop */}
          <rect x="180" y="40" width="280" height="240" fill="#292524" stroke="#78716c" strokeWidth="1.5" />
          <line x1="180" y1="40" x2="460" y2="40" stroke="#a8a29e" strokeWidth="3" />

          {/* Large format camera on wooden tripod */}
          <line x1="320" y1="240" x2="260" y2="340" stroke="#78716c" strokeWidth="3" />
          <line x1="320" y1="240" x2="380" y2="340" stroke="#78716c" strokeWidth="3" />
          <line x1="320" y1="240" x2="320" y2="340" stroke="#78716c" strokeWidth="2.5" />
          <rect x="295" y="210" width="50" height="40" fill="#0c0a09" stroke="#d6d3d1" strokeWidth="1" />

          <text x="320" y="350" textAnchor="middle" fill="#a8a29e" fontSize="10" fontFamily="monospace">
            KENSINGTON MARKET SIDEWALK INTERVENTION (120M CORRIDOR)
          </text>
        </svg>
      );

    case 'perfectworld-apparatus':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#0a0a0a" />
          {/* Mamiya RZ67 Camera Apparatus */}
          <rect x="140" y="100" width="160" height="150" fill="#18181b" stroke="#71717a" strokeWidth="2" rx="4" />
          {/* Pleated bellows */}
          <polygon points="300,110 380,125 380,225 300,240" fill="#27272a" stroke="#52525b" strokeWidth="1" />
          {/* 110mm Sekor Lens Barrel */}
          <rect x="380" y="135" width="40" height="80" fill="#09090b" stroke="#a1a1aa" strokeWidth="2" />
          <circle cx="420" cy="175" r="28" fill="#18181b" stroke="#e4e4e7" strokeWidth="1.5" />

          <text x="320" y="285" textAnchor="middle" fill="#d4d4d8" fontSize="11" fontFamily="monospace">
            MAMIYA RZ67 PRO II (120 ROLL FILM · D-76 CHEMISTRY)
          </text>
        </svg>
      );

    case 'perfectworld-action':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#050505" />
          {/* Silver gelatin black-and-white tonal graduation */}
          <rect x="160" y="30" width="320" height="280" fill="#171717" stroke="#737373" strokeWidth="1.5" />
          
          {/* Portrait figure in front of backdrop */}
          <ellipse cx="320" cy="130" rx="30" ry="38" fill="#262626" stroke="#a3a3a3" strokeWidth="1" />
          <path d="M 260 210 C 260 175, 380 175, 380 210 L 390 310 L 250 310 Z" fill="#262626" />

          {/* Field audio microphone held by artist */}
          <line x1="230" y1="210" x2="280" y2="180" stroke="#d4d4d8" strokeWidth="2" />
          <circle cx="280" cy="180" r="5" fill="#ef4444" />

          <text x="320" y="335" textAnchor="middle" fill="#a3a3a3" fontSize="10" fontFamily="monospace">
            PARTICIPATORY ORAL HISTORY & RELATIONAL ENCOUNTER
          </text>
        </svg>
      );

    /* 8. Noise Singapore Festival Exhibition (2011–2012) */
    case 'noise-sg-overview':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#090a0f" />
          {/* Gallery floor and wall horizon */}
          <line x1="0" y1="290" x2="640" y2="290" stroke="#1e293b" strokeWidth="1" />
          <polygon points="0,290 640,290 640,360 0,360" fill="#06070a" />

          {/* Exhibition track spotlight cones */}
          <polygon points="200,0 120,290 280,290" fill="#e2e8f0" opacity="0.04" />
          <polygon points="440,0 360,290 520,290" fill="#e2e8f0" opacity="0.04" />

          {/* Photographic Print 1: White Geisha */}
          <rect x="140" y="60" width="140" height="190" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="155" y="75" width="110" height="150" fill="#f8fafc" opacity="0.9" />
          <ellipse cx="210" cy="135" rx="22" ry="28" fill="#e2e8f0" stroke="#475569" strokeWidth="1" />
          <circle cx="210" cy="120" r="14" fill="#0f172a" />
          <text x="210" y="240" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="monospace">
            WHITE GEISHA
          </text>

          {/* Photographic Print 2: Silver Aurelia */}
          <rect x="360" y="60" width="140" height="190" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="375" y="75" width="110" height="150" fill="#1e293b" />
          <circle cx="430" cy="140" r="32" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4,2" />
          <ellipse cx="430" cy="140" rx="18" ry="24" fill="#e2e8f0" />
          <text x="430" y="240" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">
            SILVER AURELIA
          </text>

          {/* Institutional Exhibition Plaque */}
          <rect x="270" y="260" width="100" height="20" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="2" />
          <text x="320" y="273" textAnchor="middle" fill="#e2e8f0" fontSize="7" fontFamily="monospace">
            NAC NOISE SINGAPORE
          </text>

          <text x="320" y="325" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
            NATIONAL ARTS COUNCIL (NAC) · NOISE SINGAPORE FESTIVAL EXHIBITION (2011–2012)
          </text>
        </svg>
      );

    case 'noise-sg-apparatus':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#07080c" />
          {/* Lighting schematic and high-key optical apparatus */}
          <circle cx="320" cy="180" r="80" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />

          {/* Subject placement */}
          <ellipse cx="320" cy="180" rx="35" ry="45" fill="#1e293b" stroke="#e2e8f0" strokeWidth="1.5" />
          {/* Stylized high-contrast mask lines */}
          <path d="M 300 170 Q 320 150 340 170" fill="none" stroke="#f8fafc" strokeWidth="2" />
          <circle cx="310" cy="175" r="3" fill="#f8fafc" />
          <circle cx="330" cy="175" r="3" fill="#f8fafc" />
          <path d="M 305 195 Q 320 205 335 195" fill="none" stroke="#f8fafc" strokeWidth="2" />

          {/* Parabolic Key Strobe */}
          <path d="M 170 120 A 40 40 0 0 1 170 200 Z" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="170" y1="160" x2="270" y2="175" stroke="#f8fafc" strokeWidth="1" strokeDasharray="4,2" />
          <text x="145" y="165" textAnchor="end" fill="#cbd5e1" fontSize="9" fontFamily="monospace">
            HIGH-KEY STROBE
          </text>

          {/* Specular Silver Reflector Foil */}
          <line x1="470" y1="120" x2="470" y2="240" stroke="#cbd5e1" strokeWidth="3" />
          <line x1="470" y1="180" x2="365" y2="180" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2" />
          <text x="485" y="185" fill="#cbd5e1" fontSize="9" fontFamily="monospace">
            SILVER REFLECTOR
          </text>

          <text x="320" y="320" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
            WHITE GEISHA · HIGH-CONTRAST MASKING & PORCELAIN ILLUMINATION RIG
          </text>
        </svg>
      );

    case 'noise-sg-action':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#08090d" />
          
          {/* Radial ornamentation aurelia vectors */}
          <circle cx="320" cy="170" r="95" fill="none" stroke="#475569" strokeWidth="1" />
          <circle cx="320" cy="170" r="120" fill="none" stroke="#334155" strokeWidth="0.75" strokeDasharray="4,4" />

          {/* Aurelia rays extending outward */}
          {Array.from({ length: 16 }).map((_, idx) => {
            const angle = (idx * Math.PI) / 8;
            const x1 = 320 + Math.cos(angle) * 70;
            const y1 = 170 + Math.sin(angle) * 70;
            const x2 = 320 + Math.cos(angle) * 115;
            const y2 = 170 + Math.sin(angle) * 115;
            return (
              <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#94a3b8" strokeWidth="1" />
            );
          })}

          {/* Stylized ornamental figure */}
          <ellipse cx="320" cy="170" rx="36" ry="48" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="320" cy="140" r="8" fill="#f8fafc" />

          {/* Public gaze vectors */}
          <line x1="80" y1="90" x2="270" y2="160" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="560" y1="90" x2="370" y2="160" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
          <text x="80" y="80" fill="#94a3b8" fontSize="8" fontFamily="monospace">
            PUBLIC GAZE
          </text>
          <text x="560" y="80" textAnchor="end" fill="#94a3b8" fontSize="8" fontFamily="monospace">
            COMMERCIAL SPECTACLE
          </text>

          <text x="320" y="325" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontFamily="monospace">
            SILVER AURELIA · THE PERFORMATIVE BOUNDARY BETWEEN PERSONA & SUBJECTHOOD
          </text>
        </svg>
      );

    /* 9. Collective Infrastructure & Mutual Aid (2011–2024) */
    case 'collective-overview':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#0c0a09" />
          {/* Architectural industrial daylight studio space (90 Ontario / Motion and Still) */}
          <polygon points="40,30 600,30 540,310 100,310" fill="#1c1917" stroke="#44403c" strokeWidth="1" />
          {/* Large multi-pane south industrial daylight windows */}
          <g transform="translate(140, 50)">
            {[0, 1, 2, 3].map(col => (
              <g key={col}>
                <rect x={col * 90} y="0" width="80" height="120" fill="#fef3c7" opacity="0.15" stroke="#78716c" strokeWidth="1.5" />
                <line x1={col * 90 + 40} y1="0" x2={col * 90 + 40} y2="120" stroke="#78716c" strokeWidth="1" />
                <line x1={col * 90} y1="60" x2={col * 90 + 80} y2="60" stroke="#78716c" strokeWidth="1" />
              </g>
            ))}
          </g>
          {/* Sunlight beam washing across polished concrete studio floor */}
          <polygon points="140,170 500,170 580,310 60,310" fill="#fffbeb" opacity="0.08" />
          {/* Overhead motorized studio lighting grid */}
          <line x1="80" y1="40" x2="560" y2="40" stroke="#d97706" strokeWidth="2" strokeDasharray="6,4" />
          <line x1="100" y1="70" x2="540" y2="70" stroke="#d97706" strokeWidth="1.5" strokeDasharray="6,4" />
          {/* Shared community worktable and salon staging */}
          <rect x="220" y="240" width="200" height="45" fill="#292524" stroke="#a8a29e" strokeWidth="1" />
          <text x="320" y="265" textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="monospace">
            COMMUNITY SALON & PRO BONO SUITE
          </text>
          <text x="320" y="335" textAnchor="middle" fill="#d6d3d1" fontSize="10" fontFamily="monospace">
            DAYLIGHT STUDIO SANCTUARY & COLLECTIVE MUTUAL AID (2011–2024)
          </text>
        </svg>
      );

    case 'collective-apparatus':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#0c0a09" />
          {/* Heavy electrical distribution panel and studio grid rigging */}
          <rect x="100" y="50" width="180" height="230" fill="#1c1917" stroke="#78716c" strokeWidth="1.5" rx="4" />
          <text x="190" y="80" textAnchor="middle" fill="#fbbf24" fontSize="10" fontFamily="monospace">
            100A 3-PHASE CAM-LOK
          </text>
          <rect x="130" y="100" width="120" height="15" fill="#ef4444" opacity="0.8" rx="2" />
          <rect x="130" y="125" width="120" height="15" fill="#3b82f6" opacity="0.8" rx="2" />
          <rect x="130" y="150" width="120" height="15" fill="#22c55e" opacity="0.8" rx="2" />
          <rect x="130" y="175" width="120" height="15" fill="#eab308" opacity="0.8" rx="2" />
          {/* Pro Bono Video Editing & Archival Node */}
          <rect x="340" y="80" width="200" height="130" fill="#171717" stroke="#60a5fa" strokeWidth="1.5" rx="4" />
          <text x="440" y="110" textAnchor="middle" fill="#93c5fd" fontSize="9" fontFamily="monospace">
            PRO BONO MEDIA ARCHIVE
          </text>
          <line x1="360" y1="140" x2="520" y2="140" stroke="#3b82f6" strokeWidth="3" />
          <text x="440" y="170" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontFamily="monospace">
            FLICK THE SWITCH & AKIN CONTINUUM
          </text>
          <text x="320" y="325" textAnchor="middle" fill="#d6d3d1" fontSize="10" fontFamily="monospace">
            SPATIAL STEWARDSHIP: 3-PHASE MAINS & OPEN MEDIA SUITE
          </text>
        </svg>
      );

    case 'collective-action':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#0a0a0a" />
          {/* Community Salon Encounter: Artists gathered in solidarity circle */}
          <circle cx="320" cy="180" r="130" fill="none" stroke="#44403c" strokeWidth="1" strokeDasharray="4,4" />
          {/* Center collaborative table with archival rolls and blueprints */}
          <rect x="250" y="145" width="140" height="70" fill="#1c1917" stroke="#78716c" strokeWidth="1.5" rx="4" />
          <line x1="270" y1="165" x2="370" y2="165" stroke="#fbbf24" strokeWidth="2" />
          <line x1="270" y1="185" x2="350" y2="185" stroke="#a8a29e" strokeWidth="1.5" />
          {/* Artist figures around circle */}
          {[0, 1, 2, 3, 4, 5].map(idx => {
            const angle = (idx * Math.PI) / 3;
            const cx = 320 + Math.cos(angle) * 125;
            const cy = 180 + Math.sin(angle) * 95;
            return (
              <g key={idx}>
                <ellipse cx={cx} cy={cy} rx="14" ry="18" fill="#292524" stroke="#d97706" strokeWidth="1.5" />
                <line x1={cx} y1={cy} x2={320} y2={180} stroke="#78716c" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.4" />
              </g>
            );
          })}
          <text x="320" y="330" textAnchor="middle" fill="#fbbf24" fontSize="10" fontFamily="monospace">
            GRASSROOTS ARTIST CRITIQUE & MUTUAL-AID ARCHIVING (2011–2024)
          </text>
        </svg>
      );

    default:
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#070709] text-neutral-500 font-mono-code text-xs">
          [DOCUMENTARY PLATE]
        </div>
      );
  }
};
