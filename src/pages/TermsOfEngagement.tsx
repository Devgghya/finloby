import { FileText, Award, Scale, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function TermsOfEngagement() {
  return (
    <div className="flex-1 w-full bg-[#070F1E] pt-48 sm:pt-52 lg:pt-56 xl:pt-64 pb-20 font-sans">
      <SEO
        title="Terms of Engagement | Client Agreement"
        description="Read the Terms of Engagement and service agreements governing advisory relationships and financial mediation with FINLOBY."
        keywords="terms of engagement, terms of service, client agreement, FINLOBY terms, advisory agreement"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Navigation Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] hover:text-[#E2C999] mb-10 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header Section */}
        <div className="flex flex-col gap-4 mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/25 bg-[#0D1625]/85 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E2C999]">
              Mandate Protocol
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-light text-[#FBF9F4] leading-tight">
            Terms of <br />
            <span className="text-gradient-gold italic">Engagement Directive</span>
          </h1>
          <div className="flex items-center gap-4 text-xs text-[#FBF9F4]/40 font-light mt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              Effective Date: January 01, 2026
            </span>
            <span>◆</span>
            <span className="flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#C5A059]" />
              Jurisdiction: Dubai, UAE
            </span>
          </div>
        </div>

        {/* Legal Text Deck */}
        <div className="bg-[#0D1625]/80 border border-[#C5A059]/10 p-8 sm:p-12 rounded-sm relative overflow-hidden space-y-8 text-sm font-light text-[#FBF9F4]/80 leading-relaxed">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#9A7B3E] via-[#C5A059] to-[#E2C999]"></div>
          
          {/* Executive Summary */}
          <div className="p-5 bg-[#070F1E] border border-[#C5A059]/15 rounded-sm flex gap-4 items-start">
            <Award className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#FBF9F4]/70 leading-relaxed font-light">
              <strong>Mandate Baseline:</strong> Accessing the FINLOBY liaison network, submitting case files, or allocating capital is subject to these binding Terms of Engagement. No client dialogue is initiated without mutual execution of our strict Non-Disclosure Agreement (NDA).
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">01.</span>
              Scope of Advisory Services
            </h3>
            <p>
              FINLOBY provides private strategic advice, debt restructuring mediation, corporate company formation introductions, and coordinate legal support networks. 
            </p>
            <p>
              We act as independent consultants. Our services are limited to structuring settlement proposals, compiling bank underwriter dossiers, and mediating disputes between our clients and licensed institutions.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">02.</span>
              Client Representations & Telemetry Accuracy
            </h3>
            <p>
              Clients must provide absolute, complete, and un-redacted files, banking correspondence, security cheque logs, and liability records.
            </p>
            <p>
              Provision of fraudulent financial telemetry, concealed bank assets, or unauthorized corporate credentials constitutes an immediate breach of mandate. This will result in termination of representation without refund of retainer fees.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">03.</span>
              Fees, Retainers, and Success Commissions
            </h3>
            <p>
              Our advisory parameters operate under a dual fee structure:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-2 text-xs">
                <span className="text-[#C5A059] mt-1">◆</span>
                <span><strong>Setup Retainers:</strong> Upfront retainer fees cover the cost of legal audits, document notarization, and initial bank mediation filings. These are non-refundable.</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <span className="text-[#C5A059] mt-1">◆</span>
                <span><strong>Success Fees:</strong> Calculated as a pre-agreed percentage of the written-off liability, payable within three business days of the bank issuing a Liability Settlement Agreement.</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">04.</span>
              Limitations of Liability
            </h3>
            <p>
              FINLOBY does not act as a licensed retail commercial bank, insurer, or judicial court. We do not underwrite credit facilities directly.
            </p>
            <p>
              All final debt settlement percentages, credit facility approvals, and travel ban clearance decisions are at the sole discretion of the respective banks, insurance underwriters, and judicial authorities. We hold no liability for outcomes rejected due to institutional risk adjustments.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">05.</span>
              Termination of Mandate
            </h3>
            <p>
              Either party may terminate the advisory mandate by providing seven days written notice via secure channels.
            </p>
            <p>
              Upon termination, all outstanding success fees for settlement clearances achieved prior to termination remain immediately payable. Client file directories are deleted in accordance with our zero-knowledge data retention schedules.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">06.</span>
              Governing Law and Dispute Resolution
            </h3>
            <p>
              These Terms of Engagement, and all ancillary client agreements, are governed by the laws of the Emirate of Dubai and applicable federal laws of the United Arab Emirates.
            </p>
            <p>
              Any disputes arising from our advisory services shall be referred to the exclusive jurisdiction of the Dubai Courts or the DIFC Courts, as determined by the specific client mandate.
            </p>
          </div>

          {/* Contact Block */}
          <div className="border-t border-[#C5A059]/15 pt-8 mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#C5A059]" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">General Counsel Office</span>
                <span className="text-[10px] text-[#FBF9F4]/40 font-mono">legal@finloby.com</span>
              </div>
            </div>
            <a
              href="mailto:legal@finloby.com"
              className="px-6 py-2.5 bg-[#070F1E] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] text-[10px] font-semibold uppercase tracking-wider rounded-sm transition-all"
            >
              Contact Counsel
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
