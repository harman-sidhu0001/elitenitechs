import React from 'react';
import { motion } from 'framer-motion';
import type { AnimatedButtonProps } from '../../types';

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-primary-500 text-black hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/25',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-black',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;