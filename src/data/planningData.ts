import { ChecklistItem, BudgetCategory, TimelineMilestone } from '../types';

export const mockChecklistItems: ChecklistItem[] = [
  { id: '1', text: 'Book venue', category: 'Venue', checked: true },
  { id: '2', text: 'Secure catering service', category: 'Catering', checked: true },
  { id: '3', text: 'Choose decor theme', category: 'Decor', checked: true },
  { id: '4', text: 'Order flowers and arrangements', category: 'Decor', checked: false },
  { id: '5', text: 'Hire photographer', category: 'Services', checked: false },
  { id: '6', text: 'Book DJ/Entertainment', category: 'Entertainment', checked: false },
  { id: '7', text: 'Arrange transportation', category: 'Transportation', checked: false },
  { id: '8', text: 'Confirm guest list', category: 'Guests', checked: true },
  { id: '9', text: 'Send invitations', category: 'Guests', checked: false },
  { id: '10', text: 'Arrange parking', category: 'Venue', checked: false },
  { id: '11', text: 'Order wedding cake', category: 'Catering', checked: false },
  { id: '12', text: 'Prepare seating chart', category: 'Planning', checked: false },
];

export const mockBudgetCategories: BudgetCategory[] = [
  { category: 'Venue', amount: 500000, percentage: 25 },
  { category: 'Catering', amount: 600000, percentage: 30 },
  { category: 'Decor & Flowers', amount: 300000, percentage: 15 },
  { category: 'Photography', amount: 250000, percentage: 12.5 },
  { category: 'Entertainment', amount: 200000, percentage: 10 },
  { category: 'Transportation', amount: 100000, percentage: 5 },
  { category: 'Miscellaneous', amount: 50000, percentage: 2.5 },
];

export const mockTimeline: TimelineMilestone[] = [
  { time: '6 months before', title: 'Set Date & Budget', desc: 'Choose date, book venue, define budget' },
  { time: '4 months before', title: 'Plan Details', desc: 'Decide theme, guest count, catering style' },
  { time: '3 months before', title: 'Book Services', desc: 'Hire photographer, DJ, catering' },
  { time: '2 months before', title: 'Invitations', desc: 'Design and send invitations' },
  { time: '1 month before', title: 'Confirmations', desc: 'Confirm all bookings and RSVPs' },
  { time: '2 weeks before', title: 'Final Planning', desc: 'Seating arrangements, final numbers' },
  { time: '1 week before', title: 'Preparations', desc: 'Final checks and preparations' },
  { time: 'Day of Event', title: 'Celebration', desc: 'Enjoy your beautiful event!' },
];

export interface Guest {
  id: string;
  name: string;
  email: string;
  phone: string;
  rsvp: 'pending' | 'confirmed' | 'declined';
  dietary: string;
}

export const mockGuests: Guest[] = [
  { id: '1', name: 'John Smith', email: 'john@example.com', phone: '555-0101', rsvp: 'confirmed', dietary: 'None' },
  { id: '2', name: 'Sarah Johnson', email: 'sarah@example.com', phone: '555-0102', rsvp: 'confirmed', dietary: 'Vegetarian' },
  { id: '3', name: 'Michael Brown', email: 'michael@example.com', phone: '555-0103', rsvp: 'pending', dietary: 'None' },
  { id: '4', name: 'Emily Davis', email: 'emily@example.com', phone: '555-0104', rsvp: 'confirmed', dietary: 'Gluten-free' },
  { id: '5', name: 'James Wilson', email: 'james@example.com', phone: '555-0105', rsvp: 'declined', dietary: 'None' },
  { id: '6', name: 'Lisa Anderson', email: 'lisa@example.com', phone: '555-0106', rsvp: 'confirmed', dietary: 'None' },
  { id: '7', name: 'David Martinez', email: 'david@example.com', phone: '555-0107', rsvp: 'pending', dietary: 'Vegetarian' },
  { id: '8', name: 'Jennifer Taylor', email: 'jennifer@example.com', phone: '555-0108', rsvp: 'confirmed', dietary: 'None' },
  { id: '9', name: 'Robert Thomas', email: 'robert@example.com', phone: '555-0109', rsvp: 'confirmed', dietary: 'Vegan' },
  { id: '10', name: 'Catherine Jackson', email: 'catherine@example.com', phone: '555-0110', rsvp: 'pending', dietary: 'None' },
];

export interface Vendor {
  id: string;
  name: string;
  category: 'Catering' | 'Photography' | 'Decor' | 'Music' | 'Venue' | 'Transportation';
  description: string;
  contact: string;
  image: string;
}

export const mockVendors: Vendor[] = [
  {
    id: '1',
    name: 'Elegant Catering Co.',
    category: 'Catering',
    description: 'Premium African cuisine and contemporary fusion',
    contact: 'catering@elegant.com',
    image: '/images/vendor-catering-1.png',
  },
  {
    id: '2',
    name: 'Prestige Photography',
    category: 'Photography',
    description: 'Professional event and portrait photography',
    contact: 'info@prestigephoto.com',
    image: '/images/vendor-photography-1.png',
  },
  {
    id: '3',
    name: 'Luxe Floral Designs',
    category: 'Decor',
    description: 'Bespoke floral arrangements and event decoration',
    contact: 'designs@luxefloral.com',
    image: '/images/vendor-decor-1.png',
  },
  {
    id: '4',
    name: 'Harmony Sound System',
    category: 'Music',
    description: 'DJ services and live entertainment',
    contact: 'book@harmonysound.com',
    image: '/images/vendor-music-1.png',
  },
  {
    id: '5',
    name: 'Grand Estates Venue',
    category: 'Venue',
    description: 'Spacious elegant venue with garden views',
    contact: 'events@grandestate.com',
    image: '/images/vendor-venue-1.png',
  },
  {
    id: '6',
    name: 'Premium Transport Service',
    category: 'Transportation',
    description: 'Luxury transportation for your guests',
    contact: 'book@premiumtransport.com',
    image: '/images/vendor-transport-1.png',
  },
];
