// Text of the submission documents (SAM Statement of Interest + Artist CV).

export const STATEMENT_META = {
  applicationId: "9517668522",
  programme: "SAM Residencies Cycle 4 (2027/2028)",
  track: "Artist Residency (Singapore-based, 6 Months)",
  strand: "Beyond Human / Interdependence",
  intersections: "Listening/Attuning · Making/Material Cultures",
  projectTitle: "The Riemann Manifold",
  projectSubtitle: "Physical Computing, Machine Symbiosis, and the Harmonics of Prime Numbers",
  wordCount: "504 words (excluding titles and headings)",
};

export type StatementBlock = { type: "p"; text: string } | { type: "ol" | "ul"; items: { lead?: string; text: string }[] };

export const STATEMENT_SECTIONS: { n: string; title: string; blocks: StatementBlock[] }[] = [
  {
    n: "I",
    title: "The Core Inquiry: Non-Human Order in Mathematics",
    blocks: [
      { type: "p", text: "At the foundation of number theory lies the Riemann Hypothesis, formulated by Bernhard Riemann in 1859. It centers on the non-trivial zeros of the Riemann zeta function, all hypothesized to lie strictly along a single vertical coordinate known as the critical line, where the real part of s equals one-half (Re(s) = 1/2). For over a century, mathematicians have recognized that these coordinates govern the exact distribution of prime numbers." },
      { type: "p", text: "Later, quantum physicists realized something striking: the statistical spacing between these zeros matches the energy levels of heavy atomic nuclei under quantum chaos (the Hilbert-Pólya conjecture and Gaussian Unitary Ensemble statistics). This reveals an undeniable truth: primes are not an arbitrary human invention. They represent an autonomous, non-human structural reality—a foundational frequency of nature that exists independently of human thought." },
      { type: "p", text: "In The Riemann Manifold, I propose to treat this mathematical behavior not as a dry calculation, but as an autonomous landscape. By using computational modeling, I explore how mathematics acts as a non-human ecological system—one that human beings can observe and attune to, but cannot alter." },
    ],
  },
  {
    n: "II",
    title: "Human and Machine Interdependence: AI as a Cognitive Partner",
    blocks: [
      { type: "p", text: "Discussions around the \u201CBeyond Human\u201D frequently focus exclusively on biological forests or marine ecologies. Yet for an artist working today, technological systems are an equally vital part of our environment." },
      { type: "p", text: "In my practice, artificial intelligence is neither a novelty nor a replacement for human creativity. Instead, human intuition and computational models operate in mutual interdependence—like two sides of the same coin. My artistic process relies on a continuous dialogue with machine learning algorithms. I formulate mathematical inquiries, and custom computational scripts synthesize high-dimensional topological transformations that would be impossible for an unassisted human mind to calculate or visualize." },
      { type: "p", text: "Crucially, this work resists black-box commercial tools. The simulations and data visualizations for this project are developed openly (accessible via public repository at github.com/evecount/riemann_hypothesis). By anchoring the project in open-source code, the work remains transparent, verifiable, and free from commercial platform extraction." },
    ],
  },
  {
    n: "III",
    title: "The Physical Installation: Somatic Vibration and Optical Fiber",
    blocks: [
      { type: "p", text: "A central objective during my residency at SAM is translating abstract mathematics into a tactile, spatial environment. Mathematics should not remain locked behind a computer monitor; it must be experienced with weight, texture, and physical presence. The proposed installation consists of:" },
      {
        type: "ol",
        items: [
          { lead: "A Central Basalt Plinth", text: "A low, dark stone slab fitted with internal tactile transducers and low-frequency actuators. These convert the calculated mathematical intervals of the Riemann zeros into deep, physical vibrations (between 38 Hz and 90 Hz). Visitors can sit or place their hands on the stone, feeling the rhythmic interference patterns of prime distributions conducted directly through their skeletal system. This transforms \u201Clistening and attuning\u201D into a physical, bodily sensation." },
          { lead: "Suspended Optical Array", text: "Above the stone plinth, an array of optical fibers catches focused laser projections. As the computational simulation processes prime harmonics, the fibers refract the light into moving wave caustics across the floor and walls, visualizing complex mathematical dimensions in real space." },
        ],
      },
    ],
  },
  {
    n: "IV",
    title: "Track Record and Provenance: From Grassroots Studios to Applied Computing",
    blocks: [
      { type: "p", text: "Ambitious physical builds require proven operational discipline. Over the past sixteen years, my practice has maintained a consistent focus on physical interactive systems and community accountability:" },
      {
        type: "ul",
        items: [
          { lead: "Singapore Lineage", text: "Began with early studies in media theory at Singapore Polytechnic (Diploma in Media and Communication, 2006; Achiever Award) and exhibiting photographic inquiries into identity under the public gaze through Noise Singapore with the National Arts Council (2011–2012)." },
          { lead: "Physical Computing & Shared Spaces", text: "Co-designed the two-person interactive capture rig Two-Man Rule at TEDxToronto (2012) while working within early artist-run spaces at Akin Collective (directed by Oliver Pauk)." },
          { lead: "Studio Stewardship", text: "Directed Motion and Still Inc. (2011–2024) across overlapping Toronto live/work studios, providing free studio access, equipment sharing, and staging resources to local charities and independent artists." },
          { lead: "Longitudinal Collaboration", text: "Worked closely with Susan Stewart at Flick the Switch Artists\u2019 Collective (2019–2024), providing ongoing video documentation, digital archiving, and public art proposals." },
          { lead: "Technical Rigor", text: "Currently pursuing a B.Sc. (Honours) in Applied Computing at the Singapore Institute of Technology (SIT), focusing on machine learning and distributed systems." },
        ],
      },
    ],
  },
  {
    n: "V",
    title: "Why SAM Residencies at Tanjong Pagar Distripark",
    blocks: [
      { type: "p", text: "Tanjong Pagar Distripark offers the spatial scale necessary to build, calibrate, and safely test heavy stone assemblies, laser optics, and low-frequency audio systems. More importantly, SAM Residencies provides six months of focused studio time to move this inquiry beyond code repositories and into a mature museum installation." },
      { type: "p", text: "Engaging with SAM\u2019s curatorial team, fellow international residents, and the local Singapore arts community will allow me to refine the work\u2019s historical and relational depth. The Riemann Manifold offers visitors an accessible, grounded space to experience the profound connections between human curiosity, machine intelligence, and the natural geometry of our universe." },
    ],
  },
];

export type CVItem = { title: string; org?: string; year: string; detail?: string };

export const CV_ROLE = "Interdisciplinary Artist · Systems Architect · Media Theorist";
export const CV_WEBSITE = "gwenlim.ai.studio";

export const CV_LINKS: { handle: string; note?: string }[] = [
  { handle: "instagram.com/skyfulloflight", note: "Ongoing architecture and portrait photo study — current practice" },
];

export const CV_STATEMENT =
  "Working across participatory lens mechanics, optical surveillance critique, physical computing rigs, and machine interiority, Lim\u2019s 16-year practice interrogates human dependence on recording apparatuses. Her trajectory moves from street-level interactive portraiture and cooperative shutter actuation to algorithmic self-imaging, counter-surveillance lighting shields, and zero-knowledge neural architectures. Examining the structural, relational, and material dependencies between physical bodies, apparatuses of observation, and sovereign data systems, her work approaches technology as both an architectural constraint and an arena for collective sanctuary.";

export const CV_EDUCATION: CVItem[] = [
  { title: "B.Sc. (Honours) in Applied Computing", org: "Singapore Institute of Technology (SIT)", year: "Candidate", detail: "Focus: Machine Learning Architectures, Distributed Systems, Graph Neural Manifolds, and Embedded Computation." },
  { title: "SCTP Advanced Professional Certificate", org: "Nanyang Technological University (NTU PACE)", year: "2026", detail: "Specialization in Data Science, Deep Learning Systems, and Machine Learning Engineering." },
  { title: "Diploma in Media and Communication (DMC)", org: "Singapore Polytechnic, School of Business", year: "2006", detail: "Recipient: School of Business Achiever Award (2006). President: Singapore Polytechnic Debate Society." },
];

export const CV_LEADERSHIP: CVItem[] = [
  { title: "Chief Executive Officer & Chief Technology Officer", org: "Eve Count Quantum Systems", year: "2026", detail: "Directing computational research architectures, quantum algorithm benchmarking, and open quantum systems integration." },
  { title: "Co-Founder", org: "Cybrdeck", year: "2026", detail: "Orchestrating applied computational research initiatives, open-source tooling, and decentralized multi-agent system protocols." },
  { title: "Founder & Creative Director", org: "Motion and Still Inc. (Toronto, Canada)", year: "2011–2024", detail: "Directed a full-suite visual production agency and decentralized studio network spanning enterprise campaigns, startup ecosystems, and community initiatives. Specialized in lighting physics, optical cinematography, and interactive spatial installations while operating studio infrastructure as a resource for residencies and mutual aid." },
];

export const CV_TALKS: CVItem[] = [
  { title: "Guest Lecturer & Mentor, Advanced AI Systems", org: "Nanyang Technological University (NTU)", year: "2026", detail: "Delivering advanced lectures on machine learning models, architecture design, and systems engineering for emerging practitioners." },
  { title: "Lead Technical Workshop Instructor", org: "NTU IEEE & Women in Tech", year: "2026", detail: "Leading structured laboratory workshops on algorithmic structures, data representations, and open computing." },
  { title: "Keynote Speaker: \u201CTracking Visual Data\u201D", org: "Social Media Week Toronto (Windsor Arms Hotel)", year: "2013", detail: "Theoretical keynote on algorithmic image extraction, audience-led digital documentation, and the commodification of private visual spaces." },
];

export const CV_PRESS: CVItem[] = [
  { title: "Editor in Chief", org: "Toronto Social Review", year: "2011–2014", detail: "Directed approximately 350 assignments and correspondent logistics across TIFF, Fashion Art Toronto, CBCMusic.ca Festival at Echo Beach, The Pages Festival + Conference, Scotiabank Nuit Blanche, major theatre premieres, galas, and charity circuits. Led accreditation, content strategy, business development, and interactive formats, increasing readership and revenue by 30%." },
  { title: "Photojournalist", org: "SNAP Downtown Toronto", year: "2009–2010", detail: "Completed 60–80 field assignments, including JUNO Week and Bloor Street Entertains. Major 2010 press assignments included the G8/G20 summit period with President Barack Obama in Toronto, Queen Elizabeth II during her 22nd Royal Tour, and the Dalai Lama during his three-day Toronto visit." },
];

export const CV_AI_COMMUNITY_2026: CVItem[] = [
  { title: "Microsoft AICO 2026 Ideathon — First Place Winner", org: "Microsoft", year: "2026", detail: "Engineered a dual-agent system integrated with open data, developing a custom solution for financial literacy in partnership with Nadeetha Wahalathanthri." },
  { title: "SAIA Hack for Humanity — Honorable Mention (Best UX)", org: "Singapore AI Association", year: "2026", detail: "Developed LobangKaki (甘榜通), a voice-first, no-sign-in community assistant bridging technological access gaps — hyperlocal hawker-meal deals and community events across four languages. Directly translates a decade-long ethos of community mutual aid into modern agentic frameworks (github.com/evecount/lobangkaki)." },
];

export const CV_STUDIOS: CVItem[] = [
  { title: "The Lens Factory", org: "With Leonard van Bruggen · Toronto", year: "2008–2009", detail: "Helped develop and strengthen the business plan for a photographic art gallery while awaiting Canadian immigration papers." },
  { title: "Westside Studio", org: "Assistant to Shanghoon · Toronto", year: "2008–2010", detail: "Worked full-time across studio operations and marketing strategy; creative ideas from this formative period were published." },
  { title: "87 Wade Avenue", org: "Motion and Still Inc. · Toronto", year: "2012–2014", detail: "Incubator studio for photography, stop-motion production, and artist critiques." },
  { title: "Motion and Still Studio — 192 Spadina Ave, Suites 215, 403 & 410", org: "Centre for Social Innovation · Toronto", year: "2013–2015", detail: "Multi-unit operational hub connecting the studio with Toronto’s technology and social-impact communities." },
  { title: "Bellwoods Studio", org: "Tecumseth Street · Toronto", year: "2018", detail: "Additional downtown production node within the wider studio network." },
  { title: "Plant Paradise Brick-and-Beam Studio", org: "Wade Avenue · Toronto", year: "2018", detail: "Returned to Wade Avenue with a plant-filled studio used for shoots, gatherings, and creative hosting." },
  { title: "403–90 Ontario Street", org: "Motion and Still Inc. · Toronto", year: "Pre-2019", detail: "Primary studio address documented by February 2019. The building was later scheduled for redevelopment; the subsequent move resulted in the loss of Lim’s full artist catalogue." },
  { title: "Midcentury Loft", org: "Motion and Still Inc. · Toronto", year: "2019", detail: "Plant-filled live/work production studio and host venue for community performances, including Sofar Sounds." },
  { title: "Skylight Loft — Unit 301, 77 Florence Street", org: "Motion and Still Inc. · Toronto", year: "2020–2021", detail: "Skylit live/work production studio opened in March 2020 and renewed in 2021, sustaining shoots and creative work through an exceptionally difficult opening period." },
  { title: "Unit 308, 52 St Lawrence Street", org: "Green & Gold / Plant Paradise · Toronto", year: "2020–2024", detail: "The last of Lim’s Toronto studios: a plant-filled live/work space holding the accumulated objects, equipment, and joys of earlier studio years." },
  { title: "Gladstone Loft — 53 Gladstone Avenue", org: "Gladstone Loft · Toronto", year: "2022–2023", detail: "Live/work studio held from April 2022 to April 2023." },
];

export const CV_CAPABILITIES = [
  { title: "Computational & Hardware Systems", text: "Python, Graph Neural Networks, Qiskit Quantum Frameworks, Multi-Agent Orchestration, Microcontroller / Sensor Integration, Actuation Rigs." },
  { title: "Spatial, Optical & Physical Media", text: "Directional High-Lumen Flood Arrays, CCTV Matrix Switching, Optical Scrim Diffusion, Retroreflective Shielding, Hacked Shutter Actuators, Acoustic Salons." },
];

export const CV_WORKS: CVItem[] = [
  { title: "The Riemann Manifold: Quantum Chaos & Spectral Topology", year: "2026", detail: "Computational Systems Installation & High-Dimensional Topology — Algorithmic inquiry into the non-trivial zeros of the Riemann zeta function and prime harmonic distributions along the critical strip (Re(s) = 1/2). Bridges quantum operator eigenvalues, Gaussian Unitary Ensemble (GUE) random matrix statistics, and generative interference patterns to examine deterministic chaos and non-human systemic harmony." },
  { title: "Deconstructing Capital", org: "52 St. Lawrence, Toronto", year: "2020", detail: "Site-Specific Installation & Counter-Surveillance Performance — Architectural intervention deploying layered optical scrims, high-lumen flood arrays, and camera-jamming retroreflective surfaces to neutralize automated lens tracking and delineate spatial privacy sanctuaries." },
  { title: "The Ultimate Selfie", org: "Interior Design Show / IIDEX / TO DO (Metro Toronto Convention Centre)", year: "2014", detail: "Interactive Physical Computing Installation — Architectural enclosures housing custom-disassembled DSLR hardware, analog micro-switches, and automated deployment pipelines, critiquing the narcissism and extractive feedback loops of public self-documentation." },
  { title: "Interactive Media Pavilions", org: "Toronto Design Offsite Festival (TO DO) / IDS", year: "2013", detail: "Physical Computing Rig & Spatial Portraiture — Audience-actuated spatial booths exploring tactile electronic triggers, direct image dissemination, and decentralized participatory documentation." },
  { title: "Two-Man Rule", org: "TEDxToronto, The Sony Centre for the Performing Arts", year: "2012", detail: "Participatory Architecture & Dual Shutter Rig — Geodesic tape dome housing an automated capture mechanism requiring simultaneous, synchronized physical actions by two unacquainted participants, enforcing cooperative consensus to produce a single image." },
  { title: "Broadcast People", org: "|FAT| Alternative Arts & Fashion Week", year: "2012", detail: "Closed-Circuit Kinetic Installation — A wall-scale closed-circuit television (CCTV) matrix wired to a tactile pressure-plate floor actuator, trapping the participant in an immediate, inescapable feedback loop of self-broadcast." },
  { title: "Noise Singapore Festival Exhibition", org: "National Arts Council (NAC), Singapore", year: "2011–2012", detail: "Curated Group Exhibition — Presentation of photographic works (White Geisha series / Silver Aurelia), examining cosmetic surface ornamentation, mask, and the boundary between private vulnerability and the staged public gaze." },
  { title: "A Perfect World", org: "Kensington Market, Toronto", year: "2011", detail: "Street-Level Relational Intervention — Site-specific public portraiture series confronting urban isolation and probing the informal social contracts struck between the lens and the subject in shared civic space." },
];

export const CV_COMMUNITY: CVItem[] = [
  { title: "Flick the Switch Artists\u2019 Collective", org: "34 Stephanie St, Toronto (Dir. Susan Stewart)", year: "2019–2024", detail: "Collaborated alongside founder Susan Stewart over a five-year longitudinal commitment, providing continuous pro bono video production, digital archiving, exhibition documentation, and Nuit Blanche public art proposals in support of local independent artists and shared workspaces." },
  { title: "Akin Collective", org: "Toronto (Dir. Oliver Pauk)", year: "2011–2015", detail: "Resident artist and community collaborator within early grassroots shared studio facilities; participated in cooperative studio governance, peer critiques, and arts fundraising initiatives including the #LoveLocal project (2013)." },
  { title: "Direct Community Aid & Cultural Hosting", year: "2014–2024", detail: "Donated studio furniture, media equipment, production services, and professional space to Nellie’s Shelter, Toronto Humane Society, Salvation Army, refugee support networks, and independent artists. Hosted fundraisers, art pop-ups, yoga classes, and Sofar Sounds performances." },
  { title: "Non-Profit Visual Production & Equipment Stewardship", year: "2015–2024", detail: "Provided pro bono production and visual support for Kerry’s Place Autism Services and Habitat for Humanity; coordinated material aid through 101 Ontario Refugee Support and granted production equipment to Charles Street Video for accessible community media." },
  { title: "COVID-19 Emergency Relief Operations", year: "2020", detail: "Logistics routing and rapid redistribution of surplus commercial food rescue supplies to localized emergency shelters across downtown Toronto during municipal lockdowns." },
];

export type ClientSector = { title: string; clients: string[] };

export const MOTION_AND_STILL_CLIENTS: ClientSector[] = [
  {
    title: "Early-Stage Technology Ventures",
    clients: ["SkedX", "Klothed", "MyCityMuse"],
  },
  {
    title: "Boutique Agency Partners",
    clients: ["The Siren Group", "2Social", "88Creative"],
  },
  {
    title: "Enterprise Technology, Platforms & Fintech",
    clients: ["Shopify", "Spotify", "Airbnb", "TURO and Duuo", "Overbond", "Givex"],
  },
  {
    title: "Financial & Professional Services",
    clients: ["Royal Bank of Canada (RBC)", "TD Ameritrade", "Torys LLP", "Aird & Berlis LLP", "Stikeman Elliott LLP"],
  },
  {
    title: "Global Retail, Consumer Goods & Lifestyle",
    clients: ["TJX (Winners, Homesense, Marshalls)", "Sephora", "T-Fal", "Rowenta", "Reliable Corporation"],
  },
  {
    title: "Food, Beverage & Delivery",
    clients: ["Nestlé Canada", "Activia", "Campbell Company of Canada", "Pure Leaf Tea", "Tetley’s", "Just Eat Canada", "Skip the Dishes"],
  },
  {
    title: "Luxury Automotive",
    clients: ["Porsche Canada and Porsche Centre North Toronto"],
  },
  {
    title: "Civic, Non-Profit & Specialized Sectors",
    clients: ["Habitat for Humanity", "City of Toronto", "District of Kitimat", "Pride Toronto", "TEDxToronto", "Toronto Business Development Centre", "Prollenium Medical Technologies", "ControlCase"],
  },
];
