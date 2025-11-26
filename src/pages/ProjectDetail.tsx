import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Navbar, Footer } from '../components/layout';
import { AnimatedWhiteDot } from '../common/WhiteDot';
import { tiers } from '../data/tiers';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const example = tiers.flatMap(tier => tier.examples).find(ex => ex.slug === slug);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      initialX: number;
      initialY: number;
      size: number;
      opacity: number;
      moveX: number;
      moveY: number;
      duration: number;
      delay: number;
      z: number;
    }>
  >([]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate particles
  useEffect(() => {
    const newParticles = Array.from({ length: 120 }, (_, i) => {
      const layer = Math.random();
      const size = Math.random() * 3 + layer * 2;
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
      const moveX = (Math.random() - 0.5) * 40;
      const moveY = (Math.random() - 0.5) * 40;
      const duration = Math.random() * 10 + 5;
      const delay = Math.random() * 2;
      const opacity = 0.15 + layer * 0.5;
      const z = layer * 80;

      return {
        id: i,
        initialX,
        initialY,
        size,
        opacity,
        moveX,
        moveY,
        duration,
        delay,
        z,
      };
    });
    setParticles(newParticles);
  }, []);

  if (!example) {
    return (
      <div className="min-h-screen bg-black text-white p-8 relative">
        {/* Animated Background with Particles */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary-900/20 via-black to-primary-900/20">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.6), transparent 15%)`,
            }}
          />
          {particles.map((particle) => (
            <AnimatedWhiteDot key={particle.id} particle={particle} />
          ))}
        </div>

        <div className="relative z-10">
          <Navbar />
          <div className="pt-20 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Project not found.</h1>
            <Link to="/projects" className="text-primary-500 hover:text-primary-400 transition-colors">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated Background with Particles */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-900/20 via-black to-primary-900/20">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.6), transparent 15%)`,
          }}
        />
        {particles.map((particle) => (
          <AnimatedWhiteDot key={particle.id} particle={particle} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/projects"
              className="text-primary-500 hover:text-primary-400 mb-8 inline-flex items-center transition-colors"
            >
              ← Back to Projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-5xl font-bold mb-4">{example.name}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-primary-500 text-black px-4 py-2 rounded-md font-semibold">
                    ${example.price}
                  </span>
                  <span className="text-gray-400">
                    Timeline: {example.timeline}
                  </span>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {example.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {example.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              {example.features && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4">Features Included</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {example.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverables */}
              {example.deliverables && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4">What You Get</h2>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {example.deliverables.map((deliverable, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{deliverable}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="text-center py-12 bg-gray-900/50 rounded-lg border border-gray-800">
                <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
                <p className="text-gray-300 mb-6">
                  Let's build your {example.name.toLowerCase()} today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {example.slug === 'saas-marketing' || example.slug === 'crisp-one-pager' ||
                    example.slug === 'pre-launch-teaser' || example.slug === 'local-service-micro' ||
                    example.slug === 'agency-portfolio' || example.slug === 'founder-brand' ? (
                    <button
                      onClick={() => window.open(example.slug === 'founder-brand' ? `/demo/founder` : `/demo/${example.slug}`, '_blank')}
                      className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition-colors font-semibold"
                    >
                      See Demo
                    </button>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-700 text-gray-400 px-8 py-3 rounded-md cursor-not-allowed font-semibold"
                      title="Demo coming soon"
                    >
                      Demo Coming Soon
                    </button>
                  )}
                  <Link
                    to="/contact-us"
                    className="bg-primary-500 text-black px-8 py-3 rounded-md hover:bg-primary-600 transition-colors font-semibold inline-block"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;