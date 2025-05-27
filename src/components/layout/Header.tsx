import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from '../ui/NavLink';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-space-dark/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            
            <span className="font-orbitron font-bold text-2xl">
              DEV<span className="text-blue-600">Match</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <a href="https://devmatch-hackathon.devfolio.co/" target="_blank" className="hidden md:block btn-primary">
            Register Now
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-space-blue/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-4">
            {navLinks.map(link => (
              <div key={link.name} className="block py-2">
                <a 
                  href={link.href} 
                  className="font-orbitron text-lg hover:text-crystal-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </div>
            ))}
            <div className="pt-2">
              <a 
                href="#register" 
                className="block w-full text-center btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;