import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight, ArrowUpRight, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { BorderBeam } from '../components/ui/BorderBeam';
import { TextShimmer } from '../components/ui/TextShimmer';

const portfolios = [
  {
    num: 'I',
    title: 'Debt Solutions & Restructuring',
    desc: 'Bespoke personal and corporate debt settlement, consolidation, and liability negotiations designed to restore financial equilibrium with absolute discretion.',
    services: ['Debt Counselling', 'Debt Consolidation', 'Debt Restructuring', 'Debt Settlement'],
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
    desc: 'Seamless mainland and free zone company formation, banking introduction, MOA drafting, and corporate sponsorship services in the UAE and globally.',
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
    quote: "I was really stressed with the overdue of the credit card payments. They took care of all the paperwork, negotiated with the banks on my behalf and sorted out a payment plan I could actually manage. Now I’m totally out of debt trouble and was even able to get a new loan. I’m just really thankful for their help.",
    author: "Ahammad Jassim",
    company: "Credit Card Restructuring & Debt Settlement",
  },
  {
    quote: "I originally approached Finloby for a personal loan, but my high DBR was a major roadblock. The team stepped in with a brilliant solution, they restructured my existing loan to lower my burden and successfully secured my new loan, complete with a much needed two month deferment. Finloby made what seemed impossible seamless and stress free. I highly recommend their expertise!",
    author: "John",
    company: "Personal Loan & Debt Restructuring Facility",
  },
];

const heroBadges = [
  {
    title: 'CONSOLIDATION AND SETTLEMENT OF CREDIT CARDS',
    img: '/consolidation_loans.jpg'
  },
  {
    title: 'MORTGAGE LOAN AND TOP UP FACILITIES',
    img: '/sovereign_asset.jpg'
  },
  {
    title: 'PROJECT AND MACHINERY FINANCE',
    img: '/wealth_insulation.jpg'
  },
  {
    title: 'POLICE CASE AND TRAVEL BAN CLEARANCE',
    img: '/police_clearance.jpg'
  },
  {
    title: 'INVESTMENT AND INVESTMENT SEEKER',
    img: '/corporate_restructuring.jpg'
  },
  {
    title: 'MAINLAND AND FREEZONE BUSINESS SET UP',
    img: '/economic_zone.jpg'
  },
  {
    title: 'FINANCIAL CONSULTANCY AND LEGAL SERVICES',
    img: '/financial_consultancy.jpg'
  },
  {
    title: 'PERSONAL AND BUSINESS FINANCE',
    img: '/personal_business_finance.png'
  }
];

export default function Home() {
  const SHOW_CASE_STUDIES = false;
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
      <SEO
        title="FINLOBY | Visionary Wealth. Absolute Protection."
        description="FINLOBY is an ultra-luxury financial consultancy specializing in institutional debt solutions, loans & commercial facilities, international business setup, investments, and cross-border legal assistance."
        keywords="financial consultancy, debt solutions, corporate debt restructuring, commercial loans, company setup Dubai, wealth protection, cross-border legal support, FINLOBY"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "FINLOBY",
          "url": "https://finloby.com",
          "logo": "https://finloby.com/finloby-white.png",
          "description": "FINLOBY is an ultra-luxury financial consultancy specializing in institutional debt solutions, loans & commercial facilities, international business setup, investments, and cross-border legal assistance.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Ameri Business Tower, Suite #21-02, Barsha Heights, Tecom",
            "addressLocality": "Dubai Media City",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
          },
          "telephone": "+971585174871",
          "email": "info@finloby.com",
          "sameAs": [
            "https://www.linkedin.com/company/finloby"
          ]
        }}
      />
      
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
        <div className="w-full pt-48 sm:pt-52 lg:pt-60 xl:pt-64 pb-6 relative z-20 select-none overflow-hidden">
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
                <TextShimmer className="font-normal italic">Absolute Protection.</TextShimmer>
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
                <Link 
                  to="/book-consultation" 
                  id="hero-consult-btn"
                  className="px-8 py-4 border border-[#C5A059]/30 text-[#FBF9F4] text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#E5C158] hover:bg-[#E5C158]/5 transition-all duration-300 rounded-sm text-center"
                >
                  Secure Consultation
                </Link>
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
                <BorderBeam duration={12} delay={0} size={150} />
                
                <div className="flex items-center justify-between border-b border-[var(--brand-gold)]/10 pb-4">
                  <div>
                    <h2 className="text-lg font-sans font-bold text-white tracking-wide">Global Market Terminal</h2>
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
                <div className="max-h-[380px] overflow-y-auto pr-1">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[var(--brand-gold)]/20 text-[9px] uppercase tracking-wider text-[#E5C158]/80 font-mono">
                        <th className="py-2.5 pb-3">Country / Currency</th>
                        <th className="py-2.5 pb-3 text-right">Dirham Exchange Rate (AED)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--brand-gold)]/5">
                      {(() => {
                        const baseAED = 3.6725;
                        const names: Record<string, string> = {
                          USD: 'United States',
                          EUR: 'Euro Zone',
                          GBP: 'United Kingdom',
                          INR: 'India',
                          PKR: 'Pakistan',
                          SGD: 'Singapore',
                          CAD: 'Canada',
                          AUD: 'Australia',
                          CHF: 'Switzerland',
                          KWD: 'Kuwait',
                          OMR: 'Oman',
                          SAR: 'Saudi Arabia',
                          QAR: 'Qatar',
                          JPY: 'Japan',
                          CNY: 'China',
                          HKD: 'Hong Kong',
                          MYR: 'Malaysia',
                          THB: 'Thailand',
                          NZD: 'New Zealand',
                          BDT: 'Bangladesh'
                        };
                        const flagMap: Record<string, string> = {
                          USD: 'us',
                          EUR: 'eu',
                          GBP: 'gb',
                          INR: 'in',
                          PKR: 'pk',
                          SGD: 'sg',
                          CAD: 'ca',
                          AUD: 'au',
                          CHF: 'ch',
                          KWD: 'kw',
                          OMR: 'om',
                          SAR: 'sa',
                          QAR: 'qa',
                          JPY: 'jp',
                          CNY: 'cn',
                          HKD: 'hk',
                          MYR: 'my',
                          THB: 'th',
                          NZD: 'nz',
                          BDT: 'bd'
                        };

                        const currencyEntries = [
                          { code: 'USD', value: 1.0 },
                          ...Object.entries(rates).filter(([code]) => code !== 'AED').map(([code, value]) => ({ code, value }))
                        ];

                        return currencyEntries.map(({ code, value }) => {
                          const rateInAED = baseAED / value;
                          const decimals = code === 'OMR' || code === 'KWD' ? 3 : (rateInAED < 0.1 ? 3 : 2);
                          
                          return (
                            <tr key={code} className="hover:bg-[#031C14]/50 transition-colors duration-200">
                              <td className="py-2.5 pr-2">
                                <div className="flex items-center gap-2">
                                  <img 
                                    src={`https://flagcdn.com/w20/${flagMap[code]}.png`} 
                                    width="16" 
                                    alt={code} 
                                    className="h-3 w-5 object-cover rounded-sm border border-slate-700/50"
                                  />
                                  <div className="flex flex-col">
                                    <span className="text-[11px] font-bold text-white font-sans leading-none">{code}</span>
                                    <span className="text-[8px] text-white/50 mt-0.5">{names[code]}</span>
                                  </div>
                                </div>
                              </td>
                              <td className="py-2.5 text-right font-mono text-[11px] font-medium text-[var(--brand-gold-light)]">
                                <span className="text-white/60">1.00 {code} = </span>
                                <span className="text-white font-bold">{rateInAED.toFixed(decimals)}</span>
                                <span className="text-[#E5C158] font-semibold text-[9px] ml-1">AED</span>
                              </td>
                            </tr>
                          );
                        });
                      })()}
                    </tbody>
                  </table>
                </div>

                <div className="border-t border-[var(--brand-gold)]/10 pt-3 text-[9px] text-white/40 font-mono text-center">
                  Feed secured via 256-bit institutional API uplink
                </div>
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-medium text-center mt-3 block">
                  Data Registry Archive • Market Rates Cached Daily at 00:00 GMT via Authorized Regional Channels
                </span>
              </div>
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
          <div className="flex items-center gap-12 text-[#C5A059] font-sans text-xs tracking-[0.25em] font-semibold pr-12">
            <span>KEZAD GROUP ◆ DUBAI SOUTH (DWC) ◆ JAFZA (JEBEL ALI) ◆ HAMRIYAH FREE ZONE (HFZA) ◆ RAKEZ ◆ DMCC ◆ DUBAI SILICON OASIS (DSO) ◆ SAIF ZONE ◆ AJMAN FREE ZONE (AFZ) ◆ DAFZA ◆ DIFC ◆ ADGM ◆ SHARJAH MEDIA CITY (SHAMS) ◆ MEYDAN FREE ZONE</span>
            <span>KEZAD GROUP ◆ DUBAI SOUTH (DWC) ◆ JAFZA (JEBEL ALI) ◆ HAMRIYAH FREE ZONE (HFZA) ◆ RAKEZ ◆ DMCC ◆ DUBAI SILICON OASIS (DSO) ◆ SAIF ZONE ◆ AJMAN FREE ZONE (AFZ) ◆ DAFZA ◆ DIFC ◆ ADGM ◆ SHARJAH MEDIA CITY (SHAMS) ◆ MEYDAN FREE ZONE</span>
          </div>
          <div className="flex items-center gap-12 text-[#C5A059] font-sans text-xs tracking-[0.25em] font-semibold pr-12 select-none" aria-hidden="true">
            <span>KEZAD GROUP ◆ DUBAI SOUTH (DWC) ◆ JAFZA (JEBEL ALI) ◆ HAMRIYAH FREE ZONE (HFZA) ◆ RAKEZ ◆ DMCC ◆ DUBAI SILICON OASIS (DSO) ◆ SAIF ZONE ◆ AJMAN FREE ZONE (AFZ) ◆ DAFZA ◆ DIFC ◆ ADGM ◆ SHARJAH MEDIA CITY (SHAMS) ◆ MEYDAN FREE ZONE</span>
            <span>KEZAD GROUP ◆ DUBAI SOUTH (DWC) ◆ JAFZA (JEBEL ALI) ◆ HAMRIYAH FREE ZONE (HFZA) ◆ RAKEZ ◆ DMCC ◆ DUBAI SILICON OASIS (DSO) ◆ SAIF ZONE ◆ AJMAN FREE ZONE (AFZ) ◆ DAFZA ◆ DIFC ◆ ADGM ◆ SHARJAH MEDIA CITY (SHAMS) ◆ MEYDAN FREE ZONE</span>
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

      {SHOW_CASE_STUDIES && (
        <>
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
        </>
      )}

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
