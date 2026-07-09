import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Key, CheckCircle2, User, Phone, Mail, ChevronRight, Lock, Activity, ArrowUpRight, FileText } from 'lucide-react';

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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Debt Solutions',
    terms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Background rotater states
  const [bgIndex, setBgIndex] = useState(0);
  const [carouselSlide, setCarouselSlide] = useState(0);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const leadId = 'lead-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    const newPayload = {
      id: leadId,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      interest: formData.interest,
      terms: formData.terms,
      timestamp: new Date().toISOString(),
      status: 'New',
    };

    // 1. Save to LocalStorage
    try {
      const stored = localStorage.getItem('finloby_secure_payloads');
      const list = stored ? JSON.parse(stored) : [];
      list.push(newPayload);
      localStorage.setItem('finloby_secure_payloads', JSON.stringify(list));
    } catch (err) {
      console.error('LocalStorage write error:', err);
    }

    // 2. Submit via Web3Forms if API key is present
    const web3formsKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim();
    if (web3formsKey) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `Classified Client Intake Payload: ${formData.name}`,
            from_name: 'FINLOBY Security Intake',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            interest: formData.interest,
          }),
        });
      } catch (err) {
        console.error('Web3Forms dispatch error:', err);
      }
    }

    setLoading(false);
    setIsSubmitted(true);
  };

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
                  <div className="text-2xl font-serif text-[#C5A059]">AED 850M+</div>
                  <div className="text-[9px] uppercase tracking-wider text-[#FBF9F4]/40 mt-1">Liabilities Resolved</div>
                </div>
                <div>
                  <div className="text-2xl font-serif text-[#C5A059]">100%</div>
                  <div className="text-[9px] uppercase tracking-wider text-[#FBF9F4]/40 mt-1">Confidentiality Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-serif text-[#C5A059]">36+</div>
                  <div className="text-[9px] uppercase tracking-wider text-[#FBF9F4]/40 mt-1">Banking Partners</div>
                </div>
              </div>
            </div>

            {/* Right Column: Secure Intake Portal */}
            <div className="lg:col-span-5" id="secure-intake">
              <div className="bg-[#0D1625]/90 backdrop-blur-md border border-[#C5A059]/20 p-8 rounded-sm shadow-2xl relative overflow-hidden">
                {/* Top gold line indicator */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#9A7B3E] via-[#E5C158] to-[#E2C999]"></div>
                
                <div className="flex items-center justify-between border-b border-[#C5A059]/10 pb-4 mb-6">
                  <div>
                    <h2 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide">Secure Intake Portal</h2>
                    <p className="text-[10px] text-[#FBF9F4]/40 font-light mt-0.5">End-to-End Encrypted Liaison Uplink</p>
                  </div>
                  <div className="p-2 bg-[#070F1E] border border-[#C5A059]/20 rounded-full">
                    <Key className="w-4 h-4 text-[#C5A059]" />
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center flex flex-col items-center gap-4 animate-fade-in" id="intake-success" role="alert" aria-live="assertive">
                    <CheckCircle2 className="w-16 h-16 text-[#E5C158] animate-bounce" />
                    <h3 className="text-xl font-serif text-[#FBF9F4]">Secure Transmission Complete</h3>
                    <p className="text-xs font-light text-[#FBF9F4]/60 max-w-sm leading-relaxed">
                      Your corporate payload has been encrypted and routed directly to a Managing Partner. A secure communication channel will be established within four business hours.
                    </p>
                    <div className="text-[10px] text-[#C5A059]/60 font-mono mt-4 uppercase bg-[#070F1E] px-4 py-2 border border-[#C5A059]/10">
                      Uplink Code: SEC-{(Math.random() * 100000).toFixed(0)}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" id="intake-form">
                    
                    {/* Full Legal Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="intake-name" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                        Full Legal Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FBF9F4]/50" />
                        <input 
                          type="text" 
                          id="intake-name" 
                          required
                          placeholder="e.g. Alexander Vance"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-[#070F1E] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3.5 pl-10 pr-4 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:ring-offset-1 focus-visible:ring-offset-[#070F1E] focus:border-[#E5C158] transition-all font-light"
                        />
                      </div>
                    </div>

                    {/* Contact Number */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="intake-phone" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                        Contact Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FBF9F4]/50" />
                        <input 
                          type="tel" 
                          id="intake-phone" 
                          required
                          placeholder="e.g. +971 58 517 4871"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-[#070F1E] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3.5 pl-10 pr-4 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:ring-offset-1 focus-visible:ring-offset-[#070F1E] focus:border-[#E5C158] transition-all font-light"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="intake-email" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FBF9F4]/50" />
                        <input 
                          type="email" 
                          id="intake-email" 
                          required
                          placeholder="e.g. vance@holdingcompany.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-[#070F1E] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3.5 pl-10 pr-4 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:ring-offset-1 focus-visible:ring-offset-[#070F1E] focus:border-[#E5C158] transition-all font-light"
                        />
                      </div>
                    </div>

                    {/* Primary Area of Interest */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="intake-interest" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                        Primary Area of Interest
                      </label>
                      <div className="relative">
                        <select
                          id="intake-interest"
                          value={formData.interest}
                          onChange={(e) => setFormData({...formData, interest: e.target.value})}
                          className="w-full bg-[#070F1E] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3.5 px-4 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:ring-offset-1 focus-visible:ring-offset-[#070F1E] focus:border-[#E5C158] transition-all font-light appearance-none"
                        >
                          <option value="Debt Solutions" className="bg-[#0D1625] text-[#FBF9F4]">Debt Solutions (Restructuring, Settlement, Skip Solutions)</option>
                          <option value="Loans & Facilities" className="bg-[#0D1625] text-[#FBF9F4]">Loans & Facilities (Corporate Loans, Mortgage, STL)</option>
                          <option value="Business Setup" className="bg-[#0D1625] text-[#FBF9F4]">Business Setup (Mainland & Economic Zone formation)</option>
                          <option value="Investments" className="bg-[#0D1625] text-[#FBF9F4]">Investment / Capital Placement Programs</option>
                          <option value="Legal Assistance" className="bg-[#0D1625] text-[#FBF9F4]">Legal Assistance (Liability & Court Case support)</option>
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#C5A059]">
                          <ChevronRight className="w-4 h-4 rotate-90" />
                        </div>
                      </div>
                    </div>

                    {/* Terms Agreement */}
                    <div className="flex items-start gap-2.5 pt-2">
                      <input 
                        type="checkbox" 
                        id="intake-terms" 
                        required
                        checked={formData.terms}
                        onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                        className="mt-0.5 rounded-sm accent-[#C5A059]"
                      />
                      <label htmlFor="intake-terms" className="text-[10px] text-[#FBF9F4]/40 font-light leading-relaxed">
                        I authorize the transmission of this data and request execution of a mutual Non-Disclosure Agreement (NDA) prior to disclosures.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="intake-submit-btn"
                      disabled={loading}
                      className="w-full bg-[#C5A059] hover:bg-[#E5C158] text-[#070F1E] py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all rounded-sm duration-300 mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? 'Initiating Security Uplink...' : 'Establish Secure Uplink'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1.5: BESPOKE PORTFOLIO DIAGNOSTIC ENGINE PLACEHOLDER */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 pb-20 md:pb-24 lg:pb-32" id="estimator-section">
        <div className="bg-[#0D1625] border border-[#C5A059]/20 p-8 sm:p-12 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#9A7B3E] via-[#E5C158] to-[#E2C999]"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-[#C5A059]/10 pb-6 mb-8 gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E5C158] flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-[#E5C158] animate-pulse" />
                Classified Diagnostics Hub
              </span>
              <h2 className="text-2xl font-serif text-[#FBF9F4] font-medium tracking-wide">
                Bespoke Portfolio Diagnostic Engine
              </h2>
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
            <h3 className="text-lg font-serif text-[#FBF9F4] font-light mb-2 uppercase tracking-wider">
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

      {/* SECTION 2: GLOBAL INFRASTRUCTURE MARQUEE */}
      <section className="w-full bg-[#0D1625] border-y border-[#C5A059]/15 py-5 overflow-hidden relative" id="marquee-section">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070F1E] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070F1E] to-transparent z-10 pointer-events-none"></div>
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-12 text-[#C5A059] font-serif text-sm tracking-[0.3em] font-medium pr-12">
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
          </div>
          <div className="flex items-center gap-12 text-[#C5A059] font-serif text-sm tracking-[0.3em] font-medium pr-12 select-none" aria-hidden="true">
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
            <span>DUBAI DIFC ◆ LONDON CITY ◆ SINGAPORE MARINA ◆ NEW DELHI CORRIDOR</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: PORTFOLIO PILLARS SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28" id="portfolios">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-semibold text-[#E5C158] uppercase tracking-[0.25em]">
              Strategic Assets
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#FBF9F4] font-light">
              Core Portfolio Pillars
            </h2>
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
              className="bg-[#101926] text-[#FBF9F4] p-8 sm:p-10 flex flex-col justify-between min-h-[420px] rounded-none border-l-4 border-[#E5C158] border border-slate-800/80 transform transition-all duration-500 hover:-translate-y-2 hover:border-[#E5C158]/55 hover:shadow-[0_20px_40px_rgba(229,193,88,0.08)] group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl font-serif font-semibold text-[#E5C158]">
                    {item.num}
                  </span>
                  <div className="p-2 bg-[#070F1E] rounded-full text-[#E5C158] group-hover:bg-[#E5C158] group-hover:text-[#070F1E] transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                
                <h3 className="text-sm font-serif font-semibold uppercase tracking-[0.2em] text-white mb-4 leading-relaxed group-hover:text-[#E5C158] transition-colors">
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
                    <span className="text-[#E5C158] text-[8px] font-serif">◆</span>
                    <span className="font-sans font-semibold text-[#FBF9F4] tracking-wider hover:text-[#E5C158] transition-colors">{srv}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 4: HISTORICAL CLIENT ANALYSIS (CASE STUDIES - BOOK THEME) */}
      <section className="w-full bg-[#050B15] border-y border-[#C5A059]/10 py-20 sm:py-28" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col gap-3 mb-16 text-center max-w-xl mx-auto">
            <span className="text-[10px] font-semibold text-[#E5C158] uppercase tracking-[0.25em]">
              Verified Outcomes
            </span>
            <h2 className="text-4xl font-serif text-[#FBF9F4] font-light">
              Historical Client Case Files
            </h2>
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
                    
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C5A059] mb-2 font-sans">
                      Client / Registry Account
                    </h4>
                    <h3 className="text-2xl font-serif text-[#070F1E] font-medium mb-4 leading-snug">
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

                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#E5C158] mb-4 font-sans">
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

      {/* SECTION 5: PRIVATE CLIENT TESTIMONIALS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28" id="testimonials">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] font-semibold text-[#E5C158] uppercase tracking-[0.25em]">
              Executive Referrals
            </span>
            <h2 className="text-4xl font-serif text-[#FBF9F4] font-light leading-tight">
              Testimonials from the Elite
            </h2>
            <p className="text-xs font-light text-[#FBF9F4]/50 leading-relaxed">
              We serve ultra-high-net-worth individuals, commercial fleet logistics directors, and multinational executives. Due to strict NDAs, identifying marks are adjusted.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <div 
                key={idx}
                className="bg-[#0D1625] border-l-4 border-[#C5A059] p-8 sm:p-10 rounded-sm shadow-xl flex flex-col justify-between"
              >
                <p className="text-sm font-serif italic font-light leading-relaxed text-[#FBF9F4]/80 mb-6">
                  "{test.quote}"
                </p>
                <div>
                  <h4 className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
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

      {/* SECTION 6: DIRECT ENGAGEMENT BOARD */}
      <section className="w-full bg-[#0D1625] py-16 border-t border-[#C5A059]/10" id="contact-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-xl">
            <h3 className="text-2xl font-serif text-[#FBF9F4] font-light">
              Ready to Secure Your Operations?
            </h3>
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
              href="#secure-intake"
              id="direct-portal-link"
              className="px-8 py-4 border border-[#C5A059]/30 hover:border-[#C5A059] text-[#FBF9F4] text-xs font-semibold uppercase tracking-[0.2em] rounded-sm text-center transition-all flex items-center justify-center gap-2 bg-[#070F1E]/80"
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
