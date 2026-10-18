// Types:
import { NavItem } from "@/types/navbar.types";

// Lucide Icons:
import { Info, Stethoscope, Phone, BadgeQuestionMark } from "lucide-react";

export const NAV_MENU: NavItem[] = [
  {
    id: "home",
    url: "/",
  },

  {
    id: "about",
    url: "/about",
    items: [
      { id: "aboutUs", icon: Info, url: "/about" },
      { id: "contactUs", icon: Phone, url: "/contact" },
      { id: "faqs", icon: BadgeQuestionMark, url: "/faqs" },
    ],
  },

  {
    id: "doctors",
    url: "/doctors",
    items: [{ id: "findDoctor", icon: Stethoscope, url: "/doctors" }],
  },

  {
    id: "blog",
    url: "/blog",
  },
];
