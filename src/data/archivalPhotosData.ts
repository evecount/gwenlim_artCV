import { ArchivalStudioPhoto } from '../types/portfolio';
import { resolveAsset } from '../utils/resolveAsset';

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
      url: '/assets/ART_Images/white_geisha.webp',
      dateStr: '2010',
      title: 'White Geisha — Studio Portraiture & Origami Hair Architecture',
      context: 'Noise Singapore Festival Exhibition, curated by National Arts Council Singapore. Archival pigment series.',
      category: 'installation',
      metadataNote: 'Digital studio capture; Nikon D1X, 50mm lens; studio strobe illumination',
      location: 'Singapore',
      aspectRatio: 'portrait'
    },
    {
      id: 'wg-02',
      filename: 'silver-aurelia',
      url: '/assets/ART_Images/silver-aurelia_2011_ideas-portrait.webp',
      dateStr: '2011',
      title: 'Silver Aurelia — Atmosphere, Smoke Diffuser & Persona Study',
      context: 'Shown alongside White Geisha in the IDEAS showcase. Exploration of human vulnerability under institutional observation and persona construction.',
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
      filename: 'in-a-perfect-world_2010_self-portrait',
      url: '/assets/ART_Images/in-a-perfect-world_2010_self-portrait.webp',
      dateStr: '2010-04',
      title: 'In a Perfect World — Self-Portrait, the First Participant',
      context: 'Self-portrait made as the first guinea pig of the series, testing the participatory prompt on herself before opening it to market residents and vendors. The full series of street portraits and recordings is lost to time — this is its only surviving frame.',
      category: 'process',
      metadataNote: 'Digital street capture; Nikon D1X; ambient natural street light',
      location: 'Kensington Market, Toronto',
      aspectRatio: 'portrait'
    }
  ],

  // PLATE 03: Two-Man Rule [TMR] (2012)
  'two-man-rule': [
    {
      id: 'tmr-banner',
      filename: 'two-man-rule_banner-linkedin',
      url: '/assets/ART_Images/two-man-rule_banner-linkedin.webp',
      dateStr: '2012',
      title: 'TWO MAN RULE — Protocol Banner Graphic',
      context: 'Wide banner-format graphic of the exhibition protocol, made as a LinkedIn-style header banner for the project. Shown on the live site only — omitted from the downloadable portfolio.',
      category: 'apparatus',
      metadataNote: 'Exhibition graphics panel, banner format; Sony Centre for the Performing Arts / TEDxToronto',
      location: 'The Sony Centre, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tmr-button',
      filename: 'two-man-rule_2012_button-hardware-mns-logo',
      url: '/assets/ART_Images/two-man-rule_2012_button-hardware-mns-logo.webp',
      dateStr: '2012',
      title: 'Two Man Rule Button Hardware & Dual Relay Trigger',
      context: 'Machined brass dual-contact button mechanism requiring concurrent physical activation to complete circuit. The frame also catches the original Motion and Still logo from 2010 — the earliest surviving trace of the studio brand.',
      category: 'apparatus',
      metadataNote: 'Industrial heavy-duty palm button; isolated low-voltage DC trigger relay; safety interlocking',
      location: 'Toronto',
      aspectRatio: 'square'
    },
    {
      id: 'tmr-01',
      filename: 'tedxtoronto_2012_tape-first-layer',
      url: '/assets/ART_Images/tedxtoronto_2012_tape-first-layer.webp',
      dateStr: '2012',
      title: 'Two-Man Rule Dome — First Tape Layer',
      context: 'The exhibit in its first layer, before undergoing 300 rolls of clear tape to form a giant transparent ball.',
      category: 'installation',
      metadataNote: 'Early construction stage; first structural tape layer over geodesic frame; Akin Collective workshop build',
      location: 'Akin Collective, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tmr-03',
      filename: 'akin3',
      url: '/assets/ART_Images/tedxtoronto_behind-the-scenes.webp',
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
      filename: 'tedxtoronto_2012_final-exhibit-opening-night',
      url: '/assets/ART_Images/tedxtoronto_2012_final-exhibit-opening-night.webp',
      dateStr: '2012',
      title: 'The Final Exhibit in Real Life — TEDxToronto Opening Night',
      context: 'The completed Two-Man Rule tape dome as visitors encountered it in real life on TEDxToronto opening night at the Sony Centre.',
      category: 'installation',
      metadataNote: 'Completed 300-roll transparent tape monocoque; event lighting; opening-night installation view',
      location: 'TEDxToronto, The Sony Centre for the Performing Arts, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tmr-05',
      filename: 'akin5',
      url: '/assets/ART_Images/tedxtoronto_closeup.webp',
      dateStr: '2012',
      title: '[TMR] TWO-MAN RULE — Curatorial Poster & Exhibition Banner',
      context: 'Official project documentation badge and exhibition protocol banner detailing the two-operator consensus.',
      category: 'apparatus',
      metadataNote: 'Silkscreen typographic panel on archival substrate; two-manrule.com provenance',
      location: 'TEDxToronto, The Sony Centre',
      aspectRatio: 'landscape'
    }
  ],

  // PLATE 04: Broadcast People (2012)
  'broadcast-people': [
    {
      id: 'bp-01',
      filename: 'fat-2012_participants-01',
      url: '/assets/ART_Images/fat-2012_participants-01.webp',
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
      filename: 'fat-2012_participants-02',
      url: '/assets/ART_Images/fat-2012_participants-02.webp',
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
      filename: 'fat-2012_participants-03',
      url: '/assets/ART_Images/fat-2012_participants-03.webp',
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
      filename: 'fat-2012_participants-04',
      url: '/assets/ART_Images/fat-2012_participants-04.webp',
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
      filename: 'fat-2012_participants-05',
      url: '/assets/ART_Images/fat-2012_participants-05.webp',
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
      filename: 'fat-2012_participants-06',
      url: '/assets/ART_Images/fat-2012_participants-06.webp',
      dateStr: '2012-04',
      title: 'Observer Inversion: Audience Member Photographing CCTV Feed',
      context: 'The classic feedback inversion: participant raises a digital camera to photograph the apparatus recording her.',
      category: 'performance',
      metadataNote: 'Mutual capture moment; camera-to-screen recursion loop',
      location: '|FAT| Toronto',
      aspectRatio: 'portrait'
    },
    {
      id: 'bp-overview',
      filename: 'fat-2012_timelapse-index',
      url: '/assets/ART_Images/fat-2012_timelapse-index.webp',
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
      filename: 'fat-2012_booth-display',
      url: '/assets/ART_Images/fat-2012_booth-display.webp',
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
      filename: 'fat-2012_gwen-portrait-at-booth',
      url: '/assets/ART_Images/fat-2012_gwen-portrait-at-booth.webp',
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
      filename: 'motion-and-still_2013_todo-afterparty-poster',
      url: '/assets/ART_Images/motion-and-still_2013_todo-afterparty-poster.webp',
      dateStr: '2014',
      title: 'TODO Afterparty — Eight-Foot Interactive Photo Booth Poster',
      context: 'The only surviving photograph of the giant eight-foot poster printed for the Motion and Still interactive photo booth at the 2013 TODO afterparty.',
      category: 'installation',
      metadataNote: 'Studio strobe synchronization; automated Python ingest and web queue distribution',
      location: 'Metro Toronto Convention Centre / IIDEX',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-iidex-swing',
      filename: '03Dec2014_IIDEX Booth in full swing',
      url: '/assets/ART_Images/iidex-booth_2014_full-swing.webp',
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
      url: '/assets/ART_Images/IIDEX Toronto event.webp',
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
      url: '/assets/ART_Images/bellwoods-studio_2018.webp',
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
      url: '/assets/ART_Images/studio_20140415_084017.webp',
      dateStr: '2014-04-15 08:40',
      title: '192 Spadina Avenue Studio',
      context: 'Alternate view of Motion and Still’s multi-unit operational hub at the Centre for Social Innovation.',
      category: 'studio',
      metadataNote: 'Morning natural light + strobe calibration; Matthews C-stands with grip arms',
      location: '192 Spadina Avenue, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-02',
      filename: 'studio_20140424_080653',
      url: '/assets/ART_Images/studio_20140424_080653.webp',
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
      url: '/assets/ART_Images/studio_20140426_161915.webp',
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
      url: '/assets/ART_Images/studio_20141111_115123.webp',
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
      url: '/assets/ART_Images/studio_20141118_112314.webp',
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
      url: '/assets/ART_Images/studio_20141218_084153.webp',
      dateStr: '2014-12-18 08:41',
      title: 'Motion & Still 3,200 sq.ft Daylight Studio Sanctuary',
      context: 'Panoramic view of the expansive daylight studio facility with continuous 60-foot industrial window bank.',
      category: 'studio',
      metadataNote: 'Open loft studio floor; polished hardwood; southern daylight exposure',
      location: 'Motion & Still (90 Ontario), Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-07',
      filename: 'studio_20150206_221258',
      url: '/assets/ART_Images/studio_20150206_221258.webp',
      dateStr: '2015-02-06 22:12',
      title: '192 Spadina Avenue Studio Hub',
      context: 'Motion and Still studio at the Centre for Social Innovation, part of its 2013–2015 multi-suite hub.',
      category: 'studio',
      metadataNote: 'Motion & Still marquee identity; reception desk; projection screen',
      location: '192 Spadina Avenue, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'tus-08',
      filename: 'studio_20150317_194918',
      url: '/assets/ART_Images/studio_20150317_194918.webp',
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
      url: '/assets/ART_Images/studio_20190527_201216.webp',
      dateStr: '2019-05-27 20:12',
      title: 'Music Video Production at Midcentury Loft',
      context: 'Midcentury Loft configured as a saturated practical-light set for a music-video production.',
      category: 'process',
      metadataNote: 'Commercial music-video set; magenta practical lighting and camera staging',
      location: 'Midcentury Loft, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'dc-02',
      filename: 'studio_20191101_201721',
      url: '/assets/ART_Images/studio_20191101_201721.webp',
      dateStr: '2019-11-01 20:17',
      title: 'Sofar Sounds Sound Check at Midcentury Loft',
      context: 'Musicians and production crew preparing the Midcentury Loft for a Sofar Sounds performance.',
      category: 'performance',
      metadataNote: 'Sound check; camera monitoring and live-performance preparation',
      location: 'Midcentury Loft, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'dc-concert',
      filename: 'concert_20200228_190337',
      url: '/assets/ART_Images/sofar-sounds_2019_musicians-preparing.webp',
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
      url: '/assets/ART_Images/studio_20200511_194941.webp',
      dateStr: '2020-05-11 19:49',
      title: 'Midcentury Loft Studio',
      context: 'Plant-filled Midcentury Loft configured as a live/work production studio.',
      category: 'studio',
      metadataNote: 'Interior botanical sanctuary; diffused northern skylight; heritage wood beams',
      location: 'Midcentury Loft, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'dc-04',
      filename: 'studio_20200604_182458',
      url: '/assets/ART_Images/studio_20200604_182458.webp',
      dateStr: '2020-06-04 18:24',
      title: 'Green & Gold Studio',
      context: 'The Green & Gold Studio at 52 St Lawrence, combining a working production floor with a plant-filled live/work environment.',
      category: 'studio',
      metadataNote: 'Archival daylight exposure; plant foliage layering; retroreflective panels concealed in scrims',
      location: '52 St. Lawrence, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'dc-05',
      filename: 'studio_20200715_194722',
      url: '/assets/ART_Images/studio_20200715_194722.webp',
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
      url: '/assets/ART_Images/studio_20200903_151411.webp',
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
      url: '/assets/ART_Images/studio_20200915_133432.webp',
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
      url: '/assets/ART_Images/studio_20211210_194033686.webp',
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
      url: '/assets/ART_Images/studio_20211211_092138_258.webp',
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
      filename: 'tedxtoronto_2012_tape-first-layer',
      url: '/assets/ART_Images/tedxtoronto_2012_tape-first-layer.webp',
      dateStr: '2012',
      title: 'Akin Collective (Dir. Oliver Pauk) — Shared Fabrication Floor',
      context: 'Akin Collective shared workspace, shown with the Two-Man Rule dome in its first tape layer — where artists pooled resources, tools, and build space.',
      category: 'collective',
      metadataNote: 'Akin Collective 2011–2015; shared industrial wood/metal shop and installation staging',
      location: 'Akin Collective, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-lovelocal',
      filename: 'lovelocal_2013_akin-partnership-poster',
      url: '/assets/ART_Images/lovelocal_2013_akin-partnership-poster.webp',
      dateStr: '2013',
      title: '#LOVELOCAL — Community Party Poster with Akin Collective',
      context: 'Poster for the #LOVELOCAL community party that Lim and Akin Collective co-organized — a celebration of local fabrication and maker culture. Part of her involvement in the Toronto grassroots art scene during her Akin tenure, in parallel with (but separate from) Two-Man Rule.',
      category: 'collective',
      metadataNote: 'Partnership event poster; community showcase co-organized with Akin Collective',
      location: 'Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-ms1',
      filename: 'motion-and-still',
      url: '/assets/ART_Images/motion-and-still_2015_crew-team.webp',
      dateStr: '2015',
      title: 'Motion and Still — Creative Director Era with Crew & Team',
      context: 'Motion and Still at its peak as Lim’s creative-director-led practice: the crew and team members of the studio family.',
      category: 'collective',
      metadataNote: 'Studio portrait; creative director era; crew and team',
      location: 'Motion & Still, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-ms-2023',
      filename: 'motion-and-still',
      url: '/assets/ART_Images/motion-and-still_2019_gear-raptors-portraits.webp',
      dateStr: '2019',
      title: 'Motion & Still Production Gear — Toronto Raptors Portrait Sessions',
      context: 'The gear used to shoot at Motion and Still and for portrait work with the Toronto Raptors in 2019, at the green-and-gold studio at 52 St Lawrence.',
      category: 'collective',
      metadataNote: 'Studio production equipment; commercial portraiture; Toronto Raptors sessions',
      location: '52 St Lawrence, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-ms-logo',
      filename: 'motion-and-still_2021_logo',
      url: '/assets/ART_Images/motion-and-still_2021_logo.webp',
      dateStr: '2021',
      title: 'Motion and Still — Wordmark, 2021',
      context: 'The studio’s most recent wordmark (2021): MOTION AND STILL lettering inside a broken square frame, white on black. Its earliest ancestor — the original 2010 logo — survives in the Two-Man Rule button-hardware photograph.',
      category: 'collective',
      metadataNote: 'Studio brand identity; white on black',
      location: 'Motion & Still, Toronto',
      aspectRatio: 'square'
    },
    {
      id: 'ci-ms-todo',
      filename: 'motion-and-still_2013_todo-afterparty-poster',
      url: '/assets/ART_Images/motion-and-still_2013_todo-afterparty-poster.webp',
      dateStr: '2013',
      title: 'TODO Afterparty — Interactive Photo Booth Poster',
      context: 'The only surviving shot of the giant 8ft poster printed for the Motion and Still interactive photo booth at the TODO afterparty, Toronto 2013 — “Invent. Design. Create. Innovate. Think. Experiment. Play.” — shown beside the hand-drawn booth schematics from the design notebook.',
      category: 'collective',
      metadataNote: '8ft poster print for interactive photo booth; booth design notebook schematics',
      location: 'TODO Festival afterparty, Toronto',
      aspectRatio: 'portrait'
    },
    {
      id: 'ci-fts-agm',
      filename: 'flick-the-switch_2019_agm-artist',
      url: '/assets/ART_Images/flick-the-switch_2019_agm-artist.webp',
      dateStr: '2019',
      title: 'Flick the Switch Artists’ Collective — Annual General Meeting',
      context: 'Lim at the collective’s AGM at 34 Stephanie St: democratically organizing shared equipment and programming.',
      category: 'collective',
      metadataNote: '34 Stephanie St; artist-run governance, non-profit collective organizing',
      location: '34 Stephanie St, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-fts-ev',
      filename: 'flick-the-switch_2019_blitz-exterior',
      url: '/assets/ART_Images/flick-the-switch_2019_blitz-exterior.webp',
      dateStr: '2019',
      title: 'Flick the Switch Interactive Art Event at Blitz Art Gallery',
      context: 'Exterior of Blitz Art Gallery during the interactive art event Lim volunteered at with Flick the Switch — group painting, a live painting auction and art-supply gifts, with proceeds donated to SickKids Hospital.',
      category: 'collective',
      metadataNote: 'Volunteer event documentation; charity fundraiser for SickKids',
      location: 'Blitz Art Gallery, 101 Richmond St E, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-01',
      filename: 'studio_20160510_194231',
      url: '/assets/ART_Images/studio_20160510_194231.webp',
      dateStr: '2016-05-10 19:42',
      title: 'Startup Grind Video Production',
      context: 'Motion and Still producing video for Toronto’s startup-incubator community and early-stage technology scene.',
      category: 'process',
      metadataNote: 'Startup Grind interview/video shoot; production camera and branded event setting',
      location: 'Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-02',
      filename: 'studio_20160527_090248',
      url: '/assets/ART_Images/studio_20160527_090248.webp',
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
      url: '/assets/ART_Images/studio_20160909_120617.webp',
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
      url: '/assets/ART_Images/studio_20170123_140846.webp',
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
      url: '/assets/ART_Images/studio_20170315_184906.webp',
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
      url: '/assets/ART_Images/studio_20170422_101208.webp',
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
      url: '/assets/ART_Images/studio_20170424_190813.webp',
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
      url: '/assets/ART_Images/studio_20170625_094549.webp',
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
      url: '/assets/ART_Images/studio_20180201_171133.webp',
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
      url: '/assets/ART_Images/studio_20180510_013403_542.webp',
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
      url: '/assets/ART_Images/studio_20180821_150700.webp',
      dateStr: '2018-08-21 15:07',
      title: 'On Set for Kerry’s Place Autism Services',
      context: 'Gwendalynn Lim working on set for Kerry’s Place Autism Services.',
      category: 'process',
      metadataNote: 'Heavy boom stand; video feed; production assistants collaborating on set',
      location: 'Daylight Studio Sanctuary, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-12',
      filename: 'studio_20190221_082259',
      url: '/assets/ART_Images/studio_20190221_082259.webp',
      dateStr: '2019-02-21 08:22',
      title: 'Midcentury Loft Film-Set Strike Day',
      context: 'Film sets being dismantled and cleared after production at Midcentury Loft.',
      category: 'process',
      metadataNote: 'Set strike; production equipment and furniture awaiting removal',
      location: 'Midcentury Loft, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-13',
      filename: 'studio_20190309_123653',
      url: '/assets/ART_Images/studio_20190309_123653.webp',
      dateStr: '2019-03-09 12:36',
      title: 'Bellwoods Studio Shooting Area II',
      context: 'Second view of the Bellwoods Studio shooting area and adaptable production floor.',
      category: 'studio',
      metadataNote: 'White cyc area, overhead fixtures and modular studio furnishings',
      location: 'Bellwoods Studio, Tecumseth Street, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-14',
      filename: 'studio_20190309_123804',
      url: '/assets/ART_Images/studio_20190309_123804.webp',
      dateStr: '2019-03-09 12:38',
      title: 'Bellwoods Studio Shooting Area I',
      context: 'Primary view of the Bellwoods Studio shooting area with lighting and grip equipment in place.',
      category: 'studio',
      metadataNote: 'Production floor, softbox, grip stands and working table',
      location: 'Bellwoods Studio, Tecumseth Street, Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-15',
      filename: 'toronto-raptors_2022_studio',
      url: '/assets/ART_Images/toronto-raptors_2022_studio.webp',
      dateStr: '2022-03-04 19:23',
      title: 'Toronto Raptors Production Shoot',
      context: 'Motion and Still production set for portrait work with the Toronto Raptors.',
      category: 'process',
      metadataNote: 'Interview/portrait lighting, camera position and seated talent area',
      location: 'Toronto',
      aspectRatio: 'landscape'
    },
    {
      id: 'ci-16',
      filename: 'studio_20220328_235342589',
      url: '/assets/ART_Images/studio_20220328_235342589.webp',
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
      url: '/assets/ART_Images/studio_20221028_004314601.webp',
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
      url: '/assets/ART_Images/studio_2024.webp',
      dateStr: '2024',
      title: 'Midcentury Loft Studio',
      context: 'Wide view of the plant-filled Midcentury Loft production and live/work studio.',
      category: 'studio',
      metadataNote: 'Arched brick window frames; soaring timber beams; thriving botanical environment',
      location: 'Midcentury Loft, Toronto',
      aspectRatio: 'landscape'
    }
  ],

  // PLATE 08: The Riemann Manifold: Quantum Chaos & Spectral Topology (2026)
  'riemann-manifold': [
    {
      id: 'rm-02',
      filename: 'studio_20221028_004314601',
      url: '/assets/ART_Images/studio_20221028_004314601.webp',
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
  const list = ARCHIVAL_COLLECTIONS[artworkId] || [];
  return list.map(photo => ({
    ...photo,
    url: resolveAsset(photo.url)
  }));
}
