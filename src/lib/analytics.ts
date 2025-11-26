/**
 * Analytics Integration
 * Provides analytics tracking with Plausible
 * Note: Web Vitals removed due to API compatibility issues - can be re-added later
 */

import Plausible from 'plausible-tracker';
import { env } from '../config/env';

// Initialize Plausible tracker
const plausible = Plausible({
    domain: env.plausibleDomain,
    trackLocalhost: env.appEnv === 'development',
    apiHost: 'https://plausible.io',
});

/**
 * Track page view
 */
export const trackPageView = (page?: string) => {
    if (env.enableAnalytics) {
        plausible.trackPageview({
            url: page,
        });
    }
};

/**
 * Track custom event
 */
export const trackEvent = (
    eventName: string,
    props?: Record<string, string | number | boolean>
) => {
    if (env.enableAnalytics) {
        plausible.trackEvent(eventName, { props });
    }
};

/**
 * Initialize Web Vitals reporting
 * Placeholder - implement when web-vitals API is stable
 */
export const reportWebVitals = () => {
    // Web Vitals will be implemented once API is confirmed
    if (env.appEnv === 'development') {
        console.log('📊 Web Vitals reporting initialized (placeholder)');
    }
};

/**
 * Track user interaction
 */
export const trackInteraction = (
    action: string,
    category: string,
    label?: string,
    value?: number
) => {
    trackEvent('interaction', {
        action,
        category,
        ...(label && { label }),
        ...(value && { value }),
    });
};

/**
 * Track form submission
 */
export const trackFormSubmit = (formName: string, success: boolean) => {
    trackEvent('form_submit', {
        form: formName,
        success: success ? 'true' : 'false',
    });
};

/**
 * Track link clicks
 */
export const trackLinkClick = (url: string, text: string) => {
    trackEvent('link_click', {
        url,
        text,
    });
};

export default plausible;
