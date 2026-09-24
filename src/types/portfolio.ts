export type WorkCategory = 
  | 'computational-topology'
  | 'observer-bias'
  | 'participatory-optics'
  | 'closed-circuit-systems';

export interface SystemNode {
  id: string;
  label: string;
  type: 'input' | 'processing' | 'optic' | 'actuation' | 'participant' | 'network';
  description: string;
  spec?: string;
}

export interface SystemConnection {
  from: string;
  to: string;
  protocol: string;
  latency?: string;
}

export interface ArtworkImage {
  id: string;
  url?: string;
  title: string;
  caption: string;
  viewType: 'Installation View' | 'Apparatus Detail' | 'Participatory Action' | 'Spatial Context';
  placeholderType: 
    | 'riemann-overview'
    | 'riemann-apparatus'
    | 'riemann-action'
    | 'klingon-overview'
    | 'klingon-apparatus'
    | 'klingon-action'
    | 'deconstruct-overview'
    | 'deconstruct-apparatus'
    | 'deconstruct-action'
    | 'selfie-overview'
    | 'selfie-apparatus'
    | 'selfie-action'
    | 'pavilions-overview'
    | 'pavilions-apparatus'
    | 'pavilions-action'
    | 'broadcast-overview'
    | 'broadcast-apparatus'
    | 'broadcast-action'
    | 'twoman-overview'
    | 'twoman-apparatus'
    | 'twoman-action'
    | 'perfectworld-overview'
    | 'perfectworld-apparatus'
    | 'perfectworld-action'
    | 'noise-sg-overview'
    | 'noise-sg-apparatus'
    | 'noise-sg-action'
    | 'collective-overview'
    | 'collective-apparatus'
    | 'collective-action';
  captureMetadata?: {
    camera?: string;
    exposure?: string;
    lightingCondition?: string;
    scale?: string;
  };
  credit?: string;
  isCustom?: boolean;
}

export interface ArchivalStudioPhoto {
  id: string;
  filename: string;
  url: string;
  dateStr: string;
  title: string;
  context: string;
  category: 'studio' | 'installation' | 'apparatus' | 'collective' | 'process' | 'performance';
  metadataNote?: string;
  location?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface Artwork {
  id: string;
  accessionId: string;
  title: string;
  subtitle: string;
  year: number;
  venue: string;
  city: string;
  category: WorkCategory;
  medium: string;
  dimensions: string;
  provenance?: string;
  focus?: string;
  images: ArtworkImage[];
  archivalPhotos?: ArchivalStudioPhoto[];
  hardwareStack: string[];
  softwareStack: string[];
  summary: string;
  curatorialStatement: string;
  technicalDossier: string;
  installationFootprint: string;
  collaborators?: string[];
  productionContext?: string;
  studioLineage?: string;
  schematicTitle: string;
  schematicNodes: SystemNode[];
  schematicConnections: SystemConnection[];
  soundProfile: {
    type: 'transformer-drone' | 'crt-high-frequency' | 'solenoid-relay' | 'optical-hum';
    freq: number;
    description: string;
  };
  githubUrl?: string;
  visualPalette: {
    accent: string;
    bgStyle: string;
    gridColor: string;
  };
}

export interface CVEntry {
  id: string;
  year: number | string;
  title: string;
  category: 'education' | 'leadership' | 'affiliations' | 'exhibitions' | 'research' | 'talks' | 'collaborations' | 'civic';
  venueOrPublisher: string;
  location: string;
  roleOrContext?: string;
  notes?: string;
  link?: string;
}

export interface AcademicCredential {
  id: string;
  degreeOrCert: string;
  institution: string;
  location: string;
  focus?: string;
  honorsAndRoles?: string[];
}

export interface TechnicalLeadershipRole {
  id: string;
  role: string;
  organization: string;
  location: string;
  year: string | number;
  details?: string;
}

export interface InstitutionalAffiliation {
  id: string;
  title: string;
  organization: string;
  location: string;
  period?: string;
  role?: string;
  details?: string[];
}

export interface TechnicalCapabilities {
  computationalAndHardware: string[];
  spatialAndOpticalMedia: string[];
}

export interface AppliedPracticeArchiveItem {
  id: string;
  years: string;
  title: string;
  clientSector: string;
  technicalFocus: string;
  cinematographyRig: string;
  relevanceToArtisticTrajectory: string;
}
