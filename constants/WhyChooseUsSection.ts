// constants/WhyChooseUsSection.ts
import { Building, HeartHandshake, Microscope, Users } from "lucide-react";

import type { ChooseColor, ChooseUsProps } from "@/types/whyChooseus.types";

export const CHOOSE_COLORS: Record<ChooseColor, string> = {
  red: "bg-red-200 text-red-400",
  blue: "bg-blue-200 text-blue-400",
  emerald: "bg-emerald-200 text-emerald-400",
  yellow: "bg-yellow-200 text-yellow-400",
};

export const WHY_CHOOSE_US_DATA: ChooseUsProps[] = [
  { id: "experts", icon: Users, coloring: "red" },
  { id: "technology", icon: Microscope, coloring: "blue" },
  { id: "patientCentered", icon: HeartHandshake, coloring: "emerald" },
  { id: "facilities", icon: Building, coloring: "yellow" },
];
