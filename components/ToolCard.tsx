import React from 'react';
import { Tool } from '../types';
import { ExternalLink, Star } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="group relative bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-mantis-500 transition-all duration-300 hover:shadow-lg hover:shadow-mantis-500/10 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={tool.image} 
          alt={tool.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex gap-2">
           {tool.featured && (
            <span className="bg-yellow-500/90 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
              <Star size={10} fill="currentColor" /> Featured
            </span>
          )}
          <span className={`text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm ${
            tool.pricing === 'Free' ? 'bg-mantis-500/90 text-white' :
            tool.pricing === 'Freemium' ? 'bg-blue-500/90 text-white' :
            'bg-slate-900/90 text-slate-200 border border-slate-600'
          }`}>
            {tool.pricing}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs text-mantis-400 font-medium uppercase tracking-wider mb-1 block">
              {tool.category}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-mantis-400 transition-colors">
              {tool.name}
            </h3>
          </div>
        </div>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
          {tool.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-md">
              #{tag}
            </span>
          ))}
        </div>

        <a 
          href={tool.website}
          className="mt-auto w-full bg-slate-700 hover:bg-mantis-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
        >
          Visit Website
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ToolCard;