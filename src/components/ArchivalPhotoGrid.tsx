import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  ChevronDown, 
  ChevronUp, 
  Maximize2, 
  MapPin, 
  Clock
} from 'lucide-react';
import { ArchivalStudioPhoto } from '../types/portfolio';
import { getLocalImage } from '../utils/localImageStore';

interface ArchivalPhotoGridProps {
  artworkId: string;
  artworkTitle: string;
  photos: ArchivalStudioPhoto[];
  onOpenLightbox?: (photo: ArchivalStudioPhoto, displayUrl: string) => void;
}

function normalizeName(str: string): string {
  return str
    .toLowerCase()
    .replace(/\.[^/.]+$/, '')
    .replace(/[\s\-_]+/g, '');
}

export const ArchivalPhotoGrid: React.FC<ArchivalPhotoGridProps> = ({
  artworkId,
  photos,
  onOpenLightbox
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [localImages, setLocalImages] = useState<Record<string, string>>({});
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Load cached images from IndexedDB on mount & artwork change if present
  useEffect(() => {
    let isMounted = true;
    async function loadStored() {
      const loaded: Record<string, string> = {};
      for (const photo of photos) {
        const key = `archival_${photo.filename}`;
        const stored = await getLocalImage(key);
        if (stored) {
          loaded[photo.id] = stored;
        } else {
          const normKey = `archival_${normalizeName(photo.filename)}`;
          const normStored = await getLocalImage(normKey);
          if (normStored) {
            loaded[photo.id] = normStored;
          }
        }
      }
      if (isMounted) {
        setLocalImages(loaded);
      }
    }
    loadStored();
    return () => {
      isMounted = false;
    };
  }, [artworkId, photos]);

  const filteredPhotos = photos.filter(p => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const categories = Array.from(new Set(photos.map(p => p.category)));

  if (photos.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 border-t border-neutral-300 pt-6 space-y-4">
      {/* Section Header with Expand / Collapse Accordion */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-neutral-250 rounded-xl shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <h3 className="text-sm sm:text-base font-serif-display font-bold text-neutral-950 flex items-center gap-2">
              <span>Studio Archive & Live Photographic Proof</span>
              <span className="text-xs font-mono-code px-2 py-0.5 bg-blue-50 text-blue-800 border border-blue-200 rounded font-normal">
                {photos.length} Archival Images
              </span>
            </h3>
          </div>
          <p className="text-xs text-neutral-600 font-sans leading-relaxed">
            Authentic photographic records, studio workspaces, and equipment rigging documenting this installation across the years.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {/* Verified Archive Badge */}
          <span className="text-[11px] font-mono-code text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded hidden sm:inline-flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Verified Authorial Archive
          </span>

          {/* Expand / Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
          >
            <span>{isExpanded ? 'Collapse Archive' : `Expand Archive (${photos.length})`}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expandable Body */}
      {isExpanded && (
        <div className="space-y-4">
          {/* Category Filter Tabs (if multiple categories) */}
          {categories.length > 1 && (
            <div className="flex flex-wrap items-center gap-1.5 pb-1">
              <span className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-500 mr-1">
                Filter:
              </span>
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-2.5 py-1 rounded text-xs font-mono-code transition-colors cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-neutral-900 text-white font-bold'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-100'
                }`}
              >
                All ({photos.length})
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-2.5 py-1 rounded text-xs font-mono-code capitalize transition-colors cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-neutral-900 text-white font-bold'
                      : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-100'
                  }`}
                >
                  {cat} ({photos.filter(p => p.category === cat).length})
                </button>
              ))}
            </div>
          )}

          {/* Photo Contact Sheet Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPhotos.map((photo) => {
              const displayUrl = localImages[photo.id] || photo.url;
              return (
                <ArchivalPhotoCard
                  key={photo.id}
                  photo={photo}
                  displayUrl={displayUrl}
                  hasCustomUpload={!!localImages[photo.id]}
                  onViewFull={() => onOpenLightbox && onOpenLightbox(photo, displayUrl)}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// Sub-component for individual archival photograph card
interface ArchivalPhotoCardProps {
  photo: ArchivalStudioPhoto;
  displayUrl: string;
  hasCustomUpload: boolean;
  onViewFull: () => void;
}

const ArchivalPhotoCard: React.FC<ArchivalPhotoCardProps> = ({
  photo,
  displayUrl,
  hasCustomUpload,
  onViewFull
}) => {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [, setImgLoaded] = useState(false);

  // If custom upload is provided, prefer it. Otherwise, build candidate list.
  const candidates = React.useMemo(() => {
    if (hasCustomUpload && displayUrl) {
      return [displayUrl];
    }
    const cleanName = photo.filename.trim();
    return [
      displayUrl,
      `/assets/ART_Images/${cleanName}.jpg`,
      `/assets/ART_Images/${cleanName}.JPG`,
      `/assets/ART_Images/${cleanName}.png`,
      `/assets/ART_Images/${cleanName}.PNG`,
      `/assets/ART_Images/${cleanName}.jpeg`,
      `/assets/ART_Images/${cleanName}`,
      photo.url
    ].filter((v, i, a) => Boolean(v) && a.indexOf(v) === i);
  }, [displayUrl, hasCustomUpload, photo.filename, photo.url]);

  const currentSrc = candidates[candidateIndex] || displayUrl;

  // If displayUrl changes, reset
  useEffect(() => {
    setCandidateIndex(0);
    setImgError(false);
    setImgLoaded(false);
  }, [displayUrl, candidates]);

  const handleImageError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex(prev => prev + 1);
    } else {
      setImgError(true);
    }
  };

  return (
    <div className="bg-white border border-neutral-250 rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
      {/* Visual Frame */}
      <div 
        onClick={onViewFull}
        className="relative bg-neutral-950 aspect-4/3 cursor-pointer overflow-hidden flex items-center justify-center border-b border-neutral-200"
      >
        {/* If image loads properly */}
        {!imgError ? (
          <img
            src={currentSrc}
            alt={photo.title}
            onError={handleImageError}
            onLoad={() => setImgLoaded(true)}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          />
        ) : (
          /* Archival Contact Sheet Negative Placeholder */
          <div className="w-full h-full p-4 flex flex-col justify-between text-neutral-400 font-mono-code text-[11px] bg-neutral-900 border border-neutral-800">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-neutral-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <Clock className="w-3 h-3 text-neutral-500" />
                <span>Archival Negative Record</span>
              </span>
              <span className="text-neutral-500">{photo.dateStr}</span>
            </div>

            <div className="text-center py-2 space-y-1">
              <Camera className="w-8 h-8 mx-auto text-neutral-600 stroke-[1.5]" />
              <div className="text-xs font-semibold text-neutral-200 line-clamp-1">
                {photo.filename}
              </div>
              <div className="text-[10px] text-neutral-400 line-clamp-2">
                {photo.title}
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px]">
              <span className="text-neutral-500 truncate max-w-[150px]">{photo.location || 'Studio Record'}</span>
              <span className="text-neutral-400 font-mono-code">Provenance Logged</span>
            </div>
          </div>
        )}

        {/* Date and Filename Overlay Badges */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10">
          <span className="px-2 py-0.5 bg-neutral-950/80 backdrop-blur-xs text-neutral-100 font-mono-code text-[10px] rounded border border-neutral-700/60 font-semibold shadow-xs">
            {photo.dateStr}
          </span>
          <span className="px-1.5 py-0.5 bg-blue-900/80 backdrop-blur-xs text-blue-200 font-mono-code text-[9px] rounded uppercase tracking-wider font-bold">
            {photo.category}
          </span>
        </div>

        {/* Hover Action Bar */}
        <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewFull();
            }}
            className="px-3.5 py-2 bg-white text-neutral-950 hover:bg-neutral-100 rounded text-xs font-mono-code font-semibold flex items-center gap-2 shadow-md cursor-pointer transition-transform hover:scale-105"
            title="Inspect full-resolution photograph"
          >
            <Maximize2 className="w-3.5 h-3.5 text-blue-700" />
            <span>Full Archival View</span>
          </button>
        </div>
      </div>

      {/* Metadata & Curatorial Caption */}
      <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] font-mono-code text-neutral-500">
            <span className="truncate max-w-[170px] text-blue-800 font-medium">
              {photo.filename}
            </span>
            {photo.location && (
              <span className="flex items-center gap-1 text-[10px] text-neutral-500 shrink-0">
                <MapPin className="w-2.5 h-2.5" />
                <span>{photo.location}</span>
              </span>
            )}
          </div>

          <h4 className="text-xs sm:text-sm font-serif-display font-semibold text-neutral-950 leading-snug line-clamp-2">
            {photo.title}
          </h4>

          <p className="text-[11px] text-neutral-600 font-sans leading-relaxed line-clamp-2">
            {photo.context}
          </p>
        </div>

        {/* Technical Camera / Lighting Tag */}
        {photo.metadataNote && (
          <div className="pt-2 border-t border-neutral-150 text-[10px] font-mono-code text-neutral-500 leading-tight line-clamp-1 italic">
            {photo.metadataNote}
          </div>
        )}
      </div>
    </div>
  );
};
