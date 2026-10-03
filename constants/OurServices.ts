// Types:
import { OurServicesProps } from "@/types/services.types";

// Lucide Icons:
import {
  Activity,
  Siren,
  Stethoscope,
  ShieldPlus,
  Heart,
  ClipboardPlus,
} from "lucide-react";

export const OUR_SERVICES: OurServicesProps[] = [
  {
    icon: Activity,
    coloring: "red",
    content:
      "Comprehensive cardiac assessments, risk evaluations, and personalized preventive care plans to keep your heart healthy.",
    btn: "Learn More",
    link: "/about",
  },
  {
    icon: ClipboardPlus,
    coloring: "emerald",
    content:
      "Advanced electrocardiography, echocardiography, stress testing, and Holter monitoring for accurate heart condition assessment.",
    btn: "Learn More",
    link: "/about",
  },
  {
    icon: Stethoscope,
    coloring: "blue",
    content:
      "Personalized blood pressure control programs combining medication management, lifestyle coaching, and continuous monitoring.",
    btn: "Learn More",
    link: "/about",
  },
  {
    icon: ShieldPlus,
    coloring: "emerald",
    content:
      "Structured recovery programs for heart attack survivors and surgery patients to restore strength and improve quality of life.",
    btn: "Learn More",
    link: "/about",
  },
  {
    icon: Heart,
    coloring: "blue",
    content:
      "Proactive cardiovascular risk reduction through lifestyle modification, nutritional guidance, and targeted preventive therapies.",
    btn: "Learn More",
    link: "/about",
  },
  {
    icon: Siren,
    coloring: "red",
    content:
      "24/7 rapid response care for acute heart conditions including chest pain, arrhythmias, and cardiac emergencies requiring immediate attention.",
    btn: "Call Now",
    link: "/about",
  },
];
