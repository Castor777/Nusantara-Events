
import React, { useState, useEffect } from 'react';
import { X, CreditCard, CheckCircle, Smartphone, ShieldCheck, Loader2, QrCode, Mail, Zap, MessageSquare, Building2, User as UserIcon, Database, Workflow, Send, Wallet, Info, Users, MailCheck, Share2, BrainCircuit, Landmark, SmartphoneNfc, Ticket, Star, UsersRound, ChevronRight } from 'lucide-react';
import { Event, User, Registration } from '../types';
import { generateConfirmationInsights, generatePersonalizedBriefing } from '../services/geminiService';

interface RegistrationModalProps {
  event: Event;
  user: User | null;
  onClose: () => void;
  onSuccess: (reg: Registration) => void;
}

type TicketType = 'Standard' | 'VIP' | 'Group';

const RegistrationModal: React.FC<RegistrationModalProps> = ({ event, user, onClose, onSuccess }) => {
  const [step, setStep] = useState<'contact' | 'tickets' | 'profile' | 'payment' | 'processing-payment' | 'dispatching' | 'confirmation'>('contact');
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [waOptIn, setWaOptIn] = useState(true);
  
  // Ticket selection state
  const [selectedTicketType, setSelectedTicketType] = useState<TicketType>('Standard');
  const [groupSize, setGroupSize] = useState(3);
  
  const [dispatchStatus, setDispatchStatus] = useState({
    ai: 'pending',
    whatsapp: 'pending',
    hubspot: 'pending'
  });

  const [aiBriefing, setAiBriefing] = useState<{ whatsapp: string, email: string } | null>(null);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    countryCode: '+65', 
    company: user?.company || '',
    jobTitle: user?.jobTitle || '',
    goals: user?.goals || ''
  });

  // Ticket Pricing Logic
  const getTicketPrice = () => {
    switch (selectedTicketType) {
      case 'VIP':
        return event.basePrice * 2.5;
      case 'Group':
        return (event.basePrice * 0.8) * groupSize;
      default:
        return event.basePrice;
    }
  };

  const totalPrice = getTicketPrice();

  // Determine regional payment methods
  const getRegionalMethods = () => {
    switch (event.currency) {
      case 'SGD':
        return [
          { id: 'paynow', name: 'PayNow', icon: QrCode, description: 'Scan SGQR to pay instantly' },
          { id: 'grabpay', name: 'GrabPay', icon: Smartphone, description: 'Pay via Grab wallet' },
          { id: 'card', name: 'Credit Card', icon: CreditCard, description: 'Visa/Mastercard' },
        ];
      case 'IDR':
        return [
          { id: 'qris', name: 'QRIS / GoPay', icon: QrCode, description: 'Support all e-wallets' },
          { id: 'va', name: 'Virtual Account', icon: Landmark, description: 'BCA, Mandiri, BNI' },
          { id: 'ovo', name: 'OVO / Dana', icon: SmartphoneNfc, description: 'Direct e-wallet charge' },
        ];
      case 'THB':
        return [
          { id: 'promptpay', name: 'PromptPay', icon: QrCode, description: 'Standard Thai QR Payment' },
          { id: 'linepay', name: 'Rabbit LINE Pay', icon: MessageSquare, description: 'Pay via LINE app' },
          { id: 'card', name: 'Credit Card', icon: CreditCard, description: 'Visa/Mastercard' },
        ];
      default:
        return [
          { id: 'card', name: 'Credit Card', icon: CreditCard, description: 'Visa/Mastercard' },
          { id: 'crypto', name: 'Crypto', icon: Zap, description: 'USDT / USDC / BTC' },
        ];
    }
  };

  const methods = getRegionalMethods();

  useEffect(() => {
    if (methods.length > 0 && !paymentMethod) {
      setPaymentMethod(methods[0].id);
    }
  }, [methods]);

  const handleNext = () => {
    if (step === 'contact') setStep('tickets');
    else if (step === 'tickets') setStep('profile');
    else if (step === 'profile') {
      if (totalPrice === 0) {
        handlePayment(); // Auto-skip payment for free events
      } else {
        setStep('payment');
      }
    }
  };

  const handlePayment = async () => {
    setLoading(true);
    if (totalPrice > 0) {
      setStep('processing-payment');
      await new Promise(r => setTimeout(r, 2000)); // Simulate gateway processing
    }
    
    setStep('dispatching');
    
    // 1. Generate AI Briefing
    setDispatchStatus(s => ({ ...s, ai: 'processing' }));
    const briefing = await generatePersonalizedBriefing(
      { name: formData.name, jobTitle: formData.jobTitle, goals: formData.goals } as User,
      event,
      event.predictedTurnout
    );
    setAiBriefing(briefing);
    setDispatchStatus(s => ({ ...s, ai: 'completed' }));
    
    // 2. Simulate WhatsApp Dispatch
    await new Promise(r => setTimeout(r, 800));
    setDispatchStatus(s => ({ ...s, whatsapp: 'processing' }));
    await new Promise(r => setTimeout(r, 1200));
    setDispatchStatus(s => ({ ...s, whatsapp: 'completed' }));

    // 3. Simulate HubSpot/Mailchimp Sync
    await new Promise(r => setTimeout(r, 600));
    setDispatchStatus(s => ({ ...s, hubspot: 'processing' }));
    await new Promise(r => setTimeout(r, 1000));
    setDispatchStatus(s => ({ ...s, hubspot: 'completed' }));

    setStep('confirmation');
    setLoading(false);
  };

  const handleDone = () => {
    const reg: Registration = {
      id: `NS-${Math.floor(Math.random() * 90000) + 10000}-Z`,
      eventId: event.id,
      attendeeName: formData.name,
      email: formData.email,
      phone: `${formData.countryCode}${formData.phone}`,
      waOptIn: waOptIn,
      waStatus: 'Delivered',
      emailStatus: 'Sent',
      ticketType: selectedTicketType,
      paymentStatus: 'Paid',
      paymentMethod: totalPrice === 0 ? 'RSVP' : (methods.find(m => m.id === paymentMethod)?.name || 'Local Payment'),
      amountPaid: totalPrice,
      timestamp: new Date().toISOString(),
      qrCode: 'MOCKED_QR_DATA',
      aiBriefing: aiBriefing?.whatsapp
    };
    onSuccess(reg);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl my-8">
        
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {['Contact', 'Tickets', 'Business', 'Payment', 'Dispatch', 'Done'].map((s, idx) => (
              <div key={s} className="flex items-center gap-2 flex-shrink-0">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black ${
                  idx === ['contact', 'tickets', 'profile', 'payment', 'dispatching', 'confirmation'].indexOf(step === 'processing-payment' ? 'payment' : step) ? 'bg-mantis-500 text-slate-900' : 'bg-slate-800 text-slate-600'
                }`}>
                  {idx + 1}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider hidden sm:inline ${
                   idx === ['contact', 'tickets', 'profile', 'payment', 'dispatching', 'confirmation'].indexOf(step === 'processing-payment' ? 'payment' : step) ? 'text-white' : 'text-slate-600'
                }`}>{s}</span>
              </div>
            ))}
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-2"><X size={20} /></button>
        </div>

        <div className="p-6 sm:p-10">
          {step === 'contact' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-bold text-white italic">Contact Details</h2>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white outline-none" placeholder="Budi Santoso" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">WhatsApp</label>
                    <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white outline-none" placeholder="8123 4567" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email</label>
                    <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white outline-none" placeholder="budi@company.id" />
                  </div>
                </div>
              </div>
              <button onClick={handleNext} className="w-full bg-mantis-600 py-4 rounded-xl text-white font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                Continue to Tickets <ChevronRight size={16} />
              </button>
            </div>
          )}

          {step === 'tickets' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-bold text-white italic">Select Ticket Type</h2>
              <div className="grid grid-cols-1 gap-4">
                {/* Standard */}
                <button 
                  onClick={() => setSelectedTicketType('Standard')}
                  className={`flex items-start gap-4 p-5 rounded-2xl border transition-all text-left ${
                    selectedTicketType === 'Standard' ? 'bg-slate-800 border-mantis-500 ring-1 ring-mantis-500' : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${selectedTicketType === 'Standard' ? 'bg-mantis-500 text-slate-900' : 'bg-slate-700 text-slate-400'}`}>
                    <Ticket size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-black text-white uppercase tracking-wider">Standard Pass</h4>
                      <span className="text-white font-black">{event.currency} {event.basePrice.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Full access to exhibition floor and main seminars.</p>
                  </div>
                </button>

                {/* VIP */}
                <button 
                  onClick={() => setSelectedTicketType('VIP')}
                  className={`flex items-start gap-4 p-5 rounded-2xl border transition-all text-left relative overflow-hidden ${
                    selectedTicketType === 'VIP' ? 'bg-indigo-900/20 border-indigo-500 ring-1 ring-indigo-500' : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[8px] font-black uppercase px-2 py-1 rounded-bl-lg tracking-widest">Recommended</div>
                  <div className={`p-3 rounded-xl ${selectedTicketType === 'VIP' ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    <Star size={24} fill={selectedTicketType === 'VIP' ? 'white' : 'none'} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-black text-white uppercase tracking-wider">VIP Premium</h4>
                      <span className="text-white font-black">{event.currency} {(event.basePrice * 2.5).toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Lounge access, AI Matchmaking Pro, and private networking.</p>
                  </div>
                </button>

                {/* Group */}
                <div 
                  className={`p-5 rounded-2xl border transition-all ${
                    selectedTicketType === 'Group' ? 'bg-emerald-900/20 border-emerald-500 ring-1 ring-emerald-500' : 'bg-slate-800/50 border-slate-700'
                  }`}
                >
                  <button 
                    onClick={() => setSelectedTicketType('Group')}
                    className="flex items-start gap-4 text-left w-full"
                  >
                    <div className={`p-3 rounded-xl ${selectedTicketType === 'Group' ? 'bg-emerald-500 text-slate-900' : 'bg-slate-700 text-slate-400'}`}>
                      <UsersRound size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-black text-white uppercase tracking-wider">Group Special (3+)</h4>
                        <span className="text-white font-black text-xs">20% Discount / Person</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">Best for teams and corporate delegations.</p>
                    </div>
                  </button>
                  
                  {selectedTicketType === 'Group' && (
                    <div className="mt-4 pt-4 border-t border-emerald-500/20 flex items-center justify-between">
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Attendees</span>
                      <div className="flex items-center gap-3">
                        <button onClick={() => setGroupSize(Math.max(3, groupSize - 1))} className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-white">-</button>
                        <span className="text-white font-black">{groupSize}</span>
                        <button onClick={() => setGroupSize(groupSize + 1)} className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-white">+</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex justify-between items-center">
                 <div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Total Amount</span>
                    <div className="text-2xl font-black text-white">{event.currency} {totalPrice.toLocaleString()}</div>
                 </div>
                 <button onClick={handleNext} className="bg-mantis-600 py-3 px-8 rounded-xl text-white font-black uppercase text-xs tracking-widest">Next Step</button>
              </div>
            </div>
          )}

          {step === 'profile' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-bold text-white italic">Business Networking Profile</h2>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Job Title</label>
                  <input type="text" value={formData.jobTitle} onChange={e => setFormData({...formData, jobTitle: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white outline-none" placeholder="Head of Fintech" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Networking Goals</label>
                  <textarea value={formData.goals} onChange={e => setFormData({...formData, goals: e.target.value})} className="w-full h-32 bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white outline-none text-sm" placeholder="I want to find payment partners..." />
                </div>
              </div>
              <button onClick={handleNext} className="w-full bg-mantis-600 py-4 rounded-xl text-white font-black uppercase text-xs tracking-widest">
                {totalPrice === 0 ? 'Finish RSVP' : 'Proceed to Payment'}
              </button>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-800 p-6 rounded-3xl border border-slate-700">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Total Payable</span>
                  <div className="text-3xl font-black text-white">{event.currency} {totalPrice.toLocaleString()}</div>
                  <span className="text-[10px] text-mantis-400 font-bold uppercase tracking-widest">{selectedTicketType} Pass × {selectedTicketType === 'Group' ? groupSize : 1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-mantis-500" size={20} />
                  <span className="text-xs font-black text-slate-400 uppercase">Secure Gateway</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Regional Payment Methods</h4>
                <div className="grid grid-cols-1 gap-3">
                  {methods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                        paymentMethod === method.id 
                          ? 'bg-mantis-500/10 border-mantis-500' 
                          : 'bg-slate-800 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${paymentMethod === method.id ? 'bg-mantis-500 text-slate-900' : 'bg-slate-700 text-slate-400'}`}>
                          <method.icon size={24} />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-white text-sm">{method.name}</p>
                          <p className="text-[10px] text-slate-500 font-medium">{method.description}</p>
                        </div>
                      </div>
                      {paymentMethod === method.id && <CheckCircle className="text-mantis-500" size={20} />}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={handlePayment} className="w-full bg-mantis-600 py-5 rounded-xl text-white font-black uppercase text-sm tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-mantis-500/20">
                <Zap size={18} fill="currentColor" /> Pay with {methods.find(m => m.id === paymentMethod)?.name}
              </button>
            </div>
          )}

          {step === 'processing-payment' && (
            <div className="space-y-8 py-10 text-center animate-in fade-in">
              <div className="relative inline-block">
                <QrCode size={200} className="text-white mx-auto opacity-30 blur-sm" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Loader2 className="animate-spin text-mantis-500" size={64} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Connecting Gateway...</h3>
                <p className="text-slate-400 text-xs mt-2">Finalizing transaction for {methods.find(m => m.id === paymentMethod)?.name}</p>
              </div>
              <div className="max-w-xs mx-auto flex items-center gap-4 bg-slate-800 p-4 rounded-2xl border border-slate-700 text-left">
                 <div className="p-2 bg-slate-700 rounded-lg text-mantis-400"><Smartphone size={20}/></div>
                 <p className="text-[10px] text-slate-400 leading-tight">Please authorize the payment in your e-wallet app if prompted.</p>
              </div>
            </div>
          )}

          {step === 'dispatching' && (
            <div className="space-y-10 py-10 animate-in fade-in">
              <div className="text-center">
                <Loader2 className="animate-spin text-mantis-500 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Personalizing Experience...</h3>
              </div>
              
              <div className="max-w-xs mx-auto space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-800 rounded-2xl border border-slate-700">
                  <div className="flex items-center gap-3">
                    <BrainCircuit size={20} className={dispatchStatus.ai === 'completed' ? 'text-mantis-400' : 'text-slate-500'} />
                    <span className="text-xs font-bold text-white">AI Briefing Generation</span>
                  </div>
                  {dispatchStatus.ai === 'completed' ? <CheckCircle size={16} className="text-mantis-400" /> : <Loader2 className="animate-spin text-slate-600" size={16} />}
                </div>
                
                <div className="flex items-center justify-between p-4 bg-slate-800 rounded-2xl border border-slate-700">
                  <div className="flex items-center gap-3">
                    <MessageSquare size={20} className={dispatchStatus.whatsapp === 'completed' ? 'text-mantis-400' : 'text-slate-500'} />
                    <span className="text-xs font-bold text-white">WhatsApp Business API</span>
                  </div>
                  {dispatchStatus.whatsapp === 'completed' ? <CheckCircle size={16} className="text-mantis-400" /> : <Loader2 className="animate-spin text-slate-600" size={16} />}
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-800 rounded-2xl border border-slate-700">
                  <div className="flex items-center gap-3">
                    <MailCheck size={20} className={dispatchStatus.hubspot === 'completed' ? 'text-mantis-400' : 'text-slate-500'} />
                    <span className="text-xs font-bold text-white">HubSpot/Mailchimp Sync</span>
                  </div>
                  {dispatchStatus.hubspot === 'completed' ? <CheckCircle size={16} className="text-mantis-400" /> : <Loader2 className="animate-spin text-slate-600" size={16} />}
                </div>
              </div>
            </div>
          )}

          {step === 'confirmation' && (
            <div className="text-center space-y-8 animate-in zoom-in-95 duration-700">
              <div className="w-20 h-20 bg-mantis-500/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="text-mantis-400" size={48} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Registration Confirmed!</h2>
                <p className="text-slate-400 text-sm mt-2">Paid via {methods.find(m => m.id === paymentMethod)?.name || 'RSVP'}. Check WhatsApp for insights.</p>
              </div>

              {aiBriefing && (
                <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 text-left relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-3 flex gap-2">
                      <div className="bg-mantis-500/10 text-mantis-400 p-1 rounded"><MessageSquare size={12}/></div>
                      <div className="bg-indigo-500/10 text-indigo-400 p-1 rounded"><Mail size={12}/></div>
                   </div>
                   <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Your Personalized Briefing Excerpt</h4>
                   <p className="text-xs text-white leading-relaxed italic mb-4">"{aiBriefing.whatsapp}"</p>
                   <div className="flex justify-between items-center text-[9px] font-black text-slate-600 uppercase tracking-widest border-t border-slate-700 pt-3">
                      <span>Ref: {paymentMethod === 'rsvp' ? 'FREE-RSVP' : 'SEA-GATEWAY-TX'}-442</span>
                      <span className="text-mantis-400">Delivered</span>
                   </div>
                </div>
              )}

              <div className="bg-white p-4 rounded-2xl inline-block shadow-2xl">
                <QrCode size={140} className="text-slate-900" />
              </div>

              <button onClick={handleDone} className="w-full bg-slate-800 py-4 rounded-xl text-white font-black uppercase text-xs tracking-widest hover:bg-slate-700 transition-all">Go to My Portal</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
