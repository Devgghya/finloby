import { Shield, Lock, FileText, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="flex-1 w-full bg-[#070F1E] pt-44 sm:pt-48 lg:pt-52 pb-20 font-sans">
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
              Sovereign Directive
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-light text-[#FBF9F4] leading-tight">
            Data Privacy & <br />
            <span className="text-gradient-gold italic">Protection Directive</span>
          </h1>
          <div className="flex items-center gap-4 text-xs text-[#FBF9F4]/40 font-light mt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              Effective Date: January 01, 2026
            </span>
            <span>◆</span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
              Regulatory Frame: UAE Decree-Law 45/2021
            </span>
          </div>
        </div>

        {/* Legal Text Deck */}
        <div className="bg-[#0D1625]/80 border border-[#C5A059]/10 p-8 sm:p-12 rounded-sm relative overflow-hidden space-y-8 text-sm font-light text-[#FBF9F4]/80 leading-relaxed">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#9A7B3E] via-[#C5A059] to-[#E2C999]"></div>
          
          {/* Executive Summary */}
          <div className="p-5 bg-[#070F1E] border border-[#C5A059]/15 rounded-sm flex gap-4 items-start">
            <Lock className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#FBF9F4]/70 leading-relaxed font-light">
              <strong>Institutional Commitment:</strong> FINLOBY operates under absolute zero-knowledge metadata architectures. We do not index, share, or sell your commercial or personal registry profiles. All dialogue is subject to attorney-client privilege protocols and pre-negotiated Non-Disclosure Agreements (NDAs).
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">01.</span>
              UAE Personal Data Protection Law Compliance
            </h3>
            <p>
              In accordance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL), FINLOBY acts as a sole Data Controller. All processing of client files, debt restructuring accounts, commercial facility proposals, and corporate setup registry information is conducted under strict legal parameters. 
            </p>
            <p>
              Processing operations are restricted to executing direct client agreements, complying with federal banking laws, and structuring legal representations under UAE authority.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">02.</span>
              Telemetry & Information Collection Parameters
            </h3>
            <p>
              To maintain high-fidelity corporate security, we collect only the necessary telemetry data during intake procedures:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-2 text-xs">
                <span className="text-[#C5A059] mt-1">◆</span>
                <span><strong>Legal Coordinates:</strong> Full name, corporate registry code, and Assignment of Authority files.</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <span className="text-[#C5A059] mt-1">◆</span>
                <span><strong>Secure Contact Parameters:</strong> Telephone numbers and email links for PGP-encrypted correspondence.</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <span className="text-[#C5A059] mt-1">◆</span>
                <span><strong>Financial Profiles:</strong> Non-performing bank liabilities, credit registry history, and asset schedules.</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">03.</span>
              Cryptographic Safeguards & Data Retention
            </h3>
            <p>
              Your payload directories are stored in offline, air-gapped network segments using AES-256 zero-knowledge encryption models. Financial credentials are held strictly for the duration of the restructuring or setup mandate.
            </p>
            <p>
              Upon successful settlement clearance or company formation execution, client database logs are purged under certified digital sanitation protocols, unless federal compliance requires archiving.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">04.</span>
              Disclosure Restraints & Third-Party Sharing
            </h3>
            <p>
              We enforce an absolute non-disclosure policy. No telemetry or identity logs are shared with external credit registers, corporate registries, or cross-border entities without explicit sovereign assignment of authority or court directives.
            </p>
            <p>
              Under UAE Federal Law, we do not monetize client logs or disclose active debt settlement files to private collection groups.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#FBF9F4] font-medium tracking-wide flex items-center gap-2">
              <span className="text-xs font-mono text-[#C5A059]">05.</span>
              Sovereign Rights of the Data Subject
            </h3>
            <p>
              Under Decree-Law No. 45 of 2021, you retain sovereign control over your telemetry. You have the right to request:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-2 text-xs">
                <span className="text-[#C5A059] mt-1">◆</span>
                <span><strong>Access:</strong> Review all raw files held within your advisory locker.</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <span className="text-[#C5A059] mt-1">◆</span>
                <span><strong>Erasure:</strong> Request immediate database deletion of expired intake payloads.</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <span className="text-[#C5A059] mt-1">◆</span>
                <span><strong>Restriction:</strong> Halt active bank negotiations and pause file sharing.</span>
              </li>
            </ul>
          </div>

          {/* Contact Block */}
          <div className="border-t border-[#C5A059]/15 pt-8 mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#C5A059]" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Data Protection Office Liaison</span>
                <span className="text-[10px] text-[#FBF9F4]/40 font-mono">compliance@finloby.com</span>
              </div>
            </div>
            <a
              href="mailto:compliance@finloby.com"
              className="px-6 py-2.5 bg-[#070F1E] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] text-[10px] font-semibold uppercase tracking-wider rounded-sm transition-all"
            >
              Contact Data Officer
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
