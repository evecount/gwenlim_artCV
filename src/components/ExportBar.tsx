import React from 'react';
import { FileText, Image as ImageIcon, Layers, Download, Check } from 'lucide-react';
import { DossierPreset } from './CuratorialDossierPdfModal';

interface ExportBarProps {
  onExport: (preset: 'cv-only' | 'portfolio' | 'full') => void;
  className?: string;
  variant?: 'banner' | 'compact' | 'modal-style';
}

export const ExportBar: React.FC<ExportBarProps> = ({ onExport, className = '', variant = 'banner' }) => {
  return (
    <div className={`bg-neutral-950 text-white rounded-xl border border-neutral-800 p-4 sm:p-5 shadow-lg ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Descriptive Left Area */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-[11px] font-mono-code uppercase tracking-wider text-cyan-300 font-semibold">
              Export Dossier & Documents
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-serif-display font-medium text-white">
            Curatorial & Archival PDF Downloads
          </h3>
          <p className="text-xs text-neutral-400 font-sans max-w-xl">
            Download institutional-ready print documents: the official black & white CV, the visual portfolio of plates, or the combined complete monograph dossier.
          </p>
        </div>

        {/* 3 Clear Action Buttons: Either or Both */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
          {/* Option 1: CV Only */}
          <button
            onClick={() => onExport('cv-only')}
            className="flex-1 sm:flex-initial px-3.5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-100 hover:text-white border border-neutral-700 hover:border-neutral-500 rounded-lg text-xs font-mono-code transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs group"
            title="Download the standalone black and white artist CV"
          >
            <FileText className="w-4 h-4 text-neutral-300 group-hover:text-white" />
            <div className="text-left">
              <span className="block font-semibold">Export B&W CV</span>
              <span className="text-[10px] text-neutral-400 block -mt-0.5">PDF · 3 Pages</span>
            </div>
          </button>

          {/* Option 2: Portfolio Plates Only */}
          <button
            onClick={() => onExport('portfolio')}
            className="flex-1 sm:flex-initial px-3.5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-100 hover:text-white border border-neutral-700 hover:border-neutral-500 rounded-lg text-xs font-mono-code transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs group"
            title="Download the portfolio of structural plates and photographic documentation"
          >
            <ImageIcon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
            <div className="text-left">
              <span className="block font-semibold">Export Plates Portfolio</span>
              <span className="text-[10px] text-neutral-400 block -mt-0.5">PDF · 10 Landscape Plates</span>
            </div>
          </button>

          {/* Option 3: Both (Combined Dossier) */}
          <button
            onClick={() => onExport('full')}
            className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-lg text-xs font-mono-code transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 group"
            title="Download the complete monograph containing both the CV and portfolio"
          >
            <Layers className="w-4 h-4 text-blue-200" />
            <div className="text-left">
              <span className="block">Export Both (Complete)</span>
              <span className="text-[10px] text-blue-200 block -mt-0.5">PDF · CV + All Plates</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
