import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { lazy, Suspense, useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import WhatsAppWidget from './components/WhatsAppWidget';
import ConsentBanner from './components/ConsentBanner';
import { trackGoogleEvent } from './utils/analytics';

const Home = lazy(() => import('./pages/Home'));
const DebtSolutions = lazy(() => import('./pages/DebtSolutions'));
const Loans = lazy(() => import('./pages/Loans'));
const BusinessSetup = lazy(() => import('./pages/BusinessSetup'));
const LegalAssistance = lazy(() => import('./pages/LegalAssistance'));
const Investments = lazy(() => import('./pages/Investments'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Blogs = lazy(() => import('./pages/Blogs'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const BookConsultation = lazy(() => import('./pages/BookConsultation'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfEngagement = lazy(() => import('./pages/TermsOfEngagement'));
const ComplianceDisclaimer = lazy(() => import('./pages/ComplianceDisclaimer'));
const CrmPrototype = lazy(() => import('./pages/CrmPrototype'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [fadePreloader, setFadePreloader] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let hasLoaded = false;
    const startTime = Date.now();

    const triggerFadeOut = () => {
      if (hasLoaded) return;
      hasLoaded = true;
      
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(350 - elapsed, 0);

      setTimeout(() => {
        setFadePreloader(true);
        setTimeout(() => {
          setShowPreloader(false);
        }, 300);
      }, remainingTime);
    };

    // Preload logo programmatically to track onload
    const img = new Image();
    img.src = '/finloby-white-256.png';
    img.onload = triggerFadeOut;
    img.onerror = triggerFadeOut; // fade out anyway if image fails

    const fallbackTimer = setTimeout(triggerFadeOut, 1200);

    return () => {
      clearTimeout(fallbackTimer);
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  useEffect(() => {
    const trackContactClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest('a');
      const href = link?.getAttribute('href') || '';

      if (href.startsWith('tel:')) {
        trackGoogleEvent('phone_click', { page_path: pathname });
      } else if (href.startsWith('mailto:')) {
        trackGoogleEvent('email_click', { page_path: pathname });
      }
    };

    document.addEventListener('click', trackContactClick);
    return () => document.removeEventListener('click', trackContactClick);
  }, [pathname]);

  const isPrototype = pathname.startsWith('/prototype/crm');

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-[var(--brand-gold)] focus:text-[var(--text-contrast)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:rounded-sm focus:shadow-lg">Skip to main content</a>
      {showPreloader && (
        <div className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${fadePreloader ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Preloader />
        </div>
      )}
      <div className="flex flex-col min-h-screen bg-[var(--bg-midnight)] text-[var(--text-ivory)] selection:bg-[var(--brand-gold)]/25 selection:text-[var(--text-ivory)] transition-colors duration-500" aria-busy={showPreloader}>
        <ScrollToTop />
        {!isPrototype && <Navbar />}
        <main id="main-content" role="main">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/debt-solutions" element={<DebtSolutions />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/business-setup" element={<BusinessSetup />} />
              <Route path="/legal-assistance" element={<LegalAssistance />} />
              <Route path="/investments" element={<Investments />} />
              <Route path="/book-consultation" element={<BookConsultation />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfEngagement />} />
              <Route path="/disclaimer" element={<ComplianceDisclaimer />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<Blogs />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/prototype/crm" element={<CrmPrototype />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        {!isPrototype && <Footer />}
        {!isPrototype && <WhatsAppWidget />}
        {!isPrototype && <ConsentBanner />}
      </div>
    </>
  );
}

export default App;
