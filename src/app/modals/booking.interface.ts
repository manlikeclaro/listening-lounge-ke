import { PricingPlan } from '../models/pricing-plan';

export interface Booking {
  plan: PricingPlan;
  name: string;
  email: string;
  phone: string;
  date: Date | null;
  time: string;
  notes?: string;
}
