import React, { useState } from 'react';
import { 
  FileDown, 
  Copy, 
  Check, 
  ExternalLink, 
  Code2, 
  Sliders, 
  FileText, 
  Layers, 
  DollarSign, 
  Cpu, 
  Sparkles,
  CheckCircle2,
  Package,
  Eye,
  EyeOff
} from 'lucide-react';
import { SAM_RESIDENCY_ALIGNMENT } from '../data/portfolioData';
import { CuratorialAtAGlanceCard } from './CuratorialAtAGlanceCard';

interface SamResidencyPanelProps {
  onSelectArtworkById: (id: string) => void;
  onOpenContact: () => void;
  onOpenPdfModal?: (preset?: 'residency' | 'standard' | 'cv-only' | 'full') => void;
  onNavigateToTab?: (tab: 'statement' | 'works' | 'timeline' | 'cv' | 'sam-residency') => void;
}

export const SamResidencyPanel: React.FC<SamResidencyPanelProps> = ({
  onSelectArtworkById,
  onOpenContact,
  onOpenPdfModal,
  onNavigateToTab
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [activeProposalTab, setActiveProposalTab] = useState<'statement' | 'rider' | 'budget' | 'phases'>('statement');
  const [showCosts, setShowCosts] = useState<boolean>(false);

  const handleCopy = (text: string, sectionKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionKey);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const formatResourceText = (includeCosts: boolean) => {
    if (includeCosts) {
      return `ESTIMATED PRODUCTION & MATERIAL SCOPE: THE RIEMANN MANIFOLD
Total Projected Allocation: $${SAM_RESIDENCY_ALIGNMENT.budgetBreakdown.totalAmount.toLocaleString()} SGD

${SAM_RESIDENCY_ALIGNMENT.budgetBreakdown.categories.map((c, i) => `${i + 1}. [${c.category}] ${c.item}
   - Functional Description: ${c.description}
   - Sourcing & Logistics: ${(c as any).sourcing || 'Direct'}
   - Est. Cost: $${c.cost.toLocaleString()} SGD`).join('\n\n')}
`;
    }
    return `EQUIPMENT, MATERIAL & FACILITY ALLOCATION: THE RIEMANN MANIFOLD
Future Work & Studio Proposal · Track: ${SAM_RESIDENCY_ALIGNMENT.track}
Artist: Gwendalynn Lim Wan Ting (林婉婷) · Codebase: ${SAM_RESIDENCY_ALIGNMENT.githubUrl}

${SAM_RESIDENCY_ALIGNMENT.budgetBreakdown.categories.map((c, i) => `${i + 1}. [${c.category}] ${c.item}
   - Functional Description: ${c.description}
   - Sourcing & Institutional Logistics: ${(c as any).sourcing || 'Direct Studio Sourcing'}`).join('\n\n')}
`;
  };

  const formatRiderText = () => {
    const r = SAM_RESIDENCY_ALIGNMENT.technicalRider;
    return `TECHNICAL FEASIBILITY RIDER: THE RIEMANN MANIFOLD
Project: ${SAM_RESIDENCY_ALIGNMENT.proposedProjectTitle}
Track: ${SAM_RESIDENCY_ALIGNMENT.track}
Open-Source Codebase: ${SAM_RESIDENCY_ALIGNMENT.githubUrl}

1. GALLERY FOOTPRINT & SPATIAL:
   ${r.galleryFootprint}

2. ELECTRICAL & POWER REQUIREMENTS:
   ${r.electricalPower}

3. COMPUTE ARCHITECTURE & SOVEREIGNTY:
   ${r.computeArchitecture}

4. OPTICAL RIGGING & LASER PROJECTION:
   ${r.opticalRig}

5. ACOUSTIC & TACTILE TRANSDUCTION:
   ${r.acousticTransduction}

6. STRUCTURAL PLINTH & LOAD DISPERSAL:
   ${r.structuralRigging}
`;
  };

  return (
    <section className="py-14 border-b border-neutral-250 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Curatorial Header */}
        <div className="border-b border-neutral-250 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-blue-700 uppercase tracking-widest mb-1 font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Future Work · In-Development Studio Proposal</span>
              <span className="text-neutral-400">·</span>
              <span>{SAM_RESIDENCY_ALIGNMENT.cycle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-neutral-950">
              The Riemann Manifold: Quantum Chaos & Spectral Topology (2026)
            </h2>
            <p className="text-xs text-neutral-600 font-mono-code mt-1">
              In-development spatial installation, physical computing architecture, and inquiry into human-AI cognitive interdependence.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            {onOpenPdfModal && (
              <button
                onClick={() => onOpenPdfModal('residency')}
                className="px-3.5 py-2 bg-neutral-950 hover:bg-neutral-800 text-white border border-neutral-950 rounded text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-xs"
                title="Generate clean, formatted PDF proposal dossier"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-300" />
                <span>Export Proposal Dossier (PDF)</span>
              </button>
            )}
            <button
              onClick={onOpenContact}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono-code rounded font-medium transition-colors cursor-pointer whitespace-nowrap shadow-xs"
            >
              Direct Curatorial Inquiry
            </button>
          </div>
        </div>

        {/* Curatorial Evaluation Brief At-a-Glance */}
        <CuratorialAtAGlanceCard
          onNavigateToTab={onNavigateToTab}
          onOpenPdfModal={onOpenPdfModal}
        />

        {/* Proposed Studio Residency Project Blueprint */}
        <div className="bg-white border border-blue-200 rounded-lg p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono-code text-blue-700 uppercase tracking-widest font-semibold">
                  Future Work · In-Development Blueprint
                </span>
                <span className="text-neutral-300">·</span>
                <a
                  href={SAM_RESIDENCY_ALIGNMENT.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono-code text-blue-800 hover:text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 hover:border-blue-300 transition-colors"
                >
                  <Code2 className="w-3 h-3 text-blue-600" />
                  <span>github.com/evecount/riemann_hypothesis</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-neutral-950">
                {SAM_RESIDENCY_ALIGNMENT.proposedProjectTitle}
              </h3>
            </div>
            <span className="text-xs font-mono-code text-neutral-700 bg-neutral-100 px-3 py-1 border border-neutral-250 rounded font-medium self-start sm:self-auto">
              Track: {SAM_RESIDENCY_ALIGNMENT.track}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm">
            <div className="lg:col-span-8 space-y-4 font-serif-display text-neutral-800 leading-relaxed">
              <p>
                In this proposed body of work, Lim expands the theoretical and quantum architecture of <em className="text-neutral-950 font-medium">The Riemann Manifold (2026)</em> into the curatorial inquiry of <strong className="text-neutral-950 font-bold">Beyond Human / Interdependence</strong>. By investigating non-trivial zeros along the critical strip (Re(s) = 1/2), quantum operator dynamics (Hilbert-Pólya conjecture), and Gaussian Unitary Ensemble (GUE) random matrix statistics, the project interrogates mathematical reality not as human invention, but as an autonomous, non-human cosmic infrastructure of relational frequencies and structural interdependence.
              </p>
              <p>
                Crucially, this inquiry extends to the contemporary artist's cognitive ecology: <strong className="text-neutral-950 font-bold">human intelligence and advanced artificial intelligence as two sides of the same coin</strong>. Rather than adopting an adversarial or instrumentalist stance, Lim’s computational workflow is an intimate cybernetic loop—entangling intuitive human aesthetic direction with machine high-dimensional tensor algebra to explore topological structures inaccessible to unassisted human perception.
              </p>
            </div>

            <div className="lg:col-span-4 bg-neutral-50 border border-neutral-250 p-4 rounded-lg text-xs font-mono-code space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-semibold">
                  Institutional Feasibility Profile
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                  DE-RISKED
                </span>
              </div>
              <div className="space-y-2 text-neutral-800">
                <div>
                  <span className="text-neutral-500 block text-[10px] font-semibold">Gallery Footprint:</span>
                  <span>100 — 140 sqm light-sealed black box</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] font-semibold">Electrical & Power:</span>
                  <span>Single 3-phase 32A or 2× 20A 240V circuits</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] font-semibold">Compute & Sovereignty:</span>
                  <span>100% on-premise local GPU inference (No cloud/API latency)</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] font-semibold">Codebase Lineage:</span>
                  <a 
                    href={SAM_RESIDENCY_ALIGNMENT.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>evecount/riemann_hypothesis</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] font-semibold">Academic Anchor:</span>
                  <span>Singapore Institute of Technology (SIT)</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] font-semibold">Facility Precedent:</span>
                  <span className="text-amber-800 font-medium">Founder, Motion & Still (10-yr studio facility)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proposal Workbench: Statement, Rider, Resources & Scope, Phases */}
        <div className="bg-white border border-neutral-300 rounded-xl overflow-hidden shadow-xs">
          {/* Workbench Header & Tab Bar */}
          <div className="bg-neutral-900 text-white p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-code uppercase font-bold bg-blue-900/60 text-blue-300 border border-blue-700/50">
                  Proposal Dossier Workbench
                </span>
                <span className="text-neutral-500 text-xs font-mono-code hidden sm:inline">|</span>
                <span className="text-neutral-400 text-xs font-mono-code hidden sm:inline">Ready to Copy & Export</span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif-display font-medium text-white">
                Project Dossier & Submission Workbench: Statement, Rider & Resource Scope
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={SAM_RESIDENCY_ALIGNMENT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-750 text-neutral-200 border border-neutral-700 rounded text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Live GitHub Repo</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              {onOpenPdfModal && (
                <button
                  onClick={() => onOpenPdfModal('residency')}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Export Proposal PDF</span>
                </button>
              )}
            </div>
          </div>

          {/* Workbench Nav Tabs */}
          <div className="bg-neutral-100 border-b border-neutral-250 px-4 sm:px-6 flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setActiveProposalTab('statement')}
              className={`px-4 py-2.5 text-xs font-mono-code uppercase tracking-wider font-semibold rounded-t-md transition-colors flex items-center gap-2 cursor-pointer border-t border-l border-r ${
                activeProposalTab === 'statement'
                  ? 'bg-white text-neutral-950 border-neutral-300 -mb-px'
                  : 'bg-transparent text-neutral-600 border-transparent hover:text-neutral-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Statement of Intent (840 Words)</span>
            </button>

            <button
              onClick={() => setActiveProposalTab('rider')}
              className={`px-4 py-2.5 text-xs font-mono-code uppercase tracking-wider font-semibold rounded-t-md transition-colors flex items-center gap-2 cursor-pointer border-t border-l border-r ${
                activeProposalTab === 'rider'
                  ? 'bg-white text-neutral-950 border-neutral-300 -mb-px'
                  : 'bg-transparent text-neutral-600 border-transparent hover:text-neutral-900'
              }`}
            >
              <Sliders className="w-3.5 h-3.5 text-emerald-600" />
              <span>Technical Feasibility Rider</span>
            </button>

            <button
              onClick={() => setActiveProposalTab('budget')}
              className={`px-4 py-2.5 text-xs font-mono-code uppercase tracking-wider font-semibold rounded-t-md transition-colors flex items-center gap-2 cursor-pointer border-t border-l border-r ${
                activeProposalTab === 'budget'
                  ? 'bg-white text-neutral-950 border-neutral-300 -mb-px'
                  : 'bg-transparent text-neutral-600 border-transparent hover:text-neutral-900'
              }`}
            >
              <Package className="w-3.5 h-3.5 text-amber-600" />
              <span>Equipment & Resource Scope</span>
            </button>

            <button
              onClick={() => setActiveProposalTab('phases')}
              className={`px-4 py-2.5 text-xs font-mono-code uppercase tracking-wider font-semibold rounded-t-md transition-colors flex items-center gap-2 cursor-pointer border-t border-l border-r ${
                activeProposalTab === 'phases'
                  ? 'bg-white text-neutral-950 border-neutral-300 -mb-px'
                  : 'bg-transparent text-neutral-600 border-transparent hover:text-neutral-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-purple-600" />
              <span>12-Month Phases (Q1 — Q4)</span>
            </button>
          </div>

          {/* Workbench Tab Content */}
          <div className="p-6 sm:p-8">
            {/* Tab 1: Statement of Intent */}
            {activeProposalTab === 'statement' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-4">
                  <div>
                    <span className="text-[10px] font-mono-code text-blue-700 uppercase tracking-widest font-bold block">
                      Thematic Strand: Beyond Human / Interdependence
                    </span>
                    <h4 className="text-xl font-serif-display font-bold text-neutral-950">
                      Statement of Intent: The Riemann Manifold & The Human-AI Coin
                    </h4>
                    <p className="text-xs text-neutral-500 font-mono-code mt-0.5">
                      ~{SAM_RESIDENCY_ALIGNMENT.statementOfIntent.wordCountApprox} words · Formatted for institutional review & curatorial selection committees
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopy(SAM_RESIDENCY_ALIGNMENT.statementOfIntent.fullText, 'statement')}
                    className="px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-300 rounded text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto font-semibold shadow-xs"
                  >
                    {copiedSection === 'statement' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-blue-700" />
                        <span>Copy Statement of Intent</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Highlight banner on Human-AI Interdependence */}
                <div className="p-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-neutral-50 border border-blue-200 rounded-lg text-xs leading-relaxed space-y-1">
                  <div className="flex items-center gap-1.5 font-bold font-mono-code text-blue-900 uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                    <span>Curatorial Breakthrough: Humans & AI As Two Sides of the Same Coin</span>
                  </div>
                  <p className="text-neutral-700 font-serif-display">
                    Rather than limiting "interdependence" to organic or ecological tropes, Lim’s statement defines the computational mind itself: where human philosophical intuition and advanced AI models form a non-adversarial, symbiotic cybernetic loop. The project is rooted in public reproducible code via <a href={SAM_RESIDENCY_ALIGNMENT.githubUrl} target="_blank" rel="noopener noreferrer" className="font-mono-code font-bold text-blue-800 underline">evecount/riemann_hypothesis</a>.
                  </p>
                </div>

                {/* Paragraphs */}
                <div className="space-y-6 font-serif-display text-neutral-800 text-sm leading-relaxed max-w-4xl">
                  {SAM_RESIDENCY_ALIGNMENT.statementOfIntent.paragraphs.map((p, idx) => (
                    <div key={idx} className="space-y-2">
                      <h5 className="font-mono-code font-bold text-xs uppercase tracking-wider text-neutral-900 border-l-2 border-blue-600 pl-2.5">
                        {p.heading}
                      </h5>
                      <p className="text-neutral-750 pl-3">
                        {p.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Technical Feasibility Rider */}
            {activeProposalTab === 'rider' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-4">
                  <div>
                    <span className="text-[10px] font-mono-code text-emerald-700 uppercase tracking-widest font-bold block">
                      Engineering & Facilities Specification
                    </span>
                    <h4 className="text-xl font-serif-display font-bold text-neutral-950">
                      Technical Feasibility Rider & Spatial Footprint
                    </h4>
                    <p className="text-xs text-neutral-500 font-mono-code mt-0.5">
                      Museum-grade spatial, acoustic, electrical, and computational parameters
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopy(formatRiderText(), 'rider')}
                    className="px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto font-semibold shadow-xs"
                  >
                    {copiedSection === 'rider' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-emerald-700" />
                        <span>Copy Technical Rider</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-neutral-50 border border-neutral-250 rounded-lg space-y-1.5">
                    <span className="text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest block font-bold">
                      01. Gallery Footprint & Spatial Clearances
                    </span>
                    <p className="text-xs text-neutral-800 font-mono-code leading-relaxed">
                      {SAM_RESIDENCY_ALIGNMENT.technicalRider.galleryFootprint}
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 border border-neutral-250 rounded-lg space-y-1.5">
                    <span className="text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest block font-bold">
                      02. Electrical & Power Drops
                    </span>
                    <p className="text-xs text-neutral-800 font-mono-code leading-relaxed">
                      {SAM_RESIDENCY_ALIGNMENT.technicalRider.electricalPower}
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 border border-neutral-250 rounded-lg space-y-1.5">
                    <span className="text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest block font-bold">
                      03. Sovereign Compute & GPU Topology
                    </span>
                    <p className="text-xs text-neutral-800 font-mono-code leading-relaxed">
                      {SAM_RESIDENCY_ALIGNMENT.technicalRider.computeArchitecture}
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 border border-neutral-250 rounded-lg space-y-1.5">
                    <span className="text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest block font-bold">
                      04. Optical Rig & Laser Projection
                    </span>
                    <p className="text-xs text-neutral-800 font-mono-code leading-relaxed">
                      {SAM_RESIDENCY_ALIGNMENT.technicalRider.opticalRig}
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 border border-neutral-250 rounded-lg space-y-1.5">
                    <span className="text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest block font-bold">
                      05. Acoustic & Tactile Transduction
                    </span>
                    <p className="text-xs text-neutral-800 font-mono-code leading-relaxed">
                      {SAM_RESIDENCY_ALIGNMENT.technicalRider.acousticTransduction}
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 border border-neutral-250 rounded-lg space-y-1.5">
                    <span className="text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest block font-bold">
                      06. Structural Plinth & Rigging
                    </span>
                    <p className="text-xs text-neutral-800 font-mono-code leading-relaxed">
                      {SAM_RESIDENCY_ALIGNMENT.technicalRider.structuralRigging}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Equipment & Resource Scope (Cost column hidden by default) */}
            {activeProposalTab === 'budget' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                  <div>
                    <span className="text-[10px] font-mono-code text-amber-700 uppercase tracking-widest font-bold block">
                      Feasibility & Resource Scope
                    </span>
                    <h4 className="text-xl font-serif-display font-bold text-neutral-950">
                      Equipment, Materials & Logistics Requirements
                    </h4>
                    <p className="text-xs text-neutral-500 font-mono-code mt-0.5">
                      Museum-ready material allocation, equipment sourcing, and studio/gallery support needs
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* Optional Cost Toggle Button */}
                    <button
                      onClick={() => setShowCosts(!showCosts)}
                      className={`px-3 py-1.5 rounded text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer border ${
                        showCosts
                          ? 'bg-amber-100 text-amber-900 border-amber-300 font-semibold'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border-neutral-300'
                      }`}
                      title="Toggle cost breakdown (Residency committees evaluate spatial & resource scope rather than dollar budgets)"
                    >
                      {showCosts ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5 text-amber-700" />
                          <span>Hide Cost Estimates</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5 text-neutral-600" />
                          <span>Show Cost Estimates (Optional Grant View)</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleCopy(formatResourceText(showCosts), 'budget')}
                      className="px-3.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 rounded text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer font-semibold shadow-xs"
                    >
                      {copiedSection === 'budget' ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-700">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-amber-700" />
                          <span>{showCosts ? 'Copy Budget & Scope Table' : 'Copy Equipment & Resource Scope'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Curatorial Advisory Note */}
                <div className="p-3.5 bg-amber-50/60 border border-amber-200/80 rounded-lg text-xs leading-relaxed space-y-1">
                  <div className="font-mono-code font-bold text-amber-900 uppercase text-[10px] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Institutional Advisory for Residency & Fellowship Proposals</span>
                  </div>
                  <p className="text-neutral-700 font-serif-display">
                    Standard artist residency applications at leading museums and institutions do <strong className="text-neutral-900 font-bold">not</strong> require an itemized dollar budget. Selection committees primarily assess <em>artistic vision</em>, <em>thematic alignment</em>, <em>studio/workshop needs</em>, and <em>spatial/electrical feasibility</em>. The table below details your required equipment and sourcing logistics. Financial estimates remain archived should a separate commissioning grant or co-production contract be requested.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-neutral-250 rounded-lg">
                    <thead className="bg-neutral-100 text-neutral-700 font-mono-code uppercase text-[10px]">
                      <tr>
                        <th className="p-3 border-b border-neutral-250">Category</th>
                        <th className="p-3 border-b border-neutral-250">Equipment / Material Scope</th>
                        <th className="p-3 border-b border-neutral-250 hidden md:table-cell">Functional Description</th>
                        <th className="p-3 border-b border-neutral-250">Sourcing & Institutional Logistics</th>
                        {showCosts && (
                          <th className="p-3 border-b border-neutral-250 text-right">Est. Cost (SGD)</th>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 font-mono-code">
                      {SAM_RESIDENCY_ALIGNMENT.budgetBreakdown.categories.map((c, i) => (
                        <tr key={i} className="hover:bg-neutral-50">
                          <td className="p-3 font-semibold text-neutral-900 whitespace-nowrap">{c.category}</td>
                          <td className="p-3 text-neutral-800">{c.item}</td>
                          <td className="p-3 text-neutral-600 text-[11px] font-sans hidden md:table-cell">{c.description}</td>
                          <td className="p-3 text-emerald-800 text-[11px] font-medium font-sans">
                            {(c as any).sourcing || 'Direct Studio Sourcing'}
                          </td>
                          {showCosts && (
                            <td className="p-3 text-right font-bold text-neutral-950">${c.cost.toLocaleString()}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-neutral-900 text-white font-mono-code">
                      <tr>
                        <td colSpan={showCosts ? 2 : 2} className="p-3 text-xs uppercase tracking-wider font-bold">
                          {showCosts ? 'Total Projected Residency Allocation' : 'Resource Feasibility Summary'}
                        </td>
                        <td className="p-3 hidden md:table-cell text-[10px] font-normal text-neutral-400">
                          {showCosts 
                            ? 'All prices include local GST, crating and calibration'
                            : 'All compute and spatial hardware architected for on-premise gallery installation'}
                        </td>
                        <td className="p-3 text-xs text-neutral-300 font-medium">
                          {showCosts ? '6 Resource Categories' : 'Sovereign local compute + SIT Academic Partnership'}
                        </td>
                        {showCosts && (
                          <td className="p-3 text-right text-sm text-cyan-300 font-bold whitespace-nowrap">
                            ${SAM_RESIDENCY_ALIGNMENT.budgetBreakdown.totalAmount.toLocaleString()} SGD
                          </td>
                        )}
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 4: 12-Month Phases */}
            {activeProposalTab === 'phases' && (
              <div className="space-y-6">
                <div className="border-b border-neutral-200 pb-4">
                  <span className="text-[10px] font-mono-code text-purple-700 uppercase tracking-widest font-bold block">
                    Execution Milestones
                  </span>
                  <h4 className="text-xl font-serif-display font-bold text-neutral-950">
                    12-Month Studio Residency Phasing (Q1 — Q4)
                  </h4>
                  <p className="text-xs text-neutral-500 font-mono-code mt-0.5">
                    Clear milestones from open-source algorithm design to public museum activation
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {SAM_RESIDENCY_ALIGNMENT.phases.map(p => (
                    <div key={p.quarter} className="p-4 bg-neutral-50 border border-neutral-250 rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-mono-code font-bold">
                          {p.quarter}
                        </span>
                        <span className="text-[10px] font-mono-code text-neutral-400">Milestone</span>
                      </div>
                      <h5 className="font-serif-display font-bold text-neutral-950 text-sm">
                        {p.title}
                      </h5>
                      <p className="text-xs text-neutral-600 font-mono-code leading-relaxed">
                        {p.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4 Core Curatorial Pillars */}
        <div className="space-y-4">
          <div className="text-xs font-mono-code uppercase tracking-widest text-neutral-600 font-semibold">
            Curatorial Alignment & Thematic Strands
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SAM_RESIDENCY_ALIGNMENT.curatorialPillars.map((pillar, i) => (
              <div
                key={i}
                className="p-5 bg-white border border-neutral-250 rounded-lg hover:border-neutral-400 shadow-xs transition-colors space-y-2"
              >
                <span className="text-[10px] font-mono-code text-blue-700 uppercase font-semibold">
                  Pillar 0{i + 1}
                </span>
                <h4 className="text-base font-serif-display font-bold text-neutral-950">
                  {pillar.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  {pillar.alignment}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 16-Year Trajectory De-Risking Matrix for Museum Curators */}
        <div className="space-y-4">
          <div className="text-xs font-mono-code uppercase tracking-widest text-neutral-600 font-semibold">
            Prior Rig Proofs & Technical Lineage (2010 — 2026)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              onClick={() => onSelectArtworkById('riemann-manifold')}
              className="text-left p-4 bg-white hover:bg-neutral-50 border border-neutral-250 hover:border-neutral-400 rounded-lg transition-all cursor-pointer group shadow-xs"
            >
              <div className="text-[10px] font-mono-code text-blue-700 font-semibold mb-1 flex items-center justify-between">
                <span>2026 · Quantum Spectral Topology</span>
                <span className="text-[9px] bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded font-bold">PROPOSAL CORE</span>
              </div>
              <div className="text-sm font-serif-display font-bold text-neutral-950 group-hover:text-blue-700">
                The Riemann Manifold
              </div>
              <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                Proven real-time high-dimensional Riemannian manifold projection, open on GitHub (evecount/riemann_hypothesis).
              </p>
            </button>

            <button
              onClick={() => onSelectArtworkById('deconstructing-capital')}
              className="text-left p-4 bg-white hover:bg-neutral-50 border border-neutral-250 hover:border-neutral-400 rounded-lg transition-all cursor-pointer group shadow-xs"
            >
              <div className="text-[10px] font-mono-code text-neutral-600 font-semibold mb-1">
                2020 · Observer Bias
              </div>
              <div className="text-sm font-serif-display font-bold text-neutral-950 group-hover:text-neutral-700">
                Deconstructing Capital
              </div>
              <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                Demonstrated high-power directional lumen saturation of machine vision sensors in industrial spaces.
              </p>
            </button>

            <button
              onClick={() => onSelectArtworkById('the-ultimate-selfie')}
              className="text-left p-4 bg-white hover:bg-neutral-50 border border-neutral-250 hover:border-neutral-400 rounded-lg transition-all cursor-pointer group shadow-xs"
            >
              <div className="text-[10px] font-mono-code text-amber-700 font-semibold mb-1">
                2014 · Civic Scale
              </div>
              <div className="text-sm font-serif-display font-bold text-neutral-950 group-hover:text-amber-700">
                The Ultimate Selfie (MTCC)
              </div>
              <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                Engineered physical computing hardware supporting 18,400+ public participants with sub-50ms latency.
              </p>
            </button>

            <button
              onClick={() => onSelectArtworkById('broadcast-people')}
              className="text-left p-4 bg-white hover:bg-neutral-50 border border-neutral-250 hover:border-neutral-400 rounded-lg transition-all cursor-pointer group shadow-xs"
            >
              <div className="text-[10px] font-mono-code text-emerald-700 font-semibold mb-1">
                2012 · Closed-Circuit Video
              </div>
              <div className="text-sm font-serif-display font-bold text-neutral-950 group-hover:text-emerald-700">
                Broadcast People (|FAT|)
              </div>
              <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                Multi-channel 16-CRT analog video matrix switching with participant stomp-switch actuators.
              </p>
            </button>

            <button
              onClick={() => onSelectArtworkById('two-man-rule')}
              className="text-left p-4 bg-white hover:bg-neutral-50 border border-neutral-250 hover:border-neutral-400 rounded-lg transition-all cursor-pointer group shadow-xs"
            >
              <div className="text-[10px] font-mono-code text-sky-700 font-semibold mb-1">
                2012 · Relational Architecture
              </div>
              <div className="text-sm font-serif-display font-bold text-neutral-950 group-hover:text-sky-700">
                Two-Man Rule (TEDx)
              </div>
              <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                Geodesic monocoque tape engineering and dual-presence physical AND-gate interlocks at Akin Collective.
              </p>
            </button>

            <button
              onClick={() => onSelectArtworkById('a-perfect-world')}
              className="text-left p-4 bg-white hover:bg-neutral-50 border border-neutral-250 hover:border-neutral-400 rounded-lg transition-all cursor-pointer group shadow-xs"
            >
              <div className="text-[10px] font-mono-code text-neutral-600 font-semibold mb-1">
                2011 · Community Mutual Aid
              </div>
              <div className="text-sm font-serif-display font-bold text-neutral-950 group-hover:text-neutral-700">
                A Perfect World
              </div>
              <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                Decade-long commitment to non-extractive community repatriation and ethnographic rigor.
              </p>
            </button>

            <button
              onClick={() => onSelectArtworkById('white-geisha-silver-aurelia')}
              className="text-left p-4 bg-white hover:bg-neutral-50 border border-neutral-250 hover:border-neutral-400 rounded-lg transition-all cursor-pointer group shadow-xs"
            >
              <div className="text-[10px] font-mono-code text-neutral-600 font-semibold mb-1">
                2011–2012 · Singapore Institutional Root
              </div>
              <div className="text-sm font-serif-display font-bold text-neutral-950 group-hover:text-neutral-700">
                Noise Singapore Festival (NAC)
              </div>
              <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                White Geisha / Silver Aurelia: Stylized identity, ornamentation, and performative persona under the public gaze.
              </p>
            </button>
          </div>
        </div>

        {/* Artistic Character References & 15-Year Spatial Interdependence */}
        <div className="p-6 bg-white border border-neutral-250 rounded-lg space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
            <div>
              <span className="text-[10px] font-mono-code text-emerald-700 uppercase tracking-widest block font-semibold">
                Institutional Evaluation · Character References & 15-Year Spatial Interdependence
              </span>
              <h3 className="text-base font-serif-display font-bold text-neutral-950 mt-1">
                Grassroots Studio Lineage: Akin Collective & Flick the Switch
              </h3>
            </div>
            <span className="text-xs font-mono-code text-neutral-800 bg-neutral-100 border border-neutral-250 px-2.5 py-1 rounded max-w-fit font-medium">
              15-Year Space-Sharing Continuum (2011 — 2026)
            </span>
          </div>

          {/* 15-Year Continuous Studio Lineage Pathway */}
          <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs space-y-2">
            <span className="text-[10px] font-mono-code text-neutral-600 uppercase tracking-wider block font-semibold">
              15-Year Continuous Infrastructure & Solidarity Timeline:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-sans">
              <div className="p-2.5 bg-white border border-neutral-200 rounded shadow-2xs">
                <span className="text-[10px] font-mono-code text-amber-800 font-semibold block">2011 — 2015 · Genesis</span>
                <p className="font-bold text-neutral-950 text-xs">Akin Collective (Dir. Oliver Pauk)</p>
                <p className="text-[11px] text-neutral-600 mt-1">
                  Early artist-run center (ARC) studio residency, shared space programming, peer critiques, and #LoveLocal arts fundraiser (2013).
                </p>
              </div>

              <div className="p-2.5 bg-white border border-neutral-200 rounded shadow-2xs">
                <span className="text-[10px] font-mono-code text-sky-800 font-semibold block">2014 — 2023 · Scaling</span>
                <p className="font-bold text-neutral-950 text-xs">Motion and Still Inc. (90 Ontario)</p>
                <p className="text-[11px] text-neutral-600 mt-1">
                  Independent daylight studio facility; hosted Sofar Sounds salons, funded indie filmmakers, and coordinated civic furniture redistribution.
                </p>
              </div>

              <div className="p-2.5 bg-white border border-neutral-200 rounded shadow-2xs">
                <span className="text-[10px] font-mono-code text-emerald-800 font-semibold block">2019 — 2024 · Advocacy</span>
                <p className="font-bold text-neutral-950 text-xs">Flick the Switch (Dir. Susan Stewart)</p>
                <p className="text-[11px] text-neutral-600 mt-1">
                  Media lead & collective member; digital archiving, artist video documentation, workspace preservation, and Nuit Blanche public art proposals.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Community Referee & Formative Collective Affiliation */}
            <div className="md:col-span-5 space-y-3">
              <div className="text-xs font-mono-code uppercase text-neutral-600 tracking-wider font-semibold">
                Community Referee & Formative Collective:
              </div>

              {/* Susan Stewart - Primary Referee */}
              <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-serif-display font-bold text-neutral-950">
                      Susan Stewart
                    </h4>
                    <p className="text-xs font-mono-code text-neutral-600">
                      Founder & Director, Flick the Switch Artists' Collective
                    </p>
                    <p className="text-[11px] font-mono-code text-neutral-500">
                      34 Stephanie Street, Toronto (2019 — 2024 Partner)
                    </p>
                  </div>
                  <span className="text-[10px] font-mono-code text-emerald-800 bg-emerald-50 px-1.5 py-0.5 border border-emerald-200 rounded font-bold">
                    Primary Referee
                  </span>
                </div>
                <p className="text-[11px] text-neutral-700 italic font-sans">
                  "Vouches for Lim’s artistic character, peer generosity, 5-year collaborative stamina, and delivery of high-stakes public art & video advocacy."
                </p>
              </div>

              {/* Oliver Pauk & Akin Collective - First Art Collective Joined */}
              <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-serif-display font-bold text-neutral-950">
                      Akin Collective
                    </h4>
                    <p className="text-xs font-mono-code text-neutral-600">
                      Founder: Oliver Pauk (First Collective Lim Joined)
                    </p>
                    <p className="text-[11px] font-mono-code text-neutral-500">
                      Toronto, Canada (2011 — 2015 Studio Resident)
                    </p>
                  </div>
                  <span className="text-[10px] font-mono-code text-amber-800 bg-amber-50 px-1.5 py-0.5 border border-amber-200 rounded font-semibold">
                    1st Art Collective
                  </span>
                </div>
                <p className="text-[11px] text-neutral-700 font-sans leading-relaxed">
                  Akin Collective was the very first art collective Lim joined. Together with founder Oliver Pauk, they co-organized and held the collaborative community showcase <strong className="font-semibold text-neutral-900">#LOVELOCAL</strong> (2013), and engineered and fabricated the cooperative camera installation <em className="italic">Two-Man Rule [TMR]</em> (2012).
                </p>
              </div>
            </div>

            {/* Strategic Value for Curatorial Juries */}
            <div className="md:col-span-7 space-y-4">
              <div className="text-xs font-mono-code uppercase text-neutral-600 tracking-wider font-semibold">
                Why This Lineage Strengthens the Proposal:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1.5">
                  <span className="text-[10px] font-mono-code text-emerald-800 font-bold uppercase block">
                    01 · First Collective & #LOVELOCAL
                  </span>
                  <h5 className="text-xs font-serif-display font-bold text-neutral-950">
                    Akin & Shared Space Models
                  </h5>
                  <p className="text-[11px] text-neutral-600 leading-relaxed font-sans">
                    Akin was the first art collective Lim joined, founded by Oliver Pauk. Holding the collaborative #LOVELOCAL showcase demonstrates Lim cut her teeth inside authentic artist-run centers dedicated to dismantling barriers for artists.
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1.5">
                  <span className="text-[10px] font-mono-code text-sky-800 font-bold uppercase block">
                    02 · Interdependence Strand Match
                  </span>
                  <h5 className="text-xs font-serif-display font-bold text-neutral-950">
                    Solidarity Economics
                  </h5>
                  <p className="text-[11px] text-neutral-600 leading-relaxed font-sans">
                    Curatorial selection panels deeply value artists who understand how shared infrastructure functions on the ground. Proves Lim’s practice is inherently relational and community-accountable.
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1.5">
                  <span className="text-[10px] font-mono-code text-amber-800 font-bold uppercase block">
                    03 · Public Art Credibility
                  </span>
                  <h5 className="text-xs font-serif-display font-bold text-neutral-950">
                    Nuit Blanche & #LOVELOCAL
                  </h5>
                  <p className="text-[11px] text-neutral-600 leading-relaxed font-sans">
                    Spans early grassroots events (#LOVELOCAL held with Oliver Pauk / Akin in 2013) to ambitious public art proposals for Toronto Nuit Blanche with Susan Stewart (2020–2024).
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1.5">
                  <span className="text-[10px] font-mono-code text-purple-800 font-bold uppercase block">
                    04 · Holistic Dossier Balance
                  </span>
                  <h5 className="text-xs font-serif-display font-bold text-neutral-950">
                    Grassroots + Academic Pair
                  </h5>
                  <p className="text-[11px] text-neutral-600 leading-relaxed font-sans">
                    Pairing community referee Susan Stewart (Flick the Switch) with formative ARC lineage at Akin (Oliver Pauk, #LOVELOCAL) and formal SIT academic credentials paints a rare, de-risked candidate portrait for institutional juries.
                  </p>
                </div>
              </div>

              {/* Integration Summary */}
              <div className="p-3 bg-neutral-100 border border-neutral-250 rounded text-xs font-mono-code text-neutral-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Dossier Anchors: Susan Stewart (Referee, FTS) · Akin Collective (Founder: Oliver Pauk, #LOVELOCAL) · SIT Applied Computing</span>
                <span className="text-neutral-900 font-medium">15-Year Verifiable Track Record</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
