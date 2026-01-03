import React, { useState, useMemo } from 'react';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import SponsorshipCard from './components/SponsorshipCard';
import OrganizerDashboard from './components/OrganizerDashboard';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import { EVENTS_DATA, EVENT_CATEGORIES, SPONSORSHIPS_DATA, TRANSLATIONS } from './constants';
import { EventCategory, User, Language } from './types';
import { semanticSearchEvents } from './services/geminiService';
import { LayoutGrid, Filter, AlertCircle, X, Calendar, Globe, LogOut } from 'lucide-react';

enum ViewMode {
  DIRECTORY = 'Directory',
  SPONSORSHIPS = 'Sponsorships',
  DASHBOARD = 'Organizer Dashboard'
}

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.DIRECTORY);
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>(EventCategory.ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiSearchResults, setAiSearchResults] = useState<string[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  
  // Platform Features State
  const [user, setUser] = useState<User | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  const t = TRANSLATIONS[language];

  const handleSearch = async (query: string, useAi: boolean) => {
    setViewMode(ViewMode.DIRECTORY); // Force switch to directory on search
    setSearchQuery(query);
    setAiSearchResults(null);
    
    if (!query.trim()) return;

    if (useAi) {
      setIsSearching(true);
      try {
        const matchingIds = await semanticSearchEvents(query, EVENTS_DATA);
        setAiSearchResults(matchingIds);
        setSelectedCategory(EventCategory.ALL);
      } catch (err) {
        console.error("Search failed", err);
      } finally {
        setIsSearching(false);
      }
    }
  };

  const filteredEvents = useMemo(() => {
    let events = EVENTS_DATA;

    if (selectedCategory !== EventCategory.ALL) {
      events = events.filter(e => e.category === selectedCategory);
    }

    if (aiSearchResults !== null) {
      const orderMap = new Map<string, number>(aiSearchResults.map((id, index) => [id, index]));
      return events
        .filter(e => aiSearchResults.includes(e.id))
        .sort((a, b) => {
          const indexA = orderMap.get(a.id) ?? 999;
          const indexB = orderMap.get(b.id) ?? 999;
          return indexA - indexB;
        });
    }

    if (searchQuery && aiSearchResults === null) {
      const lowerQuery = searchQuery.toLowerCase();
      events = events.filter(e => 
        e.name.toLowerCase().includes(lowerQuery) ||
        e.location.toLowerCase().includes(lowerQuery) ||
        e.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }

    return events;
  }, [selectedCategory, searchQuery, aiSearchResults]);

  const clearSearch = () => {
    setSearchQuery('');
    setAiSearchResults(null);
  };

  const handleDashboardAccess = () => {
    if (!user) {
      setShowLoginModal(true);
    } else {
      setViewMode(ViewMode.DASHBOARD);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-mantis-500/30">
      
      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onLogin={(userData) => {
            setUser(userData);
            setViewMode(ViewMode.DASHBOARD);
          }}
        />
      )}

      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              clearSearch();
              setViewMode(ViewMode.DIRECTORY);
            }}>
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-mantis-400 to-mantis-600 flex items-center justify-center text-slate-900 font-bold shadow-lg shadow-mantis-500/20">N</div>
              <span className="hidden sm:inline text-xl font-bold tracking-tight">Nusantara Events</span>
            </div>
            
            <div className="hidden md:flex gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
                 <button
                    onClick={() => setViewMode(ViewMode.DIRECTORY)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                      viewMode === ViewMode.DIRECTORY 
                        ? 'bg-slate-700 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                 >
                   {t.navDirectory}
                 </button>
                 <button
                    onClick={() => setViewMode(ViewMode.SPONSORSHIPS)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                      viewMode === ViewMode.SPONSORSHIPS
                        ? 'bg-slate-700 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                 >
                   {t.navSponsorships}
                 </button>
                 <button
                    onClick={handleDashboardAccess}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-1 ${
                      viewMode === ViewMode.DASHBOARD
                        ? 'bg-slate-700 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                 >
                   {t.navDashboard}
                   {user && <span className="w-1.5 h-1.5 bg-mantis-500 rounded-full"></span>}
                 </button>
            </div>

            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors">
                  <Globe size={16} />
                  <span className="uppercase text-xs font-bold">{language}</span>
                </button>
                <div className="absolute right-0 top-full mt-2 w-24 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden hidden group-hover:block">
                  {(['en', 'id', 'th', 'zh'] as Language[]).map(lang => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`block w-full text-left px-3 py-2 text-xs hover:bg-slate-700 ${language === lang ? 'text-mantis-400 font-bold' : 'text-slate-300'}`}
                    >
                      {lang === 'en' ? 'English' : lang === 'id' ? 'Bahasa' : lang === 'th' ? 'ไทย' : '繁體中文'}
                    </button>
                  ))}
                </div>
              </div>

               {user ? (
                 <div className="flex items-center gap-3 pl-3 border-l border-slate-700">
                   <div className="flex flex-col items-end hidden sm:flex">
                     <span className="text-sm font-bold text-white leading-none">{user.name}</span>
                     <span className={`text-[10px] uppercase font-bold px-1 rounded leading-tight mt-1 ${user.tier === 'pro' ? 'bg-mantis-500 text-slate-900' : 'bg-slate-700 text-slate-300'}`}>
                       {user.tier}
                     </span>
                   </div>
                   <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-slate-600" />
                   <button 
                    onClick={() => { setUser(null); setViewMode(ViewMode.DIRECTORY); }}
                    className="text-slate-400 hover:text-red-400 transition-colors ml-1"
                    title="Logout"
                   >
                     <LogOut size={16} />
                   </button>
                 </div>
               ) : (
                <button 
                  onClick={() => setShowLoginModal(true)}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {t.login}
                </button>
               )}
               
              {!user && (
                <button 
                  onClick={() => setShowLoginModal(true)}
                  className="bg-mantis-600 hover:bg-mantis-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors hidden sm:block"
                >
                  {t.createEvent}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section (Only show on Directory View) */}
      {viewMode === ViewMode.DIRECTORY && (
        <Hero onSearch={handleSearch} isSearching={isSearching} language={language} />
      )}

      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${viewMode !== ViewMode.DIRECTORY ? 'pt-24' : ''}`}>
        
        {/* VIEW: DIRECTORY */}
        {viewMode === ViewMode.DIRECTORY && (
          <>
            {/* Search Results Bar */}
            {(searchQuery || aiSearchResults) && (
              <div className="mb-8 flex items-center justify-between bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2">
                    {aiSearchResults ? (
                      <span className="text-mantis-400 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 bg-mantis-400 rounded-full animate-pulse"></span>
                        AI Recommended Events
                      </span>
                    ) : (
                      <span className="text-slate-300">Search Results: "{searchQuery}"</span>
                    )}
                </div>
                <button onClick={clearSearch} className="text-slate-400 hover:text-white flex items-center gap-1 text-sm"><X size={16} /> Clear</button>
              </div>
            )}

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className={`lg:w-64 flex-shrink-0 ${showMobileFilter ? 'block' : 'hidden lg:block'}`}>
                <div className="sticky top-24">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Filter size={20} className="text-mantis-400" />
                    Industries
                  </h3>
                  <div className="space-y-1">
                    {EVENT_CATEGORIES.map((category) => (
                      <button
                        key={category}
                        onClick={() => { setSelectedCategory(category); setShowMobileFilter(false); }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedCategory === category
                            ? 'bg-mantis-600/20 text-mantis-400 border border-mantis-500/30'
                            : 'text-slate-400 hover:bg-slate-800'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4">
                <button onClick={() => setShowMobileFilter(!showMobileFilter)} className="w-full flex items-center justify-center gap-2 bg-slate-800 p-3 rounded-lg border border-slate-700 text-slate-300">
                  <Filter size={18} /> {showMobileFilter ? 'Hide Filters' : 'Show Categories'}
                </button>
              </div>

              {/* Event Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Calendar size={24} className="text-slate-500" />
                    {selectedCategory}
                  </h2>
                </div>

                {filteredEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-slate-800/30 rounded-2xl border border-slate-800 border-dashed">
                    <AlertCircle size={48} className="mx-auto text-slate-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-300 mb-2">No events found</h3>
                    <button onClick={clearSearch} className="mt-6 text-mantis-400 hover:underline">Clear filters</button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* VIEW: SPONSORSHIP MARKETPLACE */}
        {viewMode === ViewMode.SPONSORSHIPS && (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">Sponsorship Marketplace</h2>
              <p className="text-slate-400">Connect with urgent sponsorship opportunities for SEA's top upcoming events.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SPONSORSHIPS_DATA.map((item) => (
                <SponsorshipCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* VIEW: ORGANIZER DASHBOARD */}
        {viewMode === ViewMode.DASHBOARD && (
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Organizer Dashboard</h2>
              {user?.tier === 'pro' && (
                <span className="px-3 py-1 bg-mantis-500/20 text-mantis-400 rounded-full text-xs font-bold border border-mantis-500/30">
                  PRO PLAN
                </span>
              )}
               {user?.tier === 'free' && (
                <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-bold border border-slate-600">
                  FREE PLAN
                </span>
              )}
            </div>
            <OrganizerDashboard user={user} />
          </div>
        )}

      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;