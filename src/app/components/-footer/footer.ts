import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../shared/service-data';

@Component({
  selector: 'app-footer',
  imports: [ FormsModule, RouterLink ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  standalone: true,
})
export class Footer {

  logoSrc: string = 'assets/img/alt-logo.png';


  subscriberEmail: string = '';
  subscribeSuccess: boolean = false;
  currentYear = new Date().getFullYear();
  // slogan: string = 'Unburden your mind. One conversation at a time.'; // alt slogan
  slogan: string = 'Unburden your mind — one safe conversation at a time, offload your thoughts and feel lighter.';

  socialLinks = [
    // {iconClass: 'fab fa-facebook-f', url: '#'},
    { iconClass: 'fab fa-tiktok', url: 'https://www.tiktok.com/@thelisteningloungeke' },
    { iconClass: 'fab fa-instagram', url: 'https://www.instagram.com/thelisteningloungeke/' },
    { iconClass: 'fab fa-twitter', url: '#' },
    // {iconClass: 'fab fa-pinterest-p', url: '#'},
    { iconClass: 'fab fa-linkedin-in', url: '#' }
  ];

  services = SERVICES;

  contactInfo = {
    address: 'Mt. Olive Street, Membley Estate, Nairobi, Kenya',
    items: [
      { label: 'Email', value: 'thelisteningloungeke@gmail.com' },
      { label: 'Phone', value: '+254 796 612 978' },
      { label: 'Website', value: 'www.thelisteningloungeke.co.ke' }
    ]
  };

  developer = {
    name: 'manlikeclaro',
    url: 'https://github.com/manlikeclaro'
  };

  footerLinks = [
    { label: 'Terms & Conditions', url: '/terms' },
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Support', url: '/support' }
  ];

  onSubscribe() {
    if (!this.subscriberEmail) return;

    // You can connect to an API here
    console.log('Subscribed with:', this.subscriberEmail);

    // Show confirmation message
    this.subscribeSuccess = true;

    // // Reset form after a delay (optional)
    // setTimeout(() => {
    //   this.subscriberEmail = '';
    //   this.subscribeSuccess = false;
    // }, 3000);
  }
}
