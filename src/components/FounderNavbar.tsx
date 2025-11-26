import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTimes, FaBars, FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const FounderNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Home', href: '/demo/founder', icon: '🏠' },
    { name: 'About', href: '/demo/founder/about', icon: '👤' },
    { name: 'Ventures', href: '/demo/founder/ventures', icon: '🚀' },
    { name: 'Speaking', href: '/demo/founder/speaking', icon: '🎤' },
    { name: 'Media', href: '/demo/founder/media', icon: '📺' },
    { name: 'Contact', href: '/demo/founder/contact', icon: '📧' }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: '#', color: 'hover:text-sky-600' },
    { icon: FaGithub, href: '#', color: 'hover:text-gray-800' },
    { icon: FaEnvelope, href: '#', color: 'hover:text-red-600' }
  ];

  // Premium GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo entrance animation with bounce effect
      if (logoRef.current) {
        gsap.fromTo(logoRef.current, {
          scale: 0,
          rotation: -180,
          opacity: 0
        }, {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          delay: 0.3
        });

        // Logo hover pulse effect
        logoRef.current.addEventListener('mouseenter', () => {
          gsap.to(logoRef.current, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        logoRef.current.addEventListener('mouseleave', () => {
          gsap.to(logoRef.current, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }

      // Navigation links staggered entrance
      if (navLinksRef.current) {
        const links = navLinksRef.current.querySelectorAll('.nav-link');
        gsap.fromTo(links, {
          y: -50,
          opacity: 0,
          skewX: -15
        }, {
          y: 0,
          opacity: 1,
          skewX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.6
        });

        // Magnetic effect on nav links
        links.forEach((link: Element) => {
          link.addEventListener('mouseenter', () => {
            gsap.to(link, {
              scale: 1.05,
              y: -2,
              duration: 0.2,
              ease: "power2.out"
            });
          });

          link.addEventListener('mouseleave', () => {
            gsap.to(link, {
              scale: 1,
              y: 0,
              duration: 0.2,
              ease: "power2.out"
            });
          });
        });
      }

      // Scroll-based navbar transformations
      ScrollTrigger.create({
        start: "top -80",
        end: 99999,
        onUpdate: (self: { direction: number; scroll: () => number }) => {
          if (self.direction === 1 && self.scroll() > 100) {
            gsap.to(navRef.current, {
              y: -100,
              duration: 0.3,
              ease: "power2.inOut"
            });
          } else if (self.direction === -1 || self.scroll() < 100) {
            gsap.to(navRef.current, {
              y: 0,
              duration: 0.3,
              ease: "power2.inOut"
            });
          }
        }
      });

      // Navbar background change on scroll
      ScrollTrigger.create({
        start: "top -50",
        end: 99999,
        onUpdate: (self: { direction: number; scroll: () => number }) => {
          setIsScrolled(self.scroll() > 50);
        }
      });

    }, navRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Mobile menu animations
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(mobileMenuRef.current, {
          x: 300,
          opacity: 0
        }, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out"
        });

        // Animate mobile menu items
        const items = mobileMenuRef.current.querySelectorAll('.mobile-nav-item');
        gsap.fromTo(items, {
          x: 50,
          opacity: 0
        }, {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          x: 300,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in"
        });
      }
    }
  }, [isMobileMenuOpen]);

  // Update active section based on location
  useEffect(() => {
    const path = location.pathname;
    if (path === '/demo/founder' || path === '/demo/founder/') {
      setActiveSection('home');
    } else {
      const section = path.split('/').pop();
      if (section) {
        setActiveSection(section);
      }
    }
  }, [location]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Add click animation
    const link = document.querySelector(`[href="${href}"]`);
    if (link) {
      gsap.to(link, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <>
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Premium Logo */}
            <div ref={logoRef} className="flex items-center">
              <Link 
                to="/demo/founder"
                className="flex items-center space-x-3 group"
                onClick={() => handleNavClick('/demo/founder')}
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    AC
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                    Alex Chen
                  </div>
                  <div className="text-xs text-gray-500">Founder & Innovator</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div ref={navLinksRef} className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.name.toLowerCase() || 
                    (activeSection === 'home' && item.name === 'Home')
                      ? 'text-blue-600 bg-blue-50/50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50/50'
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </span>
                  {activeSection === item.name.toLowerCase() && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Social Links & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <Link
                to="/demo/founder/contact"
                className="px-6 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => handleNavClick('/demo/founder/contact')}
              >
                Get In Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          <div ref={mobileMenuRef} className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center text-white font-bold">
                    AC
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Alex Chen</div>
                    <div className="text-sm text-gray-500">Founder & Innovator</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`mobile-nav-item flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.name.toLowerCase() || 
                    (activeSection === 'home' && item.name === 'Home')
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 mb-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <Link
                to="/demo/founder/contact"
                className="w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-medium rounded-xl text-center hover:shadow-lg transition-all duration-300"
                onClick={() => handleNavClick('/demo/founder/contact')}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FounderNavbar;