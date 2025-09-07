export interface PricingPlan {
  title: string;
  image: string;
  popular: boolean;
  price: string | null;
  frequency: 'session' | 'day' | 'month' | 'quarter';
  description: string;
  buttonUrl: string;
  buttonLabel: string;
  priceNote: string | null;
  actionType: string;
}

export interface ServiceVideo {
  background: string;
  url: string;
}

export interface Service {
  label: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  content: string[];
  video: ServiceVideo;
  pricingPlans: PricingPlan[];
}

export const SERVICES: Service[] = [
  {
    label: 'Individual Support',
    slug: 'individual-support',
    description: 'One-on-one listening sessions offering a non-judgmental space to release and reflect.',
    icon: 'flaticon-heart',
    image: 'assets/img/case/details/individual-support.jpg',
    content: [
      `Our Individual Support sessions are designed for those moments in life when everything feels too heavy — when your thoughts race,
      your chest tightens, and you're left wondering if anyone truly understands. In these deeply personal, one-on-one sessions, we offer
      more than just a conversation. We offer presence. You're invited into a space where you don’t have to perform, explain, or justify
      how you feel. Whether you’re overwhelmed by work, struggling with a personal decision, experiencing grief, or simply feeling the weight
      of being human — you’ll be met with warmth, empathy, and quiet understanding.`,

      `Our listeners are trained to hold space in a way that allows you to slow down, untangle your emotions, and make sense of what's swirling
      inside. These aren’t therapy sessions, and they’re not lectures — they're emotional pit stops. A pause. A breath. A place to say the things
      you’ve been holding back, or even just sit in silence with someone who gets it. The power of being heard without interruption or interpretation
      cannot be overstated — it can bring clarity, emotional release, and sometimes, the first real sense of peace you’ve felt in a while. You’re
      not alone here. This is your space to simply be.`
    ],
    video: {
      background: 'assets/img/case/details/case-details-video.jpg',
      url: 'https://www.youtube.com/watch?v=9L_LlIwINSs' // Mindfulness meditation for emotional clarity
    },
    pricingPlans: [
      {
        title: '15-Minute Check-In',
        image: 'assets/img/pricing/individual-support/15min-checkin.jpg',
        popular: false,
        price: 'KSH 299',
        frequency: 'session',
        description: 'Perfect for when you just need to breathe and be heard. A quick emotional reset for moments of stress, frustration, or overwhelm — without the need for long explanations.',
        buttonUrl: '/book/15min-checkin',
        buttonLabel: 'Book Now',
        priceNote: null,
        actionType: 'book'
      },
      {
        title: '30-Minute Deep Dive',
        image: 'assets/img/pricing/individual-support/30min-deepdive.jpg',
        popular: true,
        price: 'KSH 499',
        frequency: 'session',
        description: 'A space to unravel emotional knots. Whether it’s a recent event or long-standing tension, this session invites you to explore and express what’s beneath the surface.',
        buttonUrl: '/book/30min-deepdive',
        buttonLabel: 'Book Now',
        priceNote: null,
        actionType: 'book'
      },
      {
        title: '60-Minute Unwind',
        image: 'assets/img/pricing/individual-support/60min-unwind.jpg',
        popular: false,
        price: 'KSH 999',
        frequency: 'session',
        description: 'An uninterrupted hour to unload emotional weight, reconnect with yourself, or simply exist in a space of non-judgmental presence. Ideal for deeper reflection or emotional processing.',
        buttonUrl: '/book/60min-unwind',
        buttonLabel: 'Book Now',
        priceNote: null,
        actionType: 'book'
      }
    ]
  },
  {
    label: 'Community Circles',
    slug: 'community-circles',
    description: 'Group support sessions designed for shared experiences, empathy, and collective relief.',
    icon: 'flaticon-family',
    image: 'assets/img/case/details/community-circles.jpg',
    content: [
      `Community Circles are safe, facilitated group sessions where strangers quickly become allies in vulnerability. Here, individuals gather to share
      experiences, emotions, and insights — not for advice or debate, but for connection. Each circle begins with grounding and intention-setting, and
      what follows is a space where participants can share what’s been on their mind, respond with quiet empathy, and bear witness to the strength and struggle
      of others. Whether it’s anxiety, burnout, self-doubt, loneliness, or simply the need to speak without being judged — everything is welcome here.`,

      `This experience is powerful because it reminds us that we’re not isolated in our emotions. As others speak, you begin to hear echoes of your own
      thoughts and feelings. The resonance builds a kind of quiet courage — a feeling that if they can open up, so can you. Our facilitators guide the flow
      gently, ensuring everyone feels seen and respected. No one is required to speak, but all are encouraged to be present. These circles are more than just
      conversations — they’re collective exhalations, emotional reset points, and affirmations of our shared humanity. Whether you join once or make it a
      regular ritual, our Community Circles exist to remind you: you don’t have to carry it all alone.`
    ],
    video: {
      background: 'assets/img/case/details/case-details-video.jpg',
      url: 'https://www.youtube.com/watch?v=iCvmsMzlF7o' // Group healing and vulnerability talk (Brené Brown-style)
    },
    pricingPlans: [
      {
        title: 'Safe Space Group Session',
        image: 'assets/img/pricing/community-circles/group-session.jpg',
        popular: true,
        price: 'KSH 2,499',
        frequency: 'session',
        description: 'A facilitated 1-hour circle for up to 5 people to reflect, release, and reconnect. Ideal for close friends, peer support, or small community groups seeking a space to be vulnerable together.',
        buttonUrl: '/request/group-session',
        buttonLabel: 'Book Now',
        priceNote: 'From Ksh 2,500',
        actionType: 'request'
      },
      {
        title: 'Youth & Student Plan',
        image: 'assets/img/pricing/community-circles/youth-support.jpg',
        popular: false,
        price: null,
        frequency: 'session',
        description: 'A compassionate space for young people navigating school, identity, or emotional pressure. This plan is tailored for educational institutions seeking to support student mental well-being through accessible group support.',
        buttonUrl: '/contact/youth-support',
        buttonLabel: 'Contact Us',
        priceNote: 'Custom Quote',
        actionType: 'contact'
      },
      {
        title: 'NGO / Wellness Partner Plan',
        image: 'assets/img/pricing/community-circles/ngo.jpg',
        popular: false,
        price: null,
        frequency: 'month',
        description: 'Designed for organizations aiming to provide structured emotional support within their communities. Flexible, mission-aligned partnerships for long-term, trauma-informed impact.',
        buttonUrl: '/partner/ngo',
        buttonLabel: 'Partner With Us',
        priceNote: 'Custom Quote',
        actionType: 'partner'
      }
    ]
  },
  {
    label: 'Corporate Engagement',
    slug: 'corporate-engagement',
    description: 'Tailored sessions for teams to promote emotional health and open communication at work.',
    icon: 'flaticon-support-1',
    image: 'assets/img/case/details/corporate-engagement.jpg',
    content: [
      `Work stress is real — and for many people, it's a silent crisis. Deadlines, unspoken tensions, unclear communication, and the constant pressure
      to perform can quietly erode mental well-being over time. Our Corporate Engagement program introduces emotional support into the workplace in a way
      that feels natural, inclusive, and transformative. Whether it’s through one-on-one listening sessions for staff, facilitated group check-ins, or
      themed emotional wellness workshops, we partner with companies to build a healthier internal culture — one where people feel seen, safe, and supported.`,

      `What makes our approach different is our emphasis on emotional permission. We help organizations move beyond generic wellness slogans and toward
      real emotional safety, where speaking up doesn’t feel risky. These sessions create bridges between teams, encourage empathetic leadership, and promote
      psychological resilience. Whether you're a small business, a startup navigating burnout, or a large organization aiming to support your people at scale,
      we tailor every engagement to fit your team’s dynamic. Emotionally well teams are more collaborative, creative, and committed — and it all starts with listening.`
    ],
    video: {
      background: 'assets/img/case/details/case-details-video.jpg',
      url: 'https://www.youtube.com/watch?v=xVs4zho8srY' // Emotional intelligence and leadership in workplace
    },
    pricingPlans: [
      {
        title: 'Monthly Staff Check-Ins',
        image: 'assets/img/pricing/corporate-engagement/monthly-checkins.jpg',
        popular: false,
        price: 'KSH 49,999',
        frequency: 'month',
        description: 'Ongoing, confidential 1-on-1 listener sessions for employees to release stress, prevent burnout, and feel seen at work. Build a psychologically safe culture — one person at a time.',
        buttonUrl: '/enquire/monthly-checkins',
        buttonLabel: 'Enquire Now',
        priceNote: 'Ksh 56,000',
        actionType: 'enquire'
      },
      {
        title: 'Listening Lounge Day',
        image: 'assets/img/pricing/corporate-engagement/lounge-day.jpg',
        popular: true,
        price: 'KSH 9,999',
        frequency: 'day',
        description: 'Bring a dedicated listener onsite or online for a day. Employees can sign up for time slots to speak freely, reflect, or decompress. Ideal for mental health awareness days or culture resets.',
        buttonUrl: '/book/lounge-day',
        buttonLabel: 'Book Now',
        priceNote: 'From Ksh 15,000',
        actionType: 'book'
      },
      {
        title: 'Corporate Retainer Package',
        image: 'assets/img/pricing/corporate-engagement/retainer.jpg',
        popular: true,
        price: null,
        frequency: 'quarter',
        description: 'A customized, long-term support plan including listening sessions, wellness reporting, and priority scheduling. Best suited for HR departments and leadership teams ready to embed care into culture.',
        buttonUrl: '/request/retainer',
        buttonLabel: 'Request Proposal',
        priceNote: 'Custom Quote',
        actionType: 'request'
      }
    ]
  }
];
