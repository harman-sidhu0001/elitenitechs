import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const AnimatedButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}: AnimatedButtonProps) => {
  const baseClasses = 'relative overflow-hidden font-semibold rounded-xl transition-all duration-300 transform';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-900 border-2 border-gray-300 hover:border-green-500',
    outline: 'bg-transparent text-amber-600 border-2 border-amber-600 hover:text-white'
  };

  const buttonContent = (
    <>
      {/* Sliding background overlay for outline variant */}
      {variant === 'outline' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600"
          initial={{ x: '-100%' }}
          whileHover={{ x: '0%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      )}
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      
      {/* Hover effect for primary variant */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-700 to-yellow-700"
          initial={{ x: '-100%' }}
          whileHover={{ x: '0%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      )}
      
      {/* Hover effect for secondary variant */}
      {variant === 'secondary' && (
        <motion.div
          className="absolute inset-0 bg-green-50"
          initial={{ x: '-100%' }}
          whileHover={{ x: '0%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      )}
    </>
  );

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={combinedClasses}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full flex items-center justify-center"
        >
          {buttonContent}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default AnimatedButton;