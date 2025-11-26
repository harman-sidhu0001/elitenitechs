/**
 * Service Catalog Data
 * Comprehensive listing of all services offered by EliteNitechs
 */

import { ServiceCategory, type Service, type ServiceSection } from '../types/services';

// ============================================================================
// WEB DEVELOPMENT SERVICES (Existing - Keep As Is)
// ============================================================================

export const webDevelopmentServices: Service[] = [
  {
    id: 'web-custom-websites',
    category: ServiceCategory.WEB_DEVELOPMENT,
    title: 'Fully Custom Websites',
    description: 'Bespoke websites built entirely from scratch with React/Next.js and Three.js 3D rendering',
    icon: 'FaCode',
    features: [
      'Custom React/Next.js Development',
      'GSAP Animations',
      'Three.js 3D Objects',
      'Node.js Backend',
      'SQL/NoSQL Databases',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Three.js'],
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  },
  {
    id: 'web-ecommerce',
    category: ServiceCategory.WEB_DEVELOPMENT,
    title: 'Custom E-Commerce Websites',
    description: 'High-performance online stores built with React/Next.js, and custom backend with database integration',
    icon: 'FaShoppingCart',
    features: [
      'Custom Shopping Experience',
      'Payment Integration',
      'Custom Email Integration',
      'Real-time Inventory',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe/Razorpay'],
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  },
  {
    id: 'web-progressive-apps',
    category: ServiceCategory.WEB_DEVELOPMENT,
    title: 'Interactive Web Applications',
    description: 'Dynamic React/Next.js applications with advanced animations, and real-time data handling',
    icon: 'FaMobileAlt',
    features: [
      'React/Next.js Framework',
      'Real-time Data Updates',
      'Quality Visualizations',
      'Smooth Page Transitions',
      'API Integration',
    ],
    technologies: ['React', 'Next.js', 'Three.js', 'Node.js', 'MongoDB'],
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
  },
  {
    id: 'web-cms',
    category: ServiceCategory.WEB_DEVELOPMENT,
    title: 'Custom CMS Solutions',
    description: 'Fully custom content management systems built with Next.js and Node.js, featuring beautiful admin interfaces',
    icon: 'FaDatabase',
    features: [
      'Custom Admin Dashboard',
      'Content Management',
      'Media Library',
      'User Permissions',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'React'],
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
  },
];

// ============================================================================
// SOFTWARE DEVELOPMENT SERVICES
// ============================================================================

export const softwareDevelopmentServices: Service[] = [
  {
    id: 'software-billing',
    category: ServiceCategory.SOFTWARE_DEVELOPMENT,
    title: 'Billing & Invoicing Software',
    description: 'Automated billing systems with invoice generation, payment tracking, and reporting',
    icon: 'FaReceipt',
    features: [
      'Automated Invoicing',
      'Payment Reminders',
      'Tax Calculation',
      'Financial Reports',
      'Multi-Currency Support',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  },
  {
    id: 'software-inventory',
    category: ServiceCategory.SOFTWARE_DEVELOPMENT,
    title: 'Inventory Management System',
    description: 'Real-time inventory tracking with stock alerts and warehouse management',
    icon: 'FaBox',
    features: [
      'Real-Time Stock Tracking',
      'Low Stock Alerts',
      'Barcode Scanning',
      'Multi-Location Support',
      'Supplier Management',
    ],
    technologies: ['React', 'Express', 'MongoDB', 'Redis'],
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  },
  {
    id: 'software-crm',
    category: ServiceCategory.SOFTWARE_DEVELOPMENT,
    title: 'CRM Systems',
    description: 'Customer relationship management to streamline sales and support processes',
    icon: 'FaUsers',
    features: [
      'Contact Management',
      'Sales Pipeline',
      'Email Integration',
      'Task Automation',
      'Analytics Dashboard',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
  },
  {
    id: 'software-erp',
    category: ServiceCategory.SOFTWARE_DEVELOPMENT,
    title: 'ERP Solutions',
    description: 'Enterprise resource planning to integrate all business processes in one platform',
    icon: 'FaChartLine',
    features: [
      'Financial Management',
      'HR & Payroll',
      'Supply Chain',
      'Project Management',
      'Business Intelligence',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Microservices'],
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
  },
  {
    id: 'software-pos',
    category: ServiceCategory.SOFTWARE_DEVELOPMENT,
    title: 'Point of Sale (POS) System',
    description: 'Modern POS solutions for retail and restaurants with payment processing',
    icon: 'FaCashRegister',
    features: [
      'Quick Checkout',
      'Payment Processing',
      'Sales Reports',
      'Employee Management',
      'Loyalty Programs',
    ],
    technologies: ['React Native', 'Node.js', 'SQLite', 'Payment APIs'],
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
  },
  {
    id: 'Custom Software',
    category: ServiceCategory.SOFTWARE_DEVELOPMENT,
    title: 'Custom Software Development',
    description: 'Fully custom software development with React/Next.js and Node.js',
    icon: 'FaLaptopCode',
    features: [
      'Custom Software Development',
      'Custom Database Development',
      'Custom API Development',
      'Custom Backend Development',
      'Custom Frontend Development',
    ],
    technologies: ['React Native', 'Node.js', 'SQLite', 'Payment APIs'],
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
  },
];

// ============================================================================
// AI AGENTS SERVICES
// ============================================================================

export const aiAgentServices: Service[] = [
  {
    id: 'ai-calling-assistant',
    category: ServiceCategory.AI_AGENTS,
    title: 'AI Calling Assistant',
    description: 'Intelligent voice agents that handle phone calls with natural conversations',
    icon: 'FaPhone',
    features: [
      'Natural Voice Interaction',
      'Multi-Language Support',
      'Call Recording & Transcription',
      'Sentiment Analysis',
      '24/7 Availability',
    ],
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  },
  {
    id: 'ai-booking-agent',
    category: ServiceCategory.AI_AGENTS,
    title: 'Booking & Appointment Agent',
    description: 'Automated booking system that schedules appointments and sends reminders',
    icon: 'FaCalendar',
    features: [
      'Calendar Integration',
      'Smart Scheduling',
      'Automated Reminders',
      'Rescheduling Support',
      'Booking Confirmations',
    ],
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  },
  {
    id: 'ai-order-agent',
    category: ServiceCategory.AI_AGENTS,
    title: 'Order Receiving Agent',
    description: 'AI agent that processes orders through voice or chat with payment handling',
    icon: 'FaShoppingBasket',
    features: [
      'Voice & Chat Orders',
      'Menu Recommendations',
      'Order Customization',
      'Payment Processing',
      'Order Tracking',
    ],
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
  },
  {
    id: 'ai-customer-support',
    category: ServiceCategory.AI_AGENTS,
    title: 'Customer Support Bot',
    description: 'AI-powered support agent that resolves customer queries instantly',
    icon: 'FaComments',
    features: [
      'Instant Responses',
      'Knowledge Base Integration',
      'Ticket Creation',
      'Escalation to Human',
      'Multi-Channel Support',
    ],
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
  },
  {
    id: 'ai-appointment-scheduler',
    category: ServiceCategory.AI_AGENTS,
    title: 'Smart Appointment Scheduler',
    description: 'Intelligent scheduling agent that finds optimal meeting times automatically',
    icon: 'FaClock',
    features: [
      'Timezone Detection',
      'Availability Matching',
      'Meeting Preparation',
      'Video Call Links',
      'Calendar Sync',
    ],
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
  },
];

// ============================================================================
// MARKETING SERVICES
// ============================================================================

export const marketingServices: Service[] = [
  {
    id: 'marketing-facebook',
    category: ServiceCategory.MARKETING,
    title: 'Facebook Marketing',
    description: 'Targeted Facebook ad campaigns to reach your ideal customers',
    icon: 'FaFacebook',
    features: [
      'Ad Campaign Setup',
      'Audience Targeting',
      'Performance Analytics',
      'Retargeting Campaigns',
    ],
    technologies: ['Facebook Ads Manager', 'Meta Pixel', 'Analytics'],
    color: '#1877F2',
    gradient: 'linear-gradient(135deg, #1877F2 0%, #0C63D4 100%)',
  },
  {
    id: 'marketing-google',
    category: ServiceCategory.MARKETING,
    title: 'Google Marketing',
    description: 'SEO and Google Ads campaigns to dominate search results',
    icon: 'FaGoogle',
    features: [
      'Google Ads',
      'SEO Optimization',
      'Local SEO',
      'Analytics & Reporting',
    ],
    technologies: ['Google Ads', 'Google Analytics', 'Search Console'],
    color: '#4285F4',
    gradient: 'linear-gradient(135deg, #4285F4 0%, #1967D2 100%)',
  },
  {
    id: 'marketing-instagram',
    category: ServiceCategory.MARKETING,
    title: 'Instagram Marketing',
    description: 'Visual storytelling and influencer campaigns on Instagram',
    icon: 'FaInstagram',
    features: [
      'Instagram Ads',
      'Story Campaigns',
      'Content Creation',
      'Engagement Analytics',
    ],
    technologies: ['Instagram Ads', 'Meta Business Suite', 'Content Tools'],
    color: '#E4405F',
    gradient: 'linear-gradient(135deg, #E4405F 0%, #C13584 100%)',
  },
  {
    id: 'marketing-tiktok',
    category: ServiceCategory.MARKETING,
    title: 'TikTok Marketing',
    description: 'Viral short-form video campaigns to engage younger audiences',
    icon: 'FaTiktok',
    features: [
      'TikTok Ads',
      'Viral Content Strategy',
      'Hashtag Challenges',
      'Trend Analytics',
    ],
    technologies: ['TikTok Ads Manager', 'TikTok Creator Marketplace'],
    color: '#000000',
    gradient: 'linear-gradient(135deg, #00F2EA 0%, #FF0050 100%)',
  },
  {
    id: 'marketing-whatsapp',
    category: ServiceCategory.MARKETING,
    title: 'WhatsApp Marketing',
    description: 'Direct customer engagement through WhatsApp Business API',
    icon: 'FaWhatsapp',
    features: [
      'Broadcast Messages',
      'Automated Responses',
      'Customer Support Chat',
      'Product Catalogs',
      'Payment Integration',
    ],
    technologies: ['WhatsApp Business API', 'Chatbot Integration', 'CRM'],
    color: '#25D366',
    gradient: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
  },
];

// ============================================================================
// SERVICE SECTIONS (Combined)
// ============================================================================

export const serviceSections: ServiceSection[] = [
  {
    category: ServiceCategory.WEB_DEVELOPMENT,
    headline: 'Web Development',
    subheadline: 'Fully custom websites built with React, Next.js, Node.js, featuring GSAP animations and Three.js 3D rendering',
    services: webDevelopmentServices,
    cta: {
      text: 'Explore Web Services',
      link: '/services/web-development',
    },
  },
  {
    category: ServiceCategory.AI_AGENTS,
    headline: 'AI Agents',
    subheadline: 'Intelligent automation that works 24/7 for your business',
    services: aiAgentServices,
    cta: {
      text: 'Discover AI Solutions',
      link: '/services/ai-agents',
    },
  },
  {
    category: ServiceCategory.MARKETING,
    headline: 'Digital Marketing',
    subheadline: 'Multi-platform campaigns that reach and convert your audience',
    services: marketingServices,
    cta: {
      text: 'Start Marketing',
      link: '/services/marketing',
    },
  },
  {
    category: ServiceCategory.SOFTWARE_DEVELOPMENT,
    headline: 'Software Development',
    subheadline: 'Custom business applications to streamline your operations',
    services: softwareDevelopmentServices,
    cta: {
      text: 'View Software Solutions',
      link: '/services/software-development',
    },
  },
];

// Helper function to get all services
export const getAllServices = (): Service[] => {
  return [
    ...webDevelopmentServices,
    ...softwareDevelopmentServices,
    ...aiAgentServices,
    ...marketingServices,
  ];
};

// Helper function to get services by category
export const getServicesByCategory = (category: ServiceCategory): Service[] => {
  return getAllServices().filter(service => service.category === category);
};
