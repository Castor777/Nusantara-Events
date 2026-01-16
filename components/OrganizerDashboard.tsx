
import React, { useState, useEffect } from 'react';
import { generateMarketingCopy, predictTurnout, generatePostEventReport } from '../services/geminiService';
import { EVENTS_DATA } from '../constants';
// Added Sparkles to the import list from lucide-react
import { 
  TrendingUp, Users, DollarSign, PenTool, Loader2, Lock, Zap, 
  LayoutTemplate, BrainCircuit, BarChart3, Download, MessageSquare, 
  Workflow, Activity, Search, Filter, CheckCircle, Clock, Database, Target, LineChart, 
  PlusCircle, FileUp, AlertCircle, History, Send, Mail, Settings, PieChart, BarChart, ClipboardCheck, ArrowUpRight, Sparkles
} from 'lucide-react';
import { User, PredictionResult, Registration, Event, PostEventReport } from '../types';
import IntegrationsHub from './IntegrationsHub';

interface OrganizerDashboardProps {
  user: User | null;
  registrations: Registration[];
}

const OrganizerDashboard: React.FC<OrganizerDashboardProps> = ({ user, registrations }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'marketing' | 'registrations' | 'integrations' | 'automations' | 'reports'>('overview');
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [predicting, setPredicting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Post-Event Report States
  const [postEventReport, setPostEventReport] = useState<PostEventReport | null>(null);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  const [historicalData, setHistoricalData] = useState<number[]>([12000, 13500, 14200]);
  const [showDataEditor, setShowDataEditor] = useState(false);
  
  const isPro = user?.tier === 'pro';
  const isOrganizer = user?.role === 'organizer';

  const currentCount = 2845 + registrations.length;

  const handlePredict = async () => {
    setPredicting(true);
    const eventWithData: Event = { ...EVENTS_DATA[0], historicalTurnout: historicalData };
    const res = await predictTurnout(eventWithData, currentCount);
    setPrediction(res);
    setPredicting(false);
  };

  const handleGenerateReport = async () => {
    setIsGeneratingReport(true);
    try {
      // Simulation of gathered metrics from multiple sources (Wallets, WhatsApp APIs, HubSpot)
      const rawMetrics: Partial<PostEventReport> = {
        attendanceActual: 14820,
        attendancePredicted: 14200,
        revenueTotal: 650000,
        costTotal: 280000,
        briefingOpenRate: 92,
        networkingConnections: 3420
      };
      const report = await generatePostEventReport(rawMetrics, EVENTS_DATA[0]);
      setPostEventReport(report);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingReport(false);
    }
  };

  const updateHistory = (index: number, value: string) => {
    const newVal = parseInt(value) || 0;
    const nextData = [...historicalData];
    nextData[index] = newVal;
    setHistoricalData(nextData);
  };

  const allRegistrations = [
    { id: '1', attendeeName: 'Andi Pratama', email: 'andi@startup.id', phone: '+6281234567', waOptIn: true, waStatus: 'Delivered', emailStatus: 'Sent', ticketType: 'Standard', paymentMethod: 'QRIS', timestamp: '2024-05-20T10:00:00Z' },
    { id: '2', attendeeName: 'Somsak Lee', email: 'lee@bkk.th', phone: '+6689876543', waOptIn: true, waStatus: 'Delivered', emailStatus: 'Opened', ticketType: 'VIP', paymentMethod: 'PromptPay', timestamp: '2024-05-20T11:30:00Z' },
    ...registrations
  ];

  return (
    <div className="space-y-6">
      <div className="flex gap-2 border-b border-slate-700 pb-1 overflow-x-auto scrollbar-hide">
        {isOrganizer && [
          { id: 'overview', label: 'Overview', icon: LayoutTemplate },
          { id: 'analytics', label: 'AI Analytics', icon: BarChart3 },
          { id: 'registrations', label: 'Registrations', icon: Users },
          { id: 'automations', label: 'Automations', icon: Workflow },
          { id: 'reports', label: 'Post-Event ROI', icon: ClipboardCheck },
          { id: 'marketing', label: 'AI Marketing', icon: PenTool },
          { id: 'integrations', label: 'Integrations', icon: Zap },
        ].map((tab) => (
           <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-3 rounded-t-xl text-xs font-black uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${
              activeTab === tab.id ? 'border-mantis-500 text-mantis-400 bg-slate-800' : 'border-transparent text-slate-500 hover:text-white'
            }`}
          >
            <tab.icon size={14} />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && isOrganizer && (
        <div className="space-y-6 animate-in fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-mantis-500/20 rounded-lg text-mantis-400"><Users size={20} /></div>
                 <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Registrations</span>
               </div>
               <p className="text-4xl font-black text-white">{currentCount}</p>
             </div>
             <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><MessageSquare size={20} /></div>
                 <span className="text-slate-400 text-xs font-black uppercase tracking-widest">WA Dispatches</span>
               </div>
               <p className="text-4xl font-black text-white">{currentCount}</p>
             </div>
             <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400"><Mail size={20} /></div>
                 <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Email (HubSpot)</span>
               </div>
               <p className="text-4xl font-black text-white">{currentCount}</p>
             </div>
          </div>
          
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 flex items-center justify-between group shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-2">AI Turnout Analysis</h3>
                <p className="text-slate-400 text-sm max-w-md">Gemini 3-Pro is currently monitoring regional SEA industry surge patterns.</p>
                <button onClick={() => setActiveTab('analytics')} className="mt-6 bg-mantis-600 hover:bg-mantis-500 text-white font-black py-3 px-8 rounded-xl transition-all shadow-lg text-xs uppercase tracking-widest">Analyze Benchmarks</button>
             </div>
             <Activity className="text-mantis-500/10 absolute right-10 top-1/2 -translate-y-1/2" size={200} />
          </div>
        </div>
      )}

      {activeTab === 'reports' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 relative overflow-hidden group shadow-2xl">
            {!isPro && (
               <div className="absolute inset-0 z-20 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-6 text-center">
                  <div className="max-w-xs bg-slate-800 p-8 rounded-2xl border border-slate-700">
                    <Lock className="text-mantis-400 mx-auto mb-4" size={32} />
                    <h4 className="text-white font-black uppercase tracking-widest mb-2">Pro Performance Audits</h4>
                    <p className="text-slate-400 text-xs mb-4">Post-event ROI analysis requires Pro access to aggregate data from communication logs.</p>
                    <button className="w-full bg-mantis-600 text-white font-black py-3 rounded-xl text-xs uppercase tracking-widest">Upgrade Now</button>
                  </div>
               </div>
            )}

            <div className="flex flex-col lg:flex-row gap-10">
               <div className="lg:w-1/3 space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter flex items-center gap-3">
                      <PieChart className="text-mantis-400" size={28} /> Post-Event Audit
                    </h3>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed font-medium">
                      Gather cross-platform data (Ticketing, CRM, Sustainability) to calculate absolute event ROI.
                    </p>
                  </div>

                  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 space-y-4">
                     <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500 font-black uppercase tracking-widest">Event Completion</span>
                        <span className="text-mantis-400 font-black">100%</span>
                     </div>
                     <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-mantis-500 w-full"></div>
                     </div>
                     <p className="text-[10px] text-slate-500 leading-tight">All registration and scan-in data is currently cached and ready for Gemini analysis.</p>
                  </div>

                  <button 
                    onClick={handleGenerateReport} 
                    disabled={isGeneratingReport}
                    className="w-full bg-mantis-600 hover:bg-mantis-500 disabled:opacity-50 text-white font-black py-4 rounded-xl transition-all shadow-xl shadow-mantis-500/20 uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                  >
                    {isGeneratingReport ? <Loader2 className="animate-spin" size={16}/> : <Sparkles size={16}/>}
                    {isGeneratingReport ? 'Processing Final Data...' : 'Generate AI ROI Report'}
                  </button>
               </div>

               <div className="lg:w-2/3">
                  {postEventReport ? (
                    <div className="space-y-6 animate-in slide-in-from-right-4">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                             <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Financial ROI</span>
                             <div className="text-5xl font-black text-white tracking-tighter italic">+{postEventReport.roi.toFixed(1)}%</div>
                             <div className="flex items-center gap-2 mt-2 text-mantis-400 text-[10px] font-bold uppercase">
                                <ArrowUpRight size={14}/> Profitable Venture
                             </div>
                          </div>
                          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                             <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Attendance Variance</span>
                             <div className="text-5xl font-black text-white tracking-tighter italic">
                                {postEventReport.attendanceActual.toLocaleString()}
                             </div>
                             <div className="text-slate-500 text-[10px] font-bold uppercase mt-2">
                                vs {postEventReport.attendancePredicted.toLocaleString()} Predicted
                             </div>
                          </div>
                       </div>

                       <div className="bg-mantis-500/5 border border-mantis-500/20 p-8 rounded-3xl relative overflow-hidden">
                          <BrainCircuit className="absolute -right-10 -bottom-10 text-mantis-500/10" size={180} />
                          <h4 className="text-[10px] font-black text-mantis-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                             <Sparkles size={14}/> Executive Strategic Review
                          </h4>
                          <div className="text-sm text-mantis-100 leading-relaxed font-medium space-y-4 relative z-10">
                             {postEventReport.aiExecutiveSummary.split('\n\n').map((para, i) => (
                               <p key={i}>{para}</p>
                             ))}
                          </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                             <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Digital Engagement Funnel</h4>
                             <div className="space-y-4">
                                <div>
                                   <div className="flex justify-between text-[10px] font-black text-white uppercase mb-1">
                                      <span>AI Briefing Open Rate</span>
                                      <span>{postEventReport.briefingOpenRate}%</span>
                                   </div>
                                   <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                      <div className="h-full bg-indigo-500" style={{ width: `${postEventReport.briefingOpenRate}%` }}></div>
                                   </div>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                   <span className="text-slate-500 font-bold uppercase">Network Sessions</span>
                                   <span className="text-white font-black">{postEventReport.networkingConnections} Meetings</span>
                                </div>
                             </div>
                          </div>
                          <div className="bg-indigo-600/10 border border-indigo-600/20 p-6 rounded-2xl">
                             <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3">Sustainability Audit</h4>
                             <p className="text-xs text-indigo-100 leading-relaxed italic">{postEventReport.sustainabilityImpact}</p>
                          </div>
                       </div>
                    </div>
                  ) : (
                    <div className="h-full bg-slate-900/30 border border-dashed border-slate-700 rounded-3xl flex flex-col items-center justify-center p-20 text-center opacity-40">
                       <BarChart size={64} className="text-slate-700 mb-4" />
                       <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">Awaiting Analysis</h4>
                       <p className="text-[10px] text-slate-600 mt-2 max-w-xs">Run the ROI report to generate post-event charts and AI insights.</p>
                    </div>
                  )}
               </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && <div className="space-y-6 animate-in fade-in">
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 relative overflow-hidden group shadow-2xl">
          {!isPro && <div className="absolute inset-0 z-20 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-6 text-center">
            <div className="max-w-xs bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Lock className="text-mantis-500 mx-auto mb-4" size={32} />
              <h4 className="text-white font-black uppercase tracking-widest mb-2">Pro Forecasting</h4>
              <button className="w-full bg-mantis-600 text-white font-black py-3 rounded-xl text-xs uppercase tracking-widest mt-4">Upgrade to Pro</button>
            </div>
          </div>}
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/3 space-y-6">
              <h3 className="text-xl font-black text-white italic uppercase tracking-tighter flex items-center gap-3"><History size={24} className="text-mantis-400"/> Data Source Center</h3>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 space-y-4">
                {historicalData.map((val, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-black">YEAR -{3-idx}</span>
                    {showDataEditor ? <input type="number" value={val} onChange={(e) => updateHistory(idx, e.target.value)} className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-white w-24 outline-none focus:ring-1 focus:ring-mantis-500" /> : <span className="text-white font-bold">{val.toLocaleString()}</span>}
                  </div>
                ))}
                <button onClick={() => setShowDataEditor(!showDataEditor)} className="w-full text-[10px] font-black uppercase text-mantis-400 py-2 border border-slate-700 rounded-lg">{showDataEditor ? 'Save Data' : 'Edit Historical Numbers'}</button>
              </div>
              <button onClick={handlePredict} disabled={predicting} className="w-full bg-indigo-600 py-4 rounded-xl text-white font-black uppercase text-xs tracking-widest shadow-xl flex items-center justify-center gap-2">
                {predicting ? <Loader2 className="animate-spin" size={16}/> : <Zap size={16} fill="currentColor"/>}
                Execute AI Forecast
              </button>
            </div>
            <div className="lg:w-2/3">
              {prediction ? <div className="animate-in slide-in-from-right-4">
                <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 mb-4">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 block">AI Forecasted Turnout</span>
                  <div className="text-6xl font-black text-white italic">{prediction.estimatedTotal.toLocaleString()}</div>
                  <div className="text-mantis-400 text-sm font-bold mt-2">Confidence: {Math.round(prediction.confidenceScore * 100)}%</div>
                </div>
                <div className="bg-indigo-600/10 border border-indigo-500/20 p-6 rounded-2xl">
                  <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3">AI Logistics Advice</h4>
                  <p className="text-sm text-indigo-100 italic leading-relaxed font-medium">"{prediction.recommendation}"</p>
                </div>
              </div> : <div className="h-full bg-slate-900/30 border border-dashed border-slate-700 rounded-3xl flex flex-col items-center justify-center p-20 opacity-40"><LineChart size={64} className="mb-4 text-slate-700"/><p className="text-xs font-black uppercase tracking-widest">Awaiting Analysis</p></div>}
            </div>
          </div>
        </div>
      </div>}

      {activeTab === 'automations' && (
        <div className="space-y-6 animate-in fade-in">
           <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-3">
                    <Workflow className="text-mantis-400" size={32} />
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Communication Automations</h3>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Live: All Nodes Healthy</span>
                 </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                   <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Settings size={14}/> Active Workflows</h4>
                   {[
                     { name: 'AI Briefing Dispatcher', trigger: 'On Successful Payment', provider: 'Twilio / HubSpot' },
                     { name: 'Predicted Surge Warning', trigger: 'Turnout Threshold > 90%', provider: 'Slack / Email' },
                   ].map((wf, idx) => (
                     <div key={idx} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between group hover:border-mantis-500/30 transition-all">
                        <div>
                           <p className="text-sm font-bold text-white">{wf.name}</p>
                           <p className="text-[10px] text-slate-500 mt-1 uppercase font-black">{wf.trigger}</p>
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-400 font-mono">{wf.provider}</span>
                           <div className="w-8 h-4 bg-mantis-600 rounded-full relative">
                              <div className="absolute right-1 top-1 v-2 h-2 bg-white rounded-full"></div>
                           </div>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="space-y-4">
                   <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Activity size={14}/> Live Activity Feed</h4>
                   <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
                      <div className="max-h-[300px] overflow-y-auto divide-y divide-slate-800 p-2">
                         {allRegistrations.slice(0, 5).map((reg, idx) => (
                           <div key={idx} className="p-4 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-mantis-400">
                                    <Send size={14} />
                                 </div>
                                 <div>
                                    <p className="text-xs font-bold text-white">Briefing sent to {reg.attendeeName}</p>
                                    <p className="text-[9px] text-slate-500 font-black uppercase">{reg.phone} • {new Date(reg.timestamp).toLocaleTimeString()}</p>
                                 </div>
                              </div>
                              <span className="text-[9px] font-black text-mantis-400 uppercase tracking-widest bg-mantis-500/10 px-2 py-1 rounded">Delivered</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              </div>
           </div>
        </div>
      )}

      {activeTab === 'registrations' && (
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 animate-in fade-in">
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Attendee Ledger</h3>
              <div className="flex gap-2">
                 <button className="bg-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest text-white">CSV</button>
                 <button className="bg-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest text-white">JSON</button>
              </div>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                 <thead>
                    <tr className="text-slate-500 uppercase text-[10px] font-black tracking-widest border-b border-slate-700">
                       <th className="py-4 px-2">Name</th>
                       <th className="py-4 px-2">WhatsApp</th>
                       <th className="py-4 px-2">Payment Type</th>
                       <th className="py-4 px-2">AI Briefing</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-700/50">
                    {allRegistrations.map((reg, idx) => (
                      <tr key={idx} className="hover:bg-slate-700/20 transition-all">
                         <td className="py-4 px-2 font-bold text-white">{reg.attendeeName}</td>
                         <td className="py-4 px-2 text-slate-400 font-mono text-xs">{reg.phone}</td>
                         <td className="py-4 px-2">
                            <span className="text-[10px] font-black px-2 py-0.5 rounded uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                              {reg.paymentMethod}
                            </span>
                         </td>
                         <td className="py-4 px-2">
                            {reg.aiBriefing ? <CheckCircle size={16} className="text-mantis-400" /> : <div className="w-4 h-4 rounded-full border border-slate-700"></div>}
                         </td>
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
