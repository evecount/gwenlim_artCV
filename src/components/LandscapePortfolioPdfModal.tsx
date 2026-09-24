import React, { useState, useEffect, useRef } from 'react';
import { ARTWORKS } from '../data/artworksData';
import { ARTIST_INFO, CV_DATA, ARTISTIC_REFEREES } from '../data/portfolioData';
import { PlaceholderGraphic } from './DocumentaryImagePlate';
import {
  Printer,
  Download,
  Copy,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  FileText,
  Sliders,
  ExternalLink,
  Layers
} from 'lucide-react';

interface LandscapePortfolioPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenVerticalDossier?: () => void;
}

export const LandscapePortfolioPdfModal: React.FC<LandscapePortfolioPdfModalProps> = ({
  isOpen,
  onClose,
  onOpenVerticalDossier
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'fit' | 'full' | 'grid'>('fit');
  const [plateVisualMode, setPlateVisualMode] = useState<'photos' | 'schematics'>('photos');
  const [individualPlateModes, setIndividualPlateModes] = useState<Record<string, 'photos' | 'schematics'>>({});
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const printRef = useRef<HTMLDivElement>(null);

  const toggleIndividualPlateMode = (artId: string) => {
    setIndividualPlateModes(prev => {
      const current = prev[artId] || plateVisualMode;
      return {
        ...prev,
        [artId]: current === 'photos' ? 'schematics' : 'photos'
      };
    });
  };

  // Reset page when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(1);
    }
  }, [isOpen]);

  // Keyboard navigation for pages
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPage(p => Math.min(10, p + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPage(p => Math.max(1, p - 1));
      } else if (e.key === 'Home') {
        setCurrentPage(1);
      } else if (e.key === 'End') {
        setCurrentPage(10);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Handler for direct window.print()
  const handlePrintPdf = () => {
    window.print();
  };

  // Handler for standalone HTML/PDF download
  const handleExportHtml = () => {
    if (!printRef.current) return;
    setIsExporting(true);

    try {
      const content = printRef.current.innerHTML;
      const docTitle = `Gwendalynn_Lim_Curatorial_Portfolio_10Page_Landscape_2026`;

      const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${docTitle}</title>
  <meta name="description" content="10-Page Curatorial Monograph & Selected Works Archive (2010–2026)">
  <style>
    @page {
      size: 297mm 210mm;
      margin: 0;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background: #000;
      color: #0f172a;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .page-landscape {
      width: 297mm;
      height: 210mm;
      page-break-after: always;
      break-after: page;
      position: relative;
      background: #ffffff;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }
    .no-print {
      display: none !important;
    }
    @media screen {
      body {
        background: #18181b;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }
      .page-landscape {
        box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        border: 1px solid #334155;
      }
      .screen-toolbar {
        position: fixed;
        top: 15px;
        left: 50%;
        transform: translateX(-50%);
        background: #09090b;
        border: 1px solid #3f3f46;
        padding: 10px 20px;
        border-radius: 8px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 15px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      }
      .screen-btn {
        background: #1d4ed8;
        color: #fff;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 13px;
        cursor: pointer;
        font-weight: 600;
      }
    }
    @media print {
      body {
        background: #fff;
        padding: 0;
      }
      .page-landscape {
        width: 297mm !important;
        height: 210mm !important;
        margin: 0 !important;
        padding: 0 !important;
        border: none !important;
        box-shadow: none !important;
      }
    }
  </style>
</head>
<body>
  <div class="screen-toolbar no-print">
    <span style="color:#e2e8f0; font-family:monospace; font-size:13px;">Gwendalynn Lim — 10-Page Curatorial Review Portfolio (2010–2026)</span>
    <button class="screen-btn" onclick="window.print()">Print / Save as PDF (Landscape)</button>
  </div>
  ${content}
</body>
</html>`;

      const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${docTitle}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setIsExporting(false);
    }
  };

  // Copy plain text summary of 10 pages for grant forms
  const handleCopySummary = () => {
    const lines = [
      `GWENDALYNN LIM WAN TING — SELECTED WORKS & SYSTEMS ARCHIVE (2010–2026)`,
      `Curatorial Dossier · 10-Page Structural Concordance`,
      `Track: Artist Residency · Strand: Beyond Human / Interdependence`,
      `URL: https://gwenlim.ai.studio/ · GitHub: github.com/evecount/riemann_hypothesis`,
      `========================================================================`,
      `PAGE 01: Cover & Curatorial Statement`,
      ...ARTWORKS.map((a, idx) => {
        const plateNum = String(idx + 1).padStart(2, '0');
        return `PAGE ${String(idx + 2).padStart(2, '0')}: Plate ${plateNum} — ${a.title} (${a.year})\n` +
               `  Medium: ${a.medium}\n` +
               `  Provenance: ${a.provenance || a.venue}\n` +
               `  Focus: ${a.focus || a.summary}\n` +
               `  Hardware: ${a.hardwareStack.join('; ')}\n` +
               `  Software: ${a.softwareStack.join('; ')}\n` +
               `  Lineage: ${a.studioLineage || 'Independent Studio'}`;
      }),
      `PAGE 10: Dossier Index, Technical Appendix & Links`
    ];

    navigator.clipboard.writeText(lines.join('\n\n'));
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#08080a] text-neutral-100 select-none overflow-hidden animate-fadeIn">
      {/* Print Styles for Perfect 10-Page Landscape Output */}
      <style>{`
        @page {
          size: 297mm 210mm;
          margin: 0;
        }
        @media print {
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            color: #000000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            overflow: visible !important;
          }
          .no-print {
            display: none !important;
          }
          .print-container {
            display: block !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .page-landscape {
            width: 297mm !important;
            height: 210mm !important;
            max-width: 297mm !important;
            max-height: 210mm !important;
            page-break-after: always !important;
            break-after: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 10mm 12mm !important;
            background: #ffffff !important;
            color: #000000 !important;
            display: flex !important;
            flex-direction: column !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }
        }
      `}</style>

      {/* Top Modal Chrome Toolbar (no-print) */}
      <header className="no-print h-14 bg-[#0d0e12] border-b border-neutral-800 px-4 flex items-center justify-between gap-4 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <div className="flex items-baseline gap-2">
            <span className="font-serif-display font-semibold text-white tracking-tight text-sm sm:text-base">
              Gwendalynn Lim
            </span>
            <span className="text-[11px] font-mono-code text-blue-400 font-bold uppercase tracking-wider hidden sm:inline-block">
              · 10-Page Curatorial Monograph (Landscape)
            </span>
          </div>
          <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-blue-950 border border-blue-800 text-blue-300 font-semibold hidden md:inline-block">
            Strict Jury Specification · A4 Landscape
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Switch to Full Vertical CV & Dossier */}
          {onOpenVerticalDossier && (
            <button
              onClick={() => {
                onClose();
                onOpenVerticalDossier();
              }}
              className="px-2.5 py-1 text-xs font-mono-code text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-750 rounded transition-colors flex items-center gap-1.5 cursor-pointer hidden lg:flex"
              title="Switch to detailed multi-section CV and research dossier"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full CV / Text Dossier</span>
            </button>
          )}

          {/* View Mode Toggle */}
          <div className="hidden sm:flex items-center bg-neutral-900 border border-neutral-800 rounded p-0.5 text-xs font-mono-code text-neutral-400">
            <button
              onClick={() => setViewMode('fit')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                viewMode === 'fit' ? 'bg-neutral-800 text-white font-bold' : 'hover:text-white'
              }`}
            >
              Single Page
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-neutral-800 text-white font-bold' : 'hover:text-white'
              }`}
            >
              10-Page Grid
            </button>
          </div>

          {/* Plate Visual Mode: Curatorial Photos vs Blueprint Schematic */}
          <div className="hidden md:flex items-center bg-neutral-900 border border-neutral-800 rounded p-0.5 text-xs font-mono-code text-neutral-400">
            <button
              onClick={() => setPlateVisualMode('photos')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer flex items-center gap-1.5 ${
                plateVisualMode === 'photos'
                  ? 'bg-blue-700 text-white font-bold shadow-xs'
                  : 'hover:text-white'
              }`}
              title="Display high-resolution archival photographs from assets"
            >
              <span>📷 Archival Photos</span>
            </button>
            <button
              onClick={() => setPlateVisualMode('schematics')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer flex items-center gap-1.5 ${
                plateVisualMode === 'schematics'
                  ? 'bg-blue-700 text-white font-bold shadow-xs'
                  : 'hover:text-white'
              }`}
              title="Display original architectural blueprint & schematic cards"
            >
              <span>📐 Blueprint Cards</span>
            </button>
          </div>

          {/* Copy Summary */}
          <button
            onClick={handleCopySummary}
            className="px-2.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-750 text-neutral-300 hover:text-white rounded text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Copy structural text index to clipboard"
          >
            {copiedNotification ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{copiedNotification ? 'Copied' : 'Copy Concordance'}</span>
          </button>

          {/* HTML / Offline Export */}
          <button
            onClick={handleExportHtml}
            disabled={isExporting}
            className="px-2.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-750 text-neutral-300 hover:text-white rounded text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Download complete offline HTML monograph package"
          >
            <Download className="w-3.5 h-3.5 text-neutral-400" />
            <span className="hidden md:inline">Download Package</span>
          </button>

          {/* Print / Save as PDF (Primary Action) */}
          <button
            onClick={handlePrintPdf}
            className="px-3.5 py-1.5 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-semibold rounded text-xs font-mono-code flex items-center gap-1.5 shadow-md shadow-blue-700/25 transition-colors cursor-pointer"
            title="Open browser print dialog set to Landscape A4 PDF"
          >
            <Printer className="w-3.5 h-3.5 text-blue-200" />
            <span>Print PDF (Landscape)</span>
          </button>

          {/* Close Modal */}
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors cursor-pointer ml-1"
            title="Close viewer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Sub-bar Pagination Navigation (no-print) */}
      <nav className="no-print h-11 bg-[#101117] border-b border-neutral-850 px-4 flex items-center justify-between text-xs font-mono-code text-neutral-400 shrink-0">
        <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-1 text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 rounded cursor-pointer"
            title="Previous page (ArrowLeft)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: 10 }).map((_, idx) => {
            const pageNum = idx + 1;
            const isCover = pageNum === 1;
            const isIndex = pageNum === 10;
            const isCurrent = currentPage === pageNum;

            let label = `P.${pageNum}`;
            if (isCover) label = 'Cover';
            else if (isIndex) label = 'Index';
            else label = `Plate 0${pageNum - 1}`;

            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-2.5 py-0.5 rounded text-[11px] whitespace-nowrap transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-blue-700 text-white font-bold shadow-xs'
                    : 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {label}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage(p => Math.min(10, p + 1))}
            disabled={currentPage === 10}
            className="p-1 text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 rounded cursor-pointer"
            title="Next page (ArrowRight)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-neutral-500 text-[11px]">
          <span>Page {currentPage} of 10</span>
          <span>·</span>
          <span className="text-neutral-400">297 × 210 mm Landscape</span>
        </div>
      </nav>

      {/* Main Viewport */}
      <main
        ref={containerRef}
        className="flex-1 overflow-y-auto overflow-x-auto p-4 sm:p-8 bg-[#0a0a0c] flex justify-center items-start"
      >
        {/* Printable Master Container */}
        <div ref={printRef} className="print-container w-full max-w-[1240px] flex flex-col items-center gap-8">
          
          {/* =========================================================================
              PAGE 01: COVER / DOSSIER TITLE
              ========================================================================= */}
          {(viewMode === 'grid' || currentPage === 1) && (
            <section
              id="page-01"
              className="page-landscape w-full max-w-[1120px] aspect-[297/210] bg-white text-neutral-950 p-8 sm:p-12 md:p-14 shadow-2xl rounded-sm border border-neutral-300 flex flex-col justify-between select-text"
            >
              {/* Header metadata bar */}
              <div className="border-b-2 border-neutral-950 pb-4 flex items-center justify-between text-xs font-mono-code">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-neutral-950 uppercase tracking-wider">
                    SAM RESIDENCY 2026 · CURATORIAL DOSSIER
                  </span>
                  <span className="text-neutral-400">/</span>
                  <span className="text-neutral-600">STRICT 10-PAGE JURY PORTFOLIO</span>
                </div>
                <div className="text-right font-bold text-blue-800">
                  APPLICANT ID: SAM-RES-2026-GLW
                </div>
              </div>

              {/* Monograph Title & Core Identity */}
              <div className="my-auto space-y-6 max-w-4xl">
                <div className="space-y-2">
                  <div className="text-xs font-mono-code uppercase tracking-widest text-neutral-500 font-semibold">
                    Curatorial Review Portfolio · Strict 10-Page Institutional Dossier
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold tracking-tight text-neutral-950 uppercase leading-tight">
                    Gwendalynn Lim Wan Ting
                  </h1>
                  <div className="text-lg sm:text-xl font-serif-display text-neutral-800 font-medium tracking-tight">
                    Selected Works & Systems Archive (2010–2026)
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-2xl sm:text-3xl font-serif-display text-neutral-700">
                      林婉婷
                    </span>
                    <span className="text-xs font-mono-code text-neutral-500 tracking-wider uppercase">
                      · Installation, Physical Computing, and Media-Arts Practice
                    </span>
                  </div>
                </div>

                {/* Subtitle / Headline */}
                <div className="p-4 bg-neutral-50 border-l-4 border-blue-700 space-y-1">
                  <div className="text-sm font-serif-display font-medium text-neutral-900 leading-snug">
                    Strand: <span className="font-semibold text-blue-900 italic">Beyond Human / Interdependence</span> · Track: <span className="font-semibold text-neutral-950">Artist Residency</span>
                  </div>
                  <p className="text-xs font-sans text-neutral-700 leading-relaxed">
                    A 16-year arc tracking the transition from early optical mechanics and street portraiture to participatory closed-circuit architectures, artist-run spatial mutual aid, and high-dimensional quantum computational topology.
                  </p>
                </div>

                {/* Core Institutional Credentials Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-200 text-xs font-mono-code">
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] font-bold">Studio Trajectory</div>
                    <div className="text-neutral-900 font-medium">Singapore · Toronto</div>
                    <div className="text-neutral-500 text-[11px]">2010 — 2026 (16 Years)</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] font-bold">Formative Continuum</div>
                    <div className="text-neutral-900 font-medium">Akin Collective (Dir. Pauk)</div>
                    <div className="text-neutral-500 text-[11px]">Motion & Still · Flick Switch</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] font-bold">Live AI Studio Dossier</div>
                    <div className="text-blue-700 font-bold underline">gwenlim.ai.studio</div>
                    <div className="text-neutral-500 text-[11px]">Interactive Registry</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] font-bold">Open Code Repositories</div>
                    <div className="text-neutral-900 font-medium">evecount (GitHub)</div>
                    <div className="text-neutral-500 text-[11px]">riemann_hypothesis</div>
                  </div>
                </div>

                {/* Concordance Preview Table */}
                <div className="pt-2">
                  <div className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-400 font-bold mb-2">
                    Dossier Architecture · 8 Curatorial Plates
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono-code">
                    {ARTWORKS.map((art, idx) => (
                      <div key={art.id} className="p-2 bg-neutral-100/70 border border-neutral-250 rounded-xs">
                        <span className="font-bold text-neutral-900">PLATE 0{idx + 1}:</span>{' '}
                        <span className="text-neutral-700">{art.title}</span>
                        <div className="text-[10px] text-neutral-500">{art.year}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Watermark */}
              <div className="border-t border-neutral-300 pt-3 flex items-center justify-between text-[10px] font-mono-code text-neutral-500">
                <div>SINGAPORE ART MUSEUM · RESIDENCIES 2026 · APPLICANT DOSSIER</div>
                <div>CONTACT: GWEN@GWENLIM.AI.STUDIO · HTTPS://GWENLIM.AI.STUDIO/</div>
                <div>PAGE 01 OF 10</div>
              </div>
            </section>
          )}

          {/* =========================================================================
              PAGES 02–09: PLATES 01–08 (EXACT 60% / 40% SPLIT COLUMN ARCHITECTURE)
              ========================================================================= */}
          {ARTWORKS.map((art, idx) => {
            const pageNum = idx + 2;
            if (viewMode !== 'grid' && currentPage !== pageNum) return null;

            const effectiveMode = individualPlateModes[art.id] || plateVisualMode;
            const heroImg = art.images[0];
            const detailImg1 = art.images[1];
            const detailImg2 = art.images[2];
            const plateNumberStr = String(idx + 1).padStart(2, '0');

            return (
              <section
                key={art.id}
                id={`page-${String(pageNum).padStart(2, '0')}`}
                className="page-landscape w-full max-w-[1120px] aspect-[297/210] bg-white text-neutral-950 p-6 sm:p-10 md:p-12 shadow-2xl rounded-sm border border-neutral-300 flex flex-col justify-between select-text"
              >
                {/* Top Plate Sub-Header */}
                <div className="border-b border-neutral-900 pb-2.5 flex items-center justify-between text-xs font-mono-code">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-neutral-950">PLATE {plateNumberStr}</span>
                    <span className="text-neutral-400">/</span>
                    <span className="text-neutral-700 font-semibold">{art.accessionId}</span>
                    <span className="text-neutral-400">/</span>
                    <span className="text-neutral-500">{art.year}</span>
                  </div>

                  {/* Discrete switcher for individual plate (no-print) */}
                  <button
                    onClick={() => toggleIndividualPlateMode(art.id)}
                    className="no-print px-2 py-0.5 rounded text-[10px] font-mono-code bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-800 transition-colors flex items-center gap-1 cursor-pointer"
                    title="Toggle between archival photograph and blueprint schematic"
                  >
                    <span>{effectiveMode === 'photos' ? '📷 Photo View' : '📐 Blueprint View'}</span>
                    <span className="text-[9px] text-blue-700 underline font-bold">Flip ⇄</span>
                  </button>

                  <div className="text-neutral-600 text-[11px] font-medium hidden sm:block">
                    {art.category.toUpperCase()} · GWENDALYNN LIM WAN TING
                  </div>
                  <div className="font-bold text-blue-800 text-[11px]">
                    PAGE {String(pageNum).padStart(2, '0')} OF 10
                  </div>
                </div>

                {/* 60% / 40% Two-Column Architectural Blueprint */}
                <div className="my-auto grid grid-cols-12 gap-6 items-stretch h-[82%]">
                  
                  {/* LEFT COLUMN (60% WIDTH): Visual Hero + Inset Stills */}
                  <div className="col-span-12 lg:col-span-7 flex flex-col justify-between gap-3 h-full">
                    {/* Primary Hero Image Plate (Upper 68%) */}
                    <div className="flex-1 bg-black rounded-xs overflow-hidden relative flex flex-col justify-between border border-neutral-800">
                      {/* Clean flex container without overlapping absolute frames */}
                      <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-neutral-950 border border-neutral-800">
                        {effectiveMode === 'photos' && heroImg?.url ? (
                          <img
                            src={heroImg.url}
                            alt={heroImg.title || art.title}
                            className="max-h-[75vh] w-auto max-w-full object-contain mx-auto transition-transform"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <PlaceholderGraphic plateType={heroImg?.placeholderType || 'riemann-overview'} />
                          </div>
                        )}

                        {/* Metadata HUD tag cleanly docked at top-left inside container */}
                        {effectiveMode === 'photos' && heroImg?.captureMetadata && (
                          <div className="absolute top-3 left-3 z-10 bg-black/80 backdrop-blur-xs text-[9px] font-mono-code text-neutral-300 px-2 py-0.5 rounded-xs border border-white/10 pointer-events-none">
                            {heroImg.captureMetadata.camera} · {heroImg.captureMetadata.exposure}
                          </div>
                        )}
                      </div>

                      {/* Hero Image Caption Bar */}
                      <div className="bg-neutral-950 p-2 text-white border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono-code shrink-0">
                        <div className="truncate pr-2">
                          <strong className="text-white font-bold">{effectiveMode === 'photos' ? (heroImg?.viewType || 'Installation View') : 'Structural Schematic'}:</strong>{' '}
                          <span className="text-neutral-300">{effectiveMode === 'photos' ? (heroImg?.title || art.title) : `${art.title} — Blueprint`}</span>
                        </div>
                        <div className="text-neutral-400 text-[9px] shrink-0">
                          {effectiveMode === 'photos' ? (heroImg?.credit || 'Documentation: Studio Gwendalynn Lim') : 'Technical Diagram: Studio Archive'}
                        </div>
                      </div>
                    </div>

                    {/* Inset Stills (Lower 32%): Apparatus Detail & Participatory Encounter */}
                    <div className="grid grid-cols-2 gap-3 h-28 sm:h-32 shrink-0">
                      {/* Inset Detail 1: Apparatus / Mechanical Core */}
                      <div className="bg-black rounded-xs overflow-hidden border border-neutral-800 flex flex-col justify-between relative">
                        <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-neutral-950">
                          {effectiveMode === 'photos' && detailImg1?.url ? (
                            <img
                              src={detailImg1.url}
                              alt={detailImg1.title || 'Apparatus Detail'}
                              className="max-h-full w-auto max-w-full object-contain mx-auto"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <PlaceholderGraphic plateType={detailImg1?.placeholderType || 'riemann-apparatus'} />
                            </div>
                          )}
                        </div>
                        <div className="p-1 bg-neutral-900 text-white text-[8px] font-mono-code border-t border-neutral-800 truncate shrink-0">
                          <span className="font-bold text-neutral-300">INSET 1:</span> {detailImg1?.title || 'Apparatus Detail'}
                        </div>
                      </div>

                      {/* Inset Detail 2: Action / Relational Co-presence */}
                      <div className="bg-black rounded-xs overflow-hidden border border-neutral-800 flex flex-col justify-between relative">
                        <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-neutral-950">
                          {effectiveMode === 'photos' && detailImg2?.url ? (
                            <img
                              src={detailImg2.url}
                              alt={detailImg2.title || 'Participatory Action'}
                              className="max-h-full w-auto max-w-full object-contain mx-auto"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <PlaceholderGraphic plateType={detailImg2?.placeholderType || 'riemann-action'} />
                            </div>
                          )}
                        </div>
                        <div className="p-1 bg-neutral-900 text-white text-[8px] font-mono-code border-t border-neutral-800 truncate shrink-0">
                          <span className="font-bold text-neutral-300">INSET 2:</span> {detailImg2?.title || 'Participatory Action'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN (40% WIDTH): Title, Metadata, Theoretical Inquiry, Stack */}
                  <div className="col-span-12 lg:col-span-5 flex flex-col justify-between space-y-3 h-full overflow-hidden text-neutral-900">
                    {/* Header Block & Title */}
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono-code uppercase tracking-wider text-blue-700 font-bold">
                        PLATE {plateNumberStr} · {art.year}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-serif-display font-bold tracking-tight text-neutral-950 leading-tight">
                        {art.title}
                      </h2>
                      <div className="text-xs font-serif-display text-neutral-600 italic">
                        {art.subtitle}
                      </div>
                    </div>

                    {/* Metadata Registry Box */}
                    <div className="p-2.5 bg-neutral-50 border border-neutral-250 rounded-xs space-y-1 text-[11px] font-mono-code">
                      <div>
                        <strong className="text-neutral-950">Medium:</strong>{' '}
                        <span className="text-neutral-700">{art.medium}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-950">Dimensions:</strong>{' '}
                        <span className="text-neutral-700">{art.dimensions}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-950">Provenance:</strong>{' '}
                        <span className="text-neutral-700 font-semibold">{art.provenance || art.venue}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-950">Focus:</strong>{' '}
                        <span className="text-blue-900">{art.focus || art.summary}</span>
                      </div>
                    </div>

                    {/* Conceptual Text (100–150 words) */}
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-500 font-bold">
                        Curatorial Inquiry & Apparatus Mechanics
                      </div>
                      <p className="text-xs font-serif-display text-neutral-800 leading-relaxed text-justify">
                        {art.curatorialStatement}
                      </p>
                    </div>

                    {/* Material & Technical Stack */}
                    <div className="space-y-1 pt-1 border-t border-neutral-200 text-[10px] font-mono-code">
                      <div>
                        <strong className="text-neutral-900 uppercase">Hardware & Optics:</strong>{' '}
                        <span className="text-neutral-700">{art.hardwareStack.slice(0, 3).join('; ')}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-900 uppercase">Software & Logic:</strong>{' '}
                        <span className="text-neutral-700">{art.softwareStack.slice(0, 3).join('; ')}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-900 uppercase">Studio Lineage:</strong>{' '}
                        <span className="text-neutral-600">{art.studioLineage || 'Independent Studio Practice'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Watermark */}
                <div className="border-t border-neutral-300 pt-2 flex items-center justify-between text-[9px] font-mono-code text-neutral-500">
                  <div>GWENDALYNN LIM WAN TING · SELECTED WORKS & SYSTEMS ARCHIVE</div>
                  <div>PLATE {plateNumberStr} · {art.title.toUpperCase()} ({art.year})</div>
                  <div>PAGE {String(pageNum).padStart(2, '0')} OF 10</div>
                </div>
              </section>
            );
          })}

          {/* =========================================================================
              PAGE 10: DOSSIER INDEX, TECHNICAL APPENDIX & LINKS
              ========================================================================= */}
          {(viewMode === 'grid' || currentPage === 10) && (
            <section
              id="page-10"
              className="page-landscape w-full max-w-[1120px] aspect-[297/210] bg-white text-neutral-950 p-8 sm:p-12 md:p-14 shadow-2xl rounded-sm border border-neutral-300 flex flex-col justify-between select-text"
            >
              {/* Header */}
              <div className="border-b-2 border-neutral-950 pb-3 flex items-center justify-between text-xs font-mono-code">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-neutral-950 uppercase tracking-wider">
                    PAGE 10 · DOSSIER INDEX, TECHNICAL APPENDIX & VERIFICATION LINKS
                  </span>
                </div>
                <div className="font-bold text-blue-800">
                  PAGE 10 OF 10 · CONCORDANCE REGISTRY
                </div>
              </div>

              {/* Master 8-Plate Concordance Registry Table */}
              <div className="my-auto space-y-5">
                <div>
                  <div className="text-xs font-mono-code uppercase tracking-wider text-neutral-950 font-bold mb-2">
                    Complete Artwork Metadata Concordance (2010 — 2026)
                  </div>
                  <div className="overflow-x-auto border border-neutral-300 rounded-xs">
                    <table className="w-full text-left text-[10px] font-mono-code border-collapse">
                      <thead>
                        <tr className="bg-neutral-100 border-b border-neutral-300 text-neutral-900 font-bold">
                          <th className="p-2 border-r border-neutral-250">Plate</th>
                          <th className="p-2 border-r border-neutral-250">Year</th>
                          <th className="p-2 border-r border-neutral-250">Artwork Title</th>
                          <th className="p-2 border-r border-neutral-250">Medium & Architecture</th>
                          <th className="p-2 border-r border-neutral-250">Provenance</th>
                          <th className="p-2">Primary Mechanical / Computational Core</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 text-neutral-800">
                        {ARTWORKS.map((art, idx) => (
                          <tr key={art.id} className="hover:bg-neutral-50/80">
                            <td className="p-1.5 border-r border-neutral-250 font-bold text-blue-800">
                              PL.{String(idx + 1).padStart(2, '0')}
                            </td>
                            <td className="p-1.5 border-r border-neutral-250 text-neutral-600">{art.year}</td>
                            <td className="p-1.5 border-r border-neutral-250 font-medium text-neutral-950">{art.title}</td>
                            <td className="p-1.5 border-r border-neutral-250 text-neutral-700">{art.medium}</td>
                            <td className="p-1.5 border-r border-neutral-250 text-neutral-600">{art.provenance || art.venue}</td>
                            <td className="p-1.5 text-neutral-700 font-mono text-[9px]">
                              {art.hardwareStack[0] || art.softwareStack[0]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Two Sub-Blocks: Technical Appendix & Spatial Stewardship */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Technical Appendix */}
                  <div className="p-3 bg-neutral-50 border border-neutral-250 rounded-xs space-y-1.5">
                    <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-neutral-950">
                      Technical Appendix & Sovereign Computation
                    </div>
                    <p className="text-[11px] font-sans text-neutral-700 leading-relaxed">
                      All computational installations feature zero-cloud, client-side or on-premises execution. 
                      <em>The Riemann Manifold</em> calculates Hilbert-Pólya operator eigenvalues via PyTorch and GLSL shaders at 60fps.
                      Physical computing installations deploy galvanically isolated optocoupler relays, hardware debounce suppression, and low-latency serial buses.
                    </p>
                    <div className="text-[10px] font-mono-code text-blue-900 font-semibold pt-1">
                      Code Repositories: github.com/evecount/riemann_hypothesis
                    </div>
                  </div>

                  {/* Spatial Stewardship & Collective Continuum */}
                  <div className="p-3 bg-neutral-50 border border-neutral-250 rounded-xs space-y-1.5">
                    <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-neutral-950">
                      Longitudinal Collective Continuum & Mutual Aid
                    </div>
                    <ul className="text-[10px] font-mono-code text-neutral-700 space-y-1">
                      <li>• <strong>Akin Collective (Dir. Oliver Pauk, 2011–15):</strong> First collective joined; co-held #LOVELOCAL; Two-Man Rule fabrication.</li>
                      <li>• <strong>Motion and Still Daylight Sanctuary (2014–23):</strong> 3,200 sq.ft facility; 3-phase power; pro bono community residencies.</li>
                      <li>• <strong>Flick the Switch (Susan Stewart, 2019–24):</strong> Pro bono 4K video documentation suite & material aid.</li>
                      <li>• <strong>Applied Computing Honours, SIT (2024–26):</strong> Sovereign quantum and topological systems research.</li>
                    </ul>
                  </div>
                </div>

                {/* Institutional Verification & Contact Credentials */}
                <div className="p-3 bg-neutral-100 border border-neutral-300 rounded-xs flex flex-wrap items-center justify-between gap-3 text-xs font-mono-code">
                  <div>
                    <span className="font-bold text-neutral-950">Live Studio Archive:</span>{' '}
                    <span className="text-blue-800 underline">https://gwenlim.ai.studio/</span>
                  </div>
                  <div>
                    <span className="font-bold text-neutral-950">Applicant ID:</span>{' '}
                    <span className="text-neutral-700">SAM-RES-2026-GLW</span>
                  </div>
                  <div>
                    <span className="font-bold text-neutral-950">Curatorial Contact:</span>{' '}
                    <span className="text-neutral-700">gwen@gwenlim.ai.studio</span>
                  </div>
                </div>
              </div>

              {/* Bottom Watermark */}
              <div className="border-t border-neutral-300 pt-3 flex items-center justify-between text-[10px] font-mono-code text-neutral-500">
                <div>GWENDALYNN LIM WAN TING · 10-PAGE DOSSIER CONCORDANCE COMPLETE</div>
                <div>APPLICANT ID: SAM-RES-2026-GLW · ALL RIGHTS RESERVED (2010–2026)</div>
                <div>PAGE 10 OF 10</div>
              </div>
            </section>
          )}

        </div>
      </main>
    </div>
  );
};
