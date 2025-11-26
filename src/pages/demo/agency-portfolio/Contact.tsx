import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane,
  FaTwitter, FaLinkedin, FaInstagram, FaUser, FaBuilding, FaProjectDiagram,
  FaCalendar, FaCheckCircle, FaRocket, FaHeadset, FaStar, FaGlobe,
  FaArrowRight, FaDribbble
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const offices = [
    {
      city: 'New York',
      address: '123 Madison Avenue, 15th Floor',
      phone: '+1 (555) 123-4567',
      email: 'nyc@creativestudio.com',
      hours: '9:00 AM - 6:00 PM EST',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600',
      coordinates: { lat: 40.7614, lng: -73.9776 }
    },
    {
      city: 'San Francisco',
      address: '456 Market Street, Suite 800',
      phone: '+1 (555) 987-6543',
      email: 'sf@creativestudio.com',
      hours: '9:00 AM - 6:00 PM PST',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
      coordinates: { lat: 37.7749, lng: -122.4194 }
    },
    {
      city: 'London',
      address: '789 Oxford Street, 3rd Floor',
      phone: '+44 20 7123 4567',
      email: 'london@creativestudio.com',
      hours: '9:00 AM - 6:00 PM GMT',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600',
      coordinates: { lat: 51.5074, lng: -0.1278 }
    }
  ];

  const teamContacts = [
    {
      name: 'Sarah Johnson',
      role: 'Business Development',
      email: 'sarah@creativestudio.com',
      phone: '+1 (555) 234-5678',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      expertise: 'Enterprise Solutions'
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      email: 'michael@creativestudio.com',
      phone: '+1 (555) 345-6789',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      expertise: 'Brand Strategy'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      email: 'emily@creativestudio.com',
      phone: '+1 (555) 456-7890',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461bd600d8?w=150',
      expertise: 'Digital Projects'
    }
  ];

  const projectTypes = [
    'Brand Design',
    'Web Development',
    'Mobile App',
    'Digital Marketing',
    'Photography',
    'Creative Strategy',
    'Other'
  ];

  const budgets = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ];

  const timelines = [
    'ASAP',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 3000);
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
              Get in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to start your next project? We're here to help bring your vision to life
            </p>
            
            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600"
            >
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-purple-600" />
                <span>hello@creativestudio.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-purple-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 text-purple-600" />
                <span>Mon-Fri 9AM-6PM</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Start Your Project
                </h2>
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FaUser className="inline mr-2 text-purple-600" />
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FaEnvelope className="inline mr-2 text-purple-600" />
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FaBuilding className="inline mr-2 text-purple-600" />
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                            placeholder="Acme Corp"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FaPhone className="inline mr-2 text-purple-600" />
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FaProjectDiagram className="inline mr-2 text-purple-600" />
                            Project Type *
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                          >
                            <option value="">Select...</option>
                            {projectTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Budget
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                          >
                            <option value="">Select...</option>
                            {budgets.map(budget => (
                              <option key={budget} value={budget}>{budget}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FaCalendar className="inline mr-2 text-purple-600" />
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                          >
                            <option value="">Select...</option>
                            {timelines.map(timeline => (
                              <option key={timeline} value={timeline}>{timeline}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FaEnvelope className="inline mr-2 text-purple-600" />
                          Project Details *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <FaPaperPlane className="ml-2" />
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <FaCheckCircle className="text-white text-3xl" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Thank You!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        We've received your message and will get back to you within 24 hours.
                      </p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                        <FaEnvelope className="text-purple-600" />
                        <span>hello@creativestudio.com</span>
                        <FaPhone className="text-purple-600 ml-4" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Why Work With Us
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: FaRocket, title: 'Fast Response', description: 'Get a response within 24 hours' },
                    { icon: FaHeadset, title: 'Dedicated Support', description: 'Personal attention to every project' },
                    { icon: FaStar, title: 'Proven Excellence', description: '150+ successful projects delivered' },
                    { icon: FaGlobe, title: 'Global Reach', description: 'Serving clients worldwide' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0"
                      >
                        <item.icon className="text-white text-xl" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Team Contacts */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Direct Contacts
                </h3>
                <div className="space-y-4">
                  {teamContacts.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{member.name}</h4>
                        <p className="text-sm text-purple-600">{member.role}</p>
                        <p className="text-xs text-gray-500">{member.expertise}</p>
                      </div>
                      <div className="text-right">
                        <a href={`mailto:${member.email}`} className="text-sm text-purple-600 hover:text-purple-700 block">
                          {member.email}
                        </a>
                        <a href={`tel:${member.phone}`} className="text-sm text-gray-600 hover:text-gray-700">
                          {member.phone}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
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
                Offices
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our global locations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={office.image} 
                      alt={office.city}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{office.city}</h3>
                    
                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="mr-3 text-purple-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <FaPhone className="mr-3 text-purple-600 flex-shrink-0" />
                        <span className="text-sm">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <FaEnvelope className="mr-3 text-purple-600 flex-shrink-0" />
                        <span className="text-sm">{office.email}</span>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="mr-3 text-purple-600 flex-shrink-0" />
                        <span className="text-sm">{office.hours}</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Get Directions
                      <FaArrowRight className="inline ml-2" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Questions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive branding project could take 2-3 months. We\'ll provide a detailed timeline during our initial consultation.'
              },
              {
                question: 'What is your pricing structure?',
                answer: 'We offer both project-based pricing and monthly retainers. Project costs depend on the scope, deliverables, and timeline. We provide detailed quotes after understanding your specific needs.'
              },
              {
                question: 'Do you work with international clients?',
                answer: 'Absolutely! We work with clients worldwide. Our team is experienced in managing remote collaborations across different time zones and cultures.'
              },
              {
                question: 'How many revisions are included?',
                answer: 'Our standard packages include 2-3 rounds of revisions. We also offer unlimited revision packages for clients who need more flexibility.'
              },
              {
                question: 'What industries do you specialize in?',
                answer: 'We work across various industries including tech, healthcare, finance, retail, and more. Our diverse portfolio allows us to bring fresh perspectives to any sector.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Follow us on social media for updates and inspiration
            </p>
            
            <div className="flex justify-center space-x-6">
              {[
                { icon: FaTwitter, href: '#', label: 'Twitter' },
                { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FaInstagram, href: '#', label: 'Instagram' },
                { icon: FaDribbble, href: '#', label: 'Dribbble' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;