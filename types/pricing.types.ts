export type PricingPlan = {
  name: string;
  description: string;
  price: number;
  isPopular?: boolean;
  features: string[];
  buttonText: string;
};
