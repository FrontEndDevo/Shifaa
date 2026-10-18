// Types:
import type { PricingPlan } from "@/types/pricing.types";

export const PRICING_PLAN = [
  {
    id: "basic",
    price: 49,
    features: ["accessAll", "consultations5", "secureAppointments", "records"],
  },
  {
    id: "standard",
    price: 99,
    isPopular: true,
    features: [
      "accessAll",
      "consultations15",
      "secureAppointments",
      "records",
      "priority",
    ],
  },
  {
    id: "premium",
    price: 199,
    features: [
      "accessUnlimited",
      "consultationsUnlimited",
      "secureAppointments",
      "records",
      "priority",
      "support",
    ],
  },
] satisfies PricingPlan[];
