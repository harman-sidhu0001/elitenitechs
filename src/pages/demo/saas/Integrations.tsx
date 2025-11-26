import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaSlack, FaGoogle, FaSalesforce, FaGithub, FaAws, FaStripe, FaMailchimp,
  FaArrowRight, FaCheckCircle, FaPlay
} from 'react-icons/fa';
import { useState } from 'react';


const Integrations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Integrations', icon: '🔗' },
    { id: 'communication', name: 'Communication', icon: '💬' },
    { id: 'productivity', name: 'Productivity', icon: '📊' },
    { id: 'development', name: 'Development', icon: '🔧' },
    { id: 'cloud', name: 'Cloud & Storage', icon: '☁️' },
    { id: 'payments', name: 'Payments', icon: '💳' },
    { id: 'marketing', name: 'Marketing', icon: '📧' }
  ];

  const integrations = [
    {
      id: 1,
      name: 'Slack',
      category: 'communication',
      description: 'Real-time team communication and collaboration',
      icon: FaSlack,
      logo: '💬',
      status: 'available',
      setupTime: '2 minutes',
      features: ['Channel sync', 'Message notifications', 'File sharing', 'Workflow automation']
    },
    {
      id: 2,
      name: 'Google Workspace',
      category: 'productivity',
      description: 'Complete productivity suite with docs, sheets, and more',
      icon: FaGoogle,
      logo: '📊',
      status: 'available',
      setupTime: '5 minutes',
      features: ['Drive sync', 'Calendar integration', 'Docs collaboration', 'Gmail integration']
    },
    {
      id: 3,
      name: 'Salesforce',
      category: 'development',
      description: 'World\'s #1 CRM platform for customer management',
      icon: FaSalesforce,
      logo: '🎯',
      status: 'available',
      setupTime: '10 minutes',
      features: ['Contact sync', 'Deal tracking', 'Lead management', 'Custom objects']
    },
    {
      id: 4,
      name: 'GitHub',
      category: 'development',
      description: 'Code hosting and collaboration platform for developers',
      icon: FaGithub,
      logo: '🔧',
      status: 'available',
      setupTime: '3 minutes',
      features: ['Repository sync', 'Issue tracking', 'Pull requests', 'CI/CD integration']
    },
    {
      id: 5,
      name: 'Amazon Web Services',
      category: 'cloud',
      description: 'Comprehensive cloud computing platform',
      icon: FaAws,
      logo: '☁️',
      status: 'available',
      setupTime: '15 minutes',
      features: ['S3 storage', 'EC2 instances', 'Lambda functions', 'CloudFront CDN']
    },
    {
      id: 6,
      name: 'Stripe',
      category: 'payments',
      description: 'Payment processing platform for internet commerce',
      icon: FaStripe,
      logo: '💳',
      status: 'available',
      setupTime: '5 minutes',
      features: ['Payment processing', 'Subscription billing', 'Fraud detection', 'Global payments']
    },
    {
      id: 7,
      name: 'Mailchimp',
      category: 'marketing',
      description: 'Email marketing and automation platform',
      icon: FaMailchimp,
      logo: '📧',
      status: 'available',
      setupTime: '3 minutes',
      features: ['Email campaigns', 'Automation workflows', 'Audience segmentation', 'A/B testing']
    },
    {
      id: 8,
      name: 'Zoom',
      category: 'communication',
      description: 'Video conferencing and online meeting platform',
      icon: FaSlack,
      logo: '📹',
      status: 'available',
      setupTime: '2 minutes',
      features: ['Meeting scheduling', 'Recording', 'Breakout rooms', 'Webinar support']
    }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-10 blur-3xl"
            animate={{
              x: [0, 200, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${i * 15}%`,
              top: `${i * 10}%`,
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
              Seamless
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-300% animate-gradient"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Integrations
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Connect CloudFlow with 1000+ tools your team already uses
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { value: '1000+', label: 'Integrations' },
                { value: '99.9%', label: 'Uptime' },
                { value: '2min', label: 'Avg Setup' },
                { value: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Integrations</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for integrations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <FaPlay className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-100 transition-colors duration-300">
                      {integration.logo}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors duration-300">
                        {integration.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                          {integration.status}
                        </span>
                        <span className="text-xs text-gray-500">
                          {integration.setupTime} setup
                        </span>
                      </div>
                    </div>
                  </div>
                  <integration.icon className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors duration-300 text-sm leading-relaxed">
                  {integration.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {integration.features.slice(0, 2).map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                      <span className="text-xs text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {integration.features.length > 2 && (
                    <span className="text-xs text-blue-600 font-medium">
                      +{integration.features.length - 2} more features
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  Connect
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Most Popular
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what teams are connecting most frequently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.slice(0, 6).map((integration, index) => (
              <motion.div
                key={integration.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    {integration.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{integration.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                        Popular
                      </span>
                      <span className="text-sm text-gray-500">
                        {integration.setupTime} setup
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{integration.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <FaPlay className="mr-3" />
                  Learn More
                </motion.button>
              </motion.div>
            ))}
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
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 bg-white/10 rounded-full"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                  }}
                  transition={{
                    duration: 15 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${i * 12}%`,
                    top: `${i * 10}%`,
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 px-12 py-16 text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Don't See Your Integration?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-8 opacity-90"
              >
                We're adding new integrations every week. Request yours!
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
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300"
                >
                  Request Integration
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View API Docs
                </motion.button>
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

export default Integrations;