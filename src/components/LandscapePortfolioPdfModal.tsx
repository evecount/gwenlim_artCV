import React, { useState, useEffect, useRef } from 'react';
import { ARTWORKS } from '../data/artworksData';
import { ARTIST_INFO, CV_DATA } from '../data/portfolioData';
import { PlaceholderGraphic } from './DocumentaryImagePlate';
import { resolveAsset } from '../utils/resolveAsset';
import {
  Printer,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface LandscapePortfolioPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenVerticalDossier?: () => void;
}

export const LandscapePortfolioPdfModal: React.FC<LandscapePortfolioPdfModalProps> = ({
  isOpen,
  onClose
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [plateVisualMode] = useState<'photos' | 'schematics'>('photos');
  const [individualPlateModes, setIndividualPlateModes] = useState<Record<string, 'photos' | 'schematics'>>({});
  const [imageFitMode, setImageFitMode] = useState<'fit' | 'fill'>('fill');
  const [individualFitModes, setIndividualFitModes] = useState<Record<string, 'fit' | 'fill'>>({});
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

  const getEffectiveFitMode = (artId: string) => {
    return individualFitModes[artId] || imageFitMode;
  };

  const toggleIndividualFitMode = (artId: string) => {
    setIndividualFitModes(prev => {
      const current = prev[artId] || imageFitMode;
      return {
        ...prev,
        [artId]: current === 'fill' ? 'fit' : 'fill'
      };
    });
  };

  // Reset page and lock body scroll when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(1);
      const origBodyOverflow = document.body.style.overflow;
      const origHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = origBodyOverflow;
        document.documentElement.style.overflow = origHtmlOverflow;
      };
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
      `Contact: gwenlynn.lim@gmail.com · Web: https://evecount.github.io/gwenlim_artCV/`,
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

      {/* Sleek, Single Chrome Toolbar (no-print) */}
      <header className="no-print h-14 bg-[#0d0e12] border-b border-neutral-800 px-4 flex items-center justify-between gap-4 shrink-0 z-20">
        {/* Title */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
          <span className="font-bold text-white tracking-tight text-sm sm:text-base">
            Gwendalynn Lim
          </span>
          <span className="text-[11px] text-neutral-400 font-semibold uppercase tracking-wider hidden sm:inline-block">
            · 10-Page Portfolio (Landscape)
          </span>
        </div>

        {/* Center: Direct 10-Page Navigation */}
        <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-1.5 text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 rounded cursor-pointer"
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
                className={`px-2.5 py-1 rounded text-xs whitespace-nowrap transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-white text-neutral-950 font-bold shadow-xs'
                    : 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 font-medium'
                }`}
              >
                {label}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage(p => Math.min(10, p + 1))}
            disabled={currentPage === 10}
            className="p-1.5 text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 rounded cursor-pointer"
            title="Next page (ArrowRight)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Actions: Fit Mode Toggle, Print & Close */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setImageFitMode(prev => prev === 'fill' ? 'fit' : 'fill')}
            className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 text-xs rounded font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Toggle between edge-to-edge window fill and full-document containment"
          >
            <span>{imageFitMode === 'fill' ? '🖼️ Fill Window' : '🔲 Fit Aspect'}</span>
          </button>

          <button
            onClick={handlePrintPdf}
            className="px-4 py-1.5 bg-white hover:bg-neutral-200 active:bg-neutral-300 text-neutral-950 font-bold rounded text-xs flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            title="Print or Save as Landscape A4 PDF"
          >
            <Printer className="w-3.5 h-3.5 text-neutral-900" />
            <span>Print PDF (Landscape)</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors cursor-pointer ml-1"
            title="Close viewer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

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
          <section
            id="page-01"
            className={`page-landscape w-full max-w-[1120px] aspect-[297/210] bg-white text-neutral-950 p-8 sm:p-12 md:p-14 shadow-2xl rounded-sm border border-neutral-300 flex-col justify-between select-text ${
              currentPage === 1 ? 'flex' : 'hidden print:flex'
            }`}
          >
              {/* Header metadata bar */}
              <div className="border-b-2 border-neutral-950 pb-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-neutral-950 uppercase tracking-wider">
                    SAM RESIDENCIES CYCLE 4 (2027/2028) · CURATORIAL DOSSIER
                  </span>
                  <span className="text-neutral-300">/</span>
                  <span className="text-neutral-600 font-medium">STRICT 10-PAGE JURY PORTFOLIO</span>
                </div>
                <div className="text-right font-bold text-neutral-950 tracking-wider">
                  APPLICATION ID: 9517668522
                </div>
              </div>

              {/* Monograph Title & Core Identity */}
              <div className="my-auto space-y-6 max-w-4xl">
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-widest text-neutral-500 font-bold">
                    Curatorial Review Portfolio · Strict 10-Page Institutional Dossier
                  </div>

                  {/* Signature Dark Title Block with Crisp White Typography */}
                  <div className="bg-neutral-950 text-white p-6 sm:p-7 rounded-xs space-y-2.5 shadow-sm border-l-4 border-neutral-300">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-tight text-white">
                      Gwendalynn Lim Wan Ting
                    </h1>
                    <div className="text-lg sm:text-xl text-neutral-200 font-medium tracking-tight">
                      Selected Works & Systems Archive (2010–2026)
                    </div>
                    <div className="flex items-center gap-3 pt-2.5 border-t border-neutral-700/60">
                      <span className="text-xl sm:text-2xl font-bold text-neutral-300">
                        林婉婷
                      </span>
                      <span className="text-xs text-neutral-400 tracking-wider uppercase font-medium">
                        · Installation, Physical Computing & Media-Arts Practice
                      </span>
                    </div>
                  </div>
                </div>

                {/* Official Application Identity Block */}
                <div className="p-4 bg-neutral-50 border border-neutral-250 border-l-4 border-l-neutral-950 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
                    <div>
                      <span className="text-neutral-500 uppercase text-[10px] font-bold block tracking-wider">Programme</span>
                      <span className="font-semibold text-neutral-950">SAM Residencies Cycle 4 (2027/2028)</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase text-[10px] font-bold block tracking-wider">Application ID</span>
                      <span className="font-bold text-neutral-950">9517668522</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase text-[10px] font-bold block tracking-wider">Applicant</span>
                      <span className="font-semibold text-neutral-950">Gwendalynn Lim Wan Ting (林婉婷)</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase text-[10px] font-bold block tracking-wider">Track</span>
                      <span className="font-semibold text-neutral-950">Artist Residency (Singapore-based, 6 Months)</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase text-[10px] font-bold block tracking-wider">Primary Strand</span>
                      <span className="font-bold text-neutral-950 italic">Beyond Human / Interdependence</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase text-[10px] font-bold block tracking-wider">Intersections</span>
                      <span className="font-medium text-neutral-800">Listening/Attuning · Making/Material Cultures</span>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed pt-2 border-t border-neutral-250">
                    A 16-year arc tracking the transition from early optical mechanics and street portraiture to participatory closed-circuit architectures, artist-run spatial mutual aid, and high-dimensional quantum computational topology.
                  </p>
                </div>

                {/* Core Institutional Credentials Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-200 text-xs">
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] font-bold tracking-wider">Studio Trajectory</div>
                    <div className="text-neutral-900 font-bold">Singapore · Toronto</div>
                    <div className="text-neutral-500 text-[11px]">2010 — 2026 (16 Years)</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] font-bold tracking-wider">Formative Continuum</div>
                    <div className="text-neutral-900 font-bold">Akin Collective (Dir. Pauk)</div>
                    <div className="text-neutral-500 text-[11px]">Motion & Still · Flick Switch</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] font-bold tracking-wider">Live Web Monograph</div>
                    <div className="text-neutral-900 font-bold underline">evecount.github.io</div>
                    <div className="text-neutral-500 text-[11px]">gwenlim_artCV</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] font-bold tracking-wider">Open Code Repositories</div>
                    <div className="text-neutral-900 font-bold">evecount (GitHub)</div>
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
                <div>SAM RESIDENCIES CYCLE 4 (2027/2028) · APPLICATION ID: 9517668522</div>
                <div>CONTACT: GWENLYNN.LIM@GMAIL.COM · GWEN@EVECOUNT.COM</div>
                <div>PAGE 01 OF 10</div>
              </div>
            </section>

          {/* =========================================================================
              PAGES 02–09: PLATES 01–08 (EXACT 60% / 40% SPLIT COLUMN ARCHITECTURE)
              ========================================================================= */}
          {ARTWORKS.map((art, idx) => {
            const pageNum = idx + 2;
            const effectiveMode = individualPlateModes[art.id] || plateVisualMode;
            const effectiveFit = getEffectiveFitMode(art.id);
            const heroImg = art.images[0];
            const detailImg1 = art.images[1];
            const detailImg2 = art.images[2];
            const plateNumberStr = String(idx + 1).padStart(2, '0');

            return (
              <section
                key={art.id}
                id={`page-${String(pageNum).padStart(2, '0')}`}
                className={`page-landscape w-full max-w-[1120px] aspect-[297/210] bg-white text-neutral-950 p-6 sm:p-10 md:p-12 shadow-2xl rounded-sm border border-neutral-300 flex-col justify-between select-text ${
                  currentPage === pageNum ? 'flex' : 'hidden print:flex'
                }`}
              >
                {/* Top Plate Sub-Header */}
                <div className="border-b-2 border-neutral-950 pb-2.5 flex items-center justify-between text-xs tracking-tight">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-neutral-950 uppercase tracking-wider">PLATE {plateNumberStr}</span>
                    <span className="text-neutral-300">/</span>
                    <span className="text-neutral-700 font-semibold">{art.accessionId}</span>
                    <span className="text-neutral-300">/</span>
                    <span className="text-neutral-500">{art.year}</span>
                  </div>

                  {/* Discrete switcher for individual plate (no-print) */}
                  <div className="flex items-center gap-2 no-print">
                    <button
                      onClick={() => toggleIndividualPlateMode(art.id)}
                      className="px-2.5 py-1 rounded-xs text-[10px] bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-800 transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
                      title="Toggle between archival photograph and blueprint schematic"
                    >
                      <span>{effectiveMode === 'photos' ? '📷 Photo' : '📐 Blueprint'}</span>
                      <span className="text-[10px] text-neutral-900 font-bold border-b border-neutral-900">Flip ⇄</span>
                    </button>

                    <button
                      onClick={() => toggleIndividualFitMode(art.id)}
                      className={`px-2.5 py-1 rounded-xs text-[10px] border transition-colors flex items-center gap-1 cursor-pointer font-medium ${
                        effectiveFit === 'fill'
                          ? 'bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800'
                          : 'bg-neutral-100 text-neutral-800 border-neutral-300 hover:bg-neutral-200'
                      }`}
                      title={effectiveFit === 'fill' ? 'Switch to Fit Aspect (full uncropped document)' : 'Switch to Fill Window (edge-to-edge frame)'}
                    >
                      <span>{effectiveFit === 'fill' ? '🖼️ Fill Window' : '🔲 Fit Aspect'}</span>
                      <span className="text-[9px] opacity-75">⇄</span>
                    </button>
                  </div>

                  <div className="text-neutral-500 text-[11px] font-medium hidden sm:block uppercase tracking-wider">
                    {art.category.toUpperCase().replace(/-/g, ' ')} · GWENDALYNN LIM WAN TING
                  </div>
                  <div className="font-bold text-neutral-950 text-[11px] tracking-wider">
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
                          <>
                            {/* Ambient blurred backdrop to eliminate pitch-black dead space */}
                            <img
                              src={resolveAsset(heroImg.url)}
                              alt=""
                              aria-hidden="true"
                              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-110 pointer-events-none select-none"
                            />
                            {/* Crisp Foreground Hero Image */}
                            <img
                              src={resolveAsset(heroImg.url)}
                              alt={heroImg.title || art.title}
                              className={`relative z-1 transition-all duration-300 ${
                                effectiveFit === 'fill'
                                  ? 'w-full h-full object-cover object-top'
                                  : 'max-h-[75vh] w-auto max-w-full object-contain mx-auto shadow-2xl'
                              }`}
                            />
                          </>
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
                      <div className="bg-neutral-950 p-2 text-white border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono-code shrink-0 z-10">
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
                            <>
                              <img
                                src={resolveAsset(detailImg1.url)}
                                alt=""
                                aria-hidden="true"
                                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-110 pointer-events-none select-none"
                              />
                              <img
                                src={resolveAsset(detailImg1.url)}
                                alt={detailImg1.title || 'Apparatus Detail'}
                                className={`relative z-1 ${
                                  effectiveFit === 'fill'
                                    ? 'w-full h-full object-cover object-center'
                                    : 'max-h-full w-auto max-w-full object-contain mx-auto'
                                }`}
                              />
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <PlaceholderGraphic plateType={detailImg1?.placeholderType || 'riemann-apparatus'} />
                            </div>
                          )}
                        </div>
                        <div className="p-1 bg-neutral-900 text-white text-[8px] font-mono-code border-t border-neutral-800 truncate shrink-0 z-10">
                          <span className="font-bold text-neutral-300">INSET 1:</span> {detailImg1?.title || 'Apparatus Detail'}
                        </div>
                      </div>

                      {/* Inset Detail 2: Action / Relational Co-presence */}
                      <div className="bg-black rounded-xs overflow-hidden border border-neutral-800 flex flex-col justify-between relative">
                        <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-neutral-950">
                          {effectiveMode === 'photos' && detailImg2?.url ? (
                            <>
                              <img
                                src={resolveAsset(detailImg2.url)}
                                alt=""
                                aria-hidden="true"
                                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-110 pointer-events-none select-none"
                              />
                              <img
                                src={resolveAsset(detailImg2.url)}
                                alt={detailImg2.title || 'Participatory Action'}
                                className={`relative z-1 ${
                                  effectiveFit === 'fill'
                                    ? 'w-full h-full object-cover object-center'
                                    : 'max-h-full w-auto max-w-full object-contain mx-auto'
                                }`}
                              />
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <PlaceholderGraphic plateType={detailImg2?.placeholderType || 'riemann-action'} />
                            </div>
                          )}
                        </div>
                        <div className="p-1 bg-neutral-900 text-white text-[8px] font-mono-code border-t border-neutral-800 truncate shrink-0 z-10">
                          <span className="font-bold text-neutral-300">INSET 2:</span> {detailImg2?.title || 'Participatory Action'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN (40% WIDTH): Title, Metadata, Theoretical Inquiry, Stack */}
                  <div className="col-span-12 lg:col-span-5 flex flex-col justify-between space-y-3 h-full overflow-hidden text-neutral-900">
                    {/* Header Block & Title with Signature Dark Background & White Font */}
                    <div className="bg-neutral-950 text-white p-3.5 rounded-xs border-l-4 border-neutral-300 shadow-xs space-y-1">
                      <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                        PLATE {plateNumberStr} · {art.year}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                        {art.title}
                      </h2>
                      {art.subtitle && (
                        <div className="text-xs text-neutral-300 italic font-normal leading-normal pt-0.5">
                          {art.subtitle}
                        </div>
                      )}
                    </div>

                    {/* Metadata Registry Box */}
                    <div className="p-3 bg-neutral-50 border border-neutral-250 rounded-xs space-y-1 text-xs">
                      <div>
                        <strong className="text-neutral-950 font-bold">Medium:</strong>{' '}
                        <span className="text-neutral-700">{art.medium}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-950 font-bold">Dimensions:</strong>{' '}
                        <span className="text-neutral-700">{art.dimensions}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-950 font-bold">Provenance:</strong>{' '}
                        <span className="text-neutral-800 font-semibold">{art.provenance || art.venue}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-950 font-bold">Focus:</strong>{' '}
                        <span className="text-neutral-800 italic">{art.focus || art.summary}</span>
                      </div>
                    </div>

                    {/* Conceptual Text (100–150 words) */}
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold border-b border-neutral-200 pb-0.5">
                        Curatorial Inquiry & Apparatus Mechanics
                      </div>
                      <p className="text-xs text-neutral-800 leading-relaxed text-justify">
                        {art.curatorialStatement}
                      </p>
                    </div>

                    {/* Material & Technical Stack */}
                    <div className="space-y-1 pt-1.5 border-t border-neutral-200 text-[10px]">
                      <div>
                        <strong className="text-neutral-900 font-bold uppercase tracking-wider">Hardware & Optics:</strong>{' '}
                        <span className="text-neutral-700">{art.hardwareStack.slice(0, 3).join('; ')}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-900 font-bold uppercase tracking-wider">Software & Logic:</strong>{' '}
                        <span className="text-neutral-700">{art.softwareStack.slice(0, 3).join('; ')}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-900 font-bold uppercase tracking-wider">Studio Lineage:</strong>{' '}
                        <span className="text-neutral-600 italic">{art.studioLineage || 'Independent Studio Practice'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Watermark */}
                <div className="border-t border-neutral-250 pt-2 flex items-center justify-between text-[9px] uppercase tracking-wider text-neutral-500 font-medium">
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
          <section
            id="page-10"
            className={`page-landscape w-full max-w-[1120px] aspect-[297/210] bg-white text-neutral-950 p-8 sm:p-12 md:p-14 shadow-2xl rounded-sm border border-neutral-300 flex-col justify-between select-text ${
              currentPage === 10 ? 'flex' : 'hidden print:flex'
            }`}
          >
              {/* Header */}
              <div className="border-b-2 border-neutral-950 pb-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-neutral-950 uppercase tracking-wider">
                    PAGE 10 · DOSSIER INDEX, TECHNICAL APPENDIX & VERIFICATION LINKS
                  </span>
                </div>
                <div className="font-bold text-neutral-950 tracking-wider">
                  PAGE 10 OF 10 · CONCORDANCE REGISTRY
                </div>
              </div>

              {/* Master 8-Plate Concordance Registry Table */}
              <div className="my-auto space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-950 font-bold mb-2">
                    Complete Artwork Metadata Concordance (2010 — 2026)
                  </div>
                  <div className="overflow-x-auto border border-neutral-300 rounded-xs">
                    <table className="w-full text-left text-[10px] border-collapse">
                      <thead>
                        <tr className="bg-neutral-950 text-white font-bold uppercase tracking-wider">
                          <th className="p-2 border-r border-neutral-800">Plate</th>
                          <th className="p-2 border-r border-neutral-800">Year</th>
                          <th className="p-2 border-r border-neutral-800">Artwork Title</th>
                          <th className="p-2 border-r border-neutral-800">Medium & Architecture</th>
                          <th className="p-2 border-r border-neutral-800">Provenance</th>
                          <th className="p-2">Primary Mechanical / Computational Core</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 text-neutral-800">
                        {ARTWORKS.map((art, idx) => (
                          <tr key={art.id} className="hover:bg-neutral-50/80">
                            <td className="p-1.5 border-r border-neutral-250 font-bold text-neutral-950">
                              PL.{String(idx + 1).padStart(2, '0')}
                            </td>
                            <td className="p-1.5 border-r border-neutral-250 text-neutral-600 font-medium">{art.year}</td>
                            <td className="p-1.5 border-r border-neutral-250 font-semibold text-neutral-950">{art.title}</td>
                            <td className="p-1.5 border-r border-neutral-250 text-neutral-700">{art.medium}</td>
                            <td className="p-1.5 border-r border-neutral-250 text-neutral-600 italic">{art.provenance || art.venue}</td>
                            <td className="p-1.5 text-neutral-800 text-[9px]">
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
                    <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-200 pb-0.5">
                      Technical Appendix & Sovereign Computation
                    </div>
                    <p className="text-[11px] text-neutral-700 leading-relaxed">
                      All computational installations feature zero-cloud, client-side or on-premises execution. 
                      <em>The Riemann Manifold</em> calculates Hilbert-Pólya operator eigenvalues via PyTorch and GLSL shaders at 60fps.
                      Physical computing installations deploy galvanically isolated optocoupler relays, hardware debounce suppression, and low-latency serial buses.
                    </p>
                    <div className="text-[10px] text-neutral-900 font-bold pt-1">
                      Code Repositories: github.com/evecount/riemann_hypothesis
                    </div>
                  </div>

                  {/* Spatial Stewardship & Collective Continuum */}
                  <div className="p-3 bg-neutral-50 border border-neutral-250 rounded-xs space-y-1.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-200 pb-0.5">
                      Longitudinal Collective Continuum & Mutual Aid
                    </div>
                    <ul className="text-[10px] text-neutral-700 space-y-1">
                      <li>• <strong>Akin Collective (Dir. Oliver Pauk, 2011–15):</strong> First collective joined; co-held #LOVELOCAL; Two-Man Rule fabrication.</li>
                      <li>• <strong>Motion and Still Daylight Sanctuary (2014–23):</strong> 3,200 sq.ft facility; 3-phase power; pro bono community residencies.</li>
                      <li>• <strong>Flick the Switch (Susan Stewart, 2019–24):</strong> Pro bono 4K video documentation suite & material aid.</li>
                      <li>• <strong>Applied Computing Honours, SIT (2024–26):</strong> Sovereign quantum and topological systems research.</li>
                    </ul>
                  </div>
                </div>

                {/* Institutional Verification & Contact Credentials */}
                <div className="p-3 bg-neutral-100 border border-neutral-300 rounded-xs flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-bold text-neutral-950">Live Web Monograph:</span>{' '}
                    <span className="text-neutral-950 font-bold underline">https://evecount.github.io/gwenlim_artCV/</span>
                  </div>
                  <div>
                    <span className="font-bold text-neutral-950">Applicant:</span>{' '}
                    <span className="text-neutral-800 font-semibold">Gwendalynn Lim Wan Ting</span>
                  </div>
                  <div>
                    <span className="font-bold text-neutral-950">Application ID:</span>{' '}
                    <span className="text-neutral-950 font-bold">9517668522</span>
                  </div>
                  <div>
                    <span className="font-bold text-neutral-950">Programme:</span>{' '}
                    <span className="text-neutral-700">SAM Residencies Cycle 4 (2027/2028)</span>
                  </div>
                  <div>
                    <span className="font-bold text-neutral-950">Curatorial Contact:</span>{' '}
                    <span className="text-neutral-700">gwenlynn.lim@gmail.com · gwen@evecount.com</span>
                  </div>
                </div>
              </div>

              {/* Bottom Watermark */}
              <div className="border-t border-neutral-250 pt-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-500 font-medium">
                <div>GWENDALYNN LIM WAN TING · 10-PAGE DOSSIER CONCORDANCE COMPLETE</div>
                <div>APPLICATION ID: 9517668522 · SAM RESIDENCIES CYCLE 4 (2027/2028)</div>
                <div>PAGE 10 OF 10</div>
              </div>
            </section>

        </div>
      </main>
    </div>
  );
};
