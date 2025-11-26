import React from 'react';
import { motion } from 'framer-motion';

const WhiteDot = ({ className = "", size = "w-2 h-2", style = {} }: { className?: string; size?: string; style?: React.CSSProperties }) => {
  return (
    <div 
      className={`bg-white rounded-full ${size} ${className}`}
      style={{
        ...style,
        backgroundColor: 'white',
      }}
      aria-hidden="true"
    />
  );
};

// EnhancedHome specific animated white dot component
interface AnimatedWhiteDotProps {
  particle: {
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
  };
}

const AnimatedWhiteDot: React.FC<AnimatedWhiteDotProps> = ({ particle }) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${particle.initialX}%`,
        top: `${particle.initialY}%`,
        zIndex: Math.floor(particle.z),
      }}
      initial={{
        opacity: particle.opacity,
        scale: 1,
      }}
      animate={{
        x: [0, particle.moveX, -particle.moveX, 0],
        y: [0, particle.moveY, -particle.moveY, 0],
      }}
      transition={{
        duration: particle.duration,
        delay: particle.delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <WhiteDot 
        size={`${particle.size}px`}
        className="block"
        style={{
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          opacity: particle.opacity,
          backgroundColor: 'white',
        }}
      />
    </motion.div>
  );
};

export default WhiteDot;
export { AnimatedWhiteDot };