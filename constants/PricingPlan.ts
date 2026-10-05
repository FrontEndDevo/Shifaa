// Types:
import { PricingPlan } from "@/types/pricing.types";

// Lucide Icons:
import { DollarSign } from "lucide-react";

export const PRICING_PLAN = {
  heading: "One Payment. Access Every Doctor.",
  title: "Choose the healthcare plan that fits your needs",
  description:
    "Get access to our entire network of trusted doctors with a single payment. Choose the plan that works best for you and enjoy convenient healthcare access without subscribing to individual doctors.",
  icon: DollarSign,

  plans: [
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
  ] satisfies PricingPlan[],
};
