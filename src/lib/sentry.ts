/**
 * Sentry Error Monitoring Integration
 * Initializes Sentry for error tracking and performance monitoring
 */

import * as Sentry from '@sentry/react';
import { env } from '../config/env';

/**
 * Initialize Sentry error monitoring
 * Only active in production with valid DSN
 */
export const initSentry = () => {
    if (env.enableErrorReporting && env.sentryDsn) {
        Sentry.init({
            dsn: env.sentryDsn,
            environment: env.sentryEnvironment,
            release: `${env.appName}@${env.appVersion}`,

            integrations: [
                Sentry.browserTracingIntegration(),
                Sentry.replayIntegration({
                    maskAllText: true,
                    blockAllMedia: true,
                }),
            ],

            // Performance Monitoring
            tracesSampleRate: env.appEnv === 'production' ? 0.1 : 1.0,

            // Session Replay
            replaysSessionSampleRate: 0.1,
            replaysOnErrorSampleRate: 1.0,

            // Filter out specific errors
            beforeSend(event) {
                // Filter out cancelled requests
                if (event.exception?.values?.[0]?.value?.includes('cancelled')) {
                    return null;
                }
                return event;
            },

            // Ignore specific errors
            ignoreErrors: [
                'Non-Error promise rejection captured',
                'ResizeObserver loop limit exceeded',
                'cancelled',
            ],
        });

        console.log('✅ Sentry initialized');
    } else {
        console.log('ℹ️ Sentry disabled (no DSN or feature flag off)');
    }
};

/**
 * Capture an exception with additional context
 */
export const captureException = (
    error: Error,
    context?: Record<string, any>
) => {
    if (env.enableErrorReporting) {
        Sentry.captureException(error, {
            extra: context,
        });
    } else {
        console.error('Error:', error, context);
    }
};

/**
 * Capture a message
 */
export const captureMessage = (
    message: string,
    level: Sentry.SeverityLevel = 'info'
) => {
    if (env.enableErrorReporting) {
        Sentry.captureMessage(message, level);
    } else {
        console.log(`[${level}]`, message);
    }
};

/**
 * Set user context for error tracking
 */
export const setUser = (user: { id: string; email?: string; username?: string }) => {
    if (env.enableErrorReporting) {
        Sentry.setUser(user);
    }
};

/**
 * Clear user context
 */
export const clearUser = () => {
    if (env.enableErrorReporting) {
        Sentry.setUser(null);
    }
};

/**
 * Add breadcrumb for debugging
 */
export const addBreadcrumb = (
    message: string,
    category: string,
    level: Sentry.SeverityLevel = 'info'
) => {
    if (env.enableErrorReporting) {
        Sentry.addBreadcrumb({
            message,
            category,
            level,
        });
    }
};

export default Sentry;
