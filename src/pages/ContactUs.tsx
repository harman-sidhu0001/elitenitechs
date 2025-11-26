import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  Check,
  AlertCircle,
  Globe,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "../components/layout";
import Footer from "../components/Footer";
import { AnimatedWhiteDot } from "../common/WhiteDot";

interface FormData {
  name: string;
  email: string;
  company: string;
  project: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      initialX: number;
      initialY: number;
      size: number;
      opacity: number;
      moveX: number;
      moveY: number;
      duration: number;
      delay: number;
      z: number;
    }>
  >([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 150 }, (_, i) => {
      const layer = Math.random();
      const size = Math.random() * 4 + layer * 3;
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
      const moveX = (Math.random() - 0.5) * 50;
      const moveY = (Math.random() - 0.5) * 50;
      const duration = Math.random() * 8 + 4;
      const delay = 0;
      const opacity = 0.2 + layer * 0.6;
      const z = layer * 100;

      return {
        id: i,
        initialX,
        initialY,
        size,
        opacity,
        moveX,
        moveY,
        duration,
        delay,
        z,
      };
    });
    setParticles(newParticles);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
        timeline: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@elitenitechs.com",
      description: "Get a response within 48 hours",
      gradient: "from-primary-500 to-primary-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 80548-75055",
      description: "Mon-Fri 9AM-6PM EST",
      gradient: "from-primary-400 to-primary-500",
    },
  ];

  const services = [
    { icon: Globe, name: "Global Support", description: "Available worldwide" },
    {
      icon: Shield,
      name: "Secure Communication",
      description: "Your data is protected",
    },
    {
      icon: Users,
      name: "Expert Consultation",
      description: "Talk to our specialists",
    },
    {
      icon: Send,
      name: "Quick Response",
      description: "Get replies within hours",
    },
  ];

  const budgetExamples = [
    {
      budget: "$500",
      project: "Landing Page",
      timeline: "1-2 weeks",
      details:
        "Single-page website with contact form, responsive design, and basic SEO",
      gradient: "from-primary-500 to-primary-600",
    },
    {
      budget: "$5,000",
      project: "Business Website",
      timeline: "3-6 weeks",
      details: "Multi-page website with CMS, blog system, and admin panel",
      gradient: "from-primary-400 to-primary-500",
    },
    {
      budget: "$50,000",
      project: "Custom Web Application",
      timeline: "3-6 months",
      details:
        "Tailored software solution with custom features, database design, and API integration",
      gradient: "from-primary-500 to-primary-600",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white overflow-hidden relative pt-20">
        {/* Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary-900/20 via-black to-primary-900/20">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.6), transparent 15%)`,
            }}
          />
          {particles.map((particle) => (
            <AnimatedWhiteDot key={particle.id} particle={particle} />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to transform your digital presence? Let's create something
              extraordinary together.
            </motion.p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${info.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}
                />
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${info.gradient} mb-4`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-lg text-white mb-2">{info.content}</p>
                  <p className="text-sm text-gray-400">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Budget Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Find Your Budget Fit
              </motion.h2>
              <motion.p
                className="text-lg text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Quick overview of what you can get at different budget ranges
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {budgetExamples.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
                  />
                  <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 h-full">
                    <div
                      className={`inline-block px-4 py-2 bg-gradient-to-r ${item.gradient} text-white text-lg font-bold rounded-full mb-4`}
                    >
                      {item.budget}
                    </div>

                    <h3 className="text-xl font-bold mb-2">{item.project}</h3>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-400">
                          Timeline:
                        </span>
                        <span className="text-sm text-white">
                          {item.timeline}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl blur-2xl opacity-30" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6"
                      >
                        <Check className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-300 text-lg">
                        We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                              errors.name
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-700 focus:ring-primary-500"
                            }`}
                            placeholder="Full Name"
                          />
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-2 text-sm text-red-400 flex items-center gap-1"
                            >
                              <AlertCircle className="w-4 h-4" />
                              {errors.name}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                              errors.email
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-700 focus:ring-primary-500"
                            }`}
                            placeholder="user@example.com"
                          />
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-2 text-sm text-red-400 flex items-center gap-1"
                            >
                              <AlertCircle className="w-4 h-4" />
                              {errors.email}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                            placeholder="Eline Nitechs"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Project Type
                          </label>
                          <select
                            name="project"
                            value={formData.project}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                          >
                            <option value="">Select a project type</option>
                            <option value="web-development">Web Development</option>
                            <option value="ecommerce">E-Commerce Website</option>
                            <option value="custom-software">Custom Software</option>
                            <option value="mobile-app">Mobile App</option>
                            <option value="ai-agent">AI Agent</option>
                            <option value="social-media-marketing">Social Media Marketing</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                          >
                            <option value="">Select budget range</option>
                            <option value="<500">Less than $500</option>
                            <option value="500-5k">$500 - $5,000</option>
                            <option value="5k-15k">$5,000 - $15,000</option>
                            <option value="15k-50k">$15,000 - $50,000</option>
                            <option value="50k-100k">$50,000 - $100,000</option>
                            <option value="100k+">$100,000+</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP</option>
                            <option value="1-3months">1-3 months</option>
                            <option value="3-6months">3-6 months</option>
                            <option value="6months+">6+ months</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${
                            errors.message
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-700 focus:ring-primary-500"
                          }`}
                          placeholder="Tell us about your project..."
                        />
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-400 flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.message}
                          </motion.p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Services Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Why Choose Elite Nitechs
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-gray-900/30 backdrop-blur-xl border border-gray-800 rounded-2xl"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex p-3 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full mb-4"
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="font-semibold mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
