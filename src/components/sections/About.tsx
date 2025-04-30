import React from 'react';
import { Code, Rocket, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="h-10 w-10 text-crystal-blue" />,
      title: 'Innovative Challenges',
      description: 'Push the boundaries of what\'s possible with cutting-edge tech challenges designed to test your skills.'
    },
    {
      icon: <Users className="h-10 w-10 text-crystal-blue" />,
      title: 'Stellar Mentorship',
      description: 'Get guidance from industry experts who will help your ideas reach their full potential.'
    },
    {
      icon: <Rocket className="h-10 w-10 text-crystal-blue" />,
      title: 'Launch Your Career',
      description: 'Showcase your skills to top companies looking for talent in the tech universe.'
    },
    {
      icon: <Globe className="h-10 w-10 text-crystal-blue" />,
      title: 'Global Community',
      description: 'Connect with like-minded developers from across the galaxy and form lasting networks.'
    }
  ];

  return (
    <section id="about" className="section-container relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-nebula-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-crystal-blue/5 rounded-full blur-3xl"></div>
      
      <h2 className="section-title">About The Hackathon</h2>
      
      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-lg text-gray-300 text-center">
          DEVMATCH is not just a hackathon; it's a cosmic journey into the future of technology. 
          For 48 exhilarating hours, developers, designers, and visionaries will collaborate to 
          create breakthrough solutions that address real-world challenges while exploring the 
          frontiers of innovation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="gem-card p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-crystal-blue/10 rounded-full blur-2xl group-hover:bg-crystal-blue/20 transition-all duration-500"></div>
          
          <h3 className="text-2xl font-orbitron font-bold mb-4 relative z-10">Our Mission</h3>
          <p className="text-gray-300 relative z-10">
          to equip developers with the skills and knowledge to solve real-world blockchain challenges. 
          Through expert-led workshops, stellar mentorship, and team-based innovation, 
          participants will explore the power of Web3 and build impactful solutions. Join us to connect, create, 
          and push the boundaries of decentralized technology.
          </p>
        </div>
        
        <div className="gem-card p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-nebula-purple/10 rounded-full blur-2xl group-hover:bg-nebula-purple/20 transition-all duration-500"></div>
          
          <h3 className="text-2xl font-orbitron font-bold mb-4 relative z-10">The Experience</h3>
          <p className="text-gray-300 relative z-10">
            DEVMATCH offers more than just coding challenges. Immerse yourself in a cosmos of 
            workshops, networking events, and learning opportunities. Our unique hackathon 
            environment is designed to inspire creativity and foster connections that last beyond the event.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="gem-card p-6 flex flex-col items-center text-center"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="mb-4 p-3 rounded-full bg-space-light inline-block">
              {feature.icon}
            </div>
            <h3 className="text-xl font-orbitron font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;