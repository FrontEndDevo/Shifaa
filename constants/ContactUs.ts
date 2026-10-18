import { ShieldCheck, Star, Brain, Gem, type LucideIcon } from "lucide-react";

export type ContactBenefit = {
  id: "experience" | "specialists" | "hipaa" | "topRated";
  badge: LucideIcon;
  className: string;
};

export const CONTACT_BENEFITS: ContactBenefit[] = [
  { id: "experience", badge: Brain, className: "text-red-400" },
  { id: "specialists", badge: Gem, className: "text-yellow-400" },
  { id: "hipaa", badge: ShieldCheck, className: "text-red-400" },
  { id: "topRated", badge: Star, className: "text-yellow-400" },
];
