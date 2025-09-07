import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import { Blog, BLOGS } from '../../shared/blog-data';
import 'aos/dist/aos.css'; // import styles


@Component({
  imports: [ RouterLink, DatePipe ],
  selector: 'app-blogs',
  standalone: true,
  styleUrl: './blogs.css',
  templateUrl: './blogs.html'
})
export class Blogs implements OnInit {

  @ViewChild('blogContainer') blogContainer!: ElementRef;

  blogPage = {
    bannerImage: 'assets/img/slider/slider-bg.jpg',
    breadcrumb: [
      { label: 'Home', url: '/' },
      { label: 'Blogs', url: null }
    ],
    heading: 'Latest Blogs'
  };

  allBlogs = BLOGS;
  visibleBlogs: Blog[] = [];

  blogsPerPage = 6;
  pagination = {
    current: 1,
    total: 0,
    pages: [] as number[]
  };

  ngOnInit() {
    // Sort all blogs by date descending (most recent first)
    this.allBlogs = [ ...BLOGS ].sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );

    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: false, // animate each time a card enters
    });

    this.setupPagination();
    this.updateVisibleBlogs();
  }

  setupPagination() {
    this.pagination.total = Math.ceil(this.allBlogs.length / this.blogsPerPage);
    this.pagination.pages = Array.from({ length: this.pagination.total }, (_, i) => i + 1);
  }

  updateVisibleBlogs() {
    const start = (this.pagination.current - 1) * this.blogsPerPage;
    const end = start + this.blogsPerPage;
    this.visibleBlogs = this.allBlogs.slice(start, end);

    // trigger staggered animation for new cards only
    setTimeout(() => AOS.refreshHard(), 50);

    // scroll to top of blog container smoothly
    if (this.blogContainer) {
      const top = this.blogContainer.nativeElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ behavior: 'smooth', top: top - 125 });
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.pagination.total) {
      this.pagination.current = page;
      this.updateVisibleBlogs();
    }
  }

  prevPage() {
    this.goToPage(this.pagination.current - 1);
  }

  nextPage() {
    this.goToPage(this.pagination.current + 1);
  }
}
