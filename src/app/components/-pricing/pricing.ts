import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingModal } from '../../modals/-booking-modal/booking-modal';
import { PricingPlan } from '../../models/pricing-plan';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class Pricing {
  @Input() pricingPlans: any;

  constructor(
    private modalService: NgbModal,
    private toastService: ToastService
  ) {
  }

  openBookingModal(plan: PricingPlan) {
    const modalRef = this.modalService.open(BookingModal, { size: 'lg' });
    modalRef.componentInstance.plan = plan;

    modalRef.closed.subscribe((booking) => {
      if (booking) {
        console.log('Final booking:', booking);
        // send to backend here

        this.toastService.showToast('✅ Your booking has been submitted successfully. Our support team will get back to you soon.', [ 'toast-success' ], 5000)
      }
    });
  }
}
