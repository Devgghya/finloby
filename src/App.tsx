import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DebtSolutions from './pages/DebtSolutions';
import Loans from './pages/Loans';
import BusinessSetup from './pages/BusinessSetup';
import LegalAssistance from './pages/LegalAssistance';
import Investments from './pages/Investments';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import AdminDashboard from './pages/AdminDashboard';
import Calculator from './pages/Calculator';
import BookConsultation from './pages/BookConsultation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [fadePreloader, setFadePreloader] = useState(false);

  useEffect(() => {
    let hasLoaded = false;
    const startTime = Date.now();

    const triggerFadeOut = () => {
      if (hasLoaded) return;
      hasLoaded = true;
      
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(1200 - elapsed, 0); // 1.2s minimum display for premium brand introduction

      setTimeout(() => {
        setFadePreloader(true);
        setTimeout(() => {
          setShowPreloader(false);
        }, 700); // match duration-700 fadeout
      }, remainingTime);
    };

    // Preload logo programmatically to track onload
    const img = new Image();
    img.src = '/finloby-white.png';
    img.onload = triggerFadeOut;
    img.onerror = triggerFadeOut; // fade out anyway if image fails

    // Fallback timer (maximum 3.5s) to guarantee entry if loading hangs
    const fallbackTimer = setTimeout(triggerFadeOut, 3500);

    return () => {
      clearTimeout(fallbackTimer);
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
    <Router>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-[var(--brand-gold)] focus:text-[var(--text-contrast)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:rounded-sm focus:shadow-lg">Skip to main content</a>
      {showPreloader && (
        <div className={`fixed inset-0 z-[9999] transition-opacity duration-700 ${fadePreloader ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Preloader />
        </div>
      )}
      <div className="flex flex-col min-h-screen bg-[var(--bg-midnight)] text-[var(--text-ivory)] selection:bg-[var(--brand-gold)]/25 selection:text-[var(--text-ivory)] transition-colors duration-500" aria-busy={showPreloader}>
        <ScrollToTop />
        <Navbar />
        <main id="main-content" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/debt-solutions" element={<DebtSolutions />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/business-setup" element={<BusinessSetup />} />
            <Route path="/legal-assistance" element={<LegalAssistance />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
