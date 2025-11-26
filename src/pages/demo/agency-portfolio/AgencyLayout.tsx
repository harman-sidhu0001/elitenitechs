import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navigation from './Navigation';

const AgencyLayout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 text-gray-900 overflow-hidden">
      {/* Mouse Follow Gradient */}
      <div 
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-10 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 30%, transparent 70%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          transition: 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)'
        }}
      />

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
            style={{
              background: `linear-gradient(135deg, ${i % 2 === 0 ? 'rgba(139, 92, 246, 0.3)' : 'rgba(59, 130, 246, 0.3)'} 0%, transparent 70%)`,
              left: `${i * 18}%`,
              top: `${i * 15}%`,
            }}
            animate={{
              x: [0, 150 - i * 25, 0],
              y: [0, -100 + i * 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.23, 1, 0.320, 1]
          }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              y: [0, -100 - Math.random() * 200],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AgencyLayout;