import React from 'react';

const Telecom = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="text-3xl font-bold tracking-tight text-white">Telecom Product Infrastructure</h3>
        <p className="text-zinc-400 font-light leading-relaxed">
          Next-generation telecom radio and core product implementations, open-source compliance layers, and full managed services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] space-y-1">
          <span className="text-white text-sm font-semibold block">Custom Product Architecture</span>
          <p className="text-zinc-500 text-xs font-light">Custom Product App Development scaling over massive concurrent network nodes.</p>
        </div>
        <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] space-y-1">
          <span className="text-blue-400 text-sm font-semibold block">rApp / xApp Engineering</span>
          <p className="text-zinc-500 text-xs font-light">Open RAN RIC intelligent controllers optimizing near-real-time operations.</p>
        </div>
        <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] space-y-1">
          <span className="text-white text-sm font-semibold block">Application Core Systems</span>
          <p className="text-zinc-500 text-xs font-light">Complex cross-carrier platform and application system integrations.</p>
        </div>
        <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] space-y-1">
          <span className="text-white text-sm font-semibold block">ODC Deployment Models</span>
          <p className="text-zinc-500 text-xs font-light">Offshore Development Centers configured with strict physical-cyber isolations.</p>
        </div>
      </div>
    </div>
  );
};

export default Telecom;