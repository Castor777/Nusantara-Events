import React from 'react';
import { Sponsorship } from '../types';
import { DollarSign, Award, CheckCircle } from 'lucide-react';

interface SponsorshipCardProps {
  item: Sponsorship;
}

const SponsorshipCard: React.FC<SponsorshipCardProps> = ({ item }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-yellow-500/50 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-white">{item.eventName}</h3>
          <div className={`mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide
            ${item.tier === 'Platinum' ? 'bg-slate-200 text-slate-900' : 
              item.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-500' : 
              'bg-slate-600 text-slate-300'}`}>
            <Award size={12} />
            {item.tier} Opportunity
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-mantis-400">{item.amount}</div>
          <span className="text-xs text-slate-500">Ask Price</span>
        </div>
      </div>
      
      <p className="text-slate-400 text-sm mb-6">{item.description}</p>
      
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <CheckCircle size={14} className="text-mantis-500" />
          <span>Verified Organizer</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <CheckCircle size={14} className="text-mantis-500" />
          <span>Local Payment Support (PayNow)</span>
        </div>
      </div>

      <button className="w-full py-2 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-slate-900 font-bold rounded-lg transition-all shadow-lg shadow-yellow-500/10">
        Contact Organizer
      </button>
    </div>
  );
};

export default SponsorshipCard;