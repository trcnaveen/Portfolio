import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/trcnaveen"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/naveen-kumar1998/"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="naveenchandran3009@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>

            <p className="text-gray-400 flex items-center justify-center space-x-2">
              {/*<span>Made with</span>
              <Heart size={16} className="text-red-500" />*/}
              <span>Naveen Kumar Chandrasekar</span>
            </p>
            
            <p className="text-gray-500 text-sm mt-2">
              © 2025 Engineer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;