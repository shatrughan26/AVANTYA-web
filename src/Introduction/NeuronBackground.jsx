import React, { useEffect, useRef } from 'react';

// Specialized Individual Capability Panel
const FeatureCard = ({ title, description, bgImageClass }) => {
  return (
    <div className="group relative flex flex-col justify-between h-[520px] rounded-[2rem] border border-white/10 bg-slate-950/40 p-8 overflow-hidden cursor-pointer transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(0,130,251,0.25)] backdrop-blur-md">
      
      {/* 1. IMAGE CONTAINER LAYER (Fill your asset class names or <img> elements here) */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
        <div className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 bg-cover bg-center ${bgImageClass}`} />
        {/* Dark overlay to match image contrast blending from your showcase mockup */}
        <div className="absolute inset-0 bg-slate-950/50 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40" />
      </div>

      {/* 2. INITIALIZED COMPACT SPOTLIGHT AURA SHIELD */}
      <div 
        className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[130%] h-[65%] rounded-full opacity-70 mix-blend-screen pointer-events-none z-10 transition-all duration-500 group-hover:opacity-95 group-hover:scale-105"
        style={{
          background: 'radial-gradient(circle, rgba(0,130,251,0.5) 0%, rgba(0,130,251,0.15) 50%, rgba(0,0,0,0) 75%)',
          filter: 'blur(35px)'
        }}
      />

      {/* 3. SHADOW ANCHOR ACCENT FOR TYPOGRAPHY */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10 pointer-events-none" />

      {/* Card Header Title Layout */}
      <div className="relative z-20">
        <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-md">
          {title}
        </h3>
      </div>

      {/* Card Footer Details Layout */}
      <div className="relative z-20 space-y-5">
        <p className="text-zinc-200 text-sm leading-relaxed font-normal drop-shadow-md">
          {description}
        </p>
        
        {/* Action Vector Indicator Icon */}
        <div className="flex justify-end">
          <div className="p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-400">
            <svg 
              className="w-5 h-5 text-white stroke-current fill-none transition-transform duration-300 transform group-hover:translate-x-1" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const NeuronBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      }
    };
    
    resizeCanvas();
    const resizeObserver = new ResizeObserver(() => resizeCanvas());
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    window.addEventListener('resize', resizeCanvas);

    // INCREASED DENSITY SYSTEM STRUCTURE (Fills out the entire master block framework smoothly)
    const numSomas = 18; 
    const branchesPerSoma = 5; 
    const maxAxonDistance = 200; 
    const neurons = [];

    for (let i = 0; i < numSomas; i++) {
      const soma = {
        x: Math.random() * (canvas.width || 800),
        y: Math.random() * (canvas.height || 600),
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2.5 + 2.5, 
        children: []
      };

      for (let j = 0; j < branchesPerSoma; j++) {
        soma.children.push({
          angle: (Math.PI * 2 / branchesPerSoma) * j + Math.random() * 0.4,
          offsetDist: Math.random() * 22 + 12,
          radius: Math.random() * 0.5 + 0.7,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulsePhase: Math.random() * Math.PI
        });
      }
      neurons.push(soma);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      neurons.forEach((soma) => {
        soma.x += soma.vx;
        soma.y += soma.vy;

        if (soma.x < 0 || soma.x > canvas.width) soma.vx *= -1;
        if (soma.y < 0 || soma.y > canvas.height) soma.vy *= -1;

        soma.children.forEach((dendrite) => {
          dendrite.pulsePhase += dendrite.pulseSpeed;
          const currentDist = dendrite.offsetDist + Math.sin(dendrite.pulsePhase) * 2;
          const dX = soma.x + Math.cos(dendrite.angle) * currentDist;
          const dY = soma.y + Math.sin(dendrite.angle) * currentDist;

          ctx.beginPath();
          ctx.moveTo(soma.x, soma.y);
          ctx.lineTo(dX, dY);
          ctx.strokeStyle = 'rgba(0, 130, 251, 0.1)';
          ctx.lineWidth = 0.6;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(dX, dY, dendrite.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 130, 251, 0.25)';
          ctx.fill();
        });

        ctx.beginPath();
        ctx.arc(soma.x, soma.y, soma.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 130, 251, 0.85)';
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(0, 130, 251, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxAxonDistance) {
            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            ctx.lineTo(neurons[j].x, neurons[j].y);
            const alpha = (1 - distance / maxAxonDistance) * 0.25;
            ctx.strokeStyle = `rgba(0, 130, 251, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Structural details mapped from mock layouts
  const capabilities = [
    {
      title: "AI Solutions",
      description: "We build secure, scalable enterprise solutions using agentic AI with human intelligence.",
      bgImageClass: "bg-blue-950/20" // Replace this with custom Tailwind background image values if desired (e.g. bg-[url('/path-to-img.jpg')])
    },
    {
      title: "Digital Transformation",
      description: "We Power Digital Transformation.",
      bgImageClass: "bg-indigo-950/20"
    },
    {
      title: "Telco Products",
      description: "Next-Gen Network Products and Test & Measurement Tools.",
      bgImageClass: "bg-slate-900/20"
    }
  ];

  return (
    // Master Outer Box Wrapper Structure — includes the opaque frosted-glass system
    <div 
      ref={containerRef}
      className="relative w-full rounded-[3rem] border border-white/10 bg-slate-950/20 backdrop-blur-md overflow-hidden min-h-[650px] flex items-center shadow-2xl"
    >
      {/* Deep Master Neural Map running edge-to-edge behind the layout stream */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full mix-blend-screen opacity-50 pointer-events-none z-0"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Core Descriptive Context (Left Side Block) */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-sm">
              What We Do?
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
              We are a full-stack engineering partner delivering intelligent products, platforms and AI-led solutions.
            </p>
          </div>

          {/* Opaque Capability Card System Array (Right Side Block Grid Layout) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <FeatureCard
                key={index}
                title={item.title}
                description={item.description}
                bgImageClass={item.bgImageClass}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default NeuronBackground;