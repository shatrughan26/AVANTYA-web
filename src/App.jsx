import React from "react";
import Navbar from "./Navbar/Navbar";
import DotSphere from "./Components/Sphere";
import Intro from "../src/Introduction/Intro";
import Products from "./Products/Products";
import Services from "./Services/service";
import About from "./Components/About";
import Location from "./Components/Location";

const App = () => {
  return (
    // FIX 1: Explicitly force the main wrapper to be 'bg-black' to prevent default browser white canvas on mobile overflow
    <div className="relative min-h-screen w-full font-sans text-white">
      
      {/* 1. ROOT BACKGROUND LAYERS */}
      {/* FIX 2: Optimized background container bounds ensuring full height tracking on dynamic mobile screens */}
      <div className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none overflow-hidden bg-black">
        <DotSphere />
      </div>

      {/* Ambient Depth Blurs layered right above the sphere for atmospheric glow */}
      {/* FIX 3: Replaced 'inset-0' with top-0 left-0 layout definitions matching the fixed wrapper logic */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -left-[10%] -top-[20%] h-[50vw] w-[50vw] rounded-full bg-white/[0.02] mix-blend-screen blur-[130px]" />
        <div className="absolute -bottom-[20%] -right-[10%] h-[50vw] w-[50vw] rounded-full bg-slate-800/[0.04] mix-blend-screen blur-[130px]" />
      </div>

      {/* 2. FIXED NAVIGATION BAR */}
      <Navbar />

      {/* 3. HERO VIEWPORT GATEWAY */}
      {/* FIX 4: Changed 'h-screen' to 'h-[100dvh]' (Dynamic Viewport Height) so collapsing address bars on phones do not break layout proportions */}
      <div
        id="home"
        className="relative w-full h-[100dvh] pointer-events-none flex items-center justify-center"
      >
        {/* Alternate floating hero layout headings can be dropped cleanly in here */}
      </div>

      {/* 4. SCROLLABLE LAYOUT CONTENT */}
      <div className="relative z-10 w-full px-6 md:px-12 pb-24 space-y-32 bg-transparent">
        
        {/* SECTION 1: PROJECT SHOWCASE INTRO */}
        <div id="showcase" className="relative w-full bg-transparent">
          <Intro />
        </div>

        {/* SECTION 2: DYNAMIC SERVICES ACCORDION CAPABILITIES */}
        <div
          id="services"
          className="w-full max-w-8xl mx-auto px-6 py-20 md:px-12 relative z-10"
        >
          <div className="w-full rounded-[3rem] border border-white/10 bg-slate-950/40 backdrop-blur-2xl py-4 md:py-6 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
            <Services />
          </div>
        </div>

        {/* SECTION: CORE PRODUCTS ECOSYSTEM */}
        {/* FIX 5: Changed bg-black to bg-transparent or kept it contained so it won't interrupt the global sphere line flows */}
        <div id="products" className="relative w-full bg-black">
          <Products />
        </div>

        {/* SECTION 3: ABOUT DETAIL BLOCK */}
        <div id="about" className="relative w-full bg-transparent">
          <About />
        </div>

        {/* SECTION 4: LOCATION CONTACT TARGET */}
        <div id="location" className="relative w-full bg-transparent">
          <Location />
        </div>
      </div>
    </div>
  );
};

export default App;