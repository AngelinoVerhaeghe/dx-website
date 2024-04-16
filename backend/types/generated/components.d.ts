import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsCard extends Schema.Component {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    label: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    links: Attribute.Component<'components.page-link', true>;
    bgColor: Attribute.Enumeration<
      ['Light Blue', 'Dark Blue', 'Darkest Blue']
    > &
      Attribute.DefaultTo<'Darkest Blue'>;
  };
}

export interface ComponentsFeatures extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    feature_1: Attribute.Component<'components.card'>;
    feature_2: Attribute.Component<'components.card'>;
    feature_3: Attribute.Component<'components.card'>;
  };
}

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    headerImage: Attribute.Media;
  };
}

export interface ComponentsImageText extends Schema.Component {
  collectionName: 'components_components_image_texts';
  info: {
    displayName: 'Image-Text';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    content: Attribute.Blocks;
  };
}

export interface ComponentsPageLink extends Schema.Component {
  collectionName: 'components_components_page_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank', '_self', '_parent', '_top']> &
      Attribute.DefaultTo<'_self'>;
  };
}

export interface ComponentsTitle extends Schema.Component {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.card': ComponentsCard;
      'components.features': ComponentsFeatures;
      'components.header': ComponentsHeader;
      'components.image-text': ComponentsImageText;
      'components.page-link': ComponentsPageLink;
      'components.title': ComponentsTitle;
    }
  }
}
