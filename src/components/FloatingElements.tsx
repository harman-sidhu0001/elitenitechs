import { motion } from 'framer-motion';
import { Code, Zap, Star } from 'lucide-react';

const elements = [
  { icon: Code, x: 10, y: 20, delay: 0 },
  { icon: Zap, x: 80, y: 30, delay: 1 },
  { icon: Star, x: 20, y: 70, delay: 2 },
  { icon: Code, x: 90, y: 80, delay: 0.5 },
];

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((el, index) => {
        const Icon = el.icon;
        return (
          <motion.div
            key={index}
            className="absolute opacity-20"
            style={{ left: `${el.x}%`, top: `${el.y}%` }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: el.delay,
              ease: 'easeInOut',
            }}
          >
            <Icon className="w-8 h-8 text-accent" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingElements;