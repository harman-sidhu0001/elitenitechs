import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface SharedNavbarProps {
  scrolled?: boolean;
}

const SharedNavbar = ({ scrolled = false }: SharedNavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = ["Home", "Who We Are", "Projects", "Contact Us"];

  // Function to check if a nav item is active
  const isActive = (item: string) => {
    const currentPath = location.pathname;
    if (item === "Home") {
      return currentPath === "/" || currentPath === "";
    }
    const itemPath = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
    return currentPath === itemPath;
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: scrolled ? -10 : 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-primary-500/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            {/* <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center"
            >
              <FaGem className="text-white text-lg" />
            </motion.div> */}
            <Link to="/" className="text-2xl font-bold text-primary-500 ">
              Elite Nitechs
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className={`transition-colors duration-300 font-medium ${
                    isActive(item)
                      ? "text-primary-500"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
                <motion.div
                  initial={{ width: isActive(item) ? "100%" : 0 }}
                  animate={{ width: isActive(item) ? "100%" : 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary-500"
                />
              </motion.div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border border-primary-500 text-primary-500 rounded-full hover:bg-primary-500/10 transition-all duration-300"
            >
              Sign In
            </motion.button>
            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 flex items-center gap-2"
            >
              Get Started
              <FaArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    className={`block transition-colors duration-300 font-medium ${
                      isActive(item)
                        ? "text-primary-500"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <button className="w-full px-6 py-2 border border-primary-500 text-primary-500 rounded-full hover:bg-primary-500/10 transition-all duration-300">
                    Sign In
                  </button>
                  <a
                    href="/contact-us"
                    className="w-full px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Started
                    <FaArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default SharedNavbar;
