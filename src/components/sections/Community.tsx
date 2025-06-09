import React from 'react';
import { Github, Disc as Discord, Youtube, Instagram, X, Linkedin } from 'lucide-react';

const Community: React.FC = () => {
  const socialLinks = [
    { icon: <Discord className="h-8 w-8" />, name: 'Discord', url: '#', color: 'bg-[#5865F2]' },
    { icon: <Instagram className="h-8 w-8" />, name: 'Instagram', url: 'https://www.instagram.com/apubcc/', color: 'bg-[#ec4899]' },
    { icon: <X className="h-8 w-8" />, name: 'Twitter / X', url: 'https://x.com/apubcc', color: 'bg-black' },
    { icon: <Github className="h-8 w-8" />, name: 'GitHub', url: 'https://github.com/apubcc', color: 'bg-[#333333]' },
    { icon: <Youtube className="h-8 w-8" />, name: 'YouTube', url: 'https://www.youtube.com/channel/UC0WUwwcvh_A7to7YwoK-mrw', color: 'bg-[#FF0000]' },
    { icon: <Linkedin className="h-8 w-8" />, name: 'Linkedin', url: 'https://www.linkedin.com/company/apu-blockchain-crypto-club-apu-bcc/', color: 'bg-[#38bdf8]' }
  
  ];

  return (
    <section id="community" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-nebula-purple/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-crystal-blue/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title">Join Our Community</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-300 text-center">
            Connect with fellow hackers, stay updated on event news, and continue 
            your cosmic journey with the DEVMATCH community year-round.
          </p>
        </div>
        
        <div className=" md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          
          {/* Social links */}
          <div className="gem-card p-8">
            <h3 className="text-2xl font-orbitron font-bold mb-4">Follow Us</h3>
            <p className="text-gray-300 mb-6">
              Join our growing community on social media platforms for discussions, 
              resources, and to showcase your projects.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className={`flex items-center p-4 rounded-lg ${link.color} bg-opacity-10 hover:bg-opacity-20 transition-all duration-300`}
                >
                  <div className="mr-3 text-white">
                    {link.icon}
                  </div>
                  <span className="font-orbitron font-medium text-white">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Community highlights */}
        <div className="mt-20 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-orbitron font-bold mb-6">Why Join Our Community</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="gem-card p-6">
              <h4 className="text-xl font-orbitron font-bold mb-3">Stay Connected</h4>
              <p className="text-gray-300">
                Network with like-minded developers and innovators year-round.
              </p>
            </div>
            
            <div className="gem-card p-6">
              <h4 className="text-xl font-orbitron font-bold mb-3">Learning Resources</h4>
              <p className="text-gray-300">
                Access exclusive tutorials, workshops, and tech talks.
              </p>
            </div>
            
            <div className="gem-card p-6">
              <h4 className="text-xl font-orbitron font-bold mb-3">Job Opportunities</h4>
              <p className="text-gray-300">
                Discover career openings from our sponsor companies.
              </p>
            </div>
            
            <div className="gem-card p-6">
              <h4 className="text-xl font-orbitron font-bold mb-3">Future Events</h4>
              <p className="text-gray-300">
                Get early access to upcoming event.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center relative z-20">
          <h3 className="text-3xl font-orbitron font-bold mb-6 crystal-text">
            Ready to Launch?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable journey of innovation, collaboration, and cosmic discovery.
          </p>
          <a href="https://devmatch-hackathon.devfolio.co/" className="btn-primary text-lg px-10 py-4 inline-block">
            Register for DEVMATCH
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;   