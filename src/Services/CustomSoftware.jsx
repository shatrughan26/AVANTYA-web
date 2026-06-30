import React from 'react';

const CustomSoftware = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="text-3xl font-bold tracking-tight text-white">Custom Enterprise Software</h3>
        <p className="text-zinc-400 font-light leading-relaxed">
          Enterprise-grade proprietary application stacks engineered specifically to adapt around unique tactical requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {["Software Consulting", "Mobile App Engineering", "Custom UX/UI Systems Design"].map((item, idx) => (
          <div key={idx} className="p-5 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-between h-32">
            <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400 text-xs font-bold">{idx+1}</div>
            <span className="text-sm font-medium text-white">{item}</span>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 flex items-center gap-4 text-xs text-zinc-300">
        <span className="bg-blue-500 text-black px-2 py-0.5 rounded font-bold uppercase font-mono scale-90">Core Focus</span>
        Robust System Integration routines resolving connection limitations with complex legacy systems.
      </div>
    </div>
  );
};

export default CustomSoftware;