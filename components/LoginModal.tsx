
import React from 'react';
import { User, X, Briefcase, Ticket } from 'lucide-react';
import { User as UserType, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LoginModalProps {
  onClose: () => void;
  onLogin: (user: UserType) => void;
  language: Language;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin, language }) => {
  const t = TRANSLATIONS[language];
  const handleLogin = (role: 'organizer' | 'attendee', tier: 'free' | 'pro') => {
    onLogin({
      name: role === 'organizer' ? (tier === 'pro' ? 'Sarah (Pro)' : 'Budi (Free)') : 'Alice Tan',
      role: role,
      tier: tier,
      email: role === 'attendance' ? 'alice@example.com' : 'user@example.com',
      avatar: `https://i.pravatar.cc/150?u=${tier + role}`,
      jobTitle: role === 'attendee' ? 'Innovation Lead' : undefined,
      industry: role === 'attendee' ? 'Fintech' : undefined,
      goals: role === 'attendee' ? 'I am looking to expand our payment gateway partners in Southeast Asia.' : undefined
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white italic uppercase tracking-tighter">{t.loginTitle}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-slate-400 text-sm mb-4 font-medium">
            {t.loginSubtitle}
          </p>

          <div className="space-y-3">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{t.loginOrganizers}</span>
            <button
              onClick={() => handleLogin('organizer', 'free')}
              className="w-full group flex items-center justify-between p-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-600 rounded-lg group-hover:bg-slate-500 text-white">
                  <Briefcase size={20} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">{t.createEvent}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{t.loginOrgDesc}</div>
                </div>
              </div>
            </button>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{t.loginAttendees}</span>
            <button
              onClick={() => handleLogin('attendee', 'free')}
              className="w-full group flex items-center justify-between p-4 bg-mantis-900/20 hover:bg-mantis-900/30 border border-mantis-500/30 hover:border-mantis-500/50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-mantis-500/20 rounded-lg group-hover:bg-mantis-500/30 text-mantis-400">
                  <Ticket size={20} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-mantis-400">{t.register}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{t.loginAttDesc}</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-slate-900 p-4 text-center text-[10px] font-black uppercase tracking-widest text-slate-500">
          Secure Regional Node Auth Active
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
