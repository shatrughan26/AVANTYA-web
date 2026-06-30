import React from "react";
import Navbar from "./Navbar/Navbar";
import DotSphere from "./Components/Sphere";
import Intro from "../src/Introduction/Intro";
{
  /* Cleanly imported your 3-image showcase file */
}
import Services from "../src/Services/Services";
{
  /* Cleanly imported your tabbed capabilities dashboard */
}
import About from "./Components/About";
import Location from "./Components/Location";

const App = () => {
  return (
    // The entire root website wrapper is locked to solid black
    <div className="relative min-h-screen w-full font-sans text-white">
      {/* 1. ROOT BACKGROUND LAYERS */}
      {/* This fixed container places the DotSphere directly on top of the black background, but behind everything else */}
      <div className="fixed inset-0 -z-20 w-full h-full pointer-events-none overflow-hidden">
        <DotSphere />
      </div>

      {/* Ambient Depth Blurs layered right above the sphere for atmospheric glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -left-[10%] -top-[20%] h-[50vw] w-[50vw] rounded-full bg-white/[0.02] mix-blend-screen blur-[130px]" />
        <div className="absolute -bottom-[20%] -right-[10%] h-[50vw] w-[50vw] rounded-full bg-slate-800/[0.04] mix-blend-screen blur-[130px]" />
      </div>

      {/* 2. FIXED NAVIGATION BAR */}
      <Navbar />

      {/* 3. HERO VIEWPORT GATEWAY */}
      {/* This empty full-screen block ensures the user gets a clean look at the rotating sphere upon landing */}
      <div
        id="home"
        className="relative w-full h-screen pointer-events-none flex items-center justify-center"
      >
        {/* If you ever want a floating welcome title over the sphere, place it right here */}
      </div>

      {/* 4. SCROLLABLE LAYOUT CONTENT */}
      {/* These elements scroll over your fixed sphere background layer */}
      <div className="relative z-10 w-full px-6 md:px-12 pb-24 space-y-32">
        {/* SECTION 1: PROJECT SHOWCASE INTRO */}
        {/* This runs your custom 3-image gallery grid with its dedicated neuron canvas backdrop */}
        <div id="showcase" className="relative w-full bg-transparent">
          <Intro />
        </div>

        {/* SECTION 2: DYNAMIC SERVICES ACCORDION CAPABILITIES */}
        {/* This runs the multi-service dashboard featuring the GCC data modules */}
        <div
          id="services"
          className="w-full max-w-8xl mx-auto px-6 py-20 md:px-12 relative z-10"
        >
          <div className="w-full rounded-[3rem] border border-white/10 bg-slate-950/40 backdrop-blur-2xl py-4 md:py-6 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
            <Services />
          </div>
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
