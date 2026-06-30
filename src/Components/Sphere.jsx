import React, { useEffect, useRef, useState } from 'react';
import SphereText from './SphereText';

// Set count directly to 650 for a dense, immersive matrix of stars
export default function Sphere({ count = 1000 }) {
  const containerRef = useRef(null);
  const [points, setPoints] = useState([]);
  const rotationRef = useRef({ alpha: 0, beta: 0 });

  // Responsive sizing state
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, radius: 0 });

  // Handle window resizing dynamically, with breakpoint-aware scaling
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      let radiusFactor;
      let baseDimension;

      if (w < 640) {
        // Mobile: use width as the base (avoids huge radius on tall narrow screens)
        // and a smaller factor so the sphere doesn't dominate/overflow vertically
        baseDimension = w;
        radiusFactor = 0.85;
      } else if (w < 1024) {
        // Tablet
        baseDimension = Math.max(w, h);
        radiusFactor = 0.55;
      } else {
        // Desktop
        baseDimension = Math.max(w, h);
        radiusFactor = 0.65;
      }

      const maxRadius = baseDimension * radiusFactor;

      setDimensions({ width: w, height: h, radius: maxRadius });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate the dense array of points using Fibonacci distribution
  useEffect(() => {
    const p = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      p.push({ x, y, z });
    }
    setPoints(p);
  }, [count]);

  // Smooth background rotation loop
  useEffect(() => {
    let animationFrameId;
    const updateRotation = () => {
      // Extremely slow, atmospheric rotation speeds
      rotationRef.current.alpha += 0.0006;
      rotationRef.current.beta += 0.0003;

      setPoints((prevPoints) => [...prevPoints]);
      animationFrameId = requestAnimationFrame(updateRotation);
    };

    animationFrameId = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const { radius } = dimensions;

  return (
    <div className="relative flex items-center justify-center h-[70vh] sm:h-[80vh] lg:h-screen w-full bg-black overflow-hidden z-0">

      {/* Large Floating Typography Layer */}
      <SphereText />

      {/* Screen-filling Cosmic Sphere Layer */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-45 mix-blend-screen"
      >
        <div
          className="relative flex-shrink-0"
          style={{ width: radius * 2, height: radius * 2 }}
        >
          {points.map((point, index) => {
            const { alpha, beta } = rotationRef.current;

            // 3D Matrix Rotations
            const cosB = Math.cos(beta);
            const sinB = Math.sin(beta);
            const y1 = point.y * cosB - point.z * sinB;
            const z1 = point.z * cosB + point.y * sinB;

            const cosA = Math.cos(alpha);
            const sinA = Math.sin(alpha);
            const x2 = point.x * cosA - z1 * sinA;
            const z2 = z1 * cosA + point.x * sinA;

            // Project 3D values onto flat 2D viewport coordinates
            const screenX = x2 * radius + radius;
            const screenY = y1 * radius + radius;

            // Dynamic depth values
            const depth = (z2 + 1) / 2;
            const scale = 0.25 + depth * 0.75;
            const opacity = 0.02 + depth * 0.98; // Far dots blend softly out of existence

            return (
              <div
                key={index}
                className="absolute bg-white rounded-full transition-transform duration-75 ease-out"
                style={{
                  left: `${screenX}px`,
                  top: `${screenY}px`,
                  // Keeps points looking sharp and non-blurry as they move
                  width: `${3.2 * scale}px`,
                  height: `${3.2 * scale}px`,
                  opacity: opacity,
                  transform: 'translate(-50%, -50%)',
                  // Soft neon core light glow applied only to closest stars
                  boxShadow: depth > 0.88 ? '0 0 6px rgba(255, 255, 255, 0.5)' : 'none'
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}