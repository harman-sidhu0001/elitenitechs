import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEO, ErrorBoundary } from "../components/ui";
import { Navbar, Footer } from "../components/layout";
import {
  HeroSection,
  StatsSection,
  TestimonialsSection,
  WhyChooseEliteSection,
  FeaturedProjectsSection,
  ServicesOverviewSection,
  SoftwareDevelopmentSection,
  AIAgentSection,
  MarketingSection,
} from "../components/sections";
import { AnimatedWhiteDot } from "../common/WhiteDot";

const Home = memo(() => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
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
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 150 }, (_, i) => {
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
    setParticles(newParticles);
  }, []);

  return (
    <ErrorBoundary>
      <SEO
        title="Home"
        description="EliteNitechs - Complete technology solutions including Web Development, Custom Software (Billing, CRM, ERP), AI Agents (24/7 automation), and Multi-Platform Marketing (Facebook, Google, Instagram, TikTok, WhatsApp). Transform your business with cutting-edge digital services."
        keywords="web development, software development, AI agents, digital marketing, billing software, CRM, ERP, AI automation, Facebook marketing, Google marketing, React, Next.js, premium websites"
        image="/og-home.jpg"
      />

      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Animated Background with Particles */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary-900/20 via-black to-primary-900/20">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.6), transparent 15%)`,
            }}
          />
          {particles.map((particle) => (
            <AnimatedWhiteDot key={particle.id} particle={particle} />
          ))}
        </div>

        {/* Content with relative positioning to appear above particles */}
        <div className="relative z-10">
          <Navbar />

          <main>
            <HeroSection />
            <ServicesOverviewSection />
            <FeaturedProjectsSection />
            <AIAgentSection />
            <MarketingSection />
            <SoftwareDevelopmentSection />
            <StatsSection />
            <WhyChooseEliteSection />
            <TestimonialsSection />

            {/* Final CTA Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50"
            >
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-500">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's build something extraordinary together. Contact us today
                  to discuss your project.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-black font-semibold rounded-2xl hover:bg-primary-600 transition-all duration-300"
                  >
                    Start Your Project
                  </Link>
                </motion.div>
              </div>
            </motion.section>
          </main>

          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
});

Home.displayName = "Home";

export default Home;