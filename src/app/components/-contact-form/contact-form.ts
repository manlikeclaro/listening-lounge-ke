import { NgClass } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as EmailJS from 'emailjs-com';
import { environment } from '../../../environments/environment';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact-form',
  imports: [ FormsModule, NgClass ],
  templateUrl: './contact-form.html',
  styleUrls: [ './contact-form.css' ],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class ContactForm {
  @Input() smallerPaddingBottom: boolean = false;

  backgroundImage = 'assets/img/bg/pattern-3.jpg';

  contact = {
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  };

  mapUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.8503936919715!2d36.8420864269137!3d-1.26209217615252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xfef85c768949e474!2sPRQR%2B6P7%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1757157533064!5m2!1sen!2ske';
  safeMapUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private toastService: ToastService
  ) {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  }

  isSubmitting = false;

  onSubmit(form: any) {
    if (!form.valid) {
      this.toastService.showToast('⚠️ Please complete all required fields before submitting the form.', [ 'toast-error' ], 5000);
      return;
    }

    const emailJsParams = this.buildParams();
    this.sendEmail(form, emailJsParams);
  }

  // Build params for EmailJS
  private buildParams() {
    return {
      sender_name: this.contact.name,
      sender_email: this.contact.email,
      sender_phone: this.contact.phone || 'N/A',
      sender_message: this.contact.message,
      submitted_at: new Date().toLocaleString()
    };
  }

  // Send email to team
  private sendEmail(form: any, params: any) {
    this.isSubmitting = true;

    EmailJS.send(
      environment.emailJs.serviceId,
      environment.emailJs.templateId,
      params,
      environment.emailJs.publicKey
    )
      .then(() => this.handleSuccess(form, params))
      .catch((err) => this.handleError(err))
      .finally(() => (this.isSubmitting = false));
  }

  // Success handler
  private handleSuccess(form: any, params: any) {
    this.toastService.showToast('✅ Your message has been sent successfully. Our support team will get back to you soon.', [ 'toast-success' ], 5000);
    this.sendAcknowledgment(params);
    form.resetForm();
  }

  // Error handler
  private handleError(err: any) {
    console.error('EmailJS Error:', err);
    this.toastService.showToast('⚠️ We couldn’t send your message at this time. Please try again later.', [ 'toast-error' ], 6000);
  }

  // Send acknowledgment email to sender
  private sendAcknowledgment(params: any) {
    const ackParams = {
      to_name: params.sender_name,
      to_email: params.sender_email,
      user_message: params.sender_message
    };

    EmailJS.send(
      environment.emailJs.serviceId,
      environment.emailJs.templateAckId,
      ackParams,
      environment.emailJs.publicKey
    ).catch((err) => console.error('Acknowledgment email failed:', err));
  }
}
