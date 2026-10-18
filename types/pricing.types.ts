export type PricingFeatureId =
  | "accessAll"
  | "accessUnlimited"
  | "consultations5"
  | "consultations15"
  | "consultationsUnlimited"
  | "secureAppointments"
  | "records"
  | "priority"
  | "support";

export type PricingPlan = {
  id: "basic" | "standard" | "premium";
  price: number;
  isPopular?: boolean;
  features: PricingFeatureId[];
};
