import React, { useState, useEffect } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { Artwork, ArchivalStudioPhoto } from '../types/portfolio';
import { ArtworkVisualPlate } from './ArtworkVisualPlate';
import { ClassicalArtworkMosaic } from './ClassicalArtworkMosaic';
import { SystemSchematic } from './SystemSchematic';
import { ArchivalPhotoGrid } from './ArchivalPhotoGrid';
import { ArchivalPhotoLightboxModal } from './ArchivalPhotoLightboxModal';
import { soundEngine } from '../utils/soundEngine';

interface WorkDetailModalProps {
  artwork: Artwork | null;
  allArtworks: Artwork[];
  onClose: () => void;
  onSelectArtwork: (artwork: Artwork) => void;
}

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({
  artwork,
  allArtworks,
  onClose,
  onSelectArtwork
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [visualMode, setVisualMode] = useState<'photos' | 'simulation'>('photos');
  const [activeTab, setActiveTab] = useState<'statement' | 'schematic' | 'technical'>('statement');
  const [selectedArchivalPhoto, setSelectedArchivalPhoto] = useState<ArchivalStudioPhoto | null>(null);
  const [selectedArchivalDisplayUrl, setSelectedArchivalDisplayUrl] = useState<string>('');

  useEffect(() => {
    // Reset audio when artwork changes
    soundEngine.stop();
    setIsPlayingAudio(false);
  }, [artwork]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundEngine.stop();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      soundEngine.stop();
    };
  }, [onClose]);

  if (!artwork) return null;

  const currentIndex = allArtworks.findIndex(a => a.id === artwork.id);
  const prevArtwork = currentIndex > 0 ? allArtworks[currentIndex - 1] : null;
  const nextArtwork = currentIndex < allArtworks.length - 1 ? allArtworks[currentIndex + 1] : null;

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      soundEngine.stop();
      setIsPlayingAudio(false);
    } else {
      const started = soundEngine.playSignature(artwork.soundProfile.type, artwork.soundProfile.freq);
      if (started) {
        setIsPlayingAudio(true);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex justify-center p-3 sm:p-6 lg:p-8">
      <div
        className="relative w-full max-w-5xl bg-white border border-neutral-300 rounded-lg shadow-2xl my-auto text-neutral-900 overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-code text-neutral-500 font-semibold">
              {artwork.accessionId}
            </span>
            <span className="text-neutral-300">·</span>
            <span className="text-xs font-mono-code text-neutral-700">
              {artwork.year} · {artwork.city}
            </span>
            {artwork.year === 2026 && (
              <>
                <span className="text-neutral-300">·</span>
                <span className="text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-[10px] font-mono-code font-bold uppercase">
                  Future Work / Research Proposal
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundEngine.stop();
                window.print();
              }}
              className="px-2.5 py-1 text-xs font-mono-code text-neutral-700 hover:text-neutral-950 border border-neutral-300 hover:border-neutral-400 bg-white rounded transition-colors cursor-pointer shadow-xs"
            >
              Export PDF
            </button>
            <button
              onClick={() => {
                soundEngine.stop();
                onClose();
              }}
              className="p-1.5 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-200 rounded transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-7 max-h-[80vh] overflow-y-auto bg-white">
          {/* Title Lockup */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-neutral-950 tracking-tight">
                  {artwork.title}
                </h2>
                <p className="text-sm font-serif-display italic text-neutral-600 mt-1 max-w-3xl">
                  {artwork.subtitle}
                </p>
              </div>

              {artwork.githubUrl && (
                <a
                  href={artwork.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded text-xs font-mono-code transition-colors shrink-0 shadow-2xs"
                >
                  <Code2 className="w-3.5 h-3.5 text-blue-700" />
                  <span className="font-semibold">GitHub: evecount/riemann_hypothesis</span>
                  <ExternalLink className="w-3 h-3 text-blue-600 opacity-70" />
                </a>
              )}
            </div>

            {/* Studio Lineage & Production Provenance Callout */}
            {artwork.studioLineage && (
              <div className="p-3 bg-neutral-50 border border-neutral-250 rounded-lg flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-500 font-semibold shrink-0">
                    Studio Provenance:
                  </span>
                  <span className="font-mono-code font-semibold text-neutral-900 bg-white border border-neutral-200 px-2 py-0.5 rounded shadow-2xs">
                    {artwork.studioLineage}
                  </span>
                </div>
                {artwork.productionContext && (
                  <p className="text-neutral-600 font-sans text-xs italic">
                    {artwork.productionContext}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Visual Presentation Mode Switcher */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-200 pb-2.5 gap-2">
              <div className="flex items-center gap-1.5 p-1 bg-neutral-100 border border-neutral-250 rounded-lg">
                <button
                  onClick={() => setVisualMode('photos')}
                  className={`px-3 py-1.5 text-xs font-mono-code rounded transition-colors cursor-pointer flex items-center gap-1.5 ${
                    visualMode === 'photos'
                      ? 'bg-neutral-950 text-white font-medium shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  <span>📷 Photographic Documentation</span>
                  <span className="text-[10px] text-neutral-400 font-normal">
                    ({artwork.images?.length || 3} Plates)
                  </span>
                </button>
                <button
                  onClick={() => setVisualMode('simulation')}
                  className={`px-3 py-1.5 text-xs font-mono-code rounded transition-colors cursor-pointer flex items-center gap-1.5 ${
                    visualMode === 'simulation'
                      ? 'bg-neutral-950 text-white font-medium shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  <span>⚡ Interactive Rig Simulation</span>
                </button>
              </div>

              <div className="text-[11px] font-mono-code text-neutral-500">
                {artwork.venue} · {artwork.dimensions}
              </div>
            </div>

            {/* Artwork Plate Container */}
            <div>
              {visualMode === 'photos' ? (
                <div>
                  <ClassicalArtworkMosaic artwork={artwork} />
                  {artwork.archivalPhotos && artwork.archivalPhotos.length > 0 && (
                    <ArchivalPhotoGrid
                      artworkId={artwork.id}
                      artworkTitle={artwork.title}
                      photos={artwork.archivalPhotos}
                      onOpenLightbox={(photo, displayUrl) => {
                        setSelectedArchivalPhoto(photo);
                        setSelectedArchivalDisplayUrl(displayUrl);
                      }}
                    />
                  )}
                </div>
              ) : (
                <div className="bg-black rounded-lg overflow-hidden border border-neutral-800 shadow-md">
                  <ArtworkVisualPlate artwork={artwork} interactive={true} />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-code text-neutral-400 p-2.5 bg-neutral-950 border-t border-neutral-850 gap-2">
                    <span>Interactive Apparatus Telemetry Simulation</span>
                    <span>{artwork.medium}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Acoustic Signature Player ribbon */}
          <div className="p-3 bg-neutral-50 border border-neutral-250 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={handleToggleAudio}
                className={`px-3 py-1.5 text-xs font-mono-code rounded font-medium flex items-center gap-2 cursor-pointer transition-colors shadow-xs ${
                  isPlayingAudio
                    ? 'bg-amber-500 text-black animate-pulse font-bold'
                    : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                }`}
              >
                <span>{isPlayingAudio ? '■ Stop Audio' : '▶ Play Acoustic Signature'}</span>
              </button>
              <div className="text-xs font-mono-code text-neutral-700">
                <span className="text-neutral-900 font-semibold">{artwork.soundProfile.freq}Hz signature</span>
                <span className="text-neutral-300 mx-2">·</span>
                <span>{artwork.soundProfile.description}</span>
              </div>
            </div>
            <span className="text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest shrink-0 font-medium">
              Web Audio Synthesizer
            </span>
          </div>

          {/* Tab Navigation for Detailed Inquiries */}
          <div className="border-b border-neutral-200 flex gap-6 text-xs font-mono-code uppercase tracking-wider text-neutral-600">
            <button
              onClick={() => setActiveTab('statement')}
              className={`pb-2.5 transition-colors cursor-pointer ${
                activeTab === 'statement'
                  ? 'text-neutral-950 border-b-2 border-neutral-950 font-bold'
                  : 'hover:text-neutral-950'
              }`}
            >
              Curatorial Thesis
            </button>
            <button
              onClick={() => setActiveTab('schematic')}
              className={`pb-2.5 transition-colors cursor-pointer ${
                activeTab === 'schematic'
                  ? 'text-neutral-950 border-b-2 border-neutral-950 font-bold'
                  : 'hover:text-neutral-950'
              }`}
            >
              System Topology Diagram
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`pb-2.5 transition-colors cursor-pointer ${
                activeTab === 'technical'
                  ? 'text-neutral-950 border-b-2 border-neutral-950 font-bold'
                  : 'hover:text-neutral-950'
              }`}
            >
              Hardware & Software Dossier
            </button>
          </div>

          {/* Tab 1: Curatorial Thesis */}
          {activeTab === 'statement' && (
            <div className="space-y-4">
              <div className="prose max-w-none text-neutral-800 text-sm sm:text-base font-serif-display leading-relaxed whitespace-pre-line">
                {artwork.curatorialStatement}
              </div>

              <div className="pt-4 border-t border-neutral-250 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-code">
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded">
                  <span className="text-neutral-500 uppercase tracking-wider block mb-1 font-semibold">
                    Medium & Components
                  </span>
                  <p className="text-neutral-900 leading-relaxed font-sans">{artwork.medium}</p>
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded">
                  <span className="text-neutral-500 uppercase tracking-wider block mb-1 font-semibold">
                    Installation Footprint
                  </span>
                  <p className="text-neutral-900 leading-relaxed font-sans">{artwork.installationFootprint}</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: System Topology Diagram */}
          {activeTab === 'schematic' && (
            <SystemSchematic artwork={artwork} />
          )}

          {/* Tab 3: Hardware & Software Dossier */}
          {activeTab === 'technical' && (
            <div className="space-y-6">
              <div className="p-4 bg-neutral-50 border border-neutral-250 rounded-lg">
                <span className="text-xs font-mono-code uppercase tracking-wider text-neutral-600 block mb-2 font-semibold">
                  Technical Architecture Summary
                </span>
                <p className="text-sm font-serif-display text-neutral-800 leading-relaxed whitespace-pre-line">
                  {artwork.technicalDossier}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-code">
                <div className="p-4 bg-white border border-neutral-250 rounded-lg shadow-xs">
                  <span className="text-neutral-600 uppercase tracking-wider block mb-2 font-semibold">
                    Physical Hardware Rigs & Optics
                  </span>
                  <ul className="space-y-1.5 text-neutral-800">
                    {artwork.hardwareStack.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-neutral-400 font-mono-code">0{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white border border-neutral-250 rounded-lg shadow-xs">
                  <span className="text-neutral-600 uppercase tracking-wider block mb-2 font-semibold">
                    Software Protocols & Algorithms
                  </span>
                  <ul className="space-y-1.5 text-neutral-800">
                    {artwork.softwareStack.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-neutral-400 font-mono-code">0{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {artwork.collaborators && artwork.collaborators.length > 0 && (
                <div className="text-xs font-mono-code text-neutral-600 pt-2 border-t border-neutral-200">
                  <span className="uppercase tracking-wider mr-2 text-neutral-500 font-semibold">
                    Collaborators & Advisory:
                  </span>
                  <span>{artwork.collaborators.join(' · ')}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Nav */}
        <div className="px-5 py-3.5 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between text-xs font-mono-code text-neutral-600">
          <div>
            {prevArtwork ? (
              <button
                onClick={() => {
                  soundEngine.stop();
                  onSelectArtwork(prevArtwork);
                }}
                className="hover:text-neutral-950 font-medium transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>←</span>
                <span>{prevArtwork.title}</span>
              </button>
            ) : (
              <span className="text-neutral-400">Beginning of Index</span>
            )}
          </div>

          <span className="text-neutral-500">
            {currentIndex + 1} of {allArtworks.length}
          </span>

          <div>
            {nextArtwork ? (
              <button
                onClick={() => {
                  soundEngine.stop();
                  onSelectArtwork(nextArtwork);
                }}
                className="hover:text-neutral-950 font-medium transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>{nextArtwork.title}</span>
                <span>→</span>
              </button>
            ) : (
              <span className="text-neutral-400">End of Index</span>
            )}
          </div>
        </div>
      </div>

      {/* Full-Resolution Archival Photo Lightbox Modal */}
      {selectedArchivalPhoto && (
        <ArchivalPhotoLightboxModal
          photo={selectedArchivalPhoto}
          displayUrl={selectedArchivalDisplayUrl}
          allPhotos={artwork.archivalPhotos || []}
          artworkTitle={artwork.title}
          onClose={() => {
            setSelectedArchivalPhoto(null);
            setSelectedArchivalDisplayUrl('');
          }}
          onNavigate={(nextPhoto) => {
            setSelectedArchivalPhoto(nextPhoto);
            // check if there's local image or default
            setSelectedArchivalDisplayUrl(nextPhoto.url);
          }}
        />
      )}
    </div>
  );
};
