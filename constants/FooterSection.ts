import { Clock, Mail, Phone } from "lucide-react";

import type {
  ContactLinks,
  FooterLinksSectionData,
  LinkTypes,
} from "@/types/footer.types";

export const FOOTER_LINKS: FooterLinksSectionData[] = [
  {
    id: "information",
    items: [
      { id: "about", link: "/about" },
      { id: "howItWorks", link: "/how-it-works" },
      { id: "privacy", link: "/privacy-policy" },
      { id: "terms", link: "/terms-and-conditions" },
    ],
  },
  {
    id: "appointments",
    items: [
      { id: "findDoctor", link: "/doctors" },
      { id: "book", link: "/appointments" },
      { id: "myAppointments", link: "/my-appointments" },
      { id: "contact", link: "/contact" },
    ],
  },
];

export const SOCIAL_ICONS = {
  facebook: {
    title: "Facebook",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/facebook-icon.svg",
  },
  x: {
    title: "X",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/x.svg",
    className: "dark:invert",
  },
  instagram: {
    title: "Instagram",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg",
  },
};

export const LINK_TYPES = {
  NO_LINK: "NO_LINK",
  PHONE_LINK: "PHONE_LINK",
  EMAIL_LINK: "EMAIL_LINK",
};

export const CONTACT_LINKS: ContactLinks = {
  contactDetails: [
    {
      id: "email",
      icon: Mail,
      text: "support@shifaa.com",
      link: "support@shifaa.com",
      type: LINK_TYPES.EMAIL_LINK as LinkTypes,
    },
    {
      id: "phone",
      icon: Phone,
      text: "+12345678910",
      link: "+12345678910",
      type: LINK_TYPES.PHONE_LINK as LinkTypes,
    },
    {
      id: "hours",
      icon: Clock,
      type: LINK_TYPES.NO_LINK as LinkTypes,
    },
  ],
  socialMedia: [
    { icon: SOCIAL_ICONS.facebook, link: "/" },
    { icon: SOCIAL_ICONS.x, link: "/" },
    { icon: SOCIAL_ICONS.instagram, link: "/" },
  ],
};
