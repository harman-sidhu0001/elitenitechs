import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrolled } from '../../store';
import { APP_CONFIG, NAVIGATION_ITEMS } from '../../constants';

const Navbar = memo(() => {
  const scrolled = useScrolled();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="text-gray-300 hover:text-primary-500 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/contact-us"
              className="bg-primary-500 text-black px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-semibold text-sm"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white p-2"
              onClick={() => {
                // TODO: Implement mobile menu
                console.log('Mobile menu clicked');
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;