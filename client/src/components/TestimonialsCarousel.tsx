import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(100);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlideWidth(33.333); // 3 per view on large screens
      } else if (window.innerWidth >= 768) {
        setSlideWidth(50); // 2 per view on medium screens
      } else {
        setSlideWidth(100); // 1 per view on small screens
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToSlide = (index: number) => {
    let maxIndex = TESTIMONIALS.length - 1;
    
    if (slideWidth === 50) {
      maxIndex = Math.max(0, TESTIMONIALS.length - 2); // Adjust for 2 per view
    } else if (slideWidth === 33.333) {
      maxIndex = Math.max(0, TESTIMONIALS.length - 3); // Adjust for 3 per view
    }
    
    if (index < 0) {
      index = 0;
    } else if (index > maxIndex) {
      index = maxIndex;
    }
    
    setCurrentIndex(index);
  };

  const getColorClass = (colorName: string, isText = true) => {
    const prefix = isText ? 'text' : 'bg';
    switch (colorName) {
      case 'primary':
        return `${prefix}-primary`;
      case 'secondary':
        return `${prefix}-secondary`;
      case 'accent':
        return `${prefix}-accent`;
      default:
        return `${prefix}-primary`;
    }
  };

  return (
    <section id="testimonials" className="py-20 section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold text-gradient inline">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Hear from entrepreneurs and dreamers who trusted NovaCode to bring their vision to life.
          </p>
        </div>
        
        <div className="relative overflow-hidden" id="testimonials-container">
          <div 
            ref={sliderRef} 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4"
              >
                <div className="glass-card rounded-xl p-8 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.imageUrl} 
                          alt={`${testimonial.name} portrait`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-space font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-foreground/60">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className={`${getColorClass(testimonial.color)}`}>
                      <Quote className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-foreground/80">
                    "{testimonial.quote}"
                  </p>
                  <div className={`mt-4 ${getColorClass(testimonial.color)}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 inline-block" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8" id="testimonial-dots">
            {TESTIMONIALS.map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-foreground/30'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => goToSlide(currentIndex - 1)}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={() => goToSlide(currentIndex + 1)}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
