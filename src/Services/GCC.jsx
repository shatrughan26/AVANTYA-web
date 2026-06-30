import React from 'react';

const GCC = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="text-3xl font-bold tracking-tight text-white">Global Capability Centers (GCC)</h3>
        <p className="text-zinc-400 font-light leading-relaxed">
          Pre-trained teams. Co-built solutions. High-functioning captive centers operationalized in weeks.
        </p>
      </div>

      {/* Visual Metrics Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all duration-300">
          <span className="block text-4xl font-extrabold text-blue-400 tracking-tight mb-1">6-8 Wks</span>
          <h5 className="text-white font-semibold text-sm mb-1">Rapid Launch window</h5>
          <p className="text-zinc-500 text-xs font-light">Accelerated turn-up pipeline deployment matching enterprise standards.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all duration-300">
          <span className="block text-4xl font-extrabold text-blue-400 tracking-tight mb-1">30-40%</span>
          <h5 className="text-white font-semibold text-sm mb-1">Operational Reduction</h5>
          <p className="text-zinc-500 text-xs font-light">Substantial cost savings optimized via strategic asset balancing models.</p>
        </div>
      </div>

      {/* Feature Check Checkboxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3 text-zinc-300 text-sm">
          <div className="w-2 h-2 rounded-full bg-blue-500" /> Seamless Access to Global Talent Pool
        </div>
        <div className="flex items-center gap-3 text-zinc-300 text-sm">
          <div className="w-2 h-2 rounded-full bg-blue-500" /> Integrated AI-First Architecture Backbone
        </div>
      </div>
    </div>
  );
};

export default GCC;