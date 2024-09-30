// Interface automatically generated by schemas-to-ts

import type { Media } from "../../../common/schemas-to-ts/Media"
import type { Button, Button_NoRelations, Button_Plain } from "../../shared/interfaces/Button"

export interface BannerSlide {
  image: { data: Media };
  title?: string;
  description?: string;
  buttons: Button[];
}

export interface BannerSlide_Plain {
  image: Media;
  title?: string;
  description?: string;
  buttons: Button_Plain[];
}

export interface BannerSlide_NoRelations {
  image: number;
  title?: string;
  description?: string;
  buttons: Button_NoRelations[];
}
