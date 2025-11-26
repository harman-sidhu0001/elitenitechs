import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRocket, FaUsers, FaLightbulb, FaHeart, FaGlobe,
  FaQuoteLeft, FaTwitter,
  FaLinkedin, FaGithub
} from 'react-icons/fa';
import { useState } from 'react';


const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      image: '/api/placeholder/300/300',
      bio: 'Former VP of Engineering at TechCorp. 15+ years in SaaS leadership.',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder', 
      image: '/api/placeholder/300/300',
      bio: 'Ex-Google senior engineer. Expert in cloud architecture and AI.',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Design',
      image: '/api/placeholder/300/300',
      bio: 'Award-winning designer from Apple. Passionate about user experience.',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      image: '/api/placeholder/300/300',
      bio: 'Scaled engineering teams at startups from 10 to 200+ engineers.',
      social: { twitter: '#', linkedin: '#', github: '#' }
    }
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation First',
      description: 'We push boundaries and challenge the status quo to create breakthrough solutions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaUsers,
      title: 'Customer Obsessed',
      description: 'Our customers\' success is our success. We listen, learn, and deliver.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: FaHeart,
      title: 'Passion Driven',
      description: 'We love what we do and pour our hearts into creating exceptional products.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FaGlobe,
      title: 'Global Impact',
      description: 'We build solutions that empower businesses worldwide to reach their potential.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize business management.',
      milestone: true
    },
    {
      year: '2021',
      title: 'First 1000 Customers',
      description: 'Rapid growth validated our product-market fit.',
      milestone: false
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: 'Raised $25M to scale our platform and team.',
      milestone: true
    },
    {
      year: '2023',
      title: '10,000+ Customers',
      description: 'Reached major milestone with global customer base.',
      milestone: false
    },
    {
      year: '2024',
      title: 'Product 2.0 Launch',
      description: 'Introduced AI-powered features and enhanced capabilities.',
      milestone: true
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'CEO, TechStart Inc.',
      content: 'CloudFlow transformed how we manage our entire operation. It\'s been a game-changer for our productivity.',
      avatar: '/api/placeholder/100/100'
    },
    {
      name: 'Jessica Martinez',
      role: 'Operations Director, ScaleCorp',
      content: 'The best investment we\'ve made. ROI was visible within the first month of implementation.',
      avatar: '/api/placeholder/100/100'
    },
    {
      name: 'Robert Chen',
      role: 'CTO, InnovateLabs',
      content: 'Finally, a platform that actually understands what modern businesses need. Highly recommended!',
      avatar: '/api/placeholder/100/100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900">


      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-2xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-8"
            >
              <FaRocket className="text-white text-3xl" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                CloudFlow
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              We're on a mission to empower businesses worldwide with intelligent, 
              intuitive, and scalable management solutions that drive growth and innovation.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {[
              { value: '2020', label: 'Founded', color: 'from-blue-500 to-cyan-500' },
              { value: '50+', label: 'Team Members', color: 'from-purple-500 to-pink-500' },
              { value: '10K+', label: 'Customers', color: 'from-green-500 to-teal-500' },
              { value: '99.9%', label: 'Uptime', color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <motion.div
                  className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission/Vision Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Purpose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                & Vision
              </span>
            </h2>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-2xl">
              {['mission', 'vision', 'values'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-xl font-semibold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {activeTab === 'mission' && (
              <div className="space-y-6">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-3xl"
                >
                  <h3 className="text-3xl font-bold mb-6 text-blue-900">Our Mission</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    To democratize business management by providing powerful, intuitive, 
                    and affordable tools that enable companies of all sizes to compete 
                    and thrive in the digital economy.
                  </p>
                </motion.div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="space-y-6">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-12 rounded-3xl"
                >
                  <h3 className="text-3xl font-bold mb-6 text-purple-900">Our Vision</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    A world where every business has access to enterprise-grade tools 
                    and insights, empowering them to make smarter decisions, operate 
                    more efficiently, and achieve sustainable growth.
                  </p>
                </motion.div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <value.icon className="text-white text-2xl" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Journey
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                So Far
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-6 rounded-2xl cursor-pointer ${
                      item.milestone
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                        : 'bg-white shadow-lg border border-gray-200'
                    }`}
                  >
                    <div className="text-sm font-semibold mb-2 opacity-80">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className={item.milestone ? 'opacity-90' : 'text-gray-600'}>
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white ${
                    item.milestone ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind CloudFlow's innovation and success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                  <motion.a
                    href={member.social.twitter}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <FaTwitter />
                  </motion.a>
                  <motion.a
                    href={member.social.linkedin}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href={member.social.github}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Customers
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Are Saying
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 1 }}
                  className="text-4xl text-blue-600 mb-6"
                >
                  <FaQuoteLeft />
                </motion.div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
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
                Ready to Join Our Story?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-8 opacity-90"
              >
                We're looking for talented individuals who share our passion for innovation
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
                  View Open Positions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
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
            <Link to="/demo/saas-marketing" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-4 inline-block">
              ← Back to Home
            </Link>
            <p className="text-gray-400">
              © 2024 CloudFlow. Building the future of business management.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;