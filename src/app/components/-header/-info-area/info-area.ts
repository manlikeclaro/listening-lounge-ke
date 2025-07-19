import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-info-area',
  imports: [
    RouterLink
  ],
  templateUrl: './info-area.html',
  standalone: true,
  styleUrl: './info-area.css'
})
export class InfoArea implements AfterViewInit {

  ngAfterViewInit(): void {
    $('#mobile-menu-active').metisMenu();
  }

  closeInfoArea() {
    this.isInfoVisible = false;
  }

  toggleInfoArea() {
    this.isInfoVisible = !this.isInfoVisible;
  }

  logoSrc: string = 'assets/img/alt-logo.png';
  backgroundImage: string = 'assets/img/backgrounds/info-bg.jpg';
  isInfoVisible: boolean = false;

  aboutInfo = {
    title: 'Who We Are',
    description: `The Listening Lounge offers a safe, supportive space for people to release emotional weight. We're not therapists — just compassionate listeners ready to hear you out, judgment-free.`,
    linkText: 'Book a session',
    link: '/contact'
  };

  infoContact = [
    {
      icon: 'fas fa-map-marker-alt',
      text: 'Mt. Olive Street, Membley Estate, Nairobi, Kenya'
    },
    {
      icon: 'fas fa-phone',
      text: '+254 796 612 978'
    },
    {
      icon: 'fas fa-envelope-open',
      text: 'thelisteningloungeke@gmail.com'
    }
  ];

  menuList = [
    {
      label: 'Home',
      route: '/',
      submenu: [
        { label: 'Home Style One', route: '/' },
        { label: 'Home Style Two', route: '/index-2' },
        { label: 'Home Style Three', route: '/index-3' }
      ]
    },
    {
      label: 'About',
      route: '/about-us',
      submenu: [
        { label: 'About Us', route: '/about-us' },
        { label: 'About Me', route: '/about-me' }
      ]
    },
    {
      label: 'Services',
      route: '/services',
      submenu: [
        { label: 'Services', route: '/services' },
        { label: 'Service Details', route: '/services-details' }
      ]
    },
    {
      label: 'Cases',
      route: '/case',
      submenu: [
        { label: 'Case', route: '/case' },
        { label: 'Case Details', route: '/case-details' }
      ]
    },
    {
      label: 'Pages',
      route: null,
      submenu: [
        { label: 'Our Team', route: '/team' },
        { label: 'Team Details', route: '/team-details' },
        { label: 'Events and Offers', route: '/events' },
        { label: 'Appointment', route: '/appointment' }
      ]
    },
    {
      label: 'Blog',
      route: '/blog',
      submenu: [
        { label: 'Blog', route: '/blog' },
        { label: 'Blog Left Sidebar', route: '/blog-left-sidebar' },
        { label: 'Blog No Sidebar', route: '/blog-no-sidebar' },
        { label: 'Blog 2 Column', route: '/blog-2-col' },
        { label: 'Blog 2 Col Masonry', route: '/blog-2-col-mas' },
        { label: 'Blog 3 Column', route: '/blog-3-col' },
        { label: 'Blog 3 Col Masonry', route: '/blog-3-col-mas' },
        { label: 'Blog Details', route: '/blog-details' },
        { label: 'Details Left Sidebar', route: '/blog-details-left' },
        { label: 'Details Video', route: '/blog-details-video' },
        { label: 'Details Audio', route: '/blog-details-audio' },
        { label: 'Details Gallery', route: '/blog-details-gallery' }
      ]
    },
    {
      label: 'Contact',
      route: '/contact',
      submenu: []
    }
  ];
}
