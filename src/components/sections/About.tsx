import React from 'react';
import { Code, Users } from 'lucide-react';

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
    }
  ];

  return (
    <section id="about" className="section-container relative bg-gradient-to-t from-transparent to-space-dark pointer-events-none">
      {/* Background Logo */}
      <div className="absolute top-1/2 left-1/2 w-[1500px] aspect-square -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <img
          src="/public/Devmatch-logo.jpg"
          alt="DEVMatch Logo"
          className="w-full h-full object-cover rounded-full"
          style={{
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
            opacity: 0.2
          }}
        />
      </div>



      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-nebula-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-crystal-blue/5 rounded-full blur-3xl"></div>

      <h2 className="section-title">About The Hackathon</h2>

      <div className="max-w-4xl mx-auto mb-16 relative z-10">
        <p className="text-lg text-gray-300 text-center">
          DEVMatch is not just a hackathon, it's a cosmic journey into the future of technology. 
          For 168 exhilarating hours, developers, designers, and visionaries will collaborate to 
          create breakthrough solutions that address real-world challenges while exploring the 
          frontiers of innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
        <div className="gem-card p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-crystal-blue/10 rounded-full blur-2xl group-hover:bg-crystal-blue/20 transition-all duration-500"></div>
          <h3 className="text-2xl font-orbitron font-bold mb-4 relative z-10">Our Mission</h3>
          <p className="text-gray-300 relative z-10">
            To equip developers with the skills and knowledge to solve real-world blockchain challenges. 
            Through expert-led workshops, stellar mentorship, and team-based innovation, 
            participants will explore the power of Web3 and build impactful solutions. Join us to connect, create, 
            and push the boundaries of decentralized technology.
          </p>
        </div>

        <div className="gem-card p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-nebula-purple/10 rounded-full blur-2xl group-hover:bg-nebula-purple/20 transition-all duration-500"></div>
          <h3 className="text-2xl font-orbitron font-bold mb-4 relative z-10">The Experience</h3>
          <p className="text-gray-300 relative z-10">
            DEVMatch offers more than just coding challenges. Immerse yourself in a cosmos of 
            workshops, networking events, and learning opportunities. Our unique hackathon 
            environment is designed to inspire creativity and foster connections that last beyond the event.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto relative z-10">
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
