import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, User } from 'lucide-react';

const FounderContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["hello@sarahchen.com", "press@sarahchen.com"],
      description: "For general inquiries and media requests"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567"],
      description: "Available for urgent matters"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["San Francisco, CA", "Palo Alto, CA"],
      description: "Primary locations for meetings"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      details: ["24-48 hours", "Media inquiries: 12 hours"],
      description: "Typical response times"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'speaking', label: 'Speaking Engagement' },
    { value: 'investment', label: 'Investment Opportunity' },
    { value: 'media', label: 'Media Request' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-blue-200">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              I'm always interested in connecting with fellow entrepreneurs, 
              investors, and organizations working on innovative projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send a Message</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Inquiry Type *
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Connect on Social Media</h2>
            <p className="text-xl leading-relaxed text-blue-100 mb-8">
              Follow my professional journey and stay updated with the latest insights 
              on technology, entrepreneurship, and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "LinkedIn", url: "#" },
                { name: "Twitter", url: "#" },
                { name: "Instagram", url: "#" },
                { name: "YouTube", url: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Quick Links</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/demo/founder/about"
                className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors group"
              >
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">About Me</h4>
                <p className="text-gray-600 text-sm">Learn more about my background and expertise</p>
              </a>
              <a
                href="/demo/founder/ventures"
                className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors group"
              >
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">My Ventures</h4>
                <p className="text-gray-600 text-sm">Explore companies I've founded and invested in</p>
              </a>
              <a
                href="/demo/founder/speaking"
                className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors group"
              >
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Speaking</h4>
                <p className="text-gray-600 text-sm">Book me for your next event or conference</p>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FounderContact;