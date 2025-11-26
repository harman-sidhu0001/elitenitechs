import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, FaCalendar, FaTag, FaClock, FaArrowRight,
  FaHeart, FaComment, FaShare, FaBookmark, FaTimes,
  FaTwitter, FaLinkedin, FaFacebook
} from 'react-icons/fa';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
  const [bookmarkedArticles, setBookmarkedArticles] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'design', name: 'Design', count: 8 },
    { id: 'development', name: 'Development', count: 6 },
    { id: 'marketing', name: 'Marketing', count: 4 },
    { id: 'business', name: 'Business', count: 3 },
    { id: 'trends', name: 'Trends', count: 3 }
  ];

  const articles = [
    {
      id: 1,
      title: 'The Future of Web Design: Trends to Watch in 2024',
      excerpt: 'Explore the cutting-edge design trends that will shape the digital landscape in 2024 and beyond.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
        role: 'Creative Director'
      },
      category: 'design',
      tags: ['Web Design', 'UI/UX', 'Trends'],
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800',
      publishedAt: '2024-01-15',
      readTime: '5 min read',
      likes: 234,
      comments: 45,
      shares: 89,
      featured: true,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 2,
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Learn the essential patterns and practices for building maintainable React applications at scale.',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
        role: 'Lead Developer'
      },
      category: 'development',
      tags: ['React', 'JavaScript', 'Architecture'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      publishedAt: '2024-01-12',
      readTime: '8 min read',
      likes: 189,
      comments: 32,
      shares: 67,
      featured: true,
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 3,
      title: 'Content Marketing Strategies That Actually Work',
      excerpt: 'Discover proven content marketing strategies that drive engagement and conversions for modern businesses.',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      author: {
        name: 'Emily Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461bd600d8?w=100',
        role: 'Marketing Manager'
      },
      category: 'marketing',
      tags: ['Marketing', 'Content', 'Strategy'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      publishedAt: '2024-01-10',
      readTime: '6 min read',
      likes: 156,
      comments: 28,
      shares: 45,
      featured: false,
      gradient: 'from-green-600 to-teal-600'
    },
    {
      id: 4,
      title: 'The Psychology of Color in Brand Design',
      excerpt: 'Understanding how color psychology influences consumer behavior and brand perception.',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: {
        name: 'Alex Thompson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
        role: 'Brand Designer'
      },
      category: 'design',
      tags: ['Branding', 'Color Theory', 'Psychology'],
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800',
      publishedAt: '2024-01-08',
      readTime: '7 min read',
      likes: 201,
      comments: 38,
      shares: 72,
      featured: false,
      gradient: 'from-orange-600 to-red-600'
    },
    {
      id: 5,
      title: 'Remote Team Management: Lessons from 2023',
      excerpt: 'Key insights and strategies for effectively managing distributed teams in the post-pandemic era.',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      author: {
        name: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
        role: 'CEO'
      },
      category: 'business',
      tags: ['Remote Work', 'Management', 'Leadership'],
      image: 'https://images.unsplash.com/photo-1515189031305-9a1ee543227b?w=800',
      publishedAt: '2024-01-05',
      readTime: '10 min read',
      likes: 178,
      comments: 41,
      shares: 93,
      featured: false,
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 6,
      title: 'AI in Design: Friend or Foe?',
      excerpt: 'Exploring the impact of artificial intelligence on the creative design process and industry.',
      content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.',
      author: {
        name: 'Lisa Wang',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
        role: 'UX Designer'
      },
      category: 'trends',
      tags: ['AI', 'Design', 'Technology'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      publishedAt: '2024-01-03',
      readTime: '9 min read',
      likes: 267,
      comments: 56,
      shares: 124,
      featured: true,
      gradient: 'from-pink-600 to-rose-600'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleBookmark = (articleId: number) => {
    setBookmarkedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
                Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Insights, trends, and stories from our creative team
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
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Category Filter */}
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
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id
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

      {/* Featured Articles */}
      {filteredArticles.filter(article => article.featured).length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredArticles.filter(article => article.featured).slice(0, 2).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(article.id);
                            }}
                            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                          >
                            <FaBookmark className={`text-sm ${bookmarkedArticles.includes(article.id) ? 'text-purple-600 fill-current' : 'text-gray-600'}`} />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <FaCalendar className="mr-1" />
                          {formatDate(article.publishedAt)}
                        </span>
                        <span className="flex items-center">
                          <FaClock className="mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={article.author.avatar} 
                            alt={article.author.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
                            <p className="text-xs text-gray-500">{article.author.role}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <FaHeart className="mr-1 text-red-500" />
                            {article.likes}
                          </span>
                          <span className="flex items-center">
                            <FaComment className="mr-1 text-blue-500" />
                            {article.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              All Articles
              <span className="text-purple-600 ml-2">({filteredArticles.length})</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />
                    
                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(article.id);
                          }}
                          className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                        >
                          <FaBookmark className={`text-xs ${bookmarkedArticles.includes(article.id) ? 'text-purple-600 fill-current' : 'text-gray-600'}`} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <FaCalendar className="mr-1" />
                        {formatDate(article.publishedAt)}
                      </span>
                      <span className="flex items-center">
                        <FaClock className="mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{article.excerpt}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          +{article.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img 
                          src={article.author.avatar} 
                          alt={article.author.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-900">{article.author.name}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span className="flex items-center">
                          <FaHeart className="mr-1 text-red-500" />
                          {article.likes}
                        </span>
                        <span className="flex items-center">
                          <FaComment className="mr-1 text-blue-500" />
                          {article.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          {filteredArticles.length > 6 && (
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
                Load More Articles
                <FaArrowRight className="inline ml-2" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest articles and insights delivered straight to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedArticle(null)}
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
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedArticle.gradient} opacity-30 rounded-t-3xl`} />
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-300"
                >
                  <FaTimes />
                </motion.button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={selectedArticle.author.avatar} 
                      alt={selectedArticle.author.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{selectedArticle.author.name}</h3>
                      <p className="text-sm text-gray-600">{selectedArticle.author.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <FaCalendar className="mr-1" />
                      {formatDate(selectedArticle.publishedAt)}
                    </span>
                    <span className="flex items-center">
                      <FaClock className="mr-1" />
                      {selectedArticle.readTime}
                    </span>
                  </div>
                </div>

                <h1 className="text-3xl font-bold mb-6 text-gray-900">{selectedArticle.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-8">
                      {selectedArticle.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      <FaTag className="inline mr-2" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-600 leading-relaxed mb-6">{selectedArticle.content}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between py-6 border-t border-gray-200">
                  <div className="flex items-center space-x-6">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors duration-300"
                    >
                      <FaHeart className="text-xl" />
                      <span>{selectedArticle.likes}</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-300"
                    >
                      <FaComment className="text-xl" />
                      <span>{selectedArticle.comments}</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors duration-300"
                    >
                      <FaShare className="text-xl" />
                      <span>{selectedArticle.shares}</span>
                    </motion.button>
                  </div>

                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleBookmark(selectedArticle.id)}
                      className={`p-3 rounded-full transition-colors duration-300 ${
                        bookmarkedArticles.includes(selectedArticle.id)
                          ? 'bg-purple-100 text-purple-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600'
                      }`}
                    >
                      <FaBookmark className={bookmarkedArticles.includes(selectedArticle.id) ? 'fill-current' : ''} />
                    </motion.button>
                    
                    <div className="flex space-x-2">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                      >
                        <FaTwitter />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
                      >
                        <FaLinkedin />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                      >
                        <FaFacebook />
                      </motion.a>
                    </div>
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

export default Blog;