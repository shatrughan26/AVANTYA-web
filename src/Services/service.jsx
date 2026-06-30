import React, { useState } from 'react';
import GCC from './GCC';
import CloudData from './CloudData';
import ProductEngineering from './ProductEngineering';
import GISSolutions from './GISSolutions';
import CustomSoftware from './CustomSoftware';
import Telecom from './Telecom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('GCC');

  const menuItems = [
    { id: 'GCC', label: 'GCC Setup', subtitle: 'Global Capability Centers' },
    { id: 'CloudData', label: 'Cloud & Data', subtitle: 'AI-Powered Architecture' },
    { id: 'ProductEngineering', label: 'Product Engineering', subtitle: 'Future-Ready Systems' },
    { id: 'GISSolutions', label: 'GIS Solutions', subtitle: 'Geospatial Intelligence' },
    { id: 'CustomSoftware', label: 'Custom Software', subtitle: 'Tailored Enterprise Apps' },
    { id: 'Telecom', label: 'Telecom Development', subtitle: 'Next-Gen Connectivity' },
  ];

  const renderActiveService = () => {
    switch (activeTab) {
      case 'GCC': return <GCC />;
      case 'CloudData': return <CloudData />;
      case 'ProductEngineering': return <ProductEngineering />;
      case 'GISSolutions': return <GISSolutions />;
      case 'CustomSoftware': return <CustomSoftware />;
      case 'Telecom': return <Telecom />;
      default: return <GCC />;
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      
      {/* Dynamic Blue Aura Glow Effect hitting the container background layer */}
      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-40 mix-blend-screen pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,130,251,0.6) 0%, rgba(0,130,251,0.2) 50%, rgba(0,0,0,0) 80%)',
          filter: 'blur(60px)'
        }}
      />

      {/* INNER GRID: Generous horizontal padding (px) and vertical padding (py) to keep content safe from outer container borders */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12">
        
        {/* LEFT COLUMN: FIXED NAVIGATION PANEL */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-2 mb-6">
            <span className="text-xs md:text-sm font-semibold tracking-widest text-blue-500 uppercase">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Services</h2>
          </div>

          <div className="flex flex-col gap-3">
            {menuItems.map((item) => {
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  onMouseEnter={() => setActiveTab(item.id)}
                  className={`group w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? 'bg-slate-900/60 border-blue-500/40 shadow-[0_0_25px_rgba(0,130,251,0.1)]'
                      : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-500 transition-transform duration-300 ${isSelected ? 'scale-y-100' : 'scale-y-0'}`} />
                  
                  <h4 className={`text-base md:text-lg font-bold transition-colors duration-300 ${isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                    {item.label}
                  </h4>
                  <p className="text-zinc-500 text-xs mt-1 font-light tracking-wide">
                    {item.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: DYNAMIC CONTENT CANVAS SCREEN */}
        <div className="lg:col-span-8 border border-white/5 rounded-2xl md:rounded-[2rem] bg-white/[0.01] p-6 md:p-10 min-h-[450px] lg:min-h-[550px] relative overflow-hidden flex flex-col justify-center">
          <div key={activeTab} className="animate-[fadeInSlide_0.4s_ease-out] relative z-10">
            {renderActiveService()}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;