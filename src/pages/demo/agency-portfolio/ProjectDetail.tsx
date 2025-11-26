import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaArrowRight, FaExpand, FaCompress, FaHeart, 
  FaShare, FaUser, FaTag, FaClock,
  FaCheckCircle, FaRocket, FaAward, FaQuoteLeft,
  FaDownload
} from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock project data - in real app, this would come from API
  const project = {
    id: parseInt(id || '1'),
    title: 'TechStart Rebrand',
    client: 'TechStart Inc.',
    category: 'Branding',
    year: '2024',
    duration: '3 months',
    budget: '$25,000',
    team: ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez'],
    tags: ['Branding', 'Logo Design', 'Guidelines', 'UI/UX'],
    images: [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200'
    ],
    overview: {
      challenge: 'TechStart, a rapidly growing tech startup, needed a complete brand overhaul to reflect their innovative spirit and market position. Their existing brand identity was inconsistent and failed to communicate their cutting-edge technology solutions.',
      solution: 'We developed a comprehensive brand strategy that included a modern logo system, vibrant color palette, custom typography, and detailed brand guidelines. The new identity balances professionalism with innovation, creating a strong foundation for all marketing materials.',
      results: 'The rebrand resulted in a 45% increase in brand recognition, 30% improvement in website engagement, and successful Series B funding round. The client praised our ability to capture their vision and translate it into a cohesive brand experience.'
    },
    process: [
      {
        phase: 'Discovery',
        description: 'Conducted stakeholder interviews, market research, and competitive analysis to understand brand positioning.',
        duration: '2 weeks',
        deliverables: ['Research Report', 'Brand Audit', 'Competitive Analysis']
      },
      {
        phase: 'Strategy',
        description: 'Developed brand architecture, messaging framework, and visual direction based on research insights.',
        duration: '1 week',
        deliverables: ['Brand Strategy', 'Messaging Framework', 'Visual Direction']
      },
      {
        phase: 'Design',
        description: 'Created logo variations, color systems, typography, and brand applications across multiple touchpoints.',
        duration: '6 weeks',
        deliverables: ['Logo System', 'Color Palette', 'Typography', 'Brand Guidelines']
      },
      {
        phase: 'Implementation',
        description: 'Rolled out new brand across website, marketing materials, and internal communications.',
        duration: '3 weeks',
        deliverables: ['Website Redesign', 'Marketing Materials', 'Launch Campaign']
      }
    ],
    testimonials: [
      {
        name: 'John Smith',
        role: 'CEO, TechStart',
        content: 'Creative Studio transformed our brand completely. Their strategic approach and creative execution exceeded all our expectations. The new identity perfectly captures who we are and where we\'re going.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
      },
      {
        name: 'Sarah Williams',
        role: 'Marketing Director',
        content: 'Working with Creative Studio was a game-changer. They understood our vision immediately and delivered a brand that resonates with our target audience.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100'
      }
    ],
    metrics: [
      { label: 'Brand Recognition', value: '+45%', description: 'Increase in brand awareness' },
      { label: 'Website Engagement', value: '+30%', description: 'Improvement in user engagement' },
      { label: 'Lead Generation', value: '+25%', description: 'Increase in qualified leads' },
      { label: 'Client Satisfaction', value: '9.5/10', description: 'Client satisfaction score' }
    ],
    technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'After Effects', 'Cinema 4D'],
    nextProject: {
      id: 2,
      title: 'EcoMobile App',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600'
    },
    prevProject: {
      id: 3,
      title: 'Fashion Forward',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600'
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-24 left-4 sm:left-8 z-40"
      >
        <Link
          to="/demo/agency-portfolio/portfolio"
          className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <FaArrowLeft className="text-purple-600 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium text-gray-700">Back to Portfolio</span>
        </Link>
      </motion.div>

      {/* Hero Section with Image Gallery */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row items-start justify-between mb-8">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-gray-500">{project.year}</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                  {project.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <FaUser className="mr-2 text-purple-600" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2 text-purple-600" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FaTag className="mr-2 text-purple-600" />
                    <span>{project.budget}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-6 lg:mt-0">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaHeart className="text-red-500" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaShare className="text-blue-500" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaDownload className="text-green-500" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-[60vh] object-cover"
              />
              
              {/* Image Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Navigation Arrows */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaArrowLeft className="text-gray-700" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaArrowRight className="text-gray-700" />
              </motion.button>
              
              {/* Fullscreen Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={openFullscreen}
                className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaExpand className="text-gray-700" />
              </motion.button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex space-x-2 mt-4 overflow-x-auto">
              {project.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    currentImageIndex === index
                      ? 'border-purple-600 shadow-lg'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
            {['overview', 'process', 'results', 'testimonials'].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium capitalize transition-all duration-300 border-b-2 ${
                  activeTab === tab
                    ? 'text-purple-600 border-purple-600'
                    : 'text-gray-600 border-transparent hover:text-gray-900'
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">The Challenge</h3>
                    <p className="text-gray-600 leading-relaxed">{project.overview.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Solution</h3>
                    <p className="text-gray-600 leading-relaxed">{project.overview.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">The Results</h3>
                    <p className="text-gray-600 leading-relaxed">{project.overview.results}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Client</span>
                        <span className="font-medium">{project.client}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-medium">{project.duration}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Budget</span>
                        <span className="font-medium">{project.budget}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Team</span>
                        <span className="font-medium">{project.team.length} members</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Process Tab */}
            {activeTab === 'process' && (
              <motion.div
                key="process"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {project.process.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-6"
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl"
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                    
                    <div className="flex-1 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                        <span className="text-sm text-purple-600 font-medium">{phase.duration}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((deliverable, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <FaCheckCircle className="text-green-500 text-sm" />
                            <span className="text-sm text-gray-700">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Results Tab */}
            {activeTab === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {project.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center"
                    >
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                        {metric.value}
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
                      <div className="text-sm text-gray-600">{metric.description}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center">
                  <FaAward className="text-5xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Award-Winning Project</h3>
                  <p className="text-lg opacity-90">
                    This project received the 2024 Digital Design Excellence Award for Outstanding Brand Transformation
                  </p>
                </div>
              </motion.div>
            )}

            {/* Testimonials Tab */}
            {activeTab === 'testimonials' && (
              <motion.div
                key="testimonials"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {project.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8"
                  >
                    <FaQuoteLeft className="text-3xl text-purple-600 mb-4" />
                    <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Related Projects
            </h2>
            <p className="text-xl text-gray-600">
              Explore more of our work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous Project */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
            >
              <Link to={`/demo/agency-portfolio/project/${project.prevProject.id}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.prevProject.image}
                      alt={project.prevProject.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.prevProject.title}</h3>
                        <p className="text-purple-600 font-medium">Previous Project</p>
                      </div>
                      <FaArrowLeft className="text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Next Project */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
            >
              <Link to={`/demo/agency-portfolio/project/${project.nextProject.id}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.nextProject.image}
                      alt={project.nextProject.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.nextProject.title}</h3>
                        <p className="text-purple-600 font-medium">Next Project</p>
                      </div>
                      <FaArrowRight className="text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
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
                Ready to Start Your Project?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-8 opacity-90"
              >
                Let's create something amazing together
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
                    Get Started
                    <FaRocket className="inline ml-2" />
                  </motion.button>
                </Link>
                <Link to="/demo/agency-portfolio/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    View More Work
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={closeFullscreen}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeFullscreen}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
            >
              <FaCompress />
            </motion.button>
            
            <img
              src={project.images[currentImageIndex]}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
              >
                <FaArrowLeft />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
              >
                <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;