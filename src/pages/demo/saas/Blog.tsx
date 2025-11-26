import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaSearch,
  FaBookmark, FaShare, FaHeart, FaComment, FaEye,
  FaFire, FaChartLine
} from 'react-icons/fa';
import { useState } from 'react';


const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'All Posts', color: 'from-gray-500 to-gray-600' },
    { id: 'product', name: 'Product', color: 'from-blue-500 to-blue-600' },
    { id: 'engineering', name: 'Engineering', color: 'from-green-500 to-green-600' },
    { id: 'design', name: 'Design', color: 'from-purple-500 to-purple-600' },
    { id: 'business', name: 'Business', color: 'from-orange-500 to-orange-600' },
    { id: 'culture', name: 'Culture', color: 'from-pink-500 to-pink-600' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business Management',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way businesses operate and make decisions in 2024 and beyond.',
      author: 'Sarah Chen',
      date: '2024-11-01',
      readTime: '8 min read',
      category: 'product',
      image: '/api/placeholder/600/400',
      featured: true,
      tags: ['AI', 'Innovation', 'Future'],
      stats: { views: 15234, likes: 892, comments: 67 }
    },
    {
      id: 2,
      title: 'Scaling Your SaaS: Lessons from 10K Customers',
      excerpt: 'Key insights and strategies we learned while growing from startup to serving over 10,000 customers worldwide.',
      author: 'Marcus Rodriguez',
      date: '2024-10-28',
      readTime: '12 min read',
      category: 'business',
      image: '/api/placeholder/600/400',
      featured: true,
      tags: ['Growth', 'SaaS', 'Scale'],
      stats: { views: 12456, likes: 723, comments: 45 }
    },
    {
      id: 3,
      title: 'Building Resilient Systems: Our Architecture Journey',
      excerpt: 'Deep dive into the technical decisions and architectural patterns that power our 99.9% uptime guarantee.',
      author: 'David Kim',
      date: '2024-10-25',
      readTime: '15 min read',
      category: 'engineering',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Architecture', 'Performance', 'Reliability'],
      stats: { views: 8934, likes: 445, comments: 23 }
    },
    {
      id: 4,
      title: 'Design Systems That Scale: A Practical Guide',
      excerpt: 'How we built and maintain our design system to ensure consistency across all our products and platforms.',
      author: 'Emily Johnson',
      date: '2024-10-22',
      readTime: '10 min read',
      category: 'design',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Design', 'UI/UX', 'Systems'],
      stats: { views: 9876, likes: 567, comments: 34 }
    },
    {
      id: 5,
      title: 'Remote-First Culture: Building Teams That Thrive',
      excerpt: 'Our journey to becoming a remote-first company and the lessons learned about building culture in distributed teams.',
      author: 'Jessica Martinez',
      date: '2024-10-20',
      readTime: '7 min read',
      category: 'culture',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Remote', 'Culture', 'Teams'],
      stats: { views: 7654, likes: 389, comments: 28 }
    },
    {
      id: 6,
      title: 'Security First: Protecting Customer Data at Scale',
      excerpt: 'Comprehensive overview of our security practices and how we ensure data protection for enterprise clients.',
      author: 'Robert Chen',
      date: '2024-10-18',
      readTime: '11 min read',
      category: 'engineering',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Security', 'Compliance', 'Enterprise'],
      stats: { views: 11234, likes: 623, comments: 41 }
    }
  ];

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'popular') return b.stats.views - a.stats.views;
      if (sortBy === 'trending') return b.stats.likes - a.stats.likes;
      return 0;
    });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900">


      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"
              animate={{
                x: [0, 150, 0],
                y: [0, -75, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${i * 12}%`,
                top: `${i * 12}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl mb-8"
            >
              <FaFire className="text-white text-3xl" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              The CloudFlow
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
                Blog
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Insights, stories, and innovations from the team building the future of business management.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <motion.input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-14 bg-white border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none shadow-lg hover:shadow-xl transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
                <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '150+', label: 'Articles', icon: FaBookmark, color: 'from-blue-500 to-cyan-500' },
              { value: '50K+', label: 'Readers', icon: FaEye, color: 'from-purple-500 to-pink-500' },
              { value: '25+', label: 'Authors', icon: FaUser, color: 'from-green-500 to-teal-500' },
              { value: '10K+', label: 'Shares', icon: FaShare, color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                >
                  <stat.icon className="text-white" />
                </motion.div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } ${category.color}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium">Sort by:</span>
              {['latest', 'popular', 'trending'].map((sort) => (
                <motion.button
                  key={sort}
                  onClick={() => setSortBy(sort)}
                  className={`px-4 py-2 rounded-lg font-medium capitalize transition-all duration-300 ${
                    sortBy === sort
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {sort}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && !searchTerm && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <FaChartLine className="inline-block mr-3 text-orange-500" />
                Featured Stories
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <div className="relative h-64 bg-gradient-to-br from-purple-400 to-pink-400">
                    <motion.div
                      className="absolute inset-0 bg-black/20"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaEye />
                        {post.stats.views.toLocaleString()}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-medium">{post.author}</span>
                      </div>
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-blue-600 font-medium"
                      >
                        Read More
                        <FaArrowRight />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {searchTerm ? `Search Results (${filteredPosts.length})` : 'Latest Articles'}
            </h2>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-400">
                    <motion.div
                      className="absolute inset-0 bg-black/10"
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-3 right-3">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors duration-300"
                      >
                        <FaBookmark />
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-600">
                      <span className={`px-2 py-1 rounded-full text-white font-medium ${
                        categories.find(c => c.id === post.category)?.color || 'from-gray-500 to-gray-600'
                      }`}>
                        {categories.find(c => c.id === post.category)?.name || post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                        >
                          #{tag}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-sm font-medium">{post.author}</div>
                          <div className="text-xs text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-gray-500">
                        <motion.span
                          whileHover={{ scale: 1.2, color: '#ef4444' }}
                          className="flex items-center gap-1 text-sm cursor-pointer"
                        >
                          <FaHeart />
                          {post.stats.likes}
                        </motion.span>
                        <motion.span
                          whileHover={{ scale: 1.2, color: '#3b82f6' }}
                          className="flex items-center gap-1 text-sm cursor-pointer"
                        >
                          <FaComment />
                          {post.stats.comments}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <motion.button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest insights and stories delivered straight to your inbox
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/demo/saas-marketing" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-4 inline-block">
              ← Back to Home
            </Link>
            <p className="text-gray-400">
              © 2024 CloudFlow. Insights and innovations from our team.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;