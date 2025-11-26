import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Play, FileText, Image, Video, ExternalLink } from 'lucide-react';

const FounderMedia: React.FC = () => {
  const pressFeatures = [
    {
      title: "How Sarah Chen Built a $100M AI Empire",
      publication: "TechCrunch",
      date: "January 2024",
      category: "Feature Story",
      excerpt: "Deep dive into the journey of building TechVentures Inc. from scratch to a nine-figure business.",
      link: "#"
    },
    {
      title: "The Future of Enterprise AI: Insights from Industry Leaders",
      publication: "Forbes",
      date: "December 2023",
      category: "Expert Opinion",
      excerpt: "Sarah Chen shares her vision for how artificial intelligence will transform business operations.",
      link: "#"
    },
    {
      title: "Women in Tech: Breaking Barriers and Building Empires",
      publication: "Harvard Business Review",
      date: "November 2023",
      category: "Cover Story",
      excerpt: "An inspiring look at female entrepreneurs who are reshaping the technology landscape.",
      link: "#"
    },
    {
      title: "Investment Trends: Where VCs Are Placing Their Bets in 2024",
      publication: "Wall Street Journal",
      date: "October 2023",
      category: "Market Analysis",
      excerpt: "Industry experts, including Sarah Chen, weigh in on the most promising sectors for investment.",
      link: "#"
    }
  ];

  const mediaAppearances = [
    {
      title: "CNBC Tech Titans",
      type: "TV Interview",
      date: "February 2024",
      topic: "The AI Revolution in Enterprise Software",
      duration: "8 minutes"
    },
    {
      title: "TEDx Silicon Valley",
      type: "Conference Talk",
      date: "June 2023",
      topic: "Building Scalable Technology Companies",
      duration: "18 minutes"
    },
    {
      title: "The Tim Ferriss Show",
      type: "Podcast",
      date: "April 2023",
      topic: "Entrepreneurship, AI, and Future Technologies",
      duration: "75 minutes"
    },
    {
      title: "Bloomberg Technology",
      type: "TV Panel",
      date: "March 2023",
      topic: "Women in Venture Capital",
      duration: "12 minutes"
    }
  ];

  const resources = [
    {
      title: "Professional Headshots",
      type: "Images",
      description: "High-resolution photos for press and media use",
      icon: <Image className="w-6 h-6" />,
      action: "Download"
    },
    {
      title: "Company Bio & Fact Sheet",
      type: "Document",
      description: "Comprehensive biography and company information",
      icon: <FileText className="w-6 h-6" />,
      action: "Download PDF"
    },
    {
      title: "Speaking Reel",
      type: "Video",
      description: "Highlights from recent speaking engagements",
      icon: <Video className="w-6 h-6" />,
      action: "Watch Now"
    },
    {
      title: "Press Kit",
      type: "Package",
      description: "Complete media package with all resources",
      icon: <Download className="w-6 h-6" />,
      action: "Download All"
    }
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
              Media & <span className="text-blue-200">Press</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Latest news, press features, and media appearances. 
              Resources for journalists and event organizers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Press Mentions", icon: <FileText className="w-6 h-6" /> },
              { number: "25+", label: "TV Appearances", icon: <Video className="w-6 h-6" /> },
              { number: "50+", label: "Podcast Features", icon: <Play className="w-6 h-6" /> },
              { number: "10M+", label: "Media Reach", icon: <ExternalLink className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-blue-600 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Press Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest articles and stories featuring my work and insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pressFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {feature.category}
                  </span>
                  <span className="text-gray-500 text-sm">{feature.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-xl text-blue-600 mb-4">{feature.publication}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.excerpt}</p>
                <a
                  href={feature.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read Article
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Appearances */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Media Appearances</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Television interviews, podcasts, and conference presentations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mediaAppearances.map((appearance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                    {appearance.type}
                  </span>
                  <span className="text-gray-500 text-sm">{appearance.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{appearance.title}</h3>
                <p className="text-gray-600 mb-3">{appearance.topic}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Play className="w-4 h-4 mr-1" />
                    {appearance.duration}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    Watch Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Media Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download press materials, photos, and other resources for media use
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                  {resource.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Media Inquiries</h2>
            <p className="text-xl leading-relaxed text-blue-100 mb-8">
              For press inquiries, interview requests, or media collaborations, 
              please get in touch. We typically respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/demo/founder/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors justify-center"
              >
                Contact for Media
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="mailto:press@sarahchen.com"
                className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors justify-center"
              >
                Email Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FounderMedia;