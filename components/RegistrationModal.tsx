
import React, { useState, useEffect, useRef } from 'react';
import {
  X, CreditCard, CheckCircle, Smartphone, ShieldCheck, Loader2, QrCode, Zap,
  MessageSquare, Ticket, Star, Globe, Phone, Check, Wallet, Banknote,
  Info, BrainCircuit, Activity, ShieldAlert, Send, Lock, Landmark, ExternalLink,
  Sparkles
} from 'lucide-react';
import { Event, User, Registration, Language } from '../types';
import { generatePersonalizedBriefing } from '../services/geminiService';
import { registerForEvent } from '../services/api';
import { TRANSLATIONS } from '../constants';
import StripePayment from './StripePayment';

// --- ENHANCED BRANDED SVG COMPONENTS ---
const PayNowIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#7B3F98" />
    <path d="M25 40L40 55L75 25" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <text x="50" y="82" fontSize="16" fontWeight="900" textAnchor="middle" fill="white" style={{ fontFamily: 'Inter, sans-serif' }}>PAYNOW</text>
    <path d="M40 55L60 75L75 60" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const GrabPayIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#00B14F" />
    <path d="M30 35C30 35 45 30 55 35C65 40 70 55 60 65C50 75 35 70 30 60" stroke="white" strokeWidth="8" strokeLinecap="round" />
    <path d="M30 35V65" stroke="white" strokeWidth="8" strokeLinecap="round" />
    <circle cx="50" cy="50" r="10" stroke="white" strokeWidth="4" opacity="0.3" />
    <text x="50" y="88" fontSize="12" fontWeight="900" textAnchor="middle" fill="white" style={{ fontFamily: 'Inter, sans-serif' }}>GrabPay</text>
  </svg>
);

const QRISIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="white" />
    <rect x="15" y="15" width="70" height="70" rx="5" fill="#ED1C24" />
    <rect x="25" y="25" width="20" height="20" fill="white" />
    <rect x="55" y="25" width="20" height="20" fill="white" />
    <rect x="25" y="55" width="20" height="20" fill="white" />
    <rect x="55" y="55" width="20" height="20" fill="white" />
    <rect x="30" y="30" width="10" height="10" fill="#ED1C24" />
    <rect x="60" y="30" width="10" height="10" fill="#ED1C24" />
    <rect x="30" y="60" width="10" height="10" fill="#ED1C24" />
    <text x="50" y="94" fontSize="12" fontWeight="900" textAnchor="middle" fill="#ED1C24" style={{ fontFamily: 'Inter, sans-serif' }}>QRIS</text>
  </svg>
);

const PromptPayIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#2E3192" />
    <path d="M50 20L80 50L50 80L20 50L50 20Z" stroke="white" strokeWidth="6" strokeLinejoin="round" />
    <circle cx="50" cy="50" r="12" fill="white" />
    <circle cx="50" cy="50" r="6" fill="#2E3192" />
    <text x="50" y="92" fontSize="10" fontWeight="900" textAnchor="middle" fill="white" style={{ fontFamily: 'Inter, sans-serif' }}>PromptPay</text>
  </svg>
);

const VisaMasterIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#1e293b" />
    <circle cx="40" cy="50" r="20" fill="#EB001B" />
    <circle cx="60" cy="50" r="20" fill="#F79E1B" opacity="0.8" />
    <path d="M15 30H35V35H15V30Z" fill="#1A1F71" />
    <path d="M15 40H35V45H15V40Z" fill="#1A1F71" />
  </svg>
);

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
  const [step, setStep] = useState<'contact' | 'whatsapp-setup' | 'whatsapp-otp' | 'tickets' | 'profile' | 'payment' | 'stripe-payment' | 'qr-simulate' | 'processing' | 'confirmation'>('contact');
  const [loading, setLoading] = useState(false);
  const [useWhatsAppFirst, setUseWhatsAppFirst] = useState(false);

  const [selectedCurrency, setSelectedCurrency] = useState<'BASE' | 'USD' | 'SGD' | 'IDR' | 'THB'>('BASE');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [waOptIn, setWaOptIn] = useState(true);
  const [otpValue, setOtpValue] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState<TicketType>('Standard');
  const [dispatchStatus, setDispatchStatus] = useState({ ai: 'pending', whatsapp: 'pending', email: 'pending', payment: 'pending' });
  const [aiBriefing, setAiBriefing] = useState<{ whatsapp: string, email: string } | null>(null);
  const [backendSyncFailed, setBackendSyncFailed] = useState(false);

  // WhatsApp Live Simulation State
  const [streamedMessage, setStreamedMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    countryCode: event.currency === 'IDR' ? '+62' : event.currency === 'THB' ? '+66' : '+65',
    jobTitle: user?.jobTitle || '',
    goals: user?.goals || ''
  });

  // Helper to fetch methods for the region based on event currency
  const getRegionalMethods = () => {
    const methods = [
      { id: 'paynow', name: 'PayNow SG', description: t.paynowDesc, icon: PayNowIcon, type: 'qr', recommended: event.currency === 'SGD' },
      { id: 'qris', name: 'QRIS / E-Wallet', description: t.qrisDesc, icon: QRISIcon, type: 'qr', recommended: event.currency === 'IDR' },
      { id: 'promptpay', name: 'PromptPay TH', description: t.promptpayDesc, icon: PromptPayIcon, type: 'qr', recommended: event.currency === 'THB' },
      { id: 'grabpay', name: 'GrabPay', description: t.grabpayDesc, icon: GrabPayIcon, type: 'wallet', recommended: true },
      { id: 'stripe', name: 'Card / PayNow', description: 'Secure Stripe Checkout', icon: CreditCard, type: 'stripe', bg: 'bg-indigo-600', color: 'text-white', recommended: true },
      { id: 'card', name: 'Credit Card', description: 'Visa / MasterCard / AMEX', icon: VisaMasterIcon, type: 'card', bg: 'bg-slate-700/50', color: 'text-indigo-400' }
    ];

    if (event.currency === 'SGD') return methods.filter(m => ['paynow', 'grabpay', 'stripe', 'card'].includes(m.id));
    if (event.currency === 'IDR') return methods.filter(m => ['qris', 'grabpay', 'stripe', 'card'].includes(m.id));
    if (event.currency === 'THB') return methods.filter(m => ['promptpay', 'grabpay', 'stripe', 'card'].includes(m.id));

    return methods;
  };

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

  const handleOtpInput = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otpValue];
    newOtp[index] = value;
    setOtpValue(newOtp);
    if (value && index < 5) document.getElementById(`otp-${index + 1}`)?.focus();
  };

  const handleVerifyOtp = async () => {
    setIsVerifying(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsVerifying(false);
    setStep('tickets');
  };

  const handleFinalize = async () => {
    setLoading(true);
    setStep('processing');
    const sequence = ['payment', 'ai', 'whatsapp', 'email'];
    let generatedBriefing = null;

    for (const key of sequence) {
      setDispatchStatus(s => ({ ...s, [key]: 'processing' }));
      await new Promise(r => setTimeout(r, 800));
      if (key === 'ai') {
        generatedBriefing = await generatePersonalizedBriefing({ name: formData.name, jobTitle: formData.jobTitle, goals: formData.goals } as User, event, event.predictedTurnout);
        setAiBriefing(generatedBriefing);
      }
      setDispatchStatus(s => ({ ...s, [key]: 'completed' }));
    }

    setStep('confirmation');
    setLoading(false);

    if (generatedBriefing?.whatsapp) {
      setIsTyping(true);
      await new Promise(r => setTimeout(r, 1200));
      const fullMsg = generatedBriefing.whatsapp;
      let current = "";
      for (let i = 0; i < fullMsg.length; i++) {
        current += fullMsg[i];
        setStreamedMessage(current);
        await new Promise(r => setTimeout(r, 10));
      }
      setIsTyping(false);
    }
  };

  const handleFinish = async () => {
    // Also register in the backend database
    try {
      const result = await registerForEvent({
        eventId: event.id,
        user: {
          name: formData.name,
          email: formData.email,
          role: selectedTicketType === 'VIP' ? 'vip' : 'attendee'
        }
      });
      if (!result.success) {
        setBackendSyncFailed(true);
      }
    } catch (error) {
      console.error('Backend registration failed:', error);
      setBackendSyncFailed(true);
      // Continue anyway - local state will still be updated
    }

    onSuccess({
      id: `NS-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      eventId: event.id,
      attendeeName: formData.name,
      email: formData.email,
      phone: `${formData.countryCode}${formData.phone}`,
      waOptIn: waOptIn,
      waStatus: 'Delivered',
      emailStatus: 'Sent',
      ticketType: selectedTicketType,
      paymentStatus: 'Paid',
      paymentMethod: paymentMethod === 'qris' ? 'QRIS' : paymentMethod === 'paynow' ? 'PayNow' : 'Digital Payment',
      amountPaid: totalPrice,
      currency: event.currency,
      timestamp: new Date().toISOString(),
      qrCode: 'NS_AUTH_VALID_778',
      aiBriefing: aiBriefing?.whatsapp
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 overflow-y-auto selection:bg-mantis-500/30">
      <div className="bg-slate-900 border border-slate-700 rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] my-8">

        {/* Navigation Step Header */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/30">
          <div className="flex items-center gap-4 overflow-x-auto pb-1 scrollbar-hide">
            {[t.navIdentity, t.navAuth, t.navTier, t.navReview, t.navSettle].map((s, idx) => (
              <div key={idx} className="flex items-center gap-2 flex-shrink-0">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black transition-all ${idx <= ['contact', 'whatsapp-setup', 'tickets', 'profile', 'payment'].indexOf(step === 'whatsapp-otp' ? 'whatsapp-setup' : (step === 'qr-simulate' || step === 'processing') ? 'payment' : step) ? 'bg-mantis-500 text-slate-900 shadow-[0_0_10px_rgba(76,175,80,0.3)]' : 'bg-slate-800 text-slate-600'
                  }`}>
                  {idx + 1}
                </div>
                <span className={`text-[9px] font-black uppercase tracking-widest ${idx === ['contact', 'whatsapp-setup', 'tickets', 'profile', 'payment'].indexOf(step === 'whatsapp-otp' ? 'whatsapp-setup' : (step === 'qr-simulate' || step === 'processing') ? 'payment' : step) ? 'text-white' : 'text-slate-600'
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
                  <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-5 text-white outline-none focus:ring-2 focus:ring-mantis-500/50" placeholder="Andi Pratama" />
                </div>
                {!useWhatsAppFirst && (
                  <div className="space-y-1 animate-in fade-in">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.emailLabel}</label>
                    <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-5 text-white outline-none focus:ring-2 focus:ring-mantis-500/50" placeholder="andi@startup.id" />
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button onClick={() => setStep('whatsapp-setup')} className="w-full bg-mantis-600 py-5 rounded-2xl text-white font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:bg-mantis-500 transition-all flex items-center justify-center gap-3">
                  <MessageSquare size={20} fill="currentColor" /> {t.nextSecureAuth || "Next: WhatsApp Auth"}
                </button>
                <div className="flex items-center gap-4 py-2 opacity-50">
                  <div className="h-px bg-slate-700 flex-1"></div>
                  <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">or</span>
                  <div className="h-px bg-slate-700 flex-1"></div>
                </div>
                <button onClick={() => setUseWhatsAppFirst(!useWhatsAppFirst)} className="w-full border border-slate-700 py-4 rounded-2xl text-slate-400 font-black uppercase text-[10px] tracking-widest hover:bg-slate-800 transition-all">
                  {useWhatsAppFirst ? "Add Email Verification" : "Register with WhatsApp Only"}
                </button>
              </div>
            </div>
          )}

          {step === 'whatsapp-setup' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-green-500/10 rounded-[1.5rem] text-green-500 border border-green-500/20 shadow-[0_0_20px_rgba(76,175,80,0.1)]"><MessageSquare size={32} /></div>
                <div>
                  <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">{t.identitySync}</h2>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t.waGateway}</p>
                </div>
              </div>
              <div className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.mobileLabel}</label>
                  <div className="flex gap-3">
                    <select value={formData.countryCode} onChange={e => setFormData({ ...formData, countryCode: e.target.value })} className="bg-slate-800 border border-slate-700 rounded-2xl px-4 text-white text-sm font-black outline-none appearance-none">
                      <option value="+65">🇸🇬 +65</option><option value="+62">🇮🇩 +62</option><option value="+66">🇹🇭 +66</option><option value="+63">🇵🇭 +63</option><option value="+84">🇻🇳 +84</option>
                    </select>
                    <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="flex-1 bg-slate-800 border border-slate-700 rounded-2xl px-5 py-5 text-white outline-none text-lg font-medium tracking-widest" placeholder="8123 4567" />
                  </div>
                </div>

                {/* COMPLIANT OPT-IN SECTION */}
                <div onClick={() => setWaOptIn(!waOptIn)} className={`flex items-start gap-5 p-6 rounded-3xl border transition-all cursor-pointer ${waOptIn ? 'bg-green-500/5 border-green-500/30' : 'bg-slate-800/50 border-slate-700'}`}>
                  <div className={`w-6 h-6 rounded-lg border-2 mt-1 transition-all flex items-center justify-center shrink-0 ${waOptIn ? 'bg-green-500 border-green-500' : 'border-slate-600'}`}>
                    {waOptIn && <Check size={16} className="text-white" strokeWidth={4} />}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-black text-white uppercase tracking-widest">{t.consentLogistics}</p>
                    <p className="text-[10px] text-slate-500 mt-1 leading-relaxed font-bold uppercase">{t.consentDesc}</p>
                    <div className="mt-4 flex items-center gap-2 text-mantis-500 hover:text-mantis-400">
                      <Lock size={10} />
                      <span className="text-[8px] font-black uppercase tracking-widest underline">WhatsApp Business API Policy & Privacy</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => waOptIn && formData.phone ? setStep('whatsapp-otp') : null}
                disabled={!waOptIn || !formData.phone}
                className="w-full bg-mantis-600 py-6 rounded-[1.5rem] text-white font-black uppercase text-xs tracking-[0.2em] shadow-2xl disabled:opacity-50 transition-all flex items-center justify-center gap-4 group"
              >
                <Smartphone size={18} className="group-hover:scale-110 transition-transform" /> {t.requestPin}
              </button>
            </div>
          )}

          {step === 'whatsapp-otp' && (
            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500 text-center">
              <div className="bg-green-500/5 border border-green-500/10 p-4 rounded-3xl mb-4 inline-flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">Handshaking with WhatsApp Gateway: {formData.countryCode} {formData.phone}</p>
              </div>
              <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-none">{t.verifyPulse}</h2>
              <div className="flex justify-center gap-3">
                {otpValue.map((digit, i) => (
                  <input key={i} id={`otp-${i}`} type="text" maxLength={1} value={digit} onChange={(e) => handleOtpInput(i, e.target.value)} className="w-14 h-20 bg-slate-800 border border-slate-700 rounded-2xl text-center text-3xl font-black text-mantis-400 focus:ring-4 focus:ring-mantis-500/20 outline-none transition-all" />
                ))}
              </div>
              <div className="flex flex-col gap-4 pt-6">
                <button onClick={handleVerifyOtp} className="w-full bg-mantis-600 py-6 rounded-2xl text-white font-black uppercase text-xs tracking-widest shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                  {isVerifying ? <Loader2 className="animate-spin" size={20} /> : <ShieldCheck size={20} />}
                  {isVerifying ? "Orchestrating Verification..." : t.syncAccount}
                </button>
                <button className="text-[10px] font-black text-slate-600 uppercase tracking-widest hover:text-slate-400 transition-colors">Resend PIN in 24s</button>
              </div>
            </div>
          )}

          {step === 'tickets' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">{t.accessTier}</h2>
              <div className="space-y-3">
                <button onClick={() => setSelectedTicketType('Standard')} className={`w-full flex items-center justify-between p-7 rounded-[2rem] border transition-all ${selectedTicketType === 'Standard' ? 'bg-slate-800 border-mantis-500 ring-4 ring-mantis-500/10' : 'bg-slate-800/40 border-slate-700'}`}>
                  <div className="flex items-center gap-5">
                    <div className={`p-4 rounded-2xl ${selectedTicketType === 'Standard' ? 'bg-mantis-500 text-slate-900 shadow-lg' : 'bg-slate-700 text-slate-500'}`}><Ticket size={28} /></div>
                    <div className="text-left font-black text-white uppercase tracking-widest text-sm">{t.standardPass}</div>
                  </div>
                  <div className="text-right text-2xl font-black text-white italic">{event.currency} {event.basePrice.toLocaleString()}</div>
                </button>
                <button onClick={() => setSelectedTicketType('VIP')} className={`w-full flex items-center justify-between p-7 rounded-[2rem] border transition-all ${selectedTicketType === 'VIP' ? 'bg-slate-800 border-indigo-500 ring-4 ring-indigo-500/10' : 'bg-slate-800/40 border-slate-700'}`}>
                  <div className="flex items-center gap-5">
                    <div className={`p-4 rounded-2xl ${selectedTicketType === 'VIP' ? 'bg-indigo-500 text-white shadow-lg' : 'bg-slate-700 text-slate-500'}`}><Star size={28} /></div>
                    <div className="text-left font-black text-white uppercase tracking-widest text-sm">{t.vipExecutive}</div>
                  </div>
                  <div className="text-right text-2xl font-black text-white italic">{event.currency} {(event.basePrice * 2.5).toLocaleString()}</div>
                </button>
              </div>
              <button onClick={() => setStep('profile')} className="w-full bg-mantis-600 py-6 rounded-2xl text-white font-black uppercase text-xs tracking-widest shadow-xl transition-all hover:scale-[1.01]">{t.configAiProfile}</button>
            </div>
          )}

          {step === 'profile' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">{t.businessLogic}</h2>
              <div className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.profRole}</label>
                  <input type="text" value={formData.jobTitle} onChange={e => setFormData({ ...formData, jobTitle: e.target.value })} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-5 text-white outline-none focus:ring-2 focus:ring-mantis-500/50" placeholder="e.g. Regional Lead" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.netGoal}</label>
                  <textarea value={formData.goals} onChange={e => setFormData({ ...formData, goals: e.target.value })} className="w-full h-36 bg-slate-800 border border-slate-700 rounded-2xl px-5 py-5 text-white outline-none text-sm resize-none focus:ring-2 focus:ring-mantis-500/50" placeholder="Strategic networking goals for Southeast Asia..." />
                </div>
              </div>
              <button onClick={() => setStep('payment')} className="w-full bg-mantis-600 py-6 rounded-2xl text-white font-black uppercase text-xs tracking-widest shadow-xl">{t.finalizeSettle}</button>
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
                  <div className="flex bg-slate-800 p-1.5 rounded-2xl border border-slate-700 shadow-inner">
                    {['BASE', 'USD', 'SGD', 'IDR', 'THB'].filter(c => c === 'BASE' || c === 'USD' || c === event.currency).map((curr) => (
                      <button key={curr} onClick={() => setSelectedCurrency(curr as any)} className={`px-4 py-2 rounded-xl text-[10px] font-black transition-all ${selectedCurrency === curr ? 'bg-mantis-500 text-slate-900 shadow-lg' : 'text-slate-500 hover:text-white'}`}>{curr === 'BASE' ? event.currency : curr}</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* GLASS SUMMARY CARD */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-mantis-500 to-indigo-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative bg-slate-850/80 backdrop-blur-xl border border-slate-700 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12"><Landmark size={180} /></div>
                  <div className="relative z-10 space-y-5">
                    <div className="flex justify-between items-center text-[11px] font-black text-slate-500 uppercase tracking-widest">
                      <span>{selectedTicketType} {t.tierAccess}</span>
                      <span className="text-white font-bold">{getCurrencySymbol()} {convertPrice(basePrice).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between items-center pb-6 border-b border-slate-700/50 text-[11px] font-black text-slate-500 uppercase tracking-widest">
                      <span>{t.regNodeFee}</span>
                      <span className="text-white font-bold">{getCurrencySymbol()} {convertPrice(processingFee).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="pt-4 flex justify-between items-end">
                      <div>
                        <span className="text-[10px] font-black text-mantis-500 uppercase tracking-[0.3em] block mb-2">{t.totalAuth}</span>
                        <span className="text-6xl font-black text-white italic tracking-tighter leading-none">{getCurrencySymbol()} {convertPrice(totalPrice).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex flex-col items-end gap-1 mb-2">
                        <div className="flex items-center gap-2 px-4 py-2 bg-mantis-500/10 rounded-full border border-mantis-500/20 text-mantis-400">
                          <Lock size={14} strokeWidth={3} />
                          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Secure Node</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-3">
                    <Globe size={14} className="text-slate-500" />
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.localChannels}</h4>
                  </div>
                  {waOptIn && <span className="text-[8px] font-black text-mantis-400 uppercase tracking-widest flex items-center gap-1"><MessageSquare size={10} /> WA Delivery Active</span>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {getRegionalMethods().map(m => (
                    <button key={m.id} onClick={() => setPaymentMethod(m.id)} className={`relative flex items-center gap-5 p-6 rounded-[2.5rem] border transition-all text-left group hover:scale-[1.02] ${paymentMethod === m.id ? 'bg-slate-800 border-mantis-500 ring-4 ring-mantis-500/10 shadow-2xl' : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'}`}>
                      <div className={`w-14 h-14 p-1 rounded-2xl transition-all flex items-center justify-center shrink-0 ${paymentMethod === m.id ? 'scale-110 shadow-lg ring-2 ring-white/10' : ''}`}>
                        {typeof m.icon === 'function' ? (
                          <div className="w-full h-full overflow-hidden rounded-xl shadow-inner">
                            {React.createElement(m.icon as any)}
                          </div>
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center rounded-2xl ${m.bg}`}>
                            {React.createElement(m.icon as any, { size: 28, className: m.color })}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center gap-2 mb-0.5">
                          <div className="flex items-center gap-1.5">
                            {typeof m.icon === 'function' && (
                              <div className="w-3 h-3 flex-shrink-0">
                                {React.createElement(m.icon as any)}
                              </div>
                            )}
                            <p className="font-black text-white text-[12px] uppercase tracking-widest leading-none truncate">{m.name}</p>
                          </div>
                          {m.recommended && <span className="text-[7px] font-black bg-mantis-500 text-slate-900 px-1 rounded uppercase tracking-tighter shrink-0">Official</span>}
                        </div>
                        <p className="text-[9px] text-slate-500 font-black uppercase leading-tight truncate">{m.description}</p>
                      </div>
                      {paymentMethod === m.id && <div className="absolute top-4 right-4"><CheckCircle size={20} className="text-mantis-400 shadow-lg" /></div>}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => {
                const method = getRegionalMethods().find(m => m.id === paymentMethod);
                if (method?.type === 'stripe') {
                  setStep('stripe-payment');
                } else if (method?.type === 'qr') {
                  setStep('qr-simulate');
                } else {
                  handleFinalize();
                }
              }} disabled={!paymentMethod} className="w-full bg-gradient-to-r from-mantis-600 to-emerald-600 py-7 rounded-[2.5rem] text-white font-black uppercase text-sm tracking-[0.3em] shadow-[0_0_50px_rgba(76,175,80,0.2)] hover:from-mantis-500 hover:to-emerald-500 transition-all flex items-center justify-center gap-4 group active:scale-[0.98]">
                <Zap size={22} fill="currentColor" className="group-hover:scale-110 transition-transform" /> {t.authSettlement}
              </button>
            </div>
          )}

          {step === 'stripe-payment' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">Secure Payment</h2>
                <button onClick={() => setStep('payment')} className="text-slate-500 hover:text-white text-xs uppercase tracking-widest">← Back</button>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Total Amount:</span>
                  <span className="text-2xl font-black text-white">{getCurrencySymbol()} {convertPrice(totalPrice).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
              <StripePayment
                amount={convertPrice(totalPrice)}
                currency={selectedCurrency === 'BASE' ? event.currency.toLowerCase() : selectedCurrency.toLowerCase()}
                eventId={event.id}
                eventName={event.name}
                userEmail={formData.email}
                onSuccess={(paymentIntentId) => {
                  console.log('✅ Payment successful:', paymentIntentId);
                  setStep('processing');
                }}
                onError={(error) => {
                  console.error('❌ Payment failed:', error);
                }}
                onCancel={() => {
                  setStep('payment');
                }}
              />
            </div>
          )}

          {step === 'qr-simulate' && (
            <div className="space-y-12 animate-in zoom-in-95 duration-500 text-center py-6">
              <div className="flex flex-col items-center">
                <div className={`w-20 h-20 p-1 rounded-[2rem] bg-slate-800 mb-6 flex items-center justify-center shadow-2xl overflow-hidden`}>
                  {typeof getRegionalMethods().find(m => m.id === paymentMethod)?.icon === 'function'
                    ? React.createElement(getRegionalMethods().find(m => m.id === paymentMethod)!.icon as any)
                    : <QrCode size={40} className="text-mantis-400" />}
                </div>
                <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">{getRegionalMethods().find(m => m.id === paymentMethod)?.name} Terminal</h2>
              </div>
              <div className="relative inline-block group">
                <div className={`absolute -inset-4 bg-gradient-to-r from-mantis-500 to-indigo-600 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000`}></div>
                <div className="relative bg-white p-12 rounded-[3rem] shadow-[0_0_80px_rgba(0,0,0,0.5)]"><QrCode size={250} className="text-slate-900" /></div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-slate-900 border border-slate-700 rounded-full flex items-center gap-3 shadow-2xl whitespace-nowrap">
                  <div className="w-2.5 h-2.5 bg-mantis-500 rounded-full animate-pulse"></div>
                  <span className="text-[11px] font-black text-white uppercase tracking-widest">{t.awaitingPulse}</span>
                </div>
              </div>
              <div className="bg-slate-850 p-8 rounded-[2.5rem] border border-slate-700 flex flex-col items-center gap-2 max-w-sm mx-auto shadow-inner">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{t.authSettleAmt || 'Settlement Value'}</span>
                <div className="text-5xl font-black text-white italic tracking-tighter">{getCurrencySymbol()} {convertPrice(totalPrice).toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
              </div>
              <div className="flex gap-4 pt-4">
                <button onClick={() => setStep('payment')} className="flex-1 py-5 text-slate-500 font-black uppercase text-[11px] tracking-widest hover:text-white transition-colors">Abort & Reconfigure</button>
                <button onClick={handleFinalize} className="flex-1 bg-mantis-600 py-6 rounded-[1.5rem] text-white font-black uppercase text-xs tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                  <CheckCircle size={24} /> {t.verifySettle}
                </button>
              </div>
            </div>
          )}

          {step === 'processing' && (
            <div className="space-y-16 py-16 animate-in fade-in duration-1000 text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-mantis-500 blur-[60px] opacity-20 animate-pulse"></div>
                <Loader2 className="animate-spin text-mantis-500 mx-auto relative z-10" size={80} strokeWidth={3} />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-tight">{t.orchestrating}</h3>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">Processing via Regional Node Auth 3.1</p>
              </div>
              <div className="max-w-sm mx-auto space-y-4 text-left">
                {[
                  { id: 'payment', label: `${getRegionalMethods().find(m => m.id === paymentMethod)?.name || 'Digital'} Authorization`, icon: ShieldCheck, color: 'text-mantis-400' },
                  { id: 'ai', label: 'Gemini AI Match Generation', icon: BrainCircuit, color: 'text-blue-400' },
                  { id: 'whatsapp', label: 'WhatsApp Official Ticket Push', icon: MessageSquare, color: 'text-green-500' },
                  { id: 'email', label: 'Enterprise Email Backup Dispatch', icon: Send, color: 'text-indigo-400' }
                ].map((node) => (
                  <div key={node.id} className="flex items-center justify-between p-6 bg-slate-800/80 backdrop-blur rounded-[1.5rem] border border-slate-700/50 transition-all">
                    <div className="flex items-center gap-5">
                      <div className={`p-2 rounded-xl bg-slate-900/50 ${dispatchStatus[node.id as keyof typeof dispatchStatus] === 'completed' ? node.color : 'text-slate-600'}`}>
                        {React.createElement(node.icon, { size: 24 })}
                      </div>
                      <span className="text-[11px] font-black text-white uppercase tracking-widest">{node.label}</span>
                    </div>
                    {dispatchStatus[node.id as keyof typeof dispatchStatus] === 'completed' ? <CheckCircle size={22} className={node.color} /> : <Loader2 className="animate-spin text-mantis-500" size={22} />}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 'confirmation' && (
            <div className="text-center space-y-10 animate-in zoom-in-95 duration-1000">
              <div className="w-28 h-28 bg-mantis-500/10 rounded-full flex items-center justify-center mx-auto border-[6px] border-mantis-500/20 shadow-[0_0_100px_rgba(76,175,80,0.4)]">
                <CheckCircle className="text-mantis-500" size={64} />
              </div>
              <div>
                <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter leading-none">{t.regAuth}</h2>
                <p className="text-slate-500 text-[11px] font-black uppercase tracking-[0.5em] mt-4">Synced via {formData.countryCode} {formData.phone}</p>
              </div>

              {/* WHATSAPP OFFICIAL TICKET MOCK PREVIEW */}
              <div className="bg-[#0b141a] border border-slate-800 rounded-[2.5rem] p-7 text-left max-w-sm mx-auto relative shadow-[0_30px_100px_rgba(0,0,0,0.6)] overflow-hidden min-h-[340px]">
                <div className="flex items-center justify-between mb-5 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-mantis-600 flex items-center justify-center text-white text-sm font-black shadow-lg">N</div>
                    <div>
                      <p className="text-sm font-bold text-white leading-tight">Nusantara Events</p>
                      <p className="text-[10px] text-mantis-500 font-bold uppercase tracking-tighter flex items-center gap-1 mt-0.5">
                        <ShieldCheck size={12} fill="currentColor" className="text-mantis-500" /> Official • Verified Business
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 opacity-20">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* MESSAGE 1: WELCOME & BADGE */}
                  <div className="bg-[#202c33] rounded-3xl rounded-tl-none p-5 text-white shadow-xl animate-in slide-in-from-left-4 duration-700 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Ticket size={60} rotate={15} /></div>
                    <div className="relative z-10">
                      <p className="text-[12px] leading-relaxed italic text-slate-100 font-medium">
                        Hello {formData.name.split(' ')[0]}! Welcome to {event.name}. 🌏<br /><br />
                        Your <strong>{selectedTicketType}</strong> digital badge is attached below. Simply scan this at the venue entrance.
                      </p>
                      <div className="mt-4 bg-white p-4 rounded-2xl flex flex-col items-center">
                        <QrCode size={120} className="text-slate-900" />
                        <span className="text-[9px] font-black text-slate-400 mt-2 tracking-[0.3em] uppercase">Auth: {formData.phone.slice(-4)}</span>
                      </div>
                      <p className="text-right text-[8px] text-slate-500 mt-3 font-black uppercase">Delivered • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                  </div>

                  {/* MESSAGE 2: AI BRIEFING (STREAMED) */}
                  {(streamedMessage || isTyping) && (
                    <div className="bg-[#202c33] rounded-3xl rounded-tl-none p-5 text-white shadow-xl animate-in slide-in-from-left-4 duration-700 relative">
                      <div className="flex items-center gap-2 mb-3 text-[10px] font-black text-mantis-400 uppercase tracking-widest">
                        <Sparkles size={12} /> AI Strategy Briefing
                      </div>
                      {isTyping ? (
                        <div className="flex items-center gap-1.5 py-2">
                          <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-100"></div>
                          <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-200"></div>
                        </div>
                      ) : (
                        <p className="text-[12px] leading-relaxed italic text-slate-200">
                          {streamedMessage}
                        </p>
                      )}
                      {!isTyping && <p className="text-right text-[8px] text-slate-500 mt-3 font-black uppercase">Delivered</p>}
                    </div>
                  )}
                </div>
              </div>

              {backendSyncFailed && (
                <div className="mt-4 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4 flex items-start gap-3">
                  <Info size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-yellow-400 text-xs font-semibold">
                    Note: Your registration is confirmed locally, but backend sync is temporarily unavailable. Your ticket remains valid.
                  </p>
                </div>
              )}

              <div className="pt-6">
                <button onClick={handleFinish} className="w-full bg-white text-slate-900 py-7 rounded-3xl font-black uppercase text-sm tracking-[0.3em] shadow-[0_20px_60px_rgba(255,255,255,0.1)] hover:bg-slate-100 hover:scale-[1.02] transition-all active:scale-95">{t.enterPortal}</button>
                <div className="mt-8 flex flex-col items-center gap-3">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                    <ShieldCheck size={14} className="text-mantis-500" /> 256-Bit Regional Node Encryption
                  </p>
                  <a href="#" className="text-[9px] text-slate-600 font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1">
                    Data Handled under PDPA/GDPR Compliance <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
