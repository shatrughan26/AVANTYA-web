import React, { useState } from 'react';

const AutoRAN = () => {
  // State to track if the card is clicked/tapped on mobile devices
  const [isTapped, setIsTapped] = useState(false);

  return (
    /* 1. Toggling 'isTapped' via onClick handles mobile touches.
      2. Appended conditional classes: if tapped on mobile, it expands the height and mimics the hover states.
    */
    <div 
      onClick={() => setIsTapped(!isTapped)}
      className={`group relative flex flex-col justify-between w-full rounded-[2rem] border p-6 sm:p-8 overflow-hidden cursor-pointer transition-all duration-700 ease-in-out backdrop-blur-md
        ${isTapped 
          ? 'h-[420px] border-blue-500/40 shadow-[0_0_50px_rgba(0,130,251,0.2)]' 
          : 'h-[220px] sm:h-[240px] border-white/10 bg-slate-950/40 hover:h-[400px] hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(0,130,251,0.2)]'
        }`}
    >
      
      {/* Background Masking Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
        <div className={`w-full h-full transition-transform duration-700 ease-out bg-cover bg-center bg-blue-950/20 group-hover:scale-105 ${isTapped ? 'scale-105' : ''}`} />
        <div className={`absolute inset-0 bg-slate-950/60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40 ${isTapped ? 'opacity-40' : ''}`} />
      </div>

      {/* Atmospheric Backglow Aura */}
      <div 
        className={`absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[130%] h-[65%] rounded-full mix-blend-screen pointer-events-none z-10 transition-all duration-700 group-hover:opacity-80 group-hover:scale-110 ${isTapped ? 'opacity-80 scale-110' : 'opacity-40'}`} 
        style={{ 
          background: 'radial-gradient(circle, rgba(0, 130, 251, 0.5) 0%, rgba(0,0,0,0) 70%)', 
          filter: 'blur(40px)' 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 pointer-events-none" />

      {/* Visible Frame Title Head */}
      <div className="relative z-20 flex justify-between items-start">
        <div>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 mb-2 inline-block">
            Flagship Suite
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide drop-shadow-md">
            AutoRAN
          </h3>
        </div>
      </div>

      {/* Reveal Description Block */}
      <div className="relative z-20 mt-2 sm:mt-4 space-y-3 sm:space-y-5 transition-all duration-500">
        {/* Controlled by both desktop group-hover and mobile isTapped state */}
        <p className={`text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal transition-opacity duration-500 drop-shadow-md
          ${isTapped 
            ? 'opacity-100 block animate-fadeIn' 
            : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'
          }`}
        >
          An automated, cloud-native Open RAN testing and deployment suite built for optimizing dense multi-vendor cellular configurations seamlessly.
        </p>

        <div className="flex justify-end pt-1 sm:pt-2">
          <div className={`p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-400 ${isTapped ? 'bg-blue-600 border-blue-400' : ''}`}>
            <svg className={`w-4 h-4 sm:w-5 sm:h-5 text-white stroke-current fill-none transition-transform duration-300 transform group-hover:translate-x-1 ${isTapped ? 'translate-x-1' : ''}`} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AutoRAN;