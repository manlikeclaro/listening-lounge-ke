import { Component } from '@angular/core';
import { Blog } from '../../components/-blog/blog';
import { ContactUs } from '../../components/-contact-us/contact-us';
import { Faq } from '../../components/-faq/faq';
import { FeaturesArea } from '../../components/-features-area/features-area';
import { HeroSlider } from '../../components/-hero-slider/hero-slider';
import { Pricing } from '../../components/-pricing/pricing';
import { Testimonials } from '../../components/-testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [
    HeroSlider,
    FeaturesArea,
    Faq,
    Pricing,
    ContactUs,
    Testimonials,
    Blog
  ],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.css'
})
export class Home {

}
