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
    url: Attribute.String & Attribute.Required;
    links: Attribute.Component<'components.page-link', true>;
    bgColor: Attribute.Enumeration<
      ['bg-dx-blue-light', 'bg-dx-blue-dark', 'bg-dx-blue-darkest']
    > &
      Attribute.DefaultTo<'bg-dx-blue-darkest'>;
    icon: Attribute.Text &
      Attribute.CustomField<'plugin::heroicons-field.icon-picker'>;
    textColor: Attribute.Enumeration<
      ['text-dx-blue-light', 'text-dx-blue-dark', 'text-dx-blue-darkest']
    > &
      Attribute.DefaultTo<'text-dx-blue-darkest'>;
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
    feature_1: Attribute.Component<'components.card'>;
    feature_2: Attribute.Component<'components.card'>;
    feature_3: Attribute.Component<'components.card'>;
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
    url: Attribute.String & Attribute.Required;
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

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    icon: Attribute.Media;
    link: Attribute.Component<'menu.link', true>;
    url: Attribute.String;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface MenuMenuButton extends Schema.Component {
  collectionName: 'components_menu_menu_buttons';
  info: {
    displayName: 'MenuButton';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    type: Attribute.Enumeration<['dark', 'darkest', 'light']>;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
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
      'menu.dropdown': MenuDropdown;
      'menu.link': MenuLink;
      'menu.menu-button': MenuMenuButton;
      'menu.menu-link': MenuMenuLink;
    }
  }
}
