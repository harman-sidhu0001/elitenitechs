import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FounderNavbar from '../../../components/FounderNavbar';

gsap.registerPlugin(ScrollTrigger);

interface FounderLayoutProps {
  title?: string;
}

const FounderLayout = ({ title = "Alex Chen - Founder & Innovator" }: FounderLayoutProps) => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Premium page transition animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page entrance animation
      if (contentRef.current) {
        // Initial state
        gsap.set(contentRef.current, {
          opacity: 0,
          y: 50,
          scale: 0.98
        });

        // Animate in
        gsap.to(contentRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3
        });

        // Stagger animate children
        const children = contentRef.current.children;
        gsap.fromTo(children, {
          opacity: 0,
          y: 30,
          skewY: 2
        }, {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.6
        });
      }

      // Smooth scroll behavior
      ScrollTrigger.refresh();

      // Parallax background effect
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element: Element) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Reveal animations on scroll
      const revealElements = document.querySelectorAll('.reveal-element');
      revealElements.forEach((element: Element) => {
        gsap.fromTo(element, {
          opacity: 0,
          y: 60,
          rotationX: -15,
          transformOrigin: "50% 50% -50"
        }, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Floating animation for decorative elements
      const floatingElements = document.querySelectorAll('.floating-element');
      floatingElements.forEach((element: Element, index: number) => {
        gsap.to(element, {
          y: -20,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });

        gsap.to(element, {
          rotation: 5,
          duration: 4 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3
        });
      });

      // Magnetic effect for interactive elements
      const magneticElements = document.querySelectorAll('.magnetic-element');
      magneticElements.forEach((element: Element) => {
        (element as HTMLElement).addEventListener('mousemove', (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(element, {
            x: x * 0.15,
            y: y * 0.15,
            rotation: x * 0.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
          });
        });
      });

      // Pulse effect for important elements
      const pulseElements = document.querySelectorAll('.pulse-element');
      pulseElements.forEach((element: Element, index: number) => {
        gsap.to(element, {
          scale: 1.05,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.5
        });
      });

      // Glow effect for highlighted elements
      const glowElements = document.querySelectorAll('.glow-element');
      glowElements.forEach((element: Element) => {
        gsap.to(element, {
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

    }, layoutRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Update document title
  useEffect(() => {
    document.title = title;
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, [title]);

  return (
    <div ref={layoutRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <FounderNavbar />
      
      {/* Premium Page Transition Overlay */}
      <div className="page-transition-overlay fixed inset-0 z-50 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <main ref={contentRef} className="relative z-10">
        <Outlet />
      </main>

      {/* Premium Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center text-white font-bold">
                  AC
                </div>
                <div>
                  <div className="text-xl font-bold">Alex Chen</div>
                  <div className="text-sm text-gray-400">Founder & Innovator</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building the future through technology, innovation, and strategic vision.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><a href="/demo/founder/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="/demo/founder/ventures" className="text-gray-400 hover:text-white transition-colors duration-300">Ventures</a></li>
                <li><a href="/demo/founder/speaking" className="text-gray-400 hover:text-white transition-colors duration-300">Speaking</a></li>
                <li><a href="/demo/founder/media" className="text-gray-400 hover:text-white transition-colors duration-300">Media</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="/demo/founder/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">Get insights on innovation and entrepreneurship.</p>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Alex Chen. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .page-transition-overlay {
            animation: fadeOut 0.5s ease-out forwards;
            animation-delay: 0.5s;
          }

          @keyframes fadeOut {
            to {
              opacity: 0;
              visibility: hidden;
            }
          }

          /* Smooth scroll behavior */
          html {
            scroll-behavior: smooth;
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
          }
        `
      }} />
    </div>
  );
};

export default FounderLayout;