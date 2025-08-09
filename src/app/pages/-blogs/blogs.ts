import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogs',
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './blogs.html',
  standalone: true,
  styleUrl: './blogs.css'
})
export class Blogs {

  blogPage = {
    bannerImage: 'assets/img/slider/slider-bg.jpg',
    breadcrumb: [
      { label: 'Home', url: '/' },
      { label: 'Blogs', url: null }
    ],
    heading: 'Latest Blogs'
  };

  allBlogs = [
    {
      slug: 'why-talking-helps',
      title: 'Why Talking Helps: The Science of Feeling Heard',
      author: 'Leila Kimani',
      authorSlug: 'leila-kimani',
      image: 'assets/img/blog/blog-1.jpg',
      date: new Date('2025-07-05'),
      tags: [ 'Emotional Support', 'Mental Wellness' ],
      excerpt: 'We explore the science behind why being heard lightens the emotional load and how connection helps you feel less alone.'
    },
    {
      slug: 'you-dont-need-fix',
      title: 'You Don’t Need Fixing — Just a Place to Be Real',
      author: 'Samuel Okoth',
      authorSlug: 'samuel-okoth',
      image: 'assets/img/blog/blog-2.jpg',
      date: new Date('2025-07-08'),
      tags: [ 'Empathy', 'Self-Acceptance' ],
      excerpt: 'Advice isn’t always what people want — sometimes a non-judgmental space to be real is enough to start feeling better.'
    },
    {
      slug: 'first-time-unburdening',
      title: 'My First Time Unburdening — What I Wish I Knew',
      author: 'Anonymous Story',
      authorSlug: 'anonymous-story',
      image: 'assets/img/blog/blog-3.jpg',
      date: new Date('2025-07-10'),
      tags: [ 'Real Stories', 'Emotional Release' ],
      excerpt: 'A personal account of opening up for the first time and the surprising relief that followed.'
    },
    {
      slug: 'not-therapy-but-real',
      title: 'It’s Not Therapy — But It’s Real Connection',
      author: 'Chris Muriuki',
      authorSlug: 'chris-muriuki',
      image: 'assets/img/blog/blog-1.jpg',
      date: new Date('2025-07-12'),
      tags: [ 'Connection', 'Safe Space' ],
      excerpt: 'How casual, compassionate listening can create meaningful connection — even outssluge formal therapy.'
    },
    {
      slug: 'offload-stress',
      title: 'Offload Stress Before It Builds Up',
      author: 'Joy Wambui',
      authorSlug: 'joy-wambui',
      image: 'assets/img/blog/blog-2.jpg',
      date: new Date('2025-07-03'),
      tags: [ 'Burnout', 'Daily Pressure' ],
      excerpt: 'Practical reasons to unburden early — and how small conversations can prevent burnout from piling up.'
    },
    {
      slug: 'its-okay-not-be-okay',
      title: 'It’s Okay Not to Be Okay — And Say It Out Loud',
      author: 'Kendi Mugo',
      authorSlug: 'kendi-mugo',
      image: 'assets/img/blog/blog-3.jpg',
      date: new Date('2025-06-30'),
      tags: [ 'Vulnerability', 'Emotional Honesty' ],
      excerpt: 'On the power of admitting struggle out loud and how vulnerability often leads to relief, not weakness.'
    }
  ];

  pagination = {
    current: 2,
    total: 3,
    pages: [ 1, 2, 3 ]
  };
}
