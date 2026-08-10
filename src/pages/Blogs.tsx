import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, BookOpen, Share2 } from 'lucide-react';
import SEO from '../components/SEO';

const blogPosts = [
  {
    id: 'breaking-debt-cycle-financial-advisory',
    title: 'Breaking the Debt Cycle: Why Financial Advisory Matters Before and During Crisis',
    summary: 'Discover how proactive financial pre-consultancy and structured debt resolution strategies like consolidation, restructuring, and settlement can safeguard your financial future.',
    date: 'July 27, 2026',
    author: 'Finloby Advisory Team',
    readTime: '5 min read',
    content: `
      <p>Debt rarely happens overnight. It usually builds quietly—a missed budget goal here, a high-interest credit card balance there, or an unmanaged sudden expense.</p>

      <p>Whether you are looking to safeguard your financial health or actively seeking relief from heavy debt burdens, having the right financial guidance makes all the difference.</p>

      <h3>1. Prevention First: The Power of Pre-Consultancy</h3>
      <p>The most effective way to manage debt is to prevent it before it takes root. Pre-consultancy acts as a strategic financial health check, helping individuals and businesses build resilient frameworks before warning signs become emergencies.</p>

      <p>Through proactive assessment, a pre-consultancy evaluation helps you:</p>
      <ul>
        <li><strong>Identify Vulnerabilities:</strong> Uncover hidden cash-flow gaps and high-cost liabilities before they snowball.</li>
        <li><strong>Optimize Debt-to-Income Ratios:</strong> Ensure your monthly commitments remain well within safe regulatory and personal limits.</li>
        <li><strong>Build Sustainable Repayment Plans:</strong> Structure major purchases and credit lines with clear exit strategies instead of relying on minimum payments.</li>
      </ul>

      <h3>2. Navigating Existing Debt: How Finloby Delivers Solutions</h3>
      <p>If you are already struggling with overwhelming monthly obligations, proactive strategy replaces panic. At Finloby, we analyze your complete financial profile to deploy tailored debt resolution strategies:</p>

      <h4>🔄 Debt Consolidation</h4>
      <ul>
        <li><strong>What it does:</strong> Combines multiple high-interest debts (such as credit cards and personal loans) into a single, structured loan with a lower interest rate and one fixed monthly installment.</li>
        <li><strong>The Finloby Advantage:</strong> Simplifies your cash flow, significantly reduces interest costs, and protects your credit standing by eliminating missed payment risks.</li>
      </ul>

      <h4>⚙️ Debt Restructuring</h4>
      <ul>
        <li><strong>What it does:</strong> Re-negotiates existing loan terms such as extending the repayment tenure or adjusting interest structures to lower immediate monthly strain.</li>
        <li><strong>The Finloby Advantage:</strong> We work with financial institutions with the client’s consent to align your loan obligations with your actual current income capacity, giving you breathing room without default.</li>
      </ul>

      <h4>🤝 Debt Settlement</h4>
      <ul>
        <li><strong>What it does:</strong> A structured resolution path for severe financial hardship where full repayment under original terms is no longer feasible.</li>
        <li><strong>The Finloby Advantage:</strong> Finloby facilitates direct negotiations to settle outstanding liabilities for a manageable single amount or structured compromise, giving you a clear path back to financial stability.</li>
      </ul>

      <h3>Take Control of Your Financial Future</h3>
      <p>Debt shouldn't dictate your future. Whether you need a preventative financial review or a structured recovery plan, expert consultancy turns uncertainty into actionable steps.</p>

      <p><strong>💡 Ready to regain financial clarity?</strong> <a href="/book-consultation" class="text-[#C5A059] underline hover:text-[#E2C999]">Connect with the advisory team at Finloby today</a> for a confidential consultation.</p>
    `
  },
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
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const activePostId = id || selectedPostId;
  const activePost = blogPosts.find(p => p.id === activePostId);

  const handleSelectPost = (postId: string) => {
    setSelectedPostId(postId);
    navigate(`/blogs/${postId}`);
  };

  const handleBackToList = () => {
    setSelectedPostId(null);
    navigate('/blogs');
  };

  return (
    <div className="flex-1 w-full bg-[#070F1E] pt-48 sm:pt-52 lg:pt-56 xl:pt-64 pb-20">
      <SEO
        title={activePost ? `${activePost.title} | Financial Insights` : "Financial Insights & Intelligence Blog"}
        description={activePost ? activePost.summary : "Stay informed with the latest insights, analyses, and strategic advice on corporate debt, company formation, and wealth management from FINLOBY."}
        keywords={activePost ? `financial blog, ${activePost.title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')}, FINLOBY` : "financial blog, wealth management insights, corporate finance trends, Dubai banking updates"}
        canonicalUrl={activePost ? `https://finloby.com/blogs/${activePost.id}` : 'https://finloby.com/blogs'}
        structuredData={activePost ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": activePost.title,
          "description": activePost.summary,
          "author": {
            "@type": "Person",
            "name": activePost.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "FINLOBY",
            "logo": {
              "@type": "ImageObject",
              "url": "https://finloby.com/finloby-white.png"
            }
          },
          "mainEntityOfPage": `https://finloby.com/blogs/${activePost.id}`
        } : undefined}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {activePost ? (
          /* Single Blog Post Reading View */
          <div className="max-w-3xl mx-auto animate-fade-in">
            <button
              type="button"
              onClick={handleBackToList}
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
              className="prose prose-invert max-w-none text-xs sm:text-sm font-light text-[#FBF9F4]/75 leading-relaxed space-y-6 border-t border-[#C5A059]/10 pt-8 text-justify"
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
                    onClick={() => handleSelectPost(post.id)}
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
