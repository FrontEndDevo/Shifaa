// types/whyChooseus.types.ts
import type { LucideIcon } from "lucide-react";

export type ChooseColor = "red" | "blue" | "emerald" | "yellow";

export interface ChooseUsProps {
  id: string;
  icon: LucideIcon;
  coloring: ChooseColor;
}
