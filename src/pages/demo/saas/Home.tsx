import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaRocket, FaPlay, FaArrowRight, FaCheckCircle, FaChartLine,
  FaShieldAlt, FaUsers, FaClock, FaHeadset, FaGithub, FaTwitter,
  FaLinkedin, FaFacebook, FaArrowDown, FaMagic
} from 'react-icons/fa';
import { useState, useEffect } from 'react';



const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: FaRocket,
      title: 'Lightning Fast',
      description: 'Optimized performance with 99.9% uptime guarantee',
      color: 'from-amber-500 to-yellow-500',
      delay: 0.1
    },
    {
      icon: FaShieldAlt,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance certifications',
      color: 'from-green-500 to-emerald-500',
      delay: 0.2
    },
    {
      icon: FaChartLine,
      title: 'Advanced Analytics',
      description: 'Real-time insights and predictive analytics',
      color: 'from-amber-500 to-yellow-500',
      delay: 0.3
    },
    {
      icon: FaUsers,
      title: 'Team Collaboration',
      description: 'Seamless teamwork with real-time synchronization',
      color: 'from-orange-500 to-red-500',
      delay: 0.4
    },
    {
      icon: FaClock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance from expert teams',
      color: 'from-green-500 to-emerald-500',
      delay: 0.5
    },
    {
      icon: FaHeadset,
      title: 'Customer Success',
      description: 'Dedicated success manager for enterprise clients',
      color: 'from-teal-500 to-green-500',
      delay: 0.6
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Companies Trust Us', color: 'text-blue-600' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-green-600' },
    { value: '4.9/5', label: 'Customer Rating', color: 'text-purple-600' },
    { value: '24/7', label: 'Expert Support', color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 text-gray-900 overflow-hidden">
      {/* Mouse Follow Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.3s ease-out'
        }}
      />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full opacity-20 blur-3xl"
            animate={{
              x: [0, 200, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 3,
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
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <FaMagic className="mr-2 text-yellow-500" />
                Trusted by 10,000+ companies worldwide
              </motion.div>
              
              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                The Future of
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-green-600 bg-300% animate-gradient"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Business Management
                </motion.span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              >
                Transform your workflow with our all-in-one platform. 
                <motion.span 
                  className="block text-blue-600 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Streamline operations • Boost productivity • Scale faster
                </motion.span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <FaPlay className="mr-3 group-hover:animate-pulse" />
                    Watch Live Demo
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-green-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: "#3b82f6",
                    backgroundColor: "#f0f9ff"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 flex items-center"
                >
                  Start Free Trial
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8"
              >
                {[
                  { icon: FaCheckCircle, text: 'No credit card required' },
                  { icon: FaCheckCircle, text: '14-day free trial' },
                  { icon: FaCheckCircle, text: 'Cancel anytime' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 text-gray-700 cursor-pointer"
                  >
                    <item.icon className="text-green-500 group-hover:text-green-600 transition-colors" />
                    <span className="group-hover:text-gray-900 transition-colors">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Main Card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 0 }}
                  className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl opacity-50" />
                  
                  {/* Dashboard Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-gray-900">Analytics Dashboard</h3>
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </motion.div>
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { label: 'Revenue', value: '$124.5K', change: '+12%', color: 'text-green-600' },
                        { label: 'Users', value: '8,429', change: '+23%', color: 'text-blue-600' },
                        { label: 'Conversion', value: '3.2%', change: '+5%', color: 'text-purple-600' },
                        { label: 'Avg. Order', value: '$89', change: '+8%', color: 'text-orange-600' }
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                        >
                          <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                          <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                          <p className={`text-sm font-semibold ${stat.color}`}>{stat.change}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Chart Area */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2 }}
                      className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 rounded-xl flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ height: [20, 60, 40, 80, 60] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 bg-blue-600 rounded-full"
                      />
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                    style={{
                      top: `${20 + i * 30}%`,
                      right: `${-10 + i * 15}%`,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-500 cursor-pointer"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <FaArrowDown className="animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Industry Leaders
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of companies already transforming their business with CloudFlow
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Modern Business
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to run your business efficiently
            </p>
            <Link
              to="/demo/saas-marketing/features"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group"
            >
              Explore all features
              <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <feature.icon className="text-white text-2xl" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative z-10 px-12 py-16 text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-8 opacity-90"
              >
                Join thousands of companies already using CloudFlow to scale their operations
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
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </motion.div>
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
                <li><Link to="/demo/saas-marketing/features" className="hover:text-white transition-colors duration-300">Features</Link></li>
                <li><Link to="/demo/saas-marketing/pricing" className="hover:text-white transition-colors duration-300">Pricing</Link></li>
                <li><Link to="/demo/saas-marketing/integrations" className="hover:text-white transition-colors duration-300">Integrations</Link></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/demo/saas-marketing/about" className="hover:text-white transition-colors duration-300">About</Link></li>
                <li><Link to="/demo/saas-marketing/blog" className="hover:text-white transition-colors duration-300">Blog</Link></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
                <li><Link to="/demo/saas-marketing/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <Link to="/projects/saas-marketing" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
              ← Back to Project Details
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;