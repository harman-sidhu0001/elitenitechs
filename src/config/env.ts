/**
 * Environment Configuration
 * Validates and exports environment variables with type safety
 */

interface Env {
    // API Configuration
    apiUrl: string;
    apiTimeout: number;

    // Analytics
    analyticsId: string;
    plausibleDomain: string;

    // Error Monitoring
    sentryDsn: string;
    sentryEnvironment: string;

    // Application
    appEnv: 'development' | 'staging' | 'production';
    appName: string;
    appVersion: string;

    // Feature Flags
    enableAnalytics: boolean;
    enableErrorReporting: boolean;
}

const getEnvVar = (key: string, defaultValue: string = ''): string => {
    return import.meta.env[key] || defaultValue;
};

const getBooleanEnv = (key: string, defaultValue: boolean = false): boolean => {
    const value = import.meta.env[key];
    if (value === undefined) return defaultValue;
    return value === 'true' || value === '1';
};

const getNumberEnv = (key: string, defaultValue: number): number => {
    const value = import.meta.env[key];
    return value ? parseInt(value, 10) : defaultValue;
};

export const env: Env = {
    // API Configuration
    apiUrl: getEnvVar('VITE_API_URL', 'http://localhost:3000'),
    apiTimeout: getNumberEnv('VITE_API_TIMEOUT', 30000),

    // Analytics
    analyticsId: getEnvVar('VITE_ANALYTICS_ID'),
    plausibleDomain: getEnvVar('VITE_PLAUSIBLE_DOMAIN', 'elitenitechs.com'),

    // Error Monitoring
    sentryDsn: getEnvVar('VITE_SENTRY_DSN'),
    sentryEnvironment: getEnvVar('VITE_SENTRY_ENVIRONMENT', 'development'),

    // Application
    appEnv: (getEnvVar('VITE_APP_ENV', 'development') as Env['appEnv']),
    appName: getEnvVar('VITE_APP_NAME', 'Elite Nitechs'),
    appVersion: getEnvVar('VITE_APP_VERSION', '1.0.0'),

    // Feature Flags
    enableAnalytics: getBooleanEnv('VITE_ENABLE_ANALYTICS', false),
    enableErrorReporting: getBooleanEnv('VITE_ENABLE_ERROR_REPORTING', false),
};

// Validate required environment variables in production
if (env.appEnv === 'production') {
    const requiredEnvVars: Array<keyof Env> = ['apiUrl'];

    requiredEnvVars.forEach((key) => {
        if (!env[key]) {
            console.error(`Missing required environment variable: ${key}`);
        }
    });
}

// Log configuration in development
if (env.appEnv === 'development') {
    console.log('🔧 Environment Configuration:', {
        appEnv: env.appEnv,
        apiUrl: env.apiUrl,
        enableAnalytics: env.enableAnalytics,
        enableErrorReporting: env.enableErrorReporting,
    });
}

export default env;
