
import React, { useState } from 'react';
import { Search, Sparkles, Loader2, QrCode } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface HeroProps {
  onSearch: (query: string, useAi: boolean) => void;
  onOpenScanner: () => void;
  isSearching: boolean;
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ onSearch, onOpenScanner, isSearching, language }) => {
  const [inputValue, setInputValue] = useState('');
  const t = TRANSLATIONS[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue, false);
    }
  };

  const handleAiSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue, true);
    }
  };

  return (
    <div className="relative overflow-hidden bg-slate-900 pt-20 pb-12 lg:pt-32 lg:pb-20">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-mantis-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 italic uppercase tracking-tighter">
          {t.upcoming} <span className="text-transparent bg-clip-text bg-gradient-to-r from-mantis-400 to-emerald-600">{t.seaEvents}</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10 font-medium leading-relaxed">
          {t.heroSubtitle}
        </p>

        <div className="relative mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-mantis-500 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-slate-800 rounded-xl p-2 shadow-2xl ring-1 ring-slate-700">
              <div className="pl-4 text-slate-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                className="flex-1 bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 focus:outline-none px-4 py-2 text-lg font-medium"
                placeholder={t.searchPlaceholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="flex items-center gap-2 pr-2">
                 <button 
                  type="button"
                  onClick={onOpenScanner}
                  className="p-2 text-slate-400 hover:text-mantis-400 transition-colors"
                  title="Scan QR Code"
                >
                  <QrCode size={24} />
                </button>
                 <button 
                  type="button"
                  onClick={handleAiSearch}
                  disabled={isSearching}
                  className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-black uppercase text-[10px] tracking-widest transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSearching ? <Loader2 className="animate-spin" size={18}/> : <Sparkles size={18} />}
                  <span className="whitespace-nowrap">{t.aiSearch}</span>
                </button>
                <button 
                  type="submit"
                  disabled={isSearching}
                  className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-black uppercase text-[10px] tracking-widest transition-colors"
                >
                  {t.find}
                </button>
              </div>
            </div>
          </form>
          <p className="mt-4 text-[10px] text-slate-500 font-black uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-1 h-1 bg-mantis-500 rounded-full"></span>
            {t.autoTagline}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
