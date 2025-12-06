/**
 * AI Agents Services Section
 * Showcases AI-powered automation solutions
 */

import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { aiAgentServices } from '../../data/services';
import * as FaIcons from 'react-icons/fa';

// Helper to get icon component from icon name string
const getIconComponent = (iconName: string) => {
  return (FaIcons as any)[iconName] || FaIcons.FaCode;
};

const AIAgentSection = memo(() => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-primary-500 text-sm font-medium">AI-Powered Automation</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Intelligent </span>
            <span className="text-primary-500">AI Agents</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            24/7 automation that works while you sleep - from customer support to appointment scheduling
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiAgentServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-900/90 to-black border border-primary-500/20 rounded-2xl p-6 h-full hover:border-primary-500/60 transition-all duration-300 overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon with glow */}
                <div className="relative mb-6 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500/10 to-transparent rounded-xl group-hover:from-primary-500/20 transition-all">
                  {(() => {
                    const IconComponent = getIconComponent(service.icon);
                    return <IconComponent className="w-10 h-10 text-primary-500 group-hover:scale-110 transition-transform" />;
                  })()}
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>

                <p className="relative text-gray-400 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="relative space-y-2">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-xs text-gray-500"
                    >
                      <svg
                        className="w-3 h-3 text-primary-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-black font-semibold rounded-2xl hover:bg-primary-600 transition-all duration-300 hover:scale-105"
          >
            Explore AI Solutions
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

AIAgentSection.displayName = 'AIAgentSection';

export default AIAgentSection;
