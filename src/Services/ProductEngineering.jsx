import React from 'react';

const ProductEngineering = () => {
  const stacks = [
    "Hardware Design & Development",
    "Embedded System Firmware Software",
    "Backend & IoT Core Application Architecture",
    "Physical Deep-Tech AI Edge Devices"
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="text-3xl font-bold tracking-tight text-white">Product Engineering</h3>
        <p className="text-zinc-400 font-light leading-relaxed">
          Build future-ready physical and virtual instruments with AI-driven hardware-software integrated design pipelines.
        </p>
      </div>

      <div className="space-y-3">
        {stacks.map((tech, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all">
            <span className="text-sm text-zinc-300 font-medium">{tech}</span>
            <span className="text-xs text-blue-400 uppercase tracking-wider font-mono">Verified Production</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductEngineering;