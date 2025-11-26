import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { label: 'Projects Completed', value: 50 },
  { label: 'Happy Clients', value: 100 },
  { label: 'Tech Stacks Mastered', value: 10 },
  { label: 'Years Experience', value: 5 },
];

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const increment = value / 50;
        const interval = setInterval(() => {
          setCount((prev) => {
            if (prev >= value) {
              clearInterval(interval);
              return value;
            }
            return prev + increment;
          });
        }, 30);
        return () => clearInterval(interval);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{Math.floor(count)}+ </span>;
};

const Stats = () => {
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
          By the Numbers
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-accent mb-2">
                <Counter value={stat.value} />
              </div>
              <p className="text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;