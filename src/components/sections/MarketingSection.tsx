/**
 * Marketing Services Section
 * Multi-platform digital marketing solutions
 */

import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaGoogle, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { marketingServices } from '../../data/services';

const MarketingSection = memo(() => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black/10 overflow-hidden">
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
            <span className="text-white">Digital </span>
            <span className="text-primary-500">Marketing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reach your audience where they are - Facebook, Google, Instagram, TikTok & WhatsApp
          </p>
        </motion.div>

        {/* Marketing Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {marketingServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-primary-500/50 transition-all duration-300">
                {/* Platform Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    {service.id === 'marketing-facebook' && <FaFacebook className="w-14 h-14 text-primary-500 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-300" />}
                    {service.id === 'marketing-google' && <FaGoogle className="w-14 h-14 text-primary-500 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-300" />}
                    {service.id === 'marketing-instagram' && <FaInstagram className="w-14 h-14 text-primary-500 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-300" />}
                    {service.id === 'marketing-tiktok' && <FaTiktok className="w-14 h-14 text-primary-500 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-300" />}
                    {service.id === 'marketing-whatsapp' && <FaWhatsapp className="w-14 h-14 text-primary-500 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-300" />}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 text-center group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>

                {/* Key Features - compact */}
                <div className="space-y-1.5">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-gray-500"
                    >
                      <div className="w-1 h-1 bg-primary-500 rounded-full flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to grow your business with strategic digital marketing?
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-black font-semibold rounded-2xl hover:bg-primary-600 transition-all duration-300 hover:scale-105"
          >
            Start Marketing Campaign
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

MarketingSection.displayName = 'MarketingSection';

export default MarketingSection;
