
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
  { code: 'vi', label: 'Vietnamese', native: 'Tiếng Việt' },
  { code: 'ms', label: 'Malay', native: 'Bahasa Melayu' },
  { code: 'tl', label: 'Filipino', native: 'Wikang Filipino' },
  { code: 'km', label: 'Khmer', native: 'ភាសាខ្มែរ' },
  { code: 'my', label: 'Burmese', native: 'မြန်မာဘာသာ' },
  { code: 'lo', label: 'Lao', native: 'ภาษาลาว' },
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
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white transition-all duration-200"
      >
        <Globe size={14} className="text-mantis-400" />
        <span className="text-xs font-black uppercase tracking-widest hidden sm:inline">{currentLanguage}</span>
        <ChevronDown size={12} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-[100] animate-in fade-in zoom-in-95 duration-200">
          <div className="p-3 border-b border-slate-800 bg-slate-900/50">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-2">Regional Nodes</span>
          </div>
          <div className="max-h-[380px] overflow-y-auto p-1.5 scrollbar-hide">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all mb-1 group ${
                  currentLanguage === lang.code
                    ? 'bg-mantis-500 text-slate-900 shadow-lg shadow-mantis-500/20'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex flex-col items-start leading-tight">
                  <span className={`font-black uppercase tracking-tight ${currentLanguage === lang.code ? 'text-slate-900' : 'text-white'}`}>
                    {lang.native}
                  </span>
                  <span className={`text-[10px] font-bold tracking-widest uppercase opacity-60 ${currentLanguage === lang.code ? 'text-slate-800' : 'text-slate-500'}`}>
                    {lang.label}
                  </span>
                </div>
                {currentLanguage === lang.code && <Check size={16} strokeWidth={4} className="text-slate-900" />}
              </button>
            ))}
          </div>
          <div className="p-3 bg-slate-950/80 text-[9px] text-center text-slate-600 font-black uppercase tracking-[0.15em] border-t border-slate-800">
            SEA Localization Node v1.4
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
