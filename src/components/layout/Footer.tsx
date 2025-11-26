import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRocket, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { APP_CONFIG, SOCIAL_LINKS } from '../../constants';
import { AnimatedButton } from '../ui';

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    linkedin: FaLinkedin,
    github: FaGithub,
    instagram: FaInstagram,
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center"
              >
                <span className="text-black font-bold text-sm">EN</span>
              </motion.div>
              <span className="text-white font-bold text-xl">
                {APP_CONFIG.name}
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              {APP_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/who-we-are" className="text-gray-400 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                  Web Development
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                  Mobile App Development
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                  Software Development
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                  UI/UX Design
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                  Digital Marketing
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                  Custom AI Agent
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="w-4 h-4" />
                <span className="text-sm">{APP_CONFIG.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaWhatsapp className="w-4 h-4" />
                <span className="text-sm">{APP_CONFIG.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaWhatsapp className="w-4 h-4" />
                <span className="text-sm">{APP_CONFIG.phone2}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span className="text-sm">Global</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {APP_CONFIG.name}. All rights reserved.
            </p>
            <AnimatedButton
              href="/contact-us"
              variant="primary"
              size="sm"
              className="flex items-center gap-2"
            >
              <FaRocket className="w-4 h-4" />
              Start Your Project
              <FaArrowRight className="w-4 h-4" />
            </AnimatedButton>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;