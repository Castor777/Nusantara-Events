import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-mantis-500 flex items-center justify-center text-slate-900 font-bold">N</div>
            <span className="text-xl font-bold text-white">Nusantara Events</span>
          </div>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Nusantara Events. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Submit Event</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;