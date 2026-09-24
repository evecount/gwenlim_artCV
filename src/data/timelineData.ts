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
    description: 'Founded and operated a multi-camera daylight facility at 90 Ontario; hosted Sofar Sounds acoustic concerts, funded indie filmmakers, and executed material redistribution.'
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
    tagline: 'Zero-knowledge neural architectures, non-human syntax & quantum systems',
    description: 'Formal academic computer science honours at SIT, investigating high-dimensional latent space representations, Klingon syntax alignment, and trapped-ion benchmarking.'
  }
];

export const TRAJECTORY_MILESTONES: TrajectoryMilestone[] = [
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
    id: 'm-2011-akin-collective',
    year: 2011,
    yearDisplay: '2011 — 2015',
    title: 'Akin Collective Residency & Shared Infrastructure',
    category: 'studio-infrastructure',
    categoryLabel: 'Artist-Run Shared Studio & Solidarity',
    venueOrContext: 'Akin Collective (Co-Founder Oliver Pauk)',
    location: 'Toronto, Canada',
    role: 'Studio Resident & Community Collaborator',
    summary: 'Participated in early artist-run shared studio space programming, peer critiques, and community initiatives including the #LoveLocal arts fundraiser (2013).',
    technicalDossier: [
      'Dismantling economic barriers for working visual artists',
      'Shared darkroom, fabrication bench, and communal critique cycles',
      'Grassroots cultural fundraising (#LoveLocal arts auction 2013)'
    ],
    significance: 'Formative immersion in Canadian artist-run centers (ARCs), establishing the solidarity economics that anchored Lim’s next 15 years of space-sharing.',
    associatedLinkType: 'cv',
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
    yearDisplay: '2014 — 2023',
    title: 'Motion and Still Inc.: Daylight Facility & Production Sanctuary',
    category: 'studio-infrastructure',
    categoryLabel: 'Spatial Infrastructure & Optical Cinematography',
    venueOrContext: '90 Ontario Street Studio Facility',
    location: 'Toronto, Canada',
    role: 'Founder & Creative Director',
    summary: 'Directed a multi-disciplinary visual production studio and spatial facility specializing in high-end optical cinematography, continuous lighting physics, and interactive brand activations.',
    technicalDossier: [
      '3,500 sq ft daylight studio with 18-foot ceilings & 3-phase 100A camlock power',
      'Arri HMI continuous lighting, precision camera track dollies & optical gantry',
      'Hosted Sofar Sounds acoustic salon series & pro bono indie film residencies',
      'Redistributed staging assets to 101 Ontario Refugee Network & Nellie’s Shelter'
    ],
    significance: 'Proved operational scale, physical build mastery, and heavy electrical engineering, establishing an independent resource engine for the Toronto arts community.',
    associatedLinkType: 'applied-practice',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20'
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
    significance: 'Demonstrated enduring commitment to peer artist solidarity and public-art collaboration through COVID-19 closures, serving as a core institutional referee anchor for SAM.',
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
    role: 'B.Sc. (Honours) Scholar & Guest Lecturer',
    summary: 'Formal pivot into rigorous computational systems: Machine Learning Architectures, Graph Neural Networks, and Distributed Systems at SIT; NTU PACE Advanced Cert in Data Science & AI.',
    technicalDossier: [
      'Graph Neural Networks (GNNs), Transformer attention topologies, and PyTorch',
      'Distributed systems clustering, CUDA acceleration, and low-latency inference',
      'Guest Lecturer & Mentor for Machine Learning & Advanced AI Systems (NTU IEEE)'
    ],
    significance: 'Grounded sixteen years of intuitive optical and hardware inquiry into rigorous mathematical foundations and computer science theory.',
    associatedLinkType: 'cv',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/20'
  },
  {
    id: 'm-2026-klingon-topology',
    year: 2026,
    yearDisplay: '2026',
    title: 'The Klingon Topology: Zero-Knowledge LLM Training',
    category: 'computational-research',
    categoryLabel: 'Frontier AI Research & Machine Interiority',
    venueOrContext: 'Independent Computational Research & Systems Installation',
    location: 'Singapore',
    role: 'Chief Architect & Computational Artist',
    summary: 'Investigation into non-human linguistic structures (tlhIngan Hol syntax), distributional semantics, and neural representation alignment under deliberate informational obscurity.',
    technicalDossier: [
      'Object-Verb-Subject (OVS) synthetic grammar corpus parsing',
      'Zero-knowledge latent vector projection and geometric token curvature analysis',
      'Electromagnetic speaker transducers transducing synthetic phoneme tokens into physical plinth resonance'
    ],
    significance: 'Lim’s magnum opus in machine interiority: proving non-human linguistic topologies can break the semantic hegemony of corporate Anglo-American LLM models.',
    associatedArtworkId: 'klingon-topology',
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
    id: 'm-2026-sam-proposal',
    year: 2026,
    yearDisplay: '2026 — 2027',
    title: 'Singapore Art Museum (SAM) Residencies Proposal',
    category: 'artwork',
    categoryLabel: 'Institutional Residency & Public Exhibition',
    venueOrContext: 'Singapore Art Museum (SAM) Residencies Cycle',
    location: 'Tanjong Pagar Distripark, Singapore',
    role: 'Resident Artist Candidate',
    summary: 'The Malayan Topology: Sub-Surface Token Distribution in Singaporean Dialect Manifolds. Proposes a black-box multi-operator spatial installation deconstructing Southeast Asian linguistic ecologies.',
    technicalDossier: [
      '120 sqm black-box gallery footprint, 3-phase 32A power, acoustic isolation',
      'Hokkien, Teochew, Malay, and Singlish vernacular audio token manifolds',
      'Cooperative multi-operator capacitive optical triggers rooted in Two-Man Rule',
      'Backed by 15-year ARC lineage (Akin, Motion & Still, Flick the Switch)'
    ],
    significance: 'Synthesizes sixteen years of practice—participatory optics, spatial infrastructure, mutual aid, and frontier neural architectures—into a definitive museum installation.',
    associatedArtworkId: 'klingon-topology',
    associatedLinkType: 'sam',
    badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-950/20'
  }
];
