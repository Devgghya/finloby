import { MapPin, Landmark, Award, Shield } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="flex-1 w-full bg-[#070F1E] pt-36 sm:pt-40 lg:pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/25 bg-[#0D1625]/85 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E2C999]">
              Credentials
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FBF9F4] leading-tight">
            Our Legacy. <br />
            <span className="text-gradient-gold italic">Absolute Compliance.</span>
          </h1>
          <p className="text-sm sm:text-base font-light text-[#FBF9F4]/60 max-w-2xl leading-relaxed mt-2">
            FINLOBY is a premier financial advisory firm matching elite private banking networks with custom legal structures to insulate corporate and private capital assets.
          </p>
        </div>

        {/* Brand Mission & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="bg-[#0D1625] border border-slate-850 p-8 rounded-sm">
            <div className="p-3 bg-[#070F1E] border border-[#C5A059]/20 rounded-full w-fit text-[#C5A059] mb-6">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide mb-3">
              Absolute Discretion
            </h3>
            <p className="text-xs font-light text-[#FBF9F4]/60 leading-relaxed">
              We operate under zero-telemetry protocols. Every file, consultation, and settlement transaction is protected by mutual NDAs and attorney-client privileges.
            </p>
          </div>

          <div className="bg-[#0D1625] border border-slate-850 p-8 rounded-sm">
            <div className="p-3 bg-[#070F1E] border border-[#C5A059]/20 rounded-full w-fit text-[#C5A059] mb-6">
              <Landmark className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide mb-3">
              Institutional Leverage
            </h3>
            <p className="text-xs font-light text-[#FBF9F4]/60 leading-relaxed">
              With relationships spanning over 36 tier-1 banking institutions, we secure debt settlement terms and credit limits that standard mediators cannot access.
            </p>
          </div>

          <div className="bg-[#0D1625] border border-slate-850 p-8 rounded-sm">
            <div className="p-3 bg-[#070F1E] border border-[#C5A059]/20 rounded-full w-fit text-[#C5A059] mb-6">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide mb-3">
              Sovereign Compliance
            </h3>
            <p className="text-xs font-light text-[#FBF9F4]/60 leading-relaxed">
              Every restructure model, trust arrangement, and settlement file is built to align with CBUAE directives and UAE Decree-Law parameters.
            </p>
          </div>

        </div>

        {/* Narrative Section */}
        <div className="bg-[#0D1625] border border-[#C5A059]/10 p-8 sm:p-12 rounded-sm relative overflow-hidden mb-20">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#9A7B3E] via-[#C5A059] to-[#E2C999]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[9px] font-mono text-[#C5A059] uppercase tracking-[0.2em]">Advisory Vision</span>
              <h2 className="text-2xl font-serif text-[#FBF9F4] font-light">
                Securing Operations Across High-Risk Jurisdictions
              </h2>
              <p className="text-xs font-light text-[#FBF9F4]/70 leading-relaxed">
                Founded by senior corporate restructuring advisors and banking collections experts, FINLOBY was established to bridge the gap between heavy commercial debt enforcement and legal capital protection.
              </p>
              <p className="text-xs font-light text-[#FBF9F4]/60 leading-relaxed">
                We believe that every corporation and private client deserves direct, unbiased representation when dealing with primary lenders. By combining deep local regulatory understanding with global asset protection standards, we restructure non-performing debt assets, setup secure corporate architectures, and defend client positions in courts.
              </p>
            </div>
            <div className="lg:col-span-5 bg-[#070F1E] border border-[#C5A059]/20 p-6 rounded-sm space-y-4">
              <h4 className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.2em] border-b border-[#C5A059]/10 pb-2">
                Operational Framework
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#FBF9F4]/50">Offices:</span>
                  <span className="text-[#FBF9F4]">Dubai Media City (HQ)</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#FBF9F4]/50">Associates:</span>
                  <span className="text-[#FBF9F4]">London, Singapore, New Delhi</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#FBF9F4]/50">Managed Assets:</span>
                  <span className="text-[#C5A059] font-mono">AED 850M+ Resolved</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#FBF9F4]/50">Liaison Network:</span>
                  <span className="text-[#FBF9F4]">36+ Primary Bank Partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Locations Map Deck */}
        <div>
          <h3 className="text-xl font-serif text-[#FBF9F4] font-medium tracking-wide mb-8 border-b border-[#C5A059]/10 pb-3">
            Global Coordination Hubs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dubai HQ */}
            <div className="border border-slate-800 p-6 bg-[#0D1625]/60 rounded-sm">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FBF9F4]">Dubai Headquarters</h4>
              </div>
              <p className="text-[11px] font-light text-[#FBF9F4]/60 leading-relaxed">
                Al Ameri Business Tower, Suite #21-02, Barsha Heights, Tecom, Dubai Media City, UAE.
              </p>
            </div>
            
            {/* London */}
            <div className="border border-slate-800 p-6 bg-[#0D1625]/60 rounded-sm">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FBF9F4]">London Associate Desk</h4>
              </div>
              <p className="text-[11px] font-light text-[#FBF9F4]/60 leading-relaxed">
                25 Old Broad Street, Tower 42, London EC2N 1HQ, United Kingdom.
              </p>
            </div>

            {/* Singapore */}
            <div className="border border-slate-800 p-6 bg-[#0D1625]/60 rounded-sm">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FBF9F4]">Singapore Marina Desk</h4>
              </div>
              <p className="text-[11px] font-light text-[#FBF9F4]/60 leading-relaxed">
                Marina Bay Financial Centre, Tower 1, 8 Marina Boulevard, Singapore 018981.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
