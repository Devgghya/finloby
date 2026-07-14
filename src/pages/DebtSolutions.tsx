import { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Calculator, Shield } from 'lucide-react';
import SEO from '../components/SEO';

interface ServiceStep {
  title: string;
  desc: string;
  subpoints?: string[];
}

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  processTitle: string;
  steps: ServiceStep[];
}

const services: ServiceItem[] = [
  {
    id: 'debt-counselling',
    title: 'Debt Counselling',
    tagline: 'A Detailed Consultation Session',
    desc: 'Debt counselling is a supportive, confidential process where financial experts evaluate your income, expenses, and liabilities to help you regain control of your money. It focuses on teaching you budget management, restructuring your habits, and laying the groundwork for customized repayment strategies to eliminate your financial stress.',
    processTitle: 'Counselling Process',
    steps: [
      {
        title: '1. Personal & Professional Profiling',
        desc: 'We begin with a basic overview of your personal and professional life. Understanding your career stability, industry, and personal background helps us tailor a strategy that aligns with your specific circumstances.'
      },
      {
        title: '2. Expense & Liability Assessment',
        desc: 'Next, we map out your complete financial picture. We look closely at your:\nPersonal Expenses: Your daily and monthly cost of living.\nExisting Debts: Your current financial liabilities, outstanding balances, and creditor terms.'
      },
      {
        title: '3. Income Evaluation',
        desc: 'To understand what you can comfortably afford, we review all your revenue streams. This includes your:\nPersonal Income: Your primary salary or wages.\nConsolidated Household Income: Combined income from your household, if applicable.\nExtra Sources: Any side hustles, investments, or passive income.'
      },
      {
        title: '4. Consolidated Review',
        desc: 'We bring it all together. By contrasting your total consolidated income against your total debts and living expenses, we get an accurate, bird\'s-eye view of your financial health.'
      },
      {
        title: '5. Tailored Debt Solutions',
        desc: 'With a clear picture in place, we define your next steps. We present you with practical, structured debt solutions such as consolidation plans or structured repayment programs—designed to wipe out your debt and secure your financial future.'
      }
    ]
  },
  {
    id: 'debt-consolidation',
    title: 'Debt Consolidation',
    tagline: 'Multiple Liabilities into 1 EMI',
    desc: 'Debt consolidation is a smart financial strategy that combines multiple outstanding debts, such as credit cards, personal loans, and retail accounts into a single, manageable monthly payment. Instead of struggling with multiple payments, due dates and high interest rates, we help streamline your liabilities into one structured plan, often securing a lower overall interest rate and a clear path to becoming debt-free.',
    processTitle: 'Our Debt Consolidation Process',
    steps: [
      {
        title: '1. Transition from Counselling',
        desc: 'After your Debt Counselling session, we take your fully mapped financial profile and transition you smoothly into the consolidation phase.'
      },
      {
        title: '2. Document & Liability information',
        desc: 'We gather all necessary data and documentation regarding your existing liabilities. This includes statements, outstanding balances, and terms from your current creditors so we have an exact picture of what you owe.'
      },
      {
        title: '3. Comprehensive Eligibility Check',
        desc: 'We run deep dive eligibility check to analyse your official credit history (such as your AECB Report in the UAE), reviewing your recent bank statements, and evaluating your debt-to-burden ratio (DBR).'
      },
      {
        title: '4. Bank Policy Compatibility & Due Diligence',
        desc: 'We don\'t believe in guesswork. Our team performs strict due diligence, matching your financial profile against the lending criteria and risk policies of all major banks to find the highest probability of approval.'
      },
      {
        title: '5. Expert Approved Action Plan',
        desc: 'Finally, our team of seasoned financial experts designs a customized consolidation action plan. Once approved by our internal specialists, we execute the strategy to merge your debts and lower your financial stress.'
      }
    ]
  },
  {
    id: 'debt-settlement',
    title: 'Debt Settlement',
    tagline: 'Negotiation to settle debts via obtaining waiver of interest',
    desc: 'Debt settlement is a powerful negotiation strategy specifically designed for individuals & corporates facing severe financial hardship. When your accounts are caught under the pressure of imminent legal action, extreme financial distress, or intense collection agency harassment, we step in to negotiate directly with your creditors.',
    processTitle: 'Our Debt Settlement Process',
    steps: [
      {
        title: '1. Identifying "At-Risk" Debts',
        desc: 'We immediately review and isolate the debts currently under the scanner, facing collection agencies, or at risk of legal action and collections. Prioritizing these "fire-zone" accounts ensures we protect you from escalating legal consequences.'
      },
      {
        title: '2. Creditor Coordination & Verification',
        desc: 'We contact the concerned financial institutions directly to audit the current status of your debt file. This allows us to establish the exact, verified amount payable, stripping away unfair penalties or hidden fees.'
      },
      {
        title: '3. Aggressive Negotiation & Formal Offer',
        desc: 'Our experienced negotiators review to secure the maximum possible reduction on your outstanding balance. We don\'t stop until we secure a formal, written settlement offer from the bank or creditor confirming the reduced final settlement offer.'
      },
      {
        title: '4. Settlement & Final Clearance Letter',
        desc: 'Based the formal offer letter received, we proceed towards payment of the debt to settle and close the liability account. Once it is paid, we ensure the financial institution issues an official No Liability / Debt settlement letter. This vital document serves as your legal proof that the debt has been fully settled and closed forever.'
      }
    ]
  },
  {
    id: 'debt-restructuring',
    title: 'Debt Restructuring',
    tagline: 'Convert High Cost Debt into One Lower EMI with Longer Tenure',
    desc: 'Debt restructuring is a financial mechanism that alters the existing terms of your loans or credit facilities to make your repayments more manageable. If you are struggling to meet your monthly obligations but want to avoid default and pre-legal situations restructuring allows to renegotiate with creditors to extend the repayment duration with reduced monthly instalment to match your current financial debt paying capacity.',
    processTitle: 'Debt Restructuring Process',
    steps: [
      {
        title: '1. Immediate Expert Consultation',
        desc: 'Time is of the essence when managing financial strain. Book an immediate consultation with experienced financial advisors without delay so situation can be evaluated before missing any crucial payments.'
      },
      {
        title: '2. Comprehensive Financial Review',
        desc: 'We dive deep into your current financial reality. Our team conducts a thorough review of all your outstanding debts and liabilities, contrasted against your verified present income streams.'
      },
      {
        title: '3. Income-to-Debt Compatibility Check',
        desc: 'We analyze the math behind your money. By testing the compatibility between your total debt obligations and your actual net income, we calculate a realistic, sustainable monthly payment that covers your living expenses while matching creditors terms.'
      },
      {
        title: '4. In-House Strategy & Bank Negotiation',
        desc: 'After a robust in-house consultancy session to lock down your custom restructuring strategy, our expert financial consultants initiate formal discussions with your concerned financial institutions. We advocate on your behalf to negotiate to structure newly modified terms that fit your budget.'
      }
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
    <div className="flex-1 w-full bg-[#070F1E] pt-48 sm:pt-52 lg:pt-56 xl:pt-64 pb-20">
      <SEO
        title="Debt Solutions & Corporate Restructuring"
        description="Bespoke personal and corporate debt settlement, consolidation, and liability negotiations designed to restore financial equilibrium with absolute discretion."
        keywords="corporate debt restructuring, debt settlement, debt consolidation, debt counselling, liability negotiation, Dubai, UAE"
      />
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
                    <h3 className="text-2xl font-serif text-[#C5A059] font-medium tracking-wide mb-1">
                      {item.title}
                    </h3>
                    {item.tagline && (
                      <div className="text-[11px] font-mono text-[#E2C999] uppercase tracking-wider mb-4">
                        {item.tagline}
                      </div>
                    )}
                    <p className="text-xs sm:text-sm font-light text-[#FBF9F4]/70 leading-relaxed mb-8">
                      {item.desc}
                    </p>

                    <h4 className="text-[10px] font-bold text-[#FBF9F4] uppercase tracking-[0.2em] mb-6 flex items-center gap-2 border-b border-[#C5A059]/10 pb-2">
                      <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                      {item.processTitle || 'Core Advisory Specifications'}
                    </h4>
                    
                    <div className="space-y-6">
                      {item.steps?.map((step, idx) => {
                        const cleanedTitle = step.title.replace(/^(?:Step\s+\d+:\s*|\d+\.\s*)/i, '');
                        return (
                          <div key={idx} className="flex gap-4 items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center text-xs font-mono font-bold">
                              {idx + 1}
                            </span>
                            <div className="flex-1">
                              <h5 className="text-sm font-sans font-bold text-white mb-1">
                                {cleanedTitle}
                              </h5>
                              <div className="text-xs font-light text-[#FBF9F4]/60 leading-relaxed space-y-1.5">
                                {step.desc.split('\n').map((line, lIdx) => {
                                  const trimmed = line.trim();
                                  if (!trimmed) return null;

                                  const isNumberedSub = /^\d+\.\s+/.test(trimmed);
                                  const isAlphaSub = /^[a-z]\.\s+/.test(trimmed);
                                  const isBulletSub = /^[•\-]\s+/.test(trimmed);

                                  if (isNumberedSub) {
                                    const content = trimmed.replace(/^\d+\.\s+/, '');
                                    return (
                                      <div key={lIdx} className="pl-4 flex gap-2 text-[11px] text-[#FBF9F4]/50">
                                        <span className="text-[#C5A059] font-semibold">{trimmed.match(/^\d+\./)?.[0]}</span>
                                        <span>{content}</span>
                                      </div>
                                    );
                                  }

                                  if (isAlphaSub) {
                                    const content = trimmed.replace(/^[a-z]\.\s+/, '');
                                    return (
                                      <div key={lIdx} className="pl-8 flex gap-2 text-[11px] text-[#FBF9F4]/45">
                                        <span className="text-[#C5A059] font-medium">{trimmed.match(/^[a-z]\./)?.[0]}</span>
                                        <span>{content}</span>
                                      </div>
                                    );
                                  }

                                  if (isBulletSub) {
                                    const content = trimmed.replace(/^[•\-]\s+/, '');
                                    return (
                                      <div key={lIdx} className="pl-4 flex gap-2 text-[11px] text-[#FBF9F4]/50">
                                        <span className="text-[#C5A059]">•</span>
                                        <span>{content}</span>
                                      </div>
                                    );
                                  }

                                  return (
                                    <p key={lIdx}>
                                      {trimmed}
                                    </p>
                                  );
                                })}
                              </div>
                              {step.subpoints && (
                                <ul className="mt-2.5 pl-2 space-y-1.5 border-l border-[#C5A059]/10 ml-1">
                                  {step.subpoints.map((sub, sIdx) => (
                                    <li key={sIdx} className="flex gap-2 text-[11px] text-[#FBF9F4]/55 font-light">
                                      <span className="text-[#C5A059] max-sm:text-[#D4AF37] max-sm:px-2 font-sans">•</span>
                                      <span>{sub}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
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
