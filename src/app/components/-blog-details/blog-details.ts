import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Blog, BLOGS, SocialLink } from '../../shared/blog-data';

@Component({
  selector: 'app-blog-details',
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './blog-details.html',
  standalone: true,
  styleUrls: [
    './blog-details.css',
    '../../pages/-blogs/blogs.css'
  ],
})
export class BlogDetails implements OnInit {
  bannerImage = 'assets/img/slider/slider-bg.jpg';

  breadcrumbs = [
    { label: 'Home', route: '/' },
    { label: 'Blogs', route: '/blogs' },
    { label: '', route: null }
  ];

  blog!: Blog | undefined;
  allBlogs!: Blog[];
  popularBlogs!: Partial<Blog>[];
  authorSocialLinks!: SocialLink[] | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.blog = BLOGS.find(b => b.slug === slug);
      this.allBlogs = BLOGS;

      if (this.blog) {
        // update breadcrumb label
        this.breadcrumbs[2].label = this.blog.title;

        // store author's social links
        this.authorSocialLinks = this.blog.authorBio.socialLinks;

        // prepare sidebar feeds (exclude current)
        this.popularBlogs = BLOGS
          .filter(blog => blog.slug !== this.blog!.slug)
          .slice(0, 4)
          .map(blog => ({
            slug: blog.slug,
            sidebarImage: blog.sidebarImage,
            title: blog.title,
            date: blog.date
          }));
      }
    });
  }
}
