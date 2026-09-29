// Types:
import {
  ContactLinks,
  FooterLinksSectionData,
  LinkTypes,
} from "@/types/footer.types";

import { Clock, MapPin, Phone } from "lucide-react";

export const NEWSLETTER_DATA = {
  title: "Shifaa",
  description:
    "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
};
export const FOOTER_LINKS: FooterLinksSectionData[] = [
  {
    title: "Information",
    items: [
      {
        text: "About Us",
        link: "/about",
      },
      {
        text: "How It Works",
        link: "/how-it-works",
      },
      {
        text: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        text: "Terms & Conditions",
        link: "/terms-and-conditions",
      },
    ],
  },
  {
    title: "Appointments",
    items: [
      {
        text: "Find a Doctor",
        link: "/doctors",
      },
      {
        text: "Book an Appointment",
        link: "/appointments",
      },
      {
        text: "My Appointments",
        link: "/my-appointments",
      },
      {
        text: "Contact Us",
        link: "/contact",
      },
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
      icon: MapPin,
      text: "support@shifaa.com",
      link: "support@shifaa.com",
      type: LINK_TYPES.EMAIL_LINK as LinkTypes,
    },
    {
      icon: Phone,
      text: "+12345678910",
      link: "+12345678910",
      type: LINK_TYPES.PHONE_LINK as LinkTypes,
    },
    {
      icon: Clock,
      text: "Monday - Friday, 9 am - 9 pm",
      type: LINK_TYPES.NO_LINK as LinkTypes,
    },
  ],
  socialMedia: [
    {
      icon: SOCIAL_ICONS.facebook,
      link: "/",
    },
    {
      icon: SOCIAL_ICONS.x,
      link: "/",
    },
    {
      icon: SOCIAL_ICONS.instagram,
      link: "/",
    },
  ],
};
