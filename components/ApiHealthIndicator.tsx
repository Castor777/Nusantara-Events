import React, { useState, useEffect } from 'react';
import { checkApiHealth } from '../services/api';
import { Activity, Wifi, WifiOff } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface ApiHealthIndicatorProps {
    language: Language;
}

const ApiHealthIndicator: React.FC<ApiHealthIndicatorProps> = ({ language }) => {
    const [isHealthy, setIsHealthy] = useState<boolean | null>(null);
    const [lastChecked, setLastChecked] = useState<Date | null>(null);

    const t = TRANSLATIONS[language];

    useEffect(() => {
        const checkHealth = async () => {
            const healthy = await checkApiHealth();
            setIsHealthy(healthy);
            setLastChecked(new Date());
        };

        // Check immediately
        checkHealth();

        // Check every 30 seconds
        const interval = setInterval(checkHealth, 30000);

        return () => clearInterval(interval);
    }, []);

    if (isHealthy === null) return null;

    return (
        <div
            className={`
        flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider
        border transition-all duration-300
        ${isHealthy
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : 'bg-red-500/10 text-red-400 border-red-500/20 animate-pulse'}
      `}
            title={lastChecked ? `Last checked: ${lastChecked.toLocaleTimeString()}` : ''}
        >
            {isHealthy ? <Wifi size={14} /> : <WifiOff size={14} />}
            <span>{isHealthy ? 'API Online' : 'API Offline'}</span>
        </div>
    );
};

export default ApiHealthIndicator;
