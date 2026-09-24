import React, { useState } from 'react';
import { TRAJECTORY_MILESTONES, TrajectoryMilestone } from '../data/timelineData';
import { ArrowUpRight, Calendar, MapPin, Building2, Wrench, Sparkles, Filter } from 'lucide-react';

interface CleanTimelineProps {
  onSelectArtworkById?: (id: string) => void;
  onOpenAppliedPractice?: () => void;
}

export const CleanTimeline: React.FC<CleanTimelineProps> = ({
  onSelectArtworkById,
  onOpenAppliedPractice
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const filtered = TRAJECTORY_MILESTONES.filter(m => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'artworks') return m.category === 'artwork';
    if (filterCategory === 'studios') return m.category === 'studio-infrastructure';
    if (filterCategory === 'computation') return m.category === 'computational-research' || m.category === 'hardware-rig';
    return true;
  });

  const sortedMilestones = [...filtered].sort((a, b) => {
    return sortOrder === 'desc' ? b.year - a.year : a.year - b.year;
  });

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-neutral-300">
        <div>
          <span className="text-xs font-mono-code uppercase tracking-widest text-neutral-500 font-semibold block mb-1">
            Chronological Trajectory · 2010 — 2026
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-neutral-950">
            Timeline of Practice
          </h2>
          <p className="text-xs text-neutral-600 font-mono-code mt-1">
            A continuous record of installations, studio residencies, physical computing, and research milestones.
          </p>
        </div>

        {/* Minimal Controls: Chronology Order & Optional Filter */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code">
          <div className="flex items-center bg-white border border-neutral-300 rounded-lg p-0.5 shadow-xs">
            <button
              onClick={() => setSortOrder('desc')}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                sortOrder === 'desc'
                  ? 'bg-neutral-950 text-white font-semibold'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              2026 → 2010
            </button>
            <button
              onClick={() => setSortOrder('asc')}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                sortOrder === 'asc'
                  ? 'bg-neutral-950 text-white font-semibold'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              2010 → 2026
            </button>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-2.5 py-1 rounded-lg border text-[11px] transition-colors cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-neutral-900 text-white border-neutral-900 font-medium'
                  : 'bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilterCategory('artworks')}
              className={`px-2.5 py-1 rounded-lg border text-[11px] transition-colors cursor-pointer ${
                filterCategory === 'artworks'
                  ? 'bg-neutral-900 text-white border-neutral-900 font-medium'
                  : 'bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              Artworks & Plates
            </button>
          </div>
        </div>
      </div>

      {/* Clean Vertical Timeline Stream */}
      <div className="relative border-l-2 border-neutral-300 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
        {sortedMilestones.map((milestone) => {
          const isArtwork = !!milestone.associatedArtworkId;

          return (
            <div key={milestone.id} className="relative group">
              {/* Timeline node circle */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                isArtwork
                  ? 'bg-cyan-500 border-black ring-4 ring-cyan-100'
                  : 'bg-white border-neutral-700 ring-2 ring-neutral-200'
              }`} />

              {/* Milestone Content Card */}
              <div className="bg-white border border-neutral-250 hover:border-neutral-400 p-5 rounded-xl shadow-xs transition-all space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-neutral-950 text-white text-[11px] font-mono-code font-bold rounded">
                      {milestone.year}
                    </span>
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-neutral-500">
                      {milestone.categoryLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono-code">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    <span>{milestone.location}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-serif-display font-medium text-neutral-950">
                    {milestone.title}
                  </h3>
                  <div className="text-xs font-mono-code text-neutral-600 mt-0.5">
                    {milestone.venueOrContext} · <span className="text-neutral-500 italic">{milestone.role}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
                  {milestone.summary}
                </p>

                {/* Technical / Medium specs */}
                {milestone.technicalDossier && milestone.technicalDossier.length > 0 && (
                  <div className="pt-2 border-t border-neutral-150 flex flex-wrap gap-1.5">
                    {milestone.technicalDossier.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-[10px] font-mono-code rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {/* Direct Action Link (if artwork plate exists or applied practice) */}
                <div className="pt-2 flex items-center justify-between">
                  {milestone.associatedArtworkId && onSelectArtworkById ? (
                    <button
                      onClick={() => onSelectArtworkById(milestone.associatedArtworkId!)}
                      className="px-3 py-1.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-mono-code rounded flex items-center gap-1.5 font-medium transition-colors cursor-pointer"
                    >
                      <span>View Artwork & Plate</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  ) : milestone.associatedLinkType === 'applied-practice' && onOpenAppliedPractice ? (
                    <button
                      onClick={onOpenAppliedPractice}
                      className="text-xs font-mono-code text-neutral-600 hover:text-neutral-950 underline underline-offset-4 cursor-pointer"
                    >
                      View Applied Practice Archive →
                    </button>
                  ) : (
                    <span className="text-[11px] font-mono-code text-neutral-400 italic">
                      Institutional Record
                    </span>
                  )}

                  <span className="text-[10px] font-mono-code text-neutral-400">
                    {milestone.significance.split(';')[0]}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
