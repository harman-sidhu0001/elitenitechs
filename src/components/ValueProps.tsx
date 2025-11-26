import { motion } from "framer-motion";
import { Zap, Eye, CheckCircle } from "lucide-react";

const cards = [
  {
    title: "Performance First",
    desc: "Lighthouse 95+, code-split, image optimizations.",
    icon: Zap,
  },
  {
    title: "Crafted UX",
    desc: "Micro-interactions, smooth scroll, meaningful motion.",
    icon: Eye,
  },
  {
    title: "Production Ready",
    desc: "CI/CD, env-safe configs, analytics, a11y.",
    icon: CheckCircle,
  },
];

const ValueProps = () => {
  return (
    <section className="py-16 bg-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-luxury p-6 rounded-lg border border-gray-300 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-700">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
