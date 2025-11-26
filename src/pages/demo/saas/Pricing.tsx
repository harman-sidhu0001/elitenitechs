import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaCheckCircle, FaArrowRight, FaPlay,
  FaRocket
} from 'react-icons/fa';
import { useState } from 'react';


const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      id: 1,
      name: 'Starter',
      description: 'Perfect for small teams and startups',
      monthlyPrice: 29,
      yearlyPrice: 290,
      icon: '🚀',
      features: [
        'Up to 10 users',
        '10GB secure storage',
        'Basic analytics dashboard',
        'Email support (48h response)',
        'Standard API access',
        'Mobile app access',
        'Community support'
      ],
      highlighted: false,
      color: 'from-gray-600 to-gray-800',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      id: 2,
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 79,
      yearlyPrice: 790,
      icon: '⚡',
      features: [
        'Up to 50 users',
        '100GB secure storage',
        'Advanced analytics & insights',
        'Priority email support (24h)',
        'Advanced API with webhooks',
        'Custom integrations',
        'Team collaboration tools',
        'Advanced security features',
        'Monthly performance reports'
      ],
      highlighted: true,
      color: 'from-blue-600 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50'
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      icon: '🏆',
      features: [
        'Unlimited users',
        'Unlimited secure storage',
        'Custom analytics & BI tools',
        '24/7 dedicated phone support',
        'White-label API access',
        'Custom development support',
        'Advanced collaboration suite',
        'Enterprise security & compliance',
        'Custom SLA agreements',
        'Dedicated account manager',
        'On-premise deployment option',
        'Custom training sessions'
      ],
      highlighted: false,
      color: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate any differences.',
      category: 'billing'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and wire transfers for enterprise accounts. All payments are processed securely.',
      category: 'billing'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start your trial.',
      category: 'trial'
    },
    {
      question: 'How does billing work?',
      answer: 'Monthly plans are billed each month, while yearly plans offer 20% savings and are billed annually. You can cancel anytime.',
      category: 'billing'
    },
    {
      question: 'What kind of support do I get?',
      answer: 'Support varies by plan: Starter gets community support, Professional gets priority email support, and Enterprise gets 24/7 dedicated support.',
      category: 'support'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Absolutely! You can cancel your subscription at any time with no cancellation fees. Your access continues until the end of your billing period.',
      category: 'billing'
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-80 h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-10 blur-3xl"
            animate={{
              x: [0, 120, 0],
              y: [0, -60, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 18 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${i * 15}%`,
              top: `${i * 12}%`,
            }}
          />
        ))}
      </div>



      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Simple, Transparent
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-300% animate-gradient"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Pricing Plans
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Choose the perfect plan for your business needs
            </p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center bg-white rounded-2xl p-1 shadow-lg border border-gray-200"
            >
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform -translate-y-1'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform -translate-y-1'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                {billingCycle === 'monthly' && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                  >
                    Save 20%
                  </motion.span>
                )}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -15, 
                  scale: plan.highlighted ? 1.05 : 1.02,
                }}
                onHoverStart={() => setHoveredPlan(plan.id)}
                onHoverEnd={() => setHoveredPlan(null)}
                className={`relative group ${
                  plan.highlighted 
                    ? 'transform scale-105 z-10' 
                    : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.highlighted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </motion.div>
                )}

                <div className={`relative bg-gradient-to-br ${plan.bgGradient} rounded-3xl p-8 border-2 transition-all duration-300 ${
                  plan.highlighted 
                    ? 'border-blue-600 shadow-2xl' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-xl'
                }`}>
                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredPlan === plan.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Plan Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`w-20 h-20 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6 text-4xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    {plan.icon}
                  </motion.div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-900 transition-colors duration-300">
                    {plan.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-green-600 font-semibold text-sm"
                      >
                        Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} per year
                      </motion.div>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (i * 0.05) }}
                        className="flex items-start space-x-3"
                      >
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    {plan.highlighted ? (
                      <span className="flex items-center justify-center">
                        <FaRocket className="mr-2" />
                        Get Started Now
                      </span>
                    ) : (
                      'Get Started'
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compare All Features
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Side by Side
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              See exactly what you get with each plan
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  {plans.map(plan => (
                    <th key={plan.id} className="text-center p-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl text-white font-bold`}>
                        {plan.icon}
                      </div>
                      <div className="font-semibold mt-2">{plan.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Users', starter: '10', professional: '50', enterprise: 'Unlimited' },
                  { feature: 'Storage', starter: '10GB', professional: '100GB', enterprise: 'Unlimited' },
                  { feature: 'Support', starter: 'Community', professional: 'Priority Email', enterprise: '24/7 Dedicated' },
                  { feature: 'API Access', starter: 'Standard', professional: 'Advanced', enterprise: 'White-label' },
                  { feature: 'Security', starter: 'Basic', professional: 'Advanced', enterprise: 'Enterprise' }
                ].map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="text-center p-4">{row.starter}</td>
                    <td className="text-center p-4 bg-blue-50 font-semibold">{row.professional}</td>
                    <td className="text-center p-4">{row.enterprise}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <h3 className="text-lg font-semibold mb-3 text-blue-600">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
                    {faq.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 bg-white/10 rounded-full"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                  }}
                  transition={{
                    duration: 15 + i * 2,
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
            
            <div className="relative z-10 px-12 py-16 text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Ready to Get Started?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-8 opacity-90"
              >
                Join thousands of businesses already using CloudFlow
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
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center"
                >
                  <FaPlay className="mr-3" />
                  Start Free Trial
                </motion.button>
                <Link
                  to="/demo/saas-marketing/contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Talk to Sales
                  <FaArrowRight className="ml-3" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/projects/saas-marketing" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
              ← Back to Project Details
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;