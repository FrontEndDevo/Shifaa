// Lucide Icons:
import type { LucideIcon } from "lucide-react";

export interface AboutBasicSection {
  title: string;
  content: string;
  label?: string;
  icon: LucideIcon;
}

export interface AboutBasicProps {
  heading: string;
  description?: string;
  sections?: AboutBasicSection[];
  whoWeAre: {
    title: string;
    description: string;
  };
}
