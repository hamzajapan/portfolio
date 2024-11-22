import React from 'react';
import { Github, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Work() {
  return (
    <section id="work" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="text-6xl font-bold text-gray-700 mb-4">01</div>
            <h2 className="text-4xl font-bold mb-6">Frontend Project</h2>
            <p className="text-gray-400 mb-8">
              A modern e-commerce platform built with React and Tailwind CSS, featuring a responsive design
              and seamless user experience. The project includes advanced features like cart management,
              user authentication, and real-time updates.
            </p>
            <div className="text-emerald-400 mb-12">Html 5, Css 3, Javascript, React, Tailwind CSS</div>
            
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform">
                <Github size={24} />
              </a>
              <a href="#" className="flex items-center gap-2 bg-emerald-400 text-black px-6 py-2 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-105 transform">
                View Demo
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-delay-200">
            <img 
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&h=600" 
              alt="FurniShop Project"
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="w-12 h-12 flex items-center justify-center bg-emerald-400 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-110 transform">
                <ArrowLeft className="text-black" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-emerald-400 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-110 transform">
                <ArrowRight className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}