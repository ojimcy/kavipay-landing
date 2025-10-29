/**
 * Analytics tracking utilities for conversion optimization
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, properties);
  }
};

// Event helpers for common tracking needs
export const analytics = {
  pageView: () => trackEvent('page_view'),

  ctaClick: (location: string) =>
    trackEvent('cta_click', { location }),

  downloadClick: (platform: 'ios' | 'android') =>
    trackEvent(`download_${platform}_click`, { platform }),

  emailSubmit: (source: string) =>
    trackEvent('email_submit', { source }),

  faqExpand: (question: string) =>
    trackEvent('faq_expand', { question }),

  sectionView: (section: string) =>
    trackEvent('section_view', { section }),

  scrollDepth: (percentage: number) =>
    trackEvent('scroll_depth', { percentage }),
};
