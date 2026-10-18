import type { LucideIcon } from "lucide-react";
import type { LINK_TYPES } from "@/constants/FooterSection";

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
  id: string;
  icon: LucideIcon;
  text?: string;
  type: LinkTypes;
  link?: string;
};

export type ContactLinks = {
  contactDetails: ContactLink[];
  socialMedia: SocialLink[];
};

export type FooterLink = {
  id: string;
  link: string;
};

export type FooterLinksSectionData = {
  id: string;
  items: FooterLink[];
};
