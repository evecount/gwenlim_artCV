import React from 'react';
import { FileDown } from 'lucide-react';
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
  return (
    <section className="py-14 border-b border-neutral-250 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Curatorial Header */}
        <div className="border-b border-neutral-250 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-blue-700 uppercase tracking-widest mb-1 font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Institutional Dossier Preparation</span>
              <span className="text-neutral-400">·</span>
              <span>{SAM_RESIDENCY_ALIGNMENT.cycle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-neutral-950">
              Singapore Art Museum (SAM) Residencies Dossier
            </h2>
            <p className="text-xs text-neutral-600 font-mono-code mt-1">
              Focused on the intersection of post-industrial physical computing, frontier AI topologies, and Singaporean socio-linguistic vernaculars.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            {onOpenPdfModal && (
              <button
                onClick={() => onOpenPdfModal('residency')}
                className="px-3.5 py-2 bg-neutral-950 hover:bg-neutral-800 text-white border border-neutral-950 rounded text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-xs"
                title="Generate clean, formatted PDF dossier tailored for SAM Residencies"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-300" />
                <span>Export PDF Dossier</span>
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-4">
            <div>
              <span className="text-[10px] font-mono-code text-blue-700 uppercase tracking-widest block font-semibold">
                Proposed Studio Research Body
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-neutral-950">
                {SAM_RESIDENCY_ALIGNMENT.proposedProjectTitle}
              </h3>
            </div>
            <span className="text-xs font-mono-code text-neutral-700 bg-neutral-100 px-3 py-1 border border-neutral-250 rounded font-medium">
              Track: {SAM_RESIDENCY_ALIGNMENT.track}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm">
            <div className="lg:col-span-8 space-y-4 font-serif-display text-neutral-800 leading-relaxed">
              <p>
                During the proposed SAM Residency, Lim will expand the theoretical architecture of <em className="text-neutral-950 font-medium">The Klingon Topology (2026)</em> into the localized multilingual ecology of Singapore. While dominant commercial foundational models represent text through an Anglocentric, Silicon-Valley-curated token vocabulary, Singaporean communication operates through a rich, polyphonic creole (Singlish, Hokkien, Teochew, Malay, Tamil).
              </p>
              <p>
                The residency project will construct a localized, offline physical computing plinth housing a high-dimensional Riemannian manifold trained exclusively on public oral histories from Tanjong Pagar, Queenstown, and old port workers. Instead of extracting this language for observer bias or commercial translation, the apparatus operates as a <strong className="text-neutral-950 font-bold">cryptographic sanctuary</strong>—visualizing the geometric resistance of local vernaculars against globalized model alignment.
              </p>
            </div>

            <div className="lg:col-span-4 bg-neutral-50 border border-neutral-250 p-4 rounded-lg text-xs font-mono-code space-y-3">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-semibold">
                Institutional Feasibility Profile
              </span>
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
                  <span className="text-neutral-500 block text-[10px] font-semibold">Local Academic Anchor:</span>
                  <span>Singapore Institute of Technology (SIT) Applied Computing</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] font-semibold">Production Leadership Precedent:</span>
                  <span className="text-amber-800 font-medium">Founder/Director, Motion and Still Inc. (2014–2023 studio facility; heavy rigging & multi-crew spatial execution)</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] font-semibold">Community Referees & Space Lineage:</span>
                  <span className="text-emerald-800 font-medium">Susan Stewart (Flick the Switch, 2019–24) · Oliver Pauk (Akin Collective, 2011–15)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Curatorial Pillars for SAM */}
        <div className="space-y-4">
          <div className="text-xs font-mono-code uppercase tracking-widest text-neutral-600 font-semibold">
            Alignment with SAM Curatorial Framework
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              onClick={() => onSelectArtworkById('klingon-topology')}
              className="text-left p-4 bg-white hover:bg-neutral-50 border border-neutral-250 hover:border-neutral-400 rounded-lg transition-all cursor-pointer group shadow-xs"
            >
              <div className="text-[10px] font-mono-code text-blue-700 font-semibold mb-1">
                2026 · Topological AI
              </div>
              <div className="text-sm font-serif-display font-bold text-neutral-950 group-hover:text-blue-700">
                The Klingon Topology
              </div>
              <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                Proven low-latency real-time Riemannian manifold projection onto raw obsidian plinths.
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
              onClick={() => onSelectArtworkById('ultimate-selfie-ids')}
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
                Geodesic monocoque tape engineering and dual-presence physical AND-gate interlocks.
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
                SAM Institutional Evaluation · Character References & 15-Year Spatial Interdependence
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
            {/* 2 Referees Cards */}
            <div className="md:col-span-5 space-y-3">
              <div className="text-xs font-mono-code uppercase text-neutral-600 tracking-wider font-semibold">
                Recommended Primary Community Referees:
              </div>

              {/* Susan Stewart */}
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
                  <span className="text-[10px] font-mono-code text-emerald-800 bg-emerald-50 px-1.5 py-0.5 border border-emerald-200 rounded font-medium">
                    5-Yr Partner
                  </span>
                </div>
                <p className="text-[11px] text-neutral-700 italic font-sans">
                  "Vouches for Lim’s artistic character, peer generosity, 5-year collaborative stamina, and delivery of high-stakes public art & video advocacy."
                </p>
              </div>

              {/* Oliver Pauk */}
              <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-serif-display font-bold text-neutral-950">
                      Oliver Pauk
                    </h4>
                    <p className="text-xs font-mono-code text-neutral-600">
                      Co-Founder & Director, Akin Collective
                    </p>
                    <p className="text-[11px] font-mono-code text-neutral-500">
                      Toronto, Canada (2011 — 2015 Studio Resident)
                    </p>
                  </div>
                  <span className="text-[10px] font-mono-code text-amber-800 bg-amber-50 px-1.5 py-0.5 border border-amber-200 rounded font-medium">
                    ARC Co-Founder
                  </span>
                </div>
                <p className="text-[11px] text-neutral-700 italic font-sans">
                  "Vouches for Lim’s roots in authentic artist-run centers (ARCs), shared space-sharing ethics, peer critiques, and solidarity economics."
                </p>
              </div>
            </div>

            {/* Strategic Value for Singapore Art Museum */}
            <div className="md:col-span-7 space-y-4">
              <div className="text-xs font-mono-code uppercase text-neutral-600 tracking-wider font-semibold">
                Why This Lineage Strengthens the SAM Application:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1.5">
                  <span className="text-[10px] font-mono-code text-emerald-800 font-bold uppercase block">
                    01 · Institutional Gold for ARCs
                  </span>
                  <h5 className="text-xs font-serif-display font-bold text-neutral-950">
                    Akin & Shared Space Models
                  </h5>
                  <p className="text-[11px] text-neutral-600 leading-relaxed font-sans">
                    Akin Collective is one of Canada’s most respected artist-run organizations. Demonstrates Lim cut her teeth inside authentic artist-run centers (ARCs) dedicated to dismantling financial barriers for artists.
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
                    SAM curators deeply value artists who understand how shared infrastructure functions on the ground. Proves Lim’s practice is inherently relational and community-accountable.
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1.5">
                  <span className="text-[10px] font-mono-code text-amber-800 font-bold uppercase block">
                    03 · Public Art Credibility
                  </span>
                  <h5 className="text-xs font-serif-display font-bold text-neutral-950">
                    Nuit Blanche & #LoveLocal
                  </h5>
                  <p className="text-[11px] text-neutral-600 leading-relaxed font-sans">
                    Spans early grassroots fundraisers (#LoveLocal with Akin in 2013) to ambitious public art proposals for Toronto Nuit Blanche with Susan Stewart (2020–2024).
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
                    Pairing community referees (Oliver Pauk & Susan Stewart) with formal SIT / NTU academic credentials paints a rare, de-risked candidate portrait for SAM.
                  </p>
                </div>
              </div>

              {/* Integration Summary */}
              <div className="p-3 bg-neutral-100 border border-neutral-250 rounded text-xs font-mono-code text-neutral-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Dossier Anchors: Oliver Pauk (Akin) · Susan Stewart (FTS) · SIT Applied Computing</span>
                <span className="text-neutral-900 font-medium">15-Year Verifiable Track Record</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
