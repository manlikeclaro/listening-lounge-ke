import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOGS } from '../../shared/blog-data';

@Component({
  selector: 'app-blog',
  imports: [ RouterLink, DatePipe ],
  templateUrl: './blog-section.html',
  styleUrl: './blog-section.css',
  standalone: true,
})
export class BlogSection implements OnInit {

  allBlogs = BLOGS;
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

}
