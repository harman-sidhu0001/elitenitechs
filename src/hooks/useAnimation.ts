import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Particle } from '../types';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP animations
 */
export const useGSAPAnimation = (
  target: React.RefObject<HTMLElement>,
  animation: gsap.TweenVars,
  trigger?: React.RefObject<HTMLElement>,
  options?: ScrollTrigger.Vars
) => {
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!target.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        animationRef.current = gsap.to(target.current, {
          ...animation,
          scrollTrigger: trigger?.current ? {
            trigger: trigger.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            ...options,
          } : undefined,
        });
      }, target);

      return () => {
        ctx.revert();
        if (animationRef.current) {
          animationRef.current.kill();
        }
      };
    }
  }, [target, animation, trigger, options]);

  return animationRef;
};

/**
 * Custom hook for Framer Motion variants
 */
export const useMotionVariants = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return {
    containerVariants,
    itemVariants,
    slideInFromLeft,
    slideInFromRight,
    scaleIn,
  };
};

/**
 * Custom hook for particle animation
 */
export const useParticles = (count: number = 200) => {
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    // Only generate particles once if not already generated
    if (particles.current.length === 0) {
      particles.current = [...Array(count)].map((_, i) => {
        const layer = Math.random();
        const size = Math.random() * 4 + layer * 3;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const moveX = (Math.random() - 0.5) * 50;
        const moveY = (Math.random() - 0.5) * 50;
        const duration = Math.random() * 8 + 4;
        const delay = 0;
        const opacity = 0.2 + layer * 0.6;
        const z = layer * 100;

        return {
          id: i,
          size,
          initialX,
          initialY,
          moveX,
          moveY,
          duration,
          delay,
          opacity,
          z,
        };
      });
    }
  }, [count]);

  return particles.current;
};

/**
 * Custom hook for hover animations
 */
export const useHoverAnimation = (
  ref: React.RefObject<HTMLElement>,
  hoverProps: gsap.TweenVars,
  unhoverProps: gsap.TweenVars
) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseEnter = () => {
      gsap.to(element, hoverProps);
    };

    const handleMouseLeave = () => {
      gsap.to(element, unhoverProps);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, hoverProps, unhoverProps]);
};

/**
 * Custom hook for staggered animations
 */
export const useStaggeredAnimation = (
  elements: React.RefObject<HTMLElement[]>,
  animation: gsap.TweenVars,
  stagger: number = 0.1
) => {
  useEffect(() => {
    if (!elements.current || elements.current.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      gsap.fromTo(
        elements.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger,
          ...animation,
        }
      );
    }
  }, [elements, animation, stagger]);
};

/**
 * Custom hook for counter animation
 */
export const useCounterAnimation = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  end: number,
  duration: number = 2
) => {
  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const obj = { value: 0 };
      gsap.to(obj, {
        value: end,
        duration,
        ease: 'power2.out',
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = Math.floor(obj.value).toString();
          }
        },
      });
    } else if (ref.current) {
      ref.current.textContent = end.toString();
    }
  }, [ref, end, duration]);
};