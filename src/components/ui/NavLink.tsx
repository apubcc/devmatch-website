import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="font-orbitron font-medium text-white hover:text-crystal-blue relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-crystal-blue transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

export default NavLink;