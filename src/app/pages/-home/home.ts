import { Component } from '@angular/core';
import { BlogSection } from '../../components/-blog-section/blog-section';
import { ContactForm } from '../../components/-contact-form/contact-form';
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
    ContactForm,
    Testimonials,
    BlogSection
  ],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.css'
})
export class Home {

}
