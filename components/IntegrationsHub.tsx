import React, { useState } from 'react';
import { INTEGRATIONS_DATA } from '../constants';
import { Check, Plus, HardDrive, Box, MessageSquare, Database, Hash, Settings } from 'lucide-react';

const iconMap: Record<string, any> = {
  HardDrive, Box, MessageSquare, Database, Hash
};

const IntegrationsHub: React.FC = () => {
  // Simulate local state for toggling connections
  const [integrations, setIntegrations] = useState(INTEGRATIONS_DATA);

  const toggleConnection = (id: string) => {
    setIntegrations(prev => prev.map(item => 
      item.id === id ? { ...item, connected: !item.connected } : item
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
           <h3 className="text-xl font-bold text-white">Integrations Hub</h3>
           <p className="text-slate-400 text-sm">Connect your workspace tools to automate event logistics.</p>
        </div>
        <button className="flex items-center gap-2 text-sm text-mantis-400 hover:text-white transition-colors">
          <Settings size={16} /> Configure API Keys
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((item) => {
          const Icon = iconMap[item.icon] || Box;
          return (
            <div key={item.id} className={`p-5 rounded-xl border transition-all ${
              item.connected 
                ? 'bg-slate-800 border-mantis-500/30' 
                : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
            }`}>
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg ${
                  item.connected ? 'bg-mantis-500/10 text-mantis-400' : 'bg-slate-700 text-slate-400'
                }`}>
                  <Icon size={24} />
                </div>
                <button
                  onClick={() => toggleConnection(item.id)}
                  className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 transition-colors ${
                    item.connected
                      ? 'bg-mantis-500 text-slate-900 hover:bg-mantis-400'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {item.connected ? <><Check size={12} /> Connected</> : <><Plus size={12} /> Connect</>}
                </button>
              </div>
              
              <h4 className="font-bold text-white mb-1">{item.name}</h4>
              <p className="text-xs text-slate-500 mb-2">{item.category}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IntegrationsHub;