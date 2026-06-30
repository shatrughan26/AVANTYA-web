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
  const sizeClasses = "text-[1.6rem] sm:text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem]";

  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pointer-events-none">
      <h1 className={`font-serif font-bold tracking-tight text-zinc-200 leading-[1.15] ${sizeClasses}`}>
        {/* Line 1 - always single line, never moves */}
        <span className="block whitespace-nowrap">
          Reimagining tech for real-world impact,
        </span>

        {/* Line 2 - "engineered for" stays static, only the phrase box reserves space */}
        <span className="mt-4 flex flex-wrap items-baseline justify-center gap-x-3 font-black">
          <span className="whitespace-nowrap">engineered for</span>

          {/* Only THIS box reserves max width — "engineered for" never shifts */}
          <span className="relative inline-grid place-items-center">
            {/* Invisible placeholder locks width/height to the longest phrase */}
            <span
              aria-hidden="true"
              className="col-start-1 row-start-1 invisible whitespace-nowrap"
            >
              {longestPhrase.text}.
            </span>

            {/* Visible animated phrase, centered inside the locked box */}
            <span
              className={`col-start-1 row-start-1 relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r ${current.gradient} transition-all duration-500 ease-out drop-shadow-[0_10px_25px_rgba(59,130,246,0.35)] pointer-events-auto ${
                fade
                  ? 'opacity-100 translate-y-0 scale-100 blur-0'
                  : 'opacity-0 -translate-y-3 scale-95 blur-sm'
              } hover:scale-105`}
            >
              {current.text}.
              <span
                className={`absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-gradient-to-r ${current.gradient} opacity-0 hover:opacity-80 transition-opacity duration-300 blur-[2px]`}
              />
            </span>
          </span>
        </span>
      </h1>
    </div>
  );
};

export default SphereText;