/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ARTWORKS } from './data/portfolioData';
import { Artwork } from './types/portfolio';
import { Navigation } from './components/Navigation';
import { HeroSlidingGallery } from './components/HeroSlidingGallery';
import { HeroStatement } from './components/HeroStatement';
import { WorksGrid } from './components/WorksGrid';
import { CurriculumVitae } from './components/CurriculumVitae';
import { SamResidencyPanel } from './components/SamResidencyPanel';
import { InteractiveTrajectoryTimeline } from './components/InteractiveTrajectoryTimeline';
import { WorkDetailModal } from './components/WorkDetailModal';
import { AppliedPracticeArchiveModal } from './components/AppliedPracticeArchiveModal';
import { CuratorialContactModal } from './components/CuratorialContactModal';
import { CuratorialDossierPdfModal, DossierPreset } from './components/CuratorialDossierPdfModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'statement' | 'works' | 'timeline' | 'cv' | 'sam-residency'>('statement');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isAppliedPracticeOpen, setIsAppliedPracticeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isDossierPdfOpen, setIsDossierPdfOpen] = useState(false);
  const [dossierPreset, setDossierPreset] = useState<DossierPreset>('standard');

  const handleOpenDossierPdf = (preset: DossierPreset = 'standard') => {
    setDossierPreset(preset);
    setIsDossierPdfOpen(true);
  };

  const handleSelectArtworkById = (id: string) => {
    const found = ARTWORKS.find(a => a.id === id);
    if (found) {
      setSelectedArtwork(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Primary Top Bar Navigation */}
      <Navigation
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenAppliedPractice={() => setIsAppliedPracticeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onTriggerPrint={(preset) => handleOpenDossierPdf(preset || 'portfolio')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* View 1: Primary Art Monograph & Statement Overview */}
        {activeTab === 'statement' && (
          <div>
            {/* 1. Hero Sliding Visual Gallery (Immediate Visual Command - High-Fidelity Plates) */}
            <HeroSlidingGallery
              artworks={ARTWORKS}
              onSelectArtwork={setSelectedArtwork}
              onExploreCV={() => setActiveTab('cv')}
            />

            {/* 2. Artist Statement & Optics/Observer Bias Theoretical Inquiries */}
            <HeroStatement
              onExploreWorks={() => setActiveTab('works')}
              onExploreSam={() => setActiveTab('sam-residency')}
              onOpenAppliedPractice={() => setIsAppliedPracticeOpen(true)}
              onExploreTimeline={() => setActiveTab('timeline')}
              onOpenPdfModal={() => handleOpenDossierPdf('standard')}
              onNavigateToTab={setActiveTab}
            />

            {/* 3. Filterable Catalog of Selected Works */}
            <WorksGrid
              artworks={ARTWORKS}
              onSelectArtwork={setSelectedArtwork}
            />

            {/* 4. Curriculum Vitae & Institutional Provenance Flowing Seamlessly Below */}
            <div id="cv-preview-flow" className="bg-[#fafaf9] border-t border-neutral-250 py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-neutral-250">
                  <div>
                    <span className="text-xs font-mono-code uppercase tracking-widest text-neutral-500 font-semibold block mb-1">
                      Institutional Record & Credentials
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-neutral-950">
                      Curriculum Vitae (2010 — 2026)
                    </h2>
                    <p className="text-xs text-neutral-600 font-mono-code mt-0.5">
                      Akin Collective · Motion and Still · Flick the Switch · SIT Applied Computing · NTU PACE
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab('cv')}
                      className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-mono-code rounded font-semibold transition-colors cursor-pointer shadow-xs"
                    >
                      Focus CV Mode →
                    </button>
                    <button
                      onClick={() => handleOpenDossierPdf('cv-only')}
                      className="px-3.5 py-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 text-xs font-mono-code rounded transition-colors cursor-pointer shadow-xs"
                    >
                      Export CV PDF
                    </button>
                  </div>
                </div>

                <CurriculumVitae
                  onTriggerPrint={() => handleOpenDossierPdf('cv-only')}
                  onOpenAppliedPractice={() => setIsAppliedPracticeOpen(true)}
                  onOpenPdfModal={handleOpenDossierPdf}
                />
              </div>
            </div>
          </div>
        )}

        {/* View 2: Pure Selected Works Catalog */}
        {activeTab === 'works' && (
          <WorksGrid
            artworks={ARTWORKS}
            onSelectArtwork={setSelectedArtwork}
            onOpenPortfolioPdf={() => handleOpenDossierPdf('portfolio')}
          />
        )}

        {/* View 3: 16-Year Interactive Trajectory Timeline Scrubber */}
        {activeTab === 'timeline' && (
          <InteractiveTrajectoryTimeline
            onSelectArtworkById={handleSelectArtworkById}
            onOpenAppliedPractice={() => setIsAppliedPracticeOpen(true)}
            onNavigateToTab={setActiveTab}
          />
        )}

        {/* View 4: Curriculum Vitae (Art-Only Institutional CV) */}
        {activeTab === 'cv' && (
          <CurriculumVitae
            onTriggerPrint={() => handleOpenDossierPdf('cv-only')}
            onOpenAppliedPractice={() => setIsAppliedPracticeOpen(true)}
            onOpenPdfModal={handleOpenDossierPdf}
          />
        )}

        {/* View 5: Singapore Art Museum (SAM) Residencies Dossier */}
        {activeTab === 'sam-residency' && (
          <SamResidencyPanel
            onSelectArtworkById={handleSelectArtworkById}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenPdfModal={handleOpenDossierPdf}
            onNavigateToTab={setActiveTab}
          />
        )}
      </main>

      {/* Institutional Dossier Work Detail Modal */}
      <WorkDetailModal
        artwork={selectedArtwork}
        allArtworks={ARTWORKS}
        onClose={() => setSelectedArtwork(null)}
        onSelectArtwork={setSelectedArtwork}
      />

      {/* Phase 2: Applied Practice (2014–2020) Retrospective Archive */}
      <AppliedPracticeArchiveModal
        isOpen={isAppliedPracticeOpen}
        onClose={() => setIsAppliedPracticeOpen(false)}
        onViewArtwork={handleSelectArtworkById}
      />

      {/* Curatorial Inquiry / Studio Visit Modal */}
      <CuratorialContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Formatted Curatorial Dossier & CV PDF Generator Modal */}
      <CuratorialDossierPdfModal
        isOpen={isDossierPdfOpen}
        onClose={() => setIsDossierPdfOpen(false)}
        initialPreset={dossierPreset}
        onSelectArtworkById={handleSelectArtworkById}
      />

      {/* Footer */}
      <Footer
        onSelectTab={setActiveTab}
        onOpenAppliedPractice={() => setIsAppliedPracticeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onTriggerPrint={() => handleOpenDossierPdf('standard')}
      />
    </div>
  );
}
