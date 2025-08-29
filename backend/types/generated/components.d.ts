import type { Schema, Struct } from '@strapi/strapi';

export interface FooterFollowLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_follow_links';
  info: {
    displayName: 'Follow_Link';
  };
  attributes: {
    Follow_text: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

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

export interface FooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    socialLink: Schema.Attribute.Text;
    socialName: Schema.Attribute.String;
  };
}

export interface FooterSocialMediaLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_media_links';
  info: {
    displayName: 'socialMediaLink';
  };
  attributes: {
    github: Schema.Attribute.Text;
    linkedin: Schema.Attribute.Text;
    twitter: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.follow-link': FooterFollowLink;
      'footer.footer-href': FooterFooterHref;
      'footer.footer-links': FooterFooterLinks;
      'footer.links': FooterLinks;
      'footer.quick-links': FooterQuickLinks;
      'footer.social-links': FooterSocialLinks;
      'footer.social-media-link': FooterSocialMediaLink;
    }
  }
}
