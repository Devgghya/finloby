
export default function Preloader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg-midnight)] text-[var(--text-ivory)]" role="status" aria-label="Loading Finloby">
      <div className="flex flex-col items-center gap-6 animate-fade-in duration-1000">
        {/* Animated logo crest */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Subtle gold halo pulse in background */}
          <div className="absolute inset-0 rounded-full bg-[var(--brand-gold)]/10 blur-xl animate-ping duration-3000" />
          <img 
            src="/finloby-white.png" 
            alt="Finloby Crest" 
            className="w-24 h-auto object-contain animate-pulse" 
          />
        </div>
        
        {/* Animated brand wordmark */}
        <div className="text-center flex flex-col items-center max-w-sm px-4">
          <img 
            src="/FINLOBY-TEXT.png" 
            alt="FINLOBY" 
            className="h-7 w-auto object-contain pl-1 animate-pulse" 
          />
          <span className="text-[9px] tracking-[0.3em] text-[var(--brand-gold)] uppercase block mt-3.5 font-bold font-sans">
            SECURE ADVISORY UPLINK
          </span>
          <p className="text-[11px] font-sans font-light italic text-[#FBF9F4]/70 mt-6 tracking-wide text-center leading-relaxed animate-fade-in max-w-[280px]">
            "We Help Repair The Past So You Can Build your Future"
          </p>
        </div>
      </div>
    </div>
  );
}
