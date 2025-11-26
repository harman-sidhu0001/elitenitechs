import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaRocket, FaCheckCircle, FaStar, FaArrowRight, FaPlay, FaShieldAlt, 
  FaChartLine, FaUsers, FaClock, FaHeadset,
  FaTwitter, FaFacebook, FaLinkedin, FaGithub
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

const SaaSMarketingDemo = () => {
  const [activeTab, setActiveTab] = useState('monthly');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO at TechStart',
      content: 'This platform transformed how we manage our entire business. The ROI was incredible.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO at DataFlow',
      content: 'Best SaaS solution we\'ve ever implemented. The support team is phenomenal.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Watson',
      role: 'Founder at CreativeHub',
      content: 'Saved us 40% in operational costs within the first month. Absolutely game-changing.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  const features = [
    {
      icon: FaRocket,
      title: 'Lightning Fast',
      description: 'Optimized performance with 99.9% uptime guarantee',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance certifications',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaChartLine,
      title: 'Advanced Analytics',
      description: 'Real-time insights and predictive analytics',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaUsers,
      title: 'Team Collaboration',
      description: 'Seamless teamwork with real-time synchronization',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FaClock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance from expert teams',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: FaHeadset,
      title: 'Customer Success',
      description: 'Dedicated success manager for enterprise clients',
      color: 'from-teal-500 to-green-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      monthly: 29,
      yearly: 290,
      features: [
        'Up to 10 users',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'API access'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      monthly: 79,
      yearly: 790,
      features: [
        'Up to 50 users',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Advanced security'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      monthly: 199,
      yearly: 1990,
      features: [
        'Unlimited users',
        'Unlimited storage',
        'Custom analytics',
        'Dedicated support',
        'White-label options',
        'Custom development'
      ],
      highlighted: false
    }
  ];

  const integrations = [
    { name: 'Slack', icon: '💬', category: 'Communication' },
    { name: 'Google Workspace', icon: '📊', category: 'Productivity' },
    { name: 'Salesforce', icon: '🎯', category: 'CRM' },
    { name: 'GitHub', icon: '🔧', category: 'Development' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Stripe', icon: '💳', category: 'Payments' },
    { name: 'Mailchimp', icon: '📧', category: 'Marketing' },
    { name: 'Zoom', icon: '📹', category: 'Communication' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${i * 20}%`,
              top: `${i * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FaRocket className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold">CloudFlow</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'Pricing', 'Integrations', 'Testimonials', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Start Free Trial
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="features" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FaRocket className="mr-2" />
                Trusted by 10,000+ companies worldwide
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                The Future of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {' '}Business Management
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your workflow with our all-in-one platform. Streamline operations, 
                boost productivity, and scale your business with enterprise-grade tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center"
                >
                  <FaPlay className="mr-2" />
                  Watch Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all flex items-center justify-center"
                >
                  Start Free Trial
                  <FaArrowRight className="ml-2" />
                </motion.button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">14-day free trial</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <FaChartLine className="text-6xl text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 font-semibold">Interactive Dashboard Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run your business efficiently, all in one platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 mb-8">Choose the perfect plan for your business</p>
            
            <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setActiveTab('monthly')}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === 'monthly' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActiveTab('yearly')}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === 'yearly' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-2xl p-8 ${
                  plan.highlighted 
                    ? 'ring-2 ring-blue-600 shadow-2xl scale-105' 
                    : 'shadow-lg'
                } transition-all`}
              >
                {plan.highlighted && (
                  <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${activeTab === 'monthly' ? plan.monthly : plan.yearly}
                  </span>
                  <span className="text-gray-600">
                    /{activeTab === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600">Connect with your favorite tools and services</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
              >
                <div className="text-4xl mb-3">{integration.icon}</div>
                <h4 className="font-semibold mb-1">{integration.name}</h4>
                <p className="text-sm text-gray-600">{integration.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Loved by Teams Worldwide</h2>
            <p className="text-xl text-gray-600">See what our customers have to say</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already using CloudFlow to scale their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <FaRocket className="text-white text-sm" />
                </div>
                <span className="text-xl font-bold">CloudFlow</span>
              </div>
              <p className="text-gray-400">
                The future of business management, today.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <Link to="/projects/saas-marketing" className="text-blue-400 hover:text-blue-300">
              ← Back to Project Details
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SaaSMarketingDemo;