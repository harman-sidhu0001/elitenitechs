import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-luxury/90 backdrop-blur-md border-b border-black/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="text-2xl font-bold text-black hover:text-accent"
          >
            Elite Nitechs
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-black hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              to="/who-we-are"
              className="text-black hover:text-accent transition-colors"
            >
              Who We Are
            </Link>
            <Link
              to="/projects"
              className="text-black hover:text-accent transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/contact-us"
              className="text-black hover:text-accent transition-colors"
            >
              Contact Us
            </Link>
          </nav>
          <Link
            to="/contact-us"
            className="bg-accent text-black px-4 py-2 rounded-md hover:bg-accent2 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
