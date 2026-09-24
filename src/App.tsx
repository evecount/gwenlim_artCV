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
import { SamResidencyPanel } from './components/SamResidencyPanel';
import { WorkDetailModal } from './components/WorkDetailModal';
import { AppliedPracticeArchiveModal } from './components/AppliedPracticeArchiveModal';
import { CuratorialContactModal } from './components/CuratorialContactModal';
import { LandscapePortfolioPdfModal } from './components/LandscapePortfolioPdfModal';
import { Footer } from './components/Footer';

export default function App() {
  // Default to 'works': Starts directly with the portfolio grid of plates!
  const [activeTab, setActiveTab] = useState<'works' | 'cv' | 'timeline' | 'statement' | 'sam-residency'>('works');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isAppliedPracticeOpen, setIsAppliedPracticeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLandscapePdfOpen, setIsLandscapePdfOpen] = useState(false);

  const handleOpenPortfolioPdf = () => {
    setIsLandscapePdfOpen(true);
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
        onTriggerPrint={() => handleOpenPortfolioPdf()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Primary Portfolio of Plates (Starts directly with the Grid!) */}
        {(activeTab === 'works' || activeTab === 'statement') && (
          <div>
            <WorksGrid
              artworks={ARTWORKS}
              onSelectArtwork={setSelectedArtwork}
              onOpenPortfolioPdf={() => handleOpenPortfolioPdf()}
            />
          </div>
        )}

        {/* 2. Black and White CV (Museum-standard pure monochrome presentation) */}
        {activeTab === 'cv' && (
          <div className="animate-fadeIn">
            <CurriculumVitae
              onTriggerPrint={() => window.print()}
              onOpenAppliedPractice={() => setIsAppliedPracticeOpen(true)}
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
      />

      {/* Footer */}
      <Footer
        onSelectTab={setActiveTab}
        onOpenAppliedPractice={() => setIsAppliedPracticeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onTriggerPrint={() => handleOpenPortfolioPdf()}
      />
    </div>
  );
}
