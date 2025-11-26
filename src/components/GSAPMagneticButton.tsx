import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface GSAPMagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const GSAPMagneticButton: React.FC<GSAPMagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  disabled = false
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (disabled) return;

      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      if (disabled) return;
      setIsHovered(true);
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    const handleMouseLeave = () => {
      if (disabled) return;
      setIsHovered(false);
      gsap.to(button, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "elastic.out(1, 0.3)"
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [disabled]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden transition-all duration-300
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
        ${className}
      `}
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Magnetic indicator */}
      {isHovered && (
        <span className="absolute inset-0 border-2 border-white/30 rounded-lg animate-pulse"></span>
      )}
    </button>
  );
};

export default GSAPMagneticButton;