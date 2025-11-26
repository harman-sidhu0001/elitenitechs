import {
  FaArrowRight, FaCalendar, FaStar, FaTrophy, FaRocket, FaLightbulb, FaGlobe,
  FaBrain, FaHandshake, FaChartLine, FaAward, FaMicrophone, FaNewspaper,
  FaLinkedin, FaTwitter, FaClock, FaUser, FaGraduationCap, FaAtom, FaDna,
  FaQuoteLeft, FaQuoteRight, FaBookmark, FaLeaf
} from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const FounderHome = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const venturesRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Premium data with enhanced content
  const achievements = [
    { icon: FaTrophy, label: "50+ Awards", value: "50+", color: "from-yellow-400 to-orange-500" },
    { icon: FaRocket, label: "Companies Founded", value: "12", color: "from-amber-400 to-yellow-500" },
    { icon: FaLightbulb, label: "Patents Filed", value: "28", color: "from-amber-400 to-orange-500" },
    { icon: FaGlobe, label: "Global Reach", value: "150+", color: "from-green-400 to-teal-500" }
  ];

  const ventures = [
    {
      name: 'NexusAI',
      role: 'Founder & CEO',
      description: 'Revolutionary AI platform transforming enterprise automation with quantum computing integration.',
      status: 'Active',
      year: '2023',
      valuation: '$2.5B',
      category: 'AI/ML',
      gradient: 'from-amber-600 to-yellow-500',
      icon: <FaBrain />
    },
    {
      name: 'BioVerse',
      role: 'Co-Founder',
      description: 'Biotechnology breakthrough in synthetic biology for sustainable medical solutions.',
      status: 'Active', 
      year: '2022',
      valuation: '$1.8B',
      category: 'Biotech',
      gradient: 'from-green-600 to-emerald-500',
      icon: <FaDna />
    },
    {
      name: 'QuantumLeap',
      role: 'Chairman',
      description: 'Quantum computing startup making breakthrough algorithms accessible to mainstream industries.',
      status: 'Scaling',
      year: '2021',
      valuation: '$900M',
      category: 'Quantum Tech',
      gradient: 'from-amber-600 to-orange-500',
      icon: <FaAtom />
    },
    {
      name: 'EcoSphere',
      role: 'Strategic Advisor',
      description: 'Climate tech company developing carbon capture and renewable energy solutions.',
      status: 'Growing',
      year: '2020',
      valuation: '$750M',
      category: 'Climate Tech',
      gradient: 'from-emerald-600 to-teal-500',
      icon: <FaLeaf />
    }
  ];

  const upcomingEvents = [
    {
      title: 'World Economic Forum',
      date: 'January 2024',
      location: 'Davos, Switzerland',
      type: 'Keynote Speaker',
      topic: 'The Future of AI in Global Economics',
      icon: <FaGlobe />
    },
    {
      title: 'TED Global',
      date: 'March 2024', 
      location: 'Vancouver, Canada',
      type: 'Main Stage',
      topic: 'Quantum Computing: The Next Frontier',
      icon: <FaMicrophone />
    },
    {
      title: 'MIT Innovation Summit',
      date: 'April 2024',
      location: 'Boston, USA',
      type: 'Panel Discussion',
      topic: 'Entrepreneurship in Deep Tech',
      icon: <FaGraduationCap />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Managing Partner, Sequoia Capital',
      content: 'A rare visionary who combines technical brilliance with unparalleled business acumen. Every venture becomes an industry disruptor.',
      avatar: <FaUser />,
      rating: 5
    },
    {
      name: 'Dr. James Mitchell',
      role: 'CTO, Google DeepMind',
      content: 'One of the most brilliant minds in AI and quantum computing. His innovations are shaping the future of technology.',
      avatar: <FaGraduationCap />,
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'CEO, Unicorn Ventures',
      content: 'Exceptional ability to identify and build transformative companies. A true serial entrepreneur with multiple exits.',
      avatar: <FaAward />,
      rating: 5
    }
  ];

  // Philosophy section data
  const philosophy = {
    title: "My Philosophy",
    subtitle: "Building the future through innovation and impact",
    principles: [
      {
        icon: <FaRocket />,
        title: "Innovation First",
        description: "Pushing boundaries of what's possible through cutting-edge technology and creative problem-solving."
      },
      {
        icon: <FaGlobe />,
        title: "Global Impact",
        description: "Creating solutions that address real-world challenges and improve lives at scale."
      },
      {
        icon: <FaHandshake />,
        title: "Collaborative Leadership",
        description: "Building teams and partnerships that amplify collective strengths and shared vision."
      },
      {
        icon: <FaChartLine />,
        title: "Sustainable Growth",
        description: "Focusing on long-term value creation over short-term gains and quick wins."
      }
    ]
  };

  // Latest insights data
  const latestInsights = [
    {
      title: "The Future of Quantum Computing",
      excerpt: "Exploring how quantum algorithms will revolutionize industries from healthcare to finance...",
      date: "Nov 2024",
      readTime: "5 min read",
      category: "Technology",
      image: <FaAtom />
    },
    {
      title: "Building AI-First Companies",
      excerpt: "Key principles for creating organizations that leverage artificial intelligence at their core...",
      date: "Oct 2024", 
      readTime: "8 min read",
      category: "Strategy",
      image: <FaBrain />
    },
    {
      title: "Climate Tech Investment Trends",
      excerpt: "Where smart money is flowing in the race to solve climate change through innovation...",
      date: "Sep 2024",
      readTime: "6 min read", 
      category: "Investment",
      image: <FaLeaf />
    }
  ];

  // Smooth scroll functionality
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add smooth scroll to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  // Premium GSAP Animations with advanced techniques
  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      // Advanced timeline for hero section
      const heroTl = gsap.timeline({
        defaults: { ease: "power4.out", force3D: true }
      });

      // Background mesh gradient animation
      if (heroRef.current) {
        const bgMesh = heroRef.current.querySelector('.hero-mesh');
        if (bgMesh) {
          gsap.to(bgMesh, {
            backgroundPosition: "200% 50%",
            duration: 20,
            repeat: -1,
            ease: "none"
          });
        }
      }

      // Premium title reveal with character-by-character animation
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char');
        heroTl.fromTo(chars, {
          y: 150,
          opacity: 0,
          rotationX: -90,
          transformOrigin: "50% 50% -50"
        }, {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: "back.out(1.7)"
        }, "0");

        // Glitch effect on title
        gsap.to(titleRef.current, {
          filter: "hue-rotate(360deg)",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

      // Subtitle with typewriter effect
      if (subtitleRef.current) {
        heroTl.fromTo(subtitleRef.current, {
          y: 100,
          opacity: 0,
          scale: 0.8
        }, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.5)"
        }, "0.5");

        // Typewriter animation
        const text = subtitleRef.current.textContent || "";
        gsap.to(subtitleRef.current, {
          text: text,
          duration: 2,
          ease: "none",
          delay: 0.5
        });
      }

      // CTA with magnetic effect
      if (ctaRef.current) {
        const ctaButton = ctaRef.current.querySelector('.cta-button');
        if (ctaButton) {
          heroTl.fromTo(ctaButton, {
            scale: 0,
            rotation: -180,
            opacity: 0
          }, {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1.5,
            ease: "back.out(1.7)"
          }, "1");

          // Magnetic button effect
          const magnetButton = (e: MouseEvent) => {
            const button = e.currentTarget as HTMLElement;
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(button, {
              x: x * 0.3,
              y: y * 0.3,
              rotation: x * 0.1,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          const resetButton = () => {
            gsap.to(ctaButton, {
              x: 0,
              y: 0,
              rotation: 0,
              duration: 0.5,
              ease: "elastic.out(1, 0.3)"
            });
          };

          (ctaButton as HTMLElement).addEventListener('mousemove', magnetButton);
          (ctaButton as HTMLElement).addEventListener('mouseleave', resetButton);
        }
      }

      // Stats with counter animation and 3D effects
      if (statsRef.current) {
        const statCards = statsRef.current.querySelectorAll('.stat-card');
        heroTl.fromTo(statCards, {
          scale: 0,
          opacity: 0,
          rotationY: -90,
          z: -200
        }, {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          z: 0,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(1.7)"
        }, "1.5");

        // Counter animation
        statCards.forEach((card: Element) => {
          const valueEl = card.querySelector('.stat-value');
          const finalValue = valueEl?.textContent;
          if (finalValue && finalValue !== '150+') {
            const numValue = parseInt(finalValue);
            gsap.to({ value: 0 }, {
              value: numValue,
              duration: 2,
              ease: "power2.out",
              onUpdate: function() {
                valueEl.textContent = Math.round(this.targets()[0].value).toString();
              },
              delay: 2
            });
          }
        });

        // Floating animation for stats
        statCards.forEach((card: Element, index: number) => {
          gsap.to(card, {
            y: -10,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });
      }

      // Ventures section with grid layout and premium animations
      if (venturesRef.current) {
        const cards = venturesRef.current.querySelectorAll('.venture-card');
        
        // Staggered card entrance with 3D effects
        gsap.fromTo(cards, {
          opacity: 0,
          scale: 0.8,
          rotationY: 45,
          rotationX: 15,
          y: 100
        }, {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          rotationX: 0,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: venturesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        // 3D tilt effect on hover
        cards.forEach((card: Element) => {
          const cardInner = card.querySelector('.venture-card-inner');
          
          card.addEventListener('mouseenter', () => {
            gsap.to(cardInner, {
              rotationY: 5,
              rotationX: -5,
              scale: 1.05,
              duration: 0.4,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(cardInner, {
              rotationY: 0,
              rotationX: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });
          });
        });
      }

      // Events section with parallax
      if (eventsRef.current) {
        const eventCards = eventsRef.current.querySelectorAll('.event-card');
        
        gsap.fromTo(eventCards, {
          opacity: 0,
          x: -100,
          rotationY: -30
        }, {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: eventsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Philosophy section animations
      const philosophyCards = document.querySelectorAll('.philosophy-card');
      gsap.fromTo(philosophyCards, {
        opacity: 0,
        scale: 0.8,
        rotationY: -30,
        y: 80
      }, {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.philosophy-card',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Latest insights animations
      const insightCards = document.querySelectorAll('.insight-card');
      gsap.fromTo(insightCards, {
        opacity: 0,
        x: -100,
        rotationY: -20,
        scale: 0.9
      }, {
        opacity: 1,
        x: 0,
        rotationY: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.insight-card',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Hover effects for philosophy cards
      philosophyCards.forEach((card: Element) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Hover effects for insight cards
      insightCards.forEach((card: Element) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -8,
            rotationX: 5,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Testimonials with advanced reveal
      if (testimonialsRef.current) {
        const testimonialCards = testimonialsRef.current.querySelectorAll('.testimonial-card');
        
        gsap.fromTo(testimonialCards, {
          opacity: 0,
          scale: 0.9,
          rotation: -5
        }, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

    }, heroRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => {
        try {
          trigger.kill();
        } catch (error) {
          console.warn('Error killing ScrollTrigger:', error);
        }
      });
    };
  }, [isLoading]);

  // Advanced cursor system with particle effects
  useEffect(() => {
    if (isLoading) return;

    const cursor = document.querySelector('.premium-cursor');
    const follower = document.querySelector('.cursor-follower');
    const trail = document.querySelector('.cursor-trail');
    
    if (cursor && follower && trail) {
      // Initial entrance animation
      gsap.fromTo([cursor, follower, trail], {
        scale: 0,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });

      let mouseX = 0, mouseY = 0;
      let cursorX = 0, cursorY = 0;
      let followerX = 0, followerY = 0;
      let trailX = 0, trailY = 0;

      // Particle system
      const particles: HTMLElement[] = [];
      const createParticle = (x: number, y: number) => {
        const particle = document.createElement('div');
        particle.className = 'cursor-particle';
        particle.style.cssText = `
          position: fixed;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, #3b82f6, #8b5cf6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9996;
          opacity: 0.8;
          filter: blur(0.5px);
        `;
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        document.body.appendChild(particle);
        
        gsap.to(particle, {
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          opacity: 0,
          scale: 0,
          duration: 2,
          ease: "power2.out",
          onComplete: () => {
            if (document.body.contains(particle)) {
              document.body.removeChild(particle);
            }
            particles.splice(particles.indexOf(particle), 1);
          }
        });
        
        particles.push(particle);
      };

      let particleTimer: number;
      const moveCursor = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create particles
        clearTimeout(particleTimer);
        particleTimer = window.setTimeout(() => {
          if (Math.random() > 0.85 && particles.length < 15) {
            createParticle(e.clientX, e.clientY);
          }
        }, 50);
      };

      const animateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        trailX += (mouseX - trailX) * 0.05;
        trailY += (mouseY - trailY) * 0.05;

        gsap.set(cursor, { x: cursorX - 10, y: cursorY - 10 });
        gsap.set(follower, { x: followerX - 20, y: followerY - 20 });
        gsap.set(trail, { x: trailX - 6, y: trailY - 6 });
        
        requestAnimationFrame(animateCursor);
      };

      document.addEventListener('mousemove', moveCursor);
      animateCursor();

      // Hover effects
      const handleHover = (scale: number, color: string) => {
        gsap.to(cursor, {
          scale,
          background: color,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(follower, {
          scale: scale * 1.5,
          borderColor: color,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const interactiveElements = document.querySelectorAll('a, button, .venture-card, .event-card, .testimonial-card, .stat-card');
      interactiveElements.forEach((element: Element) => {
        element.addEventListener('mouseenter', () => handleHover(0.5, '#3b82f6'));
        element.addEventListener('mouseleave', () => handleHover(1, 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'));
      });

      return () => {
        document.removeEventListener('mousemove', moveCursor);
        clearTimeout(particleTimer);
        particles.forEach(particle => {
          if (document.body.contains(particle)) {
            document.body.removeChild(particle);
          }
        });
      };
    }
  }, [isLoading]);

  // Floating particles background
  useEffect(() => {
    if (isLoading) return;

    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'floating-particles';
    particlesContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    `;
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 6 + 2;
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.4));
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        filter: blur(${Math.random() * 1}px);
      `;
      particlesContainer.appendChild(particle);

      gsap.to(particle, {
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 300,
        duration: Math.random() * 25 + 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 5
      });

      gsap.to(particle, {
        opacity: Math.random() * 0.6 + 0.2,
        duration: Math.random() * 4 + 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    }

    return () => {
      if (document.body.contains(particlesContainer)) {
        document.body.removeChild(particlesContainer);
      }
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-purple-500/20 rounded-full"></div>
            <div className="absolute inset-2 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading Experience</h2>
          <p className="text-gray-400">Preparing something extraordinary...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Premium Cursor System */}
      <div className="premium-cursor fixed w-5 h-5 rounded-full pointer-events-none z-50 mix-blend-difference" 
           style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', opacity: 0 }}></div>
      <div className="cursor-follower fixed w-10 h-10 border-2 border-blue-500 rounded-full pointer-events-none z-50 backdrop-blur-sm" 
           style={{ opacity: 0 }}></div>
      <div className="cursor-trail fixed w-3 h-3 bg-blue-400/40 rounded-full pointer-events-none z-40 blur-sm" 
           style={{ opacity: 0 }}></div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="hero-mesh absolute inset-0 opacity-30" 
             style={{
               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
               backgroundSize: '400% 400%'
             }}></div>
        
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#3b82f6' : '#8b5cf6'}, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 20}s ease-in-out infinite`
            }}
          ></div>
        ))}

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* Premium Title */}
          <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-green-600 bg-clip-text text-transparent">
            {'Alex Chen'.split('').map((char, i) => (
              <span key={i} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
            ))}
          </h1>

          {/* Dynamic Subtitle */}
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-700 mb-8 font-light max-w-3xl mx-auto">
            Visionary Entrepreneur • Quantum Computing Pioneer • AI Innovator
          </p>

          {/* CTA Section */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/demo/founder/about"
              className="cta-button relative px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-semibold rounded-full overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover My Journey
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              to="/demo/founder/ventures"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-amber-500 hover:text-amber-600 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-20 px-6 relative">
        <div ref={statsRef} className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="stat-card group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/50 hover:border-transparent transition-all duration-300">
                <achievement.icon className={`w-8 h-8 mx-auto mb-3 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`} />
                <div className="stat-value text-3xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                <div className="text-sm text-gray-600">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ventures Grid Section */}
      <section ref={venturesRef} className="py-20 px-6 relative bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Current Ventures
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building and scaling companies that are reshaping industries
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {ventures.map((venture, index) => (
            <div key={index} className="venture-card group">
              <div className="venture-card-inner relative h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${venture.gradient}`}></div>
                
                <div className="p-8 h-full flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${venture.gradient} rounded-xl flex items-center justify-center text-white text-xl`}>
                          {venture.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{venture.name}</h3>
                          <p className="text-sm text-gray-600 font-medium">{venture.role}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        venture.status === 'Active' 
                          ? 'bg-green-100 text-green-700' 
                          : venture.status === 'Scaling'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {venture.status}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${venture.gradient} text-white`}>
                        {venture.category}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{venture.description}</p>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm text-gray-500">Founded</div>
                        <div className="font-semibold text-gray-900">{venture.year}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Valuation</div>
                        <div className="font-bold text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          {venture.valuation}
                        </div>
                      </div>
                    </div>
                    
                    <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${venture.gradient} text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              {philosophy.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {philosophy.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophy.principles.map((principle, index) => (
              <div key={index} className="philosophy-card group text-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    {principle.icon}
                  </div>
                  <div className="flex items-center justify-center mb-3">
                    <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
                    <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
                    <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
                    <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
                    <FaStar className="w-4 h-4 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{principle.description}</p>
                  <div className="mt-4 flex justify-center">
                    <FaArrowRight className="w-5 h-5 text-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thoughts on technology, innovation, and building the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestInsights.map((insight, index) => (
              <article key={index} className="insight-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 relative">
                <div className="absolute top-4 right-4 z-10">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <FaBookmark className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-48 bg-gradient-to-br from-gray-50 to-amber-50 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {insight.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FaNewspaper className="w-4 h-4 text-amber-600" />
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                        {insight.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <FaClock className="w-3 h-3" />
                      {insight.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{insight.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="w-3 h-3 text-gray-400" />
                      <span className="text-sm text-gray-500">{insight.date}</span>
                    </div>
                      <button className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      Read More
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/demo/founder/media"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Articles
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section ref={eventsRef} className="py-20 px-6 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Speaking Engagements
            </h2>
            <p className="text-xl text-gray-600">Sharing insights on global stages</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center text-white">
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">{event.topic}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{event.date}</span>
                        <span>•</span>
                        <span>{event.location}</span>
                      </div>
                      <div className="mt-3">
                        <span className="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-green-600 bg-clip-text text-transparent">
              Testimonials
            </h2>
            <p className="text-xl text-gray-600">What industry leaders say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-green-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="absolute top-4 right-4">
                    <FaQuoteLeft className="w-6 h-6 text-amber-200 group-hover:text-amber-400 transition-colors duration-300" />
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-green-600 rounded-full flex items-center justify-center text-white text-xl mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">({testimonial.rating}.0)</span>
                  </div>

                  <blockquote className="text-gray-700 italic leading-relaxed relative">
                    <FaQuoteRight className="absolute -bottom-2 -right-2 w-8 h-8 text-amber-100" />
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaLinkedin className="w-4 h-4 text-gray-400 hover:text-amber-600 transition-colors duration-300 cursor-pointer" />
                      <FaTwitter className="w-4 h-4 text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
                    </div>
                    <span className="text-xs text-gray-400">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(120deg); }
            66% { transform: translateY(10px) rotate(240deg); }
          }
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
          
          /* Enhanced scrollbar */
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
            background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
          }
        `
      }} />
    </div>
  );
};

export default FounderHome;