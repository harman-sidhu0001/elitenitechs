/**
 * Services Overview Section
 * Interactive cards displaying all service categories
 */

import { memo } from 'react';
import { motion } from 'framer-motion';
import { serviceSections } from '../../data/services';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

// Helper to get icon component from icon name string
const getIconComponent = (iconName: string) => {
  return (FaIcons as any)[iconName] || FaIcons.FaCode;
};

const ServicesOverviewSection = memo(() => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-white">Our </span>
          <span className="text-primary-500">Services</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive technology solutions to power your business growth
        </p>
      </motion.div>

      {/* Service Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceSections.map((section, index) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="relative group"
          >
            <Link to="/services">
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-primary-500/20 rounded-2xl p-8 h-full hover:border-primary-500/50 transition-all duration-300">
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                {section.services[0] && (
                  <div className="relative mb-6">
                    {(() => {
                      const IconComponent = getIconComponent(section.services[0].icon);
                      return <IconComponent className="w-16 h-16 text-primary-500 group-hover:scale-110 transition-transform" />;
                    })()}
                  </div>
                )}

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                    {section.headline}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {section.subheadline}
                  </p>

                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 text-sm text-primary-500">
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Link
          to="/contact-us"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-black font-semibold rounded-2xl hover:bg-primary-600 transition-all duration-300 hover:scale-105"
        >
          Get Started
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
});

ServicesOverviewSection.displayName = 'ServicesOverviewSection';

export default ServicesOverviewSection;
