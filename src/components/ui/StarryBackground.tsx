import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to fill the screen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create stars
    type Star = {
      x: number;
      y: number;
      size: number;
      speed: number;
      brightness: number;
      angle: number;
    };

    const stars: Star[] = [];
    const starCount = Math.floor(canvas.width * canvas.height / 2000);

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: 0.05 + Math.random() * 0.05,
        brightness: 0.2 + Math.random() * 0.8,
        angle: Math.random() * Math.PI * 2
      });
    }

    // Animation
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        const brightness = star.brightness * (0.5 + Math.sin(Date.now() * star.speed * 0.001 + star.angle) * 0.5);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw nebula blobs
      drawNebula(ctx, canvas.width * 0.2, canvas.height * 0.3, 120, 'rgba(76, 201, 240, 0.03)');
      drawNebula(ctx, canvas.width * 0.8, canvas.height * 0.7, 150, 'rgba(157, 78, 221, 0.03)');
      drawNebula(ctx, canvas.width * 0.6, canvas.height * 0.2, 100, 'rgba(255, 45, 227, 0.02)');
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const drawNebula = (
      ctx: CanvasRenderingContext2D, 
      x: number, 
      y: number, 
      radius: number, 
      color: string
    ) => {
      const gradient = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default StarryBackground;