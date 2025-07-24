import React from 'react';

interface Judge {
  name: string;
  role: string;
  company: string;
  image: string;
  logo: string;
}

const judges: Judge[] = [
  {
    name: 'Glenn Tan',
    role: 'Director of Global Affairs',
    company: 'Blockchain for Good Alliance (BGA)',
    image: '/judges/Blockchain for Good Alliance (BGA)_Glenn Tan_Director of Global Affairs.png',
    logo: '/BGA-Logo.png',
  },
  {
    name: 'Josh Lee',
    role: 'Project Manager',
    company: 'Sui',
    image: '/judges/Sui_Josh Lee_Project Manager.jpeg',
    logo: '/sui-logo.webp',
  },
  {
    name: 'Daniel Lam',
    role: 'DevRel',
    company: 'Sui',
    image: '/judges/Sui_Daniel Lam_ DevRel.jpeg',
    logo: '/sui-logo.webp',
  },
  {
    name: 'Shiv Bhonde',
    role: 'Member',
    company: 'BuidlGuidl (EF)',
    image: '/judges/EF_Shiv Bhonde_Member of BuidlGuidl.jpg',
    logo: '/Eth-diamond.png',
  },
  {
    name: 'Jane Wai',
    role: 'Head of Community',
    company: 'Chat and Build',
    image: '/judges/ChatandBuild_Jane Wai_Head of Community.jpg',
    logo: '/CNB-Logomark-White.png',
  },
  {
    name: 'Chelsea Li',
    role: 'Head of Legal and Operations',
    company: 'Chat and Build',
    image: '/judges/ChatandBuild_Chelsea Li_ Head of Legal and Operations.jpg',
    logo: '/CNB-Logomark-White.png',
  },
  {
    name: 'Soh Zhe Hong',
    role: 'Technical Community Manager',
    company: 'The Graph',
    image: '/judges/The Graph_Soh Zhe Hong_Technical Community Manager.jpeg',
    logo: '/the-graph-grt-logo.png',
  },
  {
    name: 'Bern Cruz',
    role: 'Solutions Engineer',
    company: 'Oasis',
    image: '/judges/Oasis_Bern Cruz_Solutions Engineer.png',
    logo: '/oasis-logo.png',
  },
  {
    name: 'Robert Brienza',
    role: 'BD Specialist',
    company: 'Oasis',
    image: '/judges/Oasis_Robert Brienza_BD Specialist .jpg',
    logo: '/oasis-logo.png',
  }
];

const Judges: React.FC = () => {
  const renderPersonCard = (person: Judge, index: number) => (
    <div
      key={index}
      className="relative p-6 group rounded-xl border border-white/10 shadow-lg bg-[rgba(255,255,255,0.05)] backdrop-blur-md transition-all duration-300 hover:shadow-crystal-blue/30 overflow-hidden"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Faded logo background inside the box */}
      {person.logo && (
        <img
          src={person.logo}
          alt={`${person.company} logo`}
          className="absolute inset-0 w-full h-full object-contain opacity-5 scale-125 pointer-events-none z-0"
        />
      )}

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
        {/* Profile picture */}
        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-crystal-blue/30 shadow-md">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Text content */}
        <div>
          <h3 className="text-xl font-orbitron font-bold text-white">{person.name}</h3>
          <p className="text-crystal-blue mb-1">{person.role}</p>
          <span className="inline-block text-xs px-3 py-1 mt-1 bg-crystal-blue/10 text-crystal-blue rounded-full">
            {person.company}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="judges" className="section-container">
      <h2 className="section-title">Judges</h2>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-gray-300 text-center">
          Meet our panel of industry experts who will evaluate submissions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        {judges.map((judge, index) => renderPersonCard(judge, index))}
      </div>
    </section>
  );
};

export default Judges;
