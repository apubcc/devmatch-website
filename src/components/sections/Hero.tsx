import React from 'react';
import CountdownTimer from '../ui/CountdownTimer';


const Hero: React.FC = () => {
  // Set your hackathon date here
  const hackathonDate = new Date('2025-08-11T00:00:00');

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-b from-transparent to-space-dark ">
      {/* Animated shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-nebula-purple/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-crystal-blue/10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Crystal decorations */}
      <div className="absolute top-20 left-10 w-20 h-48 bg-crystal-gradient opacity-10 rotate-45 rounded-md animate-crystal-shine"></div>
      <div className="absolute bottom-20 right-10 w-20 h-48 bg-crystal-gradient opacity-10 -rotate-45 rounded-md animate-crystal-shine" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-orbitron font-black mb-4 tracking-wider">
          DEV<span className="text-blue-600">Match</span>
        </h1>
        
        <div className="relative inline-block mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-orbitron font-medium tracking-wide">
            <span className="text-blue-400">CODE TO THE STAR</span>
          </h2>
          <div className="absolute w-full h-0.5 bg-crystal-gradient bottom-0 left-0"></div>
        </div>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join the ultimate galactic hackathon where innovation meets the cosmos.
          Build, collaborate, and launch your ideas into the digital universe.
        </p>
        
        <div className="mb-12">
          <CountdownTimer targetDate={hackathonDate} />
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="relative group hidden md:block">
            <button
              className="btn-primary cursor-not-allowed opacity-60"
              disabled
            >
              Register Now
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 text-sm rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              Coming soon
            </div>
          </div>
          <a href="#about" className="btn-secondary">
            Learn More
          </a>
        </div>
        
        <div className="mt-14 flex items-center justify-center animate-bounce">
          <a href="#about" className="inline-block text-crystal-blue">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;