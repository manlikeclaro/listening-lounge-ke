import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../models/menu-item';
import { InfoArea } from './-info-area/info-area';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    InfoArea
  ],
  templateUrl: './header.html',
  standalone: true,
  styleUrl: './header.css'
})
export class Header {
  @ViewChild(InfoArea) infoArea?: InfoArea;

  toggleInfoPanel() {
    this.infoArea?.toggleInfoArea();
  }

  logoSrc: string = 'assets/img/alt-logo.png';
  contactPhone: string = '+254 796 612 978';

  routes = {
    home: '/',
    aboutUs: '/about-us',
    services: '/services',
    // servicesDetails: '/services/:slug',
    team: '/team',
    teamDetails: '/team-details',
    events: '/events',
    appointment: '/appointment',
    blog: '/blog',
    blogDetails: '/blog-details',
    contact: '/contact'
  };

  menuItems: MenuItem[] = [
    {
      label: 'home',
      route: this.routes.home,
      submenu: []
    },
    {
      label: 'about',
      route: this.routes.aboutUs,
      submenu: []
    },
    {
      label: 'services',
      route: this.routes.services,
      submenu: [
        // { label: 'service details', route: this.routes.servicesDetails }
      ]
    },
    /*
     {
       label: 'pages',
       route: null,
       submenu: [
         { label: 'our team', route: this.routes.team },
         { label: 'team details', route: this.routes.teamDetails },
         { label: 'events and offers', route: this.routes.events },
         { label: 'appointment', route: this.routes.appointment }
       ]
     },
    */
    {
      label: 'blog',
      route: this.routes.blog,
      submenu: [
        /*
         { label: 'blog', route: this.routes.blog },
         { label: 'blog details', route: this.routes.blogDetails }
        */
      ]
    },
    {
      label: 'contact',
      route: this.routes.contact,
      submenu: []
    }
  ];
}
