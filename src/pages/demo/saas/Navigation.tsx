import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaRocket, FaTimes, FaBars, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

interface NavigationProps {
  isTransparent?: boolean;
}

const Navigation = ({ isTransparent = false }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/demo/saas-marketing" },
    { name: "Features", path: "/demo/saas-marketing/features" },
    { name: "Pricing", path: "/demo/saas-marketing/pricing" },
    { name: "Integrations", path: "/demo/saas-marketing/integrations" },
    { name: "About", path: "/demo/saas-marketing/about" },
    { name: "Blog", path: "/demo/saas-marketing/blog" },
    { name: "Contact", path: "/demo/saas-marketing/contact" },
  ];

  const isActivePath = (path: string) => {
    if (path === "/demo/saas-marketing") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || !isTransparent
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Link
                to="/demo/saas-marketing"
                className="flex items-center space-x-3 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-9 h-9 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group:shadow-xl transition-shadow duration-300"
                >
                  <FaRocket className="text-white text-sm" />
                </motion.div>
                <span
                  className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                    isScrolled || !isTransparent
                      ? "text-gray-900"
                      : "text-white"
                  } group-hover:text-blue-600`}
                >
                  CloudFlow
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-xl text-black ${
                      isActivePath(item.path)
                        ? "text-blue-600 bg-blue-50 shadow-sm"
                        : isScrolled || !isTransparent
                        ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        : "text-white/90 hover:text-black hover:bg-black/10"
                    }`}
                  >
                    {item.name}
                    {isActivePath(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.25)",
                }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Start Free Trial</span>
                <FaArrowRight className="w-3 h-3" />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 ${
                  isScrolled || !isTransparent
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <FaTimes key="close" className="text-xl" />
                  ) : (
                    <FaBars key="menu" className="text-xl" />
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 z-50 lg:hidden bg-white/95 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FaRocket className="text-white text-xs" />
                    </div>
                    <span className="text-lg font-bold text-gray-900">
                      CloudFlow
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200"
                  >
                    <FaTimes className="text-gray-600" />
                  </motion.button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-4 py-3 text-lg font-medium transition-all duration-200 rounded-xl ${
                            isActivePath(item.path)
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-900 hover:text-blue-600 hover:bg-gray-50"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mobile Footer */}
                <div className="p-6 border-t border-gray-200/50">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.25)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full flex items-center justify-center space-x-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <span>Start Free Trial</span>
                    <FaArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
