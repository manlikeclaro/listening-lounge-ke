import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../shared/service-data';

@Component({
  selector: 'app-features-area',
  imports: [
    RouterLink,
    NgStyle
  ],
  templateUrl: './features-area.html',
  standalone: true,
  styleUrl: './features-area.css'
})
export class FeaturesArea {

  services = SERVICES;

}
