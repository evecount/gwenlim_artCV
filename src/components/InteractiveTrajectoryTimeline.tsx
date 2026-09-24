import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  TRAJECTORY_MILESTONES,
  TRAJECTORY_EPOCHS,
  TrajectoryMilestone,
  TrajectoryCategory,
  TrajectoryEpoch
} from '../data/timelineData';

interface InteractiveTrajectoryTimelineProps {
  onSelectArtworkById?: (id: string) => void;
  onOpenAppliedPractice?: () => void;
  onNavigateToTab?: (tab: 'statement' | 'works' | 'timeline' | 'cv' | 'sam-residency') => void;
}

export const InteractiveTrajectoryTimeline: React.FC<InteractiveTrajectoryTimelineProps> = ({
  onSelectArtworkById,
  onOpenAppliedPractice,
  onNavigateToTab
}) => {
  const [activeCategory, setActiveCategory] = useState<TrajectoryCategory | 'all'>('all');
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(4500); // ms per step
  const scrubberTrackRef = useRef<HTMLDivElement>(null);
  const milestoneListRef = useRef<HTMLDivElement>(null);

  // Filtered milestones based on selected category
  const filteredMilestones = useMemo(() => {
    if (activeCategory === 'all') return TRAJECTORY_MILESTONES;
    return TRAJECTORY_MILESTONES.filter(m => m.category === activeCategory);
  }, [activeCategory]);

  // Keep index valid when category filter changes
  useEffect(() => {
    setActiveMilestoneIndex(0);
  }, [activeCategory]);

  const currentMilestone: TrajectoryMilestone = filteredMilestones[activeMilestoneIndex] || filteredMilestones[0];

  // Identify current epoch based on active milestone year
  const currentEpoch: TrajectoryEpoch = useMemo(() => {
    const year = currentMilestone?.year || 2010;
    return (
      TRAJECTORY_EPOCHS.find(e => year >= e.startYear && year <= e.endYear) ||
      TRAJECTORY_EPOCHS[0]
    );
  }, [currentMilestone]);

  // Automated playback / scrub tour
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveMilestoneIndex(prev => {
        if (prev >= filteredMilestones.length - 1) {
          return 0; // loop back to beginning
        }
        return prev + 1;
      });
    }, playbackSpeed);

    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, filteredMilestones.length]);

  // Keyboard navigation (Arrow keys, Space for play/pause)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid intercepting if user is in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        setIsPlaying(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredMilestones.length]);

  const handleNext = () => {
    setActiveMilestoneIndex(prev => (prev < filteredMilestones.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveMilestoneIndex(prev => (prev > 0 ? prev - 1 : filteredMilestones.length - 1));
  };

  // Jump to specific milestone by ID
  const handleSelectMilestone = (id: string) => {
    const idx = filteredMilestones.findIndex(m => m.id === id);
    if (idx !== -1) {
      setActiveMilestoneIndex(idx);
    }
  };

  // Jump to specific year or epoch
  const handleJumpToEpoch = (epoch: TrajectoryEpoch) => {
    const targetIdx = filteredMilestones.findIndex(
      m => m.year >= epoch.startYear && m.year <= epoch.endYear
    );
    if (targetIdx !== -1) {
      setActiveMilestoneIndex(targetIdx);
    }
  };

  const handleYearScrub = (year: number) => {
    // Find closest milestone to this year
    let closestIdx = 0;
    let minDiff = 999;
    filteredMilestones.forEach((m, idx) => {
      const diff = Math.abs(m.year - year);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });
    setActiveMilestoneIndex(closestIdx);
  };

  // Scroll active milestone strip card into view
  useEffect(() => {
    if (milestoneListRef.current) {
      const activeCard = milestoneListRef.current.children[activeMilestoneIndex] as HTMLElement;
      if (activeCard) {
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeMilestoneIndex]);

  const categories: { key: TrajectoryCategory | 'all'; label: string; count: number }[] = [
    { key: 'all', label: 'All Trajectory Tracks', count: TRAJECTORY_MILESTONES.length },
    {
      key: 'artwork',
      label: 'Artworks & Installations',
      count: TRAJECTORY_MILESTONES.filter(m => m.category === 'artwork').length
    },
    {
      key: 'hardware-rig',
      label: 'Physical Computing & Rigs',
      count: TRAJECTORY_MILESTONES.filter(m => m.category === 'hardware-rig').length
    },
    {
      key: 'studio-infrastructure',
      label: 'Studio & Collective Space',
      count: TRAJECTORY_MILESTONES.filter(m => m.category === 'studio-infrastructure').length
    },
    {
      key: 'computational-research',
      label: 'AI & Frontier Computation',
      count: TRAJECTORY_MILESTONES.filter(m => m.category === 'computational-research').length
    },
    {
      key: 'civic-advocacy',
      label: 'Civic & Mutual Aid',
      count: TRAJECTORY_MILESTONES.filter(m => m.category === 'civic-advocacy').length
    }
  ];

  // Distinct year markers for scrubber
  const timelineYears = [2010, 2011, 2012, 2013, 2014, 2015, 2018, 2019, 2020, 2023, 2024, 2026];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-fadeIn">
      {/* 1. Header & Scrubber Overview */}
      <div className="border-b border-neutral-250 pb-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-ping inline-block" />
              <span className="text-[11px] font-mono-code uppercase tracking-widest text-cyan-700 font-bold">
                Chronological System Scrubber · 16-Year Trajectory
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif-display font-bold tracking-tight text-neutral-950">
              Career Trajectory & Research Arc (2010 — 2026)
            </h1>
            <p className="text-sm text-neutral-700 max-w-3xl mt-2 font-serif-display leading-relaxed">
              Scrub through sixteen years of creative and computational inquiry: from street-level unannounced optics and hacked DSLR hardware in Toronto’s artist-run centers, through a decade of daylight spatial facilities, to zero-knowledge neural architectures and quantum systems in Singapore.
            </p>
          </div>

          {/* Quick Institutional Stats Pill */}
          <div className="flex flex-wrap items-center gap-2 font-mono-code text-[11px] text-neutral-700 bg-neutral-100 border border-neutral-250 p-2.5 rounded-lg max-w-fit shadow-2xs">
            <span>
              <strong className="text-neutral-950">16</strong> Years
            </span>
            <span className="text-neutral-300">|</span>
            <span>
              <strong className="text-neutral-950">{TRAJECTORY_MILESTONES.length}</strong> Milestones
            </span>
            <span className="text-neutral-300">|</span>
            <span>
              <strong className="text-neutral-950">5</strong> Epochs
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-cyan-800 font-medium">Singapore · Toronto</span>
          </div>
        </div>

        {/* 2. Epoch Navigation Tabs */}
        <div className="space-y-1.5 pt-2">
          <span className="text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest block font-semibold">
            Select Research Epoch:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {TRAJECTORY_EPOCHS.map(epoch => {
              const isCurrent = currentEpoch.id === epoch.id;
              return (
                <button
                  key={epoch.id}
                  onClick={() => handleJumpToEpoch(epoch)}
                  className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                      : 'bg-white border-neutral-250 hover:border-neutral-400 hover:bg-neutral-50 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono-code mb-1">
                    <span className={isCurrent ? 'text-cyan-400 font-bold' : 'text-neutral-500 font-semibold'}>
                      {epoch.period}
                    </span>
                    {isCurrent && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    )}
                  </div>
                  <h4 className={`text-xs font-serif-display font-bold line-clamp-1 ${
                    isCurrent ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {epoch.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Main Interactive Scrubber Control Board (Dark Instrument Plate) */}
      <div className="bg-[#0c0c0e] border border-neutral-800 rounded-xl p-5 sm:p-6 space-y-6 shadow-xl text-neutral-100">
        
        {/* Top Control Bar: Scrub Player + Step Buttons + Speed */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800/80 pb-4">
          <div className="flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(prev => !prev)}
              className={`px-3.5 py-1.5 text-xs font-mono-code uppercase rounded flex items-center gap-2 border transition-all cursor-pointer ${
                isPlaying
                  ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                  : 'bg-neutral-900 border-neutral-700 text-neutral-200 hover:bg-neutral-800 hover:border-neutral-600'
              }`}
              title="Toggle automatic timeline tour (Spacebar)"
            >
              {isPlaying ? (
                <>
                  <span className="w-2 h-2 rounded-sm bg-cyan-400" />
                  <span>Pause Tour</span>
                </>
              ) : (
                <>
                  <span className="text-xs">▶</span>
                  <span>Auto-Play Tour</span>
                </>
              )}
            </button>

            {/* Stepper Controls */}
            <div className="flex items-center gap-1 bg-neutral-900/90 border border-neutral-800 rounded p-1">
              <button
                onClick={handlePrev}
                className="px-2.5 py-1 text-xs font-mono-code text-neutral-300 hover:text-white hover:bg-neutral-800 rounded transition-colors cursor-pointer"
                title="Previous Milestone (← Arrow Key)"
              >
                ← Prev
              </button>
              <span className="text-[10px] font-mono-code text-neutral-500 px-1">
                {activeMilestoneIndex + 1} / {filteredMilestones.length}
              </span>
              <button
                onClick={handleNext}
                className="px-2.5 py-1 text-xs font-mono-code text-neutral-300 hover:text-white hover:bg-neutral-800 rounded transition-colors cursor-pointer"
                title="Next Milestone (→ Arrow Key)"
              >
                Next →
              </button>
            </div>

            {/* Speed Selector (if playing) */}
            {isPlaying && (
              <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono-code text-neutral-400">
                <span>Speed:</span>
                <button
                  onClick={() => setPlaybackSpeed(3000)}
                  className={`px-1.5 py-0.5 rounded ${playbackSpeed === 3000 ? 'bg-cyan-900/60 text-cyan-300' : 'text-neutral-500'}`}
                >
                  3s
                </button>
                <button
                  onClick={() => setPlaybackSpeed(4500)}
                  className={`px-1.5 py-0.5 rounded ${playbackSpeed === 4500 ? 'bg-cyan-900/60 text-cyan-300' : 'text-neutral-500'}`}
                >
                  4.5s
                </button>
                <button
                  onClick={() => setPlaybackSpeed(6000)}
                  className={`px-1.5 py-0.5 rounded ${playbackSpeed === 6000 ? 'bg-cyan-900/60 text-cyan-300' : 'text-neutral-500'}`}
                >
                  6s
                </button>
              </div>
            )}
          </div>

          {/* Quick Year Jump Chips */}
          <div className="flex items-center flex-wrap gap-1">
            <span className="text-[10px] font-mono-code text-neutral-500 uppercase mr-1 font-semibold">
              Scrub Year:
            </span>
            {timelineYears.map(yr => {
              const isActiveYear = currentMilestone.year === yr;
              return (
                <button
                  key={yr}
                  onClick={() => handleYearScrub(yr)}
                  className={`px-2 py-0.5 text-[11px] font-mono-code rounded border transition-colors cursor-pointer ${
                    isActiveYear
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                      : 'bg-neutral-900/70 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                  }`}
                >
                  {yr}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono-code">
          <span className="text-[10px] text-neutral-500 uppercase tracking-wider mr-1 whitespace-nowrap font-semibold">
            Stream:
          </span>
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-2.5 py-1 rounded border transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-neutral-100 text-neutral-950 font-bold border-white'
                  : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-neutral-200 hover:border-neutral-700'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Continuous Horizontal Timeline Scrubber Strip */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-[10px] font-mono-code text-neutral-400 px-1">
            <span>2010 · Toronto Street Intervention</span>
            <span className="text-cyan-300 font-bold tracking-wider">
              {currentMilestone.yearDisplay} // {currentMilestone.title}
            </span>
            <span>2026 · Singapore SAM Candidate</span>
          </div>

          {/* Interactive Visual Scrubber Track */}
          <div
            ref={scrubberTrackRef}
            className="relative h-12 bg-neutral-950 border border-neutral-800/90 rounded-lg flex items-center px-4 overflow-hidden select-none cursor-pointer"
            onClick={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const ratio = Math.max(0, Math.min(1, clickX / rect.width));
              const targetIndex = Math.floor(ratio * filteredMilestones.length);
              setActiveMilestoneIndex(Math.min(targetIndex, filteredMilestones.length - 1));
            }}
          >
            {/* Background progress fill */}
            <div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-cyan-950/40 via-cyan-900/30 to-cyan-500/20 transition-all duration-300 pointer-events-none"
              style={{
                width: `${((activeMilestoneIndex + 1) / filteredMilestones.length) * 100}%`
              }}
            />

            {/* Central Guideline */}
            <div className="absolute left-4 right-4 h-0.5 bg-neutral-800 top-1/2 -translate-y-1/2" />

            {/* Individual Milestone Marker Nodes */}
            <div className="relative z-10 w-full flex items-center justify-between">
              {filteredMilestones.map((m, idx) => {
                const isActive = idx === activeMilestoneIndex;
                const isPast = idx < activeMilestoneIndex;
                return (
                  <button
                    key={m.id}
                    onClick={e => {
                      e.stopPropagation();
                      setActiveMilestoneIndex(idx);
                    }}
                    className="relative group p-1 -m-1 focus:outline-none cursor-pointer"
                    title={`${m.yearDisplay}: ${m.title}`}
                  >
                    {/* Node Dot */}
                    <div
                      className={`transition-all duration-200 rounded-full flex items-center justify-center ${
                        isActive
                          ? 'w-5 h-5 bg-cyan-400 border-2 border-white shadow-[0_0_12px_rgba(6,182,212,0.8)] scale-125'
                          : isPast
                          ? 'w-2.5 h-2.5 bg-cyan-600/70 hover:scale-125'
                          : 'w-2 h-2 bg-neutral-700 hover:bg-neutral-500 hover:scale-125'
                      }`}
                    />

                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-30 pointer-events-none">
                      <div className="bg-neutral-900 border border-neutral-700 text-neutral-200 text-[10px] font-mono-code px-2 py-1 rounded shadow-lg whitespace-nowrap">
                        {m.year}: {m.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. Active Milestone Deep-Dive Feature Card (Dark Plate Surface) */}
        {currentMilestone && (
          <div className="border border-neutral-800 bg-[#09090b] rounded-lg p-6 space-y-6 transition-all">
            
            {/* Meta Top Line */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-neutral-800 pb-4">
              <div className="space-y-1.5">
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-2xl sm:text-3xl font-mono-code font-bold text-neutral-100 tracking-tight">
                    {currentMilestone.yearDisplay}
                  </span>
                  <span className={`text-[10px] font-mono-code uppercase px-2.5 py-0.5 rounded border ${currentMilestone.badgeColor}`}>
                    {currentMilestone.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono-code text-neutral-400">
                    Milestone {activeMilestoneIndex + 1} of {filteredMilestones.length}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif-display font-medium text-white tracking-tight">
                  {currentMilestone.title}
                </h2>

                <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-xs font-mono-code text-neutral-400">
                  <span>
                    <strong className="text-neutral-300">Venue / Context:</strong> {currentMilestone.venueOrContext}
                  </span>
                  <span>
                    <strong className="text-neutral-300">Location:</strong> {currentMilestone.location}
                  </span>
                  <span>
                    <strong className="text-neutral-300">Role:</strong> {currentMilestone.role}
                  </span>
                </div>
              </div>

              {/* Action Buttons connected to application modals */}
              <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                {currentMilestone.associatedArtworkId && onSelectArtworkById && (
                  <button
                    onClick={() => onSelectArtworkById(currentMilestone.associatedArtworkId!)}
                    className="px-3 py-1.5 text-xs font-mono-code text-neutral-900 bg-neutral-100 hover:bg-white rounded transition-colors whitespace-nowrap font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>View Artwork Dossier</span>
                    <span>→</span>
                  </button>
                )}

                {currentMilestone.associatedLinkType === 'applied-practice' && onOpenAppliedPractice && (
                  <button
                    onClick={onOpenAppliedPractice}
                    className="px-3 py-1.5 text-xs font-mono-code text-amber-300 bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/50 rounded transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Open Studio Retrospective</span>
                    <span>→</span>
                  </button>
                )}

                {currentMilestone.associatedLinkType === 'sam' && onNavigateToTab && (
                  <button
                    onClick={() => onNavigateToTab('sam-residency')}
                    className="px-3 py-1.5 text-xs font-mono-code text-blue-300 bg-blue-950/40 hover:bg-blue-900/50 border border-blue-500/50 rounded transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>View SAM Proposal</span>
                    <span>→</span>
                  </button>
                )}

                {onNavigateToTab && (
                  <button
                    onClick={() => onNavigateToTab('cv')}
                    className="px-2.5 py-1 text-[11px] font-mono-code text-neutral-400 hover:text-neutral-200 transition-colors underline cursor-pointer"
                  >
                    Inspect in Complete CV
                  </button>
                )}
              </div>
            </div>

            {/* Narrative & Institutional Significance */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Column: Summary & Technical Dossier */}
              <div className="md:col-span-7 space-y-4 font-sans">
                <div>
                  <h4 className="text-[11px] font-mono-code text-neutral-400 uppercase tracking-wider mb-1.5 font-semibold">
                    Contextual Summary:
                  </h4>
                  <p className="text-sm text-neutral-200 leading-relaxed font-serif-display">
                    {currentMilestone.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono-code text-neutral-400 uppercase tracking-wider mb-2 font-semibold">
                    Technical Architecture & Material Components:
                  </h4>
                  <div className="space-y-1.5 font-mono-code text-xs">
                    {currentMilestone.technicalDossier.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2 text-neutral-300">
                        <span className="text-cyan-400 mt-0.5">▪</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: 16-Year Trajectory Significance & Lineage Impact */}
              <div className="md:col-span-5 space-y-4">
                <div className="p-4 bg-neutral-950/80 border border-neutral-800 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono-code text-cyan-400 uppercase tracking-wider font-semibold">
                      Archival & Curatorial Significance
                    </span>
                    <span className="text-[10px] font-mono-code text-neutral-400">
                      Continuity Vector
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                    {currentMilestone.significance}
                  </p>
                </div>

                {/* Epoch Placement */}
                <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded text-xs space-y-1">
                  <span className="text-[10px] font-mono-code text-neutral-400 uppercase block font-semibold">
                    Current Evolutionary Epoch:
                  </span>
                  <p className="font-serif-display text-neutral-100 font-medium text-xs">
                    {currentEpoch.title} ({currentEpoch.period})
                  </p>
                  <p className="text-[11px] text-neutral-400 font-sans leading-tight">
                    {currentEpoch.tagline}
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* 5. Horizontal Multi-Card Timeline Carousel / Strip */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono-code text-neutral-700 font-medium">
          <span>Click any milestone below to scrub directly:</span>
          <span className="text-neutral-500">Showing {filteredMilestones.length} milestones</span>
        </div>

        <div
          ref={milestoneListRef}
          className="flex items-stretch gap-3 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin scrollbar-thumb-neutral-300"
        >
          {filteredMilestones.map((m, idx) => {
            const isActive = idx === activeMilestoneIndex;
            return (
              <div
                key={m.id}
                onClick={() => setActiveMilestoneIndex(idx)}
                className={`snap-center shrink-0 w-64 sm:w-72 p-3.5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between space-y-2 select-none shadow-2xs ${
                  isActive
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-md ring-2 ring-cyan-500/50'
                    : 'bg-white border-neutral-250 hover:border-neutral-400 hover:bg-neutral-50 text-neutral-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono-code mb-1">
                    <span className={isActive ? 'text-cyan-400 font-bold' : 'text-neutral-600 font-bold'}>
                      {m.yearDisplay}
                    </span>
                    <span className={`text-[9px] uppercase px-1.5 py-0.2 rounded border ${
                      isActive ? m.badgeColor : 'border-neutral-300 text-neutral-600 bg-neutral-100'
                    }`}>
                      {m.category}
                    </span>
                  </div>
                  <h4 className={`text-xs font-serif-display font-bold line-clamp-2 leading-snug ${
                    isActive ? 'text-white' : 'text-neutral-950'
                  }`}>
                    {m.title}
                  </h4>
                </div>

                <div className={`border-t pt-2 text-[10px] font-mono-code flex items-center justify-between ${
                  isActive ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
                }`}>
                  <span className="truncate max-w-[140px]">{m.location}</span>
                  <span className={isActive ? 'text-cyan-400 font-semibold' : 'text-neutral-700'}>
                    {isActive ? '● Active' : 'Inspect →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. Strategic Continuity Summary for Curators */}
      <div className="p-6 bg-white border border-neutral-250 rounded-lg space-y-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
          <div>
            <span className="text-[10px] font-mono-code text-cyan-700 uppercase tracking-widest block font-bold">
              16-Year Longitudinal Synthesis · Singapore Art Museum Evaluation
            </span>
            <h3 className="text-base font-serif-display font-bold text-neutral-950 mt-1">
              From Participatory Camera Rigs to Zero-Knowledge Neural Topologies
            </h3>
          </div>
          <span className="text-xs font-mono-code text-neutral-800 bg-neutral-100 border border-neutral-250 px-2.5 py-1 rounded max-w-fit font-medium">
            Unbroken 16-Year Architectural Arc
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
          <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1.5">
            <span className="text-[10px] font-mono-code text-amber-800 uppercase block font-bold">
              Phase I: The Physical Interlock (2010 — 2014)
            </span>
            <p className="text-neutral-700 leading-relaxed">
              Deconstructed the photographic capture mechanism into physical two-operator relays (<em>Two-Man Rule</em>) and tactile CCTV feedback matrices (<em>Broadcast People</em>), questioning solitary autonomy in digital documentation.
            </p>
          </div>

          <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1.5">
            <span className="text-[10px] font-mono-code text-emerald-800 uppercase block font-bold">
              Phase II: Spatial Sanctuaries & Solidarity (2014 — 2024)
            </span>
            <p className="text-neutral-700 leading-relaxed">
              Operated daylight facilities and heavy lighting physics at <em>Motion and Still</em>, while sustaining 5-year longitudinal collective video advocacy at <em>Flick the Switch</em> with Susan Stewart and <em>Akin Collective</em> with Oliver Pauk.
            </p>
          </div>

          <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1.5">
            <span className="text-[10px] font-mono-code text-sky-800 uppercase block font-bold">
              Phase III: Sovereign Neural Topologies (2024 — 2026)
            </span>
            <p className="text-neutral-700 leading-relaxed">
              Grounded sixteen years of hardware and optical inquiry into formal computer science honours at SIT, zero-knowledge non-human syntax (<em>The Klingon Topology</em>), and the SAM candidate proposal <em>The Malayan Topology</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
