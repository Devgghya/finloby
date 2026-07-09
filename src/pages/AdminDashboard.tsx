import { useState, useEffect } from 'react';
import { ShieldAlert, Trash2, Search, Download, ArrowLeft, RefreshCw, KeyRound } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  interest: string;
  terms: boolean;
  timestamp: string;
  status: 'New' | 'Contacted' | 'NDA Sent' | 'NDA Active' | 'Resolved';
  notes?: string;
  calculations?: {
    liabilities: number;
    months: number;
    calcType: string;
    monthlyPayment: number;
  };
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [authError, setAuthError] = useState('');
  
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterInterest, setFilterInterest] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  // Load leads
  const loadLeads = () => {
    try {
      const stored = localStorage.getItem('finloby_secure_payloads');
      if (stored) {
        setLeads(JSON.parse(stored).reverse()); // newest first
      } else {
        setLeads([]);
      }
    } catch (e) {
      console.error('Error loading payload files:', e);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadLeads();
    }
  }, [isAuthenticated]);

  // Auth handler
  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode === 'FINLOBY2026' || accessCode === 'admin') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Unauthorized Security Key. Uplink Terminated.');
    }
  };

  // Status update
  const updateStatus = (id: string, newStatus: Lead['status']) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    // save to local storage
    const stored = localStorage.getItem('finloby_secure_payloads');
    if (stored) {
      const raw = JSON.parse(stored);
      const res = raw.map((r: any) => r.id === id ? { ...r, status: newStatus } : r);
      localStorage.setItem('finloby_secure_payloads', JSON.stringify(res));
    }
    setLeads(updated);
  };

  // Delete lead
  const deleteLead = (id: string) => {
    if (!window.confirm('Terminate lead file permanently? This action is irreversible.')) return;
    const updated = leads.filter(l => l.id !== id);
    const stored = localStorage.getItem('finloby_secure_payloads');
    if (stored) {
      const raw = JSON.parse(stored);
      const res = raw.filter((r: any) => r.id !== id);
      localStorage.setItem('finloby_secure_payloads', JSON.stringify(res));
    }
    setLeads(updated);
  };

  // Reset database
  const clearDatabase = () => {
    if (!window.confirm('WARNING: PERMANENTLY ERASE ALL CLASSIFIED INTAKE RECORDS?')) return;
    localStorage.removeItem('finloby_secure_payloads');
    setLeads([]);
  };

  // Filter logic
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery);
    
    const matchesInterest = filterInterest === 'All' || lead.interest === filterInterest;
    const matchesStatus = filterStatus === 'All' || lead.status === filterStatus;

    return matchesSearch && matchesInterest && matchesStatus;
  });

  // Export CSV
  const exportToCSV = () => {
    if (filteredLeads.length === 0) return;
    const headers = 'ID,Name,Phone,Email,Interest,Status,Timestamp,Liabilities,AmortizationMonths,MonthlyPayment\n';
    const rows = filteredLeads.map(l => {
      const liab = l.calculations?.liabilities || '';
      const months = l.calculations?.months || '';
      const pay = l.calculations?.monthlyPayment ? Math.round(l.calculations.monthlyPayment) : '';
      return `"${l.id}","${l.name}","${l.phone}","${l.email}","${l.interest}","${l.status}","${l.timestamp}","${liab}","${months}","${pay}"`;
    }).join('\n');
    
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `finloby_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex-1 w-full bg-[#070F1E] flex items-center justify-center pt-44 sm:pt-48 lg:pt-52 pb-20">
        <div className="w-full max-w-md bg-[#0D1625] border border-[#C5A059]/20 p-8 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#9A7B3E] via-[#C5A059] to-[#E2C999]"></div>
          
          <div className="flex flex-col items-center gap-4 text-center border-b border-[#C5A059]/10 pb-6 mb-6">
            <div className="p-3 bg-[#070F1E] border border-[#C5A059]/20 rounded-full text-[#C5A059] animate-pulse">
              <KeyRound className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-serif text-[#FBF9F4] font-medium tracking-wide"> Classified Console</h2>
            <p className="text-[10px] text-[#FBF9F4]/40 font-light uppercase tracking-wider">
              Enter Cryptographic Uplink Access Key
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="admin-key" className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                Security Key
              </label>
              <input 
                type="password" 
                id="admin-key" 
                required
                placeholder="e.g. FINLOBY2026"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="w-full bg-[#070F1E] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3.5 px-4 rounded-sm focus:outline-none focus:border-[#C5A059] transition-all font-light text-center font-mono"
              />
            </div>

            {authError && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-[10px] text-rose-300 font-light rounded-sm flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#C5A059] hover:bg-[#E2C999] text-[#070F1E] py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all rounded-sm duration-300 cursor-pointer"
            >
              Establish Uplink
            </button>
          </form>

          <div className="text-center mt-6">
            <a href="/" className="text-[10px] text-[#FBF9F4]/40 hover:text-[#C5A059] transition-colors flex items-center justify-center gap-1.5">
              <ArrowLeft className="w-3 h-3" /> Back to Landing Page
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full bg-[#070F1E] pt-44 sm:pt-48 lg:pt-52 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 border-b border-[#C5A059]/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/25 bg-[#0D1625]/85 rounded-full w-fit mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E2C999]">
                Admin Console
              </span>
            </div>
            <h1 className="text-3xl font-serif text-[#FBF9F4] font-medium tracking-wide">
              Secure Lead Registries
            </h1>
            <p className="text-xs font-light text-[#FBF9F4]/40 mt-1">
              Review and manage client payload folders sent via the encrypted liaison intake portal.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              type="button"
              onClick={loadLeads}
              className="p-3 border border-[#C5A059]/20 hover:border-[#C5A059]/50 text-[#C5A059] bg-[#0D1625] rounded-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider"
              title="Reload database"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Sync
            </button>
            <button
              type="button"
              onClick={exportToCSV}
              disabled={filteredLeads.length === 0}
              className="p-3 border border-[#C5A059]/20 hover:border-[#C5A059]/55 text-[#FBF9F4] bg-[#0D1625] rounded-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5 text-[#C5A059]" />
              Export CSV
            </button>
            <button
              type="button"
              onClick={clearDatabase}
              className="p-3 border border-rose-500/20 hover:bg-rose-950/20 text-rose-300 bg-[#0D1625] rounded-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider"
            >
              <Trash2 className="w-3.5 h-3.5 text-rose-500" />
              Wipe Console
            </button>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Search */}
          <div className="relative md:col-span-2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FBF9F4]/30" />
            <input
              type="text"
              placeholder="Search by client name, email, or telephone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0D1625] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3 pl-10 pr-4 rounded-sm focus:outline-none focus:border-[#C5A059] transition-all font-light"
            />
          </div>

          {/* Interest Filter */}
          <div className="relative">
            <select
              value={filterInterest}
              onChange={(e) => setFilterInterest(e.target.value)}
              className="w-full bg-[#0D1625] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3 px-4 rounded-sm focus:outline-none focus:border-[#C5A059] transition-all appearance-none font-light cursor-pointer"
            >
              <option value="All">All Interest Areas</option>
              <option value="Debt Solutions">Debt Solutions</option>
              <option value="Loans & Facilities">Loans & Facilities</option>
              <option value="Business Setup">Business Setup</option>
              <option value="Investments">Investments</option>
              <option value="Legal Assistance">Legal Assistance</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full bg-[#0D1625] border border-[#C5A059]/15 text-[#FBF9F4] text-xs py-3 px-4 rounded-sm focus:outline-none focus:border-[#C5A059] transition-all appearance-none font-light cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="NDA Sent">NDA Sent</option>
              <option value="NDA Active">NDA Active</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>

        {/* Leads Data Table */}
        <div className="bg-[#0D1625] border border-slate-800 rounded-sm overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#070F1E] border-b border-[#C5A059]/15 text-[9px] uppercase tracking-widest text-[#C5A059] font-bold">
                  <th className="py-4 px-6">Timestamp</th>
                  <th className="py-4 px-6">Client Details</th>
                  <th className="py-4 px-6">Area of Interest</th>
                  <th className="py-4 px-6">Projection Data</th>
                  <th className="py-4 px-6">Status File</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850 text-xs text-[#FBF9F4]/80">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-xs font-light text-[#FBF9F4]/40">
                      No matching classified records detected in local telemetry.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-[#070F1E]/30 transition-colors">
                      <td className="py-5 px-6 font-mono text-[10px] text-[#FBF9F4]/50 leading-relaxed">
                        {new Date(lead.timestamp).toLocaleDateString()}<br />
                        {new Date(lead.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="py-5 px-6 space-y-1">
                        <div className="font-semibold text-sm text-[#FBF9F4]">{lead.name}</div>
                        <div className="font-mono text-[10px] text-[#FBF9F4]/50">{lead.email}</div>
                        <div className="font-mono text-[10px] text-[#C5A059]">{lead.phone}</div>
                      </td>
                      <td className="py-5 px-6">
                        <span className="px-2.5 py-1 bg-[#070F1E] border border-[#C5A059]/20 text-[10px] text-[#E2C999] font-semibold uppercase tracking-wider rounded-sm">
                          {lead.interest}
                        </span>
                      </td>
                      <td className="py-5 px-6">
                        {lead.calculations ? (
                          <div className="text-[10px] font-mono leading-relaxed text-[#FBF9F4]/60">
                            Class: {lead.calculations.calcType}<br />
                            Outstanding: AED {lead.calculations.liabilities.toLocaleString()}<br />
                            Tenure: {lead.calculations.months}m
                          </div>
                        ) : (
                          <span className="text-[9px] uppercase tracking-wider text-[#FBF9F4]/30">No Simulator Data</span>
                        )}
                      </td>
                      <td className="py-5 px-6">
                        <select
                          value={lead.status}
                          onChange={(e) => updateStatus(lead.id, e.target.value as Lead['status'])}
                          className={`bg-[#070F1E] border text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-sm focus:outline-none cursor-pointer ${
                            lead.status === 'New' 
                              ? 'border-rose-500/30 text-rose-400' 
                              : lead.status === 'Resolved' 
                                ? 'border-emerald-500/30 text-emerald-400' 
                                : 'border-[#C5A059]/30 text-[#E2C999]'
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="NDA Sent">NDA Sent</option>
                          <option value="NDA Active">NDA Active</option>
                          <option value="Resolved">Resolved</option>
                        </select>
                      </td>
                      <td className="py-5 px-6 text-right">
                        <button
                          type="button"
                          onClick={() => deleteLead(lead.id)}
                          className="p-2 border border-slate-800 hover:border-rose-500/40 text-rose-400 hover:bg-rose-950/10 rounded-sm transition-all cursor-pointer"
                          title="Purge Lead Record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
