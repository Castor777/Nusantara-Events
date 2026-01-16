
import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Language } from '../types';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const languages: { code: Language; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'id', label: 'Indonesian', native: 'Bahasa Indonesia' },
  { code: 'th', label: 'Thai', native: 'ไทย' },
  { code: 'zh', label: 'Chinese', native: '繁體中文' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeLang = languages.find((l) => l.code === currentLanguage) || languages[0];

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white transition-all duration-200"
      >
        <Globe size={14} className="text-mantis-400" />
        <span className="text-xs font-black uppercase tracking-widest">{currentLanguage}</span>
        <ChevronDown size={12} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-[100] animate-in fade-in zoom-in-95 duration-200">
          <div className="p-2 border-b border-slate-700 bg-slate-900/50">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Select Language</span>
          </div>
          <div className="p-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  currentLanguage === lang.code
                    ? 'bg-mantis-500/10 text-mantis-400'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <div className="flex flex-col items-start">
                  <span className="font-bold">{lang.label}</span>
                  <span className="text-[10px] opacity-60 font-medium">{lang.native}</span>
                </div>
                {currentLanguage === lang.code && <Check size={14} className="text-mantis-400" />}
              </button>
            ))}
          </div>
          <div className="p-2 bg-slate-900/50 text-[9px] text-center text-slate-500 font-bold uppercase tracking-tighter">
            Regional Localization Active
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
