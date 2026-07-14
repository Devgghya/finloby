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
            title: 'Eligibility & Compatibility Check',
            desc: 'We assess client’s eligibility for the maximum required loan amount across compatible financial institutions by analyzing client’s profile and salary structure.'
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
            title: 'Security Cheque',
            desc: 'Once soft approval is obtained from the financial institution, security cheque and Direct Debit Authority (DDA) is supposed to be submitted to the concern financial institution.'
          },
          {
            title: 'Liability Closure & Clearance Tracking',
            desc: 'Once the buyout is approved, we don\'t just stop there. We guide you through obtaining your final Clearance Letters from your old banks and ensuring your AECB credit report updates correctly to show the old accounts as closed.'
          },
          {
            title: 'Loan amount disbursal',
            desc: 'Our Team assists the client till the approved loan amount is disbursed from the concern financial institution.'
          }
        ]
      }
    ]
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    subcategories: [
      { 
        name: 'Retail Business Loans (Micro & Small Enterprises)', 
        desc: 'Target Profile:\nCompanies with an annual turnover between AED 500,000 to AED 10–20 Million.\n\nProduct Types:\nUnsecured term loans, Merchant Point-of-Sale (POS) financing, Business Credit Cards, and minor working capital lines.',
        steps: [
          {
            title: 'Phase 1: Onboarding & Cash Flow Scrubbing - AECB Alignment (Dual Scrutiny)',
            desc: 'In Retail Loans, UAE banks rely heavily on "scorecard lending." We coordinate to run a check on both the Company’s AECB score and the Principal Shareholder\'s personal AECB score.'
          },
          {
            title: 'Phase 1: Onboarding & Cash Flow Scrubbing - The "Bounced Cheque" Audit',
            desc: 'We thoroughly review the last 12 months of bank statements. In the UAE, even one or two outward bounced cheques due to insufficient funds (EFSR) may trigger an automatic system rejection. We guide client to clean these up or wait out the cycle before applying.'
          },
          {
            title: 'Phase 1: Onboarding & Cash Flow Scrubbing - Average Quarterly Balance (AQB) Calculation',
            desc: 'Calculate the client’s real monthly transactional run rate. Banks generally benchmark the loan amount against the client\'s AQB.'
          },
          {
            title: 'Phase 2: Structuring & Solution Selection - Traditional Unsecured vs. POS Financing',
            desc: 'If the client is in retail, F&B, or e-commerce, we guide them toward POS/Payment Gateway Loans.'
          },
          {
            title: 'Phase 2: Structuring & Solution Selection - VAT Return Triangulation',
            desc: 'We guide client to ensure that the revenues reflected on the bank statements match the Federal Tax Authority (FTA) VAT returns perfectly. There are system in place to cross-verify VAT filings against statement inflows.'
          },
          {
            title: 'Phase 3: Fast-Track Packaging & Submission - Document Standardization',
            desc: 'We gather to verify the standard package required by Dubai retail underwriters: Valid Trade License, Ejari (commercial tenancy contract), Memorandum of Association (MOA), and 6–12 months of bank statements.'
          },
          {
            title: 'Phase 3: Fast-Track Packaging & Submission - Personal Guarantee (PG) Structuring',
            desc: 'We prepare the client for the mandatory signing of a Personal Guarantee and a security post-dated cheque (PDC) for the full loan value, a standard security mechanism in UAE retail banking as per service provider institutions, banking law and practice'
          },
          {
            title: 'Phase 4: Approval & Drawdown - Turnaround Monitoring',
            desc: 'Retail business loans are designed to be fast. We monitor automated underwriting gates. Upon approval, we cross check the setup fees and insurance fees before signing the offer letter.'
          }
        ]
      },
      { 
        name: 'SME Loans (Medium & Corporate Enterprises)', 
        desc: 'Target Profile:\nCompanies with an annual turnover between AED 20 Million to AED 250 Million (aligned with the latest CBUAE SME Customer Protection Regulations).\n\nProduct Types:\nStructured Trade Finance (Letter of Credit, Trust Receipts), Bank Guarantees, Overdrafts (OD), Asset/Equipment Financing, and Commercial Mortgages.',
        steps: [
          {
            title: 'Phase 1: Comprehensive Financial Diagnostics - Audited Financials Reconciliation',
            desc: 'SME Corporate loans cannot rely on bank statements alone. We need to collect 2 to 3 years of audited financials stamped by a UAE-registered auditor. Further, verification is required that key ratios meet UAE commercial banking credit parameters:\nDebt Service Coverage Ratio (DSCR): Ideally >1.25\nLeverage Ratio (Debt-to-Equity): Ideally <3:1'
          },
          {
            title: 'Phase 1: Comprehensive Financial Diagnostics - Anti-Money Laundering (AML) & KYC Sanity Check',
            desc: 'We ensure the Ultimate Beneficial Owners (UBOs) are clearly mapped. Verify that no corporate transactions originate from or link to sanctioned jurisdictions, ensuring complete alignment with CBUAE guideline.'
          },
          {
            title: 'Phase 2: Credit Facility Architecture - Facility Bundling (The "Toolkit" Approach)',
            desc: 'Rather than asking for a flat cash loan from institutes, we structure a mixed facility. For example, for an engineering or trading firm, package:\nAn Overdraft Line for local supplier payroll.\nLetters of Credit (LCs) for global sourcing.\nTrust Receipts (TR) to bridge the 60-to-90 day clearing gap.'
          },
          {
            title: 'Phase 2: Credit Facility Architecture - Collateral & Security Asset Mapping',
            desc: 'We identify clean corporate assets to lower the borrowing rate. This includes a registered mortgage on industrial warehouses, factories, office units, or a lien over receivables (Invoice Factoring).'
          },
          {
            title: 'Phase 3: Information Memorandum (IM) & Risk Pitching - The IM Pitch Deck',
            desc: 'Unlike retail, corporate SME loans require a formal human underwriting committee review. We guide Firm to write a comprehensive Information Memorandum detailing:\nIndustry outlook in the UAE/GCC market.\nWorking capital cycle (Days Inventory Outstanding + Days Sales Outstanding − Days Payable Outstanding).\nExplicit utilization plan for the requested facility.'
          },
          {
            title: 'Phase 3: Information Memorandum (IM) & Risk Pitching - SME Customer Protection Adherence',
            desc: 'We ensure the engagement aligns with the CBUAE SME Customer Protection Regulation (Circular 2/2026). We guide firm to confirm that the bank provides a clear, bilingual (Arabic/English) Key Facts Statement highlighting all transparent pricing, variable margin spreads over EIBOR, and covenants, while verifying that "tied-selling/bundling" of unrequested insurance products is avoided.'
          },
          {
            title: 'Phase 4: Credit Committee Management & Facility Letter (FL) Execution - Lender RFP and Negotiation',
            desc: 'Present the IM to multiple corporate desks to all major financial institutions to create a competitive bidding environment on the EIBOR margin spread.'
          },
          {
            title: 'Phase 4: Credit Committee Management & Facility Letter (FL) Execution - Covenant Management',
            desc: 'Review the Final Facility Letter carefully. Ensure that the financial covenants (e.g., maintaining a specific minimum turnover through the lending bank’s account) are realistic and will not trigger technical defaults for client during seasonal lulls.'
          }
        ]
      },
      { 
        name: 'Project Finance (Special Purpose Vehicles & Infrastructure)', 
        desc: 'Target Profile:\nMassive manufacturing setups, infrastructure developments, or large-scale real estate projects.\n\nKey UAE Concept:\nThe bank lends directly to a Special Purpose Vehicle (SPV) created solely for the project, isolating the parent company\'s balance sheet from risk.',
        steps: [
          {
            title: 'Phase 1: Feasibility Modeling & Bankability Check - The 3-Way Financial Model',
            desc: 'We build a meticulous financial model mapping out the Project\'s Income Statement, Balance Sheet, and Free Cash Flow to Equity (FCFE). UAE underwriting committees require a minimum Debt Service Coverage Ratio (DSCR) of 1.30× to 1.50×.'
          },
          {
            title: 'Phase 1: Feasibility Modeling & Bankability Check - Off-Take Agreement Structuring',
            desc: 'Banks in Dubai rarely fund projects based on speculation. We help secure a binding Off-Take Agreement (a guarantee from an eligible buyer to purchase the project’s future output) to make the deal "bankable."'
          },
          {
            title: 'Phase 1: Feasibility Modeling & Bankability Check - Equity to Debt Structuring',
            desc: 'We help and guide ensure the sponsors have their equity portion ready. Dubai banks typically require a 30:70 or 40:60 Equity-to-Debt ratio. The bank will mandate that the client\'s equity is injected and utilized before a single bank dirham is disbursed.'
          },
          {
            title: 'Phase 2: Risk Allocation & Legal Architecture - SPV & Escrow Account Setup',
            desc: 'We guide the client to open a project-specific Escrow Account with an authorized Dubai bank. All project inflows and construction outflows must legally clear through this account.'
          },
          {
            title: 'Phase 2: Risk Allocation & Legal Architecture - Collateral & Security Package Assembly',
            desc: 'Unlike corporate loans, standard project finance utilizes a comprehensive security bundle under UAE law:\nMortgage over the project land/concession rights.\nAssignment of Project Contracts: Legal assignment of the EPC (Engineering, Procurement, Construction) contract and insurance policies directly to the lender.\nShare Pledge: A registered pledge over the shares of the SPV with the relevant authority (e.g., DED or DIFC).'
          },
          {
            title: 'Phase 3: Due Diligence & Bank Consortium Syndication - Independent Engineers/Valuers',
            desc: 'Dubai banks appoints an external Technical Advisor (such as a certified engineering firm) at the client\'s expense to vet the construction timelines and cost estimates.'
          },
          {
            title: 'Phase 3: Due Diligence & Bank Consortium Syndication - Information Memorandum (IM) Pitching',
            desc: 'For projects exceeding AED 100 Million, we guide firm to pitch the IM to a consortium of local banks (e.g., Emirates NBD, FAB, ADCB) to arrange a Syndicated Loan Facility, mitigating single-bank risk exposure.'
          },
          {
            title: 'Phase 4: Tranche Disbursal & Drawdown Management - Progress-Based Milestone Releases',
            desc: 'Funds are not released in a lump sum. We coordinate with the bank\'s project monitors to release funding in tranches based on audited, certified construction milestones.'
          }
        ]
      },
      { 
        name: 'Machinery & Heavy Equipment Finance', 
        desc: 'Target Profile:\nConstruction, logistics, healthcare, and industrial manufacturing firms acquiring yellow goods, production lines, or medical tech.\n\nKey Dubai Concept:\nThis is an Asset-Backed Loan (ABL) or Islamic Lease-to-Own (Ijara) where the asset itself represents the main security.',
        steps: [
          {
            title: 'Phase 1: Procurement & Asset Verification - Approved Dealer Validation',
            desc: 'Dubai banks maintain strict "Approved Supplier/Manufacturer Lists." We ensure the machinery vendor is on the selected bank\'s pre-approved panel (e.g., RAKBANK or CBI). Buying from unlisted overseas suppliers requires Letter of Credit (LC) structuring.'
          },
          {
            title: 'Phase 1: Procurement & Asset Verification - Down Payment & Loan-to-Value (LTV) Optimization',
            desc: 'We guide to budget for the mandatory equity down payment. Dubai asset-backed structures generally provide an LTV of 75% to 90%, meaning the client must pay 10% to 25% upfront directly to the dealer.'
          },
          {
            title: 'Phase 2: Registry & Legal Compliance - EIRC (Emirates Integrated Registries Company) Check',
            desc: 'We conduct an asset title search. The bank will register a possessory pledge/hypothecation over the movable machinery on the EIRC registry to prevent the client from selling or re-pledging the machine during the loan tenure.'
          },
          {
            title: 'Phase 2: Registry & Legal Compliance - Tenure Matching',
            desc: 'We help to structure the amortization schedule relative to the useful life of the asset. Dubai banks cap machinery financing at 4 to 7 years, ensuring the loan does not outlast the physical depreciation of the asset.'
          },
          {
            title: 'Phase 3: Credit Underwriting & Insurance Packaging - Cash Flow Triangulation',
            desc: 'Even though the loan is secured by the asset, the bank requires proof that the machinery will generate immediate revenue. Present contracts or pipeline projects that require this specific machinery.'
          },
          {
            title: 'Phase 3: Credit Underwriting & Insurance Packaging - Mandatory Comprehensive Asset Insurance',
            desc: 'We help to package a specialized asset insurance policy with the bank listed as the Sole Loss Payee. The policy must cover operational damage, theft, and third-party liabilities common to Dubai industrial zones.'
          },
          {
            title: 'Phase 4: Disbursement & Delivery Order - Direct-to-Dealer Payout',
            desc: 'Upon approval of the Facility Letter, the bank cuts a manager’s cheque or processes a direct swift transfer directly to the machinery dealer, never to the client’s operational account.'
          },
          {
            title: 'Phase 4: Disbursement & Delivery Order - Delivery & Asset Inspection',
            desc: 'We guide client to Coordinate the delivery of the machine, ensuring the bank’s asset management team physically inspects and tags the serial number of the asset to finalize the activation of the loan.'
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
        name: 'Vehicle Loan',
        desc: 'A Vehicle Loan (also known as an Auto Loan or Auto Finance) is a personal, secured loan designed for individual buyers looking to finance a single vehicle for personal use.',
        steps: [
          {
            title: 'Step 1: Review of Profile & Documents',
            desc: 'We thoroughly review client’s personal and employment profile along with all required documents in order to evaluate all liabilities for further procedures.'
          },
          {
            title: 'Step 2: DBR & Central Bank Compliance Check',
            desc: 'We calculate your exact Debt Burden Ratio (DBR) to ensure your application perfectly aligns with UAE Central Bank policies. Client’s total monthly financial commitments (including existing loans and credit cards) cannot exceed 50% of your gross monthly income. Your final vehicle loan eligibility and maximum monthly instalment will depend entirely on the remaining DBR room you have left.'
          },
          {
            title: 'Step 3: Down Payment and Repayment duration',
            desc: 'We work on your profile to lower your upfront costs as much as possible, targeting down payment options as low as 5% to 10% based on your profile and banking policies.\nBanking repayment structures are set at a highly manageable 48 months, with selected leading banks allowing you to stretch your tenure to the absolute maximum of 60 months for the lowest possible monthly installment.'
          },
          {
            title: 'Step 4: Disbursement of Loan amount',
            desc: 'Once you have selected your vehicle, the loan amount is disbursed directly to the showroom or private seller. Simultaneously, the vehicle registration process begins. The car is officially transferred into your name at the RTA, with the financing bank registered as the primary lien holder until the loan is fully repaid.'
          },
          {
            title: 'Step 5: Individual Vehicle Insurance',
            desc: 'We assist you in securing a comprehensive insurance policy for the vehicle, vehicle registration and transfer along with processing of Salik Card.'
          }
        ]
      },
      {
        name: 'Fleet Loan',
        desc: 'A Fleet Loan is a comprehensive, structured credit facility tailored for companies that need to acquire, manage, or upgrade a large group of vehicles simultaneously. Ideal for logistics, rent a car companies, and large-scale distribution businesses in Dubai, fleet financing allows you to bundle multiple vehicles into a single, manageable loan agreement with optimized interest rates and unified repayment terms.',
        steps: [
          {
            title: 'Step 1: Fleet Requirement & Capacity Planning',
            desc: 'We evaluate your entire business expansion plan. Rather than looking at one vehicle, we assess how a fleet addition impacts your projected revenue, operational costs, and overall debt-service coverage ratio (DSCR).'
          },
          {
            title: 'Step 2: Corporate Credit Line Sourcing',
            desc: 'Instead of a basic car loan, we negotiate a Fleet Credit Facility or Master Lease/Loan Agreement with UAE banks. This gives your business an approved financial umbrella/limit that you can draw down from as you add vehicles.'
          },
          {
            title: 'Step 3: Advanced Documentation & Business Case',
            desc: 'In addition to Trade Licenses and bank statements, we help you prepare a solid business case. This may include existing client contracts (proving the need for a fleet), fleet management profiles, and bulk proforma invoices from commercial dealers.'
          },
          {
            title: 'Step 4: Commercial Credit Committee Review',
            desc: 'Fleet loans involve higher capital risks, meaning they go to senior bank credit committees. We proactively manage this intense underwriting process, defending your business model to secure a high-limit fleet approval.'
          },
          {
            title: 'Step 5: Fleet Insurance & Global Mortgage',
            desc: 'We negotiate bulk, fleet-wide commercial insurance policies to save you premium costs. The bank establishes a global mortgage framework over the incoming asset lot.'
          },
          {
            title: 'Step 6: Phased Disbursement & Fleet Deployment',
            desc: 'Disbursement can happen all at once or in phases. As the dealers ready the batches of vehicles, the bank releases funds against the master credit line. Your fleet is registered, tagged, and deployed simultaneously.'
          }
        ]
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
        name: 'Home Loan',
        desc: 'Home Loan (Mortgage Loan) is a secured retail financing facility provided by licensed financial institutions to individuals (UAE Nationals, residents, resident expatriates, or non-residents) specifically for purchasing, constructing, or refinancing residential property. The property itself serves as the underlying collateral, and the loan is heavily regulated by the Central Bank of the UAE (CBUAE) to ensure market stability and prevent predatory lending.',
        steps: [
          {
            title: 'The Two Structural Forms',
            desc: 'UAE banks offer two legal and financial pathways to a mortgage:\nConventional Mortgages:\nA standard loan where the bank charges interest\nIslamic Mortgage (Sharia-Compliant):\nStructured as a Murabaha (cost-plus profit) or Ijara (lease-to-own). Instead of charging interest, the bank buys the property and sells or leases it back to the customer at a profit margin.'
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
            desc: 'To qualify for a home loan in the UAE, banks strictly evaluate:\n1. Minimum Salary: Usually starts at AED 10,000 to AED 15,000 per month for salaried residents.\n2. AECB Credit Score: The Al Etihad Credit Bureau score is heavily scrutinise; a history of bounced cheques or missed card payments will stall an application.\n3. Mandatory Life Insurance: UAE banks legally require you to take out a mortgage protection life insurance policy assigned to the bank to cover the outstanding debt in the event of death.'
          },
          {
            title: 'Loan Tenure & Age Caps',
            desc: 'The maximum allowable lifespan for a residential mortgage is 25 years. Furthermore, the loan must be fully repaid before the borrower reaches:\n1. Age 65 for salaried individuals.\n2. Age 70 for self-employed individuals.'
          },
          {
            title: 'Review of Loan-to-Value (LTV) Caps',
            desc: 'The CBUAE dictates exactly how much a bank can lend relative to the property\'s independent valuation. You cannot borrow 100% of the property value. The limits scale based on nationality, property price, and whether it’s your first home:\n1. Expatriate Residents (First Property):\na. Value under AED 5 Million: Maximum 75% LTV (25% down payment required).\nb. Value over AED 5 Million: Maximum 65% LTV (35% down payment required).\n2. UAE Nationals (First Property):\na. Value under AED 5 Million: Maximum 80% LTV (20% down payment required).\nb. Value over AED 5 Million: Maximum 70% LTV (30% down payment required).\n3. Second/Subsequent Properties (Investors):\nCapped at 60% LTV for both expats and UAE nationals.\n4. Off-Plan Properties:\nStricter rules apply to under-construction properties, universally capped at 50% LTV.'
          },
          {
            title: 'Banking Pre-Approval (The "Borrower" Assessment)',
            desc: 'The goal is to secure a formal commitment from the lender regarding the client’s creditworthiness.\n1. KYC & Document Compilation:\nWe help gather and verify the compliance package based on the profile:\na. Salaried Expat: Salary certificates, 6 months of bank statements, payslips, and continuous employment records.\nb. Self-Employed/Business Owners: Audited financial statements, corporate bank statements (12 months), trade licenses, and MOA/Share Certificates.\n2. Application Submission & Liaison:\nWe help package the underwriting file and submit it to the selected bank(s). We Manage all query-handling and clarify income discrepancies with the bank’s assigned credit team.\n3. Pre-Approval Letter Issuance:\nWe help client in obtaining the formal Pre-Approval Letter. Ensuring the client understands its parameters (typically valid for 60 to 90 days), allowing them to confidently place an offer on a property.'
          },
          {
            title: 'Property Selection & Underwriting (The "Asset" Assessment)',
            desc: '1. Transaction Advisory (Form F / MoU): Once the client identifies a property, we review the Memorandum of Understanding (Form F) before they sign it.\n2. Bank Valuation Coordination:\nWe coordinate and Initiate and monitor the bank’s independent technical property valuation to ensure the asset\'s appraised value matches the agreed purchase price (preventing a "valuation shortfall" where the client would have to plug the gap with cash).\n3. Final Offer Letter (FOL): We help client in securing the final binding mortgage contract from the bank. We then review the fine print, specifically checking lock-in periods, early settlement fees (capped by the CBUAE at 1% or AED 10,000), and mandatory life/property insurance premiums.'
          },
          {
            title: 'Execution, Settlement & Handover',
            desc: 'The goal is the successful legal transfer of title and funds disbursement.\n1. Pre-Closing Audits:\nCoordination between the buyer, seller, real estate broker, and bank developers to align the final payout figures. Ensure all manager\'s cheques are cut precisely.\n2. DLD Trust Deed & Title Transfer: We guide the client through the final step at a Dubai Land Department (DLD) Trustee Office. Oversee the simultaneous actions of:\na. The bank settling the existing owner\'s mortgage (if applicable).\nb. The registration of the bank\'s security block (the mortgage) on the property.\nc. The issuance of the new Title Deed in client\'s name.'
          },
          {
            title: 'Post-Disbursement Review (Portfolio Management)',
            desc: 'Our relationship doesn\'t end at handover. This phase ensures retention.\n1. EIBOR Tracking & Re-Financing Reviews: We monitor macro interest rate environments. If market rates drop significantly, we proactively advise the client on mortgage buy-outs or balance transfers to lower-cost lenders.\n2. Equity Release Strategies: If the property appreciates substantially over the subsequent years, we consult the client on structuring an "Equity Release" loan to unlock capital for future corporate or real estate investments.'
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
                               {sub.steps.map((step, sIdx) => {
                                 const cleanedTitle = step.title.replace(/^(?:Step\s+\d+:\s*|\d+\.\s*)/i, '');
                                 return (
                                   <div key={sIdx} className="flex gap-3.5 items-start">
                                     <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/25 text-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold">
                                       {sIdx + 1}
                                     </span>
                                     <div>
                                       <h5 className="text-xs font-sans font-semibold text-white mb-0.5">
                                         {cleanedTitle}
                                       </h5>
                                       <p className="text-[11px] font-light text-[#FBF9F4]/50 leading-relaxed">
                                         {step.desc}
                                       </p>
                                     </div>
                                   </div>
                                 );
                               })}
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
