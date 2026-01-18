
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

  // Technology & Innovation
  AI_ML = 'AI & Machine Learning',
  ICT_TELECOM = 'ICT & Telecom',
  CONSUMER_ELECTRONICS = 'Consumer Electronics',
  TECH_INNOVATION = 'Technology & Innovation',

  // Business & Trade
  B2B_TRADE = 'B2B Trade Shows',
  FRANCHISING = 'Franchising & Licensing',
  GENERAL_TRADE = 'General Trade & Investment',
  BUSINESS_SERVICES = 'Business Services',

  // Manufacturing & Industrial
  MANUFACTURING = 'Manufacturing & Automation',
  INDUSTRIAL_MACHINERY = 'Industrial Machinery',
  LOGISTICS_SHIPPING = 'Logistics & Shipping',

  // Construction & Infrastructure
  CONSTRUCTION = 'Construction & Building',
  REAL_ESTATE = 'Real Estate & Property',

  // Energy & Resources
  GREEN_ENERGY = 'Green Energy & Sustainability',
  MINING_MINERALS = 'Mining & Minerals',
  WATER_TECH = 'Water Technology',
  ENERGY = 'Energy & Power',

  // Food & Hospitality
  FOOD_BEVERAGE = 'Food & Beverage',
  HOSPITALITY_TOURISM = 'Hospitality & Tourism',
  HALAL = 'Halal Products',

  // Lifestyle & Consumer
  FASHION = 'Fashion & Apparel',
  BEAUTY = 'Beauty & Cosmetics',
  FURNITURE_HOME = 'Furniture & Home',
  JEWELRY = 'Jewelry & Accessories',

  // Finance & Services
  FINTECH = 'Fintech & Banking',
  INSURANCE = 'Insurance',

  // Healthcare & Science
  MEDICAL_PHARMA = 'Medical & Pharma',
  SCIENCE = 'Science & Research',

  // Agriculture & Animals
  AGRICULTURE = 'Agriculture & Farming',
  ANIMALS_PETS = 'Animals & Pets',

  // Other
  ENTERTAINMENT = 'Entertainment',
  EDUCATION = 'Education & Training',
  AEROSPACE_DEFENSE = 'Aerospace & Defense',
  STARTUP_VC = 'Startup & VC',
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
