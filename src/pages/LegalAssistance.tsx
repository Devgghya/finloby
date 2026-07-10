import { useState, useEffect } from 'react';
import { Gavel, ArrowRight, ClipboardCheck, Scale } from 'lucide-react';

const categories = [
  {
    id: 'banking-collections',
    title: 'Banking Collections Negotiations',
    desc: 'Mediation structures to handle aggressive recovery agents and establish secure settlement files directly with the bank\'s core legal department.',
    points: [
      'Cessation of collection agency harassments.',
      'Amortized loan structuring for defaulted credit cards.',
      'Waiver of criminal claim filings.',
      'Official settlement letters directly from banking directors.'
    ]
  },
  {
    id: 'legal-defense',
    title: 'Police & Court Case Clearance',
    desc: 'Defense coordinate matching local court procedures. We clear travel bans, remove arrest files, and defend client positions in UAE civil and criminal courts.',
    points: [
      'Liaison with local police stations to clear check bounce files.',
      'Travel ban status checks and lift processing.',
      'Civil lawsuit defense files prepared by licensed Arabic advocates.',
      'Bail filings and emergency representation.'
    ]
  },
  {
    id: 'skip-assistance',
    title: 'Cross-Border Skip Solutions',
    desc: 'Secure asset coordination for clients residing outside the UAE. Settle files remotely and secure full clearances with absolute safety.',
    points: [
      'Remote bank account settlements through corporate power of attorney.',
      'Securing full police clearances without entering the jurisdiction.',
      'Resolving active immigration files and airport block listings.',
      'Comprehensive border clearance documentation delivery.'
    ]
  }
];

export default function LegalAssistance() {
  const [activeTab, setActiveTab] = useState('banking-collections');
  
  // Interactive Questionnaire States
  const [caseType, setCaseType] = useState('Default');
  const [totalLiability, setTotalLiability] = useState(350000);
  const [defaultDuration, setDefaultDuration] = useState(6); // months
  const [hasTravelBan, setHasTravelBan] = useState(false);
  const [evaluationDone, setEvaluationDone] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const cleanHash = hash.replace('#', '');
      if (cleanHash.includes('legal') || cleanHash.includes('police') || cleanHash.includes('court') || cleanHash.includes('skip-solutions-crossborder') || cleanHash.includes('restructuring') || cleanHash.includes('negotiations') || cleanHash.includes('settlement')) {
        if (cleanHash.includes('police') || cleanHash.includes('court') || cleanHash.includes('ban')) {
          setActiveTab('legal-defense');
        } else if (cleanHash.includes('skip') || cleanHash.includes('crossborder')) {
          setActiveTab('skip-assistance');
        } else {
          setActiveTab('banking-collections');
        }
        const element = document.getElementById('legal-directory');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, []);

  // Evaluation calculations
  const calculateRisk = () => {
    let score = 0;
    if (totalLiability > 500000) score += 40;
    else if (totalLiability > 150000) score += 20;
    
    if (defaultDuration > 12) score += 30;
    else if (defaultDuration > 4) score += 15;

    if (hasTravelBan) score += 30;

    let riskLevel = 'Low';
    let probability = 95;
    
    if (score > 70) {
      riskLevel = 'Critical / Action Required';
      probability = 72;
    } else if (score > 35) {
      riskLevel = 'Medium Risk';
      probability = 86;
    }

    return { riskLevel, probability };
  };

  const { riskLevel, probability } = calculateRisk();

  return (
    <div className="flex-1 w-full bg-[#070F1E] pt-44 sm:pt-48 lg:pt-52 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/25 bg-[#0D1625]/85 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E2C999]">
              Pillar V
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FBF9F4] leading-tight">
            Cross-Border Legal Support & <br />
            <span className="text-gradient-gold italic">Liability Settlement</span>
          </h1>
          <p className="text-sm sm:text-base font-light text-[#FBF9F4]/60 max-w-2xl leading-relaxed mt-2">
            Strategic legal representation to insulate assets, clear criminal/civil check files, resolve active travel bans, and coordinates skip settlement files in the UAE.
          </p>
        </div>

        {/* Categories / Tabs Directory */}
        <div id="legal-directory" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Tab selector */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em] mb-4 pl-2">
              Legal Channels
            </div>
            {categories.map((item) => (
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
                  <span className="text-[10px] font-mono text-[#C5A059]">Defense Category</span>
                  <span className="text-sm font-semibold tracking-wide font-sans">{item.title}</span>
                </div>
                <ArrowRight className={`w-4 h-4 text-[#C5A059] transition-transform duration-300 ${
                  activeTab === item.id ? 'translate-x-1' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`} />
              </button>
            ))}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-8 bg-[#0D1625] border border-slate-800 p-8 sm:p-10 rounded-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#9A7B3E] via-[#C5A059] to-[#E2C999]"></div>
            
            {categories.map((item) => {
              if (item.id !== activeTab) return null;
              return (
                <div key={item.id} className="animate-fade-in flex flex-col justify-between h-full gap-8">
                  <div>
                    <h3 className="text-2xl font-serif text-[#C5A059] font-medium tracking-wide mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-[#FBF9F4]/60 leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <h4 className="text-[10px] font-bold text-[#FBF9F4] uppercase tracking-[0.2em] mb-4 flex items-center gap-2 border-b border-[#C5A059]/10 pb-2">
                      <Scale className="w-4 h-4 text-[#C5A059]" />
                      Advisory Framework Scope
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.points.map((pt, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-[#FBF9F4]/60 font-light">
                          <span className="text-[#C5A059] max-sm:text-[#D4AF37] max-sm:px-2 font-sans text-[10px] mt-0.5">◆</span>
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-[#C5A059]/10 pt-8 mt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#070F1E] border border-[#C5A059]/25 rounded-full text-[#C5A059]">
                        <Gavel className="w-4 h-4" />
                      </div>
                      <div className="text-[10px] font-light text-[#FBF9F4]/40 max-w-[280px]">
                        Mediation coordinates are strictly conducted under attorney oversight parameters.
                      </div>
                    </div>
                    <a
                      href="/#secure-intake"
                      className="px-8 py-3.5 bg-[#C5A059] text-[#070F1E] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#E2C999] transition-all rounded-sm font-sans"
                    >
                      Request Legal Audit
                    </a>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Case Assessment Check Questionnaire */}
        <div className="bg-[#0D1625] border border-[#C5A059]/20 p-8 sm:p-10 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C5A059]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#C5A059]/10 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#070F1E] border border-[#C5A059]/20 rounded-sm">
                <ClipboardCheck className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#FBF9F4] font-medium tracking-wide">
                  UAE Case Risk & Mitigation Evaluation Tool
                </h3>
                <p className="text-xs text-[#FBF9F4]/40 font-light mt-0.5">
                  Check your estimated risk factor and resolution probability code based on standard UAE banking recovery files.
                </p>
              </div>
            </div>
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A059] border border-[#C5A059]/20 px-3 py-1 bg-[#070F1E]">
              Evaluation Algorithm v1.2
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Input columns */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Case Type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="case-type" className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Claim File Category
                  </label>
                  <select 
                    id="case-type"
                    value={caseType}
                    onChange={(e) => {
                      setCaseType(e.target.value);
                      setEvaluationDone(false);
                    }}
                    className="bg-[#070F1E] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3.5 px-3 rounded-sm focus:outline-none focus:border-[#C5A059] appearance-none cursor-pointer"
                  >
                    <option value="CCDefault" className="bg-[#0D1625] text-[#FBF9F4]">Credit Card Default File</option>
                    <option value="LoanDefault" className="bg-[#0D1625] text-[#FBF9F4]">Personal/Business Loan Default</option>
                    <option value="PoliceCase" className="bg-[#0D1625] text-[#FBF9F4]">Police check case or Civil lawsuit</option>
                    <option value="CompanyDispute" className="bg-[#0D1625] text-[#FBF9F4]">Corporate shareholder dispute</option>
                  </select>
                </div>

                {/* Liability Input */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs">
                    <label htmlFor="case-liability" className="font-semibold uppercase tracking-wider text-[#C5A059]">
                      Total Claim Balance
                    </label>
                    <span className="font-mono text-[#FBF9F4] font-semibold text-sm">
                      AED {totalLiability.toLocaleString()}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    id="case-liability"
                    min="25000"
                    max="3000000"
                    step="25000"
                    value={totalLiability}
                    onChange={(e) => {
                      setTotalLiability(Number(e.target.value));
                      setEvaluationDone(false);
                    }}
                    className="w-full accent-[#C5A059] bg-[#070F1E] h-1.5 rounded-sm appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-[#FBF9F4]/30 font-mono">
                    <span>AED 25K</span>
                    <span>AED 1.5M</span>
                    <span>AED 3M+</span>
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Default Duration */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs">
                    <label htmlFor="case-duration" className="font-semibold uppercase tracking-wider text-[#C5A059]">
                      Default Duration
                    </label>
                    <span className="font-mono text-[#FBF9F4] font-semibold">
                      {defaultDuration} Months
                    </span>
                  </div>
                  <input 
                    type="range" 
                    id="case-duration"
                    min="1"
                    max="36"
                    step="1"
                    value={defaultDuration}
                    onChange={(e) => {
                      setDefaultDuration(Number(e.target.value));
                      setEvaluationDone(false);
                    }}
                    className="w-full accent-[#C5A059] bg-[#070F1E] h-1.5 rounded-sm appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-[#FBF9F4]/30 font-mono">
                    <span>1 mo</span>
                    <span>36 mos</span>
                  </div>
                </div>

                {/* Travel Ban Toggle */}
                <div className="flex flex-col gap-2 justify-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Travel Ban / Police Block
                  </span>
                  <div className="flex gap-4 mt-1.5">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-[#FBF9F4]/80">
                      <input 
                        type="radio" 
                        name="travelBan" 
                        checked={hasTravelBan} 
                        onChange={() => {
                          setHasTravelBan(true);
                          setEvaluationDone(false);
                        }} 
                        className="accent-[#C5A059]"
                      />
                      Active / Suspected
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-[#FBF9F4]/80">
                      <input 
                        type="radio" 
                        name="travelBan" 
                        checked={!hasTravelBan} 
                        onChange={() => {
                          setHasTravelBan(false);
                          setEvaluationDone(false);
                        }} 
                        className="accent-[#C5A059]"
                      />
                      None
                    </label>
                  </div>
                </div>

              </div>

            </div>

            {/* Calculations results */}
            <div className="lg:col-span-5 bg-[#070F1E]/80 border border-[#C5A059]/15 p-6 rounded-sm flex flex-col justify-between">
              <div>
                <h4 className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em] border-b border-[#C5A059]/15 pb-2 mb-4">
                  Assessment Report
                </h4>
                
                {!evaluationDone ? (
                  <div className="py-8 text-center">
                    <p className="text-xs text-[#FBF9F4]/50 font-light mb-4">
                      Submit questionnaire payload to generate diagnostic risk telemetry.
                    </p>
                    <button
                      type="button"
                      onClick={() => setEvaluationDone(true)}
                      className="px-6 py-2.5 bg-[#C5A059] hover:bg-[#E2C999] text-[#070F1E] text-[10px] font-semibold uppercase tracking-widest rounded-sm transition-all cursor-pointer"
                    >
                      Run Diagnostic
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-2.5">
                      <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Risk Severity Level:</span>
                      <span className={`text-xs font-semibold uppercase tracking-wider font-sans ${riskLevel.includes('Critical') ? 'text-rose-500' : riskLevel.includes('Medium') ? 'text-amber-500' : 'text-emerald-500'}`}>
                        {riskLevel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-2.5">
                      <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Mitigation Probability:</span>
                      <span className="text-base font-mono font-semibold text-emerald-500">
                        {probability}%
                      </span>
                    </div>

                    <div className="p-3 bg-[#070F1E] border-l-2 border-[#C5A059] text-[10px] text-[#FBF9F4]/60 font-light leading-relaxed">
                      <strong>Recommended Protocol: </strong>
                      {riskLevel.includes('Critical') 
                        ? 'Initiate direct skip-settlement negotiations and emergency travel ban cancellation briefs. Secure legal coordinates immediately.' 
                        : 'Structure unified debt restructuring proposal to banking lenders. Standard case clearance timeline estimated at 45 days.'}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-4 border-t border-[#C5A059]/10">
                <a
                  href="/#secure-intake"
                  className="w-full block text-center bg-[#C5A059] hover:bg-[#E2C999] text-[#070F1E] py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all rounded-sm duration-300"
                >
                  Authorize Representation
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
