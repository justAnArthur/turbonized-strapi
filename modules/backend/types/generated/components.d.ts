import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsBannerSlide extends Schema.Component {
  collectionName: 'components_components_banner_slides';
  info: {
    displayName: 'BannerSlide';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    description: Attribute.Text;
    buttons: Attribute.Component<'components.button', true>;
  };
}

export interface BlocksPageStandart extends Schema.Component {
  collectionName: 'components_blocks_page_standarts';
  info: {
    displayName: 'PageStandart';
    description: '';
  };
  attributes: {
    slug: Attribute.String & Attribute.Unique;
  };
}

export interface BlocksPageBlog extends Schema.Component {
  collectionName: 'components_blocks_page_blogs';
  info: {
    displayName: 'PageBlog';
  };
  attributes: {
    slug: Attribute.String & Attribute.Required;
  };
}

export interface BlocksBanner extends Schema.Component {
  collectionName: 'components_blocks_banners';
  info: {
    displayName: 'Banner';
    icon: 'picture';
    description: '';
  };
  attributes: {
    slides: Attribute.Component<'components.banner-slide', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'components.button': ComponentsButton;
      'components.banner-slide': ComponentsBannerSlide;
      'blocks.page-standart': BlocksPageStandart;
      'blocks.page-blog': BlocksPageBlog;
      'blocks.banner': BlocksBanner;
    }
  }
}
