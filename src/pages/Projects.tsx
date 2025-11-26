import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../components/layout";
import Footer from "../components/Footer";
import { AnimatedWhiteDot } from "../common/WhiteDot";
import { tiers } from "../data/tiers";

const Projects = () => {
  const [selectedTier, setSelectedTier] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
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

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate particles
  useEffect(() => {
    const newParticles = Array.from({ length: 150 }, (_, i) => {
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

  const filteredExamples = useMemo(() => {
    let examples = tiers.flatMap((tier) =>
      tier.examples.map((example) => ({
        ...example,
        tierSlug: tier.slug,
        tierLabel: tier.label,
      }))
    );

    if (selectedTier !== "all") {
      examples = examples.filter(
        (example) => example.tierSlug === selectedTier
      );
    }

    if (searchQuery) {
      examples = examples.filter(
        (example) =>
          example.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          example.stack.some((s) =>
            s.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    return examples;
  }, [selectedTier, searchQuery]);

  const groupedExamples = useMemo(() => {
    const groups: { [key: string]: typeof filteredExamples } = {};
    filteredExamples.forEach((example) => {
      if (!groups[example.tierLabel]) {
        groups[example.tierLabel] = [];
      }
      groups[example.tierLabel].push(example);
    });
    return groups;
  }, [filteredExamples]);

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titlebar */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-xl text-gray-300">Explore by investment level</p>
            </div>

            {/* Filters */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTier("all")}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedTier === "all"
                        ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
                    }`}
                  >
                    All
                  </button>
                  {tiers.map((tier) => (
                    <button
                      key={tier.slug}
                      onClick={() => setSelectedTier(tier.slug)}
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        selectedTier === tier.slug
                          ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Grid */}
            {Object.keys(groupedExamples).length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-400">No projects match your filters.</p>
              </div>
            ) : (
              Object.entries(groupedExamples).map(([tierLabel, examples]) => (
                <div key={tierLabel} className="mb-16">
                  <h2 className="text-2xl font-semibold mb-8 sticky top-20  backdrop-blur-sm py-4 z-10 border-b border-gray-800">
                    <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                      {tierLabel}
                    </span>
                  </h2>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {examples.map((example) => (
                      <motion.div
                        key={example.slug}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{
                          y: -8,
                        }}
                        className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300 overflow-hidden"
                      >
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-900/20 to-gray-900">
                          {example.image ? (
                            <img
                              src={example.image}
                              alt={example.name}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                              <span className="text-gray-500 text-4xl">🌐</span>
                            </div>
                          )}
                          {/* Hover Overlay with Buttons */}
                          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 p-4">
                            <Link
                              to={`/projects/${example.slug}`}
                              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors text-sm"
                            >
                              View Details
                            </Link>
                            {example.demoUrl && (
                              <Link
                                to={example.demoUrl}
                                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors text-sm"
                              >
                                View Demo
                              </Link>
                            )}
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-amber-400 transition-colors">
                            {example.name}
                          </h3>
                          <p className="text-gray-400 mb-4 text-sm">
                            {example.stack.join(", ")}
                          </p>
                          {example.description && (
                            <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                              {example.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))
            )}

            {/* CTA */}
            <div className="text-center py-16 bg-gradient-to-br from-amber-900/20 to-yellow-900/20 backdrop-blur-sm rounded-2xl mt-16 border border-amber-500/20">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Ready to build your dream project?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Transform your ideas into reality with our expert development team
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-3 rounded-full hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 font-semibold"
              >
                Start with a $500 concept
                <span className="ml-2">→</span>
              </Link>
            </div>
</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
