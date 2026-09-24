import React, { useState, useEffect, useRef } from 'react';
import {
  ARTIST_INFO,
  EDUCATION_CREDENTIALS,
  RESEARCH_AND_TECHNICAL_LEADERSHIP,
  CV_DATA,
  ARTISTIC_REFEREES,
  ARTWORKS,
  SAM_RESIDENCY_ALIGNMENT
} from '../data/portfolioData';
import { Artwork } from '../types/portfolio';
import { getArtworkImages } from '../utils/imageStore';
import { DocumentaryImagePlate } from './DocumentaryImagePlate';
import {
  Printer,
  Download,
  Copy,
  Check,
  X,
  FileText,
  Sliders,
  Sparkles,
  Image as ImageIcon,
  Layers,
  ArrowRight
} from 'lucide-react';

export type DossierPreset = 'portfolio' | 'standard' | 'cv-only' | 'residency' | 'full';

interface CuratorialDossierPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPreset?: DossierPreset;
  onSelectArtworkById?: (id: string) => void;
  onOpenLandscapePortfolio?: () => void;
}

export const CuratorialDossierPdfModal: React.FC<CuratorialDossierPdfModalProps> = ({
  isOpen,
  onClose,
  initialPreset = 'portfolio',
  onSelectArtworkById,
  onOpenLandscapePortfolio
}) => {
  // Section toggle state
  const [includeStatement, setIncludeStatement] = useState<boolean>(true);
  const [includeInterdependence, setIncludeInterdependence] = useState<boolean>(true);
  const [includeEducation, setIncludeEducation] = useState<boolean>(false);
  const [includeLeadership, setIncludeLeadership] = useState<boolean>(false);
  const [includeArtworks, setIncludeArtworks] = useState<boolean>(true);
  const [includeVisualPlates, setIncludeVisualPlates] = useState<boolean>(true);
  const [includeExhibitions, setIncludeExhibitions] = useState<boolean>(true);
  const [includeTalks, setIncludeTalks] = useState<boolean>(false);
  const [includePapers, setIncludePapers] = useState<boolean>(false);
  const [includeCivic, setIncludeCivic] = useState<boolean>(false);
  const [includeReferees, setIncludeReferees] = useState<boolean>(false);
  const [includeSamProposal, setIncludeSamProposal] = useState<boolean>(false);

  const [activePreset, setActivePreset] = useState<DossierPreset>(initialPreset);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const printableRef = useRef<HTMLDivElement>(null);

  // Preset switch handlers
  const handleApplyPreset = (preset: DossierPreset) => {
    setActivePreset(preset);
    if (preset === 'portfolio') {
      // Clean Visual Portfolio Extraction: Focus on artworks, plates, curatorial thesis, studio lineage
      setIncludeStatement(true);
      setIncludeInterdependence(true);
      setIncludeEducation(false);
      setIncludeLeadership(false);
      setIncludeArtworks(true);
      setIncludeVisualPlates(true);
      setIncludeExhibitions(true);
      setIncludeTalks(false);
      setIncludePapers(false);
      setIncludeCivic(false);
      setIncludeReferees(false);
      setIncludeSamProposal(false);
    } else if (preset === 'standard') {
      setIncludeStatement(true);
      setIncludeInterdependence(true);
      setIncludeEducation(true);
      setIncludeLeadership(true);
      setIncludeArtworks(true);
      setIncludeVisualPlates(true);
      setIncludeExhibitions(true);
      setIncludeTalks(true);
      setIncludePapers(true);
      setIncludeCivic(true);
      setIncludeReferees(true);
      setIncludeSamProposal(false);
    } else if (preset === 'residency') {
      setIncludeStatement(true);
      setIncludeInterdependence(true);
      setIncludeEducation(true);
      setIncludeLeadership(true);
      setIncludeArtworks(true);
      setIncludeVisualPlates(true);
      setIncludeExhibitions(true);
      setIncludeTalks(true);
      setIncludePapers(true);
      setIncludeCivic(true);
      setIncludeReferees(true);
      setIncludeSamProposal(true);
    } else if (preset === 'cv-only') {
      setIncludeStatement(true);
      setIncludeInterdependence(false);
      setIncludeEducation(true);
      setIncludeLeadership(true);
      setIncludeArtworks(false);
      setIncludeVisualPlates(false);
      setIncludeExhibitions(true);
      setIncludeTalks(true);
      setIncludePapers(true);
      setIncludeCivic(true);
      setIncludeReferees(true);
      setIncludeSamProposal(false);
    } else if (preset === 'full') {
      setIncludeStatement(true);
      setIncludeInterdependence(true);
      setIncludeEducation(true);
      setIncludeLeadership(true);
      setIncludeArtworks(true);
      setIncludeVisualPlates(true);
      setIncludeExhibitions(true);
      setIncludeTalks(true);
      setIncludePapers(true);
      setIncludeCivic(true);
      setIncludeReferees(true);
      setIncludeSamProposal(true);
    }
  };

  // Sync with initialPreset whenever opened
  useEffect(() => {
    if (isOpen) {
      handleApplyPreset(initialPreset);
    }
  }, [isOpen, initialPreset]);

  if (!isOpen) return null;

  // Grouped CV data
  const exhibitions = CV_DATA.filter(e => e.category === 'exhibitions');
  const talks = CV_DATA.filter(e => e.category === 'talks');
  const civic = CV_DATA.filter(e => e.category === 'civic');

  // Trigger Print to PDF
  const handlePrintPdf = () => {
    window.print();
  };

  // Generate and download a standalone, printable HTML package
  const handleDownloadStandaloneHtml = () => {
    setIsExporting(true);
    try {
      const content = printableRef.current?.innerHTML || '';
      const docTitle = activePreset === 'portfolio'
        ? `Gwendalynn_Lim_Portfolio_Extraction_2026`
        : `Gwendalynn_Lim_Curatorial_Dossier_2026`;

      const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${docTitle}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 12mm 12mm 12mm;
    }
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      color: #111827;
      background: #f8fafc;
      margin: 0;
      padding: 24px;
      line-height: 1.45;
      font-size: 10pt;
    }
    .font-serif-display {
      font-family: 'Cormorant Garamond', Georgia, serif;
    }
    .font-mono-code {
      font-family: 'JetBrains Mono', Menlo, monospace;
    }
    .paper-sheet {
      background: white;
      max-width: 880px;
      margin: 0 auto;
      padding: 36px;
      border: 1px solid #cbd5e1;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }
    .print-avoid-break {
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .print-page-break {
      page-break-before: always;
      break-before: page;
    }
    img, svg {
      max-width: 100% !important;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    @media print {
      body {
        background: white;
        padding: 0;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .paper-sheet {
        border: none;
        box-shadow: none;
        padding: 0;
        max-width: 100%;
      }
      .no-print {
        display: none !important;
      }
    }
    button.print-btn {
      background: #1d4ed8;
      color: white;
      border: none;
      padding: 8px 16px;
      font-family: monospace;
      font-size: 12px;
      cursor: pointer;
      border-radius: 4px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="no-print" style="max-width: 880px; margin: 0 auto 16px auto; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-family: monospace; font-size: 12px; color: #64748b;">
      Gwendalynn Lim · ${activePreset === 'portfolio' ? 'Portfolio Extraction (2010 — 2026)' : 'Curatorial Dossier & CV (2010 — 2026)'}
    </span>
    <button class="print-btn" onclick="window.print()">Print / Save as PDF</button>
  </div>
  <div class="paper-sheet">
    ${content}
  </div>
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

  // Copy plain text dossier for grant applications
  const handleCopyPlainText = () => {
    const lines: string[] = [
      `${ARTIST_INFO.name.toUpperCase()} (${ARTIST_INFO.chineseName})`,
      `${ARTIST_INFO.role}`,
      `${ARTIST_INFO.location} · 2010 — 2026 Trajectory`,
      `========================================================================\n`,
      activePreset === 'portfolio' 
        ? `[PORTFOLIO EXTRACTION · SELECTED WORKS & SPATIAL INSTALLATIONS]` 
        : `[ARTIST & RESEARCH PROFILE]`,
      ARTIST_INFO.statement,
      `\n[SPATIAL INTERDEPENDENCE & 15-YEAR ARC LINEAGE]`,
      ARTIST_INFO.statementOfInterdependence,
      `Lineage: Akin Collective (2011-15) -> Motion and Still Inc. (2014-23) -> Flick the Switch (2019-24)`,
      `\n[SELECTED ARTWORKS CATALOG]`,
      ...ARTWORKS.map(a => `• "${a.title}" (${a.year}) - ${a.medium}. Venue: ${a.venue}, ${a.city}.\n  Summary: ${a.summary}\n  Curatorial Thesis: ${a.curatorialStatement}\n  Hardware Stack: ${a.hardwareStack.join(', ')}\n  Lineage: ${a.studioLineage || 'Independent Studio'}`),
      `\n[EXHIBITIONS & PUBLIC ART]`,
      ...exhibitions.map(e => `• ${e.year}: "${e.title}", ${e.venueOrPublisher}, ${e.location}${e.roleOrContext ? ` (${e.roleOrContext})` : ''}`),
    ];

    if (includeEducation) {
      lines.push(
        `\n[ACADEMIC CREDENTIALS]`,
        ...EDUCATION_CREDENTIALS.map(e => `• ${e.degreeOrCert}, ${e.institution}, ${e.location}${e.focus ? ` (Focus: ${e.focus})` : ''}`)
      );
    }

    if (includeLeadership) {
      lines.push(
        `\n[RESEARCH & TECHNICAL LEADERSHIP]`,
        ...RESEARCH_AND_TECHNICAL_LEADERSHIP.map(l => `• ${l.role}, ${l.organization} (${l.year}) - ${l.details}`)
      );
    }

    if (includeTalks) {
      lines.push(
        `\n[TALKS, KEYNOTES & GUEST LECTURES]`,
        ...talks.map(t => `• ${t.year}: "${t.title}" - ${t.venueOrPublisher}, ${t.location}${t.notes ? ` (${t.notes})` : ''}`)
      );
    }

    if (includeReferees) {
      lines.push(
        `\n[INSTITUTIONAL & ARTISTIC REFERENCES]`,
        ...ARTISTIC_REFEREES.map(r => `• ${r.name} (${r.role}, ${r.affiliation}, ${r.address}) - Relationship: ${r.relationship} (${r.period}). Statement: ${r.institutionalStatement}`),
        `\n[FORMATIVE ART COLLECTIVE AFFILIATION]`,
        `• Akin Collective (Founder: Oliver Pauk, Toronto) - First art collective joined (2011–2015). Co-organized and held the collaborative community showcase #LOVELOCAL (2013) and fabricated Two-Man Rule [TMR] for TEDxToronto (2012).`
      );
    }

    navigator.clipboard.writeText(lines.join('\n'));
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-[#09090b] border border-neutral-750 rounded-xl shadow-2xl flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Top Control Bar (Modal Chrome - Hidden on Print) */}
        <div className="no-print p-4 sm:p-5 border-b border-neutral-800 bg-[#0c0c0e] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[11px] font-mono-code uppercase tracking-wider text-blue-400 font-bold">
                {activePreset === 'portfolio' 
                  ? 'Visual Portfolio Extraction · 8 Works with Plates & Technical Schematics' 
                  : 'Curatorial Dossier & Institutional CV · PDF Generator'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif-display font-medium text-white tracking-tight">
              {activePreset === 'portfolio'
                ? 'Print / Export Portfolio Extraction (2010 — 2026)'
                : 'Export Formatted Curatorial Dossier & CV (2010 — 2026)'}
            </h2>
            <p className="text-xs text-neutral-400 font-sans mt-0.5">
              {activePreset === 'portfolio'
                ? 'Formatted for visual portfolio review, artist grant submissions, and curatorial commissions with photographic plates.'
                : 'Compiled for museum acquisition juries, biennial review panels, and institutional residency evaluation.'}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {onOpenLandscapePortfolio && (
              <button
                onClick={() => {
                  onClose();
                  onOpenLandscapePortfolio();
                }}
                className="px-3 py-2 bg-blue-950 hover:bg-blue-900 border border-blue-700 text-blue-200 rounded text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Switch to strict 10-Page Landscape Curatorial Monograph"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>10-Page Landscape Mode</span>
              </button>
            )}

            <button
              onClick={handlePrintPdf}
              className="px-4 py-2 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-semibold text-xs font-mono-code rounded shadow-lg flex items-center gap-2 transition-colors cursor-pointer"
              title="Open System Print Dialog to Save as Clean Vector PDF"
            >
              <Printer className="w-3.5 h-3.5 text-blue-200" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={handleDownloadStandaloneHtml}
              disabled={isExporting}
              className="px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-750 rounded text-xs font-mono-code flex items-center gap-2 transition-colors cursor-pointer"
              title="Download standalone offline HTML package with embedded print styles"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>Standalone HTML</span>
            </button>

            <button
              onClick={handleCopyPlainText}
              className="px-3 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-750 rounded text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy plain-text dossier for grant application portals"
            >
              {copiedNotification ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Configuration Presets & Section Toggles (Modal Chrome - Hidden on Print) */}
        <div className="no-print bg-[#111114] border-b border-neutral-800 p-4 space-y-3">
          {/* Preset Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono-code">
            <span className="text-[11px] text-neutral-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
              <Sliders className="w-3 h-3 text-blue-400" />
              <span>Extraction Presets:</span>
            </span>

            <div className="flex flex-wrap items-center gap-1.5">
              {/* Portfolio Extraction Preset (Highlighted) */}
              <button
                onClick={() => handleApplyPreset('portfolio')}
                className={`px-3 py-1.5 rounded border transition-all cursor-pointer flex items-center gap-1.5 ${
                  activePreset === 'portfolio'
                    ? 'bg-blue-900/90 border-blue-400 text-blue-100 font-bold shadow-sm ring-1 ring-blue-500'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Portfolio Extraction (Visual Monograph)</span>
              </button>

              <button
                onClick={() => handleApplyPreset('standard')}
                className={`px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                  activePreset === 'standard'
                    ? 'bg-neutral-800 border-neutral-400 text-white font-semibold'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Standard Curator Dossier
              </button>

              <button
                onClick={() => handleApplyPreset('residency')}
                className={`px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                  activePreset === 'residency'
                    ? 'bg-blue-950/80 border-blue-400 text-blue-300 font-semibold'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Proposal & Future Work
              </button>

              <button
                onClick={() => handleApplyPreset('cv-only')}
                className={`px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                  activePreset === 'cv-only'
                    ? 'bg-neutral-800 border-white text-white font-semibold'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Curriculum Vitae Only
              </button>

              <button
                onClick={() => handleApplyPreset('full')}
                className={`px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                  activePreset === 'full'
                    ? 'bg-purple-950/80 border-purple-400 text-purple-300 font-semibold'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Complete Archival Compendium
              </button>
            </div>
          </div>

          {/* Granular Section Checkboxes */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono-code text-neutral-300 pt-1 border-t border-neutral-850">
            <span className="text-[10px] text-neutral-500 uppercase mr-1 font-semibold">Include:</span>
            
            <label className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={includeArtworks}
                onChange={e => setIncludeArtworks(e.target.checked)}
                className="rounded border-neutral-700 text-blue-500 focus:ring-0"
              />
              <span className="text-white font-semibold">Selected Artworks (8 Works)</span>
            </label>

            <label className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={includeVisualPlates}
                onChange={e => setIncludeVisualPlates(e.target.checked)}
                className="rounded border-neutral-700 text-blue-500 focus:ring-0"
              />
              <span className="text-blue-300 font-semibold flex items-center gap-1">
                <ImageIcon className="w-3 h-3 text-blue-400" />
                <span>Visual Documentary Plates</span>
              </span>
            </label>

            <label className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={includeStatement}
                onChange={e => setIncludeStatement(e.target.checked)}
                className="rounded border-neutral-700 text-blue-500 focus:ring-0"
              />
              <span>Artist Statement</span>
            </label>

            <label className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={includeInterdependence}
                onChange={e => setIncludeInterdependence(e.target.checked)}
                className="rounded border-neutral-700 text-blue-500 focus:ring-0"
              />
              <span>Interdependence & Studio Lineage</span>
            </label>

            <label className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={includeEducation}
                onChange={e => setIncludeEducation(e.target.checked)}
                className="rounded border-neutral-700 text-blue-500 focus:ring-0"
              />
              <span>Academic Credentials</span>
            </label>

            <label className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={includeLeadership}
                onChange={e => setIncludeLeadership(e.target.checked)}
                className="rounded border-neutral-700 text-blue-500 focus:ring-0"
              />
              <span>Research Leadership</span>
            </label>

            <label className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={includeExhibitions}
                onChange={e => setIncludeExhibitions(e.target.checked)}
                className="rounded border-neutral-700 text-blue-500 focus:ring-0"
              />
              <span>Exhibitions</span>
            </label>

            <label className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={includeTalks}
                onChange={e => setIncludeTalks(e.target.checked)}
                className="rounded border-neutral-700 text-blue-500 focus:ring-0"
              />
              <span>Talks & Lectures</span>
            </label>

            <label className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={includeCivic}
                onChange={e => setIncludeCivic(e.target.checked)}
                className="rounded border-neutral-700 text-blue-500 focus:ring-0"
              />
              <span>Civic Practice</span>
            </label>

            <label className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={includeReferees}
                onChange={e => setIncludeReferees(e.target.checked)}
                className="rounded border-neutral-700 text-blue-500 focus:ring-0"
              />
              <span>Institutional Referees</span>
            </label>

            <label className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={includeSamProposal}
                onChange={e => setIncludeSamProposal(e.target.checked)}
                className="rounded border-neutral-700 text-blue-500 focus:ring-0"
              />
              <span className="text-blue-400 font-medium">Future Work & Research Proposal</span>
            </label>
          </div>
        </div>

        {/* Scrollable White Paper Dossier Viewport */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-neutral-900/60 flex justify-center">
          
          {/* Printable White-Paper Sheet */}
          <div
            id="printable-curatorial-dossier"
            ref={printableRef}
            className="w-full max-w-[880px] bg-white text-neutral-900 p-8 sm:p-14 shadow-2xl rounded-sm border border-neutral-300 font-sans space-y-8 select-text"
          >
            {/* 1. Official Document Header */}
            <div className="border-b-2 border-neutral-900 pb-5 space-y-2 print-avoid-break">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-serif-display font-bold tracking-tight text-neutral-950 uppercase">
                    {ARTIST_INFO.name}
                  </h1>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-serif-display text-neutral-700 font-normal">
                      {ARTIST_INFO.chineseName}
                    </span>
                    <span className="text-xs font-mono-code text-neutral-500 uppercase tracking-wider">
                      · {ARTIST_INFO.role}
                    </span>
                  </div>
                </div>
                <div className="text-left sm:text-right text-[11px] font-mono-code text-neutral-600">
                  <div className="font-bold text-neutral-950 uppercase">
                    {activePreset === 'portfolio' 
                      ? 'PORTFOLIO EXTRACTION · 2010 — 2026' 
                      : 'INSTITUTIONAL CURATORIAL DOSSIER · 2010 — 2026'}
                  </div>
                  <div>Singapore · Applied Computing Honours</div>
                  <div className="text-blue-700 font-semibold">
                    {activePreset === 'portfolio'
                      ? 'Selected Spatial & Computational Works Catalog'
                      : 'Compiled for Curatorial Review'}
                  </div>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-sans text-neutral-700 flex flex-wrap gap-x-4 gap-y-1 border-t border-neutral-200">
                <span><strong>Studio Provenance:</strong> Akin Collective (2011–15) → Motion & Still (2014–23) → Flick the Switch (2019–24)</span>
                <span><strong>Inquiry:</strong> Critique of Observer Bias · Closed-Circuit Video Feedback · Machine Interiority</span>
              </div>
            </div>

            {/* 2. Artist Statement & Research Profile */}
            {includeStatement && (
              <div className="space-y-3 border-b border-neutral-300 pb-6 print-avoid-break">
                <div className="flex items-center justify-between">
                  <h2 className="text-xs font-mono-code font-bold uppercase tracking-widest text-neutral-900">
                    01. Artist & Research Profile
                  </h2>
                  <span className="text-[10px] font-mono-code text-neutral-500">16-Year Trajectory</span>
                </div>
                <p className="text-sm font-serif-display text-neutral-800 leading-relaxed text-justify">
                  {ARTIST_INFO.statement}
                </p>

                {/* Research Vectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  {ARTIST_INFO.researchVectors.map(v => (
                    <div key={v.id} className="p-2.5 bg-neutral-50 border border-neutral-250 rounded">
                      <div className="flex items-center justify-between text-[10px] font-mono-code mb-1">
                        <strong className="text-neutral-900">{v.title}</strong>
                        <span className="text-neutral-500">{v.epoch}</span>
                      </div>
                      <p className="text-[11px] font-sans text-neutral-700 leading-snug">
                        {v.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Spatial Interdependence & Studio Lineage */}
            {includeInterdependence && (
              <div className="space-y-3 border-b border-neutral-300 pb-6 print-avoid-break">
                <div className="flex items-center justify-between">
                  <h2 className="text-xs font-mono-code font-bold uppercase tracking-widest text-neutral-900">
                    02. Spatial Interdependence & Grassroots Studio Lineage
                  </h2>
                  <span className="text-[10px] font-mono-code text-neutral-600 font-semibold">
                    15-Year Continuous Space-Sharing
                  </span>
                </div>
                <p className="text-xs font-serif-display text-neutral-800 leading-relaxed text-justify">
                  {ARTIST_INFO.statementOfInterdependence}
                </p>

                {/* Studio Lineage Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-[10px] font-mono-code">
                  <div className="p-2 bg-neutral-50 border border-neutral-250 rounded">
                    <div className="font-bold text-neutral-900">1. Akin Collective (2011–15)</div>
                    <div className="text-neutral-600 text-[9px] mt-0.5">Grassroots studio co-op, shared darkroom & fabrication</div>
                  </div>
                  <div className="p-2 bg-neutral-50 border border-neutral-250 rounded">
                    <div className="font-bold text-neutral-900">2. Motion and Still (2014–23)</div>
                    <div className="text-neutral-600 text-[9px] mt-0.5">Spatial robotics, camera arrays & optical rigs</div>
                  </div>
                  <div className="p-2 bg-neutral-50 border border-neutral-250 rounded">
                    <div className="font-bold text-neutral-900">3. Flick the Switch (2019–24)</div>
                    <div className="text-neutral-600 text-[9px] mt-0.5">Artist-run spatial collective, Kensington Market</div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Academic Credentials */}
            {includeEducation && (
              <div className="space-y-3 border-b border-neutral-300 pb-6 print-avoid-break">
                <h2 className="text-xs font-mono-code font-bold uppercase tracking-widest text-neutral-900">
                  03. Academic Credentials & Applied Computing Honours
                </h2>
                <div className="space-y-3 text-xs font-sans">
                  {EDUCATION_CREDENTIALS.map(edu => (
                    <div key={edu.id} className="space-y-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                        <strong className="text-neutral-950 font-semibold">
                          • {edu.degreeOrCert}
                        </strong>
                        <span className="text-[11px] font-mono-code text-neutral-600">
                          {edu.location}
                        </span>
                      </div>
                      <div className="text-neutral-800 pl-3">
                        {edu.institution}
                      </div>
                      {edu.focus && (
                        <div className="text-neutral-600 italic pl-3 text-[11px]">
                          Curricular Focus: {edu.focus}
                        </div>
                      )}
                      {edu.honorsAndRoles && edu.honorsAndRoles.map((h, i) => (
                        <div key={i} className="text-neutral-600 italic pl-3 text-[11px]">
                          Honour / Leadership: {h}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Research & Technical Leadership */}
            {includeLeadership && (
              <div className="space-y-3 border-b border-neutral-300 pb-6 print-avoid-break">
                <h2 className="text-xs font-mono-code font-bold uppercase tracking-widest text-neutral-900">
                  04. Research & Technical Leadership
                </h2>
                <div className="space-y-3 text-xs font-sans">
                  {RESEARCH_AND_TECHNICAL_LEADERSHIP.map(role => (
                    <div key={role.id} className="space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                        <span className="font-semibold text-neutral-950">
                          • {role.role}, <span className="font-normal text-neutral-850">{role.organization}</span>
                        </span>
                        <span className="text-[11px] font-mono-code text-neutral-600">
                          {role.location} ({role.year})
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-700 pl-3 leading-relaxed">
                        {role.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Selected Artworks & Systems Installations (THE PORTFOLIO CORE) */}
            {includeArtworks && (
              <div className="space-y-6 border-b border-neutral-300 pb-8">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <div>
                    <h2 className="text-xs font-mono-code font-bold uppercase tracking-widest text-neutral-950">
                      {activePreset === 'portfolio'
                        ? '03. Selected Spatial Works & Installations Catalog (2010 — 2026)'
                        : '05. Selected Artworks & Spatial Installations (2010 — 2026)'}
                    </h2>
                    <span className="text-[11px] text-neutral-600 font-sans italic">
                      Eight Major Spatial Computing Works with Calibrated Photographic Plates & Technical Apparatus Schematics
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-code bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded border border-neutral-250 font-semibold">
                    8 Works Cataloged
                  </span>
                </div>

                <div className="space-y-8">
                  {ARTWORKS.map((art, index) => {
                    const artImages = getArtworkImages(art.id, art.images);
                    const primaryImage = artImages[0];
                    return (
                      <article
                        key={art.id}
                        className="space-y-4 p-5 sm:p-6 bg-white border border-neutral-300 rounded shadow-xs print-avoid-break"
                      >
                        {/* Artwork Tombstone Header */}
                        <div className="border-b border-neutral-200 pb-2.5">
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                            <div className="flex items-baseline gap-2">
                              <span className="text-xs font-mono-code text-blue-700 font-bold">
                                [0{index + 1}/08]
                              </span>
                              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-neutral-950">
                                {art.title}
                              </h3>
                              <span className="text-xs font-mono-code text-neutral-600">
                                ({art.year})
                              </span>
                            </div>
                            <span className="text-[11px] font-mono-code text-neutral-600">
                              Accession: <strong>{art.accessionId}</strong>
                            </span>
                          </div>

                          <div className="mt-1 flex flex-wrap items-center gap-x-3 text-xs font-mono-code text-neutral-700">
                            <span className="font-semibold text-neutral-900">{art.medium}</span>
                            <span className="text-neutral-400">·</span>
                            <span>Venue: {art.venue}, {art.city}</span>
                            <span className="text-neutral-400">·</span>
                            <span>Footprint: {art.installationFootprint}</span>
                          </div>
                        </div>

                        {/* Visual Plates (when includeVisualPlates is active) */}
                        {includeVisualPlates && (
                          <div className="space-y-2.5">
                            {/* Primary Installation Plate */}
                            <div className="rounded overflow-hidden border border-neutral-800 bg-neutral-950">
                              <div className="w-full relative">
                                <DocumentaryImagePlate
                                  image={primaryImage}
                                  artworkId={art.id}
                                  index={0}
                                  totalImages={artImages.length}
                                  compact={false}
                                  allowReplace={false}
                                />
                              </div>
                              <div className="bg-neutral-950 px-3 py-1.5 text-[10px] font-mono-code text-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between border-t border-neutral-800 gap-1">
                                <span className="font-semibold text-blue-300 uppercase">
                                  Plate 01: {primaryImage.viewType}
                                </span>
                                <span className="text-neutral-400 truncate max-w-md">
                                  {primaryImage.caption || primaryImage.title}
                                </span>
                                <span className="text-neutral-500 text-[9px]">
                                  {primaryImage.captureMetadata?.camera || 'Calibrated Documentary Rig'}
                                </span>
                              </div>
                            </div>

                            {/* Secondary Plate Strips (Apparatus Detail & Participatory Action) */}
                            {artImages.length > 1 && (
                              <div className="grid grid-cols-2 gap-2.5">
                                {artImages.slice(1).map((subImg, subIdx) => (
                                  <div key={subImg.id || subIdx} className="border border-neutral-250 rounded bg-neutral-50 p-2 flex gap-2.5 items-center">
                                    <div className="w-20 sm:w-24 aspect-4/3 bg-black rounded overflow-hidden shrink-0">
                                      <DocumentaryImagePlate
                                        image={subImg}
                                        artworkId={art.id}
                                        index={subIdx + 1}
                                        totalImages={artImages.length}
                                        compact={true}
                                        allowReplace={false}
                                      />
                                    </div>
                                    <div className="text-[10px] font-mono-code text-neutral-800 leading-tight space-y-0.5">
                                      <div className="font-bold text-neutral-950">
                                        Plate 0{subIdx + 2}: {subImg.viewType}
                                      </div>
                                      <p className="text-[9px] text-neutral-600 line-clamp-2 font-sans">
                                        {subImg.caption || subImg.title}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Curatorial Summary & Concept */}
                        <div className="space-y-1 text-xs text-neutral-850">
                          <div className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-900 font-bold">
                            Curatorial Thesis & Inquiry:
                          </div>
                          <p className="font-serif-display text-sm leading-relaxed text-justify">
                            {art.curatorialStatement || art.summary}
                          </p>
                        </div>

                        {/* Physical Apparatus, Hardware Stack & Studio Lineage */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-[10px] font-mono-code">
                          {/* Hardware / Spatial Rig */}
                          <div className="p-2.5 bg-neutral-50 border border-neutral-250 rounded space-y-1">
                            <span className="text-neutral-900 font-bold uppercase block">
                              Apparatus & Spatial Computing Stack:
                            </span>
                            <div className="text-neutral-700 flex flex-wrap gap-x-2 gap-y-0.5">
                              {art.hardwareStack.map((h: string, i: number) => (
                                <span key={i}>▪ {h}</span>
                              ))}
                            </div>
                            <div className="text-neutral-600 pt-1 border-t border-neutral-200/80">
                              <strong>Dimensions:</strong> {art.dimensions}
                            </div>
                          </div>

                          {/* Studio Provenance & Production Context */}
                          <div className="p-2.5 bg-neutral-50 border border-neutral-250 rounded space-y-1">
                            <span className="text-neutral-900 font-bold uppercase block">
                              Studio Lineage & Provenance:
                            </span>
                            <div className="text-blue-900 font-semibold">
                              {art.studioLineage || 'Independent Studio Research'}
                            </div>
                            <p className="text-neutral-600 font-sans text-[11px] leading-snug">
                              {art.productionContext || 'Institutional and self-directed prototyping.'}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 7. Selected Exhibitions & Public Installations */}
            {includeExhibitions && (
              <div className="space-y-3 border-b border-neutral-300 pb-6 print-avoid-break">
                <h2 className="text-xs font-mono-code font-bold uppercase tracking-widest text-neutral-900">
                  {activePreset === 'portfolio' ? '04. Selected Exhibitions & Institutional History' : '06. Selected Exhibitions & Public Installations'}
                </h2>
                <div className="space-y-2.5 text-xs font-sans">
                  {exhibitions.map(ex => (
                    <div key={ex.id} className="space-y-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                        <span className="font-semibold text-neutral-950">
                          • {ex.year}: "{ex.title}"
                        </span>
                        <span className="text-[11px] font-mono-code text-neutral-600">
                          {ex.venueOrPublisher}, {ex.location}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-700 italic pl-3">
                        {ex.roleOrContext && `Role: ${ex.roleOrContext}`} {ex.notes && `— ${ex.notes}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. Talks & Lectures */}
            {includeTalks && (
              <div className="space-y-3 border-b border-neutral-300 pb-6 print-avoid-break">
                <h2 className="text-xs font-mono-code font-bold uppercase tracking-widest text-neutral-900">
                  07. Talks, Keynotes & Guest Lectures
                </h2>
                <div className="space-y-2 text-xs font-sans">
                  {talks.map(t => (
                    <div key={t.id} className="space-y-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                        <span className="font-semibold text-neutral-950">
                          • {t.year}: "{t.title}"
                        </span>
                        <span className="text-[11px] font-mono-code text-neutral-600">
                          {t.venueOrPublisher}, {t.location}
                        </span>
                      </div>
                      {t.notes && (
                        <p className="text-[11px] text-neutral-700 italic pl-3">
                          {t.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 9. Civic Practice & Mutual Aid */}
            {includeCivic && (
              <div className="space-y-3 border-b border-neutral-300 pb-6 print-avoid-break">
                <h2 className="text-xs font-mono-code font-bold uppercase tracking-widest text-neutral-900">
                  08. Civic Practice, Community Hardware & Mutual Aid
                </h2>
                <div className="space-y-2 text-xs font-sans">
                  {civic.map(c => (
                    <div key={c.id} className="space-y-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                        <span className="font-semibold text-neutral-950">
                          • {c.year}: "{c.title}"
                        </span>
                        <span className="text-[11px] font-mono-code text-neutral-600">
                          {c.venueOrPublisher}, {c.location}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-700 italic pl-3">
                        {c.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 10. Institutional & Artistic References */}
            {includeReferees && (
              <div className="space-y-3 border-b border-neutral-300 pb-6 print-avoid-break">
                <h2 className="text-xs font-mono-code font-bold uppercase tracking-widest text-neutral-900">
                  09. Institutional & Artistic Referees
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
                  {ARTISTIC_REFEREES.map(r => (
                    <div key={r.id} className="p-3 bg-neutral-50 border border-neutral-250 rounded space-y-1">
                      <div className="font-bold text-neutral-950">{r.name}</div>
                      <div className="text-[11px] text-neutral-700 font-medium">{r.role}</div>
                      <div className="text-[11px] text-neutral-600">{r.affiliation}</div>
                      <div className="text-[10px] font-mono-code text-neutral-500">{r.address}</div>
                      <div className="text-[10px] font-mono-code text-blue-900 pt-1 border-t border-neutral-200">
                        {r.relationship} ({r.period})
                      </div>
                      <p className="text-[10px] text-neutral-700 italic pt-0.5">
                        "{r.institutionalStatement}"
                      </p>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-amber-50/70 border border-amber-200 rounded text-xs space-y-1 mt-3">
                  <div className="font-bold text-amber-950 font-mono-code uppercase text-[10px]">
                    Formative Art Collective Lineage
                  </div>
                  <p className="text-neutral-800 text-[11px]">
                    <strong>Akin Collective (Founder: Oliver Pauk) · 2011–2015:</strong> The first art collective Lim joined. Together with founder Oliver Pauk, they co-organized and held the collaborative <strong>#LOVELOCAL</strong> community arts & music showcase (2013), alongside fabricating <em>Two-Man Rule [TMR]</em> (2012). <span className="text-neutral-600 italic">(Founder affiliation; not a formal referee).</span>
                  </p>
                </div>
              </div>
            )}

            {/* 11. Future Work & Studio Research Proposal */}
            {includeSamProposal && (
              <div className="space-y-4 border-b border-neutral-300 pb-6 print-avoid-break bg-blue-50/50 p-4 rounded border border-blue-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xs font-mono-code font-bold uppercase tracking-widest text-blue-900">
                    Appendix: Future Work & Studio Research Proposal — The Riemann Manifold (2026)
                  </h2>
                  <span className="text-[10px] font-mono-code bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">
                    In-Development Studio Blueprint
                  </span>
                </div>

                <div className="space-y-3 text-xs font-sans text-neutral-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-blue-250 pb-2">
                    <div className="font-serif-display text-sm font-semibold text-neutral-950">
                      Research Inquiry: "{SAM_RESIDENCY_ALIGNMENT.proposalTitle}"
                    </div>
                    <div className="text-[10px] font-mono-code text-blue-800 font-semibold">
                      Open-Source Repo: {SAM_RESIDENCY_ALIGNMENT.githubUrl}
                    </div>
                  </div>

                  <p className="text-[11px] leading-relaxed">
                    {SAM_RESIDENCY_ALIGNMENT.theoreticalFramework}
                  </p>

                  {/* Curatorial Pillars including Human-AI Interdependence */}
                  <div className="space-y-1.5 pt-1 font-serif-display text-neutral-800">
                    <div className="text-[10px] font-mono-code uppercase tracking-wider text-blue-900 font-bold">
                      Curatorial Pillars & Interdependence Strand:
                    </div>
                    {SAM_RESIDENCY_ALIGNMENT.curatorialPillars.map((p, idx) => (
                      <div key={idx} className="text-[11px] leading-snug pl-2 border-l border-blue-300">
                        <strong className="text-neutral-900 font-sans">{p.title}:</strong> {p.alignment}
                      </div>
                    ))}
                  </div>

                  {/* Statement of Intent Summary */}
                  <div className="p-3 bg-white rounded border border-blue-200 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono-code text-blue-900 font-bold uppercase">
                      <span>Statement of Intent: The Human-AI Coin & Non-Human Substrate</span>
                      <span>840 Words Available in Portal Workbench</span>
                    </div>
                    <p className="text-[10px] text-neutral-700 leading-relaxed font-serif-display">
                      "Curatorial inquiries into the 'Beyond Human' frequently confine themselves to biological ecology. Yet for an artist working in the twenty-first century, interdependence defines the computational substrate of our own minds. In my daily studio practice, human intentionality and artificial intelligence are two sides of the same coin... Neither entity operates in isolation: human somatic perception, philosophical history, and moral grounding are symbiotically entangled with machine capacity for high-dimensional synthesis."
                    </p>
                  </div>

                  {/* 12-Month Phases */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-1 font-mono-code text-[10px]">
                    {SAM_RESIDENCY_ALIGNMENT.phases.map(p => (
                      <div key={p.quarter} className="p-2 bg-white rounded border border-blue-250">
                        <strong className="text-blue-900 block">{p.quarter}: {p.title}</strong>
                        <p className="text-neutral-600 text-[9px] mt-0.5 leading-snug">{p.focus}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technical Feasibility Rider Summary */}
                  <div className="p-2.5 bg-neutral-50 rounded border border-neutral-250 text-[10px] font-mono-code space-y-1">
                    <div className="font-bold text-neutral-900 uppercase tracking-wider text-[9px]">
                      Technical Feasibility Rider Summary:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-neutral-700">
                      <div><strong>Footprint:</strong> {SAM_RESIDENCY_ALIGNMENT.technicalRider.galleryFootprint}</div>
                      <div><strong>Power:</strong> {SAM_RESIDENCY_ALIGNMENT.technicalRider.electricalPower}</div>
                      <div><strong>Compute:</strong> {SAM_RESIDENCY_ALIGNMENT.technicalRider.computeArchitecture}</div>
                      <div><strong>Optics:</strong> {SAM_RESIDENCY_ALIGNMENT.technicalRider.opticalRig}</div>
                      <div><strong>Acoustics:</strong> {SAM_RESIDENCY_ALIGNMENT.technicalRider.acousticTransduction}</div>
                      <div><strong>Plinth:</strong> {SAM_RESIDENCY_ALIGNMENT.technicalRider.structuralRigging}</div>
                    </div>
                  </div>

                  {/* Material & Equipment Feasibility Summary */}
                  <div className="flex items-center justify-between p-2.5 bg-neutral-900 text-white rounded font-mono-code text-[10px]">
                    <div>
                      <span className="font-bold uppercase tracking-wider text-cyan-300">Resource & Equipment Feasibility:</span>
                      <span className="ml-2 text-neutral-200 font-medium">6 De-Risked Hardware & Fabrication Categories</span>
                    </div>
                    <span className="text-[9px] text-neutral-400">
                      Standard Fellowship Scope · Local Sovereign Compute & SIT Academic Anchor
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Document Verification & Sign-off Footer */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono-code text-neutral-600">
              <div>
                <span className="font-semibold text-neutral-900">Official Archival Record · Gwendalynn Lim Wan Ting (林婉婷)</span>
                <span className="block text-[10px] text-neutral-500">Singapore · Contact: gwenlynn.lim@gmail.com · Archive: 2010 — 2026</span>
              </div>
              <div className="text-left sm:text-right text-[10px]">
                <span className="font-bold text-neutral-800">
                  {activePreset === 'portfolio' ? 'GL-PORTFOLIO-EXTRACTION-2026' : 'GL-CURATORIAL-DOSSIER-2026'}
                </span>
                <span className="block text-neutral-500">Museum Acquisition & Grant Submission Grade</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Quick-Action Status Bar (Modal Chrome - Hidden on Print) */}
        <div className="no-print p-3 sm:px-6 bg-[#0c0c0e] border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-code text-neutral-400 gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>
              Tip: In your browser print dialog, select <strong className="text-white">Save as PDF</strong> and disable <em className="text-neutral-300">Headers and Footers</em> for clean publication borders.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrintPdf}
              className="text-blue-400 hover:text-blue-300 underline cursor-pointer font-bold"
            >
              Trigger System Print / PDF Dialog
            </button>
            <span className="text-neutral-700">|</span>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white cursor-pointer"
            >
              Close Preview
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
