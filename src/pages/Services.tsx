import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO, ErrorBoundary } from '../components/ui';
import { Navbar, Footer } from '../components/layout';
import {
  webDevelopmentServices,
  softwareDevelopmentServices,
  aiAgentServices,
  marketingServices,
} from '../data/services';
import { useProjects } from '../services/dataService';
import { FaArrowRight, FaExternalLinkAlt, FaRocket } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';

// Helper to get icon component from icon name string
const getIconComponent = (iconName: string) => {
  return (FaIcons as any)[iconName] || FaIcons.FaCode;
};

const Services = memo(() => {
  const { projects } = useProjects();

  return (
    <ErrorBoundary>
      <SEO
        title="Our Services"
        description="Comprehensive technology solutions including Web Development, Custom Software (Billing, CRM, ERP), AI Agents (24/7 automation), and Multi-Platform Marketing services."
        keywords="web development services, software development, AI agents, digital marketing, custom software solutions"
      />

      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-900/20 to-black">
            <div className="max-w-7xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                Our <span className="text-primary-500">Services</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
              >
                Comprehensive technology solutions to power your digital transformation
              </motion.p>
            </div>
          </section>

          {/* Web Development Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                      <span className="text-primary-500">Web Development</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mt-2">
                      Fully custom websites with latest technologies
                    </p>
                  </div>
                  <Link
                    to="/projects"
                    className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50"
                  >
                    <span>View Demos</span>
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>

              {/* Web Development Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {webDevelopmentServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-gray-900 to-black border border-primary-500/20 rounded-xl p-6 hover:border-primary-500/50"
                  >
                    <div className="mb-4">
                      {(() => {
                        const IconComponent = getIconComponent(service.icon);
                        return <IconComponent className="w-12 h-12 text-primary-500" />;
                      })()}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary-500/10 text-primary-500 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Project Demos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Featured Website Projects
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-primary-500/20 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-900/20 to-gray-900">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <div className="mb-2">
                          <span className="text-xs text-primary-500 font-semibold">
                            {project.category}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies?.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <Link
                          to={project.demoUrl || '/'}
                          className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors text-sm font-semibold"
                        >
                          View Live Demo
                          <FaExternalLinkAlt className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Software Development Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-primary-500">Software Development</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl">
                  Custom business applications to streamline your operations
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {softwareDevelopmentServices.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-900 to-black border border-primary-500/20 rounded-xl p-8 hover:border-primary-500/50"
                  >
                    <div className="mb-6">
                      {(() => {
                        const IconComponent = getIconComponent(service.icon);
                        return <IconComponent className="w-16 h-16 text-primary-500" />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary-500 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <FaRocket className="w-3 h-3 text-primary-500 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies?.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Agents Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-primary-500">AI Agents</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl">
                  Intelligent automation that works 24/7 for your business
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiAgentServices.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-900 to-black border border-primary-500/20 rounded-xl p-8 hover:border-primary-500/50"
                  >
                    <div className="mb-6">
                      {(() => {
                        const IconComponent = getIconComponent(service.icon);
                        return <IconComponent className="w-16 h-16 text-primary-500" />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary-500 mb-3">Capabilities</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <FaRocket className="w-3 h-3 text-primary-500 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Marketing Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-primary-500">Digital Marketing</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl">
                  Multi-platform campaigns that reach and convert your audience
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {marketingServices.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-900 to-black border border-primary-500/20 rounded-xl p-8 hover:border-primary-500/50"
                  >
                    <div className="mb-6">
                      {(() => {
                        const IconComponent = getIconComponent(service.icon);
                        return <IconComponent className="w-16 h-16 text-primary-500" />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary-500 mb-3">What We Offer</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <FaRocket className="w-3 h-3 text-primary-500 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Platforms</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies?.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our services can help you achieve your goals
                </p>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-black font-semibold rounded-2xl hover:bg-primary-600 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <FaArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
});

Services.displayName = 'Services';

export default Services;
