import { motion } from "framer-motion";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Node.js, Next.js, MongoDB, Express, and SQL for full-stack development.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary: $500 sites in 1-2 weeks, $5,000 in 4-6 weeks, $50,000 in 3-6 months.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, I offer maintenance packages and can provide support after launch.",
  },
  {
    question: "What's your design process?",
    answer:
      "I follow a collaborative process: discovery, design, development, and launch with regular updates.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 bg-premium">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-black text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-luxury border border-gray-300 rounded-lg p-4"
            >
              <summary className="text-black font-semibold cursor-pointer hover:text-accent transition-colors">
                {faq.question}
              </summary>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
