import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingModal } from '../../modals/-booking-modal/booking-modal';
import { PricingPlan } from '../../models/pricing-plan';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
  standalone: true,
})
export class Pricing {
  @Input() pricingPlans: any;

  constructor(private modalService: NgbModal) {
  }

  openBookingModal(plan: PricingPlan) {
    const modalRef = this.modalService.open(BookingModal, { size: 'lg' });
    modalRef.componentInstance.plan = plan;

    modalRef.closed.subscribe((booking) => {
      if (booking) {
        console.log('Final booking:', booking);
        // send to backend here
      }
    });
  }
}
