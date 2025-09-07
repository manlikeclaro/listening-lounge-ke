import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PricingPlan } from '../../models/pricing-plan';
import { Booking } from '../booking.interface';

@Component({
  imports: [ ReactiveFormsModule ],
  selector: 'app-booking-modal',
  standalone: true,
  styleUrls: [ './booking-modal.css' ],
  templateUrl: './booking-modal.html'
})
export class BookingModal implements OnInit {
  @Input() plan!: PricingPlan;
  bookingForm: FormGroup;

  today: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {
    this.bookingForm = this.formBuilder.group({
      name: [ '', Validators.required ],
      email: [ '', [ Validators.required, Validators.email ] ],
      date: [ null, Validators.required ],
      time: [ null, Validators.required ],
      notes: [ '' ]
    });
  }

  ngOnInit(): void {
    this.today = new Date().toISOString().split('T')[0];

    // Attach custom validator for date+time
    this.bookingForm.setValidators(this.futureDateTimeValidator);
  }

  // Custom Validator: prevent past date/time
  futureDateTimeValidator = (form: AbstractControl): ValidationErrors | null => {
    const date = form.get('date')?.value;
    const time = form.get('time')?.value;

    if (!date || !time) return null;

    const selected = new Date(`${ date }T${ time }`);
    const now = new Date();

    return selected <= now ? { pastDateTime: true } : null;
  };

  submitBooking() {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    const booking: Booking = {
      plan: this.plan,
      ...this.bookingForm.value
    };

    console.log('Booking submitted:', booking);
    this.activeModal.close(booking);
  }

  close() {
    this.activeModal.dismiss();
  }

  protected readonly print = print;
}
