import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.html',
  standalone: true,
  styleUrl: './team.css'
})
export class Team {

  // Team data
  team = [
    {
      image: 'assets/img/team/team-1.jpg',
      name: 'Ristopher Givera',
      role: 'Lead Listener',
      email: 'ristopher@listeninglounge.co.ke',
      phone: '+254 700 123 456',
      socials: [
        { platform: 'facebook', url: 'https://facebook.com/ListeningLounge', icon: 'fab fa-facebook-f' },
        { platform: 'twitter', url: 'https://twitter.com/ListeningLounge', icon: 'fab fa-twitter' },
        { platform: 'instagram', url: 'https://instagram.com/listeninglounge', icon: 'fab fa-instagram' },
        { platform: 'linkedin', url: 'https://linkedin.com/company/the-listening-lounge', icon: 'fab fa-linkedin-in' }
      ]
    },
    {
      image: 'assets/img/team/team-2.jpg',
      name: 'Donnie Anderson',
      role: 'Senior Listener',
      email: 'donnie@listeninglounge.co.ke',
      phone: '+254 700 234 567',
      socials: [
        { platform: 'facebook', url: 'https://facebook.com/DonnieListening', icon: 'fab fa-facebook-f' },
        { platform: 'twitter', url: 'https://twitter.com/DonnieListening', icon: 'fab fa-twitter' },
        { platform: 'linkedin', url: 'https://linkedin.com/in/donnie-anderson', icon: 'fab fa-linkedin-in' }
      ]
    },
    {
      image: 'assets/img/team/team-3.jpg',
      name: 'Steves Musayin',
      role: 'Community Listener',
      email: 'steves@listeninglounge.co.ke',
      phone: '+254 700 345 678',
      socials: [
        { platform: 'instagram', url: 'https://instagram.com/steveslistens', icon: 'fab fa-instagram' },
        { platform: 'twitter', url: 'https://twitter.com/steveslistens', icon: 'fab fa-twitter' }
      ]
    }
  ];
}
