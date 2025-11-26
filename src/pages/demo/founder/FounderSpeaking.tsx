import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Users, Mic, Award } from 'lucide-react';

const FounderSpeaking: React.FC = () => {
  const upcomingTalks = [
    {
      title: "The Future of AI in Enterprise",
      event: "Tech Innovation Summit 2024",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      audience: "500+ attendees",
      type: "Keynote"
    },
    {
      title: "Building Scalable Tech Companies",
      event: "FounderCon Global",
      date: "April 22, 2024",
      location: "New York, NY",
      audience: "300+ founders",
      type: "Panel Discussion"
    },
    {
      title: "Investment Trends in Deep Tech",
      event: "Venture Capital Forum",
      date: "May 8, 2024",
      location: "Boston, MA",
      audience: "200+ investors",
      type: "Workshop"
    }
  ];

  const pastTalks = [
    {
      title: "From Startup to Unicorn",
      event: "Web Summit 2023",
      date: "November 2023",
      location: "Lisbon, Portugal",
      highlight: "Rated top 5 talks of the conference"
    },
    {
      title: "Women in Tech Leadership",
      event: "Grace Hopper Celebration",
      date: "September 2023",
      location: "Orlando, FL",
      highlight: "1,000+ attendees"
    },
    {
      title: "The AI Revolution",
      event: "TEDx Silicon Valley",
      date: "June 2023",
      location: "Palo Alto, CA",
      highlight: "50K+ online views"
    },
    {
      title: "Scaling Global Teams",
      event: "SaaStr Annual",
      date: "February 2023",
      location: "Phoenix, AZ",
      highlight: "Featured in TechCrunch"
    }
  ];

  const topics = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Practical applications of AI in business and society",
      icon: <Mic className="w-6 h-6" />
    },
    {
      title: "Entrepreneurship & Company Building",
      description: "From ideation to scaling successful ventures",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Venture Capital & Investment",
      description: "Trends and strategies in tech investing",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Leadership & Team Culture",
      description: "Building high-performing teams and organizations",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-600 to-yellow-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Speaking & <span className="text-amber-200">Appearances</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Sharing insights on technology, entrepreneurship, and leadership at 
              conferences and events around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speaking Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Talks Given", icon: <Mic className="w-6 h-6" /> },
              { number: "20+", label: "Countries", icon: <MapPin className="w-6 h-6" /> },
              { number: "100K+", label: "Audience Reached", icon: <Users className="w-6 h-6" /> },
              { number: "15+", label: "Keynote Speeches", icon: <Award className="w-6 h-6" /> }
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

      {/* Upcoming Talks */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Speaking Engagements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join me at these upcoming conferences and events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingTalks.map((talk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {talk.type}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Upcoming
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{talk.title}</h3>
                <p className="text-xl text-blue-600 mb-4">{talk.event}</p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{talk.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{talk.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{talk.audience}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Speaking Topics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Areas where I can share valuable insights and experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8"
              >
                <div className="text-amber-600 mb-4">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{topic.title}</h3>
                <p className="text-gray-600 leading-relaxed">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Talks */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Speaking Engagements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlights from past conferences and events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastTalks.map((talk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{talk.title}</h3>
                <p className="text-blue-600 mb-3">{talk.event}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{talk.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{talk.location}</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-blue-900 text-sm font-medium">{talk.highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-amber-600 to-yellow-700 rounded-2xl p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Book Me for Your Event</h2>
            <p className="text-xl leading-relaxed text-amber-100 mb-8">
              I'm available for keynote speeches, panel discussions, workshops, and corporate events. 
              Let's create an engaging and valuable experience for your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/demo/founder/contact"
                className="inline-flex items-center bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors justify-center"
              >
                Inquire About Speaking
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/demo/founder/media"
                className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors justify-center"
              >
                View Media Kit
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FounderSpeaking;