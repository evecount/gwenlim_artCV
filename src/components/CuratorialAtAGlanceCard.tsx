import React, { useState } from 'react';
import {
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Building,
  Award,
  Users,
  ChevronDown,
  ChevronUp,
  FileDown,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { ARTIST_INFO, SAM_RESIDENCY_ALIGNMENT } from '../data/portfolioData';

interface CuratorialAtAGlanceCardProps {
  onNavigateToTab?: (tab: 'statement' | 'works' | 'timeline' | 'cv' | 'sam-residency') => void;
  onOpenPdfModal?: (preset?: 'residency' | 'standard' | 'cv-only' | 'full') => void;
  onOpenAppliedPractice?: () => void;
}

export const CuratorialAtAGlanceCard: React.FC<CuratorialAtAGlanceCardProps> = ({
  onNavigateToTab,
  onOpenPdfModal,
  onOpenAppliedPractice
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className="bg-white border-2 border-blue-900/20 rounded-xl overflow-hidden shadow-xs">
      {/* Header Docket Bar */}
      <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-blue-950 text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono-code uppercase tracking-widest text-cyan-300 font-bold">
              Curatorial Evaluation Brief · Institutional Review & Residencies
            </span>
            <span className="text-neutral-500 hidden sm:inline">|</span>
            <span className="text-[10px] font-mono-code text-blue-200 hidden sm:inline">
              SAM Residencies Cycle 4 (2027/2028) · Application ID: 9517668522
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-serif-display font-medium text-white tracking-tight">
            Institutional Candidate At-a-Glance: Gwendalynn Lim (林婉婷)
          </h2>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsExpanded(prev => !prev)}
            className="px-2.5 py-1.5 bg-neutral-800/80 hover:bg-neutral-800 text-neutral-300 border border-neutral-700 rounded text-xs font-mono-code flex items-center gap-1 transition-colors cursor-pointer"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Collapse' : 'Expand Rubric'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Rubric Content */}
      {isExpanded && (
        <div className="p-5 sm:p-6 space-y-6 bg-white text-neutral-900">
          {/* Quick Institutional Matrix (5 Criteria Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Box 1: Candidate Status & Lineage */}
            <div className="p-3.5 rounded-lg border border-neutral-200 bg-neutral-50/70 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono-code text-neutral-900 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Status & Trajectory</span>
              </div>
              <ul className="text-xs space-y-1 text-neutral-700 font-sans">
                <li><strong className="text-neutral-900 font-mono-code">Citizenship:</strong> Singaporean Citizen</li>
                <li><strong className="text-neutral-900 font-mono-code">Scope:</strong> 16-Year Trajectory (2010—2026)</li>
                <li><strong className="text-neutral-900 font-mono-code">Cities:</strong> Singapore & Toronto</li>
                <li><strong className="text-neutral-900 font-mono-code">Discipline:</strong> Computational Installation</li>
              </ul>
            </div>

            {/* Box 2: Academic & Institutional Anchor */}
            <div className="p-3.5 rounded-lg border border-neutral-200 bg-neutral-50/70 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono-code text-blue-900 font-bold">
                <Building className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Academic & Studio Lineage</span>
              </div>
              <ul className="text-xs space-y-1 text-neutral-700 font-sans">
                <li><strong className="text-neutral-900 font-mono-code">Primary:</strong> SIT Applied Computing (Hons)</li>
                <li><strong className="text-neutral-900 font-mono-code">AI & Data:</strong> NTU PACE (Advanced Cert in AI)</li>
                <li><strong className="text-neutral-900 font-mono-code">Studio Lineage:</strong> Akin Collective · Motion & Still · Flick the Switch</li>
                <li><strong className="text-neutral-900 font-mono-code">Foundry & Sculpture:</strong> OCAD University (Bronze Casting & Material Practice)</li>
              </ul>
            </div>

            {/* Box 3: Technical Feasibility & De-risking */}
            <div className="p-3.5 rounded-lg border border-neutral-200 bg-neutral-50/70 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono-code text-cyan-900 font-bold">
                <ShieldCheck className="w-4 h-4 text-cyan-700 shrink-0" />
                <span>Facility & Structural De-risking</span>
              </div>
              <ul className="text-xs space-y-1 text-neutral-700 font-sans">
                <li><strong className="text-neutral-900 font-mono-code">Footprint:</strong> 100—140 sqm light-sealed black box</li>
                <li><strong className="text-neutral-900 font-mono-code">Power:</strong> 1× 3-Phase 32A industrial feed</li>
                <li><strong className="text-neutral-900 font-mono-code">Inference:</strong> 100% on-premise sovereign GPUs</li>
                <li><strong className="text-neutral-900 font-mono-code">Privacy:</strong> Air-gapped (Zero cloud egress)</li>
              </ul>
            </div>

            {/* Box 4: Verified Scale & Referees */}
            <div className="p-3.5 rounded-lg border border-neutral-200 bg-neutral-50/70 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono-code text-purple-900 font-bold">
                <Award className="w-4 h-4 text-purple-700 shrink-0" />
                <span>Scale Proof & Referees</span>
              </div>
              <ul className="text-xs space-y-1 text-neutral-700 font-sans">
                <li><strong className="text-neutral-900 font-mono-code">Audience:</strong> 18,400+ public participants (MTCC)</li>
                <li><strong className="text-neutral-900 font-mono-code">NAC Link:</strong> Noise Singapore Festival (2011/12)</li>
                <li><strong className="text-neutral-900 font-mono-code">Facility:</strong> Motion and Still Inc. (10-yr studio)</li>
                <li><strong className="text-neutral-900 font-mono-code">Lineage:</strong> S. Stewart (Ref) · Akin (#LOVELOCAL)</li>
              </ul>
            </div>

          </div>

          {/* Curatorial Narrative & Proposal Linkage */}
          <div className="border-t border-neutral-200 pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1 max-w-3xl">
              <div className="text-[11px] font-mono-code text-neutral-500 uppercase tracking-wider font-semibold">
                Future Work & Research Proposal Context:
              </div>
              <p className="text-xs text-neutral-700 font-serif-display leading-relaxed">
                Candidate proposes <span className="font-bold text-neutral-900">“The Riemann Manifold: Quantum Chaos & Spectral Topology”</span> (live open-source repository: <code className="text-blue-700 font-mono-code font-bold">evecount/riemann_hypothesis</code>), in direct dialogue with curatorial inquiries on the <em>Beyond Human & Interdependence</em> by investigating non-human cosmic infrastructure, prime harmonics along the critical strip Re(s) = 1/2, and human-AI co-creation as two sides of the same coin.
              </p>
            </div>

            {/* Direct Routing Links */}
            <div className="flex flex-wrap items-center gap-2 font-mono-code text-xs shrink-0">
              {onNavigateToTab && (
                <>
                  <button
                    onClick={() => onNavigateToTab('sam-residency')}
                    className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 rounded font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Read Proposal Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigateToTab('cv')}
                    className="px-3 py-1.5 bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 rounded font-medium transition-colors cursor-pointer"
                  >
                    <span>Verify Art CV</span>
                  </button>
                </>
              )}

              {onOpenAppliedPractice && (
                <button
                  onClick={onOpenAppliedPractice}
                  className="px-2.5 py-1.5 text-neutral-600 hover:text-neutral-900 underline transition-colors cursor-pointer"
                >
                  Studio Lineage Archive
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
