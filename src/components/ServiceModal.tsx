import React from 'react';
import { X } from 'lucide-react';
import { Service } from '../types/services';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service.details) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-lg">
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div className="relative w-full max-w-6xl bg-gray-900 rounded-2xl p-8 animate-scale-in">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:text-emerald-400 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="mb-8 mt-20">
            <h3 className="text-4xl font-bold mb-4 text-emerald-400">
              {service.title} Solutions
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {service.details.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.details.solutions.map((solution) => (
              <div 
                key={solution.title}
                className="bg-black/50 p-6 rounded-xl hover:bg-black/70 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-400/10 rounded-lg">
                    <solution.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold">{solution.title}</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}