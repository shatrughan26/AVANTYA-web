import React, { useEffect, useRef, useState } from 'react';
import SphereText from './SphereText';

export default function Sphere({ count = 2000 }) {
  const containerRef = useRef(null);
  const [points, setPoints] = useState([]);
  const rotationRef = useRef({ alpha: 0, beta: 0 });
  
  // Track separate X and Y dimensions for the sphere projection
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, radiusX: 0, radiusY: 0 });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      let radiusFactorX;
      let radiusFactorY;

      if (w < 640) {
        // Mobile: Stretch vertically (Factor Y > Factor X) so it fills long smartphone screens completely
        radiusFactorX = 1.65; 
        radiusFactorY = 2.4; 
      } else if (w < 1024) {
        // Tablet
        radiusFactorX = 1.15;
        radiusFactorY = 1.15;
      } else {
        // Desktop: Keep it a perfect uniform sphere
        radiusFactorX = 1.35;
        radiusFactorY = 1.35;
      }

      setDimensions({ 
        width: w, 
        height: h, 
        radiusX: w * radiusFactorX, 
        radiusY: w * radiusFactorY 
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate the dense array of points using Fibonacci distribution
  useEffect(() => {
    const p = [];
    const phi = Math.PI * (3 - Math.sqrt(5));

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
      rotationRef.current.alpha += 0.0006;
      rotationRef.current.beta += 0.0003;

      setPoints((prevPoints) => [...prevPoints]);
      animationFrameId = requestAnimationFrame(updateRotation);
    };

    animationFrameId = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const { radiusX, radiusY } = dimensions;

  return (
    <div className="relative flex items-center justify-center h-screen w-full bg-black overflow-hidden z-0">

      {/* Large Floating Typography Layer */}
      <SphereText />

      {/* Screen-filling Cosmic Sphere Layer */}
      {/* Centered on screen, letting the vertical stretching overflow the top and bottom safely */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="relative flex-shrink-0"
          style={{ width: radiusX * 2, height: radiusY * 2 }}
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

            // FIX: Map projections cleanly to independent X and Y radii scaling matrices
            const screenX = x2 * radiusX + radiusX;
            const screenY = y1 * radiusY + radiusY;

            // Dynamic depth values
            const depth = (z2 + 1) / 2;
            const scale = 0.25 + depth * 0.75;
            const opacity = 0.02 + depth * 0.98;

            return (
              <div
                key={index}
                className="absolute bg-white rounded-full transition-transform duration-75 ease-out"
                style={{
                  left: `${screenX}px`,
                  top: `${screenY}px`,
                  width: `${4.5 * scale}px`,
                  height: `${4.5 * scale}px`,
                  opacity: opacity,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: depth > 0.88 ? '0 0 8px rgba(255, 255, 255, 0.6)' : 'none'
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}