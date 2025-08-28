import type { Schema, Struct } from '@strapi/strapi';

export interface FooterFooterHref extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_hrefs';
  info: {
    displayName: 'footerHref';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface FooterFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'footerLinks';
  };
  attributes: {
    href: Schema.Attribute.Text;
  };
}

export interface FooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'Links';
  };
  attributes: {};
}

export interface FooterQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_quick_links';
  info: {
    displayName: 'quickLinks';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.footer-href': FooterFooterHref;
      'footer.footer-links': FooterFooterLinks;
      'footer.links': FooterLinks;
      'footer.quick-links': FooterQuickLinks;
    }
  }
}
