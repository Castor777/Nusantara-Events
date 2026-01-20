
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
import { MapView } from './components/MapView';
import { EVENTS_DATA, EVENT_CATEGORIES, SPONSORSHIPS_DATA, TRANSLATIONS } from './constants';
import { EventCategory, User, Language, Registration, Event } from './types';
import { semanticSearchEvents, translateBatch } from './services/geminiService';
import { getCategoryTranslation } from './utils/categoryTranslations';
import { LayoutGrid, Filter, AlertCircle, X, Calendar, Globe, LogOut, Users, Ticket, Map as MapIcon } from 'lucide-react';

enum ViewMode {
  DIRECTORY = 'Directory',
  SPONSORSHIPS = 'Sponsorships',
  DASHBOARD = 'Dashboard',
  MATCHMAKING = 'Matchmaking'
}

enum DirectoryViewMode {
  LIST = 'list',
  MAP = 'map',
}

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.DIRECTORY);
  const [directoryViewMode, setDirectoryViewMode] = useState<DirectoryViewMode>(DirectoryViewMode.LIST);
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'FEATURED'>('FEATURED');
  const [searchQuery, setSearchQuery] = useState('');
  const [aiSearchResults, setAiSearchResults] = useState<string[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [eventTranslations, setEventTranslations] = useState<Record<string, string>>({});

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
    setSearchError(null);
    if (!query.trim()) return;
    if (useAi) {
      setIsSearching(true);
      try {
        const matchingIds = await semanticSearchEvents(query, EVENTS_DATA);
        setAiSearchResults(matchingIds);
        setSelectedCategory(EventCategory.ALL);
        setSearchError(null);
      } catch (err) {
        console.error("Search failed", err);
        setSearchError("AI search temporarily unavailable. Please try regular search or try again later.");
        setAiSearchResults(null);
      } finally {
        setIsSearching(false);
      }
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

  // Get all filtered events without limit (for list view background)
  const allFilteredEvents = useMemo(() => {
    let events = EVENTS_DATA;

    // Special "FEATURED" view shows only featured events
    if (selectedCategory === 'FEATURED') {
      events = events.filter(e => e.featured);
    } else if (selectedCategory !== EventCategory.ALL) {
      events = events.filter(e => e.category === selectedCategory);
    }

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

  // All events for map view (no category filtering - shows everything)
  const mapEvents = useMemo(() => {
    let events = EVENTS_DATA;

    // Only apply search filtering, not category filtering
    if (aiSearchResults !== null) {
      const orderMap = new Map<string, number>(aiSearchResults.map((id, index) => [id, index]));
      return events.filter(e => aiSearchResults.includes(e.id)).sort((a, b) => (orderMap.get(a.id) ?? 999) - (orderMap.get(b.id) ?? 999));
    }
    if (searchQuery && aiSearchResults === null) {
      const lowerQuery = searchQuery.toLowerCase();
      events = events.filter(e => e.name.toLowerCase().includes(lowerQuery) || e.location.toLowerCase().includes(lowerQuery) || e.tags.some(tag => tag.toLowerCase().includes(lowerQuery)));
    }

    return events;
  }, [searchQuery, aiSearchResults]);

  // Limit events for list view to prevent UI flooding
  const filteredEvents = useMemo(() => {
    return allFilteredEvents.slice(0, 50);
  }, [allFilteredEvents]);

  const getTranslatedCategory = (category: string) => {
    return getCategoryTranslation(category as EventCategory, language);
  };

  // Batch translate all event descriptions when language changes
  React.useEffect(() => {
    const batchTranslateEvents = async () => {
      if (language === 'en') {
        setEventTranslations({});
        return;
      }

      // Get all unique descriptions from filtered events
      const descriptions = filteredEvents.map(e => e.description);

      if (descriptions.length === 0) return;

      try {
        const translated = await translateBatch(descriptions, language);

        // Map translations back to event IDs
        const translationMap: Record<string, string> = {};
        filteredEvents.forEach((event, index) => {
          translationMap[event.id] = translated[index];
        });

        setEventTranslations(translationMap);
      } catch (error) {
        console.error('Batch translation failed:', error);
        setEventTranslations({});
      }
    };

    batchTranslateEvents();
  }, [language, filteredEvents]);

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
          <>
            {searchError && (
              <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
                <div className="flex-1">
                  <p className="text-red-400 text-sm font-semibold">{searchError}</p>
                </div>
                <button onClick={() => setSearchError(null)} className="text-red-400 hover:text-red-300">
                  <X size={18} />
                </button>
              </div>
            )}

            {/* Map/List View Toggle */}
            <div className="flex justify-end mb-4">
              <div className="inline-flex gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
                <button
                  onClick={() => setDirectoryViewMode(DirectoryViewMode.LIST)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${directoryViewMode === DirectoryViewMode.LIST ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                >
                  <LayoutGrid size={14} /> {t.listView || "List View"}
                </button>
                <button
                  onClick={() => setDirectoryViewMode(DirectoryViewMode.MAP)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${directoryViewMode === DirectoryViewMode.MAP ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                >
                  <MapIcon size={14} /> {t.mapView || "Map View"}
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {directoryViewMode === DirectoryViewMode.LIST && (
                <aside className={`lg:w-64 flex-shrink-0 hidden lg:block`}>
                  <div className="sticky top-24">
                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2"><Filter size={16} className="text-mantis-400" /> {t.industries}</h3>
                    <div className="relative mb-3">
                      <input
                        type="text"
                        placeholder={t.filterCategories}
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:border-mantis-500/50 transition-colors"
                      />
                      {categoryFilter && (
                        <button onClick={() => setCategoryFilter('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200">
                          <X size={14} />
                        </button>
                      )}
                    </div>
                    <div className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                      <button onClick={() => setSelectedCategory('FEATURED')} className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${selectedCategory === 'FEATURED' ? 'bg-mantis-600/20 text-mantis-400 border border-mantis-500/30' : 'text-slate-400 hover:bg-slate-800'}`}>⭐ {t.featuredEvents}</button>
                      {EVENT_CATEGORIES.filter(cat =>
                        categoryFilter === '' ||
                        getTranslatedCategory(cat).toLowerCase().includes(categoryFilter.toLowerCase())
                      ).map((category) => (
                        <button key={category} onClick={() => setSelectedCategory(category)} className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${selectedCategory === category ? 'bg-mantis-600/20 text-mantis-400 border border-mantis-500/30' : 'text-slate-400 hover:bg-slate-800'}`}>{getTranslatedCategory(category)}</button>
                      ))}
                    </div>
                  </div>
                </aside>
              )}
              <div className="flex-1">
                {directoryViewMode === DirectoryViewMode.LIST ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredEvents.map((event) => <EventCard key={event.id} event={event} user={user} language={language} onRegister={handleNewRegistration} translatedDescription={eventTranslations[event.id]} />)}
                  </div>
                ) : (
                  <MapView
                    events={mapEvents}
                    currentLanguage={language}
                    onEventClick={(event) => {
                      setDirectoryViewMode(DirectoryViewMode.LIST);  // Switch to list view
                      setAutoRegisterEvent(event);  // Opens RegistrationModal with event details
                    }}
                  />
                )}
              </div>
            </div>
          </>
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
