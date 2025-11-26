import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface GSAPScrollProgressProps {
  sections?: { id: string; label: string }[];
}

const GSAPScrollProgress: React.FC<GSAPScrollProgressProps> = ({ 
  sections = [] 
}) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Update progress bar on scroll
      ScrollTrigger.create({
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const progress = self.progress * 100;
          setScrollProgress(progress);
          
          if (progressBarRef.current) {
            gsap.to(progressBarRef.current, {
              width: `${progress}%`,
              duration: 0.1,
              ease: "none"
            });
          }
        }
      });

      // Section tracking
      if (sections.length > 0) {
        sections.forEach((section, index) => {
          ScrollTrigger.create({
            trigger: `#${section.id}`,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              setActiveSection(index);
              if (indicatorRef.current) {
                gsap.to(indicatorRef.current, {
                  y: index * 40,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }
            }
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, [sections]);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
      {/* Progress Bar */}
      <div className="relative w-1 h-32 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div
          ref={progressBarRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amber-600 to-yellow-600 rounded-full"
          style={{ height: '0%' }}
        />
      </div>

      {/* Section Indicators */}
      {sections.length > 0 && (
        <div className="relative w-8 h-32">
          <div
            ref={indicatorRef}
            className="absolute w-3 h-3 bg-amber-600 rounded-full shadow-lg transform -translate-x-1/2"
            style={{ left: '50%', top: '0px' }}
          />
          {sections.map((_, index) => (
            <div
              key={index}
              className={`absolute w-2 h-2 rounded-full transform -translate-x-1/2 transition-colors duration-300 ${
                index <= activeSection ? 'bg-blue-400' : 'bg-gray-300'
              }`}
              style={{ 
                left: '50%', 
                top: `${index * 40}px` 
              }}
            />
          ))}
        </div>
      )}

      {/* Scroll Percentage */}
      <div className="text-xs text-gray-600 font-medium mt-4 text-center">
        {Math.round(scrollProgress)}%
      </div>
    </div>
  );
};

export default GSAPScrollProgress;