import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-form',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './contact-form.html',
  styleUrls: [ './contact-form.css' ],
  standalone: true,
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

  mapUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.976734034686!2d36.92111723818991!3d-1.1645770000000106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f393e324e15%3A0x537ec729fc7ca3de!2sMt.Olive%20Street%2C%20Ruiru!5e0!3m2!1sen!2ske!4v1753013132001!5m2!1sen!2ske';
  safeMapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  }

  responseMessage = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Contact submission:', this.contact);
      this.responseMessage = 'Thank you for reaching out. Someone from our support team will contact you shortly.';
      form.resetForm();
    } else {
      this.responseMessage = 'Please fill in all required fields.';
    }
  }
}
