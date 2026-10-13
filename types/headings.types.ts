// Lucide Icons:
import { LucideIcon } from "lucide-react";

export type HeadingProps = {
  heading: string;
  title: string;
  description: string;
};

export type SectionHeadingProps = {
  icon: LucideIcon;
} & HeadingProps;
