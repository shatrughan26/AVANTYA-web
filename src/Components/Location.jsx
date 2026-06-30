import React from 'react';

const Location = () => {
  // Pinpoints your exact location parameters behind Civil Hospital, Sector 10, Gurugram
  const exactAddressQuery = encodeURIComponent("Shop no 1, Om Chowk, behind Civil Hospital, Vikas Nagar, Sector 10, Gurugram, Haryana 122001");
  const mapEmbedUrl = `https://maps.google.com/maps?q=${exactAddressQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="w-full bg-black py-20 px-4 md:px-8 font-sans text-white border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">// VISIT THE STUDIO</span>
          <h2 className="text-4xl font-black tracking-tight mt-2 sm:text-5xl">FIND US.</h2>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          
          {/* Left Side: Address Details Card */}
          <div className="w-full lg:w-[380px] rounded-2xl border border-white/10 bg-zinc-950 p-6 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              {/* Address Slot */}
              <div>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase block mb-2">[ HQ ADDRESS ]</span>
                <p className="text-base font-bold tracking-tight text-white leading-relaxed">
                  Shop No. 1, Om Chowk,<br />
                  Behind Civil Hospital, Vikas Nagar,<br />
                  Sector 10, Gurugram,<br />
                  Haryana — 122001
                </p>
              </div>

              {/* Timing Slot */}
              <div>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase block mb-2">[ OPERATIONAL HOURS ]</span>
                <p className="text-sm text-zinc-400 font-mono leading-relaxed">
                  MON - FRI: 11:00 AM - 11:00 PM<br />
                  SAT - SUN: 10:00 AM - Midnight
                </p>
              </div>

              {/* Contact Slot */}
              <div>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase block mb-2">[ CONNECT ]</span>
                <p className="text-sm text-zinc-400 font-mono">
                  hello@selfiecafe.studio<br />
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Bottom Meta Stamp */}
            <div className="mt-12 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-zinc-600 relative z-10">
              <span>SECTOR 10 HUB // CORE ENGINE</span>
            </div>
          </div>

          {/* Right Side: Embedded Google Map Interface (True Color & Native Light Theme) */}
          <div className="flex-1 min-h-[350px] sm:min-h-[450px] rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden relative shadow-2xl">
            
            <iframe
              title="Selfie Cafe Sector 10 Map Location"
              src={mapEmbedUrl}
              className="w-full h-full border-0 opacity-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;