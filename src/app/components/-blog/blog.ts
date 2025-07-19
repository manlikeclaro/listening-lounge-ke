import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
  standalone: true,
})
export class Blog implements OnInit {

  displayedBlogs: any[] = [];

  ngOnInit(): void {
    this.displayedBlogs = this.getRandomBlogs(3);
  }

  private getRandomBlogs(count: number) {
    const shuffled = [ ...this.allBlogs ].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  section = {
    title: 'Every Single Update And Recent Story From Our Blog',
    subtitle: 'popular articles'
  };

  allBlogs = [
    {
      id: 'why-talking-helps',
      title: 'Why Talking Helps: The Science of Feeling Heard',
      author: 'Leila Kimani',
      authorSlug: 'leila-kimani',
      // image: 'assets/img/blog/why-talking-helps.jpg',
      image: 'assets/img/blog/blog-1.jpg',
      date: new Date('2025-07-05'),
      tags: [ 'Emotional Support', 'Mental Wellness' ]
    },
    {
      id: 'you-dont-need-fix',
      title: 'You Don’t Need Fixing — Just a Place to Be Real',
      author: 'Samuel Okoth',
      authorSlug: 'samuel-okoth',
      // image: 'assets/img/blog/you-dont-need-fix.jpg',
      image: 'assets/img/blog/blog-2.jpg',
      date: new Date('2025-07-08'),
      tags: [ 'Empathy', 'Self-Acceptance' ]
    },
    {
      id: 'first-time-unburdening',
      title: 'My First Time Unburdening — What I Wish I Knew',
      author: 'Anonymous Story',
      authorSlug: 'anonymous-story',
      // image: 'assets/img/blog/first-time-unburdening.jpg',
      image: 'assets/img/blog/blog-3.jpg',
      date: new Date('2025-07-10'),
      tags: [ 'Real Stories', 'Emotional Release' ]
    },
    {
      id: 'not-therapy-but-real',
      title: 'It’s Not Therapy — But It’s Real Connection',
      author: 'Chris Muriuki',
      authorSlug: 'chris-muriuki',
      // image: 'assets/img/blog/not-therapy-but-real.jpg',
      image: 'assets/img/blog/blog-1.jpg',
      date: new Date('2025-07-12'),
      tags: [ 'Connection', 'Safe Space' ]
    },
    {
      id: 'offload-stress',
      title: 'Offload Stress Before It Builds Up',
      author: 'Joy Wambui',
      authorSlug: 'joy-wambui',
      // image: 'assets/img/blog/offload-stress.jpg',
      image: 'assets/img/blog/blog-2.jpg',
      date: new Date('2025-07-03'),
      tags: [ 'Burnout', 'Daily Pressure' ]
    },
    {
      id: 'its-okay-not-be-okay',
      title: 'It’s Okay Not to Be Okay — And Say It Out Loud',
      author: 'Kendi Mugo',
      authorSlug: 'kendi-mugo',
      // image: 'assets/img/blog/its-okay-not-be-okay.jpg',
      image: 'assets/img/blog/blog-3.jpg',
      date: new Date('2025-06-30'),
      tags: [ 'Vulnerability', 'Emotional Honesty' ]
    }
  ];
}
