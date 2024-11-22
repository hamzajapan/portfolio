import React, { useState } from 'react';

const tabs = ['Experience', 'Education', 'Skills', 'About me'];

const experiences = [
  {
    id: 1,
    period: '2022 - Present',
    title: 'Full Stack Developer',
    company: 'Tech Solutions Inc.',
  },
  {
    id: 2,
    period: '2020 - 2021',
    title: 'Freelance Web Developer',
    company: 'E-commerce Startup',
  },
  {
    id: 3,
    period: 'Summer 2021',
    title: 'Front-End Developer Intern',
    company: 'Web Design Studio',
  },
  {
    id: 4,
    period: '2019 - 2020',
    title: 'Teaching Assistant',
    company: 'Tech Academy',
  }
];

const education = [
  {
    id: 1,
    year: '2023',
    title: 'Full Stack Web Development Bootcamp',
    institution: 'Online Course Platform',
  },
  {
    id: 2,
    year: '2022',
    title: 'Front-end Track',
    institution: 'Codecademy',
  },
  {
    id: 3,
    year: '2020 - 2021',
    title: 'Programming Course',
    institution: 'Online Course',
  },
  {
    id: 4,
    year: '2019',
    title: 'Certified Web Developer',
    institution: 'Tech Institute',
  }
];

const skills = [
  { id: 1, name: 'HTML5', icon: '⚡️' },
  { id: 2, name: 'CSS3', icon: '🎨' },
  { id: 3, name: 'JavaScript', icon: '💻' },
  { id: 4, name: 'React', icon: '⚛️' },
  { id: 5, name: 'Next.js', icon: '🔥' },
  { id: 6, name: 'Tailwind', icon: '🌊' },
  { id: 7, name: 'Node.js', icon: '🚀' },
  { id: 8, name: 'PostgreSQL', icon: '🐘' }
];

const aboutInfo = {
  name: 'Luke Coleman',
  experience: '12+ Years',
  nationality: 'American',
  freelance: 'Available',
  phone: '(+40) 321 654 876',
  skype: 'luke.01',
  email: 'luke.01@gmail.com',
  languages: 'English, Spanish'
};

export default function Resume() {
  const [activeTab, setActiveTab] = useState('Experience');

  const renderContent = () => {
    switch (activeTab) {
      case 'Experience':
        return (
          <>
            <h3 className="text-4xl font-mono mb-4">My experience</h3>
            <p className="text-gray-400 font-mono mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Scelerisque consequat, faucibus et, et.
            </p>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
              {experiences.map((exp) => (
                <div 
                  key={exp.id}
                  className="group bg-gray-900/20 p-6 rounded-xl hover:bg-gray-900/40 transition-all duration-300"
                >
                  <div className="text-emerald-400 font-mono mb-4">{exp.period}</div>
                  <h4 className="text-2xl font-mono mb-3">{exp.title}</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-gray-400 font-mono">{exp.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        );

      case 'Education':
        return (
          <>
            <h3 className="text-4xl font-mono mb-4">My education</h3>
            <p className="text-gray-400 font-mono mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Scelerisque consequat, faucibus et, et.
            </p>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
              {education.map((edu) => (
                <div 
                  key={edu.id}
                  className="group bg-gray-900/20 p-6 rounded-xl hover:bg-gray-900/40 transition-all duration-300"
                >
                  <div className="text-emerald-400 font-mono mb-4">{edu.year}</div>
                  <h4 className="text-2xl font-mono mb-3">{edu.title}</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-gray-400 font-mono">{edu.institution}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        );

      case 'Skills':
        return (
          <>
            <h3 className="text-4xl font-mono mb-4">My skills</h3>
            <p className="text-gray-400 font-mono mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Scelerisque consequat, faucibus et, et.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div 
                  key={skill.id}
                  className="bg-gray-900/20 p-6 rounded-xl hover:bg-gray-900/40 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className="font-mono text-lg">{skill.name}</h4>
                </div>
              ))}
            </div>
          </>
        );

      case 'About me':
        return (
          <>
            <h3 className="text-4xl font-mono mb-4">About me</h3>
            <p className="text-gray-400 font-mono mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Scelerisque consequat, faucibus et, et.
            </p>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-12">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-mono w-32">Name</span>
                <span className="font-mono">{aboutInfo.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-mono w-32">Phone</span>
                <span className="font-mono">{aboutInfo.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-mono w-32">Experience</span>
                <span className="font-mono">{aboutInfo.experience}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-mono w-32">Skype</span>
                <span className="font-mono">{aboutInfo.skype}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-mono w-32">Nationality</span>
                <span className="font-mono">{aboutInfo.nationality}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-mono w-32">Email</span>
                <span className="font-mono">{aboutInfo.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-mono w-32">Freelance</span>
                <span className="font-mono">{aboutInfo.freelance}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-mono w-32">Languages</span>
                <span className="font-mono">{aboutInfo.languages}</span>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <section id="resume" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[300px,1fr] gap-8 lg:gap-20">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-mono mb-6">Why hire me?</h2>
            <p className="text-gray-400 font-mono mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-6 py-4 rounded-xl font-mono transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-emerald-400 text-black'
                      : 'bg-gray-900/50 hover:bg-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in overflow-x-hidden">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
}