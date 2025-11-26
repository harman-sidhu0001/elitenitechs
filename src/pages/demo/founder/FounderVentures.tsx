import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, DollarSign, Calendar, ExternalLink, Award } from 'lucide-react';

const FounderVentures: React.FC = () => {
  const ventures = [
    {
      name: "TechVentures Inc.",
      role: "Founder & CEO",
      period: "2020 - Present",
      description: "AI-powered enterprise platform helping Fortune 500 companies automate workflows and optimize operations.",
      status: "Active",
      funding: "$50M Series B",
      team: "150+ employees",
      highlight: "Grown to $100M ARR in 3 years"
    },
    {
      name: "DataFlow Systems",
      role: "Co-founder & CTO",
      period: "2015 - 2020",
      description: "Real-time data analytics platform for financial services, acquired by a major tech conglomerate.",
      status: "Acquired",
      funding: "$25M Series A",
      team: "80 employees",
      highlight: "Acquired for $500M by CloudCorp"
    },
    {
      name: "HealthTech Solutions",
      role: "Angel Investor & Board Member",
      period: "2018 - Present",
      description: "Telemedicine platform connecting patients with healthcare providers globally.",
      status: "Active",
      funding: "$30M Series A",
      team: "60 employees",
      highlight: "2M+ active users worldwide"
    },
    {
      name: "EduTech Innovations",
      role: "Seed Investor & Advisor",
      period: "2019 - Present",
      description: "AI-driven personalized learning platform for K-12 education.",
      status: "Active",
      funding: "$15M Seed",
      team: "40 employees",
      highlight: "500+ schools using platform"
    }
  ];

  const investments = [
    {
      company: "CloudTech AI",
      stage: "Series A",
      sector: "Enterprise AI",
      investment: "$2M",
      status: "Active"
    },
    {
      company: "FinTech Payments",
      stage: "Seed",
      sector: "Financial Technology",
      investment: "$500K",
      status: "3x Return"
    },
    {
      company: "BioTech Research",
      stage: "Series B",
      sector: "Biotechnology",
      investment: "$5M",
      status: "Active"
    },
    {
      company: "Green Energy Solutions",
      stage: "Series A",
      sector: "Clean Technology",
      investment: "$1M",
      status: "2x Return"
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
              My <span className="text-blue-200">Ventures</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Building and investing in companies that are shaping the future of technology 
              and transforming industries worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "4", label: "Companies Founded", icon: <TrendingUp className="w-6 h-6" /> },
              { number: "30+", label: "Investments Made", icon: <DollarSign className="w-6 h-6" /> },
              { number: "$1B+", label: "Total Value Created", icon: <Award className="w-6 h-6" /> },
              { number: "500+", label: "Lives Impacted", icon: <Users className="w-6 h-6" /> }
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

      {/* Ventures Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Founded Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Companies I've built from the ground up, leading them to success and impact
            </p>
          </motion.div>

          <div className="space-y-8">
            {ventures.map((venture, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        venture.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'
                      }`}>
                        {venture.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{venture.name}</h3>
                    <p className="text-blue-100 mb-4">{venture.role}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{venture.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{venture.funding}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{venture.team}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">{venture.description}</p>
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <p className="text-blue-900 font-semibold">{venture.highlight}</p>
                    </div>
                    {venture.status === 'Active' && (
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic investments in promising startups across various technology sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {investments.map((investment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{investment.company}</h3>
                    <p className="text-gray-600">{investment.sector}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    investment.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {investment.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Stage</p>
                    <p className="font-semibold text-gray-900">{investment.stage}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Investment</p>
                    <p className="font-semibold text-gray-900">{investment.investment}</p>
                  </div>
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
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Interested in Collaboration?</h2>
            <p className="text-xl leading-relaxed text-blue-100 mb-8">
              I'm always looking to connect with passionate founders and innovative companies. 
              Let's discuss how we can work together to build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/demo/founder/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors justify-center"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/demo/founder/speaking"
                className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors justify-center"
              >
                Speaking Opportunities
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FounderVentures;