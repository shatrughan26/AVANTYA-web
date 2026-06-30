import React from 'react';
import NeuronBackground from './NeuronBackground'; 

const Intro = () => {
  return (
    // EXPANDED: Swapped max-w-5xl for max-w-7xl to widen the footprint across the page
    <div className="w-full max-w-8xl mx-auto my-12 px-4 md:px-8">
      {/* Dynamic layout container with integrated neuron canvas backdrop */}
      <NeuronBackground>
        {/* EXPANDED: Increased vertical padding (py-12) for enhanced breathing room */}
        <div className="flex flex-col items-center justify-center h-full text-center p-4 py-12">
          
          <h3 className="text-2xl font-semibold mb-8 tracking-wide uppercase text-zinc-200">
            Project Gallery & Image Showcase
          </h3>
          
          {/* EXPANDED: Swapped max-w-4xl for max-w-6xl to widen the grid element track */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-6xl relative z-30">
            
            {/* Image Card 1 */}
            {/* EXPANDED: Boosted height from h-44 to h-64 */}
            <div className="h-64 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center backdrop-blur-md hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300 shadow-xl group cursor-pointer">
              <span className="text-base text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200">
                Image Slot 1
              </span>
            </div>
            
            {/* Image Card 2 */}
            {/* EXPANDED: Boosted height from h-44 to h-64 */}
            <div className="h-64 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center backdrop-blur-md hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300 shadow-xl group cursor-pointer">
              <span className="text-base text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200">
                Image Slot 2
              </span>
            </div>
            
            {/* Image Card 3 */}
            {/* EXPANDED: Boosted height from h-44 to h-64 */}
            <div className="h-64 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center backdrop-blur-md hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300 shadow-xl group cursor-pointer">
              <span className="text-base text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200">
                Image Slot 3
              </span>
            </div>

          </div>
        </div>
      </NeuronBackground>
    </div>
  );
};

export default Intro;