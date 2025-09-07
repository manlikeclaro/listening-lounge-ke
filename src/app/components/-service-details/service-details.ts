import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Pricing } from '../-pricing/pricing';
import { Service } from '../../models/service';
import { SERVICES } from '../../shared/service-data';

@Component({
  imports: [ RouterLink, Pricing ],
  selector: 'app-service-details',
  standalone: true,
  styleUrls: [ './service-details.css' ],
  templateUrl: './service-details.html'
})
export class ServiceDetails implements OnInit {

  allServices: Service[] = SERVICES;
  service: Service | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.service = this.allServices.find(s => s.slug === slug);

      if (this.service) {
        this.breadcrumbs[2].label = this.service.label;
      }
    });
  }

  bannerImage = 'assets/img/slider/slider-bg.jpg';

  breadcrumbs = [
    { label: 'Home', route: '/' },
    { label: 'Services', route: '/services' },
    { label: '', route: null }
  ];

  supportBanner = {
    backgroundImage: '/assets/img/services/services-support.jpg',
    text: 'Have Any Query?',
    linkText: 'contact now',
    link: '/contact'
  };

  testimonials = [
    {
      message: `Malesuada imperdiet commodo nostra taciti neque arcu in sem...`,
      name: 'Eleonora Morgan',
      title: 'CEO & Founder',
      avatar: 'assets/img/testimonial/person-1.png'
    },
    {
      message: `Malesuada imperdiet commodo nostra taciti neque arcu in sem...`,
      name: 'Jeso Smith',
      title: 'CEO & Founder',
      avatar: 'assets/img/testimonial/person-2.png'
    },
    {
      message: `Malesuada imperdiet commodo nostra taciti neque arcu in sem...`,
      name: 'Salim Rana',
      title: 'CEO & Founder',
      avatar: 'assets/img/testimonial/person-3.png'
    }
  ];
}
