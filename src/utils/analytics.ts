export const ANALYTICS_CONSENT_EVENT = 'finloby:analytics-consent';
export const OPEN_CONSENT_SETTINGS_EVENT = 'finloby:open-consent-settings';

const GTM_ID = 'GTM-TDLSMDK9';
const CONSENT_STORAGE_KEY = 'finloby_analytics_consent_v1';
const GTM_SCRIPT_ID = 'finloby-google-tag-manager';

export type AnalyticsConsent = 'granted' | 'denied' | null;

type GoogleEventParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ensureGoogleTag = () => {
  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }
};

export const getAnalyticsConsent = (): AnalyticsConsent => {
  if (typeof window === 'undefined') return null;

  const storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return storedConsent === 'granted' || storedConsent === 'denied' ? storedConsent : null;
};

export const initializeAnalyticsConsent = () => {
  if (typeof window === 'undefined') return;

  ensureGoogleTag();
  window.gtag?.('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });
};

export const loadGoogleTagManager = () => {
  if (typeof document === 'undefined' || document.getElementById(GTM_SCRIPT_ID)) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': Date.now(),
    event: 'gtm.js'
  });

  const script = document.createElement('script');
  script.id = GTM_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
};

const deleteGoogleAnalyticsCookies = () => {
  document.cookie.split(';').forEach((cookie) => {
    const cookieName = cookie.split('=')[0]?.trim();
    if (!cookieName || (cookieName !== '_ga' && !cookieName.startsWith('_ga_'))) return;

    document.cookie = `${cookieName}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=.finloby.com; SameSite=Lax`;
  });
};

export const setAnalyticsConsent = (granted: boolean) => {
  if (typeof window === 'undefined') return;

  ensureGoogleTag();
  const consent: Exclude<AnalyticsConsent, null> = granted ? 'granted' : 'denied';

  window.gtag?.('consent', 'update', {
    analytics_storage: consent,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
  window.localStorage.setItem(CONSENT_STORAGE_KEY, consent);

  if (granted) {
    loadGoogleTagManager();
  } else {
    deleteGoogleAnalyticsCookies();
  }

  window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_EVENT, { detail: consent }));
};

export const trackGoogleEvent = (eventName: string, parameters: GoogleEventParameters = {}) => {
  if (typeof window === 'undefined' || getAnalyticsConsent() !== 'granted') return;

  window.gtag?.('event', eventName, parameters);
};
