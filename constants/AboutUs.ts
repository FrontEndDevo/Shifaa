import {
  Eye,
  Target,
  HeartHandshake,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

export type AboutSection = {
  id: "vision" | "story" | "drives" | "mission";
  icon: LucideIcon;
};

export const ABOUT_SECTIONS: AboutSection[] = [
  { id: "vision", icon: Eye },
  { id: "story", icon: BookOpen },
  { id: "drives", icon: HeartHandshake },
  { id: "mission", icon: Target },
];
