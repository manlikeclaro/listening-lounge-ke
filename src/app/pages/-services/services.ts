import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../shared/service-data';

@Component({
  selector: 'app-services',
  imports: [ RouterLink ],
  templateUrl: './services.html',
  standalone: true,
  styleUrl: './services.css'
})
export class Services {
  bannerImage = 'assets/img/slider/slider-bg.jpg';

  services = SERVICES;

}
