import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
  standalone: true,
})
export class Pricing {
  @Input() pricingPlans: any;

  /*
   pricingPlans = [
     {
       title: 'Single Session',
       image: '/assets/img/pricing/pricing-1.jpg',
       price: 500,
       frequency: 'one-time',
       popular: false,
       description: 'A single 1-on-1 session to talk through anything on your mind. Ideal for a quick emotional reset or first-time experience.',
       buttonLabel: 'Book now',
       buttonUrl: '/book/single'
     },
     {
       title: 'Monthly Support',
       image: '/assets/img/pricing/pricing-3.jpg',
       price: 1000,
       frequency: 'monthly',
       popular: true,
       description: 'Includes 1 guided conversation per week. Best for those seeking regular emotional check-ins or light mental wellness support.',
       buttonLabel: 'Get started',
       buttonUrl: '/subscribe/monthly'
     },
     {
       title: 'Intensive Care',
       image: '/assets/img/pricing/pricing-2.jpg',
       price: 3000,
       frequency: 'monthly',
       popular: false,
       description: 'Up to 3 sessions every week. Designed for individuals needing consistent space to unpack deep emotional or mental burdens.',
       buttonLabel: 'Subscribe now',
       buttonUrl: '/subscribe/intensive'
     }
   ];
  */

}
