import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Insurance Regulatory Integration Platform',
      description: 'Enterprise-level integration solution using WSO2 APIM and MI for insurance regulatory compliance. Implemented OAuth2.0 security, JWT tokens, and seamless API orchestration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      tags: ['WSO2 APIM', 'WSO2 MI', 'OAuth2.0', 'JWT'],
      github: '#',
      live: '#'
    },
    {
      title: 'Banking Payment Gateway Integration',
      description: 'Developed secure payment processing system with WSO2 EI, implementing TLS/SSL certificates, and integrating with multiple banking APIs for financial transactions.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
      tags: ['WSO2 EI', 'TLS/SSL', 'Java', 'Oracle'],
      github: '#',
      live: '#'
    },
    {
      title: 'Cloud Infrastructure & Monitoring',
      description: 'Implemented comprehensive AWS cloud solution with S3, EC2, RDS services. Set up ELK stack for logging and monitoring with Elasticsearch, Logstash, Kibana, and Filebeat.',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg',
      tags: ['AWS', 'ELK Stack', 'Elasticsearch', 'Kibana'],
      github: '#',
      live: '#'
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Established automated deployment pipeline using Maven, JFrog Artifactory, and GitBash. Implemented cross-account AWS S3 integration and comprehensive testing with JMeter.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
      tags: ['Maven', 'CI/CD', 'JFrog', 'JMeter'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development and design.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;