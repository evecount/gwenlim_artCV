import React, { useState } from 'react';

interface CuratorialContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CuratorialContactModal: React.FC<CuratorialContactModalProps> = ({
  isOpen,
  onClose
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    role: '',
    email: '',
    type: 'studio-visit',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center p-4 sm:p-6 lg:p-8">
      <div
        className="relative w-full max-w-xl bg-white border border-neutral-300 rounded-xl shadow-2xl my-auto text-neutral-900 overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div>
            <span className="text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest block font-semibold">
              Curatorial & Institutional Contact
            </span>
            <h3 className="text-lg font-serif-display font-bold text-neutral-950">
              Gwendalynn Lim · Studio & Archive
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-500 text-emerald-800 flex items-center justify-center mx-auto text-lg font-bold">
                ✓
              </div>
              <h4 className="text-lg font-serif-display font-bold text-neutral-950">
                Inquiry Transmitted
              </h4>
              <p className="text-xs font-mono-code text-neutral-600 max-w-sm mx-auto leading-relaxed">
                Thank you. Your institutional transmission has been logged. Direct response will be dispatched within 48 hours to {formData.email || 'your email'}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-xs font-mono-code text-white rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono-code">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-neutral-700 uppercase tracking-wider block mb-1 font-semibold">
                    Curator / Researcher Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Julian Tan"
                    className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="text-neutral-700 uppercase tracking-wider block mb-1 font-semibold">
                    Museum / Institution
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={e => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="e.g. Museum, Gallery, or Residency Program"
                    className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-neutral-700 uppercase tracking-wider block mb-1 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="curator@institution.org"
                    className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="text-neutral-700 uppercase tracking-wider block mb-1 font-semibold">
                    Inquiry Intent
                  </label>
                  <select
                    value={formData.type}
                    onChange={e => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white cursor-pointer"
                  >
                    <option value="residency">Residency Selection / Curatorial Review</option>
                    <option value="studio-visit">Studio Visit (Singapore / Toronto)</option>
                    <option value="exhibition">Exhibition Loan / Commission</option>
                    <option value="academic">Academic & Technical Paper Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-neutral-700 uppercase tracking-wider block mb-1 font-semibold">
                  Message / Curatorial Scope
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail proposal scope, dates, or technical questions regarding rig schematics..."
                  className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white font-sans text-xs leading-relaxed"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] text-neutral-600 font-medium">
                  Direct: gwenlynn.lim@gmail.com
                </span>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  Send Transmission
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
