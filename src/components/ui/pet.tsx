import { useState, useEffect, useRef } from 'react';
import petImage from '../Public/dancing-ditto-ditto.gif'; // add a cute GIF or PNG

const VirtualPet = () => {
    const [x, setX] = useState(100);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const [isJumping, setIsJumping] = useState(false);
    const speed = 0.7; // pixels per frame for smoothness
    const requestRef = useRef<number | null>(null);
  
    // Randomly change direction every few seconds
    useEffect(() => {
      const flipInterval = setInterval(() => {
        const shouldFlip = Math.random() < 0.3;
        if (shouldFlip) {
          setDirection(prev => (prev === 'left' ? 'right' : 'left'));
        }
      }, 3000);
  
      return () => clearInterval(flipInterval);
    }, []);
  
    // Smooth movement using requestAnimationFrame
    useEffect(() => {
      const animate = () => {
        setX(prev => {
          const maxX = window.innerWidth - 80;
          const nextX = direction === 'left' ? prev + speed : prev - speed;
          return Math.max(0, Math.min(maxX, nextX));
        });
  
        requestRef.current = requestAnimationFrame(animate);
      };
  
      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      };
    }, [direction]);
  
    const handleClick = () => {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 400);
    };
  
    return (
      <div
        onClick={handleClick}
        className={`fixed bottom-0 z-50 transition-transform duration-200 cursor-pointer ${
          isJumping ? 'animate-bounce' : ''
        }`}
        style={{ left: `${x}px` }}
      >
        <img
          src={petImage}
          alt="Pet"
          className={`w-16 h-16 ${direction === 'left' ? 'scale-x-[-1]' : ''}`}
        />
      </div>
    );
  };
  
  export default VirtualPet;