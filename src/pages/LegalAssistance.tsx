import { useState, useEffect } from 'react';
import { Gavel, ArrowRight, ClipboardCheck, Scale, Users, Building2 } from 'lucide-react';
import SEO from '../components/SEO';

interface LegalStep {
  title: string;
  desc: string;
}

interface LegalCategory {
  id: string;
  title: string;
  desc: string;
  steps: LegalStep[];
}

const individualCategories: LegalCategory[] = [
  {
    id: 'banking-collections',
    title: 'Bank Collection',
    desc: 'When facing debt or financial strain in the UAE, navigating banking policies and legal systems can be overwhelming. As an experienced financial and management consultancy, we act as your strategic partner and advisor at every stage of the debt cycle, ensuring your interests are protected while working toward a viable resolution.',
    steps: [
      {
        title: '1. The Early Stage: Internal Bank Buckets',
        desc: 'Banks track missed payments using a "bucket system" based on Days Past Due (DPD) (e.g., Bucket 1 for 1-30 days, Bucket 2 for 31-60 days, etc.).\nHow We Assist: We analyze your cash flow immediately to help you submit realistic payment proposals or cure the default before the account escalates.'
      },
      {
        title: '2. The Collection Stage',
        desc: 'Once an account slips into later buckets, it is handed over to internal or external collection agencies. This stage often involves intense communication and pressure.\nHow We Assist: We step in as your representative, managing communications with collectors, assessing your actual financial capacity, and shielding you from undue harassment.'
      },
      {
        title: '3. The Pre-Legal Stage & Demand Notices',
        desc: 'If defaults persist, the bank\'s legal department issues an official Pre-Legal Notice or Demand Letter, signaling their intent to initiate formal legal proceedings.\nHow We Assist: This is a critical window. We evaluate the legal notice, prepare formal responses, and initiate urgent negotiations with the bank to halt legal escalation.'
      },
      {
        title: 'Restructuring & Settlement (The Turning Point)',
        desc: 'Even during severe default, banks prefer recovery over litigation. Clients typically have two strategic options:\nRestructuring: Rescheduling the debt into a new, extended loan term with lower, manageable monthly EMIs.\nSettlement: Negotiating a lump-sum, discounted payout to close the liability permanently.\nHow We Assist: We build a strong proposal , negotiate directly with high level bank decision-makers, and secure the most favorable restructuring terms or maximum settlement waivers.'
      }
    ]
  },
  {
    id: 'legal-defense',
    title: 'Legal Support',
    desc: 'Facing financial strain in the UAE requires a highly strategic approach to banking policies and local laws. Our consultancy acts as your expert partner throughout the debt cycle, safeguarding your interests and delivering structured, legally sound negotiation strategies to resolve your liabilities.',
    steps: [
      {
        title: 'Police Case Clearance Support',
        desc: 'If no resolution is reached, the bank will initiate formal legal actions, which may include filing a police complaint (for bounced security cheques) or a civil/commercial court case.\nHow We Assist: We guide you through the legal maze, helping you understand travel bans, arrest warrants, and asset attachments, while preparing your financial documentation for legal defense.'
      },
      {
        title: 'Legal Escalation: The Al Nyaba (Public Prosecution) Division',
        desc: 'In the UAE, the Al Nyaba (Public Prosecution) handles the criminal aspect of financial disputes, such as severe cheque bounce cases or fraud allegations, before they reach the judge.\nHow We Assist: We assist you during the Nyaba phase by coordinating with legal experts, exploring options to pay fines instead of serving jail time, and presenting settlement agreements to the prosecutor to get the criminal case dismissed or suspended.'
      }
    ]
  },
  {
    id: 'skip-assistance',
    title: 'Cross-Border Skip Solutions',
    desc: 'Secure asset coordination for clients residing outside the UAE. Settle files remotely and secure full clearances with absolute safety.',
    steps: [
      {
        title: 'Remote Settlement - How We Assist',
        desc: 'Remote bank account settlements through corporate power of attorney.'
      },
      {
        title: 'Police Clearance - How We Assist',
        desc: 'Securing full police clearances without entering the jurisdiction.'
      },
      {
        title: 'Immigration & Border Listing - How We Assist',
        desc: 'Resolving active immigration files and airport block listings.'
      },
      {
        title: 'Documentation Delivery - How We Assist',
        desc: 'Comprehensive border clearance documentation delivery.'
      }
    ]
  }
];

const corporateCategories: LegalCategory[] = [
  {
    id: 'banking-collections',
    title: 'Corporate Bank Collection',
    desc: 'For corporate entities, commercial defaults and debt recovery actions can halt operations, freeze accounts, and trigger trade license blocks. We represent LLCs, Partnerships, and Free Zone entities in restructuring commercial lines, overdrafts, and trade finance facilities.',
    steps: [
      {
        title: '1. Commercial Debt Assessment - How We Assist',
        desc: 'Analyzing corporate balance sheets, debt-service coverage ratio (DSCR), and trade facility utilization to understand the business\'s actual debt capacity.'
      },
      {
        title: '2. Corporate Collection Mediation - How We Assist',
        desc: 'Negotiating with multiple lending banks or syndicates. We manage collections pressure, preventing aggressive enforcement from disrupting operational cash flow.'
      },
      {
        title: '3. Commercial Legal Escalation & Demand Notice Defense - How We Assist',
        desc: 'Defending against corporate demand letters, insolvency filings, and performance bond enforcements. We prepare corporate responses to buy time for strategic restructuring.'
      },
      {
        title: 'Corporate Debt Restructuring & Syndicated Workouts - How We Assist',
        desc: 'Restructuring commercial loans, LCs, and OD facilities into long-term syndicated workouts. We coordinate directly with head office recovery departments to adjust repayment tenures and lower interest spreads over EIBOR.'
      }
    ]
  },
  {
    id: 'legal-defense',
    title: 'Corporate Legal Support',
    desc: 'Protecting corporate entities from legal liabilities, shareholder attachment orders, and trade license restrictions in civil and commercial courts.',
    steps: [
      {
        title: 'Civil & Commercial Court Case Defense - How We Assist',
        desc: 'Representing the corporate entity in commercial court disputes, contractual breaches, and financial default lawsuits. We help draft solid legal defenses via local advocates to protect company assets from attachment.'
      },
      {
        title: 'Executive & Shareholder Liability Protection - How We Assist',
        desc: 'Shielding the personal assets and immigration status of managers, directors, and shareholders from corporate liability. We ensure corporate structures (LLCs/Free Zones) are leveraged to maintain limited liability status.'
      }
    ]
  },
  {
    id: 'skip-assistance',
    title: 'Corporate Cross-Border Solutions',
    desc: 'Managing cross-border defaults, overseas subsidiary protection, and international commercial arbitration for companies operating across multiple jurisdictions.',
    steps: [
      {
        title: 'Subsidiary Isolation - How We Assist',
        desc: 'Structuring cross-border asset shields to prevent local corporate defaults from affecting overseas parent or subsidiary entities.'
      },
      {
        title: 'International Debt Arbitration - How We Assist',
        desc: 'Representing foreign corporate shareholders in formal restructuring and settlement negotiations with regional Middle Eastern lenders.'
      },
      {
        title: 'Immigration & Travel Ban Resolution for Promoters - How We Assist',
        desc: 'Coordinating with local legal partners to resolve active immigration blocks or travel bans placed on international promoters and board members.'
      }
    ]
  }
];

export default function LegalAssistance() {
  const [activeDivision, setActiveDivision] = useState<'individual' | 'corporate'>('individual');
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

  const categories = activeDivision === 'individual' ? individualCategories : corporateCategories;

  return (
    <div className="flex-1 w-full bg-[#070F1E] pt-48 sm:pt-52 lg:pt-56 xl:pt-64 pb-20">
      <SEO
        title="Cross-Border Legal Support & Police Clearance"
        description="Strategic defense against financial liabilities, police case clearance assistance, court representation coordinates, and cross-border skip settlement support."
        keywords="cross-border legal support, police case clearance, travel ban clearance UAE, financial liability defense, skip settlement, legal negotiation, Dubai, UAE"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/25 bg-[#0D1625]/85 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E2C999]">
              Pillar V
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FBF9F4] leading-tight">
            Banking Collection & <br />
            <span className="text-gradient-gold italic">Legal Support</span>
          </h1>
          <p className="text-sm sm:text-base font-light text-[#FBF9F4]/60 max-w-2xl leading-relaxed mt-2">
            Strategic legal representation to insulate assets, clear criminal/civil check files, resolve active travel bans, and coordinates skip settlement files in the UAE.
          </p>
        </div>

        {/* Division Selector (Individual vs Corporate) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-[#0D1625] border border-[#C5A059]/10 rounded-sm">
            <button
              onClick={() => setActiveDivision('individual')}
              className={`flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer ${
                activeDivision === 'individual'
                  ? 'bg-[#C5A059] text-[#070F1E]'
                  : 'text-[#FBF9F4]/50 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              Individual Services
            </button>
            <button
              onClick={() => setActiveDivision('corporate')}
              className={`flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer ${
                activeDivision === 'corporate'
                  ? 'bg-[#C5A059] text-[#070F1E]'
                  : 'text-[#FBF9F4]/50 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Corporate Services
            </button>
          </div>
        </div>

        {/* Categories / Tabs Directory */}
        <div id="legal-directory" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Tab selector */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em] mb-4 pl-2">
              Legal Channels ({activeDivision === 'individual' ? 'Individual' : 'Corporate'})
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

                    {item.steps && (
                      <div className="space-y-4 pl-4 border-l border-[#C5A059]/10 mt-6 text-left">
                        {(() => {
                          let lastPhase = '';
                          let stepIdxInPhase = 0;
                          
                          return item.steps.map((step, sIdx) => {
                            const parts = step.title.split(/\s+[-–—]\s+/);
                            let phaseHeader = null;
                            let displayTitle = step.title;
                            
                            if (parts.length > 1) {
                              const phaseName = parts[0].trim();
                              displayTitle = parts.slice(1).join(' - ').trim();
                              
                              if (phaseName !== lastPhase) {
                                lastPhase = phaseName;
                                stepIdxInPhase = 0;
                                phaseHeader = (
                                  <div className="text-[10px] font-sans font-bold text-[#E2C999] uppercase tracking-[0.15em] mt-6 mb-3 first:mt-0 border-b border-[#C5A059]/10 pb-1.5">
                                    {phaseName}
                                  </div>
                                );
                              }
                            }
                            
                            stepIdxInPhase++;
                            const cleanedTitle = displayTitle.replace(/^(?:Step\s+\d+:\s*|\d+\.\s*)/i, '');
                            const lines = step.desc.split('\n');
                            
                            return (
                              <div key={sIdx} className="space-y-2">
                                {phaseHeader}
                                <div className="flex gap-3 items-start pl-1">
                                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/25 text-[#C5A059] flex items-center justify-center text-[9px] font-mono font-bold mt-0.5">
                                    {parts.length > 1 ? stepIdxInPhase : sIdx + 1}
                                  </span>
                                  <div className="flex-1">
                                    <h5 className="text-[11px] font-sans font-semibold text-white mb-0.5">
                                      {cleanedTitle}
                                    </h5>
                                    <div className="text-[10px] font-light text-[#FBF9F4]/55 leading-relaxed space-y-1.5">
                                      {lines.map((line, lIdx) => {
                                        const trimmed = line.trim();
                                        if (!trimmed) return null;
                                        
                                        const isNumberedSub = /^\d+\.\s+/.test(trimmed);
                                        const isAlphaSub = /^[a-z]\.\s+/.test(trimmed);
                                        const isBulletSub = /^[•\-]\s+/.test(trimmed);
                                        
                                        const colonIndex = trimmed.indexOf(':');
                                        let formattedContent = null;
                                        if (colonIndex > 0 && colonIndex < 80 && !isNumberedSub && !isAlphaSub && !isBulletSub) {
                                          const boldLabel = trimmed.slice(0, colonIndex);
                                          const restText = trimmed.slice(colonIndex + 1).trim();
                                          formattedContent = (
                                            <p key={lIdx}>
                                              <strong className="text-[#E2C999]">{boldLabel}:</strong> {restText}
                                            </p>
                                          );
                                        }
                                        
                                        if (isNumberedSub) {
                                          const content = trimmed.replace(/^\d+\.\s+/, '');
                                          const numMatch = trimmed.match(/^\d+\./)?.[0];
                                          
                                          const subColonIndex = content.indexOf(':');
                                          if (subColonIndex > 0 && subColonIndex < 80) {
                                            const boldLabel = content.slice(0, subColonIndex);
                                            const restText = content.slice(subColonIndex + 1).trim();
                                            return (
                                              <div key={lIdx} className="pl-4 flex gap-2 text-[9px] text-[#FBF9F4]/45">
                                                <span className="text-[#C5A059] font-semibold">{numMatch}</span>
                                                <span><strong className="text-[#E2C999]">{boldLabel}:</strong> {restText}</span>
                                              </div>
                                            );
                                          }
                                          
                                          return (
                                            <div key={lIdx} className="pl-4 flex gap-2 text-[9px] text-[#FBF9F4]/45">
                                              <span className="text-[#C5A059] font-semibold">{numMatch}</span>
                                              <span>{content}</span>
                                            </div>
                                          );
                                        }
                                        
                                        if (isAlphaSub) {
                                          const content = trimmed.replace(/^[a-z]\.\s+/, '');
                                          const alphaMatch = trimmed.match(/^[a-z]\./)?.[0];
                                          
                                          const subColonIndex = content.indexOf(':');
                                          if (subColonIndex > 0 && subColonIndex < 80) {
                                            const boldLabel = content.slice(0, subColonIndex);
                                            const restText = content.slice(subColonIndex + 1).trim();
                                            return (
                                              <div key={lIdx} className="pl-8 flex gap-2 text-[9px] text-[#FBF9F4]/40">
                                                <span className="text-[#C5A059] font-medium">{alphaMatch}</span>
                                                <span><strong className="text-[#E2C999]">{boldLabel}:</strong> {restText}</span>
                                              </div>
                                            );
                                          }
                                          
                                          return (
                                            <div key={lIdx} className="pl-8 flex gap-2 text-[9px] text-[#FBF9F4]/40">
                                              <span className="text-[#C5A059] font-medium">{alphaMatch}</span>
                                              <span>{content}</span>
                                            </div>
                                          );
                                        }
                                        
                                        if (isBulletSub) {
                                          const content = trimmed.replace(/^[•\-]\s+/, '');
                                          
                                          const subColonIndex = content.indexOf(':');
                                          if (subColonIndex > 0 && subColonIndex < 80) {
                                            const boldLabel = content.slice(0, subColonIndex);
                                            const restText = content.slice(subColonIndex + 1).trim();
                                            return (
                                              <div key={lIdx} className="pl-4 flex gap-2 text-[9px] text-[#FBF9F4]/45">
                                                <span className="text-[#C5A059]">•</span>
                                                <span><strong className="text-[#E2C999]">{boldLabel}:</strong> {restText}</span>
                                              </div>
                                            );
                                          }
                                          
                                          return (
                                            <div key={lIdx} className="pl-4 flex gap-2 text-[9px] text-[#FBF9F4]/45">
                                              <span className="text-[#C5A059]">•</span>
                                              <span>{content}</span>
                                            </div>
                                          );
                                        }
                                        
                                        if (formattedContent) return formattedContent;
                                        
                                        return (
                                          <p key={lIdx}>
                                            {trimmed}
                                          </p>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          });
                        })()}
                      </div>
                    )}
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
