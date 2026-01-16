
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  return (
    <footer className="border-t border-slate-800 bg-slate-900 mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-mantis-500 flex items-center justify-center text-slate-900 font-bold">N</div>
            <span className="text-xl font-bold text-white italic uppercase tracking-tighter">Nusantara Events</span>
          </div>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Nusantara SEA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">{t.footerPrivacy}</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">{t.footerTerms}</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">{t.footerSubmit}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
