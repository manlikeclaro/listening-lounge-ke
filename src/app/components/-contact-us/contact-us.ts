import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  imports: [
    FormsModule
  ],
  templateUrl: './contact-us.html',
  styleUrls: [ './contact-us.css' ],
  standalone: true,
})
export class ContactUs {

  backgroundImage = 'assets/img/bg/pattern-3.jpg';

  contact = {
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  };

  mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.994183227277!2d36.92626707472435!3d-1.1645771988242697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f393e324e15%3A0x537ec729fc7ca3de!2sMt.Olive%20Street%2C%20Ruiru!5e0!3m2!1sen!2ske!4v1752587794387!5m2!1sen!2ske';
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
