import { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Calculator, Shield } from 'lucide-react';

const services = [
  {
    id: 'debt-counselling',
    title: 'Debt Counselling',
    desc: 'Professional analysis of your financial profile by certified credit counselors. We evaluate your current liabilities, establish a strict debt management plan, and guide you through local legal safe-harbors.',
    details: [
      'Comprehensive financial liability audit.',
      'Sovereign legal frame briefing (CBUAE regulations).',
      'Discreet household budget restructuring plans.',
      'Direct mediation advice for bank negotiations.'
    ]
  },
  {
    id: 'debt-consolidation',
    title: 'Debt Consolidation',
    desc: 'Consolidating multiple high-interest credit cards and personal loans into a single lower-interest facility, optimized for a structured monthly payment that aligns with your income.',
    details: [
      'Buy-out loans from primary banking channels.',
      'Replacement of multiple card debts with a single flat loan.',
      'Substantial reduction of total monthly interest burden.',
      'Centralized tracking through one institution.'
    ]
  },
  {
    id: 'debt-settlement',
    title: 'Debt Settlement',
    desc: 'Direct negotiation with creditors to write off a significant portion of non-performing liabilities. We secure final settlement agreements, release certificates, and update credit registry records.',
    details: [
      'Up to 40% - 60% settlement write-offs negotiated.',
      'Structured legal payout settlements for outstanding balances.',
      'Official Liability Release certificates from bank legal teams.',
      'Al-Etihad Credit Bureau (AECB) history correction support.'
    ]
  },
  {
    id: 'debt-restructuring',
    title: 'Debt Restructuring',
    desc: 'Renegotiating the terms of commercial or high-value personal loans. We secure extended amortization tenures, interest rate caps, grace periods, and restructured payment plans.',
    details: [
      'Extension of loan repayment tenure up to 60 months.',
      'Grace periods of 3 to 12 months on principal payments.',
      'Waiver of late payment fees and accrued penalty interest.',
      'Conversion of demand facilities into amortized term loans.'
    ]
  },
  {
    id: 'skip-solutions',
    title: 'Skip Solutions',
    desc: 'Negotiation and resolution of default liabilities for clients who have exited the jurisdiction. We manage legal coordinates and settle debts remotely to clear active cases and travel restrictions.',
    details: [
      'Remote Power of Attorney (POA) representation.',
      'Direct skip-settlement negotiations with collection teams.',
      'Resolution of police default cases and travel bans.',
      'Legal clearance certificates issued remotely.'
    ]
  }
];

export default function DebtSolutions() {
  const [activeTab, setActiveTab] = useState('debt-counselling');
  
  // Interactive Calculator State
  const [totalDebt, setTotalDebt] = useState(800000);
  const [interestRate, setInterestRate] = useState(18);
  const [consolidationRate, setConsolidationRate] = useState(8.5);
  const [termMonths, setTermMonths] = useState(48);

  // Auto-scroll to specific service if URL has hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const cleanHash = hash.replace('#', '').replace('-personal', '').replace('-corporate', '');
      const matched = services.find(s => s.id === cleanHash || cleanHash.includes(s.id));
      if (matched) {
        setActiveTab(matched.id);
        const element = document.getElementById('debt-services-container');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, []);

  // Consolidation calculations
  const monthlyCurrentInterestOnly = (totalDebt * (interestRate / 100)) / 12;
  const currentTotalCost = totalDebt * (1 + (interestRate / 100) * (termMonths / 12) * 0.7); // approximated
  
  // Amortized payment formula
  const r = (consolidationRate / 100) / 12;
  const n = termMonths;
  const consolidatedMonthlyPayment = r > 0 
    ? (totalDebt * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    : totalDebt / n;
  
  const consolidatedTotalCost = consolidatedMonthlyPayment * n;
  const netSavings = Math.max(0, currentTotalCost - consolidatedTotalCost);
  const monthlySavings = Math.max(0, (totalDebt * (interestRate/100)/12) - consolidatedMonthlyPayment);

  return (
    <div className="flex-1 w-full bg-[#070F1E] pt-44 sm:pt-48 lg:pt-52 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header section */}
        <div className="flex flex-col gap-4 mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/25 bg-[#0D1625]/85 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E2C999]">
              Pillar I & V
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FBF9F4] leading-tight">
            Debt Solutions & <br />
            <span className="text-gradient-gold italic">Liability Restructuring</span>
          </h1>
          <p className="text-sm sm:text-base font-light text-[#FBF9F4]/60 max-w-2xl leading-relaxed mt-2">
            Restoring your corporate and personal financial equilibrium. We stand between you and institutional lenders to negotiate, consolidate, and settle outstanding balances under strict NDA protocols.
          </p>
        </div>

        {/* Dynamic Service Pillars Tab Frame */}
        <div id="debt-services-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left Tab selector */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em] mb-4 pl-2">
              Liaison Services
            </div>
            {services.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left p-5 transition-all duration-300 rounded-sm border flex items-center justify-between cursor-pointer group ${
                  activeTab === item.id 
                    ? 'bg-[#0D1625] border-[#C5A059] text-[#FBF9F4]' 
                    : 'bg-[#050B15]/40 border-slate-900 text-[#FBF9F4]/50 hover:bg-[#0D1625]/50 hover:border-[#C5A059]/30 hover:text-[#FBF9F4]'
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-[#C5A059]">Service Portfolio</span>
                  <span className="text-sm font-semibold tracking-wide font-sans">{item.title}</span>
                </div>
                <ArrowRight className={`w-4 h-4 text-[#C5A059] transition-transform duration-300 ${
                  activeTab === item.id ? 'translate-x-1' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`} />
              </button>
            ))}
          </div>

          {/* Right Tab details container */}
          <div className="lg:col-span-8 bg-[#0D1625] border border-slate-800 p-8 sm:p-10 rounded-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#9A7B3E] via-[#C5A059] to-[#E2C999]"></div>
            
            {services.map((item) => {
              if (item.id !== activeTab) return null;
              return (
                <div key={item.id} className="animate-fade-in flex flex-col justify-between h-full gap-8">
                  <div>
                    <h3 className="text-2xl font-serif text-[#C5A059] font-medium tracking-wide mb-4">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-[#FBF9F4]/70 leading-relaxed mb-8">
                      {item.desc}
                    </p>

                    <h4 className="text-[10px] font-bold text-[#FBF9F4] uppercase tracking-[0.2em] mb-4 flex items-center gap-2 border-b border-[#C5A059]/10 pb-2">
                      <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                      Core Advisory Specifications
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-[#FBF9F4]/60 font-light">
                          <span className="text-[#C5A059] font-serif text-[10px] mt-0.5">◆</span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-[#C5A059]/10 pt-8 mt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#070F1E] border border-[#C5A059]/25 rounded-full">
                        <Shield className="w-4 h-4 text-[#C5A059]" />
                      </div>
                      <div className="text-[10px] font-light text-[#FBF9F4]/40 max-w-[280px]">
                        Subject to Attorney-Client Confidentiality and pre-arranged Non-Disclosure terms.
                      </div>
                    </div>
                    <a
                      href="/#secure-intake"
                      className="px-8 py-3.5 bg-[#C5A059] text-[#070F1E] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#E2C999] transition-all rounded-sm font-sans"
                    >
                      Enquire Securely
                    </a>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Interactive Tool Frame: Debt Consolidation Estimator */}
        <div className="bg-[#0D1625] border border-[#C5A059]/20 p-8 sm:p-10 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C5A059]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#C5A059]/10 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#070F1E] border border-[#C5A059]/20 rounded-sm">
                <Calculator className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#FBF9F4] font-medium tracking-wide">
                  Debt Consolidation Payoff Simulator
                </h3>
                <p className="text-xs text-[#FBF9F4]/40 font-light mt-0.5">
                  Calculate savings and unified payment plans by refinancing scattered high-interest liabilities.
                </p>
              </div>
            </div>
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A059] border border-[#C5A059]/20 px-3 py-1 bg-[#070F1E]">
              Consolidation Refinance Engine
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Form Sliders */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Debt Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="comp-debt" className="font-semibold uppercase tracking-wider text-[#C5A059]">
                    Aggregate Outstanding Debt
                  </label>
                  <span className="font-mono text-[#FBF9F4] font-semibold text-sm">
                    AED {totalDebt.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  id="comp-debt"
                  min="100000"
                  max="5000000"
                  step="50000"
                  value={totalDebt}
                  onChange={(e) => setTotalDebt(Number(e.target.value))}
                  className="w-full accent-[#C5A059] bg-[#070F1E] h-1.5 rounded-sm appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-[#FBF9F4]/30 font-mono">
                  <span>AED 100K</span>
                  <span>AED 2.5M</span>
                  <span>AED 5M+</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Interest Slider */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs">
                    <label htmlFor="comp-int" className="font-semibold uppercase tracking-wider text-[#C5A059]">
                      Avg Current APR
                    </label>
                    <span className="font-mono text-[#FBF9F4] font-semibold">
                      {interestRate}%
                    </span>
                  </div>
                  <input 
                    type="range" 
                    id="comp-int"
                    min="10"
                    max="36"
                    step="0.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-[#C5A059] bg-[#070F1E] h-1.5 rounded-sm appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-[#FBF9F4]/30 font-mono">
                    <span>10%</span>
                    <span>36%</span>
                  </div>
                </div>

                {/* Consolidation Rate */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs">
                    <label htmlFor="comp-con" className="font-semibold uppercase tracking-wider text-[#C5A059]">
                      Target Consolidated APR
                    </label>
                    <span className="font-mono text-[#FBF9F4] font-semibold">
                      {consolidationRate}%
                    </span>
                  </div>
                  <input 
                    type="range" 
                    id="comp-con"
                    min="5"
                    max="15"
                    step="0.25"
                    value={consolidationRate}
                    onChange={(e) => setConsolidationRate(Number(e.target.value))}
                    className="w-full accent-[#C5A059] bg-[#070F1E] h-1.5 rounded-sm appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-[#FBF9F4]/30 font-mono">
                    <span>5%</span>
                    <span>15%</span>
                  </div>
                </div>

                {/* Term */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs">
                    <label htmlFor="comp-term" className="font-semibold uppercase tracking-wider text-[#C5A059]">
                      Amortization Term
                    </label>
                    <span className="font-mono text-[#FBF9F4] font-semibold">
                      {termMonths} Months
                    </span>
                  </div>
                  <input 
                    type="range" 
                    id="comp-term"
                    min="12"
                    max="60"
                    step="6"
                    value={termMonths}
                    onChange={(e) => setTermMonths(Number(e.target.value))}
                    className="w-full accent-[#C5A059] bg-[#070F1E] h-1.5 rounded-sm appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-[#FBF9F4]/30 font-mono">
                    <span>12m</span>
                    <span>60m</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Calculations results */}
            <div className="lg:col-span-5 bg-[#070F1E]/80 border border-[#C5A059]/15 p-6 rounded-sm flex flex-col justify-between">
              <div>
                <h4 className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em] border-b border-[#C5A059]/15 pb-2 mb-6">
                  Consolidated Projections
                </h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Current Interest (Est. Monthly):</span>
                    <span className="text-xs font-mono font-semibold text-rose-500">AED {Math.round(monthlyCurrentInterestOnly).toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Consolidated Monthly Payment:</span>
                    <span className="text-base font-mono font-semibold text-[#FBF9F4]">AED {Math.round(consolidatedMonthlyPayment).toLocaleString()} /mo</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Net Monthly Savings:</span>
                    <span className="text-sm font-mono font-semibold text-emerald-500">+AED {Math.round(monthlySavings).toLocaleString()} /mo</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Total Estimated Lifetime Savings:</span>
                    <span className="text-base font-mono font-semibold text-emerald-500">AED {Math.round(netSavings).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#C5A059]/10">
                <a
                  href="/#secure-intake"
                  className="w-full block text-center bg-[#C5A059] hover:bg-[#E2C999] text-[#070F1E] py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all rounded-sm duration-300"
                >
                  Initiate Refinancing Liaison
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
