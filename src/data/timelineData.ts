export type TrajectoryCategory = 
  | 'artwork' 
  | 'hardware-rig' 
  | 'studio-infrastructure' 
  | 'computational-research' 
  | 'civic-advocacy';

export interface TrajectoryMilestone {
  id: string;
  year: number;
  yearDisplay: string;
  title: string;
  category: TrajectoryCategory;
  categoryLabel: string;
  venueOrContext: string;
  location: string;
  role: string;
  summary: string;
  technicalDossier: string[];
  significance: string;
  associatedArtworkId?: string;
  associatedLinkType?: 'artwork' | 'applied-practice' | 'cv' | 'sam';
  badgeColor: string;
}

export interface TrajectoryEpoch {
  id: string;
  title: string;
  period: string;
  startYear: number;
  endYear: number;
  tagline: string;
  description: string;
}

export const TRAJECTORY_EPOCHS: TrajectoryEpoch[] = [
  {
    id: 'epoch-1',
    title: 'Vernacular Optics & Public Assemblies',
    period: '2010 — 2012',
    startYear: 2010,
    endYear: 2012,
    tagline: 'Deconstructing stylized identity, public gaze & unannounced street intervention',
    description: 'Began with site-specific street portraiture and curated inquiries into persona, ornamentation, and subjecthood under the public gaze (Noise Singapore / National Arts Council).'
  },
  {
    id: 'epoch-2',
    title: 'Tactile Physical Computing & Relational Rigs',
    period: '2012 — 2014',
    startYear: 2012,
    endYear: 2014,
    tagline: 'Hacking DSLR shutters, CCTV loops & physical two-operator interlocks',
    description: 'Transitioned to audience-actuated spatial installations, closed-circuit video matrices, and cooperative camera triggers questioning digital consensus (TEDxToronto, Akin Collective, |FAT|).'
  },
  {
    id: 'epoch-3',
    title: 'Studio Infrastructure, Optical Physics & Mutual Aid',
    period: '2014 — 2023',
    startYear: 2014,
    endYear: 2023,
    tagline: 'Directing Motion and Still Inc., continuous lighting physics & cultural sanctuaries',
    description: 'Founded and operated a network of overlapping Toronto live/work studios for photography, art, pop-ups, classes, performances, and community resource-sharing.'
  },
  {
    id: 'epoch-4',
    title: 'Observer Bias, Optical Physics & Collective Stewardship',
    period: '2019 — 2024',
    startYear: 2019,
    endYear: 2024,
    tagline: 'Directional high-lumen flood arrays, retroreflective sanctuaries & Flick the Switch advocacy',
    description: 'Architected physical sanctuaries dismantling the voyeuristic assumptions of automated digital vision (Deconstructing Capital), exposing how technological capture masquerades as authority, while sustaining grassroots artist advocacy with Susan Stewart.'
  },
  {
    id: 'epoch-5',
    title: 'Frontier Computational Systems & Machine Interiority',
    period: '2024 — 2026',
    startYear: 2024,
    endYear: 2026,
    tagline: 'Riemann spectral topology, quantum chaos & quantum computing',
    description: 'Formal academic computer science honours at SIT, investigating high-dimensional latent space representations, the Riemann hypothesis (evecount/riemann_hypothesis), and trapped-ion quantum benchmarking.'
  }
];

export const TRAJECTORY_MILESTONES: TrajectoryMilestone[] = [
  {
    id: 'm-2008-studio-incubator',
    year: 2008,
    yearDisplay: '2008 — 2010',
    title: 'Studio Apprenticeship: The Lens Factory & Westside Studio',
    category: 'studio-infrastructure',
    categoryLabel: 'Formative Studio Strategy & Operations',
    venueOrContext: 'The Lens Factory / Westside Studio',
    location: 'Toronto, Canada',
    role: 'Business Planning / Full-Time Studio Assistant',
    summary: 'While navigating the Canadian immigration process, Lim used the waiting period as a two-year creative incubator: improving the business plan for Leonard van Bruggen’s photographic art gallery while assisting Shanghoon full-time at Westside Studio.',
    technicalDossier: [
      'The Lens Factory, 2008–2009: photographic gallery business planning with Leonard van Bruggen',
      'Westside Studio, 2008–2010: full-time studio assistance and marketing strategy with Shanghoon',
      'Creative concepts developed during the Westside period were published'
    ],
    significance: 'Established the operational and strategic foundation for the independent studios Lim would later build and direct.',
    associatedLinkType: 'cv',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20'
  },
  {
    id: 'm-2010-press-assignments',
    year: 2010,
    yearDisplay: 'June — October 2010',
    title: 'Three Landmark Toronto Press Assignments',
    category: 'civic-advocacy',
    categoryLabel: 'Accredited Photojournalism',
    venueOrContext: 'G20 Toronto Summit / Royal Tour / Dalai Lama Toronto Visit',
    location: 'Toronto, Canada',
    role: 'Press Photographer',
    summary: 'Within five months, Lim photographed three major international visits in Toronto: President Barack Obama at the G20 Summit, Queen Elizabeth II during her 22nd Royal Tour, and His Holiness the 14th Dalai Lama during his three-day visit.',
    technicalDossier: [
      'June 2010 — President Barack Obama at the G20 Toronto Summit',
      'July 2010 — Queen Elizabeth II during a dense Toronto programme spanning St. James Cathedral, Woodbine Racetrack, Queen’s Park, and a dinner hosted by Prime Minister Stephen Harper at Pinewood Toronto Studios',
      'October 2010 — His Holiness the 14th Dalai Lama during the visit that included an address to 18,000 people at Rogers Centre and the inauguration of the Tibetan Canadian Cultural Centre'
    ],
    significance: 'These surviving photographs document the scale and access of Lim’s early field practice before she moved into editorial leadership at Toronto Social Review.',
    associatedLinkType: 'cv',
    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-950/20'
  },
  {
    id: 'm-2010-perfect-world',
    year: 2010,
    yearDisplay: '2010 — 2011',
    title: 'A Perfect World: Street Portraiture Intervention',
    category: 'artwork',
    categoryLabel: 'Site-Specific Relational Intervention',
    venueOrContext: 'Kensington Market Urban Commons',
    location: 'Toronto, Canada',
    role: 'Lead Artist & Photographer',
    summary: 'Site-specific street portraiture and relational aesthetic series confronting urban anonymity, communal memory, and the social contract between the lens and the subject.',
    technicalDossier: [
      'Medium-format analog & manual 35mm optical capture',
      'Unannounced street-level encounters & collaborative consent',
      'Immediate print-return to subjects as relational gesture'
    ],
    significance: 'Established Lim’s lifelong investigation into the ethical boundary between the recording apparatus and human interiority.',
    associatedArtworkId: 'perfect-world',
    associatedLinkType: 'artwork',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/20'
  },
  {
    id: 'm-2011-noise-singapore',
    year: 2011,
    yearDisplay: '2011 — 2012',
    title: 'Noise Singapore Festival Exhibition: White Geisha & Silver Aurelia',
    category: 'artwork',
    categoryLabel: 'Curated Museum / Festival Exhibition',
    venueOrContext: 'National Arts Council (NAC) Curated Exhibition',
    location: 'Singapore',
    role: 'Exhibiting Artist',
    summary: 'Curated photographic inquiry into stylized identity, visual ornamentation, and the performative boundary between persona and subjecthood under the public gaze.',
    technicalDossier: [
      'High-contrast theatrical studio lighting & controlled chiaroscuro',
      'Elaborate physical costuming, body ornamentation & mask mechanics',
      'Large-scale fine art archival giclée prints on metallic substrates'
    ],
    significance: 'Early institutional recognition from the National Arts Council Singapore, exploring how visual apparatuses construct fictionalized identities.',
    associatedArtworkId: 'noise-singapore',
    associatedLinkType: 'artwork',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/20'
  },
  {
    id: 'm-2011-toronto-social-review',
    year: 2011,
    yearDisplay: '2011 — 2014',
    title: 'Toronto Social Review: Editorial Leadership',
    category: 'studio-infrastructure',
    categoryLabel: 'Editorial Systems & Cultural Documentation',
    venueOrContext: 'Toronto Social Review',
    location: 'Toronto, Canada',
    role: 'Editor in Chief',
    summary: 'Built and directed an editorial operation covering approximately 350 events across Toronto’s film, art, gallery, gala, and charity circuits, evolving earlier field photojournalism into a coordinated cultural media system.',
    technicalDossier: [
      'Directed correspondent logistics across TIFF, Fashion Art Toronto, CBCMusic.ca Festival, The Pages Festival, theatre premieres, Nuit Blanche, and civic galas',
      'Managed complex media accreditation, exclusive access, and business development',
      'Developed interactive editorial formats that increased readership and revenue by 30%',
      'Built on 60–80 earlier SNAP Downtown Toronto field assignments, including JUNO Week and Bloor Street Entertains'
    ],
    significance: 'Connected on-the-ground cultural documentation with large-scale editorial direction, audience growth, and sustainable media operations.',
    associatedLinkType: 'cv',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20'
  },
  {
    id: 'm-2012-akin-collective',
    year: 2012,
    yearDisplay: '2011 — 2015',
    title: 'First Art Collective: Akin Collective & #LOVELOCAL',
    category: 'studio-infrastructure',
    categoryLabel: 'First Art Collective & Community Collaboration',
    venueOrContext: 'Akin Collective (Founder: Oliver Pauk)',
    location: 'Toronto, Canada',
    role: 'Studio Resident & Community Collaborator',
    summary: 'The first art collective Lim joined, founded by Oliver Pauk. Held the collaborative community showcase #LOVELOCAL (2013), participated in early shared studio residency and peer critiques, and fabricated Two-Man Rule [TMR] for TEDxToronto (2012).',
    technicalDossier: [
      'First art collective joined (2011–2015), providing early shared studio residency and peer critiques',
      'Co-organized and held the collaborative community showcase #LOVELOCAL with founder Oliver Pauk (2013)',
      'Fabrication and circuit testing of Two-Man Rule [TMR] debuting at TEDxToronto (Sony Centre, 2012)',
      'Community space-sharing ethics establishing 15-year ARC lineage'
    ],
    significance: 'Formative immersion in Canadian artist-run centers (ARCs), establishing the solidarity economics that anchored Lim’s next 15 years of space-sharing.',
    associatedArtworkId: 'two-man-rule',
    associatedLinkType: 'artwork',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20'
  },
  {
    id: 'm-2012-two-man-rule',
    year: 2012,
    yearDisplay: '2012',
    title: 'Two-Man Rule: Dual-Switch Interlock Rig',
    category: 'hardware-rig',
    categoryLabel: 'Participatory Installation & Structural Architecture',
    venueOrContext: 'TEDxToronto, The Sony Centre for the Performing Arts',
    location: 'Toronto, Canada',
    role: 'Architect, Physical Computing Engineer & Lead Artist',
    summary: 'Hand-constructed geodesic tape dome featuring a dual-switch shutter rig requiring two simultaneous, cooperative physical participants to actuate an automated camera capture.',
    technicalDossier: [
      '14-foot geodesic dome fabricated entirely from packing tape & EMT conduit',
      'Dual capacitive momentary switches wired in series with optocoupler circuit',
      'Automated DSLR trigger relay requiring simultaneous physical touch within 150ms',
      'Real-time automated projector feed projecting mutual portraits onto exterior dome skin'
    ],
    significance: 'Pioneered mutual consensus mechanics in participatory photography, subverting solitary snapshot vanity into bilateral physical cooperation.',
    associatedArtworkId: 'two-man-rule',
    associatedLinkType: 'artwork',
    badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-950/20'
  },
  {
    id: 'm-2012-broadcast-people',
    year: 2012,
    yearDisplay: '2012',
    title: 'Broadcast People: Kinetic Closed-Circuit Matrix',
    category: 'hardware-rig',
    categoryLabel: 'Closed-Circuit Feedback & Kinetic Actuation',
    venueOrContext: '|FAT| Toronto Alternative Arts & Fashion Week',
    location: 'Toronto, Canada',
    role: 'Installation Artist & Systems Engineer',
    summary: 'A wall-scale closed-circuit television (CCTV) matrix paired with a prominent tactile floor switch. Stepping onto the actuator placed the viewer within an instant feedback loop.',
    technicalDossier: [
      '12-CRT television video matrix with analog BNC composite splitters',
      'Heavy-duty industrial tactile treadle switch embedded in gallery floor',
      'Instant video feedback loop inducing optical infinite recursion',
      'High-voltage safety relays and analog video amplifiers'
    ],
    significance: 'Critiqued the performative compulsion of the modern gaze and institutional observer bias before algorithmic social feeds became ubiquitous.',
    associatedArtworkId: 'broadcast-people',
    associatedLinkType: 'artwork',
    badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-950/20'
  },
  {
    id: 'm-2013-media-pavilions',
    year: 2013,
    yearDisplay: '2013',
    title: 'Interactive Media Pavilions',
    category: 'hardware-rig',
    categoryLabel: 'Physical Computing & Spatial Portraiture',
    venueOrContext: 'Toronto Design Offsite Festival (TO DO) / IDS',
    location: 'Toronto, Canada',
    role: 'Physical Computing Designer & Lead Artist',
    summary: 'Audience-actuated mobile portraiture booths exploring tactile triggers, decentralized image distribution, and live participatory engagement.',
    technicalDossier: [
      'Custom CNC-milled plywood kiosk geometry with concealed camera ports',
      'Arduino microcontrollers driving addressable LED feedback halos',
      'Direct thermal receipt printer outputting low-fidelity image tokens'
    ],
    significance: 'Bridged digital camera sensors with physical paper artifacts, investigating how computational interfaces commodify the subject’s visage.',
    associatedArtworkId: 'ultimate-selfie',
    associatedLinkType: 'artwork',
    badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-950/20'
  },
  {
    id: 'm-2014-ultimate-selfie',
    year: 2014,
    yearDisplay: '2014',
    title: 'The Ultimate Selfie: Automated Extraction Booths',
    category: 'artwork',
    categoryLabel: 'Hacked DSLR Hardware & Algorithmic Extraction',
    venueOrContext: 'Interior Design Show / IIDEX / Metro Toronto Convention Centre',
    location: 'Toronto, Canada',
    role: 'Lead Artist & Hardware Hacker',
    summary: 'Custom-engineered interactive booths featuring disassembled DSLR hardware, micro-switches, and automated social-feed deployment pipelines exploring algorithmic narcissism.',
    technicalDossier: [
      'Disassembled Canon 5D Mark II shutter solenoid soldered to external relays',
      'Raspberry Pi daemon managing automated tethered capture and EXIF stripping',
      'Python headless script transmitting images to real-time public Twitter/Tumblr APIs',
      'Audience actuated via oversized red emergency industrial stop button'
    ],
    significance: 'Precursor to contemporary critique of algorithmic observer bias and automated extraction loops of public self-documentation.',
    associatedArtworkId: 'ultimate-selfie',
    associatedLinkType: 'artwork',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/20'
  },
  {
    id: 'm-2014-motion-and-still',
    year: 2014,
    yearDisplay: '2014 — 2024',
    title: 'Motion and Still: A Network of Live/Work Studios',
    category: 'studio-infrastructure',
    categoryLabel: 'Spatial Infrastructure & Optical Cinematography',
    venueOrContext: '90 Ontario · 77 Florence · 52 St Lawrence · 53 Gladstone',
    location: 'Toronto, Canada',
    role: 'Founder & Creative Director',
    summary: 'Directed several overlapping Toronto studios rather than a single fixed facility. Each was a working home for photography, content production, art, classes, pop-ups, performances, and the informal life between them.',
    technicalDossier: [
      '403–90 Ontario Street: primary address by February 2019; redevelopment later forced a move in which the full artist catalogue was lost',
      'Unit 301, 77 Florence Street: skylit studio opened in March 2020 and renewed in 2021 despite the difficult timing',
      'Unit 308, 52 St Lawrence Street: 2020–2024, the final Toronto studio, filled with plants and the accumulated joys of earlier spaces',
      '53 Gladstone Avenue: overlapping live/work studio, April 2022–April 2023'
    ],
    significance: 'Together, the studios formed a flexible cultural infrastructure for making, paid production, gatherings, mutual aid, and shared access across a decade of Toronto practice.',
    associatedLinkType: 'applied-practice',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20'
  },
  {
    id: 'm-2014-community-stewardship',
    year: 2014,
    yearDisplay: '2014 — 2024',
    title: 'Community Stewardship & Pro Bono Production',
    category: 'civic-advocacy',
    categoryLabel: 'Direct Aid · Non-Profit Production · Grassroots Incubation',
    venueOrContext: 'Motion and Still Studio Network',
    location: 'Toronto, Canada',
    role: 'Studio Steward & Pro Bono Production Lead',
    summary: 'Converted commercial studio infrastructure into a sustained mutual-aid resource, donating space, furniture, equipment, and production services across Toronto’s shelter, non-profit, refugee-support, and grassroots arts networks.',
    technicalDossier: [
      'Direct community aid to Nellie’s Shelter, Toronto Humane Society, and the Salvation Army through furniture, equipment, and production-service donations',
      'Pro bono visual and production support for Kerry’s Place Autism Services and Habitat for Humanity',
      'Fundraisers, refugee-support activity, and professional studio access for communities and organizers otherwise priced out of commercial production',
      'Equipment redistribution to Charles Street Video, extending studio assets into accessible community media production'
    ],
    significance: 'Made community stewardship an operational practice rather than a side program: the same infrastructure that served major commercial clients also remained available for direct aid, advocacy, and grassroots incubation.',
    associatedLinkType: 'cv',
    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-950/20'
  },
  {
    id: 'm-2019-flick-the-switch',
    year: 2019,
    yearDisplay: '2019 — 2024',
    title: 'Flick the Switch Artists’ Collective Partnership',
    category: 'civic-advocacy',
    categoryLabel: 'Grassroots Collective & Video Archival Lead',
    venueOrContext: 'Flick the Switch (34 Stephanie St, Dir. Susan Stewart)',
    location: 'Toronto, Canada',
    role: 'Media Lead & Collective Member',
    summary: 'Collaborated alongside founder Susan Stewart to provide ongoing media production, digital archiving, exhibition video documentation, and Nuit Blanche public installation proposals.',
    technicalDossier: [
      'Pro bono video documentary and digital archiving for 30+ Toronto visual artists',
      'Workspace advocacy and pandemic studio preservation campaigns',
      'Collaborative large-scale public art proposals for Toronto Nuit Blanche',
      '5-year longitudinal partnership sustaining grassroots peer arts ecosystems'
    ],
    significance: 'Demonstrated enduring commitment to peer artist solidarity and public-art collaboration through COVID-19 closures, serving as a core institutional referee anchor for museum and residency juries.',
    associatedLinkType: 'sam',
    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-950/20'
  },
  {
    id: 'm-2020-deconstructing-capital',
    year: 2020,
    yearDisplay: '2020',
    title: 'Deconstructing Capital: Sanctuaries Against Observer Bias',
    category: 'artwork',
    categoryLabel: 'Site-Specific Optical Intervention & Performance',
    venueOrContext: '52 St. Lawrence Spatial Intervention',
    location: 'Toronto, Canada',
    role: 'Spatial Architect, Optical Designer & Performer',
    summary: 'Interactive spatial intervention utilizing layered optical scrims, directional high-lumen flood arrays, and camera-jamming retroreflective surfaces to dismantle institutional observer bias—confronting voyeurism masquerading as authority.',
    technicalDossier: [
      'Dual-layer sheer theatre scrims creating variable moiré interference patterns',
      '30,000-lumen directional LED flood bank calibrated to blow out CMOS sensors',
      '3M Scotchlite retroreflective micro-prismatic panels returning 98% flash reflection',
      'Choreographed human movement exploiting digital vision sensor saturation curves'
    ],
    significance: 'Subverted institutional observer bias by using optical physics rather than software obfuscation, establishing spatial privacy sanctuaries against the unexamined entitlement of automated tracking.',
    associatedArtworkId: 'deconstructing-capital',
    associatedLinkType: 'artwork',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/20'
  },
  {
    id: 'm-2020-covid-relief',
    year: 2020,
    yearDisplay: '2020 — 2021',
    title: 'COVID-19 Urban Relief Logistics & Mutual Aid',
    category: 'civic-advocacy',
    categoryLabel: 'Emergency Mutual Aid Logistics',
    venueOrContext: 'Emergency Urban Relief Network',
    location: 'Toronto, Canada',
    role: 'Operations & Routing Lead',
    summary: 'Operational routing and distribution of commercial food rescue assets and hygiene supplies to localized shelters during mandatory lockdown closures.',
    technicalDossier: [
      'Rapid GIS route optimization for volunteer delivery fleets',
      'Cold-chain redistribution of commercial food surplus to community kitchens',
      'Direct logistical support to unhoused populations during emergency curfews'
    ],
    significance: 'Emphasized physical solidarity and supply-chain logistics during acute civic crises, reflecting deep commitment to mutual aid.',
    associatedLinkType: 'cv',
    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-950/20'
  },
  {
    id: 'm-2024-csv-donations',
    year: 2024,
    yearDisplay: '2024',
    title: 'Charles Street Video (CSV) Hardware Endowment',
    category: 'civic-advocacy',
    categoryLabel: 'Community Media Infrastructure Grant',
    venueOrContext: 'Charles Street Video (CSV)',
    location: 'Toronto, Canada',
    role: 'Equipment Grantor',
    summary: 'Directed production and media equipment grants to Charles Street Video (Toronto) to support accessible, low-cost community media production.',
    technicalDossier: [
      'Grant of broadcast-grade optics, continuous lighting units, and audio rigs',
      'Re-allocated to non-profit checkout pool for low-income independent filmmakers',
      'Permanent archival equipment support for queer and diaspora artists'
    ],
    significance: 'Completed the life-cycle of Motion and Still’s physical assets by redistributing them into Toronto’s oldest artist-run media center.',
    associatedLinkType: 'cv',
    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-950/20'
  },
  {
    id: 'm-2024-academic-pivot',
    year: 2024,
    yearDisplay: '2024 — 2026',
    title: 'Applied Computing Honours & Frontier Neural Architectures',
    category: 'computational-research',
    categoryLabel: 'Academic Computer Science & AI Systems',
    venueOrContext: 'Singapore Institute of Technology (SIT) & NTU PACE',
    location: 'Singapore',
    role: 'Applied Computing Honours Student & Teaching Aide',
    summary: 'Formal pivot into rigorous computational systems: Machine Learning Architectures, Graph Neural Networks, and Distributed Systems at SIT; NTU PACE Advanced Cert in Data Science & AI.',
    technicalDossier: [
      'Graph Neural Networks (GNNs), Transformer attention topologies, and PyTorch',
      'Distributed systems clustering, CUDA acceleration, and low-latency inference',
      'Teaching Aide for NTU PACE SkillsFuture (SCTP) cohorts & Cybrdeck startup open house facilitator'
    ],
    significance: 'Grounded sixteen years of intuitive optical and hardware inquiry into rigorous mathematical foundations and computer science theory.',
    associatedLinkType: 'cv',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/20'
  },
  {
    id: 'm-2026-riemann-manifold',
    year: 2026,
    yearDisplay: '2026',
    title: 'The Riemann Manifold: Quantum Chaos & Spectral Topology',
    category: 'computational-research',
    categoryLabel: 'Quantum Computing & Spectral Topology',
    venueOrContext: 'Computational Systems Installation / High-Dimensional Generative Topology',
    location: 'Singapore',
    role: 'Chief Architect & Computational Artist',
    summary: 'Algorithmic investigation into the non-trivial zeros of the Riemann zeta function and prime distribution along the critical strip (Re(s) = 1/2). Bridges quantum operator eigenvalues, random matrix statistics (GUE), and algorithmic interference patterns to interrogate deterministic chaos, machine-mediated mathematical observation, and non-human systemic harmony. (Repo: evecount/riemann_hypothesis)',
    technicalDossier: [
      'Hilbert-Pólya conjecture spectral operator simulation mapping Riemann zeta zeros',
      'Gaussian Unitary Ensemble (GUE) random matrix eigenvalue distribution engine',
      '4096-dimensional Riemannian manifold projection and real-time critical strip interference (Repo: evecount/riemann_hypothesis)',
      'Sub-bass acoustic transducers converting prime resonances into 38Hz–94Hz spatial vibrations'
    ],
    significance: 'Bridges quantum computing theory with high-dimensional generative installation: establishing mathematical truth as an autonomous, non-human infrastructure of relational frequencies and cosmic interdependence.',
    associatedArtworkId: 'riemann-manifold',
    associatedLinkType: 'artwork',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/20'
  },
  {
    id: 'm-2026-quantum-systems',
    year: 2026,
    yearDisplay: '2026',
    title: 'Eve Count Quantum Systems & Cybrdeck Co-Founding',
    category: 'computational-research',
    categoryLabel: 'Quantum Computing & Sovereign Hardware',
    venueOrContext: 'Eve Count Quantum Systems / Cybrdeck',
    location: 'Singapore',
    role: 'CEO & CTO / Co-Founder',
    summary: 'Leading frontier engineering in quantum computing architectures, dissipative decoupling fields, trapped-ion benchmarking, and sovereign hardware decks.',
    technicalDossier: [
      'Trapped-ion qubit state coherence and microwave control pulses',
      'Dissipative decoupling field modeling for quantum noise suppression',
      'Custom modular cyberdeck hardware enclosures for localized neural inference'
    ],
    significance: 'Bridges deep speculative theory with industrial hardware realization, placing Lim at the frontier of sovereign post-cloud computational design.',
    associatedLinkType: 'cv',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/20'
  },
  {
    id: 'm-2026-hackathon-recognition',
    year: 2026,
    yearDisplay: '2026',
    title: 'Current AI Architecture & Community Systems: AICO First Place & SAIA Best UX',
    category: 'civic-advocacy',
    categoryLabel: 'Applied AI · Community Technology & Agentic Frameworks',
    venueOrContext: 'Microsoft AICO 2026 Ideathon / Singapore AI Association (SAIA) Hack for Humanity',
    location: 'Singapore',
    role: 'Systems Architect & UX Lead',
    summary: 'Two 2026 hackathon recognitions: First Place at the Microsoft AICO Ideathon for a dual-agent, open-data financial-literacy system (with Nadeetha Wahalathanthri), and Honorable Mention (Best UX) at SAIA Hack for Humanity for LobangKaki (甘榜通) — a voice-first, no-sign-in community assistant bridging technological access gaps across four languages.',
    technicalDossier: [
      'Microsoft AICO 2026 Ideathon (First Place): dual-agent system integrated with open data for financial literacy',
      'LobangKaki (SAIA, Best UX): voice-first Web Speech interface with spoken replies in English/Singlish, Mandarin, Malay, and Tamil',
      'No account, no download, zero PII — designed for seniors excluded by app stores, logins, and English-only portals',
      '"No phantom deals" trust model: physical stall grounding (~100 m), volunteer community chop, automatic anomaly withdrawal',
      'Hyperlocal grounding to 123 real hawker centres from Data.gov.sg; React 19 + TanStack Start (Repo: evecount/lobangkaki)'
    ],
    significance: 'Directly translates a decade-long ethos of community mutual aid into modern agentic frameworks — technology judged first by how tactile and usable it is for the people it serves.',
    associatedLinkType: 'cv',
    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-950/20'
  },
  {
    id: 'm-2026-sam-proposal',
    year: 2026,
    yearDisplay: '2026 — 2027',
    title: 'Future Work: The Riemann Manifold Proposal',
    category: 'artwork',
    categoryLabel: 'Future Work · Research Proposal',
    venueOrContext: 'Research & Studio Residency Cycle (Beyond Human / Interdependence)',
    location: 'Singapore',
    role: 'Lead Artist & Researcher',
    summary: 'The Riemann Manifold: Quantum Chaos & Spectral Topology (evecount/riemann_hypothesis). Proposes a spatial black-box installation investigating non-human mathematical infrastructure and human-AI cognitive interdependence.',
    technicalDossier: [
      '100 — 140 sqm black-box gallery footprint, 3-phase 32A power, acoustic isolation',
      '4,096-strand bare multimode optical fiber matrix with 4K laser caustic projection',
      'Piezoelectric surface transducers conducting 38Hz–94Hz Riemann zero vibrational harmonics',
      'Open-source reproducible mathematical engine (evecount/riemann_hypothesis) with sovereign local GPU inference'
    ],
    significance: 'Synthesizes sixteen years of spatial and physical computing practice into a museum-grade inquiry exploring human intuition and machine intelligence as two sides of the same coin.',
    associatedArtworkId: 'riemann-manifold',
    associatedLinkType: 'sam',
    badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-950/20'
  }
];
