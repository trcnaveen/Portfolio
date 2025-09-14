import React from 'react';
import { Code, Palette, Zap, Users, Workflow, Shield} from 'lucide-react';
import photo from '../image/photo.jpg';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Vue.js, Python Flask',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Java, Node.js, Python, PostgreSQL, Oracle SQL, MongoDB',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Software Security',
      description: 'CA, TLS, HTTPS, HSTS, Ciphers, Hashing, Algorithm, OpenSSL, IBM MQ, Keytool',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Leadership',
      description: 'Project Management, Agile, Mentoring',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Automation',
      description: 'Shell Script, YAML, batch',
      color: 'from-orange-500 to-blue-500'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-blue-400">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                Senior WSO2 Integration Specialist
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Senior Engineer L3 with extensive experience in WSO2 development, API management, 
                and enterprise integration solutions. Currently working in Insurance & Regulatory 
                sector, with strong background in Banking and Financial applications spanning 
                multiple years across different geographical locations.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Specialized in developing CAR files for complex business cases, implementing 
                OAuth2.0 and JWT security protocols, and managing cloud infrastructure on AWS. 
                Previously worked in Riyadh, Saudi Arabia for 2 years, collaborating with 
                cross-functional teams including network, firewall, and VHS teams.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['WSO2 APIM', 'WSO2 MI', 'Java', 'OAuth2.0', 'JWT', 'PostgreSQL', 'Oracle', 'PSQL', 'AWS', 'ELK Stack', 'Maven', 'CI/CD', 'TLS/SSL', 'JMeter'].map((tech) => (
                  <span 
                    key={tech}
                    className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl w-full h-80">
              <div className="bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 w-full h-full flex items-center justify-center">
                <img
                  src={photo}
                  alt="Professional headshot"
                  className="w-full h-full object-cover rounded-lg" style={{ objectPosition: '50% 30%' }} 
                  />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{skill.title}</h4>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;