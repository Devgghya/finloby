import { useState } from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Investments() {
  const [allocation, setAllocation] = useState(5000000); // 5 Million AED
  const [riskProfile, setRiskProfile] = useState('Growth');

  // Interactive Yield Matrix
  const yieldRates = {
    Conservative: { rate: 6.2, type: 'Fixed Income & Sovereign Sukuk' },
    Growth: { rate: 11.5, type: 'SME Private Debt & Asset Backed Finance' },
    Aggressive: { rate: 18.5, type: 'High Yield Distressed Restructuring Portfolio' }
  };

  const currentYield = yieldRates[riskProfile as keyof typeof yieldRates];
  const annualYield = allocation * (currentYield.rate / 100);
  const yieldTenureMonths = annualYield / 12;

  return (
    <div className="flex-1 w-full bg-[#070F1E] pt-48 sm:pt-52 lg:pt-56 xl:pt-64 pb-20">
      <SEO
        title="Investment & Capital Placement"
        description="Connecting institutional investors with high-yield opportunities and structuring joint ventures with verified capital seekers globally."
        keywords="investment capital placement, institutional investors, joint ventures, high-yield investment, capital seekers, venture capital, private equity, Dubai"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/25 bg-[#0D1625]/85 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E2C999]">
              Pillar IV
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FBF9F4] leading-tight">
            Investment & <br />
            <span className="text-gradient-gold italic">Capital Placement</span>
          </h1>
          <p className="text-sm sm:text-base font-light text-[#FBF9F4]/60 max-w-2xl leading-relaxed mt-2">
            Bridging institutional liquidity pools with qualified asset seekers. We structure distressed debt syndicates and yield-bearing asset financing programs globally.
          </p>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Investor Plate */}
          <div className="bg-[#0D1625] border border-[#C5A059]/15 p-8 sm:p-10 rounded-sm hover:border-[#C5A059]/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C5A059]"></div>
            <div>
              <span className="text-[9px] font-mono text-[#C5A059] uppercase tracking-[0.2em]">Institutional Placement</span>
              <h3 className="text-2xl font-serif text-[#FBF9F4] font-medium tracking-wide mt-2 mb-4">
                Capital Allocations & Syndicates
              </h3>
              <p className="text-xs font-light text-[#FBF9F4]/60 leading-relaxed mb-6">
                Direct placement opportunities in high-yield debt restructuring notes, sovereign compliance protocols, and asset-backed corporate receivables.
              </p>
              <ul className="space-y-3 pt-4 border-t border-[#C5A059]/10">
                <li className="flex items-center gap-2.5 text-xs text-[#FBF9F4]/75 font-light">
                  <span className="text-[#C5A059] max-sm:text-[#D4AF37] max-sm:px-2 font-sans">◆</span>
                  Targeted yields ranging from 8% to 18% APR.
                </li>
                <li className="flex items-center gap-2.5 text-xs text-[#FBF9F4]/75 font-light">
                  <span className="text-[#C5A059] max-sm:text-[#D4AF37] max-sm:px-2 font-sans">◆</span>
                  Collateralized structures secured via post-dated cheque escrow models.
                </li>
                <li className="flex items-center gap-2.5 text-xs text-[#FBF9F4]/75 font-light">
                  <span className="text-[#C5A059] max-sm:text-[#D4AF37] max-sm:px-2 font-sans">◆</span>
                  Private placements reserved for HNWI and institutional groups.
                </li>
              </ul>
            </div>
            <a
              href="/#secure-intake"
              className="mt-8 w-full block text-center border border-[#C5A059]/30 hover:border-[#C5A059] bg-[#070F1E]/80 text-[#FBF9F4] py-3.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all"
            >
              Request Prospectus
            </a>
          </div>

          {/* Investment Seeker Plate */}
          <div className="bg-[#0D1625] border border-[#C5A059]/15 p-8 sm:p-10 rounded-sm hover:border-[#C5A059]/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#E2C999]"></div>
            <div>
              <span className="text-[9px] font-mono text-[#E2C999] uppercase tracking-[0.2em]">Capital Funding</span>
              <h3 className="text-2xl font-serif text-[#FBF9F4] font-medium tracking-wide mt-2 mb-4">
                Structured Capital Seekers
              </h3>
              <p className="text-xs font-light text-[#FBF9F4]/60 leading-relaxed mb-6">
                Fast-track corporate funding allocations for high-performance entities, logistics fleet expansions, and verified government construction contract executions.
              </p>
              <ul className="space-y-3 pt-4 border-t border-[#C5A059]/10">
                <li className="flex items-center gap-2.5 text-xs text-[#FBF9F4]/75 font-light">
                  <span className="text-[#C5A059] max-sm:text-[#D4AF37] max-sm:px-2 font-sans">◆</span>
                  Working capital lines from AED 5 Million up to AED 150 Million.
                </li>
                <li className="flex items-center gap-2.5 text-xs text-[#FBF9F4]/75 font-light">
                  <span className="text-[#C5A059] max-sm:text-[#D4AF37] max-sm:px-2 font-sans">◆</span>
                  Tailored debt servicing structures matching cash flow cycles.
                </li>
                <li className="flex items-center gap-2.5 text-xs text-[#FBF9F4]/75 font-light">
                  <span className="text-[#C5A059] max-sm:text-[#D4AF37] max-sm:px-2 font-sans">◆</span>
                  Flexible corporate equity swap or debt options.
                </li>
              </ul>
            </div>
            <a
              href="/#secure-intake"
              className="mt-8 w-full block text-center bg-[#C5A059] hover:bg-[#E2C999] text-[#070F1E] py-3.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all"
            >
              Apply for Capital
            </a>
          </div>
        </div>

        {/* Investment Yield Simulator */}
        <div className="bg-[#0D1625] border border-[#C5A059]/20 p-8 sm:p-10 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C5A059]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#C5A059]/10 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#070F1E] border border-[#C5A059]/20 rounded-sm">
                <TrendingUp className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#FBF9F4] font-medium tracking-wide">
                  Private Capital Placement Yield Simulator
                </h3>
                <p className="text-xs text-[#FBF9F4]/40 font-light mt-0.5">
                  Calculate target income payouts based on total corporate allocation amounts.
                </p>
              </div>
            </div>
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A059] border border-[#C5A059]/20 px-3 py-1 bg-[#070F1E]">
              Yield Matrix Engine
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Input Slider */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Placement Allocation Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="inv-allocation" className="font-semibold uppercase tracking-wider text-[#C5A059]">
                    Planned Capital Allocation
                  </label>
                  <span className="font-mono text-[#FBF9F4] font-semibold text-sm">
                    AED {allocation.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  id="inv-allocation"
                  min="500000"
                  max="50000000"
                  step="500000"
                  value={allocation}
                  onChange={(e) => setAllocation(Number(e.target.value))}
                  className="w-full accent-[#C5A059] bg-[#070F1E] h-1.5 rounded-sm appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-[#FBF9F4]/30 font-mono">
                  <span>AED 500K</span>
                  <span>AED 25M</span>
                  <span>AED 50M+</span>
                </div>
              </div>

              {/* Risk Profiles */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                  Placement Risk & Yield Profile
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1.5">
                  {Object.keys(yieldRates).map((profile) => (
                    <button
                      key={profile}
                      type="button"
                      onClick={() => setRiskProfile(profile)}
                      className={`p-4 text-left border rounded-sm transition-all duration-300 cursor-pointer ${
                        riskProfile === profile 
                          ? 'bg-[#070F1E] border-[#C5A059] text-[#FBF9F4]' 
                          : 'bg-[#050B15]/40 border-slate-900 text-[#FBF9F4]/50 hover:bg-[#070F1E]/50 hover:border-[#C5A059]/30 hover:text-[#FBF9F4]'
                      }`}
                    >
                      <div className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">
                        {profile}
                      </div>
                      <div className="text-lg font-mono font-semibold text-[#FBF9F4] mt-1">
                        {yieldRates[profile as keyof typeof yieldRates].rate}% <span className="text-[10px] text-[#FBF9F4]/40 font-sans">APR</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Calculations results */}
            <div className="lg:col-span-5 bg-[#070F1E]/80 border border-[#C5A059]/15 p-6 rounded-sm flex flex-col justify-between">
              <div>
                <h4 className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em] border-b border-[#C5A059]/15 pb-2 mb-6">
                  Target Distributions
                </h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Placement Class:</span>
                    <span className="text-xs font-semibold text-[#E2C999] text-right max-w-[180px] leading-relaxed">
                      {currentYield.type}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Target Annual Yield:</span>
                    <span className="text-sm font-mono font-semibold text-[#FBF9F4]">
                      AED {Math.round(annualYield).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Est. Monthly Distribution:</span>
                    <span className="text-base font-mono font-semibold text-emerald-500">
                      AED {Math.round(yieldTenureMonths).toLocaleString()} /mo
                    </span>
                  </div>
                </div>
              </div>

              {riskProfile === 'Aggressive' && (
                <div className="my-4 p-3 bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-300 font-light rounded-sm flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Aggressive placements focus on purchasing corporate write-offs and distressed assets. Target yields are projections, subject to collection rates.</span>
                </div>
              )}

              <div className="pt-6 mt-4 border-t border-[#C5A059]/10">
                <a
                  href="/#secure-intake"
                  className="w-full block text-center bg-[#C5A059] hover:bg-[#E2C999] text-[#070F1E] py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all rounded-sm duration-300"
                >
                  Allocate Capital Placement
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
