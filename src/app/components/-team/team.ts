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
      name: 'Tracy Kamere',
      role: 'Lead Listener',
      email: 'tracy@listeninglounge.co.ke',
      phone: '+254 700 456 789',
      socials: [
        { platform: 'facebook', url: 'https://facebook.com/tracykamere', icon: 'fab fa-facebook-f' },
        { platform: 'twitter', url: 'https://twitter.com/tracykamere', icon: 'fab fa-twitter' },
        { platform: 'instagram', url: 'https://instagram.com/tracykamere', icon: 'fab fa-instagram' },
        { platform: 'linkedin', url: 'https://linkedin.com/in/tracy-kamere', icon: 'fab fa-linkedin-in' }
      ]
    },
    {
      image: 'assets/img/team/team-2.jpg',
      name: 'Linda Kamere',
      role: 'Senior Listener',
      email: 'linda@listeninglounge.co.ke',
      phone: '+254 700 567 890',
      socials: [
        { platform: 'facebook', url: 'https://facebook.com/lindakamere', icon: 'fab fa-facebook-f' },
        { platform: 'twitter', url: 'https://twitter.com/lindakamere', icon: 'fab fa-twitter' },
        { platform: 'linkedin', url: 'https://linkedin.com/in/linda-kamere', icon: 'fab fa-linkedin-in' }
      ]
    }
  ];
}
