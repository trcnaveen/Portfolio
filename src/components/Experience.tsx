import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior WSO2 Developer L3',
      company: 'Current Organization',
      location: 'India',
      period: 'Feb 2025 - Present',
      description: 'Leading WSO2 development initiatives for insurance and regulatory applications. Developing CAR files for complex business cases, implementing OAuth2.0 and JWT security protocols. Working with cloud infrastructure and enterprise integration solutions.',
      achievements: [
        'Developed enterprise integration solutions using WSO2 APIM and MI',
        'Implemented secure API management with OAuth2.0 and JWT tokens',
        'Optimized cloud infrastructure on AWS (S3, EC2, RDS) for regulatory compliance',
        'Working with ELK stack for monitoring and logging solutions'
      ]
    },
    {
      title: 'IT Analyst | Application Technology Analyst - Onsite',
      company: 'TATA Consultancy Services Pvt Ltd | Deutsche Bank AG',
      location: 'Riyadh, Saudi Arabia',
      period: 'Sep 2023 - Jan 2025',
      description: 'Advanced role in banking and financial application development using WSO2 EI. Led complex integration projects, payment applications, and regulatory systems. Collaborated extensively with network, firewall, and VHS teams.',
      achievements: [
        'Led development of secure payment processing systems with WSO2 EI',
        'Managed production support for Angular applications on JBoss/Tomcat/TomEE',
        'Implemented DR activities and NCP changes for critical banking systems',
        'Worked with Oracle Forms, TLS/SSL certificates, and firewall configurations'
      ]
    },
    {
      title: 'System Engineer | Application Analyst - Onsite',
      company: 'TATA Consultancy Services Pvt Ltd | Deutsche Bank AG',
      location: 'Riyadh, Saudi Arabia',
      period: 'Jul 2022 - Aug 2023',
      description: 'Onsite assignment focusing on banking applications and system integration. Developed expertise in WSO2 technologies, database management, and production support for financial applications.',
      achievements: [
        'Developed WSO2 integration solutions for banking applications',
        'Managed Oracle and PostgreSQL databases for financial systems',
        'Implemented automated deployment using IBM UrbanCode Deploy and Ansible',
        'Established monitoring with ITRS Geneos and Control-M for production systems'
      ]
    },
    {
      title: 'Assistant System Engineer',
      company: 'TATA Consultancy Services Pvt Ltd',
      location: 'Bengaluru, India',
      period: 'May 2021 - Jun 2022',
      description: 'Progressed to assistant engineer role, working on enterprise applications and gaining expertise in integration technologies. Focused on application development and system analysis.',
      achievements: [
        'Developed proficiency in enterprise integration patterns',
        'Worked on application support and maintenance activities',
        'Gained experience in DevOps tools including Maven, GitBash, and CI/CD',
        'Contributed to application modernization initiatives'
      ]
    },
    {
      title: 'Assistant System Engineer - Trainee',
      company: 'TATA Consultancy Services Pvt Ltd',
      location: 'Kochi, India',
      period: 'Aug 2020 - Apr 2021',
      description: 'Started career as a trainee, learning enterprise technologies and software development fundamentals. Completed comprehensive training in various technologies and development methodologies.',
      achievements: [
        'Completed intensive training in enterprise technologies',
        'Learned fundamentals of application development and system analysis',
        'Gained exposure to various programming languages and frameworks',
        'Participated in project assignments and skill development programs'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
            My professional journey in software development, from junior developer to senior full-stack engineer.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-blue-400 font-medium mb-2">{exp.company}</h4>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <h5 className="text-white font-medium">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-400 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;