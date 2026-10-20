// types/services.types.ts
import type { LucideIcon } from "lucide-react";

export type ServiceColor = "red" | "emerald" | "blue";

export type OurServicesProps = {
  id: string;
  icon: LucideIcon;
  coloring: ServiceColor;
  action: "learnMore" | "callNow";
  link: string;
};
