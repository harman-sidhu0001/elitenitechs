import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaTimes, FaArrowRight, FaSearch, FaHeart, FaEye,
  FaExternalLinkAlt, FaCalendar, FaUser, FaTag
} from 'react-icons/fa';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects', count: 24 },
    { id: 'branding', name: 'Branding', count: 8 },
    { id: 'web-design', name: 'Web Design', count: 6 },
    { id: 'mobile', name: 'Mobile Apps', count: 4 },
    { id: 'marketing', name: 'Marketing', count: 3 },
    { id: 'photography', name: 'Photography', count: 3 }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechStart Rebrand',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400',
      description: 'Complete brand identity redesign for innovative tech startup',
      client: 'TechStart Inc.',
      date: '2024',
      tags: ['Branding', 'Logo Design', 'Guidelines'],
      likes: 234,
      views: 1520,
      featured: true,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 2,
      title: 'EcoMobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400',
      description: 'Sustainable living app with intuitive UI/UX design',
      client: 'EcoTech Solutions',
      date: '2024',
      tags: ['Mobile', 'UI/UX', 'Sustainability'],
      likes: 189,
      views: 980,
      featured: true,
      gradient: 'from-green-600 to-teal-600'
    },
    {
      id: 3,
      title: 'Fashion Forward',
      category: 'web-design',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
      description: 'E-commerce platform for luxury fashion brand',
      client: 'Fashion Forward',
      date: '2023',
      tags: ['E-commerce', 'Web Design', 'Fashion'],
      likes: 312,
      views: 2100,
      featured: false,
      gradient: 'from-pink-600 to-rose-600'
    },
    {
      id: 4,
      title: 'Foodie Campaign',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      description: 'Digital marketing campaign for food delivery app',
      client: 'QuickBite',
      date: '2023',
      tags: ['Marketing', 'Social Media', 'Campaign'],
      likes: 156,
      views: 890,
      featured: false,
      gradient: 'from-orange-600 to-red-600'
    },
    {
      id: 5,
      title: 'Architecture Portfolio',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
      description: 'Professional architectural photography series',
      client: 'Studio Architects',
      date: '2023',
      tags: ['Photography', 'Architecture', 'Professional'],
      likes: 278,
      views: 1650,
      featured: true,
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      id: 6,
      title: 'HealthHub Platform',
      category: 'web-design',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
      description: 'Healthcare management platform with modern design',
      client: 'HealthHub Medical',
      date: '2024',
      tags: ['Healthcare', 'Web Platform', 'UI/UX'],
      likes: 201,
      views: 1200,
      featured: false,
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      id: 7,
      title: 'Fitness Tracker',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      description: 'Personal fitness tracking app with social features',
      client: 'FitLife Studios',
      date: '2024',
      tags: ['Mobile', 'Fitness', 'Social'],
      likes: 167,
      views: 980,
      featured: false,
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      id: 8,
      title: 'Coffee Brand Identity',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
      description: 'Artisanal coffee shop branding and packaging design',
      client: 'Artisan Coffee Co.',
      date: '2023',
      tags: ['Branding', 'Packaging', 'Coffee'],
      likes: 245,
      views: 1420,
      featured: true,
      gradient: 'from-amber-600 to-orange-600'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

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
                Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our creative journey through innovative design solutions and successful collaborations
            </p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto relative"
            >
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeFilter === category.id
                    ? 'bg-white/20'
                    : 'bg-gray-100'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    layout: { duration: 0.3 }
                  }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />
                      
                      {/* Quick Actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex space-x-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors duration-300"
                          >
                            <FaEye />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors duration-300"
                          >
                            <FaHeart />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors duration-300"
                          >
                            <FaExternalLinkAlt />
                          </motion.button>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          Featured
                        </motion.div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <FaHeart className="mr-1 text-red-500" />
                            {project.likes}
                          </span>
                          <span className="flex items-center">
                            <FaEye className="mr-1 text-blue-500" />
                            {project.views}
                          </span>
                        </div>
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More */}
          {filteredProjects.length > 8 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
              >
                Load More Projects
                <FaArrowRight className="inline ml-2" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
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
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-300"
                >
                  <FaTimes />
                </motion.button>

                {/* Project Image */}
                <div className="relative h-96 overflow-hidden rounded-t-3xl">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} opacity-30`} />
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2 text-gray-900">{selectedProject.title}</h2>
                      <p className="text-lg text-gray-600">{selectedProject.description}</p>
                    </div>
                    {selectedProject.featured && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Featured Project
                      </div>
                    )}
                  </div>

                  {/* Project Meta */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <FaUser className="text-purple-600" />
                      <div>
                        <p className="text-sm text-gray-500">Client</p>
                        <p className="font-semibold">{selectedProject.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaCalendar className="text-purple-600" />
                      <div>
                        <p className="text-sm text-gray-500">Year</p>
                        <p className="font-semibold">{selectedProject.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaTag className="text-purple-600" />
                      <div>
                        <p className="text-sm text-gray-500">Category</p>
                        <p className="font-semibold capitalize">{selectedProject.category.replace('-', ' ')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to={`/demo/agency-portfolio/project/${selectedProject.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
                      >
                        View Full Case Study
                        <FaArrowRight className="inline ml-2" />
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
                    >
                      Live Preview
                      <FaExternalLinkAlt className="inline ml-2" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;