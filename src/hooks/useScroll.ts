import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { useUIStore } from '../store';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for handling scroll effects and scroll position
 */
export const useScrollEffect = (threshold: number = 50) => {
  const setScrolled = useUIStore((state) => state.setScrolled);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > threshold;
      setScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, setScrolled]);
};

/**
 * Custom hook for parallax scroll effects using Framer Motion
 */
export const useParallax = (ref: React.RefObject<HTMLElement | null>, offset?: NonNullable<Parameters<typeof useScroll>[0]>['offset']) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset ?? ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return { y, opacity, scale, scrollYProgress };
};

/**
 * Custom hook for GSAP ScrollTrigger animations
 */
export const useGSAPScrollTrigger = (
  trigger: React.RefObject<HTMLElement>,
  animation: gsap.TweenVars,
  options?: ScrollTrigger.Vars
) => {
  const triggerRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!trigger.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      triggerRef.current = gsap.to(trigger.current, {
        ...animation,
        scrollTrigger: {
          trigger: trigger.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...options,
        },
      });
    }

    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
    };
  }, [trigger, animation, options]);

  return triggerRef;
};

/**
 * Custom hook for intersection observer
 */
export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
        ...options,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options, hasIntersected]);

  return { isIntersecting, hasIntersected };
};

/**
 * Custom hook for smooth scroll to element
 */
export const useSmoothScroll = () => {
  const scrollToElement = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { scrollToElement, scrollToTop };
};

/**
 * Custom hook for scroll progress indicator
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
};