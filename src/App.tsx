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
import { CleanTimeline } from './components/CleanTimeline';
import { ExportBar } from './components/ExportBar';
import { SamResidencyPanel } from './components/SamResidencyPanel';
import { WorkDetailModal } from './components/WorkDetailModal';
import { AppliedPracticeArchiveModal } from './components/AppliedPracticeArchiveModal';
import { CuratorialContactModal } from './components/CuratorialContactModal';
import { CuratorialDossierPdfModal, DossierPreset } from './components/CuratorialDossierPdfModal';
import { LandscapePortfolioPdfModal } from './components/LandscapePortfolioPdfModal';
import { Footer } from './components/Footer';

export default function App() {
  // Default to 'works': Starts directly with the portfolio grid of plates!
  const [activeTab, setActiveTab] = useState<'works' | 'cv' | 'timeline' | 'statement' | 'sam-residency'>('works');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isAppliedPracticeOpen, setIsAppliedPracticeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isDossierPdfOpen, setIsDossierPdfOpen] = useState(false);
  const [isLandscapePdfOpen, setIsLandscapePdfOpen] = useState(false);
  const [dossierPreset, setDossierPreset] = useState<DossierPreset>('standard');

  const handleOpenDossierPdf = (preset: DossierPreset = 'standard') => {
    if (preset === 'portfolio') {
      setIsLandscapePdfOpen(true);
    } else {
      setDossierPreset(preset);
      setIsDossierPdfOpen(true);
    }
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
        {/* Global Export Bar (Top of Content) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <ExportBar onExport={(preset) => handleOpenDossierPdf(preset)} />
        </div>

        {/* 1. Primary Portfolio of Plates (Starts directly with the Grid!) */}
        {(activeTab === 'works' || activeTab === 'statement') && (
          <div>
            <WorksGrid
              artworks={ARTWORKS}
              onSelectArtwork={setSelectedArtwork}
              onOpenPortfolioPdf={() => handleOpenDossierPdf('portfolio')}
            />
          </div>
        )}

        {/* 2. Black and White CV (Museum-standard pure monochrome presentation) */}
        {activeTab === 'cv' && (
          <div className="animate-fadeIn">
            <CurriculumVitae
              onTriggerPrint={() => handleOpenDossierPdf('cv-only')}
              onOpenAppliedPractice={() => setIsAppliedPracticeOpen(true)}
              onOpenPdfModal={handleOpenDossierPdf}
            />
          </div>
        )}

        {/* 3. Clean Chronological Timeline (2010 to 2026 without complicated scrubbers) */}
        {activeTab === 'timeline' && (
          <div className="animate-fadeIn">
            <CleanTimeline
              onSelectArtworkById={handleSelectArtworkById}
              onOpenAppliedPractice={() => setIsAppliedPracticeOpen(true)}
            />
          </div>
        )}

        {/* Future Work & Studio Research Proposal */}
        {activeTab === 'sam-residency' && (
          <div className="animate-fadeIn">
            <SamResidencyPanel
              onSelectArtworkById={handleSelectArtworkById}
              onOpenContact={() => setIsContactOpen(true)}
              onOpenPdfModal={handleOpenDossierPdf}
              onNavigateToTab={setActiveTab}
            />
          </div>
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

      {/* Strict 10-Page Curatorial Review Monograph (Landscape PDF) */}
      <LandscapePortfolioPdfModal
        isOpen={isLandscapePdfOpen}
        onClose={() => setIsLandscapePdfOpen(false)}
        onOpenVerticalDossier={() => {
          setDossierPreset('standard');
          setIsDossierPdfOpen(true);
        }}
      />

      {/* Formatted Curatorial Dossier & CV PDF Generator Modal */}
      <CuratorialDossierPdfModal
        isOpen={isDossierPdfOpen}
        onClose={() => setIsDossierPdfOpen(false)}
        initialPreset={dossierPreset}
        onSelectArtworkById={handleSelectArtworkById}
        onOpenLandscapePortfolio={() => setIsLandscapePdfOpen(true)}
      />

      {/* Footer */}
      <Footer
        onSelectTab={setActiveTab}
        onOpenAppliedPractice={() => setIsAppliedPracticeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onTriggerPrint={(preset) => handleOpenDossierPdf(preset || 'portfolio')}
      />
    </div>
  );
}
