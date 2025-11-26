import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGem, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center"
              >
                <FaGem className="text-white text-sm" />
              </motion.div>
              <span className="text-xl font-bold text-primary-500">
                Elite Nitechs
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming ideas into extraordinary digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/who-we-are"
                className="block text-gray-400 hover:text-primary-500 transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/projects"
                className="block text-gray-400 hover:text-primary-500 transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/contact-us"
                className="block text-gray-400 hover:text-primary-500 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <div className="space-y-2">
              <span className="block text-gray-400">Web Development</span>
              <span className="block text-gray-400">UI/UX Design</span>
              <span className="block text-gray-400">Digital Marketing</span>
              <span className="block text-gray-400">SEO Services</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <FaDribbble className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Elite Nitechs. All rights reserved. Crafted with passion
            and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;