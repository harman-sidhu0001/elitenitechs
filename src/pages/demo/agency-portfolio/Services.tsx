import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPalette, FaCode, FaMobile, FaCamera, FaLightbulb, FaChartLine,
  FaRocket, FaCheckCircle, FaArrowRight, FaClock, FaUsers,
  FaHandshake, FaSearch, FaBullhorn, FaPenNib, FaDesktop
} from 'react-icons/fa';

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [activePlan, setActivePlan] = useState('professional');

  const services = [
    {
      id: 1,
      title: 'Brand Design',
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
      icon: FaPalette,
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography', 'Brand Strategy'],
      price: 'Starting at $3,000',
      duration: '2-4 weeks',
      gradient: 'from-purple-600 to-pink-600',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600'
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Custom website development using cutting-edge technologies and best practices.',
      icon: FaCode,
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'CMS Integration', 'E-commerce'],
      price: 'Starting at $5,000',
      duration: '4-8 weeks',
      gradient: 'from-blue-600 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600'
    },
    {
      id: 3,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile application development for iOS and Android.',
      icon: FaMobile,
      features: ['iOS Development', 'Android Development', 'React Native', 'UI/UX Design', 'App Store Optimization'],
      price: 'Starting at $8,000',
      duration: '8-12 weeks',
      gradient: 'from-green-600 to-teal-600',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600'
    },
    {
      id: 4,
      title: 'Photography',
      description: 'Professional photography services for products, events, and commercial projects.',
      icon: FaCamera,
      features: ['Product Photography', 'Event Coverage', 'Commercial Shoots', 'Photo Editing', 'Stock Photography'],
      price: 'Starting at $500/day',
      duration: '1-3 days',
      gradient: 'from-orange-600 to-red-600',
      image: 'https://images.unsplash.com/photo-1542038784456-1b839f078c77?w=600'
    },
    {
      id: 5,
      title: 'Creative Strategy',
      description: 'Strategic planning and creative direction to help your brand stand out.',
      icon: FaLightbulb,
      features: ['Market Research', 'Competitive Analysis', 'Creative Direction', 'Content Strategy', 'Brand Positioning'],
      price: 'Starting at $2,000',
      duration: '2-3 weeks',
      gradient: 'from-indigo-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600'
    },
    {
      id: 6,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing services to grow your online presence.',
      icon: FaChartLine,
      features: ['SEO Services', 'Social Media Marketing', 'PPC Campaigns', 'Email Marketing', 'Analytics'],
      price: 'Starting at $1,500/month',
      duration: 'Ongoing',
      gradient: 'from-pink-600 to-rose-600',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600'
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '5 Projects per month',
        'Basic Design Services',
        'Email Support',
        '1 Revision per project',
        'Basic Analytics'
      ],
      excluded: ['Priority Support', 'Custom Strategy', 'Advanced Analytics', 'Dedicated Account Manager'],
      gradient: 'from-gray-600 to-gray-700',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '15 Projects per month',
        'All Design Services',
        'Priority Support',
        '3 Revisions per project',
        'Advanced Analytics',
        'Custom Strategy',
        'Monthly Reports'
      ],
      excluded: ['Dedicated Account Manager'],
      gradient: 'from-purple-600 to-pink-600',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited Projects',
        'All Services Included',
        '24/7 Priority Support',
        'Unlimited Revisions',
        'Custom Analytics Dashboard',
        'Custom Strategy & Planning',
        'Weekly Reports',
        'Dedicated Account Manager',
        'On-site Support Available'
      ],
      excluded: [],
      gradient: 'from-blue-600 to-cyan-600',
      popular: false
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements.',
      icon: FaSearch,
      color: 'from-purple-600 to-pink-600'
    },
    {
      step: 2,
      title: 'Strategy',
      description: 'Our team develops a comprehensive strategy tailored to your specific needs and objectives.',
      icon: FaLightbulb,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      step: 3,
      title: 'Design',
      description: 'Creative concepts and designs are developed, refined, and presented for your feedback.',
      icon: FaPenNib,
      color: 'from-green-600 to-teal-600'
    },
    {
      step: 4,
      title: 'Development',
      description: 'Approved designs are brought to life using cutting-edge technologies and best practices.',
      icon: FaCode,
      color: 'from-orange-600 to-red-600'
    },
    {
      step: 5,
      title: 'Launch',
      description: 'Your project goes live with full support, monitoring, and optimization.',
      icon: FaRocket,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      step: 6,
      title: 'Support',
      description: 'Ongoing support and maintenance to ensure your continued success.',
      icon: FaHandshake,
      color: 'from-pink-600 to-rose-600'
    }
  ];

  const additionalServices = [
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and organic traffic',
      icon: FaSearch,
      price: 'From $500/month'
    },
    {
      title: 'Content Creation',
      description: 'Engaging content that resonates with your audience',
      icon: FaPenNib,
      price: 'From $100/article'
    },
    {
      title: 'Social Media Management',
      description: 'Build and manage your social media presence',
      icon: FaBullhorn,
      price: 'From $750/month'
    },
    {
      title: 'UI/UX Consulting',
      description: 'Expert advice on improving user experience',
      icon: FaDesktop,
      price: 'From $150/hour'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive creative solutions to help your business thrive in the digital landscape
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Offer
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of creative services designed to elevate your brand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <service.icon className="text-purple-600 text-xl" />
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-purple-600 font-semibold">{service.price}</span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <FaClock className="mr-1" />
                        {service.duration}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full">
                  <div className="flex items-center mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mr-4`}
                    >
                      <step.icon className="text-white text-2xl" />
                    </motion.div>
                    <div>
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        {String(step.step).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-purple-600"
                    >
                      <FaArrowRight />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pricing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Plans
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to suit businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pricingPlans.indexOf(plan) * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </motion.div>
                )}
                
                <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  plan.popular ? 'border-purple-500' : 'border-gray-200'
                } h-full`}>
                  <div className={`p-8 text-center ${plan.popular ? 'bg-gradient-to-br from-purple-50 to-pink-50 rounded-t-2xl' : ''}`}>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        {plan.price}
                      </span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  
                  <div className="p-8">
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {plan.excluded.map((feature, index) => (
                        <div key={index} className="flex items-center opacity-50">
                          <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-3 flex-shrink-0" />
                          <span className="text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActivePlan(plan.id)}
                      className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {activePlan === plan.id ? 'Current Plan' : 'Get Started'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Additional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementary services to enhance your digital presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.2)"
                }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4"
                >
                  <service.icon className="text-white text-xl" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="text-purple-600 font-semibold text-sm">{service.price}</div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600" />
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
                Ready to Get Started?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-8 opacity-90"
              >
                Let's discuss how our services can help transform your business
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
                  className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300"
                >
                  Schedule Consultation
                  <FaArrowRight className="inline ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Portfolio
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedService.gradient} opacity-30 rounded-t-3xl`} />
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-300"
                >
                  ×
                </motion.button>
              </div>

              <div className="p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${selectedService.gradient} rounded-2xl flex items-center justify-center mr-4`}
                  >
                    <selectedService.icon className="text-white text-2xl" />
                  </motion.div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                    <p className="text-purple-600 font-semibold">{selectedService.price}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-8">{selectedService.description}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2 text-purple-600" />
                    <span>Duration: {selectedService.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="mr-2 text-purple-600" />
                    <span>Dedicated Team</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Get Started with {selectedService.title}
                  <FaArrowRight className="inline ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;