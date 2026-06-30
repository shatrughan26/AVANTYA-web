import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('AMANTYA.AI');

  const navItems = ['AMANTYA.AI', 'ABOUT', 'LOCATION'];

  // Router Engine Anchor Link Converter
  const handleScroll = (item) => {
    setActiveItem(item);
    setIsOpen(false); 

    // Match 'AMANTYA.AI' cleanly to your '#home' component block ID
    const targetId = item === 'AMANTYA.AI' ? 'home' : item.toLowerCase();
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 rounded-2xl border border-white bg-white/[0.02] px-6 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300">
      <div className="flex items-center justify-between">
        
        {/* Logo / Brand Mark */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScroll('AMANTYA.AI')}>
          <div className="h-8 w-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center font-bold text-white">
            A
          </div>
          <span className="text-white text-lg font-semibold tracking-wide uppercase">
            AMANTYA
          </span>
        </div>

        {/* Desktop Anchor Options Layout */}
        <div className="hidden md:flex items-center gap-1 rounded-xl bg-white/[0.03] p-1 border border-white/5">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg ${
                activeItem === item
                  ? 'text-black bg-white font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Sidebar Switcher Icon */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-400 hover:text-white focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6 fill-none stroke-current transition-transform duration-200" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Drawer Context */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[250px] opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-2 rounded-xl bg-zinc-950/90 p-3 border border-white/5 shadow-inner backdrop-blur-lg">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                activeItem === item
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}