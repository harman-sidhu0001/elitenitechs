import React, { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaRocket, FaGem } from 'react-icons/fa';
import { AnimatedWhiteDot } from '../../common/WhiteDot';
import { useParallax, useParticles } from '../../hooks';
import { AnimatedButton } from '../ui';

const HeroSection = memo(() => {
  const heroRef = React.useRef<HTMLElement>(null);
  const { y, opacity } = useParallax(heroRef);
  const particles = useParticles(200);

  // Additional hero-specific particles for denser effect
  const [heroParticles, setHeroParticles] = useState<
    Array<{
      id: number;
      initialX: number;
      initialY: number;
      size: number;
      opacity: number;
      moveX: number;
      moveY: number;
      duration: number;
      delay: number;
      z: number;
    }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 150 }, (_, i) => {
      const layer = Math.random();
      const size = Math.random() * 3 + layer * 2;
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
      const moveX = (Math.random() - 0.5) * 40;
      const moveY = (Math.random() - 0.5) * 40;
      const duration = Math.random() * 10 + 5;
      const delay = Math.random() * 2;
      const opacity = 0.15 + layer * 0.5;
      const z = layer * 80;

      return {
        id: i + 1000, // Offset ID to avoid conflicts
        initialX,
        initialY,
        size,
        opacity,
        moveX,
        moveY,
        duration,
        delay,
        z,
      };
    });
    setHeroParticles(newParticles);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles from hook */}
        {particles.map((particle) => (
          <AnimatedWhiteDot 
            key={particle.id} 
            particle={particle} 
          />
        ))}
        {/* Additional hero-specific particles for denser effect */}
        {heroParticles.map((particle) => (
          <AnimatedWhiteDot 
            key={particle.id} 
            particle={particle} 
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.3, opacity: 0, z: -500 }}
          animate={{ scale: 1, opacity: 1, z: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "anticipate" }}
          className="mb-8"
        >
          <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-white text-xs md:text-sm font-medium mb-6">
            <FaCrown className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            Premium Digital Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ scale: 0.5, opacity: 0, z: -800, y: 50 }}
          animate={{ scale: 1, opacity: 1, z: 0, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "anticipate" }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-primary-500">
            Where Innovation
          </span>
          <br />
          <span className="text-white">
            Meets Excellence
          </span>
        </motion.h1>

        <motion.p
          initial={{ scale: 0.7, opacity: 0, z: -600, y: 40 }}
          animate={{ scale: 1, opacity: 1, z: 0, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "anticipate" }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Transform your digital presence with cutting-edge solutions that
          <span className="text-primary-500 font-semibold"> captivate</span>,
          <span className="text-white font-semibold"> convert</span>, and
          <span className="text-primary-500 font-semibold"> inspire</span>
        </motion.p>

        <motion.div
          initial={{ scale: 0.6, opacity: 0, z: -700, y: 60 }}
          animate={{ scale: 1, opacity: 1, z: 0, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8, ease: "anticipate" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <AnimatedButton
            href="/contact-us"
            variant="primary"
            size="lg"
            className="flex items-center gap-3"
          >
            <FaRocket className="w-5 h-5" />
            Start Your Project
          </AnimatedButton>
          <AnimatedButton
            href="/projects"
            variant="outline"
            size="lg"
            className="flex items-center gap-3"
          >
            <FaGem className="w-5 h-5" />
            View Our Work
          </AnimatedButton>
        </motion.div>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;