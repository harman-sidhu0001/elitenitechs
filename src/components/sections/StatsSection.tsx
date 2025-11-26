import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useStats } from '../../services/dataService';
import { useCounterAnimation } from '../../hooks';

const StatsSection = memo(() => {
  const stats = useStats();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const numberRef = React.useRef<HTMLDivElement>(null);
            const numericValue = parseInt(stat.number.replace(/\D/g, ''));
            
            useCounterAnimation(numberRef as React.RefObject<HTMLDivElement>, numericValue);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex p-4 bg-primary-500 rounded-full mb-4"
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div 
                  ref={numberRef}
                  className="text-3xl md:text-4xl font-bold text-primary-500 mb-2"
                >
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

export default StatsSection;