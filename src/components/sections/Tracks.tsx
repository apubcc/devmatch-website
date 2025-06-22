import React, { useState } from 'react';
import { LinkIcon, Gift, HeartHandshake } from 'lucide-react';


interface Mission {
  title: string;
  description: string;
  prize: string;
}

interface Track {
  id: string;
  icon: React.ReactNode;
  sponsor: string;
  description: string;
  totalPrize: string;
  missions: Mission[];
  docLink: string;
  logo: string;
}

const Tracks: React.FC = () => {
  const tracks: Track[] = [
    {
      id: 'sui',
      icon: <HeartHandshake className="h-10 w-10 text-crystal-blue" />,
      sponsor: 'SUI',
      description:
        'Explore the capabilities of the Sui ecosystem by participating in one of three challenge tracks, each tailored to showcase unique components of Sui’s infrastructure and development tools. Participants can choose from moderate to advanced difficulty levels, with a focus on zkLogin integration,on-chain smart contract marketplaces, or privacy-preserving infrastructure.',
      totalPrize: '$4,000 USDC',
      missions: [
        {
          title: 'zkLogin Application (Moderate Difficulty)',
          description: 'Mission description will be announced soon.',
          prize: 'Prize TBA'
        },
        {
          title: ' On-chain Marketplace (Moderate Difficulty)',
          description: 'Mission description will be announced soon.',
          prize: 'Prize TBA'
        },
        {
          title: 'Password Manager using Walrus & Seal (Advanced Difficulty)',
          description: 'Mission description will be announced soon.',
          prize: 'Prize TBA'
        }
      ],
      docLink: 'https://suifoundation.notion.site/DEVMatch-Hackathon-2025-20337af41c6e80d4a3f9e76087f4f40c', // Replace with actual doc link if different
      logo: '/sui-logo.webp'
    },
    {
      id: 'bga',
      icon: <HeartHandshake className="h-10 w-10 text-crystal-blue" />,
      sponsor: 'BGA (Blockchain for Good)',
      description:
        'Blockchain for Good Alliance (BGA) champions the use of blockchain technology to create positive, real-world social and environmental impact',
      totalPrize: '$2,000 USDC',
      missions: [
        {
          title: 'TBA',
          description: 'Mission description will be announced soon.',
          prize: 'Prize TBA'
        }
      ],
      docLink: 'https://blockchainforgood.dev/docs', // Replace with actual doc link if different
      logo: '/BGA-Logo.png'
    },
    {
      id: 'the_graph',
      icon: <HeartHandshake className="h-10 w-10 text-crystal-blue" />,
      sponsor: 'The Graph',
      description:
        'The Graph (GRT) is a decentralized indexing and query protocol for blockchain data. It allows developers to easily access and retrieve information from blockchains like Ethereum, enabling the creation and use of decentralized applications (dApps)',
      totalPrize: '$2,000 USDC',
      missions: [
        {
          title: 'TBA',
          description: 'Mission description will be announced soon.',
          prize: 'Prize TBA'
        }
      ],
      docLink: 'https://blockchainforgood.dev/docs', // Replace with actual doc link if different
      logo: '/the-graph-grt-logo.png'
    }
  ];

  const [activeTrack, setActiveTrack] = useState<string>(tracks[0].id);

  return (
    <section id="tracks" className="section-container">
      <h2 className="section-title">Sponsor Track</h2>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-gray-300 text-center">
          This year’s challenge is brought to you by Blockchain for Good Alliance. Explore how blockchain can solve real-world problems and win exciting rewards.
        </p>
      </div>

      {/* Track Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tracks.map((track) => (
          <button
            key={track.id}
            className={`px-6 py-3 rounded-lg font-orbitron font-medium transition-all duration-300 
              ${activeTrack === track.id
                ? 'bg-crystal-gradient text-white shadow-lg shadow-crystal-blue/20'
                : 'bg-space-blue text-gray-300 hover:bg-space-light'}`}
            onClick={() => setActiveTrack(track.id)}
          >
            {track.sponsor}
          </button>
        ))}
      </div>

      {/* Active Track Info */}
      {tracks.map(
        (track) =>
          track.id === activeTrack && (
            <div
              key={track.id}
              className="gem-card p-8 transition-all duration-500 opacity-100 transform translate-y-0"
            >
              <div className="flex items-center mb-6 gap-4">
                <div className="p-2 rounded-full w-16 h-16 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img
                    src={track.logo}
                    alt={`${track.sponsor} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold">{track.sponsor}</h3>
              </div>

              <p className="text-gray-300 text-lg mb-6">{track.description}</p>

              <div className="mb-6">
                <h4 className="text-xl font-orbitron font-bold text-white flex items-center gap-2">
                  <Gift className="w-5 h-5" /> Total Prize Pool
                </h4>
                <p className="text-crystal-blue text-lg">{track.totalPrize}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-orbitron font-bold mb-4 text-white">Missions</h4>
                <ul className="space-y-4">
                  {track.missions.map((mission, index) => (
                    <li key={index} className="border-l-4 border-crystal-blue pl-4">
                      <p className="text-white font-bold">{mission.title}</p>
                      <p className="text-gray-300 text-sm">{mission.description}</p>
                      
                    </li>
                  ))}
                </ul>
              </div>

              {track.docLink !== '#' && (
                <div className="mt-6">
                  <a
                    href={track.docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-crystal-blue text-white rounded-lg hover:bg-crystal-blue/80 transition"
                  >
                    <LinkIcon className="w-4 h-4 mr-2" />
                    View Documentation
                  </a>
                </div>
              )}
            </div>
          )
      )}
    </section>
  );
};

export default Tracks;
