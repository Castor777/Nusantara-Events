
import React, { useState, useEffect } from 'react';
import { Event, User, Registration, Language } from '../types';
import { MapPin, Calendar, Star, Leaf, Users } from 'lucide-react';
import RegistrationModal from './RegistrationModal';
import { TRANSLATIONS } from '../constants';
import { translateText } from '../services/geminiService';

interface EventCardProps {
  event: Event;
  user: User | null;
  language: Language;
  onRegister?: (reg: Registration) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, user, language, onRegister }) => {
  const [showRegModal, setShowRegModal] = useState(false);
  const [translatedDesc, setTranslatedDesc] = useState(event.description);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const fetchTranslation = async () => {
      if (language === 'en') {
        setTranslatedDesc(event.description);
      } else {
        const result = await translateText(event.description, language);
        setTranslatedDesc(result);
      }
    };
    fetchTranslation();
  }, [language, event.description]);

  // Translate category enum key
  const getTranslatedCategory = (category: string) => {
    switch (category) {
      case 'Technology & AI': return t.tech;
      case 'Fintech & Crypto': return t.finance;
      case 'Lifestyle & Culture': return t.lifestyle;
      case 'B2B Trade Show': return t.b2b;
      case 'Startup & VC': return t.startup;
      default: return category;
    }
  };

  return (
    <>
      {showRegModal && (
        <RegistrationModal 
          event={event} 
          user={user} 
          onClose={() => setShowRegModal(false)} 
          onSuccess={(reg) => {
            if (onRegister) onRegister(reg);
            setShowRegModal(false);
          }}
        />
      )}
      
      <div className="group relative bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-mantis-500 transition-all duration-300 hover:shadow-lg hover:shadow-mantis-500/10 flex flex-col h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
            {event.featured && (
              <span className="bg-yellow-500/90 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                <Star size={10} fill="currentColor" /> {t.featured}
              </span>
            )}
            <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full backdrop-blur-sm ${
              event.sustainabilityScore === 'A' ? 'bg-green-500/90 text-white' : 'bg-slate-900/90 text-slate-300'
            }`}>
              <Leaf size={10} className="inline mr-1"/> {t.ecoScore}: {event.sustainabilityScore}
            </span>
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-2">
              <span className="text-[10px] text-mantis-400 font-black uppercase tracking-widest mb-1 block">
                {getTranslatedCategory(event.category)}
              </span>
              <h3 className="text-xl font-bold text-white group-hover:text-mantis-400 transition-colors italic uppercase tracking-tighter">
                {event.name}
              </h3>
          </div>
          
          <div className="space-y-2 mb-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-slate-500"/>
              <span className="text-xs font-medium">{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-slate-500"/>
              <span className="truncate text-xs font-medium">{event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Users size={14} className="text-slate-500"/>
              <span className="text-[10px] font-black uppercase tracking-wider">{event.predictedTurnout.toLocaleString()} {t.attendees}</span>
            </div>
          </div>

          <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow leading-relaxed font-medium">
            {translatedDesc}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t.from}</span>
              <span className="text-white font-black text-lg">{event.currency} {event.basePrice.toLocaleString()}</span>
            </div>
            <button 
              onClick={() => setShowRegModal(true)}
              className="bg-mantis-600 hover:bg-mantis-500 text-white font-black uppercase text-xs tracking-widest py-3 px-6 rounded-xl transition-all shadow-lg shadow-mantis-500/20"
            >
              {t.register}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
