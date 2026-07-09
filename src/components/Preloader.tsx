import { useState, useEffect } from 'react';

export default function Preloader() {
  const [logoSrc, setLogoSrc] = useState('/finloby-white.png');

  useEffect(() => {
    const currentTheme = localStorage.getItem('finloby-active-theme') || 'default';
    const isLight = currentTheme === 'warm-alabaster' || currentTheme === 'platinum-ice';
    setLogoSrc(isLight ? '/finloby.png' : '/finloby-white.png');
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg-midnight)] text-[var(--text-ivory)]" role="status" aria-label="Loading Finloby">
      <div className="flex flex-col items-center gap-6 animate-fade-in duration-1000">
        {/* Animated logo crest */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Subtle gold halo pulse in background */}
          <div className="absolute inset-0 rounded-full bg-[var(--brand-gold)]/10 blur-xl animate-ping duration-3000" />
          <img 
            src={logoSrc} 
            alt="Finloby Crest" 
            className="w-24 h-auto object-contain animate-pulse" 
          />
        </div>
        
        {/* Animated brand wordmark */}
        <div className="text-center flex flex-col items-center">
          <p className="font-serif tracking-[0.4em] uppercase text-2xl sm:text-3xl text-[var(--text-ivory)] font-medium leading-none pl-2">
            FINLOBY
          </p>
          <span className="text-[9px] tracking-[0.3em] text-[var(--brand-gold)] uppercase block mt-3.5 font-bold font-sans">
            SECURE ADVISORY UPLINK
          </span>
        </div>
      </div>
    </div>
  );
}
