import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, Lock, Landmark, Database } from 'lucide-react';

export default function Footer() {
  const [logoSrc, setLogoSrc] = useState('/finloby-white.png');

  useEffect(() => {
    const updateLogo = () => {
      const currentTheme = localStorage.getItem('finloby-active-theme') || 'default';
      const isLight = currentTheme === 'warm-alabaster' || currentTheme === 'platinum-ice';
      setLogoSrc(isLight ? '/finloby.png' : '/finloby-white.png');
    };

    updateLogo();
    window.addEventListener('theme-change', updateLogo);
    return () => window.removeEventListener('theme-change', updateLogo);
  }, []);
  return (
    <footer className="w-full bg-[#050B15] border-t border-[#C5A059]/15 text-[#FBF9F4]/70 pt-16 pb-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand & Mission Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img 
              src={logoSrc} 
              alt="Finloby Shield" 
              className="h-14 w-auto object-contain" 
            />
            <span className="font-serif tracking-[0.3em] uppercase text-base text-[#FBF9F4]">
              FINLOBY
            </span>
          </div>
          <p className="text-xs font-light leading-relaxed text-[#FBF9F4]/50 max-w-sm mt-2">
            Institutional debt restructuring, complex commercial facilities, international business setup, and legal defense services for high-profile clients and global corporations.
          </p>
          <div className="flex gap-4 mt-2">
            <span className="p-2 bg-[#0D1625] rounded-sm border border-[#C5A059]/10">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            </span>
            <span className="p-2 bg-[#0D1625] rounded-sm border border-[#C5A059]/10">
              <Lock className="w-4 h-4 text-[#C5A059]" />
            </span>
            <span className="p-2 bg-[#0D1625] rounded-sm border border-[#C5A059]/10">
              <Landmark className="w-4 h-4 text-[#C5A059]" />
            </span>
          </div>
        </div>

        {/* Corporate Headquarters */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-semibold text-[#C5A059] uppercase tracking-[0.25em] border-b border-[#C5A059]/10 pb-2">
            Headquarters
          </h4>
          <div className="flex gap-3 text-xs leading-relaxed font-light mt-1">
            <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
            <address className="not-italic text-[#FBF9F4]/60">
              Al Ameri Business Tower,<br />
              Office Suite #21-02, Barsha Heights,<br />
              Tecom - Dubai Media City,<br />
              Dubai, UAE
            </address>
          </div>
        </div>

        {/* Central Registry Contacts */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-semibold text-[#C5A059] uppercase tracking-[0.25em] border-b border-[#C5A059]/10 pb-2">
            Central Registry
          </h4>
          <ul className="flex flex-col gap-3.5 text-xs font-light mt-1">
            <li>
              <a href="tel:+971585174871" id="footer-phone" className="flex items-center gap-3 hover:text-[#C5A059] transition-colors">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>+971 58 517 4871</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@finloby.com" id="footer-email" className="flex items-center gap-3 hover:text-[#C5A059] transition-colors">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>info@finloby.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Shortcuts */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-semibold text-[#C5A059] uppercase tracking-[0.25em] border-b border-[#C5A059]/10 pb-2">
            Quick Nav
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs font-light mt-1">
            <Link to="/debt-solutions" id="footer-link-debt" className="hover:text-[#C5A059] transition-colors">Debt Solutions</Link>
            <Link to="/loans" id="footer-link-loans" className="hover:text-[#C5A059] transition-colors">Loans & Facilities</Link>
            <Link to="/business-setup" id="footer-link-setup" className="hover:text-[#C5A059] transition-colors">Business Setup</Link>
            <Link to="/investments" id="footer-link-investments" className="hover:text-[#C5A059] transition-colors">Investments</Link>
            <Link to="/legal-assistance" id="footer-link-legal" className="hover:text-[#C5A059] transition-colors">Legal Assistance</Link>
            <Link to="/#case-studies" id="footer-link-cases" className="hover:text-[#C5A059] transition-colors">Case Studies</Link>
          </div>
        </div>

      </div>

      {/* Compliance & Institutional Protection Section */}
      <div className="max-w-7xl mx-auto border border-[#C5A059]/15 bg-[#0D1625]/60 p-6 sm:p-8 rounded-sm mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Legal Description */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            <h5 className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em] flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
              Data Security & Non-Disclosure Directive (NDA)
            </h5>
            <p className="text-[11px] font-light leading-relaxed text-[#FBF9F4]/60">
              FINLOBY operates under strict regulatory compliance parameters governed by the UAE Central Bank directives and UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL). All client files, debt restructuring accounts, commercial facility proposals, and corporate setup logs are subject to absolute, legally binding Non-Disclosure Agreements (NDAs). 
            </p>
            <p className="text-[11px] font-light leading-relaxed text-[#FBF9F4]/40">
              Pursuant to UAE local financial advisory regulations, we enforce absolute file confidentiality protocols utilizing zero-knowledge cryptographic transmission and isolated network storage. No financial telemetry or identity logs are shared with external credit registers, corporate registries, or cross-border entities without explicit sovereign assignment of authority.
            </p>
          </div>

          {/* Structured Security Parameters Grid */}
          <div className="lg:col-span-4 bg-[#070F1E]/80 border border-[#C5A059]/10 p-5 rounded-sm flex flex-col gap-3">
            <h6 className="text-[9px] font-bold text-[#C5A059] uppercase tracking-[0.2em] border-b border-[#C5A059]/10 pb-1.5 flex items-center justify-between">
              <span>Security Parameter Matrix</span>
              <span className="text-[8px] bg-[#C5A059]/10 text-[#C5A059] px-1.5 py-0.5 rounded-sm">ACTIVE</span>
            </h6>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[10px] font-light text-[#FBF9F4]/60">
              <div>NDA Requirement:</div>
              <div className="text-right text-[#C5A059] font-medium">Mandatory / Pre-Dialogue</div>
              
              <div>Cryptographic Cipher:</div>
              <div className="text-right text-[#FBF9F4]">AES-256 E2EE</div>
              
              <div>Confidentiality Level:</div>
              <div className="text-right text-[#FBF9F4]">Absolute / Private Client</div>
              
              <div>Regulatory Frame:</div>
              <div className="text-right text-[#E2C999] font-medium">UAE Federal PDPL / CBUAE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-[#C5A059]/10 pt-8 text-[10px] font-light text-[#FBF9F4]/40">
        <div>
          © {new Date().getFullYear()} FINLOBY. All rights reserved.
        </div>
        <div className="flex gap-6 items-center">
          <Link to="/#privacy" id="footer-privacy-link" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link>
          <Link to="/#terms" id="footer-terms-link" className="hover:text-[#C5A059] transition-colors">Terms of Engagement</Link>
          <Link to="/#disclaimer" id="footer-disclaimer-link" className="hover:text-[#C5A059] transition-colors">Compliance Disclaimer</Link>
          <Link 
            to="/admin" 
            id="footer-admin-link" 
            className="text-[#C5A059]/30 hover:text-[#C5A059] transition-colors flex items-center gap-1 ml-2 font-mono text-[9px]"
            title="Classified Terminal Uplink"
          >
            <Database className="w-3 h-3" />
            <span>SECURE CONSOLE</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
