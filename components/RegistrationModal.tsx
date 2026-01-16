
import React, { useState, useEffect } from 'react';
/* Added BrainCircuit to imports */
import { X, CreditCard, CheckCircle, Smartphone, ShieldCheck, Loader2, QrCode, Zap, MessageSquare, Ticket, Star, Globe, Phone, Check, Wallet, Banknote, Info, Copy, BrainCircuit } from 'lucide-react';
import { Event, User, Registration, Language } from '../types';
import { generatePersonalizedBriefing } from '../services/geminiService';
import { TRANSLATIONS } from '../constants';

interface RegistrationModalProps {
  event: Event;
  user: User | null;
  onClose: () => void;
  onSuccess: (reg: Registration) => void;
  language?: Language;
}

type TicketType = 'Standard' | 'VIP' | 'Group';

const RegistrationModal: React.FC<RegistrationModalProps> = ({ event, user, onClose, onSuccess, language = 'en' }) => {
  const t = TRANSLATIONS[language];
  const [step, setStep] = useState<'contact' | 'whatsapp-setup' | 'whatsapp-otp' | 'tickets' | 'profile' | 'payment' | 'qr-simulate' | 'processing' | 'confirmation'>('contact');
  const [loading, setLoading] = useState(false);
  
  // States
  const [selectedCurrency, setSelectedCurrency] = useState<'BASE' | 'USD' | 'SGD' | 'IDR' | 'THB'>('BASE');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [waOptIn, setWaOptIn] = useState(false); 
  const [otpValue, setOtpValue] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState<TicketType>('Standard');
  const [dispatchStatus, setDispatchStatus] = useState({ ai: 'pending', whatsapp: 'pending', email: 'pending', payment: 'pending' });
  const [aiBriefing, setAiBriefing] = useState<{ whatsapp: string, email: string } | null>(null);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    countryCode: event.currency === 'IDR' ? '+62' : event.currency === 'THB' ? '+66' : '+65', 
    jobTitle: user?.jobTitle || '',
    goals: user?.goals || ''
  });

  const basePrice = selectedTicketType === 'VIP' ? event.basePrice * 2.5 : event.basePrice;
  const processingFee = basePrice * 0.05;
  const totalPrice = basePrice + processingFee;

  const getConversionRate = (to: string) => {
    if (to === 'BASE') return 1;
    const rates: Record<string, Record<string, number>> = {
      SGD: { USD: 0.74, IDR: 11800, THB: 26.5 },
      IDR: { USD: 0.000064, SGD: 0.000085, THB: 0.0022 },
      THB: { USD: 0.028, SGD: 0.038, IDR: 445 },
      USD: { SGD: 1.35, IDR: 15600, THB: 35.8 }
    };
    return rates[event.currency]?.[to] || 1;
  };

  const convertPrice = (val: number) => val * getConversionRate(selectedCurrency);
  const getCurrencySymbol = () => selectedCurrency === 'BASE' ? event.currency : selectedCurrency;

  const getRegionalMethods = () => {
    switch (event.currency) {
      case 'SGD':
        return [
          { id: 'paynow', name: 'PayNow', icon: QrCode, description: t.paynowDesc, region: 'Singapore', fee: 'No fee', type: 'qr', recommended: true, color: 'text-[#7B3F98]' },
          { id: 'grabpay', name: 'GrabPay', icon: Smartphone, description: t.grabpayDesc, region: 'Singapore', fee: '1.2%', type: 'wallet', recommended: true, color: 'text-[#00B14F]' },
          { id: 'card', name: 'Credit Card', icon: CreditCard, description: 'International Visa/MC', region: 'Global', fee: '2.5%', type: 'card', color: 'text-slate-400' },
        ];
      case 'IDR':
        return [
          { id: 'qris', name: 'QRIS', icon: QrCode, description: t.qrisDesc, region: 'Indonesia', fee: 'No fee', type: 'qr', recommended: true, color: 'text-[#ED1C24]' },
          { id: 'va', name: 'Virtual Account', icon: Wallet, description: t.vaDesc, region: 'Indonesia', fee: 'IDR 4.5k', type: 'transfer', color: 'text-blue-400' },
          { id: 'card', name: 'Credit Card', icon: CreditCard, description: 'International Visa/MC', region: 'Global', fee: '3%', type: 'card', color: 'text-slate-400' },
        ];
      case 'THB':
        return [
          { id: 'promptpay', name: 'PromptPay', icon: QrCode, description: t.promptpayDesc, region: 'Thailand', fee: 'No fee', type: 'qr', recommended: true, color: 'text-[#2E3192]' },
          { id: 'truemoney', name: 'TrueMoney', icon: Smartphone, description: t.truemoneyDesc, region: 'Thailand', fee: '1.5%', type: 'wallet', color: 'text-orange-500' },
          { id: 'card', name: 'Credit Card', icon: CreditCard, description: 'International Visa/MC', region: 'Global', fee: '2.5%', type: 'card', color: 'text-slate-400' },
        ];
      default:
        return [{ id: 'card', name: 'Credit Card', icon: CreditCard, description: 'International Visa/MC', region: 'Global', fee: 'Var', type: 'card', color: 'text-slate-400' }];
    }
  };

  const methods = getRegionalMethods();

  useEffect(() => {
    if (!methods.find(m => m.id === paymentMethod)) setPaymentMethod(methods[0]?.id || '');
  }, [methods]);

  const handleOtpInput = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otpValue];
    newOtp[index] = value;
    setOtpValue(newOtp);
    if (value && index < 5) document.getElementById(`otp-${index + 1}`)?.focus();
  };

  const handleVerifyOtp = async () => {
    setIsVerifying(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsVerifying(false);
    setStep('tickets');
  };

  const handleFinalize = async () => {
    setLoading(true);
    setStep('processing');
    const sequence = ['payment', 'ai', 'whatsapp', 'email'];
    for (const key of sequence) {
      setDispatchStatus(s => ({ ...s, [key]: 'processing' }));
      await new Promise(r => setTimeout(r, 800));
      if (key === 'ai') {
        const briefing = await generatePersonalizedBriefing({ name: formData.name, jobTitle: formData.jobTitle, goals: formData.goals } as User, event, event.predictedTurnout);
        setAiBriefing(briefing);
      }
      setDispatchStatus(s => ({ ...s, [key]: 'completed' }));
    }
    setStep('confirmation');
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 overflow-y-auto selection:bg-mantis-500/30">
      <div className="bg-slate-900 border border-slate-700 rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] my-8">
        
        {/* Navigation Step Header */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/30">
          <div className="flex items-center gap-4 overflow-x-auto pb-1 scrollbar-hide">
            {['Identity', 'Auth', 'Tier', 'Review', 'Settle'].map((s, idx) => (
              <div key={idx} className="flex items-center gap-2 flex-shrink-0">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black transition-all ${
                  idx <= ['contact', 'whatsapp-setup', 'tickets', 'profile', 'payment'].indexOf(step === 'whatsapp-otp' ? 'whatsapp-setup' : (step === 'qr-simulate' || step === 'processing') ? 'payment' : step) ? 'bg-mantis-500 text-slate-900 shadow-[0_0_10px_rgba(76,175,80,0.3)]' : 'bg-slate-800 text-slate-600'
                }`}>
                  {idx + 1}
                </div>
                <span className={`text-[9px] font-black uppercase tracking-widest ${
                   idx === ['contact', 'whatsapp-setup', 'tickets', 'profile', 'payment'].indexOf(step === 'whatsapp-otp' ? 'whatsapp-setup' : (step === 'qr-simulate' || step === 'processing') ? 'payment' : step) ? 'text-white' : 'text-slate-600'
                }`}>{s}</span>
              </div>
            ))}
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors p-2 bg-slate-800 rounded-full"><X size={18} /></button>
        </div>

        <div className="p-6 sm:p-12">
          {step === 'contact' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-tight">{t.regHubTitle}</h2>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.fullNameLabel}</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-5 text-white outline-none focus:ring-2 focus:ring-mantis-500/50" placeholder="Andi Pratama" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.emailLabel}</label>
                  <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-5 text-white outline-none focus:ring-2 focus:ring-mantis-500/50" placeholder="andi@startup.id" />
                </div>
              </div>
              <button onClick={() => setStep('whatsapp-setup')} className="w-full bg-mantis-600 py-5 rounded-2xl text-white font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:bg-mantis-500 transition-all">{t.nextSecureAuth}</button>
            </div>
          )}

          {step === 'whatsapp-setup' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="flex items-center gap-4">
                 <div className="p-4 bg-green-500/10 rounded-[1.5rem] text-green-500 border border-green-500/20"><MessageSquare size={32} /></div>
                 <div>
                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">{t.identitySync}</h2>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t.waGateway}</p>
                 </div>
              </div>
              <div className="space-y-5">
                <div className="space-y-1">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.mobileLabel}</label>
                   <div className="flex gap-3">
                      <select value={formData.countryCode} onChange={e => setFormData({...formData, countryCode: e.target.value})} className="bg-slate-800 border border-slate-700 rounded-2xl px-4 text-white text-sm font-black outline-none">
                         <option value="+65">🇸🇬 +65</option><option value="+62">🇮🇩 +62</option><option value="+66">🇹🇭 +66</option>
                      </select>
                      <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="flex-1 bg-slate-800 border border-slate-700 rounded-2xl px-5 py-5 text-white outline-none text-lg font-medium" placeholder="8123 4567" />
                   </div>
                </div>
                <div onClick={() => setWaOptIn(!waOptIn)} className={`flex items-start gap-5 p-6 rounded-3xl border transition-all cursor-pointer ${waOptIn ? 'bg-green-500/5 border-green-500/30' : 'bg-slate-800/50 border-slate-700'}`}>
                   <div className={`w-6 h-6 rounded-lg border-2 mt-1 transition-all flex items-center justify-center ${waOptIn ? 'bg-green-500 border-green-500' : 'border-slate-600'}`}>
                      {waOptIn && <Check size={16} className="text-white" strokeWidth={4} />}
                   </div>
                   <div className="flex-1">
                      <p className="text-xs font-black text-white uppercase tracking-widest">{t.consentLogistics}</p>
                      <p className="text-[10px] text-slate-500 mt-1 leading-relaxed font-bold uppercase">{t.consentDesc}</p>
                   </div>
                </div>
              </div>
              <button onClick={() => waOptIn && formData.phone ? setStep('whatsapp-otp') : null} disabled={!waOptIn || !formData.phone} className="w-full bg-mantis-600 py-5 rounded-2xl text-white font-black uppercase text-xs tracking-widest shadow-xl disabled:opacity-50">{t.requestPin}</button>
            </div>
          )}

          {step === 'whatsapp-otp' && (
            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500 text-center">
               <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">{t.verifyPulse}</h2>
               <div className="flex justify-center gap-3">
                  {otpValue.map((digit, i) => (
                    <input key={i} id={`otp-${i}`} type="text" maxLength={1} value={digit} onChange={(e) => handleOtpInput(i, e.target.value)} className="w-12 h-16 bg-slate-800 border border-slate-700 rounded-xl text-center text-2xl font-black text-mantis-400 focus:ring-2 focus:ring-mantis-500 outline-none" />
                  ))}
               </div>
               <button onClick={handleVerifyOtp} className="w-full bg-mantis-600 py-5 rounded-2xl text-white font-black uppercase text-xs tracking-widest shadow-xl">
                 {isVerifying ? <Loader2 className="animate-spin" size={18} /> : t.syncAccount}
               </button>
            </div>
          )}

          {step === 'tickets' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
               <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">{t.accessTier}</h2>
               <div className="space-y-3">
                  <button onClick={() => setSelectedTicketType('Standard')} className={`w-full flex items-center justify-between p-6 rounded-[1.5rem] border transition-all ${selectedTicketType === 'Standard' ? 'bg-slate-800 border-mantis-500 ring-4 ring-mantis-500/10' : 'bg-slate-800/40 border-slate-700'}`}>
                    <div className="flex items-center gap-5">
                        <div className={`p-4 rounded-2xl ${selectedTicketType === 'Standard' ? 'bg-mantis-500 text-slate-900 shadow-lg' : 'bg-slate-700 text-slate-500'}`}><Ticket size={28} /></div>
                        <div className="text-left font-black text-white uppercase tracking-widest text-sm">{t.standardPass}</div>
                    </div>
                    <div className="text-right text-2xl font-black text-white italic">{event.currency} {event.basePrice.toLocaleString()}</div>
                  </button>
                  <button onClick={() => setSelectedTicketType('VIP')} className={`w-full flex items-center justify-between p-6 rounded-[1.5rem] border transition-all ${selectedTicketType === 'VIP' ? 'bg-slate-800 border-indigo-500 ring-4 ring-indigo-500/10' : 'bg-slate-800/40 border-slate-700'}`}>
                    <div className="flex items-center gap-5">
                        <div className={`p-4 rounded-2xl ${selectedTicketType === 'VIP' ? 'bg-indigo-500 text-white shadow-lg' : 'bg-slate-700 text-slate-500'}`}><Star size={28} /></div>
                        <div className="text-left font-black text-white uppercase tracking-widest text-sm">{t.vipExecutive}</div>
                    </div>
                    <div className="text-right text-2xl font-black text-white italic">{event.currency} {(event.basePrice * 2.5).toLocaleString()}</div>
                  </button>
               </div>
               <button onClick={() => setStep('profile')} className="w-full bg-mantis-600 py-5 rounded-2xl text-white font-black uppercase text-xs tracking-widest shadow-xl">{t.configAiProfile}</button>
            </div>
          )}

          {step === 'profile' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
               <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">{t.businessLogic}</h2>
               <div className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.profRole}</label>
                  <input type="text" value={formData.jobTitle} onChange={e => setFormData({...formData, jobTitle: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-5 text-white outline-none focus:ring-2 focus:ring-mantis-500/50" placeholder="e.g. Innovation Lead" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.netGoal}</label>
                  <textarea value={formData.goals} onChange={e => setFormData({...formData, goals: e.target.value})} className="w-full h-36 bg-slate-800 border border-slate-700 rounded-2xl px-5 py-5 text-white outline-none text-sm resize-none" placeholder="Strategic networking goals..." />
                </div>
              </div>
              <button onClick={() => setStep('payment')} className="w-full bg-mantis-600 py-5 rounded-2xl text-white font-black uppercase text-xs tracking-widest shadow-xl">{t.finalizeSettle}</button>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                <div>
                   <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none">{t.settleCheckout}</h2>
                   <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-2">{event.location}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                   <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest mr-2">{t.prefLocalCurr}</span>
                   <div className="flex bg-slate-800 p-1.5 rounded-2xl border border-slate-700">
                      {['BASE', 'USD', 'SGD', 'IDR', 'THB'].filter(c => c === 'BASE' || c === 'USD' || c === event.currency).map((curr) => (
                        <button key={curr} onClick={() => setSelectedCurrency(curr as any)} className={`px-4 py-2 rounded-xl text-[10px] font-black transition-all ${selectedCurrency === curr ? 'bg-mantis-500 text-slate-900 shadow-lg' : 'text-slate-500'}`}>{curr === 'BASE' ? event.currency : curr}</button>
                      ))}
                   </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5"><Banknote size={140} /></div>
                 <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        <span>{selectedTicketType} {t.tierAccess}</span>
                        <span className="text-white">{getCurrencySymbol()} {convertPrice(basePrice).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-slate-700/50 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        <span>{t.regNodeFee}</span>
                        <span className="text-white">{getCurrencySymbol()} {convertPrice(processingFee).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="pt-2 flex justify-between items-center">
                        <div>
                          <span className="text-[9px] font-black text-mantis-500 uppercase tracking-[0.3em] block mb-1">{t.totalAuth}</span>
                          <span className="text-4xl font-black text-white italic tracking-tighter">{getCurrencySymbol()} {convertPrice(totalPrice).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                        </div>
                        <ShieldCheck size={32} className="text-mantis-500" />
                    </div>
                 </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 px-1">
                   <Globe size={12} className="text-slate-500" />
                   <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.localChannels}</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {methods.map(m => (
                    <button key={m.id} onClick={() => setPaymentMethod(m.id)} className={`relative flex items-center gap-5 p-6 rounded-[2rem] border transition-all text-left group hover:scale-[1.02] ${paymentMethod === m.id ? 'bg-slate-800 border-mantis-500 ring-4 ring-mantis-500/10' : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'}`}>
                      <div className={`p-4 rounded-[1.25rem] transition-all ${paymentMethod === m.id ? 'bg-mantis-500/10 shadow-lg' : 'bg-slate-700'}`}>
                        <m.icon size={24} className={m.color} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                           <p className="font-black text-white text-[11px] uppercase tracking-widest">{m.name}</p>
                           {m.recommended && <span className="text-[7px] font-black bg-mantis-500 text-slate-900 px-1 rounded uppercase tracking-tighter">Local Fav</span>}
                        </div>
                        <p className="text-[9px] text-slate-500 font-black uppercase leading-tight">{m.description}</p>
                        <p className="text-[7px] text-mantis-500 font-black uppercase mt-1 tracking-widest">{m.region} • {m.fee}</p>
                      </div>
                      {paymentMethod === m.id && <div className="absolute top-4 right-4"><CheckCircle size={18} className="text-mantis-400" /></div>}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => methods.find(m => m.id === paymentMethod)?.type === 'qr' ? setStep('qr-simulate') : handleFinalize()} disabled={!paymentMethod} className="w-full bg-gradient-to-r from-mantis-600 to-emerald-600 py-6 rounded-[1.5rem] text-white font-black uppercase text-sm tracking-[0.3em] shadow-2xl hover:from-mantis-500 hover:to-emerald-500 transition-all flex items-center justify-center gap-4 group">
                <Zap size={20} fill="currentColor" className="group-hover:scale-110 transition-transform" /> {t.authSettlement}
              </button>
            </div>
          )}

          {step === 'qr-simulate' && (
            <div className="space-y-10 animate-in zoom-in-95 duration-500 text-center py-4">
               <div className="flex flex-col items-center">
                  <div className={`p-4 rounded-3xl bg-slate-800 mb-4`}>
                    {React.createElement(methods.find(m => m.id === paymentMethod)?.icon || QrCode, { size: 32, className: methods.find(m => m.id === paymentMethod)?.color })}
                  </div>
                  <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">{methods.find(m => m.id === paymentMethod)?.name} Scan</h2>
               </div>
               <div className="relative inline-block group">
                  <div className={`absolute -inset-2 bg-gradient-to-r from-mantis-500 to-indigo-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000`}></div>
                  <div className="relative bg-white p-10 rounded-[2.5rem] shadow-2xl"><QrCode size={220} className="text-slate-900" /></div>
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-slate-900 border border-slate-700 rounded-full flex items-center gap-2 shadow-2xl whitespace-nowrap">
                     <div className="w-2 h-2 rounded-full bg-mantis-500 animate-pulse"></div>
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">{t.awaitingPulse}</span>
                  </div>
               </div>
               <div className="bg-slate-800/50 p-6 rounded-[2rem] border border-slate-700 flex flex-col items-center gap-1 max-w-sm mx-auto">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">{t.authSettleAmt || 'Authorized Amount'}</span>
                  <div className="text-4xl font-black text-white italic tracking-tighter">{getCurrencySymbol()} {convertPrice(totalPrice).toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
               </div>
               <div className="flex gap-4">
                  <button onClick={() => setStep('payment')} className="flex-1 py-4 text-slate-500 font-black uppercase text-xs tracking-widest">Abort</button>
                  <button onClick={handleFinalize} className="flex-1 bg-mantis-600 py-5 rounded-2xl text-white font-black uppercase text-xs tracking-widest shadow-xl flex items-center justify-center gap-3">
                    <CheckCircle size={20} /> {t.verifySettle}
                  </button>
               </div>
            </div>
          )}

          {step === 'processing' && (
            <div className="space-y-12 py-12 animate-in fade-in duration-700 text-center">
                <Loader2 className="animate-spin text-mantis-500 mx-auto" size={64} />
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">{t.orchestrating}</h3>
                <div className="max-w-sm mx-auto space-y-4 text-left">
                  {[
                    { id: 'payment', label: `${methods.find(m => m.id === paymentMethod)?.name} Authorization`, icon: ShieldCheck, color: 'text-mantis-400' },
                    { id: 'ai', label: 'AI Match Analysis', icon: BrainCircuit, color: 'text-blue-400' },
                    { id: 'whatsapp', label: 'WA API Push Dispatch', icon: MessageSquare, color: 'text-green-500' },
                  ].map((node) => (
                    <div key={node.id} className="flex items-center justify-between p-5 bg-slate-800 rounded-2xl border border-slate-700">
                      <div className="flex items-center gap-4">
                        {React.createElement(node.icon, { size: 22, className: dispatchStatus[node.id as keyof typeof dispatchStatus] === 'completed' ? node.color : 'text-slate-600' })}
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{node.label}</span>
                      </div>
                      {dispatchStatus[node.id as keyof typeof dispatchStatus] === 'completed' ? <CheckCircle size={18} className={node.color} /> : <Loader2 className="animate-spin text-mantis-500" size={18} />}
                    </div>
                  ))}
                </div>
            </div>
          )}

          {step === 'confirmation' && (
            <div className="text-center space-y-10 animate-in zoom-in-95 duration-700">
              <div className="w-28 h-28 bg-mantis-500/10 rounded-full flex items-center justify-center mx-auto border-4 border-mantis-500/20 shadow-[0_0_80px_rgba(76,175,80,0.3)]">
                <CheckCircle className="text-mantis-500" size={64} />
              </div>
              <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none">{t.regAuth}</h2>
              <button onClick={() => { onSuccess({ id: 'ID', eventId: event.id, attendeeName: formData.name, email: formData.email, phone: formData.phone, waOptIn: true, waStatus: 'Delivered', emailStatus: 'Sent', ticketType: selectedTicketType, paymentStatus: 'Paid', paymentMethod: 'Gate', amountPaid: totalPrice, currency: event.currency, timestamp: new Date().toISOString(), qrCode: 'QR' }); onClose(); }} className="w-full bg-white text-slate-900 py-6 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl">{t.enterPortal}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
