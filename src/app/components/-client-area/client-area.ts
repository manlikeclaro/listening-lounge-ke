import { NgOptimizedImage, NgStyle } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-client-area',
  imports: [
    NgStyle,
    NgOptimizedImage
  ],
  templateUrl: './client-area.html',
  standalone: true,
  styleUrl: './client-area.css'
})
export class ClientArea implements AfterViewInit {

  ngAfterViewInit(): void {
    ($('.client__slider-active') as any).owlCarousel({
      loop: true,
      margin: 30,
      autoplay: false,
      autoplayTimeout: 3000,
      smartSpeed: 500,
      items: 6,
      navText: [
        '<button><i class="fa fa-angle-left"></i>PREV</button>',
        '<button>NEXT<i class="fa fa-angle-right"></i></button>'
      ],
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1 },
        767: { items: 2 },
        992: { items: 3 },
        1200: { items: 4 },
        1600: { items: 5 }
      }
    });
  }

  backgroundImage: string = 'assets/img/bg/pattern-3.jpg';

  clients = [
    { logo: 'assets/img/client/client-1.png', alt: 'Client 1', url: '#' },
    { logo: 'assets/img/client/client-2.png', alt: 'Client 2', url: '#' },
    { logo: 'assets/img/client/client-3.png', alt: 'Client 3', url: '#' },
    { logo: 'assets/img/client/client-4.png', alt: 'Client 4', url: '#' },
    { logo: 'assets/img/client/client-5.png', alt: 'Client 5', url: '#' }
  ];

}
