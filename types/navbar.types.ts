// Lucide Icons:
import type { LucideIcon } from "lucide-react";

export type NavSubItem = {
  id: string;
  description?: string;
  icon?: LucideIcon;
  url: string;
};

export type NavItem = {
  id: string;
  url: string;
  icon?: LucideIcon;
  items?: NavSubItem[];
};

export type DropdownMenuProps = {
  data: {
    title: string;
    description?: string;
    icon?: LucideIcon;
    url: string;
  }[];
  showLogout?: boolean;
};
