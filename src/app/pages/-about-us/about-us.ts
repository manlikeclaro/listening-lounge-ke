import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Team } from '../../components/-team/team';

@Component({
  selector: 'app-about-us',
  imports: [ RouterLink, Team ],
  templateUrl: './about-us.html',
  standalone: true,
  styleUrls: [ `./about-us.css` ],
})
export class AboutUs {

  selectedFounder: any;

  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random() * this.aboutFounder.length);
    this.selectedFounder = this.aboutFounder[randomIndex];
  }

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

  aboutExperience = 'Founded in 2025 — Community Listening Platform';
  aboutExperienceText = `Born in 2025, The Listening Lounge was created to make heartfelt conversations accessible to everyone. Since then, we've connected people from all walks of life with listeners who practice active, empathetic listening.
                            While this is not a substitute for professional therapy, many users share that they feel lighter, clearer, and more energized after just one session. Our mission is simple: to restore the human power of listening in a fast, noisy world.`;

  // Author / Founder
  aboutFounder = [
    {
      image: 'assets/img/about/author.png',
      name: 'Tracy Kamere',
      role: 'Co-Founder & Program Coordinator',
      bio: `Tracy co-founded The Listening Lounge in 2025 with a vision to create a safe, supportive space where anyone can share openly. She focuses on program development and listener training.`
    },
    {
      image: 'assets/img/about/author.png',
      name: 'Linda Kamere',
      role: 'Co-Founder & Engagement Lead',
      bio: `Linda co-founded The Listening Lounge in 2025 to make empathetic listening a cornerstone of community well-being. She leads initiatives that bring listening programs into schools and workplaces.`
    }
  ];

}
