import React from 'react';

const Sponsors: React.FC = () => {
  const sponsors = [
    { name: 'BGA (Blockchain for Good)', logo: '/BGA-Logo.png', width: 180 }
  ];

  return (
    <section id="sponsors" className="section-container bg-space-light/30">
      <h2 className="section-title">Sponsors & Partners</h2>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-gray-300 text-center">
          DEVMATCH is made possible by the generous support of our sponsors and partners
          who share our vision for fostering innovation and community in tech.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {sponsors.map((sponsor, index) => (
          <div 
            key={index} 
            className=" p-6 flex flex-col items-center justify-center group"
            style={{ width: sponsor.width + 60 + 'px', height: sponsor.width + 60 + 'px' }}
          >
            <div 
              className="w-full h-full flex items-center justify-center grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                width={sponsor.width} 
                height={sponsor.width} 
                className="object-contain"
              />
            </div>
            <h3 className="mt-3 text-white text-sm text-center">{sponsor.name}</h3>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-orbitron font-bold mb-6 text-center">
          Become a Sponsor
        </h3>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
          Join our cosmic community of sponsors and partners to showcase your brand
          to the brightest minds in tech while supporting the future of innovation.
        </p>

        <div className="flex justify-center">
          <a href="#sponsor-contact" className="btn-secondary">
            Sponsorship Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
