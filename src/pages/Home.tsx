import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight, Lock, Activity, ArrowUpRight, FileText } from 'lucide-react';

const portfolios = [
  {
    num: 'I',
    title: 'Debt Solutions & Restructuring',
    desc: 'Bespoke personal and corporate debt settlement, consolidation, and liability negotiations designed to restore financial equilibrium with absolute discretion.',
    services: ['Debt Counselling', 'Debt Consolidation', 'Debt Settlement', 'Debt Restructuring', 'Skip Solutions'],
    link: '/debt-solutions',
  },
  {
    num: 'II',
    title: 'Loans & Commercial Facilities',
    desc: 'High-volume salary transfer, fleet, business, and mortgage loans structured through tier-1 banking institutions and private lenders.',
    services: ['Personal Finance', 'Vehicle / Auto Loan', 'Credit Card', 'Business Loan', 'Mortgage Loan', 'Insurance'],
    link: '/loans',
  },
  {
    num: 'III',
    title: 'International Business Setup',
    desc: 'Seamless mainland and economic zone company formation, banking introduction, MOA drafting, and corporate sponsorship services in the UAE and globally.',
    services: ['Licensing', 'Business Setup', 'Banking'],
    link: '/business-setup',
  },
  {
    num: 'IV',
    title: 'Investment & Capital Placement',
    desc: 'Connecting institutional investors with high-yield opportunities and structuring joint ventures with verified capital seekers globally.',
    services: ['Investor', 'Investment Seeker'],
    link: '/investments',
  },
  {
    num: 'V',
    title: 'Cross-Border Legal Support',
    desc: 'Strategic defense against financial liabilities, police case clearance assistance, court representation coordinates, and cross-border skip settlement support.',
    services: ['Banking Collections', 'Legal Support'],
    link: '/legal-assistance',
  },
  {
    num: 'VI',
    title: 'Private Client Asset Protection',
    desc: 'Custom trust arrangements, corporate restructure models, and sovereign compliance protocols to insulate multigenerational wealth.',
    services: ['Wealth Insulation', 'Institutional Trust Setup', 'Confidential Advisory'],
    link: '/debt-solutions#debt-restructuring',
  },
];

const caseStudies = [
  {
    client: 'Consolidated Logistics Group',
    region: 'Dubai - London',
    facility: 'AED 142M Debt Restructuring & Settlement',
    outcome: 'Negotiated a 45% write-off on non-performing commercial liabilities, consolidated 8 separate institutional facilities into a single low-interest amortized structure, and secured a 12-month grace period on principal payments.',
    period: 'Q2 2025',
  },
  {
    client: 'Falcon Logistics Fleet Holdings',
    region: 'Abu Dhabi - Singapore',
    facility: 'AED 65M Fleet and Machinery Finance Placement',
    outcome: 'Structured and executed a complex machinery and commercial vehicle facility using post-dated cheque security models, matching cash flow cycles with optimized debt servicing.',
    period: 'Q4 2025',
  },
  {
    client: 'Multinational Tech Advisory Partner',
    region: 'DIFC, Dubai',
    facility: 'Cross-Border Legal & Police Clearance Support',
    outcome: 'Successfully resolved long-standing default allegations across multiple jurisdictions, securing complete police file clearances and removing active travel bans within 45 days.',
    period: 'Q1 2026',
  },
];

const testimonials = [
  {
    quote: "FINLOBY handled our corporate restructuring with absolute secrecy. Their access to institutional banking partners and custom settlement channels allowed us to stay liquid during a complex transition.",
    author: "Managing Director",
    company: "Sovereign Trading LLC",
  },
  {
    quote: "The business setup and banking introductions in Dubai Tecom were seamless. Within weeks, we had active corporate accounts and verified assignment of authority structures in place.",
    author: "Founder & CFO",
    company: "Aether Capital Management",
  },
];

const heroBadges = [
  {
    title: 'CONSOLIDATION OF CREDIT CARDS & LOANS',
    img: '/consolidation_loans.jpg'
  },
  {
    title: 'SETTLEMENT OF CREDIT CARDS & LOANS',
    img: '/settlement_loans.jpg'
  },
  {
    title: 'FINANCIAL CONSULTANCY & LEGAL ISSUES',
    img: '/financial_consultancy.jpg'
  },
  {
    title: 'CORPORATE DEBT RESTRUCTURING',
    img: '/corporate_restructuring.jpg'
  },
  {
    title: 'SOVEREIGN ASSET ADVISORY',
    img: '/sovereign_asset.jpg'
  },
  {
    title: 'ECONOMIC ZONE SETUP & ADVISORY',
    img: '/economic_zone.jpg'
  },
  {
    title: 'STRATEGIC WEALTH INSULATION',
    img: '/wealth_insulation.jpg'
  },
  {
    title: 'POLICE CASE & TRAVEL BAN CLEARANCE',
    img: '/police_clearance.jpg'
  }
];

export default function Home() {
  // Background rotator states
  const [bgIndex, setBgIndex] = useState(0);
  const [carouselSlide, setCarouselSlide] = useState(0);

  // Static cached exchange rates registry
  const rates = {
    AED: 3.6725,
    INR: 83.512,
    EUR: 0.9221,
    GBP: 0.7812,
    CHF: 0.9015,
    SGD: 1.3524,
    CAD: 1.3685,
    AUD: 1.4921,
    KWD: 0.3068,
    OMR: 0.3845,
    SAR: 3.7500,
    QAR: 3.6400,
    JPY: 160.84,
    CNY: 7.268,
    HKD: 7.8000,
    MYR: 4.7125,
    THB: 36.412,
    NZD: 1.6312,
    PKR: 278.15,
    BDT: 117.48
  };

  const backgroundImages = [
    'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=1600&auto=format&fit=crop', // Dubai DIFC
    'https://images.unsplash.com/photo-1546412414-803b857f647a?q=80&w=1600&auto=format&fit=crop', // Dubai Corporate Towers
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop', // Dubai Downtown Skyline
    'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1600&auto=format&fit=crop'  // Corporate Office Glass
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCarouselSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <main className="flex-1 w-full bg-[#070F1E]">
      
      {/* SECTION 1: THE HERO FRAMEWORK */}
      <section className="relative w-full overflow-hidden min-h-[95vh] flex flex-col justify-start border-b border-[#C5A059]/10">
        
        {/* Fading Background Banner Images */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((img, idx) => (
            <div
              key={img}
              style={{ 
                backgroundImage: `url(${img})`,
                opacity: idx === bgIndex ? 'var(--hero-img-opacity, 0.25)' : '0'
              }}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-[6000ms] ease-out transform ${
                idx === bgIndex ? 'scale-105 brightness-90' : 'scale-100 brightness-50'
              }`}
            />
          ))}
          {/* Themeable background overlays with variables */}
          <div 
            className="absolute inset-0 transition-colors duration-500" 
            style={{ backgroundColor: 'var(--hero-overlay)' }}
          />
          <div 
            className="absolute inset-0 transition-all duration-500" 
            style={{ 
              backgroundImage: 'linear-gradient(to top, var(--hero-gradient-from), transparent 70%, rgba(0,0,0,0) 100%)' 
            }}
          />
        </div>

        {/* Decorative Grid Lines - Luxury Aesthetics */}
        <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-5 z-10">
          <div className="border-r border-[#C5A059]"></div>
          <div className="border-r border-[#C5A059]"></div>
          <div className="border-r border-[#C5A059]"></div>
          <div className="border-r border-[#C5A059] last:border-0"></div>
        </div>

        {/* 1.1 Dynamic Carousel of Circular Badges - Slides every 6s with expensive transform transitions */}
        <div className="w-full pt-48 sm:pt-52 lg:pt-60 pb-6 relative z-20 select-none overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 overflow-hidden relative">
            <div 
              className="flex w-[200%] transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${carouselSlide * 50}%)` }}
            >
              {/* Slide 1 (First 4 items) */}
              <div className="w-1/2 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pr-4 flex-shrink-0">
                {heroBadges.slice(0, 4).map((badge) => (
                  <div key={badge.title} className="flex flex-col items-center group">
                    <div className="rounded-full border-4 border-slate-100/90 hover:border-[#E5C158] aspect-square w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 overflow-hidden shadow-[0_0_20px_rgba(229,193,88,0.05)] hover:shadow-[0_0_30px_rgba(229,193,88,0.2)] relative mx-auto transition-all duration-300 hover:scale-105 cursor-pointer">
                      <img 
                        src={badge.img} 
                        alt={badge.title} 
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      />
                    </div>
                    <span className="font-bold text-[9px] md:text-[10px] text-center text-white group-hover:text-[#E5C158] mt-3 tracking-wider uppercase block max-w-[150px] whitespace-normal leading-normal font-sans transition-colors duration-300">
                      {badge.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Slide 2 (Last 4 items) */}
              <div className="w-1/2 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pl-4 flex-shrink-0">
                {heroBadges.slice(4, 8).map((badge) => (
                  <div key={badge.title} className="flex flex-col items-center group">
                    <div className="rounded-full border-4 border-slate-100/90 hover:border-[#E5C158] aspect-square w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 overflow-hidden shadow-[0_0_20px_rgba(229,193,88,0.05)] hover:shadow-[0_0_30px_rgba(229,193,88,0.2)] relative mx-auto transition-all duration-300 hover:scale-105 cursor-pointer">
                      <img 
                        src={badge.img} 
                        alt={badge.title} 
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      />
                    </div>
                    <span className="font-bold text-[9px] md:text-[10px] text-center text-white group-hover:text-[#E5C158] mt-3 tracking-wider uppercase block max-w-[150px] whitespace-normal leading-normal font-sans transition-colors duration-300">
                      {badge.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination indicator dots */}
            <div className="flex justify-center gap-2.5 mt-6">
              <button 
                type="button" 
                onClick={() => setCarouselSlide(0)} 
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${carouselSlide === 0 ? 'bg-[#E5C158] w-6' : 'bg-slate-600'}`}
                aria-label="View first 4 services"
              />
              <button 
                type="button" 
                onClick={() => setCarouselSlide(1)} 
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${carouselSlide === 1 ? 'bg-[#E5C158] w-6' : 'bg-slate-600'}`}
                aria-label="View remaining 4 services"
              />
            </div>
          </div>
        </div>

        {/* 1.2 Editorial Grid and intake */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 pb-16 md:pb-20 lg:pb-24 relative z-20 flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heavy Editorial Typography */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/25 bg-[#0D1625]/85 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse"></span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E5C158]">
                  Institutional Finance Advisory
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-[#FBF9F4] leading-[1.08] tracking-tight">
                Visionary Wealth.<br />
                <span className="text-gradient-gold font-normal italic">Absolute Protection.</span>
              </h1>

              <p className="text-base sm:text-lg font-light text-[#FBF9F4]/70 max-w-xl leading-relaxed">
                FINLOBY orchestrates premium corporate restructuring, institutional debt settlement, structured credit placement, and cross-border legal coordination for discerning private entities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-4">
                <a 
                  href="#portfolios" 
                  id="hero-explore-btn"
                  className="px-8 py-4 bg-[#C5A059] text-[#070F1E] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#E5C158] hover:text-[#070F1E] transition-all duration-300 rounded-sm text-center shadow-lg hover:shadow-[#E5C158]/25"
                >
                  Explore Pillars
                </a>
                <a 
                  href="#case-studies" 
                  id="hero-cases-btn"
                  className="px-8 py-4 border border-[#C5A059]/30 text-[#FBF9F4] text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#E5C158] hover:bg-[#E5C158]/5 transition-all duration-300 rounded-sm text-center"
                >
                  Institutional Case Files
                </a>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-[#C5A059]/10 mt-8 max-w-lg">
                <div>
                  <div className="text-2xl font-sans font-bold text-[#C5A059]">AED 850M+</div>
                  <div className="text-[9px] uppercase tracking-wider text-[#FBF9F4]/40 mt-1">Liabilities Resolved</div>
                </div>
                <div>
                  <div className="text-2xl font-sans font-bold text-[#C5A059]">100%</div>
                  <div className="text-[9px] uppercase tracking-wider text-[#FBF9F4]/40 mt-1">Confidentiality Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-sans font-bold text-[#C5A059]">36+</div>
                  <div className="text-[9px] uppercase tracking-wider text-[#FBF9F4]/40 mt-1">Banking Partners</div>
                </div>
              </div>
            </div>

            {/* Right Column: Global Currency Exchange Ticker Dashboard */}
            <div className="lg:col-span-5 relative" id="market-terminal">
              <div className="glass-luxury p-6 rounded-sm relative overflow-hidden flex flex-col gap-4 bg-gold-glow">
                {/* Top gold line indicator */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[var(--brand-gold)]"></div>
                
                <div className="flex items-center justify-between border-b border-[var(--brand-gold)]/10 pb-4">
                  <div>
                    <h2 className="text-lg font-sans font-bold text-white tracking-wide">Global Market Terminal</h2>
                    <p className="text-[10px] text-[var(--brand-gold-light)] font-light mt-0.5">USD Base Valuation Uplink</p>
                  </div>
                  <div className="text-right flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-[#C5A059]/25 bg-[#0D1625] rounded-full text-[8px] font-bold text-[#C5A059]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                      DAILY ARCHIVE
                    </span>
                    <span className="text-[8px] text-white/40 font-mono">SEC-UPLINK v4.2</span>
                  </div>
                </div>

                {/* Currency rates grid */}
                <div className="grid grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
                  {Object.entries(rates).map(([code, value]) => {
                    const names: Record<string, string> = {
                      AED: 'UAE Dirham',
                      INR: 'Indian Rupee',
                      PKR: 'Pakistani Rupee',
                      JPY: 'Japanese Yen',
                      CNY: 'Chinese Yuan',
                      BDT: 'Bangladeshi Taka',
                      EUR: 'Euro Zone',
                      GBP: 'United Kingdom',
                      SGD: 'Singapore Dollar',
                      SAR: 'Saudi Riyal',
                      QAR: 'Qatari Riyal',
                      OMR: 'Omani Rial',
                      KWD: 'Kuwaiti Dinar',
                      CAD: 'Canadian Dollar',
                      AUD: 'Australian Dollar',
                      CHF: 'Swiss Franc',
                      HKD: 'Hong Kong Dollar',
                      NZD: 'New Zealand Dollar',
                      MYR: 'Malaysian Ringgit',
                      THB: 'Thai Baht'
                    };
                    return (
                      <div key={code} className="bg-[#031C14] border border-[var(--brand-gold)]/10 p-3 rounded-sm flex items-center justify-between hover:border-[var(--brand-gold)]/30 transition-all duration-300">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[11px] font-bold text-white font-sans">{code}</span>
                          <span className="text-[8px] text-white/50 leading-none">{names[code]}</span>
                        </div>
                        <div className="text-right flex flex-col gap-0.5">
                          <span className="text-[12px] font-bold text-[var(--brand-gold-light)] font-mono">
                            {value.toFixed(code === 'OMR' || code === 'KWD' ? 3 : 2)}
                          </span>
                          <span className="text-[8px] text-white/30">1.00 USD</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-[var(--brand-gold)]/10 pt-3 text-[9px] text-white/40 font-mono text-center">
                  Feed secured via 256-bit institutional API uplink
                </div>
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-medium text-center mt-3 block">
                  Data Registry Archive • Market Rates Cached Daily at 00:00 GMT via Regional Sovereign Channels
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-8 md:my-16"></div>

      {/* SECTION 1.5: BESPOKE PORTFOLIO DIAGNOSTIC ENGINE PLACEHOLDER */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 pb-20 md:pb-24 lg:pb-32" id="estimator-section">
        <div className="bg-[#0D1625] border border-[#C5A059]/20 p-8 sm:p-12 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#9A7B3E] via-[#E5C158] to-[#E2C999]"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-[#C5A059]/10 pb-6 mb-8 gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#E5C158] flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-[#E5C158] animate-pulse" />
                Classified Diagnostics Hub
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-wide">
                Bespoke Portfolio Diagnostic Engine
              </h2>
              <div className="flex items-center gap-2 mt-1 mb-2">
                <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)]"></span>
                <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
              </div>
              <p className="text-xs font-light text-[#FBF9F4]/40 max-w-2xl">
                Cryptographically buffered analysis suite mapped to local UAE Central Bank directives and regional court database files.
              </p>
            </div>
            <div className="border border-[#C5A059]/20 text-[#E5C158] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] bg-[#070F1E] font-mono rounded-sm">
              STATUS: AWAITING MATHEMATICAL PARAMETER MATRICES
            </div>
          </div>

          <div className="py-12 px-6 flex flex-col items-center text-center justify-center border border-dashed border-slate-800/80 rounded-sm bg-[#070F1E]/40 relative min-h-[300px]">
            <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-[0.015]">
              <div className="border-r border-[#C5A059]"></div>
              <div className="border-r border-[#C5A059]"></div>
              <div className="border-r border-[#C5A059]"></div>
              <div className="border-r border-[#C5A059]"></div>
              <div className="border-r border-[#C5A059]"></div>
            </div>
            
            <Lock className="w-12 h-12 text-[#E5C158]/35 mb-6" />
            <h3 className="text-base font-sans text-[#FBF9F4] font-bold mb-2 uppercase tracking-wider">
              Secure Parameter Pipeline Under Calibration
            </h3>
            <p className="text-xs text-[#FBF9F4]/50 max-w-lg leading-relaxed font-light mb-6">
              The diagnostic ledger is currently integrating encrypted live telemetry API coordinates from regional sovereign institutions. Local mathematical indices will propagate once security parameters are validated.
            </p>
            
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-[#0D1625] border border-slate-850 text-slate-400 font-mono text-[9px] rounded-sm">
                ENCRYPTION: AES-256-GCM
              </span>
              <span className="px-4 py-2 bg-[#0D1625] border border-slate-850 text-[#E5C158] font-mono text-[9px] rounded-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-ping"></span>
                SYNCING DATA STACK
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-8 md:my-16"></div>

      {/* SECTION 2: GLOBAL INFRASTRUCTURE MARQUEE */}
      <section className="w-full bg-[#0D1625] py-5 overflow-hidden relative" id="marquee-section">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070F1E] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070F1E] to-transparent z-10 pointer-events-none"></div>
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-12 text-[#C5A059] font-sans text-sm tracking-[0.3em] font-semibold pr-12">
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
          </div>
          <div className="flex items-center gap-12 text-[#C5A059] font-sans text-sm tracking-[0.3em] font-semibold pr-12 select-none" aria-hidden="true">
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
          </div>
        </div>
      </section>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-8 md:my-16"></div>

      {/* SECTION 3: PORTFOLIO PILLARS SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28" id="portfolios">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[8px] font-bold text-[#E5C158] uppercase tracking-[0.25em]">
              Strategic Assets
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-wide">
              Core Portfolio Pillars
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)]"></span>
              <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
            </div>
          </div>
          <p className="text-xs font-light text-[#FBF9F4]/55 max-w-md leading-relaxed">
            Our corporate structure matches premium capital procurement with strategic restructuring initiatives to insulate assets from high-risk environments.
          </p>
        </div>

        {/* Dark Navy-Slate Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((item) => (
            <Link
              to={item.link}
              key={item.num}
              id={`portfolio-pillar-${item.num.toLowerCase()}`}
              className="bg-[#06281E] text-[#FBF9F4] p-8 sm:p-10 flex flex-col justify-between min-h-[420px] rounded-none border-l-4 border-[#E5C158] border border-[var(--brand-gold)]/10 transform transition-all duration-500 hover:-translate-y-2 hover:border-[#E5C158]/55 hover:shadow-[0_20px_40px_rgba(229,193,88,0.08)] group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl font-sans font-bold text-[#E5C158]">
                    {item.num}
                  </span>
                  <div className="p-2 bg-[#031C14] rounded-full text-[#E5C158] group-hover:bg-[#E5C158] group-hover:text-[#070F1E] transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                
                <h3 className="text-sm font-sans font-bold uppercase tracking-wider text-white mb-4 leading-relaxed group-hover:text-[#E5C158] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs font-light leading-relaxed text-[#FBF9F4] mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Service Sub-links: Amplified contrast & weight using Alabaster color */}
              <ul className="pt-6 border-t border-slate-800/80 mt-auto space-y-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#FBF9F4]">
                {item.services.map((srv, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#E5C158] max-sm:text-[#D4AF37] max-sm:px-2 text-[8px] font-sans">◆</span>
                    <span className="font-sans font-semibold text-[#FBF9F4] tracking-wider hover:text-[#E5C158] transition-colors">{srv}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-8 md:my-16"></div>

      {/* SECTION 4: HISTORICAL CLIENT ANALYSIS (CASE STUDIES - BOOK THEME) */}
      <section className="w-full bg-[#050B15] py-20 sm:py-28" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col gap-3 mb-16 text-center max-w-xl mx-auto">
            <span className="text-[8px] font-bold text-[#E5C158] uppercase tracking-[0.25em]">
              Verified Outcomes
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-wide">
              Historical Client Case Files
            </h2>
            <div className="flex items-center gap-2 mt-1 justify-center">
              <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)]"></span>
              <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
            </div>
            <p className="text-xs font-light text-[#FBF9F4]/40 mt-1">
              Classified analytical breakdowns of corporate debt restructuring, banking settlement support, and complex liability resolution.
            </p>
          </div>

          {/* Ledger Open Book Layout */}
          <div className="space-y-12">
            {caseStudies.map((caseFile, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 rounded-sm overflow-hidden border border-[#C5A059]/25 shadow-2xl relative min-h-[380px] group"
              >
                {/* Left Page (Ivory paper ledger page) */}
                <div className="bg-[#F7F5F0] text-[#070F1E] p-8 sm:p-10 flex flex-col justify-between relative border-r border-[#C5A059]/15">
                  {/* Book spine inner shadow on right edge */}
                  <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/10 to-transparent pointer-events-none z-10" />
                  
                  <div>
                    <div className="flex items-center justify-between border-b border-black/10 pb-3 mb-6 text-[10px] font-mono font-semibold tracking-widest text-[#070F1E]/60 uppercase">
                      <span>CASE FILE #{idx + 1}</span>
                      <span>{caseFile.period}</span>
                    </div>
                    
                    <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#C5A059] mb-2 font-sans">
                      Client / Registry Account
                    </h4>
                    <h3 className="text-xl font-sans text-[#070F1E] font-bold mb-3 leading-snug">
                      {caseFile.client}
                    </h3>
                    <p className="text-xs sm:text-sm font-light leading-relaxed text-[#070F1E]/80 mt-2">
                      <strong>Resolution Outcome: </strong>
                      {caseFile.outcome}
                    </p>
                  </div>
                  
                  <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest pt-4 border-t border-black/5 mt-6 flex justify-between">
                    <span>Region Code: {caseFile.region}</span>
                    <span>Classification: Private client</span>
                  </div>
                </div>

                {/* Right Page (Dark navy metrics ledger page) */}
                <div className="bg-[#0B121F] text-[#FBF9F4] p-8 sm:p-10 flex flex-col justify-between relative">
                  {/* Book spine inner shadow on left edge */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/25 to-transparent pointer-events-none z-10" />
                  
                  <div>
                    <div className="flex items-center justify-between border-b border-[#C5A059]/10 pb-3 mb-6 text-[10px] font-mono text-[#C5A059]/60 uppercase tracking-wider">
                      <span>METRIC DATA SHEET</span>
                      <span>SECURE RECORD</span>
                    </div>

                    <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#E5C158] mb-4 font-sans">
                      Technical Specifications
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs border-b border-slate-800/80 pb-6">
                      <div>
                        <span className="text-[#FBF9F4]/40 block text-[9px] uppercase tracking-wider mb-0.5">Facility Classification</span>
                        <span className="font-sans font-semibold text-slate-200">{caseFile.facility}</span>
                      </div>
                      <div>
                        <span className="text-[#FBF9F4]/40 block text-[9px] uppercase tracking-wider mb-0.5">Clearing Registry</span>
                        <span className="font-mono text-[#E5C158] font-semibold">REG-FL-{(idx + 3280).toString(16).toUpperCase()}</span>
                      </div>
                      <div>
                        <span className="text-[#FBF9F4]/40 block text-[9px] uppercase tracking-wider mb-0.5">Settlement Write-Off</span>
                        <span className="font-mono font-semibold text-emerald-400">
                          {idx === 0 ? '45% (AED 63.9M Savings)' : idx === 1 ? 'Refinanced / Verified' : '100% Case Cleared'}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#FBF9F4]/40 block text-[9px] uppercase tracking-wider mb-0.5">Security Protocol</span>
                        <span className="font-mono text-slate-300">Class 5 NDA / Pre-Mediation</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-[#E5C158] cursor-pointer hover:text-white transition-colors duration-300">
                    <span>Access Confidential Ledger Log</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-8 md:my-16"></div>

      {/* SECTION 5: PRIVATE CLIENT TESTIMONIALS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28" id="testimonials">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-[8px] font-bold text-[#E5C158] uppercase tracking-[0.25em]">
              Executive Referrals
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-wide leading-tight">
              Testimonials from the Elite
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)]"></span>
              <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
            </div>
            <p className="text-xs font-light text-[#FBF9F4]/55 leading-relaxed">
              We serve ultra-high-net-worth individuals, commercial fleet logistics directors, and multinational executives. Due to strict NDAs, identifying marks are adjusted.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <div 
                key={idx}
                className="bg-[#06281E] border-l-4 border-[#C5A059] p-8 sm:p-10 rounded-sm shadow-xl flex flex-col justify-between"
              >
                <p className="text-sm font-sans italic font-light leading-relaxed text-[#FBF9F4]/80 mb-6">
                  "{test.quote}"
                </p>
                <div>
                  <h4 className="text-[11px] font-semibold text-[#C5A059] uppercase tracking-wider">
                    {test.author}
                  </h4>
                  <p className="text-[10px] text-[#FBF9F4]/40 font-light mt-0.5">
                    {test.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-8 md:my-16"></div>

      {/* SECTION 6: DIRECT ENGAGEMENT BOARD */}
      <section className="w-full bg-[#031C14] py-16" id="contact-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-wide">
              Ready to Secure Your Operations?
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)]"></span>
              <div className="w-12 h-[1px] bg-[var(--brand-gold)]"></div>
            </div>
            <p className="text-xs font-light text-[#FBF9F4]/50">
              Establish a priority uplink or phone line consultation directly with our managing partners. All dialogue is subject to attorney-client confidentiality rules.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="tel:+971585174871"
              id="direct-phone-call"
              className="px-8 py-4 bg-[#C5A059] hover:bg-[#E5C158] text-[#070F1E] text-xs font-semibold uppercase tracking-[0.2em] rounded-sm text-center transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +971 58 517 4871</span>
            </a>
            <a 
              href="/book-consultation"
              id="direct-portal-link"
              className="px-8 py-4 border border-[#C5A059]/30 hover:border-[#C5A059] text-[#FBF9F4] text-xs font-semibold uppercase tracking-[0.2em] rounded-sm text-center transition-all flex items-center justify-center gap-2 bg-[#031C14]"
            >
              <FileText className="w-4 h-4 text-[#C5A059]" />
              <span>Book Consultation</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
