import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaRocket, FaShieldAlt, FaChartLine, FaUsers, FaClock, FaHeadset,
  FaDatabase, FaCloud, FaCode, FaMobile,
  FaLock, FaSync, FaCheckCircle, FaArrowRight, FaPlay
} from 'react-icons/fa';
import { useState } from 'react';


const Features = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Features', color: 'from-gray-600 to-gray-800' },
    { id: 'core', name: 'Core Features', color: 'from-blue-600 to-blue-800' },
    { id: 'security', name: 'Security', color: 'from-green-600 to-green-800' },
    { id: 'integration', name: 'Integrations', color: 'from-purple-600 to-purple-800' },
    { id: 'support', name: 'Support', color: 'from-orange-600 to-orange-800' }
  ];

  const features = [
    {
      id: 1,
      category: 'core',
      icon: FaRocket,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with 99.9% uptime guarantee and sub-second response times.',
      details: ['Global CDN', 'Edge computing', 'Auto-scaling', 'Load balancing'],
      color: 'from-blue-500 to-cyan-500',
      bgPattern: 'from-blue-50 to-cyan-50'
    },
    {
      id: 2,
      category: 'security',
      icon: FaShieldAlt,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level encryption with SOC 2 Type II compliance and regular security audits.',
      details: ['End-to-end encryption', '2FA authentication', 'GDPR compliant', 'Regular audits'],
      color: 'from-green-500 to-emerald-500',
      bgPattern: 'from-green-50 to-emerald-50'
    },
    {
      id: 3,
      category: 'core',
      icon: FaChartLine,
      title: 'Advanced Analytics',
      description: 'Real-time insights with predictive analytics and customizable dashboards.',
      details: ['Real-time data', 'Predictive models', 'Custom reports', 'Data visualization'],
      color: 'from-purple-500 to-pink-500',
      bgPattern: 'from-purple-50 to-pink-50'
    },
    {
      id: 4,
      category: 'core',
      icon: FaUsers,
      title: 'Team Collaboration',
      description: 'Seamless teamwork with real-time synchronization and communication tools.',
      details: ['Real-time sync', 'Team chat', 'File sharing', 'Version control'],
      color: 'from-orange-500 to-red-500',
      bgPattern: 'from-orange-50 to-red-50'
    },
    {
      id: 5,
      category: 'support',
      icon: FaClock,
      title: '24/7 Expert Support',
      description: 'Round-the-clock assistance from our expert technical team.',
      details: ['Live chat', 'Phone support', 'Email tickets', 'Video calls'],
      color: 'from-indigo-500 to-blue-500',
      bgPattern: 'from-indigo-50 to-blue-50'
    },
    {
      id: 6,
      category: 'support',
      icon: FaHeadset,
      title: 'Customer Success',
      description: 'Dedicated success manager for enterprise clients with personalized onboarding.',
      details: ['Dedicated manager', 'Onboarding', 'Training sessions', 'QBR meetings'],
      color: 'from-teal-500 to-green-500',
      bgPattern: 'from-teal-50 to-green-50'
    },
    {
      id: 7,
      category: 'integration',
      icon: FaDatabase,
      title: 'Data Management',
      description: 'Comprehensive data tools with automated backups and recovery.',
      details: ['Automated backups', 'Data recovery', 'Migration tools', 'Data retention'],
      color: 'from-red-500 to-pink-500',
      bgPattern: 'from-red-50 to-pink-50'
    },
    {
      id: 8,
      category: 'integration',
      icon: FaCloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure with multi-region deployment.',
      details: ['Multi-region', 'Auto-scaling', 'Load balancing', 'CDN integration'],
      color: 'from-cyan-500 to-blue-500',
      bgPattern: 'from-cyan-50 to-blue-50'
    },
    {
      id: 9,
      category: 'core',
      icon: FaCode,
      title: 'Developer Tools',
      description: 'Comprehensive API and SDK for custom integrations and development.',
      details: ['REST API', 'GraphQL', 'Webhooks', 'SDK libraries'],
      color: 'from-gray-600 to-gray-800',
      bgPattern: 'from-gray-50 to-gray-100'
    },
    {
      id: 10,
      category: 'security',
      icon: FaLock,
      title: 'Access Control',
      description: 'Granular permissions with role-based access control.',
      details: ['RBAC', 'SSO integration', 'Audit logs', 'Permission groups'],
      color: 'from-yellow-500 to-orange-500',
      bgPattern: 'from-yellow-50 to-orange-50'
    },
    {
      id: 11,
      category: 'integration',
      icon: FaSync,
      title: 'Sync & Automation',
      description: 'Automated workflows with third-party app integrations.',
      details: ['Workflow builder', 'Zapier integration', 'Custom triggers', 'Scheduled tasks'],
      color: 'from-pink-500 to-purple-500',
      bgPattern: 'from-pink-50 to-purple-50'
    },
    {
      id: 12,
      category: 'core',
      icon: FaMobile,
      title: 'Mobile Optimization',
      description: 'Fully responsive design with native mobile apps.',
      details: ['iOS app', 'Android app', 'PWA support', 'Mobile sync'],
      color: 'from-blue-600 to-purple-600',
      bgPattern: 'from-blue-50 to-purple-50'
    }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(f => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-10 blur-3xl"
            animate={{
              x: [0, 150, 0],
              y: [0, -75, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${i * 18}%`,
              top: `${i * 12}%`,
            }}
          />
        ))}
      </div>



      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Powerful Features for
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-300% animate-gradient"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Modern Business
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to streamline operations, boost productivity, and scale your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'text-white shadow-lg transform -translate-y-1'
                    : 'text-gray-700 bg-white hover:bg-gray-50'
                }`}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                }}
                onHoverStart={() => setHoveredFeature(feature.id)}
                onHoverEnd={() => setHoveredFeature(null)}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${feature.bgPattern} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent h-full`}>
                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredFeature === feature.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-xl transition-all duration-300`}
                  >
                    <feature.icon className="text-white text-3xl" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature Details */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredFeature === feature.id ? 1 : 0,
                      height: hoveredFeature === feature.id ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 pt-4 border-t border-gray-200">
                      {feature.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <FaCheckCircle className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-blue-600 font-semibold mt-4 group-hover:text-blue-700 transition-colors duration-300"
                  >
                    Learn more
                    <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See It in Action
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Interactive Demo
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our powerful features with this interactive demonstration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Try Our Features</h3>
              <div className="space-y-6">
                {[
                  { title: 'Real-time Analytics', desc: 'Monitor your business metrics in real-time' },
                  { title: 'Team Collaboration', desc: 'Work together seamlessly with your team' },
                  { title: 'Advanced Security', desc: 'Enterprise-grade security for your data' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: "#f0f9ff" }}
                    className="p-6 rounded-xl border border-gray-200 cursor-pointer transition-all duration-300"
                  >
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl"
              >
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-bold">Live Dashboard</h4>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-green-500 rounded-full"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-50 p-4 rounded-xl"
                      >
                        <div className="w-full h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-2" />
                        <p className="text-sm text-gray-600">Metric {i + 1}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10 px-12 py-16 text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Ready to Get Started?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-8 opacity-90"
              >
                Start your free trial today and see the difference
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center"
                >
                  <FaPlay className="mr-3" />
                  Start Free Trial
                </motion.button>
                <Link
                  to="/demo/saas-marketing/contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Schedule Demo
                  <FaArrowRight className="ml-3" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/projects/saas-marketing" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
              ← Back to Project Details
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;