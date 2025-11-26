import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollIndicator from "./ScrollIndicator";
import FloatingElements from "./FloatingElements";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReducedMotion && bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

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

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <FloatingElements />
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-luxury via-premium to-trust"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(245,158,11,0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(134,239,172,0.2) 0%, transparent 50%),
            linear-gradient(45deg, transparent 49%, rgba(245,158,11,0.2) 50%, transparent 51%)
          `,
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold  leading-tight"
            style={{ textShadow: "0 0 20px rgba(245,158,11,0.6)" }}
          >
            Build faster.
            <br />
            Ship smarter.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700"
          >
            React &nbsp; Node &nbsp; Next &nbsp; MongoDB &nbsp; Express &nbsp;
            SQL
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="bg-accent text-black px-8 py-3 rounded-md hover:bg-accent2 transition-colors font-semibold"
            >
              See Projects
            </Link>
            <a
              href="#contact"
              className="border-2 border-accent  px-8 py-3 rounded-md hover:bg-accent hover:text-black transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
