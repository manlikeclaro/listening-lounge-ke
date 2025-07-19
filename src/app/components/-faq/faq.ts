import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrls: [ './faq.css' ],
  standalone: true,
})
export class Faq {

  activeIndex = -1;
  backgroundImage = 'assets/img/faq/faq-img-2.jpg';

  faqs = [
    {
      question: 'What exactly is this service?',
      answer: `We're a safe space where you can talk openly and honestly with a real person. We're not therapists, but we offer a compassionate, unbiased ear when you need to unburden your mind.`
    },
    {
      question: 'Are you licensed therapists?',
      answer: `No, we are not licensed therapists. Our listeners are trained in empathetic, non-judgmental communication but do not provide medical or psychological advice. Think of us as a trusted friend when you need to let something out.`
    },
    {
      question: 'Is the first session really free?',
      answer: `Yes! Your first session is completely free—no strings attached. We believe everyone deserves to feel lighter, even if it's just for one conversation.`
    },
    {
      question: 'Is what I say kept private?',
      answer: `Absolutely. We take your privacy seriously. Your conversations are confidential and will never be shared without your permission.`
    },
    {
      question: 'What kind of topics can I talk about?',
      answer: `Anything that's on your mind. Whether it's stress at work, relationship struggles, self-doubt, or just the need to vent — you're safe to speak freely here.`
    },
    {
      question: 'How do I book a session?',
      answer: `Booking is simple — just head to our scheduling page, choose a time that works for you, and you're all set. Your first session is free, and we’ll guide you from there.`
    }
  ];
}
