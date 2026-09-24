import { Artwork } from '../types/portfolio';
import { getArchivalPhotosForArtwork } from './archivalPhotosData';

/**
 * Canon of 8 Selected Works for Curatorial Review & 10-Page Landscape Monograph (2010–2026)
 * Page 02: Plate 01 — White Geisha & Silver Aurelia (2010–2012)
 * Page 03: Plate 02 — A Perfect World (2011)
 * Page 04: Plate 03 — Two-Man Rule (2012)
 * Page 05: Plate 04 — Broadcast People (2012)
 * Page 06: Plate 05 — The Ultimate Selfie & Interactive Pavilions (2013–2014)
 * Page 07: Plate 06 — Deconstructing Capital (2020)
 * Page 08: Plate 07 — Collective Infrastructure & Mutual Aid (2011–2024)
 * Page 09: Plate 08 — The Riemann Manifold: Quantum Chaos & Spectral Topology (2026)
 */
const RAW_ARTWORKS: Artwork[] = [
  // PLATE 01: White Geisha & Silver Aurelia (2010–2012)
  {
    id: 'white-geisha-silver-aurelia',
    accessionId: 'ACC.2010.01.GL',
    title: 'White Geisha & Silver Aurelia',
    subtitle: 'Curated photographic series exploring surface ornamentation, persona, and human vulnerability under institutional observation',
    year: 2011,
    venue: 'Noise Singapore Festival Exhibition, National Arts Council (Singapore)',
    city: 'Singapore',
    category: 'participatory-optics',
    medium: 'Curated photographic series, archival pigment prints',
    dimensions: '120 × 90 cm each (Exhibition diptych, Edition of 3 + 1 AP)',
    provenance: 'Noise Singapore Festival Exhibition, National Arts Council (Singapore)',
    focus: 'Surface ornamentation, persona, and human vulnerability under institutional observation.',
    images: [
      {
        id: 'noise-sg-img-1',
        url: '/assets/ART_Images/white_geisha.jpg',
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
        url: '/assets/ART_Images/silver_aurelia.jpg',
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
        url: '/assets/ART_Images/silver_aurelia.jpg',
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
    summary: 'Curated photographic series for Noise Singapore Festival examining surface ornamentation, persona, and human vulnerability under institutional observation.',
    curatorialStatement: 'Exhibited as part of the curated Noise Singapore Festival organized by the National Arts Council (2010–2012), White Geisha and Silver Aurelia marked Lim’s seminal institutional inquiry into the politics of public viewing. By constructing highly stylized, ornamental human personas through surgical lighting control, the series investigated how the camera’s gaze transforms human flesh into a social mask, anticipating Lim’s later physical computing apparatuses interrogating observer bias and the ethics of technological looking.',
    technicalDossier: 'Utilized precision high-key continuous and strobe lighting to sculpt stark porcelain tonal values and specular highlights across metallic and white pigment surfaces. The resulting prints interrogate how high-contrast optical capture either reinforces or subverts institutional classification and public observation.',
    installationFootprint: 'Gallery wall mounting, 6.0m continuous running meter installation, archival museum framing.',
    collaborators: ['National Arts Council (NAC) Singapore', 'Noise Singapore Festival Committee'],
    productionContext: 'Independent studio photographic inquiry exhibited at Noise Singapore Festival (National Arts Council Singapore).',
    studioLineage: 'Independent Studio Practice (Singapore)',
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
  },

  // PLATE 02: A Perfect World (2011)
  {
    id: 'a-perfect-world',
    accessionId: 'ACC.2011.02.GL',
    title: 'A Perfect World',
    subtitle: 'Street-level relational intervention, field audio recordings, and medium-format portraiture',
    year: 2011,
    venue: 'Kensington Market Cultural Commons',
    city: 'Toronto',
    category: 'participatory-optics',
    medium: 'Street-level relational intervention & portraiture installation',
    dimensions: 'Variable street installation; gelatin silver archival contact prints (24 × 30 cm)',
    provenance: 'Kensington Market, Toronto',
    focus: 'Urban anonymity, communal memory, and the social contract between the lens and the subject.',
    images: [
      {
        id: 'perfect-world-img-1',
        url: '/assets/ART_Images/In a Perfest World April 2010.jpg',
        placeholderType: 'perfectworld-overview',
        viewType: 'Installation View',
        title: 'Installation View: Kensington Market Street Installation',
        caption: 'Ephemeral street-corner portraiture installation at Kensington Market, featuring medium-format contact prints pinned to brick masonry with participatory inquiry transcripts.',
        captureMetadata: {
          camera: 'Hasselblad 500C/M (Medium Format 120)',
          exposure: 'Ilford HP5 Plus 400 · f/5.6 · 1/125s',
          lightingCondition: 'Open sky street daylight & ambient alley bounce',
          scale: 'Site-responsive street intervention'
        },
        credit: 'Documentation: Gwendalynn Lim Studio Archive'
      },
      {
        id: 'perfect-world-img-2',
        url: '/assets/ART_Images/Bellwoods Studio-14.jpg',
        placeholderType: 'perfectworld-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: Field Tape Recorder & 80mm Zeiss Planar',
        caption: 'Analogue field recorder and medium-format camera apparatus used to capture simultaneous oral histories alongside formal street portraits.',
        captureMetadata: {
          camera: '35mm Summicron f/2.0',
          exposure: 'Tri-X 400 · f/4 · 1/60s',
          lightingCondition: 'Sidewalk overcast ambient',
          scale: 'Apparatus kit 35 × 25 cm'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
      },
      {
        id: 'perfect-world-img-3',
        url: '/assets/ART_Images/In a Perfest World April 2010.jpg',
        placeholderType: 'perfectworld-action',
        viewType: 'Participatory Action',
        title: 'Participatory Encounter: Kensington Market Pedestrian Dialogue',
        caption: 'Artist conducting open-ended oral inquiry with neighborhood residents regarding collective urban memory before engaging the lens shutter.',
        captureMetadata: {
          camera: 'Medium Format 6×6',
          exposure: 'ISO 400 · f/4 · 1/125s',
          lightingCondition: 'Natural urban alley ambient',
          scale: 'Relational civic encounter'
        },
        credit: 'Documentation: Kensington Cultural Commons Archive'
      }
    ],
    hardwareStack: [
      'Hasselblad 500C/M medium format mechanical camera body',
      'Carl Zeiss Planar 80mm f/2.8 T* lens',
      'Marantz solid-state field audio recorder with binaural lavaliers',
      'Archival fiber-based silver gelatin darkroom processing kit'
    ],
    softwareStack: [
      'Analogue darkroom chemistry & split-grade filtration',
      'Open-source audio transcription & timeline mapping',
      'Audacity field audio restoration pipeline'
    ],
    summary: 'A street-level relational intervention engaging Kensington Market residents through medium-format portraiture and oral histories confronting urban anonymity and mutual trust.',
    curatorialStatement: 'Conceived during Lim’s residency with Akin Collective, A Perfect World operated as a street-level relational aesthetic intervention across Toronto\'s Kensington Market. Stepping out of traditional studio enclosures, Lim positioned an analog medium-format camera at public intersections, inviting passersby to pause, converse, and articulate their conception of collective human sanctuary. Rather than consuming subjects through surreptitious candid snapshots, each exposure was preceded by sustained dialogue, recasting the camera as a conversational catalyst.',
    technicalDossier: 'Executed using manual medium-format film to enforce deliberate temporal pacing. Each subject was recorded on magnetic audio tape answering the single prompt: "What constitutes your sanctuary?" Photographs were developed by hand in collective darkroom facilities and re-exhibited in outdoor public alcoves where the encounters occurred.',
    installationFootprint: 'Site-responsive street installation, 8m running outdoor wall surface, outdoor weather-resistant casing.',
    collaborators: ['Kensington Market Cultural Commons', 'Akin Collective Community Network'],
    productionContext: 'Field-staged and developed while working out of Akin Collective in Kensington Market (Toronto).',
    studioLineage: 'Akin Collective (2011–2015)',
    schematicTitle: 'Relational Dialogue & Analogue Exposure Exchange',
    schematicNodes: [
      { id: 'n1', label: 'Pedestrian Participant', type: 'participant', description: 'Neighborhood resident encountering street intervention', spec: 'Urban resident' },
      { id: 'n2', label: 'Oral Inquiry Dialogue', type: 'processing', description: 'Unscripted reciprocal conversation establishing mutual trust', spec: 'Field audio' },
      { id: 'n3', label: 'Medium-Format Lens', type: 'optic', description: 'Hasselblad 500C/M manual shutter actuation with subject consent', spec: '120 Film / 6x6' },
      { id: 'n4', label: 'Darkroom Alchemy', type: 'processing', description: 'Manual silver gelatin darkroom development in artist-run space', spec: 'Fiber print' },
      { id: 'n5', label: 'Public Street Wall', type: 'actuation', description: 'Direct restitution of portrait prints to neighborhood street site', spec: 'Public domain' }
    ],
    schematicConnections: [
      { from: 'n1', to: 'n2', protocol: 'Oral Resonance', latency: 'Real-time' },
      { from: 'n2', to: 'n3', protocol: 'Consensual Shutter Release', latency: '1/125s' },
      { from: 'n3', to: 'n4', protocol: 'Chemical Latent Development', latency: 'Darkroom' },
      { from: 'n4', to: 'n5', protocol: 'Physical Installation Repatriation', latency: 'Site-Specific' }
    ],
    soundProfile: {
      type: 'solenoid-relay',
      freq: 180,
      description: 'Mechanical leaf shutter click, street traffic murmur, and human conversational murmur.'
    },
    visualPalette: {
      accent: '#a3a3a3',
      bgStyle: 'bg-neutral-950',
      gridColor: '#262626'
    }
  },

  // PLATE 03: Two-Man Rule (2012)
  {
    id: 'two-man-rule',
    accessionId: 'ACC.2012.03.GL',
    title: 'Two-Man Rule [TMR]',
    subtitle: 'Hand-constructed geodesic tape architecture with dual-switch mechanical/electronic shutter rig',
    year: 2012,
    venue: 'TEDxToronto, The Sony Centre for the Performing Arts',
    city: 'Toronto',
    category: 'participatory-optics',
    medium: 'Hand-constructed geodesic tape architecture, dual-switch mechanical/electronic shutter rig',
    dimensions: '400 × 400 × 260 cm (Geodesic tape monocoque)',
    provenance: 'TEDxToronto, The Sony Centre for the Performing Arts',
    focus: 'The necessity of dual human touch to trigger machine capture; relational consensus and structural interdependence.',
    images: [
      {
        id: 'two-man-rule-img-1',
        url: '/assets/ART_Images/akin4.jpg',
        placeholderType: 'twoman-overview',
        viewType: 'Installation View',
        title: 'Installation View: Geodesic Dome Monocoque & Chamber',
        caption: 'Perspective of the 4-meter hand-spun transparent packing tape geodesic dome showing the interior chamber, structural tape ribbing, and illuminated light core aperture.',
        captureMetadata: {
          camera: 'Canon 5D Mark II (Full Frame)',
          exposure: 'ISO 640 · f/2.8 · 1/60s',
          lightingCondition: 'Architectural ambient & dome internal LED core',
          scale: '400 × 400 × 260 cm'
        },
        credit: 'Documentation: TEDxToronto / Oliver Pauk'
      },
      {
        id: 'two-man-rule-img-2',
        url: '/assets/ART_Images/Two Man Rule button hardware.jpg',
        placeholderType: 'twoman-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: Dual Palm Actuator & Relay Interlock',
        caption: 'Detail of machined dual brass/steel palm plates mounted at opposite perimeters, wired into a solid-state coincidence logic circuit.',
        captureMetadata: {
          camera: '50mm Prime f/1.8',
          exposure: 'ISO 400 · f/4 · 1/125s',
          lightingCondition: 'Point-source LED indicator beacon',
          scale: 'Actuator terminal 25 × 25 cm'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
      },
      {
        id: 'two-man-rule-img-3',
        url: '/assets/ART_Images/TWO MAN RULE - Banner.png',
        placeholderType: 'twoman-action',
        viewType: 'Participatory Action',
        title: 'Participatory Action: Two Strangers Actuating Consensus & Banner Protocol',
        caption: 'Exhibition protocol banner and participants reaching across the spatial divide to maintain concurrent contact, fulfilling the two-man rule protocol.',
        captureMetadata: {
          camera: '35mm Prime f/1.4',
          exposure: 'ISO 800 · f/2.0 · 1/80s',
          lightingCondition: 'Strobe discharge through translucent tape skin',
          scale: 'Over 2,200 recorded consensus events'
        },
        credit: 'Documentation: TEDxToronto'
      }
    ],
    hardwareStack: [
      'Hand-spun structural packing tape monocoque (over 12 km tape filament)',
      'Dual solid-state palm contact switches in coincidence circuit',
      'Opto-isolated hardware coincidence logic gate controller',
      'Overhead panoramic camera core with 360-degree optic',
      'High-speed xenon strobe capacitor discharge array'
    ],
    softwareStack: [
      'Embedded C coincidence detection firmware',
      'Zero-latency hardware interrupt coincidence gating',
      'Processing (Java) live audience projection contact sheet'
    ],
    summary: 'A monumental tape dome requiring two simultaneous, cooperative strangers to actuate a camera capture, enforcing consensus against autonomous isolation.',
    curatorialStatement: 'Selected for TEDxToronto at The Sony Centre for the Performing Arts, Two-Man Rule takes its name and structural logic from nuclear launch safety protocols—systems designed to prevent singular catastrophic action by mandating simultaneous, distributed human authorization. Lim erected a 4-meter geodesic pavilion constructed entirely out of 12 kilometers of hand-spun packing tape. An overhead camera system was deadlocked: solitary visitors could not trigger a photograph. Machine capture occurred only when two separate individuals simultaneously depressed capacitive hand sensors within a tight 150ms coincidence window, recasting the camera as a relational contract requiring mutual consensus and physical co-presence.',
    technicalDossier: 'The dome utilized tensile monocoque principles developed during residency at Akin Collective. The electronic trigger circuit was galvanically isolated via optocouplers and fed into an Atmel microcontroller running an interrupt loop that polled both inputs at 1,000Hz, ensuring absolute synchronicity before generating a camera shutter release pulse.',
    installationFootprint: '4.5 × 4.5 m clear floor space; 3.0 m minimum ceiling height; 120V 15A power feed.',
    collaborators: ['Oliver Pauk (Akin Collective Co-Founder / Structural Advisor)', 'TEDxToronto Curatorial Committee', 'Sony Centre Technical Staff'],
    productionContext: 'Fabricated and pre-assembled during studio residency with Akin Collective (Dir. Oliver Pauk) with architecture volunteers for TEDxToronto.',
    studioLineage: 'Akin Collective (2011–2015)',
    schematicTitle: 'Dual-Party Coincidence Shutter Interlock Flow',
    schematicNodes: [
      { id: 'n1', label: 'Participant Alpha', type: 'participant', description: 'First participant depressing left capacitive contact terminal', spec: 'Left contact plate' },
      { id: 'n2', label: 'Participant Beta', type: 'participant', description: 'Second participant depressing right capacitive contact terminal', spec: 'Right contact plate' },
      { id: 'n3', label: 'Coincidence Logic Unit', type: 'processing', description: 'Hardware AND-gate checking concurrent contact within 150ms window', spec: 'Sub-5ms polling' },
      { id: 'n4', label: 'Optical Shutter Core', type: 'optic', description: 'Overhead camera mechanism fired upon mutual human agreement', spec: '360-degree panoramic' },
      { id: 'n5', label: 'Translucent Tape Monocoque', type: 'actuation', description: 'Tensile tape pavilion radiating synchronized xenon flash', spec: '12km tape monocoque' }
    ],
    schematicConnections: [
      { from: 'n1', to: 'n3', protocol: 'Capacitive Contact 1', latency: '2ms' },
      { from: 'n2', to: 'n3', protocol: 'Capacitive Contact 2', latency: '2ms' },
      { from: 'n3', to: 'n4', protocol: 'Consensus Trigger Pulse', latency: '8ms' },
      { from: 'n4', to: 'n5', protocol: 'Synchronized Strobe Flash', latency: '0.0ms' }
    ],
    soundProfile: {
      type: 'solenoid-relay',
      freq: 380,
      description: 'Audible coincidence relay snap followed by high-voltage strobe capacitor discharge.'
    },
    visualPalette: {
      accent: '#06b6d4',
      bgStyle: 'bg-neutral-950',
      gridColor: '#164e63'
    }
  },

  // PLATE 04: Broadcast People (2012)
  {
    id: 'broadcast-people',
    accessionId: 'ACC.2012.04.GL',
    title: 'Broadcast People',
    subtitle: 'Wall-scale closed-circuit television (CCTV) matrix, tactile pressure-plate floor actuator',
    year: 2012,
    venue: '|FAT| Toronto Alternative Arts & Fashion Week',
    city: 'Toronto',
    category: 'closed-circuit-systems',
    medium: 'Wall-scale closed-circuit television (CCTV) matrix, tactile pressure-plate floor actuator',
    dimensions: '320 × 240 × 120 cm (Modular structural steel tower)',
    provenance: '|FAT| Toronto Alternative Arts & Fashion Week',
    focus: 'Feedback loops, surveillance apparatuses, and the performative compulsion of the modern gaze.',
    images: [
      {
        id: 'broadcast-people-img-1',
        url: '/assets/ART_Images/FAT_01.jpg',
        placeholderType: 'broadcast-overview',
        viewType: 'Installation View',
        title: 'Installation View: |FAT| Opening & Audience Interaction',
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
        url: '/assets/ART_Images/FAT_02.jpg',
        placeholderType: 'broadcast-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: Real-Time Closed-Circuit Delay Feed',
        caption: 'Participants captured within the real-time closed-circuit delay matrix and composite routing switcher.',
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
        url: '/assets/ART_Images/FAT_05.jpg',
        placeholderType: 'broadcast-action',
        viewType: 'Participatory Action',
        title: 'Participatory Action: Real-Time Delay Matrix Engagement',
        caption: 'Participant engaging with real-time video delay matrix and feedback loops at |FAT| Arts & Fashion Week.',
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
    curatorialStatement: 'Presented as an anchor installation at |FAT| Arts & Fashion Week, Broadcast People hijacked the spectacle of the runway. While attendees arrived to consume polished haute couture, Lim confronted them with a dense monolith of 16 glowing cathode-ray tube television sets. Hidden wide-angle closed-circuit cameras framed the approaching crowd. Stomping on industrial foot pedals scattered along the concrete floor scrambled the signal matrix, broadcasting visitors’ faces delayed by 3 seconds interlaced with static from dead commercial television bands. The work materialized the visceral hum, electromagnetic scanlines, and unexamined observer bias of 20th-century broadcast networks.',
    technicalDossier: 'The CRT monitors were de-cased and mounted in an exposed scaffolding cube. Time-base correctors and feedback attenuators allowed spectators to induce recursive visual howl-arounds by holding down multiple foot pedals concurrently, effectively jamming the institutional video feed.',
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

  // PLATE 05: The Ultimate Selfie & Interactive Pavilions (2013–2014)
  {
    id: 'the-ultimate-selfie',
    accessionId: 'ACC.2013.05.GL',
    title: 'The Ultimate Selfie & Interactive Pavilions',
    subtitle: 'Disassembled/hacked DSLR hardware, micro-switches, automated digital distribution pipeline',
    year: 2013,
    venue: 'Metro Toronto Convention Centre (IDS / IIDEX / TO DO)',
    city: 'Toronto',
    category: 'participatory-optics',
    medium: 'Disassembled/hacked DSLR hardware, micro-switches, automated digital distribution pipeline',
    dimensions: '480 × 360 × 280 cm (Free-standing public pavilion)',
    provenance: 'Metro Toronto Convention Centre (IDS / IIDEX / TO DO)',
    focus: 'Machine-mediated narcissism and automated extraction loops of public self-documentation.',
    images: [
      {
        id: 'ultimate-selfie-img-1',
        url: '/assets/ART_Images/Ultimate Selfie.jpg',
        placeholderType: 'selfie-overview',
        viewType: 'Installation View',
        title: 'Installation View: Ultimate Selfie Interactive Pavilion',
        caption: 'Exterior view of the interactive timber pavilion and camera rig projecting monumental inverted participant faces.',
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
        url: '/assets/ART_Images/IIDEX Toronto event.jpg',
        placeholderType: 'selfie-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: IIDEX Interactive Pavilion Architecture',
        caption: 'Architectural installation and public engagement with the custom interactive pavilion housing optocoupler relays and DSLR capture rig.',
        captureMetadata: {
          camera: '50mm Macro f/2.8',
          exposure: 'ISO 400 · f/5.6 · 1/40s',
          lightingCondition: 'Exhibition hall ambient',
          scale: 'Controller rig'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
      },
      {
        id: 'ultimate-selfie-img-3',
        url: '/assets/ART_Images/studio_20141118_112314.jpg',
        placeholderType: 'pavilions-action',
        viewType: 'Participatory Action',
        title: 'Apparatus Bench: DSLR Shutter Actuation Bench & Custom Rig',
        caption: 'Studio bench calibration of custom optocoupler trigger boards and remote shutter controls for automated image distribution.',
        captureMetadata: {
          camera: '35mm Prime f/1.4',
          exposure: 'ISO 1250 · f/2.8 · 1/160s',
          lightingCondition: 'Studio bench lighting',
          scale: 'Over 18,400 recorded triggers'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
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
    summary: 'Monumental architectural pavilions at MTCC dissecting machine-mediated narcissism and automated extraction loops of public self-documentation.',
    curatorialStatement: 'Before the smartphone front-facing camera achieved ubiquity as a corporate marketing instrument, Lim\'s Ultimate Selfie pavilion interrogated the narcissistic dimensions and observer bias of automated self-capture. Housed within an imposing timber pavilion at MTCC, visitors encountered a solitary tactile pedestal. Touching the surface closed an electrical relay through the participant\'s body, instantly firing an array of hacked DSLR cameras hidden behind two-way mirrors. Rather than providing a private keepsake, the image was instantaneously routed, color-inverted, and magnified across the pavilion\'s monumental exterior walls, transforming private self-admiration into a public broadcast monument.',
    technicalDossier: 'Over 4 days of exhibition at MTCC and Toronto Design Offsite (TO DO), the pavilion recorded and processed over 18,400 participatory shutter events. The custom Arduino hardware isolated participant capacitive current from mains voltage using high-speed optocouplers, sustaining sub-50ms latency between bodily contact and mechanical shutter slap.',
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

  // PLATE 06: Deconstructing Capital (2020)
  {
    id: 'deconstructing-capital',
    accessionId: 'ACC.2020.06.GL',
    title: 'Deconstructing Capital',
    subtitle: 'Site-specific spatial intervention, layered optical scrims, directional high-lumen flood arrays, camera-jamming retroreflective surfaces',
    year: 2020,
    venue: '52 St. Lawrence Industrial Loft Space',
    city: 'Toronto',
    category: 'observer-bias',
    medium: 'Site-specific spatial intervention, layered optical scrims, directional high-lumen flood arrays, camera-jamming retroreflective surfaces',
    dimensions: '1800 × 1200 × 420 cm (Multi-room warehouse conversion)',
    provenance: '52 St. Lawrence, Toronto',
    focus: 'Optical counter-surveillance, blinding automated capture, and carving physical privacy sanctuaries out of public space.',
    images: [
      {
        id: 'deconstructing-capital-img-1',
        url: '/assets/ART_Images/studio_20190527_201216.jpg',
        placeholderType: 'deconstruct-overview',
        viewType: 'Installation View',
        title: 'Installation View: Neon Magenta Optical Flood Array (52 St. Lawrence)',
        caption: 'Spatial overview of the warehouse installation showing suspended retroreflective scrims and directional high-lumen optical flood array.',
        captureMetadata: {
          camera: 'Full-Frame 24mm f/2.8',
          exposure: 'ISO 200 · f/4 · 1/125s',
          lightingCondition: '12kW Aggregate Directional Tungsten & Magenta Wash',
          scale: '18 × 12 m Bay'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
      },
      {
        id: 'deconstructing-capital-img-2',
        url: '/assets/ART_Images/studio_20191101_201721.jpg',
        placeholderType: 'deconstruct-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: Optical Jamming Camera Rig & Specular Calibration',
        caption: 'Optical jamming camera rig and specular reflection calibration engineered to reflect beam photons directly into camera irises.',
        captureMetadata: {
          camera: '85mm Prime f/1.4',
          exposure: 'ISO 100 · f/5.6 · 1/250s',
          lightingCondition: '45,000 Lux Incident Point Source',
          scale: 'Detail 1:1'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
      },
      {
        id: 'deconstructing-capital-img-3',
        url: '/assets/ART_Images/concert_20200228_190337.jpg',
        placeholderType: 'deconstruct-action',
        viewType: 'Participatory Action',
        title: 'Participatory Action: High-Lux Stage & Flood Counter-Optics',
        caption: 'High-lux stage and flood lighting counter-optics research traversing the boundary between camera detection and complete whiteout clipping.',
        captureMetadata: {
          camera: '35mm Summicron',
          exposure: 'ISO 400 · f/2.8 · 1/100s',
          lightingCondition: 'Directional Chiaroscuro',
          scale: 'Live performance sanctuary'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
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
    curatorialStatement: 'Staged on the threshold of Toronto\'s rapid financialized hyper-development at 52 St. Lawrence, Deconstructing Capital addresses institutional observer bias—the unexamined premise that because optical recording apparatuses exist, institutions possess an intrinsic right to observe and extract. Automated capture systems rely on auto-exposure algorithms that optimize for ambient averages. Lim erected directional 2000-watt Fresnel lighting bars positioned at critical Brewster angles relative to sheer retroreflective scrims, over-saturating camera sensors while illuminating human performers in gentle chiaroscuro. The work establishes a sanctuary zone where institutional observer bias collapses under its own technological hubris.',
    technicalDossier: 'The installation measured 216 square meters. Performers moved along choreographies calibrated to sensor blind-spots. Custom OpenCV diagnostic terminals mounted outside the performance perimeter broadcast the real-time CCTV failure states to the audience, demonstrating the gap between institutional machine capture and organic human co-presence.',
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

  // PLATE 07: Collective Infrastructure & Mutual Aid (2011–2024)
  {
    id: 'collective-infrastructure',
    accessionId: 'ACC.2011.07.GL',
    title: 'Collective Infrastructure & Mutual Aid',
    subtitle: 'Spatial documentation, community archiving, and artist workspace stewardship',
    year: 2024,
    venue: 'Akin Collective (Dir. Oliver Pauk), Daylight Studio Sanctuary, Flick the Switch Artists\' Collective',
    city: 'Toronto',
    category: 'participatory-optics',
    medium: 'Spatial documentation, community archiving, and artist workspace stewardship',
    dimensions: 'Multi-site longitudinal studio continuum and solidarity archives',
    provenance: 'Akin Collective (Dir. Oliver Pauk, 2011–2015), Daylight Studio Sanctuary (2014–2023), Flick the Switch Artists\' Collective (with Susan Stewart, 2019–2024)',
    focus: 'Spatial interdependence, shared tools, solidarity economies, and grassroots cultural preservation.',
    images: [
      {
        id: 'collective-img-1',
        url: '/assets/ART_Images/studio_20141218_084153.jpg',
        placeholderType: 'collective-overview',
        viewType: 'Installation View',
        title: 'Daylight Studio Sanctuary: 90 Ontario & Industrial Rigging',
        caption: 'Interior perspective of the 3,200 sq.ft daylight studio facility directed by Lim (Motion and Still), showing heavy overhead lighting grids, south-facing industrial fenestration, and community salon staging.',
        captureMetadata: {
          camera: 'Medium Format 6×7',
          exposure: 'ISO 100 · f/8 · 1/60s',
          lightingCondition: 'Direct natural south daylight & balanced fill',
          scale: '3,200 sq.ft physical workspace'
        },
        credit: 'Documentation: Studio Motion and Still Archive'
      },
      {
        id: 'collective-img-2',
        url: '/assets/ART_Images/motionandstill.jpg',
        placeholderType: 'collective-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Motion & Still Creative Collective & Studio Family',
        caption: 'Gwendalynn Lim with the resident creative collective, collaborators, and production crew in the 90 Ontario daylight sanctuary.',
        captureMetadata: {
          camera: '35mm Prime f/2',
          exposure: 'ISO 400 · f/4 · 1/125s',
          lightingCondition: 'Studio daylight',
          scale: 'Creative collective community'
        },
        credit: 'Documentation: Motion & Still Archive'
      },
      {
        id: 'collective-img-3',
        url: '/assets/ART_Images/Flick the Switch event.jpg',
        placeholderType: 'collective-action',
        viewType: 'Participatory Action',
        title: 'Flick the Switch Artists Collective & Community Showcase',
        caption: 'Community cultural gathering and mutual aid exhibition organized with Susan Stewart and collective members.',
        captureMetadata: {
          camera: '28mm f/2.8',
          exposure: 'ISO 800 · f/2.8 · 1/60s',
          lightingCondition: 'Natural studio ambient',
          scale: 'Collective solidarity space'
        },
        credit: 'Documentation: Flick the Switch / Gwendalynn Lim'
      }
    ],
    hardwareStack: [
      'Overhead motorized studio lighting grids and 100A 3-phase cam-lock electrical drops',
      'Pro bono 4K digital video ingestion and editing archival workstations',
      'Darkroom fiber-print washing sinks and archival drying racks',
      'Woodworking fabrication machinery and geodesic frame jig assemblies'
    ],
    softwareStack: [
      'Decentralized local NAS storage clusters and RAID-6 archival backups',
      'Open-source community equipment reservation and mutual-aid scheduling portals',
      'Color-calibrated digital intermediate grading and preservation suites'
    ],
    summary: 'A 13-year continuous commitment to artist-run spatial infrastructure, providing pro bono media resources, shared equipment, and architectural sanctuaries for Toronto grassroots artist communities.',
    curatorialStatement: 'Spanning Akin Collective (the first collective Lim joined, founded by Oliver Pauk), the founding of the Motion and Still commercial daylight facility, and a 5-year partnership directing media resources for Flick the Switch (with Susan Stewart), this archive documents the physical and relational scaffolding underpinning Lim\'s practice. Interdependence is treated here not as a conceptual slogan, but as concrete physical reality: maintaining 3-phase electrical drops, fabricating shared equipment jigs, and holding open studio space against real estate hyper-gentrification.',
    technicalDossier: 'Comprehensive spatial continuum documenting 4 physical hubs across Toronto and Singapore: 1) Akin Collective shared ARC studio space (2011–2015); 2) Motion and Still 3,200 sq.ft daylight sanctuary (2014–2023); 3) Flick the Switch collective suite at 34 Stephanie St (2019–2024); 4) SIT Applied Computing computational and sovereign quantum research workstation (2024–2026).',
    installationFootprint: 'Multi-site longitudinal studio continuum spanning 3,200 sq.ft daylight facility, artist-run centers, and institutional computing laboratories.',
    collaborators: ['Akin Collective (Dir. Oliver Pauk)', 'Flick the Switch Artists\' Collective (Dir. Susan Stewart)', 'Motion and Still Studio'],
    productionContext: 'Longitudinal spatial and solidarity studio practice sustained independently across Toronto and Singapore.',
    studioLineage: 'Akin Collective · Motion and Still · Flick the Switch Continuum',
    schematicTitle: 'Spatial Interdependence & Mutual Aid Resource Distribution',
    schematicNodes: [
      { id: 'n1', label: 'Grassroots Artist Pool', type: 'participant', description: 'Under-resourced independent artists and collective members', spec: 'Community cohort' },
      { id: 'n2', label: 'Daylight Sanctuary', type: 'optic', description: 'Physical 3,200 sq.ft studio space with 3-phase power and natural daylight', spec: 'Physical space' },
      { id: 'n3', label: 'Pro Bono Media Suite', type: 'processing', description: 'Zero-cost 4K archival documentation and high-speed editing node', spec: 'Archival workstation' },
      { id: 'n4', label: 'Shared Fabrication Rig', type: 'actuation', description: 'Heavy machinery, woodshop jigs, and lighting hardware loan library', spec: 'Equipment pool' },
      { id: 'n5', label: 'Solidarity Archive', type: 'network', description: 'Longitudinal public documentation returned to independent artists', spec: 'Decentralized archive' }
    ],
    schematicConnections: [
      { from: 'n1', to: 'n2', protocol: 'Physical Inhabitation', latency: 'Direct' },
      { from: 'n2', to: 'n3', protocol: 'Pro Bono Media Ingestion', latency: '4K ProRes' },
      { from: 'n3', to: 'n4', protocol: 'Fabrication Resource Sharing', latency: 'Tool Library' },
      { from: 'n4', to: 'n5', protocol: 'Archival Output & Public Return', latency: 'Open Access' }
    ],
    soundProfile: {
      type: 'transformer-drone',
      freq: 60,
      description: 'Low 60Hz 3-phase power transformer hum layered with natural studio ambient acoustic reverb.'
    },
    visualPalette: {
      accent: '#d97706',
      bgStyle: 'bg-amber-950',
      gridColor: '#451a03'
    }
  },

  // PLATE 08: The Riemann Manifold (2026)
  {
    id: 'riemann-manifold',
    accessionId: 'ACC.2026.08.GL',
    title: 'The Riemann Manifold: Quantum Chaos & Spectral Topology',
    subtitle: 'High-dimensional computational installation, generative spectral mapping, algorithmic visualization',
    year: 2026,
    venue: 'Independent Computational Practice / Sovereign Quantum Research (Singapore)',
    city: 'Singapore',
    category: 'computational-topology',
    medium: 'High-dimensional computational installation, generative spectral mapping, algorithmic visualization',
    dimensions: '600 × 450 × 320 cm (Site-responsive spatial installation)',
    provenance: 'Independent Computational Practice / Sovereign Quantum Research (evecount/riemann_hypothesis)',
    focus: 'Prime resonances, non-trivial zeros along the critical strip (Re(s) = 1/2), quantum operator dynamics, and autonomous non-human order.',
    images: [
      {
        id: 'riemann-manifold-img-1',
        url: '/assets/artworks/08-riemann-manifold/plate-08-hero.jpg',
        placeholderType: 'riemann-overview',
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
        id: 'riemann-manifold-img-2',
        url: '/assets/artworks/08-riemann-manifold/plate-08-detail-1.jpg',
        placeholderType: 'riemann-apparatus',
        viewType: 'Apparatus Detail',
        title: 'Apparatus Detail: Transducer Plinth & Inference Node',
        caption: 'Detail of low-frequency surface transducers embedded within the basalt plinth, converting non-trivial zeta zero distributions into 38Hz–94Hz acoustic vibrations.',
        captureMetadata: {
          camera: '90mm Macro f/2.8',
          exposure: 'ISO 800 · f/8 · 1/30s',
          lightingCondition: 'Sub-surface LED diagnostic channel',
          scale: '180 × 90 cm plinth detail'
        },
        credit: 'Documentation: Studio Gwendalynn Lim'
      },
      {
        id: 'riemann-manifold-img-3',
        url: '/assets/artworks/08-riemann-manifold/plate-08-detail-2.jpg',
        placeholderType: 'riemann-action',
        viewType: 'Participatory Action',
        title: 'Participatory Encounter: Spectator at the Critical Strip',
        caption: 'Visitor navigating the acoustic perimeter, observing generative prime interference patterns converge along the critical line Re(s) = 1/2.',
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
      'Custom Python/PyTorch latent Riemannian manifold projector (Repo: evecount/riemann_hypothesis)',
      'Hilbert-Pólya quantum operator eigenvalue simulation engine',
      'WebGL / GLSL custom topological deformation shader',
      'Gaussian Unitary Ensemble (GUE) spectral statistics pipeline'
    ],
    summary: 'An algorithmic inquiry into the spectral distribution and non-trivial zeros of the Riemann zeta function. Bridging quantum operator dynamics with high-dimensional topological manifolds, the work visualizes the boundary where deterministic arithmetic collapses into quantum chaos.',
    curatorialStatement: 'An algorithmic inquiry into the spectral distribution and non-trivial zeros of the Riemann zeta function. Bridging quantum operator dynamics with high-dimensional topological manifolds, the work visualizes the boundary where deterministic arithmetic collapses into quantum chaos. By mapping prime resonances along the critical strip (Re(s) = 1/2), the installation frames mathematical reality not as human invention, but as an autonomous, non-human infrastructure of relational frequencies and structural interdependence.',
    technicalDossier: 'Algorithmic investigation into the non-trivial zeros of the Riemann zeta function and prime distribution along the critical strip. Bridges quantum operator eigenvalues, random matrix statistics (GUE), and generative interference patterns to explore deterministic chaos and non-human systemic harmony. (Repo: evecount/riemann_hypothesis). The system computes spectral statistics at 60 frames per second projected onto a 3-dimensional Riemannian manifold.',
    installationFootprint: 'Black box gallery, light-sealed, minimum 4.5m ceiling height, isolated acoustic damping floor.',
    collaborators: ['Eve Count Quantum Systems Research Lab', 'Applied Computing & Quantum Lab, SIT'],
    productionContext: 'Developed within sovereign computational and quantum systems research in Singapore (Eve Count Quantum Systems / Applied Computing Laboratory).',
    studioLineage: 'Independent Computational & Quantum Practice (Singapore)',
    schematicTitle: 'Spectral Topology & Critical Strip Projection Pipeline',
    schematicNodes: [
      { id: 'n1', label: 'Zeta Zero Engine', type: 'processing', description: 'Real-time computation of non-trivial zeros on critical strip Re(s)=1/2', spec: 'Repo: evecount/riemann_hypothesis' },
      { id: 'n2', label: 'Hilbert-Pólya Hamiltonian', type: 'processing', description: 'Quantum operator eigenvalue mapping via GUE random matrix statistics', spec: 'Quantum Spectral Operator' },
      { id: 'n3', label: 'Topological Projector', type: 'processing', description: 'High-dimensional Riemannian manifold generator mapping spectral interference', spec: '4096-dim -> 3D Manifold' },
      { id: 'n4', label: 'Obsidian Plinth Projection', type: 'optic', description: '4K laser raster showing live non-Euclidean manifold deformation', spec: '3840x2160 @ 60fps' },
      { id: 'n5', label: 'Sub-Bass Transducers', type: 'actuation', description: 'Piezoelectric low-frequency actuators translating entropy into structural vibration', spec: '20Hz - 120Hz' },
      { id: 'n6', label: 'Gallery Spectator', type: 'participant', description: 'Human presence positioned at the threshold of non-human mathematical harmony', spec: 'Observational encounter' }
    ],
    schematicConnections: [
      { from: 'n1', to: 'n2', protocol: 'Zeta Zero Frequencies', latency: '3.2ms' },
      { from: 'n2', to: 'n3', protocol: 'GUE Spectral Eigenvalues', latency: '6.4ms' },
      { from: 'n3', to: 'n4', protocol: 'Riemannian Coordinates', latency: '16.6ms' },
      { from: 'n3', to: 'n5', protocol: 'Resonance Voltage Signal', latency: '2.0ms' },
      { from: 'n4', to: 'n6', protocol: 'Visual Topological Convergence', latency: '0.0ms' }
    ],
    soundProfile: {
      type: 'transformer-drone',
      freq: 55,
      description: 'Low-frequency sub-bass drone modulated by real-time Riemann zero eigenvalue transitions.'
    },
    githubUrl: 'https://github.com/evecount/riemann_hypothesis',
    visualPalette: {
      accent: '#60a5fa',
      bgStyle: 'bg-neutral-950',
      gridColor: '#1e293b'
    }
  }
];

export const ARTWORKS: Artwork[] = RAW_ARTWORKS.map(art => ({
  ...art,
  archivalPhotos: getArchivalPhotosForArtwork(art.id)
}));

