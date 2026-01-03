import React, { useState } from 'react';
import { generateMarketingCopy } from '../services/geminiService';
import { TrendingUp, Users, DollarSign, PenTool, Loader2, Lock, Zap, LayoutTemplate } from 'lucide-react';
import { User } from '../types';
import IntegrationsHub from './IntegrationsHub';

interface OrganizerDashboardProps {
  user: User | null;
}

const OrganizerDashboard: React.FC<OrganizerDashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'marketing' | 'integrations'>('overview');
  const [prompt, setPrompt] = useState('');
  const [platform, setPlatform] = useState<'LinkedIn' | 'Twitter' | 'Email'>('LinkedIn');
  const [generatedCopy, setGeneratedCopy] = useState('');
  const [loading, setLoading] = useState(false);

  const isPro = user?.tier === 'pro';

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    const result = await generateMarketingCopy(prompt, platform);
    setGeneratedCopy(result);
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Dashboard Sub-nav */}
      <div className="flex gap-2 border-b border-slate-700 pb-1 overflow-x-auto">
        {[
          { id: 'overview', label: 'Overview', icon: LayoutTemplate },
          { id: 'marketing', label: 'AI Marketing', icon: PenTool },
          { id: 'integrations', label: 'Integrations', icon: Zap },
        ].map((tab) => (
           <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-t-lg text-sm font-medium transition-colors border-b-2 ${
              activeTab === tab.id
                ? 'border-mantis-500 text-mantis-400 bg-slate-800'
                : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-mantis-500/20 rounded-lg text-mantis-400"><Users size={20} /></div>
              <span className="text-slate-400 font-medium">Total Registrations</span>
            </div>
            <p className="text-3xl font-bold text-white">2,845</p>
            <span className="text-xs text-green-400 flex items-center mt-1"><TrendingUp size={12} className="mr-1"/> +12% vs last week</span>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><DollarSign size={20} /></div>
              <span className="text-slate-400 font-medium">Ticket Revenue</span>
            </div>
            <p className="text-3xl font-bold text-white">S$ 142,500</p>
            <span className="text-xs text-slate-500 mt-1">Via Stripe & PayNow</span>
          </div>
          <div className="relative bg-slate-800 p-6 rounded-xl border border-slate-700 overflow-hidden">
             {!isPro && (
               <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 p-4 text-center">
                 <Lock className="text-slate-500 mb-2" size={24} />
                 <p className="text-sm font-bold text-white mb-1">Pro Feature</p>
                 <p className="text-xs text-slate-400 mb-2">Upgrade to see AI predictions</p>
               </div>
             )}
             <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><TrendingUp size={20} /></div>
              <span className="text-slate-400 font-medium">AI Turnout Prediction</span>
            </div>
            <p className="text-3xl font-bold text-white">92%</p>
            <span className="text-xs text-slate-500 mt-1">High confidence based on trends</span>
          </div>
        </div>
      )}

      {activeTab === 'marketing' && (
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden relative animate-in fade-in slide-in-from-bottom-4 duration-500">
           {!isPro && (
             <div className="absolute inset-0 z-20 bg-slate-900/80 backdrop-blur-md flex flex-col items-center justify-center">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 text-center max-w-md shadow-2xl">
                  <div className="w-16 h-16 bg-mantis-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-mantis-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Unlock AI Powers</h3>
                  <p className="text-slate-400 mb-6">
                    Generate unlimited marketing copy, emails, and social posts with our Gemini-powered engine.
                  </p>
                  <button className="bg-mantis-600 hover:bg-mantis-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-mantis-500/20">
                    Upgrade to Pro
                  </button>
                </div>
             </div>
           )}

          <div className="p-6 border-b border-slate-700">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <PenTool className="text-mantis-400" /> AI Marketing Generator
            </h3>
            <p className="text-slate-400 text-sm">Create engaging content for your SEA audience instantly.</p>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Select Platform</label>
                <div className="flex gap-2">
                  {['LinkedIn', 'Twitter', 'Email'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPlatform(p as any)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        platform === p ? 'bg-mantis-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">What do you want to announce?</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., Early bird tickets closing for Singapore Tech Week, 20% discount..."
                  className="w-full h-32 bg-slate-900 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:ring-1 focus:ring-mantis-500 focus:outline-none"
                />
              </div>
              <button
                onClick={handleGenerate}
                disabled={loading || !prompt}
                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" /> : 'Generate Content'}
              </button>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700 min-h-[200px]">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-2 block">Preview Output</span>
              {generatedCopy ? (
                <div className="whitespace-pre-wrap text-slate-300 text-sm">{generatedCopy}</div>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-600 text-sm italic">
                  Generated content will appear here...
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'integrations' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
           {!isPro && (
             <div className="mb-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 flex items-start gap-3">
               <Lock className="text-yellow-500 shrink-0 mt-0.5" size={18} />
               <div>
                 <h4 className="text-yellow-500 font-bold text-sm">Limited Integrations</h4>
                 <p className="text-slate-400 text-xs mt-1">Free tier allows 1 active integration. Upgrade to Pro for unlimited connections.</p>
               </div>
             </div>
           )}
           <IntegrationsHub />
        </div>
      )}
    </div>
  );
};

export default OrganizerDashboard;