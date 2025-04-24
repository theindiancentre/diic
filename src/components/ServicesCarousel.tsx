
import React, { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface ServicesCarouselProps {
  services: ServiceItem[];
  className?: string;
}

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ services, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Auto-rotate carousel if not paused
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % services.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused, services.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div 
      className={`relative ${className}`} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Carousel
        className="w-full max-w-5xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
        // Remove the setActiveIndex and activeIndex props as they don't exist on Carousel
      >
        <CarouselContent>
          {services.map((service, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
              <div className="premium-card h-full p-6 flex flex-col">
                <div className={`${service.color} mb-4 p-3 rounded-full w-16 h-16 flex items-center justify-center`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-diic-blue mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
                <Button variant="link" className="mt-4 p-0 flex items-center text-diic-blue hover:text-diic-gold">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center mt-6 gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-diic-gold w-6' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
