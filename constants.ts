
import { Event, EventCategory, Sponsorship, Integration, Exhibitor } from './types';

export const EVENTS_DATA: Event[] = [
  {
    id: '1',
    name: 'SEA Tech Week Singapore',
    description: 'The largest gathering of tech innovators in the region. Focusing on AI, Cloud, and Cybersecurity.',
    category: EventCategory.TECH,
    date: 'Oct 12-14, 2024',
    location: 'Marina Bay Sands, Singapore',
    priceRange: 'S$450 - S$1,200',
    basePrice: 450,
    currency: 'SGD',
    predictedTurnout: 15000,
    historicalTurnout: [12000, 13500, 14200],
    sustainabilityScore: 'A',
    website: '#',
    tags: ['AI', 'Networking', 'Singapore'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Fintech Jakarta Summit',
    description: 'Connecting banking giants with disruptive fintech startups in Indonesia\'s booming market.',
    category: EventCategory.FINANCE,
    date: 'Nov 05, 2024',
    location: 'JCC Senayan, Jakarta',
    priceRange: 'IDR 2,500,000',
    basePrice: 2500000,
    currency: 'IDR',
    predictedTurnout: 8500,
    historicalTurnout: [6000, 7500, 8100],
    sustainabilityScore: 'B',
    website: '#',
    tags: ['Fintech', 'Banking', 'Indonesia'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Bangkok Creative Expo',
    description: 'A showcase of design, fashion, and digital art from the Mekong region.',
    category: EventCategory.LIFESTYLE,
    date: 'Sep 20-22, 2024',
    location: 'BITEC, Bangkok',
    priceRange: '฿1,500',
    basePrice: 1500,
    currency: 'THB',
    predictedTurnout: 12000,
    historicalTurnout: [10000, 11000, 11500],
    sustainabilityScore: 'A',
    website: '#',
    tags: ['Creative', 'Design', 'Thailand'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
  }
];

export const SPONSORSHIPS_DATA: Sponsorship[] = [
  {
    id: 's1',
    eventName: 'SEA Tech Week Singapore',
    tier: 'Platinum',
    amount: 'S$50,000',
    description: 'Main stage branding, 20 VIP tickets, and private networking booth.',
  }
];

export const EVENT_CATEGORIES = Object.values(EventCategory);

export const INTEGRATIONS_DATA: Integration[] = [
  { id: 'n8n', name: 'n8n Workflow Engine', category: 'Communication', icon: 'Settings', connected: true, description: 'Master orchestrator for WhatsApp, Email, and Database flows.' },
  { id: '1', name: 'PostgreSQL Cloud', category: 'Database', icon: 'Database', connected: true, description: 'Live attendee logging for audit & PDPA compliance.' },
  { id: '3', name: 'WhatsApp Business', category: 'Support', icon: 'MessageSquare', connected: true, description: 'Automated ticket delivery and check-in updates.' },
  { id: '4', name: 'Salesforce', category: 'CRM', icon: 'Database', connected: true, description: 'Sync lead generation data for exhibitor follow-ups.' },
  { id: '6', name: 'Google Sheets', category: 'Storage', icon: 'HardDrive', connected: false, description: 'Quick export for on-ground staff usage.' },
];

export const EXHIBITORS_DATA: Exhibitor[] = [
  {
    id: 'e1',
    name: 'CloudScale SEA',
    industry: 'Cloud Computing',
    description: 'Enterprise cloud infrastructure for high-growth startups.',
    offerings: ['Cloud Hosting', 'Serverless', 'Database Management'],
    targetAudience: ['CTOs', 'Developers', 'Startups'],
    boothLocation: 'A-12',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
  }
];

export const TRANSLATIONS = {
  en: {
    heroTitle: "Upcoming SEA Events",
    heroSubtitle: "Discover, organize, and sponsor Southeast Asia's leading trade shows and conferences.",
    searchPlaceholder: "Find events (e.g., 'Fintech in Jakarta')...",
    navDirectory: "Directory",
    navSponsorships: "Sponsorships",
    navDashboard: "Dashboard",
    navMatchmaking: "AI Matchmaking",
    login: "Login",
    createEvent: "Create Event",
    aiSearch: "AI Search",
    find: "Find",
    upcoming: "Upcoming",
    seaEvents: "SEA Events"
  },
  id: {
    heroTitle: "Acara SEA Mendatang",
    heroSubtitle: "Temukan, atur, dan sponsori pameran dagang dan konferensi terkemuka di Asia Tenggara.",
    searchPlaceholder: "Cari acara (cth. 'Fintech di Jakarta')...",
    navDirectory: "Direktori",
    navSponsorships: "Sponsor",
    navDashboard: "Dasbor",
    navMatchmaking: "AI Matchmaking",
    login: "Masuk",
    createEvent: "Buat Acara",
    aiSearch: "Cari AI",
    find: "Cari",
    upcoming: "Mendatang",
    seaEvents: "Acara SEA"
  },
  th: {
    heroTitle: "งานอีเวนต์ SEA ที่กำลังจะมาถึง",
    heroSubtitle: "ค้นพบ จัดระเบียบ และสนับสนุนงานแสดงสินค้าและการประชุมชั้นนำของเอเชียตะวันออกเฉียงใต้",
    searchPlaceholder: "ค้นหางาน (เช่น 'Fintech ในจาการ์ตา')...",
    navDirectory: "ไดเรกทอรี",
    navSponsorships: "การสนับสนุน",
    navDashboard: "แดชบอร์ด",
    navMatchmaking: "AI Matchmaking",
    login: "เข้าสู่ระบบ",
    createEvent: "สร้างกิจกรรม",
    aiSearch: "ค้นหา AI",
    find: "ค้นหา",
    upcoming: "ที่กำลังจะมาถึง",
    seaEvents: "งาน SEA"
  },
  zh: {
    heroTitle: "即將到來的東南亞活動",
    heroSubtitle: "發現、組織和贊助東南亞領先的貿易展覽和會議。",
    searchPlaceholder: "搜尋活動（例如“雅加達金融科技”）...",
    navDirectory: "目錄",
    navSponsorships: "贊助",
    navDashboard: "儀表板",
    navMatchmaking: "AI 配對",
    login: "登錄",
    createEvent: "創建活動",
    aiSearch: "AI 搜尋",
    find: "搜尋",
    upcoming: "即將到來",
    seaEvents: "東南亞活動"
  }
};
