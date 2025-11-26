/**
 * Software Development Services Section
 * Showcases custom software solutions
 */

import { memo } from 'react';
import { motion } from 'framer-motion';
import { softwareDevelopmentServices } from '../../data/services';
import * as FaIcons from 'react-icons/fa';

// Helper to get icon component from icon name string
const getIconComponent = (iconName: string) => {
  return (FaIcons as any)[iconName] || FaIcons.FaCode;
};

const SoftwareDevelopmentSection = memo(() => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage:'radial-gradient(circle at 2px 2px, rgba(245, 158, 11, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary-500">Software </span>
            <span className="text-white">Development</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Custom business applications to streamline your operations and boost productivity
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareDevelopmentServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-primary-500/50 transition-all duration-300">
                {/* Icon */}
                <div className="mb-4">
                  {(() => {
                    const IconComponent = getIconComponent(service.icon);
                    return <IconComponent className="w-12 h-12 text-primary-500 group-hover:scale-110 transition-transform" />;
                  })()}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                      <svg
                        className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

SoftwareDevelopmentSection.displayName = 'SoftwareDevelopmentSection';

export default SoftwareDevelopmentSection;
