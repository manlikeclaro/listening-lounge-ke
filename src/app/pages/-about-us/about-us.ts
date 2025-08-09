import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Team } from '../../components/-team/team';

@Component({
  selector: 'app-about-us',
  imports: [
    RouterLink,
    Team
  ],
  templateUrl: './about-us.html',
  standalone: true,
  styleUrls: [ `./about-us.css` ],
})
export class AboutUs {

  bannerImage = 'assets/img/slider/slider-bg.jpg';

  breadcrumb = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: null }
  ];

  // About section
  aboutBgImage = 'assets/img/about/about-2.jpg';
  aboutTitle = 'Feel Lighter, One Conversation at a Time';
  aboutSubtitle = 'Welcome to The Listening Lounge';
  aboutText = `The Listening Lounge is a safe, non-clinical space to unburden your mind. We're not therapists — our trained listeners don't diagnose or provide medical advice — but they offer a compassionate,
                      non-judgmental ear. Your first session is free. Conversations are confidential and never shared without your permission. You can talk about anything: stress, relationships, work, or simply the need to vent.`;

  aboutExperience = 'Founded in 2020 — Community Listening Platform';
  aboutExperienceText = `Since 2020 we've connected thousands of people with listeners who practice active, empathetic listening. While this is not a substitute for professional therapy, many users report
                                feeling relief, clarity, and renewed energy after a single session. Our listeners are trained in listening skills, boundaries, and confidentiality.`;

  // Author / Founder
  aboutFounder = {
    image: 'assets/img/about/author.png',
    name: 'Aisha Mwangi',
    role: 'Founder & Community Lead',
    bio: `Aisha started The Listening Lounge to create an accessible place for people to speak freely and feel heard. She focuses on community safety, listener training, and privacy policies.`
  };

}
