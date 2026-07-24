declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Utility helper to safely send conversion events to Meta (Facebook) Pixel
 */
export const trackMetaEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (params) {
        window.fbq('track', eventName, params);
      } else {
        window.fbq('track', eventName);
      }
    } catch (err) {
      console.warn('Meta Pixel event dispatch error:', err);
    }
  }
};
