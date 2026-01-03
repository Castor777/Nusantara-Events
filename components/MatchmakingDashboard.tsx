
import React, { useState, useEffect } from 'react';
import { User, Exhibitor, MatchResult } from '../types';
import { EXHIBITORS_DATA } from '../constants';
import { calculateMatches } from '../services/geminiService';
import { Sparkles, Briefcase, Target, Loader2, Calendar, MapPin, ArrowRight } from 'lucide-react';

interface MatchmakingDashboardProps {
  user: User;
}

const MatchmakingDashboard: React.FC<MatchmakingDashboardProps> = ({ user }) => {
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    jobTitle: user.jobTitle || 'CTO',
    industry: user.industry || 'Tech',
    goals: user.goals || 'Looking for cloud infrastructure to scale my startup.'
  });

  const handleMatchmaking = async () => {
    setLoading(true);
    // Create a temporary user object with the updated form state for the AI
    const tempUser = { ...user, ...profile };
    const results = await calculateMatches(tempUser, EXHIBITORS_DATA);
    setMatches(results);
    setLoading(false);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
          <Sparkles className="text-mantis-400" size={32} />
          AI Smart Matchmaking
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Our world-class AI analyzes your business goals to curate the perfect list of exhibitors for you to visit.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: User Profile Configuration */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 sticky top-24 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Your Match Profile</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1 flex items-center gap-2">
                  <Briefcase size={16} /> Job Title
                </label>
                <input 
                  type="text" 
                  value={profile.jobTitle}
                  onChange={(e) => setProfile({...profile, jobTitle: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-mantis-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1 flex items-center gap-2">
                  <MapPin size={16} /> Industry
                </label>
                <select 
                  value={profile.industry}
                  onChange={(e) => setProfile({...profile, industry: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-mantis-500 outline-none"
                >
                  <option>Tech</option>
                  <option>Finance</option>
                  <option>Retail</option>
                  <option>Sustainability</option>
                  <option>Healthcare</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1 flex items-center gap-2">
                  <Target size={16} /> What are you looking for?
                </label>
                <textarea 
                  value={profile.goals}
                  onChange={(e) => setProfile({...profile, goals: e.target.value})}
                  className="w-full h-32 bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-mantis-500 outline-none text-sm"
                  placeholder="e.g. I need to find investors for my Series A..."
                />
              </div>

              <button 
                onClick={handleMatchmaking}
                disabled={loading}
                className="w-full bg-gradient-to-r from-mantis-600 to-emerald-600 hover:from-mantis-500 hover:to-emerald-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-mantis-500/20 flex items-center justify-center gap-2 mt-4"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                {loading ? 'Analyzing...' : 'Find My Matches'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Col: Results */}
        <div className="lg:col-span-2 space-y-4">
          {matches.length === 0 && !loading && (
            <div className="bg-slate-800/50 border border-slate-700 border-dashed rounded-2xl h-96 flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <Target className="text-slate-600" size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No matches generated yet</h3>
              <p className="text-slate-400 max-w-sm">
                Update your profile goals on the left and hit "Find My Matches" to let our AI scan the exhibitor database.
              </p>
            </div>
          )}

          {loading && (
            <div className="space-y-4">
               {[1,2,3].map(i => (
                 <div key={i} className="bg-slate-800 rounded-xl p-6 border border-slate-700 animate-pulse">
                   <div className="h-6 bg-slate-700 rounded w-1/3 mb-4"></div>
                   <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
                   <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                 </div>
               ))}
            </div>
          )}

          {matches.map((match, idx) => {
            const exhibitor = EXHIBITORS_DATA.find(e => e.id === match.exhibitorId);
            if (!exhibitor) return null;

            return (
              <div key={match.exhibitorId} className="group bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-mantis-500/50 transition-all hover:shadow-xl hover:shadow-mantis-500/5 relative overflow-hidden">
                {/* Score Badge */}
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex flex-col items-end">
                    <span className={`text-2xl font-black ${match.matchScore > 80 ? 'text-mantis-400' : 'text-yellow-400'}`}>
                      {match.matchScore}%
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Match Score</span>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                   <img src={exhibitor.image} alt={exhibitor.name} className="w-20 h-20 rounded-lg object-cover bg-slate-900 border border-slate-700" />
                   <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold bg-slate-700 text-slate-300 px-2 py-0.5 rounded uppercase">{exhibitor.industry}</span>
                        <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                          <MapPin size={12} /> Booth {exhibitor.boothLocation}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{exhibitor.name}</h3>
                      <p className="text-sm text-slate-400 mb-4">{exhibitor.description}</p>
                      
                      {/* AI Reasoning Box */}
                      <div className="bg-mantis-500/10 border border-mantis-500/20 rounded-lg p-3 mb-4">
                         <div className="flex gap-2 items-start">
                            <Sparkles size={16} className="text-mantis-400 shrink-0 mt-0.5" />
                            <p className="text-sm text-mantis-200 italic leading-relaxed">
                              "{match.reasoning}"
                            </p>
                         </div>
                      </div>

                      <div className="flex items-center justify-between">
                         <div className="flex gap-2">
                            {exhibitor.offerings.slice(0, 2).map(off => (
                              <span key={off} className="text-xs text-slate-500 border border-slate-700 px-2 py-1 rounded-full">{off}</span>
                            ))}
                         </div>
                         <button className="flex items-center gap-2 text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                           <Calendar size={16} /> Schedule Meeting
                         </button>
                      </div>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MatchmakingDashboard;
