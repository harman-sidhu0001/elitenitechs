/**
 * Service Type Definitions
 * Defines the structure for multi-service platform offerings
 */

export const ServiceCategory = {
  WEB_DEVELOPMENT: 'web',
  SOFTWARE_DEVELOPMENT: 'software',
  AI_AGENTS: 'ai',
  MARKETING: 'marketing',
  SOCIAL_MEDIA: 'social',
} as const;

export type ServiceCategory = (typeof ServiceCategory)[keyof typeof ServiceCategory];

export interface Service {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
  icon: string; // React icon name (e.g., 'FaCode', 'FaShoppingCart')
  features: string[];
  technologies?: string[];
  color: string; // Hex color for this service's theme
  gradient?: string; // Optional gradient for enhanced visuals
}

export interface ServiceSection {
  category: ServiceCategory;
  headline: string;
  subheadline: string;
  services: Service[];
  cta: {
    text: string;
    link: string;
  };
  backgroundImage?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  image: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}
