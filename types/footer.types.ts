import type { LucideIcon } from "lucide-react";
import { LINK_TYPES } from "@/constants/FooterSection";

export type LinkTypes = keyof typeof LINK_TYPES;

export type SocialIcon = {
  title: string;
  src: string;
  className?: string;
};

export type SocialLink = {
  link: string;
  icon: SocialIcon;
};

export type ContactLink = {
  icon: LucideIcon;
  text: string;
  type: LinkTypes;
  link?: string;
};

export type ContactLinks = {
  contactDetails: ContactLink[];
  socialMedia: SocialLink[];
};

export type INewsletterData = {
  title?: string;
  description?: string;
};

export type FooterLink = {
  text: string;
  link: string;
};

export type FooterLinksSectionData = {
  title: string;
  items: FooterLink[];
};

export interface ContactSectionProps {
  links: ContactLinks;
}

export interface IFooterLinksSectionProps {
  sections: FooterLinksSectionData[];
}

export interface IFooterProps {
  newsletter: INewsletterData;
  footerLinks: FooterLinksSectionData[];
  contactLinks: ContactLinks;
  className?: string;
}
