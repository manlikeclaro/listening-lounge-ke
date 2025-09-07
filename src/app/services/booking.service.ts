import { Injectable } from '@angular/core';
import * as EmailJS from 'emailjs-com';
import { environment } from '../../environments/environment';
import { Booking } from '../modals/booking.interface';
import { EmailService } from './email.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(
    private emailService: EmailService,
    private toastService: ToastService
  ) {
  }

  async makeBooking(booking: Booking) {
    /*
     const bookingDate = booking.date ? new Date(booking.date) : null;
     const params = {
       plan_title: booking.plan.title,
       plan_price: booking.plan.price,
       customer_name: booking.name,
       customer_email: booking.email,
       booking_date: bookingDate?.toLocaleDateString(),
       booking_time: booking.time,
       notes: booking.notes || 'N/A'
     };
    */ // TODO: Replace the above commented template in future revision to stop reusing contact form template

    const params = this.buildBookingParams(booking)

    // Send booking notification email to your team/admin
    try {
      await EmailJS.send(
        environment.emailJs.serviceId,
        environment.emailJs.templateId,
        params,
        environment.emailJs.publicKey
      );
      return await this.handleSuccess(booking, params);
    } catch (err) {
      return this.handleError(err);
    }

  }

  // Success handler
  private async handleSuccess(booking: Booking, params: any): Promise<void> {
    try {
      const bookingMessage =
        `
          Plan: ${ booking.plan.title }
          Price: ${ booking.plan.price || 'N/A' } / ${ booking.plan.frequency || 'N/A' }
          Date: ${ booking.date }
          Time: ${ booking.time }
          Notes: ${ booking.notes || 'N/A' }

          `.trim();

      return await this.emailService.sendAcknowledgment({
        sender_name: params.sender_name,
        sender_email: params.sender_email,
        sender_message: bookingMessage
      });
    } catch (err) {
      return console.error('Acknowledgment email failed:', err);
    }
  }

  // Error handler
  private handleError(err: any) {
    console.error('EmailJS Error:', err);
    this.toastService.showToast('⚠️ We couldn’t handle your booking at this time. Please try again later.', [ 'toast-error' ], 6000);
  }

  // Build the booking details for the email
  private buildBookingParams(booking: Booking) {
    const dateString = booking.date
      ? new Date(booking.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      : 'N/A';

    const timeString = booking.time || 'N/A';

    // Construct a nice multi-line message with all booking details
    const message =
      `
            🎉 New Booking Received!

            Plan Details:
            - Title: ${ booking.plan.title }
            - Price: ${ booking.plan.price || 'N/A' } / ${ booking.plan.frequency || 'N/A' }

            Customer Information:
            - Name: ${ booking.name }
            - Email: ${ booking.email }

            Booking Schedule:
            - Date: ${ dateString }
            - Time: ${ timeString }

            Additional Notes:
            ${ booking.notes || 'None' }

            Submitted at: ${ new Date().toLocaleString() }
            `;

    return {
      sender_name: booking.name,
      sender_email: booking.email,
      sender_phone: booking.phone,
      sender_message: message.trim(),
      submitted_at: new Date().toLocaleString()
    };
  }

}
