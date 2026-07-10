import { useState, useEffect } from 'react';
import { Landmark, Briefcase, FileText, ChevronRight } from 'lucide-react';

const divisions = [
  {
    id: 'licensing',
    title: 'Licensing & Formation',
    desc: 'Establish your presence in the UAE market with our streamlined incorporation framework. We guide you through selecting jurisdictions and obtaining licenses.',
    items: [
      { name: 'Mainland LLC Setup', desc: 'Complete market integration without geographical limits. 100% foreign ownership allowed for commercial & industrial licenses.' },
      { name: 'Economic Zone Incorporation', desc: 'DIFC, DMCC, Meydan, and Shams options. Enjoy 100% tax exemptions, complete capital repatriation, and simplified customs.' }
    ]
  },
  {
    id: 'business-services',
    title: 'Corporate Secretariat Services',
    desc: 'All structural, legal, and operational documents handled by our senior paralegal staff to secure local compliance certificates.',
    items: [
      { name: 'Articles of Association (AOA) & MOA', desc: 'Bespoke corporate bylaws drafting and notarization matching modern legal benchmarks.' },
      { name: 'PRO & Sovereign Sponsorships', desc: 'Direct liaisons with UAE Immigration, Ministry of Human Resources, and Municipalities.' },
      { name: 'Office Procurement Solutions', desc: 'Sourcing of physical, virtual, or co-working space parameters matching regulatory requirements.' }
    ]
  },
  {
    id: 'banking-liaison',
    title: 'Corporate Banking Introductions',
    desc: 'Unlocking access to tier-1 commercial banking institutions. We resolve KYC complexities and structure secure asset controls.',
    items: [
      { name: 'Bank Account Openings', desc: 'Direct corporate manager introductions to ENBD, FAB, ADCB, and Mashreq.' },
      { name: 'Assignment of Authority & Signatory Codes', desc: 'Structuring corporate bylaws to match multi-jurisdictional compliance frameworks.' }
    ]
  }
];

export default function BusinessSetup() {
  const [activeDiv, setActiveDiv] = useState('licensing');
  
  // Cost Estimator State
  const [jurisdiction, setJurisdiction] = useState('Mainland');
  const [officeType, setOfficeType] = useState('Virtual');
  const [visasCount, setVisasCount] = useState(2);
  const [activityType, setActivityType] = useState('Commercial');
  const [bankingAssistance, setBankingAssistance] = useState(true);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const cleanHash = hash.replace('#', '');
      if (cleanHash.includes('setup') || cleanHash.includes('business') || cleanHash.includes('mainland') || cleanHash.includes('economic-zone') || cleanHash.includes('moa') || cleanHash.includes('aoa') || cleanHash.includes('open-bank') || cleanHash.includes('banking')) {
        if (cleanHash.includes('moa') || cleanHash.includes('aoa') || cleanHash.includes('pro') || cleanHash.includes('office') || cleanHash.includes('immigration')) {
          setActiveDiv('business-services');
        } else if (cleanHash.includes('bank') || cleanHash.includes('banking') || cleanHash.includes('authority')) {
          setActiveDiv('banking-liaison');
        } else {
          setActiveDiv('licensing');
        }
        const element = document.getElementById('setup-directory');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, []);

  // UAE Incorporation Cost Estimates
  // Licensing
  const licenseBase = jurisdiction === 'Mainland' ? 18500 : 12500;
  const activityPremium = activityType === 'Commercial' ? 2000 : activityType === 'Industrial' ? 8000 : 0;
  const licenseCost = licenseBase + activityPremium;
  
  // Office rent
  const officeCost = officeType === 'Virtual' 
    ? 3500 
    : officeType === 'Dedicated' 
      ? 12000 
      : 35000;
  
  // Visa fees (AED 3,800/visa)
  const visaCost = visasCount * 3800;
  
  // Banking assistance and PRO files
  const bankingCost = bankingAssistance ? 5000 : 0;
  const proManagementCost = 7500; // Flat agency fee

  const subTotal = licenseCost + officeCost + visaCost + bankingCost + proManagementCost;
  const VAT = subTotal * 0.05; // 5% UAE VAT
  const aggregateTotal = subTotal + VAT;

  return (
    <div className="flex-1 w-full bg-[#070F1E] pt-44 sm:pt-48 lg:pt-52 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/25 bg-[#0D1625]/85 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E2C999]">
              Pillar III
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FBF9F4] leading-tight">
            International Business Setup & <br />
            <span className="text-gradient-gold italic">Corporate Architecture</span>
          </h1>
          <p className="text-sm sm:text-base font-light text-[#FBF9F4]/60 max-w-2xl leading-relaxed mt-2">
            Seamless mainland and economic zone company formation, corporate documentation drafts, legal certifications, and premier commercial banking onboarding in the UAE.
          </p>
        </div>

        {/* Dynamic Division Panels */}
        <div id="setup-directory" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Tab selector */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em] mb-4 pl-2">
              Corporate Architectures
            </div>
            {divisions.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveDiv(item.id)}
                className={`w-full text-left p-5 transition-all duration-300 rounded-sm border flex items-center justify-between cursor-pointer group ${
                  activeDiv === item.id 
                    ? 'bg-[#0D1625] border-[#C5A059] text-[#FBF9F4]' 
                    : 'bg-[#050B15]/40 border-slate-900 text-[#FBF9F4]/50 hover:bg-[#0D1625]/50 hover:border-[#C5A059]/30 hover:text-[#FBF9F4]'
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-[#C5A059]">Division Segment</span>
                  <span className="text-sm font-semibold tracking-wide font-sans">{item.title}</span>
                </div>
                <ChevronRight className={`w-4 h-4 text-[#C5A059] transition-transform duration-300 ${
                  activeDiv === item.id ? 'rotate-90' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`} />
              </button>
            ))}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-8 bg-[#0D1625] border border-slate-800 p-8 sm:p-10 rounded-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#9A7B3E] via-[#C5A059] to-[#E2C999]"></div>
            
            {divisions.map((item) => {
              if (item.id !== activeDiv) return null;
              return (
                <div key={item.id} className="animate-fade-in flex flex-col justify-between h-full gap-8">
                  <div>
                    <h3 className="text-2xl font-sans font-bold text-[#C5A059] tracking-wide mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-[#FBF9F4]/60 leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      {item.items.map((sub, idx) => (
                        <div key={idx} className="bg-[#070F1E]/50 border border-slate-850 p-5 rounded-sm hover:border-[#C5A059]/20 transition-all duration-300">
                          <h4 className="text-xs uppercase tracking-wider font-semibold text-[#E2C999] mb-1.5 flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-[#C5A059]" />
                            {sub.name}
                          </h4>
                          <p className="text-xs font-light text-[#FBF9F4]/60 leading-relaxed">
                            {sub.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[#C5A059]/10 pt-8 mt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#070F1E] border border-[#C5A059]/25 rounded-full text-[#C5A059]">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <div className="text-[10px] font-light text-[#FBF9F4]/40 max-w-[280px]">
                        Corporate registry file updates and ministry liaison support included in basic retainers.
                      </div>
                    </div>
                    <a
                      href="/#secure-intake"
                      className="px-8 py-3.5 bg-[#C5A059] text-[#070F1E] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#E2C999] transition-all rounded-sm font-sans"
                    >
                      Establish Firm
                    </a>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* UAE Company Setup Cost Estimator */}
        <div className="bg-[#0D1625] border border-[#C5A059]/20 p-8 sm:p-10 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C5A059]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#C5A059]/10 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#070F1E] border border-[#C5A059]/20 rounded-sm">
                <FileText className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h3 className="text-xl font-sans font-bold text-[#FBF9F4] tracking-wide">
                  UAE Corporate Setup Cost Estimator
                </h3>
                <p className="text-xs text-[#FBF9F4]/40 font-light mt-0.5">
                  Simulate license procurement, office rental quotas, visa registries, and corporate banking coordination.
                </p>
              </div>
            </div>
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A059] border border-[#C5A059]/20 px-3 py-1 bg-[#070F1E]">
              Jurisdiction Cost Matrix
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Input fields */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Jurisdiction */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="est-jurisdiction" className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Sovereign Jurisdiction
                  </label>
                  <select 
                    id="est-jurisdiction"
                    value={jurisdiction}
                    onChange={(e) => setJurisdiction(e.target.value)}
                    className="bg-[#070F1E] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3.5 px-3 rounded-sm focus:outline-none focus:border-[#C5A059] appearance-none cursor-pointer"
                  >
                    <option value="Mainland" className="bg-[#0D1625] text-[#FBF9F4]">Mainland LLC (Standard LLC)</option>
                    <option value="Freezone" className="bg-[#0D1625] text-[#FBF9F4]">Economic Zone (DIFC / Meydan / Shams)</option>
                  </select>
                </div>

                {/* Activity Class */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="est-activity" className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Business Activity Class
                  </label>
                  <select 
                    id="est-activity"
                    value={activityType}
                    onChange={(e) => setActivityType(e.target.value)}
                    className="bg-[#070F1E] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3.5 px-3 rounded-sm focus:outline-none focus:border-[#C5A059] appearance-none cursor-pointer"
                  >
                    <option value="Professional" className="bg-[#0D1625] text-[#FBF9F4]">Professional (Service-based)</option>
                    <option value="Commercial" className="bg-[#0D1625] text-[#FBF9F4]">Commercial (Trading / Logistics)</option>
                    <option value="Industrial" className="bg-[#0D1625] text-[#FBF9F4]">Industrial (Manufacturing / Heavy)</option>
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Office type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="est-office" className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Office Setup Quota
                  </label>
                  <select 
                    id="est-office"
                    value={officeType}
                    onChange={(e) => setOfficeType(e.target.value)}
                    className="bg-[#070F1E] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3.5 px-3 rounded-sm focus:outline-none focus:border-[#C5A059] appearance-none cursor-pointer"
                  >
                    <option value="Virtual" className="bg-[#0D1625] text-[#FBF9F4]">Flexi-desk / Virtual Office</option>
                    <option value="Dedicated" className="bg-[#0D1625] text-[#FBF9F4]">Co-working Dedicated Space</option>
                    <option value="Physical" className="bg-[#0D1625] text-[#FBF9F4]">Dedicated Physical Office LLC</option>
                  </select>
                </div>

                {/* Visa Quotas */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <div className="flex justify-between items-center text-xs">
                    <label htmlFor="est-visas" className="font-semibold uppercase tracking-wider text-[#C5A059]">
                      Employment Visa Quota
                    </label>
                    <span className="font-mono text-[#FBF9F4] font-semibold">
                      {visasCount} Visas
                    </span>
                  </div>
                  <input 
                    type="range" 
                    id="est-visas"
                    min="0"
                    max="15"
                    step="1"
                    value={visasCount}
                    onChange={(e) => setVisasCount(Number(e.target.value))}
                    className="w-full accent-[#C5A059] bg-[#070F1E] h-1.5 rounded-sm appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-[#FBF9F4]/30 font-mono">
                    <span>0 Visas</span>
                    <span>7 Visas</span>
                    <span>15 Visas</span>
                  </div>
                </div>

              </div>

              {/* Corporate Banking checkbox */}
              <div className="flex items-center gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="est-banking" 
                  checked={bankingAssistance}
                  onChange={(e) => setBankingAssistance(e.target.checked)}
                  className="rounded-sm accent-[#C5A059] w-4 h-4 cursor-pointer"
                />
                <label htmlFor="est-banking" className="text-xs text-[#FBF9F4]/70 font-light cursor-pointer">
                  Require Dedicated Corporate Bank Onboarding Support (+AED 5,000)
                </label>
              </div>

            </div>

            {/* Calculations results */}
            <div className="lg:col-span-5 bg-[#070F1E]/80 border border-[#C5A059]/15 p-6 rounded-sm flex flex-col justify-between">
              <div>
                <h4 className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em] border-b border-[#C5A059]/15 pb-2 mb-6">
                  Estimate Breakdown
                </h4>
                
                <div className="space-y-3.5 text-xs">
                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-2.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">License Fee:</span>
                    <span className="font-mono text-[#FBF9F4]">AED {licenseCost.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-2.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Office Rental Cost (Annual):</span>
                    <span className="font-mono text-[#FBF9F4]">AED {officeCost.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-2.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Visa Registration Fees:</span>
                    <span className="font-mono text-[#FBF9F4]">AED {visaCost.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-2.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">PRO Legal Handling:</span>
                    <span className="font-mono text-[#FBF9F4]">AED {proManagementCost.toLocaleString()}</span>
                  </div>

                  {bankingAssistance && (
                    <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-2.5">
                      <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Banking Liaison Officer:</span>
                      <span className="font-mono text-[#FBF9F4]">AED {bankingCost.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-2.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Sovereign UAE VAT (5%):</span>
                    <span className="font-mono text-[#FBF9F4]">AED {Math.round(VAT).toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">Estimated Grand Total:</span>
                    <span className="text-base font-mono font-bold text-[#FBF9F4]">AED {Math.round(aggregateTotal).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#C5A059]/10">
                <a
                  href="/#secure-intake"
                  className="w-full block text-center bg-[#C5A059] hover:bg-[#E2C999] text-[#070F1E] py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all rounded-sm duration-300"
                >
                  Initiate Setup Protocol
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
