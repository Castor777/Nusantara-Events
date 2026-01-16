
import React, { useState, useEffect } from 'react';
import { predictTurnout } from '../services/geminiService';
import { EVENTS_DATA, TRANSLATIONS } from '../constants';
import { 
  Users, Zap, BrainCircuit, BarChart3, MessageSquare, 
  Workflow, CheckCircle, Database, ArrowUpRight, QrCode, ScanLine, UserPlus, Globe, Wallet, CreditCard, ShieldCheck as ShieldIcon,
  UserCheck, Search, Loader2, Fingerprint, Activity, Send
} from 'lucide-react';
import { User, PredictionResult, Registration, Event, Language } from '../types';
import IntegrationsHub from './IntegrationsHub';
import QRScannerModal from './QRScannerModal';
import RegistrationModal from './RegistrationModal';

interface OrganizerDashboardProps {
  user: User | null;
  registrations: Registration[];
  language: Language;
}

const OrganizerDashboard: React.FC<OrganizerDashboardProps> = ({ user, registrations, language }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'registrations' | 'integrations' | 'automations'>('overview');
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [predicting, setPredicting] = useState(false);
  const t = TRANSLATIONS[language];
  
  const [showScanner, setShowScanner] = useState(false);
  const [scannerMode, setScannerMode] = useState<'checkin' | 'register'>('checkin');
  const [checkInMessage, setCheckInMessage] = useState<{ text: string, type: 'success' | 'error', attendee?: Registration } | null>(null);
  const [localRegistrations, setLocalRegistrations] = useState<Registration[]>([]);
  const [showWalkInModal, setShowWalkInModal] = useState(false);

  useEffect(() => {
    const mocks: Registration[] = [
      { id: 'REG-1', eventId: '1', attendeeName: 'Andi Pratama', email: 'andi@startup.id', phone: '+6281234567', waOptIn: true, waStatus: 'Delivered', emailStatus: 'Sent', ticketType: 'Standard', paymentStatus: 'Paid', paymentMethod: 'QRIS', amountPaid: 450, currency: 'SGD', timestamp: '2024-05-20T10:00:00Z', qrCode: 'REG-1', checkedIn: false },
      { id: 'REG-2', eventId: '1', attendeeName: 'Somsak Lee', email: 'lee@bkk.th', phone: '+6689876543', waOptIn: true, waStatus: 'Delivered', emailStatus: 'Opened', ticketType: 'VIP', paymentStatus: 'Paid', paymentMethod: 'PromptPay', amountPaid: 1125, currency: 'SGD', timestamp: '2024-05-20T11:30:00Z', qrCode: 'REG-2', checkedIn: false },
    ];
    setLocalRegistrations([...mocks, ...registrations]);
  }, [registrations]);

  const handleScanSuccess = (code: string) => {
    setShowScanner(false);
    const attendee = localRegistrations.find(r => r.id === code);
    if (attendee) {
      if (attendee.checkedIn) {
        setCheckInMessage({ text: "Already Checked-in", type: 'error', attendee });
      } else {
        const updated = { ...attendee, checkedIn: true, checkInTime: new Date().toISOString() };
        setLocalRegistrations(prev => prev.map(r => r.id === attendee.id ? updated : r));
        setCheckInMessage({ text: "Access Granted", type: 'success', attendee: updated });
      }
    } else {
      setCheckInMessage({ text: "Invalid Credential", type: 'error' });
    }
    setTimeout(() => setCheckInMessage(null), 4000);
  };

  const handlePredict = async () => {
    setPredicting(true);
    const res = await predictTurnout(EVENTS_DATA[0], localRegistrations.length);
    setPrediction(res);
    setPredicting(false);
  };

  const currentCount = localRegistrations.length;
  const checkedInCount = localRegistrations.filter(r => r.checkedIn).length;

  return (
    <div className="space-y-6">
      {showScanner && <QRScannerModal onClose={() => setShowScanner(false)} onScan={handleScanSuccess} mode={scannerMode} />}
      {showWalkInModal && <RegistrationModal event={EVENTS_DATA[0]} user={null} onClose={() => setShowWalkInModal(false)} onSuccess={(reg) => setLocalRegistrations(prev => [reg, ...prev])} language={language} />}

      <div className="flex gap-2 border-b border-slate-700 pb-1 overflow-x-auto scrollbar-hide">
        {[
          { id: 'overview', label: t.overview, icon: Globe },
          { id: 'analytics', label: t.aiAnalytics, icon: BrainCircuit },
          { id: 'registrations', label: t.registrations, icon: Users },
          { id: 'automations', label: t.automations, icon: Workflow },
          { id: 'integrations', label: t.integrations, icon: Zap },
        ].map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`flex items-center gap-2 px-4 py-3 rounded-t-xl text-xs font-black uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${activeTab === tab.id ? 'border-mantis-500 text-mantis-400 bg-slate-800' : 'border-transparent text-slate-500 hover:text-white'}`}>
            {React.createElement(tab.icon, { size: 14 })}
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {[
               { icon: Users, label: t.totalRegs, val: currentCount, col: 'text-mantis-400', bg: 'bg-mantis-500/10' },
               { icon: Fingerprint, label: 'On-Ground', val: `${checkedInCount}/${currentCount}`, col: 'text-orange-400', bg: 'bg-orange-500/10' },
               { icon: Send, label: 'WA Sent', val: currentCount, col: 'text-blue-400', bg: 'bg-blue-500/10' },
               { icon: Activity, label: 'Live Flow', val: '42rpm', col: 'text-green-500', bg: 'bg-green-500/10' }
             ].map((stat, i) => (
               <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
                 <div className="flex items-center gap-3 mb-2">
                   <div className={`p-2 rounded-lg ${stat.bg} ${stat.col}`}>{React.createElement(stat.icon, { size: 20 })}</div>
                   <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
                 </div>
                 <p className="text-4xl font-black text-white">{stat.val}</p>
               </div>
             ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter flex items-center gap-3"><QrCode className="text-mantis-400" size={32} /> Live Terminal</h3>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">Ground Access Ledger</p>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => { setScannerMode('checkin'); setShowScanner(true); }} className="bg-mantis-600 hover:bg-mantis-500 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-xl text-xs uppercase tracking-widest flex items-center gap-3">
                      <ScanLine size={18} /> Launch Scanner
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[180px]">
                   <div className={`p-6 rounded-3xl border-2 transition-all flex flex-col justify-center ${!checkInMessage ? 'bg-slate-900/50 border-slate-700 border-dashed' : checkInMessage.type === 'success' ? 'bg-mantis-500/10 border-mantis-500 shadow-[0_0_40px_rgba(76,175,80,0.1)]' : 'bg-red-500/10 border-red-500'}`}>
                      {!checkInMessage ? (
                        <div className="text-center"><UserCheck size={24} className="mx-auto text-slate-700 mb-2" /><p className="text-[10px] font-black text-slate-700 uppercase">Standby...</p></div>
                      ) : (
                        <div className="animate-in zoom-in-95">
                           <p className={`text-xl font-black uppercase tracking-tight mb-2 ${checkInMessage.type === 'success' ? 'text-mantis-400' : 'text-red-400'}`}>{checkInMessage.text}</p>
                           {checkInMessage.attendee && <p className="text-white font-bold">{checkInMessage.attendee.attendeeName}</p>}
                        </div>
                      )}
                   </div>
                   <div className="bg-slate-900/50 rounded-3xl border border-slate-700 p-6 overflow-hidden">
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Live Activity</h4>
                      <div className="space-y-4">
                        {localRegistrations.filter(r => r.checkedIn).slice(0, 3).map((r, i) => (
                          <div key={i} className="flex justify-between items-center text-xs animate-in slide-in-from-left-2">
                            <span className="text-slate-300 font-bold">{r.attendeeName}</span>
                            <span className="text-slate-600 font-mono">{new Date(r.checkInTime || '').toLocaleTimeString()}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black text-white italic uppercase tracking-tighter flex items-center gap-3"><Wallet className="text-mantis-400" size={24} /> Regional Ledger</h3>
                <div className="mt-8 space-y-4">
                  <div className="bg-slate-900 p-4 rounded-2xl flex justify-between items-center">
                    <div><span className="text-[10px] text-slate-500 font-black uppercase">SG Node</span><p className="text-xl font-black text-white">SGD 482,500</p></div>
                    <ArrowUpRight className="text-mantis-400" />
                  </div>
                  <div className="bg-slate-900 p-4 rounded-2xl flex justify-between items-center opacity-60">
                    <div><span className="text-[10px] text-slate-500 font-black uppercase">ID Node</span><p className="text-xl font-black text-white">IDR 1.2B</p></div>
                    <Activity size={18} className="text-slate-600" />
                  </div>
                </div>
              </div>
              <button onClick={() => setActiveTab('automations')} className="mt-8 w-full py-4 border border-slate-700 rounded-2xl text-[10px] font-black uppercase text-slate-400 tracking-widest hover:text-white transition-all">Audit Communication</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl animate-in fade-in">
           <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/3 space-y-6">
                 <h3 className="text-xl font-black text-white italic uppercase tracking-tighter flex items-center gap-3"><BrainCircuit className="text-mantis-400" size={24} /> Forecasting Node</h3>
                 <p className="text-slate-400 text-sm">Gemini Pro executing market-specific prediction models for {EVENTS_DATA[0].location}.</p>
                 <button onClick={handlePredict} disabled={predicting} className="w-full bg-indigo-600 py-4 rounded-xl text-white font-black uppercase text-xs tracking-widest shadow-xl flex items-center justify-center gap-2">
                    {predicting ? <Loader2 className="animate-spin" size={16} /> : <Zap size={16} fill="currentColor" />} Run Analysis
                 </button>
              </div>
              <div className="lg:w-2/3">
                 {prediction ? (
                   <div className="animate-in slide-in-from-right-4">
                      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 mb-4">
                         <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 block">Projected Attendance</span>
                         <div className="text-6xl font-black text-white italic tracking-tighter">{prediction.estimatedTotal.toLocaleString()}</div>
                         <div className="text-mantis-400 text-sm font-bold mt-2 uppercase">Confidence Index: {Math.round(prediction.confidenceScore * 100)}%</div>
                      </div>
                      <div className="bg-indigo-600/10 border border-indigo-500/20 p-6 rounded-2xl">
                         <h4 className="text-[10px] font-black text-indigo-400 uppercase mb-2">AI Recommendation</h4>
                         <p className="text-sm text-indigo-100 italic leading-relaxed font-medium">"{prediction.recommendation}"</p>
                      </div>
                   </div>
                 ) : (
                   <div className="h-full border border-dashed border-slate-700 rounded-3xl flex flex-col items-center justify-center p-20 opacity-40"><BarChart3 size={48} className="mb-4 text-slate-700" /><p className="text-xs font-black uppercase">Execute Node analysis</p></div>
                 )}
              </div>
           </div>
        </div>
      )}

      {activeTab === 'registrations' && (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-xl animate-in fade-in">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-white italic uppercase tracking-tight">Master Ledger</h3>
              <button onClick={() => setShowWalkInModal(true)} className="bg-mantis-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase text-white hover:bg-mantis-500 transition-colors flex items-center gap-2"><UserPlus size={14} /> Manual Enrollment</button>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                 <thead>
                    <tr className="text-slate-500 uppercase text-[10px] font-black tracking-widest border-b border-slate-700"><th className="py-4">Attendee</th><th className="py-4">WA Channel</th><th className="py-4">Tier</th><th className="py-4 text-right">Status</th></tr>
                 </thead>
                 <tbody className="divide-y divide-slate-700/50">
                    {localRegistrations.map((reg, idx) => (
                       <tr key={idx} className={`hover:bg-slate-700/20 ${reg.checkedIn ? 'bg-mantis-500/5' : ''}`}>
                          <td className="py-4"><div className="font-bold text-white">{reg.attendeeName}</div><div className="text-[10px] text-slate-500">{reg.email}</div></td>
                          <td className="py-4"><span className="text-slate-300 font-mono text-xs">{reg.phone}</span></td>
                          <td className="py-4"><span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase border tracking-widest ${reg.ticketType === 'VIP' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>{reg.ticketType}</span></td>
                          <td className="py-4 text-right">{reg.checkedIn ? <span className="text-[10px] font-black text-mantis-400 uppercase">Authenticated</span> : <button onClick={() => handleScanSuccess(reg.id)} className="text-[9px] font-black text-slate-500 border border-slate-700 px-2 py-1 rounded hover:text-white uppercase tracking-widest">Verify</button>}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      )}

      {activeTab === 'integrations' && <IntegrationsHub />}
    </div>
  );
};

export default OrganizerDashboard;
