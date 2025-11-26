// Core application types
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  color?: string;
  gradient?: string;
  tech: string[];
  technologies?: string[]; // Alternative tech field
  price: string;
  timeline: string;
  image?: string;
  liveUrl?: string;
  demoUrl?: string;
  duration?: string;
  githubUrl?: string;
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ValueProp {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Particle {
  id: number;
  size: number;
  initialX: number;
  initialY: number;
  moveX: number;
  moveY: number;
  duration: number;
  delay: number;
  opacity: number;
  z: number;
}

// UI State Types
export interface UIState {
  scrolled: boolean;
  activeTestimonial: number;
  expandedFaq: number | null;
  hoveredFeature: number | null;
  isModalOpen: boolean;
  modalContent: {
    title: string;
    content: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
  } | null;
}

// Component Props Types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface ScrollIndicatorProps {
  target?: string;
}

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Error Boundary Types
export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  children?: NavItem[];
}

export interface NavbarProps {
  scrolled?: boolean;
  items?: NavItem[];
}

// SEO Types
export interface MetaData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export interface SEOProps extends MetaData {
  children?: React.ReactNode;
}