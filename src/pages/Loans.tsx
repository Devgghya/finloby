import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, Calculator, ShieldAlert, Award } from 'lucide-react';
import SEO from '../components/SEO';

interface LoanStep {
  title: string;
  desc: string;
}

interface LoanSubcategory {
  name: string;
  desc: string;
  steps?: LoanStep[];
}

interface LoanCategory {
  id: string;
  title: string;
  subcategories: LoanSubcategory[];
}

const loanCategories: LoanCategory[] = [
  {
    id: 'personal-finance',
    title: 'Personal Finance',
    subcategories: [
      {
        name: 'Salary Transfer Loans (STL)',
        desc: 'A Salary Transfer Loan (STL) is the most traditional and cost-effective personal finance option in UAE. Under STL structure, client shall commit to transfer monthly salary account directly to the lending bank. Because the bank has a guaranteed source of repayment, STL loans offer the lowest possible interest rates, higher finance amounts, and flexible tenures of up to 48 months (as mandated by the UAE Central Bank).',
        steps: [
          {
            title: 'Review of Profile & Documents',
            desc: 'We thoroughly review client’s personal and employment profile along with all required documents in order to evaluate all liabilities for further procedures.'
          },
          {
            title: 'DBR & Central Bank Compliance Check',
            desc: 'We calculate your exact Debt Burden Ratio (which cannot exceed 50% of your gross income per UAE Central Bank rules) to ensure your application passes automated bank filtering.'
          },
          {
            title: 'Optimal Bank Matching',
            desc: 'We pitch client’s profile to the specific banks offering the lowest reducing interest rates.'
          },
          {
            title: 'Eligibility & Compatibility Check',
            desc: 'We assess client’s eligibility for the maximum required loan amount across compatible financial institutions by analyzing client’s profile and salary structure.'
          },
          {
            title: 'Salary Transfer Letter Assistance',
            desc: 'Post soft approval from the institute, Our team assists client in obtaining a compliant Salary Transfer Letter from HR department that matches the specific criteria of the target financial institution, ensuring an error-free submission to the institute.'
          },
          {
            title: 'Loan amount disbursal',
            desc: 'Our Team assists the client till the approved loan amount is disbursed from the concern financial institution.'
          }
        ]
      },
      {
        name: 'Non-Salary Transfer Loans (Non-STL / Post-Dated Cheque Loans)',
        desc: 'A Non-Salary Transfer Loan (Non-STL) is designed for individuals who are seeking limited amount of loan and want to keep their existing salary account intact. Based on your salary, repayment is secured using Post-Dated Cheques (PDCs) or direct debit instructions from your current bank.',
        steps: [
          {
            title: 'Review of Profile & Documents',
            desc: 'We thoroughly review client’s personal and employment profile along with all required documents in order to evaluate all liabilities for further procedures.'
          },
          {
            title: 'DBR & Central Bank Compliance Check',
            desc: 'We calculate your exact Debt Burden Ratio (which cannot exceed 50% of your gross income per UAE Central Bank rules) to ensure your application passes automated bank filtering.'
          },
          {
            title: 'Optimal Bank Matching',
            desc: 'We pitch client’s profile to the specific banks offering the lowest reducing interest rates.'
          },
          {
            title: 'Eligibility & Compatibility Check',
            desc: 'We assess client’s eligibility for the maximum required loan amount across compatible financial institutions by analyzing client’s profile and salary structure.'
          },
          {
            title: 'Security Cheque',
            desc: 'Once soft approval is obtained from the financial institution, security cheque and Direct Debit Authority (DDA) is supposed to be submitted to the concern financial institution.'
          },
          {
            title: 'Loan amount disbursal',
            desc: 'Our Team assists the client till the approved loan amount is disbursed from the concern financial institution.'
          }
        ]
      },
      {
        name: 'Buy-Out Loans (Consolidation Loans)',
        desc: 'A Buy-Out Loan is a specialized debt consolidation facility where a new bank pays off all client’s existing liabilities once approved such as outstanding credit cards, personal loans, or car finance across multiple UAE banks and combines them into one single loan.',
        steps: [
          {
            title: 'Review of Profile & Documents',
            desc: 'We thoroughly review client’s personal and employment profile along with all required documents in order to evaluate all liabilities for further procedures.'
          },
          {
            title: 'DBR & Central Bank Compliance Check',
            desc: 'We calculate your exact Debt Burden Ratio (which cannot exceed 50% of your gross income per UAE Central Bank rules) to ensure your application passes automated bank filtering.'
          },
          {
            title: 'Optimal Bank Matching',
            desc: 'We pitch client’s profile to the specific banks offering the lowest reducing interest rates.'
          },
          {
            title: 'Liability Letter Processing',
            desc: 'We guide client to coordinate with current banks to ensure the client gets accurate, timely Liability Letters with the correct payout figures.'
          },
          {
            title: 'Central Bank Settlement Alignment',
            desc: 'We review the strict timeline between getting your liability letters and securing the buyout funds to prevent the letters from expiring.'
          },
          {
            title: 'Liability Closure & Clearance Tracking',
            desc: 'Once the buyout is approved, we don\'t just stop there. We guide you through obtaining your final Clearance Letters from your old banks and ensuring your AECB credit report updates correctly to show the old accounts as closed.'
          }
        ]
      }
    ]
  },
  {
    id: 'business-loan',
    title: 'SME & Corporate Finance',
    subcategories: [
      { 
        name: 'Retail Business Loans', 
        desc: 'Unsecured term loans, Merchant Point-of-Sale (POS) financing, Business Credit Cards, and working capital lines for companies with an annual turnover between AED 500,000 to AED 10–20 Million.',
        steps: [
          {
            title: 'Onboarding & Cash Flow Scrubbing',
            desc: "We coordinate to run a check on both the Company's AECB score and the Principal Shareholder's personal AECB score, perform a thorough 12-month bounced cheque audit, and calculate the client's Average Quarterly Balance (AQB) run rate."
          },
          {
            title: 'Structuring & Solution Selection',
            desc: 'If the client is in retail, F&B, or e-commerce, we guide them toward POS/Payment Gateway Loans. We perform VAT Return Triangulation to ensure revenues match FTA filings.'
          },
          {
            title: 'Fast-Track Packaging & Submission',
            desc: 'We verify standard documents (valid Trade License, Ejari, MOA, and 6-12 months bank statements) and prepare the client for Personal Guarantee (PG) and security PDC structuring.'
          },
          {
            title: 'Approval & Drawdown',
            desc: "We monitor automated underwriting gates to ensure fast turnaround. Upon approval, we verify the bank's setup fees and insurance fees before signing the offer letter."
          }
        ]
      },
      { 
        name: 'SME Business Loans', 
        desc: 'Structured Trade Finance (Letters of Credit, LCs, Trust Receipts), Bank Guarantees, Overdrafts (OD), Asset/Equipment Financing, and Commercial Mortgages for medium & corporate enterprises with turnover up to AED 250 Million.',
        steps: [
          {
            title: 'Comprehensive Financial Diagnostics',
            desc: 'We collect 2 to 3 years of audited financials from a UAE-registered auditor, verify that key credit parameters (DSCR > 1.25, Leverage Ratio < 3:1) are met, and conduct AML/KYC sanity checks to map Ultimate Beneficial Owners (UBOs).'
          },
          {
            title: 'Credit Facility Architecture',
            desc: 'We package mixed facilities (Overdrafts for payroll, LCs for sourcing, and Trust Receipts to bridge clearing gaps) and identify corporate assets (mortgages, receivables factoring) to lower rates.'
          },
          {
            title: 'Information Memorandum (IM) & Risk Pitching',
            desc: 'We write a comprehensive IM pitch deck detailing industry outlook, working capital cycles, and utilization plans, ensuring complete alignment with CBUAE SME Customer Protection Regulations.'
          },
          {
            title: 'Committee Management & FL Execution',
            desc: "We present the IM to corporate desks of major financial institutions to create a competitive bidding environment on EIBOR spreads, and review the Final Facility Letter (FL) to align covenants."
          }
        ]
      },
      { 
        name: 'Project Finance', 
        desc: 'Structured as Limited-Recourse or Non-Recourse Financing where the bank relies strictly on the future cash flows generated by the project, lending directly to a Special Purpose Vehicle (SPV) created solely for massive manufacturing, infrastructure, or real estate projects.',
        steps: [
          {
            title: 'Feasibility Modeling & Bankability Check',
            desc: 'We build a 3-way financial model mapping out income statements, balance sheets, and FCFE (min. DSCR of 1.30x to 1.50x). We help secure binding Off-Take Agreements and structure sponsor equity-to-debt ratios (30:70 or 40:60).'
          },
          {
            title: 'Risk Allocation & Legal Architecture',
            desc: 'We guide the client to open a project-specific Escrow account, and assemble comprehensive security packages (land mortgages, EPC contract assignments, and SPV share pledges).'
          },
          {
            title: 'Due Diligence & Consortium Syndication',
            desc: 'We coordinate external technical advisors to vet construction timelines/costs and guide the client to pitch the IM to a consortium of local banks to arrange Syndicated Loan Facilities for projects exceeding AED 100 Million.'
          },
          {
            title: 'Tranche Disbursal & Drawdown Management',
            desc: "We coordinate with the bank's project monitors to release funding in tranches based on audited, certified construction milestones rather than a lump sum."
          }
        ]
      },
      { 
        name: 'Machinery Finance', 
        desc: 'Treated as traditional Asset-Backed Lending (ABL) relying on the equipment itself as collateral, or Sharia-compliant lease-to-own (Ijara) structures where the yellow goods, production lines, or medical tech represent the main security.',
        steps: [
          {
            title: 'Procurement & Asset Verification',
            desc: "We ensure the machinery vendor is on the bank's pre-approved panel (structuring LCs for overseas suppliers) and guide the client to budget for mandatory equity down payments (75% to 90% LTV)."
          },
          {
            title: 'Registry & Legal Compliance',
            desc: 'We conduct asset title searches and manage the possessory pledge/hypothecation registration on the EIRC registry. We structure amortization schedules to match the useful life of the asset (4 to 7 years cap).'
          },
          {
            title: 'Credit Underwriting & Insurance Packaging',
            desc: 'We compile proof of immediate revenue generation (pipeline contracts) and help package specialized comprehensive asset insurance with the bank listed as Sole Loss Payee.'
          },
          {
            title: 'Disbursement & Delivery Order',
            desc: "Upon approval, the bank cuts a manager's cheque or swift transfer directly to the dealer. We guide delivery coordination and ensure the bank's asset management team inspects and tags the asset serial numbers."
          }
        ]
      }
    ]
  },
  {
    id: 'vehicle-loan',
    title: 'Vehicle & Fleet Finance',
    subcategories: [
      {
        name: 'Vehicle Loans (Auto Loan / Auto Finance)',
        desc: 'A Vehicle Loan (also known as an Auto Loan or Auto Finance) is a personal, secured loan designed for individual buyers looking to finance a single vehicle for personal use.',
        steps: [
          {
            title: 'Review of Profile & Documents',
            desc: 'We thoroughly review client’s personal and employment profile along with all required documents in order to evaluate all liabilities for further procedures.'
          },
          {
            title: 'DBR & Central Bank Compliance Check',
            desc: 'We calculate your exact Debt Burden Ratio (DBR) to ensure your application perfectly aligns with UAE Central Bank policies. Client’s total monthly financial commitments (including existing loans and credit cards) cannot exceed 50% of your gross monthly income. Your final vehicle loan eligibility and maximum monthly instalment will depend entirely on the remaining DBR room you have left.'
          },
          {
            title: 'Down Payment and Repayment duration',
            desc: 'We work on your profile to lower your upfront costs as much as possible, targeting down payment options as low as 5% to 10% based on your profile and banking policies. Banking repayment structures are set at a highly manageable 48 months, with selected leading banks allowing you to stretch your tenure to the absolute maximum of 60 months for the lowest possible monthly installment.'
          },
          {
            title: 'Disbursement of Loan amount',
            desc: 'Once you have selected your vehicle, the loan amount is disbursed directly to the showroom or private seller. Simultaneously, the vehicle registration process begins. The car is officially transferred into your name at the RTA, with the financing bank registered as the primary lien holder until the loan is fully repaid.'
          },
          {
            title: 'Individual Vehicle Insurance',
            desc: 'We assist you in securing a comprehensive insurance policy for the vehicle, vehicle registration and transfer along with processing of Salik Card.'
          }
        ]
      },
      {
        name: 'Fleet & Commercial Vehicle Financing',
        desc: 'Customized credit lines and asset-backed term financing structured for commercial fleets, logistics operations, and company transport fleets at preferred institutional rates.'
      }
    ]
  },
  {
    id: 'credit-card',
    title: 'Loan Against Credit Card',
    subcategories: [
      {
        name: 'Loan Against Credit Card',
        desc: 'Loan Against Credit Card feature transforms your unused credit limit into instant cash deposited straight into your bank account.',
        steps: [
          {
            title: 'Limit Verification',
            desc: "The bank instantly reviews your credit card's available limit. Based on your current usage, the bank presents pre-approved cash loan options tailored to your profile"
          },
          {
            title: 'Flexible Tenure Selection',
            desc: 'A repayment plan that fits your monthly budget. UAE banks offer highly flexible terms, allowing you to spread the installments over 03 to 36 months'
          },
          {
            title: 'Application/Request Submission',
            desc: 'Once submitted, the approved funds are disbursed directly into your designated UAE bank account within minutes, while the matching amount is safely blocked on your credit card and released gradually as you pay your monthly installments.'
          }
        ]
      }
    ]
  },
  {
    id: 'mortgage-loan',
    title: 'Home Loans & Mortgages',
    subcategories: [
      {
        name: 'Home Loans & Mortgages',
        desc: 'A secured retail financing facility provided by licensed financial institutions specifically for purchasing, constructing, or refinancing residential property. The property itself serves as collateral, and the loan is heavily regulated by the Central Bank of the UAE (CBUAE) to ensure market stability.',
        steps: [
          {
            title: 'The Two Structural Forms Available',
            desc: 'Conventional Mortgages (standard loan where the bank charges interest) vs. Islamic Mortgages (Sharia-compliant Murabaha or Ijara lease-to-own structure, where the bank sells/leases the property at a fixed profit margin).'
          },
          {
            title: 'Review of Profile & Documents',
            desc: 'We thoroughly review client’s personal and employment profile along with all required documents in order to evaluate all liabilities for further procedures.'
          },
          {
            title: 'DBR & Central Bank Compliance Check',
            desc: 'We calculate your exact Debt Burden Ratio (which cannot exceed 50% of your gross income per UAE Central Bank rules) to ensure your application passes automated bank filtering.'
          },
          {
            title: 'Review of Critical Banking Requirements',
            desc: 'Salaried residents require a minimum salary of AED 10,000–15,000. AECB Credit Scores are heavily scrutinised (missed payments will stall application). Mandatory Life Insurance is legally required by UAE banks to cover outstanding debt.'
          },
          {
            title: 'Loan Tenure & Age Caps',
            desc: 'The maximum allowable lifespan for a residential mortgage is 25 years. The loan must be fully repaid before the borrower reaches age 65 (salaried) or age 70 (self-employed).'
          },
          {
            title: 'Review of Loan-to-Value (LTV) Caps',
            desc: 'CBUAE dictates LTV limits: Expat Residents get max 75% LTV (<5M) or 65% LTV (>5M). UAE Nationals get max 80% LTV (<5M) or 70% LTV (>5M). Subsequent properties are capped at 60% LTV, and off-plan properties are capped at 50% LTV.'
          },
          {
            title: 'Banking Pre-Approval (Borrower Assessment)',
            desc: 'KYC check and document compilation (salary certificates for salaried; audited financials, corporate bank statements, trade licenses for self-employed). We package the underwriting file and coordinate with the bank to obtain the formal Pre-Approval Letter (valid for 60 to 90 days).'
          },
          {
            title: 'Property Selection & Underwriting (Asset Assessment)',
            desc: 'Transaction advisory on the Memorandum of Understanding (MoU / Form F). We coordinate the bank\'s technical property valuation to prevent valuation shortfalls, and secure the Final Offer Letter (FOL), reviewing lock-in clauses and early settlement fees (capped at 1% or AED 10,000).'
          },
          {
            title: 'Execution, Settlement & Handover',
            desc: 'Pre-closing audits between buyer, seller, broker, and bank developers to align payout manager\'s cheques. We guide you through the DLD Trustee Office for DLD Title Transfer (settling old mortgages, registering bank security blocks, and issuing the new Title Deed).'
          },
          {
            title: 'Post-Disbursement Review (Portfolio Management)',
            desc: 'EIBOR tracking to evaluate buy-outs or balance transfers to lower-cost lenders if rates drop. We also advise on Equity Release strategies to unlock cash if the property appreciates substantially.'
          }
        ]
      }
    ]
  },
  {
    id: 'insurance',
    title: 'Insurance Portals',
    subcategories: [
      {
        name: 'Insurance Portals',
        desc: 'Sovereign risk coverages, corporate health packages, key-man coverage, and assets insurance facilitation.'
      }
    ]
  }
];

export default function Loans() {
  const [selectedCat, setSelectedCat] = useState('personal-finance');
  
  // Calculator States
  const [monthlyIncome, setMonthlyIncome] = useState(25000);
  const [currentEmi, setCurrentEmi] = useState(5000);
  const [calcLoanType, setCalcLoanType] = useState('Personal');
  const [interestRate, setInterestRate] = useState(5.5); // reducing
  const [tenureYears, setTenureYears] = useState(4);
  const location = useLocation();

  // Auto-scroll or tab selector based on hash
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const cleanHash = hash.replace('#', '');
      if (cleanHash.includes('loan') || cleanHash.includes('finance') || cleanHash.includes('pdc') || cleanHash.includes('stl') || cleanHash.includes('buyout') || cleanHash.includes('credit-card') || cleanHash.includes('sme') || cleanHash.includes('project') || cleanHash.includes('home') || cleanHash.includes('mortgage') || cleanHash.includes('insurance')) {
        if (cleanHash.includes('business') || cleanHash.includes('sme') || cleanHash.includes('project') || cleanHash.includes('lacc')) {
          setSelectedCat('business-loan');
        } else if (cleanHash.includes('vehicle') || cleanHash.includes('fleet')) {
          setSelectedCat('vehicle-loan');
        } else if (cleanHash.includes('credit-card') || cleanHash.includes('card')) {
          setSelectedCat('credit-card');
        } else if (cleanHash.includes('home') || cleanHash.includes('mortgage')) {
          setSelectedCat('mortgage-loan');
        } else if (cleanHash.includes('insurance')) {
          setSelectedCat('insurance');
        } else {
          setSelectedCat('personal-finance');
        }
        const element = document.getElementById('loans-directory');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location.hash]);

  // UAE Loan Eligibility Calculation (DBR based)
  // Max DBR is 50% for personal and typically 60% for corporate/business.
  const dbrRatio = calcLoanType === 'Personal' ? 0.50 : 0.60;
  const maxAllowedEmi = monthlyIncome * dbrRatio;
  const eligibleEmi = Math.max(0, maxAllowedEmi - currentEmi);
  
  // Calculate loan amount based on reducing balance interest rate
  // Formula: EMI = [P x r x (1+r)^n] / [(1+r)^n - 1]
  // Therefore: P = EMI * [(1+r)^n - 1] / [r * (1+r)^n]
  const r = (interestRate / 100) / 12;
  const n = tenureYears * 12;
  const maxEligibleLoan = r > 0
    ? (eligibleEmi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n))
    : eligibleEmi * n;

  const currentDbr = (currentEmi / monthlyIncome) * 100;

  return (
    <div className="flex-1 w-full bg-[#070F1E] pt-48 sm:pt-52 lg:pt-56 xl:pt-64 pb-20">
      <SEO
        title="Loans & Commercial Facilities"
        description="High-volume salary transfer, fleet, business, and mortgage loans structured through tier-1 banking institutions and private lenders."
        keywords="commercial loans, mortgage loans, business finance, auto loans, personal finance, credit cards, debt buyout, SME finance, Dubai, UAE"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/25 bg-[#0D1625]/85 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E2C999]">
              Pillar II
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#FBF9F4] leading-tight">
            Commercial Facilities & <br />
            <span className="text-gradient-gold italic">Structured Loans</span>
          </h1>
          <p className="text-sm sm:text-base font-light text-[#FBF9F4]/60 max-w-2xl leading-relaxed mt-2">
            Accelerate your corporate operations and protect your assets. We structure institutional finance, retail credit, and mortgage lines through preferred relationships with tier-1 UAE banks.
          </p>
        </div>

        {/* Categories Grid */}
        <div id="loans-directory" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Tab selector */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em] mb-4 pl-2">
              Facility Classes
            </div>
            {loanCategories.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedCat(item.id)}
                className={`w-full text-left p-5 transition-all duration-300 rounded-sm border flex items-center justify-between cursor-pointer group ${
                  selectedCat === item.id 
                    ? 'bg-[#0D1625] border-[#C5A059] text-[#FBF9F4]' 
                    : 'bg-[#050B15]/40 border-slate-900 text-[#FBF9F4]/50 hover:bg-[#0D1625]/50 hover:border-[#C5A059]/30 hover:text-[#FBF9F4]'
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-[#C5A059]">Asset Class</span>
                  <span className="text-sm font-semibold tracking-wide font-sans">{item.title}</span>
                </div>
                <ArrowUpRight className={`w-4 h-4 text-[#C5A059] transition-transform duration-300 ${
                  selectedCat === item.id ? 'translate-x-0.5 -translate-y-0.5' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`} />
              </button>
            ))}
          </div>

          {/* Right Details Panel */}
          <div className="lg:col-span-8 bg-[#0D1625] border border-slate-800 p-8 sm:p-10 rounded-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#9A7B3E] via-[#C5A059] to-[#E2C999]"></div>
            
            {loanCategories.map((item) => {
              if (item.id !== selectedCat) return null;
              return (
                <div key={item.id} className="animate-fade-in flex flex-col justify-between h-full gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-sans font-bold text-[#C5A059] tracking-wide border-b border-[#C5A059]/10 pb-3">
                      {item.title} Facilities
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-8">
                      {item.subcategories.map((sub, idx) => (
                        <div key={idx} className="bg-[#070F1E]/50 border border-slate-850 p-6 rounded-sm hover:border-[#C5A059]/20 transition-all duration-300">
                          <h4 className="text-sm font-sans font-bold text-[#E2C999] mb-3 flex items-center gap-2 border-b border-[#C5A059]/10 pb-2">
                            <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
                            {sub.name}
                          </h4>
                          <p className="text-xs sm:text-sm font-light text-[#FBF9F4]/70 leading-relaxed mb-6">
                            {sub.desc}
                          </p>
                          
                          {sub.steps && (
                            <div className="space-y-4 pl-4 border-l border-[#C5A059]/10 mt-4">
                              {sub.steps.map((step, sIdx) => (
                                <div key={sIdx} className="flex gap-3.5 items-start">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/25 text-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold">
                                    {sIdx + 1}
                                  </span>
                                  <div>
                                    <h5 className="text-xs font-sans font-semibold text-white mb-0.5">
                                      {step.title}
                                    </h5>
                                    <p className="text-[11px] font-light text-[#FBF9F4]/50 leading-relaxed">
                                      {step.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[#C5A059]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#070F1E] border border-[#C5A059]/25 rounded-full text-[#C5A059]">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="text-[10px] font-light text-[#FBF9F4]/40 max-w-[280px]">
                        Leveraging private institutional allocations and direct credit lines for preferred pricing.
                      </div>
                    </div>
                    <a
                      href="/#secure-intake"
                      className="px-8 py-3.5 bg-[#C5A059] text-[#070F1E] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#E2C999] transition-all rounded-sm font-sans"
                    >
                      Request Terms
                    </a>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* UAE Loan Eligibility Calculator */}
        <div className="bg-[#0D1625] border border-[#C5A059]/20 p-8 sm:p-10 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C5A059]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#C5A059]/10 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#070F1E] border border-[#C5A059]/20 rounded-sm">
                <Calculator className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h3 className="text-xl font-sans font-bold text-[#FBF9F4] tracking-wide">
                  UAE Debt Burden Ratio (DBR) & Loan Eligibility Calculator
                </h3>
                <p className="text-xs text-[#FBF9F4]/40 font-light mt-0.5">
                  Check your estimated maximum loan capacity according to the UAE Central Bank compliance thresholds.
                </p>
              </div>
            </div>
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A059] border border-[#C5A059]/20 px-3 py-1 bg-[#070F1E]">
              DBR Compliance Engine
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Input Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Income / Revenue Input */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs">
                    <label htmlFor="loan-income" className="font-semibold uppercase tracking-wider text-[#C5A059]">
                      {calcLoanType === 'Personal' ? 'Monthly Salary' : 'Monthly Business Revenue'}
                    </label>
                    <span className="font-mono text-[#FBF9F4] font-semibold text-sm">
                      AED {monthlyIncome.toLocaleString()}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    id="loan-income"
                    min="5000"
                    max="150000"
                    step="5000"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    className="w-full accent-[#C5A059] bg-[#070F1E] h-1.5 rounded-sm appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-[#FBF9F4]/30 font-mono">
                    <span>AED 5K</span>
                    <span>AED 150K+</span>
                  </div>
                </div>

                {/* Existing EMI Input */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs">
                    <label htmlFor="loan-emi" className="font-semibold uppercase tracking-wider text-[#C5A059]">
                      Existing Monthly Liabilities
                    </label>
                    <span className="font-mono text-[#FBF9F4] font-semibold text-sm">
                      AED {currentEmi.toLocaleString()}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    id="loan-emi"
                    min="0"
                    max="50000"
                    step="1000"
                    value={currentEmi}
                    onChange={(e) => setCurrentEmi(Number(e.target.value))}
                    className="w-full accent-[#C5A059] bg-[#070F1E] h-1.5 rounded-sm appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-[#FBF9F4]/30 font-mono">
                    <span>AED 0</span>
                    <span>AED 50K</span>
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Loan Type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="loan-type" className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Facility Class
                  </label>
                  <select 
                    id="loan-type"
                    value={calcLoanType}
                    onChange={(e) => setCalcLoanType(e.target.value)}
                    className="bg-[#070F1E] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3.5 px-3 rounded-sm focus:outline-none focus:border-[#C5A059] appearance-none cursor-pointer"
                  >
                    <option value="Personal" className="bg-[#0D1625] text-[#FBF9F4]">Personal (Max 50% DBR)</option>
                    <option value="Corporate" className="bg-[#0D1625] text-[#FBF9F4]">Corporate/SME (Max 60% DBR)</option>
                  </select>
                </div>

                {/* Interest Rate */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs">
                    <label htmlFor="loan-rate" className="font-semibold uppercase tracking-wider text-[#C5A059]">
                      Interest Rate (Reducing)
                    </label>
                    <span className="font-mono text-[#FBF9F4] font-semibold">
                      {interestRate}%
                    </span>
                  </div>
                  <input 
                    type="range" 
                    id="loan-rate"
                    min="2"
                    max="15"
                    step="0.25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-[#C5A059] bg-[#070F1E] h-1.5 rounded-sm appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-[#FBF9F4]/30 font-mono">
                    <span>2%</span>
                    <span>15%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs">
                    <label htmlFor="loan-tenure" className="font-semibold uppercase tracking-wider text-[#C5A059]">
                      Loan Tenure
                    </label>
                    <span className="font-mono text-[#FBF9F4] font-semibold">
                      {tenureYears} Years
                    </span>
                  </div>
                  <input 
                    type="range" 
                    id="loan-tenure"
                    min="1"
                    max="15"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full accent-[#C5A059] bg-[#070F1E] h-1.5 rounded-sm appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-[#FBF9F4]/30 font-mono">
                    <span>1 yr</span>
                    <span>15 yrs</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Calculations results */}
            <div className="lg:col-span-5 bg-[#070F1E]/80 border border-[#C5A059]/15 p-6 rounded-sm flex flex-col justify-between">
              <div>
                <h4 className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em] border-b border-[#C5A059]/15 pb-2 mb-6">
                  Eligibility Breakdown
                </h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Current Debt Burden (DBR):</span>
                    <span className={`text-xs font-mono font-semibold ${currentDbr > 45 ? 'text-rose-500' : 'text-[#C5A059]'}`}>
                      {currentDbr.toFixed(1)}%
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Maximum Allowed EMI:</span>
                    <span className="text-sm font-mono font-semibold text-[#FBF9F4]">AED {Math.round(maxAllowedEmi).toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#C5A059]/5 pb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Eligible Monthly EMI Capacity:</span>
                    <span className="text-sm font-mono font-semibold text-emerald-500">AED {Math.round(eligibleEmi).toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-wider text-[#FBF9F4]/40">Est. Max Eligible Loan:</span>
                    <div className="text-right">
                      <div className="text-lg font-mono font-semibold text-[#E2C999]">AED {Math.round(maxEligibleLoan).toLocaleString()}</div>
                      <div className="text-[8px] text-[#FBF9F4]/30 uppercase tracking-wider">Subject to credit assessment</div>
                    </div>
                  </div>
                </div>
              </div>

              {currentDbr > 50 && (
                <div className="my-4 p-3 bg-rose-500/10 border border-rose-500/20 text-[10px] text-rose-300 font-light rounded-sm flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span>Your current DBR exceeds typical UAE regulations. We recommend reviewing our Restructuring options to write down existing liabilities.</span>
                </div>
              )}

              <div className="pt-6 mt-4 border-t border-[#C5A059]/10">
                <a
                  href="/#secure-intake"
                  className="w-full block text-center bg-[#C5A059] hover:bg-[#E2C999] text-[#070F1E] py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all rounded-sm duration-300"
                >
                  Apply for Commercial Allocation
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
