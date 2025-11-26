import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    desc: 'Understand your needs, goals, and vision through detailed consultation.',
    icon: Search,
  },
  {
    title: 'Design',
    desc: 'Create wireframes, mockups, and prototypes tailored to your brand.',
    icon: Palette,
  },
  {
    title: 'Development',
    desc: 'Build with React, Node, and modern tools for performance and scalability.',
    icon: Code,
  },
  {
    title: 'Launch',
    desc: 'Deploy, test, and optimize for production-ready excellence.',
    icon: Rocket,
  },
];

const Process = () => {
  return (
    <section className="py-16 bg-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-black text-center mb-12"
        >
          My Process
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-luxury p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-accent"
                >
                  <Icon className="w-8 h-8 text-accent" />
                </motion.div>
                <h3 className="text-xl font-semibold text-black mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;