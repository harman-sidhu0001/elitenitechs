// Application constants
export const APP_CONFIG = {
  name: 'Elite Nitechs',
  description: 'Premium Digital Solutions',
  url: 'https://elitenitechs.com',
  email: 'contact@elitenitechs.com',
  phone: '+1 (604) 961-3112',
  phone2: '+91 80548-75055',
} as const;

// Animation constants
export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8,
  },
  easing: {
    easeIn: 'power2.in',
    easeOut: 'power2.out',
    easeInOut: 'power2.inOut',
    backOut: 'back.out(1.7)',
    anticipate: 'anticipate',
  },
  stagger: {
    fast: 0.1,
    normal: 0.2,
    slow: 0.3,
  },
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-index values
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const;

// API endpoints (for future use)
export const API_ENDPOINTS = {
  contact: '/api/contact',
  projects: '/api/projects',
  testimonials: '/api/testimonials',
} as const;

// Social media links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/elitenitechs',
  linkedin: 'https://linkedin.com/company/elitenitechs',
  github: 'https://github.com/elitenitechs',
  instagram: 'https://instagram.com/elitenitechs',
} as const;

// Navigation items
export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Contact', href: '/contact-us' },
] as const;

// Demo navigation items
export const DEMO_NAVIGATION = [
  { label: 'SaaS Marketing', href: '/demo/saas-marketing' },
  { label: 'Agency Portfolio', href: '/demo/agency-portfolio' },
  { label: 'Founder Brand', href: '/demo/founder' },
  { label: 'Crisp One-Pager', href: '/demo/crisp-one-pager' },
  { label: 'Pre-Launch Teaser', href: '/demo/pre-launch-teaser' },
  { label: 'Local Service', href: '/demo/local-service-micro' },
] as const;

// Form validation patterns
export const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-\(\)]+$/,
  url: /^https?:\/\/.+/,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  url: 'Please enter a valid URL',
  minLength: (min: number) => `Must be at least ${min} characters`,
  maxLength: (max: number) => `Must be no more than ${max} characters`,
} as const;

// Loading states
export const LOADING_STATES = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error',
} as const;

// Theme colors (custom colors beyond Tailwind)
export const THEME_COLORS = {
  primary: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  accent: '#f59e0b',
  accent2: '#86efac',
  luxury: '#ffffff',
  premium: '#fef3c7',
  trust: '#fbbf24',
  secondary: '#86efac',
} as const;