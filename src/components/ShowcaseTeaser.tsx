import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tiers } from '../data/tiers';

const ShowcaseTeaser = () => {
  return (
    <section className="py-16 bg-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-black text-center mb-12"
        >
          What your budget buys
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-premium p-6 rounded-lg border border-gray-300"
            >
              <h3 className="text-2xl font-semibold text-black mb-2">{tier.label}</h3>
              <p className="text-gray-700 mb-4">{tier.summary}</p>
              <ul className="mb-4 space-y-1">
                {tier.examples.map((example, idx) => (
                  <li key={idx} className="text-sm text-gray-500">- {example.name}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="bg-accent text-black px-8 py-3 rounded-md hover:bg-accent2 transition-colors font-semibold"
          >
            Explore all projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseTeaser;