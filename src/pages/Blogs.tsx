import { useState } from 'react';
import { ArrowLeft, Clock, Calendar, User, BookOpen, Share2 } from 'lucide-react';

const blogPosts = [
  {
    id: 'uae-pdpl-asset-protection',
    title: 'UAE Personal Data Protection Law & Private Wealth Asset Protection',
    summary: 'A deep analytical dive into how Decree-Law No. 45 of 2021 protects private asset files from arbitrary disclosure and external credit rating exposure.',
    date: 'June 24, 2026',
    author: 'Alexander Vance, Senior Counsel',
    readTime: '6 min read',
    content: `
      <p>The implementation of UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) has marked a massive paradigm shift in corporate asset protection and client confidentiality. For ultra-high-net-worth individuals (UHNWIs) and corporations holding significant liabilities, understanding the legal telemetry of this law is vital.</p>
      
      <h3>1. The Zero-Disclosure Regulatory Precedent</h3>
      <p>Under the PDPL framework, financial data transmission and identity tracking cannot occur without explicit, non-ambiguous written consent (typically established via a structured Assignment of Authority). This prevents banking recovery agents and external debt brokers from pulling private asset rosters, corporate filings, or mortgage registries without a court order.</p>

      <h3>2. Isolated Sovereign Escrow Structures</h3>
      <p>By placing assets within local LLC structures or economic zone trusts (such as in the DIFC or ADGM), clients can insulate wealth from external cross-border skip tracers. The data controllers managing these structures are legally prohibited from disclosing registries to third-party collection bureaus, creating a secure compliance perimeter.</p>

      <h3>3. Credit Registry Safeguards</h3>
      <p>The Al Etihad Credit Bureau (AECB) operates under strict banking data-sharing guidelines. Through active legal representation, disputed or defaulted liabilities can be locked in mediation status, preventing updates to active default registries while negotiations are underway. This ensures credit ratings remain stable during restructuring transitions.</p>

      <p><em>Disclaimer: This article is for educational purposes only. For specific legal representation coordinates, consult our managing partners directly.</em></p>
    `
  },
  {
    id: 'debt-restructuring-dubai',
    title: 'Commercial Debt Restructuring in Dubai: Negotiating with Tier-1 Banks',
    summary: 'Navigating DBR thresholds, reducing interest rates, and securing written write-off settlements with UAE financial institutions.',
    date: 'May 12, 2026',
    author: 'Devendra K., Advisory Partner',
    readTime: '8 min read',
    content: `
      <p>Renegotiating defaulted corporate credit lines, commercial vehicle fleets, or high-value personal loans in the UAE requires strict adherence to Central Bank regulations. Here is our direct strategic blueprint for achieving sustainable restructures.</p>

      <h3>1. The UAE Debt Burden Ratio (DBR) Benchmark</h3>
      <p>The Central Bank of the UAE enforces a strict 50% Debt Burden Ratio (DBR) cap on personal lending. However, for corporate restructuring, this limit can extend up to 60% or be waived entirely if structured via private debt placements. Negotiating within these bounds requires matching debt service schedules with verified cash flow logs rather than flat monthly demands.</p>

      <h3>2. Securing the Liability Write-Off Agreement</h3>
      <p>When an asset enters non-performing status, bank legal teams prefer write-downs over protracted court procedures. We routinely negotiate write-offs of 40% to 60% on outstanding interest and principal balances, backed by audited statements showing financial distress. Crucially, no payments should occur until a signed Liability Settlement Agreement is issued on the bank\'s official letterhead.</p>

      <h3>3. The Release & Clearance Protocol</h3>
      <p>Once a settlement payout is executed, the bank must issue a "Liability Release Certificate" and update police records to clear check bounce complaints. This process takes 7 to 14 banking days and is vital to removing travel bans or active arrest warrants from the Ministry of Interior database.</p>
    `
  },
  {
    id: 'mainland-vs-economic-zone-setup',
    title: 'Mainland LLC vs Economic Zone: UAE Corporate Structuring Checklist',
    summary: 'Evaluate tax repatriation, physical office requirements, physical visa quotas, and banking compliance protocols for both models.',
    date: 'April 05, 2026',
    author: 'Sophia Chen, Setup Director',
    readTime: '5 min read',
    content: `
      <p>Selecting the correct corporate architecture is the first line of defense for wealth insulation in the UAE. We compare mainland and economic zone setup structures from a compliance perspective.</p>

      <h3>1. Mainland LLC Setup</h3>
      <ul>
        <li><strong>Ownership:</strong> 100% foreign ownership allowed for most commercial and industrial activities since the 2021 corporate law reforms.</li>
        <li><strong>Trading Scope:</strong> Unlimited. Direct access to local UAE markets and government contracts.</li>
        <li><strong>Office Space:</strong> Physical office lease (Ejari) is mandatory for mainland licensing.</li>
        <li><strong>Visa Quota:</strong> Tied to the square footage of the office space leased.</li>
      </ul>

      <h3>2. Economic Zone (DIFC / Meydan / Shams)</h3>
      <ul>
        <li><strong>Ownership:</strong> 100% foreign ownership with zero personal or corporate taxes.</li>
        <li><strong>Trading Scope:</strong> Limited to the specific economic zone and international markets. Trading on the mainland requires a local distributor or agent.</li>
        <li><strong>Office Space:</strong> Flexi-desks or virtual office setups are accepted for licensing.</li>
        <li><strong>Capital Repatriation:</strong> 100% capital and profit repatriation rights secured.</li>
      </ul>

      <h3>3. Corporate Bank Account Opening Protocol</h3>
      <p>While Economic Zones offer cheaper setup costs, opening a corporate bank account for a virtual office can take months. Mainland entities with a physical Ejari lease and local office coordinates are processed within 14 days. We recommend structuring a dedicated physical lease if rapid banking onboarding is required.</p>
    `
  }
];

export default function Blogs() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const activePost = blogPosts.find(p => p.id === selectedPostId);

  return (
    <div className="flex-1 w-full bg-[#070F1E] pt-36 sm:pt-40 lg:pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {activePost ? (
          /* Single Blog Post Reading View */
          <div className="max-w-3xl mx-auto animate-fade-in">
            <button
              type="button"
              onClick={() => setSelectedPostId(null)}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] hover:text-[#E2C999] mb-10 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </button>

            <div className="flex items-center gap-4 text-xs text-[#FBF9F4]/40 font-light mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                {activePost.date}
              </span>
              <span>◆</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                {activePost.readTime}
              </span>
              <span>◆</span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C5A059]" />
                {activePost.author}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif text-[#FBF9F4] font-medium leading-tight mb-8">
              {activePost.title}
            </h1>

            {/* Custom styled blog contents */}
            <div 
              className="prose prose-invert max-w-none text-xs sm:text-sm font-light text-[#FBF9F4]/75 leading-relaxed space-y-6 border-t border-[#C5A059]/10 pt-8"
              dangerouslySetInnerHTML={{ __html: activePost.content }}
            />

            <div className="border-t border-[#C5A059]/15 pt-8 mt-12 flex justify-between items-center text-xs">
              <div className="flex items-center gap-2 text-[#FBF9F4]/40">
                <BookOpen className="w-4 h-4 text-[#C5A059]" />
                <span>Published in Corporate Compliance Insights</span>
              </div>
              <button 
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article URL copied to clipboard.');
                }}
                className="flex items-center gap-2 text-[#C5A059] hover:text-[#E2C999] transition-colors font-semibold uppercase tracking-wider cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                Share Analysis
              </button>
            </div>
          </div>
        ) : (
          /* Blog Grid List View */
          <div>
            <div className="flex flex-col gap-4 mb-16 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/25 bg-[#0D1625]/85 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E2C999]">
                  Insights & Intelligence
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FBF9F4] leading-tight">
                Corporate Log & <br />
                <span className="text-gradient-gold italic">Legal Briefs</span>
              </h1>
              <p className="text-sm sm:text-base font-light text-[#FBF9F4]/60 max-w-2xl leading-relaxed mt-2">
                Periodic advisory reports covering UAE regulatory parameters, debt restructure mechanics, and private asset protection models.
              </p>
            </div>

            {/* Grid of posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div 
                  key={post.id}
                  className="bg-[#0D1625] border border-slate-850 p-6 sm:p-8 rounded-sm hover:border-[#C5A059]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center text-[10px] text-[#FBF9F4]/40 font-mono mb-4 border-b border-[#C5A059]/10 pb-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide mb-3 leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-xs font-light text-[#FBF9F4]/60 leading-relaxed mb-6">
                      {post.summary}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedPostId(post.id)}
                    className="w-full text-center bg-[#070F1E] border border-[#C5A059]/25 hover:border-[#C5A059] text-[#C5A059] py-3 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer mt-4"
                  >
                    Read Legal Brief
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
