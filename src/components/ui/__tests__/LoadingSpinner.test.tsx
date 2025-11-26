import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../LoadingSpinner';

describe('LoadingSpinner', () => {
    it('should render with default props', () => {
        render(<LoadingSpinner />);
        const spinner = screen.getByRole('status');
        expect(spinner).toBeInTheDocument();
    });

    it('should apply size classes correctly', () => {
        const { rerender } = render(<LoadingSpinner size="sm" />);
        let spinner = screen.getByRole('status');
        expect(spinner.querySelector('.w-4')).toBeInTheDocument();

        rerender(<LoadingSpinner size="lg" />);
        spinner = screen.getByRole('status');
        expect(spinner.querySelector('.w-12')).toBeInTheDocument();
    });

    it('should apply custom className', () => {
        render(<LoadingSpinner className="custom-class" />);
        const spinner = screen.getByRole('status');
        expect(spinner).toHaveClass('custom-class');
    });

    it('should have accessibility attributes', () => {
        render(<LoadingSpinner />);
        const spinner = screen.getByRole('status');
        expect(spinner).toHaveAttribute('aria-live', 'polite');
    });
});
