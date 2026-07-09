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
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useState, useEffect } from 'react';
import ThemeSelector from './components/ThemeSelector';
import Preloader from './components/Preloader';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [fadePreloader, setFadePreloader] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadePreloader(true);
    }, 2300);

    const removeTimer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <Router>
      {showPreloader && (
        <div className={`fixed inset-0 z-[9999] transition-opacity duration-700 ${fadePreloader ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Preloader />
        </div>
      )}
      <div className="flex flex-col min-h-screen bg-[var(--bg-midnight)] text-[var(--text-ivory)] selection:bg-[var(--brand-gold)]/25 selection:text-[var(--text-ivory)] transition-colors duration-500">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/debt-solutions" element={<DebtSolutions />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/business-setup" element={<BusinessSetup />} />
          <Route path="/legal-assistance" element={<LegalAssistance />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
        <ThemeSelector />
      </div>
    </Router>
  );
}

export default App;
