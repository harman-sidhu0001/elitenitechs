import { memo, useEffect, useRef, useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gsap } from "gsap";
import { useTestimonials } from "../../services/dataService";
import LoadingSpinner from "../ui/LoadingSpinner";

const TestimonialsSection = memo(() => {
  const { testimonials, loading, error } = useTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoRotateRef = useRef<number | null>(null);

  // Calculate 3D carousel positions
  const updateCarousel = (index: number, animate = true) => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    const totalCards = cards.length;
    const angleStep = 360 / totalCards;

    cards.forEach((card, i) => {
      if (!card) return;

      const offset = (i - index + totalCards) % totalCards;
      const angle = offset * angleStep;
      const distance = 450; // Distance from center

      // Calculate 3D position
      const x = Math.sin((angle * Math.PI) / 180) * distance;
      const z = Math.cos((angle * Math.PI) / 180) * distance - distance;
      const rotateY = -angle;

      // Determine if card is in front
      const isFront = offset === 0;
      const scale = isFront ? 1 : 0.7;
      const opacity = isFront ? 1 : offset <= totalCards / 2 ? 0.6 : 0.3;
      const zIndex = isFront ? 10 : Math.round(100 - Math.abs(z));

      if (animate) {
        gsap.to(card, {
          x,
          z,
          rotateY,
          scale,
          opacity,
          duration: 0.8,
          ease: "power2.out",
          zIndex,
        });
      } else {
        gsap.set(card, { x, z, rotateY, scale, opacity, zIndex });
      }
    });
  };

  // Auto-rotate carousel
  useEffect(() => {
    if (loading || error || testimonials.length <= 1) return;

    const startAutoRotate = () => {
      autoRotateRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    };

    startAutoRotate();

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [testimonials.length, loading, error]);

  // Initialize carousel
  useEffect(() => {
    if (loading || error || testimonials.length === 0) return;
    updateCarousel(currentIndex, false);
  }, [loading, error, testimonials.length]);

  // Update on index change
  useEffect(() => {
    if (loading || error || testimonials.length === 0) return;
    updateCarousel(currentIndex, true);
  }, [currentIndex, loading, error, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    // Reset auto-rotate timer
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    // Reset auto-rotate timer
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <LoadingSpinner size="lg" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-red-500">
          <p>Failed to load testimonials</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-500">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience with Elite Nitechs
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative">
          <div
            ref={containerRef}
            className="relative mx-auto"
            style={{
              height: "500px",
              perspective: "1200px",
              perspectiveOrigin: "50% 50%",
            }}
          >
            {/* Carousel Cards */}
            <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  ref={(el) => { cardsRef.current[index] = el; }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    willChange: "transform",
                  }}
                >
                  <div className="w-[90vw] sm:w-[500px] md:w-[600px] max-w-2xl bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                    <FaQuoteLeft className="w-8 h-8 md:w-12 md:h-12 text-primary-500/30 mb-4 md:mb-6 mx-auto" />

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed italic text-center">
                      {testimonial.content}
                    </p>

                    <div className="flex items-center justify-center space-x-3 md:space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-primary-500 object-cover"
                      />
                      <div className="text-left">
                        <h4 className="font-bold text-white text-sm sm:text-base md:text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                        <div className="flex space-x-1 mt-1 md:mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:px-4 md:px-8 pointer-events-none">
            <button
              onClick={handlePrev}
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary-500/20 hover:bg-primary-500/40 border border-primary-500/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary-500/20 hover:bg-primary-500/40 border border-primary-500/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "bg-primary-500 w-8 h-3"
                    : "bg-gray-600 w-3 h-3 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
