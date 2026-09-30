import type { LucideIcon } from "lucide-react";

export type NavSubItem = {
  title: string;
  description?: string;
  icon?: LucideIcon;
  url: string;
};

export type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  items?: NavSubItem[];
};
