export interface Blog {
  slug: string;
  title: string;
  author: string;
  authorSlug: string;
  image: string;
  sidebarImage: string;
  date: Date;
  tags: string[];
  content: string;
  quote: Quote;
  subSections: BlogSubSection[];
  authorBio: AuthorBio;
}

export interface Quote {
  text: string;
  author: string;
}

export interface BlogSubSection {
  heading: string;
  text: string;
}

export interface AuthorBio {
  image: string;
  bio: string;
  socialLinks?: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  iconClass: string;
}

export const BLOGS: Blog[] = [
  {
    slug: 'why-talking-helps',
    title: 'Why Talking Helps: The Science of Feeling Heard',
    author: 'Leila Kimani',
    authorSlug: 'leila-kimani',
    image: 'assets/img/blog/blog-big-1.jpg',
    sidebarImage: 'assets/img/blog/sidebar/blog-sm-1.jpg',
    date: new Date('2025-07-05'),
    tags: [ 'Emotional Support', 'Mental Wellness' ],
    content: `When we speak openly about our struggles, something remarkable happens inside our brains — our bodies release oxytocin, the very same “bonding” chemical that connects us to those we love and trust. This isn’t just emotional fluff; it’s hard science. Talking transforms our inner turmoil into something we can see, name, and reframe. It’s more than a simple “vent session” — it’s a neurological reset that helps us step back, gain clarity, and breathe again. By sharing our feelings with someone who truly listens, we’re not only validating our own experiences, but also lightening the emotional weight we’ve been carrying alone. It’s a gentle reminder that our stories matter, and that in voicing them, we open the door to healing.`,
    quote: {
      text: 'Sometimes, the best therapy is not advice, but the unshakable presence of a friend who listens without rushing you.',
      author: 'Unknown'
    },
    subSections: [
      {
        heading: 'The Science Behind Speaking',
        text: `Neuroscientists have found that verbalizing our emotions engages the prefrontal cortex — the rational, problem-solving part of our brain. At the same time, it helps to regulate activity in the amygdala, the part of our brain responsible for fear and threat detection. In other words, when we put feelings into words, we quite literally reduce the brain’s alarm signals, allowing us to feel calmer and more in control.`
      },
      {
        heading: 'Why Being Heard Matters',
        text: `To feel heard is to feel seen — and that experience alone can significantly reduce feelings of isolation and hopelessness. It strengthens our self-esteem and reassures us that we are not invisible in the world. Being heard is not merely about finding solutions; it’s about forging a deep human connection that reminds us we belong somewhere.`
      }
    ],
    authorBio: {
      image: 'assets/img/blog/author/author.jpg',
      bio: 'Leila is a mental health advocate and writer passionate about destigmatizing emotional conversations in everyday life.',
      socialLinks: [
        { platform: 'facebook', url: 'https://facebook.com/leila-kimani', iconClass: 'fab fa-facebook-f' },
        { platform: 'twitter', url: 'https://x.com/leila-kimani', iconClass: 'fab fa-x-twitter' },
      ]
    }
  },
  {
    slug: 'you-dont-need-fix',
    title: 'You Don’t Need Fixing — Just a Place to Be Real',
    author: 'Samuel Okoth',
    authorSlug: 'samuel-okoth',
    image: 'assets/img/blog/blog-big-1.jpg',
    sidebarImage: 'assets/img/blog/sidebar/blog-sm-1.jpg',
    date: new Date('2025-07-08'),
    tags: [ 'Empathy', 'Self-Acceptance' ],
    content: `Not every conversation has to end with a solution, a plan, or a “next step.” Sometimes the deepest form of healing comes from being accepted exactly as we are — messy, uncertain, and gloriously human. The modern obsession with fixing ourselves can be exhausting. There is tremendous freedom in simply existing without the pressure to be “better” every moment. When we find a space where we can speak without being edited or evaluated, we give ourselves the permission to just be, and in that stillness, we often discover our truest selves.`,
    quote: {
      text: 'You are not broken — you are in the beautiful, imperfect process of unfolding into who you were always meant to be.',
      author: 'Samuel Okoth'
    },
    subSections: [
      {
        heading: 'The Pressure to “Fix” Ourselves',
        text: `In today’s self-help saturated culture, we are constantly fed the idea that we must always be improving — learning more, doing more, achieving more. While growth is healthy, this relentless push often leaves little room for self-compassion. True well-being isn’t about fixing perceived flaws; it’s about embracing ourselves in all stages, even the ones that feel unresolved.`
      },
      {
        heading: 'Finding Safe Spaces',
        text: `A genuine safe space isn’t one where advice is dispensed at every turn; it’s one where our words are held without interruption, where our feelings are met with understanding instead of judgment. In such spaces, the goal isn’t to correct or direct — it’s to witness and affirm.`
      }
    ],
    authorBio: {
      image: 'assets/img/blog/author/author.jpg',
      bio: 'Samuel is a community facilitator who has spent the last decade building spaces for honest, judgment-free dialogue.',
      socialLinks: [
        { platform: 'instagram', url: 'https://instagram.com/samuel-okoth', iconClass: 'fab fa-instagram' },
        { platform: 'tiktok', url: 'https://tiktok.com/@samuel-okoth', iconClass: 'fab fa-tiktok' },
      ]
    }
  },
  {
    slug: 'first-time-unburdening',
    title: 'My First Time Unburdening — What I Wish I Knew',
    author: 'Anonymous Story',
    authorSlug: 'anonymous-story',
    image: 'assets/img/blog/blog-big-1.jpg',
    sidebarImage: 'assets/img/blog/sidebar/blog-sm-1.jpg',
    date: new Date('2025-07-10'),
    tags: [ 'Real Stories', 'Emotional Release' ],
    content: `I had carried my worries like heavy stones in my pockets for years, convinced that no one could truly understand the tangle inside my mind. When I finally spoke out loud for the first time, my heart pounded and my throat felt tight. I feared judgment, awkward silences, and the possibility that my pain might be dismissed. But instead, what I found was a profound sense of relief — as though I had been holding my breath for years and could finally exhale. Unburdening isn’t just about telling your story; it’s about stepping into a space where you can be both fragile and strong, broken and healing.`,
    quote: {
      text: 'The first word feels like leaping off a cliff — terrifying, but it opens the floodgates to freedom.',
      author: 'Anonymous'
    },
    subSections: [
      {
        heading: 'Fear Before the Conversation',
        text: `Before I spoke, my mind swirled with fears: What if I cried uncontrollably? What if they thought less of me? These doubts almost silenced me. But I learned that vulnerability often feels dangerous before it feels liberating.`
      },
      {
        heading: 'After Letting Go',
        text: `Once my story was out in the open, I realized that I didn’t need to be polished or “fixed” to deserve compassion. My rawness was met not with judgment, but with gentle understanding.`
      }
    ],
    authorBio: {
      image: 'assets/img/blog/author/author.jpg',
      bio: 'This story was shared anonymously to protect the author’s privacy.'
    }
  },
  {
    slug: 'not-therapy-but-real',
    title: 'It’s Not Therapy — But It’s Real Connection',
    author: 'Chris Muriuki',
    authorSlug: 'chris-muriuki',
    image: 'assets/img/blog/blog-big-1.jpg',
    sidebarImage: 'assets/img/blog/sidebar/blog-sm-1.jpg',
    date: new Date('2025-07-12'),
    tags: [ 'Connection', 'Safe Space' ],
    content: `True human connection doesn’t require an appointment, a diagnosis, or a prescribed treatment plan. Sometimes, the most healing moments come from unplanned conversations, from shared silences, from the recognition that another person simply “gets” us without needing to fix or analyze. This is connection in its purest form — two people meeting each other exactly where they are, without an agenda. In those moments, we aren’t patient and therapist, or speaker and listener — we are simply human beings holding space for each other’s truths.`,
    quote: {
      text: 'Sometimes all we need is not answers, but a compassionate witness to the unfolding of our lives.',
      author: 'Chris Muriuki'
    },
    subSections: [
      {
        heading: 'The Power of Presence',
        text: `To be fully present with someone — no distractions, no mental rehearsals of what to say next — is one of the rarest gifts we can give. It’s in this presence that we form bonds deeper than words, where we feel truly seen and understood.`
      }
    ],
    authorBio: {
      image: 'assets/img/blog/author/author.jpg',
      bio: 'Chris is a youth mentor focused on building resilience through authentic human connection.',
      socialLinks: [
        { platform: 'twitter', url: 'https://x.com/chris-muriuki', iconClass: 'fab fa-x-twitter' },
        { platform: 'youtube', url: 'https://youtube.com/@chris-muriuki', iconClass: 'fab fa-youtube' },
      ]
    }
  },
  {
    slug: 'offload-stress',
    title: 'Offload Stress Before It Builds Up',
    author: 'Joy Wambui',
    authorSlug: 'joy-wambui',
    image: 'assets/img/blog/blog-big-1.jpg',
    sidebarImage: 'assets/img/blog/sidebar/blog-sm-1.jpg',
    date: new Date('2025-07-03'),
    tags: [ 'Burnout', 'Daily Pressure' ],
    content: `Stress is a lot like steam in a sealed container — if it’s not released gradually, the pressure builds until something eventually bursts. In our fast-paced, constantly connected lives, we often normalize carrying high levels of stress until our bodies force us to stop. Talking about our challenges regularly acts like a safety valve, letting us release that mental pressure in a healthy, controlled way. The act of sharing our load not only lightens it, but also gives us perspective, helping us navigate life’s demands without losing ourselves in the process.`,
    quote: {
      text: 'Your mind craves healthy outlets as much as your body craves rest and nourishment.',
      author: 'Joy Wambui'
    },
    subSections: [
      {
        heading: 'Micro-bursts of Relief',
        text: `You don’t need an hour-long deep talk to feel the benefits of emotional release. Even a short, five-minute conversation with someone you trust can reset your mental state, lower your stress hormones, and make the rest of the day feel lighter.`
      }
    ],
    authorBio: {
      image: 'assets/img/blog/author/author.jpg',
      bio: 'Joy is a wellness coach who blends practical strategies with emotional support for busy professionals.',
      socialLinks: [
        { platform: 'facebook', url: 'https://facebook.com/joy-wambui', iconClass: 'fab fa-facebook-f' },
        { platform: 'twitter', url: 'https://x.com/joy-wambui', iconClass: 'fab fa-x-twitter' },
        { platform: 'tiktok', url: 'https://tiktok.com/@joy-wambui', iconClass: 'fab fa-tiktok' },
      ]
    }
  },
  {
    slug: 'its-okay-not-be-okay',
    title: 'It’s Okay Not to Be Okay — And Say It Out Loud',
    author: 'Kendi Mugo',
    authorSlug: 'kendi-mugo',
    image: 'assets/img/blog/blog-big-1.jpg',
    sidebarImage: 'assets/img/blog/sidebar/blog-sm-1.jpg',
    date: new Date('2025-06-30'),
    tags: [ 'Vulnerability', 'Emotional Honesty' ],
    content: `We live in a culture that often prizes polished smiles and unshakable confidence. But behind those masks, so many of us carry unspoken struggles. We avoid admitting our pain because we fear being a burden, or worse, being seen as weak. Yet, vulnerability is not weakness — it is one of the most powerful acts of courage. When we speak our truth, we invite others to drop their own masks and meet us in the raw, unfiltered middle. Saying “I’m not okay” out loud is not the end of the story — it’s the beginning of one where connection and healing can take root.`,
    quote: {
      text: 'The bravest words you may ever speak are: “I’m not okay” — because they open the door to becoming okay.',
      author: 'Kendi Mugo'
    },
    subSections: [
      {
        heading: 'Why We Hide',
        text: `Society rewards resilience, strength, and the appearance of control, but true strength includes the ability to admit when we’ve reached our limit. Hiding our struggles may seem like protection, but it often deepens our sense of isolation.`
      }
    ],
    authorBio: {
      image: 'assets/img/blog/author/author.jpg',
      bio: 'Kendi is a storyteller and mental health advocate encouraging openness in everyday life.',
      socialLinks: [
        { platform: 'facebook', url: 'https://facebook.com/kendi-mugo', iconClass: 'fab fa-facebook-f' },
        { platform: 'instagram', url: 'https://instagram.com/kendi-mugo', iconClass: 'fab fa-instagram' },
        { platform: 'youtube', url: 'https://youtube.com/@kendi-mugo', iconClass: 'fab fa-youtube' },
      ]
    }
  }
];
