export interface Event {
  id: string;
  name: string;
  description: string;
  category: EventCategory;
  date: string;
  location: string;
  priceRange: string;
  predictedTurnout: number;
  sustainabilityScore: 'A' | 'B' | 'C'; // Eco-impact rating
  website: string;
  tags: string[];
  featured?: boolean;
  image: string;
}

export interface Sponsorship {
  id: string;
  eventName: string;
  tier: 'Platinum' | 'Gold' | 'Silver';
  amount: string;
  description: string;
  matchScore?: number; // AI calculated match
}

export enum EventCategory {
  ALL = 'All Events',
  TECH = 'Technology & AI',
  FINANCE = 'Fintech & Crypto',
  LIFESTYLE = 'Lifestyle & Culture',
  B2B = 'B2B Trade Show',
  STARTUP = 'Startup & VC',
}

export interface SearchState {
  query: string;
  isAiSearching: boolean;
  results: string[] | null; // ID list
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

export interface Tool {
  name: string;
  description: string;
  category: string;
  pricing: string;
  website: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

// New Types for Platform Features
export type Language = 'en' | 'id' | 'th' | 'zh';

export interface User {
  name: string;
  role: 'organizer' | 'attendee';
  tier: 'free' | 'pro';
  email: string;
  avatar?: string;
}

export interface Integration {
  id: string;
  name: string;
  category: 'Storage' | 'CRM' | 'Communication' | 'Support';
  icon: string;
  connected: boolean;
  description: string;
}