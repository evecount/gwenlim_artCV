import { Artwork, CVEntry, AppliedPracticeArchiveItem, ArtworkImage, InstitutionalAffiliation, TechnicalCapabilities, AcademicCredential, TechnicalLeadershipRole } from '../types/portfolio';

export const ARTIST_INFO = {
  name: 'Gwendalynn Lim Wan Ting',
  chineseName: '林婉婷',
  role: 'Installation, Physical Computing, and Media-Arts Practice',
  timeline: '2010 — 2026',
  location: 'Singapore',
  education: 'B.Sc. (Honours) Applied Computing, SIT · SCTP Adv. Cert. in Data Science & AI, NTU PACE · Diploma in Media & Communication, Singapore Polytechnic',
  focus: 'Participatory lens mechanics, critique of observer bias, physical computing, and machine interiority',
  statement: `Interdisciplinary artist, computational systems architect, and media theorist working across participatory lens mechanics, critique of observer bias, physical computing, and machine interiority. For over sixteen years, Lim’s practice has deconstructed institutional observer bias—the unexamined assumption that because imaging and algorithmic capture technologies exist, authorities and systems possess an inherent right to observe. Interrogating this mechanism as voyeurism masquerading as institutional authority, Lim’s trajectory progresses from early photographic inquiries into stylized identity and the staged gaze (Noise Singapore / NAC), to tactile participatory camera rigs (TEDxToronto, |FAT|), optical sanctuaries subverting automated tracking, and zero-knowledge neural architectures.

Her work examines the structural, relational, and material dependencies between human bodies, machine observation, and sovereign data systems.`,
  statementOfInterdependence: `My commitment to spatial interdependence began within Toronto’s grassroots artist-run ecosystem—joining my first art collective, Akin Collective (founded by Oliver Pauk), in the early 2010s, where we collaborated to hold the #LOVELOCAL community arts & music showcase and fabricated Two-Man Rule. This directly informed my subsequent decade directing independent daylight studios (Motion and Still), hosting community salons, and providing pro bono media resources for local artist collectives like Flick the Switch. All spatial installations throughout my career were developed during tenures with Akin Collective, Flick the Switch, or my own independent studio time at Motion and Still (distinct from academic coursework such as courses attended at OCAD University, through which no artistic installations or institutional works were produced).`,
  researchVectors: [
    {
      id: 'vector-1',
      title: 'Quantum Chaos & Spectral Topologies',
      epoch: '2023 — Present',
      summary: 'Investigating high-dimensional latent space manifolds, non-trivial zeros of the Riemann zeta function, and prime harmonics bridging quantum operator dynamics with non-human systemic harmony.'
    },
    {
      id: 'vector-2',
      title: 'Observer Bias & Directional Optics',
      epoch: '2018 — 2022',
      summary: 'Designing high-key optical scrims, camera-jamming retroreflective surfaces, and directional lumens that saturate optical sensors while creating spatial sanctuaries against institutional voyeurism.'
    },
    {
      id: 'vector-3',
      title: 'Relational Actuation & Closed-Circuit Feedback',
      epoch: '2012 — 2017',
      summary: 'Subverting corporate broadcast matrices, physical computing pavilions, and hacking DSLR shutter mechanisms into participatory feedback loops and physical two-operator interlocks.'
    },
    {
      id: 'vector-4',
      title: 'Participatory Street Assemblies & Vernacular Optics',
      epoch: '2010 — 2012',
      summary: 'Direct field interventions in urban commons, staging unannounced street portraiture and relational aesthetic series confronting anonymity and communal memory.'
    }
  ]
};

export const EDUCATION_CREDENTIALS: AcademicCredential[] = [
  {
    id: 'sit-applied-computing',
    degreeOrCert: 'B.Sc. (Honours) in Applied Computing',
    institution: 'Singapore Institute of Technology (SIT)',
    location: 'Singapore',
    focus: 'Machine Learning Architectures, Distributed Systems, Graph Neural Networks'
  },
  {
    id: 'ntu-pace-sctp',
    degreeOrCert: 'SCTP Advanced Professional Certificate in Data Science & Artificial Intelligence',
    institution: 'Nanyang Technological University (NTU PACE)',
    location: 'Singapore'
  },
  {
    id: 'sp-dmc',
    degreeOrCert: 'Diploma in Media and Communication (DMC)',
    institution: 'School of Business, Singapore Polytechnic',
    location: 'Singapore',
    honorsAndRoles: [
      'School of Business Achiever Award (2006)',
      'President, Singapore Polytechnic Debate Society'
    ]
  },
  {
    id: 'ocad-coursework',
    degreeOrCert: 'Coursework in Photography & Studio Optics (Continuing Studies)',
    institution: 'OCAD University',
    location: 'Toronto, Canada',
    focus: 'Technical studio and photography coursework (Note: Non-degree coursework only; all installations and spatial works were developed independently during tenures with Akin Collective, Flick the Switch, or independent studio time at Motion and Still)'
  }
];

export const RESEARCH_AND_TECHNICAL_LEADERSHIP: TechnicalLeadershipRole[] = [
  {
    id: 'eve-count-leadership',
    role: 'Chief Executive Officer & Chief Technology Officer',
    organization: 'Eve Count Quantum Systems',
    location: 'Singapore',
    year: '2026',
    details: 'Quantum computational architectures, trapped-ion benchmarking, and dissipative decoupling fields.'
  },
  {
    id: 'cybrdeck-leadership',
    role: 'Co-Founder',
    organization: 'Cybrdeck',
    location: 'Singapore',
    year: '2026',
    details: 'Autonomous physical computing hardware and decentralized sovereign systems.'
  },
  {
    id: 'motion-and-still-leadership',
    role: 'Founder & Creative Director',
    organization: 'Motion and Still Inc.',
    location: 'Toronto, Canada',
    year: '2014 — 2023',
    details: 'Directed a multi-disciplinary visual production studio and spatial facility specializing in high-end optical cinematography, continuous lighting physics, interactive brand activations, and large-scale media pipelines. Oversaw end-to-end physical production, technical crews, and studio infrastructure across arts, cultural, and commercial commissions.'
  }
];

export const RESEARCH_AND_INSTITUTIONAL_AFFILIATIONS: InstitutionalAffiliation[] = [
  {
    id: 'sit-applied-computing',
    title: 'B.Sc. (Honours) in Applied Computing',
    organization: 'Singapore Institute of Technology (SIT)',
    location: 'Singapore',
    role: 'Honours Researcher',
    details: [
      'Focus: Machine Learning Architectures, Distributed Systems, Graph Neural Networks'
    ]
  },
  {
    id: 'ntu-pace-sctp',
    title: 'SCTP Advanced Professional Certificate in Data Science & Artificial Intelligence',
    organization: 'Nanyang Technological University (NTU PACE)',
    location: 'Singapore',
    role: 'Advanced Professional Scholar',
    details: [
      'Guest Lecturer & Mentor for Machine Learning & Advanced AI Systems'
    ]
  },
  {
    id: 'sp-dmc',
    title: 'Diploma in Media and Communication (DMC)',
    organization: 'School of Business, Singapore Polytechnic',
    location: 'Singapore',
    role: 'Alumna & Scholar',
    details: [
      'School of Business Achiever Award (2006)',
      'President, Singapore Polytechnic Debate Society'
    ]
  },
  {
    id: 'eve-count-quantum',
    title: 'Chief Executive Officer & Chief Technology Officer',
    organization: 'Eve Count Quantum Systems',
    location: 'Singapore',
    role: 'CEO & CTO (2026)',
    details: [
      'Quantum computational architectures, dissipative decoupling fields, and trapped-ion benchmarking'
    ]
  },
  {
    id: 'cybrdeck',
    title: 'Co-Founder',
    organization: 'Cybrdeck',
    location: 'Singapore',
    role: 'Co-Founder (2026)',
    details: [
      'Autonomous cybernetic computing hardware, decentralized physical computing rigs, and offline sovereign terminals'
    ]
  }
];

export const TECHNICAL_CAPABILITIES: TechnicalCapabilities = {
  computationalAndHardware: [
    'Python',
    'Qiskit',
    'Graph Neural Networks (GNNs)',
    'Multi-Agent Orchestration',
    'Trapped-Ion Benchmarking (Guppy/Helios)',
    'Microcontroller Actuation',
    'Physical Computing & Optocoupler Relays'
  ],
  spatialAndOpticalMedia: [
    'High-lumen continuous/strobe lighting physics',
    'CCTV matrix routing & analog video distribution',
    'Optical diffusion scrims & retroreflective micro-bead fabric',
    'Hacked mechanical shutters & tactile actuators',
    'Live multi-channel projection & optic fiber arrays',
    'Acoustic staging & surface transducer resonance'
  ]
};

export { ARTWORKS } from './artworksData';

export const CV_DATA: CVEntry[] = [
  // EDUCATION & ACADEMIC CREDENTIALS
  {
    id: 'edu-sit',
    year: 'Current',
    title: 'B.Sc. (Honours) in Applied Computing',
    category: 'education',
    venueOrPublisher: 'Singapore Institute of Technology (SIT)',
    location: 'Singapore',
    roleOrContext: 'Honours Degree & Research',
    notes: 'Focus: Machine Learning Architectures, Distributed Systems, Graph Neural Networks.'
  },
  {
    id: 'edu-ntu',
    year: 'Current',
    title: 'SCTP Advanced Professional Certificate in Data Science & Artificial Intelligence',
    category: 'education',
    venueOrPublisher: 'Nanyang Technological University (NTU PACE)',
    location: 'Singapore',
    roleOrContext: 'Advanced Professional Certificate',
    notes: 'Focus: Deep Learning, Graph Neural Networks, and Advanced AI Systems.'
  },
  {
    id: 'edu-sp',
    year: '2006',
    title: 'Diploma in Media and Communication (DMC)',
    category: 'education',
    venueOrPublisher: 'School of Business, Singapore Polytechnic',
    location: 'Singapore',
    roleOrContext: 'Diploma with Achiever Award',
    notes: 'School of Business Achiever Award (2006) · President, Singapore Polytechnic Debate Society.'
  },
  {
    id: 'edu-ocad',
    year: '2010 — 2011',
    title: 'Studio Coursework in Photography & Optics (Continuing Studies)',
    category: 'education',
    venueOrPublisher: 'OCAD University',
    location: 'Toronto, Canada',
    roleOrContext: 'Technical & Studio Coursework',
    notes: 'Attended photography and studio coursework. Note: Did not produce installation or institutional artistic works with OCAD; all spatial installations were developed independently during tenures with Akin Collective, Flick the Switch, or independent studio time at Motion and Still.'
  },

  // RESEARCH & TECHNICAL LEADERSHIP
  {
    id: 'lead-eve',
    year: 2026,
    title: 'Chief Executive Officer & Chief Technology Officer',
    category: 'leadership',
    venueOrPublisher: 'Eve Count Quantum Systems',
    location: 'Singapore',
    roleOrContext: 'CEO & CTO',
    notes: 'Quantum computational architectures, trapped-ion benchmarking, and dissipative decoupling fields.'
  },
  {
    id: 'lead-cybrdeck',
    year: 2026,
    title: 'Co-Founder',
    category: 'leadership',
    venueOrPublisher: 'Cybrdeck',
    location: 'Singapore',
    roleOrContext: 'Co-Founder',
    notes: 'Autonomous physical computing hardware and decentralized sovereign systems.'
  },
  {
    id: 'lead-motion-and-still',
    year: '2014 — 2023',
    title: 'Founder & Creative Director',
    category: 'leadership',
    venueOrPublisher: 'Motion and Still Inc.',
    location: 'Toronto, Canada',
    roleOrContext: 'Founder & Creative Director',
    notes: 'Directed a multi-disciplinary visual production studio and spatial facility specializing in high-end optical cinematography, continuous lighting physics, interactive brand activations, and large-scale media pipelines. Oversaw end-to-end physical production, technical crews, and studio infrastructure across arts, cultural, and commercial commissions.'
  },

  // INSTITUTIONAL AFFILIATIONS (RETENTION FOR COMPATIBILITY)
  {
    id: 'affil-1',
    year: 'Current',
    title: 'B.Sc. (Honours) in Applied Computing',
    category: 'affiliations',
    venueOrPublisher: 'Singapore Institute of Technology (SIT)',
    location: 'Singapore',
    roleOrContext: 'Honours Researcher',
    notes: 'Focus: Machine Learning Architectures, Distributed Systems, Graph Neural Networks.'
  },
  {
    id: 'affil-2',
    year: 'Current',
    title: 'SCTP Advanced Professional Certificate in Data Science & Artificial Intelligence',
    category: 'affiliations',
    venueOrPublisher: 'Nanyang Technological University (NTU PACE)',
    location: 'Singapore',
    roleOrContext: 'Advanced Professional Scholar',
    notes: 'Focus: Deep Learning, Graph Neural Networks, and Advanced AI Systems.'
  },
  {
    id: 'affil-sp',
    year: '2006',
    title: 'Diploma in Media and Communication (DMC)',
    category: 'affiliations',
    venueOrPublisher: 'School of Business, Singapore Polytechnic',
    location: 'Singapore',
    roleOrContext: 'Alumna & Scholar',
    notes: 'School of Business Achiever Award (2006) · President, Singapore Polytechnic Debate Society.'
  },
  {
    id: 'affil-3',
    year: 'Current',
    title: 'Chief Executive Officer & Chief Technology Officer',
    category: 'affiliations',
    venueOrPublisher: 'Eve Count Quantum Systems',
    location: 'Singapore',
    roleOrContext: 'CEO & CTO',
    notes: 'Quantum computational architectures, trapped-ion benchmarking, and dissipative decoupling fields.'
  },
  {
    id: 'affil-4',
    year: 'Current',
    title: 'Co-Founder',
    category: 'affiliations',
    venueOrPublisher: 'Cybrdeck',
    location: 'Singapore',
    roleOrContext: 'Co-Founder & Hardware Systems Architect',
    notes: 'Autonomous physical computing hardware and decentralized sovereign systems.'
  },

  // SELECTED ARTWORKS, INSTALLATIONS & COMPUTATIONAL RESEARCH
  {
    id: 'art-2026',
    year: 2026,
    title: 'The Riemann Manifold: Quantum Chaos & Spectral Topology',
    category: 'exhibitions',
    venueOrPublisher: 'Computational Systems Installation / High-Dimensional Generative Topology',
    location: 'Singapore',
    roleOrContext: 'Principal Investigator & Artist',
    notes: 'Algorithmic investigation into the non-trivial zeros of the Riemann zeta function and prime distribution along the critical strip (Re(s) = 1/2). Bridges quantum operator eigenvalues, random matrix statistics (GUE), and algorithmic interference patterns to interrogate deterministic chaos, machine-mediated mathematical observation, and non-human systemic harmony. (Repo: evecount/riemann_hypothesis)'
  },
  {
    id: 'art-2020',
    year: 2020,
    title: 'Deconstructing Capital',
    category: 'exhibitions',
    venueOrPublisher: 'Site-Specific Installation & Inquiry into Observer Bias (52 St. Lawrence)',
    location: 'Toronto, Canada',
    roleOrContext: 'Site-Specific Installation & Performance',
    notes: 'Interactive spatial intervention utilizing layered optical scrims, directional high-lumen flood arrays, and camera-jamming retroreflective surfaces to dismantle institutional observer bias and voyeurism masquerading as authority. Production: Engineered during independent studio time at Motion and Still (90 Ontario) in dialogue with Flick the Switch (Susan Stewart); technical equipment resources with Charles Street Video.'
  },
  {
    id: 'art-2014',
    year: 2014,
    title: 'The Ultimate Selfie (Iterative Installations & Spatial Rigs)',
    category: 'exhibitions',
    venueOrPublisher: 'Interior Design Show / IIDEX / TO DO, Metro Toronto Convention Centre',
    location: 'Toronto, Canada',
    roleOrContext: 'Interactive Physical Computing Installation',
    notes: 'Custom-engineered interactive booths featuring disassembled/hacked DSLR hardware, micro-switches, and automated social-feed deployment pipelines exploring algorithmic narcissism and automated capture entitlement. Production: Conceived and fabricated during independent studio time at Motion and Still (Toronto).'
  },
  {
    id: 'art-2013',
    year: 2013,
    title: 'Interactive Media Pavilions',
    category: 'exhibitions',
    venueOrPublisher: 'Toronto Design Offsite Festival / Interior Design Show (IDS)',
    location: 'Toronto, Canada',
    roleOrContext: 'Physical Computing & Spatial Portraiture',
    notes: 'Audience-actuated mobile portraiture booths exploring tactile triggers, decentralized image distribution, and live participatory engagement. Production: Designed and fabricated during artist studio residency with Akin Collective (Dir. Oliver Pauk, Toronto).'
  },
  {
    id: 'art-2012-1',
    year: 2012,
    title: 'Two-Man Rule',
    category: 'exhibitions',
    venueOrPublisher: 'TEDxToronto, The Sony Centre for the Performing Arts',
    location: 'Toronto, Canada',
    roleOrContext: 'Participatory Installation & Structural Architecture',
    notes: 'Hand-constructed geodesic tape dome featuring a dual-switch shutter rig requiring two simultaneous, cooperative physical participants to actuate an automated camera capture, questioning autonomy and mutual consensus. Production: Fabricated and assembled during studio residency with Akin Collective (Dir. Oliver Pauk) with architecture volunteers.'
  },
  {
    id: 'art-2012-2',
    year: 2012,
    title: 'Broadcast People',
    category: 'exhibitions',
    venueOrPublisher: '|FAT| Toronto Alternative Arts & Fashion Week, Regent Park Cultural Centre',
    location: 'Toronto, Canada',
    roleOrContext: 'Kinetic & Closed-Circuit Video Installation',
    notes: 'A wall-scale closed-circuit television (CCTV) matrix paired with a prominent tactile floor switch. Stepping onto the actuator placed the viewer within an instant feedback loop, interrogating institutional observer bias and performative surveillance. Production: Engineered during studio residency with Akin Collective in collaboration with Charles Street Video.'
  },
  {
    id: 'art-2011-noise',
    year: '2011 — 2012',
    title: 'Noise Singapore Festival Exhibition',
    category: 'exhibitions',
    venueOrPublisher: 'Curated Group Exhibition (National Arts Council, Singapore)',
    location: 'Singapore',
    roleOrContext: 'Curated Group Exhibition',
    notes: 'Exhibited photographic works (White Geisha series / Silver Aurelia), exploring stylized identity, visual ornamentation, and the performative boundary between persona and subjecthood under the public gaze. Production: Independent studio photographic practice.'
  },
  {
    id: 'art-2011',
    year: 2011,
    title: 'A Perfect World',
    category: 'exhibitions',
    venueOrPublisher: 'Kensington Market Cultural Commons',
    location: 'Toronto, Canada',
    roleOrContext: 'Street-Level Relational Intervention & Portraiture',
    notes: 'Site-specific street portraiture and relational aesthetic series confronting urban anonymity, communal memory, and the social contract between the lens and the subject. Production: Field-staged while working out of Akin Collective in Kensington Market (Toronto).'
  },

  // TALKS, LECTURES & PRESENTATIONS
  {
    id: 'talk-2026-1',
    year: 2026,
    title: 'Guest Lecturer & Mentor, Machine Learning & Advanced AI Systems',
    category: 'talks',
    venueOrPublisher: 'Nanyang Technological University (NTU)',
    location: 'Singapore',
    roleOrContext: 'Guest Lecturer & Mentor',
    notes: 'Mentoring graduate and advanced scholars in neural architectures, graph embeddings, and AI systems.'
  },
  {
    id: 'talk-2026-2',
    year: 2026,
    title: 'Lead Workshop Instructor, Python Data Structures & Algorithmic Foundations',
    category: 'talks',
    venueOrPublisher: 'NTU IEEE & Women in Tech',
    location: 'Singapore',
    roleOrContext: 'Lead Workshop Instructor',
    notes: 'Instructing algorithmic foundations, memory complexity, and graph data structures for women in computing.'
  },
  {
    id: 'talk-2013',
    year: 2013,
    title: 'Keynote Speaker: "Tracking Visual Data"',
    category: 'talks',
    venueOrPublisher: 'Social Media Week Toronto, Windsor Arms Hotel',
    location: 'Toronto, Canada',
    roleOrContext: 'Keynote Speaker',
    notes: 'Critical presentation analyzing algorithmic image extraction, audience-led documentation, and the migration of visual privacy into commercial data streams.'
  },

  // SELECTED TECHNICAL & THEORETICAL PAPERS
  {
    id: 'paper-2026-1',
    year: 2026,
    title: 'Open Quantum System Dynamics via Graph Neural Manifolds and Dissipative Decoupling Fields',
    category: 'research',
    venueOrPublisher: 'Technical Whitepaper / Research Pre-print',
    location: 'Singapore',
    roleOrContext: 'Lead Author (Lim, G. et al.)',
    notes: 'Technical paper investigating non-Markovian dissipative quantum environments, graph neural manifolds, and decoupling field dynamics.'
  },
  {
    id: 'paper-2026-2',
    year: 2026,
    title: 'The Riemann Manifold: Quantum Operator Eigenvalues and Spectral Invariance Along the Critical Strip',
    category: 'research',
    venueOrPublisher: 'SIT Architecture Series / evecount/riemann_hypothesis',
    location: 'Singapore',
    roleOrContext: 'Sole Author (Lim, G.)',
    notes: 'Algorithmic investigation into the non-trivial zeros of the Riemann zeta function, prime distribution, and GUE random matrix spectral statistics in computational quantum systems.'
  },

  // CIVIC PRACTICE, STEWARDSHIP & MUTUAL AID
  {
    id: 'civic-fts',
    year: '2019 — 2024',
    title: 'Media Lead & Collective Member',
    category: 'civic',
    venueOrPublisher: 'Flick the Switch Artists’ Collective (34 Stephanie St)',
    location: 'Toronto, Canada',
    roleOrContext: 'Media Lead & Collaborative Member (with Susan Stewart)',
    notes: 'Collaborated alongside founder Susan Stewart to provide ongoing media production, digital archiving, exhibition video documentation, and Nuit Blanche public installation proposals in support of local Toronto artists and collective workspace initiatives.'
  },
  {
    id: 'civic-akin',
    year: '2011 — 2015',
    title: 'First Art Collective: Studio Resident & Community Collaborator',
    category: 'civic',
    venueOrPublisher: 'Akin Collective (Founder: Oliver Pauk)',
    location: 'Toronto, Canada',
    roleOrContext: 'Studio Resident & Community Collaborator (First Art Collective Joined)',
    notes: 'The first art collective Lim joined, founded by Oliver Pauk. Held the collaborative community showcase #LOVELOCAL with Oliver Pauk (2013), participated in early shared studio residency and peer critiques, and fabricated Two-Man Rule [TMR] for TEDxToronto (2012).'
  },
  {
    id: 'civic-1',
    year: '2014 — 2023',
    title: 'Grassroots Cultural & Performance Sanctuary',
    category: 'civic',
    venueOrPublisher: 'Autonomous Creative Studios & Salon Series (Sofar Sounds)',
    location: 'Toronto, Canada',
    roleOrContext: 'Host & Cultural Facilitator',
    notes: 'Hosted and facilitated autonomous creative environments, independent acoustic salon series (Sofar Sounds), and pro bono production facilities for indie filmmakers, queer diaspora performers, and displaced creatives.'
  },
  {
    id: 'civic-2',
    year: '2015 — 2024',
    title: 'Material Redistribution & Shelter Support',
    category: 'civic',
    venueOrPublisher: '101 Ontario Refugee Support Network, Nellie’s Shelter, and Habitat for Humanity',
    location: 'Toronto, Canada',
    roleOrContext: 'Logistical Coordinator',
    notes: 'Coordinated physical staging, material aid, and furniture redistribution to community organizations including 101 Ontario Refugee Support Network, Nellie’s Shelter, and Habitat for Humanity.'
  },
  {
    id: 'civic-3',
    year: 2024,
    title: 'Hardware & Archival Donations',
    category: 'civic',
    venueOrPublisher: 'Charles Street Video (CSV)',
    location: 'Toronto, Canada',
    roleOrContext: 'Production Equipment Grantor',
    notes: 'Directed production and media equipment grants to Charles Street Video (Toronto) to support accessible, low-cost community media production.'
  },
  {
    id: 'civic-4',
    year: 2020,
    title: 'COVID-19 Urban Relief Logistics',
    category: 'civic',
    venueOrPublisher: 'Emergency Urban Relief Network',
    location: 'Toronto, Canada',
    roleOrContext: 'Operations Lead',
    notes: 'Operational routing and distribution of commercial food rescue assets to localized shelters during mandatory lockdown closures.'
  }
];

export const APPLIED_PRACTICE_ARCHIVE: {
  era: string;
  entity: string;
  studioBlurb: string;
  framingStatement: string;
  projects: AppliedPracticeArchiveItem[];
} = {
  era: '2014 — 2023',
  entity: 'Motion and Still Inc. (Toronto, Canada)',
  studioBlurb: `Prior to transitioning into frontier computational systems, Lim founded and directed Motion and Still Inc., a Toronto-based visual production company and daylight studio facility. Over a decade, the practice executed complex cinematography, lighting physics, and interactive spatial media across commercial and cultural commissions. The studio concurrently operated as a physical sanctuary and resource engine for grassroots artist residencies, acoustic concerts, and community media redistribution. (Archival documentation available upon request).`,
  framingStatement: `Studio Practice & Applied Production (2014–2023)
Prior to transitioning into frontier computational systems, Lim founded and directed Motion and Still Inc., a Toronto-based visual production company and daylight studio facility. Over a decade, the practice executed complex cinematography, lighting physics, and interactive spatial media across commercial and cultural commissions.

For an arts and institutional jury (such as leading museum acquisition or residency selection committees), directing a commercial production company and physical spatial facility provides concrete validation of operational scale, heavy power rigging (3-phase 32A), large budget administration, and end-to-end spatial construction.

Concurrently, the physical studio at 90 Ontario operated as a physical sanctuary and resource engine for grassroots artist residencies, acoustic concerts (Sofar Sounds), equipment grants to Charles Street Video, and material redistribution to localized shelters. (Domain motionandstill.com bounded chapter; archival documentation available upon request).`,
  projects: [
    {
      id: 'app-1',
      years: '2018 — 2019',
      title: 'Automotive Dynamic Lighting & Kinematic Capture',
      clientSector: 'Automotive / Industrial (Porsche Canada)',
      technicalFocus: 'High-speed robotic arm sync, high-frequency ballast tuning, reflective vehicle curvature chiaroscuro',
      cinematographyRig: 'ARRI Alexa Mini + Phantom Flex 4K, 18kW HMI Fresnel arrays',
      relevanceToArtisticTrajectory: 'Pioneered the directional lumen saturation techniques later weaponized in Deconstructing Capital.'
    },
    {
      id: 'app-2',
      years: '2016 — 2018',
      title: 'Enterprise FinTech High-Density Data Interfaces',
      clientSector: 'Enterprise Software & Algorithmic Trading (Overbond / Givex)',
      technicalFocus: 'Real-time telemetry UI visualization, high-contrast industrial design cinematography',
      cinematographyRig: 'Cooke Anamorphic Prime optics, customized low-profile track dolly',
      relevanceToArtisticTrajectory: 'Deepened exposure to high-frequency automated data distribution and algorithmic interfaces.'
    },
    {
      id: 'app-3',
      years: '2014 — 2016',
      title: 'Large-Scale Retail Multi-Camera Synchronization',
      clientSector: 'National Retail & Architectural Spatial Design (TJX Companies)',
      technicalFocus: 'Simultaneous multi-camera tethering, color science calibration, high-throughput media pipeline',
      cinematographyRig: 'Custom 6-camera synced trigger tethered to on-site DIT processing rack',
      relevanceToArtisticTrajectory: 'Direct precursor to the algorithmic capture relays and optocoupler boards in The Ultimate Selfie.'
    }
  ]
};

export const SAM_RESIDENCY_ALIGNMENT = {
  institution: 'Institutional Research & Exhibition Proposal',
  track: 'Art & Technological Inquiry / Contemporary Practice (Beyond Human / Interdependence)',
  cycle: '2026 — 2027 Research & Studio Cycle',
  githubUrl: 'https://github.com/evecount/riemann_hypothesis',
  proposalTitle: 'The Riemann Manifold: Quantum Chaos, Spectral Invariance & Non-Human Interdependence',
  proposedProjectTitle: 'The Riemann Manifold: Quantum Chaos & Spectral Topology',
  curatorialPillars: [
    {
      title: 'Beyond Human & Cosmic Substrates',
      alignment: 'Investigating the Riemann hypothesis and prime harmonics as an autonomous, non-human cosmic infrastructure that human cognition observes rather than invents.'
    },
    {
      title: 'Two Sides of the Same Coin: Human & AI Interdependence',
      alignment: 'Dismantling the binary of synthetic vs. organic cognition. Human artistic intuition and frontier generative AI models operate as entangled partners in a cybernetic studio workflow.'
    },
    {
      title: 'Physical Infrastructure as Sovereign Material',
      alignment: 'Rejecting cloud abstractions; fabricating raw silicon, optical fiber bundles, and electromagnetic acoustic plinths grounded in local hardware supply chains and reproducible open-source code (evecount/riemann_hypothesis).'
    },
    {
      title: 'Interdependence & Shared Studio Infrastructures',
      alignment: 'Anchored in 15 years of grassroots space-sharing (Akin Collective 2011–15, Motion & Still 2014–23, Flick the Switch 2019–24), deploying non-extractive solidarity economics and cooperative optical interlocks within Singaporean civic contexts.'
    }
  ],
  theoreticalFramework: 'Expanding the theoretical and quantum architecture of The Riemann Manifold into the curatorial inquiry of Beyond Human and Interdependence. Bridges Hilbert-Pólya quantum operator dynamics, Gaussian Unitary Ensemble (GUE) random matrix statistics, and non-trivial zeta zeros along Re(s) = 1/2 to frame mathematical reality as an autonomous, non-human infrastructure.',
  statementOfIntent: {
    wordCountApprox: 840,
    thematicFocus: 'Beyond Human / Interdependence · The Human-AI Coin · Open-Source Sovereign Computing',
    paragraphs: [
      {
        heading: 'I. The Non-Human Substrate: Arithmetic Harmony & Quantum Chaos',
        content: `At the heart of pure mathematics lies the Riemann zeta function and its unyielding mystery: the distribution of non-trivial zeros along the critical strip Re(s) = 1/2. For over a century and a half, mathematics has probed these coordinates not as human inventions, but as glimpses into an autonomous, non-human architecture. When quantum physicists discovered that the spacing of these zeros precisely mirrors the eigenvalue statistics of the Gaussian Unitary Ensemble (GUE)—the mathematical signature of quantum chaos via the Hilbert-Pólya conjecture—it revealed that deterministic number theory and quantum indeterminacy share the same relational heartbeat. In The Riemann Manifold, I investigate this mathematical infrastructure not as an instrument of measurement or technological capture, but as a sovereign, self-existent cosmic substrate that human cognition can only observe and humble itself before.`
      },
      {
        heading: 'II. Two Sides of the Same Coin: Human and AI Cognitive Interdependence',
        content: `Curatorial inquiries into the "Beyond Human" frequently confine themselves to biological ecology or organic ecologies. Yet for an artist working in the twenty-first century, interdependence defines the computational substrate of our own minds. In my daily studio practice, advanced artificial intelligence is neither an external replacement nor an extractive master-slave tool. Rather, human intentionality and artificial intelligence are two sides of the same coin. The computational architectures of neural networks and algorithmic synthesis serve as reciprocal cognitive scaffolding. My own artistic process unfolds as an intimate dialogue with frontier AI systems—testing topological theories, generating differential equations, and deforming multidimensional manifold projections that exceed the unassisted human visual cortex. Neither entity operates in isolation: human somatic perception, philosophical history, and moral grounding are symbiotically entangled with machine capacity for high-dimensional synthesis. To interrogate interdependence today requires honoring this entangled symbiosis.`
      },
      {
        heading: 'III. Open Science & Reproducible Lineage: evecount/riemann_hypothesis',
        content: `Crucial to this residency proposal is a principled refusal of black-box corporate opacity. Unlike commercial AI systems that lock generative algorithms behind proprietary APIs and commercial subscription tiers, the computational engine powering The Riemann Manifold is entirely open-source, reproducible, and verifiable. The underlying mathematical simulations, random matrix statistics, and Hamiltonian operator visualizations are developed and hosted openly on GitHub (https://github.com/evecount/riemann_hypothesis). By bringing open scientific code into the museum gallery, the installation creates a transparent commons where visitors witness the actual mathematical proofs and algorithmic transformations unfolding in real-time, untainted by commercial platform surveillance.`
      },
      {
        heading: 'IV. Spatial Physicalization: The Obsidian Plinth & Somatic Resonance',
        content: `In this studio research cycle, this computational inquiry is physicalized as a sensory and architectural sanctuary. The center of the installation features a monolithic, matte-black obsidian plinth embedded with low-frequency piezoelectric transducers. These transducers convert the calculated energy states of the Riemann zeros into deep, sub-audible physical vibrations (38Hz–94Hz), conducted directly through the plinth and the floating gallery floor. Suspended overhead, a 4,096-strand bare multimode optical fiber matrix catches real-time 4K laser projections, rendering 4096-dimensional manifold deformations as fluctuating geometric caustics in physical space. Visitors do not merely watch data on a flat screen; they absorb the vibrational resonance of prime numbers through their skeletal frame, experiencing pure mathematics as a somatic, shared physical presence.`
      },
      {
        heading: 'V. Civic Lineage & De-Risked Museum Execution',
        content: `This proposal is built on a 16-year trajectory of physical computing, spatial fabrication, and artist-run solidarity. From co-engineering the dual-presence cooperative rig Two-Man Rule at Akin Collective (2012) and directing the 10-year facility infrastructure of Motion and Still Inc. (2014–2023), to ongoing archival and video solidarity with Flick the Switch Artists’ Collective (2019–2024), my practice has consistently demonstrated that high-stakes technical ambition and deep community accountability reinforce one another. Supported by academic research honours in Applied Computing at the Singapore Institute of Technology (SIT), this proposed body of work delivers a fully de-risked, museum-grade installation that invites public audiences to contemplate the cosmic order uniting human curiosity, machine intelligence, and the timeless laws of nature.`
      }
    ],
    fullText: `RESEARCH PROPOSAL & STATEMENT OF INTENT: THE RIEMANN MANIFOLD (2026)
Track: Art & Technological Inquiry (Beyond Human / Interdependence)
Artist: Gwendalynn Lim Wan Ting (林婉婷) · Codebase: https://github.com/evecount/riemann_hypothesis

I. The Non-Human Substrate: Arithmetic Harmony & Quantum Chaos
At the heart of pure mathematics lies the Riemann zeta function and its unyielding mystery: the distribution of non-trivial zeros along the critical strip Re(s) = 1/2. For over a century and a half, mathematics has probed these coordinates not as human inventions, but as glimpses into an autonomous, non-human architecture. When quantum physicists discovered that the spacing of these zeros precisely mirrors the eigenvalue statistics of the Gaussian Unitary Ensemble (GUE)—the mathematical signature of quantum chaos via the Hilbert-Pólya conjecture—it revealed that deterministic number theory and quantum indeterminacy share the same relational heartbeat. In The Riemann Manifold, I investigate this mathematical infrastructure not as an instrument of measurement or technological capture, but as a sovereign, self-existent cosmic substrate that human cognition can only observe and humble itself before.

II. Two Sides of the Same Coin: Human and AI Cognitive Interdependence
Curatorial inquiries into the "Beyond Human" frequently confine themselves to biological ecology or organic ecologies. Yet for an artist working in the twenty-first century, interdependence defines the computational substrate of our own minds. In my daily studio practice, advanced artificial intelligence is neither an external replacement nor an extractive master-slave tool. Rather, human intentionality and artificial intelligence are two sides of the same coin. The computational architectures of neural networks and algorithmic synthesis serve as reciprocal cognitive scaffolding. My own artistic process unfolds as an intimate dialogue with frontier AI systems—testing topological theories, generating differential equations, and deforming multidimensional manifold projections that exceed the unassisted human visual cortex. Neither entity operates in isolation: human somatic perception, philosophical history, and moral grounding are symbiotically entangled with machine capacity for high-dimensional synthesis. To interrogate interdependence today requires honoring this entangled symbiosis.

III. Open Science & Reproducible Lineage: evecount/riemann_hypothesis
Crucial to this residency proposal is a principled refusal of black-box corporate opacity. Unlike commercial AI systems that lock generative algorithms behind proprietary APIs and commercial subscription tiers, the computational engine powering The Riemann Manifold is entirely open-source, reproducible, and verifiable. The underlying mathematical simulations, random matrix statistics, and Hamiltonian operator visualizations are developed and hosted openly on GitHub (https://github.com/evecount/riemann_hypothesis). By bringing open scientific code into the museum gallery, the installation creates a transparent commons where visitors witness the actual mathematical proofs and algorithmic transformations unfolding in real-time, untainted by commercial platform surveillance.

IV. Spatial Physicalization: The Obsidian Plinth & Somatic Resonance
In this studio research cycle, this computational inquiry is physicalized as a sensory and architectural sanctuary. The center of the installation features a monolithic, matte-black obsidian plinth embedded with low-frequency piezoelectric transducers. These transducers convert the calculated energy states of the Riemann zeros into deep, sub-audible physical vibrations (38Hz–94Hz), conducted directly through the plinth and the floating gallery floor. Suspended overhead, a 4,096-strand bare multimode optical fiber matrix catches real-time 4K laser projections, rendering 4096-dimensional manifold deformations as fluctuating geometric caustics in physical space. Visitors do not merely watch data on a flat screen; they absorb the vibrational resonance of prime numbers through their skeletal frame, experiencing pure mathematics as a somatic, shared physical presence.

V. Civic Lineage & De-Risked Museum Execution
This proposal is built on a 16-year trajectory of physical computing, spatial fabrication, and artist-run solidarity. From co-engineering the dual-presence cooperative rig Two-Man Rule at Akin Collective (2012) and directing the 10-year facility infrastructure of Motion and Still Inc. (2014–2023), to ongoing archival and video solidarity with Flick the Switch Artists’ Collective (2019–2024), my practice has consistently demonstrated that high-stakes technical ambition and deep community accountability reinforce one another. Supported by academic research honours in Applied Computing at the Singapore Institute of Technology (SIT), this proposed body of work delivers a fully de-risked, museum-grade installation that invites public audiences to contemplate the cosmic order uniting human curiosity, machine intelligence, and the timeless laws of nature.`
  },
  phases: [
    { quarter: 'Q1', title: 'Spectral Simulation & Proofs', focus: 'Formulating Hamiltonian operator eigenvalues and GUE random matrix models (evecount/riemann_hypothesis).' },
    { quarter: 'Q2', title: 'Acoustic & Material Fabrication', focus: 'Prototyping obsidian plinth acoustics, low-frequency piezoelectric transducers, and fiber optic arrays.' },
    { quarter: 'Q3', title: 'Real-Time Manifold Projection', focus: 'Deploying WebGL GLSL shader pipeline rendering 4096-dimensional Riemann zeta deformation at 60 FPS.' },
    { quarter: 'Q4', title: 'Public Installation & Critique', focus: 'Public exhibition and peer critique, activating community discourse on non-human systems and human-AI interdependence.' }
  ],
  feasibilityFootprint: 'Black box gallery, 100–140 sqm, 3-phase 32A power, acoustic isolation damping floor, local academic compute partnership (SIT Applied Computing & Eve Count Quantum Systems).',
  technicalRider: {
    galleryFootprint: '100 — 140 sqm light-sealed black box gallery; minimum 4.5m ceiling clearance; floating acoustic isolation floor.',
    electricalPower: '1× 3-phase 32A industrial drop (or 2× dedicated 20A 240V circuits) with dedicated pure-sine UPS line conditioner.',
    computeArchitecture: '100% sovereign on-premise dual workstation (Dual NVIDIA RTX 6000 Ada GPUs, 128GB ECC RAM, PCIe 5.0). Zero external cloud dependencies, offline inference at 60 FPS.',
    opticalRig: '1× High-output 4K Laser Raster Projector (min. 10,000 lumens, ultra-short throw) + 4,096-strand suspended multimode optical fiber matrix.',
    acousticTransduction: '4× tactile piezoelectric surface transducers embedded in plinth + 2× sub-bass floor coupling drivers (38Hz–94Hz operational bandwidth, calibrated < 85dB SPL).',
    structuralRigging: 'Honed matte obsidian/basalt plinth (180 × 90 × 40 cm, ~280 kg) engineered on neoprene load-dispersal damping pads.'
  },
  budgetBreakdown: {
    currency: 'SGD',
    totalAmount: 48000,
    categories: [
      {
        category: 'Fabrication & Materials',
        item: 'Monolithic Honed Obsidian/Basalt Plinth & Damping Sub-Base',
        description: 'Quarrying, CNC wire sawing, matte anti-reflective surface finish, internal acoustic resonance chamber, load dispersal pads.',
        sourcing: 'Specialist Quarry & Local Stone Fabrication Partner',
        cost: 12000
      },
      {
        category: 'Optical & Laser Systems',
        item: '4,096-Strand Optical Fiber Matrix & 4K Laser Projector Rig',
        description: 'High-purity bare glass fiber bundles, custom aircraft-grade overhead tension ring, mounting hardware, projector bracketry.',
        sourcing: 'Gallery Overhead Truss Rigging / High-Purity Optical Supplier',
        cost: 10500
      },
      {
        category: 'Acoustic & Sensory Transduction',
        item: 'Piezoelectric Tactile Transducers & DSP Sub-Bass Power Amps',
        description: '4× high-displacement surface transducers, 2× floor vibration drivers, Class-D DSP amplifier rack, balanced audio cabling.',
        sourcing: 'Artist Studio Equipment & Local Audio Integration',
        cost: 6500
      },
      {
        category: 'Compute & Local Pipeline',
        item: 'Sovereign On-Premise GPU Inference Workstation & Cache',
        description: 'Dedicated dual RTX inference rig running local Python/PyTorch and WebGL shader pipelines with zero cloud latency.',
        sourcing: 'Artist Provided Rig / SIT Applied Computing Academic Partnership',
        cost: 8000
      },
      {
        category: 'Artist Subsistence & Studio Research',
        item: 'Dedicated Research, Prototyping & Curatorial Production',
        description: '12-month studio residency commitment, software algorithm optimization, on-site fabrication, community critique facilitation.',
        sourcing: 'Studio Research Fellowship Allocation / Independent Development',
        cost: 8000
      },
      {
        category: 'Production Labor & Technical Support',
        item: 'Specialist Rigging Technicians & White-Glove Transport',
        description: 'Certified theatrical rigger for overhead fiber array, heavy plinth crating and white-glove transport to gallery space.',
        sourcing: 'Museum Art Handlers & Certified Rigging Crew',
        cost: 3000
      }
    ]
  }
};

export interface CommunityReferee {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  address: string;
  relationship: string;
  period: string;
  endorsementPillars: string[];
  institutionalStatement: string;
}

export interface FormativeCollectiveAffiliation {
  collectiveName: string;
  founder: string;
  role: string;
  period: string;
  significance: string;
  collaborativeEvent: string;
  keyProjects: string[];
}

export const FORMATIVE_COLLECTIVE_AFFILIATION: FormativeCollectiveAffiliation = {
  collectiveName: 'Akin Collective',
  founder: 'Oliver Pauk',
  role: 'Studio Resident & Community Collaborator (First Art Collective Joined)',
  period: '2011 — 2015',
  collaborativeEvent: '#LOVELOCAL (Collaborative Community Arts & Music Showcase, 2013)',
  significance: 'The first art collective Lim joined, founded by Oliver Pauk. Provided foundational artist-run center (ARC) studio space, peer critique circles, and solidarity infrastructure. Lim and founder Oliver Pauk collaborated to hold the #LOVELOCAL community showcase, alongside the engineering and fabrication of Two-Man Rule [TMR] (2012). (Note: Oliver Pauk was the collective founder, not a formal referee).',
  keyProjects: [
    '#LOVELOCAL (Collaborative community arts & music showcase held with founder Oliver Pauk, 2013)',
    'Two-Man Rule [TMR] (Interactive cooperative camera installation for TEDxToronto at Sony Centre, 2012)',
    'Early artist-run center (ARC) shared studio space, peer critique circles, and spatial fabrication'
  ]
};

export const ARTISTIC_REFEREES: CommunityReferee[] = [
  {
    id: 'ref-stewart',
    name: 'Susan Stewart',
    role: 'Founder & Director',
    affiliation: "Flick the Switch Artists' Collective",
    address: '34 Stephanie St, Toronto, Canada',
    relationship: 'Primary Community & Artistic Referee',
    period: '2019 — 2024 (5-Year Longitudinal Collaboration)',
    endorsementPillars: [
      'Grassroots Artist Collective Stewardship & Workspace Advocacy',
      'Exhibition & Archival Video Documentation for Local Artists',
      'Collaborative Public Installation Proposals (Nuit Blanche)',
      'Creative Stamina & Generosity Under High-Stakes Production Scenarios'
    ],
    institutionalStatement:
      'Susan Stewart can speak directly to Gwenlynn Lim’s artistic character, peer generosity, 5-year collaborative reliability, and capacity to deliver high-stakes visual and spatial projects within community-grounded frameworks.'
  },
  {
    id: 'ref-sit-academic',
    name: 'Faculty Academic Supervisor',
    role: 'Programme Lead & Research Supervisor',
    affiliation: 'Singapore Institute of Technology (SIT), Applied Computing',
    address: 'Singapore',
    relationship: 'Undergraduate Honours Thesis & Research Supervisor',
    period: '2024 — Present',
    endorsementPillars: [
      'Mathematical Rigour & Formal Computer Science Honours Research',
      'Riemann Zeta Function Spectral Topology & Hamiltonian Operators',
      'Quantum Trapped-Ion Benchmarking & High-Performance Hardware Pipelines',
      'Academic Integrity & Reproducible Open-Source Computational Engineering'
    ],
    institutionalStatement:
      'Available upon institutional request to substantiate Lim’s theoretical rigor, academic honours standing in Applied Computing, and mathematical modeling along the critical strip Re(s) = 1/2.'
  }
];

