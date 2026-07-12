import { useState } from 'react';
import { Key, CheckCircle2, User, Phone, Mail, ChevronRight, ShieldCheck } from 'lucide-react';

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Debt Solutions',
    terms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-midnight)] text-[var(--text-ivory)] pt-48 sm:pt-52 lg:pt-56 xl:pt-64 pb-20 px-4 sm:px-8 font-sans">
      <div className="max-w-xl mx-auto">
        
        <div className="bg-[#06281E]/95 backdrop-blur-md border border-[var(--brand-gold)]/20 p-8 sm:p-10 rounded-sm shadow-2xl relative overflow-hidden bg-gold-glow">
          {/* Top gold line indicator */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[var(--brand-gold)]"></div>
          
          <div className="flex items-center justify-between border-b border-[var(--brand-gold)]/10 pb-4 mb-6">
            <div>
              <h2 className="text-xl font-serif text-white font-medium tracking-wide">Secure Intake Portal</h2>
              <p className="text-[10px] text-[var(--brand-gold-light)] font-light mt-0.5">End-to-End Encrypted Liaison Uplink</p>
            </div>
            <div className="p-2.5 bg-[#031C14] border border-[var(--brand-gold)]/20 rounded-full">
              <Key className="w-4 h-4 text-[var(--brand-gold)]" />
            </div>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center gap-4 animate-fade-in" id="intake-success" role="alert" aria-live="assertive">
              <CheckCircle2 className="w-16 h-16 text-[var(--brand-gold-light)] animate-bounce" />
              <h3 className="text-xl font-serif text-white font-medium">Secure Transmission Complete</h3>
              <p className="text-xs font-light text-white/70 max-w-sm leading-relaxed">
                Your corporate payload has been encrypted and routed directly to a Managing Partner. A secure communication channel will be established within four business hours.
              </p>
              <div className="text-[10px] text-[var(--brand-gold)]/80 font-mono mt-4 uppercase bg-[#031C14] px-4 py-2 border border-[var(--brand-gold)]/15">
                Uplink Code: SEC-{(Math.random() * 100000).toFixed(0)}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" id="intake-form">
              
              {/* Full Legal Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="intake-name" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                  Full Legal Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/45" />
                  <input 
                    type="text" 
                    id="intake-name" 
                    required
                    placeholder="e.g. Alexander Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#031C14] border border-[var(--brand-gold)]/15 text-white text-xs py-3.5 pl-10 pr-4 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)] focus-visible:ring-offset-1 focus-visible:ring-offset-[#031C14] focus:border-[var(--brand-gold)] transition-all font-light"
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="intake-phone" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                  Contact Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/45" />
                  <input 
                    type="tel" 
                    id="intake-phone" 
                    required
                    placeholder="e.g. +971 58 517 4871"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#031C14] border border-[var(--brand-gold)]/15 text-white text-xs py-3.5 pl-10 pr-4 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)] focus-visible:ring-offset-1 focus-visible:ring-offset-[#031C14] focus:border-[var(--brand-gold)] transition-all font-light"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="intake-email" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/45" />
                  <input 
                    type="email" 
                    id="intake-email" 
                    required
                    placeholder="e.g. vance@holdingcompany.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#031C14] border border-[var(--brand-gold)]/15 text-white text-xs py-3.5 pl-10 pr-4 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)] focus-visible:ring-offset-1 focus-visible:ring-offset-[#031C14] focus:border-[var(--brand-gold)] transition-all font-light"
                  />
                </div>
              </div>

              {/* Primary Area of Interest */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="intake-interest" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                  Primary Area of Interest
                </label>
                <div className="relative">
                  <select
                    id="intake-interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full bg-[#031C14] border border-[var(--brand-gold)]/15 text-white text-xs py-3.5 px-4 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)] focus-visible:ring-offset-1 focus-visible:ring-offset-[#031C14] focus:border-[var(--brand-gold)] transition-all font-light appearance-none"
                  >
                    <option value="Debt Solutions" className="bg-[#06281E] text-white">Debt Solutions (Restructuring, Settlement, Skip Solutions)</option>
                    <option value="Loans & Facilities" className="bg-[#06281E] text-white">Loans & Facilities (Corporate Loans, Mortgage, STL)</option>
                    <option value="Business Setup" className="bg-[#06281E] text-white">Business Setup (Mainland & Free Zone formation)</option>
                    <option value="Investments" className="bg-[#06281E] text-white">Investment / Capital Placement Programs</option>
                    <option value="Legal Assistance" className="bg-[#06281E] text-white">Legal Assistance (Liability & Court Case support)</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--brand-gold)]">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start gap-2.5 pt-1">
                <input 
                  type="checkbox" 
                  id="intake-terms" 
                  required
                  checked={formData.terms}
                  onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                  className="mt-0.5 rounded-sm accent-[var(--brand-gold)]"
                />
                <label htmlFor="intake-terms" className="text-[10px] text-white/50 font-light leading-relaxed">
                  I authorize the transmission of this data and request execution of a mutual Non-Disclosure Agreement (NDA) prior to disclosures.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="intake-submit-btn"
                disabled={loading}
                className="w-full bg-[var(--brand-gold)] hover:bg-[var(--brand-gold-light)] text-[var(--text-contrast)] py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all rounded-sm duration-300 mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 font-sans"
              >
                {loading ? 'Initiating Security Uplink...' : 'Establish Secure Uplink'}
              </button>
            </form>
          )}
        </div>

        {/* Security Disclosures */}
        <div className="mt-8 flex items-center justify-center gap-2.5 text-[10px] text-white/40 uppercase tracking-widest font-mono">
          <ShieldCheck className="w-4 h-4 text-[var(--brand-gold)]" />
          <span>256-Bit Encrypted Secure Connection Link</span>
        </div>

      </div>
    </div>
  );
}
