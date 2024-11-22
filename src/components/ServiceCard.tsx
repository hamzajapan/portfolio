import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types/services';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
  index: number;
}

export default function ServiceCard({ service, onClick, index }: ServiceCardProps) {
  return (
    <div 
      className="group relative border-b border-gray-800 pb-12 animate-fade-in cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="text-4xl font-mono mb-4" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
            {service.id}
          </div>
          <h3 className="text-4xl font-mono">{service.title}</h3>
        </div>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-emerald-400 transition-colors duration-300">
          <ArrowRight className="text-black w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
      <p className="text-gray-400 font-mono text-sm max-w-xl">
        {service.description}
      </p>
    </div>
  );
}