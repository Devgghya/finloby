import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Mail, Phone, Clock, Lock } from 'lucide-react';

interface LinkItem {
  name: string;
  href: string;
}

interface NavColumn {
  title: string;
  links: LinkItem[];
}

interface NavItem {
  name: string;
  href?: string;
  type: 'direct' | 'dropdown' | 'mega';
  columns?: NavColumn[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/', type: 'direct' },
  {
    name: 'Debt Solutions',
    type: 'dropdown',
    columns: [
      {
        title: 'Personal Solutions',
        links: [
          { name: 'Debt Counselling', href: '/debt-solutions#debt-counselling' },
          { name: 'Debt Consolidation', href: '/debt-solutions#debt-consolidation' },
          { name: 'Debt Settlement', href: '/debt-solutions#debt-settlement' },
          { name: 'Debt Restructuring', href: '/debt-solutions#debt-restructuring' },
          { name: 'Skip Solutions', href: '/debt-solutions#skip-solutions' },
        ],
      },
      {
        title: 'Corporate Solutions',
        links: [
          { name: 'Debt Counselling', href: '/debt-solutions#debt-counselling' },
          { name: 'Debt Consolidation', href: '/debt-solutions#debt-consolidation' },
          { name: 'Debt Settlement', href: '/debt-solutions#debt-settlement' },
          { name: 'Debt Restructuring', href: '/debt-solutions#debt-restructuring' },
          { name: 'Skip Solutions', href: '/debt-solutions#skip-solutions' },
        ],
      },
    ],
  },
  {
    name: 'Loans & Facilities',
    type: 'mega',
    columns: [
      {
        title: 'Personal Finance',
        links: [
          { name: 'Salary Transfer Loan', href: '/loans#personal-finance' },
          { name: 'Post Dated Cheque Loan', href: '/loans#personal-finance' },
          { name: 'Consolidation Loans', href: '/loans#personal-finance' },
        ],
      },
      {
        title: 'Vehicle / Auto Loan',
        links: [
          { name: 'Vehicle Loan', href: '/loans#vehicle-mortgage' },
          { name: 'Fleet Loan', href: '/loans#vehicle-mortgage' },
        ],
      },
      {
        title: 'Credit Card',
        links: [
          { name: 'Credit Cards Portal', href: '/loans#vehicle-mortgage' },
        ],
      },
      {
        title: 'Business Loan',
        links: [
          { name: 'Retail Business Loans', href: '/loans#business-loan' },
          { name: 'Loan Against Card', href: '/loans#business-loan' },
          { name: 'Corporate Term Finance', href: '/loans#business-loan' },
          { name: 'Machinery Finance', href: '/loans#business-loan' },
        ],
      },
      {
        title: 'Mortgage Loan',
        links: [
          { name: 'Home Loans & Mortgages', href: '/loans#vehicle-mortgage' },
        ],
      },
      {
        title: 'Insurance',
        links: [
          { name: 'Insurance Portal Link', href: '/loans#vehicle-mortgage' },
        ],
      },
    ],
  },
  {
    name: 'Business Setup',
    type: 'dropdown',
    columns: [
      {
        title: 'Licensing',
        links: [
          { name: 'Mainland LLC Setup', href: '/business-setup#licensing' },
          { name: 'Economic Zone Setup', href: '/business-setup#licensing' },
        ],
      },
      {
        title: 'Business',
        links: [
          { name: 'MOA & Articles Drafting', href: '/business-setup#business-services' },
          { name: 'PRO & Sponsorships', href: '/business-setup#business-services' },
          { name: 'Office Set Up Quotas', href: '/business-setup#business-services' },
        ],
      },
      {
        title: 'Banking',
        links: [
          { name: 'Corporate Account Opening', href: '/business-setup#banking-liaison' },
          { name: 'Assignment of Authority', href: '/business-setup#banking-liaison' },
        ],
      },
    ],
  },
  {
    name: 'Investment/Finance',
    type: 'dropdown',
    columns: [
      {
        title: 'Capital Programs',
        links: [
          { name: 'Investor Channel', href: '/investments' },
          { name: 'Investment Seeker', href: '/investments' },
        ],
      },
    ],
  },
  {
    name: 'Legal Assistance',
    type: 'dropdown',
    columns: [
      {
        title: 'Banking Collections',
        links: [
          { name: 'Restructuring Mediation', href: '/legal-assistance#banking-collections' },
          { name: 'Settlement Supports', href: '/legal-assistance#banking-collections' },
        ],
      },
      {
        title: 'Legal Support',
        links: [
          { name: 'Police Case Clearance', href: '/legal-assistance#legal-defense' },
          { name: 'Court Cases Representation', href: '/legal-assistance#legal-defense' },
          { name: 'Skip Solutions (Cross Border)', href: '/legal-assistance#skip-assistance' },
        ],
      },
    ],
  },
  { name: 'Calculator', href: '/calculator', type: 'direct' },
  { name: 'Testimonials', href: '/#testimonials', type: 'direct' },
  { name: 'Case Study', href: '/#case-studies', type: 'direct' },
  { name: 'About Us', href: '/about-us', type: 'direct' },
  { name: 'Contact Us', href: '/#contact-us', type: 'direct' },
  { name: 'Blogs', href: '/blogs', type: 'direct' },
  { name: 'Book Consultation', href: '/book-consultation', type: 'direct' },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const handleMouseEnter = (name: string, type: 'direct' | 'dropdown' | 'mega') => {
    if (type !== 'direct') {
      setActiveDropdown(name);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileSubmenu = (name: string) => {
    if (activeMobileSubmenu === name) {
      setActiveMobileSubmenu(null);
    } else {
      setActiveMobileSubmenu(name);
    }
  };

  const primaryNavItems = navItems.filter(item => item.type === 'direct');
  const servicesNavItems = navItems.filter(item => item.type !== 'direct');

  return (
    <header className="w-full z-50 flex flex-col bg-[#070F1E] border-b border-[#C5A059]/10 fixed top-0 left-0 right-0">
      
      {/* 1. TOP CORPORATE UTILITY BAR */}
      <div className="w-full bg-[#050B15] text-white font-bold text-[10px] sm:text-xs py-2 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-[#C5A059]/5">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 font-bold text-white">
            <Clock className="w-3 h-3 text-[#E5C158]" />
            <span>Operational Hours: Mon - Fri: 09:00 - 18:00 (GMT+4)</span>
          </span>
          <span className="hidden md:flex items-center gap-2 font-bold text-white">
            <Lock className="w-3 h-3 text-[#E5C158] animate-pulse" />
            <span>Secure 256-Bit SSL Uplink</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:info@finloby.com" id="nav-email-link" className="flex items-center gap-1.5 hover:text-[#E5C158] transition-colors font-bold text-white">
            <Mail className="w-3 h-3 text-[#E5C158]" />
            <span>info@finloby.com</span>
          </a>
          <a href="tel:+971585174871" id="nav-phone-link" className="flex items-center gap-1.5 hover:text-[#E5C158] transition-colors font-bold text-white">
            <Phone className="w-3 h-3 text-[#E5C158]" />
            <span>+971 58 517 4871</span>
          </a>
        </div>
      </div>

      {/* 2. DOUBLE-DECKER: UPPER DECK (Logo & Primary Menu) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-8">
        
        {/* Brand Logo Container */}
        <Link to="/" id="brand-logo" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
          <img 
            src="/finloby-white.png" 
            alt="Finloby Shield" 
            className="h-10 sm:h-16 w-auto object-contain transition-all duration-300" 
          />
          <span className="font-sans font-black text-xs sm:text-base uppercase tracking-[0.25em] text-white group-hover:text-[var(--brand-gold-light)] transition-all duration-300 flex-shrink-0">
            FINLOBY
          </span>
        </Link>

        {/* Desktop Primary Menu */}
        <div className="hidden xl:flex items-center gap-x-6 text-[13px] font-semibold text-white">
          {primaryNavItems.filter(item => item.name !== 'Book Consultation').map((item) => (
            <Link
              key={item.name}
              to={item.href || '/'}
              id={`primary-nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-[var(--brand-gold-light)] transition-all duration-300 py-1 whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/book-consultation"
            id="primary-nav-cta-btn"
            className="border border-[var(--brand-gold)] px-4 py-2 text-xs font-semibold tracking-wider text-white hover:bg-[var(--brand-gold-light)] hover:border-[var(--brand-gold-light)] hover:text-[var(--text-contrast)] transition-all duration-300 rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.1)] ml-2"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden text-[#FBF9F4] hover:text-[#E5C158] transition-colors p-1 flex-shrink-0"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 3. DOUBLE-DECKER: LOWER DECK */}
      <nav 
        aria-label="Main navigation"
        className="hidden xl:block w-full border-t border-[#C5A059]/10 bg-[#050B15]/50 relative"
        onMouseLeave={handleMouseLeave}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) { setTimeout(() => setActiveDropdown(null), 150); } }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center text-[13px] font-semibold text-[#FBF9F4]">
          <div className="flex items-center justify-center gap-x-8">
            {servicesNavItems.map((item, index) => (
              <div
                key={item.name}
                className="relative py-1 flex items-center"
                onMouseEnter={() => handleMouseEnter(item.name, item.type)}
                onFocus={() => handleMouseEnter(item.name, item.type)}
              >
                {index > 0 && (
                  <span className="w-[3px] h-[3px] rounded-full bg-[#C5A059]/25 mx-4 flex-shrink-0" />
                )}

                <button
                  type="button"
                  id={`nav-btn-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`hover:text-[var(--brand-gold-light)] transition-all duration-300 flex items-center gap-1 py-1 cursor-pointer text-[13px] ${
                    activeDropdown === item.name ? 'text-[var(--brand-gold-light)]' : ''
                  }`}
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup="true"
                >
                  <span>{item.name}</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {/* Dropdowns */}
                {item.type === 'dropdown' && activeDropdown === item.name && item.columns && (
                  <div 
                    id={`dropdown-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#0D1625]/98 backdrop-blur-md border border-[#C5A059]/15 shadow-[0_15px_30px_rgba(0,0,0,0.6)] p-6 rounded-sm z-50 grid gap-6 ${
                      item.name === 'Business Setup' ? 'w-[540px] grid-cols-3' : 'w-[420px] grid-cols-2'
                    }`}
                  >
                    {item.columns.map((col, idx) => (
                      <div key={idx} className="flex flex-col">
                        <h4 className="text-[9px] font-bold text-[#E5C158] uppercase tracking-[0.2em] border-b border-[#C5A059]/10 pb-1.5 mb-2.5">
                          {col.title}
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {col.links.map((link, lIdx) => (
                            <li key={lIdx}>
                              <Link
                                to={link.href}
                                className="text-[11px] text-[#FBF9F4]/80 hover:text-[var(--brand-gold-light)] transition-all duration-200 flex items-center gap-1.5 group/link"
                              >
                                <span className="text-[var(--brand-gold)] opacity-60 group-hover/link:opacity-100 transition-opacity duration-200 text-[8px] font-sans">◆</span>
                                <span className="leading-snug">{link.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. MEGA MENU DROPDOWN */}
        {activeDropdown && navItems.find((i) => i.name === activeDropdown)?.type === 'mega' && (
          <div 
            id="mega-dropdown-panel"
            className="absolute top-full left-0 w-full bg-[#0D1625]/98 backdrop-blur-md border-y border-[#C5A059]/15 shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-50"
          >
            <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-6 gap-6">
              {navItems.find((i) => i.name === activeDropdown)?.columns?.map((col, idx) => (
                <div key={idx} className="flex flex-col">
                  <h4 className="text-[9px] font-bold text-[#E5C158] uppercase tracking-[0.2em] border-b border-[#C5A059]/15 pb-1.5 mb-3">
                    {col.title}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {col.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          to={link.href}
                          className="text-[11px] text-[#FBF9F4]/75 hover:text-[var(--brand-gold-light)] transition-all duration-200 flex items-center gap-1.5 group/link"
                        >
                          <span className="text-[var(--brand-gold)] opacity-60 group-hover/link:opacity-100 transition-opacity duration-200 text-[8px] font-sans">◆</span>
                          <span className="leading-snug">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 5. MOBILE / TABLET MENU DRAWER */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="xl:hidden absolute top-full left-0 w-full bg-[#0D1625]/98 backdrop-blur-lg border-b border-[#C5A059]/15 shadow-2xl z-40 max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <div className="px-6 py-6 flex flex-col gap-6">
            <nav className="flex flex-col gap-3.5">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {item.type === 'direct' ? (
                    <Link
                      to={item.href || '/'}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FBF9F4]/95 hover:text-[#E5C158] py-2 border-b border-[#C5A059]/5"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FBF9F4]/95 hover:text-[#E5C158] py-2 border-b border-[#C5A059]/5 flex justify-between items-center"
                        aria-expanded={activeMobileSubmenu === item.name}
                        aria-haspopup="true"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-[#E5C158] transition-transform duration-300 ${
                          activeMobileSubmenu === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {activeMobileSubmenu === item.name && item.columns && (
                        <div className="pl-4 py-2.5 flex flex-col gap-4 bg-[#070F1E]/50 rounded-sm mt-1 border-l border-[#C5A059]/20">
                          {item.columns.map((col, idx) => (
                            <div key={idx} className="flex flex-col">
                              <h5 className="text-[9px] font-bold text-[#E5C158] uppercase tracking-[0.15em] mb-1.5">
                                {col.title}
                              </h5>
                              <ul className="flex flex-col gap-2">
                                {col.links.map((link, lIdx) => (
                                  <li key={lIdx}>
                                    <Link
                                      to={link.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-xs text-[#FBF9F4]/75 hover:text-[var(--brand-gold-light)] flex items-center gap-1.5 py-0.5"
                                    >
                                      <span className="text-[var(--brand-gold)] opacity-70 text-[8px] font-sans">◆</span>
                                      <span>{link.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Contact Block */}
            <div className="border-t border-[#C5A059]/10 pt-4 flex flex-col gap-2.5 text-xs text-[#FBF9F4]/50">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E5C158]" />
                <a href="tel:+971585174871" className="hover:text-[#E5C158] text-white font-semibold">+971 58 517 4871</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E5C158]" />
                <a href="mailto:info@finloby.com" className="hover:text-[#E5C158] text-white font-semibold">info@finloby.com</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
