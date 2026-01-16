
import React, { useState, useEffect } from 'react';
import { predictTurnout } from '../services/geminiService';
import { EVENTS_DATA, TRANSLATIONS } from '../constants';
import { 
  Users, Zap, BrainCircuit, BarChart3, MessageSquare, 
  Workflow, CheckCircle, Database, ArrowUpRight, QrCode, ScanLine, UserPlus, Globe, Wallet, Activity, Send, 
  Fingerprint, UserCheck, Loader2, Landmark, ShieldCheck, Mail, Cpu, Sparkles, RefreshCcw, History
} from 'lucide-react';
import { User, PredictionResult, Registration, Language } from '../types';
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
  
  // Automation specific states
  const [isAutoMode, setIsAutoMode] = useState(true);
  const [logs, setLogs] = useState<{ id: number, msg: string, type: 'info' | 'success' | 'warn' }[]>([]);

  useEffect(() => {
    const mocks: Registration[] = [
      { id: 'REG-1', eventId: '1', attendeeName: 'Andi Pratama', email: 'andi@startup.id', phone: '+6281234567', waOptIn: true, waStatus: 'Delivered', emailStatus: 'Sent', ticketType: 'Standard', paymentStatus: 'Paid', paymentMethod: 'QRIS', amountPaid: 450, currency: 'SGD', timestamp: '2024-05-20T10:00:00Z', qrCode: 'REG-1', checkedIn: false, aiBriefing: 'Focus on cloud serverless for your fintech goals.' },
      { id: 'REG-2', eventId: '1', attendeeName: 'Somsak Lee', email: 'lee@bkk.th', phone: '+6689876543', waOptIn: true, waStatus: 'Delivered', emailStatus: 'Opened', ticketType: 'VIP', paymentStatus: 'Paid', paymentMethod: 'PromptPay', amountPaid: 1125, currency: 'SGD', timestamp: '2024-05-20T11:30:00Z', qrCode: 'REG-2', checkedIn: false, aiBriefing: 'Strategic VIP networking matches generated.' },
    ];
    setLocalRegistrations([...mocks, ...registrations]);
  }, [registrations]);

  const addLog = (msg: string, type: 'info' | 'success' | 'warn' = 'info') => {
    setLogs(prev => [{ id: Date.now(), msg, type }, ...prev].slice(0, 10));
  };

  const handleScanSuccess = (code: string) => {
    setShowScanner(false);
    const attendee = localRegistrations.find(r => r.id === code);
    if (attendee) {
      if (attendee.checkedIn) {
        setCheckInMessage({ text: "Already Checked-in", type: 'error', attendee });
        addLog(`Double-entry attempt: ${attendee.attendeeName}`, 'warn');
      } else {
        const updated = { ...attendee, checkedIn: true, checkInTime: new Date().toISOString() };
        setLocalRegistrations(prev => prev.map(r => r.id === attendee.id ? updated : r));
        setCheckInMessage({ text: "Access Granted", type: 'success', attendee: updated });
        addLog(`Authenticated: ${attendee.attendeeName} (${attendee.ticketType})`, 'success');
      }
    } else {
      setCheckInMessage({ text: "Invalid Credential", type: 'error' });
      addLog(`Unauthorized QR pulse detected`, 'warn');
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
      {showWalkInModal && <RegistrationModal event={EVENTS_DATA[0]} user={null} onClose={() => setShowWalkInModal(false)} onSuccess={(reg) => { setLocalRegistrations(prev => [reg, ...prev]); addLog(`New Walk-in Registered: ${reg.attendeeName}`, 'success'); }} language={language} />}

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
               { icon: MessageSquare, label: 'WA Delivery', val: '100%', col: 'text-blue-400', bg: 'bg-blue-500/10' },
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
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter flex items-center gap-3"><QrCode className="text-mantis-400" size={32} /> Terminal Mode</h3>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">Ground Access Ledger Active</p>
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
                        <div className="text-center"><UserCheck size={24} className="mx-auto text-slate-700 mb-2" /><p className="text-[10px] font-black text-slate-700 uppercase">Standby for Handshake...</p></div>
                      ) : (
                        <div className="animate-in zoom-in-95">
                           <p className={`text-xl font-black uppercase tracking-tight mb-2 ${checkInMessage.type === 'success' ? 'text-mantis-400' : 'text-red-400'}`}>{checkInMessage.text}</p>
                           {checkInMessage.attendee && (
                             <div>
                               <p className="text-white font-bold">{checkInMessage.attendee.attendeeName}</p>
                               <p className="text-[10px] text-slate-500 uppercase mt-1">Badge ID: {checkInMessage.attendee.id}</p>
                             </div>
                           )}
                        </div>
                      )}
                   </div>
                   <div className="bg-slate-900/50 rounded-3xl border border-slate-700 p-6 overflow-hidden">
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Arrival Stream</h4>
                      <div className="space-y-4">
                        {localRegistrations.filter(r => r.checkedIn).slice(0, 3).map((r, i) => (
                          <div key={i} className="flex justify-between items-center text-xs animate-in slide-in-from-left-2">
                            <span className="text-slate-300 font-bold">{r.attendeeName}</span>
                            <span className="text-slate-600 font-mono italic">{new Date(r.checkInTime || '').toLocaleTimeString()}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black text-white italic uppercase tracking-tighter flex items-center gap-3"><Wallet className="text-mantis-400" size={24} /> Regional Node Flow</h3>
                <div className="mt-8 space-y-4">
                  <div className="bg-slate-900 p-4 rounded-2xl flex justify-between items-center border border-slate-800">
                    <div><span className="text-[10px] text-slate-500 font-black uppercase">Singapore</span><p className="text-xl font-black text-white">SGD 482,500</p></div>
                    <ArrowUpRight className="text-mantis-400" />
                  </div>
                  <div className="bg-slate-900 p-4 rounded-2xl flex justify-between items-center border border-slate-800 opacity-60">
                    <div><span className="text-[10px] text-slate-500 font-black uppercase">Indonesia</span><p className="text-xl font-black text-white">IDR 1.2B</p></div>
                    <Activity size={18} className="text-slate-600" />
                  </div>
                </div>
              </div>
              <button onClick={() => setActiveTab('automations')} className="mt-8 w-full py-4 border border-slate-700 rounded-2xl text-[10px] font-black uppercase text-slate-400 tracking-widest hover:text-white transition-all">Audit Communication Logs</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'automations' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 space-y-6">
          <div className="bg-slate-850 border border-slate-700 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-mantis-500/10 blur-[120px] rounded-full pointer-events-none"></div>
             
             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 relative z-10">
                <div className="max-w-xl">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-mantis-500/10 border border-mantis-500/30 rounded-full text-mantis-400 text-[10px] font-black uppercase tracking-widest mb-4">
                      <Cpu size={12} /> {t.autoMgmtCore} v4.2
                   </div>
                   <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-4 leading-tight">
                      {t.autoRegTerminal.split('&')[0]} & <span className="text-mantis-400">{t.autoRegTerminal.split('&')[1] || 'Terminal'}</span>
                   </h2>
                   <p className="text-slate-400 text-sm font-medium leading-relaxed">
                      {t.autoRegDesc}
                   </p>
                </div>
                
                <div className="flex flex-col items-center gap-4 bg-slate-900/50 p-8 rounded-[2rem] border border-slate-700 shadow-inner">
                   <div className="relative group cursor-pointer" onClick={() => { setScannerMode('checkin'); setShowScanner(true); }}>
                      <div className="absolute -inset-4 bg-mantis-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <div className="relative w-32 h-32 bg-slate-800 rounded-3xl flex items-center justify-center border border-slate-600 group-hover:border-mantis-400 transition-all group-hover:scale-105 active:scale-95">
                         <QrCode size={64} className="text-mantis-400" />
                      </div>
                      <div className="absolute bottom-0 right-0 p-2 bg-mantis-500 rounded-full text-slate-900 border-4 border-slate-900">
                         <ScanLine size={16} strokeWidth={3} />
                      </div>
                   </div>
                   <div className="text-center">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">{t.opticalHandshake}</span>
                      <button onClick={() => { setScannerMode('checkin'); setShowScanner(true); }} className="text-white font-black uppercase text-sm italic tracking-tighter hover:text-mantis-400 transition-colors">{t.startQuickCheckin}</button>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-700/50">
                   <div className="flex items-center gap-3 mb-4">
                      <History size={18} className="text-blue-400" />
                      <h4 className="text-[10px] font-black text-white uppercase tracking-widest">{t.pulseLogs}</h4>
                   </div>
                   <div className="space-y-2 h-48 overflow-y-auto scrollbar-hide pr-2">
                      {logs.length > 0 ? logs.map(log => (
                        <div key={log.id} className={`p-2.5 rounded-lg border text-[10px] font-mono leading-tight flex items-start gap-2 ${
                          log.type === 'success' ? 'bg-green-500/5 border-green-500/20 text-green-400' : 
                          log.type === 'warn' ? 'bg-red-500/5 border-red-500/20 text-red-400' : 
                          'bg-slate-800 border-slate-700 text-slate-400'
                        }`}>
                           <span className="opacity-50">[{new Date(log.id).toLocaleTimeString([], { hour12: false })}]</span>
                           <span>{log.msg}</span>
                        </div>
                      )) : (
                        <div className="h-full flex flex-col items-center justify-center opacity-30">
                           <RefreshCcw size={24} className="mb-2 animate-spin-slow" />
                           <span className="text-[10px] font-black uppercase">{t.listeningSignals}</span>
                        </div>
                      )}
                   </div>
                </div>

                <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-700/50">
                   <div className="flex items-center gap-3 mb-4">
                      <Workflow size={18} className="text-purple-400" />
                      <h4 className="text-[10px] font-black text-white uppercase tracking-widest">{t.autoSettings}</h4>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-slate-800 rounded-xl">
                         <span className="text-[10px] font-black text-slate-300 uppercase">{t.autoHandshake}</span>
                         <button onClick={() => setIsAutoMode(!isAutoMode)} className={`w-10 h-5 rounded-full transition-all relative ${isAutoMode ? 'bg-mantis-500' : 'bg-slate-600'}`}>
                            <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isAutoMode ? 'right-1' : 'left-1'}`}></div>
                         </button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-800 rounded-xl opacity-50">
                         <span className="text-[10px] font-black text-slate-300 uppercase">{t.instantWA}</span>
                         <div className="w-10 h-5 rounded-full bg-mantis-500 relative">
                            <div className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full"></div>
                         </div>
                      </div>
                      <div className="p-3 bg-slate-800 rounded-xl border border-dashed border-slate-600">
                         <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase italic">
                            <Sparkles size={12} /> {t.aiSmoothing}
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-700/50">
                   <div className="flex items-center gap-3 mb-4">
                      <Activity size={18} className="text-mantis-400" />
                      <h4 className="text-[10px] font-black text-white uppercase tracking-widest">{t.termVelocity}</h4>
                   </div>
                   <div className="flex flex-col items-center justify-center h-48 gap-4">
                      <div className="text-center">
                         <span className="text-5xl font-black text-white italic tracking-tighter">0.8<span className="text-xl text-slate-500 font-bold uppercase ml-1">sec</span></span>
                         <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mt-2">{t.avgHandshake}</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                         <div className="w-3/4 h-full bg-mantis-500 animate-pulse"></div>
                      </div>
                      <span className="text-[10px] font-black text-mantis-400 uppercase tracking-widest flex items-center gap-1">
                         <ShieldCheck size={12} /> {t.optNodeActive}
                      </span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="animate-in fade-in space-y-6">
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter flex items-center gap-3"><BrainCircuit className="text-mantis-400" size={32} /> Demand Prediction</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">AI-Driven Attendance Forecasting</p>
              </div>
              <button 
                onClick={handlePredict} 
                disabled={predicting}
                className="bg-mantis-600 hover:bg-mantis-500 text-white font-black py-3 px-6 rounded-xl transition-all shadow-lg flex items-center gap-2 text-xs uppercase tracking-widest"
              >
                {predicting ? <Loader2 className="animate-spin" size={16} /> : <RefreshCcw size={16} />}
                Run AI Forecast
              </button>
            </div>

            {prediction ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in zoom-in-95">
                <div className="space-y-6">
                  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Estimated Total Attendance</span>
                    <div className="text-5xl font-black text-white italic tracking-tighter">{prediction.estimatedTotal.toLocaleString()}</div>
                    <div className="mt-4 flex items-center gap-2">
                       <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="h-full bg-mantis-500" style={{ width: `${prediction.confidenceScore * 100}%` }}></div>
                       </div>
                       <span className="text-[10px] font-black text-mantis-400 uppercase">{(prediction.confidenceScore * 100).toFixed(0)}% Confidence</span>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                    <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-4">Contributing Factors</h4>
                    <div className="space-y-2">
                      {prediction.factors.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                          <CheckCircle size={12} className="text-mantis-500" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-mantis-500/5 border border-mantis-500/20 rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-mantis-400 mb-4">
                    <Sparkles size={20} />
                    <h4 className="text-[10px] font-black uppercase tracking-widest">AI Strategic Recommendation</h4>
                  </div>
                  <p className="text-white font-medium leading-relaxed italic">"{prediction.recommendation}"</p>
                </div>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center border-2 border-slate-700 border-dashed rounded-2xl opacity-50">
                <BrainCircuit size={48} className="text-slate-700 mb-4" />
                <p className="text-[10px] font-black text-slate-500 uppercase">Initialize Regional Prediction Node</p>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'registrations' && (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in">
          <div className="p-8 border-b border-slate-700 flex justify-between items-center">
            <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">{t.registrations}</h3>
            <button onClick={() => setShowWalkInModal(true)} className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
              <UserPlus size={16} /> Add Walk-in
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-900/50">
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Attendee</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Ticket</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Payment</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {localRegistrations.map((reg) => (
                  <tr key={reg.id} className="hover:bg-slate-700/30 transition-colors">
                    <td className="px-8 py-5">
                      <div className="font-bold text-white">{reg.attendeeName}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-tight">{reg.email}</div>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`text-[10px] font-black px-2 py-1 rounded-md uppercase ${reg.ticketType === 'VIP' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-700 text-slate-300'}`}>
                        {reg.ticketType}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${reg.checkedIn ? 'bg-mantis-500' : 'bg-orange-500'}`}></div>
                        <span className="text-[10px] font-black text-white uppercase">{reg.checkedIn ? 'Arrived' : 'Expected'}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="text-xs font-bold text-slate-300">{reg.paymentMethod}</div>
                      <div className="text-[10px] text-mantis-500 font-black uppercase">{reg.paymentStatus}</div>
                    </td>
                    <td className="px-8 py-5 text-xs text-slate-500 font-mono">
                      {new Date(reg.timestamp).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'integrations' && (
        <div className="animate-in fade-in">
          <IntegrationsHub />
        </div>
      )}
    </div>
  );
};

export default OrganizerDashboard;
