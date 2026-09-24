import { ArchivalStudioPhoto } from '../types/portfolio';

export interface ArtworkArchivalCollection {
  artworkId: string;
  plateNumber: string;
  title: string;
  epoch: string;
  provenance: string;
  photos: ArchivalStudioPhoto[];
}

/**
 * Full Archival Image Catalog matching the user's 67 exact files from ART_Images:
 * Every file has its exact label, multi-extension candidate resolution, date,
 * curatorial context, location, and camera/lighting metadata.
 */
export const ARCHIVAL_COLLECTIONS: Record<string, ArchivalStudioPhoto[]> = {
  // PLATE 01: White Geisha & Silver Aurelia (2010–2012)
  'white-geisha-silver-aurelia': [
    {
      id: 'wg-01',
      filename: 'white_geisha',
      url: '/assets/ART_Images/white_geisha.jpg',
      dateStr: '2010',
      title: 'White Geisha — Studio Portraiture & Origami Hair Architecture',
      context: 'Noise Singapore Festival Exhibition, curated by National Arts Council Singapore. Archival pigment series.',
      category: 'installation',
      metadataNote: 'Medium format analog capture; Hasselblad 500C/M, 80mm Zeiss Planar; Kodak Portra 160',
      location: 'Singapore',
      aspectRatio: 'portrait'
    },
    {
      id: 'wg-02',
      filename: 'silver_aurelia',
      url: '/assets/ART_Images/silver_aurelia.jpg',
      dateStr: '2011',
      title: 'Silver Aurelia — Atmosphere, Smoke Diffuser & Persona Study',
      context: 'Exploration of human vulnerability under institutional observation and persona construction.',
      category: 'installation',
      metadataNote: 'Directional strobe with snoot; high-key atmospheric smoke; 50mm f/1.4',
      location: 'Singapore',
      aspectRatio: 'portrait'
    }
  ],

  // PLATE 02: A Perfect World (2010–2011)
  'a-perfect-world': [
    {
      id: 'pw-01',
      filename: 'In a Perfest World April 2010',
      url: '/assets/ART_Images/In a Perfest World April 2010.jpg',
      dateStr: '2010-04',
      title: 'In a Perfect World — Relational Portraiture & Market Voices',
      context: 'Relational portraiture intervention negotiated directly with market residents and vendors.',
      category: 'process',
      metadataNote: 'Mamiya 7II, 65mm f/4; Ilford HP5+ 400 pushed to 800; ambient natural street light',
      location: 'Kensington Market, Toronto',
      aspectRatio: 'portrait'
    }
  ],

  // PLATE 03: Two-Man Rule [TMR] (2012)
  'two-man-rule': [
    {
      id: 'tmr-banner',
      filename: 'TWO MAN RULE - Banner',
      url: '/assets/ART_Images/TWO MAN RULE - Banner.jpg',
      dateStr: '2012',
      title: 'TWO MAN RULE — Exhibition Protocol Banner & Consensus Identity',
      context: 'Official curatorial banner and installation protocol detailing the two-operator consensus interlock.',
      category: 'apparatus',
      metadataNote: 'Exhibition graphics panel; Sony Centre for the Performing Arts / TEDxToronto',
      location: 'The Sony Centre, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tmr-button',
      filename: 'Two Man Rule button hardware',
      url: '/assets/ART_Images/Two Man Rule button hardware.jpg',
      dateStr: '2012',
      title: 'Two Man Rule Button Hardware & Dual Relay Trigger',
      context: 'Machined brass dual-contact button mechanism requiring concurrent physical activation to complete circuit.',
      category: 'apparatus',
      metadataNote: 'Industrial heavy-duty palm button; isolated low-voltage DC trigger relay; safety interlocking',
      location: 'Toronto',
      aspectRatio: 'square'
    },
    {
      id: 'tmr-01',
      filename: 'akin',
      url: '/assets/ART_Images/akin.jpg',
      dateStr: '2012',
      title: 'Geodesic Tape Sphere Exterior under Crimson Illumination',
      context: 'Fully assembled 4-meter tape monocoque dome inside Akin Collective workshop before transfer to Sony Centre.',
      category: 'installation',
      metadataNote: 'Long exposure 1/4s; high-tensile packing tape structure; interior incandescent + red gel illumination',
      location: 'Akin Collective, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tmr-02',
      filename: 'akin2',
      url: '/assets/ART_Images/akin2.jpg',
      dateStr: '2012',
      title: 'Structural Ribs & Tape Monocoque Assembly in Akin Studio',
      context: 'Hand-laminating structural tape tensile bands over inflatable geometric mandrels with collective members.',
      category: 'process',
      metadataNote: 'Daylight factory loft windows; tensile stress testing of tape monocoque framework',
      location: 'Akin Collective, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tmr-03',
      filename: 'akin3',
      url: '/assets/ART_Images/akin3.jpg',
      dateStr: '2012',
      title: 'Pneumatic Framing, Floor Mats & Cabling Routing',
      context: 'Routing 12V DC relay cabling from dual brass touch contacts to electronic shutter trigger interlock.',
      category: 'apparatus',
      metadataNote: 'Dual circuit isolation relays; pneumatic tensioning; safety floor buffer layer',
      location: 'Akin Collective, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tmr-04',
      filename: 'akin4',
      url: '/assets/ART_Images/akin4.jpg',
      dateStr: '2012',
      title: 'Internal Chamber Perspective & Light Core Aperture',
      context: 'Interior view looking through the entrance opening into the central capture sphere.',
      category: 'installation',
      metadataNote: 'Wide-angle interior perspective; illuminated central pedestal and dual contact points',
      location: 'Akin Collective, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tmr-05',
      filename: 'akin5',
      url: '/assets/ART_Images/akin5.jpg',
      dateStr: '2012',
      title: '[TMR] TWO-MAN RULE — Curatorial Poster & Exhibition Banner',
      context: 'Official project documentation badge and exhibition protocol banner detailing the two-operator consensus.',
      category: 'apparatus',
      metadataNote: 'Silkscreen typographic panel on archival substrate; two-manrule.com provenance',
      location: 'TEDxToronto, The Sony Centre',
      aspectRatio: 'landscape'
    },
    {
      id: 'tmr-lovelocal',
      filename: 'LOVELOCAL with Akin Collective',
      url: '/assets/ART_Images/LOVELOCAL with Akin Collective.jpg',
      dateStr: '2012',
      title: 'LOVELOCAL Exhibition Showcase with Akin Collective',
      context: 'Grassroots community art showcase celebrating local fabrication and collective maker culture.',
      category: 'collective',
      metadataNote: 'Community showcase; shared studio infrastructure banner and group display',
      location: 'Toronto',
      aspectRatio: 'landscape'
    }
  ],

  // PLATE 04: Broadcast People (2012)
  'broadcast-people': [
    {
      id: 'bp-01',
      filename: 'FAT_01',
      url: '/assets/ART_Images/FAT_01.jpg',
      dateStr: '2012-04',
      title: '|FAT| Opening: Audience Interaction in Front of Balloon Matrix',
      context: '|FAT| Toronto Alternative Arts & Fashion Week, Regent Park Arts Centre. Visitors trigger wall-scale CCTV matrix.',
      category: 'performance',
      metadataNote: 'Ambient runway lighting; participants interacting with floor pressure-plate actuator',
      location: 'Regent Park Arts Centre, Toronto',
      aspectRatio: 'portrait'
    },
    {
      id: 'bp-02',
      filename: 'FAT_02',
      url: '/assets/ART_Images/FAT_02.jpg',
      dateStr: '2012-04',
      title: 'Participants Captured within Real-Time Closed-Circuit Delay Feed',
      context: 'Audience discovering their own delayed reflections across the 16-monitor CRT matrix array.',
      category: 'performance',
      metadataNote: 'Analog CCTV camera feed; composite video distribution amplifier loop',
      location: '|FAT| Toronto',
      aspectRatio: 'portrait'
    },
    {
      id: 'bp-03',
      filename: 'FAT_03',
      url: '/assets/ART_Images/FAT_03.jpg',
      dateStr: '2012-04',
      title: 'Group Interaction under Overhead CCTV Surveillance Lens',
      context: 'Multiple participants stepping simultaneously onto floor pressure sensor pads.',
      category: 'performance',
      metadataNote: 'Crowd interaction; analog delay feedback loop running 1.8-second buffer',
      location: '|FAT| Toronto',
      aspectRatio: 'portrait'
    },
    {
      id: 'bp-04',
      filename: 'FAT_04',
      url: '/assets/ART_Images/FAT_04.jpg',
      dateStr: '2012-04',
      title: 'Optical Defiance: Dark Lenses & Crowd Under Machine Observation',
      context: 'Performative response to pervasive camera capture; testing observer reflexivity.',
      category: 'performance',
      metadataNote: 'High-contrast black-and-white print; flash synchronization with CCTV frame rate',
      location: '|FAT| Toronto',
      aspectRatio: 'portrait'
    },
    {
      id: 'bp-05',
      filename: 'FAT_05',
      url: '/assets/ART_Images/FAT_05.jpg',
      dateStr: '2012-04',
      title: 'Participant Engaging with Real-Time Video Delay Matrix',
      context: 'Subject inspecting tactile floor actuators while watching immediate visual feedback echo.',
      category: 'performance',
      metadataNote: 'Direct observer engagement; CRT cathode phosphors flickering under ambient light',
      location: '|FAT| Toronto',
      aspectRatio: 'portrait'
    },
    {
      id: 'bp-06',
      filename: 'FAT_06',
      url: '/assets/ART_Images/FAT_06.jpg',
      dateStr: '2012-04',
      title: 'Observer Inversion: Audience Member Photographing CCTV Feed',
      context: 'The classic feedback inversion: participant raises a digital camera to photograph the apparatus recording her.',
      category: 'performance',
      metadataNote: 'Mutual capture moment; camera-to-screen recursion loop',
      location: '|FAT| Toronto',
      aspectRatio: 'portrait'
    },
    {
      id: 'bp-grid',
      filename: 'FAT_2012 Timelapse Grid',
      url: '/assets/ART_Images/FAT_2012 Timelapse Grid.jpg',
      dateStr: '2012-04',
      title: '|FAT| 2012 Timelapse Matrix & Continuous Spectator Flux',
      context: 'Comprehensive contact sheet grid tracking hundreds of audience interventions across the 4-day festival.',
      category: 'performance',
      metadataNote: 'Composite contact sheet of temporal video buffer frames',
      location: 'Regent Park Arts Centre, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'bp-overview',
      filename: 'FAT_2012',
      url: '/assets/ART_Images/FAT_2012.jpg',
      dateStr: '2012-04',
      title: '|FAT| 2012 Spatial Installation Overview & Balloon Scrim',
      context: 'Wide spatial view showing the high-density balloon membrane buffering the CRT monitor array.',
      category: 'installation',
      metadataNote: 'Wide environmental frame; theatrical festival lighting',
      location: 'Regent Park Arts Centre, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'bp-2021-booth',
      filename: 'FAT_2021 Booth Setup',
      url: '/assets/ART_Images/FAT_2021 Booth Setup.jpg',
      dateStr: '2021',
      title: '|FAT| 10-Year Retrospective Booth Setup & Archival Display',
      context: 'Curatorial retrospective booth documenting a decade of participatory media and surveillance art in Toronto.',
      category: 'installation',
      metadataNote: 'Gallery exhibition booth; museum lighting and printed archival documentation',
      location: 'Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'bp-2021-gwen',
      filename: 'FAT_2021_GwenPortrait',
      url: '/assets/ART_Images/FAT_2021_GwenPortrait.jpg',
      dateStr: '2021',
      title: 'Gwen Lim at |FAT| Retrospective Installation',
      context: 'Artist portrait beside the archival video documentation wall at the 2021 showcase.',
      category: 'performance',
      metadataNote: 'Curatorial exhibition portrait; archival retrospective',
      location: 'Toronto',
      aspectRatio: 'portrait'
    }
  ],

  // PLATE 05: The Ultimate Selfie & Interactive Pavilions (2013–2015)
  'the-ultimate-selfie': [
    {
      id: 'tus-core',
      filename: 'Ultimate Selfie',
      url: '/assets/ART_Images/Ultimate Selfie.jpg',
      dateStr: '2014',
      title: 'The Ultimate Selfie — Full Interactive Pavilion in Action',
      context: 'Automated high-throughput photography pavilion: participants activate custom tactile shutter trigger.',
      category: 'installation',
      metadataNote: 'Studio strobe synchronization; automated Python ingest and web queue distribution',
      location: 'Metro Toronto Convention Centre / IIDEX',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-iidex-swing',
      filename: '03Dec2014_IIDEX Booth in full swing',
      url: '/assets/ART_Images/03Dec2014_IIDEX Booth in full swing.jpg',
      dateStr: '2014-12-03',
      title: 'IIDEX Booth in Full Swing: High-Volume Audience Engagement',
      context: 'Lines of attendees participating in automated capture at IIDEX Canada architecture exposition.',
      category: 'performance',
      metadataNote: 'Exhibition floor ambient lighting; rapid continuous firing of custom optocoupler trigger',
      location: 'Metro Toronto Convention Centre, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-iidex-event',
      filename: 'IIDEX Toronto event',
      url: '/assets/ART_Images/IIDEX Toronto event.jpg',
      dateStr: '2014-12',
      title: 'IIDEX Toronto Event Architecture & Pavilion Facade',
      context: 'Architectural pavilion structure designed to buffer convention crowds into individual intimate portrait spaces.',
      category: 'installation',
      metadataNote: 'Modular architectural walls; integrated high-CRI continuous lighting',
      location: 'Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-bellwoods',
      filename: 'Bellwoods Studio-14',
      url: '/assets/ART_Images/Bellwoods Studio-14.jpg',
      dateStr: '2014',
      title: 'Bellwoods Studio — Prototyping Workshop & Shutter Bench',
      context: 'Early electronic shutter trigger prototypes and spatial model fabrication at Bellwoods Studio.',
      category: 'studio',
      metadataNote: 'Natural light loft interior; architectural model study and electronic testing',
      location: 'Bellwoods Studio, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-01',
      filename: 'studio_20140415_084017',
      url: '/assets/ART_Images/studio_20140415_084017.jpg',
      dateStr: '2014-04-15 08:40',
      title: 'Daylight Studio: C-Stands, Softboxes & Shutter Rig Testing',
      context: 'High-ceiling industrial daylight studio with photography lighting stands and cable runs.',
      category: 'studio',
      metadataNote: 'Morning natural light + strobe calibration; Matthews C-stands with grip arms',
      location: 'Daylight Studio, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-02',
      filename: 'studio_20140424_080653',
      url: '/assets/ART_Images/studio_20140424_080653.jpg',
      dateStr: '2014-04-24 08:06',
      title: 'Exposed Brick Loft Studio & Hardware Assembly Bench',
      context: 'Configuring automated digital capture and local distribution scripts on workstation.',
      category: 'studio',
      metadataNote: 'Loft brickwork; custom wooden desk with tethered camera monitor',
      location: 'Daylight Studio, Toronto',
      aspectRatio: 'portrait'
    },
    {
      id: 'tus-03',
      filename: 'studio_20140426_161915',
      url: '/assets/ART_Images/studio_20140426_161915.jpg',
      dateStr: '2014-04-26 16:19',
      title: 'White Seamless Stage & Overhead Lighting Grid',
      context: 'Full-scale pavilion walkthrough stage testing automated audience trigger timing.',
      category: 'studio',
      metadataNote: 'White seamless sweep; overhead boom lighting; safety cable traces',
      location: 'Daylight Studio, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-04',
      filename: 'studio_20141111_115123',
      url: '/assets/ART_Images/studio_20141111_115123.jpg',
      dateStr: '2014-11-11 11:51',
      title: 'Collaborative Crew around Monitored Shutter Pedestal',
      context: 'Team calibration of hacked DSLR optocoupler circuit for high-traffic convention floor.',
      category: 'process',
      metadataNote: 'On-set production monitor; tethered USB pipeline; micro-switch testing',
      location: 'Daylight Studio, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-05',
      filename: 'studio_20141118_112314',
      url: '/assets/ART_Images/studio_20141118_112314.jpg',
      dateStr: '2014-11-18 11:23',
      title: 'DSLR Shutter Actuation Bench & Custom Optocoupler Rig',
      context: 'Bench-testing disassembled DSLR camera body wired directly to capacitive switch pads.',
      category: 'apparatus',
      metadataNote: 'Micro-switch soldering; optocoupler relay board; high-speed solenoid actuator',
      location: 'Daylight Studio, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-06',
      filename: 'studio_20141218_084153',
      url: '/assets/ART_Images/studio_20141218_084153.jpg',
      dateStr: '2014-12-18 08:41',
      title: 'Motion & Still 3,200 sq.ft Daylight Studio Sanctuary',
      context: 'Panoramic view of the expansive daylight studio facility with continuous 60-foot industrial window bank.',
      category: 'studio',
      metadataNote: '3,200 sq.ft open studio floor; polished hardwood; southern daylight exposure',
      location: 'Motion & Still (90 Ontario), Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-07',
      filename: 'studio_20150206_221258',
      url: '/assets/ART_Images/studio_20150206_221258.jpg',
      dateStr: '2015-02-06 22:12',
      title: 'Motion & Still Studio Reception & Client Screening Area',
      context: 'Night view of the collaborative studio reception, branded entry, and fabrication staging.',
      category: 'studio',
      metadataNote: 'Motion & Still marquee identity; reception desk; projection screen',
      location: 'Motion & Still, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-08',
      filename: 'studio_20150317_194918',
      url: '/assets/ART_Images/studio_20150317_194918.jpg',
      dateStr: '2015-03-17 19:49',
      title: 'Night Calibration Rig: Video Monitors & Heavy Studio Tripod',
      context: 'Late evening system rehearsal for interactive automated distribution queue.',
      category: 'apparatus',
      metadataNote: 'Broadcast field monitor; heavy-duty Manfrotto studio tripod; dark studio perimeter',
      location: 'Motion & Still, Toronto',
      aspectRatio: 'landscape'
    }
  ],

  // PLATE 06: Deconstructing Capital (2019–2021)
  'deconstructing-capital': [
    {
      id: 'dc-01',
      filename: 'studio_20190527_201216',
      url: '/assets/ART_Images/studio_20190527_201216.jpg',
      dateStr: '2019-05-27 20:12',
      title: 'Neon Magenta Optical Flood Array & Glare Jamming Field Test',
      context: '52 St. Lawrence spatial intervention: high-lumen flood arrays aimed at retroreflective scrims to blind sensors.',
      category: 'apparatus',
      metadataNote: 'High-intensity neon magenta/pink wash; 8,000 lumen directed flood; optical feedback glare',
      location: '52 St. Lawrence, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'dc-02',
      filename: 'studio_20191101_201721',
      url: '/assets/ART_Images/studio_20191101_201721.jpg',
      dateStr: '2019-11-01 20:17',
      title: 'Optical Jamming Camera Rig & Specular Reflection Calibration',
      context: 'Tethered camera evaluating over-saturation thresholds on retroreflective micro-bead fabric.',
      category: 'apparatus',
      metadataNote: 'DSLR on tripod; diagnostic exposure metering; retroreflective flare point',
      location: '52 St. Lawrence, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'dc-concert',
      filename: 'concert_20200228_190337',
      url: '/assets/ART_Images/concert_20200228_190337.jpg',
      dateStr: '2020-02-28 19:03',
      title: 'High-Lux Stage & Flood Lighting Counter-Optics Research',
      context: 'Field inquiry into concert-grade lighting arrays and crowd blinding dynamics before lockdown.',
      category: 'process',
      metadataNote: 'Live concert stage illumination; directional strobe arrays; optical wash',
      location: 'Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'dc-03',
      filename: 'studio_20200511_194941',
      url: '/assets/ART_Images/studio_20200511_194941.jpg',
      dateStr: '2020-05-11 19:49',
      title: '52 St. Lawrence Sanctuary Space: Botanical & Natural Light Haven',
      context: 'Transforming 52 St. Lawrence into a sanctuary of living botanical specimens and optical scrims.',
      category: 'studio',
      metadataNote: 'Interior botanical sanctuary; diffused northern skylight; heritage wood beams',
      location: '52 St. Lawrence, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'dc-04',
      filename: 'studio_20200604_182458',
      url: '/assets/ART_Images/studio_20200604_182458.jpg',
      dateStr: '2020-06-04 18:24',
      title: 'Natural Light Diffusion & Spatial Privacy Sanctuary',
      context: 'Carving physical zones of unrecorded serenity within urban density.',
      category: 'studio',
      metadataNote: 'Archival daylight exposure; plant foliage layering; retroreflective panels concealed in scrims',
      location: '52 St. Lawrence, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'dc-05',
      filename: 'studio_20200715_194722',
      url: '/assets/ART_Images/studio_20200715_194722.jpg',
      dateStr: '2020-07-15 19:47',
      title: 'Spatial Intervention Gathering & Acoustic Damping Study',
      context: 'Evening community presence inside the sanctuary space during gradual reopening.',
      category: 'performance',
      metadataNote: 'Warm ambient incandescent lighting; low-lux relational gathering',
      location: '52 St. Lawrence, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'dc-sep03',
      filename: 'studio_20200903_151411',
      url: '/assets/ART_Images/studio_20200903_151411.jpg',
      dateStr: '2020-09-03 15:14',
      title: '52 St. Lawrence Afternoon Sunlight & Optical Calibration',
      context: 'Late summer sunlight angling through historic industrial glazing; calibrating light levels.',
      category: 'studio',
      metadataNote: 'High-contrast natural sunlight rake; lens flare testing on physical screens',
      location: '52 St. Lawrence, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'dc-sep15',
      filename: 'studio_20200915_133432',
      url: '/assets/ART_Images/studio_20200915_133432.jpg',
      dateStr: '2020-09-15 13:34',
      title: 'Studio Plant Sanctuary & Specular Reflection Screen',
      context: 'Organic botanical canopy interweaving with modular photography scrims.',
      category: 'studio',
      metadataNote: 'Diffused midday interior light; monstera and ficus canopy; light baffle panels',
      location: '52 St. Lawrence, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'dc-dec10',
      filename: 'studio_20211210_194033686',
      url: '/assets/ART_Images/studio_20211210_194033686.jpg',
      dateStr: '2021-12-10 19:40',
      title: 'Winter Evening Studio Session & Sensor Jamming Diagnostics',
      context: 'Night diagnostic run testing retroreflective scrim flares against computer vision edge-detection.',
      category: 'apparatus',
      metadataNote: 'Night session; directional strobe pulses; OpenCV edge detector feed',
      location: '52 St. Lawrence, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'dc-dec11',
      filename: 'studio_20211211_092138_258',
      url: '/assets/ART_Images/studio_20211211_092138_258.jpg',
      dateStr: '2021-12-11 09:21',
      title: 'Dual Monitor Workstation & Optical Diagnostic Suite',
      context: 'Studio workstation at 52 St. Lawrence with image sensor analysis and video editing.',
      category: 'studio',
      metadataNote: 'Dual 27-inch color-calibrated displays; exposed brick; camera rig on tripod',
      location: '52 St. Lawrence, Toronto',
      aspectRatio: 'landscape'
    }
  ],

  // PLATE 07: Collective Infrastructure & Mutual Aid (2011–2024)
  'collective-infrastructure': [
    {
      id: 'ci-akin',
      filename: 'akin',
      url: '/assets/ART_Images/akin.jpg',
      dateStr: '2012',
      title: 'Akin Collective (Dir. Oliver Pauk) — Shared Fabrication Floor',
      context: 'Akin Collective shared workspace: where artists pooled resources, tools, and build space for #LOVELOCAL.',
      category: 'collective',
      metadataNote: 'Akin Collective 2011–2015; shared industrial wood/metal shop and installation staging',
      location: 'Akin Collective, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-lovelocal',
      filename: 'LOVELOCAL with Akin Collective',
      url: '/assets/ART_Images/LOVELOCAL with Akin Collective.jpg',
      dateStr: '2012',
      title: 'LOVELOCAL with Akin Collective — Mutual Aid Arts Showcase',
      context: 'Grassroots community art showcase celebrating local fabrication, artist cooperatives, and maker culture.',
      category: 'collective',
      metadataNote: 'Cooperative exhibition; Akin artist network display',
      location: 'Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-ms1',
      filename: 'motionandstill',
      url: '/assets/ART_Images/motionandstill.jpg',
      dateStr: '2015',
      title: 'Motion & Still Creative Collective & Studio Family',
      context: 'The collaborative group of photographers, cinematographers, and set designers who called the sanctuary home.',
      category: 'collective',
      metadataNote: 'Studio portrait; collaborative practice; creative solidarity economy',
      location: 'Motion & Still, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-ms2',
      filename: 'motionandstill2',
      url: '/assets/ART_Images/motionandstill2.jpg',
      dateStr: '2015',
      title: 'Gwen Lim at Community Cultural Showcase',
      context: 'Gwen Lim representing the studio sanctuary at local Toronto grassroots arts and maker events.',
      category: 'collective',
      metadataNote: 'Community field documentation; artist engagement',
      location: 'Toronto',
      aspectRatio: 'portrait'
    },
    {
      id: 'ci-ms-2023',
      filename: 'motionandstill_20230424_224412218',
      url: '/assets/ART_Images/motionandstill_20230424_224412218.jpg',
      dateStr: '2023-04-24 22:44',
      title: 'Motion & Still Late-Night Fabrication & Project Handoff',
      context: 'Late night collaborative working session passing equipment and visual assets between studio members.',
      category: 'collective',
      metadataNote: 'Late night workshop; collaborative production; community continuity',
      location: 'Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-fts-agm',
      filename: 'Flcik the Switch Artist Collective AGM',
      url: '/assets/ART_Images/Flcik the Switch Artist Collective AGM.jpg',
      dateStr: '2019',
      title: 'Flick the Switch Artists’ Collective — Annual General Meeting',
      context: 'Flick the Switch Artists’ Collective AGM at 34 Stephanie St: democratically organizing shared equipment and programming.',
      category: 'collective',
      metadataNote: '34 Stephanie St; artist-run governance, non-profit collective organizing',
      location: '34 Stephanie St, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-fts-cov',
      filename: 'Flick the Switch -Event Coverage',
      url: '/assets/ART_Images/Flick the Switch -Event Coverage.jpg',
      dateStr: '2019',
      title: 'Flick the Switch Event Coverage & Media Exhibition',
      context: 'Documenting community member showcases and independent screening series at 34 Stephanie St.',
      category: 'collective',
      metadataNote: 'Community media coverage; multi-artist installation showcase',
      location: '34 Stephanie St, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-fts-ev',
      filename: 'Flick the Switch event',
      url: '/assets/ART_Images/Flick the Switch event.jpg',
      dateStr: '2019',
      title: 'Flick the Switch Community Gathering & Open Critique',
      context: 'Independent artists assembling for workshops, skill sharing, and cooperative feedback.',
      category: 'collective',
      metadataNote: 'Open studio format; projector display; community circle',
      location: '34 Stephanie St, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-01',
      filename: 'studio_20160510_194231',
      url: '/assets/ART_Images/studio_20160510_194231.jpg',
      dateStr: '2016-05-10 19:42',
      title: 'Community Screening & Artist Critique Evening in Sanctuary',
      context: 'Opening the studio doors to indie filmmakers and installation artists for open critiques.',
      category: 'collective',
      metadataNote: 'Studio screening projection; audience seating; open community dialogue',
      location: '90 Ontario St, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-02',
      filename: 'studio_20160527_090248',
      url: '/assets/ART_Images/studio_20160527_090248.jpg',
      dateStr: '2016-05-27 09:02',
      title: 'Shared Studio Production Bay & Lighting Rig Exchange',
      context: 'Emerging artists sharing gear, lighting grids, and camera dollies in the collaborative studio.',
      category: 'studio',
      metadataNote: 'Teal set backdrop; C-stands; grip heads; mutual equipment pool',
      location: 'Daylight Studio Sanctuary, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-03',
      filename: 'studio_20160909_120617',
      url: '/assets/ART_Images/studio_20160909_120617.jpg',
      dateStr: '2016-09-09 12:06',
      title: 'Independent Video Production Shoot with Resident Creators',
      context: 'Directing and supporting independent artists who could not afford commercial studio rates.',
      category: 'process',
      metadataNote: 'Cinema camera rig on tripod; softbox key light; live actor direction',
      location: 'Daylight Studio Sanctuary, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-04',
      filename: 'studio_20170123_140846',
      url: '/assets/ART_Images/studio_20170123_140846.jpg',
      dateStr: '2017-01-23 14:08',
      title: 'Studio Production Monitor Bay & Video Assist Station',
      context: 'Shared video monitoring and signal processing gear available to all collective members.',
      category: 'apparatus',
      metadataNote: 'Field monitor with waveform vectorscope; SDI cable runs; camera bay',
      location: 'Daylight Studio Sanctuary, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-05',
      filename: 'studio_20170315_184906',
      url: '/assets/ART_Images/studio_20170315_184906.jpg',
      dateStr: '2017-03-15 18:49',
      title: 'Warm Evening Gathering in Brick Studio Sanctuary',
      context: 'Intimate community dinner and discussion on artist workspace precariousness in Toronto.',
      category: 'collective',
      metadataNote: 'Warm ambient incandescent lights; heritage brick arches; communal table',
      location: 'Daylight Studio Sanctuary, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-06',
      filename: 'studio_20170422_101208',
      url: '/assets/ART_Images/studio_20170422_101208.jpg',
      dateStr: '2017-04-22 10:12',
      title: 'Gwen Lim in Daylight Studio Sanctuary',
      context: 'Portrait of Gwen Lim at work managing the daylight studio and testing optical softbox arrays.',
      category: 'studio',
      metadataNote: 'Natural light + giant octabox; studio workspace',
      location: 'Daylight Studio Sanctuary, Toronto',
      aspectRatio: 'portrait'
    },
    {
      id: 'ci-07',
      filename: 'studio_20170424_190813',
      url: '/assets/ART_Images/studio_20170424_190813.jpg',
      dateStr: '2017-04-24 19:08',
      title: 'Lighting Workshop & Technical Mentorship Shoot',
      context: 'Mentoring young emerging artists on studio lighting, optics, and camera electronics.',
      category: 'process',
      metadataNote: 'Silver reflectors; grid diffusers; collaborative workshop participants',
      location: 'Daylight Studio Sanctuary, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-08',
      filename: 'studio_20170625_094549',
      url: '/assets/ART_Images/studio_20170625_094549.jpg',
      dateStr: '2017-06-25 09:45',
      title: 'Shared Equipment Suite: Pelican Cases, Heavy Mounts & Cables',
      context: 'The communal gear locker maintained for checkout by community artists and activists.',
      category: 'apparatus',
      metadataNote: 'Pelican flight cases; Matthews grip hardware; XLR & BNC cable bins',
      location: 'Daylight Studio Sanctuary, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-09',
      filename: 'studio_20180201_171133',
      url: '/assets/ART_Images/studio_20180201_171133.jpg',
      dateStr: '2018-02-01 17:11',
      title: 'Digital Post-Production Workstation & Color Suite',
      context: 'Color grading and computational rendering suite available for collective projects.',
      category: 'studio',
      metadataNote: 'Dual monitor editing bay; color-calibrated display; rackmount audio hardware',
      location: 'Daylight Studio Sanctuary, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-10',
      filename: 'studio_20180510_013403_542',
      url: '/assets/ART_Images/studio_20180510_013403_542.jpg',
      dateStr: '2018-05-10 01:34',
      title: 'Sanctuary Lounge: Plants, Rugs, Warmth & Mental Respite',
      context: 'The sanctuary was consciously maintained as a psychological haven against urban creative burnout.',
      category: 'studio',
      metadataNote: 'Vintage rugs, botanical ferns, exposed timber beams, warm 2700K lighting',
      location: 'Daylight Studio Sanctuary, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-11',
      filename: 'studio_20180821_150700',
      url: '/assets/ART_Images/studio_20180821_150700.jpg',
      dateStr: '2018-08-21 15:07',
      title: 'Studio Shoot with Overhead Boom Arm & Video Monitor',
      context: 'Collaborative film production utilizing the studio’s overhead rigging capabilities.',
      category: 'process',
      metadataNote: 'Heavy boom stand; video feed; production assistants collaborating on set',
      location: 'Daylight Studio Sanctuary, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-12',
      filename: 'studio_20190221_082259',
      url: '/assets/ART_Images/studio_20190221_082259.jpg',
      dateStr: '2019-02-21 08:22',
      title: 'Platform Set & Full-Length Specular Mirror Assembly',
      context: 'Constructing optical reflection surfaces for site-specific performance experiments.',
      category: 'apparatus',
      metadataNote: 'Elevated wooden stage; full-length mirror plane; softbox lighting',
      location: 'Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-13',
      filename: 'studio_20190309_123653',
      url: '/assets/ART_Images/studio_20190309_123653.jpg',
      dateStr: '2019-03-09 12:36',
      title: 'Flick the Switch Collective at 34 Stephanie St (Concrete & Brick Loft)',
      context: 'Flick the Switch Artists’ Collective (co-founded with Susan Stewart): media arts workshop suite.',
      category: 'collective',
      metadataNote: '34 Stephanie St; heritage industrial concrete columns; high ceiling workshop',
      location: '34 Stephanie St, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-14',
      filename: 'studio_20190309_123804',
      url: '/assets/ART_Images/studio_20190309_123804.jpg',
      dateStr: '2019-03-09 12:38',
      title: '34 Stephanie St Workshop Floor & Artist Co-Working Space',
      context: 'Shared desks, shared printers, and media editing suites for collective members.',
      category: 'collective',
      metadataNote: 'Open layout workspace; natural northern light; collaborative table stations',
      location: '34 Stephanie St, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-15',
      filename: 'studio_20220304_192302236',
      url: '/assets/ART_Images/studio_20220304_192302236.jpg',
      dateStr: '2022-03-04 19:23',
      title: 'Studio Workspace Expansion & Fabrication Staging',
      context: 'Staging areas and heavy workbenches for multi-media electronic prototyping.',
      category: 'studio',
      metadataNote: 'Industrial lighting; modular worktables; electronic test gear',
      location: 'Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-16',
      filename: 'studio_20220328_235342589',
      url: '/assets/ART_Images/studio_20220328_235342589.jpg',
      dateStr: '2022-03-28 23:53',
      title: 'Night Studio Setup & Collaborative Experimentation',
      context: 'Late night studio residency testing interactive projection mappings and optical sensors.',
      category: 'studio',
      metadataNote: 'Low-lux environment; ambient projection light; sensor test bench',
      location: 'Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-17',
      filename: 'studio_20221028_004314601',
      url: '/assets/ART_Images/studio_20221028_004314601.jpg',
      dateStr: '2022-10-28 00:43',
      title: 'Autonomous Studio Sanctuary Operations & Hardware Rig',
      context: 'The studio operating as a self-sustaining lab for electronic and photographic exploration.',
      category: 'apparatus',
      metadataNote: 'Tethered capture rig; hardware rack; ambient workshop lighting',
      location: 'Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-18',
      filename: 'studio_2024',
      url: '/assets/ART_Images/studio_2024.jpg',
      dateStr: '2024',
      title: 'Studio Sanctuary Continuum (Arched Heritage Brick Windows & Plants)',
      context: 'The current 2024 studio workspace: blending computational research hardware with living organic sanctuary.',
      category: 'studio',
      metadataNote: 'Arched brick window frames; soaring timber beams; thriving botanical environment',
      location: 'Toronto',
      aspectRatio: 'landscape'
    }
  ],

  // PLATE 08: The Riemann Manifold: Quantum Chaos & Spectral Topology (2026)
  'riemann-manifold': [
    {
      id: 'rm-01',
      filename: 'studio_2024',
      url: '/assets/ART_Images/studio_2024.jpg',
      dateStr: '2024–2026',
      title: 'Eve Count Lab: Botanical Sanctuary & Computational Topology Rig',
      context: 'The independent studio where spectral operator models, quantum chaos simulation, and topology algorithms are developed.',
      category: 'studio',
      metadataNote: 'Soaring arched windows; workstation cluster running spectral operator simulations',
      location: 'Toronto / Singapore',
      aspectRatio: 'landscape'
    },
    {
      id: 'rm-02',
      filename: 'studio_20221028_004314601',
      url: '/assets/ART_Images/studio_20221028_004314601.jpg',
      dateStr: '2022–2026',
      title: 'Hardware Sensor Array & High-Frequency Transducer Bench',
      context: 'Bench-testing physical transducers and optical interference patterns coupled to Riemann zeta zero distributions.',
      category: 'apparatus',
      metadataNote: 'Optical bench; sensor calibration; high-dimensional matrix operators',
      location: 'Eve Count Lab',
      aspectRatio: 'landscape'
    }
  ]
};

export function getArchivalPhotosForArtwork(artworkId: string): ArchivalStudioPhoto[] {
  return ARCHIVAL_COLLECTIONS[artworkId] || [];
}
