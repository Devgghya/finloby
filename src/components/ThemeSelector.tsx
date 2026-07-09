import { useState, useEffect } from 'react';
import { Paintbrush, X, Check } from 'lucide-react';

const themes = [
  { id: 'default', name: 'Refined Navy & Satin Gold', desc: 'Default classic dark luxury aesthetic', preview: 'bg-[#070F1E] border-[#C5A059]' },
  { id: 'warm-alabaster', name: 'Warm Alabaster & Bronze', desc: 'Premium private banking cream light theme', preview: 'bg-[#F5F2EB] border-[#967540]' },
  { id: 'platinum-ice', name: 'Platinum Ice & Satin Bronze', desc: 'Cool modern minimalist light theme', preview: 'bg-[#E9ECEF] border-[#736254]' },
  { id: 'emerald-gold', name: 'Emerald & Champagne Gold', desc: 'Heritage sovereign wealth management', preview: 'bg-[#041F1A] border-[#E5C158]' },
  { id: 'midnight-slate', name: 'Midnight Slate & Rose Gold', desc: 'Warm contemporary dark luxury mode', preview: 'bg-[#151419] border-[#D4A396]' }
];

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(localStorage.getItem('finloby-active-theme') || 'default');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
    localStorage.setItem('finloby-active-theme', activeTheme);
    window.dispatchEvent(new Event('theme-change'));
  }, [activeTheme]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <div className="fixed right-6 bottom-24 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-3.5 bg-[#0D1625] hover:bg-[#0D1625]/90 border border-[#C5A059]/40 hover:border-[#C5A059] rounded-full text-[#C5A059] shadow-2xl transition-all duration-300 cursor-pointer flex items-center justify-center relative group"
        aria-label="Toggle theme settings"
        aria-expanded={isOpen}
      >
        <Paintbrush className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="absolute right-full mr-3 bg-[#0D1625] border border-[#C5A059]/25 text-[#FBF9F4] text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl whitespace-nowrap">
          Aesthetic Atelier
        </span>
      </button>

      {/* Drawer panel */}
      {isOpen && (
        <div className="bg-[#0D1625]/98 backdrop-blur-md border border-[#C5A059]/30 p-6 rounded-sm shadow-2xl w-80 max-w-sm flex flex-col gap-4 animate-fade-in relative z-50" role="region" aria-label="Theme selection">
          <div className="flex justify-between items-center border-b border-[#C5A059]/10 pb-3">
            <div>
              <h3 className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.2em] font-serif">Aesthetic Atelier</h3>
              <p className="text-[9px] text-[#FBF9F4]/40 font-light mt-0.5">Toggle Live Brand Theme Matrices</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-[#FBF9F4]/55 hover:text-white cursor-pointer"
              aria-label="Close atelier"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            {themes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTheme(t.id)}
                aria-pressed={activeTheme === t.id}
                className={`w-full p-3 transition-all duration-300 border text-left rounded-sm cursor-pointer flex items-center justify-between group ${
                  activeTheme === t.id
                    ? 'bg-[#070F1E] border-[#C5A059] text-white shadow-md'
                    : 'bg-[#050B15]/40 border-slate-900 text-[#FBF9F4]/70 hover:bg-[#070F1E]/50 hover:border-[#C5A059]/40 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Visual Preview Swatch */}
                  <div className={`w-5 h-5 rounded-full border ${t.preview} flex-shrink-0 transition-transform group-hover:scale-110`} />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold tracking-wide font-sans">{t.name}</span>
                    <span className="text-[8px] text-[#FBF9F4]/40 font-light leading-none mt-0.5">{t.desc}</span>
                  </div>
                </div>
                {activeTheme === t.id && (
                  <Check className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
