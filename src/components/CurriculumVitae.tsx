import React, { useState } from 'react';
import { FileDown, Printer } from 'lucide-react';
import {
  CV_DATA,
  ARTIST_INFO,
  EDUCATION_CREDENTIALS,
  RESEARCH_AND_TECHNICAL_LEADERSHIP,
  TECHNICAL_CAPABILITIES,
  ARTISTIC_REFEREES
} from '../data/portfolioData';

interface CurriculumVitaeProps {
  onTriggerPrint: () => void;
  onOpenAppliedPractice?: () => void;
  onOpenPdfModal?: (preset?: 'full' | 'standard' | 'cv-only' | 'residency') => void;
}

export const CurriculumVitae: React.FC<CurriculumVitaeProps> = ({
  onTriggerPrint,
  onOpenAppliedPractice,
  onOpenPdfModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isPrintLayoutMode, setIsPrintLayoutMode] = useState<boolean>(true);

  const categories = [
    { id: 'all', label: 'Complete Dossier (2010 — 2026)' },
    { id: 'education', label: 'Education & Credentials' },
    { id: 'leadership', label: 'Research & Technical Leadership' },
    { id: 'exhibitions', label: 'Selected Artworks & Installations' },
    { id: 'talks', label: 'Talks & Lectures' },
    { id: 'research', label: 'Technical & Theoretical Papers' },
    { id: 'civic', label: 'Civic Practice & Mutual Aid' },
  ];

  const filteredEntries = selectedCategory === 'all'
    ? CV_DATA.filter(entry => entry.category !== 'affiliations')
    : CV_DATA.filter(entry => entry.category === selectedCategory);

  // Group entries by category for institutional print view
  const exhibitions = CV_DATA.filter(e => e.category === 'exhibitions');
  const talks = CV_DATA.filter(e => e.category === 'talks');
  const research = CV_DATA.filter(e => e.category === 'research');
  const civic = CV_DATA.filter(e => e.category === 'civic');

  return (
    <section id="cv-section" className="py-14 border-b border-neutral-250 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header & View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-250 pb-5">
          <div>
            <span className="text-xs font-mono-code uppercase tracking-widest text-neutral-600 block mb-1 font-semibold">
              Curriculum Vitae · Institutional Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-neutral-950">
              Curriculum Vitae
            </h2>
            <p className="text-xs text-neutral-600 font-mono-code mt-1">
              Singapore · Pure Art, Research & Institutional Trajectory (2010–2026)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onOpenPdfModal ? onOpenPdfModal('cv-only') : onTriggerPrint()}
              className="px-3.5 py-1.5 text-xs font-mono-code bg-neutral-950 hover:bg-neutral-800 text-white font-semibold rounded border border-neutral-950 transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
              title="Compile clean, formatted PDF dossier with statement, CV & references"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-300" />
              <span>Export PDF Dossier</span>
            </button>
            <button
              onClick={() => setIsPrintLayoutMode(!isPrintLayoutMode)}
              className={`px-3 py-1.5 text-xs font-mono-code rounded border transition-colors cursor-pointer shadow-xs ${
                isPrintLayoutMode
                  ? 'bg-neutral-950 text-white border-neutral-950 font-medium'
                  : 'bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              {isPrintLayoutMode ? 'Interactive View' : 'Single-Sheet Paper View'}
            </button>
            <button
              onClick={onTriggerPrint}
              className="px-3 py-1.5 text-xs font-mono-code bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-300 rounded transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
              title="Quick browser print"
            >
              <Printer className="w-3.5 h-3.5 text-neutral-600" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Paper / Print Layout View (Museum Jury Clean White Paper Mode) */}
        {isPrintLayoutMode ? (
          <div className="bg-white text-neutral-900 p-8 sm:p-12 rounded-lg shadow-xl font-serif-display max-w-4xl mx-auto space-y-9 border border-neutral-300">
            {/* Header info */}
            <div className="border-b border-neutral-400 pb-5">
              <h1 className="text-3xl font-bold tracking-tight text-neutral-950 uppercase">
                {ARTIST_INFO.name}
              </h1>
              <p className="text-xs font-mono-code font-bold uppercase tracking-wider text-neutral-800 mt-1">
                Installation, Physical Computing, and Media-Arts Practice
              </p>
              <p className="text-xs font-mono-code text-neutral-600 mt-0.5">
                SINGAPORE · +65 8608 1377 · GWENLYNN.LIM@GMAIL.COM · GWENLIM.AI.STUDIO
              </p>
            </div>

            {/* ARTIST & RESEARCH PROFILE */}
            <div className="space-y-2 border-b border-neutral-300 pb-5">
              <h3 className="text-sm font-bold uppercase tracking-wider font-sans text-neutral-900">
                Artist & Research Profile
              </h3>
              <p className="text-xs font-serif-display text-neutral-800 leading-relaxed">
                {ARTIST_INFO.statement}
              </p>
            </div>

            {/* EDUCATION & ACADEMIC CREDENTIALS */}
            <div className="space-y-3 border-b border-neutral-300 pb-5">
              <h3 className="text-sm font-bold uppercase tracking-wider font-sans text-neutral-900">
                Education & Academic Credentials
              </h3>
              <div className="space-y-3 font-sans text-xs">
                {EDUCATION_CREDENTIALS.map(edu => (
                  <div key={edu.id} className="space-y-0.5">
                    <p className="font-semibold text-neutral-950">
                      • {edu.degreeOrCert}, <span className="font-normal text-neutral-800">{edu.institution}, {edu.location}</span>
                    </p>
                    {edu.focus && (
                      <p className="text-neutral-700 italic pl-4">
                        Focus: {edu.focus}
                      </p>
                    )}
                    {edu.honorsAndRoles && edu.honorsAndRoles.map((hr, idx) => (
                      <p key={idx} className="text-neutral-700 italic pl-4">
                        {hr}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* RESEARCH & TECHNICAL LEADERSHIP */}
            <div className="space-y-3 border-b border-neutral-300 pb-5">
              <h3 className="text-sm font-bold uppercase tracking-wider font-sans text-neutral-900">
                Research & Technical Leadership
              </h3>
              <div className="space-y-2.5 font-sans text-xs">
                {RESEARCH_AND_TECHNICAL_LEADERSHIP.map(lead => (
                  <div key={lead.id} className="space-y-0.5">
                    <p className="font-semibold text-neutral-950">
                      • {lead.role}, <span className="font-normal text-neutral-800">{lead.organization}, {lead.location} ({lead.year})</span>
                    </p>
                    {lead.details && (
                      <p className="text-neutral-700 italic pl-4 leading-relaxed">
                        {lead.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* SELECTED ARTWORKS, INSTALLATIONS & COMPUTATIONAL RESEARCH */}
            <div className="space-y-4 border-b border-neutral-300 pb-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm font-bold uppercase tracking-wider font-sans text-neutral-900">
                  Selected Artworks, Installations & Computational Research
                </h3>
                <span className="text-[10px] font-mono-code text-neutral-500 italic">
                  Studio Provenance: Akin Collective · Motion and Still · Flick the Switch
                </span>
              </div>
              <div className="p-2.5 bg-neutral-50 border border-neutral-250 rounded text-[11px] font-sans text-neutral-700 italic">
                Note on Artistic Provenance: All spatial installations and physical apparatuses throughout Lim's career were produced independently during studio residencies with Akin Collective, Flick the Switch, or independent studio time at Motion and Still, alongside sculptural bronze casting and foundry practice at OCAD University.
              </div>
              <div className="space-y-4 font-sans text-xs">
                {/* 2026 */}
                <div>
                  <h4 className="font-mono font-bold text-neutral-900 text-xs mb-1.5">2026</h4>
                  <div className="space-y-1 pl-3 border-l border-neutral-300">
                    <p className="font-semibold text-neutral-950">
                      • The Riemann Manifold: Quantum Chaos & Spectral Topology
                    </p>
                    <p className="italic text-neutral-700">Computational Systems Installation / High-Dimensional Generative Topology</p>
                    <p className="text-neutral-750 leading-relaxed">
                      Algorithmic investigation into the non-trivial zeros of the Riemann zeta function and prime distribution along the critical strip (Re(s) = 1/2). Bridges quantum operator eigenvalues, random matrix statistics (GUE), and algorithmic interference patterns to explore deterministic chaos, machine-mediated mathematical observation, and non-human systemic harmony. (Repo: evecount/riemann_hypothesis)
                    </p>
                    <p className="text-[11px] text-neutral-600 font-mono-code">
                      Production: Independent Computational & Quantum Systems Practice (Singapore)
                    </p>
                  </div>
                </div>

                {/* 2020 */}
                <div>
                  <h4 className="font-mono font-bold text-neutral-900 text-xs mb-1.5">2020</h4>
                  <div className="space-y-1 pl-3 border-l border-neutral-300">
                    <p className="font-semibold text-neutral-950">
                      • Deconstructing Capital
                    </p>
                    <p className="italic text-neutral-700">Site-Specific Installation & Inquiry into Observer Bias (52 St. Lawrence, Toronto)</p>
                    <p className="text-neutral-750 leading-relaxed">
                      Interactive spatial intervention utilizing layered optical scrims, directional high-lumen flood arrays, and camera-jamming retroreflective surfaces to dismantle institutional observer bias, interrogating voyeurism masquerading as authority and establishing spatial privacy sanctuaries.
                    </p>
                    <p className="text-[11px] text-neutral-600 font-mono-code">
                      Production: Developed during independent studio time at Motion and Still (90 Ontario) in dialogue with Flick the Switch (Susan Stewart); technical equipment resources with Charles Street Video.
                    </p>
                  </div>
                </div>

                {/* 2014 */}
                <div>
                  <h4 className="font-mono font-bold text-neutral-900 text-xs mb-1.5">2014</h4>
                  <div className="space-y-1 pl-3 border-l border-neutral-300">
                    <p className="font-semibold text-neutral-950">
                      • The Ultimate Selfie (Iterative Installations & Spatial Rigs)
                    </p>
                    <p className="italic text-neutral-700">Interactive Physical Computing Installation (Interior Design Show / IIDEX / TO DO, Metro Toronto Convention Centre)</p>
                    <p className="text-neutral-750 leading-relaxed">
                      Custom-engineered interactive booths featuring disassembled/hacked DSLR hardware, micro-switches, and automated social-feed deployment pipelines exploring the narcissism and automated extraction loops of public self-documentation.
                    </p>
                    <p className="text-[11px] text-neutral-600 font-mono-code">
                      Production: Conceived, prototyped, and fabricated during independent studio time at Motion and Still (Toronto).
                    </p>
                  </div>
                </div>

                {/* 2013 */}
                <div>
                  <h4 className="font-mono font-bold text-neutral-900 text-xs mb-1.5">2013</h4>
                  <div className="space-y-1 pl-3 border-l border-neutral-300">
                    <p className="font-semibold text-neutral-950">
                      • Interactive Media Pavilions
                    </p>
                    <p className="italic text-neutral-700">Physical Computing & Spatial Portraiture (Toronto Design Offsite Festival / IDS)</p>
                    <p className="text-neutral-750 leading-relaxed">
                      Audience-actuated mobile portraiture booths exploring tactile triggers, decentralized image distribution, and live participatory engagement.
                    </p>
                    <p className="text-[11px] text-neutral-600 font-mono-code">
                      Production: Designed and fabricated during artist studio residency with Akin Collective (Dir. Oliver Pauk, Toronto).
                    </p>
                  </div>
                </div>

                {/* 2012 */}
                <div>
                  <h4 className="font-mono font-bold text-neutral-900 text-xs mb-1.5">2012</h4>
                  <div className="space-y-3 pl-3 border-l border-neutral-300">
                    <div className="space-y-1">
                      <p className="font-semibold text-neutral-950">
                        • Two-Man Rule
                      </p>
                      <p className="italic text-neutral-700">Participatory Installation & Structural Architecture (TEDxToronto, The Sony Centre for the Performing Arts)</p>
                      <p className="text-neutral-750 leading-relaxed">
                        Hand-constructed geodesic tape dome featuring a dual-switch shutter rig requiring two simultaneous, cooperative physical participants to actuate an automated camera capture, questioning autonomy and mutual consensus in digital documentation.
                      </p>
                      <p className="text-[11px] text-neutral-600 font-mono-code">
                        Production: Fabricated and assembled during studio residency with Akin Collective (Dir. Oliver Pauk) with architecture volunteers.
                      </p>
                    </div>
                    <div className="space-y-1 pt-1">
                      <p className="font-semibold text-neutral-950">
                        • Broadcast People
                      </p>
                      <p className="italic text-neutral-700">Kinetic & Closed-Circuit Video Installation (|FAT| Toronto Alternative Arts & Fashion Week)</p>
                      <p className="text-neutral-750 leading-relaxed">
                        A wall-scale closed-circuit television (CCTV) matrix paired with a prominent tactile floor switch. Stepping onto the actuator placed the viewer within an instant, closed-circuit feedback loop of self-broadcast, exploring the performative compulsion of the modern gaze.
                      </p>
                      <p className="text-[11px] text-neutral-600 font-mono-code">
                        Production: Engineered during studio residency with Akin Collective in collaboration with Charles Street Video.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2011–2012 */}
                <div>
                  <h4 className="font-mono font-bold text-neutral-900 text-xs mb-1.5">2011–2012</h4>
                  <div className="space-y-1 pl-3 border-l border-neutral-300">
                    <p className="font-semibold text-neutral-950">
                      • Noise Singapore Festival Exhibition
                    </p>
                    <p className="italic text-neutral-700">Curated Group Exhibition (National Arts Council, Singapore)</p>
                    <p className="text-neutral-750 leading-relaxed">
                      Exhibited photographic works (White Geisha series / Silver Aurelia), exploring stylized identity, visual ornamentation, and the performative boundary between persona and subjecthood under the public gaze.
                    </p>
                    <p className="text-[11px] text-neutral-600 font-mono-code">
                      Production: Independent Studio Photographic Practice (Singapore)
                    </p>
                  </div>
                </div>

                {/* 2011 */}
                <div>
                  <h4 className="font-mono font-bold text-neutral-900 text-xs mb-1.5">2011</h4>
                  <div className="space-y-1 pl-3 border-l border-neutral-300">
                    <p className="font-semibold text-neutral-950">
                      • A Perfect World
                    </p>
                    <p className="italic text-neutral-700">Street-Level Relational Intervention & Portraiture (Kensington Market, Toronto)</p>
                    <p className="text-neutral-750 leading-relaxed">
                      Site-specific street portraiture and relational aesthetic series confronting urban anonymity, communal memory, and the social contract between the lens and the subject.
                    </p>
                    <p className="text-[11px] text-neutral-600 font-mono-code">
                      Production: Field-staged while working out of Akin Collective in Kensington Market (Toronto).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TALKS, LECTURES & PRESENTATIONS */}
            <div className="space-y-3 border-b border-neutral-300 pb-5">
              <h3 className="text-sm font-bold uppercase tracking-wider font-sans text-neutral-900">
                Talks, Lectures & Presentations
              </h3>
              <div className="space-y-3 font-sans text-xs">
                {talks.map(e => (
                  <div key={e.id} className="space-y-0.5">
                    <p className="font-semibold text-neutral-950">
                      • {e.title}, <span className="font-normal text-neutral-800">{e.venueOrPublisher}, {e.location} ({e.year})</span>
                    </p>
                    {e.notes && <p className="text-neutral-700 italic pl-4">{e.notes}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* SELECTED TECHNICAL & THEORETICAL PAPERS */}
            <div className="space-y-3 border-b border-neutral-300 pb-5">
              <h3 className="text-sm font-bold uppercase tracking-wider font-sans text-neutral-900">
                Selected Technical & Theoretical Papers
              </h3>
              <div className="space-y-3 font-sans text-xs">
                <div className="space-y-0.5">
                  <p className="font-semibold text-neutral-950">
                    • Lim, G., Lim, B., & Antigravity (Google DeepMind) (2026).{' '}
                    <span className="font-normal italic">
                      Project Q-Rotate: Coordinate-Free Molecular Pose Search via Trapped-Ion Phase Synchronization and Lie Algebra Generators
                    </span>
                    . Technical Whitepaper & Computational Architecture, Quantinuum Singapore Grand Challenge 2026.{' '}
                    <a
                      href="https://github.com/evecount/quantum_rotation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-blue-700 hover:text-blue-900 underline inline-flex items-center gap-1"
                    >
                      https://github.com/evecount/quantum_rotation
                    </a>
                  </p>
                </div>
                <div className="space-y-0.5">
                  <p className="font-semibold text-neutral-950">
                    • Lim, G. & Antigravity (Google DeepMind) (2026).{' '}
                    <span className="font-normal italic">
                      The Riemann Manifold: Quantum Operator Eigenvalues and Spectral Invariance Along the Critical Strip
                    </span>
                    . SIT Applied Computing Research Monograph & Open Academic Repository.{' '}
                    <a
                      href="https://github.com/evecount/riemann_hypothesis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-blue-700 hover:text-blue-900 underline inline-flex items-center gap-1"
                    >
                      https://github.com/evecount/riemann_hypothesis
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* CIVIC PRACTICE, STEWARDSHIP & MUTUAL AID */}
            <div className="space-y-3 border-b border-neutral-300 pb-5">
              <h3 className="text-sm font-bold uppercase tracking-wider font-sans text-neutral-900">
                Civic Practice, Stewardship & Mutual Aid
              </h3>
              <div className="space-y-3 font-sans text-xs text-neutral-800">
                <p>
                  <span className="font-semibold text-neutral-950">• Media Lead & Collective Member, Flick the Switch Artists’ Collective (2019–2024):</span> 34 Stephanie St, Toronto. Collaborated alongside founder Susan Stewart to provide ongoing media production, digital archiving, exhibition video documentation, and Nuit Blanche public installation proposals in support of local Toronto artists and collective workspace initiatives.
                </p>
                <p>
                  <span className="font-semibold text-neutral-950">• First Art Collective: Akin Collective (Founder: Oliver Pauk, 2011–2015):</span> Toronto. The first art collective Lim joined; participated in early artist-run shared studio space programming, peer critiques, fabricated Two-Man Rule [TMR] for TEDxToronto (2012), and collaborated with founder Oliver Pauk to hold the community arts & music showcase #LOVELOCAL (2013).
                </p>
                <p>
                  <span className="font-semibold text-neutral-950">• Grassroots Cultural & Performance Sanctuary (2014–2023):</span> Hosted and facilitated autonomous creative environments, independent acoustic salon series (Sofar Sounds), and pro bono production facilities for indie filmmakers, queer diaspora performers, and displaced creatives.
                </p>
                <p>
                  <span className="font-semibold text-neutral-950">• Material Redistribution & Shelter Support (2015–2024):</span> Coordinated physical staging, material aid, and furniture redistribution to community organizations including 101 Ontario Refugee Support Network, Nellie’s Shelter, and Habitat for Humanity.
                </p>
                <p>
                  <span className="font-semibold text-neutral-950">• Hardware & Archival Donations (2024):</span> Directed production and media equipment grants to Charles Street Video (Toronto) to support accessible, low-cost community media production.
                </p>
                <p>
                  <span className="font-semibold text-neutral-950">• COVID-19 Urban Relief Logistics (2020):</span> Operational routing and distribution of commercial food rescue assets to localized shelters during mandatory lockdown closures.
                </p>
              </div>
            </div>

            {/* TECHNICAL CAPABILITIES & MATERIAL MEDIUMS */}
            <div className="space-y-3 border-b border-neutral-300 pb-5">
              <h3 className="text-sm font-bold uppercase tracking-wider font-sans text-neutral-900">
                Technical Capabilities & Material Mediums
              </h3>
              <div className="space-y-2 font-sans text-xs">
                <p>
                  <span className="font-semibold text-neutral-950">• Computational & Hardware Systems: </span>
                  <span className="text-neutral-800">{TECHNICAL_CAPABILITIES.computationalAndHardware.join(', ')}.</span>
                </p>
                <p>
                  <span className="font-semibold text-neutral-950">• Spatial & Optical Media: </span>
                  <span className="text-neutral-800">{TECHNICAL_CAPABILITIES.spatialAndOpticalMedia.join(', ')}.</span>
                </p>
              </div>
            </div>

            {/* INSTITUTIONAL & ARTISTIC CHARACTER REFERENCES */}
            <div className="space-y-3 pt-1">
              <h3 className="text-sm font-bold uppercase tracking-wider font-sans text-neutral-900">
                Institutional & Artistic References
              </h3>
              <div className="space-y-2 font-sans text-xs text-neutral-800">
                {ARTISTIC_REFEREES.map((ref, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="font-semibold text-neutral-950">
                      • {ref.name} — <span className="font-normal text-neutral-850">{ref.role}, {ref.affiliation} ({ref.address})</span>
                    </p>
                    <p className="text-neutral-700 italic pl-4">
                      Relationship: {ref.relationship} · {ref.period}
                    </p>
                    <p className="text-neutral-750 pl-4 leading-relaxed">
                      {ref.institutionalStatement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Standard Contemporary Clean Gallery CV View */
          <div className="space-y-8">
            {/* Top Cards: Education & Academic Credentials */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono-code uppercase tracking-widest text-neutral-600 font-semibold">
                Education & Academic Credentials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {EDUCATION_CREDENTIALS.map(edu => (
                  <div
                    key={edu.id}
                    className="p-4 bg-white border border-neutral-250 rounded-lg space-y-2 hover:border-neutral-400 shadow-xs transition-colors"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-neutral-950 font-serif-display">
                        {edu.degreeOrCert}
                      </h4>
                      <p className="text-xs font-mono-code text-neutral-600">
                        {edu.institution} · {edu.location}
                      </p>
                    </div>
                    {edu.focus && (
                      <p className="text-xs text-neutral-700 font-sans italic">
                        Focus: {edu.focus}
                      </p>
                    )}
                    {edu.honorsAndRoles && (
                      <ul className="text-xs text-neutral-700 font-sans space-y-1">
                        {edu.honorsAndRoles.map((hr, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 text-neutral-600">
                            <span className="text-neutral-400">▪</span>
                            <span>{hr}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Research & Technical Leadership Cards */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono-code uppercase tracking-widest text-neutral-600 font-semibold">
                Research, Technical & Studio Leadership
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {RESEARCH_AND_TECHNICAL_LEADERSHIP.map(lead => (
                  <div
                    key={lead.id}
                    className="p-4 bg-white border border-neutral-250 rounded-lg space-y-2 hover:border-neutral-400 shadow-xs transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-bold text-neutral-950 font-serif-display">
                            {lead.role}
                          </h4>
                          <p className="text-xs font-mono-code text-neutral-600">
                            {lead.organization} · {lead.location}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono-code px-2 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-250 rounded whitespace-nowrap font-medium">
                          {lead.year}
                        </span>
                      </div>
                      {lead.details && (
                        <p className="text-xs text-neutral-700 font-sans leading-relaxed">
                          {lead.details}
                        </p>
                      )}
                    </div>
                    {lead.id === 'motion-and-still-leadership' && onOpenAppliedPractice && (
                      <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono-code mt-1">
                        <span className="text-neutral-500 italic">Archival records available</span>
                        <button
                          onClick={onOpenAppliedPractice}
                          className="text-amber-700 hover:text-amber-900 underline cursor-pointer font-medium"
                        >
                          View Retrospective →
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Filter buttons & Studio Lineage Notice */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1 p-1 bg-white border border-neutral-250 rounded-lg max-w-fit shadow-xs">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs font-mono-code rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      selectedCategory === cat.id
                        ? 'bg-neutral-950 text-white font-medium shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="text-[11px] font-mono-code text-neutral-700 bg-white border border-neutral-250 px-3 py-1.5 rounded-lg shadow-2xs">
                <span className="font-semibold text-neutral-950">Studio Lineage:</span> Akin Collective · Motion & Still · Flick the Switch
                <span className="text-neutral-400 mx-2">·</span>
                <span className="text-neutral-500 italic">Spatial installations produced via studio tenures; sculptural bronze casting at OCAD University</span>
              </div>
            </div>

            {/* CV Entry List Table */}
            <div className="border border-neutral-250 rounded-lg overflow-hidden bg-white shadow-xs">
              <div className="divide-y divide-neutral-200">
                {filteredEntries.map(entry => (
                  <div
                    key={entry.id}
                    className="p-4 sm:p-5 hover:bg-neutral-50/80 transition-colors grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline"
                  >
                    {/* Year Column */}
                    <div className="md:col-span-2 text-xs font-mono-code text-neutral-900 font-bold tabular-nums">
                      {entry.year}
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-7 space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-serif-display font-bold text-neutral-950">
                          {entry.title}
                        </h4>
                        <span className="text-[10px] font-mono-code text-neutral-600 uppercase px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-250">
                          {entry.category}
                        </span>
                      </div>
                      <p className="text-xs font-mono-code text-neutral-600">
                        {entry.venueOrPublisher}
                      </p>
                      {entry.notes && (
                        <p className="text-xs text-neutral-700 leading-relaxed font-sans pt-1">
                          {entry.notes.split(/(https:\/\/[^\s]+)/g).map((part, i) =>
                            part.startsWith('https://') ? (
                              <a
                                key={i}
                                href={part}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:text-blue-900 underline font-mono text-[11px] break-all inline-block"
                              >
                                {part}
                              </a>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      )}
                    </div>

                    {/* Role & Location Column */}
                    <div className="md:col-span-3 text-left md:text-right space-y-0.5">
                      <div className="text-xs font-mono-code text-neutral-800 font-medium">
                        {entry.location}
                      </div>
                      {entry.roleOrContext && (
                        <div className="text-[11px] font-mono-code text-neutral-500">
                          {entry.roleOrContext}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Capabilities & Material Mediums Card */}
            <div className="p-6 bg-white border border-neutral-250 rounded-lg space-y-5 shadow-xs">
              <div>
                <h3 className="text-xs font-mono-code uppercase tracking-widest text-neutral-600 font-semibold">
                  Technical Capabilities & Material Mediums
                </h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Engineered materials, computational frameworks, and physical studio capabilities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-mono-code text-neutral-900 font-bold mb-2.5">
                    Computational & Hardware Systems
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {TECHNICAL_CAPABILITIES.computationalAndHardware.map((item, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-mono-code bg-neutral-100 border border-neutral-250 text-neutral-800 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono-code text-neutral-900 font-bold mb-2.5">
                    Spatial & Optical Media
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {TECHNICAL_CAPABILITIES.spatialAndOpticalMedia.map((item, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-mono-code bg-neutral-100 border border-neutral-250 text-neutral-800 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Community & Artistic Character References Card */}
            <div className="p-6 bg-white border border-neutral-250 rounded-lg space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-mono-code uppercase tracking-widest text-neutral-800 font-semibold">
                    Artistic & Community Character References (Institutional Juries & Residency Panels)
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1">
                    Firsthand testimony to artistic dedication, peer generosity, collective stewardship, and production reliability.
                  </p>
                </div>
                <span className="text-[10px] font-mono-code px-2 py-0.5 bg-neutral-100 border border-neutral-300 text-neutral-700 rounded font-medium">
                  Referee Dossier
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {ARTISTIC_REFEREES.map((ref, idx) => (
                  <div key={idx} className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-neutral-200 pb-2">
                      <div>
                        <h4 className="text-sm font-serif-display font-bold text-neutral-950">
                          {ref.name}
                        </h4>
                        <p className="text-xs font-mono-code text-neutral-600">
                          {ref.role}, {ref.affiliation} · {ref.address}
                        </p>
                      </div>
                      <span className="text-xs font-mono-code text-amber-800 font-semibold whitespace-nowrap">
                        {ref.period}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-800 font-serif-display leading-relaxed">
                      {ref.institutionalStatement}
                    </p>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono-code text-neutral-500 uppercase tracking-wider block font-semibold">
                        Endorsement Scope & Collaborative Linchpins:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {ref.endorsementPillars.map((pillar, pIdx) => (
                          <span
                            key={pIdx}
                            className="px-2 py-0.5 text-[11px] font-mono-code bg-white border border-neutral-250 text-neutral-800 rounded shadow-2xs"
                          >
                            ▪ {pillar}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Formative Collective Affiliation Note */}
              <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-lg text-xs space-y-1">
                <span className="text-[10px] font-mono-code text-amber-900 uppercase tracking-wider font-bold block">
                  First Art Collective Joined (Formative Lineage):
                </span>
                <p className="text-neutral-800">
                  <strong className="font-semibold text-neutral-950">Akin Collective (Founder: Oliver Pauk) · 2011–2015:</strong> The very first art collective Gwendalynn Lim joined. Together with founder Oliver Pauk, they co-organized and held the collaborative community showcase <strong className="font-semibold text-neutral-950">#LOVELOCAL</strong> (2013), and engineered and fabricated the cooperative camera installation <em>Two-Man Rule [TMR]</em> (2012). <span className="text-neutral-600 italic">(Note: Oliver Pauk was the collective founder, not a formal referee).</span>
                </p>
              </div>
            </div>

            {/* Institutional Footnote */}
            <div className="p-4 bg-neutral-100 border border-neutral-250 rounded text-xs font-mono-code text-neutral-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>Verified Institutional Record · Singapore (2010 — 2026 Archive)</span>
              <span>B.Sc. (Honours) in Applied Computing, SIT · Community Referee: Susan Stewart (Flick the Switch) · Formative Collective: Akin (#LOVELOCAL)</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
