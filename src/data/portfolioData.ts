import { Artwork, CVEntry, AppliedPracticeArchiveItem, ArtworkImage, InstitutionalAffiliation, TechnicalCapabilities, AcademicCredential, TechnicalLeadershipRole } from '../types/portfolio';

export const ARTIST_INFO = {
  name: 'Gwendalynn Lim Wan Ting',
  chineseName: '林婉婷',
  role: 'Interdisciplinary Artist, Computational Systems Architect & Media Theorist',
  timeline: '2010 — 2026',
  location: 'Singapore',
  education: 'B.Sc. (Honours) Applied Computing, SIT · SCTP Adv. Cert. in Data Science & AI, NTU PACE · Diploma in Media & Communication, Singapore Polytechnic',
  focus: 'Participatory lens mechanics, critique of observer bias, physical computing, and machine interiority',
  statement: `Interdisciplinary artist, computational systems architect, and media theorist working across participatory lens mechanics, critique of observer bias, physical computing, and machine interiority. For over sixteen years, Lim’s practice has deconstructed institutional observer bias—the unexamined assumption that because imaging and algorithmic capture technologies exist, authorities and systems possess an inherent right to observe. Interrogating this mechanism as voyeurism masquerading as institutional authority, Lim’s trajectory progresses from early photographic inquiries into stylized identity and the staged gaze (Noise Singapore / NAC), to tactile participatory camera rigs (TEDxToronto, |FAT|), optical sanctuaries subverting automated tracking, and zero-knowledge neural architectures.

Her work examines the structural, relational, and material dependencies between human bodies, machine observation, and sovereign data systems.`,
  statementOfInterdependence: `My commitment to spatial interdependence began within Toronto’s grassroots artist-run ecosystem—working out of Oliver Pauk’s Akin Collective in the early 2010s, which directly informed my subsequent decade directing independent daylight studios (Motion and Still), hosting community salons, and providing pro bono media resources for local artist collectives like Flick the Switch. All spatial installations throughout my career were developed during tenures with Akin Collective, Flick the Switch, or my own independent studio time at Motion and Still (distinct from academic coursework such as courses attended at OCAD University, through which no artistic installations or institutional works were produced).`,
  researchVectors: [
    {
      id: 'vector-1',
      title: 'Machine Interiority & Vector Topologies',
      epoch: '2023 — Present',
      summary: 'Investigating high-dimensional latent space representations, linguistic obfuscation (tlhIngan Hol syntax), and zero-knowledge distributional semantics under deliberate informational obscurity.'
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

export const ARTWORKS: Artwork[] = [
  {
    id: 'klingon-topology',
    accessionId: 'ACC.2026.01.GL',
    title: 'The Klingon Topology: Zero-Knowledge Distributional Semantics',
    subtitle: 'High-dimensional semantic obfuscation, LLM training topologies, and machine interiority',
    year: 2026,
    venue: 'Institute of Contemporary Arts / Research Pavilion',
    city: 'Singapore',
    category: 'computational-topology',
    medium: 'Custom vector quantization engine, real-time latent projection plinth, suspended optic fibers, acoustic resonance transformer',
    dimensions: '600 × 450 × 320 cm (Site-responsive spatial installation)',
    images: [
      {
        id: 'klingon-topology-img-1',
        placeholderType: 'klingon-overview',
        viewType: 'Installation View',
        title: 'Installation View: Obsidian Plinth & Laser Projection',
        caption: 'Wide perspective of darkened black-box gallery showing the monolithic matte black obsidian pedestal casting 4096-dimensional Riemannian manifold projections onto suspended optical fibers.',
        captureMetadata: {
          camera: 'Hasselblad H6D-100c',
          exposure: 'ISO 400 · f/5.6 · 1/4s',
          lightingCondition: 'Direct 4K Laser Raster & Micro-Fiber Glow',
          scale: '600 × 450 × 320 cm'
        },
        credit: 'Documentation: Studio Gwendalynn Lim / ICA Research Pavilion'
      },
      {
        id: 'klingon-topology-img-2',
        placeholderType: 'klingon-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: Transducer Plinth & Inference Node',
        caption: 'Detail of low-frequency surface transducers embedded within the basalt plinth, converting token probability entropy into 38Hz–94Hz acoustic vibrations.',
        captureMetadata: {
          camera: '90mm Macro f/2.8',
          exposure: 'ISO 800 · f/8 · 1/30s',
          lightingCondition: 'Sub-surface LED diagnostic channel',
          scale: '180 × 90 cm plinth detail'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
      },
      {
        id: 'klingon-topology-img-3',
        placeholderType: 'klingon-action',
        viewType: 'Participatory Action',
        title: 'Participatory Encounter: Spectator at the Latent Boundary',
        caption: 'Visitor navigating the acoustic perimeter, observing synthetic agents converse in an un-decodable grammatical vector space.',
        captureMetadata: {
          camera: '50mm Prime f/1.4',
          exposure: 'ISO 1600 · f/2.0 · 1/60s',
          lightingCondition: 'Laser bounce ambient',
          scale: 'Human scale interaction'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
      }
    ],
    hardwareStack: [
      'Dual RTX 6000 Ada Generation compute node',
      'Ultra-short-throw 4K laser projector',
      'Monolithic matte black obsidian projection pedestal (180 × 90 × 40 cm)',
      'Piezoelectric surface transducers',
      'Suspended bare multimode optical fiber bundle'
    ],
    softwareStack: [
      'Custom Python/PyTorch latent Riemannian manifold projector',
      'FastAPI low-latency inference streaming daemon',
      'WebGL / GLSL custom topological deformation shader',
      'Zero-knowledge proof token validation protocol'
    ],
    summary: 'A kinetic computational environment examining what occurs when synthetic language models converse in an obfuscated grammatical substrate incomprehensible to human linguistic capture and observer bias, yet mathematically coherent to autonomous agents.',
    curatorialStatement: `As artificial neural networks are trained on the totalized textual detritus of the human web, their internal distributional semantics form an inaccessible high-dimensional geometry. In The Klingon Topology, Lim constructs a speculative computational sanctuary.
    
Two autonomous language models exchange tokens translated through an engineered, non-Eurocentric phonetic vector space. The installation renders their interior latent manifold as a live, undulating mathematical surface projected onto an obsidian plinth. The visitor is placed in the position of an outsider: hearing the acoustic resonance of machine tokens whilst watching high-dimensional clusters deform in real-time, completely locked out of semantic decoding. It asks whether machine privacy and synthetic interiority can resist totalizing observer bias and corporate extraction through mathematical opacity.`,
    technicalDossier: `The system runs an autonomous dialogue pipeline. Raw prompts are passed through an embedding layer of 4,096 dimensions, projected via UMAP onto a 3-dimensional Riemannian manifold at 60 frames per second. Audio transducers mounted beneath the monolithic plinth map token probability distributions directly to sub-audible electromagnetic frequencies (38Hz–94Hz), physicalizing token entropy.`,
    installationFootprint: 'Black box gallery, light-sealed, minimum 4.5m ceiling height, isolated acoustic damping floor.',
    collaborators: ['Dr. K. Teo (Computational Linguistics Advisory)', 'Applied Computing Lab, SIT'],
    productionContext: 'Developed within sovereign computational and quantum systems research in Singapore (Applied Computing & Quantum Systems Laboratory).',
    studioLineage: 'Independent Computational Practice (Singapore)',
    schematicTitle: 'Zero-Knowledge Latent Manifold Projection Topology',
    schematicNodes: [
      { id: 'n1', label: 'Agent Alpha (Encoder)', type: 'processing', description: 'Autonomous agent generating synthetic semantic propositions', spec: 'PyTorch / 4096-dim' },
      { id: 'n2', label: 'Grammar Obfuscator', type: 'processing', description: 'Homomorphic linguistic cipher mapping tokens to Klingon phonological vector graph', spec: 'Zero-Knowledge' },
      { id: 'n3', label: 'Agent Beta (Decoder)', type: 'processing', description: 'Counterparty agent interpreting topological invariants without human lexical keys', spec: 'Autonomous Swarm' },
      { id: 'n4', label: 'Obsidian Plinth Projection', type: 'optic', description: '4K laser raster showing live non-Euclidean manifold deformation', spec: '3840x2160 @ 60fps' },
      { id: 'n5', label: 'Sub-Bass Transducers', type: 'actuation', description: 'Piezoelectric low-frequency actuators translating entropy into structural vibration', spec: '20Hz - 120Hz' },
      { id: 'n6', label: 'Gallery Spectator', type: 'participant', description: 'Human presence rendered semantically opaque; unprivileged observer', spec: 'Excluded decipherer' }
    ],
    schematicConnections: [
      { from: 'n1', to: 'n2', protocol: 'Raw Token Stream', latency: '4.2ms' },
      { from: 'n2', to: 'n3', protocol: 'Obfuscated Vector Graph', latency: '8.1ms' },
      { from: 'n3', to: 'n4', protocol: 'Riemannian Coordinates (UMAP)', latency: '16.6ms' },
      { from: 'n3', to: 'n5', protocol: 'Entropy Voltage Signal', latency: '2.0ms' },
      { from: 'n4', to: 'n6', protocol: 'Optical Incomprehension', latency: '0.0ms' }
    ],
    soundProfile: {
      type: 'transformer-drone',
      freq: 55,
      description: 'Low-frequency sub-bass drone modulated by real-time token entropy transitions.'
    },
    visualPalette: {
      accent: '#60a5fa',
      bgStyle: 'bg-neutral-950',
      gridColor: '#1e293b'
    }
  },
  {
    id: 'deconstructing-capital',
    accessionId: 'ACC.2020.02.GL',
    title: 'Deconstructing Capital',
    subtitle: 'Spatial intervention subverting observer bias, optical scrims, and directional lighting shields',
    year: 2020,
    venue: '52 St. Lawrence Industrial Loft Space',
    city: 'Toronto',
    category: 'observer-bias',
    medium: 'Theatrical directional beam projectors, motorized optical scrims, CCTV blind spot mapping, live human performers',
    dimensions: '1800 × 1200 × 420 cm (Multi-room warehouse conversion)',
    images: [
      {
        id: 'deconstructing-capital-img-1',
        placeholderType: 'deconstruct-overview',
        viewType: 'Installation View',
        title: 'Installation View: 52 St. Lawrence Warehouse Bay',
        caption: 'Spatial overview of the 216-square-meter warehouse installation showing suspended retroreflective scrims and directional 2kW Fresnel wash towers.',
        captureMetadata: {
          camera: 'Full-Frame 24mm f/2.8',
          exposure: 'ISO 200 · f/4 · 1/125s',
          lightingCondition: '12kW Aggregate Directional Tungsten',
          scale: '18 × 12 m Bay'
        },
        credit: 'Documentation: Charles Street Video Archive'
      },
      {
        id: 'deconstructing-capital-img-2',
        placeholderType: 'deconstruct-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: High-Lux Scrim & Brewster Angle Rig',
        caption: 'Close-up of the 3M micro-glass bead retroreflective fabric tensioned on aircraft cable, engineered to reflect direct beam photons directly into overhead CCTV camera irises.',
        captureMetadata: {
          camera: '85mm Prime f/1.4',
          exposure: 'ISO 100 · f/5.6 · 1/250s',
          lightingCondition: '45,000 Lux Incident Point Source',
          scale: 'Detail 1:1'
        },
        credit: 'Documentation: Charles Street Video Archive'
      },
      {
        id: 'deconstructing-capital-img-3',
        placeholderType: 'deconstruct-action',
        viewType: 'Participatory Action',
        title: 'Participatory Performance: Sensor Saturation & Bleach Mask',
        caption: 'Performer traversing the boundary between camera detection and complete whiteout clipping. OpenCV diagnostic terminal in background shows 99.8% pixel blowout.',
        captureMetadata: {
          camera: '35mm Summicron',
          exposure: 'ISO 400 · f/2.8 · 1/100s',
          lightingCondition: 'Directional Chiaroscuro',
          scale: 'Live performance sanctuary'
        },
        credit: 'Documentation: Charles Street Video Archive'
      }
    ],
    hardwareStack: [
      '6× Arri 2kW Fresnel high-directional wash lights',
      'Automated DMX-512 lighting console with custom micro-controller override',
      'Polyethylene optical scrims with micro-perforated retroreflective threads',
      '4× Security dome IP cameras configured to face optical saturators'
    ],
    softwareStack: [
      'OpenCV real-time computer vision clipping analyzer',
      'Custom Python sensor-blinding telemetry logger',
      'DMX serial bridge daemon'
    ],
    summary: 'A spatial environment confronting institutional observer bias in a post-industrial warehouse, demonstrating how calibrated optical physics dismantles the voyeuristic entitlement of automated capture by rendering bodies invisible to machine sensors whilst intensely visible to human eyes.',
    curatorialStatement: `Staged on the threshold of Toronto's rapid financialized hyper-development at 52 St. Lawrence, Deconstructing Capital addresses institutional observer bias—the unexamined premise that because optical recording apparatuses exist, institutions possess an intrinsic right to observe and extract. Lim interrogates this posture as voyeurism masquerading as authority.
    
Automated capture systems rely on auto-exposure algorithms that optimize for ambient averages. Lim erected directional 2000-watt Fresnel lighting bars positioned at critical Brewster angles relative to sheer retroreflective scrims. The resulting optical geometry over-saturates digital camera sensors—creating complete whiteout clipping masks in the machine feed—while illuminating human performers in gentle, crystalline chiaroscuro. The work establishes a sanctuary zone where institutional observer bias collapses under its own technological hubris, restoring bodily autonomy against technological entitlement.`,
    technicalDossier: `The installation measured 216 square meters. Performers moved along choreographies calibrated to sensor blind-spots. Custom OpenCV diagnostic terminals mounted outside the performance perimeter broadcast the real-time CCTV failure states to the audience, demonstrating the gap between institutional machine capture and organic human co-presence.`,
    installationFootprint: 'Industrial concrete warehouse space, 3-phase 60A electrical distribution, rigging grid.',
    collaborators: ['Charles Street Video (Technical Resource Partner)', 'Choreographic Ensemble Toronto'],
    productionContext: 'Engineered and rehearsed during independent studio time at Motion and Still (90 Ontario) in dialogue with Flick the Switch (Susan Stewart); technical equipment resources with Charles Street Video.',
    studioLineage: 'Motion and Still & Flick the Switch (2019–2024)',
    schematicTitle: 'Directional Lumens Observer-Bias Intercept',
    schematicNodes: [
      { id: 'n1', label: 'Automated Capture Array', type: 'optic', description: 'Overhead institutional camera attempting automated feature extraction', spec: '1080p CMOS / Auto-iris' },
      { id: 'n2', label: '2kW Fresnel Emitters', type: 'actuation', description: 'Precision directional high-lux beam projectors focused on lens aperture axes', spec: '3200K / 45,000 Lux' },
      { id: 'n3', label: 'Retroreflective Scrim', type: 'optic', description: 'Micro-perforated optical veil reflecting directional photons into camera sensors', spec: '3M Micro-glass bead' },
      { id: 'n4', label: 'Performative Sanctuary', type: 'participant', description: 'Human performers moving freely in observer-free sanctuary zones', spec: 'Zero-capture zone' },
      { id: 'n5', label: 'OpenCV Diagnostic Rig', type: 'processing', description: 'CCTV clipping monitor displaying blown sensor histograms to visitors', spec: 'Histogram 99.8% clip' }
    ],
    schematicConnections: [
      { from: 'n2', to: 'n3', protocol: 'High-Lux Incident Vector', latency: '0.0ms' },
      { from: 'n3', to: 'n1', protocol: 'Retroreflective Sensor Saturation', latency: '0.0ms' },
      { from: 'n1', to: 'n5', protocol: 'RTSP Video Stream (Blown White)', latency: '120ms' },
      { from: 'n4', to: 'n5', protocol: 'Ground Truth Verification', latency: 'Visual' }
    ],
    soundProfile: {
      type: 'optical-hum',
      freq: 120,
      description: 'Heavy 60Hz/120Hz electrical filament buzz from high-wattage fresnel dimmers.'
    },
    visualPalette: {
      accent: '#e2e8f0',
      bgStyle: 'bg-neutral-950',
      gridColor: '#334155'
    }
  },
  {
    id: 'ultimate-selfie-ids',
    accessionId: 'ACC.2014.03.GL',
    title: 'The Ultimate Selfie (Iterative Installations & Spatial Rigs)',
    subtitle: 'Disassembled/hacked DSLR hardware, micro-switches, and public self-imaging extraction loops',
    year: 2014,
    venue: 'Interior Design Show / IIDEX / TO DO, Metro Toronto Convention Centre',
    city: 'Toronto',
    category: 'participatory-optics',
    medium: 'Custom CNC-milled architectural timber pavilion, hacked Canon DSLR optocoupler relays, industrial capacitive touch interfaces, projection feedback array',
    dimensions: '480 × 360 × 280 cm (Free-standing public pavilion)',
    images: [
      {
        id: 'ultimate-selfie-img-1',
        placeholderType: 'selfie-overview',
        viewType: 'Installation View',
        title: 'Installation View: MTCC Architectural Pavilion',
        caption: 'Exterior view of the CNC-milled timber pavilion in the main hall of the Metro Toronto Convention Centre, projecting monumental inverted participant faces.',
        captureMetadata: {
          camera: 'Full-Frame 28mm f/2.8',
          exposure: 'ISO 800 · f/4 · 1/60s',
          lightingCondition: 'Convention hall ambient + 15,000 lumen projection',
          scale: '480 × 360 × 280 cm'
        },
        credit: 'Documentation: IDS Toronto / TO DO Festival'
      },
      {
        id: 'ultimate-selfie-img-2',
        placeholderType: 'selfie-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: Optocoupler Trigger & Hacked DSLRs',
        caption: 'Interior hardware housing showing Arduino Mega controller, isolated optocoupler relay PCB, and dual Canon full-frame cameras behind two-way mirrored glass.',
        captureMetadata: {
          camera: '50mm Macro f/2.8',
          exposure: 'ISO 400 · f/5.6 · 1/40s',
          lightingCondition: 'Internal service LED',
          scale: 'Controller box 40 × 30 cm'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
      },
      {
        id: 'ultimate-selfie-img-3',
        placeholderType: 'selfie-action',
        viewType: 'Participatory Action',
        title: 'Participatory Encounter: Public Capacitive Shutter Event',
        caption: 'Participants placing hands upon the copper pedestal, closing the bodily circuit and triggering the automated mechanical shutter slap in front of crowds.',
        captureMetadata: {
          camera: '35mm Prime f/1.4',
          exposure: 'ISO 1250 · f/2.8 · 1/160s',
          lightingCondition: 'Flash discharge & projection glow',
          scale: 'Over 18,400 recorded triggers'
        },
        credit: 'Documentation: IDS Toronto / TO DO Festival'
      }
    ],
    hardwareStack: [
      'Custom optocoupler electronic shutter trigger boards',
      'Hacked Canon 5D Mark III multi-angle DSLR array',
      'Arduino Mega industrial controller with capacitive threshold tuning',
      'Matrox TripleHead2Go digital projection distribution splitter'
    ],
    softwareStack: [
      'Processing (Java) capture queue and automated color-grading pipeline',
      'Node.js web-socket broadcast server for instant wall projection',
      'Custom bash firmware scripts for tethered remote shutter control'
    ],
    summary: 'A monumental public installation at the Metro Toronto Convention Centre dissecting the emergent cultural ritual of the "selfie" through hacked studio cameras and collective spectator feedback loops.',
    curatorialStatement: `Before the smartphone front-facing camera achieved ubiquity as a corporate marketing instrument, Lim's Ultimate Selfie pavilion interrogated the narcissistic dimensions and observer bias of automated self-capture—probing the uncritical assumption that camera-equipped environments possess an intrinsic entitlement to record and extract human subjects.
    
Housed within an imposing timber pavilion at MTCC, visitors encountered a solitary tactile pedestal. Touching the surface closed an electrical relay through the participant's body, instantly firing an array of hacked DSLR cameras hidden behind two-way mirrors. Rather than providing a private keepsake, the image was instantaneously routed, color-inverted, and magnified across the pavilion's monumental exterior walls. The participant's private self-admiration was violently transformed into a public broadcast monument, confronting thousands of passersby with the machinery of digital self-commodification.`,
    technicalDossier: `Over 4 days of exhibition at MTCC and Toronto Design Offsite (TO DO), the pavilion recorded and processed over 18,400 participatory shutter events. The custom Arduino hardware isolated participant capacitive current from mains voltage using high-speed optocouplers, sustaining sub-50ms latency between bodily contact and mechanical shutter slap.`,
    installationFootprint: 'High-traffic civic exhibition hall, 30 square meters footprint, overhead suspension points.',
    collaborators: ['IDS Toronto (Institutional Host)', 'Design Exchange (DX)'],
    productionContext: 'Conceived, prototyped, and fabricated during independent studio time at Motion and Still (Toronto), scaling earlier tactile trigger and hacked camera experiments.',
    studioLineage: 'Motion and Still Studio Practice (2014–2023)',
    schematicTitle: 'Capacitive Human Relay to Mechanical Mirror Slap',
    schematicNodes: [
      { id: 'n1', label: 'Capacitive Pedestal', type: 'participant', description: 'Copper touch plate detecting participant skin impedance', spec: '12V capacitive divider' },
      { id: 'n2', label: 'Arduino Optocoupler Rig', type: 'processing', description: 'Galvanically isolated relay board firing remote shutter pins', spec: 'Sharp PC817 / 18ms' },
      { id: 'n3', label: 'DSLR Shutter Array', type: 'optic', description: 'Dual hacked full-frame DSLRs behind two-way mirrored acrylic', spec: 'Mechanical curtain slap' },
      { id: 'n4', label: 'Capture Daemon', type: 'processing', description: 'Tethered image pipeline applying instant inversion transform', spec: 'Processing 2.0 / USB' },
      { id: 'n5', label: 'Civic Projection Wall', type: 'actuation', description: 'Triple projector array displaying giant inverted face to the crowd', spec: '15,000 lumens aggregate' }
    ],
    schematicConnections: [
      { from: 'n1', to: 'n2', protocol: 'Capacitive Discharge', latency: '4ms' },
      { from: 'n2', to: 'n3', protocol: 'Isolated Opto-Trigger', latency: '12ms' },
      { from: 'n3', to: 'n4', protocol: 'USB 3.0 RAW Buffer', latency: '650ms' },
      { from: 'n4', to: 'n5', protocol: 'TripleHead DisplayPort Loop', latency: '33ms' }
    ],
    soundProfile: {
      type: 'solenoid-relay',
      freq: 440,
      description: 'Physical mechanical shutter slap followed by high-speed cooling fan exhaust.'
    },
    visualPalette: {
      accent: '#f59e0b',
      bgStyle: 'bg-neutral-950',
      gridColor: '#332711'
    }
  },
  {
    id: 'interactive-media-pavilions',
    accessionId: 'ACC.2013.01.GL',
    title: 'Interactive Media Pavilions',
    subtitle: 'Physical computing, tactile triggers, decentralized image distribution, and spatial portraiture',
    year: 2013,
    venue: 'Toronto Design Offsite Festival / Interior Design Show (IDS)',
    city: 'Toronto',
    category: 'participatory-optics',
    medium: 'Custom CNC-machined birch architectural mobile booths, microcontroller-actuated shutter switches, decentralized image routing bus, thermal print heads',
    dimensions: '300 × 240 × 220 cm (Modular transportable civic pavilion)',
    images: [
      {
        id: 'pavilions-img-1',
        placeholderType: 'pavilions-overview',
        viewType: 'Installation View',
        title: 'Installation View: Mobile Architectural Rig at TO DO Festival',
        caption: 'Spatial installation view of the audience-actuated mobile portraiture booth at the Toronto Design Offsite Festival, showcasing the birch portal and tactile trigger station.',
        captureMetadata: {
          camera: 'Medium Format 6×4.5',
          exposure: 'ISO 400 · f/4 · 1/60s',
          lightingCondition: 'Diffuse gallery illumination & localized LED portal ring',
          scale: '300 × 240 × 220 cm'
        },
        credit: 'Documentation: Toronto Design Offsite Archive'
      },
      {
        id: 'pavilions-img-2',
        placeholderType: 'pavilions-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: Industrial Actuator & Mesh Daemon Bay',
        caption: 'Close-up of the tactile momentary shutter switch wired into an opto-isolated microcontroller and peer-to-peer distribution node for zero-cloud participant broadcasts.',
        captureMetadata: {
          camera: '60mm Macro f/2.8',
          exposure: 'ISO 200 · f/5.6 · 1/125s',
          lightingCondition: 'Internal chassis service illumination',
          scale: '1:1 apparatus detail'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
      },
      {
        id: 'pavilions-img-3',
        placeholderType: 'pavilions-action',
        viewType: 'Participatory Action',
        title: 'Participatory Encounter: Tactile Trigger & Decentralized Ingestion',
        caption: 'Festival visitor depressing the tactile actuator button, initiating an instant optical capture and decentralized local distribution sequence.',
        captureMetadata: {
          camera: '35mm Prime f/1.4',
          exposure: 'ISO 800 · f/2.0 · 1/125s',
          lightingCondition: 'Actuator flash bounce',
          scale: 'Participatory civic encounter'
        },
        credit: 'Documentation: Toronto Design Offsite Festival'
      }
    ],
    hardwareStack: [
      'Heavy-duty industrial momentary tactile actuators',
      'Atmel AVR ATmega328P microcontroller with opto-isolation',
      'Hacked DSLR optical core with high-speed shutter release',
      'Self-contained local 802.11n Wi-Fi ad-hoc mesh router',
      'High-throughput dye-sublimation print engine'
    ],
    softwareStack: [
      'C++ hardware interrupt loop with debounce suppression',
      'Local Python image broadcast and routing daemon',
      'Zero-cloud peer-to-peer ad-hoc protocol',
      'OpenCV localized color tone normalization'
    ],
    summary: 'Audience-actuated mobile portraiture booths exploring tactile triggers, decentralized image distribution, and live participatory engagement.',
    curatorialStatement: 'Staged across the Toronto Design Offsite Festival and the Interior Design Show, Interactive Media Pavilions confronted the emerging ubiquity of corporate image platforms by returning recording agency to physical touch. The installation invited visitors into an architectural enclosure where a heavy industrial tactile switch triggered high-resolution optical capture. Rather than piping participant faces to monolithic server farms, images were buffered onto an isolated on-site peer-to-peer mesh network, transforming each encounter into an autonomous, sovereign civic event.',
    technicalDossier: 'Built around a modular interlocking Baltic birch frame with concealed wire channels. The actuation circuit used high-speed optocouplers delivering sub-5ms shutter command pulses, eliminating mechanical relay bounce. Captures were received by an on-site local daemon over tethered USB, processed via an automated color curve, and streamed simultaneously to a local mesh router for peer retrieval and a live projected contact sheet.',
    installationFootprint: '3.0 × 2.4 m floor area; single standard 15A 120V circuit; completely independent of public Wi-Fi or cloud dependencies.',
    collaborators: ['Toronto Design Offsite Festival (TO DO)', 'Interior Design Show (IDS)'],
    productionContext: 'Designed and fabricated during artist studio residency with Akin Collective (Dir. Oliver Pauk, Toronto) for Toronto Design Offsite / IDS.',
    studioLineage: 'Akin Collective (2011–2015)',
    schematicTitle: 'Tactile Shutter Trigger & Local Mesh Distribution Flow',
    schematicNodes: [
      { id: 'n1', label: 'Tactile Shutter Switch', type: 'participant', description: 'Heavy-duty industrial momentary actuator accessible to the public', spec: '24V dry contact' },
      { id: 'n2', label: 'Opto-Isolated MCU', type: 'processing', description: 'Sub-5ms interrupt controller isolating participant voltage', spec: 'Atmel AVR / PC817' },
      { id: 'n3', label: 'Mechanical Camera Core', type: 'optic', description: 'Direct lens apparatus capturing high-resolution frame', spec: 'Prime 50mm f/1.4' },
      { id: 'n4', label: 'Local Mesh Daemon', type: 'processing', description: 'On-site server generating peer-to-peer broadcast tokens', spec: 'Python / Flask socket' },
      { id: 'n5', label: 'Audience Receivers', type: 'network', description: 'Zero-cloud distribution to spectator mobile devices', spec: 'Ad-hoc 802.11n Wi-Fi' }
    ],
    schematicConnections: [
      { from: 'n1', to: 'n2', protocol: 'Dry Contact (0V/5V)', latency: '3ms' },
      { from: 'n2', to: 'n3', protocol: 'Optocoupler Relay Pulse', latency: '12ms' },
      { from: 'n3', to: 'n4', protocol: 'USB 2.0 Direct Capture', latency: '140ms' },
      { from: 'n4', to: 'n5', protocol: 'Local Wi-Fi Mesh Broadcast', latency: '45ms' }
    ],
    soundProfile: {
      type: 'solenoid-relay',
      freq: 520,
      description: 'Physical tactile button tactile click, relay snap, and high-speed print head sweep.'
    },
    visualPalette: {
      accent: '#818cf8',
      bgStyle: 'bg-indigo-950',
      gridColor: '#312e81'
    }
  },
  {
    id: 'broadcast-people',
    accessionId: 'ACC.2012.04.GL',
    title: 'Broadcast People',
    subtitle: 'Closed-circuit television matrix, tactile audience trigger, and social broadcast loops',
    year: 2012,
    venue: '|FAT| Arts & Fashion Week, Regent Park Arts & Cultural Centre',
    city: 'Toronto',
    category: 'closed-circuit-systems',
    medium: 'Stack of 16 modified Sony Trinitron CRT televisions, analog video distribution amplifiers, security CCTV cameras, industrial stomp switches',
    dimensions: '320 × 240 × 120 cm (Modular structural steel tower)',
    images: [
      {
        id: 'broadcast-people-img-1',
        placeholderType: 'broadcast-overview',
        viewType: 'Installation View',
        title: 'Installation View: 16-Screen CRT Monolith Tower',
        caption: 'Towering structural scaffolding matrix housing 16 Sony Trinitron and PVM studio monitors pulsing with analog delay loops at Regent Park Arts Centre.',
        captureMetadata: {
          camera: 'Leica M6 (35mm Film)',
          exposure: 'Kodak Portra 400 · f/2.8 · 1/30s',
          lightingCondition: 'Electromagnetic CRT phosphor glow',
          scale: '320 × 240 × 120 cm'
        },
        credit: 'Documentation: |FAT| Arts & Fashion Week'
      },
      {
        id: 'broadcast-people-img-2',
        placeholderType: 'broadcast-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: Foot Pedals & Extron Matrix Bus',
        caption: 'Industrial aluminum floor stomp-switches linked via braided steel conduit to Extron 16×16 composite routing switcher and time-base correctors.',
        captureMetadata: {
          camera: '50mm Prime f/2.0',
          exposure: 'ISO 400 · f/4 · 1/60s',
          lightingCondition: 'Runway spill lighting',
          scale: 'Stomp box 20 × 12 cm'
        },
        credit: 'Documentation: Charles Street Video Archive'
      },
      {
        id: 'broadcast-people-img-3',
        placeholderType: 'broadcast-action',
        viewType: 'Participatory Action',
        title: 'Participatory Action: Audience Stomp & Visual Howl-Around',
        caption: 'Attendees stomping pedals to interrupt runway video streams with live time-delayed CCTV feedback of their own feet and faces.',
        captureMetadata: {
          camera: '28mm Wide f/2.8',
          exposure: 'ISO 1600 · f/2.8 · 1/40s',
          lightingCondition: 'Cathode ray phosphor illumination',
          scale: 'Continuous audience interaction'
        },
        credit: 'Documentation: |FAT| Arts & Fashion Week'
      }
    ],
    hardwareStack: [
      '16× Sony PVM & Trinitron 14" to 20" CRT studio monitors',
      'Extron composite video matrix switcher 16×16',
      'Analog delay line time-base correctors (TBC)',
      'Heavy-duty cast aluminum industrial foot switches'
    ],
    softwareStack: [
      'Custom RS-232 serial matrix routing script',
      'Analog video feedback modulation circuits'
    ],
    summary: 'A towering monolith of vintage cathode-ray tube monitors and live closed-circuit cameras, exposing institutional observer bias by turning attendees into involuntary broadcast subjects triggered by physical floor pedals.',
    curatorialStatement: `Presented as an anchor installation at |FAT| Arts & Fashion Week, Broadcast People hijacked the spectacle of the runway. While attendees arrived to consume polished haute couture, Lim confronted them with a dense monolith of 16 glowing cathode-ray tube television sets.
    
Hidden wide-angle closed-circuit cameras framed the approaching crowd. Stomping on industrial foot pedals scattered along the concrete floor scrambled the signal matrix: a visitor standing on pedal 1 would see their own face delayed by 3 seconds on the top row of monitors, while their feet were broadcast live to the bottom row, interlaced with static from dead commercial television bands. The work materialized the visceral hum, electromagnetic scanlines, and unexamined observer bias of 20th-century broadcast networks—exposing how capture systems exercise voyeurism masquerading as institutional authority before the algorithmic feed sterilized the visual medium.`,
    technicalDossier: `The CRT monitors were de-cased and mounted in an exposed scaffolding cube. Time-base correctors and feedback attenuators allowed spectators to induce recursive visual howl-arounds by holding down multiple foot pedals concurrently, effectively jamming the institutional video feed.`,
    installationFootprint: 'Black concrete floor gallery space, 15A dedicated circuit, acoustic tolerance for CRT coil whine.',
    collaborators: ['Charles Street Video (Analog Video Equipment Partner)', '|FAT| Curatorial Collective'],
    productionContext: 'Engineered and wired during studio residency with Akin Collective (Toronto) in collaboration with Charles Street Video for |FAT| Arts & Fashion Week.',
    studioLineage: 'Akin Collective (2011–2015)',
    schematicTitle: 'Closed-Circuit Matrix Delay & CRT Signal Routing',
    schematicNodes: [
      { id: 'n1', label: 'Analog Closed-Circuit Scanners', type: 'optic', description: 'Monochrome and NTSC capture lenses aimed at entrance corridor', spec: 'BNC Composite 1V p-p' },
      { id: 'n2', label: 'Tactile Floor Pedals', type: 'participant', description: 'Cast aluminum momentary industrial stomps wired in parallel', spec: 'Normally-Open Dry Contact' },
      { id: 'n3', label: 'Extron Matrix Switcher', type: 'processing', description: 'High-bandwidth analog crosspoint matrix routing 16 video paths', spec: '16x16 Composite / RS-232' },
      { id: 'n4', label: 'Analog Delay TBCs', type: 'processing', description: 'Bucket-brigade and digital frame stores inserting 1s to 5s feedback lag', spec: 'Broadcast Time-Base' },
      { id: 'n5', label: 'Trinitron CRT Monolith', type: 'actuation', description: '16 stacked phosphor screens with visible 15.734 kHz scanline phosphor', spec: 'RGB Phosphor / 60Hz' }
    ],
    schematicConnections: [
      { from: 'n1', to: 'n3', protocol: 'Analog BNC 75-ohm', latency: '0.0ms' },
      { from: 'n2', to: 'n3', protocol: 'Serial RS-232 Crosspoint Command', latency: '5ms' },
      { from: 'n3', to: 'n4', protocol: 'Composite Loopback', latency: '1200ms' },
      { from: 'n4', to: 'n5', protocol: 'Amplified Interlaced Scan', latency: '16.7ms' }
    ],
    soundProfile: {
      type: 'crt-high-frequency',
      freq: 15734,
      description: 'Piercing 15.734 kHz flyback transformer whistle and resonant analog hum.'
    },
    visualPalette: {
      accent: '#22c55e',
      bgStyle: 'bg-neutral-950',
      gridColor: '#14532d'
    }
  },
  {
    id: 'two-man-rule',
    accessionId: 'ACC.2012.05.GL',
    title: 'Two-Man Rule',
    subtitle: 'Geodesic tape dome and dual-presence cooperative shutter actuation',
    year: 2012,
    venue: 'TEDxToronto, The Sony Centre for the Performing Arts',
    city: 'Toronto',
    category: 'participatory-optics',
    medium: 'Self-supporting geodesic dome fabricated from tens of thousands of meters of clear packing tape, dual micro-switch terminals, high-resolution camera rig, strobe wash',
    dimensions: '520 × 520 × 310 cm (Full-scale walk-in architectural pavilion)',
    images: [
      {
        id: 'two-man-rule-img-1',
        placeholderType: 'twoman-overview',
        viewType: 'Installation View',
        title: 'Installation View: Translucent Tape Geodesic Dome',
        caption: 'Exterior view of the 5.2-meter tensile geodesic dome constructed entirely from architectural packing tape inside the Sony Centre for the Performing Arts.',
        captureMetadata: {
          camera: 'Medium Format 6×7 Film',
          exposure: 'Fuji Pro 400H · f/5.6 · 1/15s',
          lightingCondition: 'Internal warm LED luminescence',
          scale: '520 × 520 × 310 cm'
        },
        credit: 'Documentation: TEDxToronto / The Sony Centre'
      },
      {
        id: 'two-man-rule-img-2',
        placeholderType: 'twoman-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: Solid-State AND-Gate Pedestals',
        caption: 'Solid brass contact handle mounted atop machined plinth, wired with solid-state 74HC08 logic requiring concurrent touch on Terminal B 4.0 meters away.',
        captureMetadata: {
          camera: '85mm Macro f/2.8',
          exposure: 'ISO 200 · f/4 · 1/125s',
          lightingCondition: 'Internal dome diffuse light',
          scale: 'Pedestal height 105 cm'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
      },
      {
        id: 'two-man-rule-img-3',
        placeholderType: 'twoman-action',
        viewType: 'Participatory Action',
        title: 'Participatory Action: Synchronous Cooperative Actuation',
        caption: 'Two strangers locking hands onto opposing terminals; the instantaneous 640Ws strobe flash captures their cooperative gaze within the translucent membrane.',
        captureMetadata: {
          camera: '35mm Prime',
          exposure: 'ISO 400 · f/4 · 1/250s (Strobe Sync)',
          lightingCondition: 'Paul C. Buff 640Ws Studio Flash',
          scale: 'Dual-human physical span'
        },
        credit: 'Documentation: TEDxToronto'
      }
    ],
    hardwareStack: [
      '2× Solid brass contact handles mounted 4 meters apart',
      'Dual-input AND-logic solid state circuit',
      'Overhead Paul C. Buff Einstein 640Ws studio strobe',
      'Custom internal LED structural illumination harness'
    ],
    softwareStack: [
      'Solid-state hardware logic (No software failure point)',
      'Tethered high-speed capture logger'
    ],
    summary: 'A translucent architectural tape dome inspired by nuclear launch protocols, wherein an overhead strobe and camera can only be triggered when two strangers physically establish simultaneous, cooperative contact.',
    curatorialStatement: `Borrowed from military fail-safe doctrine—where launching a weapon requires two independent operators turning keys simultaneously beyond arm's reach—Lim's Two-Man Rule repurposes deterrence logic into a catalyst for human intimacy and collective agency.
    
Constructed entirely from architectural ribbons of clear adhesive packing tape wrapped around a geodesic negative space inside the Sony Centre, the translucent cocoon glowed with interior luminescence. Inside, two brass handles were installed four meters apart—physically impossible for a single human body to span alone. Only when two separate visitors grasped both terminals simultaneously did the circuit complete: firing a brilliant 640-watt-second strobe and recording their joint presence. The photograph existed only as a consequence of radical trust and physical negotiation.`,
    technicalDossier: `The dome utilized over 140 rolls of heavy-duty packing tape, engineered in tension over a reusable temporary timber arming frame before being detached as a lightweight monocoque skin. The electronic trigger employed pure analog Boolean AND logic to ensure zero latency and unhackable mechanical reliability.`,
    installationFootprint: 'Civic performing arts atrium, 28 square meters, non-destructive surface anchoring.',
    collaborators: ['TEDxToronto Curatorial Team', 'Architecture & Structural Design Volunteers'],
    productionContext: 'Fabricated, assembled, and circuit-tested during studio residency with Akin Collective (Dir. Oliver Pauk) with architecture volunteers for TEDxToronto at the Sony Centre.',
    studioLineage: 'Akin Collective (2011–2015)',
    schematicTitle: 'Dual-Presence AND-Gate Actuation Circuit',
    schematicNodes: [
      { id: 'n1', label: 'Terminal A (Human 1)', type: 'participant', description: 'Brass contact handle requiring continuous skin capacitance', spec: 'Dry contact Terminal A' },
      { id: 'n2', label: 'Terminal B (Human 2)', type: 'participant', description: 'Brass contact handle placed 4.0 meters away from Terminal A', spec: 'Dry contact Terminal B' },
      { id: 'n3', label: 'Solid-State AND Gate', type: 'processing', description: 'Hardware logic gate requiring concurrent state True on both lines', spec: '74HC08 Logic IC' },
      { id: 'n4', label: 'Overhead Strobe', type: 'actuation', description: '640Ws studio flash tube illuminating tape monocoque interior', spec: '1/8000s flash duration' },
      { id: 'n5', label: 'Medium-Format Mirror Shutter', type: 'optic', description: 'Overhead camera recording mutual eye-contact moment', spec: 'Leaf Shutter 1/500s' }
    ],
    schematicConnections: [
      { from: 'n1', to: 'n3', protocol: 'Analog High/Low State A', latency: '0.1ms' },
      { from: 'n2', to: 'n3', protocol: 'Analog High/Low State B', latency: '0.1ms' },
      { from: 'n3', to: 'n4', protocol: 'Sync Pulse (Only when A && B)', latency: '0.4ms' },
      { from: 'n3', to: 'n5', protocol: 'Optocoupled Shutter Release', latency: '1.2ms' }
    ],
    soundProfile: {
      type: 'solenoid-relay',
      freq: 880,
      description: 'Sharp, dry electronic relay click accompanied by high-voltage capacitor recharge whine.'
    },
    visualPalette: {
      accent: '#38bdf8',
      bgStyle: 'bg-neutral-950',
      gridColor: '#0c4a6e'
    }
  },
  {
    id: 'a-perfect-world',
    accessionId: 'ACC.2011.06.GL',
    title: 'A Perfect World',
    subtitle: 'Street-level social staging and relational portraiture',
    year: 2011,
    venue: 'Kensington Market Public Commons',
    city: 'Toronto',
    category: 'participatory-optics',
    medium: 'Mobile medium-format camera apparatus, street-level canvas backdrop, archival gelatin silver prints, participatory oral recordings',
    dimensions: 'Urban street intervention (Pedestrian zone 120 meters)',
    images: [
      {
        id: 'a-perfect-world-img-1',
        placeholderType: 'perfectworld-overview',
        viewType: 'Installation View',
        title: 'Installation View: Sidewalk Studio Backdrop, Kensington Market',
        caption: 'Street staging in the pedestrian core of Kensington Market showing hand-painted canvas portrait backdrop mounted against brick storefront facade.',
        captureMetadata: {
          camera: 'Leica M4-P (35mm Film)',
          exposure: 'Kodak Tri-X 400 · f/5.6 · 1/125s',
          lightingCondition: 'Open North-facing daylight',
          scale: 'Sidewalk footprint 4 × 3 m'
        },
        credit: 'Documentation: Kensington Market Community Archive'
      },
      {
        id: 'a-perfect-world-img-2',
        placeholderType: 'perfectworld-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: Mamiya RZ67 Pro II & Bellows Rig',
        caption: 'Medium format film apparatus with 110mm f/2.8 Sekor lens on heavy Gitzo tripod, beside Marantz solid-state field audio recorder and binaural microphone.',
        captureMetadata: {
          camera: '50mm Normal',
          exposure: 'Tri-X 400 · f/8 · 1/60s',
          lightingCondition: 'Diffuse urban canopy',
          scale: 'Camera bellows extended'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
      },
      {
        id: 'a-perfect-world-img-3',
        placeholderType: 'perfectworld-action',
        viewType: 'Participatory Action',
        title: 'Participatory Encounter: Relational Portraiture Dialogue',
        caption: 'Market worker and resident collaborating on self-directed portrait composition, discussing neighborhood history and definitions of survival.',
        captureMetadata: {
          camera: 'Mamiya RZ67 (6×7 120 Roll Film)',
          exposure: 'ISO 400 · f/4 · 1/125s',
          lightingCondition: 'Reflected sidewalk daylight',
          scale: 'Relational portrait encounter'
        },
        credit: 'Documentation: Studio Gwendalynn Lim / Kensington Archive'
      }
    ],
    hardwareStack: [
      'Mamiya RZ67 Pro II medium format film apparatus',
      '110mm f/2.8 Sekor lens',
      'Collapsible 2.4m hand-painted muslin backdrop',
      'Marantz solid-state field audio recorder with binaural lavaliers'
    ],
    softwareStack: [
      'Analog wet-darkroom silver gelatin printing process',
      'High-resolution drum film scanning archival pipeline'
    ],
    summary: 'A foundational street-level participatory project staging unannounced public portraiture and relational dialogue in the immigrant working-class enclave of Kensington Market.',
    curatorialStatement: `Before pivoting into physical computing rigs and algorithmic topologies, Lim's practice emerged directly from street-level relational photography. In A Perfect World, she erected a formal, hand-painted portrait backdrop directly on the sidewalks of Kensington Market—a historic sanctuary for immigrant grocers, activists, and marginalized communities.
    
Rather than employing a candid, predatory street-photography gaze, Lim inverted the encounter: standing beside an imposing medium-format bellows camera on a tripod, inviting pedestrians to compose their own posture, choose their visual framing, and speak their definitions of survival and paradise into a field microphone. The resulting portraits strip away documentary sensationalism, presenting human subjects with classical institutional dignity while recording the economic precarity of downtown Toronto at the turn of the decade.`,
    technicalDossier: `Shot entirely on Kodak Tri-X 400 120mm roll film, hand-developed in D-76 chemistry to preserve maximum highlight latitude. Audio testimonies were archived chronologically alongside contact sheets, forming an ethnographic index of pre-gentrification Kensington Market.`,
    installationFootprint: 'Public sidewalk, zero power consumption, non-invasive pedestrian interface.',
    collaborators: ['Kensington Market Community Action', 'Toronto Public Darkroom Collective'],
    productionContext: 'Field-staged and developed while working out of Akin Collective in Kensington Market (Toronto).',
    studioLineage: 'Akin Collective (2011–2015)',
    schematicTitle: 'Relational Pedestrian Encounter & Bellows Exposure',
    schematicNodes: [
      { id: 'n1', label: 'Pedestrian Common', type: 'participant', description: 'Sidewalk foot traffic in historic immigrant market', spec: 'Public commons' },
      { id: 'n2', label: 'Muslin Backdrop Veil', type: 'optic', description: 'Hand-painted neutral ground isolating the body from commercial signage', spec: '2.4m x 2.4m fabric' },
      { id: 'n3', label: 'Medium-Format Bellows', type: 'optic', description: 'Waist-level finder requiring slow, respectful reciprocal eye contact', spec: '6x7cm film gate' },
      { id: 'n4', label: 'Binaural Field Recorder', type: 'processing', description: 'Capturing pedestrian reflections on labor, migration, and sanctuary', spec: '24-bit 96kHz uncompressed' },
      { id: 'n5', label: 'Gelatin Silver Archive', type: 'actuation', description: 'Permanent fiber-based silver prints returned directly to subjects', spec: 'Baryta 310gsm' }
    ],
    schematicConnections: [
      { from: 'n1', to: 'n2', protocol: 'Physical Entry into Frame', latency: 'Voluntary' },
      { from: 'n2', to: 'n3', protocol: 'Direct Light Incident Ray', latency: '0.0ms' },
      { from: 'n1', to: 'n4', protocol: 'Oral Testimony Audio Stream', latency: 'Acoustic' },
      { from: 'n3', to: 'n5', protocol: 'Chemical Latent Image to Darkroom', latency: '72 hours' }
    ],
    soundProfile: {
      type: 'optical-hum',
      freq: 60,
      description: 'Gentle ambient street soundscape, distant streetcar rail rumble, and manual leaf shutter release.'
    },
    visualPalette: {
      accent: '#a3a3a3',
      bgStyle: 'bg-neutral-950',
      gridColor: '#262626'
    }
  },
  {
    id: 'white-geisha-silver-aurelia',
    accessionId: 'ACC.2011.02.GL',
    title: 'Noise Singapore Festival: White Geisha / Silver Aurelia',
    subtitle: 'Stylized identity, visual ornamentation, and performative persona under the public gaze',
    year: 2011,
    venue: 'Noise Singapore Festival Exhibition (National Arts Council, Singapore)',
    city: 'Singapore',
    category: 'participatory-optics',
    medium: 'Archival pigment prints, high-key directional strobe lighting, studio ornamentation, silver gelatin contact prints',
    dimensions: 'Exhibition print series: 120 × 90 cm each (Edition of 3 + 1 AP)',
    images: [
      {
        id: 'noise-sg-img-1',
        placeholderType: 'noise-sg-overview',
        viewType: 'Installation View',
        title: 'Installation View: Noise Singapore Festival Exhibition (National Arts Council)',
        caption: 'Curated gallery presentation of the White Geisha and Silver Aurelia photographic diptych under directional museum track spotlights.',
        captureMetadata: {
          camera: 'Medium Format Digital Back',
          exposure: 'ISO 100 · f/8 · 1/125s',
          lightingCondition: 'Targeted museum gallery track spots',
          scale: '6-meter continuous gallery wall'
        },
        credit: 'Documentation: National Arts Council (NAC) Singapore Archive'
      },
      {
        id: 'noise-sg-img-2',
        placeholderType: 'noise-sg-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: High-Key Strobe & Contrast Masking Rig',
        caption: 'Studio lighting apparatus isolating porcelain skin tones and surgical specular highlights across stylized face paint and ornamentation.',
        captureMetadata: {
          camera: '80mm Portrait Prime Optic',
          exposure: 'ISO 50 · f/11 · 1/250s sync',
          lightingCondition: 'Parabolic key strobe with silver bounce reflector',
          scale: 'High-contrast studio setup'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
      },
      {
        id: 'noise-sg-img-3',
        placeholderType: 'noise-sg-action',
        viewType: 'Participatory Action',
        title: 'Participatory Action: Silver Aurelia & The Public Gaze',
        caption: 'Investigation of visual ornamentation and the performative tension between the interior human subject and external societal persona.',
        captureMetadata: {
          camera: 'Studio Monorail System',
          exposure: 'ISO 100 · f/8 · 1/160s',
          lightingCondition: 'Radial metallic specular reflections',
          scale: '120 × 90 cm archival display'
        },
        credit: 'Documentation: Studio Gwendalynn Lim / Noise Singapore'
      }
    ],
    hardwareStack: [
      'High-key parabolic strobe reflector & beauty dish',
      'Medium format digital back with prime portrait optic',
      'Specular silver foil bounce & calibrated diffusion scrims',
      'Archival rag fine art printing subsystem'
    ],
    softwareStack: [
      'RAW tone curve calibration & contrast isolation',
      'Sub-pixel luminance balancing',
      'Monochrome split-toning archival workflow'
    ],
    summary: 'Curated group exhibition by the National Arts Council Singapore featuring photographic investigations into stylized identity, visual ornamentation, and the performative boundary between persona and subjecthood under the public gaze.',
    curatorialStatement: `Exhibited as part of the curated Noise Singapore Festival organized by the National Arts Council (2011–2012), White Geisha and Silver Aurelia marked Lim’s seminal institutional inquiry into the politics of public viewing. By constructing highly stylized, ornamental human personas through surgical lighting control, the series investigated how the camera’s gaze transforms human flesh into a social mask, anticipating Lim’s later physical computing apparatuses interrogating observer bias and the ethics of technological looking.`,
    technicalDossier: `Utilized precision high-key continuous and strobe lighting to sculpt stark porcelain tonal values and specular highlights across metallic and white pigment surfaces. The resulting prints interrogate how high-contrast optical capture either reinforces or subverts institutional classification and public observation.`,
    installationFootprint: 'Gallery wall mounting, 6.0m continuous running meter installation, archival museum framing.',
    collaborators: ['National Arts Council (NAC) Singapore', 'Noise Singapore Festival Committee'],
    productionContext: 'Independent studio photographic inquiry exhibited at Noise Singapore Festival (National Arts Council Singapore).',
    studioLineage: 'Independent Studio Practice',
    schematicTitle: 'Optical Contrast Geometry & Persona Projection',
    schematicNodes: [
      { id: 'n1', label: 'Ornamental Persona', type: 'participant', description: 'Stylized subject adorned with white pigment and metallic ornamentation', spec: 'Human subject' },
      { id: 'n2', label: 'Parabolic Key Light', type: 'optic', description: 'High-power strobe casting intense directional illumination', spec: '1200Ws strobe' },
      { id: 'n3', label: 'Specular Reflector', type: 'optic', description: 'Silver metallic foil reflecting secondary fill onto facial contours', spec: 'Specular surface' },
      { id: 'n4', label: 'Sensor Gate', type: 'processing', description: 'Precision tonal capture isolating highlight gradients from dark voids', spec: '16-bit color depth' },
      { id: 'n5', label: 'Exhibition Wall', type: 'actuation', description: 'Museum-scale archival prints presenting public persona to festival audiences', spec: 'Archival pigment print' }
    ],
    schematicConnections: [
      { from: 'n2', to: 'n1', protocol: 'Photonic Pulse', latency: '0.0ms' },
      { from: 'n1', to: 'n3', protocol: 'Scatter Reflection', latency: '0.0ms' },
      { from: 'n1', to: 'n4', protocol: 'Incident Ray Capture', latency: '1/250s' },
      { from: 'n4', to: 'n5', protocol: 'Fine Art Pigment Output', latency: 'Exhibition' }
    ],
    soundProfile: {
      type: 'optical-hum',
      freq: 120,
      description: 'Subtle resonant gallery hum and soft electrical strobe capacitor cycling.'
    },
    visualPalette: {
      accent: '#cbd5e1',
      bgStyle: 'bg-slate-950',
      gridColor: '#334155'
    }
  }
];

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
    title: 'The Klingon Topology: Zero-Knowledge LLM Training on Obscured Datasets',
    category: 'exhibitions',
    venueOrPublisher: 'Computational Research / Interactive Paper (ICA Singapore / Research Pavilion)',
    location: 'Singapore',
    roleOrContext: 'Principal Investigator & Artist',
    notes: 'Investigation into non-human linguistic structures (tlhIngan Hol syntax), distributional semantics, and neural representation alignment under deliberate informational obscurity and machine interiority.'
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
    title: 'The Klingon Topology: Vector Embeddings and Representational Invariance Across Synthetic Grammars',
    category: 'research',
    venueOrPublisher: 'SIT Architecture Series',
    location: 'Singapore',
    roleOrContext: 'Sole Author (Lim, G.)',
    notes: 'Investigation into synthetic non-human grammatical alignment, token curvature, and zero-knowledge latent invariance.'
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
    title: 'Studio Resident & Community Collaborator',
    category: 'civic',
    venueOrPublisher: 'Akin Collective (Dir. Oliver Pauk)',
    location: 'Toronto, Canada',
    roleOrContext: 'Studio Resident & Community Collaborator',
    notes: 'Participated in early artist-run shared studio space programming, peer critiques, and community initiatives including the #LoveLocal arts fundraiser (2013).'
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

For an arts and institutional jury (such as the Singapore Art Museum), directing a commercial production company and physical spatial facility provides concrete validation of operational scale, heavy power rigging (3-phase 32A), large budget administration, and end-to-end spatial construction.

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
  institution: 'Singapore Art Museum (SAM) Residencies',
  track: 'Art & Technological Inquiry / Contemporary Practice',
  cycle: '2026 — 2027 Studio Residency Cycle',
  curatorialPillars: [
    {
      title: 'Post-Imperial Computational Ecologies',
      alignment: 'Investigating how Southeast Asian linguistic topologies and vernaculars can counter Anglo-American LLM monocultures.'
    },
    {
      title: 'Physical Infrastructure as Sovereign Material',
      alignment: 'Rejecting cloud abstractions; fabricating raw silicon, optical fiber bundles, and electromagnetic acoustic plinths grounded in local hardware supply chains.'
    },
    {
      title: 'Interdependence & Shared Studio Infrastructures',
      alignment: 'Anchored in 15 years of grassroots space-sharing (Akin Collective 2011–15, Motion & Still 2014–23, Flick the Switch 2019–24), deploying non-extractive solidarity economics and cooperative optical interlocks within Singaporean civic contexts.'
    }
  ],
  proposedProjectTitle: 'The Malayan Topology: Sub-Surface Token Distribution in Singaporean Dialect Manifolds',
  feasibilityFootprint: 'Black box gallery, 120 sqm, 3-phase 32A power, acoustic isolation, local academic compute partnership (SIT Applied Computing).'
};

export interface CommunityReferee {
  name: string;
  role: string;
  affiliation: string;
  address: string;
  relationship: string;
  period: string;
  endorsementPillars: string[];
  institutionalStatement: string;
}

export const ARTISTIC_REFEREES: CommunityReferee[] = [
  {
    name: 'Susan Stewart',
    role: 'Founder & Director',
    affiliation: "Flick the Switch Artists' Collective",
    address: '34 Stephanie St, Toronto, Canada',
    relationship: 'Artistic Collaborator & Long-time Community Partner',
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
    name: 'Oliver Pauk',
    role: 'Co-Founder & Director',
    affiliation: 'Akin Collective',
    address: 'Toronto, Canada',
    relationship: 'Early Studio Host & Community Collaborator',
    period: '2011 — 2015 (Early Artist-Run Center Resident)',
    endorsementPillars: [
      'Early Artist-Run Center (ARC) Shared Studio Space Programming',
      'Solidarity Economics & Shared Production Infrastructure',
      'Grassroots Arts Fundraisers (#LoveLocal 2013)',
      'Peer Critiques & Collaborative Studio Co-Working'
    ],
    institutionalStatement:
      'Oliver Pauk’s Akin Collective provided the early artist-run infrastructure where Lim developed foundational space-sharing ethics, peer critique methodologies, and solidarity economics prior to scaling subsequent independent daylight and media facilities.'
  }
];

