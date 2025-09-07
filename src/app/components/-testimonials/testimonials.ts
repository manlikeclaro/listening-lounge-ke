import { AfterViewInit, Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
  standalone: true,
})
export class Testimonials implements AfterViewInit {

  ngAfterViewInit(): void {
    console.log('jQuery:', typeof $ !== 'undefined' ? $.fn.jquery : 'not loaded');
    console.log('Owl:', typeof $.fn.owlCarousel !== 'undefined' ? 'Loaded' : 'NOT loaded');

    // Optional: try initializing Owl manually
    $('.testimonial__slider').owlCarousel({
      loop: true,
      margin: 30,
      // nav: true,
      // rewind: true, // enables loop-like behavior even with fewer items
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        992: { items: 2 }
      }
    });
  }

  testimonialBg = 'assets/img/bg/pattern-2.jpg';

  testimonials = [
    {
      name: 'Achieng Otieno',
      title: 'University Student',
      avatar: '/assets/img/testimonial/achieng-atieno.png',
      rating: 5,
      message: 'Sometimes you just need a safe space to speak freely. These sessions gave me room to unload without pressure, and I walked away feeling heard, understood, and lighter each time we talked.'
    },
    {
      name: 'Mwangi Kamau',
      title: 'Small Business Owner',
      avatar: '/assets/img/testimonial/mwangi-kamau.png',
      rating: 5,
      message: 'I didn’t realize how much I’d been carrying until I finally talked. The space was open and non-judgmental, and the clarity I gained gave me perspective and a renewed sense of calm I didn’t expect.'
    },
    {
      name: 'Fatuma Hassan',
      title: 'Community Volunteer',
      avatar: '/assets/img/testimonial/fatuma-hassan.png',
      rating: 4,
      message: 'It’s not therapy, but it’s something just as valuable. A thoughtful, no-pressure environment where you’re free to speak your mind and walk away with a clearer head and a more peaceful heart.'
    }
  ];

}
