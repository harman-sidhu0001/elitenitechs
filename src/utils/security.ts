/**
 * Security Utilities
 * Input sanitization and security helpers
 */

import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks
 * Uses DOMPurify to clean potentially dangerous HTML
 * 
 * @param dirty - Untrusted HTML string
 * @returns Sanitized HTML string
 * @example
 * const clean = sanitizeHtml('<script>alert("xss")</script><p>Safe content</p>');
 * // Returns: '<p>Safe content</p>'
 */
export const sanitizeHtml = (dirty: string): string => {
    return DOMPurify.sanitize(dirty, {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        ALLOWED_ATTR: ['href', 'title', 'target', 'rel'],
        ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    });
};

/**
 * Sanitize text input by removing potentially dangerous characters
 * 
 * @param input - Untrusted text input
 * @param maxLength - Maximum allowed length (default: 1000)
 * @returns Sanitized text
 * @example
 * const clean = sanitizeInput('<script>alert("xss")</script>');
 * // Returns: 'scriptalert("xss")/script'
 */
export const sanitizeInput = (input: string, maxLength: number = 1000): string => {
    return input
        .trim()
        .replace(/[<>]/g, '') // Remove angle brackets
        .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
        .slice(0, maxLength); // Limit length
};

/**
 * Sanitize URL to prevent javascript: and data: URIs
 * 
 * @param url - URL to sanitize
 * @returns Sanitized URL or empty string if invalid
 * @example
 * sanitizeUrl('javascript:alert(1)') // Returns: ''
 * sanitizeUrl('https://example.com') // Returns: 'https://example.com'
 */
export const sanitizeUrl = (url: string): string => {
    const trimmed = url.trim().toLowerCase();

    // Block dangerous protocols
    const dangerousProtocols = ['javascript:', 'data:', 'vbscript:'];
    if (dangerousProtocols.some(protocol => trimmed.startsWith(protocol))) {
        return '';
    }

    // Only allow http, https, mailto, tel
    if (!trimmed.match(/^(https?:|mailto:|tel:|\/)/)) {
        return '';
    }

    return url.trim();
};

/**
 * Escape HTML special characters to prevent XSS
 * 
 * @param text - Text to escape
 * @returns Escaped text
 * @example
 * escapeHtml('<div>Test</div>') // Returns: '&lt;div&gt;Test&lt;/div&gt;'
 */
export const escapeHtml = (text: string): string => {
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
};

/**
 * Validate and sanitize email address
 * 
 * @param email - Email to validate
 * @returns Sanitized email or empty string if invalid
 */
export const sanitizeEmail = (email: string): string => {
    const trimmed = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmed)) {
        return '';
    }

    return trimmed;
};

/**
 * Generate a Content Security Policy nonce for inline scripts
 * 
 * @returns Random nonce string
 */
export const generateNonce = (): string => {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Check if a string contains SQL injection patterns
 * 
 * @param input - Input to check
 * @returns True if potentially malicious
 */
export const hasSqlInjectionPattern = (input: string): boolean => {
    const sqlPatterns = [
        /(\bUNION\b|\bSELECT\b|\bINSERT\b|\bUPDATE\b|\bDELETE\b|\bDROP\b)/i,
        /(-{2}|\/\*|\*\/)/,
        /(;|\||&)/,
    ];

    return sqlPatterns.some(pattern => pattern.test(input));
};

/**
 * Rate limiting helper using localStorage
 * 
 * @param key - Unique key for the action
 * @param maxAttempts - Maximum attempts allowed
 * @param windowMs - Time window in milliseconds
 * @returns True if rate limit exceeded
 */
export const isRateLimited = (
    key: string,
    maxAttempts: number = 5,
    windowMs: number = 60000
): boolean => {
    const now = Date.now();
    const storageKey = `rate_limit_${key}`;

    try {
        const data = localStorage.getItem(storageKey);
        const attempts: number[] = data ? JSON.parse(data) : [];

        // Filter out old attempts
        const recentAttempts = attempts.filter(timestamp => now - timestamp < windowMs);

        if (recentAttempts.length >= maxAttempts) {
            return true;
        }

        // Add current attempt
        recentAttempts.push(now);
        localStorage.setItem(storageKey, JSON.stringify(recentAttempts));

        return false;
    } catch {
        // If localStorage fails, allow the action
        return false;
    }
};
