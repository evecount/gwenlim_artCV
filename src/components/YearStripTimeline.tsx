import { useMemo, useState } from 'react';
import { TRAJECTORY_MILESTONES, type TrajectoryMilestone } from '../data/timelineData';
import { ARTWORKS } from '../data/artworksData';
import { resolveAsset } from '../utils/resolveAsset';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import obamaPressAsset from '../assets/press-2010/barack-obama-g20-toronto-2010.jpg.asset.json';
import queenPressAsset from '../assets/press-2010/queen-elizabeth-ii-toronto-2010.jpg.asset.json';
import dalaiLamaPressAsset from '../assets/press-2010/dalai-lama-toronto-2010.jpg.asset.json';

const PRESS_2010_IMAGES = [
  { src: obamaPressAsset.url, alt: 'President Barack Obama speaking at the G20 Toronto Summit, photographed by Gwendalynn Lim in June 2010' },
  { src: queenPressAsset.url, alt: 'Queen Elizabeth II greeting the public during her Toronto Royal Tour, photographed by Gwendalynn Lim in July 2010' },
  { src: dalaiLamaPressAsset.url, alt: 'His Holiness the 14th Dalai Lama speaking in Toronto, photographed by Gwendalynn Lim in October 2010' },
];

function thumbFor(m: TrajectoryMilestone): string | undefined {
  if (m.id === 'm-2010-press-assignments') return obamaPressAsset.url;
  if (/lovelocal|akin collective/i.test(m.title)) return '/assets/ART_Images/lovelocal_2013_akin-partnership-poster.webp';
  if (/white geisha|noise singapore/i.test(m.title)) return '/assets/ART_Images/white_geisha.webp';
  if (/interactive media pavilions/i.test(m.title)) return '/assets/ART_Images/motion-and-still_2013_todo-afterparty-poster.webp';
  if (/community stewardship/i.test(m.title)) return '/assets/ART_Images/studio_20180821_150700.webp';
  const id = m.associatedArtworkId;
  if (!id) return undefined;
  const art = ARTWORKS.find((a) => a.id === id || a.id.includes(id) || id.includes(a.id));
  return art?.images.find((i) => i.url && !/banner/i.test(i.url))?.url;
}

export function YearStripTimeline() {
  const [selected, setSelected] = useState<TrajectoryMilestone | null>(null);
  const byYear = useMemo(() => {
    const map = new Map<number, TrajectoryMilestone[]>();
    [...TRAJECTORY_MILESTONES].sort((a, b) => a.year - b.year).forEach((m) => {
      map.set(m.year, [...(map.get(m.year) ?? []), m]);
    });
    return [...map.entries()];
  }, []);
  const thumb = selected ? thumbFor(selected) : undefined;
  const pressImages = selected?.id === 'm-2010-press-assignments' ? PRESS_2010_IMAGES : undefined;

  return (
    <div className="bg-background">
      <header className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8">
        <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-muted-foreground">2008 — 2026</p>
        <h1 className="font-serif-display text-5xl text-foreground mt-3">Timeline</h1>
        <p className="mt-3 text-sm text-muted-foreground max-w-lg">
          Scroll sideways through the years. Click any project for the full story.
        </p>
      </header>

      <div className="overflow-x-auto pb-16">
        <ol className="flex min-w-max px-5 sm:px-8 gap-0">
          {byYear.map(([year, items]) => (
            <li key={year} className="w-64 shrink-0 border-t-2 border-foreground pt-4 pr-6">
              <p className="font-serif-display text-4xl text-foreground">{year}</p>
              <ul className="mt-4 space-y-4">
                {items.map((m) => {
                  const t = thumbFor(m);
                  return (
                    <li key={m.id}>
                      <button
                        onClick={() => setSelected(m)}
                        className="group text-left w-full"
                      >
                        {t && (
                          <div className="aspect-[4/3] overflow-hidden bg-muted mb-2">
                            <img src={resolveAsset(t)} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          </div>
                        )}
                        <span className="block text-sm leading-snug text-foreground group-hover:text-highlight transition-colors">
                          {m.title}
                        </span>
                        <span className="block font-mono-code text-[10px] uppercase tracking-[0.14em] text-muted-foreground mt-1">
                          {m.location}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background">
          {selected && (
            <>
              {pressImages ? (
                <div className="grid grid-cols-3 gap-1 bg-muted">
                  {pressImages.map((image, index) => (
                    <div key={image.src} className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`h-full w-full object-cover ${index === 0 ? 'object-top' : 'object-center'}`}
                      />
                    </div>
                  ))}
                </div>
              ) : thumb ? (
                <img src={resolveAsset(thumb)} alt="" className="w-full aspect-[16/9] object-cover" />
              ) : null}
              <DialogHeader>
                <p className="font-mono-code text-[11px] uppercase tracking-[0.18em] text-highlight">
                  {selected.yearDisplay} · {selected.categoryLabel}
                </p>
                <DialogTitle className="font-serif-display text-3xl font-normal leading-tight">{selected.title}</DialogTitle>
                <DialogDescription className="font-mono-code text-xs">
                  {selected.venueOrContext}, {selected.location} · {selected.role}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-foreground">{selected.summary}</p>
              {selected.technicalDossier.length > 0 && (
                <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
                  {selected.technicalDossier.map((d) => <li key={d}>{d}</li>)}
                </ul>
              )}
              <p className="text-sm italic font-serif-display text-muted-foreground border-l-2 border-highlight pl-4">
                {selected.significance}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
