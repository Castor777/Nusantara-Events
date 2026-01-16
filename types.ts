
export interface Event {
  id: string;
  name: string;
  description: string;
  category: EventCategory;
  date: string;
  location: string;
  priceRange: string;
  basePrice: number;
  currency: 'SGD' | 'IDR' | 'THB' | 'USD';
  predictedTurnout: number;
  historicalTurnout?: number[]; // Past 3 years
  sustainabilityScore: 'A' | 'B' | 'C';
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
}

export interface Registration {
  id: string;
  eventId: string;
  attendeeName: string;
  email: string;
  phone: string; 
  waOptIn: boolean;
  waStatus: 'Delivered' | 'Pending' | 'Failed';
  emailStatus: 'Sent' | 'Opened' | 'Bounced';
  ticketType: 'Standard' | 'VIP' | 'Group';
  paymentStatus: 'Paid' | 'Pending';
  paymentMethod: string;
  amountPaid: number;
  currency: 'SGD' | 'IDR' | 'THB' | 'USD';
  timestamp: string;
  qrCode: string;
  aiBriefing?: string; // Stored personalized advice
  checkedIn?: boolean;
  checkInTime?: string;
}

export interface PredictionResult {
  estimatedTotal: number;
  confidenceScore: number;
  factors: string[];
  recommendation: string;
}

export interface PostEventReport {
  attendanceActual: number;
  attendancePredicted: number;
  revenueTotal: number;
  costTotal: number;
  roi: number;
  engagementScore: number; // 0-100
  briefingOpenRate: number; // Percentage
  networkingConnections: number;
  aiExecutiveSummary: string;
  sustainabilityImpact: string;
}

export enum EventCategory {
  ALL = 'All Events',
  TECH = 'Technology & AI',
  FINANCE = 'Fintech & Crypto',
  LIFESTYLE = 'Lifestyle & Culture',
  B2B = 'B2B Trade Show',
  STARTUP = 'Startup & VC',
}

export type Language = 'en' | 'id' | 'th' | 'zh' | 'vi' | 'ms' | 'tl' | 'km' | 'my' | 'lo';

export interface User {
  name: string;
  role: 'organizer' | 'attendee';
  tier: 'free' | 'pro';
  email: string;
  phone?: string;
  avatar?: string;
  jobTitle?: string;
  industry?: string;
  goals?: string;
  company?: string;
}

export interface Integration {
  id: string;
  name: string;
  category: 'Storage' | 'CRM' | 'Communication' | 'Support' | 'Database';
  icon: string;
  connected: boolean;
  description: string;
}

export interface Exhibitor {
  id: string;
  name: string;
  industry: string;
  description: string;
  offerings: string[];
  targetAudience: string[];
  boothLocation: string;
  image: string;
}

export interface MatchResult {
  exhibitorId: string;
  matchScore: number;
  reasoning: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  website: string;
  tags: string[];
  featured?: boolean;
  pricing: 'Free' | 'Freemium' | 'Paid';
}
