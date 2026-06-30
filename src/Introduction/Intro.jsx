import React from 'react';
import NeuronBackground from './NeuronBackground'; 

// Assets
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';

// FeatureCard component utilizing image variables directly
const FeatureCard = ({ title, description, bgImg }) => {
  return (
    <div className="group relative flex flex-col justify-between h-[600px] rounded-[2rem] border border-white/10 bg-slate-950/40 p-8 overflow-hidden cursor-pointer transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(0,130,251,0.25)] backdrop-blur-md">
      
      {/* 1. LOCAL IMAGE LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
        <img 
          src={bgImg} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Dark mask overlay to maintain clean text contrast */}
        <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40" />
      </div>

      {/* 2. GLOWING COMPACT SPOTLIGHT AURA */}
      <div 
        className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[130%] h-[65%] rounded-full opacity-70 mix-blend-screen pointer-events-none z-10 transition-all duration-500 group-hover:opacity-95 group-hover:scale-105"
        style={{
          background: 'radial-gradient(circle, rgba(0,130,251,0.4) 0%, rgba(0,130,251,0.1) 50%, rgba(0,0,0,0) 75%)',
          filter: 'blur(35px)'
        }}
      />

      {/* 3. SHADOW ACCENT FOR TYPOGRAPHY */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 pointer-events-none" />

      {/* Card Header Title */}
      <div className="relative z-20 text-left">
        <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-md">
          {title}
        </h3>
      </div>

      {/* Card Footer Details */}
      <div className="relative z-20 space-y-5 text-left">
        <p className="text-zinc-200 text-sm leading-relaxed font-normal drop-shadow-md">
          {description}
        </p>
        
        {/* Action Vector Indicator Icon */}
        <div className="flex justify-end">
          <div className="p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-400">
            <svg 
              className="w-5 h-5 text-white stroke-current fill-none transition-transform duration-300 transform group-hover:translate-x-1" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Intro = () => {
  const capabilities = [
    {
      title: "AI Solutions",
      description: "Agentic AI with human intelligence",
      bgImg: image1
    },
    {
      title: "Digital Transformation",
      description: "We Power Digital Transformation",
      bgImg: image2
    },
    {
      title: "Telco Products",
      description: "Next-Gen Network Products and Test & Measurement Tools",
      bgImg: image3
    }
  ];

  return (
    <div className="w-full max-w-8xl mx-auto my-12 px-4 md:px-8">
      <NeuronBackground>
        <div className="w-full max-w-7xl mx-auto px-6 py-20 md:px-12 relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Side Content Block */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-sm">
                What We Do?
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                We are a full-stack engineering partner delivering intelligent products, platforms and AI-led solutions.
              </p>
            </div>

            {/* Right Side Capability Cards with Text Overlaid Over Images */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {capabilities.map((item, index) => (
                <FeatureCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  bgImg={item.bgImg}
                />
              ))}
            </div>

          </div>
        </div>
      </NeuronBackground>
    </div>
  );
};

export default Intro;