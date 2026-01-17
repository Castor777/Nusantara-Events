
import React, { useState, useMemo } from 'react';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import SponsorshipCard from './components/SponsorshipCard';
import OrganizerDashboard from './components/OrganizerDashboard';
import MatchmakingDashboard from './components/MatchmakingDashboard';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import QRScannerModal from './components/QRScannerModal';
import RegistrationModal from './components/RegistrationModal';
import LanguageSelector from './components/LanguageSelector';
import { EVENTS_DATA, EVENT_CATEGORIES, SPONSORSHIPS_DATA, TRANSLATIONS } from './constants';
import { EventCategory, User, Language, Registration, Event } from './types';
import { semanticSearchEvents } from './services/geminiService';
import { LayoutGrid, Filter, AlertCircle, X, Calendar, Globe, LogOut, Users, Ticket } from 'lucide-react';

enum ViewMode {
  DIRECTORY = 'Directory',
  SPONSORSHIPS = 'Sponsorships',
  DASHBOARD = 'Dashboard',
  MATCHMAKING = 'Matchmaking'
}

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.DIRECTORY);
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>(EventCategory.ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiSearchResults, setAiSearchResults] = useState<string[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [autoRegisterEvent, setAutoRegisterEvent] = useState<Event | null>(null);
  const [language, setLanguage] = useState<Language>('en');

  const t = TRANSLATIONS[language];

  const handleSearch = async (query: string, useAi: boolean) => {
    setViewMode(ViewMode.DIRECTORY);
    setSearchQuery(query);
    setAiSearchResults(null);
    if (!query.trim()) return;
    if (useAi) {
      setIsSearching(true);
      try {
        const matchingIds = await semanticSearchEvents(query, EVENTS_DATA);
        setAiSearchResults(matchingIds);
        setSelectedCategory(EventCategory.ALL);
      } catch (err) { console.error("Search failed", err); }
      finally { setIsSearching(false); }
    }
  };

  const handleNewRegistration = (reg: Registration) => {
    setRegistrations(prev => [reg, ...prev]);
  };

  const handleQrScan = (code: string) => {
    const event = EVENTS_DATA.find(e => e.id === code);
    if (event) {
      setAutoRegisterEvent(event);
      setShowScanner(false);
    }
  };

  const filteredEvents = useMemo(() => {
    let events = EVENTS_DATA;
    if (selectedCategory !== EventCategory.ALL) events = events.filter(e => e.category === selectedCategory);
    if (aiSearchResults !== null) {
      const orderMap = new Map<string, number>(aiSearchResults.map((id, index) => [id, index]));
      return events.filter(e => aiSearchResults.includes(e.id)).sort((a, b) => (orderMap.get(a.id) ?? 999) - (orderMap.get(b.id) ?? 999));
    }
    if (searchQuery && aiSearchResults === null) {
      const lowerQuery = searchQuery.toLowerCase();
      events = events.filter(e => e.name.toLowerCase().includes(lowerQuery) || e.location.toLowerCase().includes(lowerQuery) || e.tags.some(tag => tag.toLowerCase().includes(lowerQuery)));
    }
    return events;
  }, [selectedCategory, searchQuery, aiSearchResults]);

  const getTranslatedCategory = (category: string) => {
    switch (category) {
      case 'All Events': return t.allEvents;
      case 'Technology & AI': return t.tech;
      case 'Fintech & Crypto': return t.finance;
      case 'Lifestyle & Culture': return t.lifestyle;
      case 'B2B Trade Show': return t.b2b;
      case 'Startup & VC': return t.startup;
      default: return category;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-mantis-500/30">
      {showLoginModal && (
        <LoginModal
          language={language}
          onClose={() => setShowLoginModal(false)}
          onLogin={(userData) => { setUser(userData); setViewMode(ViewMode.DIRECTORY); }}
        />
      )}

      {showScanner && (
        <QRScannerModal
          onClose={() => setShowScanner(false)}
          onScan={handleQrScan}
        />
      )}

      {autoRegisterEvent && (
        <RegistrationModal
          event={autoRegisterEvent}
          user={user}
          onClose={() => setAutoRegisterEvent(null)}
          onSuccess={(reg) => {
            handleNewRegistration(reg);
            setAutoRegisterEvent(null);
          }}
        />
      )}

      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setViewMode(ViewMode.DIRECTORY); }}>
              <img src="/logo_full.png" alt="Nusantara Events" className="h-12 w-auto object-contain" />
            </div>

            <div className="hidden md:flex gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
              <button onClick={() => setViewMode(ViewMode.DIRECTORY)} className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-md transition-all ${viewMode === ViewMode.DIRECTORY ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>{t.navDirectory}</button>
              <button onClick={() => setViewMode(ViewMode.SPONSORSHIPS)} className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-md transition-all ${viewMode === ViewMode.SPONSORSHIPS ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>{t.navSponsorships}</button>
              <button onClick={() => user ? setViewMode(ViewMode.MATCHMAKING) : setShowLoginModal(true)} className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-md transition-all flex items-center gap-1 ${viewMode === ViewMode.MATCHMAKING ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>{t.navMatchmaking}<span className="bg-mantis-500 text-slate-900 text-[9px] px-1 rounded font-bold">AI</span></button>
              <button onClick={() => user ? setViewMode(ViewMode.DASHBOARD) : setShowLoginModal(true)} className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-md transition-all flex items-center gap-1 ${viewMode === ViewMode.DASHBOARD ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>
                {user?.role === 'organizer' ? t.navDashboard : t.myPortal}
              </button>
            </div>

            <div className="flex items-center gap-4">
              <LanguageSelector
                currentLanguage={language}
                onLanguageChange={(lang) => setLanguage(lang)}
              />

              {user ? (
                <div className="flex items-center gap-3 pl-3 border-l border-slate-700">
                  <div className="flex flex-col items-end hidden sm:flex">
                    <span className="text-sm font-bold text-white leading-none">{user.name}</span>
                    <span className={`text-[10px] uppercase font-bold px-1 rounded leading-tight mt-1 ${user.tier === 'pro' ? 'bg-mantis-500 text-slate-900' : 'bg-slate-700 text-slate-300'}`}>{user.tier}</span>
                  </div>
                  <img src={user.avatar} className="w-8 h-8 rounded-full border border-slate-600" />
                  <button onClick={() => { setUser(null); setViewMode(ViewMode.DIRECTORY); }} className="text-slate-400 hover:text-red-400 transition-colors ml-1"><LogOut size={16} /></button>
                </div>
              ) : (
                <button onClick={() => setShowLoginModal(true)} className="text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-white transition-colors">{t.login}</button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {viewMode === ViewMode.DIRECTORY && <Hero onSearch={handleSearch} onOpenScanner={() => setShowScanner(true)} isSearching={isSearching} language={language} />}

      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${viewMode !== ViewMode.DIRECTORY ? 'pt-24' : ''}`}>
        {viewMode === ViewMode.DIRECTORY && (
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className={`lg:w-64 flex-shrink-0 hidden lg:block`}>
              <div className="sticky top-24">
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2"><Filter size={16} className="text-mantis-400" /> {t.industries}</h3>
                <div className="space-y-1">
                  {EVENT_CATEGORIES.map((category) => (
                    <button key={category} onClick={() => setSelectedCategory(category)} className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${selectedCategory === category ? 'bg-mantis-600/20 text-mantis-400 border border-mantis-500/30' : 'text-slate-400 hover:bg-slate-800'}`}>{getTranslatedCategory(category)}</button>
                  ))}
                </div>
              </div>
            </aside>
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredEvents.map((event) => <EventCard key={event.id} event={event} user={user} language={language} onRegister={handleNewRegistration} />)}
              </div>
            </div>
          </div>
        )}
        {viewMode === ViewMode.SPONSORSHIPS && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{SPONSORSHIPS_DATA.map((item) => <SponsorshipCard key={item.id} item={item} />)}</div>}
        {viewMode === ViewMode.DASHBOARD && <OrganizerDashboard user={user} registrations={registrations} language={language} />}
        {viewMode === ViewMode.MATCHMAKING && user && <MatchmakingDashboard user={user} language={language} />}
      </main>
      <Footer language={language} /><ChatWidget />
    </div>
  );
};

export default App;
