import { useState, useEffect } from "react";
import {
  FaCode,
  FaPalette,
  FaChartLine,
  FaAward,
  FaRocket,
  FaUsers,
  FaGem,
  FaBolt,
  FaMobile,
  FaLightbulb,
  FaStar,
} from "react-icons/fa";
import type {
  Project,
  Service,
  Testimonial,
  ProcessStep,
  FAQ,
  Stat,
  ValueProp,
} from "../types";

// Mock data services - in a real app, these would fetch from an API
export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockProjects: Project[] = [
          {
            id: 1,
            title: "TechStart - Crisp One-Pager",
            category: "$500 Websites",
            description:
              "A fast-loading, SEO-optimized one-page website for TechStart. Features modern design, animated sections, and integrated contact form with scroll progress tracking.",
            color: "primary-500",
            tech: ["React", "Tailwind", "Framer Motion"],
            technologies: ["React", "Tailwind CSS", "Framer Motion"],
            price: "$500",
            timeline: "3-5 business days",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
            liveUrl: "/demo/crisp-one-pager",
            demoUrl: "/demo/crisp-one-pager",
            duration: "5 days",
          },
          {
            id: 2,
            title: "ProHome Services - Local Business",
            category: "$500 Websites",
            description:
              "Comprehensive micro-site for ProHome Services featuring service listings, photo gallery, interactive service area map with 12 cities, customer testimonials, and quote request system.",
            color: "primary-500",
            tech: ["React", "Framer Motion", "Tailwind"],
            technologies: ["React", "Framer Motion", "Tailwind CSS"],
            price: "$500",
            timeline: "3-5 business days",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
            liveUrl: "/demo/local-service-micro",
            demoUrl: "/demo/local-service-micro",
            duration: "4 days",
          },
          {
            id: 3,
            title: "CloudFlow - SaaS Marketing Platform",
            category: "$5,000 Websites",
            description:
              "Full-featured SaaS marketing website for CloudFlow with hero section, pricing tables (monthly/yearly toggle), 6 feature cards, 8 integration displays, testimonials carousel, and comprehensive footer.",
            gradient: "from-blue-600 to-purple-600",
            tech: ["React", "Motion", "Lenis"],
            technologies: ["React", "Framer Motion", "Tailwind CSS"],
            price: "$5,000",
            timeline: "4-6 weeks",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            liveUrl: "/demo/saas-marketing",
            demoUrl: "/demo/saas-marketing",
            duration: "6 weeks",
          },
        ];

        setProjects(mockProjects);
      } catch (err) {
        setError("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      setError(null);

      try {
        await new Promise((resolve) => setTimeout(resolve, 800));

        const mockServices: Service[] = [
          {
            icon: FaCode,
            title: "Custom Development",
            description:
              "Tailored software solutions built with cutting-edge technologies",
            features: [
              "Web Apps",
              "Mobile Apps",
              "API Development",
              "Cloud Solutions",
            ],
            color: "primary-500",
          },
          {
            icon: FaPalette,
            title: "UI/UX Design",
            description: "Stunning interfaces that captivate and convert users",
            features: [
              "User Research",
              "Prototyping",
              "Design Systems",
              "Brand Identity",
            ],
            color: "white",
          },
          {
            icon: FaChartLine,
            title: "Digital Marketing",
            description:
              "Comprehensive marketing services to grow your online presence",
            features: [
              "SEO Optimization",
              "Social Media Management",
              "PPC Advertising",
              "Content Marketing",
            ],
            color: "primary-500",
          },
          {
            icon: FaAward,
            title: "Security & Performance",
            description:
              "Enterprise-grade security and lightning-fast performance",
            features: [
              "Security Audits",
              "Performance Optimization",
              "DDoS Protection",
              "24/7 Monitoring",
            ],
            color: "white",
          },
        ];

        setServices(mockServices);
      } catch (err) {
        setError("Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      setError(null);

      try {
        await new Promise((resolve) => setTimeout(resolve, 600));

        const mockTestimonials: Testimonial[] = [
          {
            name: "Kamna Sharma",
            role: "Owner, Kamna Makeup Academy",
            content:
              "Elite Nitechs created an amazing website for my makeup academy. Their attention to detail and understanding of my business needs was exceptional. The site is beautiful and easy to manage!",
            avatar:
              "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
            rating: 5,
          },
          {
            name: "Michael Rodriguez",
            role: "Founder, StartupHub",
            content:
              "Working with Elite Nitechs was a game-changer for our startup. They delivered a world-class product that helped us secure Series A funding.",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
            rating: 5,
          },
          {
            name: "Emily Watson",
            role: "CTO, FinanceFlow",
            content:
              "The technical expertise and creativity of the Elite Nitechs team is unmatched. They turned our complex vision into reality.",
            avatar:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
            rating: 5,
          },
        ];

        setTestimonials(mockTestimonials);
      } catch (err) {
        setError("Failed to fetch testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
};

export const useStats = (): Stat[] => {
  return [
    { number: "150+", label: "Projects Delivered", icon: FaRocket },
    { number: "98%", label: "Client Satisfaction", icon: FaStar },
    { number: "50+", label: "Team Members", icon: FaUsers },
    { number: "15+", label: "Countries Served", icon: FaGem },
  ];
};

export const useValueProps = (): ValueProp[] => {
  return [
    {
      icon: FaBolt,
      title: "Lightning Fast",
      description: "Optimized performance that loads in milliseconds",
    },
    {
      icon: FaAward,
      title: "Secure by Design",
      description: "Enterprise-grade security built into every solution",
    },
    {
      icon: FaMobile,
      title: "Mobile First",
      description: "Responsive designs that work perfectly on all devices",
    },
    {
      icon: FaChartLine,
      title: "Results Driven",
      description: "Data-backed strategies that deliver measurable growth",
    },
    {
      icon: FaUsers,
      title: "User Focused",
      description: "Intuitive experiences that customers love",
    },
    {
      icon: FaAward,
      title: "Award Winning",
      description: "Recognized for excellence in design and development",
    },
  ];
};

export const useProcessSteps = (): ProcessStep[] => {
  return [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into your business goals and user needs to create a comprehensive roadmap.",
      icon: FaLightbulb,
      color: "primary-500",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Our designers craft stunning interfaces and interactive prototypes for your approval.",
      icon: FaPalette,
      color: "white",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build robust, scalable solutions with rigorous testing at every stage.",
      icon: FaCode,
      color: "white",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "Seamless deployment followed by ongoing support and optimization.",
      icon: FaRocket,
      color: "from-primary-600 to-primary-700",
    },
  ];
};

export const useFAQs = (): FAQ[] => {
  return [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during the discovery phase.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, AWS, Google Cloud, and many more. We choose the best tech stack for your specific needs.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive maintenance and support packages to ensure your digital products continue to perform optimally and stay up-to-date with the latest technologies.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is project-based and depends on the scope, complexity, and timeline. We offer flexible pricing models including fixed-price, time & materials, and retainer arrangements.",
    },
  ];
};
