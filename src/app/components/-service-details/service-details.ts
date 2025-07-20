import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Pricing } from '../-pricing/pricing';
import { PricingPlan } from '../../models/pricing-plan';
import { SERVICES } from '../../shared/service-data';

@Component({
  selector: 'app-service-details',
  imports: [
    RouterLink,
    Pricing
  ],
  templateUrl: './service-details.html',
  standalone: true,
  styleUrls: [
    './service-details.css',
    '../../pages/-services/services.css'
  ]
})
export class ServiceDetails implements OnInit {

  allServices: any;
  service: any;
  servicePricingPlans!: PricingPlan[];

  serviceTitle!: string;
  serviceDescription!: string;
  serviceContent!: string;
  serviceContent2!: string;
  serviceImage!: string;
  serviceVideoUrl!: string;
  serviceVideoBackground!: string;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.service = SERVICES.find(s => s.slug === slug);
      this.allServices = SERVICES;

      if (this.service) {
        this.breadcrumbs[2].label = this.service.label;

        this.serviceTitle = this.service.label;
        this.serviceDescription = this.service.description;
        this.serviceContent = this.service.content[0];
        this.serviceContent2 = this.service.content[1];
        this.serviceImage = this.service.image;
        this.serviceVideoUrl = this.service.video.url;
        this.serviceVideoBackground = this.service.video.background;

        this.servicePricingPlans = this.service.pricingPlans || [];
      }
    });
  }

  bannerImage = 'assets/img/slider/slider-bg.jpg';

  breadcrumbs = [
    { label: 'Home', route: '/' },
    { label: 'Services', route: '/services' },
    { label: '', route: null }
  ];

  caseInfo = [
    { label: 'Patient', value: 'Justina Robert' },
    { label: 'Mentor', value: 'Daniel Riquest' },
    { label: 'Case', value: 'Couple Problem' },
    { label: 'Result', value: 'Happy Patient' },
    { label: 'Treatment Cost', value: '$700' },
    { label: 'Total Duration', value: '5 Months' }
  ];

  teamMember = {
    name: 'Donnie Anderson',
    title: 'Sr. Psychologist',
    email: 'donniebere@gmail.com',
    phone: '230-235-5020',
    image: 'assets/img/case/details/case-details-person.jpg',
    socials: [
      { icon: 'fab fa-facebook-f', url: '#' },
      { icon: 'fab fa-twitter', url: '#' },
      { icon: 'fab fa-pinterest-p', url: '#' },
      { icon: 'fab fa-linkedin-in', url: '#' }
    ]
  };

  supportBanner = {
    backgroundImage: 'assets/img/services/services-support.jpg',
    text: 'Have Any Query?',
    linkText: 'contact now',
    link: '/contact'
  };

  workingProcess = {
    intro: `Elit adipiscing fermentum suscipit ornare lorem diam imperdiet lobortis...`,
    images: [
      'assets/img/case/details/case-details-sm-1.jpg',
      'assets/img/case/details/case-details-sm-2.jpg',
      'assets/img/case/details/case-details-sm-3.jpg',
      'assets/img/case/details/case-details-sm-4.jpg'
    ]
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
