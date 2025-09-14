import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hello, I'm</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Senior WSO2 Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Senior Engineer L3 | Integration & API Management Specialist
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Experienced WSO2 Developer specializing in enterprise integration solutions, 
            API management, and cloud infrastructure. Currently working in Insurance & Regulatory 
            sector with extensive background in Banking and Financial applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Download CV
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/trcnaveen"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-kumar1998/"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="naveenchandran3009@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;