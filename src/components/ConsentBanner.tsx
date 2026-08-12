import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getAnalyticsConsent,
  loadGoogleTagManager,
  OPEN_CONSENT_SETTINGS_EVENT,
  setAnalyticsConsent
} from '../utils/analytics';

export default function ConsentBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedConsent = getAnalyticsConsent();

    if (storedConsent === 'granted') {
      setAnalyticsConsent(true);
      loadGoogleTagManager();
    } else if (storedConsent === null) {
      setIsOpen(true);
    }

    const openSettings = () => setIsOpen(true);
    window.addEventListener(OPEN_CONSENT_SETTINGS_EVENT, openSettings);

    return () => window.removeEventListener(OPEN_CONSENT_SETTINGS_EVENT, openSettings);
  }, []);

  const saveChoice = (granted: boolean) => {
    setAnalyticsConsent(granted);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <aside
      className="fixed inset-x-4 bottom-4 z-[10000] mx-auto max-w-3xl border border-[var(--brand-gold)]/30 bg-[#031C14]/95 p-5 shadow-2xl backdrop-blur-md sm:p-6"
      aria-label="Analytics preferences"
      role="dialog"
      aria-modal="false"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="mb-2 font-serif text-lg text-white">Analytics preferences</h2>
          <p className="text-xs font-light leading-relaxed text-white/70">
            FINLOBY uses optional analytics to understand website performance and improve enquiry journeys. Analytics loads only if you allow it. Read the{' '}
            <Link to="/privacy" className="text-[var(--brand-gold-light)] underline underline-offset-2">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => saveChoice(false)}
            className="border border-white/25 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:border-white/60"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => saveChoice(true)}
            className="bg-[var(--brand-gold)] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-contrast)] transition-colors hover:bg-[var(--brand-gold-light)]"
          >
            Allow analytics
          </button>
        </div>
      </div>
    </aside>
  );
}
