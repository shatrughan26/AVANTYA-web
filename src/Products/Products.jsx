import React from 'react';
import AutoRAN from './AutoRAN'; 
import ORCA from './ORCA';       
import AutoWifi from './AutoWifi';
import Core5G_SA from './Core5G_SA'; 
import RIC from './RIC';

const Products = () => {
  return (
    /* OUTER PLATFORM WRAPPER: Perfectly synchronized layout constraint */
    <div className="w-full max-w-7xl mx-auto px-6 py-20 md:px-12 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* ONLY MASTER HEADER LEFT HERE - STAYS FIXED */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32 text-left">
          <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
            Our Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-sm">
            Core Products
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
            Explore our cutting-edge software suites, engineered to maximize speed, automated scaling, and stability across modern digital networks.
          </p>
        </div>

        {/* RIGHT COLUMN GRID: Displays clean, repeating cards without repetitive text */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <AutoRAN />
          <ORCA />
          <AutoWifi />
          <Core5G_SA />
          <RIC />
        </div>
        
      </div>
    </div>
  );
};

export default Products;