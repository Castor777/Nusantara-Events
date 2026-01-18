
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
    <div className="relative overflow-hidden pt-20 pb-12 lg:pt-32 lg:pb-20 mesh-gradient">
      {/* Dramatic Animated background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-mantis-500/10 rounded-full blur-[120px] animate-slow-float"></div>
        <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[180px] animate-pulse"></div>
      </div>

      {/* Statistics Panel - Aligned with sidebar */}
      <div className="absolute top-28 left-[max(1rem,calc((100vw-80rem)/2+2rem))] z-10 hidden lg:block">
        <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-xl p-4 space-y-3 w-64">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-mantis-400">472</span>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Events</span>
          </div>
          <div className="h-px bg-slate-800"></div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-mantis-400">8</span>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Countries</span>
          </div>
          <div className="h-px bg-slate-800"></div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-mantis-400">30+</span>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Industries</span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-5xl font-medium tracking-tight text-white sm:text-7xl lg:text-8xl mb-8 leading-[0.9] font-display">
          <span className="block opacity-60 text-xl sm:text-2xl mb-4 font-sans tracking-[0.4em] uppercase">{t.upcoming}</span>
          <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-white via-mantis-200 to-emerald-600 drop-shadow-2xl">
            SEA Trade Events
          </span>
        </h1>
        <p className="mx-auto max-w-xl text-lg text-slate-400 mb-12 font-medium leading-relaxed tracking-wide opacity-80 italic">
          {t.heroSubtitle}
        </p>

        <div className="relative mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-mantis-500/20 to-indigo-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative flex items-center hero-glass rounded-xl p-2 shadow-2xl">
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
                  className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-semibold uppercase text-[10px] tracking-widest transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSearching ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                  <span className="whitespace-nowrap">{t.aiSearch}</span>
                </button>
                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-semibold uppercase text-[10px] tracking-widest transition-colors"
                >
                  {t.find}
                </button>
              </div>
            </div>
          </form>
          <p className="mt-4 text-[10px] text-slate-500 font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-1 h-1 bg-mantis-500 rounded-full"></span>
            {t.autoTagline}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
