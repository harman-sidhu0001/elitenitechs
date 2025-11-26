import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaBars, FaTimes, FaArrowRight, FaEnvelope, FaPhone, 
  FaInstagram, FaTwitter, FaLinkedin, FaDribbble, FaBehance
} from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/demo/agency-portfolio' },
    { name: 'Portfolio', path: '/demo/agency-portfolio/portfolio' },
    { name: 'About', path: '/demo/agency-portfolio/about' },
    { name: 'Services', path: '/demo/agency-portfolio/services' },
    { name: 'Blog', path: '/demo/agency-portfolio/blog' },
    { name: 'Contact', path: '/demo/agency-portfolio/contact' },
  ];

  const socialLinks = [
    { icon: FaInstagram, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedin, href: '#' },
    { icon: FaDribbble, href: '#' },
    { icon: FaBehance, href: '#' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-purple-100' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center"
              >
                <div className="w-6 h-6 bg-white rounded-sm" />
              </motion.div>
              <Link 
                to="/demo/agency-portfolio"
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              >
                Creative Studio
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                      location.pathname === item.path
                        ? 'text-purple-600'
                        : 'text-gray-700 hover:text-purple-600'
                    }`}
                  >
                    {item.name}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 origin-left"
                      initial={{ scaleX: location.pathname === item.path ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-purple-100 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <FaArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors duration-300"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <FaTimes className="w-6 h-6 text-gray-700" />
                  ) : (
                    <FaBars className="w-6 h-6 text-gray-700" />
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                {/* Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Menu
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-purple-100 transition-colors duration-300"
                  >
                    <FaTimes className="w-5 h-5 text-gray-700" />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-2 mb-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 group ${
                          location.pathname === item.path
                            ? 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600'
                            : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          <FaArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 mb-8"
                >
                  Get Started
                  <FaArrowRight className="inline ml-2" />
                </motion.button>

                {/* Contact Info */}
                <div className="border-t border-gray-200 pt-6 space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <FaEnvelope className="w-5 h-5 text-purple-600" />
                    <span>hello@creativestudio.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <FaPhone className="w-5 h-5 text-purple-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-gray-200">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;