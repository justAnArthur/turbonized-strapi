// Interface automatically generated by schemas-to-ts

import type { Media } from "../../../common/schemas-to-ts/Media"
import type { MetaSocial, MetaSocial_NoRelations, MetaSocial_Plain } from "./MetaSocial"

export interface Seo {
  metaTitle: string;
  metaDescription: string;
  metaImage?: { data: Media };
  metaSocial: MetaSocial[];
  keywords?: string;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
}

export interface Seo_Plain {
  metaTitle: string;
  metaDescription: string;
  metaImage?: Media;
  metaSocial: MetaSocial_Plain[];
  keywords?: string;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
}

export interface Seo_NoRelations {
  metaTitle: string;
  metaDescription: string;
  metaImage?: number;
  metaSocial: MetaSocial_NoRelations[];
  keywords?: string;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
}
