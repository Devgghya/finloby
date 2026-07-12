import { useState } from 'react';
import { Landmark, Calculator as CalcIcon, Percent, FileText, CheckCircle2 } from 'lucide-react';

export default function Calculator() {
  const [activeTab, setActiveTab] = useState<'loan' | 'debt-settlement' | 'setup' | 'consolidation'>('loan');

  // State for EMI / Loan Calculator
  const [loanAmount, setLoanAmount] = useState(150000);
  const [interestRate, setInterestRate] = useState(5.99);
  const [tenor, setTenor] = useState(48); // in months

  // State for Debt Settlement Estimator
  const [debtAmount, setDebtAmount] = useState(80000);

  // State for Business Setup Estimator
  const [setupType, setSetupType] = useState<'freezone' | 'mainland'>('freezone');
  const [emirate, setEmirate] = useState<'dubai' | 'abudhabi' | 'sharjah'>('dubai');

  // State for Consolidation Savings
  const [cardDebt, setCardDebt] = useState(50000);
  const [cardApr, setCardApr] = useState(36); // average UAE credit card rate
  const [consolidationRate, setConsolidationRate] = useState(7.99); // personal loan rate

  // Calculations
  // 1. EMI Calculation
  const r = (interestRate / 12) / 100;
  const emi = (loanAmount * r * Math.pow(1 + r, tenor)) / (Math.pow(1 + r, tenor) - 1);
  const totalPayment = emi * tenor;
  const totalInterest = totalPayment - loanAmount;

  // 2. Debt Settlement Estimation
  const estimatedSettlement = debtAmount * 0.45; // 55% average discount
  const legalProtectionSavings = debtAmount * 0.55;
  const monthlyRestructure = estimatedSettlement / 24; // over 24 months

  // 3. Business Setup Cost Estimator
  const getSetupCost = () => {
    let license = 12500;
    let registration = 4000;
    let localSponsor = 0;
    let officeQuota = 5500;

    if (setupType === 'mainland') {
      license = 18500;
      localSponsor = 8000;
      officeQuota = 8500;
    }
    if (emirate === 'abudhabi') license += 1000;
    if (emirate === 'sharjah') license -= 2000;

    return license + registration + localSponsor + officeQuota;
  };

  // 4. Consolidation Savings
  const monthlyCardInterest = (cardDebt * (cardApr / 100)) / 12;
  const monthlyLoanInterest = (cardDebt * (consolidationRate / 100)) / 12;
  const monthlySavings = monthlyCardInterest - monthlyLoanInterest;

  return (
    <div className="min-h-screen bg-[var(--bg-midnight)] text-[var(--text-ivory)] pt-48 sm:pt-52 lg:pt-56 xl:pt-64 pb-20 px-4 sm:px-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
          <span className="text-[10px] sm:text-xs font-bold text-[var(--brand-gold)] uppercase tracking-[0.25em] font-sans">
            Aesthetic Valuation Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white leading-tight">
            Institutional Calculators
          </h1>
          <div className="w-16 h-[2px] bg-[var(--brand-gold)] mx-auto mt-2" />
          <p className="text-xs sm:text-sm font-light leading-relaxed text-white/60 mt-2">
            Calculate your debt restructuring potential, commercial loan interest, company incorporation fees, and credit card consolidation savings below.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[var(--brand-gold)]/10 pb-4">
          <button
            onClick={() => setActiveTab('loan')}
            className={`px-5 py-3 text-xs uppercase tracking-wider font-semibold border rounded-sm transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              activeTab === 'loan'
                ? 'bg-[var(--brand-gold)] border-[var(--brand-gold)] text-[var(--text-contrast)] shadow-lg'
                : 'border-[var(--brand-gold)]/20 text-white hover:border-[var(--brand-gold)]/50'
            }`}
          >
            <Landmark className="w-4 h-4" />
            Commercial Loan EMI
          </button>
          <button
            onClick={() => setActiveTab('debt-settlement')}
            className={`px-5 py-3 text-xs uppercase tracking-wider font-semibold border rounded-sm transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              activeTab === 'debt-settlement'
                ? 'bg-[var(--brand-gold)] border-[var(--brand-gold)] text-[var(--text-contrast)] shadow-lg'
                : 'border-[var(--brand-gold)]/20 text-white hover:border-[var(--brand-gold)]/50'
            }`}
          >
            <FileText className="w-4 h-4" />
            Debt Settlement Estimate
          </button>
          <button
            onClick={() => setActiveTab('setup')}
            className={`px-5 py-3 text-xs uppercase tracking-wider font-semibold border rounded-sm transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              activeTab === 'setup'
                ? 'bg-[var(--brand-gold)] border-[var(--brand-gold)] text-[var(--text-contrast)] shadow-lg'
                : 'border-[var(--brand-gold)]/20 text-white hover:border-[var(--brand-gold)]/50'
            }`}
          >
            <CalcIcon className="w-4 h-4" />
            Business Setup Estimator
          </button>
          <button
            onClick={() => setActiveTab('consolidation')}
            className={`px-5 py-3 text-xs uppercase tracking-wider font-semibold border rounded-sm transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              activeTab === 'consolidation'
                ? 'bg-[var(--brand-gold)] border-[var(--brand-gold)] text-[var(--text-contrast)] shadow-lg'
                : 'border-[var(--brand-gold)]/20 text-white hover:border-[var(--brand-gold)]/50'
            }`}
          >
            <Percent className="w-4 h-4" />
            Consolidation Savings
          </button>
        </div>

        {/* Calculator Display Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 glass-luxury p-8 rounded-sm border border-[var(--brand-gold)]/10 bg-gold-glow flex flex-col gap-6">
            
            {activeTab === 'loan' && (
              <>
                <h3 className="text-lg font-serif text-white font-medium border-b border-[var(--brand-gold)]/10 pb-3 flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-[var(--brand-gold)]" />
                  Commercial Loan EMI Parameters
                </h3>
                
                {/* Loan Amount */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">Loan Amount (AED)</span>
                    <span className="font-semibold text-[var(--brand-gold)]">AED {loanAmount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="2000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-[var(--brand-gold)] h-1 rounded-sm bg-[var(--bg-midnight)]"
                  />
                </div>

                {/* Interest Rate */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">Interest Rate (Annual % Flat/Reducing)</span>
                    <span className="font-semibold text-[var(--brand-gold)]">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="24"
                    step="0.05"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-[var(--brand-gold)] h-1 rounded-sm bg-[var(--bg-midnight)]"
                  />
                </div>

                {/* Tenor */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">Tenor (Months)</span>
                    <span className="font-semibold text-[var(--brand-gold)]">{tenor} Months ({tenor / 12} Years)</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="84"
                    step="12"
                    value={tenor}
                    onChange={(e) => setTenor(Number(e.target.value))}
                    className="w-full accent-[var(--brand-gold)] h-1 rounded-sm bg-[var(--bg-midnight)]"
                  />
                </div>
              </>
            )}

            {activeTab === 'debt-settlement' && (
              <>
                <h3 className="text-lg font-serif text-white font-medium border-b border-[var(--brand-gold)]/10 pb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[var(--brand-gold)]" />
                  Liability Settlement Parameters
                </h3>
                
                {/* Outstanding Balance */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">Total Outstanding Liabilities (AED)</span>
                    <span className="font-semibold text-[var(--brand-gold)]">AED {debtAmount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="5000"
                    value={debtAmount}
                    onChange={(e) => setDebtAmount(Number(e.target.value))}
                    className="w-full accent-[var(--brand-gold)] h-1 rounded-sm bg-[var(--bg-midnight)]"
                  />
                </div>
                
                <p className="text-xs text-white/50 leading-relaxed font-light mt-2">
                  This calculator estimates savings based on legal restructuring averages and direct banking mediation negotiations conducted by Finloby managing partners in the UAE.
                </p>
              </>
            )}

            {activeTab === 'setup' && (
              <>
                <h3 className="text-lg font-serif text-white font-medium border-b border-[var(--brand-gold)]/10 pb-3 flex items-center gap-2">
                  <CalcIcon className="w-5 h-5 text-[var(--brand-gold)]" />
                  UAE Trade Incorporation Parameters
                </h3>

                {/* Setup Type */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/60">Jurisdiction Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setSetupType('freezone')}
                      className={`p-3 text-xs font-semibold uppercase tracking-wider rounded-sm border cursor-pointer ${
                        setupType === 'freezone'
                          ? 'border-[var(--brand-gold)] bg-[var(--brand-gold)]/10 text-white'
                          : 'border-white/10 text-white/60 hover:border-white/20'
                      }`}
                    >
                      Free Zone Setup
                    </button>
                    <button
                      onClick={() => setSetupType('mainland')}
                      className={`p-3 text-xs font-semibold uppercase tracking-wider rounded-sm border cursor-pointer ${
                        setupType === 'mainland'
                          ? 'border-[var(--brand-gold)] bg-[var(--brand-gold)]/10 text-white'
                          : 'border-white/10 text-white/60 hover:border-white/20'
                      }`}
                    >
                      Mainland LLC Setup
                    </button>
                  </div>
                </div>

                {/* Emirate Selection */}
                <div className="flex flex-col gap-2 mt-2">
                  <label className="text-xs text-white/60">Emirate of Registry</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['dubai', 'abudhabi', 'sharjah'].map((e) => (
                      <button
                        key={e}
                        onClick={() => setEmirate(e as any)}
                        className={`p-2.5 text-[10px] font-semibold uppercase tracking-wider rounded-sm border cursor-pointer ${
                          emirate === e
                            ? 'border-[var(--brand-gold)] bg-[var(--brand-gold)]/10 text-white'
                            : 'border-white/10 text-white/60 hover:border-white/20'
                        }`}
                      >
                        {e === 'abudhabi' ? 'Abu Dhabi' : e.charAt(0).toUpperCase() + e.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'consolidation' && (
              <>
                <h3 className="text-lg font-serif text-white font-medium border-b border-[var(--brand-gold)]/10 pb-3 flex items-center gap-2">
                  <Percent className="w-5 h-5 text-[var(--brand-gold)]" />
                  Credit Card Consolidation Savings
                </h3>
                
                {/* Total Credit Card Liabilities */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">Total High-Interest Debt (AED)</span>
                    <span className="font-semibold text-[var(--brand-gold)]">AED {cardDebt.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={cardDebt}
                    onChange={(e) => setCardDebt(Number(e.target.value))}
                    className="w-full accent-[var(--brand-gold)] h-1 rounded-sm bg-[var(--bg-midnight)]"
                  />
                </div>

                {/* Average Card APR */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">Credit Card Annual APR (%)</span>
                    <span className="font-semibold text-[var(--brand-gold)]">{cardApr}%</span>
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="48"
                    step="1"
                    value={cardApr}
                    onChange={(e) => setCardApr(Number(e.target.value))}
                    className="w-full accent-[var(--brand-gold)] h-1 rounded-sm bg-[var(--bg-midnight)]"
                  />
                </div>

                {/* Personal Loan Consolidated Interest Rate */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">Consolidated Loan Flat Rate (% p.a.)</span>
                    <span className="font-semibold text-[var(--brand-gold)]">{consolidationRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="15"
                    step="0.25"
                    value={consolidationRate}
                    onChange={(e) => setConsolidationRate(Number(e.target.value))}
                    className="w-full accent-[var(--brand-gold)] h-1 rounded-sm bg-[var(--bg-midnight)]"
                  />
                </div>
              </>
            )}

          </div>

          {/* Results Display Section */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Live Yield Summary Card */}
            <div className="bg-[var(--bg-slate-card)] border border-[var(--brand-gold)]/20 p-8 rounded-sm relative overflow-hidden flex flex-col gap-6">
              
              {/* Gold watermark crest background */}
              <div className="absolute right-[-20px] bottom-[-20px] text-[var(--brand-gold)]/5 pointer-events-none font-serif text-[180px] select-none font-bold leading-none">
                %
              </div>

              <div>
                <span className="text-[9px] font-bold text-[var(--brand-gold)] uppercase tracking-[0.2em] font-sans">
                  Calculated Output
                </span>
                <h4 className="text-white font-serif text-xl font-medium mt-1">Financial Yield Projection</h4>
              </div>

              {activeTab === 'loan' && (
                <div className="flex flex-col gap-5 relative z-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-white/50">Monthly Installment (EMI)</span>
                    <span className="text-3xl font-bold text-white mt-1">AED {emi.toFixed(2)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-[var(--brand-gold)]/10 pt-4">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-white/50">Total Interest Payable</span>
                      <span className="text-sm font-semibold text-[var(--brand-gold)]">AED {totalInterest.toFixed(0)}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-white/50">Total Principal + Interest</span>
                      <span className="text-sm font-semibold text-white">AED {totalPayment.toFixed(0)}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'debt-settlement' && (
                <div className="flex flex-col gap-5 relative z-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-white/50">Estimated Restructured Balance</span>
                    <span className="text-3xl font-bold text-[var(--brand-gold)] mt-1">AED {estimatedSettlement.toFixed(0)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-[var(--brand-gold)]/10 pt-4">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-white/50">Total Restructure Savings</span>
                      <span className="text-sm font-semibold text-white">AED {legalProtectionSavings.toFixed(0)}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-white/50">Approx. Installment (24 mo)</span>
                      <span className="text-sm font-semibold text-[var(--brand-gold-light)]">AED {monthlyRestructure.toFixed(0)}/mo</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'setup' && (
                <div className="flex flex-col gap-5 relative z-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-white/50">Estimated Incorporation Fee</span>
                    <span className="text-3xl font-bold text-white mt-1">AED {getSetupCost().toLocaleString()}</span>
                  </div>
                  <div className="border-t border-[var(--brand-gold)]/10 pt-4 flex flex-col gap-2 text-xs font-light text-white/60">
                    <div className="flex justify-between">
                      <span>Establishment Card & Visa Quotas</span>
                      <span className="text-[var(--brand-gold)]">Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Government & Local Registration</span>
                      <span className="text-[var(--brand-gold)]">Included</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'consolidation' && (
                <div className="flex flex-col gap-5 relative z-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-white/50">Monthly Interest Saved</span>
                    <span className="text-3xl font-bold text-[var(--brand-gold)] mt-1">AED {monthlySavings.toFixed(0)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-[var(--brand-gold)]/10 pt-4">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-white/50">Original Card Interest/mo</span>
                      <span className="text-sm font-semibold text-white/60 line-through">AED {monthlyCardInterest.toFixed(0)}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-wider text-white/50">New Loan Interest/mo</span>
                      <span className="text-sm font-semibold text-white">AED {monthlyLoanInterest.toFixed(0)}</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Direct Intake CTA Link */}
            <div className="bg-[#031C14] border border-[var(--brand-gold)]/10 p-6 rounded-sm flex flex-col gap-4 text-center">
              <p className="text-xs font-light text-white/70">
                These calculations are indicative estimates. Request a formal binding term sheet from our managing partners.
              </p>
              <a
                href="/#secure-intake"
                className="w-full bg-[var(--brand-gold)] hover:bg-[var(--brand-gold-light)] text-[var(--text-contrast)] font-bold text-xs uppercase tracking-widest py-3.5 rounded-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                Request Binding Term Sheet
                <CheckCircle2 className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
