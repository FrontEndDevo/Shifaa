// constants/OurServices.ts
import {
  Activity,
  Siren,
  Stethoscope,
  ShieldPlus,
  Heart,
  ClipboardPlus,
} from "lucide-react";

import type { OurServicesProps, ServiceColor } from "@/types/services.types";

export const SERVICE_COLORS: Record<ServiceColor, string> = {
  red: "bg-red-200 text-red-400 group-hover:bg-red-400 group-hover:text-white",
  emerald:
    "bg-emerald-200 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-white",
  blue: "bg-blue-200 text-blue-400 group-hover:bg-blue-400 group-hover:text-white",
};

export const OUR_SERVICES: OurServicesProps[] = [
  {
    id: "cardiacAssessment",
    icon: Activity,
    coloring: "red",
    action: "learnMore",
    link: "/about",
  },
  {
    id: "diagnostics",
    icon: ClipboardPlus,
    coloring: "emerald",
    action: "learnMore",
    link: "/about",
  },
  {
    id: "bloodPressure",
    icon: Stethoscope,
    coloring: "blue",
    action: "learnMore",
    link: "/about",
  },
  {
    id: "rehabilitation",
    icon: ShieldPlus,
    coloring: "emerald",
    action: "learnMore",
    link: "/about",
  },
  {
    id: "riskReduction",
    icon: Heart,
    coloring: "blue",
    action: "learnMore",
    link: "/about",
  },
  {
    id: "emergency",
    icon: Siren,
    coloring: "red",
    action: "callNow",
    link: "/about",
  },
];
