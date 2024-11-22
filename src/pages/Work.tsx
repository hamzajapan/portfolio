import React from 'react';
import { Github, ArrowRight, ArrowLeft } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "Frontend Project",
    description: "A modern e-commerce platform built with React and Tailwind CSS, featuring a responsive design and seamless user experience. The project includes advanced features like cart management, user authentication, and real-time updates.",
    technologies: "Html 5, Css 3, Javascript, React, Tailwind CSS",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&h=600",
  },
  {
    id: "02",
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile banking application that allows users to manage their finances, make transactions, and track expenses. Features biometric authentication and real-time transaction monitoring.",
    technologies: "React Native, TypeScript, Redux, Node.js",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&h=600",
  },
  {
    id: "03",
    title: "AI Dashboard",
    description: "An advanced analytics dashboard powered by AI, providing real-time insights and data visualization. Features include predictive analytics, custom reporting, and interactive charts.",
    technologies: "Next.js, TensorFlow.js, D3.js, GraphQL",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
  },
  {
    id: "04",
    title: "Social Media Platform",
    description: "A feature-rich social media platform with real-time messaging, story sharing, and content discovery. Includes advanced features like video calls, group chats, and content moderation.",
    technologies: "Vue.js, Firebase, WebRTC, Socket.io",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&h=600",
  },
  {
    id: "05",
    title: "Smart Home IoT Dashboard",
    description: "A comprehensive IoT dashboard for smart home management, featuring real-time device control, automation scheduling, and energy consumption monitoring.",
    technologies: "React, Node.js, MQTT, WebSocket",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&h=600",
  },
  {
    id: "06",
    title: "Fitness Tracking App",
    description: "A comprehensive fitness tracking application with workout planning, progress monitoring, and nutrition tracking. Features include custom workout creation and social sharing.",
    technologies: "React Native, Redux, Node.js, MongoDB",
    image: "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?auto=format&fit=crop&w=800&h=600",
  },
  {
    id: "07",
    title: "Educational Platform",
    description: "An interactive learning platform with course management, live sessions, and progress tracking. Includes features like quiz creation, assignment submission, and student analytics.",
    technologies: "Next.js, TypeScript, PostgreSQL, Redis",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&h=600",
  },
  {
    id: "08",
    title: "Weather Forecast App",
    description: "A modern weather application with detailed forecasts, radar maps, and severe weather alerts. Features include location-based forecasts and customizable notifications.",
    technologies: "React, Redux Toolkit, OpenWeatherMap API",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&h=600",
  }
];

export default function Work() {
  const [currentProject, setCurrentProject] = React.useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="text-6xl font-bold text-gray-700 mb-4 font-mono">{projects[currentProject].id}</div>
            <h2 className="text-4xl font-bold mb-6 font-mono">{projects[currentProject].title}</h2>
            <p className="text-gray-400 mb-8 font-mono">
              {projects[currentProject].description}
            </p>
            <div className="text-emerald-400 mb-12 font-mono">{projects[currentProject].technologies}</div>
            
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform">
                <Github size={24} />
              </a>
              <a href="#" className="flex items-center gap-2 bg-emerald-400 text-black px-6 py-2 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-105 transform font-mono">
                View Demo
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-delay-200">
            <div className="relative overflow-hidden rounded-2xl group">
              {/* Project Image */}
              <img 
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="w-full rounded-2xl shadow-lg transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Project Number */}
              <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
                <span className="text-sm font-mono text-white">
                  {currentProject + 1} / {projects.length}
                </span>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button 
                onClick={prevProject}
                className="w-12 h-12 flex items-center justify-center bg-emerald-400 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-110 transform disabled:opacity-50"
                disabled={currentProject === 0}
              >
                <ArrowLeft className="text-black" />
              </button>
              <button 
                onClick={nextProject}
                className="w-12 h-12 flex items-center justify-center bg-emerald-400 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-110 transform disabled:opacity-50"
                disabled={currentProject === projects.length - 1}
              >
                <ArrowRight className="text-black" />
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-400 transition-all duration-500"
                style={{ width: `${((currentProject + 1) / projects.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Project Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setCurrentProject(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                currentProject === index ? 'ring-2 ring-emerald-400' : 'opacity-50 hover:opacity-100'
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-sm font-mono text-white">{project.id}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}