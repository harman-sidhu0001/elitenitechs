import React, { memo, useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useValueProps } from '../../services/dataService';
import { ANIMATION } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const ValuePropCard = memo(({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iconRef.current || !textRef.current) return;

    // Set initial positions
    gsap.set(iconRef.current, { x: 150, opacity: 0 });
    gsap.set(textRef.current, { x: 150, opacity: 0 });

    // Create ScrollTrigger for this card
    const ctx = gsap.context(() => {
      // Icon animation
      gsap.to(iconRef.current, {
        x: 0,
        opacity: 1,
        duration: ANIMATION.duration.normal,
        ease: ANIMATION.easing.easeOut,
        scrollTrigger: {
          trigger: iconRef.current,
          start: 'top 85%',
          end: 'bottom 65%',
          toggleActions: 'play none none reverse',
          onEnter: () => setIsVisible(true),
        },
        delay: index * 0.4, // Stagger icons - they overlap
      });

      // Text animation - follows icon with delay
      gsap.to(textRef.current, {
        x: 0,
        opacity: 1,
        duration: ANIMATION.duration.normal,
        ease: ANIMATION.easing.easeOut,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        delay: index * 0.4 + 0.2, // Text follows icon with 0.2s delay
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300">
        <div className="flex items-start gap-6">
          {/* Icon Container */}
          <div 
            ref={iconRef}
            className="flex-shrink-0 w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center"
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          {/* Text Content */}
          <div 
            ref={textRef}
            className="flex-1"
          >
            <h3 className="text-xl font-bold mb-4 text-white">
              {title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

ValuePropCard.displayName = 'ValuePropCard';

const WhyChooseEliteSection = memo(() => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const valueProps = useValueProps();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    // Set initial position
    gsap.set(titleRef.current, { y: 50, opacity: 0 });

    // Create ScrollTrigger for section title
    const ctx = gsap.context(() => {
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: ANIMATION.duration.slow,
        ease: ANIMATION.easing.easeOut,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          end: 'bottom 70%',
          toggleActions: 'play none none reverse',
          onEnter: () => setIsTitleVisible(true),
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-opacity duration-700 ${
            isTitleVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-500">
            Why Choose Elite Nitechs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with creative excellence to
            deliver solutions that drive real results
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <ValuePropCard
              key={index}
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

WhyChooseEliteSection.displayName = 'WhyChooseEliteSection';

export default WhyChooseEliteSection;