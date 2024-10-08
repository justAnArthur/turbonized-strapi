// Interface automatically generated by schemas-to-ts

import type { Media } from "../../../common/schemas-to-ts/Media"

export enum SocialNetwork {
  Facebook = "Facebook",
  Twitter = "Twitter",
}

export interface MetaSocial {
  socialNetwork: SocialNetwork;
  title: string;
  description: string;
  image?: { data: Media };
}

export interface MetaSocial_Plain {
  socialNetwork: SocialNetwork;
  title: string;
  description: string;
  image?: Media;
}

export interface MetaSocial_NoRelations {
  socialNetwork: SocialNetwork;
  title: string;
  description: string;
  image?: number;
}
