import React, { createContext, useCallback, useContext, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { AppliedPracticeArchiveModal } from './AppliedPracticeArchiveModal';
import { CuratorialContactModal } from './CuratorialContactModal';
import { LandscapePortfolioPdfModal } from './LandscapePortfolioPdfModal';

interface SiteChromeContextValue {
  openAppliedPractice: () => void;
  openContact: () => void;
  openPortfolioPdf: () => void;
}

const SiteChromeContext = createContext<SiteChromeContextValue | null>(null);

export function useSiteChrome(): SiteChromeContextValue {
  const ctx = useContext(SiteChromeContext);
  if (!ctx) {
    throw new Error('useSiteChrome must be used within SiteChrome');
  }
  return ctx;
}

interface SiteChromeProps {
  children: React.ReactNode;
}

export const SiteChrome: React.FC<SiteChromeProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isAppliedPracticeOpen, setIsAppliedPracticeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPortfolioPdfOpen, setIsPortfolioPdfOpen] = useState(false);

  const openAppliedPractice = useCallback(() => setIsAppliedPracticeOpen(true), []);
  const openContact = useCallback(() => setIsContactOpen(true), []);
  const openPortfolioPdf = useCallback(() => { void setIsPortfolioPdfOpen; navigate({ to: '/portfolio' }); }, [navigate]);

  const handleViewArtwork = useCallback((artworkId: string) => {
    setIsAppliedPracticeOpen(false);
    void artworkId; navigate({ to: '/portfolio' });
  }, [navigate]);

  return (
    <SiteChromeContext.Provider value={{ openAppliedPractice, openContact, openPortfolioPdf }}>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
        <Navigation
          onOpenAppliedPractice={openAppliedPractice}
          onOpenContact={openContact}
          onTriggerPrint={openPortfolioPdf}
        />

        <main className="flex-1">{children}</main>

        <Footer
          onOpenAppliedPractice={openAppliedPractice}
          onOpenContact={openContact}
          onTriggerPrint={openPortfolioPdf}
        />
      </div>

      <AppliedPracticeArchiveModal
        isOpen={isAppliedPracticeOpen}
        onClose={() => setIsAppliedPracticeOpen(false)}
        onViewArtwork={handleViewArtwork}
      />

      <CuratorialContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <LandscapePortfolioPdfModal
        isOpen={isPortfolioPdfOpen}
        onClose={() => setIsPortfolioPdfOpen(false)}
      />
    </SiteChromeContext.Provider>
  );
};
