import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
  },
  {
    id: '02',
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
  },
  {
    id: '03',
    title: 'Logo Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
  },
  {
    id: '04',
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
  },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 animate-slide-up font-mono">Services</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative border-b border-gray-800 pb-12 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
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
          ))}
        </div>
      </div>
    </section>
  );
}