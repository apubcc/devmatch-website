import React, { useState } from 'react';
import { Database, Brain, Rocket, Wrench } from 'lucide-react';

interface Track {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  challenges: string[];
  technologies: string[];
}

const Tracks: React.FC = () => {
  const tracks: Track[] = [
    {
      id: 'web3',
      icon: <Database className="h-10 w-10 text-crystal-blue" />,
      title: 'Web3 & Blockchain',
      description: 'Explore the decentralized frontier with blockchain technology and Web3 innovations.',
      challenges: [
        'Create a decentralized application (dApp) that solves a real-world problem',
        'Build a blockchain-based solution for supply chain transparency',
        'Develop an innovative NFT project with practical utility'
      ],
      technologies: ['Ethereum', 'Solidity', 'IPFS', 'Smart Contracts', 'Web3.js']
    },
    {
      id: 'ai',
      icon: <Brain className="h-10 w-10 text-crystal-blue" />,
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to create intelligent solutions.',
      challenges: [
        'Build an AI model that can generate space-themed art based on text prompts',
        'Create a machine learning solution that helps predict environmental changes',
        'Develop an AI assistant that helps developers write better code'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'GPT', 'Computer Vision', 'NLP']
    },
    {
      id: 'space',
      icon: <Rocket className="h-10 w-10 text-crystal-blue" />,
      title: 'Space Technology',
      description: 'Push the boundaries of what\'s possible with space-focused technological innovations.',
      challenges: [
        'Create a visualization tool for space data from NASA APIs',
        'Build a solution that addresses challenges in space exploration',
        'Develop an educational platform about our solar system using AR/VR'
      ],
      technologies: ['NASA APIs', 'Satellite Data', 'AR/VR', 'IoT', 'Data Visualization']
    },
    {
      id: 'tools',
      icon: <Wrench className="h-10 w-10 text-crystal-blue" />,
      title: 'Developer Tools',
      description: 'Craft innovative tools and solutions that empower the developer community.',
      challenges: [
        'Build a productivity tool for software developers',
        'Create an innovative code editor extension',
        'Develop a collaboration platform for remote development teams'
      ],
      technologies: ['VS Code Extensions', 'GitHub APIs', 'DevOps', 'CLI Tools', 'Automation']
    }
  ];

  const [activeTrack, setActiveTrack] = useState<string>(tracks[0].id);

  return (
    <section id="tracks" className="section-container">
      <h2 className="section-title">Hackathon Tracks</h2>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-gray-300 text-center">
          Choose your cosmic path from four innovative tracks. Each track offers unique challenges 
          designed to push the boundaries of technology and imagination.
        </p>
      </div>
      
      {/* Track selection */}
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
            {track.title}
          </button>
        ))}
      </div>
      
      {/* Active track details */}
      {tracks.map((track) => (
        <div 
          key={track.id}
          className={`gem-card p-8 transition-all duration-500 ${
            activeTrack === track.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 absolute -z-10'
          }`}
          style={{ display: activeTrack === track.id ? 'block' : 'none' }}
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-space-dark mr-4">
              {track.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold">{track.title}</h3>
          </div>
          
          <p className="text-gray-300 text-lg mb-8">
            {track.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-orbitron font-bold mb-4 text-white">Challenges</h4>
              <ul className="space-y-3">
                {track.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-crystal-blue mr-2">•</span>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-orbitron font-bold mb-4 text-white">Suggested Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {track.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-space-blue rounded-full text-sm text-gray-300 border border-crystal-blue/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Tracks;