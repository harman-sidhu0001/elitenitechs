import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  FaArrowRight, FaPlay, FaStar, FaQuoteLeft, FaAward, FaRocket,
  FaPalette, FaCode, FaMobile, FaCamera, FaLightbulb, FaChartLine,
  FaInstagram, FaTwitter, FaDribbble, FaArrowDown
} from 'react-icons/fa';

const Home = () => {

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);





  const featuredProjects = [
    {
      id: 1,
      title: 'Brand Evolution',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600',
      description: 'Complete brand redesign for tech startup',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 2,
      title: 'Mobile Experience',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600',
      description: 'Innovative mobile app design',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 3,
      title: 'Digital Campaign',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
      description: 'Award-winning digital marketing campaign',
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  const services = [
    { icon: FaPalette, title: 'Brand Design', description: 'Creating memorable brand identities' },
    { icon: FaCode, title: 'Web Development', description: 'Building cutting-edge digital experiences' },
    { icon: FaMobile, title: 'Mobile Apps', description: 'Designing intuitive mobile solutions' },
    { icon: FaCamera, title: 'Photography', description: 'Capturing stunning visual stories' },
    { icon: FaLightbulb, title: 'Creative Strategy', description: 'Developing innovative marketing strategies' },
    { icon: FaChartLine, title: 'Growth Marketing', description: 'Driving measurable business results' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Creative Studio transformed our brand identity completely. Their attention to detail and creative vision exceeded all expectations.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, InnovateCo',
      content: 'Working with Creative Studio was a game-changer for our business. They delivered beyond our wildest dreams.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthLab',
      content: 'The team\'s creativity and professionalism are unmatched. They brought our vision to life beautifully.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const stats = [
    { value: '150+', label: 'Projects Completed', icon: FaRocket },
    { value: '98%', label: 'Client Satisfaction', icon: FaStar },
    { value: '25+', label: 'Team Members', icon: FaAward },
    { value: '12', label: 'Industry Awards', icon: FaChartLine }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
        <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-purple-200"
              >
                <FaAward className="mr-2 text-yellow-500" />
                Award-Winning Creative Agency
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                We Create
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-green-600 bg-300% animate-gradient"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Digital Magic
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              >
                Transform your brand with stunning design and innovative digital experiences that captivate and convert.
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
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <FaPlay className="mr-3 group-hover:animate-pulse" />
                    View Our Work
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-green-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                <Link to="/demo/agency-portfolio/contact">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "#8b5cf6",
                      backgroundColor: "#faf5ff"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-300 hover:border-purple-500 transition-all duration-300 flex items-center"
                  >
                    Start Your Project
                    <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-center justify-center lg:justify-start space-x-6"
              >
                {[
                  { icon: FaInstagram, count: '50K+' },
                  { icon: FaDribbble, count: '25K+' },
                  { icon: FaTwitter, count: '15K+' }
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center space-x-2 text-gray-600 cursor-pointer"
                  >
                    <social.icon className="text-purple-600" />
                    <span className="font-semibold">{social.count}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                animate={{ rotateY: [0, 10, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative preserve-3d"
              >
                {/* Main Visual */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 0 }}
                  className="relative bg-gradient-to-br from-purple-100 via-white to-blue-100 rounded-3xl shadow-2xl p-8 border border-purple-100"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {featuredProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + index * 0.2 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative overflow-hidden rounded-xl cursor-pointer group"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10`} />
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                          <FaArrowRight className="text-white text-2xl transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Floating Elements */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3
                      }}
                      style={{
                        top: `${10 + i * 20}%`,
                        right: `${-5 + i * 10}%`,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

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
            onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2">Explore our work</span>
            <FaArrowDown className="animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest creative work and digital innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10`} />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="mb-4">{project.description}</p>
                      <Link 
                        to="/demo/agency-portfolio/portfolio"
                        className="inline-flex items-center bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                      >
                        View Case Study
                        <FaArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-purple-600">{project.category}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
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
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive creative solutions to elevate your brand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-purple-100"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6"
                >
                  <service.icon className="text-white text-2xl" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
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
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="text-white text-2xl" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Testimonials
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
              >
                <FaQuoteLeft className="text-4xl text-purple-600 mb-6" />
                <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                  {testimonials[activeTestimonial].content}
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonials[activeTestimonial].avatar} 
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-8' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
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
                Ready to Create Something Amazing?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-8 opacity-90"
              >
                Let's collaborate and bring your vision to life with our creative expertise
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/demo/agency-portfolio/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300"
                  >
                    Start Your Project
                  </motion.button>
                </Link>
                <Link to="/demo/agency-portfolio/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    View Portfolio
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;