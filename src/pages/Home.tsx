import React from 'react';
import { Download, Github, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Home() {
  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content Section */}
          <div>
            <h3 className="text-emerald-400 font-mono mb-4 animate-slide-up">
              Software Developer
            </h3>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono mb-6 animate-slide-up">
              Hello I'm{' '}
              <div className="text-emerald-400 mt-2">Hamza belgacem</div>
            </h1>
            
            <p className="text-gray-400 font-mono leading-relaxed mb-12 animate-slide-up animate-delay-100 max-w-xl">
              I excel at crafting elegant digital experiences and 
              I am proficient in various programming languages and 
              technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16 animate-slide-up animate-delay-200">
              <a 
                href="#" 
                className="flex items-center gap-2 border border-emerald-400 text-emerald-400 px-6 py-3 rounded-full hover:bg-emerald-400 hover:text-black transition-all duration-300 font-mono group"
              >
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                DOWNLOAD CV
              </a>
              
              <div className="flex gap-4">
                {[
                  { Icon: Github, link: '#' },
                  { Icon: Linkedin, link: '#' },
                  { Icon: Youtube, link: '#' },
                  { Icon: Twitter, link: '#' }
                ].map(({ Icon, link }, index) => (
                  <a 
                    key={index}
                    href={link} 
                    className="w-12 h-12 flex items-center justify-center border border-gray-800 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { number: '12', text: 'Years of experience' },
                { number: '26', text: 'Projects completed' },
                { number: '8', text: 'Technologies mastered' },
                { number: '499', text: 'Code commits' }
              ].map(({ number, text }, index) => (
                <div 
                  key={index}
                  className="group hover:scale-105 transform transition-all duration-300 animate-count-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-4xl font-mono mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                    {number}
                  </h3>
                  <p className="text-gray-400 text-sm font-mono group-hover:text-white transition-colors duration-300">
                    {text.split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {word}
                        {i !== text.split(' ').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Profile Image Section */}
          <div className="order-first md:order-last">
            <div className="relative max-w-md mx-auto">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 animate-glow-pulse">
                <div className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full"></div>
              </div>
              
              {/* Rotating Border */}
              <div className="absolute inset-4 border-2 border-emerald-400/30 rounded-full animate-border-rotate"></div>
              
              {/* Image Container */}
              <div className="relative z-10">
                <div className="aspect-square rounded-full overflow-hidden border-4 border-emerald-400/50 animate-float">
                  <img 
                    src="https://hamzabelgacem.tn/storage/home/hamzaBelgacem.webp" 
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-emerald-400/20 rounded-full animate-glow-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-emerald-400/20 rounded-full animate-glow-pulse delay-150"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}