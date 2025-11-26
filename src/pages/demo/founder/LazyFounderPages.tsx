import { lazy } from 'react';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

// Loading component
const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-amber-50"
  >
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-600">Loading...</p>
    </div>
  </motion.div>
);

// Lazy loaded components
const FounderHome = lazy(() => import('./FounderHome'));
const FounderAbout = lazy(() => import('./FounderAbout'));
const FounderVentures = lazy(() => import('./FounderVentures'));
const FounderSpeaking = lazy(() => import('./FounderSpeaking'));
const FounderMedia = lazy(() => import('./FounderMedia'));
const FounderContact = lazy(() => import('./FounderContact'));

// Wrapper components with Suspense
export const LazyFounderHome = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <FounderHome />
  </Suspense>
);

export const LazyFounderAbout = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <FounderAbout />
  </Suspense>
);

export const LazyFounderVentures = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <FounderVentures />
  </Suspense>
);

export const LazyFounderSpeaking = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <FounderSpeaking />
  </Suspense>
);

export const LazyFounderMedia = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <FounderMedia />
  </Suspense>
);

export const LazyFounderContact = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <FounderContact />
  </Suspense>
);