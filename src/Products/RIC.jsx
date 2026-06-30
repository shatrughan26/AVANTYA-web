import React from 'react';

const RIC = () => {
  return (
    /* INDIVIDUAL PEEK-A-BOO CARD: Starts at h-[240px] and expands to h-[400px] on hover */
    <div className="group relative flex flex-col justify-between h-[240px] hover:h-[400px] w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-950/40 p-8 overflow-hidden cursor-pointer transition-all duration-700 ease-in-out hover:border-orange-500/40 hover:shadow-[0_0_50px_rgba(249,115,22,0.2)] backdrop-blur-md">
      
      {/* Card Background Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
        <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 bg-cover bg-center bg-orange-950/20" />
        <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40" />
      </div>

      {/* Dynamic Aura Spot Radial Glow (Orange Theme) */}
      <div 
        className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[130%] h-[65%] rounded-full opacity-40 mix-blend-screen pointer-events-none z-10 transition-all duration-700 group-hover:opacity-80 group-hover:scale-110" 
        style={{ 
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.5) 0%, rgba(0,0,0,0) 70%)', 
          filter: 'blur(40px)' 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 pointer-events-none" />

      {/* ALWAYS VISIBLE HEADING */}
      <div className="relative z-20 flex justify-between items-start">
        <div>
          <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 mb-2 inline-block">
            Intelligent Controller
          </span>
          <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-md">
            RIC
          </h3>
        </div>
      </div>

      {/* REVEAL CONTENT: Smoothly rolls into view upon interaction */}
      <div className="relative z-20 mt-4 space-y-5">
        <p className="text-zinc-300 text-sm leading-relaxed font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">
          A RAN Intelligent Controller engineered to host near-RT and non-RT applications, enabling automated radio resource management and AI-driven policy control.
        </p>

        {/* Action Interactive Icon */}
        <div className="flex justify-end pt-2">
          <div className="p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:bg-orange-600 group-hover:border-orange-400">
            <svg className="w-5 h-5 text-white stroke-current fill-none transition-transform duration-300 transform group-hover:translate-x-1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RIC;