import { EventTypeData, FAQItem } from './types';

export const EVENT_TYPES: EventTypeData[] = [
  {
    id: 'wedding',
    name: 'Weddings',
    tagline: 'Craft your magical beginning with bespoke luxury.',
    description: 'We orchestrate perfect seating plans, collect detailed guest RSVPs with dietary choices, design professional floral themes, coordinate rehearsal timelines, and set up smooth mobile updates.',
    iconName: 'Heart'
  },
  {
    id: 'graduation',
    name: 'Graduations',
    tagline: 'Honor grand accomplishments with zero stress.',
    description: 'Coordinate diplomas, streamline ceremony schedules, organize family reception tables, sync high-resolution guest photos to shared Google Drive folders, and curate perfect opening addresses.',
    iconName: 'GraduationCap'
  },
  {
    id: 'birthday',
    name: 'Birthdays',
    tagline: 'From intimate dinners to landmark celebrations.',
    description: 'Design beautiful, custom-themed digital invitations, estimate food and refreshment sizing based on headcount, curate customized party playlists, and help you draft heartfelt speeches.',
    iconName: 'Gift'
  },
  {
    id: 'corporate',
    name: 'Corporate Retreats',
    tagline: 'Host premium hospitality, conferences, and summits.',
    description: 'Construct complete breakout agendas, coordinate speaker timelines, organize guest parking, handle registration badges, and synchronize schedules seamlessly with Google Calendar.',
    iconName: 'Building'
  },
  {
    id: 'babyshower',
    name: 'Baby Showers',
    tagline: 'Celebrate precious milestones with cozy warmth.',
    description: 'Design themed custom gift registry sites, suggest delightful party game activities, track incoming RSVPs, and coordinate gift registries to keep everything beautifully organized.',
    iconName: 'Baby'
  },
  {
    id: 'holiday',
    name: 'Holiday Gatherings',
    tagline: 'Bring families and communities together seamlessly.',
    description: 'Plan festive Thanksgiving, Christmas, or corporate dinners with calculated serving schedules, coordinate registry wishlists, and track potlucks or special catering items in one central list.',
    iconName: 'Sparkles'
  },
  {
    id: 'meetup',
    name: 'Casual Meetups',
    tagline: 'Perfect board game nights, galas, and barbecue gatherings.',
    description: 'Assemble friends and colleagues effortlessly. Send instant RSVP buttons to your group chat, coordinate travel logistics, and organize group dinner requirements perfectly.',
    iconName: 'Users'
  }
];

export const GOOGLE_ADVANTAGE_POINTS = [
  {
    id: 'calendar',
    title: 'Calendar & Workspace Sync',
    description: 'One-click synchronizations to Google Calendar. Automatically create secure, pre-organized Google Drive folders to aggregate contracts, vendor files, or invoices.',
    iconName: 'CalendarRange',
    badge: 'WORKSPACE INTEGRATED'
  },
  {
    id: 'maps',
    title: 'Embedded Travel Assistant',
    description: 'Display interactive Google Maps on your custom microsite. Give your guests real-time updates on local parking availability, live transit traffic, and recommended hotels.',
    iconName: 'MapPin',
    badge: 'LIVE MAPS ENGINE'
  },
  {
    id: 'photos',
    title: 'Google Photos Albums',
    description: 'Let guests upload photos directly. Automatically compile beautiful shared albums and group memories in high resolution.',
    iconName: 'Image',
    badge: 'GOOGLE PHOTOS POWERED'
  },
  {
    id: 'green',
    title: 'Ecosystem Sustainability',
    description: 'Enable "Green Mode" with one click. Get eco-friendly vendor options, calculate the event carbon offset, and suggest 100% digital stationery options to save paper.',
    iconName: 'Leaf',
    badge: 'GREEN MODE COMPATIBLE'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do I request M&M Events to host my event?',
    answer: 'Simply browse through our event style categories, select the scale and vibe you are looking for, and click "Request M&M Events to Host". It will scroll you to our quick inquiry dispatcher where you can specify your date and details. We will reach back to you in under 2 hours!'
  },
  {
    question: 'Are my guests required to download an app to RSVP?',
    answer: 'No! Guests receive a beautiful, customized mobile-friendly web invitation link. They can confirm RSVPs, log dietary requirements, and access our interactive travel assistant with a single click.'
  },
  {
    question: 'How do the Google Calendar and Drive integrations work?',
    answer: 'With one-click setup, M&M Events synchronizes all coordination milestones directly to your calendar, sends reminders to attendees, and creates a private Google Drive folder where you and your vendors can drop files and high-resolution photos.'
  },
  {
    question: 'What is the "Green Mode" eco-friendly option?',
    answer: 'Our Green Mode option focuses on eco-friendly catering, local organic sourcing, zero-plastic decorations, and paperless digital invitation stationery to ensure your celebration has a beautiful aesthetic with minimal carbon footprint.'
  }
];

export const WHATSAPP_CONTACT_NUMBER = '254700000000';
export const CONTACT_EMAIL = 'hosting@eventplatform.com';
