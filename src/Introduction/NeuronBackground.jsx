import React, { useEffect, useRef } from 'react';

const NeuronBackground = ({ children }) => {
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

    const numSomas = 22; 
    const branchesPerSoma = 5; 
    const maxAxonDistance = 220; 
    const neurons = [];

    for (let i = 0; i < numSomas; i++) {
      const soma = {
        x: Math.random() * (canvas.width || 800),
        y: Math.random() * (canvas.height || 600),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
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
          ctx.strokeStyle = 'rgba(0, 130, 251, 0.12)';
          ctx.lineWidth = 0.6;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(dX, dY, dendrite.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 130, 251, 0.3)';
          ctx.fill();
        });

        ctx.beginPath();
        ctx.arc(soma.x, soma.y, soma.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 130, 251, 0.85)';
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(0, 130, 251, 0.5)';
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
            const alpha = (1 - distance / maxAxonDistance) * 0.28;
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

  return (
    <div 
      ref={containerRef}
      className="relative w-full rounded-[3rem] border border-white/10 bg-slate-950/20 backdrop-blur-md overflow-hidden flex flex-col justify-center shadow-2xl"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full mix-blend-screen opacity-60 pointer-events-none z-0"
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default NeuronBackground;