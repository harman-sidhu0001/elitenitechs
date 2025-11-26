import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Award, BookOpen } from 'lucide-react';

const FounderAbout: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-amber-50">
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
              About <span className="text-blue-200">Sarah Chen</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Visionary entrepreneur, investor, and thought leader passionate about 
              building technology that transforms industries and improves lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Sarah Chen
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  With over 15 years of experience in technology and entrepreneurship, 
                  I've founded and scaled multiple companies from startup to successful exits. 
                  My focus is on leveraging artificial intelligence and machine learning to solve 
                  complex business challenges.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">My Journey</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">2020 - Present</p>
                      <p className="text-gray-600">Founder & CEO, TechVentures Inc.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">2015 - 2020</p>
                      <p className="text-gray-600">Co-founder, DataFlow Systems (Acquired 2020)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">2010 - 2015</p>
                      <p className="text-gray-600">Senior Engineer, CloudTech Solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Stanford University</p>
                      <p className="text-gray-600">MBA, Graduate School of Business</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BookOpen className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">MIT</p>
                      <p className="text-gray-600">BS, Computer Science & Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge across multiple domains of technology and business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Artificial Intelligence",
                description: "Deep expertise in machine learning, neural networks, and AI-driven product development"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Venture Capital",
                description: "Active investor with portfolio of 30+ startups across various technology sectors"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Product Strategy",
                description: "Proven track record of building and scaling products from concept to market leadership"
              }
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 text-center"
              >
                <div className="text-amber-600 mb-4 flex justify-center">
                  {expertise.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{expertise.title}</h3>
                <p className="text-gray-600 leading-relaxed">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-amber-600 to-yellow-700 rounded-2xl p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
            <p className="text-xl leading-relaxed text-amber-100">
              "Technology should serve humanity, not the other way around. I believe in building 
              companies that not only create value but also make a positive impact on society. 
              Every venture I undertake is guided by principles of ethical innovation, 
              sustainable growth, and inclusive progress."
            </p>
            <div className="mt-8">
              <a 
                href="/demo/founder/ventures"
                className="inline-flex items-center bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors"
              >
                View My Ventures
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FounderAbout;