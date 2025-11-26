import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaTimes } from 'react-icons/fa';

interface GSAPModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const GSAPModal: React.FC<GSAPModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md'
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  useEffect(() => {
    if (!modalRef.current) return;

    const ctx = gsap.context(() => {
      if (isOpen) {
        // Show modal
        gsap.set(overlayRef.current, { opacity: 0 });
        gsap.set(contentRef.current, { 
          scale: 0.8, 
          opacity: 0, 
          rotationX: -15 
        });

        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });

        gsap.to(contentRef.current, {
          scale: 1,
          opacity: 1,
          rotationX: 0,
          duration: 0.4,
          delay: 0.1,
          ease: "back.out(1.7)"
        });

        // Prevent body scroll
        document.body.style.overflow = 'hidden';
      } else {
        // Hide modal
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        });

        gsap.to(contentRef.current, {
          scale: 0.8,
          opacity: 0,
          rotationX: 15,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            document.body.style.overflow = 'unset';
          }
        });
      }
    }, modalRef);

    return () => ctx.revert();
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(contentRef.current, {
      scale: 0.9,
      rotation: 5,
      duration: 0.1,
      ease: "power2.in",
      onComplete: () => {
        onClose();
      }
    });
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleOverlayClick}
      />

      {/* Modal Content */}
      <div
        ref={contentRef}
        className={`relative bg-white rounded-2xl shadow-2xl w-full ${sizeClasses[size]} transform-gpu`}
        style={{ perspective: '1000px' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <FaTimes className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GSAPModal;