import { NgStyle } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-hero-slider',
  imports: [
    RouterLink,
    NgStyle
  ],
  templateUrl: './hero-slider.html',
  standalone: true,
  styleUrl: './hero-slider.css'
})
export class HeroSlider implements AfterViewInit {

  ngAfterViewInit(): void {
    $('.slider-active').slick({
      arrows: false, // toggle arrows
      // prevArrow: '<button class="slick-prev slick-arrow"></button>',
      // nextArrow: '<button class="slick-prev slick-arrow></button>',
      autoplay: true,
      autoplaySpeed: 3000,
    });
  }

  backgroundImage: string = 'assets/img/slider/slider-bg.jpg';

  sliders = [
    {
      subtitle: 'Unburden your mind',
      title: `Offload your thoughts. Feel lighter.`,
      buttonLabel: 'Start Talking',
      buttonRoute: '/contact',
      image: 'assets/img/slider/slider-1.jpg'
    },
    // {
    //   subtitle: 'Unburden your mind',
    //   title: `Offload your thoughts. Feel lighter.`,
    //   buttonLabel: 'Start Talking',
    //   buttonRoute: '/contact',
    //   image: 'assets/img/slider/slider-1.jpg'
    // },
  ];
}
