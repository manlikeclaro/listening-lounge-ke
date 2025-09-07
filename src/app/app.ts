import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Footer } from './components/-footer/footer';
import { Header } from './components/-header/header';

@Component({
  imports: [ RouterOutlet, Header, Footer ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html'
})
export class App {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0 });
      }
    });
  }
}
