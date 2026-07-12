import { ShieldAlert, BookOpen, Scale, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComplianceDisclaimer() {
  return (
    <div className="flex-1 w-full bg-[#070F1E] pt-48 sm:pt-52 lg:pt-56 xl:pt-64 pb-20 font-sans">
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
              Sovereign Framework
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-light text-[#FBF9F4] leading-tight">
            Regulatory & <br />
            <span className="text-gradient-gold italic">Compliance Disclaimer</span>
          </h1>
          <div className="flex items-center gap-4 text-xs text-[#FBF9F4]/40 font-light mt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              Effective Date: January 01, 2026
            </span>
            <span>◆</span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
              Status: Active Compliance
            </span>
          </div>
        </div>

        {/* Legal Text Deck */}
        <div className="bg-[#0D1625]/80 border border-[#C5A059]/10 p-8 sm:p-12 rounded-sm relative overflow-hidden space-y-8 text-sm font-light text-[#FBF9F4]/80 leading-relaxed">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#9A7B3E] via-[#C5A059] to-[#E2C999]"></div>
          
          {/* Executive Summary */}
          <div className="p-5 bg-[#070F1E] border border-[#C5A059]/15 rounded-sm flex gap-4 items-start">
            <ShieldAlert className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#FBF9F4]/70 leading-relaxed font-light">
              <strong>Regulatory Boundaries:</strong> FINLOBY is a private corporate consulting and financial advisory agency. We do not operate as a licensed commercial retail bank, depository institution, or asset underwriter. Review this compliance disclaimer to understand our operational parameters.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">01.</span>
              Non-Banking Entity Declaration
            </h3>
            <p>
              FINLOBY does not accept deposits, underwrite retail consumer lines of credit, or provide commercial banking facilities directly. We are not regulated as a financial depository by the Central Bank of the UAE (CBUAE). 
            </p>
            <p>
              All loan facilities, mortgages, and commercial credit lines referenced on this website are structured and underwritten exclusively by our tier-1 licensed banking partners and private credit funds. Our role is strictly limited to transaction structuring and advisory mediation.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">02.</span>
              No Investment Solicitations
            </h3>
            <p>
              All investment yield simulations, APR calculator models, and historical case studies shown on this platform are for general illustrative and educational purposes. They do not constitute formal investment advice, legal solicitations, or security placement offers under securities regulations (such as SCA rules).
            </p>
            <p>
              Target distributions and projected APR yields are not bank-guaranteed and are subject to sovereign risk distributions, macroeconomic adjustments, and collection fluctuations.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">03.</span>
              Debt Settlement Outcomes & Approvals
            </h3>
            <p>
              While FINLOBY has a successful track record in negotiating corporate write-offs and structuring consolidation facilities, we do not guarantee specific settlement percentages. 
            </p>
            <p>
              All final write-off approvals, tenure extensions, check clearance terms, and credit history (AECB) updates are at the sole discretion of the respective lending institutions. No outcome is guaranteed until a signed Liability Settlement Agreement is officially issued by the bank.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">04.</span>
              Legal Coordination Limitations
            </h3>
            <p>
              Any legal assistance, police check clearance support, active travel ban resolution, and skip-mediation coordinates are executed in partnership with registered, licensed law firms in the UAE. 
            </p>
            <p>
              FINLOBY coordinates these defense vectors but does not issue judicial decrees. Travel ban cancellations, case dismissals, and arrest warrant purges are subject to standard judicial timelines and the final decisions of the UAE Public Prosecution and Courts.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">05.</span>
              Anti-Money Laundering (AML) Compliance
            </h3>
            <p>
              FINLOBY enforces strict compliance with UAE Federal Decree-Law No. 20 of 2018 on Anti-Money Laundering and Combating the Financing of Terrorism (AML/CFT).
            </p>
            <p>
              We do not accept mandates or process financial telemetry for entities or individuals listed on active sovereign sanctions lists, or where funds are sourced from non-verified origins. All transaction partners are subject to mandatory Know Your Customer (KYC) protocols.
            </p>
          </div>

          {/* Contact Block */}
          <div className="border-t border-[#C5A059]/15 pt-8 mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-3">
              <Scale className="w-5 h-5 text-[#C5A059]" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Compliance Board Registry</span>
                <span className="text-[10px] text-[#FBF9F4]/40 font-mono">compliance@finloby.com</span>
              </div>
            </div>
            <a
              href="mailto:compliance@finloby.com"
              className="px-6 py-2.5 bg-[#070F1E] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] text-[10px] font-semibold uppercase tracking-wider rounded-sm transition-all"
            >
              Request Compliance Dossier
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
