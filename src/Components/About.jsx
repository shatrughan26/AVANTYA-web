import React from 'react';

const About = () => {
  return (
    <section className="w-full bg-black py-20 px-4 md:px-8 font-sans text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500">// COMPANY MANIFESTO</span>
          <h2 className="text-4xl font-black tracking-tight mt-2 sm:text-5xl uppercase">
            Engineering the Future.
          </h2>
        </div>

        {/* Main Content Layout Split */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          
          {/* Left Column: Tech Concept Paragraphs */}
          <div className="flex-1 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed font-light">
              <p>
                <strong className="text-white font-semibold">Amantya Technologies</strong> is a leading product engineering and system integration company operating at the absolute forefront of digital transformation. With structural operations spanning the <strong className="text-white font-medium">USA, Canada, and India</strong> (Gurugram, Bangalore & Nagpur), we act as a global catalyst for enterprise scaling.
              </p>
              <p>
                Our core ecosystem orchestrates highly complex, next-generation technical architectures: from standalone <strong className="text-white font-medium">5G network layers</strong> and intelligent <strong className="text-white font-medium">IoT topologies</strong> to advanced <strong className="text-white font-medium">AI/ML logic engines</strong>, edge cloud solutions, and end-to-end cloud infrastructure integrations. Partnered alongside some of the world’s most iconic brands—including <strong className="text-white font-medium">Fortune 500 companies</strong>—we ensure modern tech stacks are engineered with flawless, high-contrast resilience.
              </p>
              <p className="text-sm text-zinc-500 italic font-normal">
                Whether deploying cloud-native private cellular infrastructures, accelerating real-time telemetry processing, or integrating smart hardware node ecosystems, we deliver with premium global execution.
              </p>
            </div>

            {/* Technical Execution Stats */}
            <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
              <div>
                <span className="block text-2xl font-black text-white">3 +</span>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">Global Regions</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-white">5G / AI</span>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">Core Expertise</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-white">F500</span>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">Trusted Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Architecture Blueprint Card */}
          <div className="w-full lg:w-[420px] rounded-2xl border border-white/10 bg-zinc-950 p-6 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden text-left">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03),transparent_50%)] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="h-[1px] w-8 bg-blue-500 mb-6" />
              <h3 className="text-lg font-bold tracking-tight text-white uppercase">Core Pillars</h3>
              
              {/* Core Infrastructure Subsections */}
              <ul className="mt-6 space-y-4 text-xs font-mono tracking-wide text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold whitespace-nowrap">PRODUCT ENGINEERING</span>
                  <span>End-to-end prototyping, implementation, and scaling of cloud-native hardware and software.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold whitespace-nowrap">SYSTEM INTEGRATION</span>
                  <span>Unifying edge telemetry, cellular cores, and legacy backplanes into cohesive ecosystems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold whitespace-nowrap">NEXT-GEN TECH</span>
                  <span>Deploying production-ready 5G topologies, predictive AI models, and secure IoT infrastructure.</span>
                </li>
              </ul>
            </div>

            {/* Bottom Meta Details Tag */}
            <div className="mt-12 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-zinc-600 relative z-10">
              <span>GLOBAL FOOTPRINT // AMANTYA_CORE</span>
              <span>ALL RIGHTS RESERVED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;