import React from 'react';
import { Github, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-space-blue/80 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              
              <span className="font-orbitron font-bold text-2xl">
              DEV<span className="text-blue-600">Match</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              DEVMatch brings together the brightest minds in tech for a cosmic journey of innovation.
              Join us as we hack the future!
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/apubcc" className="text-gray-400 hover:text-crystal-blue transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://x.com/apubcc" className="text-gray-400 hover:text-crystal-blue transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/apubcc/" className="text-gray-400 hover:text-crystal-blue transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/apu-blockchain-crypto-club-apu-bcc/" className="text-gray-400 hover:text-crystal-blue transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-orbitron font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-crystal-blue transition-colors">About</a></li>
              <li><a href="#tracks" className="text-gray-300 hover:text-crystal-blue transition-colors">Tracks</a></li>
              <li><a href="#prizes" className="text-gray-300 hover:text-crystal-blue transition-colors">Prizes</a></li>
              <li><a href="#sponsors" className="text-gray-300 hover:text-crystal-blue transition-colors">Sponsors</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-crystal-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-orbitron font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">info@apubcc.org</li>
              <li className="text-gray-300">+60 123 </li>
              <li className="text-gray-300">Jalan Teknologi 5, Taman Teknologi Malaysia, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} DEVMatch. All rights reserved. Made with <Heart className="inline-block w-4 h-4 text-glowing-pink" /> for the dev community.
          </p>
        </div>
      </div>
      
      {/* Decorative crystal shapes */}
      <div className="absolute -bottom-8 -left-20 w-40 h-40 bg-crystal-blue/10 rotate-45 blur-xl"></div>
      <div className="absolute -top-8 -right-20 w-40 h-40 bg-nebula-purple/10 rotate-12 blur-xl"></div>
    </footer>
  );
};

export default Footer;