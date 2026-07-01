import React, { useEffect, useState } from 'react';

const SphereText = () => {
  const techPhrases = [
    { text: "Artificial Intelligence", gradient: "from-blue-300 via-blue-400 to-blue-600" },
    { text: "Network Products", gradient: "from-white via-zinc-200 to-zinc-400" },
    { text: "Digital Transformation", gradient: "from-sky-300 via-blue-400 to-indigo-500" },
    { text: "Test and Measurement Tools", gradient: "from-zinc-100 via-blue-200 to-blue-400" },
  ];

  const longestPhrase = techPhrases.reduce((a, b) =>
    a.text.length > b.text.length ? a : b
  );

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % techPhrases.length);
        setFade(true);
      }, 400);
    }, 3000);

    return () => clearInterval(phraseInterval);
  }, []);

  const current = techPhrases[currentPhraseIndex];
  
  // Refined responsive sizing matrix for cleaner text scaling on small viewports
  const sizeClasses = "text-xl sm:text-3xl md:text-4xl lg:text-5xl";

  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto pointer-events-none">
      <h1 className={`font-serif font-bold tracking-tight text-zinc-200 leading-snug sm:leading-relaxed ${sizeClasses}`}>
        
        {/* Line 1 - Now wraps beautifully on mobile and stands clean */}
        <span className="block mb-2 sm:mb-4">
          Reimagining tech for real-world impact,
        </span>

        {/* Line 2 - Uses standard inline wrapping on mobile, flex on desktop if needed */}
        <span className="block font-black">
          <span className="inline-block mr-2 sm:mr-3">engineered for</span>

          {/* This box reserves space for the layout engine safely */}
          <span className="relative inline-grid place-items-center vertical-align-middle">
            {/* Invisible placeholder handles space management without side-clipping */}
            <span
              aria-hidden="true"
              className="col-start-1 row-start-1 invisible whitespace-pre sm:whitespace-nowrap"
            >
              {longestPhrase.text}.
            </span>

            {/* Visible dynamic changing phrase */}
            <span
              className={`col-start-1 row-start-1 relative text-transparent bg-clip-text bg-gradient-to-r ${current.gradient} transition-all duration-500 ease-out drop-shadow-[0_10px_25px_rgba(59,130,246,0.35)] pointer-events-auto ${
                fade
                  ? 'opacity-100 translate-y-0 scale-100 blur-0'
                  : 'opacity-0 -translate-y-3 scale-95 blur-sm'
              } hover:scale-105`}
            >
              {current.text}.
              <span
                className={`absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-gradient-to-r ${current.gradient} opacity-0 hover:opacity-80 transition-opacity duration-300 blur-[2px]`}
              />
            </span>
          </span>
        </span>
      </h1>
    </div>
  );
};

export default SphereText;