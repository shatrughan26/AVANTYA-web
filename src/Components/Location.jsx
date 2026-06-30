import React from 'react';

const Location = () => {
  // Pinpoints your exact corporate location parameters at Bestech Business Center, Sector 48
  const exactAddressQuery = encodeURIComponent("7th Floor, BESTECH BUSINESS CENTER, Tower, Badshahpur Sohna Rd, Sector 48, Gurugram, Haryana 122018");
  const mapEmbedUrl = `https://maps.google.com/maps?q=${exactAddressQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="w-full bg-black py-20 px-4 md:px-8 font-sans text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500">// GLOBAL REACH</span>
          <h2 className="text-4xl font-black tracking-tight mt-2 sm:text-5xl uppercase">FIND US.</h2>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          
          {/* Left Side: Address Details Card */}
          <div className="w-full lg:w-[380px] rounded-2xl border border-white/10 bg-zinc-950 p-6 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden text-left">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.02),transparent_50%)] pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              {/* Address Slot */}
              <div>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase block mb-2">[ TECH HQ ADDRESS ]</span>
                <p className="text-base font-bold tracking-tight text-white leading-relaxed">
                  7th Floor, Bestech Business Center,<br />
                  Tower Block, Badshahpur Sohna Road,<br />
                  Sector 48, Gurugram,<br />
                  Haryana — 122018
                </p>
              </div>

              {/* Timing Slot */}
              <div>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase block mb-2">[ BUSINESS HOURS ]</span>
                <p className="text-sm text-zinc-400 font-mono leading-relaxed">
                  MON - FRI: 09:00 AM - 07:00 PM<br />
                  SAT - SUN: Closed (Support Remote)
                </p>
              </div>

              {/* Contact Slot */}
              <div>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase block mb-2">[ CONNECT ]</span>
                <p className="text-sm text-zinc-400 font-mono">
                  info@avantya.technologies<br />
                  +91 79825 73857
                </p>
              </div>
            </div>

            {/* Bottom Meta Stamp */}
            <div className="mt-12 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-zinc-600 relative z-10">
              <span>SECTOR 48 HUB // CORE INFRA</span>
            </div>
          </div>

          {/* Right Side: Embedded Google Map Interface */}
          <div className="flex-1 min-h-[350px] sm:min-h-[450px] rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden relative shadow-2xl">
            
            <iframe
              title="Avantya Technologies Sector 48 Map Location"
              src={mapEmbedUrl}
              className="w-full h-full border-0 opacity-90 invert-[0.9] sepia-[0.1] hue-rotate-[190deg] saturate-[1.2]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

          {/* Map Color Adjustment Note: The filters inside the iframe `className` tint the Google map natively dark to blend seamlessly into your deep space canvas design background */}

        </div>

      </div>
    </section>
  );
};

export default Location;