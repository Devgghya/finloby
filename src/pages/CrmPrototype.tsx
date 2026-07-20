import { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  ShieldAlert, 
  FolderLock, 
  Plus, 
  Send, 
  Download, 
  Upload, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  Bot, 
  FileText
} from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  interest: string;
  status: 'intake' | 'advisory' | 'legal' | 'settled';
  amount?: string;
  date: string;
  notes: string;
}

export default function CrmPrototype() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'pipeline' | 'whatsapp' | 'vault'>('dashboard');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [simMessages, setSimMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    { sender: 'bot', text: "Welcome to Finloby 🇦🇪\nSalam & Hello! 👋\nHow can our advisory team assist you today? Please select your option:\n\n1️⃣ Loans & Facilities\n2️⃣ Debt Solutions\n3️⃣ International Business Setup\n4️⃣ Legal Assistance\n5️⃣ Investment Advisory", time: "11:36 AM" }
  ]);
  const [userInput, setUserInput] = useState('');
  
  // Initial Mock Leads
  const [leads, setLeads] = useState<Lead[]>([
    { id: 'L-101', name: 'Ahmed Al-Mansoori', phone: '+971 50 123 4567', email: 'ahmed@mansoori.ae', interest: 'Loans & Facilities', status: 'intake', amount: 'AED 4.5M', date: '2026-07-20', notes: 'Inquiring about corporate business finance and SME credit lines.' },
    { id: 'L-102', name: 'Sarah Jenkins', phone: '+971 58 987 6543', email: 'sarah.j@outlook.com', interest: 'Debt Solutions', status: 'advisory', amount: 'AED 850K', date: '2026-07-19', notes: 'Credit card default. Requesting salary consolidation and AECB review.' },
    { id: 'L-103', name: 'Amit Sharma', phone: '+971 52 456 7890', email: 'amit.sharma@techcorp.in', interest: 'Business Setup', status: 'intake', amount: 'AED 150K', date: '2026-07-20', notes: 'Interested in mainland trade license and dual corporate sponsorship.' },
    { id: 'L-104', name: 'David Miller', phone: '+971 55 789 0123', email: 'david.m@legalgroup.com', interest: 'Legal Assistance', status: 'legal', amount: 'N/A', date: '2026-07-18', notes: 'Active travel ban clearance coordinate check. Cheque bounce case pending.' },
    { id: 'L-105', name: 'Fatima Al-Suwaidi', phone: '+971 50 999 8888', email: 'fatima@suwaidi.ae', interest: 'Debt Solutions', status: 'settled', amount: 'AED 1.2M', date: '2026-07-15', notes: 'Negotiated 55% waiver with tier-1 bank. AECB status updated to settled.' }
  ]);

  const [newLeadForm, setNewLeadForm] = useState({ name: '', phone: '', email: '', interest: 'Debt Solutions', amount: '', notes: '' });
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);

  // File Vault State
  const vaultFiles = [
    { name: 'Cheque_Bounce_Defense_V4.pdf', size: '1.8 MB', date: '2026-07-20', uploader: 'David Miller' },
    { name: 'Restructuring_Proposal_Signed.pdf', size: '2.4 MB', date: '2026-07-19', uploader: 'Sarah Jenkins' },
    { name: 'AED_1.2M_Settlement_Release_Letter.pdf', size: '950 KB', date: '2026-07-15', uploader: 'Fatima Al-Suwaidi' }
  ];

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    const newLead: Lead = {
      id: `L-${Math.floor(100 + Math.random() * 900)}`,
      name: newLeadForm.name,
      phone: newLeadForm.phone,
      email: newLeadForm.email,
      interest: newLeadForm.interest,
      status: 'intake',
      amount: newLeadForm.amount || 'N/A',
      date: new Date().toISOString().split('T')[0],
      notes: newLeadForm.notes
    };
    setLeads([newLead, ...leads]);
    setShowAddLeadModal(false);
    setNewLeadForm({ name: '', phone: '', email: '', interest: 'Debt Solutions', amount: '', notes: '' });
  };

  const handleDropLead = (leadId: string, newStatus: 'intake' | 'advisory' | 'legal' | 'settled') => {
    setLeads(prevLeads => prevLeads.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
  };

  const handleSimSend = (textToSend?: string) => {
    const input = textToSend || userInput;
    if (!input.trim()) return;

    const newMsgs = [...simMessages, { sender: 'user' as const, text: input, time: 'Just now' }];
    setSimMessages(newMsgs);
    setUserInput('');

    // Simulated Bot Responses
    setTimeout(() => {
      let botResponse = "";
      const choice = input.trim();

      if (choice === '1') {
        botResponse = "📁 **Loans & Facilities**\nWe assist with:\n- Retail Business Loans\n- SME Financing\n- Home Mortgages\n\nPlease reply with your **Required Loan Amount** and **Email Address** to match you with partner banks.";
      } else if (choice === '2') {
        botResponse = "⚖️ **Debt Solutions**\nWe help with:\n- Debt Counselling\n- Consolidation\n- Restructuring & Settlement\n\nPlease reply with your **Total Outstanding Debt** to speak with our insolvency advisor.";
      } else if (choice === '3') {
        botResponse = "🏢 **International Business Setup**\nWe assist with:\n- Mainland Licenses\n- Free Zone formation\n- Banking Accounts opening\n\nPlease reply with your **Preferred Activity** (Trading, Consulting, etc.).";
      } else if (choice === '4') {
        botResponse = "⚖️ **Legal Assistance**\nWe support:\n- Police case clearance\n- Travel ban removals\n- Court defense\n\nPlease reply with your **Case Number** or brief details for legal analysis.";
      } else if (choice === '5') {
        botResponse = "📈 **Investment Advisory**\nWe advise on:\n- Strategic capital allocation\n- Private placement programs\n\nPlease share your **Investment Capital Range** and email address.";
      } else {
        botResponse = "Understood. Our client manager has recorded your inquiry. An experienced advisor will contact you within 60 minutes.\n\nType **menu** to start over.";
      }

      setSimMessages(prev => [...prev, { sender: 'bot', text: botResponse, time: 'Just now' }]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#070F1E] text-slate-100 flex flex-col font-sans">
      
      {/* Top Banner */}
      <header className="bg-[#0D1625] border-b border-[#C5A059]/20 px-6 py-4 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] font-bold text-lg tracking-[0.1em] font-serif">LAUNCHIFY STUDIO</span>
            <span className="text-white/40 text-xs font-mono border-l border-white/20 pl-2">CRM ENGINE v1.0</span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 border border-emerald-500/20 bg-emerald-500/10 rounded-full text-[9px] font-bold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            ACTIVE PROTOTYPE ENVIRONMENT
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="text-[#FBF9F4]/70 font-serif italic">Designed for **Finloby**</span>
          <span className="px-3 py-1 bg-[#C5A059]/10 border border-[#C5A059]/25 text-[#C5A059] rounded-sm font-semibold uppercase tracking-wider text-[10px]">
            Owner Mode
          </span>
        </div>
      </header>

      {/* Main Layout Workspace */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar */}
        <aside className="w-64 bg-[#09101C] border-r border-[#C5A059]/10 flex flex-col justify-between py-6">
          <div className="space-y-6">
            <div className="px-6">
              <h3 className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.2em]">Management Control</h3>
            </div>
            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center gap-3 px-6 py-3 text-xs transition-all duration-200 text-left ${activeTab === 'dashboard' ? 'bg-[#C5A059]/10 border-l-2 border-[#C5A059] text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/30'}`}
              >
                <LayoutDashboard className="w-4 h-4 text-[#C5A059]" />
                Dashboard Overview
              </button>
              <button 
                onClick={() => setActiveTab('pipeline')}
                className={`w-full flex items-center gap-3 px-6 py-3 text-xs transition-all duration-200 text-left ${activeTab === 'pipeline' ? 'bg-[#C5A059]/10 border-l-2 border-[#C5A059] text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/30'}`}
              >
                <Users className="w-4 h-4 text-[#C5A059]" />
                Leads Pipeline
              </button>
              <button 
                onClick={() => setActiveTab('whatsapp')}
                className={`w-full flex items-center gap-3 px-6 py-3 text-xs transition-all duration-200 text-left ${activeTab === 'whatsapp' ? 'bg-[#C5A059]/10 border-l-2 border-[#C5A059] text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/30'}`}
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                WhatsApp Bot Simulator
              </button>
              <button 
                onClick={() => setActiveTab('vault')}
                className={`w-full flex items-center gap-3 px-6 py-3 text-xs transition-all duration-200 text-left ${activeTab === 'vault' ? 'bg-[#C5A059]/10 border-l-2 border-[#C5A059] text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/30'}`}
              >
                <FolderLock className="w-4 h-4 text-[#C5A059]" />
                Secure Document Vault
              </button>
            </nav>
          </div>
          
          <div className="px-6 pt-6 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
            Developed by Launchify Studio.<br />No subscription fees.
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8 bg-[#070F1E] relative">
          
          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-2xl font-serif text-white">Advisory Pipeline Metrics</h1>
                <p className="text-xs text-slate-400 mt-1">Real-time statistics of Finloby client acquisitions and active cases.</p>
              </div>

              {/* Status Widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#0D1625] border border-slate-800 p-5 rounded-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Total Active Leads</span>
                    <h2 className="text-3xl font-bold text-white mt-1">{leads.length}</h2>
                  </div>
                  <Users className="w-8 h-8 text-[#C5A059]/30" />
                </div>
                <div className="bg-[#0D1625] border border-slate-800 p-5 rounded-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Intake Verification</span>
                    <h2 className="text-3xl font-bold text-amber-500 mt-1">
                      {leads.filter(l => l.status === 'intake').length}
                    </h2>
                  </div>
                  <Clock className="w-8 h-8 text-amber-500/30 animate-pulse" />
                </div>
                <div className="bg-[#0D1625] border border-slate-800 p-5 rounded-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Active Restructuring</span>
                    <h2 className="text-3xl font-bold text-sky-500 mt-1">
                      {leads.filter(l => l.status === 'advisory' || l.status === 'legal').length}
                    </h2>
                  </div>
                  <ShieldAlert className="w-8 h-8 text-sky-500/30" />
                </div>
                <div className="bg-[#0D1625] border border-slate-800 p-5 rounded-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Waivers Secured</span>
                    <h2 className="text-3xl font-bold text-emerald-500 mt-1">
                      {leads.filter(l => l.status === 'settled').length}
                    </h2>
                  </div>
                  <UserCheck className="w-8 h-8 text-emerald-500/30" />
                </div>
              </div>

              {/* Lead Origin Simulation & Analytics Card */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Meta Ads Integration Simulator */}
                <div className="lg:col-span-2 bg-[#0D1625] border border-slate-800 p-6 rounded-sm space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Meta Ads & Website Form Uplink Simulator</h3>
                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-[9px] rounded-full font-bold">API ACTIVE</span>
                  </div>
                  
                  <p className="text-xs text-slate-400 leading-relaxed">
                    This module simulates a lead arriving automatically in your CRM dashboard the moment a potential client submits their details on a Facebook Lead Form, Instagram Ad, or your website's **Secure Intake Portal**.
                  </p>

                  <div className="p-4 bg-[#070F1E] border border-[#C5A059]/10 rounded-sm space-y-3">
                    <h4 className="text-xs font-semibold text-[#C5A059]">Quick Mock Lead Influx Generator:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => {
                          const newLead: Lead = {
                            id: `L-${Math.floor(100 + Math.random() * 900)}`,
                            name: 'Mohammad Al-Haddad',
                            phone: '+971 56 777 1234',
                            email: 'm.haddad@advisory.ae',
                            interest: 'Debt Solutions',
                            status: 'intake',
                            amount: 'AED 1.8M',
                            date: new Date().toISOString().split('T')[0],
                            notes: 'Leads from Facebook Ad: Inquiring about UAE insolvency law restructure options.'
                          };
                          setLeads([newLead, ...leads]);
                        }}
                        className="px-4 py-2.5 bg-[#C5A059]/10 hover:bg-[#C5A059]/20 border border-[#C5A059]/30 text-xs text-[#C5A059] rounded-sm transition-all"
                      >
                        ⚡ Simulate Facebook Lead
                      </button>
                      <button 
                        onClick={() => {
                          const newLead: Lead = {
                            id: `L-${Math.floor(100 + Math.random() * 900)}`,
                            name: 'Emily Watson',
                            phone: '+971 52 888 4321',
                            email: 'emily@watson.co.uk',
                            interest: 'Legal Assistance',
                            status: 'intake',
                            amount: 'N/A',
                            date: new Date().toISOString().split('T')[0],
                            notes: 'Lead from Instagram Ad: Requesting cross-border legal advice and travel ban audits.'
                          };
                          setLeads([newLead, ...leads]);
                        }}
                        className="px-4 py-2.5 bg-[#C5A059]/10 hover:bg-[#C5A059]/20 border border-[#C5A059]/30 text-xs text-[#C5A059] rounded-sm transition-all"
                      >
                        ⚡ Simulate Instagram Lead
                      </button>
                    </div>
                  </div>
                </div>

                {/* Key Advisory Settings */}
                <div className="bg-[#0D1625] border border-slate-800 p-6 rounded-sm space-y-4">
                  <h3 className="font-semibold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-3">CRM System Settings</h3>
                  <div className="space-y-4 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Database Hosting</span>
                      <span className="text-white font-mono">AWS/Vercel Secure Private SQL</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Monthly Licensing Fee</span>
                      <span className="text-emerald-400 font-bold">AED 0.00 (Lifetime Ownership)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Auto-Assigned Agent</span>
                      <span className="text-white">Shamrendra Vikram</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">WhatsApp Gateway</span>
                      <span className="text-white">WATI / ManyChat Live Endpoint</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: PIPELINE BOARD */}
          {activeTab === 'pipeline' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-serif text-white">Client Management Pipeline</h1>
                  <p className="text-xs text-slate-400 mt-1">Drag and follow lead statuses from initial intake to final settlement validation.</p>
                </div>
                <button 
                  onClick={() => setShowAddLeadModal(true)}
                  className="px-4 py-2 bg-[#C5A059] hover:bg-[#E5C158] text-[#070F1E] text-xs font-semibold rounded-sm flex items-center gap-1.5 transition-all shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  Add Manual Lead
                </button>
              </div>

              {/* Kanban board */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 overflow-x-auto pb-4">
                
                {/* Column 1: Intake / Verification */}
                <div 
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    const id = e.dataTransfer.getData("text/plain");
                    if (id) handleDropLead(id, 'intake');
                  }}
                  className="bg-[#09101C] border border-slate-800 p-4 rounded-sm space-y-4 min-w-[260px] transition-all duration-200 hover:border-[#C5A059]/20"
                >
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">1. Verification Inbound</span>
                    <span className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[10px] font-mono rounded-full">
                      {leads.filter(l => l.status === 'intake').length}
                    </span>
                  </div>
                  <div className="space-y-3 min-h-[300px]">
                    {leads.filter(l => l.status === 'intake').map(lead => (
                      <div 
                        key={lead.id} 
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData("text/plain", lead.id)}
                        onClick={() => setSelectedLead(lead)}
                        className="bg-[#0D1625] hover:border-[#C5A059]/40 border border-slate-800/80 p-4 rounded-sm cursor-pointer transition-all hover:translate-y-[-2px] space-y-2.5 shadow-md active:opacity-50 active:cursor-grabbing"
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] font-mono text-slate-500">{lead.id}</span>
                          <span className="text-[9px] px-1.5 py-0.5 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 rounded-sm font-semibold">{lead.interest}</span>
                        </div>
                        <h4 className="font-bold text-white text-xs">{lead.name}</h4>
                        <div className="text-[10px] text-slate-400 flex justify-between">
                          <span>Vol: {lead.amount}</span>
                          <span className="text-slate-500">{lead.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Advisory / Active Audit */}
                <div 
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    const id = e.dataTransfer.getData("text/plain");
                    if (id) handleDropLead(id, 'advisory');
                  }}
                  className="bg-[#09101C] border border-slate-800 p-4 rounded-sm space-y-4 min-w-[260px] transition-all duration-200 hover:border-[#C5A059]/20"
                >
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-500">2. Active Audit</span>
                    <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-[10px] font-mono rounded-full">
                      {leads.filter(l => l.status === 'advisory').length}
                    </span>
                  </div>
                  <div className="space-y-3 min-h-[300px]">
                    {leads.filter(l => l.status === 'advisory').map(lead => (
                      <div 
                        key={lead.id} 
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData("text/plain", lead.id)}
                        onClick={() => setSelectedLead(lead)}
                        className="bg-[#0D1625] hover:border-[#C5A059]/40 border border-slate-800/80 p-4 rounded-sm cursor-pointer transition-all hover:translate-y-[-2px] space-y-2.5 shadow-md active:opacity-50 active:cursor-grabbing"
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] font-mono text-slate-500">{lead.id}</span>
                          <span className="text-[9px] px-1.5 py-0.5 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 rounded-sm font-semibold">{lead.interest}</span>
                        </div>
                        <h4 className="font-bold text-white text-xs">{lead.name}</h4>
                        <div className="text-[10px] text-slate-400 flex justify-between">
                          <span>Vol: {lead.amount}</span>
                          <span className="text-slate-500">{lead.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3: Legal & Settlement Support */}
                <div 
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    const id = e.dataTransfer.getData("text/plain");
                    if (id) handleDropLead(id, 'legal');
                  }}
                  className="bg-[#09101C] border border-slate-800 p-4 rounded-sm space-y-4 min-w-[260px] transition-all duration-200 hover:border-[#C5A059]/20"
                >
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-500">3. Legal Support</span>
                    <span className="px-2 py-0.5 bg-sky-500/10 text-sky-400 text-[10px] font-mono rounded-full">
                      {leads.filter(l => l.status === 'legal').length}
                    </span>
                  </div>
                  <div className="space-y-3 min-h-[300px]">
                    {leads.filter(l => l.status === 'legal').map(lead => (
                      <div 
                        key={lead.id} 
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData("text/plain", lead.id)}
                        onClick={() => setSelectedLead(lead)}
                        className="bg-[#0D1625] hover:border-[#C5A059]/40 border border-slate-800/80 p-4 rounded-sm cursor-pointer transition-all hover:translate-y-[-2px] space-y-2.5 shadow-md active:opacity-50 active:cursor-grabbing"
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] font-mono text-slate-500">{lead.id}</span>
                          <span className="text-[9px] px-1.5 py-0.5 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 rounded-sm font-semibold">{lead.interest}</span>
                        </div>
                        <h4 className="font-bold text-white text-xs">{lead.name}</h4>
                        <div className="text-[10px] text-slate-400 flex justify-between">
                          <span>Vol: {lead.amount}</span>
                          <span className="text-slate-500">{lead.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 4: Resolved / Settled */}
                <div 
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    const id = e.dataTransfer.getData("text/plain");
                    if (id) handleDropLead(id, 'settled');
                  }}
                  className="bg-[#09101C] border border-slate-800 p-4 rounded-sm space-y-4 min-w-[260px] transition-all duration-200 hover:border-[#C5A059]/20"
                >
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">4. Resolved / Settled</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono rounded-full">
                      {leads.filter(l => l.status === 'settled').length}
                    </span>
                  </div>
                  <div className="space-y-3 min-h-[300px]">
                    {leads.filter(l => l.status === 'settled').map(lead => (
                      <div 
                        key={lead.id} 
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData("text/plain", lead.id)}
                        onClick={() => setSelectedLead(lead)}
                        className="bg-[#0D1625] hover:border-[#C5A059]/40 border border-slate-800/80 p-4 rounded-sm cursor-pointer transition-all hover:translate-y-[-2px] space-y-2.5 shadow-md active:opacity-50 active:cursor-grabbing"
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] font-mono text-slate-500">{lead.id}</span>
                          <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 rounded-sm font-semibold">{lead.interest}</span>
                        </div>
                        <h4 className="font-bold text-white text-xs">{lead.name}</h4>
                        <div className="text-[10px] text-slate-400 flex justify-between">
                          <span>Vol: {lead.amount}</span>
                          <span className="text-slate-500">{lead.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Lead Details Side Panel */}
              {selectedLead && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 flex justify-end">
                  <div className="w-full max-w-lg bg-[#0D1625] border-l border-[#C5A059]/20 h-full p-8 flex flex-col justify-between overflow-y-auto">
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                        <div>
                          <span className="text-[10px] font-mono text-slate-500">Intake ID: {selectedLead.id}</span>
                          <h2 className="text-xl font-bold text-white mt-1">{selectedLead.name}</h2>
                        </div>
                        <button 
                          onClick={() => setSelectedLead(null)}
                          className="text-slate-400 hover:text-white text-lg font-bold"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="space-y-1">
                          <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Mobile Phone</span>
                          <p className="text-white font-mono">{selectedLead.phone}</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Email Address</span>
                          <p className="text-white">{selectedLead.email}</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Primary Interest</span>
                          <p className="text-[#C5A059]">{selectedLead.interest}</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Liability Amount</span>
                          <p className="text-white">{selectedLead.amount || 'N/A'}</p>
                        </div>
                      </div>

                      <div className="space-y-2 border-t border-slate-800 pt-4">
                        <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Advisory Intake Case Notes</span>
                        <div className="p-4 bg-[#070F1E] border border-slate-800 text-xs text-slate-300 leading-relaxed font-light rounded-sm">
                          {selectedLead.notes}
                        </div>
                      </div>

                      <div className="space-y-2 border-t border-slate-800 pt-4">
                        <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Update Case Status</span>
                        <div className="flex gap-2">
                          {(['intake', 'advisory', 'legal', 'settled'] as const).map(status => (
                            <button
                              key={status}
                              onClick={() => {
                                const updatedLeads = leads.map(l => l.id === selectedLead.id ? { ...l, status } : l);
                                setLeads(updatedLeads);
                                setSelectedLead({ ...selectedLead, status });
                              }}
                              className={`flex-1 text-[9px] uppercase tracking-wider py-2 border rounded-sm font-semibold text-center transition-all ${
                                selectedLead.status === status
                                  ? 'bg-[#C5A059] border-[#C5A059] text-[#070F1E]'
                                  : 'bg-transparent border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                              }`}
                            >
                              {status}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-800 pt-6 flex gap-4">
                      <a 
                        href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs text-center rounded-sm transition-all"
                      >
                        📞 Reach via WhatsApp
                      </a>
                      <button 
                        onClick={() => setSelectedLead(null)}
                        className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-sm transition-all"
                      >
                        Close
                      </button>
                    </div>

                  </div>
                </div>
              )}

              {/* Add Lead Modal */}
              {showAddLeadModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 flex items-center justify-center p-4">
                  <form 
                    onSubmit={handleCreateLead}
                    className="bg-[#0D1625] border border-[#C5A059]/30 p-6 rounded-sm w-full max-w-md space-y-4 shadow-2xl relative"
                  >
                    <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                      <h3 className="font-bold text-white text-sm uppercase tracking-wider">Manual Inbound Lead</h3>
                      <button type="button" onClick={() => setShowAddLeadModal(false)} className="text-slate-400 hover:text-white">✕</button>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-slate-400 uppercase tracking-wider">Full Legal Name</label>
                        <input 
                          type="text" required
                          value={newLeadForm.name}
                          onChange={e => setNewLeadForm({...newLeadForm, name: e.target.value})}
                          className="bg-[#070F1E] border border-slate-800 p-2.5 rounded-sm focus:outline-none focus:border-[#C5A059] text-white"
                          placeholder="e.g. Alexander Vance"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] text-slate-400 uppercase tracking-wider">Phone</label>
                          <input 
                            type="text" required
                            value={newLeadForm.phone}
                            onChange={e => setNewLeadForm({...newLeadForm, phone: e.target.value})}
                            className="bg-[#070F1E] border border-slate-800 p-2.5 rounded-sm focus:outline-none focus:border-[#C5A059] text-white"
                            placeholder="e.g. +971 50..."
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] text-slate-400 uppercase tracking-wider">Liability / Facility Volume</label>
                          <input 
                            type="text"
                            value={newLeadForm.amount}
                            onChange={e => setNewLeadForm({...newLeadForm, amount: e.target.value})}
                            className="bg-[#070F1E] border border-slate-800 p-2.5 rounded-sm focus:outline-none focus:border-[#C5A059] text-white"
                            placeholder="e.g. AED 850K"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-slate-400 uppercase tracking-wider">Email Address</label>
                        <input 
                          type="email" required
                          value={newLeadForm.email}
                          onChange={e => setNewLeadForm({...newLeadForm, email: e.target.value})}
                          className="bg-[#070F1E] border border-slate-800 p-2.5 rounded-sm focus:outline-none focus:border-[#C5A059] text-white"
                          placeholder="e.g. vance@holdings.ae"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-slate-400 uppercase tracking-wider">Primary Interest</label>
                        <select 
                          value={newLeadForm.interest}
                          onChange={e => setNewLeadForm({...newLeadForm, interest: e.target.value})}
                          className="bg-[#070F1E] border border-slate-800 p-2.5 rounded-sm focus:outline-none focus:border-[#C5A059] text-white"
                        >
                          <option>Loans & Facilities</option>
                          <option>Debt Solutions</option>
                          <option>Business Setup</option>
                          <option>Investments</option>
                          <option>Legal Assistance</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-slate-400 uppercase tracking-wider">Intake Notes</label>
                        <textarea 
                          value={newLeadForm.notes}
                          onChange={e => setNewLeadForm({...newLeadForm, notes: e.target.value})}
                          className="bg-[#070F1E] border border-slate-800 p-2.5 rounded-sm h-20 focus:outline-none focus:border-[#C5A059] text-white resize-none"
                          placeholder="Client outstanding case files..."
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3 bg-[#C5A059] hover:bg-[#E5C158] text-[#070F1E] text-xs font-bold rounded-sm uppercase tracking-wider transition-all"
                    >
                      Save Lead
                    </button>
                  </form>
                </div>
              )}

            </div>
          )}

          {/* TAB 3: WHATSAPP BOT SIMULATOR */}
          {activeTab === 'whatsapp' && (
            <div className="space-y-8 animate-fade-in max-w-4xl">
              <div>
                <h1 className="text-2xl font-serif text-white">Interactive WhatsApp Greeting Simulator</h1>
                <p className="text-xs text-slate-400 mt-1">Test the interactive user-driven response system that will be configured on your business number.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                
                {/* Simulator Guide info */}
                <div className="bg-[#0D1625] border border-slate-800 p-6 rounded-sm space-y-5">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                    <Bot className="w-5 h-5 text-[#C5A059]" />
                    <h3 className="font-semibold text-white text-sm uppercase tracking-wider">How the Automation Works</h3>
                  </div>

                  <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-light">
                    <p>
                      1. <strong className="font-semibold text-[#C5A059]">The Inbound Trigger</strong>: The website’s WhatsApp widget sends a pre-formatted message: <span className="italic text-white">"Hi FINLOBY, I would like to inquire about your consultancy services..."</span>
                    </p>
                    <p>
                      2. <strong className="font-semibold text-[#C5A059]">Instant Welcome Auto-Reply</strong>: As soon as this trigger hits your number, the bot immediately pushes the <span className="font-semibold text-white">welcome text</span> listing the primary options (1 to 5).
                    </p>
                    <p>
                      3. <strong className="font-semibold text-[#C5A059]">Interactive Menu Options</strong>: In the phone simulator on the right, type <span className="font-semibold text-white">1, 2, 3, 4, or 5</span> and click Send to test how the bot responds back automatically based on their choice.
                    </p>
                  </div>

                  <div className="p-4 bg-[#070F1E] border border-slate-800 rounded-sm space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Interactive Options Menu:</h4>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button onClick={() => handleSimSend('1')} className="px-2.5 py-1.5 bg-[#C5A059]/10 hover:bg-[#C5A059]/20 border border-[#C5A059]/20 text-[10px] text-[#C5A059] rounded-sm transition-all">1️⃣ Loans</button>
                      <button onClick={() => handleSimSend('2')} className="px-2.5 py-1.5 bg-[#C5A059]/10 hover:bg-[#C5A059]/20 border border-[#C5A059]/20 text-[10px] text-[#C5A059] rounded-sm transition-all">2️⃣ Debt Solutions</button>
                      <button onClick={() => handleSimSend('3')} className="px-2.5 py-1.5 bg-[#C5A059]/10 hover:bg-[#C5A059]/20 border border-[#C5A059]/20 text-[10px] text-[#C5A059] rounded-sm transition-all">3️⃣ Business Setup</button>
                      <button onClick={() => handleSimSend('4')} className="px-2.5 py-1.5 bg-[#C5A059]/10 hover:bg-[#C5A059]/20 border border-[#C5A059]/20 text-[10px] text-[#C5A059] rounded-sm transition-all">4️⃣ Legal Support</button>
                      <button onClick={() => handleSimSend('5')} className="px-2.5 py-1.5 bg-[#C5A059]/10 hover:bg-[#C5A059]/20 border border-[#C5A059]/20 text-[10px] text-[#C5A059] rounded-sm transition-all">5️⃣ Investments</button>
                    </div>
                  </div>
                </div>

                {/* Smartphone Interface Mockup */}
                <div className="w-full max-w-[340px] mx-auto bg-[#09101C] border-[6px] border-slate-800 rounded-[32px] overflow-hidden flex flex-col h-[520px] shadow-2xl relative">
                  
                  {/* Phone Header */}
                  <div className="bg-[#075E54] px-4 py-3 text-white flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center text-xs font-serif font-semibold border border-white/20">
                      FL
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-sans">FINLOBY Advisor Bot</h4>
                      <span className="text-[8px] text-white/70">Online • Automated Assistant</span>
                    </div>
                  </div>

                  {/* Phone Messages Area */}
                  <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[#E5DDD5]">
                    {simMessages.map((msg, index) => {
                      const isBot = msg.sender === 'bot';
                      return (
                        <div key={index} className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
                          <div className={`max-w-[85%] rounded-md p-2.5 text-[11px] shadow-sm relative leading-relaxed whitespace-pre-line ${
                            isBot 
                              ? 'bg-white text-slate-800 rounded-tl-none' 
                              : 'bg-[#DCF8C6] text-slate-800 rounded-tr-none'
                          }`}>
                            {msg.text}
                            <span className="block text-[8px] text-slate-400 text-right mt-1.5">{msg.time}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Phone Input Area */}
                  <div className="bg-white p-2 border-t border-slate-200 flex gap-2 items-center">
                    <input 
                      type="text" 
                      value={userInput}
                      onChange={e => setUserInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleSimSend()}
                      className="flex-1 bg-slate-100 border border-slate-200 p-2 rounded-full text-xs text-slate-800 focus:outline-none"
                      placeholder="Type a menu number (1-5)..."
                    />
                    <button 
                      onClick={() => handleSimSend()}
                      className="p-2 bg-[#075E54] hover:bg-[#128C7E] rounded-full text-white transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* TAB 4: SECURE VAULT */}
          {activeTab === 'vault' && (
            <div className="space-y-8 animate-fade-in max-w-4xl">
              <div>
                <h1 className="text-2xl font-serif text-white">Private Client Document Vault</h1>
                <p className="text-xs text-slate-400 mt-1">Secure, end-to-end encrypted repository to store bank notices, cheque copies, and legal waivers.</p>
              </div>

              <div className="bg-[#0D1625] border border-slate-800 p-6 rounded-sm space-y-6">
                
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <h3 className="font-semibold text-white text-sm uppercase tracking-wider flex items-center gap-2">
                    <FolderLock className="w-4 h-4 text-[#C5A059]" />
                    Vault Records
                  </h3>
                  <button className="px-3.5 py-1.5 border border-[#C5A059]/30 hover:bg-[#C5A059]/10 text-xs font-semibold text-[#C5A059] rounded-sm transition-all flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5" />
                    Upload File
                  </button>
                </div>

                <div className="space-y-3">
                  {vaultFiles.map((file, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-[#070F1E] border border-slate-800 hover:border-slate-700 transition-colors rounded-sm text-xs">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-sm">
                          <FileText className="w-4 h-4 text-[#C5A059]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white font-mono">{file.name}</h4>
                          <span className="text-[10px] text-slate-500">Uploaded on {file.date} for {file.uploader}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] text-slate-500 font-mono">{file.size}</span>
                        <button className="p-2 hover:bg-slate-800 rounded-sm text-[#C5A059] transition-all">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 text-xs text-emerald-400 font-light leading-relaxed rounded-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>All documents in this vault are AES-256 encrypted, ensuring complete compliance with the UAE Data Protection Laws. Only authorized managing partners can view files.</span>
                </div>

              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}
