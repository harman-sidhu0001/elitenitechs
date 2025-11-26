import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
    cn,
    formatCurrency,
    formatDate,
    debounce,
    throttle,
    generateId,
    isValidEmail,
    isValidPhone,
    isValidUrl,
    truncateText,
    capitalizeFirst,
    toSlug,
} from '../index';

describe('Utility Functions', () => {
    describe('cn - className merger', () => {
        it('should merge multiple class names', () => {
            expect(cn('class1', 'class2', 'class3')).toBe('class1 class2 class3');
        });

        it('should filter out falsy values', () => {
            expect(cn('class1', false, null, undefined, 'class2')).toBe('class1 class2');
        });

        it('should handle empty input', () => {
            expect(cn()).toBe('');
        });
    });

    describe('formatCurrency', () => {
        it('should format USD correctly', () => {
            expect(formatCurrency(1234.56)).toBe('$1,234.56');
        });

        it('should handle zero', () => {
            expect(formatCurrency(0)).toBe('$0.00');
        });

        it('should handle large numbers', () => {
            expect(formatCurrency(1000000)).toBe('$1,000,000.00');
        });

        it('should support different currencies', () => {
            const result = formatCurrency(100, 'EUR');
            expect(result).toContain('100');
        });
    });

    describe('formatDate', () => {
        it('should format date objects', () => {
            const date = new Date('2024-01-15');
            const result = formatDate(date);
            expect(result).toContain('January');
            expect(result).toContain('15');
            expect(result).toContain('2024');
        });

        it('should format date strings', () => {
            const result = formatDate('2024-01-15');
            expect(result).toContain('January');
        });
    });

    describe('debounce', () => {
        beforeEach(() => {
            vi.useFakeTimers();
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        it('should debounce function calls', () => {
            let count = 0;
            const increment = () => count++;
            const debouncedIncrement = debounce(increment, 100);

            debouncedIncrement();
            debouncedIncrement();
            debouncedIncrement();

            expect(count).toBe(0);

            vi.advanceTimersByTime(100);
            expect(count).toBe(1);
        });

        it('should pass arguments correctly', () => {
            let result = '';
            const setResult = (val: string) => (result = val);
            const debouncedSet = debounce(setResult, 100);

            debouncedSet('test');
            vi.advanceTimersByTime(100);
            expect(result).toBe('test');
        });
    });

    describe('throttle', () => {
        beforeEach(() => {
            vi.useFakeTimers();
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        it('should throttle function calls', () => {
            let count = 0;
            const increment = () => count++;
            const throttledIncrement = throttle(increment, 100);

            throttledIncrement();
            throttledIncrement();
            throttledIncrement();

            expect(count).toBe(1);

            vi.advanceTimersByTime(100);
            throttledIncrement();
            expect(count).toBe(2);
        });
    });

    describe('generateId', () => {
        it('should generate ID of default length', () => {
            const id = generateId();
            expect(id).toHaveLength(8);
        });

        it('should generate ID of custom length', () => {
            const id = generateId(16);
            expect(id).toHaveLength(16);
        });

        it('should generate unique IDs', () => {
            const id1 = generateId();
            const id2 = generateId();
            expect(id1).not.toBe(id2);
        });
    });

    describe('isValidEmail', () => {
        it('should validate correct emails', () => {
            expect(isValidEmail('test@example.com')).toBe(true);
            expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
            expect(isValidEmail('test+label@example.com')).toBe(true);
        });

        it('should reject invalid emails', () => {
            expect(isValidEmail('invalid')).toBe(false);
            expect(isValidEmail('@example.com')).toBe(false);
            expect(isValidEmail('test@')).toBe(false);
            expect(isValidEmail('test @example.com')).toBe(false);
        });
    });

    describe('isValidPhone', () => {
        it('should validate correct phone numbers', () => {
            expect(isValidPhone('+1234567890')).toBe(true);
            expect(isValidPhone('123-456-7890')).toBe(true);
            expect(isValidPhone('(123) 456-7890')).toBe(true);
        });

        it('should reject invalid phone numbers', () => {
            expect(isValidPhone('123')).toBe(false);
            expect(isValidPhone('abcdefghij')).toBe(false);
        });
    });

    describe('isValidUrl', () => {
        it('should validate correct URLs', () => {
            expect(isValidUrl('https://example.com')).toBe(true);
            expect(isValidUrl('http://example.com/path')).toBe(true);
        });

        it('should reject invalid URLs', () => {
            expect(isValidUrl('not-a-url')).toBe(false);
            expect(isValidUrl('example.com')).toBe(false);
        });
    });

    describe('truncateText', () => {
        it('should truncate long text', () => {
            const text = 'This is a very long text that needs to be truncated';
            expect(truncateText(text, 20)).toBe('This is a very long...');
        });

        it('should not truncate short text', () => {
            const text = 'Short text';
            expect(truncateText(text, 20)).toBe('Short text');
        });
    });

    describe('capitalizeFirst', () => {
        it('should capitalize first letter', () => {
            expect(capitalizeFirst('hello')).toBe('Hello');
        });

        it('should handle already capitalized text', () => {
            expect(capitalizeFirst('Hello')).toBe('Hello');
        });

        it('should handle empty string', () => {
            expect(capitalizeFirst('')).toBe('');
        });
    });

    describe('toSlug', () => {
        it('should convert text to slug', () => {
            expect(toSlug('Hello World')).toBe('hello-world');
        });

        it('should handle special characters', () => {
            expect(toSlug('Hello, World!')).toBe('hello-world');
        });

        it('should handle multiple spaces', () => {
            expect(toSlug('Hello   World')).toBe('hello-world');
        });
    });
});
