import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface GSAPLoadingProps {
  onComplete?: () => void;
}

const GSAPLoading: React.FC<GSAPLoadingProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      if (logoRef.current) {
        gsap.fromTo(logoRef.current,
          {
            scale: 0,
            rotation: -180,
            opacity: 0
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)"
          }
        );
      }

      // Text animation
      if (textRef.current) {
        gsap.fromTo(textRef.current,
          {
            y: 30,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.5,
            ease: "power3.out"
          }
        );
      }

      // Progress bar animation
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          width: '100%',
          duration: 2,
          delay: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            // Fade out loading screen
            gsap.to(containerRef.current, {
              opacity: 0,
              duration: 0.5,
              ease: "power2.in",
              onComplete: () => {
                if (onComplete) onComplete();
              }
            });
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-br from-amber-600 to-yellow-700 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo */}
        <div
          ref={logoRef}
          className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 mx-auto"
        >
          <span className="text-2xl font-bold text-amber-600">F</span>
        </div>

        {/* Loading Text */}
        <div
          ref={textRef}
          className="text-white text-xl font-medium mb-8"
        >
          Loading Amazing Experience
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-white rounded-full"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default GSAPLoading;