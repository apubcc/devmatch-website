import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

interface Judge {
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const Judges: React.FC = () => {
  const judges: Judge[] = [
    /*{
      name: 'Judge TBC',
      role: 'Role TBC',
      company: 'Company TBC',
      image: '', // Optional: add a placeholder image
      bio: 'Judge information will be announced soon.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Judge TBC',
      role: 'Role TBC',
      company: 'Company TBC',
      image: '',
      bio: 'Judge information will be announced soon.',
      social: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Judge TBC',
      role: 'Role TBC',
      company: 'Company TBC',
      image: '',
      bio: 'Judge information will be announced soon.',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Judge TBC',
      role: 'Role TBC',
      company: 'Company TBC',
      image: '',
      bio: 'Judge information will be announced soon.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    }*/
  ];

  const mentors: Judge[] = [
    /*{
      name: 'Mentor TBC',
      role: 'Role TBC',
      company: 'Company TBC',
      image: '',
      bio: 'Mentor information will be announced soon.',
      social: {
        github: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Mentor TBC',
      role: 'Role TBC',
      company: 'Company TBC',
      image: '',
      bio: 'Mentor information will be announced soon.',
      social: {
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Mentor TBC',
      role: 'Role TBC',
      company: 'Company TBC',
      image: '',
      bio: 'Mentor information will be announced soon.',
      social: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Mentor TBC',
      role: 'Role TBC',
      company: 'Company TBC',
      image: '',
      bio: 'Mentor information will be announced soon.',
      social: {
        github: '#',
        linkedin: '#'
      }
    } */
  ];


  const renderPersonCard = (person: Judge, index: number) => (
    <div 
      key={index} 
      className="gem-card p-6 overflow-hidden group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-crystal-blue/30">
          <img 
            src={person.image || '/images/avatar-placeholder.png'} 
            alt={person.name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <div>
          <h3 className="text-xl font-orbitron font-bold">{person.name}</h3>
          <p className="text-crystal-blue mb-1">{person.role}</p>
          <p className="text-gray-400 text-sm mb-3">{person.company}</p>
          <p className="text-gray-300 text-sm mb-4">{person.bio}</p>
          
          <div className="flex space-x-3">
            {person.social.twitter && (
              <a href={person.social.twitter} className="text-gray-400 hover:text-crystal-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {person.social.linkedin && (
              <a href={person.social.linkedin} className="text-gray-400 hover:text-crystal-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {person.social.github && (
              <a href={person.social.github} className="text-gray-400 hover:text-crystal-blue transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="judges" className="section-container">
      <h2 className="section-title">Judges & Mentors</h2>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-gray-300 text-center">
          Meet our panel of industry experts who will evaluate submissions 
          and provide mentorship throughout the hackathon.
        </p>
      </div>

      {/* Judges */}
      <h3 className="text-2xl font-orbitron font-bold mb-8 text-center">
        Judges
      </h3>
      {judges.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {judges.map((judge, index) => renderPersonCard(judge, index))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg mb-16">Judges will be announced soon. Stay tuned!</p>
      )}

      {/* Mentors */}
      <h3 className="text-2xl font-orbitron font-bold mb-8 text-center">
        Mentors
      </h3>
      {mentors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mentors.map((mentor, index) => renderPersonCard(mentor, index))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg">Mentors will be announced soon. Stay tuned!</p>
      )}
    </section>
  );
};

export default Judges;