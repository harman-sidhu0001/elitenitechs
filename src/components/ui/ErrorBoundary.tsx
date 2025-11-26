import React, { Component, type ErrorInfo } from 'react';
import { motion } from 'framer-motion';
import type { ErrorBoundaryState, ErrorBoundaryProps } from '../../types';

interface State extends ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo);

    // Send to Sentry if available
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(error, {
        extra: errorInfo,
        tags: {
          component: 'ErrorBoundary',
        },
      });
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error!} reset={this.handleReset} />;
    }

    return this.props.children;
  }
}

const DefaultErrorFallback: React.FC<{ error: Error; reset: () => void }> = ({ error, reset }) => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2">Oops! Something went wrong</h1>
          <p className="text-gray-400 mb-6">
            We're sorry, but something unexpected happened. Our team has been notified.
          </p>
        </div>

        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="w-full bg-primary-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Try Again
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/"
            className="block w-full border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:border-primary-500 transition-colors"
          >
            Go Home
          </motion.a>
        </div>

        {import.meta.env.MODE === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-400 hover:text-white transition-colors">
              Error Details (Development Only)
            </summary>
            <div className="mt-4 p-4 bg-gray-900 rounded-lg text-xs font-mono text-red-400 overflow-auto max-h-40">
              {error.toString()}
            </div>
          </details>
        )}
      </motion.div>
    </div>
  );
};

export default ErrorBoundary;