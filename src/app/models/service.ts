import { PricingPlan } from './pricing-plan';

export interface Service {
  label: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  content: string[];
  video: { background: string; url: string; };
  pricingPlans?: PricingPlan[];
}
