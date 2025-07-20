export interface PricingPlan {
  title: string;
  image: string;
  popular: boolean;
  price: string | null;
  frequency: string | null;
  description: string;
  buttonUrl: string;
  buttonLabel: string;
  priceNote?: string | null;
  actionType?: string;
}
