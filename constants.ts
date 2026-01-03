
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
    predictedTurnout: 15000,
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
    predictedTurnout: 8500,
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
    predictedTurnout: 12000,
    sustainabilityScore: 'A',
    website: '#',
    tags: ['Creative', 'Design', 'Thailand'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Future Mobility Asia',
    description: 'Electric vehicles and autonomous transport trade show.',
    category: EventCategory.B2B,
    date: 'Dec 01, 2024',
    location: 'Kuala Lumpur Conv. Ctr',
    priceRange: 'RM 300',
    predictedTurnout: 5000,
    sustainabilityScore: 'A',
    website: '#',
    tags: ['EV', 'Transport', 'Malaysia'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Vietnam Startup Day',
    description: 'Where founders meet VCs. Pitch competitions and deal-flow sessions.',
    category: EventCategory.STARTUP,
    date: 'Aug 15, 2024',
    location: 'Ho Chi Minh City',
    priceRange: 'Free / VIP $100',
    predictedTurnout: 3000,
    sustainabilityScore: 'C',
    website: '#',
    tags: ['Startup', 'VC', 'Vietnam'],
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800'
  }
];

export const SPONSORSHIPS_DATA: Sponsorship[] = [
  {
    id: 's1',
    eventName: 'SEA Tech Week Singapore',
    tier: 'Platinum',
    amount: 'S$50,000',
    description: 'Main stage branding, 20 VIP tickets, and private networking booth.',
  },
  {
    id: 's2',
    eventName: 'Fintech Jakarta Summit',
    tier: 'Gold',
    amount: 'IDR 150,000,000',
    description: 'Lanyard sponsorship, workshop hosting rights, and app banner.',
  },
  {
    id: 's3',
    eventName: 'Vietnam Startup Day',
    tier: 'Silver',
    amount: 'USD 5,000',
    description: 'Coffee break sponsor and logo on tote bags.',
  }
];

export const EVENT_CATEGORIES = Object.values(EventCategory);

export const INTEGRATIONS_DATA: Integration[] = [
  { id: '1', name: 'Google Drive', category: 'Storage', icon: 'HardDrive', connected: true, description: 'Store event assets and attendee lists.' },
  { id: '2', name: 'Dropbox', category: 'Storage', icon: 'Box', connected: false, description: 'Backup venue plans and contracts.' },
  { id: '3', name: 'Zendesk', category: 'Support', icon: 'MessageSquare', connected: false, description: 'Manage attendee support tickets.' },
  { id: '4', name: 'Salesforce', category: 'CRM', icon: 'Database', connected: true, description: 'Sync lead generation data.' },
  { id: '5', name: 'Slack', category: 'Communication', icon: 'Hash', connected: true, description: 'Team notifications for ticket sales.' },
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
  },
  {
    id: 'e2',
    name: 'PayFast Indo',
    industry: 'Fintech',
    description: 'Seamless payment gateway aggregation for Indonesian e-commerce.',
    offerings: ['Payment Gateway', 'QRIS Integration', 'Cross-border FX'],
    targetAudience: ['E-commerce Merchants', 'CFOs', 'Retailers'],
    boothLocation: 'B-05',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'e3',
    name: 'GreenPack Solutions',
    industry: 'Sustainability',
    description: 'Biodegradable packaging for food and retail logistics.',
    offerings: ['Eco Packaging', 'Supply Chain Consulting'],
    targetAudience: ['Logistics Managers', 'F&B Owners'],
    boothLocation: 'C-22',
    image: 'https://images.unsplash.com/photo-1605600659873-d808a13a4d2a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'e4',
    name: 'AI Recruit',
    industry: 'HR Tech',
    description: 'Automated talent scouting and screening using Generative AI.',
    offerings: ['HR Software', 'Recruitment Tools'],
    targetAudience: ['HR Directors', 'Recruiters'],
    boothLocation: 'A-15',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'e5',
    name: 'Mekong Ventures',
    industry: 'Venture Capital',
    description: 'Seed stage funding for Vietnamese and Thai startups.',
    offerings: ['Seed Funding', 'Mentorship'],
    targetAudience: ['Founders', 'Startup CEOs'],
    boothLocation: 'VIP-01',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=400'
  }
];


export const TRANSLATIONS = {
  en: {
    heroTitle: "Upcoming SEA Events",
    heroSubtitle: "Discover, organize, and sponsor Southeast Asia's leading trade shows and conferences.",
    searchPlaceholder: "Find events (e.g., 'Fintech in Jakarta')...",
    navDirectory: "Directory",
    navSponsorships: "Sponsorships",
    navDashboard: "Organizer Dashboard",
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
    navDashboard: "Dasbor Penyelenggara",
    navMatchmaking: "Pencocokan AI",
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
    navDashboard: "แดชบอร์ดผู้จัดงาน",
    navMatchmaking: "จับคู่ AI",
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
    navDashboard: "組織者儀表板",
    navMatchmaking: "AI 配對",
    login: "登錄",
    createEvent: "創建活動",
    aiSearch: "AI 搜尋",
    find: "搜尋",
    upcoming: "即將到來",
    seaEvents: "東南亞活動"
  }
};
