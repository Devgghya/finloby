import { useState, useEffect } from 'react';
import { Landmark, Briefcase, FileText, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const divisions = [
  {
    id: 'licensing',
    title: 'Licensing & Formation',
    desc: 'Establish your presence in the UAE market with our streamlined incorporation framework. We guide you through selecting jurisdictions and obtaining licenses.',
    items: [
      { name: 'Mainland License', desc: 'Complete market integration without geographical limits. 100% foreign ownership allowed for commercial & industrial licenses.' },
      { name: 'Free Zone License', desc: 'DIFC, DMCC, Meydan, and Shams options. Enjoy 100% tax exemptions, complete capital repatriation, and simplified customs.' }
    ]
  },
  {
    id: 'business-services',
    title: 'Corporate Secretariat Services',
    desc: 'All structural, legal, and operational documents handled by our senior paralegal staff to secure local compliance certificates.',
    items: [
      { name: 'Articles of Association (AOA) & MOA', desc: 'Bespoke corporate bylaws drafting and notarization matching modern legal benchmarks.' },
      { name: 'PRO & Corporate Sponsorships', desc: 'Direct liaisons with UAE Immigration, Ministry of Human Resources, and Municipalities.' },
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

const mainlandStructures = [
  {
    name: 'Limited Liability Company (LLC)',
    desc: 'This is by far the most popular structure for trading, commercial, and industrial operations on the mainland.',
    details: [
      { label: 'Shareholders', value: 'Min. 1, Max. 50 (can be individual or corporate).' },
      { label: 'Liability', value: 'Limited. Your personal assets are protected; you are only liable up to the extent of your shares.' },
      { label: 'Ownership', value: '100% foreign ownership is permitted for most commercial and industrial activities.' },
      { label: 'Best for', value: 'General trading, e-commerce, logistics, construction, and manufacturing.' }
    ]
  },
  {
    name: 'Sole Establishment (Sole Proprietorship)',
    desc: 'A company owned and run completely by one individual.',
    details: [
      { label: 'Shareholders', value: 'Exactly 1 person.' },
      { label: 'Liability', value: 'Unlimited. There is no legal distinction between your personal assets and the business.' },
      { label: 'Ownership & Agent', value: 'Expats can own 100% for professional/service activities; a Local Service Agent (LSA) is appointed (holds 0% equity).' },
      { label: 'Best for', value: 'Consultants, freelancers, tech specialists, and small service-based businesses.' }
    ]
  },
  {
    name: 'Civil Company (Civil Partnership)',
    desc: 'A structure specifically designed for professionals who want to pool their skills and operate as partners.',
    details: [
      { label: 'Shareholders', value: 'Two or more individuals.' },
      { label: 'Liability', value: 'Unlimited. Partners are personally liable for the debts and obligations of the firm.' },
      { label: 'Ownership', value: '100% foreign ownership is allowed; a Local Service Agent (LSA) who is a UAE national is appointed.' },
      { label: 'Best for', value: 'Doctors, lawyers, accountants, engineers, and digital marketers.' }
    ]
  },
  {
    name: 'Branch or Representative Office',
    desc: 'For an existing company (local or foreign) looking to expand its presence onto the UAE mainland.',
    details: [
      { label: 'Branch Office', value: 'Can conduct business, execute contracts, and generate revenue, matching the parent company.' },
      { label: 'Representative Office', value: 'Strictly for marketing/promotion. Cannot trade, sign contracts, or turn a profit.' },
      { label: 'Liability', value: 'The parent company bears 100% of the liability.' }
    ]
  },
  {
    name: 'Private Joint Stock Company (PrJSC) / Public Joint Stock Company (PJSC)',
    desc: 'These are larger corporate structures intended for massive enterprises, financial institutions, or companies intending to go public.',
    details: [
      { label: 'Private (PrJSC)', value: 'Formed by a minimum of 3 founders. Shares cannot be offered to the public.' },
      { label: 'Public (PJSC)', value: 'Formed by a minimum of 10 founders. Shares openly traded on stock exchange (DFM/ADX) with minimum capital threshold.' }
    ]
  }
];

const freeZonesData = [
  {
    tier: 'Tier 1: The Industrial Mega-Hubs & Logistics Giants',
    desc: 'These represent the largest free zones by physical area, offering massive manufacturing plots, deep-water ports, and extensive logistics infrastructure.',
    zones: [
      { name: 'KEZAD Group (Khalifa Economic Zones Abu Dhabi) – Abu Dhabi', desc: 'The Biggest: Spanning over 550 square kilometers, it is the largest integrated trade, logistics, and industrial hub in the region. It incorporates the former KIZAD and Zones Corp (including ICAD I, II, III, IV, V).' },
      { name: 'JAFZA (Jebel Ali Free Zone) – Dubai', desc: 'One of the world’s largest industrial free zones, spanning over 57 square kilometers. It is uniquely integrated with Jebel Ali Port and handles a massive percentage of Dubai’s non-oil GDP.' },
      { name: 'Dubai South (Dubai World Central / DWC) – Dubai', desc: 'An urban mega-development covering 145 square kilometers overall, with its dedicated free zone master-planned around Al Maktoum International Airport, focusing on aviation, aerospace, and multimodal logistics.' },
      { name: 'Hamriyah Free Zone (HFZA) – Sharjah', desc: 'The second-largest industrial free zone in the UAE, offering deep-water port access, massive industrial plots, and heavy-industry manufacturing zones.' },
      { name: 'RAKEZ (Ras Al Khaimah Economic Zone) – Ras Al Khaimah', desc: 'A massive powerhouse formed by merging RAK FTZ and RAKIA. It spreads across multiple large-scale industrial zones (Al Ghail, Al Hamra, Al Hulaila) alongside commercial districts.' },
      { name: 'Fujairah Oil Industry Zone (FOIZ) & Fujairah Free Zone (FFZ) – Fujairah', desc: 'Strategically located outside the Strait of Hormuz on the Indian Ocean. FOIZ is a massive land footprint dedicated entirely to oil storage and bunkering, while FFZ handles heavy manufacturing and shipping.' }
    ]
  },
  {
    tier: 'Tier 2: Large Commercial, Commodity & Technology Hubs',
    desc: 'These zones feature major urban commercial footprints, consisting of multiple high-rise office towers, large warehouses, or entire multi-building business parks.',
    zones: [
      { name: 'DMCC (Dubai Multi Commodities Centre) – Dubai', desc: 'Governing the entire Jumeirah Lakes Towers (JLT) district. While physically smaller than the industrial ports, it is the largest free zone by company count (over 24,000 active companies) across dozens of commercial towers.' },
      { name: 'Dubai Silicon Oasis (DSO) – Dubai', desc: 'A fully integrated tech-park and smart city spanning 7.2 square kilometers, housing tech giants, R&D centers, residential zones, and the IFZA (International Free Zone Authority) co-located ecosystem.' },
      { name: 'Dubai Industrial City (DI) – Dubai', desc: 'A sprawling, dedicated industrial hub within the TECOM portfolio focused on light-to-medium manufacturing, food production, and massive warehousing clusters.' },
      { name: 'SAIF Zone (Sharjah Airport International Free Zone) – Sharjah', desc: 'A highly active, large-scale commercial and light-industrial hub located right next to Sharjah International Airport.' },
      { name: 'Ajman Free Zone (AFZ) – Ajman', desc: 'The primary, well-established multi-sector free zone in Ajman, featuring large eco-friendly warehouses, land plots, and multiple commercial complexes near Ajman Port.' },
      { name: 'DAFZA (Dubai Airport Free Zone) – Dubai', desc: 'A premium, multi-building commercial and logistics hub located directly adjacent to Dubai International Airport (DXB).' }
    ]
  },
  {
    tier: 'Tier 3: Specialized Mid-Sized Industry & Business Districts',
    desc: 'These are purpose-built business parks and specialized communities focusing on knowledge, media, science, and financial economies.',
    zones: [
      { name: 'DIFC (Dubai International Financial Centre) – Dubai', desc: 'The leading financial hub for the MEASA region, occupying a distinct, premium commercial district in the heart of Dubai with its own independent judicial system based on English Common Law.' },
      { name: 'ADGM (Abu Dhabi Global Market) – Abu Dhabi', desc: 'Abu Dhabi’s premier financial free zone, physically encompassing the entirety of Al Maryah Island and expanding across Al Reem Island.' },
      { name: 'Dubai Internet City (DIC) & Dubai Knowledge Park (DKP) – Dubai', desc: 'The region\'s largest information and communications technology (ICT) and human resources hubs, consisting of massive mid-rise corporate campus layouts.' },
      { name: 'Masdar City Free Zone – Abu Dhabi', desc: 'A distinct, purpose-built sustainable urban district focusing on clean energy, sustainability, and renewable technology companies.' },
      { name: 'Dubai Media City (DMC) & Dubai Studio City (DSC) – Dubai', desc: 'The primary media and broadcasting ecosystems in the region, featuring major studio lots, soundstages, and corporate office complexes.' },
      { name: 'Dubai Healthcare City (DHCC) – Dubai', desc: 'The world’s largest integrated healthcare free zone, spanning two major phases focused on clinical services, wellness, and medical education.' },
      { name: 'Dubai Design District (d3) – Dubai', desc: 'A creative mega-district dedicated to fashion, art, luxury, and interior design brands.' },
      { name: 'Dubai Science Park (DSP) – Dubai', desc: 'A purpose-built community catering specifically to the life sciences, energy, and environmental sectors with specialized laboratory infrastructure.' },
      { name: 'Dubai International Academic City (DIAC) – Dubai', desc: 'The largest higher education free zone in the world, hosting a vast campus footprint of international branch universities.' },
      { name: 'Dubai Production City (DPC) – Dubai', desc: 'A specialized business park dedicated to global printing, publishing, packaging, and media production industries.' },
      { name: 'twofour54 – Abu Dhabi', desc: 'Abu Dhabi’s media, gaming, and entertainment free zone, featuring custom-built production studios and creative campuses located primarily in Yas Island.' },
      { name: 'Sharjah Media City (Shams) – Sharjah', desc: 'A rapidly expanding creative hub offering flexible commercial spaces and digital licensing structures for media enterprises.' },
      { name: 'Sharjah Publishing City Free Zone (SPC Free Zone) – Sharjah', desc: 'The world’s first free zone dedicated entirely to the global print, publishing, and book-bound logistics sector.' },
      { name: 'Sharjah Research, Technology and Innovation Park (SRTIP) – Sharjah', desc: 'An academic-linked innovation zone promoting advanced R&D, 3D printing labs, and future tech ventures next to University City.' },
      { name: 'Umm Al Quwain Free Trade Zone (UAQ FTZ) – Umm Al Quwain', desc: 'A fast-growing, cost-effective free zone offering commercial offices, micro-warehouses, and light industrial facilities along Sheikh Mohammed Bin Zayed Road.' }
    ]
  },
  {
    tier: 'Tier 4: Highly Niche, Small Business & Specialized Virtual Zones',
    desc: 'These represent the smallest physical footprints, often operating out of a single building complex, a single infrastructure asset, or catering predominantly to digital/virtual licensing models.',
    zones: [
      { name: 'Dubai World Trade Centre (DWTC) Free Zone – Dubai', desc: 'A highly concentrated, premium commercial free zone operating out of the iconic World Trade Centre tower complexes and One Central.' },
      { name: 'Meydan Free Zone (MFZ) – Dubai', desc: 'Operating out of the luxurious Meydan Racecourse stadium complex, this is a highly popular, digitally optimized free zone specializing in e-commerce and virtual setups.' },
      { name: 'Dubai Maritime City (DMC) – Dubai', desc: 'A specialized maritime peninsula cluster focusing on marine engineering, ship repair, and maritime corporate offices.' },
      { name: 'Dubai CommerCity (DCC) – Dubai', desc: 'The first dedicated e-commerce free zone in the region, featuring high-tech, compact digital offices and automated fulfillment warehouses near DXB airport.' },
      { name: 'Dubai Outsource City (DOC) – Dubai', desc: 'A dedicated, mid-sized business park tailored for Business Process Outsourcing (BPO), call centers, and back-office operations.' },
      { name: 'DUQE Free Zone – Dubai', desc: 'A unique, boutique free zone physically stationed aboard the historic Queen Elizabeth 2 (QE2) cruise ship docked at Port Rashid.' },
      { name: 'Gold and Diamond Park – Dubai', desc: 'A specialized commercial and retail manufacturing complex on Sheikh Zayed Road dedicated completely to jewelry and precious metals.' },
      { name: 'Dubai Humanitarian (Formerly IHC) – Dubai', desc: 'The world’s largest humanitarian hub, operating as a non-profit independent free zone hosting global NGOs and UN agencies near Jebel Ali.' },
      { name: 'Dubai Cars and Automotive Zone (DUCAMZ) & Dubai Auto Zone (DAZ) – Dubai', desc: 'Specialized marketplace clusters designed specifically for the re-export, trade, and storage of used and new automobiles.' },
      { name: 'Abu Dhabi Airport Free Zone (ADAFZ) – Abu Dhabi', desc: 'A highly strategic business park operating directly within the immediate perimeters of Abu Dhabi International Airport.' },
      { name: 'Al Ain International Airport Free Zone – Abu Dhabi', desc: 'An airport-linked boutique zone targeted specifically at aviation, light manufacturing, and industrial electronics in Al Ain.' },
      { name: 'Al Bateen Executive Airport Free Zone – Abu Dhabi', desc: 'A highly exclusive, niche zone catering specifically to private aviation, charter companies, and executive hospitality businesses.' },
      { name: 'Sharjah Communication Technologies Free Zone (COMTECH) – Sharjah', desc: 'A newly established, highly specialized free zone dedicated exclusively to data centers, telecommunications infrastructure, and AI engineering.' },
      { name: 'Ajman Media City Free Zone – Ajman', desc: 'A specialized, lean commercial setup catering entirely to digital agencies, media consultants, and creative freelancers.' },
      { name: 'Ajman NuVentures Centre Free Zone (ANCFZ) – Ajman', desc: 'A state-of-the-art digital/virtual tech hub designed for ultra-fast digital licensing, gaming, and next-gen tech businesses.' },
      { name: 'RAK Maritime City Free Zone (RMCFZA) – Ras Al Khaimah', desc: 'A port-specific marine zone customized specifically for ship repairs, maritime transport, and heavy marine cargo processing.' },
      { name: 'RAK Airport Free Zone – Ras Al Khaimah', desc: 'A highly concentrated boutique zone operating inside the footprint of Ras Al Khaimah International Airport.' },
      { name: 'Fujairah Creative City – Fujairah', desc: 'A highly popular, boutique virtual free zone optimized for media, publishing, consultancy, and digital creators requiring minimal physical infrastructure.' },
      { name: 'Dubai Flower Centre (DFC) – Dubai', desc: 'An ultra-specialized, single-facility airside hub at DXB airport dedicated entirely to cold-chain logistics for perishable floriculture goods.' },
      { name: 'Dubai Textile City / Textile Village – Dubai', desc: 'A niche joint-venture zone designed with custom warehouses specifically for international textile traders and fabric wholesalers.' }
    ]
  }
];

export default function BusinessSetup() {
  const [activeDiv, setActiveDiv] = useState('licensing');
  const [activeTier, setActiveTier] = useState<number | null>(0);
  
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
    <div className="flex-1 w-full bg-[#070F1E] pt-48 sm:pt-52 lg:pt-56 xl:pt-64 pb-20">
      <SEO
        title="International Business Setup & Company Formation"
        description="Seamless mainland and free zone company formation, banking introductions, MOA drafting, and corporate sponsorship services in the UAE and globally."
        keywords="company setup Dubai, business setup UAE, free zone company formation, mainland licensing, corporate banking introduction, corporate sponsorship, DIFC, DMCC"
      />
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
            Seamless mainland and free zone company formation, corporate documentation drafts, legal certifications, and premier commercial banking onboarding in the UAE.
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
                      {item.items.map((sub, idx) => {
                        const isFreeZoneCard = sub.name.includes('Free Zone') || sub.name.includes('Economic Zone');
                        const isMainlandCard = sub.name.includes('Mainland');
                        
                        const handleCardClick = () => {
                          if (isFreeZoneCard) {
                            const el = document.getElementById('free-zone-registry');
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth' });
                            }
                          } else if (isMainlandCard) {
                            const el = document.getElementById('mainland-structures');
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        };

                        return (
                          <div 
                            key={idx} 
                            onClick={handleCardClick}
                            className={`bg-[#070F1E]/50 border border-slate-850 p-5 rounded-sm transition-all duration-300 ${
                              isFreeZoneCard || isMainlandCard ? 'cursor-pointer hover:border-[#C5A059]/40 hover:bg-[#070F1E]/80' : ''
                            }`}
                          >
                            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#E2C999] mb-1.5 flex items-center justify-between">
                              <span className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-[#C5A059]" />
                                {sub.name}
                              </span>
                              {isFreeZoneCard && (
                                <span className="text-[9px] uppercase tracking-wider text-[#C5A059] font-semibold animate-pulse">
                                  View Registry &darr;
                                </span>
                              )}
                              {isMainlandCard && (
                                <span className="text-[9px] uppercase tracking-wider text-[#C5A059] font-semibold animate-pulse">
                                  View Structures &darr;
                                </span>
                              )}
                            </h4>
                            <p className="text-xs font-light text-[#FBF9F4]/60 leading-relaxed">
                              {sub.desc}
                            </p>
                          </div>
                        );
                      })}
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

        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-8 md:my-16"></div>

        {/* SECTION: MAINLAND LEGAL STRUCTURES */}
        <div id="mainland-structures" className="mb-20 scroll-mt-28">
          <div className="flex flex-col gap-3 mb-10 text-center max-w-xl mx-auto">
            <span className="text-[8px] font-bold text-[#E5C158] uppercase tracking-[0.25em]">
              Mainland Framework
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-wide">
              Mainland Legal Structures
            </h2>
            <div className="flex items-center gap-2 mt-1 justify-center">
              <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)]"></span>
              <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
            </div>
            <p className="text-xs font-light text-[#FBF9F4]/55 mt-1 leading-relaxed">
              When registering a business on the UAE Mainland (regulated by the Department of Economic Development, or DED, in each respective emirate), you have several legal structures to choose from. The structure you select determines your liability, the number of shareholders allowed, and whether you need a local service agent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {mainlandStructures.map((structure, sIdx) => (
              <div 
                key={sIdx}
                className={`bg-[#0D1625] border border-slate-850 p-6 rounded-sm hover:border-[#C5A059]/20 transition-all duration-300 flex flex-col justify-start relative overflow-hidden ${
                  sIdx === 3 || sIdx === 4 ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/25 to-transparent"></div>
                <span className="text-[9px] font-mono text-[#C5A059] uppercase tracking-widest mb-1">
                  Structure 0{sIdx + 1}
                </span>
                <h4 className="text-sm font-sans font-bold text-white mb-2 leading-snug">
                  {structure.name}
                </h4>
                <p className="text-[11px] font-light text-[#FBF9F4]/60 leading-relaxed mb-6">
                  {structure.desc}
                </p>
                <div className="space-y-2 mt-auto border-t border-slate-850/50 pt-4">
                  {structure.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex flex-col gap-0.5 text-[10px] leading-relaxed">
                      <span className="text-[#C5A059] uppercase tracking-wider font-semibold text-[8px]">{detail.label}:</span>
                      <span className="text-[#FBF9F4]/75 font-light">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-8 md:my-16"></div>

        {/* SECTION: FREE ZONE REGISTRY */}
        <div id="free-zone-registry" className="mb-20 scroll-mt-28">
          <div className="flex flex-col gap-3 mb-10 text-center max-w-xl mx-auto">
            <span className="text-[8px] font-bold text-[#E5C158] uppercase tracking-[0.25em]">
              Free Zones
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-wide">
              UAE Free Zone Registry
            </h2>
            <div className="flex items-center gap-2 mt-1 justify-center">
              <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)]"></span>
              <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
            </div>
            <p className="text-xs font-light text-[#FBF9F4]/55 mt-1 leading-relaxed">
              Explore the 47 registered free zone jurisdictions across the UAE, categorized systematically by scale, infrastructure footprint, and sector specialization.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {freeZonesData.map((tierData, tIdx) => {
              const isOpen = activeTier === tIdx;
              return (
                <div 
                  key={tIdx} 
                  className="bg-[#0D1625] border border-slate-850 rounded-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveTier(isOpen ? null : tIdx)}
                    className="w-full text-left p-6 flex justify-between items-center cursor-pointer hover:bg-[#0D1625]/80 transition-colors duration-300 group"
                  >
                    <div>
                      <h4 className="text-sm sm:text-base font-sans font-bold text-white group-hover:text-[#E2C999] transition-colors">
                        {tierData.tier}
                      </h4>
                      <p className="text-xs font-light text-[#FBF9F4]/40 mt-1">
                        {tierData.desc}
                      </p>
                    </div>
                    <span className="text-xl text-[#C5A059] font-mono select-none pl-4">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#C5A059]/10 p-6 bg-[#070F1E]/30 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                      {tierData.zones.map((zone, zIdx) => (
                        <div 
                          key={zIdx} 
                          className="bg-[#050B15]/80 border border-slate-850 p-4 hover:border-[#C5A059]/20 transition-all duration-300 flex flex-col justify-start"
                        >
                          <h5 className="text-xs font-sans font-semibold text-[#E2C999]">
                            {zone.name}
                          </h5>
                          <p className="text-[11px] font-light text-[#FBF9F4]/50 leading-relaxed mt-2">
                            {zone.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-8 md:my-16"></div>

        {/* UAE Company Setup Cost Estimator */}
        <div id="cost-estimator" className="bg-[#0D1625] border border-[#C5A059]/20 p-8 sm:p-10 rounded-sm relative overflow-hidden scroll-mt-28">
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
                    Jurisdiction Type
                  </label>
                  <select 
                    id="est-jurisdiction"
                    value={jurisdiction}
                    onChange={(e) => setJurisdiction(e.target.value)}
                    className="bg-[#070F1E] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3.5 px-3 rounded-sm focus:outline-none focus:border-[#C5A059] appearance-none cursor-pointer"
                  >
                    <option value="Mainland" className="bg-[#0D1625] text-[#FBF9F4]">Mainland LLC (Standard LLC)</option>
                    <option value="Freezone" className="bg-[#0D1625] text-[#FBF9F4]">Free Zone (DIFC / Meydan / Shams)</option>
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
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Standard UAE VAT (5%):</span>
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
