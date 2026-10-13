// Types:
import { PricingPlan } from "@/types/pricing.types";

export const PRICING_PLAN = [
  {
    name: "Basic",
    description: "Essential access to our network of doctors.",
    price: 49,
    features: [
      "Access to all doctors",
      "5 doctor consultations",
      "Secure online appointments",
      "Digital medical records",
    ],
    buttonText: "Get Basic",
  },
  {
    name: "Standard",
    description:
      "More consultations and benefits for regular healthcare needs.",
    price: 99,
    isPopular: true,
    features: [
      "Access to all doctors",
      "15 doctor consultations",
      "Secure online appointments",
      "Digital medical records",
      "Priority appointment booking",
    ],
    buttonText: "Get Standard",
  },
  {
    name: "Premium",
    description:
      "The most comprehensive healthcare access for you and your family.",
    price: 199,
    features: [
      "Unlimited access to all doctors",
      "Unlimited consultations",
      "Secure online appointments",
      "Digital medical records",
      "Priority appointment booking",
      "Premium customer support",
    ],
    buttonText: "Get Premium",
  },
] satisfies PricingPlan[];
