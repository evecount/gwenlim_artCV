import React from 'react';
import { FileText } from 'lucide-react';
import { ARTIST_INFO, RESEARCH_AND_INSTITUTIONAL_AFFILIATIONS, TECHNICAL_CAPABILITIES } from '../data/portfolioData';
import { CuratorialAtAGlanceCard } from './CuratorialAtAGlanceCard';

interface HeroStatementProps {
  onExploreWorks: () => void;
  onExploreSam: () => void;
  onOpenAppliedPractice?: () => void;
  onExploreTimeline?: () => void;
  onOpenPdfModal?: () => void;
  onNavigateToTab?: (tab: 'statement' | 'works' | 'timeline' | 'cv' | 'sam-residency') => void;
}

export const HeroStatement: React.FC<HeroStatementProps> = ({
  onExploreWorks,
  onExploreSam,
  onOpenAppliedPractice,
  onExploreTimeline,
  onOpenPdfModal,
  onNavigateToTab
}) => {
  return (
    <section className="pt-10 pb-16 border-b border-neutral-250 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Lead Artist Statement & Conceptual Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono-code uppercase tracking-widest text-neutral-600 font-semibold">
              Artist & Research Profile · Singapore
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-neutral-950 leading-[1.18] tracking-tight">
              Optics, observer bias, human-system interdependence, and computational ecology.
            </h1>
            <div className="text-base sm:text-lg font-serif-display text-neutral-800 leading-relaxed max-w-3xl space-y-4 whitespace-pre-line">
              {ARTIST_INFO.statement}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono-code">
              <button
                onClick={onExploreWorks}
                className="px-4 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold rounded transition-colors cursor-pointer shadow-sm"
              >
                Inspect Selected Works (2010 — 2026)
              </button>
              {onExploreTimeline && (
                <button
                  onClick={onExploreTimeline}
                  className="px-4 py-2.5 bg-white hover:bg-neutral-50 text-cyan-800 border border-cyan-700/40 rounded transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse" />
                  <span>16-Year Trajectory Scrubber</span>
                </button>
              )}
              <button
                onClick={onExploreSam}
                className="px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 rounded transition-colors cursor-pointer flex items-center gap-2 shadow-xs font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                Future Work & Proposal View
              </button>
              {onOpenPdfModal && (
                <button
                  onClick={onOpenPdfModal}
                  className="px-4 py-2.5 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 rounded transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
                  title="Generate clean, formatted PDF dossier with statement & institutional CV"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Curatorial PDF Dossier</span>
                </button>
              )}
            </div>
          </div>

          {/* Institutional Credentials & Affiliations Panel */}
          <div className="lg:col-span-5 bg-white border border-neutral-250 rounded-lg p-5 sm:p-6 space-y-4 text-xs font-mono-code shadow-xs">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-2 font-semibold">
                Research & Institutional Affiliations
              </span>
              <div className="space-y-3">
                {RESEARCH_AND_INSTITUTIONAL_AFFILIATIONS.map(aff => (
                  <div key={aff.id} className="border-l-2 border-neutral-900 pl-3">
                    <p className="text-neutral-950 font-semibold leading-snug">
                      {aff.title}
                    </p>
                    <p className="text-neutral-600 text-[11px] mt-0.5">
                      {aff.organization} ({aff.location})
                    </p>
                    {aff.details && aff.details[0] && (
                      <p className="text-neutral-500 text-[10px] mt-0.5 font-sans">
                        {aff.details[0]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-3">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-1.5 font-semibold">
                Technical Capabilities & Material Mediums
              </span>
              <div className="flex flex-wrap gap-1">
                {TECHNICAL_CAPABILITIES.computationalAndHardware.slice(0, 5).concat(TECHNICAL_CAPABILITIES.spatialAndOpticalMedia.slice(0, 3)).map((cap, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 bg-neutral-100 border border-neutral-250 text-neutral-800 rounded"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Studio Practice & Spatial Interdependence (2011–2024 Lineage) */}
            <div className="border-t border-neutral-200 pt-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-neutral-800 font-bold uppercase tracking-wider block">
                  Studio Lineage & Spatial Interdependence (2011–2024)
                </span>
                <span className="text-[10px] text-neutral-600 bg-neutral-100 border border-neutral-250 px-1.5 py-0.5 rounded">
                  Grassroots Continuum
                </span>
              </div>
              <p className="text-[11px] text-neutral-750 font-serif-display leading-relaxed">
                “My commitment to spatial interdependence began within Toronto’s grassroots artist-run ecosystem—joining my first art collective, Akin Collective (founded by Oliver Pauk), in the early 2010s, where we collaborated to hold the #LOVELOCAL community showcase and fabricated Two-Man Rule. This directly informed my subsequent decade directing independent daylight studios (Motion and Still), hosting community salons, and providing pro bono media resources for local artist collectives like Flick the Switch.”
              </p>
              <div className="flex items-center justify-between pt-1 text-[10px]">
                <span className="text-neutral-500 italic">
                  Akin Collective (2011–15) → Motion & Still (2014–23) → Flick the Switch (2019–24)
                </span>
                {onOpenAppliedPractice && (
                  <button
                    onClick={onOpenAppliedPractice}
                    className="text-neutral-900 hover:text-neutral-600 underline font-mono-code cursor-pointer font-medium"
                  >
                    View Studio Retrospective →
                  </button>
                )}
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-3 flex items-center justify-between text-[11px] text-neutral-500">
              <span>Dossier Scope: Contemporary Art & Research</span>
              <span className="text-neutral-700 font-medium">2010 — 2026 Archive</span>
            </div>
          </div>
        </div>

        {/* 4 Research Vectors / Chronological Epochs */}
        <div className="pt-6 border-t border-neutral-250">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-mono-code uppercase tracking-widest text-neutral-600 font-semibold">
              Research Vectors & Trajectory Milestones (2010 — 2026)
            </div>
            {onExploreTimeline && (
              <button
                onClick={onExploreTimeline}
                className="text-xs font-mono-code text-cyan-700 hover:text-cyan-900 font-semibold underline cursor-pointer flex items-center gap-1"
              >
                <span>Scrub Complete 16-Year Timeline</span>
                <span>→</span>
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ARTIST_INFO.researchVectors.map((v, i) => (
              <div
                key={v.id}
                className="p-4 bg-white border border-neutral-250 rounded hover:border-neutral-400 shadow-xs transition-colors"
              >
                <div className="flex items-center justify-between text-[10px] font-mono-code text-neutral-500 mb-2">
                  <span className="font-bold text-neutral-900">0{i + 1}.</span>
                  <span className="text-neutral-600 font-medium">{v.epoch}</span>
                </div>
                <h2 className="text-sm font-serif-display font-bold text-neutral-950 mb-2">
                  {v.title}
                </h2>
                <p className="text-xs text-neutral-700 font-sans leading-relaxed">
                  {v.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Curatorial At-a-Glance Institutional Evaluation Card (Contextual Rubric for Institutional Jurors) */}
        <div className="pt-4 border-t border-neutral-250">
          <CuratorialAtAGlanceCard
            onNavigateToTab={onNavigateToTab || ((tab) => {
              if (tab === 'works') onExploreWorks();
              else if (tab === 'sam-residency') onExploreSam();
              else if (tab === 'timeline' && onExploreTimeline) onExploreTimeline();
            })}
            onOpenPdfModal={onOpenPdfModal ? () => onOpenPdfModal() : undefined}
            onOpenAppliedPractice={onOpenAppliedPractice}
          />
        </div>

      </div>
    </section>
  );
};
