import React from 'react';
import { Trophy, Award, Diamond, Medal } from 'lucide-react';

const Prizes: React.FC = () => {
  const mainPrizes = [
    {
      icon: <Trophy className="h-16 w-16 text-star-yellow" />,
      title: 'Grand Prize',
      value: '$10,000',
      description: 'For the most innovative overall project'
    },
    {
      icon: <Award className="h-16 w-16 text-crystal-blue-light" />,
      title: 'Runner Up',
      value: '$5,000',
      description: 'For exceptional innovation and execution'
    },
    {
      icon: <Diamond className="h-16 w-16 text-nebula-purple-light" />,
      title: 'Third Place',
      value: '$2,500',
      description: 'For outstanding project implementation'
    }
  ];

  const specialAwards = [
    {
      icon: <Medal className="h-8 w-8 text-crystal-blue" />,
      title: 'Best UI/UX Design',
      value: '$1,500',
    },
    {
      icon: <Medal className="h-8 w-8 text-crystal-blue" />,
      title: 'Most Technical Challenge',
      value: '$1,500',
    },
    {
      icon: <Medal className="h-8 w-8 text-crystal-blue" />,
      title: 'Best Beginner Team',
      value: '$1,000',
    },
    {
      icon: <Medal className="h-8 w-8 text-crystal-blue" />,
      title: 'Community Choice',
      value: '$1,000',
    },
    {
      icon: <Medal className="h-8 w-8 text-crystal-blue" />,
      title: 'Best Solo Hack',
      value: '$1,000',
    },
    {
      icon: <Medal className="h-8 w-8 text-crystal-blue" />,
      title: 'Social Impact Award',
      value: '$1,500',
    }
  ];

  return (
    <section id="prizes" className="section-container relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-nebula-purple/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-crystal-blue/20 blur-3xl"></div>
      
      <h2 className="section-title">Prizes & Rewards</h2>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-gray-300 text-center">
          Compete for out-of-this-world prizes and recognition. Your innovative solutions 
          could win you cash prizes, tech gadgets, and career-changing opportunities.
        </p>
      </div>
      
      {/* Main prizes */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {mainPrizes.map((prize, index) => (
          <div 
            key={index} 
            className="gem-card p-8 text-center relative overflow-hidden group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {prize.icon}
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4">{prize.title}</h3>
              <p className="text-4xl font-orbitron font-black mb-4 crystal-text">
                {prize.value}
              </p>
              <p className="text-gray-300">{prize.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Special awards */}
      <h3 className="text-2xl font-orbitron font-bold mb-8 text-center">Special Awards</h3>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialAwards.map((award, index) => (
          <div key={index} className="gem-card p-6 flex items-center">
            <div className="mr-4">
              {award.icon}
            </div>
            <div>
              <h4 className="text-lg font-orbitron font-medium">{award.title}</h4>
              <p className="text-crystal-blue font-orbitron">{award.value}</p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Prizes;