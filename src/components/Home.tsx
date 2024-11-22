import React from 'react';
import { CircleDot, Github, Linkedin, Twitter, Youtube, Download } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 animate-slide-up">
              Hello I'm <span className="text-emerald-400">Luke Coleman</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 animate-slide-up animate-delay-100">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            
            <div className="flex gap-4 mb-12 animate-slide-up animate-delay-200">
              <a href="#" className="p-2 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-2 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform">
                <Youtube size={24} />
              </a>
              <a href="#" className="p-2 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform">
                <Twitter size={24} />
              </a>
              <a href="#" className="flex items-center gap-2 bg-emerald-400 text-black px-6 py-2 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-105 transform">
                <Download size={20} />
                Download CV
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up animate-delay-300">
              <div className="hover:scale-105 transform transition-transform duration-300">
                <h3 className="text-3xl font-bold mb-2">12</h3>
                <p className="text-gray-400">Years of experience</p>
              </div>
              <div className="hover:scale-105 transform transition-transform duration-300">
                <h3 className="text-3xl font-bold mb-2">26</h3>
                <p className="text-gray-400">Projects completed</p>
              </div>
              <div className="hover:scale-105 transform transition-transform duration-300">
                <h3 className="text-3xl font-bold mb-2">8</h3>
                <p className="text-gray-400">Technologies mastered</p>
              </div>
              <div className="hover:scale-105 transform transition-transform duration-300">
                <h3 className="text-3xl font-bold mb-2">499</h3>
                <p className="text-gray-400">Code commits</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-delay-400">
            <div className="relative w-full aspect-square rounded-full overflow-hidden animate-float">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800" 
                alt="Luke Coleman"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-emerald-400 rounded-full animate-rotate-glow">
                <CircleDot className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}