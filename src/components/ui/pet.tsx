import { useState, useEffect, useRef } from 'react';
import petImage from '../Public/dancing-ditto-ditto.gif'; // add a cute GIF or PNG


const VirtualPet = () => {
    const [x, setX] = useState(100);
    const [y, setY] = useState(window.innerHeight - 80);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const [isDragging, setIsDragging] = useState(false);
    const [isFalling, setIsFalling] = useState(false);
  
    const offset = useRef({ x: 0, y: 0 });
    const gravityRef = useRef<number | null>(null);
  
    // Gravity drop when not dragging
    useEffect(() => {
      if (isDragging) return;
  
      const groundY = window.innerHeight - 80;
      const fall = () => {
        setY(prevY => {
          if (prevY >= groundY) {
            cancelAnimationFrame(gravityRef.current!);
            setIsFalling(false);
            return groundY;
          }
          setIsFalling(true);
          return prevY + 10;
        });
        gravityRef.current = requestAnimationFrame(fall);
      };
  
      gravityRef.current = requestAnimationFrame(fall);
  
      return () => {
        if (gravityRef.current) cancelAnimationFrame(gravityRef.current);
      };
    }, [isDragging]);
  
    // Walk if not dragging
    useEffect(() => {
      if (isDragging || isFalling) return;
  
      const flipInterval = setInterval(() => {
        if (Math.random() < 0.3) {
          setDirection(prev => (prev === 'left' ? 'right' : 'left'));
        }
      }, 3000);
  
      const walk = () => {
        setX(prev => {
          const speed = 0.7;
          const maxX = window.innerWidth - 80;
          const next = direction === 'right' ? prev + speed : prev - speed;
          return Math.max(0, Math.min(maxX, next));
        });
      };
  
      const walkInterval = setInterval(walk, 16);
      return () => {
        clearInterval(flipInterval);
        clearInterval(walkInterval);
      };
    }, [direction, isDragging, isFalling]);
  
    const handleMouseDown = (e: React.MouseEvent) => {
      setIsDragging(true);
      offset.current = {
        x: e.clientX - x,
        y: e.clientY - y,
      };
    };
  
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setX(e.clientX - offset.current.x);
        setY(e.clientY - offset.current.y);
      }
    };
  
    const handleMouseUp = () => {
      setIsDragging(false); // triggers gravity
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging]);
  
    return (
      <div
        onMouseDown={handleMouseDown}
        className={`fixed z-50 transition-transform duration-100 cursor-grab active:cursor-grabbing`}
        style={{
          left: `${x}px`,
          top: `${y}px`,
        }}
      >
        <img
          src={petImage}
          alt="Pet"
          className={`w-16 h-20 transition-transform duration-300 ${
            direction === 'left' ? 'scale-x-[-1]' : ''
          }`}
        />
      </div>
    );
  };
  
  export default VirtualPet;