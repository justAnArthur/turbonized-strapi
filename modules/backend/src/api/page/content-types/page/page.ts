// Interface automatically generated by schemas-to-ts

import { SeoComponent } from '../../../../components/shared/interfaces/SeoComponent';
import { SeoComponent_Plain } from '../../../../components/shared/interfaces/SeoComponent';
import { SeoComponent_NoRelations } from '../../../../components/shared/interfaces/SeoComponent';

export interface Page {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    internalName: string;
    type: any;
    blocks: any;
    seo: SeoComponent;
    locale: string;
    localizations?: { data: Page[] };
  };
}
export interface Page_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  internalName: string;
  type: any;
  blocks: any;
  seo: SeoComponent_Plain;
  locale: string;
  localizations?: Page[];
}

export interface Page_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  internalName: string;
  type: any;
  blocks: any;
  seo: SeoComponent_NoRelations;
  locale: string;
  localizations?: Page[];
}

export interface Page_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  internalName: string;
  type: any;
  blocks: any;
  seo: SeoComponent_Plain;
  locale: string;
  localizations?: Page[];
}
