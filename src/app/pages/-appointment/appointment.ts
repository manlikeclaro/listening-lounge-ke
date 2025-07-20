import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactForm } from '../../components/-contact-form/contact-form';

@Component({
  selector: 'app-appointment',
  imports: [
    FormsModule,
    RouterLink,
    ContactForm,
  ],
  templateUrl: './appointment.html',
  standalone: true,
  styleUrls: [ './appointment.css', '../../components/-contact-form/contact-form.css' ]
})
export class Appointment {

  bannerImage = 'assets/img/slider/slider-bg.jpg';

  breadcrumb = [
    { label: 'Home', url: '/' },
    { label: 'Contact', url: null }
  ];

  openingHours = [
    { day: 'Monday', hours: '8:00 AM – 9:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM – 9:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM – 9:00 PM' },
    { day: 'Thursday', hours: '8:00 AM – 9:00 PM' },
    { day: 'Friday', hours: '8:00 AM – 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM – 5:00 PM' },
    // { day: 'Sunday', hours: '10:00 AM – 2:00 PM' }
  ];


  contactInfo = {
    phone: '+254 796 612 978',
    address: 'Mt. Olive Street, Membley Estate, Nairobi, Kenya',
    email: 'thelisteningloungeke@gmail.com',
    website: 'www.thelisteningloungeke.co.ke'
  };
}
