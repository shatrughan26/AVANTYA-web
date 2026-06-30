import React from 'react';

const About = () => {
  return (
    <section className="w-full bg-black py-20 px-4 md:px-8 font-sans text-white border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">// KITCHEN MANIFESTO</span>
          <h2 className="text-4xl font-black tracking-tight mt-2 sm:text-5xl">
            CRAFTING THE CONTRAST.
          </h2>
        </div>

        {/* Main Content Layout Split */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          
          {/* Left Column: Food Concept Paragraphs */}
          <div className="flex-1 flex flex-col justify-between space-y-6">
            <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
              <p>
                At <strong className="text-white font-semibold">Selfie Café</strong>, we apply an architectural eye to premium global comfort food. We break down traditional dining boundaries to curate a menu that serves everything you crave, executed with high-contrast presentation.
              </p>
              <p>
                Our kitchen balances diverse culinary worlds: from the smoky depth of our traditional <strong className="text-white font-medium">Tandoor</strong> firing station to custom gourmet <strong className="text-white font-medium">Burgers</strong>, artisanal stir-fried <strong className="text-white font-medium">Noodles</strong>, and rich, creamy <strong className="text-white font-medium">Pastas</strong>. Paired with an experimental lineup of signature starters, every single plate is framed to look as striking as it tastes.
              </p>
              <p className="text-sm text-zinc-500 italic">
                Whether you are here for a late-night pasta drop, a quick burger stack, or charred tandoori plates, we serve it with bold execution.
              </p>
            </div>

            {/* Culinary Station Stats */}
            <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
              <div>
                <span className="block text-2xl font-black text-white">450°C</span>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">Live Tandoor Clay</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-white">100%</span>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">Gourmet Grills</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-white">24/7</span>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">Comfort Flavors</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Station Profile Blueprint Card */}
          <div className="w-full lg:w-[420px] rounded-2xl border border-white/10 bg-zinc-950 p-6 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="h-[1px] w-8 bg-white mb-6" />
              <h3 className="text-lg font-bold tracking-tight text-white uppercase">The Culinary Modules</h3>
              
              {/* Core Station Subsections */}
              <ul className="mt-6 space-y-4 text-xs font-mono tracking-wide text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">BURGER & STARTER</span>
                  <span>High-stack, toasted brioche buns alongside crispy, elevated side plates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">TANDOOR SMOKE</span>
                  <span>Authentic charcoal-charred marinades crafted with traditional execution.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">PASTA & NOODLE</span>
                  <span>From wok-tossed street profiles to slow-simmered, rich Italian sauces.</span>
                </li>
              </ul>
            </div>

            {/* Bottom Meta Details Tag */}
            <div className="mt-12 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-zinc-600 relative z-10">
              <span>EST. 2026 // LINE_MENU ENGINE</span>
              <span>ALL RIGHTS RESERVED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;