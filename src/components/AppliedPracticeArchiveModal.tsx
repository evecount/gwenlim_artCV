import React from 'react';
import { APPLIED_PRACTICE_ARCHIVE } from '../data/portfolioData';

interface AppliedPracticeArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewArtwork: (artworkId: string) => void;
}

export const AppliedPracticeArchiveModal: React.FC<AppliedPracticeArchiveModalProps> = ({
  isOpen,
  onClose,
  onViewArtwork
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center p-4 sm:p-6 lg:p-8">
      <div
        className="relative w-full max-w-4xl bg-white border border-neutral-300 rounded-xl shadow-2xl my-auto text-neutral-900 overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div>
            <span className="text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest block font-semibold">
              Archived Production Retrospective · Phase 2 Vault
            </span>
            <h3 className="text-lg font-serif-display font-bold text-neutral-950">
              Applied Practice ({APPLIED_PRACTICE_ARCHIVE.era}) · {APPLIED_PRACTICE_ARCHIVE.entity}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Close archive modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Curatorial Framing of the Studio Chapter */}
          <div className="p-5 bg-neutral-50 border border-neutral-250 rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono-code text-amber-800 uppercase tracking-widest block font-bold">
                Curatorial Context: Spatial Leadership & Material Mastery
              </span>
              <span className="text-[10px] font-mono-code text-neutral-700 bg-neutral-200/80 px-2 py-0.5 border border-neutral-300 rounded font-medium">
                2014 — 2023 Archive
              </span>
            </div>
            
            <div className="text-sm font-serif-display text-neutral-800 leading-relaxed whitespace-pre-line">
              {APPLIED_PRACTICE_ARCHIVE.framingStatement}
            </div>

            {/* Strategic Pillars for SAM Jury */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs font-sans">
              <div className="p-3 bg-white border border-neutral-200 rounded-lg space-y-1 shadow-2xs">
                <span className="font-mono-code text-[11px] text-amber-800 font-bold block">
                  1. Operational Scale & Physics
                </span>
                <p className="text-neutral-600 text-[11px] leading-relaxed">
                  Directing sets, 3-phase 32A power grids, multi-camera pipelines, and large budget administration validates end-to-end execution of complex physical installations.
                </p>
              </div>

              <div className="p-3 bg-white border border-neutral-200 rounded-lg space-y-1 shadow-2xs">
                <span className="font-mono-code text-[11px] text-sky-800 font-bold block">
                  2. Bounded Historic Chapter
                </span>
                <p className="text-neutral-600 text-[11px] leading-relaxed">
                  Explicitly delineated as a 2014–2023 studio chapter. Bounded production history with archival reels, tech sheets, and stills available upon request.
                </p>
              </div>

              <div className="p-3 bg-white border border-neutral-200 rounded-lg space-y-1 shadow-2xs">
                <span className="font-mono-code text-[11px] text-emerald-800 font-bold block">
                  3. Physical Nexus for Mutual Aid
                </span>
                <p className="text-neutral-600 text-[11px] leading-relaxed">
                  The daylight studio at 90 Ontario served as physical infrastructure to host Sofar Sounds, donate gear to Charles Street Video, and redistribute staging to shelters.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Case Studies in Commercial Direction */}
          <div className="space-y-4">
            <div className="text-xs font-mono-code uppercase tracking-widest text-neutral-600 font-semibold">
              Archived Commercial Directing & Technical Pipelines
            </div>

            <div className="space-y-4">
              {APPLIED_PRACTICE_ARCHIVE.projects.map(proj => (
                <div
                  key={proj.id}
                  className="p-5 bg-white border border-neutral-250 rounded-lg space-y-3 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200 pb-2">
                    <h4 className="text-base font-serif-display font-bold text-neutral-950">
                      {proj.title}
                    </h4>
                    <span className="text-xs font-mono-code text-neutral-600 font-medium">
                      {proj.years} · {proj.clientSector}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-code">
                    <div>
                      <span className="text-neutral-500 block text-[10px] uppercase font-semibold">
                        Cinematography & Lighting Rig:
                      </span>
                      <span className="text-neutral-800">{proj.cinematographyRig}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10px] uppercase font-semibold">
                        Physics & Pipeline Focus:
                      </span>
                      <span className="text-neutral-800">{proj.technicalFocus}</span>
                    </div>
                  </div>

                  {/* Direct Lineage to Art Practice */}
                  <div className="p-3 bg-neutral-50 border border-neutral-200 rounded text-xs font-mono-code">
                    <span className="text-amber-800 font-bold mr-2">Trajectory Lineage:</span>
                    <span className="text-neutral-700">{proj.relevanceToArtisticTrajectory}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Separation Guarantee */}
          <div className="p-4 bg-neutral-100 border border-neutral-250 rounded text-xs font-mono-code text-neutral-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>Primary dossier remains strictly focused on autonomous artistic inquiry.</span>
            <button
              onClick={onClose}
              className="text-neutral-950 font-bold hover:underline text-left cursor-pointer"
            >
              Return to Pure Art Dossier →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
