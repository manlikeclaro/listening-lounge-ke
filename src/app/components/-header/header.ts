import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../models/menu-item';
import { SERVICES } from '../../shared/service-data';
import { InfoArea } from './-info-area/info-area';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, InfoArea ],
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
    servicesDetails: (slug: string) => `/services/${ slug }`,
    team: '/team',
    teamDetails: '/team-details',
    events: '/events',
    appointment: '/appointment',
    blogs: '/blogs',
    contact: '/contact'
  };

  menuItems: MenuItem[] = [
    {
      label: 'home',
      route: this.routes.home,
      submenu: []
    },
    {
      label: 'services',
      route: this.routes.services,
      submenu: SERVICES.map(service => ({
        label: service.label,
        route: this.routes.servicesDetails(service.slug)
      }))
    },
    {
      label: 'about',
      route: this.routes.aboutUs,
      submenu: []
    },
    {
      label: 'blogs',
      route: this.routes.blogs
    },
    {
      label: 'contact',
      route: this.routes.contact
    }
  ];
}
