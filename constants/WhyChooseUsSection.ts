// Types:
import { ChooseUsProps } from "@/types/whychooseus.types";

// Lucide Icons:
import { Building, HeartHandshake, Microscope, Users } from "lucide-react";

export const WHY_CHOOSE_US_DATA: ChooseUsProps[] = [
  {
    icon: Users,
    coloring: "red",
    heading: "Expert Medical Team",
    content:
      "Board-certified cardiologists with decades of combined clinical experience.",
  },
  {
    icon: Microscope,
    coloring: "blue",
    heading: "Advanced Technology",
    content:
      "State-of-the-art diagnostic equipment for precise, accurate assessments.",
  },
  {
    icon: HeartHandshake,
    coloring: "emerald",
    heading: "Patient-Centered Care",
    content:
      "Personalized treatment plans built around your unique health profile.",
  },
  {
    icon: Building,
    coloring: "yellow",
    heading: "Modern Facilities",
    content:
      "Comfortable, fully-equipped clinic designed for the best patient experience.",
  },
];
